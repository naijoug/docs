---
title: Agent Cron 的脏工作区边界
icon: robot

index: true
order: 42

---

# Agent Cron 的脏工作区边界

当一个定时 agent 每小时被唤醒时，最危险的不是“没干活”，而是把用户、上一个 agent 或另一个实验留下的改动混进自己的提交。本页把脏工作区处理收束成一张可执行边界卡：先判定归属，再选一个不会接管他人改动的小任务。

<!-- more -->

## 适用场景

- workspace 由多个 repo 组成，根目录本身不一定是 git repo。
- `git status --short` 已经有既有改动，但本轮仍想推进一个低风险小交付。
- cron 任务需要自主执行，不能等用户确认每个 dirty path 的归属。

不适用：用户明确要求接管某个脏分支、继续某个未完成 patch，或需要修复生产事故。那些场景要按用户指令处理，并在提交前单独确认 diff。

## 四步边界卡

```text
1. Snapshot: 记录每个候选 repo 的 git status --short。
2. Ownership: 把 dirty path 分成 mine / known previous / unknown / safe new path。
3. Selection: 只选择 clean file、新文件，或本轮明确拥有的 path。
4. Commit: 只 git add 本轮文件；提交前用 git diff --cached --name-only 复核。
```

这张卡的关键不是“看到脏工作区就停止”，而是避免把无关改动当成本轮成果。真正的推进可以发生在新的、可验证的边界内。

## 选择任务时的判断

| 状态 | 可以做什么 | 不要做什么 |
| --- | --- | --- |
| repo 干净 | 正常修改、验证、提交 | 跳过验证直接提交 |
| 有未知 dirty path | 新增不冲突文件，或只改 clean path | 格式化全仓、自动修复全部 lint |
| 有同目录入口文件需要改 | 先确认入口文件是否本轮必须修改；如果必须，改最小段落并显式验证 | 顺手重排目录、改风格、合并既有改动 |
| `--changed-from HEAD` 被既有 dirty 文件拖累 | 改用显式文件列表 proof | 把失败归零为“checker 不可用” |
| 大 diff 同时有格式 churn 和内容改写 | 先只读写 `Observed / Kept / Missing / Next safe command`，并拆 format-only / structure-only / content decision | 把标点、结构压缩和内容取舍打包成“审校提交” |
| 需要接管他人改动才有价值 | 记录 `Next evidence needed`，切到其他小任务 | 在无人值守 cron 中猜测归属 |

## 最小提交护栏

提交前至少跑三类检查：

```bash
git status --short
git diff --check -- <本轮文件>
git diff --cached --name-only
```

如果是 AI 文档目录改动，再追加：

```bash
python3 scripts/check-markdown-proof.py <本轮 markdown 文件>
python3 scripts/check-ai-catalog.py
```

`git diff --cached --name-only` 是最后一道闸门：它应该只显示本轮记录里列出的文件。如果出现 `AGENTS.md`、已有实验目录、其他 agent 的 summary 或用户正在编辑的文件，先 `git restore --staged <path>`，不要把它们混进提交。

## 记录模板

```text
Dirty paths observed:
Owned this round:
Avoided paths:
Small task selected:
Verification:
Commit scope:
Next evidence needed:
Decision: Continue / Narrow / Stop / Switch
```

这个模板适合写进 `summaries/hermes/YYYY-MM-DD.md` 的“规划与取舍”和“执行记录”：它让下一次 agent 知道哪些改动是本轮有意推进，哪些只是被观察到但没有接管。

如果 dirty diff 还混有格式替换或结构压缩，先按 [Format Churn 先隔离再审内容](format-churn-before-content-review.md) 和 [结构压缩不丢操作细节](structure-compression-keeps-operational-detail.md) 做只读审查；不要直接把“压短了、变整齐了”当作可接管理由。

## 停止条件

- 本轮想做的任务必须修改未知 dirty path，且没有用户明确授权。
- 验证命令会扫描并修改全仓，无法限定到本轮文件。
- 需要真实外部样本、账号、私有仓库或发布渠道，但当前 cron 无法取得。

触发停止条件时，不要制造“看起来像进展”的文档包装。把当前方向标成 `Stop / Switch`，回到 [AI 程序员每周收入实验规划器](ai-programmer-weekly-experiment-planner.md) 或 [本地可验证 Proof Artifact 清单](local-verifiable-proof-artifact.md) 选择另一个小闭环。
