---
title: 30 分钟 AI 编程审查收入实验
icon: stopwatch

index: true
order: 34

---

# 30 分钟 AI 编程审查收入实验

这不是一篇“如何成为 AI 顾问”的宏大路线，而是一轮可以当天执行、当天停止的小实验：用 30 分钟证明一个开发者是否愿意把真实 agent 工作流样本交给你审查，并且看完后知道下一条安全命令是什么。

<!-- more -->

## 实验目标

本实验只验证一个假设：

> 有人正在被 AI 编程工作流里的不确定性困住，并愿意用一个 PR、失败命令、agent log 或 final report，换取一份可复核的下一步建议。

不要在这一轮验证下面事情：

- 不验证完整咨询服务是否成立；
- 不验证自动化工具能否收费；
- 不承诺修复客户代码；
- 不把未授权材料写成公开案例；
- 不用点赞、收藏或泛泛称赞当作通过信号。

通过信号只有一个：拿到足够小、足够真实、边界清楚的样本，并能输出 `Continue / Narrow / Stop`。

## 准备材料

开始前只需要准备 4 个可复制入口：

| 材料 | 用途 | 路径 |
| --- | --- | --- |
| 样本征集 | 发出最小 CTA | [AI 编程审查样本征集模板](ai-coding-audit-sample-request.md) |
| 首次回复 | 把热情回复收束成范围和证据 | [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md) |
| 首份报告 | 把样本变成 1 页交付 | [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) |
| 命令梯 | 给出下一条最安全命令 | [下一条安全命令梯](next-safe-command-ladder.md) |

如果要把这轮实验沉淀成书稿或样本包，可以回看 `books/tech-cards-handbook/samples/ai-agent-audit-report-one-pager.md` 和 `books/tech-cards-handbook/samples/ai-agent-case-publishing-ladder-one-pager.md`；但本轮不要先写案例，先拿证据。

## 30 分钟流程

### 0-5 分钟：选一个真实渠道

只选一个你能接触真实开发者的渠道，例如：

- 自己维护的开发者群；
- 最近讨论 AI coding agent 的朋友圈、X、即刻或 Threads；
- 开源项目的 issue / discussion；
- 过去合作过、正在试用 agent 的团队。

不要为了显得“启动很大”同时发 5 个渠道。单渠道更容易追踪证据形状和回复质量。

### 5-10 分钟：发一条只收样本的短帖

复制下面短帖，按渠道语气轻微改写：

```text
我想做一个 30 分钟的小实验：只读审查一次 AI 编程工作流，不改代码、不接生产权限。

如果你最近遇到过这些情况之一：
- AI 改完代码但没人敢合并；
- final report 写了“已验证”，但你不知道它到底跑了什么；
- PR / CI 失败后 agent 继续乱改；
- dirty workspace 里混进了不属于本轮的改动；
- reviewer 不知道下一条最安全命令是什么。

可以给我一个脱敏样本：PR、失败命令、agent log、final report 或 review comment 都行。
我会回你一份很短的只读建议：最高风险、下一条安全命令、以及 Continue / Narrow / Stop。

边界：不要发密钥、生产数据、客户隐私或未经授权的私有内容；如果只能描述现象，也可以先说“现象 + 你最不确定的问题”。
```

这条短帖的目标不是成交，而是让对方回复一个可审查材料。

### 10-20 分钟：把回复分流

收到回复后，先不要审查代码，按证据形状分流：

| 回复状态 | 判断 | 立刻回复 |
| --- | --- | --- |
| 只有“我也遇到过” | `Narrow` | 追问“一条失败命令或一段 final report 可以吗？” |
| 有公开 PR / issue / build log | `Continue` | 确认只读范围、公开边界和期望输出 |
| 有私有材料但未脱敏 | `Narrow` | 要求先删掉客户名、私有路径、密钥和用户数据 |
| 需要生产权限或完整私有仓库 | `Stop` | 拒绝接收，改为让对方贴一段脱敏日志或命令输出 |
| 对方想直接买长期服务 | `Narrow` | 先做一份固定范围 1 页报告，再谈后续 |

