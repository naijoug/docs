# 仓库工程优化（CI 门禁 / 运行时升级 / 文档同步） — Plan

- **Date**: 2026-07-21
- **Author**: OpenCode agent (kimi-k3)
- **Status**: draft

## Goal

把 2026-07-21 架构评审中确认的 P0/P1 优化项落地：校验脚本进入 CI 门禁、CI 运行时（Actions 主版本 / Node）脱离弃用状态、gitee mirror 供应链引用固定、AGENTS.md 与实际目录重新同步。每个里程碑独立可提交、可回滚。

## Non-Goals

- 本轮不升级 `vuepress` / `vuepress-theme-hope` 的 rc 版本（继续冻结，见 Open Questions 的触发条件）。
- 本轮不迁移 pnpm 8 → 9/10（仅记录触发条件与检查清单，单独开计划执行）。
- 本轮不调整 `digest/` 的导航位置与内容策略。
- 本轮不引入 husky / lint-staged / commitlint 等钩子工具链。
- 本轮不接管仓库当前已有的 3 个未提交改动（见 Ownership）。

## Success Criteria

- `deploy-docs.yml` 在 build 之前运行 `check-markdown-proof.py documents`，坏链/缺 frontmatter 的推送会在 CI 失败且不会触发部署。
- CI 日志中不再出现基于弃用运行时的 Actions 警告（`checkout`、`setup-node`、`pnpm/action-setup` 均为当前主版本）。
- CI 使用 Node 22 构建成功，站点产物与 Node 20 时代无可见差异。
- `sync-to-gitee.yml` 中 `hub-mirror-action` 固定到具体 tag 或 commit SHA，不再浮动引用 `@master`。
- `AGENTS.md` 的目录清单与仓库实际一致（`awesome/`、`digest/`、`template/`、`scripts/` 已收录；`summaries/` 引用有定论）。
- 全部改动后 `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build` 本地构建成功。

## Ownership

- Starting `git status --short` summary: `M AGENTS.md`、`M documents/trending/ai/README.md`、`?? documents/trending/ai/delivery-package-output-cleanliness.md`
- Owned paths（本计划创建/修改）:
  - `plans/2026-07-21-repo-optimization.md`（本文件）
  - `.github/workflows/deploy-docs.yml`
  - `.github/workflows/sync-to-gitee.yml`
  - `web/vuepress/.vuepress/config.ts`（仅注释）
  - `web/vuepress/.vuepress/theme/theme.ts`（仅注释）
  - `web/vuepress/.vuepress/theme/sidebar/trending.ts`（尾斜杠）
  - `scripts/check-markdown-proof.py`（仅注释）
  - `AGENTS.md`（目录清单同步，见 Risks R4 的前置条件）
- Avoided dirty paths: `documents/trending/ai/README.md`、`documents/trending/ai/delivery-package-output-cleanliness.md`
- Continue / Narrow / Stop: **Continue** — 范围清晰，验证命令可复现；`AGENTS.md` 的既有未提交改动需先由 owner 提交或 stash（R4）。

## Current State

- `.github/workflows/deploy-docs.yml`: 使用 `actions/checkout@v3`、`pnpm/action-setup@v2`、`actions/setup-node@v3` + Node 20；build 前无任何内容校验步骤。
- `.github/workflows/sync-to-gitee.yml`: 使用 `Yikun/hub-mirror-action@master` 浮动引用，持有 `secrets.GITEE_PRIVATE_KEY` / `GITEE_TOKEN`；trigger 包含 `gh-pages` 分支（每次部署后会把约 69MB 产物也镜像到 Gitee）。
- `scripts/check-markdown-proof.py`: stdlib-only 校验器（frontmatter / 本地断链 / 绝对路径泄漏），`PATH_ALIASES` 硬编码 `@leetcode`，与 `theme.ts` 的 `include.resolvePath` 双写。
- `web/vuepress/.vuepress/config.ts`: 含强制 vue runtime esm-bundler 的 alias hack，无注释说明原因。
- `web/vuepress/.vuepress/theme/sidebar/trending.ts`: `Builder.structure("以太坊", "ethereum")` 缺尾斜杠，与仓库 prefix 约定不一致。
- `AGENTS.md`: 内容目录清单缺 `awesome/`、`digest/`、`template/`、`scripts/`；引用的 `summaries/` 目录实际不存在。
- Node 20 已于 2026-04 结束维护；当前日期 2026-07-21，CI 仍固定在 Node 20。
- Reusable: 现有校验脚本与测试（`scripts/test-check-markdown-proof.py`）、既有 CI 结构、AGENTS.md 验证阶梯。
- New code needed: 无新代码，全部为配置与文档编辑。

