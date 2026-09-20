---
title: Content-only 文档 Proof Gate
icon: list-check

index: true
order: 55

---

# Content-only 文档 Proof Gate

文档仓库里最常见的低风险交付不是“把站点完整跑起来”，而是新增或修改一两篇 markdown。此时应先证明这次内容改动没有基础破损，再决定是否升级到 VuePress build。

<!-- more -->

## 使用场景

- 本轮只改 `documents/` 下的说明页、方法卡、模板或 catalog。
- 工作区已有不属于本轮的 dirty path，需要避免把旧脏文件混进 proof。
- 改动没有触碰 sidebar、主题配置、Vue 组件、workflow 或渲染逻辑。
- 需要在提交前给后续 agent 留下一条可复跑的验证命令。

不适合用它替代完整验证的场景：改了 `web/vuepress/`、`.github/workflows/`、sidebar 配置、include 规则、checker 源码，或新增了依赖渲染行为才能发现问题的内容。

## 三层门禁

| 层级 | 何时使用 | 命令 | 通过含义 |
| --- | --- | --- | --- |
| 窄目标 | 改前或只接管一两个文件 | `python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/new-page.md` | 指定文件 frontmatter、相对链接、include 文件目标和绝对路径检查通过 |
| 工作区范围 | 本轮改动尚未提交，且已核对文件归属 | `python3 scripts/check-markdown-proof.py --changed-from HEAD --list-files` | 检查相对 `HEAD` 的 tracked 改动和 untracked Markdown；输出集合仍须与 ownership 对照 |
| Catalog 覆盖 | 新增/删除 AI 目录页面或改 `README.md` catalog | `python3 scripts/check-ai-catalog.py` | `documents/trending/ai/README.md` 没有漏链、重复链接或指向缺失页面 |

如果工作区里有明确不属于本轮的 dirty markdown，先在交接记录写清归属，再使用显式排除：

```bash
python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
```

`--exclude` 不是“让红灯变绿”的捷径；它只用于已确认不接管的旧脏路径。输出文件列表必须人工核对，确认本轮新增页和入口页都被检查到了。

已有无关改动时，可以直接传本轮文件列表，避免先收集整个工作区。不要将文件列表与 `--changed-from` 混用。提交后若要验证整条分支，应使用实际目标分支对应的 merge-base 提交；相对 `HEAD` 没有文件时不能声称 PR 已通过检查。非 Markdown 任务按自身验证规则执行，无须制造一个空文档 proof。

## 决策表

| 改动范围 | 最小可提交 proof | 需要追加什么 |
| --- | --- | --- |
| 单篇 AI 方法卡 | `check-markdown-proof.py <file>` | 人工读一遍标题、适用场景、操作步骤是否闭合 |
| AGENTS / 根 README / PR 模板 | `check-markdown-proof.py <files>` | 通用链接和路径检查、人工审查指令；无需文章 frontmatter |
| 新增方法卡 + README catalog | `check-markdown-proof.py --changed-from HEAD --list-files` + `check-ai-catalog.py` | 确认 list-files 没漏掉新页与 README |
| 内容移动、删除或重命名 | `check-markdown-proof.py documents` | 查找入站断链；涉及路由/渲染时追加 `docs:build` 和预览 |
| 修改 checker 规则 | 对应回归 fixture + `python3 scripts/test-check-markdown-proof.py` | `python3 scripts/check-markdown-proof.py documents`，说明旧行为和新行为 |
| 修改 VuePress/sidebar/theme | markdown proof 只能做兜底 | `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build` 和受影响页面预览 |
| 修改 workflow | 运行其适用的本地命令并检查 workflow 结构 | 远端未运行时标为未验证；只有涉及站点构建才追加 build |

## 交付记录模板

```text
Owned paths:
- documents/trending/ai/new-page.md
- documents/trending/ai/README.md

Avoided dirty paths:
- AGENTS.md（启动前已有，不属于本轮）

Proof:
- python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
  - checked files: documents/trending/ai/README.md, documents/trending/ai/new-page.md
  - result: markdown proof ok
- python3 scripts/check-ai-catalog.py
  - result: AI catalog proof ok

Decision: Continue
Next safe command: git diff --cached --name-only，确认只暂存本轮 owned paths
```

## 常见误判

- **只看 `checked 2 file(s)`**：数量不能证明 scope 正确；需要 `--list-files` 输出文件名。
- **把旧脏文件也检查通过就提交**：proof 通过不等于 ownership 合法；提交前仍要看 `git diff --cached --name-only`。
- **新增页面忘记 catalog**：单篇 checker 可以通过，但用户入口不可发现；AI 目录同级新增页必须跑 catalog proof。
- **内容 proof 冒充渲染 proof**：代码 tabs、VuePress 插件、sidebar 排序、include 锚点是否存在，仍需要 build 或预览验证。
- **排除本轮失败文件**：如果 `--exclude` 排除了本轮 owned path，本轮没有合格 proof，应回到最小修复而不是提交。

## 与既有卡片的关系

- [AI 文档改动 Proof Checker](ai-doc-change-proof-checker.md)：说明 checker 能检查什么。
- [changed-from HEAD 文档改动 Preflight](changed-from-head-docs-preflight.md)：说明如何自动收束本轮 markdown 范围。
- [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md)：说明 dirty workspace 下的 ownership 记录。
- [多 Agent 会话控制台检查卡](multi-session-agent-control-plane.md)：当多个 agent 同时推进时，把本页 proof 结果写入 ledger。

本页的定位是“内容型 docs 改动的门禁决策表”：先用轻量 proof 证明基础完整性，再按改动类型决定是否需要升级到完整 build。
