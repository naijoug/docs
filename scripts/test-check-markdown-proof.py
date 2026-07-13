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


def test_rendered_issues_include_line_numbers(checker, root: Path) -> None:
    page = root / "documents/trending/ai/line-numbers.md"
    write(
        page,
        """---
title: Line Numbers

---

```text
[ignored](missing-in-code.md)
```

Valid prose first.
Broken prose link: [missing](missing.md).
""",
    )

    rendered = [issue.render(root) for issue in checker.check_file(page, root)]
    assert rendered == [
        "documents/trending/ai/line-numbers.md:11: broken local link `missing.md`"
    ]


def test_external_url_path_is_not_treated_as_absolute_user_path(checker, root: Path) -> None:
    page = root / "documents/trending/ai/external-url.md"
    write(
        page,
        """---
title: External URL

---

External links may contain URL path segments like [guide](https://example.com/home/wx),
and URL schemes are case-insensitive like [caps](HTTPS://example.com/Users/wx).
Inline data and JavaScript schemes are also case-insensitive: [data](DATA:text/plain,hello)
and [js](JavaScript:void(0)). Local machine paths such as /home/example/project
should still be reported.
""",
    )

    messages = [issue.message for issue in checker.check_file(page, root)]
    absolute_path_messages = [
        message for message in messages if message.startswith("contains absolute user path")
    ]
    assert absolute_path_messages == ["contains absolute user path `/home/example/project`"]


def test_reports_broken_local_image_without_treating_it_as_link(checker, root: Path) -> None:
    page = root / "documents/trending/ai/images.md"
    write(
        page,
        """---
title: Images

---

![Existing diagram](media/diagram.png)
![Missing diagram](media/missing.png "diagram")
""",
    )
    write(root / "documents/trending/ai/media/diagram.png", "fake image\n")

    messages = [issue.message for issue in checker.check_file(page, root)]
    assert "broken local image `media/missing.png \"diagram\"`" in messages
    assert not any(message.startswith("broken local link") for message in messages)


def test_reference_style_links_check_missing_defs_and_local_targets(checker, root: Path) -> None:
    page = root / "documents/trending/ai/references.md"
    write(root / "documents/trending/ai/target.md", valid_page("Target"))
    write(
        page,
        """---
title: References

---

Use [good local][Good Local], [missing def][missing-def], [broken local][broken], and [external][ext].
Also use a shortcut [Target][].

[good local]: target.md
[broken]: missing.md "Missing target"
[ext]: https://example.com/reference
[target]: target.md
""",
    )

    messages = [issue.message for issue in checker.check_file(page, root)]
    assert "missing reference link definition `[missing-def]`" in messages
    assert "broken reference link `[broken]`: `missing.md`" in messages
    assert not any("[Good Local]" in message for message in messages)
    assert not any("[ext]" in message for message in messages)
    assert not any("[Target]" in message for message in messages)


def test_reference_style_links_report_duplicate_definitions(checker, root: Path) -> None:
    page = root / "documents/trending/ai/duplicate-references.md"
    write(root / "documents/trending/ai/target.md", valid_page("Target"))
    write(
        page,
        """---
title: Duplicate References

---

Use [target][Duplicate Ref].

[duplicate ref]: target.md
[Duplicate   Ref]: missing.md
""",
    )

    messages = [issue.message for issue in checker.check_file(page, root)]
    assert "duplicate reference link definition `[Duplicate   Ref]` also defined as `[duplicate ref]`" in messages
    assert not any(message.startswith("broken reference link") for message in messages)


def test_indented_reference_definitions_are_checked(checker, root: Path) -> None:
    page = root / "documents/trending/ai/indented-references.md"
    write(root / "documents/trending/ai/target.md", valid_page("Target"))
    write(
        page,
        """---
title: Indented References

---

Use [good][good] and [broken][broken].

   [good]: target.md
   [broken]: missing.md
""",
    )

    messages = [issue.message for issue in checker.check_file(page, root)]
    assert "missing reference link definition `[good]`" not in messages
    assert "broken reference link `[broken]`: `missing.md`" in messages


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


