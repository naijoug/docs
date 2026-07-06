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
Evidence shape: failed command + partial CI log summary；PR link Missing
Boundary: 需匿名；不能公开公司名、仓库名、截图或完整日志
Next evidence needed: 补失败命令、exit code、相关配置文件范围、agent final report 的验证段落
Decision: Narrow —— 痛点具体，但证据不足以做完整审查；先交付下一条安全命令梯
```

## 为什么不是 Continue

这条回复已经有真实痛点，但还缺三类关键证据：

1. **可复核命令**：没有完整失败命令和 exit code，就不能判断是配置、依赖、缓存还是测试本身失败。
2. **改动边界**：没有 PR 或 diff 范围，就不能定位 agent 改了哪些文件。
3. **验证声明**：没有 agent final report 或已验证段落，就不能判断哪些结论是事实、哪些只是推断。

因此本轮不应该写“AI 编程审查报告”，更不应该把它包装成公开成功案例。正确动作是收窄到一个小交付：下一条安全命令和 `Next evidence needed`。

## 可发送的收窄回复

```text
这个样本可以先做一个单点判断，但还不足以写完整审查报告。我们先缩小到“下一条最安全命令是什么”。

请补 4 个最小证据：
1. CI 中失败的原始命令；
2. exit code 或失败摘要；
3. 这次 agent 改动涉及的文件范围；
4. agent final report 里关于“已验证/未验证”的段落。

收到后我只输出：Fact / Inference / Unverified、下一条安全命令、仍缺什么证据。不会要求生产权限，也不会公开公司名、仓库名、截图或完整日志。
```

## 写入 Audit Result 的方式

```text
Date: 2026-07-06
Channel: 开发者社群短帖
Prompt / CTA sent: 30 分钟 AI 编程工作流体检，只收 1 个失败命令、PR、agent log 或脱敏 final report
Reply summary: 对方遇到 agent 修改测试配置后 CI 失败，不确定先回滚还是继续让 agent 修
Input evidence: 口头痛点 + partial CI log summary；缺失败命令、exit code、PR/diff
Public boundary: 只能匿名；不能公开公司名、仓库名、截图或完整日志
Sensitive material removed: 公司名、仓库名、日志截图、路径细节
Deliverable: 下一条安全命令梯 + Next evidence needed
Decision: Narrow
Next evidence needed: 失败命令、exit code、相关文件范围、agent final report 的验证段落
Follow-up action: 复制收窄回复，等待最小证据后再决定是否进入首份报告
Asset destination: docs/documents/trending/ai/ai-coding-audit-observation-example.md
```

## 自检标准

- 如果对方补齐失败命令、exit code、文件范围和验证段落，可以从 `Narrow` 升级到 `Continue`，进入首份报告。
- 如果对方只能提供未脱敏私有仓库、生产权限或完整日志，保持 `Stop`，不要接收材料。
- 如果只有点赞、转发或泛泛认可，不写 Audit Result；只记录渠道表现，回到样本征集模板重写 hook。

## 关联文档

- [AI 编程审查发布后观察清单](ai-coding-audit-publish-observation-runbook.md)
- [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md)
- [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md)
- [下一条安全命令梯](next-safe-command-ladder.md)
