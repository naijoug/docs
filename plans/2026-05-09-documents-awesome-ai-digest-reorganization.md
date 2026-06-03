# Documents Awesome 与 Digest 内容整理 — Plan

- **Date**: 2026-05-09
- **Author**: Codex
- **Status**: implemented

## Goal

将 `documents/` 从“主题目录里混放知识正文、资源清单、周期性摘要”的形态，整理为更清晰的内容系统：引用资源型页面统一进入 `documents/awesome/`，每日热点、每周总结、每月总结等摘要/简报内容从根目录 `summaries/` 迁入 `documents/digest/`。整理后 VuePress 导航、侧边栏和内部链接仍能正常构建。

## Non-Goals

- 本轮不重写知识正文质量，只做分类、迁移、必要的索引和链接修复。
- 本轮不新增依赖，也不引入新的文档构建器。
- 本轮不移动 LeetCode 题解、面试题、算法正文、教程正文等非 awesome 主体内容。
- 本轮不处理当前未提交的 AI 文档正文内容，除非迁移实施时这些文件已由当前修改者确认可纳入整理。

## Success Criteria

- `documents/awesome/` 成为所有引用型、资源清单型、工具清单型内容的顶层入口。
- `documents/programmer/awesome/` 被迁移或废弃，不再作为主要 awesome 入口。
- `summaries/` 内容迁入 `documents/digest/`，根目录不再保留发布内容目录 `summaries/`。
- `web/vuepress/.vuepress/theme/sidebar/sidebar.ts`、`navbar.ts`、相关 sidebar 文件和 `documents/guide.md` 反映新的内容分类。
- 内部链接不再指向已迁移旧路径，构建通过：`cd web/vuepress && npx -y pnpm@8.15.9 run docs:build`。

## Recommended Target Structure

```text
documents/
├── awesome/
│   ├── README.md
│   ├── general/
│   │   ├── github.md
│   │   ├── blogger.md
│   │   ├── writing.md
│   │   ├── mirror.md
│   │   ├── growing.md
│   │   ├── open-api.md
│   │   ├── designer.md
│   │   └── indie-hacker.md
│   ├── ai/
│   ├── frontend/
│   ├── backend/
│   ├── programming/
│   ├── blockchain/
│   └── tools/
├── digest/
│   ├── README.md
│   ├── daily/
│   │   └── 2026-05-09.md
│   ├── weekly/
│   │   └── README.md
│   └── monthly/
│       └── README.md
├── programmer/
├── programming/
├── frontend/
├── backend/
├── trending/
├── leetcode/
├── interview/
└── article/
```

Recommended directory name for summary/briefing content: `digest/`.

Reasoning:

- `digest` matches the current and planned content types: daily hot spots, weekly summaries, monthly summaries.
- It does not over-specify provenance: content can be AI-assisted, manually written, or mixed.
- It avoids confusing this stream with human-written long-form `article/` notes while keeping the directory name short.

## Classification Rules

### Keep In Original Topic Directories

Keep pages under `programmer/`, `programming/`, `frontend/`, `backend/`, `trending/`, `interview/`, and `leetcode/` when the page is mainly:

- Explanatory notes, tutorials, concepts, tables, diagrams, code examples, or problem solutions.
- A category index that introduces a subject and links to local child pages.
- A mixed page where external references are only a supporting section.

Example: `documents/programmer/network/0x01.http.md` has a `## reference` section, but the majority is HTTP concepts, status codes, request methods, and protocol explanation. It should stay in place.

### Move Whole Page To `documents/awesome/`

Move the whole page when the page is mainly:

- External links plus short descriptions or quoted project descriptions.
- An awesome/resource/tool/package list.
- A topic README that has little original subject explanation and mostly points to external resources.

High-confidence examples from the current audit:

- `documents/programmer/awesome/README.md`
- `documents/programmer/awesome/blogger.md`
- `documents/programmer/awesome/writing.md`
- `documents/programmer/awesome/mirror.md`
- `documents/programmer/awesome/growing.md`
- `documents/programmer/awesome/open-api.md`
- `documents/programmer/awesome/designer.md`
- `documents/programmer/awesome/indie-hacker.md`
- `documents/frontend/client/ios/basic/0x08.awsome.md`
- `documents/frontend/web/topic/awesome.md`
- `documents/frontend/web/package/web-ui.md`
- Many existing `documents/trending/ai/*.md` pages such as `agent.md`, `coding.md`, `llms.md`, `cli.md`, `aigc.md`, `chatgpt.md`, `skill.md`, `aio.md`, and `nlp.md`, subject to review of the newer AI files currently in flight.