def test_local_links_must_not_escape_repo_root(checker, root: Path) -> None:
    external = root.parent / "outside-target.md"
    write(external, valid_page("Outside"))
    page = root / "documents/trending/ai/escape-link.md"
    write(
        page,
        """---
title: Escape Link

---

This must not pass just because [outside](../../../../outside-target.md) exists.
""",
    )

    messages = [issue.message for issue in checker.check_file(page, root)]
    assert "broken local link `../../../../outside-target.md`" in messages


def test_includes_must_not_escape_repo_root(checker, root: Path) -> None:
    external = root.parent / "outside-include.md"
    write(external, valid_page("Outside Include"))
    page = root / "documents/trending/ai/escape-include.md"
    write(
        page,
        """---
title: Escape Include

---

<!-- @include: ../../../../outside-include.md -->
""",
    )

    messages = [issue.message for issue in checker.check_file(page, root)]
    assert "broken include `../../../../outside-include.md`" in messages


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


def test_cli_failure_summary_counts_only_files_with_issues(root: Path) -> None:
    write(root / "documents/trending/ai/README.md", valid_page("AI Index"))
    write(
        root / "documents/trending/ai/broken.md",
        """---
title: Broken

---

Broken prose link: [missing](missing.md).
""",
    )

    result = subprocess.run(
        [sys.executable, str(SCRIPT), "--root", str(root), "documents/trending/ai"],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    assert result.returncode == 1, result
    assert "markdown proof failed: 1 issue(s) in 1 file(s); checked 2 file(s)" in result.stdout


def test_cli_changed_from_checks_only_changed_markdown(root: Path) -> None:
    subprocess.run(["git", "init"], cwd=root, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
    subprocess.run(["git", "config", "user.name", "tester"], cwd=root, check=True)
    subprocess.run(["git", "config", "user.email", "tester@example.com"], cwd=root, check=True)

    changed = root / "documents/trending/ai/changed.md"
    unchanged = root / "documents/trending/ai/unchanged.md"
    write(changed, valid_page("Changed"))
    write(unchanged, valid_page("Unchanged"))
    subprocess.run(["git", "add", "documents"], cwd=root, check=True)
    subprocess.run(["git", "commit", "-m", "baseline"], cwd=root, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)

    write(
        changed,
        """---
title: Changed

---

Broken after edit: [missing](missing.md).
""",
    )
    write(root / "notes.txt", "not markdown\n")

    result = subprocess.run(
        [sys.executable, str(SCRIPT), "--root", str(root), "--changed-from", "HEAD"],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    assert result.returncode == 1, result
    assert "markdown proof failed: 1 issue(s) in 1 file(s); checked 1 file(s)" in result.stdout
    assert "documents/trending/ai/changed.md" in result.stdout
    assert "documents/trending/ai/unchanged.md" not in result.stdout


def test_cli_changed_from_includes_untracked_markdown(root: Path) -> None:
    subprocess.run(["git", "init"], cwd=root, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
    subprocess.run(["git", "config", "user.name", "tester"], cwd=root, check=True)
    subprocess.run(["git", "config", "user.email", "tester@example.com"], cwd=root, check=True)

    baseline = root / "documents/trending/ai/README.md"
    write(baseline, valid_page("AI Index"))
    subprocess.run(["git", "add", "documents"], cwd=root, check=True)
    subprocess.run(["git", "commit", "-m", "baseline"], cwd=root, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)

    untracked = root / "documents/trending/ai/new-page.md"
    write(
        untracked,
        """---
title: New Page

---

New untracked doc with [missing](missing.md).
""",
    )

    result = subprocess.run(
        [sys.executable, str(SCRIPT), "--root", str(root), "--changed-from", "HEAD"],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    assert result.returncode == 1, result
    assert "documents/trending/ai/new-page.md" in result.stdout
    assert "broken local link `missing.md`" in result.stdout


def test_cli_exclude_omits_matching_changed_markdown(root: Path) -> None:
    subprocess.run(["git", "init"], cwd=root, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
    subprocess.run(["git", "config", "user.name", "tester"], cwd=root, check=True)
    subprocess.run(["git", "config", "user.email", "tester@example.com"], cwd=root, check=True)

    changed = root / "documents/trending/ai/changed.md"
    ignored = root / "AGENTS.md"
    write(root / "documents/trending/ai/README.md", valid_page("AI Index"))
    write(changed, valid_page("Changed"))
    write(ignored, valid_page("Agents"))
    subprocess.run(["git", "add", "documents", "AGENTS.md"], cwd=root, check=True)
    subprocess.run(["git", "commit", "-m", "baseline"], cwd=root, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)

    write(changed, valid_page("Changed Again"))
    write(
        ignored,
        """---
title: Agents

---

Ignored dirty handoff link: [missing](missing.md).
""",
    )

    result = subprocess.run(
        [
            sys.executable,
            str(SCRIPT),
            "--root",
            str(root),
            "--changed-from",
            "HEAD",
            "--exclude",
            "AGENTS.md",
        ],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    assert result.returncode == 0, result
    assert "markdown proof ok: checked 1 file(s)" in result.stdout
    assert "AGENTS.md" not in result.stdout


def test_cli_list_files_prints_checked_files_without_excluded_paths(root: Path) -> None:
    subprocess.run(["git", "init"], cwd=root, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
    subprocess.run(["git", "config", "user.name", "tester"], cwd=root, check=True)
    subprocess.run(["git", "config", "user.email", "tester@example.com"], cwd=root, check=True)

    changed = root / "documents/trending/ai/changed.md"
    ignored = root / "drafts/ignored.md"
    write(root / "documents/trending/ai/README.md", valid_page("AI Index"))
    write(changed, valid_page("Changed"))
    write(ignored, valid_page("Ignored"))
    subprocess.run(["git", "add", "documents", "drafts"], cwd=root, check=True)
    subprocess.run(["git", "commit", "-m", "baseline"], cwd=root, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)

    write(changed, valid_page("Changed Again"))
    write(ignored, valid_page("Ignored Again"))

    result = subprocess.run(
        [
            sys.executable,
            str(SCRIPT),
            "--root",
            str(root),
            "--changed-from",
            "HEAD",
            "--exclude",
            "drafts/**",
            "--list-files",
        ],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    assert result.returncode == 0, result
    assert "markdown proof files:" in result.stdout
    assert "- documents/trending/ai/changed.md" in result.stdout
    assert "drafts/ignored.md" not in result.stdout
    assert "markdown proof ok: checked 1 file(s)" in result.stdout


def main() -> int:
    checker = load_checker()
    tests = [
        test_valid_page_and_relative_link,
        test_reports_broken_link_and_absolute_user_path,
        test_rendered_issues_include_line_numbers,
        test_external_url_path_is_not_treated_as_absolute_user_path,
        test_reports_broken_local_image_without_treating_it_as_link,
        test_reference_style_links_check_missing_defs_and_local_targets,
        test_reference_style_links_report_duplicate_definitions,
        test_indented_reference_definitions_are_checked,
        test_cross_directory_link_fails_after_target_rename,
        test_directory_readme_link_without_suffix_and_markdown_title,
        test_vuepress_include_alias_reports_missing_target,
        test_inline_code_examples_are_not_links_or_includes,
        test_local_links_must_not_escape_repo_root,
        test_includes_must_not_escape_repo_root,
        test_cli_fails_for_missing_target,
        test_cli_fails_when_no_markdown_matched,
        test_cli_failure_summary_counts_only_files_with_issues,
        test_cli_changed_from_checks_only_changed_markdown,
        test_cli_changed_from_includes_untracked_markdown,
        test_cli_exclude_omits_matching_changed_markdown,
        test_cli_list_files_prints_checked_files_without_excluded_paths,
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
