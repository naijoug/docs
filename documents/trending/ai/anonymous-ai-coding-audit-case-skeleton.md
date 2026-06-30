---
title: 匿名 AI 编程审查案例骨架
icon: file-shield

index: true
order: 32

---

# 匿名 AI 编程审查案例骨架

这是一份不假设真实客户素材的案例骨架。它用于把一次 AI 编程审查从“方法论样板报告”推进到“可公开复盘的匿名案例”，同时避免编造客户、仓库、指标或未经授权的代码细节。

<!-- more -->

## 使用边界

这份骨架只解决一个问题：当你还没有可公开客户案例时，如何先定义一份不会造假的案例结构。

适合使用：

- 已经有一次自己的 repo、开源 repo 或客户授权片段可以审查；
- 需要把审查结果脱敏成文章、售前样例或复盘记录；
- 想验证读者是否愿意提供第二个 agent 工作流样本。

不适合使用：

- 用虚构数据包装成真实客户成功案例；
- 把生产权限、密钥、私有业务逻辑或未经授权的日志放进公开文档；
- 用“已脱敏”掩盖无法复核的结论。

## 案例标题模板

```text
一次匿名 AI 编程审查：从 [失败症状] 到 [下一条安全命令]
```

可替换字段：

| 字段 | 写法 | 不要写成 |
| --- | --- | --- |
| 失败症状 | `AI 改完后 typecheck 失败，但报告只写已完成` | `某知名团队 agent 失控` |
| 审查对象 | `一个 React 状态管理 PR`、`一个文档站配置改动` | `客户核心系统` |
| 下一条安全命令 | `只跑 reducer/selector focused tests`、`先检查 dirty workspace` | `补完整测试体系` |

## 1 页匿名案例结构

```markdown
# Anonymous AI Coding Audit Case: [症状]

## Scope
- Reviewed:
- Included:
- Excluded:
- Evidence inspected:
- Anonymization rule:

## Before
- Agent claimed:
- Human uncertainty:
- Current blocker:

## Top Risks
| Priority | Risk | Evidence | Why it matters | Recommended fix |
| --- | --- | --- | --- | --- |

## Next Safe Command Ladder
当前最高风险：

| Step | Command / Check | Why this first | Pass means | Fail means | Next action |
| --- | --- | --- | --- | --- | --- |
| 1 | `git status --short` | 先区分本轮改动和既有脏状态 | 可以确认审查范围 | 需要先标注 owned / excluded paths | Narrow 到所有权边界 |
| 2 | `[最小相关命令]` | 只验证最可能被 AI 改坏的路径 | 可以进入下一层证据 | 不升级 build，先定位失败模块 | Narrow 到失败模块 |
| 3 | `[升级命令]` | 最小命令通过后再检查集成面 | 可以支持合并或交付建议 | 记录 known issue / blocker | Continue / Stop |

## After
- Decision:
- Handoff:
- Remaining unverified items:

## Public version notes
- Removed:
- Generalized:
- Kept as evidence:
```

## 脱敏规则

匿名案例要保留证据形状，而不是保留敏感内容。

| 原始素材 | 可公开写法 | 仍需删除 |
| --- | --- | --- |
| 私有路径 | `src/features/[domain]/state.ts` | 客户名、内部目录、工单号 |
| 日志片段 | 只保留错误类型和第一条可复核失败 | token、host、用户数据、请求体 |
| PR 讨论 | 改写成“reviewer 不确定 X 是否被验证” | 人名、组织名、截图头像 |
| 命令输出 | 保留命令、exit code、关键失败行 | 机器名、绝对路径、密钥、私有 URL |

如果删掉敏感内容后已经无法证明结论，就不要把它写成案例；改写成方法论或 checklist。

## 从样板报告改成匿名案例

已有 [AI 编程审查样板报告](ai-coding-audit-mock-report.md) 时，下一步不是复制整篇，而是替换三层内容：

1. `Scope`：从“审查自己的文档链路”换成“审查一次具体 PR / agent log / failed build”；
2. `Top Risks`：每条风险都必须有可复核证据，不能只写通用建议；
3. `Next Safe Command Ladder`：每一级命令都要来自这次案例的最高风险，而不是复用固定的 lint / test / build 顺序。

这样写出来的案例才像交付物，而不是服务介绍页的重复版本。

## 发布前证据清单

在开始写公开版本前，先把证据放进一张小表。表格允许出现空项；空项不是失败，而是提醒你把结论降级为 `Unverified`，不要为了故事完整补数字、补客户反馈或补根因。

| Evidence item | Required proof | Public-safe summary | If missing |
| --- | --- | --- | --- |
| Case source | PR 链接、issue、agent log、build 记录或授权说明 | `来自一次已授权脱敏的 AI 生成 PR 审查` | 降级为方法样板，不写“真实案例” |
| Scope boundary | `Included` / `Excluded` 文件、命令和时间范围 | `只审查状态管理重构，不覆盖生产数据` | Narrow 到范围说明，先不写风险结论 |
| Top risk | diff、失败命令、日志片段或 reviewer 原话 | `error state 可能被 loading state 覆盖` | 把该风险放入 `Next evidence needed` |
| Command result | 命令、exit code、关键输出摘要 | `focused reducer test failed at error branch` | 不写 `Pass means` / `Fail means` 的确定结论 |
| Handoff | 下一条安全命令、owner、停止条件 | `先补 reducer 分支测试，再做 UI smoke` | 只发布观察，不包装成交付复盘 |
| Authorization | 可公开范围、脱敏规则、敏感字段删除记录 | `仓库名、路径、用户数据已替换或删除` | Stop，不发布案例 |

写作时只把 `Public-safe summary` 带进正文；`Required proof` 用来内部自查，避免公开文档泄露私有路径、绝对路径、密钥或用户数据。

## 复用到 agent skill

公开案例写作前，可以先用 `skills/skills/manual/review/audit-evidence-boundary/` 做一次内部证据边界审查：

1. 把每条想写进案例的 claim 标成 `Fact`、`Inference`、`Unverified`、`Private` 或 `Stop`；
2. 只把 `Fact` 和已标明依据的 `Inference` 带进公开版本；
3. 把 `Unverified` 改写为 `Next evidence needed`，不要包装成结果；
4. 把 `Private` 留在内部台账，公开版只保留脱敏后的证据形状；
5. 只要出现 `Stop`，先停止发布，回到授权、范围或脱敏边界。

这一步的目标不是让案例更像成功故事，而是让读者能分清：哪些是已经发生的事实，哪些是基于证据的判断，哪些只是下一步需要补的证据。

## 发布前检查

发布匿名案例前，用下面 7 个问题做最后防线：

1. 是否明确写了 `Included` 和 `Excluded`？
2. 是否保留至少 1 条可复核证据，而不是只写判断？
3. 是否删除了客户名、私有路径、密钥、用户数据和未经授权截图？
4. 是否写清 `Pass means` / `Fail means`，而不是只列命令？
5. 是否标出未验证项和停止条件？
6. 是否把“审查后下一步动作”写成 handoff，而不是泛泛建议？
7. 是否避免把虚构样例伪装成真实客户结果？

## Continue / Narrow / Stop

- `Continue`：有人愿意提供真实 PR、失败日志或 agent 记录，并允许你按这份骨架做匿名复盘。
- `Narrow`：反馈只集中在脱敏、命令梯或 handoff 之一；下一篇只写该单点，暂不扩成完整案例。
- `Stop`：没有真实样本，或脱敏后无法保留证据；不要编造案例，回到 [AI 编程审查服务交付指南](ai-coding-audit-service.md) 优化 hook 和样本征集方式。