### Split Mixed Pages

For mixed pages, extract only the resource/reference section to `documents/awesome/<domain>/...` and leave the original knowledge page in place.

Candidate examples requiring manual review:

- `documents/programmer/network/0x06.gfw.md`
- `documents/programmer/system/macos/README.md`
- `documents/interview/ios/README.md`
- `documents/leetcode/README.md`
- `documents/backend/service/node/README.md`
- `documents/programming/lang/go.md`
- `documents/frontend/client/flutter/README.md`

## Current State

- `documents/` currently contains 474 markdown files.
- A heuristic audit found about 252 markdown files with reference-like signals: external links, `## reference`, awesome naming, or dense bullet-link lists.
- `documents/programmer/awesome/` already exists, but it is nested under programmer-specific knowledge even though the content is broader than programmer basics.
- `summaries/` currently exists outside `documents/` and contains `summaries/daily/2026-05-09.md`.
- VuePress currently exposes sidebars via `web/vuepress/.vuepress/theme/sidebar/sidebar.ts` with top-level routes for `/programmer/`, `/programming/`, `/frontend/`, `/backend/`, `/trending/`, `/article/`, `/interview/`, and `/leetcode/`.
- `programmer.ts` currently has an `Awesome` group under `/programmer/awesome/`.
- `navbar.ts` has no top-level awesome or AI digest entry.
- `documents/guide.md` currently links only to the main knowledge sections and does not list awesome or AI digest.
- Current worktree has unrelated user changes:
  - modified `documents/trending/ai/README.md`
  - untracked `documents/trending/ai/advanced-prompt-engineering-2026.md`
  - deleted `labels/config.json`, `statuses/config.json`, and `statuses/icons/*.svg`

## Implementation Result

Completed on 2026-05-09:

- Added top-level `documents/awesome/` and `documents/digest/` sections.
- Moved current `documents/programmer/awesome/*` content into `documents/awesome/general/`.
- Moved high-confidence frontend resource pages into `documents/awesome/frontend/`.
- Moved AI resource-list pages from `documents/trending/ai/` into `documents/awesome/ai/`, while leaving long-form AI guide pages under `documents/trending/ai/`.
- Extracted remaining AI resource sections from `documents/trending/ai/README.md` into `documents/awesome/ai/resources.md`.
- Extracted Web learning/site/app resources from `documents/frontend/web/README.md` into `documents/awesome/frontend/web.md`.
- Extracted blockchain resource and open-source project lists from `documents/trending/blockchain/README.md` into `documents/awesome/blockchain/resources.md`.
- Extracted proxy/network tool resources from `documents/programmer/network/0x06.gfw.md` into `documents/awesome/tools/proxy.md`.
- Moved `summaries/daily/2026-05-09.md` into `documents/digest/daily/2026-05-09.md`.
- Updated README/guide/navigation/sidebar surfaces for the new sections.
- Added `documents/frontend/web/topic/README.md` so the Web topic subtree is directly reachable from the sidebar.
- Fixed an existing broken Linux catalog link from `command.md` to `0x01.command.md`.
- Fixed stale navigation paths for `/frontend/client/ios/`, `/frontend/web/react/`, and removed the old `/programmer/awesome/` navbar entry.
- Verified `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build` succeeds and renders 497 pages.
- Spot-checked generated routes for `/awesome/`, `/awesome/ai/resources.html`, `/awesome/frontend/web.html`, `/awesome/blockchain/resources.html`, `/awesome/tools/proxy.html`, `/digest/`, `/trending/ai/`, `/trending/blockchain/`, and `/frontend/web/topic/`.

Deferred:

