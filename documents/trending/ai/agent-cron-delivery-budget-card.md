---
title: Agent Cron 交付预算卡
icon: stopwatch

index: true
order: 44

---

# Agent Cron 交付预算卡

定时 agent 被唤醒时，最容易把时间花在“再看一遍状态、再写一段总结”上。本卡把一次无人值守节拍压成 15-45 分钟的小交付预算：先决定本轮到底交付什么，再验证它是否真的降低了下一轮成本。

<!-- more -->

## 适用场景

- cron / heartbeat agent 已经拿到 workspace 状态，但还没有明确用户即时指令。
- 当前有多个候选方向：写作、技能、项目修复、收入实验、信息扫描。
- 工作区存在既有 dirty path，需要先避开无关改动，再选择一个可提交小块。

不适用：生产事故、用户明确指定的修复、需要外部账号/发布渠道/私有样本才能完成的任务。那些场景优先按真实约束处理，不用本卡伪装成本地进展。

## 15-45 分钟预算

| 时间 | 目标 | 输出 |
| --- | --- | --- |
| 0-5 分钟 | 快照 | 当前时间、repo 状态、上一段接力点、避开的 dirty path |
| 5-10 分钟 | 选择 | 3 个候选任务 + 为什么只选其中 1 个 |
| 10-35 分钟 | 交付 | 新文件、模板、测试、脚本、小修复或书稿卡片中的一个 |
| 35-40 分钟 | 验证 | 一条能复跑的命令、断言或人工可复核检查 |
| 40-45 分钟 | 交接 | notebook 记录、只提交本轮文件、下一条安全命令 |

如果 10 分钟内无法选出可验证小块，把本轮标记为 `Narrow / Switch`，不要继续扩写泛泛规划。

## 选择任务的分数表

给每个候选任务打 0-2 分，分数最高且风险可控者优先：

| 维度 | 0 分 | 1 分 | 2 分 |
| --- | --- | --- | --- |
| 可验证性 | 只能描述想法 | 可人工复核 | 有命令/测试/断言 |
| 复利 | 一次性总结 | 可复用模板/入口 | 能被下一轮直接执行 |
| 边界 | 必须接管未知 dirty path | 只改 clean path 但需入口同步 | 新文件或本轮明确拥有 |
| 外部依赖 | 需要授权/渠道/真实样本 | 依赖已有本地资料 | 完全本地可完成 |
| 收入/能力相关 | 与主线弱相关 | 间接沉淀 | 直接服务 offer、技能或写作资产 |

硬规则：外部依赖为 0 且无法替代时，不选；边界为 0 且无人授权时，不选。

## 交付卡片模板

```text
Heartbeat time:
Previous handoff:
Dirty paths avoided:
Candidates:
Selected task:
Why this task now:
Delivery budget: 15 / 30 / 45 minutes
Owned files:
Verification command or check:
Result:
Decision: Continue / Narrow / Stop / Switch
Next safe command:
```

这张卡可以直接嵌入 `summaries/hermes/YYYY-MM-DD.md` 的“规划与取舍”和“执行记录”，也可以作为一次 agent handoff 的前半段。

## 验证标准

一次 cron 节拍不能只用“写了 notebook”当成果；至少满足下面之一：

- 新增或修改了一个可复用资产，并通过 markdown proof、catalog proof、测试或 diff check。
- 推进了项目中的一个小修复，并跑过对应单元测试、构建片段或脚本断言。
- 对收入实验做出 `Continue / Narrow / Stop / Switch` 判定，并留下真实证据或明确的下一条外部证据需求。
- 如果没有执行，是因为触发停止条件，并明确写出为什么不能安全推进。

## 与现有卡片衔接

- 有未知 dirty path 时，先读 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md)，确认本轮 owned / avoided scope。
- 不知道选什么交付物时，回到 [本地可验证 Proof Artifact 清单](local-verifiable-proof-artifact.md)，优先选测试、脚本或模板。
- 完成后用 [Agent 交接回执模板](agent-handoff-receipt-template.md) 写清 verified facts、open risks 和 next safe command。
- 如果候选任务是收入实验但缺渠道授权，按 [渠道未授权时的收入实验切换卡](income-experiment-switch-without-channel.md) 先 `Switch` 到本地可验证任务。

## 停止条件

- 本轮唯一能做的动作是继续解释上一轮，没有新证据、新文件或新验证。
- 需要修改的文件已经有未知改动，且无法用新文件或更小范围替代。
- 验证只能扫描全仓并会被大量既有 dirty path 干扰，无法收束到本轮文件。
- 交付物只是“看起来更完整”，但不会让下一轮少一步决策或少一个风险。

触发停止条件时，记录 `Decision: Stop / Switch`，并把下一条安全命令写成具体命令或具体文件，而不是“继续优化”。
