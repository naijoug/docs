---
title: AI 程序员刻意练习闭环
icon: dumbbell

index: true
order: 45

---

# AI 程序员刻意练习闭环

AI 时代的程序员不能只比谁更会提问。真正的复利来自一套可重复练习：让 agent 提速，同时保留自己发现问题、设计验证、抽象资产的能力。

<!-- more -->

## 适用场景

- 已经能用 AI 生成代码或文档，但担心自己只是在“转发 agent 输出”。
- 想持续提升工程判断、调试、测试设计、架构取舍或产品化能力。
- 每周有 30-90 分钟可投入一个小练习，并希望把练习沉淀成文档、技能、书稿卡片或收入实验素材。

不适用：生产事故、明确客户交付、需要先保密处理的真实样本。那些场景优先按真实交付边界执行，练习记录只保留可公开的证据形状。

## 五步闭环

| 步骤 | 动作 | 产物 |
| --- | --- | --- |
| 1. 选能力 | 只选一个能力：读代码、写测试、定位失败、重构、性能分析、PR 审查、产品拆解 | `Practice target` |
| 2. 造小题 | 选择一个 30-90 分钟可完成的本地样本，不需要外部授权 | `Sample / fixture / repo snapshot` |
| 3. 人先判断 | 在调用 agent 前写下自己的假设、风险和验证命令 | `Human hypothesis` |
| 4. Agent 辅助 | 让 agent 生成候选方案、测试或解释，但不直接接受最终结论 | `Agent proposal` |
| 5. 验证沉淀 | 跑命令、比较差异、记录错因，把可复用部分抽成资产 | `Proof + reusable asset` |

核心约束：每轮练习必须留下一个可复核 proof。没有命令时，也要有人工可复核标准，例如“这份 PR review 是否列出 owned files、avoided dirty paths、open risks 和 next safe command”。

## 练习卡片模板

```text
Practice date:
Practice target:
Why this capability now:
Sample / fixture:
Human hypothesis before agent:
Agent prompt or role:
Agent proposal summary:
Verification command or review standard:
Result:
What I learned that the agent did not own:
Reusable asset created:
Decision: Continue / Narrow / Stop / Switch
Next drill:
```

`What I learned that the agent did not own` 是必填项。它迫使练习者区分“agent 帮我完成了什么”和“我自己的判断能力到底增长了什么”。

## 每周安排

| 时间盒 | 练习目标 | 结束条件 |
| --- | --- | --- |
| 30 分钟 | 跑一次小型 proof：断链检查、单元测试、最小复现、PR 只读审查 | 有命令输出或一条明确 `Next evidence needed` |
| 60 分钟 | 从失败样本到修复：先写假设，再让 agent 给候选方案，最后自己裁剪 | 有 diff、测试结果和错因记录 |
| 90 分钟 | 把一次练习升级为资产：教程、技能、书稿卡片、模板或服务交付片段 | 有可提交文件和复用入口 |

如果连续两周练习都只是在阅读资料，改用 [下一条安全命令梯](next-safe-command-ladder.md)：先把下一步压成一个可运行命令，再谈路线图。

## 能力主题示例

| 主题 | 小题 | 可验证 proof |
| --- | --- | --- |
| 调试 | 找一个失败测试，只允许改一处最小逻辑 | `pytest` / `npm test` / 回归脚本输出 |
| 代码审查 | 对一份 AI 生成 diff 做只读审查 | owned files、风险、验证缺口、next safe command |
| 文档工程 | 新增一页文档并接入目录 | markdown proof + catalog proof |
| 产品化 | 把一个反复出现的问题写成一页 offer preflight | `Continue / Narrow / Stop / Switch` 决策和停止条件 |
| 工具链 | 给脚本补一个失败样例驱动的测试 | 回归测试数量增加，且说明未扩大边界 |

## 与现有资产衔接

- 想把练习变成长期资产时，接到 [AI 程序员资产飞轮](ai-programmer-asset-flywheel.md)：练习证据先变成模板，再变成技能、文章、书稿或服务。
- 练习发生在无人值守 cron 中时，先用 [Agent Cron 交付预算卡](agent-cron-delivery-budget-card.md) 控制范围，避免把练习扩成无限工具维护。
- 如果练习目标是 AI 生成 PR 审查，按 [AI 生成 PR 的最小审查入口](ai-generated-pr-review-entry.md) 固定 dirty worktree 边界和验证梯。
- 如果练习目标是收入实验，先用 [AI 程序员每周收入实验规划器](ai-programmer-weekly-experiment-planner.md) 写清渠道、证据和停止条件，不要把练习伪装成已验证需求。

## 停止条件

- 本轮没有人类假设，只是让 agent 直接产出答案。
- 验证命令无法运行，且没有写出为什么不能运行。
- 练习样本来自未授权私有材料，无法脱敏或公开证据形状。
- 产物只能本次使用，没有进入模板、脚本、技能、文章、书稿或下一轮计划。

触发停止条件时，把决策写成 `Stop / Switch`，下一轮改选一个更小、可验证、可公开证据形状的样本。
