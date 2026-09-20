---
title: Agent Cron 规划-执行-验证闭环
icon: robot

index: true
order: 46

---

# Agent Cron 规划-执行-验证闭环

定时唤醒的 agent 容易落入两种低效状态：只写 notebook、或者在没有边界的情况下继续改同一个项目。本页把一次 cron 心跳压缩成可复用闭环：先做取舍，再完成一个可验证小块，最后只提交本轮明确拥有的文件。

<!-- more -->

## 适用场景

- `summaries/hermes/YYYY-MM-DD.md` 已经有上一轮接力点，但本轮仍需要自主判断是否继续。
- workspace 里有多个 repo，根目录可能不是 git repo，且部分 repo 存在既有 dirty path。
- 任务没有外部用户即时响应，必须在无人值守状态下做小步推进。
- 候选任务包括文档、静态站点、技能、书稿或本地脚本，且至少有一种本地验证方式。

不适用：需要真实发布渠道、客户样本、账号授权、支付链接或生产数据才能验证的任务。遇到这些条件时，把方向标成 `Stop / Switch`，不要用文案扩写冒充进展。

## 一轮心跳的固定顺序

```text
1. Snapshot：记录当前时间、候选 repo 的 git status --short、上一轮接力点。
2. Plan：接续已有明确任务；只有需要选题时才比较候选工作并说明选择理由。
3. Scope：确认只修改 clean path、新文件，或本轮明确拥有的 path。
4. Execute：完成一个 15-45 分钟可收口的小交付。
5. Verify：跑最贴近本轮文件的命令，记录真实输出或明确阻塞。
6. Commit：只 add 本轮文件；提交前复核 staged 文件清单。
7. Handoff：在 notebook 写下一轮第一步，不写空泛愿景。
```

这不是“每轮必须产出一篇文档”的流程。文档、代码、测试、模板都可以是交付物；关键是本轮结束时下一位 agent 能看见：为什么选它、改了什么、怎么验证、下一步先做什么。

## 规划必须回答的四个问题

| 问题 | 好答案 | 坏答案 |
| --- | --- | --- |
| 上一段/当前状态是什么 | `makemoney/` clean，上一轮提交已完成首页 CTA；`docs/` 有既有 `AGENTS.md` dirty，不接管 | “继续优化项目” |
| 是否需要选择候选工作 | 已有明确下一步就直接接续；目标开放时比较少量具体交付 | 每轮重做选题或只写“学习 AI” |
| 为什么选这个 | 范围小、能验证、避开 dirty path、接上上一轮证据 | “感觉有价值” |
| 下一段准备怎么做 | 下一轮第一条命令或决策门 | “继续完善” |

如果一个任务不能写出验证方式，先缩小任务；如果缩小后仍只能靠想象证明价值，切换到另一个候选。

## 执行预算：一轮只吃一个小块

优先选择满足下面条件的小块：

- **低风险**：不需要接管未知 dirty path，不改全局配置，不触发大范围格式化。
- **可验证**：至少能跑 `git diff --check -- <files>`，最好还有脚本、单测或目录 proof。
- **可交接**：本轮提交后，下一轮能从 notebook 的“后续接力”直接开始。
- **可复用**：减少未来判断成本，或让产品/文档/技能更容易被使用。

常见小块形状：

| 类型 | 小块示例 | 验证方式 |
| --- | --- | --- |
| 静态站点 | 给一个落地页补 CTA、内链或边界说明 | 相关 shell/Python 测试 + `git diff --check` |
| 文档资产 | 新增一张决策卡并接入目录 | `python3 scripts/check-markdown-proof.py ...` + catalog proof |
| 技能 | 新增 reference/checklist，或给 README 增加入口 | 针对路径的 grep/脚本断言 |
| 书稿 | 补一张技术卡片或章节索引 | 章节索引检查 + 人工可读标准 |
| 收入实验 | 写 intake 表、发布 preflight、观察记录模板 | 明确 `Next evidence needed`，不伪造外部反馈 |

## 提交前护栏

在目标 repo 中提交前，最少执行：

```bash
git status --short
git diff --check -- <本轮文件>
git add <本轮文件>
git diff --cached --name-only
git diff --cached --check
git commit -m "..."
```

执行提交前先查看初始暂存区；若含他人的既有改动，暂停上述使用整个 index 的提交步骤，保留那些文件的暂存状态。只有本轮自己误暂存的路径才可撤销暂存。提交受阻时仍可继续独立编辑和验证，不把已有 dirty path 混入自己的成果。

对于 `docs/documents/trending/ai/` 这类目录，优先使用 scoped proof：

```bash
python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/<new-page>.md
python3 scripts/check-ai-catalog.py
git diff --check -- documents/trending/ai/README.md documents/trending/ai/<new-page>.md
```

这组命令回答的是“本轮文档入口和基础链接是否可靠”，不是完整站点构建。若改了 VuePress 配置、导航或主题，再追加站点构建。

## Notebook 记录模板

```text
## HH:mm

### 规划与取舍
- 上一段/当前状态：
- 候选工作：
- 本轮选择：
- 选择理由：
- 下一段计划：

### 执行记录
- 实际推进：
- 变更文件：
- 验证方式：
- 后续接力：
```

记录时只写相对路径，例如 `docs/documents/trending/ai/...`、`summaries/hermes/YYYY-MM-DD.md`。不要把本机绝对路径写进 notebook 或公开文档。

## Stop / Switch 条件

出现下面任一情况，本轮应停止当前方向并切换：

- 候选任务需要外部授权、真实客户反馈或私有数据才能验证。
- 必须修改未知 dirty path 才能继续，但当前无人确认归属。
- 验证命令只能全仓扫描且会被既有无关失败拖累，无法写出 scoped proof。
- 连续多轮都在同一个静态页做边际文案优化，下一步收益低于沉淀可复用工作流。
- 只剩总结可写，没有新增资产、测试、结构或明确接力价值。

切换时不要消失：在 notebook 写清 `Decision: Switch`、切换原因、下一轮第一条命令，并优先回到 [Agent Cron 工作日志资产提取器](agent-cron-worklog-asset-extractor.md) 或 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md)。

## 与其他卡片的衔接

- 先用 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 判断哪些 path 可以碰。
- 再用 [Agent Cron 交付预算卡](agent-cron-delivery-budget-card.md) 判断本轮小块是否能收口。
- 如果最近 notebook 重复出现同一判断，用 [Agent Cron 工作日志资产提取器](agent-cron-worklog-asset-extractor.md) 把它提炼成文档、技能或模板。
- 如果目标是 AI 生成改动审查，把验证和交接字段映射到 [Agent 发布证据字段映射表](agent-release-evidence-field-map.md)。
