---
title: AI 编程审查样本到首份报告清单
icon: list-check

index: true
order: 35

---

# AI 编程审查样本到首份报告清单

拿到一个愿意匿名提供的 agent 改动样本后，不要立刻写案例，也不要马上扩成咨询项目。先用一条 30-60 分钟的最小流水线，把样本变成可复核、可交付、可停止的首份审查报告。

<!-- more -->

## 适用场景

这份清单连接三件事：

1. [AI 编程审查样本征集模板](ai-coding-audit-sample-request.md)：把模糊回复变成结构化输入；
2. [AI 编程审查服务交付指南](ai-coding-audit-service.md)：把输入压缩成固定范围 offer；
3. [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md)：判断哪些内容可以公开复盘。

适合在下面情况使用：

- 有人回复了一个 agent 失败场景，但还没有完整 repo 权限；
- 有一段 PR、issue、agent log 或 failed build，可以做只读审查；
- 想先交付一份小报告验证价值，再讨论是否付费或继续复盘；
- 需要避免把“对方随口描述”误写成真实案例证据。

## 0. 先做接收判定

收到样本时，先判断它进入哪条分支，而不是直接承诺审查。

| 输入状态 | 判定 | 下一步 |
| --- | --- | --- |
| 只有一句吐槽，没有 repo / PR / log / 命令 | `Narrow` | 追问一个最小证据：失败命令、PR 链接或 agent final report |
| 有公开 PR / issue / build log | `Continue` | 进入只读审查，记录证据来源 |
| 有私有素材但未授权公开 | `Continue privately` | 只做内部报告，不写公开案例 |
| 包含密钥、用户数据、生产权限或无法脱敏的日志 | `Stop` | 不接收原始材料，要求重新脱敏或改成方法讨论 |

第一封回复只问三件事：

```text
1. 这次 agent 改动的目标是什么？
2. 你现在最不确定的失败点是什么？
3. 哪一条命令、日志或 PR 讨论最能证明这个不确定性？
```

如果对方不能回答第 3 问，先不要写报告；把它降级为内容选题或 checklist 练习。

## 1. 锁定只读范围

把样本压缩成一个可审查边界：

```text
Reviewed:
Included:
Excluded:
Evidence inspected:
Public boundary:
Owner next action:
```

范围越小，报告越容易产生价值。一个好的首份报告通常只覆盖以下之一：

- 一次 AI 生成 PR 的验证链；
- 一次 failed build 后 agent final report 是否可信；
- 一个 dirty workspace 是否混入他人改动；
- 一条下一步最安全命令是否明确。

不要把第一次样本扩成“全面评估团队 AI 工作流”。第一次只证明：你能把混乱的 agent 记录整理成下一步动作。

## 2. 建证据台账

用小表把可说、不可说、还不能说的内容分开。

| Claim | Evidence | Label | Public-safe wording | Next evidence needed |
| --- | --- | --- | --- | --- |
| `agent final report 没写 skipped checks` | final report 截断文本 / PR comment | `Fact` | `报告缺少跳过检查字段` | 无 |
| `这可能导致 reviewer 误判已验证` | reviewer 原话或未跑命令 | `Inference` | `reviewer 需要额外追问验证范围` | 保留一条追问记录 |
| `测试体系不完整` | 只有一次失败命令 | `Unverified` | 不写结论，只写 `Next evidence needed` | 测试目录或 CI 配置 |
| `客户仓库路径` | 私有 repo URL | `Private` | 改成 `src/features/[domain]/...` | 脱敏确认 |
| `生产日志含用户数据` | 原始日志 | `Stop` | 不公开，不复制 | 重新提供脱敏日志 |

内部执行时可复用 `skills/skills/manual/review/audit-evidence-boundary/` 做 claim 分层。公开报告只使用 `Fact` 和有明确依据的 `Inference`；`Unverified` 必须写进 `Next evidence needed`。

## 3. 产出首份 1 页报告

首份报告不要追求完整，只要让对方看完知道下一步先做什么。

```markdown
# AI Coding Audit First Report: [sample]

## Scope
- Reviewed:
- Included:
- Excluded:
- Evidence inspected:
- Public boundary:

## Highest Risk
- Risk:
- Evidence:
- Why it matters:

## Red Flag Triage
| Priority | Finding | Evidence | Next safe action |
| --- | --- | --- | --- |
| P0 Stop |  |  |  |
| P1 Verify |  |  |  |
| P2 Improve |  |  |  |

## Next Safe Command Ladder
| Step | Command / Check | Why this first | Pass means | Fail means | Next action |
| --- | --- | --- | --- | --- | --- |
| 1 | `git status --short` | 先确认本轮范围和 dirty path | 可以区分 owned / excluded paths | 先停止审查并补范围台账 | Narrow 到所有权边界 |
| 2 | `[最小相关命令]` | 只验证最高风险 | 进入下一层证据 | 不升级 build，先定位失败模块 | Narrow 到失败模块 |
| 3 | `[升级命令或人工检查]` | 最小证据通过后才看集成面 | 可以给出交付建议 | 记录 blocker / known issue | Continue / Stop |

## Stop Conditions
- 范围无法区分本轮改动和既有改动；
- 缺少证明最高风险的命令、日志或 diff；
- 素材含私有数据、密钥、生产权限或未经授权内容。

## Handoff
- Next owner action:
- Skipped checks:
- Unverified items:
- Continue / Narrow / Stop:
```

如果发现超过三条，先用 [AI 编程审查红旗分诊卡](ai-coding-audit-red-flag-triage.md) 把它们压成 P0 / P1 / P2；首份报告只突出最高优先级，不把 P2 改进建议伪装成发布阻断项。

这份报告可以发给样本提供者，但不自动变成公开案例。公开前必须再过匿名案例骨架和证据边界检查。

## 4. 决定下一步

| 信号 | 决策 | 后续动作 |
| --- | --- | --- |
| 对方说“这正是我们卡住的点”，并愿意补第二段证据 | `Continue` | 继续做完整 1 页报告，询问是否允许匿名复盘 |
| 对方只关心某条命令或某个 PR 字段 | `Narrow` | 单独交付 [下一条安全命令梯](next-safe-command-ladder.md) 或 PR checklist |
| 对方无法提供证据、授权或脱敏边界 | `Stop` | 不写案例，回到样本征集或方法论文章 |
| 对方询问团队模板、培训或持续审查 | `Productize` | 把 1 页报告拆成 checklist、issue template、PR template 或 agent skill |

## 发布边界

只有同时满足下面条件，才把首份报告改写成公开案例：

1. 有明确授权或使用公开材料；
2. 脱敏后仍保留至少一条可复核证据；
3. `Included` / `Excluded` 清晰；
4. 每个风险都有 `Evidence` 或被降级为 `Unverified`；
5. 命令梯写清 `Pass means` / `Fail means`；
6. 删除客户名、私有路径、密钥、用户数据和未经授权截图；
7. 公开版明确写出 `Next evidence needed` 和停止条件。

如果任一项不满足，就不要把它包装成“真实案例”。可以把它写成方法论、匿名结构模板或下一次样本征集的说明。

## Continue / Narrow / Stop

- `Continue`：拿到可审查证据，并能在 30-60 分钟内交付一页报告。
- `Narrow`：样本只支持一个单点判断；只交付命令梯、证据边界或 handoff 片段。
- `Stop`：样本无法授权、无法脱敏、缺少证据或触及生产/隐私边界；停止审查，不公开案例。
