---
title: 生成验证产物先隔离再读状态
icon: broom

index: true
order: 101

---

# 生成验证产物先隔离再读状态

有些验证命令会把临时数据库、trace、coverage、截图、录屏或 worker 运行目录写进 repo。定时 agent 如果只看 `git status --short`，很容易把这些噪音误判成“项目有人继续了”，或者更糟，把临时产物混进提交。本卡把这类路径先分成 `generated-noise / owned-output / unknown-dirty`，再决定本轮能不能继续。

<!-- more -->

## 入口信号

看到下面任一状态时，不要立刻清理、stage 或提交：

- `?? .qa/`、`?? tmp/`、`?? coverage/`、`?? test-results/`、`?? playwright-report/`。
- `M`/`??` 指向 `target/`、`.next/`、`dist/`、`build/` 这类构建目录。
- 上一轮验证命令提到会生成 sqlite、trace、snapshot、report，但 notebook 没写清是否可删除。
- 当前 repo 同时有源码改动和大量生成目录，无法一眼判断哪些是人写的。

## 三段式分诊

| 分类 | 判断证据 | 允许动作 | 禁止动作 |
| --- | --- | --- | --- |
| `generated-noise` | 路径命名、`.gitignore`、验证命令日志能证明是临时产物 | 只读记录；必要时建议补 `.gitignore`，但先不删除 | 不把清理动作伪装成业务修复 |
| `owned-output` | 本轮命令刚生成，且交付契约要求保留，例如 golden snapshot、样例包 | path-scoped 检查后只提交契约要求的文件 | 不把同目录其他旧产物顺手提交 |
| `unknown-dirty` | 没有日志、命令或所有权证据；可能是用户手工产物 | 只读分诊，在 notebook 写 `Next evidence needed` | 不格式化、不删除、不 stage |

## 最小命令梯

```bash
# 1. 先取状态快照，不修改文件
git status --short

# 2. 只看候选生成目录是否已被 ignore，不用清理证明
#    将 <path> 换成 .qa/、coverage/、target/ 等候选路径
git check-ignore -v <path> || true

# 3. 如果要修改 docs 或 .gitignore，先限制 diff 范围
git diff -- docs/documents/trending/ai/generated-artifact-quarantine-before-status.md

git diff --check -- docs/documents/trending/ai/generated-artifact-quarantine-before-status.md
```

`git check-ignore` 返回非 0 不等于“可以删除”；它只说明该路径没有 ignore 规则。无人值守时，默认把未知生成目录留给下一轮或用户确认，除非本轮命令明确创建了它且任务目标就是清理本轮副作用。

## Notebook 记录句式

```text
Generated artifact triage:
- Startup signal: <git status --short 摘要>
- Candidate generated paths: <相对路径列表>
- Evidence: <命令日志 / .gitignore / 路径命名 / unknown>
- Decision: generated-noise / owned-output / unknown-dirty
- Current-run owned cleanup: yes/no, paths=<仅本轮创建的路径>
- Next safe command: <下一轮第一条命令>
```

## 何时切换任务

如果源码路径与生成产物混在一起，而且无法证明源码改动归属，本轮不要为了“让状态变干净”接管工程 repo。更安全的选择是：

1. 把启动状态、候选生成路径和未接管路径写进 `summaries/hermes/YYYY-MM-DD.md`。
2. 切到 clean repo 或 clean-adjacent 文档，完成一个可验证小块。
3. 在接力点写明：下一轮只有在 repo clean、或用户明确授权清理/接管这些生成路径时，才继续工程切片。

## 与现有卡片的关系

- 和 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 配合：先识别启动前 dirty，再判断是否可能是生成噪音。
- 和 [验证后生成文件 Diff 隔离卡](generated-diff-quarantine-after-verification.md) 配合：本卡偏启动分诊，后者偏验证命令跑完后的收尾隔离。
- 和 [Agent Cron 下一块选择矩阵](agent-cron-next-slice-switchboard.md) 配合：当生成产物导致工程 repo 归属不清时，用矩阵切到 `Boundary=1`、`Verification=1` 的替代任务。

核心原则：生成产物不是自动可删的垃圾，也不是自动可提交的成果；它先是状态证据，只有归属清楚后才是清理对象或交付对象。