可直接复制的收束回复：

```text
可以，我先只做 30 分钟只读审查，不改代码。

为了避免误判，请补 5 个字段：
1. 这次 agent 改动原本想完成什么？
2. 你最不确定的点是什么？
3. 哪个 PR / 命令 / log / final report 最能证明这个不确定性？
4. 哪些内容不能公开？
5. 你希望我最后给出什么：下一条命令、风险排序、handoff 模板，还是是否继续的判断？
```

### 20-30 分钟：交付一个最小结果

如果证据足够，只交付 1 个最高风险和 1 条下一步，不要写成长报告：

```markdown
# Mini AI Coding Audit

## Scope
- Reviewed:
- Not reviewed:
- Evidence inspected:
- Public boundary:

## Highest risk
- Risk:
- Evidence:
- Why it matters:

## Next safe command
- Command / check:
- Why this first:
- Pass means:
- Fail means:
- Next action:

## Decision
- Continue / Narrow / Stop:
- Next evidence needed:
```

如果证据不足，也要交付结果，但结果是 `Next evidence needed`：

```text
我现在不能判断“问题出在哪里”，因为还缺少可复核证据。
下一步请补其中一个即可：
- 失败命令和 exit code；
- PR diff 或 review comment；
- agent final report 中关于验证的段落；
- CI 链接或脱敏日志。

在补证据前，我的判断是 Narrow，不建议把它写成公开案例或付费审查。
```

## 记录实验结果

每轮只记录事实，不写感觉：

| 字段 | 写法 |
| --- | --- |
| 渠道 | 发在哪里，什么时候发 |
| 输入证据 | PR、命令、log、final report、review comment，或只有口头描述 |
| 公开边界 | 可公开、只能匿名、只能内部、停止接收 |
| 交付物 | 下一条命令、风险排序、handoff、Next evidence needed |
| 结果 | `Continue / Narrow / Stop` |
| 下一步 | 要补什么证据，或是否进入 1 页报告 |

可以先用 [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md) 存放私有记录，再把可公开的摘要回填到 [AI 编程审查路线图](ai-coding-audit-roadmap.md) 的“真实样本回填占位表”。关键是：没有证据就不要把它包装成“市场反馈”。

## 停止条件

出现下面任一情况，本轮停止，不继续扩展服务页或工具：

- 连续 2-3 次只有点赞，没有真实样本；
- 对方只能提供敏感材料，无法脱敏；
- 你无法在 30 分钟内把样本压缩成一个最高风险；
- 下一条安全命令写不出来，只能给泛泛建议；
- 公开边界不清，但你想把它写成案例。

停止不是失败，而是证明当前 hook、渠道或证据要求需要调整。下一轮可以改标题、换渠道，或把 offer 收窄到单点，例如“帮你找 PR 里的下一条验证命令”。

## 成功后的下一步

如果拿到 `Continue` 信号，不要马上做自动化产品。按下面顺序升级：

1. 用 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) 写完整 1 页报告；
2. 用 [AI 编程审查服务交付指南](ai-coding-audit-service.md) 固定 offer 边界和明确不做事项；
3. 如果进入 PR，使用 [AI 编程审查 Issue 到 PR 交接说明](ai-coding-audit-issue-to-pr-handoff.md) 防止 issue 里的证据在 PR 中丢失；
4. 公开前先过 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md)，把 `Fact / Inference / Unverified / Private / Stop` 分层写清；
5. 复盘时回到 [AI 程序员资产飞轮](ai-programmer-asset-flywheel.md)，判断它应该沉淀成文章、模板、skill、书稿卡片还是产品实验。

收入实验的核心不是“我写了多少文档”，而是“有人是否愿意拿真实证据换取你的判断”。
