---
title: AI 编程审查观察到执行技能清单
icon: list-check

index: true
order: 37

---

# AI 编程审查观察到执行技能清单

这份清单用于判断：一条发布后观察或一次首份报告，什么时候值得升级成 `skills/skills/` 下的可复用执行技能。它的目标不是“把所有文档都技能化”，而是只把重复出现、边界清楚、可本地验证的动作沉淀成 agent 可以复用的最小流程。

<!-- more -->

## 先决条件

只有同时满足下面条件，才考虑写技能：

- **重复问题**：至少两次观察或报告都指向同一种失败形状，例如“agent 声称已验证但没有命令输出”；
- **输入证据明确**：能落到 5 项最小字段中的至少两项（`Command status`、`Workspace status`、`Risk summary`、`Agent claim`、`Change scope`），而不是泛泛聊天；
- **边界可执行**：技能只做只读检查、命令梯设计、证据分层或报告生成，不要求生产权限；
- **输出可复核**：技能产物能被下一位 agent 或用户检查，例如 `highest risk`、`next safe command`、`Continue / Narrow / Stop`；
- **隐私边界清楚**：不把客户名、私有仓库、密钥、生产路径或未经授权原文写进技能样例。

如果只满足“有人感兴趣”，先继续用 [AI 编程审查发布后观察样例](ai-coding-audit-observation-example.md) 记录 `Narrow`，不要急着创建技能。

## 转换步骤

| 步骤 | 做什么 | 产物 |
| --- | --- | --- |
| 1. 收集证据 | 从 [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md) 里挑 2-3 条同类记录 | 一句话失败形状 |
| 2. 抽象入口 | 写清技能接收什么输入、不接收什么输入 | `Input / Out of scope` |
| 3. 固定动作 | 把执行过程压缩成 3-5 步，不写长篇解释 | `Procedure` |
| 4. 定义输出 | 规定必须返回哪些字段，避免只给建议 | `Output contract` |
| 5. 写验证 | 给出最小自检方式，例如无绝对路径、包含下一条命令、标出未验证项 | `Verification` |
| 6. 反链文档 | 在相关 docs 页面说明这个技能从哪个收入实验沉淀而来 | 相对路径链接 |

## 技能草稿模板

```text
# Skill name

Use when:
- 输入包含：
- 明确不处理：

Procedure:
1. 先记录 git/workspace 状态或输入证据快照。
2. 把 claim 分成 Fact / Inference / Unverified / Private / Stop。
3. 找出最高风险或最小缺口。
4. 给出下一条安全命令或 Next evidence needed。
5. 返回 Continue / Narrow / Stop。

Output:
- Evidence snapshot:
- Highest risk:
- Next safe command / Next evidence needed:
- Boundary:
- Decision:
- Verification:
```

## 是否值得创建技能的判断

- **Continue**：同类问题重复出现，且手工执行步骤已经稳定；下一步可以在 `skills/skills/` 下新增技能，并用一条脱敏样例验证。
- **Narrow**：只有一次真实观察，或输入证据类型还在变化；先继续补记录，不创建技能。
- **Stop**：问题依赖私有上下文、生产权限或无法脱敏；不要技能化，保留为内部记录或停止。

## 先复用已有技能

创建新技能前，先检查问题是否已经落在下面两个稳定动作里：

| 观察到的重复问题 | 优先复用的技能 | 复用方式 |
| --- | --- | --- |
| 报告里写了“建议测试”，但没有说明下一条最小安全命令 | `skills/skills/manual/review/next-safe-command-ladder/` | 从观察记录里的 `Command status`、`Workspace status`、`Risk summary`、`Change scope` 改写出 `Change type`、`Main risk` 和 2-3 步命令梯 |
| 想把私有审查写成公开样例，但证据、授权和脱敏边界不清 | `skills/skills/manual/review/audit-evidence-boundary/` | 先把每条 claim 分成 `Fact / Inference / Unverified / Private / Stop`，再决定是否只发布方法样板 |
| 同时缺命令梯和发布边界 | 先用 `next-safe-command-ladder`，再用 `audit-evidence-boundary` | 先证明“下一步怎么验证”，再判断“哪些内容能公开说” |

如果需要看一条观察如何依次复用这两个技能，先参考 [AI 编程审查技能复用演示](ai-coding-audit-skill-reuse-demo.md)：它展示如何先产出下一条安全命令，再做证据公开边界分层，最后保持 `Narrow`。

只有当这两个技能都不能覆盖重复动作，才新增更窄的技能。例如：多个样本都要求从 agent final report 自动抽取 `Next evidence needed`，且输入字段已经稳定，才考虑单独写一个 final-report-to-evidence-gap 技能。

## 最小可验证技能标准

真正写入 `skills/skills/` 前，至少要能回答：

1. 这个技能是否能在没有私有材料的情况下演示？
2. 它是否比原始文档更短、更可执行？
3. 它是否强制产出 `Next evidence needed` 或下一条安全命令？
4. 它是否明确要求标注未验证内容？
5. 它是否能用一次本地检查证明没有绝对路径和敏感样例？

如果任一答案是否定的，先不要新建技能；回到观察记录，把缺失证据写成下一轮样本征集的收窄条件。

## 接力点

下一次如果要真正创建技能，优先从“AI 编程审查 evidence boundary”或“next safe command ladder”这类稳定动作开始，而不是把完整服务流程一次性塞进技能。技能应该帮助 agent 做一个小判断，而不是替代整套咨询交付。
