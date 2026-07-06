---
title: 把 Agent 心跳沉淀成付费 Offer
icon: robot

index: true
order: 18

---

周期性唤醒的 Agent 不只是自动写日志。它更像一个小型经营节拍器：每一轮都应该把“做了什么、证明了什么、还能卖什么”压缩成可复用资产。

<!-- more -->

## 适用场景

当你已经有 `summaries/hermes/` 这类连续工作记录，但还没有稳定收入实验时，用这张表把心跳产物转成候选 offer。

| 心跳产物 | 可复用资产 | 付费切口 | 先验证什么 |
|---|---|---|---|
| 修复了一次 dirty workspace 交接 | 接力清单、最终报告模板 | Agent 工作流体检 | 对方是否愿意给一段真实 agent log |
| 跑通一次 proof checker | preflight 脚本、采纳记录 | 文档/配置改动验证包 | 对方是否有“改了但不敢合”的小 PR |
| 写完一张技术卡片 | 教程、样例 prompt、审查 checklist | 30 分钟只读审查 | 对方是否愿意接受 1 页报告而不是大改代码 |
| 观察到重复失败 | 失败分类表、下一条安全命令梯 | Debug session 复盘 | 对方是否能提供命令、exit code 和上下文 |

## 30 分钟转换流程

1. **读最近 3 条心跳**：只提取已经被命令、diff、commit 或可复核文档支持的事实。
2. **找重复痛点**：如果同一类问题出现两次以上，记录为 `Problem signal`；只出现一次的先放进观察池。
3. **压成一个小交付物**：优先选择 1 页报告、清单、脚本或模板，不要直接承诺“帮你重构项目”。
4. **写出证据门槛**：明确客户需要提供什么：PR 链接、失败命令、agent log、目录结构或脱敏最终报告。
5. **发出低承诺 CTA**：只征集 1 个样本，说明会交付什么、不会做什么、能否公开。
6. **记录 Continue / Narrow / Stop**：拿到真实证据并能交付下一步才 Continue；只能验证单点就 Narrow；证据不足就 Stop。

## Offer 草稿模板

```text
我在做一个 30 分钟 AI 编程工作流体检实验。

适合场景：你有一段 AI/Agent 生成的改动、失败命令或交接记录，但不确定下一步该先修什么。

你提供：
- 一个 PR / diff / agent log / 失败命令，任选一种；
- 可公开边界：哪些内容必须脱敏，哪些结论不能公开；
- 你最关心的一个问题。

我交付：
- 1 页只读报告：事实、风险、下一条安全命令、未验证项；
- 不直接改你的代码；
- 证据不足时只返回 Next evidence needed。
```

## 不要过早产品化

只有当同一类样本连续出现，并且你已经能稳定交付 1 页报告时，再考虑升级为固定价格服务、模板包或课程内容。否则继续保持“心跳 -> 小资产 -> 单样本验证”的节奏。

## 和现有资产的连接

- 用 [AI 程序员每周收入实验规划器](ai-programmer-weekly-experiment-planner.md) 选择本周要验证的渠道和样本类型。
- 用 [30 分钟 AI 编程审查收入实验](thirty-minute-ai-coding-audit-income-experiment.md) 控制首轮实验范围。
- 用 [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md) 记录每次样本结果。
- 用 [AI 编程审查实验切换清单](ai-coding-audit-experiment-switch.md) 判断 Continue / Narrow / Stop。