- Did not move `documents/trending/ai/README.md` wholesale because it already had unrelated local modifications; only updated its catalog to point to `awesome/ai/`.
- Did not move untracked `documents/trending/ai/advanced-prompt-engineering-2026.md`.
- Did not touch unrelated existing deletions under `.claude/`, `labels/`, `statuses/`, `config.json`, or `views.json`.

## Milestones

### M1 — Build A Migration Inventory

**Outcome**: Every candidate page has a decision before moving: move, split, keep, or defer.

| # | Task | Files / Symbols | Depends on | Verification |
|---|------|-----------------|------------|--------------|
| 1.1 | Generate a candidate list using link density, `## reference`, awesome naming, and code/detail density | `documents/**/*.md` | - | Candidate list separates obvious awesome pages from LeetCode/problem/tutorial false positives |
| 1.2 | Create a migration map with old path, new path, action, and notes | `plans/2026-05-09-awesome-migration-map.md` or a section in this plan | 1.1 | Every high-confidence candidate has exactly one destination |
| 1.3 | Mark dirty/in-flight files as deferred unless their owners intend migration now | `documents/trending/ai/README.md`, `documents/trending/ai/advanced-prompt-engineering-2026.md` | 1.1 | Migration map explicitly says `defer` for active files |

### M2 — Add New Top-Level Sections

**Outcome**: The new classification exists without moving old pages yet.

| # | Task | Files / Symbols | Depends on | Verification |
|---|------|-----------------|------------|--------------|
| 2.1 | Create `documents/awesome/README.md` with frontmatter and domain catalog | `documents/awesome/README.md` | M1 | Page renders and lists planned subcategories |
| 2.2 | Create `documents/digest/README.md` plus `daily/`, `weekly/`, `monthly/` index pages | `documents/digest/**/README.md` | M1 | Pages have frontmatter and `<!-- more -->` |
| 2.3 | Add top-level sidebar entries for awesome and digest | `web/vuepress/.vuepress/theme/sidebar/sidebar.ts`, new `awesome.ts`, new `digest.ts` | 2.1, 2.2 | Sidebar config compiles |
| 2.4 | Add navbar and guide entries | `web/vuepress/.vuepress/theme/navbar.ts`, `documents/guide.md`, optionally `documents/README.md` | 2.3 | New sections are reachable from nav/guide/home |

### M3 — Move Pure Awesome Pages

**Outcome**: Whole-page resource lists live under `documents/awesome/`.

| # | Task | Files / Symbols | Depends on | Verification |
|---|------|-----------------|------------|--------------|
| 3.1 | Move current programmer awesome content to `awesome/general/` | `documents/programmer/awesome/*` -> `documents/awesome/general/*` | M2 | Old `programmer/awesome` no longer owns canonical pages |
| 3.2 | Rename misspelled iOS awesome page and move it | `documents/frontend/client/ios/basic/0x08.awsome.md` -> `documents/awesome/frontend/ios.md` | M2 | Title corrected from `Awsome` to `iOS Awesome` |
| 3.3 | Move frontend resource lists | `documents/frontend/web/topic/awesome.md`, `documents/frontend/web/package/web-ui.md`, selected `frontend/web/tool/*` | M2 | Destination pages are under `documents/awesome/frontend/` |
| 3.4 | Move AI resource-list pages after reviewing active files | selected `documents/trending/ai/*.md` -> `documents/awesome/ai/*` | M2, 1.3 | Knowledge-like AI pages remain under `trending/ai/`; resource-list pages build under `/awesome/ai/` |
| 3.5 | Update old local links that pointed at moved pages | `documents/**/*.md`, `web/vuepress/.vuepress/theme/**/*.ts` | 3.1-3.4 | `rg -n "programmer/awesome|0x08.awsome|web/topic/awesome|web/package/web-ui" documents web/vuepress` returns no stale links except intentional compatibility notes |

### M4 — Split Mixed Reference Sections

**Outcome**: Mixed knowledge pages keep their subject content, while reusable reference lists move to awesome.

| # | Task | Files / Symbols | Depends on | Verification |
|---|------|-----------------|------------|--------------|
| 4.1 | Extract high-value reference sections from mixed pages into domain awesome pages | candidate files from M1 | M3 | Original pages still read as complete knowledge pages |
| 4.2 | Replace large extracted reference blocks with a concise cross-link to the relevant awesome page | same original files | 4.1 | No duplicated long resource lists remain in both locations unless intentional |
| 4.3 | Keep false positives unchanged | LeetCode problem files, interview Q&A files, tutorial files | 4.1 | Candidate list records `keep` with reason |

