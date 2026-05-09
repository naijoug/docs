# 文档内容与 VuePress 解耦 — Plan

- **Date**: 2026-05-09
- **Author**: Codex
- **Status**: implemented

## Goal

先把“文档内容”和“VuePress 网站实现”解耦：真实文档迁移到 `documents/`，VuePress 项目迁移到 `web/vuepress/`。VuePress 只作为当前网站构建器，构建时直接把 `documents/` 作为 `sourceDir`，为后续切换其它文档网站技术栈保留空间。

## Non-Goals

- 本轮不优先做 Awesome-first 内容治理；那是解耦后的第二阶段。
- 本轮不重写历史文档正文。
- 本轮不引入新的文档构建技术栈。
- 本轮不改变公开站点 base path：仍保持 `/docs/`。
- 本轮不把 agent 原始输出直接发布到正式文档导航。

## Success Criteria

- 仓库中真实内容根目录变为 `documents/`，包含当前 `src/` 中除 `.vuepress` 之外的文档、媒体和内容索引。
- VuePress 相关工程文件集中到 `web/vuepress/`，包括 `package.json`、lockfile 和 `.vuepress` 配置。
- `web/vuepress` 能构建当前文档站点，公开 URL 和主要导航不变。
- VuePress 页面内容直接来自 `documents/`，不是软链或复制出的第二份内容。
- 后续可以新增 `web/<other-stack>/`，复用同一个 `documents/` 内容源。

## Target Structure

Recommended structure:

```text
docs/
├── documents/
│   ├── README.md
│   ├── guide.md
│   ├── programmer/
│   ├── programming/
│   ├── frontend/
│   ├── backend/
│   ├── trending/
│   ├── leetcode/
│   ├── interview/
│   ├── article/
│   └── template/
├── plans/
│   └── 2026-05-09-docs-vuepress-decoupling.md
├── summaries/
│   └── ...
└── web/
    └── vuepress/
        ├── package.json
        ├── pnpm-lock.yaml
        └── .vuepress/
            ├── config.ts
            ├── theme/
            ├── styles/
            └── public/
```

## Current State

- `package.json` at repo root runs `vuepress build src` and `vuepress dev src`.
- `src/.vuepress/config.ts` sets `base: "/docs/"`.
- `src/.vuepress/theme/theme.ts` owns VuePress Hope theme config, sidebar, navbar, public assets and mdEnhance include alias.
- `src/` currently mixes two concerns:
  - content: `article/`, `backend/`, `frontend/`, `interview/`, `leetcode/`, `programmer/`, `programming/`, `trending/`, `template/`, `README.md`, `guide.md`
  - VuePress implementation: `.vuepress/`
- `src/.vuepress/dist` and `src/.vuepress/.temp` are generated output/cache and should not be treated as source.

## Key Design Decision

### Recommended: `documents/` as VuePress CLI `sourceDir`

Run VuePress from `web/vuepress`, but point the CLI source directory at `../../documents` and the config file at `./.vuepress/config.ts`.

VuePress 2.0.0-rc.0 does not support a `sourceDir` user-config key for this use case. The CLI owns the source directory (`vuepress build [sourceDir]` / `vuepress dev [sourceDir]`), and CLI options override config-file directory settings. Therefore the implementation must pass `../../documents` through scripts, together with explicit config, output, temp and cache paths.

```ts
// web/vuepress/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import theme from "./theme/theme.js";

export default defineUserConfig({
  base: "/docs/",
  lang: "zh-CN",
  title: "文档库",
  description: "一个程序员的个人文档库",
  theme,
});
```

