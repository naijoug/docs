---
title: AI 编程审查技能复用演示
icon: route

index: true
order: 38

---

# AI 编程审查技能复用演示

这份演示把一条发布后观察，依次送进 `next-safe-command-ladder` 和 `audit-evidence-boundary` 两个既有技能，产出下一条安全命令、公开边界和 `Continue / Narrow / Stop` 决策。它用于避免两种常见误判：只有痛点就直接写完整报告，或只有匿名授权就直接发布案例。

<!-- more -->

## 输入观察

```text
Pain quote: “Agent 改完依赖和测试配置后，CI 在 lint 阶段失败；它说已经验证过，但报告里只有一句 all checks passed。”
Evidence shape:
- Command status: failed CI job name；缺原始 lint 命令和 exit code
- Workspace status: PR diff summary；缺未提交状态或生成物摘要
- Risk summary: agent 同时改依赖和测试配置，可能让 lint 失败来源不清
- Agent claim: “all checks passed”；缺 final report 的完整 verified / not verified 段落
- Change scope: 依赖和测试配置；缺相对路径或模块范围
Boundary: 可以匿名讨论失败形状；不能公开公司名、仓库名、截图、完整日志或私有路径
Next evidence needed: 先补 Command status：原始 lint 命令和 exit code；再按需补 Agent claim 与 Change scope
Decision: Narrow
```

## 第一步：复用 next-safe-command-ladder

把观察改写成命令梯输入：

| 字段 | 写法 |
| --- | --- |
| Change type | Agent 修改依赖和测试配置后 CI lint 失败 |
| Main risk | 直接让 agent 继续修可能扩大改动；直接回滚可能丢失有用 diff |
| Known evidence | Workspace status 里有 PR diff summary；Command status 只有失败 CI job name；Agent claim 只有一句 all checks passed |
| Missing evidence | Command status 缺原始失败命令和 exit code；Agent claim 缺完整验证段落；Change scope 缺相对路径范围 |

输出只给下一条最安全命令，不给“完整修复方案”：

```text
Next safe command: 先在只读模式收集失败边界：复制 CI 中的原始 lint 命令、exit code 和失败摘要；不要运行修复命令，不要让 agent 自动提交。
Why this command: 当前缺少可复核失败点；先证明失败是什么，再决定是回滚、最小修复还是补测试。
Stop condition: 如果只能拿到截图、私有路径或完整日志，先脱敏成命令形状和错误类别；不能脱敏就停止公开复盘。
```

## 第二步：复用 audit-evidence-boundary

把准备公开的句子分层：

| Claim | Boundary |
| --- | --- |
| “CI 在 lint 阶段失败” | Fact，但公开时只能写失败阶段和命令形状，不能贴完整日志 |
| “Agent 声称 all checks passed” | Fact，前提是 final report 原文可脱敏引用；否则写成 evidence shape |
| “Agent 没有真的验证” | Inference；没有命令输出前不能写成结论 |
| “这个项目的配置有问题” | Unverified；需要 diff 和失败命令支持 |
| 公司名、仓库名、私有路径、截图 | Private / Stop；不进入公开样例 |

公开版本只能保留方法样板：

```text
一个 agent 改动后的 CI lint 失败样本里，最先要确认的不是“让 agent 继续修”，而是把 Command status、Workspace status、Risk summary、Agent claim 和 Change scope 拆开。Command status 还缺原始命令和 exit code 时，交付物应收窄为下一条安全命令和 Next evidence needed。
```

## 第三步：合并决策

```text
Decision: Narrow
Reason: 痛点真实且边界可匿名，但缺少原始命令、exit code 和完整验证段落；只能交付 next safe command，不能写完整审查报告或公开成功案例。
Follow-up: 先请求 1 个最小证据字段（Command status）；若补齐后仍需要定位，再请求 Agent claim 与 Change scope；若只能提供不可脱敏材料，则 Stop。
Asset destination: docs/documents/trending/ai/ai-coding-audit-skill-reuse-demo.md
```

## 可复制输出模板

```text
Evidence snapshot:
- Pain quote:
- Command status:
- Workspace status:
- Risk summary:
- Agent claim:
- Change scope:
- Public boundary:

Next safe command:
- Command / collection step:
- Why safe:
- Stop condition:

Evidence boundary:
- Fact:
- Inference:
- Unverified:
- Private / Stop:

Decision:
- Continue / Narrow / Stop:
- Next evidence needed:
- Asset destination:
```

## 配套填写样例

如果要把这条演示交给下一轮 agent 或样本提供者，先填一份 [AI 编程审查一页纸填写样例](ai-coding-audit-one-pager-filled-example.md)：它把观察快照、复用路径、技能化门槛和 `Next evidence needed` 压成一页，避免下一轮又重新讨论是否该新建技能。

## 使用边界

- 这份演示不是新技能；它是先复用既有技能的样板。
- 如果连续 2-3 个真实样本都需要同样的合并输出，再考虑按 [AI 编程审查观察到执行技能清单](ai-coding-audit-observation-to-skill-checklist.md) 新建更窄技能。
- 如果没有真实失败命令或授权边界，只能产出 `Next evidence needed`，不能把兴趣回复包装成案例。

## 关联文档

- [AI 编程审查发布后观察样例](ai-coding-audit-observation-example.md)
- [AI 编程审查观察到执行技能清单](ai-coding-audit-observation-to-skill-checklist.md)
- [下一条安全命令梯](next-safe-command-ladder.md)
