---
title: AI 编程审查红旗分诊卡
icon: triangle-exclamation

index: true
order: 92

---

# AI 编程审查红旗分诊卡

做 AI 编程审查时，不要把所有发现都写成“建议优化”。红旗分诊卡的目标是先区分哪些问题会阻断发布、哪些只需要补证据、哪些可以放入后续改进，避免把一份审查报告写成无优先级的长清单。

<!-- more -->

## 适用场景

- 收到一个 AI 生成 PR、agent 任务记录、失败命令或脱敏 final report，需要在 30-60 分钟内给出可执行反馈。
- 已经按 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) 收集了最小证据，但发现问题很多。
- 准备把审查能力产品化，需要让客户看懂“为什么这个问题先修”。

不适用：没有 diff、没有失败输出、没有运行命令、没有授权边界，或只能凭感觉判断质量的样本。此时先回到 [AI 编程审查证据收集请求模板](ai-coding-audit-evidence-request-template.md)。

## 三层红旗

| 层级 | 判断标准 | 交付表达 | 下一步 |
| --- | --- | --- | --- |
| P0 Stop | 可能导致数据丢失、权限越界、密钥泄露、错误发布、破坏用户已有改动，且证据足够具体 | `Stop before merge / publish` | 要求先回滚、隔离、补授权或重跑最小验证 |
| P1 Verify | 可能影响功能、兼容性、性能或交付承诺，但证据还缺一条命令、日志或人工确认 | `Verify before shipping` | 给出下一条安全命令或人工检查点 |
| P2 Improve | 不阻断本次交付，但会降低可维护性、复用性或下一轮接手效率 | `Improve after baseline is green` | 进入后续 backlog、技能沉淀或文档改进 |

分诊时宁可少报 P0，也不要把 P2 包装成阻断项。客户或协作者最需要的是“先做什么”和“为什么现在必须做”。

## 分诊步骤

1. **固定样本边界**：记录输入来自 PR、Issue、命令输出、日志、截图还是文档；没有授权的内容只描述证据形状。
2. **列风险假设**：每条只写一个风险，例如“agent 可能覆盖用户未提交文件”，不要写成泛泛的“代码质量差”。
3. **绑定证据**：把每条风险连到 diff 片段、测试输出、配置项、日志行或缺失证据。
4. **打层级**：按 P0 / P1 / P2 标记；证据不足但风险严重时先列为 P1，不直接写成事实。
5. **给下一步**：每条 P0/P1 必须附一条可执行动作；如果没有动作，说明它还不是交付级发现。
6. **决定 Continue / Narrow / Stop**：报告最后只给一个决策，避免客户拿到一堆结论却不知道是否继续。

## 输出模板

```markdown
## Red Flag Triage

### Sample boundary
- Input evidence:
- Authorized / redacted boundary:
- Not reviewed:

### Findings
| Priority | Finding | Evidence | Next safe action |
| --- | --- | --- | --- |
| P0 Stop |  |  |  |
| P1 Verify |  |  |  |
| P2 Improve |  |  |  |

### Decision
- Continue / Narrow / Stop:
- Why:
- Next evidence needed:
```

## 示例：把“脏工作区”分成 P0/P1/P2

| Priority | Finding | Evidence | Next safe action |
| --- | --- | --- | --- |
| P0 Stop | agent 准备提交时混入了启动前未归属文件 | `git status --short` 显示目标文件之外还有既有 dirty path | 只 stage 本轮明确修改文件；提交前再跑 `git diff --cached --name-only` |
| P1 Verify | 测试命令只覆盖新增 helper，没有覆盖调用方 | 变更同时修改 helper 与 3 个 shell test | 追加调用方 smoke test；记录真实通过输出 |
| P2 Improve | 报告里有重复解释，读者需要更短的执行摘要 | 人工阅读发现 P2 文字过长，但不影响本次发布判断 | 下轮提炼成模板或 checklist，不阻断当前交付 |

这个例子的关键是：同样来自一次审查，P0 保护交付边界，P1 补验证链，P2 才进入资产化改进。不要让 P2 噪音稀释 P0/P1 的执行优先级。

## 和现有资产的连接

- 把样本入口放在 [AI 生成 PR 的最小审查入口](ai-generated-pr-review-entry.md) 或 [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md)。
- 把下一条命令写进 [下一条安全命令梯](next-safe-command-ladder.md)，不要只写“建议补测试”。
- 把可公开部分交给 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md)；不能公开的事实只保留证据形状。
- 如果连续没有 P0/P1 证据，只剩 P2 建议，按 [AI 编程审查实验切换清单](ai-coding-audit-experiment-switch.md) 判断是否缩小或停止该 offer。
