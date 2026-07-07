---
title: 渠道未授权时的收入实验切换卡
icon: route

index: true
order: 12

---

# 渠道未授权时的收入实验切换卡

当一个收入实验已经有交付包、首帖草稿、评分卡和证据看板，但还没有用户确认首发渠道、联系方式或发布边界时，不要继续补功能，也不要替用户发布。把它切换成“待授权实验”，并用下一轮节拍去推进另一个可验证的小资产。

<!-- more -->

## 适用场景

- 已经有一个 offer 的内部资产：说明页、首帖草稿、线索评分、发布后证据看板。
- 缺少外部动作授权：不能确认发到哪个渠道、用哪个账号、留下什么联系方式。
- 连续多轮只能继续打磨交付包，无法得到真实 L0-L3 信号。
- cron / agent 当前无人值守，不能向用户追问，也不能代替用户做公开发布。

## 30 秒决策

| 检查项 | 是 | 否 |
| --- | --- | --- |
| 有明确渠道和账号授权吗？ | 跑发布 preflight，发布 1 个渠道 | 不发布 |
| 有可公开联系方式和 CTA 吗？ | 放入首帖 | 不发布 |
| 有真实回复、样本或购买意图吗？ | 使用评分卡分流 | 不继续扩交付包 |
| 当前还能本地验证一个小资产吗？ | 切到新小任务 | 只记录停止条件 |

默认判定：只要渠道、账号或联系方式任一项缺失，就把当前实验标记为 `Waiting for channel authorization`，下一轮不要继续给同一个 offer 补功能。

## 切换流程

1. **封存当前实验状态**：记录已有资产、缺口和下一条安全命令。缺口必须写成事实，例如“缺少首发渠道授权”，而不是“还需要优化文案”。
2. **定义不可做清单**：无人值守时不发帖、不私信陌生人、不发送交付包、不代填联系方式、不扩大报价范围。
3. **选择新小任务**：优先选可在本地验证、能提交、能复用的资产，例如文档 proof、脚本 fixture、书稿卡片或技能样例。
4. **留下回切条件**：只有拿到渠道、账号、联系方式或真实回复中的至少一个，才回到原收入实验。
5. **记录 `Switch`**：在 notebook 或实验记录中写清为什么切换，避免下一轮又机械打磨同一个待授权 offer。

## 记录模板

```text
Experiment:
Current asset:
Waiting on:
Do not do while unattended:
Switch target:
Local verification:
Return condition:
Decision: Switch / Stop / Continue
Next safe command:
```

## OpenClaw 配置服务示例

```text
Experiment: OpenClaw assistant config setup
Current asset: launch kit + channel drafts + lead triage scorecard + 24h evidence board
Waiting on: user-confirmed first channel, account, public contact method, and CTA boundary
Do not do while unattended: publish post, send Starter Kit, DM strangers, invent contact info, or widen the offer scope
Switch target: create/verify another local proof artifact in docs or books
Local verification: markdown proof + catalog proof + git diff --check
Return condition: user confirms one channel and contact method, or a real inbound reply appears
Decision: Switch
Next safe command: run the publish preflight only after channel authorization exists
```

## 停止条件

- 如果已经连续两轮以上只是在补同一个 offer 的内部材料，但没有渠道授权或真实反馈，停止扩写该 offer。
- 如果新小任务也无法本地验证或提交，只写下一条安全命令，不制造伪证据。
- 如果用户后来明确授权发布，先只发布 1 个渠道，并用 24 小时证据看板记录 L0-L3；不要同时多渠道轰炸。

这张卡的目的不是放弃收入实验，而是防止 agent 在缺少外部授权时把“准备工作”误当成增长。真正的下一步要么是得到授权后发布，要么是切到另一个能产生可复核资产的小闭环。