## Milestones

### M1 — CI 内容门禁 + 供应链固定

**Outcome**: 坏内容在 build 前被 CI 拦截；gitee mirror 不再浮动引用。

| # | Task | Files / Symbols | Depends on | Verification |
|---|------|-----------------|------------|--------------|
| 1.1 | 在 build 步骤前插入 proof check 步骤：`- name: markdown proof check` / `run: python3 scripts/check-markdown-proof.py documents` | `.github/workflows/deploy-docs.yml` | — | 推送一个含临时坏链的测试分支，CI 在 proof 步骤失败且不进入 build；删除坏链后 CI 变绿 |
| 1.2 | 将 `Yikun/hub-mirror-action@master` 固定到实施时上游最新 release tag 或 commit SHA，并在注释中记录固定值对应的版本 | `.github/workflows/sync-to-gitee.yml` | — | workflow 语法有效（`gh workflow view` 或 push 后观察）；注释含固定日期与上游版本号 |
| 1.3 | 确认 `gh-pages` trigger 去留（见 Open Questions Q1），按结论修改或保留 | `.github/workflows/sync-to-gitee.yml` | Q1 有结论 | trigger 列表与决策记录一致 |

### M2 — CI 运行时升级（Actions v4+ / Node 22）

**Outcome**: CI 不再使用弃用运行时；构建环境进入 Node 22 LTS。

| # | Task | Files / Symbols | Depends on | Verification |
|---|------|-----------------|------------|--------------|
| 2.1 | `actions/checkout@v3 → v4+`、`actions/setup-node@v3 → v4+`、`pnpm/action-setup@v2 → v4+`（取实施时最新主版本） | `.github/workflows/deploy-docs.yml` | M1（同一文件，避免冲突，按顺序改） | CI 运行无弃用警告 |
| 2.2 | `node-version: 20 → 22` | `.github/workflows/deploy-docs.yml` | 2.1 | CI 构建步骤成功 |
| 2.3 | 本地用 Node 22 验证构建一致性 | 本地环境 | 2.2 | `node -v` 为 22.x 时 `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build` 成功；抽查 `/docs/` 首页与一个有 code-tabs 的页面渲染正常 |
| 2.4 | 同步文档中的 Node 版本表述 | `AGENTS.md`（"Node version: 20 → 22"）、`.github/workflows` 注释 | 2.3 | 全仓 `grep -n "Node version" AGENTS.md` 与实际一致 |

### M3 — 文档与注释同步（零行为变更）

**Outcome**: AGENTS.md 与仓库实际一致；两处脆弱点留下维护线索。

| # | Task | Files / Symbols | Depends on | Verification |
|---|------|-----------------|------------|--------------|
| 3.1 | AGENTS.md 目录清单补 `awesome/`、`digest/`、`template/`、`scripts/`；`summaries/` 按 Q2 结论处理（创建目录或删除引用） | `AGENTS.md` | R4 前置（既有 dirty 改动已提交/stash）、Q2 | 清单中每个路径在磁盘上存在；`python3 scripts/check-markdown-proof.py --changed-from HEAD` 通过 |
| 3.2 | 别名双写互指注释：`theme.ts` resolvePath 处与 `check-markdown-proof.py` PATH_ALIASES 处各加一行 "Keep in sync with ..." | `web/vuepress/.vuepress/theme/theme.ts`、`scripts/check-markdown-proof.py` | — | 两处注释互相指向正确文件 |
| 3.3 | vue alias hack 加注释：说明 workaround 原因 + "每次升级 vue/vuepress 时重新验证是否可删" | `web/vuepress/.vuepress/config.ts` | — | 注释存在；`docs:build` 仍成功（纯注释，无行为变化） |
| 3.4 | `"ethereum"` → `"ethereum/"` 统一尾斜杠 | `web/vuepress/.vuepress/theme/sidebar/trending.ts` | — | `docs:dev` 中 trending/blockchain 侧边栏以太坊分组链接可正常跳转 |