### M5 — Move Summaries Into Digest

**Outcome**: Periodic summary and briefing content is published from `documents/digest/`.

| # | Task | Files / Symbols | Depends on | Verification |
|---|------|-----------------|------------|--------------|
| 5.1 | Move current daily summary | `summaries/daily/2026-05-09.md` -> `documents/digest/daily/2026-05-09.md` | M2 | New page has valid frontmatter and renders |
| 5.2 | Remove or archive empty root `summaries/` directory | `summaries/` | 5.1 | `find summaries -type f` has no published markdown files, or directory is removed |
| 5.3 | Add README placeholders for weekly and monthly summary content | `documents/digest/weekly/README.md`, `documents/digest/monthly/README.md` | M2 | Sidebar shows empty category pages without build errors |
| 5.4 | Update docs guidance for future summaries/briefings | `AGENTS.md` if needed, or a short section in `documents/digest/README.md` | 5.1 | Future daily/weekly/monthly files have a clear destination |

### M6 — Verify Build And Link Health

**Outcome**: The reorganization is buildable and reviewable.

| # | Task | Files / Symbols | Depends on | Verification |
|---|------|-----------------|------------|--------------|
| 6.1 | Search for stale old paths | `documents/`, `web/vuepress/.vuepress/` | M3-M5 | `rg -n "summaries/|programmer/awesome|0x08.awsome" documents web/vuepress` has no unexpected hits |
| 6.2 | Build VuePress | `web/vuepress/package.json` scripts | M5 | `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build` succeeds |
| 6.3 | Spot-check key routes | `/awesome/`, `/awesome/ai/`, `/awesome/frontend/`, `/digest/`, `/digest/daily/2026-05-09.html` | 6.2 | Built pages exist in `web/vuepress/.vuepress/dist/` |
| 6.4 | Review final diff for accidental content rewrites | all moved markdown files | 6.2 | Diff is mostly renames, frontmatter/title/link fixes, and small extraction edits |

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Link-density audit misclassifies real knowledge pages as awesome | H | M | Use `move/split/keep/defer` migration map before editing; never rely on the heuristic alone |
| Public URLs break after moving pages | M | M | Update internal links; decide whether to keep temporary bridge pages for high-value old routes |
| Mixed pages duplicate reference lists after extraction | M | L | Replace extracted blocks with one cross-link back to the awesome page |
| Sidebar auto-generation changes order unexpectedly | M | L | Add `order` frontmatter to new README/index pages where ordering matters |
| In-flight AI files are overwritten or moved unexpectedly | M | H | Treat current dirty/untracked files as deferred unless explicitly included in migration |
| Build warnings hide a broken route | L | M | Verify dist output for key new routes after `docs:build` |

## Open Questions

- [ ] Is `digest/` the final directory name, or should this be named `briefing/`, `reports/`, or `newsletter/` to better match the publishing style?
- [ ] Should old moved pages leave one-release compatibility bridge pages, or is immediate URL migration acceptable for this personal docs site?
- [ ] Should `documents/trending/ai/` become mostly narrative AI knowledge while `documents/awesome/ai/` owns AI tools/resources?
- [ ] Should awesome pages be organized by original source domain (`frontend`, `backend`, `programmer`) or by resource type (`tools`, `libraries`, `learning`, `people`, `open-api`)? This plan recommends domain-first because it is easier to migrate incrementally.

## Verification Strategy

- Per-milestone:
  - M1: migration map has one action per candidate.
  - M2: new sidebar/navbar config compiles.
  - M3/M4: stale-link searches pass after each batch.
  - M5: no published markdown remains under root `summaries/`.
- End-to-end:
  - Run `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build`.
  - Confirm expected dist pages exist for new routes.
- Rollback:
  - Because the migration should be mostly file renames plus sidebar/link edits, rollback is straightforward by reverting the move batch.
  - Keep each milestone as a small commit if implementing later, with M3/M4 split by domain to avoid a hard-to-review giant diff.