Expected scripts:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev ../../documents --config ./.vuepress/config.ts --temp ./.vuepress/.temp --cache ./.vuepress/.cache",
    "docs:clean-dev": "vuepress dev ../../documents --config ./.vuepress/config.ts --temp ./.vuepress/.temp --cache ./.vuepress/.cache --clean-cache --clean-temp",
    "docs:build": "vuepress build ../../documents --config ./.vuepress/config.ts --dest ./.vuepress/dist --temp ./.vuepress/.temp --cache ./.vuepress/.cache",
    "docs:update-package": "pnpm dlx vp-update"
  }
}
```

If Theme Hope requires `public` to stay outside `documents/.vuepress`, set it explicitly in config as an absolute path derived from `web/vuepress/.vuepress/config.ts`; otherwise VuePress defaults `public` to `source/.vuepress/public`.

Why:

- VuePress' official model is `vuepress dev [sourceDir]` and `vuepress build [sourceDir]`; using `documents/` as `sourceDir` follows that model directly.
- No content symlinks, no duplicated content, and no generated adapter layer.
- Existing relative links and co-located `media/` directories keep working because the whole content tree moves intact.
- Current sidebar and route paths can remain mostly unchanged because VuePress still sees `programmer/`, `trending/`, `leetcode/`, etc. at its source root.
- The boundary is clean: `documents/` is content; `web/vuepress/` is one renderer implementation.

Tradeoff:

- Some VuePress / Theme Hope conventions assume `.vuepress` is under `sourceDir`. Because config is external, we must explicitly verify styles, public assets, temp/cache output and theme hooks.
- VuePress defaults `dest`, `temp`, `cache` and `public` under `sourceDir/.vuepress`; scripts/config must override those paths so generated output and renderer assets stay under `web/vuepress/.vuepress`.
- The `@leetcode` include alias currently depends on `__dirname` relative to `.vuepress/theme/theme.ts`; it must be recalculated after moving config.
- If a Theme Hope feature only reads `sourceDir/.vuepress/...`, we may need a small fallback adapter for `.vuepress`, not for content.

### Fallback: Minimal `.vuepress` Adapter or Symlink

If external config works but specific Theme Hope conventions require `.vuepress` under `sourceDir`, use the smallest adapter that solves the issue:

- Option A: keep a minimal `documents/.vuepress/config.ts` that imports from `../web/vuepress/.vuepress/config.ts`.
- Option B: symlink `documents/.vuepress` to `../web/vuepress/.vuepress`.
- Option C: only symlink specific required subdirectories such as `styles/` or `public/`.

Full content symlinking into `web/vuepress/src` should be the last fallback, not the primary plan.

Why:

- It preserves the official `sourceDir` model.
- It limits symlink use to framework configuration compatibility rather than content ownership.
- It keeps `documents/` as the canonical content source.

### M0 Result

PoC result on 2026-05-09:

- `vuepress build documents-poc --config web/vuepress-poc/.vuepress/config.ts --dest web/vuepress-poc/.vuepress/dist --temp web/vuepress-poc/.vuepress/.temp --cache web/vuepress-poc/.vuepress/.cache` succeeds.
- `@leetcode` include alias works after rebasing it to `documents-poc/leetcode`.
- `public` must be explicitly set in config to `web/vuepress/.vuepress/public`; otherwise VuePress looks under `sourceDir/.vuepress/public`.
- Theme Hope's sass-palette plugin hardcodes `.vuepress/styles/*` relative to `sourceDir`; keep a minimal `documents/.vuepress/styles` symlink to `../../web/vuepress/.vuepress/styles` unless a future Theme Hope upgrade adds a cleaner config hook.

Chosen implementation path: CLI sourceDir + explicit CLI output directories + explicit `public` config + minimal styles symlink adapter.

## Implementation Result

Completed on 2026-05-09:

- Moved canonical content from `src/` to `documents/`.
- Moved VuePress renderer files from root/`src/.vuepress` to `web/vuepress/`.
- Added `documents/.vuepress/styles` symlink to preserve Theme Hope sass-palette behavior without duplicating content.
- Updated VuePress config, package scripts, GitHub Actions deploy workflow, `.gitignore`, and agent guidance for the new layout.
- Added root `README.md` and `web/vuepress/README.md` to document the content/renderer boundary and pinned pnpm 8 commands.
- Fixed migrated README/home links that still pointed at old `src/...` paths or misspelled routes.
- Verified `cd web/vuepress && pnpm run docs:build` succeeds and renders 477 pages.

Known build-log behavior:

- VuePress Theme Hope plugins print "No VuePress package is found" because their version check walks upward from the content `sourceDir` (`documents/`), while the package lives in sibling `web/vuepress/`. Build exits successfully and renders the expected pages. Do not add a root package wrapper solely to silence this unless the project decides to trade layout purity for quieter logs.

## Migration Milestones

### M0 — Proof of Concept (De-risk External Config)

**Outcome**: Validate that VuePress 2.0.0-rc.0 + Theme Hope works with an external `sourceDir` and external `--config`, before doing any large move.

| # | Task | Files / Symbols | Depends on | Verification |
| --- | --- | --- | --- | --- |
| 0.1 | Spike on a throwaway branch | temp `documents-poc/` (5 sample md + 1 image), temp `web/vuepress-poc/` | - | `pnpm run docs:build` succeeds; sample pages, sidebar, public assets and `@leetcode`-style include all render |
| 0.2 | Decide which path strategy wins | choose CLI args + explicit directory options OR `.vuepress` adapter | 0.1 | Chosen: CLI args + explicit `public` + minimal styles symlink adapter |
| 0.3 | Delete PoC, keep notes | remove `documents-poc/`, `web/vuepress-poc/` | 0.2 | Repo clean; chosen approach written into this plan |

### M1 — Prepare Migration Boundary

**Outcome**: The repo has a clear migration target without moving content yet.

| # | Task | Files / Symbols | Depends on | Verification |
| --- | --- | --- | --- | --- |
| 1.1 | Rename and rewrite plan around VuePress decoupling | `plans/2026-05-09-docs-vuepress-decoupling.md` | - | Plan names `documents/` and `web/vuepress/` as primary targets |
| 1.2a | Confirm generated-output ignores cover new layout | `.gitignore` | 1.1 | Existing `dist/`, `.temp/`, `.cache/` still cover nested VuePress output; add explicit `web/vuepress/.vuepress/...` entries only if needed |
| 1.2b | Remove obsolete ignores only if present | `.gitignore` | 1.2a | No stale `src/.vuepress/dist|.temp|.cache` rules remain |
| 1.3 | Record migration rule for future agents | future `AGENTS.md` or content guide | 1.1 | Rule says content edits go to `documents/`, website config edits go to `web/vuepress/`; root keeps `plans/`, `summaries/`, `Excalidraw/`, `sources/` etc. unchanged |

### M2 — Move Content to `documents/`

**Outcome**: Real markdown and media content no longer live under VuePress project source.

| # | Task | Files / Symbols | Depends on | Verification |
| --- | --- | --- | --- | --- |
| 2.1 | Create `documents/` | `documents/` | M1 | Directory exists |
| 2.2 | Move content directories | `src/article`, `src/backend`, `src/frontend`, `src/interview`, `src/leetcode`, `src/programmer`, `src/programming`, `src/trending`, `src/template` -> `documents/` | 2.1 | `find documents -name '*.md'` matches expected content count |
| 2.3 | Move root content pages | `src/README.md`, `src/guide.md` -> `documents/` | 2.1 | Home page and guide page exist under `documents/` |
| 2.4 | Leave VuePress-only files unmoved | `src/.vuepress` | 2.2 | `.vuepress` is still available for M3 |

### M3 — Move VuePress Project to `web/vuepress/`

**Outcome**: VuePress is one website implementation under `web/`.

| # | Task | Files / Symbols | Depends on | Verification |
| --- | --- | --- | --- | --- |
| 3.1 | Create VuePress project directory | `web/vuepress/` | M2 | Directory exists |
| 3.2 | Move VuePress config source | `src/.vuepress` -> `web/vuepress/.vuepress` | 3.1 | Theme imports still resolve locally |
| 3.3 | Move package metadata and clean root deps | `package.json`, `pnpm-lock.yaml` -> `web/vuepress/`; delete root `node_modules/` | 3.1 | `pnpm install` runs from `web/vuepress`; root no longer has `node_modules/` or `package.json` |
| 3.4 | Update npm scripts | `web/vuepress/package.json` | 3.2 | Scripts pass `../../documents --config ./.vuepress/config.ts` and explicit `--dest`, `--temp`, `--cache` where relevant |

### M4 — Rebase VuePress Config for External Source

**Outcome**: VuePress can build `documents/` directly with config stored in `web/vuepress/.vuepress`.

| # | Task | Files / Symbols | Depends on | Verification |
| --- | --- | --- | --- | --- |
| 4.1 | Update `@leetcode` include alias path | `web/vuepress/.vuepress/theme/theme.ts` line ~87 | M3 | `path.resolve(__dirname, "../../leetcode")` becomes `path.resolve(__dirname, "../../../../documents/leetcode")` (4 levels up to repo root, then into `documents/`); a leetcode page using `<!-- @include: @leetcode/... -->` renders correctly |
| 4.2 | Update `docsDir` for "Edit on GitHub" link | `web/vuepress/.vuepress/theme/theme.ts` line ~23 | M3 | `docsDir: "src"` becomes `docsDir: "documents"`; edit-link on a built page points to `https://github.com/naijoug/docs/edit/main/documents/...` |
| 4.3 | Set output/cache/temp locations explicitly | `web/vuepress/package.json` CLI flags | M3 | Generated files stay under `web/vuepress/.vuepress/` or another ignored VuePress build area |
| 4.4 | Verify Theme Hope styles/public handling | `web/vuepress/.vuepress/styles`, `web/vuepress/.vuepress/public` (`logo.svg`, `favicon.ico`, `assets/`) | 4.3 | Custom theme color and public assets still render; `/logo.svg` route works; config sets explicit `public` |
| 4.5 | Add minimal `.vuepress` styles fallback | `documents/.vuepress/styles` symlink -> `../../web/vuepress/.vuepress/styles` | 4.4 | Build succeeds without duplicating content |

### M5 — Update CI / Developer Commands

**Outcome**: Build and local dev commands run from the new VuePress project path.

| # | Task | Files / Symbols | Depends on | Verification |
| --- | --- | --- | --- | --- |
| 5.1a | Switch pnpm install to project subdir | `.github/workflows/deploy-docs.yml` (`pnpm/action-setup` step) | M3 | Either drop `run_install: true` and add an explicit `pnpm install --dir web/vuepress` step, or set `cwd: web/vuepress` so install resolves the moved lockfile |
| 5.1b | Update build step | `.github/workflows/deploy-docs.yml` (`build` step) | 5.1a | `pnpm run docs:build` runs with `working-directory: web/vuepress`; nojekyll line becomes `> web/vuepress/.vuepress/dist/.nojekyll` |
| 5.1c | Update deploy artifact path | `.github/workflows/deploy-docs.yml` (`JamesIves/github-pages-deploy-action`) | 5.1b | `folder: src/.vuepress/dist` becomes `folder: web/vuepress/.vuepress/dist` |
| 5.1d | Audit other workflows for `src/` references | `.github/workflows/sync-to-gitee.yml` and any others | 5.1a | `grep -r "src/" .github/workflows/` returns zero VuePress-related hits |
| 5.2 | Update docs in root guidance | `AGENTS.md`, `README` or future content guide | M3 | Commands mention `cd web/vuepress && pnpm run docs:build`; `documents/` is described as canonical content source |
| 5.3 | No root workspace wrapper for now | (decision recorded only) | 5.1d | Plan default: skip pnpm workspace until a second `web/<stack>/` actually exists. Re-open if needed. |

### M6 — Build Verification and Cleanup

**Outcome**: The migration is proven and old mixed source state is removed.

| # | Task | Files / Symbols | Depends on | Verification |
| --- | --- | --- | --- | --- |
| 6.1 | Run VuePress build | `web/vuepress` | M4, M5 | `pnpm run docs:build` succeeds using `documents/` as sourceDir |
| 6.2 | Check important routes | `/`, `/guide/`, `/trending/ai/`, `/programmer/awesome/`, `/leetcode/` | 6.1 | Generated site contains expected pages |
| 6.3 | Confirm no duplicate content source remains | old `src/` | 6.1 | No stale content copy remains under root `src/` |
| 6.4 | Review git diff for renames and config edits | full repo | 6.1 | Diff shows moves and config rebasing, not accidental content rewrite |

## Follow-Up: Awesome-first Content Governance

After the decoupling migration is stable, revive the previous content-governance work as a separate plan or milestone:

- classify pages as `awesome`, `reference`, `guide`, `article`, `interview`, `leetcode`, `digest`;
- create a top-level Awesome Hub;
- define agent content intake: raw output, digest, curated long-term knowledge;
- use `trending/ai` as the first curated sample area.

This should not block the directory decoupling migration.

## Risks

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| External VuePress config misses Theme Hope sourceDir conventions | M | H | Verify styles/public/sidebar build; add minimal `.vuepress` fallback only if needed |
| Relative links break during move | M | H | Preserve the same directory tree under `documents/`; run build and route checks |
| Include alias `@leetcode` breaks after moving `.vuepress` | M | M | Re-evaluate `path.resolve(__dirname, "../../leetcode")` from new config location |
| Generated `.vuepress/dist`, `.temp` or `.cache` gets moved as source | M | M | Exclude generated directories from source migration and set output paths explicitly if needed |
| Root tooling assumptions break | M | M | Update CI and command docs in the same migration branch |
| Future agents edit VuePress config thinking it is content | M | M | Add repository guidance that `documents/` is canonical content source and `web/vuepress/` is renderer code |

## Open Questions

- [ ] Should `summaries/` remain outside `documents/`, or become `documents/digest/` after editorial review? (defer to Awesome-first follow-up)
- [x] Should root keep a small package/workspace wrapper? **No** — `web/vuepress/package.json` is the only package entry until a second `web/<stack>/` exists (see M5.3).
- [ ] Should `documents/README.md` remain VuePress-specific home frontmatter, or should VuePress own a separate home page that links into `documents/`?
- [x] Should `.vuepress/public` move to `documents/assets/`? **Not this round** — keep under `web/vuepress/.vuepress/public/`; revisit in Awesome-first follow-up.
- [x] Does Theme Hope support external `--config` with sourceDir outside the config directory? **Decided in M0** — PoC must answer before M2 begins.

## Verification Strategy

- Before migration (lock baselines into the migration commit message):
  - `find src -name '*.md' -not -path 'src/.vuepress/*' | wc -l` → record N (markdown count).
  - `find src -type f -not -path 'src/.vuepress/*' -not -name '*.md' | wc -l` → record M (media/other count).
  - List current key routes from sidebar and navbar; save as a plain-text checklist.
  - Run `pnpm run docs:build` once on the current `src/` layout to confirm baseline green.
- During migration:
  - After M2, `find documents -name '*.md' | wc -l` must equal N; non-md count must equal M.
  - After M4, confirm VuePress sees pages with `cd web/vuepress && pnpm run docs:build`.
  - After M5, run commands from `web/vuepress`, not repo root; CI dry run on a feature branch passes.
- End-to-end:
  - Run `cd web/vuepress && pnpm run docs:build`.
  - Check generated routes for home, guide, AI, programmer awesome, leetcode and article pages.
  - Optionally run `cd web/vuepress && pnpm run docs:dev` for manual navigation.
- Rollback:
  - Keep migration in one branch and one or more small commits.
  - If external config fails, add a minimal `documents/.vuepress` adapter or revert M3-M4 while preserving the written plan.
