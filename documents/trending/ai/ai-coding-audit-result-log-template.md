---
title: AI 编程审查 Audit Result 记录表
icon: clipboard-list

index: true
order: 35

---

# AI 编程审查 Audit Result 记录表

这是一份私有记录表模板，用来承接每次 30 分钟 AI 编程审查收入实验的真实结果。它不要求你已经成交，也不要求把样本公开；它只要求把渠道、输入证据、公开边界、交付物、决策和下一条证据需求写成可复查事实。

<!-- more -->

## 使用边界

先明确这张表不是公开案例，也不是客户交付物：

- **只记录事实**：写渠道、时间、证据形状、回复原话摘要、命令或链接，不写“市场很大”“客户很认可”；
- **不保存敏感材料**：密钥、客户名、私有仓库、生产路径、用户数据和未经授权截图不要进入表格；
- **不替代首份报告**：证据足够时，再进入 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md)；
- **不自动公开**：想写公开复盘时，先过 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md) 和 evidence boundary checkpoint；
- **不制造进展感**：没有真实输入就写 `Stop` 或 `Switch`，不要继续扩服务页。

## 单轮记录模板

每次只填一张，30 分钟内能填完为准：

```text
Date:
Channel:
Prompt / CTA sent:
Reply summary:
Input evidence:
Public boundary:
Sensitive material removed:
Deliverable:
Red flag triage:
Decision: Continue / Narrow / Stop
Next evidence needed:
Follow-up action:
Asset destination:
```

如果还没有真实首份报告，只收到一条“有痛点但证据不足”的回复，先参考 [AI 编程审查 Audit Result 填写样例](ai-coding-audit-result-log-filled-example.md) 或 [AI 编程审查发布后观察样例](ai-coding-audit-observation-example.md) 填成 `Narrow`，不要把它写成已验证案例。

字段写法：

| 字段 | 写什么 | 不写什么 |
| --- | --- | --- |
| `Channel` | 发在哪个渠道、是否可再次触达 | “大家都在关注” |
| `Prompt / CTA sent` | 贴出或链接本次样本征集短帖 | 没发出就假装已验证 |
| `Reply summary` | 对方回复的可审查问题摘要 | 未授权原文、客户名、私聊截图 |
| `Input evidence` | PR、失败命令、agent log、final report、review comment 或“只有口头描述” | 完整私有代码、密钥、生产数据 |
| `Public boundary` | 可公开 / 只能匿名 / 只能内部 / 停止接收 | 模糊写“应该可以发” |
| `Deliverable` | 下一条命令、最高风险、handoff、`Next evidence needed` 或 1 页报告 | 泛泛建议和营销话术 |
| `Red flag triage` | P0 / P1 / P2 的最高层级和一句理由；多问题时链接 [AI 编程审查红旗分诊卡](ai-coding-audit-red-flag-triage.md) | 无优先级的问题长清单 |
| `Decision` | `Continue / Narrow / Stop`，只选一个 | “先都做做看” |
| `Next evidence needed` | 下一次最小需要补什么证据 | “继续观察” |
| `Asset destination` | `docs/...`、`books/...`、`skills/...` 或“不沉淀” | 绝对路径或未授权公开位置 |

## 三种决策写法

### Continue

适合：对方给了足够小、边界清楚、可复查的材料。

```text
Decision: Continue
Why: 收到公开 PR 链接和失败 CI 日志；对方确认可以公开讨论验证步骤，但不能公开公司名。
Deliverable: 1 个最高风险 + 下一条安全命令；如果命令通过，再写 1 页只读报告。
Red flag triage: P1 Verify；已有失败 CI 证据，但还缺 agent final report 中“已验证”段落来判断验证链断裂点。
Next evidence needed: CI 失败命令的完整 exit code 和 agent final report 中“已验证”段落。
Follow-up action: 进入 ai-coding-audit-intake-to-first-report.md。
```

### Narrow

适合：有兴趣或问题，但证据不足、边界不清或材料太大。

```text
Decision: Narrow
Why: 对方只描述“agent 改坏了”，还没有 PR、命令或日志；不能判断最高风险。
Deliverable: 只回复 Next evidence needed，不写审查结论。
Red flag triage: P1 Verify；风险可能严重，但当前只有二手描述，不能升级成 P0 Stop。
Next evidence needed: 一条失败命令、一个 PR diff 或一段脱敏 final report。
Follow-up action: 复制 ai-coding-audit-first-reply-template.md 收束范围。
```

### Stop

适合：需要生产权限、无法脱敏、对方要求代改私有代码，或连续多轮没有真实样本。

```text
Decision: Stop
Why: 对方只能提供未脱敏私有仓库和生产日志；接收材料会越界。
Deliverable: 拒绝接收敏感材料，并说明可以改为脱敏命令输出或公开 PR。
Red flag triage: P0 Stop；继续接收会触碰隐私、密钥或生产数据边界。
Next evidence needed: 无；本渠道停止。
Follow-up action: 切换渠道或回到 ai-coding-audit-experiment-switch.md。
```

## 每周汇总模板

周末只汇总事实，帮助决定下周是否继续这个收入实验：

```text
Week:
Total CTA sent:
Qualified replies:
Continue count:
Narrow count:
Stop count:
Most common input evidence:
Most common missing evidence:
Best deliverable produced:
Reusable asset created:
Decision: Continue / Narrow / Stop / Switch
Next week change:
```

判断规则：

- `Continue >= 1` 且交付物可复查：下周可以继续同一渠道，补首份报告或服务边界；
- 多数是 `Narrow`：收窄 CTA，明确只收一种证据，例如“失败命令 + exit code”；
- 多数是 `Stop` 或只有点赞：换渠道、换问题，或回到 [AI 编程审查实验切换清单](ai-coding-audit-experiment-switch.md)；
- 已产生可复用交付：回到 [AI 程序员资产飞轮](ai-programmer-asset-flywheel.md)，判断沉淀成教程、模板、技能或书稿卡片。

## 自检

提交或归档记录前，确认：

- 记录里没有本机绝对路径、客户隐私、密钥或未经授权原文；
- 每个 `Continue / Narrow / Stop` 都能被输入证据解释；
- `Red flag triage` 没有把证据不足的猜测写成 P0 事实；
- `Next evidence needed` 是下一条可执行动作，不是模糊计划；
- 公开复盘前已经区分 `Fact / Inference / Unverified / Private / Stop`；
- 如果连续多轮没有真实证据，已经停止扩写服务页。
