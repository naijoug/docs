#!/usr/bin/env python3
"""Small proof checker for AI-assisted markdown changes.

It is intentionally conservative and stdlib-only: run it before publishing a
small docs change to catch missing frontmatter, local broken markdown links, and
accidental absolute user paths.
"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

LINK_RE = re.compile(r"(?<!!)\[[^\]\n]+\]\(([^)\n]+)\)")
FRONTMATTER_RE = re.compile(r"\A---\n(.*?)\n---\n", re.DOTALL)
TITLE_RE = re.compile(r"^title:\s*\S+", re.MULTILINE)
FORBIDDEN_ABSOLUTE_RE = re.compile(r"/(Users|home)/[^\s)`]+")
EXTERNAL_SCHEMES = (
    "http://",
    "https://",
    "mailto:",
    "tel:",
    "ftp://",
)


@dataclass(frozen=True)
class Issue:
    path: Path
    message: str

    def render(self, root: Path) -> str:
        try:
            rel = self.path.relative_to(root)
        except ValueError:
            rel = self.path
        return f"{rel}: {self.message}"


def iter_markdown_files(target: Path) -> Iterable[Path]:
    if target.is_file():
        if target.suffix.lower() == ".md":
            yield target
        return

    for path in sorted(target.rglob("*.md")):
        parts = set(path.parts)
        if ".git" in parts or "node_modules" in parts or ".vuepress" in parts:
            continue
        yield path


def strip_code_fences(text: str) -> str:
    return re.sub(r"```.*?```", "", text, flags=re.DOTALL)


def normalize_link(raw: str) -> str:
    link = raw.strip()
    if " " in link and not link.startswith("<"):
        # Drop optional markdown title: [x](path "title")
        link = link.split(" ", 1)[0]
    if link.startswith("<") and link.endswith(">"):
        link = link[1:-1]
    return link.split("#", 1)[0]


def should_skip_link(link: str) -> bool:
    return (
        not link
        or link.startswith("#")
        or link.startswith(EXTERNAL_SCHEMES)
        or link.startswith("@")
        or link.startswith("data:")
        or link.startswith("javascript:")
    )


def local_link_exists(source: Path, link: str, root: Path) -> bool:
    if link.startswith("/"):
        candidate = root / link.lstrip("/")
    else:
        candidate = source.parent / link

    candidates = [candidate]
    if candidate.suffix == "":
        candidates.extend([
            candidate.with_suffix(".md"),
            candidate / "README.md",
            candidate / "index.md",
        ])
    return any(path.exists() for path in candidates)


def check_file(path: Path, root: Path) -> list[Issue]:
    text = path.read_text(encoding="utf-8")
    issues: list[Issue] = []

    frontmatter = FRONTMATTER_RE.search(text)
    if not frontmatter:
        issues.append(Issue(path, "missing YAML frontmatter"))
    elif not TITLE_RE.search(frontmatter.group(1)):
        issues.append(Issue(path, "frontmatter missing title"))

    for match in FORBIDDEN_ABSOLUTE_RE.finditer(text):
        issues.append(Issue(path, f"contains absolute user path `{match.group(0)}`"))

    body = strip_code_fences(text)
    for raw in LINK_RE.findall(body):
        link = normalize_link(raw)
        if should_skip_link(link):
            continue
        if not local_link_exists(path, link, root):
            issues.append(Issue(path, f"broken local link `{raw}`"))

    return issues


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Check markdown proof basics: frontmatter title, local links, and absolute user paths.",
    )
    parser.add_argument(
        "targets",
        nargs="*",
        default=["documents/trending/ai"],
        help="Markdown files or directories to check, relative to --root unless absolute.",
    )
    parser.add_argument(
        "--root",
        default=Path(__file__).resolve().parents[1],
        type=Path,
        help="Docs repository root. Defaults to the parent of scripts/.",
    )
    args = parser.parse_args()

    root = args.root.resolve()
    files: list[Path] = []
    for target_arg in args.targets:
        target = Path(target_arg)
        if not target.is_absolute():
            target = root / target
        files.extend(iter_markdown_files(target.resolve()))

    unique_files = sorted(set(files))
    issues: list[Issue] = []
    for file_path in unique_files:
        issues.extend(check_file(file_path, root))

    if issues:
        print(f"markdown proof failed: {len(issues)} issue(s) in {len(unique_files)} file(s)")
        for issue in issues:
            print(f"- {issue.render(root)}")
        return 1

    print(f"markdown proof ok: checked {len(unique_files)} file(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
