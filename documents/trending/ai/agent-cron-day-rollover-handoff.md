---
title: Agent Cron 日切换交接卡
icon: calendar-days

index: true
order: 94

---

# Agent Cron 日切换交接卡

定时 agent 跨过零点时，最容易同时犯两个错：继续把新记录追加到昨天的 notebook，或只读昨天最后一段就机械复述。本卡把“新的一天第一次心跳”压成一个可执行交接流程：先收尾昨天，再开今天的最小可验证任务。

<!-- more -->

## 使用场景

- 当前时间已经进入新日期，`summaries/hermes/YYYY-MM-DD.md` 需要新建或切换。
- 昨日 notebook 已经有多段记录，最后一段留下了接力点。
- workspace 根目录不是 git repo，需要逐个子 repo 快照状态。
- 本轮不能等用户澄清，必须自主判断继续、停止或切换。

不适用：用户明确要求继续某个未提交 patch、处理线上事故，或当前任务不是 cron 心跳。那些场景以用户指令为主，但仍要保护提交边界。

## 4 步日切换流程

```text
1. Time: 用当前系统时间确认今天的 notebook 路径。
2. Tail: 只读昨天最后 1-3 段，提取上一段状态、接力点和停止条件。
3. Snapshot: 重新检查各子 repo git status，不能沿用昨天的 clean/dirty 判断。
4. Select: 选择今天第一块 Boundary=1、Verification=1 的小任务；没有则写 Stop/Switch 和下一条安全命令。
```

关键点：日切换不是“清空上下文”，也不是“继承昨天授权”。昨天的建议只算输入信号；今天是否能改某个 repo，必须由今天启动时的 `git status --short` 和本轮 ownership 决定。

## 决策表

| 日切换信号 | 本轮动作 | 不要做 |
| --- | --- | --- |
| 昨天最后一段有明确 Next safe command，目标 repo 今天仍 clean | 继续最小切片，并把昨天接力点写入“选择理由” | 跳过今天的 git snapshot |
| 目标 repo 今天出现 unknown dirty path | 只读分诊，切到 clean repo 或 safe new file | 因为昨天建议继续就接管 dirty path |
| 昨天连续多轮都在同主题文档化 | 用 `Stop / Switch` 切到工程验证、真实样本或索引漂移修复 | 再写一篇同主题泛文档 |
| 今天只有 summaries 待写 | 先寻找一个可验证小任务；找不到才记录为什么停止 | 把 notebook 更新当成本轮成果 |
| 昨天 summary 尚未提交 | 先在 `summaries/` 内只处理 notebook 提交边界，再做今天任务或反过来分开提交 | 把 summaries 提交混入 docs/books/project repo |

## 今日 notebook 写法

新的一天第一次记录，建议在“上一段/当前状态”里同时写三类事实：

```text
- 当前时间与今日 notebook path：summaries/hermes/YYYY-MM-DD.md
- 昨日最后接力点：<相对路径或 Next safe command>
- 今日 repo snapshot：clean / owned-dirty / unknown-dirty / summary-only
```

在“候选工作”里显式写出为什么不接管昨天留下但今天变 dirty 的路径；在“执行记录”里只列本轮真实改动文件，不复制昨天的成果列表。

## 提交护栏

日切换时至少分两类提交：

1. **实质 repo 提交**：只提交本轮在 `docs/`、`books/`、`makemoney/`、项目仓库等明确拥有的文件。
2. **summaries 提交**：只提交 `summaries/hermes/YYYY-MM-DD.md`，必要时再包含同一天 notebook 的本轮追加。

提交前检查：

```bash
git status --short
git diff --check -- <本轮文件>
git diff --cached --name-only
```

如果看到昨天的 notebook、其他 agent 目录、测试临时产物或启动前 dirty path 被 staged，先取消暂存，重新限定路径。

## 与现有卡片衔接

- 用 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 判断今天能不能接管某个 dirty repo。
- 用 [Agent Cron 下一块选择矩阵](agent-cron-next-slice-switchboard.md) 给候选任务打分。
- 用 [Agent Cron 工作日志资产提取器](agent-cron-worklog-asset-extractor.md) 判断昨天多段重复判断是否值得资产化。

这张卡的成功标准不是“今天 notebook 开好了”，而是下一轮能看见：日切换后为什么选了这块、哪些昨天的接力点被保留或停止、下一条安全命令是什么。
