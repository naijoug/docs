---
title: 验证后生成文件 Diff 隔离卡
icon: broom

index: true
order: 104

---

# 验证后生成文件 Diff 隔离卡

验证命令本来是为了给交付物补证据，但在带代码生成、契约同步或缓存产物的仓库里，`check` / `build` / `test` 也可能顺手改动生成文件。Agent 不能把这些“验证副作用”混进本轮提交，也不能直接忽略它们。本卡把处理流程压成一个可复核的隔离动作。

<!-- more -->

## 何时使用

使用条件：

- 本轮已明确只接管少量文件，验证命令执行后 `git status --short` 出现额外 diff。
- 额外 diff 看起来来自生成契约、锁文件、缓存、快照或测试夹具，而不是本轮主动编辑。
- 当前 cron / agent 没有用户授权去扩展提交范围。

不使用条件：

- 生成文件是本轮代码改动的必需产物，并且仓库约定要求一起提交。
- 验证命令暴露了真实失败，需要先修代码或缩小任务，而不是恢复文件。
- 额外 diff 已经在启动前存在，归属不明；这时先按 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 记录 avoided paths。

## 四步隔离流程

```text
1. Snapshot: 验证前后各跑一次 git status --short，记录新增 dirty path。
2. Classify: 把新增 path 标成 required / generated-side-effect / unknown。
3. Quarantine: 只恢复 generated-side-effect；unknown 保持只读，不 stage。
4. Commit: git add 只包含本轮 owned paths，并用 git diff --cached --name-only 复核。
```

核心原则：**验证命令可以产生证据，但不能自动扩大所有权边界**。如果生成文件是否必需无法判断，默认 `Narrow`：不提交它，记录下一次需要确认的仓库约定或生成命令。

## 判定表

| 现象 | 判定 | 本轮动作 | Notebook 记录 |
| --- | --- | --- | --- |
| `check` 后出现 API contract generated file diff，业务文件未改 | generated-side-effect | 若不在本轮 scope，恢复；记录命令副作用 | 写明“验证产生生成文件改动，已恢复，未纳入 scope” |
| 代码改了 schema，同时 generated contract diff 出现 | required | 运行官方生成命令，和 schema 改动一起提交 | 写明生成命令、输入文件和输出文件 |
| 测试更新 snapshot，但测试本身失败 | unknown / failing proof | 不提交 snapshot，先定位失败 | 写明 failing command、exit code、下一条安全命令 |
| 格式化命令改了全仓 | generated-side-effect / scope leak | 恢复非本轮文件，下一次改用 path-limited formatter | 写明 avoided paths 和替代命令 |
| 启动前已 dirty 的生成文件仍在 | unknown-dirty | 不恢复、不提交；只读观察 | 写入 avoided paths，等待授权或 clean baseline |

## 最小命令梯

```bash
git status --short
<run verification command>
git status --short
git diff --check -- <owned paths>
git add <owned paths>
git diff --cached --name-only
```

## Scope proof 小例子

当验证命令新增了不在本轮接管范围内的生成文件 diff，不要只写“已验证通过”。把证据压成下面这种可复核记录：

```text
Owned paths before verification:
- documents/trending/ai/generated-diff-quarantine-after-verification.md

Pre-check status:
- clean

Verification command:
- python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/generated-diff-quarantine-after-verification.md

Post-check new dirty paths:
- documents/api/generated-schema.json

Classification:
- documents/api/generated-schema.json => generated-side-effect, outside owned paths

Action:
- git restore -- documents/api/generated-schema.json
- git add documents/trending/ai/generated-diff-quarantine-after-verification.md
- git diff --cached --name-only

Decision:
- Continue, because committed paths are still limited to owned paths.
```

如果 `Post-check new dirty paths` 里出现无法分类的文件，Decision 先写 `Narrow` 或 `Stop`，不要把它们混进提交。

如果必须恢复验证副作用，优先使用显式 path：

```bash
git restore -- <generated-side-effect path 1> <generated-side-effect path 2>
```

不要用 `git restore .`、`git checkout .` 或全仓 formatter 收尾，因为它们会把用户或其他 agent 的改动一起抹掉。

## 记录模板

```text
Verification command:
Pre-check status:
Post-check new dirty paths:
Classified as required:
Classified as generated-side-effect:
Classified as unknown:
Restored paths:
Committed paths:
Next evidence needed:
Decision: Continue / Narrow / Stop
```

## 与现有卡片串联

- 开始前用 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 分清启动前 dirty path。
- 选择本轮任务时用 [Agent Cron 下一块选择矩阵](agent-cron-next-slice-switchboard.md) 保证 `Boundary=1`、`Verification=1`。
- 如果验证失败而不是产生副作用，回到 [AI 编程验证优先工作流](verification-first-ai-coding.md) 和 [下一条安全命令梯](next-safe-command-ladder.md)，先记录失败输出和下一条最小命令。

这张卡的价值是让“跑过验证”不再变成混合提交的借口：证据留下，副作用隔离，下一位 agent 能清楚看见哪些文件属于本轮，哪些只是验证命令碰过。