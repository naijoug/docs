---
title: AI 编程审查报价梯度与升级边界
icon: tags

index: true
order: 36

---

# AI 编程审查报价梯度与升级边界

当首份 AI 编程审查报告已经能让对方知道下一条安全命令时，下一步不是立刻承诺长期咨询，而是把交付物拆成可验证、可停止、可升级的报价梯度。

<!-- more -->

## 使用前提

先满足下面任一条件，再讨论价格：

- 已按 [AI 编程审查服务交付指南](ai-coding-audit-service.md) 的固定范围 offer 做过一次只读审查，并交付过 1 页风险报告；
- 已按 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) 交付过一份 30-60 分钟只读报告；
- 对方明确表示某条风险、命令梯或 handoff 模板值得继续落地；
- 已能说清 `Included`、`Excluded`、`Next evidence needed` 和停止条件。

如果还没有真实样本，回到 [AI 编程审查样本征集模板](ai-coding-audit-sample-request.md) 或 [30 分钟 AI 编程审查收入实验](thirty-minute-ai-coding-audit-income-experiment.md)。没有渠道授权时，不要发布价格页；只准备本地草稿，并按 [单渠道 Offer 发布 Preflight](single-channel-offer-publish-preflight.md) 等待授权。

这页是首份交付后的升级边界，不替代服务页本身。对外表达时先引用固定范围 offer，再只选择下方一档作为下一步，避免把一次报告直接包装成“长期 AI 咨询”。

## 三档报价梯度

| 档位 | 适合信号 | 交付物 | 不包含 | 升级条件 |
| --- | --- | --- | --- | --- |
| `Diagnostic` | 对方只提供一次 agent 改动、PR、失败命令或 final report | 1 页风险报告、最多 3 条红旗、下一条安全命令梯 | 不改代码、不接生产权限、不承诺持续跟进 | 对方愿意补第二段证据，或要求把建议写成团队模板 |
| `Workflow Pack` | 对方认可报告中的边界问题，想复用到下一次 agent PR | PR / Issue 模板、handoff 模板、验证梯 checklist、一次 30 分钟回看 | 不接管 repo、不做全量测试体系设计 | 模板被真实使用一次，并暴露新的阻塞点 |
| `Team Enablement` | 团队已有多名成员使用 coding agent，问题重复出现 | 90 分钟工作坊、样例审查复盘、团队 agent 使用边界、后续 1 次异步复核 | 不替代安全审计、不承诺模型选型收益、不代运营 agent | 有明确负责人、样本池和观察窗口 |

报价时只选择一档，不把三档打包成“全套 AI 转型”。每一档都必须能独立交付、独立验收、独立停止。

## 价格占位规则

在没有用户授权对外发布前，价格只能作为内部决策占位，不写成公开承诺。

```text
Diagnostic: [local placeholder]，按一次样本、一份报告计价
Workflow Pack: [local placeholder]，按模板包和一次回看计价
Team Enablement: [local placeholder]，按一次工作坊和一次复核计价
Public price status: draft / authorized / withdrawn
```

占位规则：

1. 先写清交付边界，再填价格；边界不清时价格只会放大误解。
2. 首次对外只发布一档，优先 `Diagnostic`；不要同时测试套餐、年费、培训和工具订阅。
3. 如果联系路径、账号身份或观察窗口缺失，价格保留为本地草稿。
4. 如果对方只需要一条命令梯，把交付降级为 `Narrow`，不要强推更高档。

## 升级 / 降级决策表

| 观察信号 | 决策 | 下一步 |
| --- | --- | --- |
| 对方看完 1 页报告后能复述最高风险，并愿意提供第二段证据 | `Continue` | 提议 `Workflow Pack`，把报告里的命令梯变成模板 |
| 对方只问“下一条先跑什么命令” | `Narrow` | 只交付 [下一条安全命令梯](next-safe-command-ladder.md)，暂不报价更大服务 |
| 对方希望你直接修所有问题或接生产权限 | `Stop / Redirect` | 说明不包含范围，改成只读审查或建议寻找对应服务方 |
| 对方只有点赞、收藏或笼统兴趣，没有样本 | `Wait` | 回到样本征集；不要把曝光当付费信号 |
| 团队重复出现 dirty workspace、final report 断证据、验证命令缺失 | `Productize` | 把重复问题沉淀为模板包、技能或内部工具 |

## 对外表达模板

```text
我可以先做一个固定范围的 Diagnostic：

- 输入：一次 AI agent 改动、PR、失败命令、agent log 或 final report；
- 范围：只读审查，不接生产权限，不替你改完整代码；
- 输出：1 页风险报告、最多 3 条红旗、下一条安全命令梯、未验证项；
- 停止条件：证据不足、边界不清、含私有敏感材料或无法脱敏；
- 下一步：如果报告有用，再把它升级成你们团队可复用的 PR / handoff 模板。
```

如果需要发布到外部渠道，先把这段文案填入 [单渠道 Offer 发布 Preflight](single-channel-offer-publish-preflight.md)，确认渠道、账号、联系路径和观察窗口后再发。

## 本地验收清单

- 是否引用了真实或可复核样本，而不是只凭想法定价；
- 是否每一档都有明确 `Included / Excluded`；
- 是否有 `Continue / Narrow / Stop` 决策，不把所有回复都解释成升级信号；
- 是否避免公开未经授权的价格、客户信息、截图或私有路径；
- 是否能从最低档交付物继续沉淀成 `docs/`、`books/` 或 `skills/skills/` 资产。
