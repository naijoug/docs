---
title: AI 编程审查发布后观察样例
icon: magnifying-glass-chart

index: true
order: 32

---

# AI 编程审查发布后观察样例

这是一条脱敏样例，用来演示如何把样本征集后的回复，从“有人感兴趣”压缩成可执行的 `Continue / Narrow / Stop` 决策。它不是成功案例，也不假装已经成交；它只展示证据字段应该怎么写。

<!-- more -->

## 样例背景

- 渠道：开发者社群短帖
- CTA：征集 1 个 AI/Agent 生成改动后的审查样本，只做 30 分钟只读报告
- 回复形态：对方描述了一个 CI 失败场景，但还没有给出 PR 链接
- 公开边界：对方允许匿名讨论问题形状，不允许公开公司名、仓库名、截图或完整日志

## 24 小时最小记录包

```text
Pain quote: “Agent 改完测试配置后 CI 失败了，我不知道该先回滚配置还是继续让它修。”
Evidence shape:
- Command status: partial CI log summary；缺原始失败命令和 exit code
- Workspace status: 缺 PR / diff / 未提交状态摘要
- Risk summary: 不确定先回滚测试配置，还是继续让 agent 修复
- Agent claim: 缺 final report 中“已验证 / 未验证”段落
- Change scope: 只知道可能涉及测试配置；缺相对路径或模块范围
Boundary: 需匿名；不能公开公司名、仓库名、截图或完整日志
Next evidence needed: 先补 Command status：CI 中失败的原始命令和 exit code
Decision: Narrow —— 痛点具体，但证据不足以做完整审查；先交付下一条安全命令梯
```

## 为什么不是 Continue

这条回复已经有真实痛点，但 5 项最小证据仍不完整：

1. **Command status**：没有完整失败命令和 exit code，就不能判断是配置、依赖、缓存还是测试本身失败。
2. **Workspace status**：没有 PR、diff 或未提交状态摘要，就不能确认当前工作区是否还混有生成物或依赖变更。
3. **Risk summary**：已有“回滚还是继续修”的优先风险，可以作为本轮只读判断的锚点。
4. **Agent claim**：没有 agent final report 或已验证段落，就不能判断哪些结论是事实、哪些只是推断。
5. **Change scope**：没有相对路径或模块范围，就不能定位 agent 改了哪些文件。

因此本轮不应该写“AI 编程审查报告”，更不应该把它包装成公开成功案例。正确动作是收窄到一个小交付：下一条安全命令和 `Next evidence needed`。

## 可发送的收窄回复

```text
这个样本可以先做一个单点判断，但还不足以写完整审查报告。我们先缩小到“下一条最安全命令是什么”。

请先只补 1 项最小证据：Command status。

格式可以是：
- CI 中失败的原始命令；
- exit code 或 pass / fail / not run 状态；
- 如果命令没有运行，请写明原因。

先不要发完整仓库、完整日志、截图或生产数据。Command status 补齐后，我再判断是否需要补 Workspace status、Agent claim 或 Change scope。

收到后我只输出：Fact / Inference / Unverified、下一条安全命令、仍缺什么证据。不会要求生产权限，也不会公开公司名、仓库名、截图或完整日志。
```

## 写入 Audit Result 的方式

```text
Date: 2026-07-06
Channel: 开发者社群短帖
Prompt / CTA sent: 30 分钟 AI 编程工作流体检，只收 1 个失败命令、PR、agent log 或脱敏 final report
Reply summary: 对方遇到 agent 修改测试配置后 CI 失败，不确定先回滚还是继续让 agent 修
Command status: partial CI log summary；缺原始失败命令和 exit code
Workspace status: 缺 PR / diff / 未提交状态摘要
Risk summary: 不确定先回滚测试配置，还是继续让 agent 修复
Agent claim: 缺 final report 中“已验证 / 未验证”段落
Change scope: 只知道可能涉及测试配置；缺相对路径或模块范围
Public boundary: 只能匿名；不能公开公司名、仓库名、截图或完整日志
Sensitive material removed: 公司名、仓库名、日志截图、路径细节
Deliverable: 下一条安全命令梯 + Next evidence needed
Decision: Narrow
Next evidence needed: 先补 Command status：失败命令和 exit code；暂不扩大到完整仓库或完整日志
Follow-up action: 复制收窄回复，等待最小证据后再决定是否进入首份报告
Asset destination: docs/documents/trending/ai/ai-coding-audit-observation-example.md
```

## 自检标准

- 如果对方先补齐 `Command status`，再能按需补齐 `Workspace status`、`Agent claim` 和 `Change scope`，可以从 `Narrow` 升级到 `Continue`，进入首份报告。
- 如果对方只能提供未脱敏私有仓库、生产权限或完整日志，保持 `Stop`，不要接收材料。
- 如果只有点赞、转发或泛泛认可，不写 Audit Result；只记录渠道表现，回到样本征集模板重写 hook。

## 关联文档

- [AI 编程审查发布后观察清单](ai-coding-audit-publish-observation-runbook.md)
- [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md)
- [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md)
- [下一条安全命令梯](next-safe-command-ladder.md)
