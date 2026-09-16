---
title: AI 编程审查 Audit Result 填写样例
icon: clipboard-check

index: true
order: 42

---

# AI 编程审查 Audit Result 填写样例

这是一条脱敏样例，用来演示如何把“证据请求之后仍然证据不足”的线索写入 [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md)。它不是成交案例，也不是完整审查报告；它的目标是让下一轮在 `Continue / Narrow / Stop` 中明确处于 `Narrow`，只追一项最小证据。

<!-- more -->

## 样例背景

- 渠道：社群中有人提到“agent 说已经修好 lint，但 CI 还是红”。
- 已有材料：一段脱敏失败摘要、agent final reply 中“tests passed”的原话摘要、改动涉及前端组件的描述。
- 缺失材料：`Command status` 的原始失败命令和 exit code、可复核 CI job 链接、`Workspace status` 的脱敏状态摘要。
- 公开边界：只能公开证据形状，不能公开仓库名、截图、私聊原文或完整路径。

## 单轮记录填写

```text
Date: 2026-07-07
Channel: 私域社群回复；可再次触达，但不能公开对方身份。
Prompt / CTA sent: ai-coding-audit-sample-request.md 的短帖版本，要求一个 PR、一次失败命令、一段 agent log 或一份脱敏 final report。
Reply summary: 对方称 agent final reply 写了“lint/test passed”，但 CI lint job 仍失败；暂未提供原始命令和 exit code。
Command status: not available；只有“CI lint job 失败”的转述，没有原始命令、exit code 或 job 链接。
Workspace status: not available；未提供脱敏 `git status --short`、PR 文件列表、生成物或依赖变更摘要。
Risk summary: agent 声称 lint/test 已通过，但 CI 仍失败；风险是验证链断裂，不是业务修复结论。
Agent claim: final reply 摘要称 `lint/test passed`，但没有命令输出或未验证项。
Change scope: 对方描述涉及前端组件；没有 diff 范围或文件类别清单。
Public boundary: 只能公开证据形状；不能公开仓库名、截图、私聊原文、完整路径或业务上下文。
Sensitive material removed: 仓库名、成员名、截图、路径前缀、业务模块名。
Deliverable: 只交付 Next evidence needed；不写最高风险、不写修复建议、不写公开案例。
Red flag triage: P1 Verify；“agent 说通过但 CI 仍失败”可能影响交付，但没有原始命令和 exit code，不能写成 P0 Stop。
Decision: Narrow
Next evidence needed: 请只补一条原始失败命令及其 exit code；如果有 CI job 链接，先确认可公开或脱敏后再发。
Follow-up action: 发送 ai-coding-audit-evidence-request-template.md 的 5 项请求，但本轮只强制第一项“原始命令和状态”。
Asset destination: docs/documents/trending/ai/ai-coding-audit-result-log-filled-example.md；暂不沉淀为 skills/skills/。
```

## 为什么是 Narrow

| 判断点 | 当前证据 | 结论 |
| --- | --- | --- |
| 是否有具体痛点 | 有，“agent 说过了但 CI 仍失败” | 可以继续收窄 |
| 是否有 `Command status` | 没有原始命令、exit code 或 not-run 原因 | 不能进入首份报告 |
| 是否有 `Workspace status` | 没有脱敏状态摘要、PR 文件列表或依赖/生成物说明 | 只能继续补证据 |
| 是否有 `Agent claim` | 只有结论摘要，没有命令输出或未验证项 | 不能判断验证链断裂点 |
| 是否有 `Change scope` | 只知道“前端组件”，没有 diff 范围 | 不能估算只读审查成本 |
| 是否有公开边界 | 只能公开证据形状 | 不能写案例 |
| 是否能升级为 P0 | 暂无数据、权限、发布或密钥越界证据 | 只能标 P1 Verify |
| 是否能 30-60 分钟只读审查 | 证据不足 | 不能 `Continue` |
| 是否需要停止 | 对方仍可补一项证据 | 暂不 `Stop` |

`Narrow` 的核心原因：现在只能验证“存在一个不一致的说法”，还不能验证“agent 的哪一步验证断裂”。如果直接写审查结论，会把二手摘要包装成事实。

## 可直接发送的下一条请求

```text
我先不需要完整仓库、截图或完整日志。为了判断这是不是一个可审查样本，请只补一项证据：

1. CI 或本地失败的原始命令；
2. 对应 exit code；
3. 如果命令输出里有私有路径或业务名，请先替换成 <redacted>。

拿到这项后，我再判断是否进入 30-60 分钟只读审查；如果仍不能提供，就把这条线索记为 Stop / Switch，不写公开案例。
```

如果对方愿意继续补材料，但还不确定能否公开，再追加这两项，不要扩大到完整仓库：

```text
如果方便，请再补一个脱敏范围摘要：

- Workspace status：是否有未提交改动、生成物、依赖变更或测试产物？只要相对路径类别即可。
- Agent claim：agent final reply 里关于“已验证 / 未验证 / 下一步”的原话摘要，敏感名词请替换成 <redacted>。

我仍然不会接收密钥、用户数据、生产日志、内部截图或完整私有仓库。
```

## 回到闭环的位置

- 上一步：按 [AI 编程审查证据收集请求模板](ai-coding-audit-evidence-request-template.md) 请求 5 项材料。
- 当前步：写入 [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md)，决策为 `Narrow`。
- 下一步：如果补到原始命令和 exit code，再进入 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md)；如果补不到，记录 `Stop / Switch`。

## 自检

- 没有本机绝对路径、客户名、仓库名、密钥、完整截图或未经授权原文；
- `Decision: Narrow` 能被缺失证据解释；
- `Next evidence needed` 只要求一项最小证据；
- 没有把这条样例写成成交、审查成功或公开案例；
- 只有同类样例重复出现后，才考虑沉淀到 `books/...` 或 `skills/skills/...`。
