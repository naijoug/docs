---
title: Agent Cron 未提交接力路径分诊
icon: robot

index: true
order: 47

---

# Agent Cron 未提交接力路径分诊

上一轮 notebook 经常会留下“下一次优先处理某个目录”的接力点，但本轮启动时那个目录可能已经有未提交改动。不要把接力点自动等同于授权；先分诊这些改动能否接管，再决定继续、缩小或切换。

<!-- more -->

## 适用场景

- 上一轮明确建议继续某个 repo、页面、技能或书稿章节。
- 本轮 `git status --short` 显示接力路径已经 dirty，且无法确认是用户、其他 agent 还是上一轮未提交残留。
- 任务运行在无人值守 cron 中，不能询问用户归属。
- 仍然希望做一个可验证小块，而不是只写 notebook。

不适用：用户在当前指令中明确要求接管某个未提交 patch，或目标是救火修复。那些场景按用户授权处理，但仍要在提交前列出 staged 文件。

## 分诊顺序

```text
1. Snapshot：只读检查接力路径和相邻入口文件的 status / diff。
2. Classify：把路径分成 owned-this-run、known-previous、unknown-dirty、clean-adjacent。
3. Decision：在 Continue / Narrow / Switch / Stop 中选一个。
4. Execute：只修改 owned-this-run 或 clean-adjacent 文件。
5. Verify + Commit：验证命令必须能限定到本轮文件；提交前读 staged 清单。
```

这一步的目的不是逃避接力，而是避免“上一轮建议继续”变成“本轮可以提交别人没完成的改动”。

## 决策表

| 观察 | 决策 | 本轮动作 | Notebook 写法 |
| --- | --- | --- | --- |
| 接力路径 clean，且范围小 | Continue | 直接做上一轮小块 | `Decision: Continue; path clean` |
| 接力路径 dirty，但 diff 明显是本轮刚创建 | Continue | 继续并提交本轮文件 | `Owned this round: ...` |
| 接力路径 dirty，diff 来源不明 | Switch | 不碰该路径，找 clean 相邻资产 | `Avoided: ...; reason: unknown dirty` |
| 接力路径部分 dirty，但有 clean 测试/目录入口可改 | Narrow | 只改 clean-adjacent 文件，避免混合提交 | `Narrowed to: ...` |
| 必须接管 unknown dirty 才有价值 | Stop | 只记录下一条需要用户确认或归属证据 | `Next evidence needed: confirm ownership of ...` |

## 可执行检查

无人值守时，先跑只读命令，不要自动修复：

```bash
git status --short -- <handoff-path> <nearby-entry>
git diff -- <handoff-path>
git diff --name-only
```

如果决定继续，提交前最少跑：

```bash
git diff --check -- <本轮文件>
git add <本轮文件>
git diff --cached --name-only
git diff --cached --check
```

`git diff --cached --name-only` 只能出现 notebook 中列出的本轮文件。若出现 unknown dirty path，先 `git restore --staged <path>`，再重新决定 `Narrow` 或 `Switch`。

## 切换到 clean adjacent 的例子

- `skills/skills/cron/hourly-progress/` 已经有未知 dirty reference：不要提交它；改在 `docs/documents/trending/ai/` 新增一张公开分诊卡，并接入 catalog。
- `books/.../samples/README.md` 已 dirty：不要顺手整理目录；新建 `.drafts/` 草稿或选择另一本 clean 章节。
- `makemoney/site/index.html` dirty 来源不明：不要继续改首页；可以先补一个只读检查脚本或写 run note，除非检查脚本也需要碰 dirty path。

## 与现有卡片的衔接

- 先用 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 判断哪些 dirty path 不能碰。
- 再用 [Agent Cron 规划-执行-验证闭环](agent-cron-planning-execution-verification-loop.md) 写清候选工作和选择理由。
- 如果切换后的 clean adjacent 仍然过大，用 [Agent Cron 交付预算卡](agent-cron-delivery-budget-card.md) 缩小到 15-45 分钟的小块。
- 完成后用 [Agent 交接回执模板](agent-handoff-receipt-template.md) 写明 avoided paths、verified facts 和 next safe command。

## Stop / Switch 句式

```text
Decision: Switch
Reason: 上一轮 handoff 指向 <path>，但本轮启动时该路径已有 unknown dirty diff；无人值守下不接管。
Selected clean adjacent: <path>
Verification: <command>
Next safe command: 先确认 <path> 的归属；若不能确认，继续选择 clean adjacent 小块。
```

这段句式比“下次继续处理”更可执行：下一位 agent 先看到归属门，再决定是否回到原接力路径。