### M4 — 演进触发条件落档（仅文档，不执行升级）

**Outcome**: pnpm 与 VuePress 的升级不在本轮做，但触发条件和检查清单写死，避免凭记忆决策。

| # | Task | Files / Symbols | Depends on | Verification |
|---|------|-----------------|------------|--------------|
| 4.1 | 在本文件 Open Questions 中记录 pnpm 8→10 迁移检查清单（`packageManager` 字段、lockfile 格式、CI pnpm 版本、AGENTS.md npx 写法四处同步） | 本文件 | — | 清单条目可勾选执行 |
| 4.2 | 记录 VuePress 正式版跟踪条件（出正式版前冻结；升级时重新验证 config.ts alias hack 是否可删、全量 build + 抽查侧边栏排序） | 本文件 | — | 同上 |

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| R1: Node 22 与 vuepress 2.0.0-rc.28 构建行为差异 | L | M | M2.3 本地先验证再改 CI；若失败回退 2.2，保留 Actions 升级（两者解耦） |
| R2: `pnpm/action-setup@v4` 行为变化（默认读 `packageManager` 字段）导致 CI 装到非预期 pnpm 版本 | M | M | 显式保留 `version: 8` 与 `package.json` 的 `packageManager: pnpm@8.15.9` 双保险；首跑观察 CI 日志中的 pnpm 版本行 |
| R3: 固定 hub-mirror-action 后错过上游修复 | L | L | 注释记录固定日期；与 pnpm 迁移（Q3）合并时顺带复查上游版本 |
| R4: `AGENTS.md` 当前有未提交改动，M3.1 直接编辑会混淆归属 | M | M | 前置条件：owner 先提交或 stash 既有改动；本计划 diff 只触碰目录清单相关行 |
| R5: 移除 `gh-pages` trigger 后 Gitee 侧若依赖产物分支做 Pages 会断 | L | H | Q1 先确认；默认保守保留，仅记录发现 |

## Open Questions

- [ ] Q1: `sync-to-gitee.yml` 的 `gh-pages` trigger 是否服务于 Gitee Pages？（默认假设：否 → 建议移除，仅镜像 `main`；需 owner 确认）
- [ ] Q2: `summaries/` 是创建空目录落地，还是从 AGENTS.md 删除引用？（倾向：创建目录，因为 AGENTS.md 与 decoupling 计划均将其列为既有约定）
- [ ] Q3: pnpm 8→10 迁移检查清单（本轮不执行）：`packageManager` 字段 / lockfile 格式变更 / `deploy-docs.yml` pnpm 版本 / AGENTS.md 与 README 的 `npx -y pnpm@8.15.9` 写法，四处必须同 PR 更新。
- [ ] Q4: VuePress 正式版跟踪条件（本轮不执行）：出正式版前冻结 rc；升级 PR 必须验证 config.ts vue alias hack 可否删除、全量 `docs:build`、抽查侧边栏排序与 `@leetcode` include。

## Verification Strategy

- Per-milestone: 见各表 Verification 列；每个里程碑独立 commit，消息含验证命令与结果。
- 内容级改动（M3）: `python3 scripts/check-markdown-proof.py --changed-from HEAD`。
- 渲染级改动（M2、M3.4）: `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build`；M2 另需一次 `docs:dev` 人工抽查导航。
- End-to-end: 全部里程碑合入后推送 main，观察 `deploy-docs.yml` 完整跑通（proof → build → deploy）且无弃用警告；`sync-to-gitee.yml` 在固定版本下运行成功。
- Rollback: 每个里程碑一个 commit，单独 `git revert` 即可；M1.1 的 proof 步骤若为误伤源（checker 本身误报），回滚该 commit 并在 `scripts/test-check-markdown-proof.py` 补回归用例后再启用。

## Follow-Up（不在本轮范围）

- pnpm 8→10 迁移（按 Q3 清单单独开计划）。
- VuePress rc → 正式版升级（按 Q4 条件触发）。
- 可选 pre-commit hook（几行 shell 调 `check-markdown-proof.py --changed-from HEAD`，opt-in，不引入工具链）。
- `digest/` 内容策略与导航位置评估。
