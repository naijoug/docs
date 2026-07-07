#!/usr/bin/env python3
"""Check that the AI docs README catalog indexes local AI markdown pages.

This is a narrow companion proof for `documents/trending/ai/README.md`: it does
not validate all markdown links (use check-markdown-proof.py for that). It only
answers whether the README `## catalog` section exposes each sibling markdown
page exactly once and does not point at a missing sibling page.
"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path

CATALOG_HEADING_RE = re.compile(r"^##\s+catalog\s*$", re.MULTILINE | re.IGNORECASE)
NEXT_H2_RE = re.compile(r"^##\s+", re.MULTILINE)
LOCAL_MD_LINK_RE = re.compile(r"\[[^\]\n]+\]\(([^)\n]+\.md)(?:#[^)\n]+)?\)")


@dataclass(frozen=True)
class CatalogIssue:
    message: str


def normalize_catalog_link(raw: str) -> str:
    link = raw.strip()
    if " " in link and not link.startswith("<"):
        link = link.split(" ", 1)[0]
    if link.startswith("<") and link.endswith(">"):
        link = link[1:-1]
    return link.split("#", 1)[0]


def extract_catalog_section(text: str) -> str | None:
    start_match = CATALOG_HEADING_RE.search(text)
    if start_match is None:
        return None
    next_match = NEXT_H2_RE.search(text, start_match.end())
    end = next_match.start() if next_match is not None else len(text)
    return text[start_match.end() : end]


def collect_catalog_links(readme: Path) -> tuple[list[str], list[CatalogIssue]]:
    text = readme.read_text(encoding="utf-8")
    section = extract_catalog_section(text)
    if section is None:
        return [], [CatalogIssue("README.md missing `## catalog` section")]

    links = [normalize_catalog_link(match) for match in LOCAL_MD_LINK_RE.findall(section)]
    duplicates = sorted({link for link in links if links.count(link) > 1})
    issues = [CatalogIssue(f"duplicate catalog link `{link}`") for link in duplicates]
    return links, issues


def check_ai_catalog(root: Path) -> list[CatalogIssue]:
    ai_dir = root / "documents/trending/ai"
    readme = ai_dir / "README.md"
    if not readme.is_file():
        return [CatalogIssue("documents/trending/ai/README.md not found")]

    links, issues = collect_catalog_links(readme)
    linked = set(links)
    expected = sorted(path.name for path in ai_dir.glob("*.md") if path.name != "README.md")

    for name in expected:
        if name not in linked:
            issues.append(CatalogIssue(f"missing catalog link for `{name}`"))

    for link in sorted(linked):
        # Keep this proof scoped to sibling AI markdown pages. Cross-directory
        # links belong in prose sections and are checked by check-markdown-proof.py.
        if "/" in link:
            continue
        if not (ai_dir / link).is_file():
            issues.append(CatalogIssue(f"catalog link points to missing page `{link}`"))

    return issues


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Check documents/trending/ai/README.md catalog coverage.",
    )
    parser.add_argument(
        "--root",
        default=Path(__file__).resolve().parents[1],
        type=Path,
        help="Docs repository root. Defaults to the parent of scripts/.",
    )
    args = parser.parse_args()

    root = args.root.resolve()
    issues = check_ai_catalog(root)
    if issues:
        print(f"AI catalog proof failed: {len(issues)} issue(s)")
        for issue in issues:
            print(f"- {issue.message}")
        return 1

    print("AI catalog proof ok: README catalog covers all sibling AI markdown pages")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
