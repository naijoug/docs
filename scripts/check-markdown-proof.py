#!/usr/bin/env python3
"""Small proof checker for AI-assisted markdown changes.

It is intentionally conservative and stdlib-only: run it before publishing a
small docs change to catch missing frontmatter, local broken markdown links, and
accidental absolute user paths.
"""

from __future__ import annotations

import argparse
import fnmatch
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

LINK_RE = re.compile(r"(?<!!)\[[^\]\n]+\]\(([^)\n]+)\)")
IMAGE_RE = re.compile(r"!\[[^\]\n]*\]\(([^)\n]+)\)")
REF_LINK_RE = re.compile(r"(?<!!)\[([^\]\n]+)\]\[([^\]\n]*)\]")
REF_DEF_RE = re.compile(r"^ {0,3}\[([^\]\n]+)\]:\s+(\S+)", re.MULTILINE)
INCLUDE_RE = re.compile(r"<!--\s*@include:\s+([^\s]+)")
FRONTMATTER_RE = re.compile(r"\A---\n(.*?)\n---\n", re.DOTALL)
TITLE_RE = re.compile(r"^title:\s*\S+", re.MULTILINE)
FORBIDDEN_ABSOLUTE_RE = re.compile(r"(?<![A-Za-z0-9.:_-])/(Users|home)/[^\s)`]+")
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
    line: int | None = None

    def render(self, root: Path) -> str:
        try:
            rel = self.path.relative_to(root)
        except ValueError:
            rel = self.path
        location = f"{rel}:{self.line}" if self.line is not None else str(rel)
        return f"{location}: {self.message}"


def line_number_at(text: str, offset: int) -> int:
    """Return the 1-based line number for a character offset."""
    return text.count("\n", 0, offset) + 1


def issue_at(path: Path, text: str, offset: int, message: str) -> Issue:
    return Issue(path, message, line_number_at(text, offset))


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


def relative_posix(path: Path, root: Path) -> str:
    """Return a root-relative POSIX path when possible for stable matching."""
    try:
        rel = path.relative_to(root)
    except ValueError:
        rel = path
    return rel.as_posix()


def matches_exclude(path: Path, root: Path, patterns: Iterable[str]) -> bool:
    rel = relative_posix(path, root)
    name = path.name
    for pattern in patterns:
        normalized = pattern.strip().replace("\\", "/")
        if not normalized:
            continue
        if fnmatch.fnmatch(rel, normalized) or fnmatch.fnmatch(name, normalized):
            return True
    return False


def apply_excludes(files: Iterable[Path], root: Path, patterns: Iterable[str]) -> list[Path]:
    return [path for path in files if not matches_exclude(path, root, patterns)]


def render_file_list(files: Iterable[Path], root: Path) -> list[str]:
    """Return stable root-relative POSIX paths for human-readable proof output."""
    return [relative_posix(path, root) for path in sorted(files)]


def is_inside_root(path: Path, root: Path) -> bool:
    """Return whether path resolves inside the docs repository root."""
    try:
        path.resolve().relative_to(root.resolve())
    except ValueError:
        return False
    return True


def mask_match_preserving_lines(match: re.Match[str]) -> str:
    """Mask ignored markdown spans while preserving offsets and line numbers."""
    return "".join("\n" if char == "\n" else " " for char in match.group(0))


def strip_code_fences(text: str) -> str:
    without_fences = re.sub(r"```.*?```", mask_match_preserving_lines, text, flags=re.DOTALL)
    return re.sub(r"`[^`\n]+`", mask_match_preserving_lines, without_fences)


def normalize_link(raw: str) -> str:
    link = raw.strip()
    if " " in link and not link.startswith("<"):
        # Drop optional markdown title: [x](path "title")
        link = link.split(" ", 1)[0]
    if link.startswith("<") and link.endswith(">"):
        link = link[1:-1]
    return link.split("#", 1)[0]


def normalize_ref_label(raw: str) -> str:
    """Normalize markdown reference labels for case-insensitive matching."""
    return " ".join(raw.strip().lower().split())


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
    return any(is_inside_root(path, root) and path.is_file() for path in candidates)


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
        issues.append(issue_at(path, text, match.start(), f"contains absolute user path `{match.group(0)}`"))

    body = strip_code_fences(text)
    for match in LINK_RE.finditer(body):
        raw = match.group(1)
        link = normalize_link(raw)
        if should_skip_link(link):
            continue
        if not local_link_exists(path, link, root):
            issues.append(issue_at(path, text, match.start(1), f"broken local link `{raw}`"))

    for match in IMAGE_RE.finditer(body):
        raw = match.group(1)
        link = normalize_link(raw)
        if should_skip_link(link):
            continue
        if not local_link_exists(path, link, root):
            issues.append(issue_at(path, text, match.start(1), f"broken local image `{raw}`"))

    ref_defs: dict[str, str] = {}
    ref_def_sources: dict[str, str] = {}
    for match in REF_DEF_RE.finditer(body):
        label, target = match.groups()
        ref_label = normalize_ref_label(label)
        if ref_label in ref_defs:
            issues.append(
                issue_at(
                    path,
                    text,
                    match.start(1),
                    f"duplicate reference link definition `[{label}]` also defined as `[{ref_def_sources[ref_label]}]`",
                )
            )
            continue
        ref_defs[ref_label] = target
        ref_def_sources[ref_label] = label
    for match in REF_LINK_RE.finditer(body):
        label, explicit_ref = match.groups()
        ref_label = normalize_ref_label(explicit_ref or label)
        raw_ref = explicit_ref or label
        if ref_label not in ref_defs:
            issues.append(issue_at(path, text, match.start(), f"missing reference link definition `[{raw_ref}]`"))
            continue
        link = normalize_link(ref_defs[ref_label])
        if should_skip_link(link):
            continue
        if not local_link_exists(path, link, root):
            issues.append(issue_at(path, text, match.start(), f"broken reference link `[{raw_ref}]`: `{ref_defs[ref_label]}`"))

    for match in INCLUDE_RE.finditer(body):
        raw = match.group(1)
        include_path = resolve_include_path(raw, path, root)
        if not is_inside_root(include_path, root) or not include_path.is_file():
            issues.append(issue_at(path, text, match.start(1), f"broken include `{raw}`"))

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
    parser.add_argument(
        "--exclude",
        action="append",
        default=[],
        metavar="GLOB",
        help="Exclude root-relative markdown paths matching GLOB. May be repeated.",
    )
    parser.add_argument(
        "--list-files",
        action="store_true",
        help="Print the checked markdown file list before reporting issues or success.",
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
    unique_files = apply_excludes(unique_files, root, args.exclude)
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

    if args.list_files:
        print("markdown proof files:")
        for rel_path in render_file_list(unique_files, root):
            print(f"- {rel_path}")

    if issues:
        issue_file_count = len({issue.path for issue in issues})
        print(
            "markdown proof failed: "
            f"{len(issues)} issue(s) in {issue_file_count} file(s); "
            f"checked {len(unique_files)} file(s)"
        )
        for issue in issues:
            print(f"- {issue.render(root)}")
        return 1

    print(f"markdown proof ok: checked {len(unique_files)} file(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
