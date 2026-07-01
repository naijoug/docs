---
title: AI 编程审查实验切换清单
icon: toggle-on

index: true
order: 38

---

# AI 编程审查实验切换清单

这份清单用于避免 AI 编程审查实验在没有真实样本、没有发布渠道、没有反馈证据时继续空转。它不是否定这条路线，而是规定：什么时候继续推进，什么时候缩小 offer，什么时候把当前资产封存并切换到下一个收入实验。

<!-- more -->

## 先确认实验状态

每次复盘时先把当前状态写进 [AI 编程审查路线图](ai-coding-audit-roadmap.md) 的真实样本回填占位表，而不是凭感觉决定继续写文档。

| 问题 | `Continue` | `Narrow` | `Stop / Switch` |
| --- | --- | --- | --- |
| 是否有真实渠道可以发布？ | 有账号、社群或邮件列表可触达真实开发者 | 只能触达一个小圈子，需要改写成私信或 README CTA | 当前没有可用渠道，cron 不能代发 |
| 是否有真实证据输入？ | 有 PR、失败命令、agent log、review comment 或 final report | 只有口头场景，但对方愿意补材料 | 只有点赞、收藏、泛泛认可或内部想象 |
| 是否能交付下一步？ | 能输出 1 页报告或下一条安全命令梯 | 只能输出 `Next evidence needed` | 连 `Next evidence needed` 都依赖敏感信息或授权不清 |
| 是否值得继续写资产？ | 同类问题重复出现，且有开发者愿意投入时间 | 只适合沉淀单点模板或书稿卡片 | 已经连续多轮只新增文档，没有外部信号 |

## 三个切换动作

### 1. Continue：进入真实样本循环

当有人提供可复核证据时，停止新增路线图，直接进入执行链：

1. 用 [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md) 确认目标、范围、证据和公开边界；
2. 按 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) 交付只读报告；
3. 用 [AI 编程审查发布后观察清单](ai-coding-audit-publish-observation-runbook.md) 回填痛点原话、证据形状和 `Next evidence needed`；
4. 若要公开，先走 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md) 和 evidence boundary checkpoint。

### 2. Narrow：缩小到单点 offer

当反馈只集中在一个点时，不要继续卖完整审查。把 offer 缩成一个可验证动作：

| 集中痛点 | 缩小后的交付 | 入口 |
| --- | --- | --- |
| 不知道先跑什么命令 | 下一条安全命令梯 | [下一条安全命令梯](next-safe-command-ladder.md) |
| final report 没写未验证项 | final report handoff checklist | `skills/skills/cron/hourly-progress/references/final-report-evidence-chain.md` |
| PR 里丢失 Issue 证据 | Issue 到 PR 字段映射 | [AI 编程审查 Issue 到 PR 交接说明](ai-coding-audit-issue-to-pr-handoff.md) |
| 公开案例容易越界 | 事实 / 推断 / 未验证分层 | `books/tech-cards-handbook/chapters/ai-agent/public-case-separates-facts-inferences-unverified.md` |

`Narrow` 的目标是更快拿到一个真实完成样本，而不是把完整服务文案写得更漂亮。

### 3. Stop / Switch：封存实验，切到新资产

如果连续多轮都满足下面任意两条，就停止扩写 AI coding audit 文档，切到其他 AI 程序员资产或收入实验：

- 没有可用外部发布渠道，且本轮 agent 不能安全代发；
- 没有真实样本、回复、Issue、PR 或失败日志；
- 只能继续新增 README、路线图、模板或书稿卡片；
- 新增内容不能改变下一次的真实执行路径；
- 需要编造示例才能让文档看起来完整。

封存时只做三件事：

1. 在路线图回填表中写 `Unverified` 和 `Next evidence needed`；
2. 确认已有入口、样本模板、首份报告和观察清单足够支撑下一次真实执行；
3. 把下一段任务切换到另一个可验证资产，例如开发者工具小项目、已有 repo 的测试修复、或另一条内容 / 服务 offer。

## 发布前防误判

不要把这些信号当成 `Continue`：

- “这个方向不错”；
- 收藏、点赞、转发；
- 读者说“以后可以聊聊”；
- agent 自己觉得文档体系已经完整；
- 为了填表而写的脱敏示例行。

可以进入 `Continue` 的最低标准是：对方愿意提供一个可审查证据形状，并允许你在明确公开边界内输出下一步。

## 下一步记录格式

切换决策写成四行即可：

```text
当前证据：
公开边界：
Next evidence needed：
Decision：Continue / Narrow / Stop / Switch
```

如果 `Decision` 是 `Switch`，下一轮不要再新增 AI coding audit 文档；优先寻找另一个能在本地验证、能提交、能交付具体产物的小任务。
