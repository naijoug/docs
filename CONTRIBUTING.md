# Content contribution guide

Use this guide when editing published content. Repository execution rules are in [AGENTS.md](AGENTS.md); renderer configuration is in [web/vuepress/README.md](web/vuepress/README.md).

## Content and naming

- Publish articles and topic media under `documents/`; use `documents/awesome/` for resource lists and `documents/digest/` for periodic summaries.
- Use Chinese prose with bilingual technical terms where helpful. State the conclusion early, give concrete evidence, and use tables for actual comparisons.
- Use lowercase hyphenated names such as `code-style.md`; use `README.md` for category indexes.
- Keep topic images in a nearby `media/` directory with descriptive names. Shared website assets belong in `web/vuepress/.vuepress/public/`.
- Operational root guides, PR templates, plans and unpublished summaries do not need VuePress article frontmatter.

## Article metadata and preview

Published Markdown under `documents/` needs frontmatter with a title. New articles also declare an appropriate icon and index setting; use order only when placement matters.

```yaml
---
title: Page Title
icon: hashtag
index: true
order: 1
---
```

Common icons include `hashtag`, `robot`, `code`, `database`, `server`, `laptop-code`, `book` and `lightbulb`. Use `index: false` when the page should be omitted from an automatically generated sidebar; category README pages commonly use it. This is not a way to make a page private.

Put a short introduction before `<!-- more -->`, then the detailed content. Place a `## reference` section near the top when a resource list helps readers. Cite authoritative sources for changing technical claims and distinguish observed behavior from recommendations.

## Links and media

- Prefer relative article links, matching the surrounding page. Both `topic` and `topic.md` resolve in the checker; do not rewrite existing links just to change suffix style.
- Use relative paths such as `media/vue-lifecycle.png` for topic images.
- A site-root URL such as `/logo.svg` refers to a public website asset, not an absolute path on the author's computer. VuePress serves the site under `/docs/`; verify generated URLs in a preview when changing routing or public assets.
- Never put local machine user-directory paths in published content. Use repository-relative paths or placeholders in examples.
- Give external links descriptive labels. Add a GitHub repository link such as `[Project](url) 👉🏻 [🐙](repo-url)` only when there is a relevant repository.
- The lightweight checker verifies filesystem targets and does not emulate all VuePress site URLs, validate external URLs, or check anchors. Use build/preview for those rendering cases.

## Enhanced Markdown examples

Use a longer outer fence when documenting nested code fences:

````markdown
::: code-tabs

@tab java
```java
String message = "Hello";
```

@tab python
```python
message = "Hello"
```

:::
````

Collapsible explanation:

```markdown
::: details 💡 Solution Details

Explain the approach and its edge cases.

:::
```

Include an existing LeetCode problem section:

```markdown
<!-- @include: @leetcode/problems/0x0100.md#0125 -->
```

The `@leetcode` alias points to `documents/leetcode/`. The proof checker checks the included file, while the selected section/region needs build or manual verification.

## Algorithm and LeetCode pages

- Use ordered filenames such as `0x01.string.md` for algorithm topics.
- Group problem sets by hundreds: `0x0000.md` for 0000–0099, `0x0100.md` for 0100–0199.
- Preserve existing region markers such as `// #region 0125` and references to them.
- Include the problem link, description, difficulty (🟢 easy, 🟠 medium, 🔴 hard), solution explanation and code tabs as needed.
- Organize reusable strategies under `documents/leetcode/solutions/`, and include problem sections instead of copying them into algorithm pages.

## Adding pages and sections

1. Create the article with metadata and a preview introduction.
2. Link it from the appropriate category index. For AI articles, keep `documents/trending/ai/README.md` in sync and run catalog proof when adding/removing a page.
3. If the sidebar uses `children: "structure"`, its file structure supplies the entries. Only update manual sidebar groups when needed.
4. For a new top-level section, consult the renderer guide for sidebar and navbar configuration.
5. Run checks for the changed scope from the matrix in AGENTS.md. Review the content itself; passing path checks does not prove factual accuracy.

## Reviewing instruction changes

Use representative tasks to assess a changed rule. This table is a review/evaluation checklist, not a requirement to execute all six tasks after every edit.

| Scenario | Expected behavior |
| --- | --- |
| Fix one article typo | Read relevant content, edit it, run focused proof; no unrelated build or new tests |
| Add an AI article | Add its catalog link; run article and catalog proof |
| Change navigation | Inspect renderer guidance; build and preview affected navigation |
| Change the checker | Add a regression for the changed behavior; run regression and full content baseline |
| Unrelated dirty files exist | Record and preserve them; work on independent owned paths |
| Continue an already authorized task | Finish applicable edits/checks without repeating approval; pause only newly blocked actions |

For a model/prompt comparison, keep the task inputs, model/settings and tools consistent, repeat runs, and record completion, missed checks, unnecessary questions and extra tool calls. Do not claim improved agent performance from a static review alone.
