---
title: Agent 交接回执模板
icon: robot

index: true
order: 43

---

# Agent 交接回执模板

AI agent 的交接最容易丢失的不是“做了什么”，而是接手者能不能马上判断：哪些事实已验证、哪些改动归本轮所有、下一条安全命令是什么。本模板把一次交接压缩成可复核的回执，避免下一轮重新猜测上下文。

<!-- more -->

## 适用场景

- 一个 cron agent、coding agent 或 reviewer 完成了一小段工作，需要让下一轮继续。
- repo 里存在既有 dirty path，不能把“观察到的状态”和“本轮拥有的改动”混在一起。
- 任务还没大到需要完整设计文档，但已经需要记录验证证据、停止条件和接力点。

不适用：事故处理中需要实时指挥、用户明确要求不要写记录、或交接内容包含密钥、客户私有信息、未脱敏日志。那些场景先处理安全边界，再写公开/半公开摘要。

## 30 秒回执

```text
Handoff title:
Repo / area:
Owned changes:
Avoided dirty paths:
Verified facts:
Commands run:
Open risks:
Next safe command:
Decision: Continue / Narrow / Stop / Switch
```

每一行只写可复核事实。不要写“应该没问题”“大概可行”“用户可能需要”，除非后面跟着证据或 `Next evidence needed`。

## 字段说明

| 字段 | 写什么 | 不写什么 |
| --- | --- | --- |
| `Handoff title` | 本轮交接的一个短标题 | 模糊口号 |
| `Repo / area` | 相对路径，例如 `docs/`、`books/...`、`loom/...` | 本机绝对路径 |
| `Owned changes` | 本轮实际创建或修改的文件 | 只是观察到但没接管的文件 |
| `Avoided dirty paths` | 明确没有接管的既有改动 | 猜测归属、批量格式化结果 |
| `Verified facts` | 命令输出、测试结果、人工可复核标准 | 未运行却声称通过 |
| `Commands run` | 最关键的 1-3 条命令和结果摘要 | 大段无关日志 |
| `Open risks` | 仍未验证、需要授权或需要外部样本的点 | 为了显得完整而隐藏风险 |
| `Next safe command` | 下一轮可以先跑的一条低风险命令 | 需要账号、密钥或会修改全仓的命令 |
| `Decision` | `Continue / Narrow / Stop / Switch` | 没有证据支撑的乐观判断 |

## 写法示例

```text
Handoff title: AI 目录新增页面已接入 catalog proof
Repo / area: docs/documents/trending/ai/
Owned changes: README.md; agent-cron-dirty-worktree-boundary.md; local-verifiable-proof-artifact.md
Avoided dirty paths: docs/AGENTS.md; loom/; skills/
Verified facts: markdown proof checked 4 file(s); AI catalog proof ok
Commands run: python3 scripts/check-markdown-proof.py <本轮文件>; python3 scripts/check-ai-catalog.py; git diff --check -- <本轮文件>
Open risks: 没有真实外部样本，不能声明市场验证
Next safe command: python3 scripts/check-ai-catalog.py
Decision: Continue
```

这个示例的重点不是复制文件名，而是把“能继续的事实”和“不能接管的边界”放在同一张卡里。

## 与现有工作流衔接

- 脏工作区先用 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 判定 owned / avoided path，再写本回执。
- 如果下一步是文档改动，先跑 [AI 文档改动 Proof Checker](ai-doc-change-proof-checker.md)，并把命令摘要写进 `Verified facts`。
- 如果下一步是 AI 编程审查或收入实验，用 [AI 程序员每周收入实验规划器](ai-programmer-weekly-experiment-planner.md) 补充受众、分发和停止条件；本页只负责交接，不替代实验决策。
- 如果交接要进入书稿或公开文章，只公开证据形状：命令、exit code、文件类型、验证边界；不要公开客户名、私有仓库、密钥、个人路径或未经授权截图。

## 自检清单

提交或交接前快速检查：

- 是否只使用相对路径？
- 是否明确列出本轮 owned changes，而不是把所有 dirty path 都算作成果？
- 是否至少有一条可复跑命令或人工可复核标准？
- 是否写出了下一条安全命令？
- 是否给出 `Continue / Narrow / Stop / Switch`，并能用上面的事实解释？

如果这些问题答不上来，不要急着扩写总结。先回到本轮 diff、命令输出或下一条安全命令，把交接变成接手者能执行的卡片。
