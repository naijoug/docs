#!/usr/bin/env python3
"""Regression tests for check-markdown-proof.py.

The checker is a small stdlib-only gate, so the tests are stdlib-only too. They
exercise both the importable functions and the CLI path that agents use in run
notes.
"""

from __future__ import annotations

import importlib.util
import subprocess
import sys
import tempfile
from pathlib import Path

SCRIPT = Path(__file__).with_name("check-markdown-proof.py")


def load_checker():
    spec = importlib.util.spec_from_file_location("check_markdown_proof", SCRIPT)
    if spec is None or spec.loader is None:
        raise RuntimeError("cannot load check-markdown-proof.py")
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def valid_page(title: str = "Valid") -> str:
    return f"""---
title: {title}
icon: robot

---

# {title}

See [README](README.md).
"""


def test_valid_page_and_relative_link(checker, root: Path) -> None:
    page = root / "documents/trending/ai/README.md"
    write(page, valid_page("AI Index"))

    issues = checker.check_file(page, root)
    assert issues == [], [issue.render(root) for issue in issues]

    files, missing = checker.collect_markdown_files(["documents/trending/ai"], root)
    assert missing == []
    assert files == [page.resolve()]


def test_reports_broken_link_and_absolute_user_path(checker, root: Path) -> None:
    page = root / "documents/trending/ai/broken.md"
    write(
        page,
        """---
title: Broken

---

This links to [missing](missing.md) and mentions /Users/example/project.
""",
    )

    messages = [issue.message for issue in checker.check_file(page, root)]
    assert "broken local link `missing.md`" in messages
    assert any(message.startswith("contains absolute user path") for message in messages)


def test_cross_directory_link_fails_after_target_rename(checker, root: Path) -> None:
    source = root / "documents/trending/ai/checker.md"
    target = root / "scripts/check-markdown-proof.py"
    write(target, "#!/usr/bin/env python3\n")
    write(
        source,
        """---
title: Checker

---

Script source: [scripts/check-markdown-proof.py](../../../scripts/check-markdown-proof.py).
""",
    )

    assert checker.check_file(source, root) == []

    target.rename(root / "scripts/check-markdown-proof-renamed.py")
    messages = [issue.message for issue in checker.check_file(source, root)]
    assert "broken local link `../../../scripts/check-markdown-proof.py`" in messages


def test_directory_readme_link_without_suffix_and_markdown_title(checker, root: Path) -> None:
    source = root / "documents/trending/ai/checker.md"
    readme = root / "documents/trending/ai/playbook/README.md"
    write(readme, valid_page("Playbook"))
    write(
        source,
        """---
title: Checker

---

Use the [playbook](playbook "AI playbook") before publishing.
""",
    )

    assert checker.check_file(source, root) == []

    readme.rename(root / "documents/trending/ai/playbook/HOME.md")
    messages = [issue.message for issue in checker.check_file(source, root)]
    assert "broken local link `playbook \"AI playbook\"`" in messages


def test_vuepress_include_alias_reports_missing_target(checker, root: Path) -> None:
    source = root / "documents/programmer/core/algorithm/0x01.sort.md"
    target = root / "documents/leetcode/problems/0x0000.md"
    write(target, valid_page("LeetCode 0000"))
    write(
        source,
        """---
title: Sort

---

<!-- @include: @leetcode/problems/0x0000.md#0088 -->
""",
    )

    assert checker.check_file(source, root) == []

    target.rename(root / "documents/leetcode/problems/0x0000-renamed.md")
    messages = [issue.message for issue in checker.check_file(source, root)]
    assert "broken include `@leetcode/problems/0x0000.md#0088`" in messages


def test_inline_code_examples_are_not_links_or_includes(checker, root: Path) -> None:
    page = root / "documents/trending/ai/checker.md"
    write(
        page,
        """---
title: Checker

---

Document the syntax `Use [label](path)` and `<!-- @include: ... -->` without checking examples.
""",
    )

    assert checker.check_file(page, root) == []


def test_cli_fails_for_missing_target(root: Path) -> None:
    result = subprocess.run(
        [sys.executable, str(SCRIPT), "--root", str(root), "documents/trending/ai/missing.md"],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    assert result.returncode == 2, result
    assert "target not found" in result.stdout


def test_cli_fails_when_no_markdown_matched(root: Path) -> None:
    (root / "documents/trending/ai/assets").mkdir(parents=True)
    result = subprocess.run(
        [sys.executable, str(SCRIPT), "--root", str(root), "documents/trending/ai/assets"],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    assert result.returncode == 2, result
    assert "no markdown files matched" in result.stdout


def main() -> int:
    checker = load_checker()
    tests = [
        test_valid_page_and_relative_link,
        test_reports_broken_link_and_absolute_user_path,
        test_cross_directory_link_fails_after_target_rename,
        test_directory_readme_link_without_suffix_and_markdown_title,
        test_vuepress_include_alias_reports_missing_target,
        test_inline_code_examples_are_not_links_or_includes,
        test_cli_fails_for_missing_target,
        test_cli_fails_when_no_markdown_matched,
    ]

    for test in tests:
        with tempfile.TemporaryDirectory() as tmp_dir:
            root = Path(tmp_dir)
            if test.__name__.startswith("test_cli"):
                test(root)
            else:
                test(checker, root)
            print(f"ok {test.__name__}")

    print(f"check-markdown-proof regression tests ok: {len(tests)} test(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
