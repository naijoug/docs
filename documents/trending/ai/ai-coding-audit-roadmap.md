---
title: AI 编程审查路线图
icon: route

index: true
order: 29

---

# AI 编程审查路线图

这组文档不是一串零散文章，而是一条从“验证一个痛点”到“形成可收费交付”的最小路线。目标不是先做完整咨询产品，而是用真实样本证明：你能帮助团队把 AI 编程工作流里的不确定性，收束成下一条安全命令、1 页报告和可复用模板。

<!-- more -->

## 一句话路线

```text
样本征集 → 首次回复 → 结构化 intake → 首份报告 → Issue 到 PR → 匿名案例 → 资产复盘
```

每一步都要能回答三个问题：

1. **证据是什么**：命令、exit code、PR 摘要、agent log、reviewer 疑问，还是只有口头描述？
2. **边界在哪里**：哪些范围可审查、哪些内容必须排除、哪些信息不能公开？
3. **下一步是什么**：`Continue`、`Narrow` 还是 `Stop`？

## 路线总览

| 阶段 | 入口文档 | 产物 | 通过信号 | 停止条件 |
| --- | --- | --- | --- | --- |
| 1. 找样本 | [AI 编程审查样本征集模板](ai-coding-audit-sample-request.md) | 一条短帖、社群消息或 README CTA | 有人回复具体 agent 失控场景 | 只有点赞，没有真实工作流描述 |
| 2. 收束首次回复 | [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md) | 目标、范围、证据、公开边界和期望输出 | 对方能给出脱敏证据和授权边界 | 需要密钥、生产数据或完整私有仓库才可判断 |
| 3. 结构化 intake | `.github/ISSUE_TEMPLATE/ai-coding-audit.yml` | repo/area、当前不确定点、现有证据、公开边界、安全确认 | 输入足够支撑只读审查 | 授权不清、证据缺失或范围过大 |
| 4. 交付首份报告 | [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) | 30-60 分钟只读报告、下一条安全命令梯 | 对方知道下一步该跑什么、该补什么证据 | 无法区分事实、推断和未验证项 |
| 5. 进入 PR 工作流 | [AI 编程审查 Issue 到 PR 交接说明](ai-coding-audit-issue-to-pr-handoff.md) | PR snapshot、ownership boundary、verification ladder、handoff | Issue 里的证据没有在 PR 里丢失 | PR 只写“已测试”，没有命令和未验证项 |
| 6. 公开复盘 | [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md) | 脱敏案例、事实/推断/未验证分层 | 公开内容只保留证据形状 | 授权不清、脱敏后无法支撑结论 |
| 7. 资产沉淀 | [AI 程序员资产飞轮](ai-programmer-asset-flywheel.md) | 文章、模板、skill、书稿卡片或产品实验 | 同一问题重复出现并有人愿意投入时间/预算 | 只是一次性好奇，不能复用 |

## 30 分钟执行版

当你只有半小时，不要从所有文档开始读。按下面最小动作推进：

1. 复制 [样本征集模板](ai-coding-audit-sample-request.md) 里的短帖，发到一个有真实开发者的渠道。
2. 收到回复后，不直接审查，先用 [首次回复模板](ai-coding-audit-first-reply-template.md) 补齐目标、范围、证据和公开边界。
3. 如果材料足够，按 [样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) 写 1 页报告；如果不足，只输出 `Next evidence needed`。
4. 报告末尾必须给出一个收口：`Continue` 到 PR/持续审查、`Narrow` 到一个更小问题，或 `Stop`。

## 证据边界闸门

所有阶段都要先分层 claim：

| 层级 | 可以怎么写 | 不能怎么写 |
| --- | --- | --- |
| `Fact` | “日志显示命令 X exit 1” | “系统一定有严重质量问题” |
| `Inference` | “失败位置集中在验证命令缺失，推测 handoff 不完整” | “团队不会用 AI” |
| `Unverified` | “尚未看到 CI 配置，需补充” | “CI 肯定没跑” |
| `Private` | “客户名、私有仓库、绝对路径不公开” | “为了显得真实而保留敏感细节” |
| `Stop` | “授权不清，停止公开案例写作” | “先写成真实案例，后面再补授权” |

内部执行时可以复用 `skills/skills/manual/review/audit-evidence-boundary/`；公开写作前再套 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md)。

## 收入实验判断

这条路线是否值得继续，不看内容写了多少，而看真实信号：

- `Continue`：有人愿意给出 PR、agent log、失败命令或 reviewer 疑问，并询问能否进一步复盘。
- `Narrow`：反馈集中在单点，例如下一条安全命令、dirty workspace 边界、final report 未验证项，可以做成更小 offer。
- `Stop`：只有泛泛认可，没有样本、没有预算、没有愿意投入时间的人，说明 hook 需要重写。

最小可收费形态不是“AI 顾问包”，而是一次固定范围、只读、可复核的 AI 编程审查：交付 1 页风险报告、下一条安全命令梯和一个可复制的 handoff 模板。

## 关联书稿卡片

如果这条路线要沉淀成长期写作资产，不要只复制操作清单。先把每次审查复盘压缩成一条原则卡片，再决定是否公开完整案例：

| 路线节点 | 可沉淀原则 | 书稿路径 |
| --- | --- | --- |
| 没有真实样本时 | 先征集和收束输入，不编造案例 | `books/tech-cards-handbook/chapters/ai-agent/public-case-separates-facts-inferences-unverified.md` |
| 收到可审查材料时 | 先交付首份报告，不先卖咨询 | `books/tech-cards-handbook/chapters/ai-agent/first-report-before-consulting.md` |
| 想做 landing page 或工具时 | 先跑 30 分钟路线，不要先产品化 | `books/tech-cards-handbook/chapters/ai-agent/thirty-minute-route-before-productizing.md` |

写书稿时仍沿用同一条证据边界：公开叙述只写 `Fact`、`Inference`、`Unverified`、`Private` 和 `Stop` 的分层结果；没有授权或证据链断裂时，只沉淀方法卡片，不写“真实案例”。

## 下一步清单

- 先读 [AI 编程审查服务交付指南](ai-coding-audit-service.md)，确认 offer 边界和交付物。
- 再读 [AI 编程审查样本征集模板](ai-coding-audit-sample-request.md)，拿到第一个真实样本。
- 有回复后用 [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md) 收束输入。
- 有结构化材料后进入 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md)。
- 要公开前，必须通过证据边界和匿名案例闸门。
