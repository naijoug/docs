---
title: 单渠道 Offer 发布 Preflight
icon: paper-plane

index: true
order: 42

---

# 单渠道 Offer 发布 Preflight

当收费 offer 已经有草稿、交付边界和证据 gate，但还没有明确外发授权时，不要继续堆功能，也不要跨渠道发布。先把发布动作压成一次只覆盖一个渠道的 preflight。

<!-- more -->

## 适用场景

使用这张卡片之前，至少满足三个条件：

1. offer 已经有最小交付物或说明页，例如 `makemoney/docs/offer-authorization-request-brief.md` 中列出的 OpenClaw 配置服务或 LLM 成本审计。
2. 已经跑过发布证据 gate，且知道当前缺的是 `Channel authorization`、`Contact path`、账号/身份或观察窗口。
3. 本轮 agent 无人值守，不能替用户决定公开渠道、账号身份、联系方式或承诺响应时间。

不满足这些条件时，先回到 [渠道未授权时的收入实验切换卡](income-experiment-switch-without-channel.md)，不要把这张 preflight 当作发布许可。

## 30 秒判定

| 问题 | Publish | Wait for authorization | Narrow | Switch |
|---|---|---|---|---|
| 用户是否明确给出一个渠道和账号？ | 是 | 否 | 渠道给了但账号/身份不清 | 长期无授权，改做本地 proof |
| 是否有可公开的联系路径？ | 是 | 否 | 只允许收私信或表单之一 | 联系路径不可公开 |
| 是否有观察窗口？ | 是，例如 24h | 否 | 只观察回复，不承诺交付 | 无法观察反馈 |
| offer 边界是否固定？ | 是 | 否 | 只发布证据请求，不发布完整服务 | 还在改交付范围 |

默认无人值守结论：只要任一授权字段缺失，写 `Decision: Wait for authorization`，不要发布。

## 单渠道 preflight

```text
Offer:
Channel authorization:
Account / identity:
Contact path:
Observation window:
Public copy source:
Delivery boundary:
Do not touch:
Rollback / deletion path:
Decision: Publish / Wait for authorization / Narrow / Switch
Next safe command:
```

填写规则：

- `Channel authorization` 必须是用户明确给出的渠道，例如某个论坛、社交账号、邮件列表或私域群；“可以发一下”但未指定渠道，仍然算未授权。
- `Contact path` 必须能让对方交付样本、预约或回复；没有联系路径时，发布只会制造不可响应的噪音。
- `Observation window` 必须限定时长和观察字段，例如 `24h: replies, DMs, sample links, objections`。
- `Public copy source` 指向已有草稿，而不是现场重写一版新承诺。
- `Do not touch` 写清本轮不会跨渠道、不会改价格、不会承诺未验证能力、不会公开私有证据。

## 发布前最后检查

1. **只发一个渠道**：如果授权里有多个渠道，先选反馈最快、可删除或可编辑的一个，不并发试验。
2. **只复制已审过的文案**：优先使用 `makemoney/docs/offer-authorization-request-brief.md` 指向的 launch kit 或 preflight 文案。
3. **保留证据位置**：发布 URL、时间、账号、文案版本、观察窗口和首条回复都写入 `makemoney/runs/`。
4. **先有停止条件**：无回复、样本不合格、对方只给痛点无证据、或公开边界不清时，按 `Narrow / Stop` 记录，不升级为服务交付。
5. **不要扩交付物**：发布失败不是继续加功能的理由；先看反馈证据形状。

## 最小记录模板

```text
Published at:
Offer:
Channel:
Account / identity:
Contact path:
Observation window:
Copy source:
URL / evidence:
First response:
Decision after window: Continue / Narrow / Stop / Switch
Next evidence needed:
```

## 常见反模式

- **把草稿当授权**：有 offer 文案不等于允许外发。
- **跨渠道抢速度**：一次发多个渠道会让反馈来源、文案版本和观察窗口混在一起。
- **没有联系方式还发布**：外部读者无法交付样本或回应，后续无法验证。
- **用点赞替代证据**：点赞只能说明曝光，不能证明痛点、预算、样本质量或交付边界。
- **无人值守承诺服务**：cron 可以准备 preflight，不能替用户承诺咨询、价格、排期或账号身份。

## 和现有资产的衔接

- 收入实验切换：先用 [渠道未授权时的收入实验切换卡](income-experiment-switch-without-channel.md) 判断是否应该等待、缩小或切换。
- 发布授权 brief：把 `makemoney/docs/offer-authorization-request-brief.md` 的四个问题填完后，才进入本页。
- 书稿原则：`books/tech-cards-handbook/chapters/ai-agent/external-publish-needs-authorization.md` 解释为什么本地草稿不是外部发布许可。
- 反馈记录：发布后回到 `makemoney/runs/`，不要只在聊天或 notebook 里记结果。

## 停止条件

出现任一情况时，停止发布动作：

- 没有明确渠道、账号、联系路径或观察窗口。
- offer 边界还在变化，无法说明第一份交付是什么。
- 公开文案需要使用未经授权的客户、截图、私有路径或内部证据。
- 发布后只能得到曝光数，拿不到痛点原话、样本链接、回复或反对意见。

停止时的下一步不是“再写一篇文案”，而是补授权请求、索取真实样本，或切换到一个本地可验证的小实验。
