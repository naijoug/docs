#!/usr/bin/env python3
"""Small proof checker for AI-assisted markdown changes.

It is intentionally conservative and stdlib-only: run it before publishing a
small docs change to catch missing frontmatter, local broken markdown links, and
accidental absolute user paths.
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

LINK_RE = re.compile(r"(?<!!)\[[^\]\n]+\]\(([^)\n]+)\)")
IMAGE_RE = re.compile(r"!\[[^\]\n]*\]\(([^)\n]+)\)")
INCLUDE_RE = re.compile(r"<!--\s*@include:\s+([^\s]+)")
FRONTMATTER_RE = re.compile(r"\A---\n(.*?)\n---\n", re.DOTALL)
TITLE_RE = re.compile(r"^title:\s*\S+", re.MULTILINE)
FORBIDDEN_ABSOLUTE_RE = re.compile(r"/(Users|home)/[^\s)`]+")
PATH_ALIASES = {
    "@leetcode": Path("documents/leetcode"),
}
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


def collect_markdown_files(target_args: Iterable[str], root: Path) -> tuple[list[Path], list[Path]]:
    files: list[Path] = []
    missing: list[Path] = []
    for target_arg in target_args:
        target = Path(target_arg)
        if not target.is_absolute():
            target = root / target
        resolved = target.resolve()
        if not resolved.exists():
            missing.append(target)
            continue
        files.extend(iter_markdown_files(resolved))
    return sorted(set(files)), missing


def collect_changed_markdown_files(base_ref: str, root: Path) -> tuple[list[Path], str | None]:
    """Return tracked and untracked markdown files changed since a git ref."""
    changed_result = subprocess.run(
        ["git", "-C", str(root), "diff", "--name-only", "--diff-filter=ACMRT", base_ref, "--"],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if changed_result.returncode != 0:
        detail = (
            changed_result.stderr.strip()
            or changed_result.stdout.strip()
            or f"git diff exited {changed_result.returncode}"
        )
        return [], detail

    untracked_result = subprocess.run(
        ["git", "-C", str(root), "ls-files", "--others", "--exclude-standard"],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if untracked_result.returncode != 0:
        detail = (
            untracked_result.stderr.strip()
            or untracked_result.stdout.strip()
            or f"git ls-files exited {untracked_result.returncode}"
        )
        return [], detail

    files: list[Path] = []
    for line in [*changed_result.stdout.splitlines(), *untracked_result.stdout.splitlines()]:
        rel = line.strip()
        if not rel or Path(rel).suffix.lower() != ".md":
            continue
        path = (root / rel).resolve()
        if path.is_file():
            files.append(path)
    return sorted(set(files)), None


def strip_code_fences(text: str) -> str:
    without_fences = re.sub(r"```.*?```", "", text, flags=re.DOTALL)
    return re.sub(r"`[^`\n]+`", "", without_fences)


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
    return any(path.is_file() for path in candidates)


def resolve_include_path(raw: str, source: Path, root: Path) -> Path:
    include = raw.strip().split("#", 1)[0]
    for alias, replacement in PATH_ALIASES.items():
        if include == alias:
            return root / replacement
        if include.startswith(f"{alias}/"):
            return root / replacement / include[len(alias) + 1 :]

    include_path = Path(include)
    if include_path.is_absolute():
        return include_path
    return source.parent / include_path


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

    for raw in IMAGE_RE.findall(body):
        link = normalize_link(raw)
        if should_skip_link(link):
            continue
        if not local_link_exists(path, link, root):
            issues.append(Issue(path, f"broken local image `{raw}`"))

    for raw in INCLUDE_RE.findall(body):
        include_path = resolve_include_path(raw, path, root)
        if not include_path.is_file():
            issues.append(Issue(path, f"broken include `{raw}`"))

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
    parser.add_argument(
        "--changed-from",
        metavar="GIT_REF",
        help="Check markdown files changed since GIT_REF instead of explicit targets.",
    )
    args = parser.parse_args()

    root = args.root.resolve()
    if args.changed_from:
        unique_files, git_error = collect_changed_markdown_files(args.changed_from, root)
        missing_targets = []
        if git_error:
            print(f"markdown proof failed: cannot collect changed files from {args.changed_from}")
            print(f"- {git_error}")
            return 2
    else:
        unique_files, missing_targets = collect_markdown_files(args.targets, root)
    if missing_targets:
        print(f"markdown proof failed: {len(missing_targets)} target(s) not found")
        for target in missing_targets:
            try:
                rel = target.relative_to(root)
            except ValueError:
                rel = target
            print(f"- {rel}: target not found")
        return 2

    if not unique_files:
        if args.changed_from:
            print(f"markdown proof failed: no markdown files changed since {args.changed_from}")
        else:
            print("markdown proof failed: no markdown files matched the requested target(s)")
        return 2

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
