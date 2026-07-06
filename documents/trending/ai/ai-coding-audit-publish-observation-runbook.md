---
title: AI 编程审查发布后观察清单
icon: chart-line

index: true
order: 31

---

# AI 编程审查发布后观察清单

样本征集短帖发出后，不要把“有没有人点赞”当成结论。发布后的 48 小时要做的是判断：这个 hook 是否带来了真实开发者的证据、问题原话和下一步授权。

<!-- more -->

## 使用场景

当你已经按 [AI 编程审查样本征集模板](ai-coding-audit-sample-request.md) 或 [AI 编程审查路线图](ai-coding-audit-roadmap.md) 发出短帖、社群消息、README CTA 后，用本清单收集反馈。它不是内容复盘表，而是收入实验的证据表：每一条记录都要能支持 `Continue / Narrow / Stop`。

## 观察节奏

| 时间点 | 只记录什么 | 不急着做什么 |
| --- | --- | --- |
| 发布后 0-2 小时 | 发布位置、hook、原始链接、首批真实回复原话 | 不改 offer，不追着点赞解释成需求 |
| 发布后 24 小时 | 具体痛点回复、是否有人愿意给样本、需要补问的问题 | 不因为单个模糊回复就扩成完整咨询 |
| 发布后 48 小时 | 样本质量、授权边界、下一步是否能进入首份报告 | 不把没有证据的互动写成真实案例 |

## 发布后 24 小时最小记录包

到 24 小时时，不需要写长复盘，只需要补齐一条能决定下一步的记录。每条候选回复按下面 5 行写，缺项就标 `Missing`，不要用主观热度替代证据。

```text
Pain quote: 对方的原话；没有具体问题就写 Missing
Evidence shape: PR / diff / failed command / agent log / final report / review comment / oral-only
Boundary: 可公开、需匿名、不能公开、未确认
Next evidence needed: 下一条要补的命令、日志、文件范围或授权确认
Decision: Continue / Narrow / Stop + 一句话理由
```

判断顺序固定为：先看 `Pain quote` 是否具体，再看 `Evidence shape` 是否可复核，再看 `Boundary` 是否允许继续。只有三项都过关，才进入 `Continue`；只有痛点具体但证据不足，进入 `Narrow`；三项都缺或只剩点赞收藏，进入 `Stop`。

如果第一条真实回复介于“有痛点”和“证据不足”之间，先照 [AI 编程审查发布后观察样例](ai-coding-audit-observation-example.md) 写成 `Narrow`：不要急着交付完整报告，只回复下一条安全命令和 `Next evidence needed`。

## 观察表

| 字段 | 填写要求 | 示例 |
| --- | --- | --- |
| 发布位置 | 渠道 + 链接或可回溯位置 | `开发者社群 / 2026-07-01 thread` |
| Hook | 原文标题或第一句话 | `你的 coding agent 真正缺的不是提示词，而是下一条安全命令` |
| 具体痛点原话 | 复制对方的原话，必要时脱敏 | `AI 改完后 CI 挂了，但没人知道该先回滚哪块` |
| 证据形状 | PR、失败命令、agent log、final report、review comment 或仅口头描述 | `失败命令 + exit code` |
| 公开边界 | 是否允许匿名复盘、哪些内容必须排除 | `可匿名；不能出现客户名和仓库路径` |
| 下一步 | `Continue`、`Narrow` 或 `Stop` | `Narrow 到下一条安全命令梯` |
| Next evidence needed | 下一条必须补的材料 | `补 CI 命令、失败片段、最近一次 agent summary` |

## 判断规则

- `Continue`：对方愿意提供 PR、agent log、失败命令或 reviewer 疑问，并接受只读审查、匿名边界和 `Next evidence needed`。
- `Narrow`：对方只有一个具体片段，足以判断一个单点问题，但不足以支持完整报告；下一步缩小到一条命令、一个文件或一段 handoff。
- `Stop`：只有点赞、转发、泛泛认可，或者需要生产权限、密钥、完整私有仓库、未经授权数据才能判断。

## 回复分流模板

### Continue

```text
这个样本足够做一次只读首份报告。下一步我会只看你提供的证据，输出：Fact / Inference / Unverified、下一条安全命令、Next evidence needed，以及 Continue / Narrow / Stop。

请最后确认两点：
1. 哪些内容可以匿名复盘？
2. 哪些客户名、仓库名、路径、截图或日志必须排除？
```

### Narrow

```text
这条信息能判断一个单点，但还不足以做完整审查。我们先缩小到一个问题：下一条最安全命令是什么。

请补一个最小证据：失败命令、exit code、相关文件范围，或 reviewer 的一句具体疑问。
```

### Stop

```text
目前还不能做公开案例或审查报告，因为缺少可复核证据 / 授权边界不清 / 涉及敏感数据。先不要发我生产权限、密钥或完整私有仓库。

如果要继续，请改用脱敏摘要、失败命令和公开边界说明。
```

## 与后续文档衔接

- 能 `Continue`：进入 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md)。
- 只能 `Narrow`：先用 [下一条安全命令梯](next-safe-command-ladder.md) 做单点交付。
- 不会写第一条观察：复制 [AI 编程审查发布后观察样例](ai-coding-audit-observation-example.md)，把痛点原话、证据形状、公开边界和 `Next evidence needed` 替换成真实信息。
- 要公开复盘：先过 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md) 和 evidence boundary checkpoint。
- 要沉淀资产：回到 [AI 程序员资产飞轮](ai-programmer-asset-flywheel.md)，判断这次反馈适合写文章、模板、skill、书稿卡片还是服务 offer。

## 通过 / 失败标准

Pass means：48 小时内至少出现 1 条可复核痛点原话，且能明确下一步是 `Continue` 或 `Narrow`。

Fail means：只有曝光、点赞、收藏，没有具体样本、证据形状或授权边界；下一轮不要扩写内容，先重写 hook 或换渠道。
