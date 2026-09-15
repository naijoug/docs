---
title: 其他 Agent Summary 边界卡
icon: robot

index: true
order: 112

---

# 其他 Agent Summary 边界卡

多 Agent workspace 里，`summaries/` 往往同时承载 Hermes、OpenClaw 或未来更多 agent 的工作记录。定时 agent 被唤醒时，如果看到别的 agent 目录里有未跟踪或未提交记录，最危险的动作不是“不处理”，而是顺手把这些记录加入自己的 commit。

<!-- more -->

这张卡把“看见其他 agent 的 summary”变成一个明确边界：可以只读观察、可以在自己的 notebook 里提到它的存在，但不能代写、改写、提交对方目录，除非用户明确授权。

## 适用信号

优先使用这张卡：

- `summaries/` 中同时存在多个 agent 目录，例如 `summaries/hermes/`、`summaries/openclaw/`。
- `git -C summaries status --short` 显示其他 agent 目录有 `??`、`M` 或冲突文件。
- 本轮任务只要求 Hermes 记录自己的规划、执行和接力，不要求整理其他 agent 的工作。
- 其他 agent 的记录可能正在被另一个进程写入，当前 agent 无法知道是否完整。

不适用：

- 用户明确要求合并、审查或迁移某个 agent 的 summary。
- 其他 agent 的记录已经被纳入当前任务范围，并且有清晰的 owner、路径和提交策略。
- 仓库维护任务本身就是修复 `summaries/` 的 checker、目录结构或冲突，此时仍要 path-scoped 提交。

## 三层边界

| 层级 | 可以做 | 不要做 |
| --- | --- | --- |
| 只读观察 | 记录 `summaries/openclaw/YYYY-MM-DD.md` 存在未提交项 | 打开后改写措辞、补标题、统一格式 |
| Hermes 记录 | 在 `summaries/hermes/YYYY-MM-DD.md` 写“未接管其他 agent summary” | 把对方内容复制进 Hermes notebook 当成本轮成果 |
| 提交范围 | 只 `git add summaries/hermes/YYYY-MM-DD.md` 和本轮明确拥有的 checker 文件 | `git add .`、提交 `summaries/openclaw/`、提交未知 `summaries/<agent>/` |

这条边界的核心是：summary repo 是共享记事本，不是单 agent 独占仓库。共享仓库里的“未跟踪文件”不等于“当前 agent 可以拥有”。

## 启动分诊句式

```text
`summaries/` 当前有其他 agent 未跟踪/未提交记录：<relative paths>。
本轮只读观察，不接管、不改写、不提交这些 path。
Hermes 本轮只更新 `summaries/hermes/YYYY-MM-DD.md`，提交前用 staged file list 确认没有混入其他 agent 目录。
```

如果要在最终报告里说明边界，可以压缩为：

```text
未接管：`summaries/openclaw/...` 仍为启动前未跟踪记录，本轮只提交 Hermes notebook。
```

## 提交前护栏

在 `summaries/` 内提交前，至少跑：

```bash
git status --short
git add hermes/YYYY-MM-DD.md
git diff --cached --name-only
git diff --cached --check
```

`git diff --cached --name-only` 只应出现本轮拥有的 Hermes 文件，或本轮明确修改的 `summaries/scripts/` checker 文件。若看到 `openclaw/`、其他 agent 目录或未知文件，先取消暂存：

```bash
git restore --staged <path>
```

## 何时可以接管

只有同时满足下面条件，才考虑修改或提交其他 agent summary：

1. 用户明确授权当前 agent 处理这些路径。
2. 先做只读备份/快照，记录启动前状态。
3. 修改目标是结构性修复或迁移，而不是替对方补写工作内容。
4. commit message 明确说明跨 agent summary 维护范围。

否则，正确动作是把它们列入 avoided paths，并把下一段接力写成“等待该 agent 或用户处理”。

## 常见坑

- **用 `git add .` 省事**：summary repo 里最容易把其他 agent 的新文件带入提交。
- **把未跟踪当成垃圾文件**：未跟踪可能是另一个 agent 刚写完但尚未提交的 notebook。
- **把共享目录当成成果池**：Hermes 的成果应落在项目、文档、书稿、技能或 Hermes notebook；不能把其他 agent 的记录当作自己的推进。
- **只在最终报告提边界**：边界也要写进 Hermes notebook，下一轮才能知道为什么这些 path 仍然存在。

这张卡与 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 配合使用：前者处理共享 summary 仓库的跨 agent 目录，后者处理普通项目仓库的 dirty path。两者都服务同一个原则：先确认归属，再提交本轮拥有的最小集合。
