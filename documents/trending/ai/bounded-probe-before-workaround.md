---
title: 先做有界探针，再写 Workaround
icon: robot
index: true
order: 35
---

# 先做有界探针，再写 Workaround

当上一轮留下“某命令可能挂住 / 某工具偶发不退出 / 某发布步骤可能卡死”的接力点时，下一轮不要直接改脚本或加超时。先用一个可复核、有时间边界、不会触发生产副作用的探针确认问题是否仍存在，再决定是修复、记录基线，还是升级为 runbook。

<!-- more -->

## 适用场景

- 接力记录里有“疑似挂起”“偶发不退出”“可能需要 CI=true / timeout / workaround”的描述。
- 命令是只读或低风险，例如 type generation `--check`、lint、dry-run、preflight。
- 当前 repo 有其他人或历史遗留 dirty diff，本轮只能接管自己明确相关的文件。
- 直接改脚本可能引入新依赖、隐藏真实问题，或让后续 agent 误以为问题已被复现。

## 核心原则

**先证明故障仍然存在，再为故障写补丁。**

AI agent 很容易把上一轮的怀疑当成事实，然后机械增加 timeout、环境变量或 wrapper。更稳的做法是把“怀疑”转成一次有界实验：命令、时限、环境、退出码、输出片段都记录下来。如果问题没有复现，本轮产出可以是一个 green baseline 和下一条更高价值接力，而不是制造一个不必要的 workaround。

## 20 分钟执行卡

| 步骤 | 动作 | 产出 |
| --- | --- | --- |
| 1 | 先读上一段 notebook / handoff，只摘取可验证的疑点 | 明确假设，例如“非 CI 下 `wrangler types --check` 可能不退出” |
| 2 | 检查 `git status --short`，划出本轮不接管的 dirty path | ownership boundary |
| 3 | 用外层时间边界运行原命令，不改变脚本 | exit code、耗时、关键输出 |
| 4 | 若复现挂起，再用最小变量复测：`CI=true`、新版工具、关闭网络、跳过生成等 | 缩小触发条件 |
| 5 | 只有复现且影响交付时，才写 wrapper、timeout 或文档化 workaround | 可验证补丁 |
| 6 | 若未复现，记录 green baseline，并把下一段切到更有价值的小任务 | 避免过度工程 |

## 判定表

| 探针结果 | 本轮动作 | 后续接力 |
| --- | --- | --- |
| 原命令在时间边界内正常退出 | 不改脚本；记录版本、命令和输出摘要 | 下一段转向 release 文档、用户可见功能或资产化任务 |
| 原命令稳定超时 / 卡死 | 保留最小复现命令；再测一个变量 | 若变量有效，补脚本或 runbook；否则开 issue / 记录 blocker |
| 只在某环境卡住 | 把环境差异写入 preflight 或 CI 说明 | 不要让本机 workaround 污染所有环境 |
| 命令有副作用或需要授权 | 不执行；改写成只读 preflight 或待授权清单 | 等用户授权再碰 preview / upload / deploy |

## 报告模板

```markdown
- 假设：上一段怀疑 `project/` 的 `some-command --check` 在非 CI 下不退出。
- 探针：在 `project/` 运行 `some-command --check`，外层限制 45 秒。
- 结果：exit 0，输出包含 `Types are up to date`，未复现挂起。
- 决策：本轮不写 timeout wrapper；下一段转向 `docs/...` 或 release preflight 的用户价值任务。
```

## 反例

- 没有复现就把所有 `check` 命令包进自定义 timeout。
- 把“上一轮感觉可能挂”写成“已确认 bug”。
- 只记录“看起来没问题”，但不保留命令、退出码或输出关键句。
- 用会访问生产、上传、发布的命令做探针，却没有用户授权。

## 可复用口令

> 先把怀疑降级成有界探针：原命令、45 秒边界、exit code、关键输出。只有复现才写 workaround；未复现就记录 green baseline，并把下一步切到更高价值任务。
