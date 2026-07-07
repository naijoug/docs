---
title: AI 编程审查最小证据闭环
icon: arrows-spin

index: true
order: 41

---

# AI 编程审查最小证据闭环

这份闭环用于把一次模糊的 AI 编程审查机会，压缩成可以在 30-60 分钟内判断的最小循环：先拿证据，再决定只读审查、继续收窄或停止。

<!-- more -->

## 为什么需要闭环

最近的链路已经有样本征集、首次回复、证据请求、首份报告、观察记录和技能沉淀。如果入口过多，下一次 agent 容易继续写新文档，而不是推进真实样本。因此这里把它们收束成一个可执行循环：

1. **触发**：有人表达“AI/agent 改动让我不放心”或“它说验证过但 CI/评审不同意”。
2. **取证**：只请求原始命令、状态、失败摘要、agent 结论和改动范围。
3. **只读判断**：证据足够才进入 30-60 分钟审查；不足只写 `Next evidence needed`。
4. **记录决策**：用 `Continue / Narrow / Stop` 写入结果表。
5. **沉淀**：只有重复出现的同类问题，才升级成文章、模板、技能或书稿卡片。

## 一页闭环表

| 步骤 | 目标 | 使用文档 | Pass means | Fail means |
| --- | --- | --- | --- | --- |
| 1. 找样本 | 得到一个具体 PR、失败命令、agent log 或 reviewer 疑问 | [AI 编程审查样本征集模板](ai-coding-audit-sample-request.md) | 对方能指出一个具体场景 | 只有泛泛兴趣、点赞或收藏 |
| 2. 收束回复 | 把热情回复变成目标、范围、证据和公开边界 | [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md) | 能写出目标、范围、证据、边界、期望输出 | 对方只要求“帮我看看整个项目” |
| 3. 补最小证据 | 拿到 5 项可复核材料 | [AI 编程审查证据收集请求模板](ai-coding-audit-evidence-request-template.md) | 有命令、状态、失败摘要、agent 结论、改动范围 | 只能提供截图、私有日志或二手转述 |
| 4. 交付首份报告 | 做 30-60 分钟只读审查，不承诺修复 | [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) | 能给出事实、推断、未验证项和下一条安全命令 | 证据不足，只能交付 `Next evidence needed` |
| 5. 写入结果 | 判断是否继续、收窄或停止 | [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md)；证据不足时参考 [AI 编程审查 Audit Result 填写样例](ai-coding-audit-result-log-filled-example.md) | 决策能被输入证据支撑 | 决策只由热度或主观感觉支撑 |
| 6. 发布后观察 | 记录痛点原话、证据形状、边界和下一条证据 | [AI 编程审查发布后观察清单](ai-coding-audit-publish-observation-runbook.md) | 有可复查观察记录 | 只有浏览量、点赞或收藏 |
| 7. 沉淀资产 | 决定是否写文章、模板、技能、书稿或服务 offer | [AI 编程审查观察到执行技能清单](ai-coding-audit-observation-to-skill-checklist.md) | 同类问题重复出现，且输入输出稳定 | 只有一条脱敏样例或一次兴趣反馈 |

## 下一步只允许三种决策

### Continue

进入下一轮只读审查或公开复盘，必须同时满足：

- 证据足够支持至少一条 `Fact`；
- 公开边界清楚，敏感内容可以脱敏；
- 下一步交付可以在 30-60 分钟内完成；
- 对方知道这不是修复承诺，而是审查/验证建议。

### Narrow

继续收窄，而不是扩大范围。适用于：

- 有痛点原话，但缺原始命令或 exit code；
- 有失败摘要，但没有 agent 结论原文；
- 有 agent 结论，但不知道本轮改动范围；
- 对方愿意继续补证据，但一次只能补一项。

此时只发送一条 `Next evidence needed`，不要要求完整仓库、完整日志或生产访问。

### Stop

停止或切换实验。适用于：

- 对方只能提供不可脱敏截图、私有日志或用户数据；
- 无法确认授权边界；
- 对方只要修复，不愿提供可复核证据；
- 连续多轮没有真实样本，只有内容热度。

停止不是失败，而是保护证据边界，避免把模糊兴趣包装成案例或服务。

## 本轮最小交接句

```text
当前 AI 编程审查线索处于：Narrow。
已有证据：<痛点原话 / 截图摘要 / agent claim>。
缺失证据：<只写一项，例如原始命令和状态>。
下一条请求：请只补 <一项证据>，不要发完整仓库、密钥、用户数据或完整日志。
如果补齐：进入 ai-coding-audit-intake-to-first-report.md。
如果不能补齐：记录 Stop / Switch，不写公开案例。
```

## 和书稿卡片的关系

这份闭环对应书稿中的两个原则：

- `books/tech-cards-handbook/chapters/ai-agent/reuse-existing-skill-before-new-skill.md`：先复用已有模板和技能，不要把一次观察直接写成新技能。
- `books/tech-cards-handbook/chapters/ai-agent/evidence-request-is-not-full-audit.md`：证据请求只是取证，不是审查交付。

Pass means：下一次心跳能从这张表直接判断该发样本征集、证据请求、首份报告，还是停止。

Fail means：仍然需要在多篇文档之间搜索入口，或者在证据不足时继续写新文档。

Next evidence needed：至少一条真实或脱敏样本，把第 3 步到第 5 步跑完并写入结果表；没有足够证据时，先用 `ai-coding-audit-result-log-filled-example.md` 记录 `Narrow`，不要继续扩路线图。
