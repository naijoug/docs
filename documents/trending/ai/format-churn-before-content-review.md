---
title: Format Churn 先隔离再审内容
icon: robot

index: true
order: 48

---

# Format Churn 先隔离再审内容

AI 或 agent 接手已有草稿、章节、模板时，最容易把“格式统一”与“内容改写”混成一个大 diff。标点、空白、换行、表格化和引用样式的 churn 会把真正的逻辑变化盖住，导致 reviewer 很难判断哪些内容应该保留、哪些只是工具自动改写。

<!-- more -->

## 触发信号

出现下面任一信号，先把本轮决策从“继续审内容”切到“隔离 format churn”：

- `git diff --stat` 显示单个 Markdown 文件同时有大量增删行，但标题结构变化不大。
- diff 中标点、空白、换行、列表缩进、表格形态被大面积替换。
- 一处改动同时声称“审校、压缩、结构调整、补充证据、统一格式”。
- reviewer 无法从 diff 直接回答：哪些句子是新观点，哪些只是格式变化。

## 三步隔离法

```text
1. Measure: 先统计 diff 形状，不改文件。
2. Split: 把 format-only、structure rewrite、new evidence 分成独立候选提交。
3. Review: 只有 format churn 可逆或已单独提交后，才审内容取舍。
```

关键是先证明“变化类型”，而不是直接判断“写得好不好”。如果格式替换不可逆，内容审查会被迫为工具风格买单。

## 最小只读检查

在无人值守 agent、PR reviewer 或书稿审校场景，先跑这些只读命令：

```bash
git status --short -- <path>
git diff --stat -- <path>
git diff --numstat -- <path>
git diff --word-diff -- <path> | sed -n '1,160p'
```

如果不能使用 `sed`，就改用编辑器或文件阅读工具抽样前 100-200 行 diff。目标是回答四个问题：

1. 主要变化是文字新增、删除、结构移动，还是格式替换？
2. 是否存在大规模标点或空白 churn？
3. 新增证据、引用、流程字段是否能单独成块？
4. 当前提交是否会混入别人留下的 dirty diff？

## 提交拆分建议

| 类型 | 独立提交名 | 验证方式 |
| --- | --- | --- |
| 标点、空白、换行统一 | `style: normalize chapter punctuation` | `git diff --word-diff` 抽样确认没有新增观点 |
| 结构压缩或表格化 | `docs: reshape 90-day roadmap` | 对照原章节标题和检查清单，确认没有丢掉操作细节 |
| 新增证据或模板字段 | `docs: add verification fallback fields` | 检查新增字段是否有使用入口、失败回退和必留证据 |
| 引用或链接修正 | `docs: refresh chapter references` | 运行对应链接或引用 proof 脚本 |

不要把这些变化打包成“审校更新”。审校是意图，不是可复核的 diff 边界。

## Notebook 记录句式

```text
Decision: Narrow / Switch
Reason: <path> 同时包含 format churn 与内容改写；无人值守下不做局部接管。
Observed shape: <insertions/deletions/stat + 2-3 个样本>
Suggested split: format-only / structure rewrite / evidence fields
Next safe command: 先单独生成 format-only diff，验证后再审内容。
```

这段记录比“下次继续审校”更有价值：下一位 agent 能先恢复清晰边界，再决定是否接管内容。

## 与现有工作流衔接

- 先用 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 判断本轮能不能接管 dirty path。
- 如果接力路径已 dirty，用 [Agent Cron 未提交接力路径分诊](agent-cron-uncommitted-continuation-triage.md) 决定 Continue / Narrow / Switch / Stop。
- 如果要把审查结论交给下一位 agent，用 [Agent 交接回执模板](agent-handoff-receipt-template.md) 写清 avoided paths、verified facts 和下一条安全命令。

Format churn 的正确处理方式不是“禁止格式化”，而是让格式化先成为一个可验证、可回滚、不会遮蔽内容判断的小提交。
