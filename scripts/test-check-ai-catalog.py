#!/usr/bin/env python3
"""Regression tests for check-ai-catalog.py."""

from __future__ import annotations

import importlib.util
import subprocess
import sys
import tempfile
from pathlib import Path

SCRIPT = Path(__file__).with_name("check-ai-catalog.py")


def load_checker():
    spec = importlib.util.spec_from_file_location("check_ai_catalog", SCRIPT)
    if spec is None or spec.loader is None:
        raise RuntimeError("cannot load check-ai-catalog.py")
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def page(title: str) -> str:
    return f"""---
title: {title}

---

# {title}
"""


def readme(catalog_lines: str) -> str:
    return f"""---
title: 人工智能

---

# AI

## catalog

{catalog_lines}

## next section

Prose links after the catalog are intentionally ignored.
"""


def test_valid_catalog_covers_sibling_pages(checker, root: Path) -> None:
    ai_dir = root / "documents/trending/ai"
    write(ai_dir / "README.md", readme("- [One](one.md)\n- [Two](two.md)"))
    write(ai_dir / "one.md", page("One"))
    write(ai_dir / "two.md", page("Two"))

    assert checker.check_ai_catalog(root) == []


def test_missing_catalog_entry_is_reported(checker, root: Path) -> None:
    ai_dir = root / "documents/trending/ai"
    write(ai_dir / "README.md", readme("- [One](one.md)"))
    write(ai_dir / "one.md", page("One"))
    write(ai_dir / "two.md", page("Two"))

    messages = [issue.message for issue in checker.check_ai_catalog(root)]
    assert "missing catalog link for `two.md`" in messages


def test_missing_target_and_duplicate_catalog_link_are_reported(checker, root: Path) -> None:
    ai_dir = root / "documents/trending/ai"
    write(ai_dir / "README.md", readme("- [One](one.md)\n- [Again](one.md)\n- [Missing](missing.md)"))
    write(ai_dir / "one.md", page("One"))

    messages = [issue.message for issue in checker.check_ai_catalog(root)]
    assert "duplicate catalog link `one.md` (also on line 10)" in messages
    assert "catalog link points to missing page `missing.md`" in messages


def test_cli_failure_reports_readme_line_numbers(root: Path) -> None:
    ai_dir = root / "documents/trending/ai"
    write(
        ai_dir / "README.md",
        readme("- [One](one.md)\n- [Again](one.md)\n- [Missing](missing.md)"),
    )
    write(ai_dir / "one.md", page("One"))

    result = subprocess.run(
        [sys.executable, str(SCRIPT), "--root", str(root)],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    assert result.returncode == 1, result
    assert "documents/trending/ai/README.md:11: duplicate catalog link `one.md`" in result.stdout
    assert "documents/trending/ai/README.md:12: catalog link points to missing page `missing.md`" in result.stdout


def test_cli_success(root: Path) -> None:
    ai_dir = root / "documents/trending/ai"
    write(ai_dir / "README.md", readme("- [One](one.md)"))
    write(ai_dir / "one.md", page("One"))

    result = subprocess.run(
        [sys.executable, str(SCRIPT), "--root", str(root)],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    assert result.returncode == 0, result
    assert "AI catalog proof ok: README catalog covers 1 sibling AI markdown page(s)" in result.stdout


def main() -> int:
    checker = load_checker()
    tests = [
        test_valid_catalog_covers_sibling_pages,
        test_missing_catalog_entry_is_reported,
        test_missing_target_and_duplicate_catalog_link_are_reported,
        test_cli_failure_reports_readme_line_numbers,
        test_cli_success,
    ]

    for test in tests:
        with tempfile.TemporaryDirectory() as tmp_dir:
            root = Path(tmp_dir)
            if test.__name__.startswith("test_cli"):
                test(root)
            else:
                test(checker, root)
            print(f"ok {test.__name__}")

    print(f"check-ai-catalog regression tests ok: {len(tests)} test(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
