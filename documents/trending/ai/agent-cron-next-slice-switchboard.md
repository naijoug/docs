---
title: Agent Cron 下一块选择矩阵
icon: compass

index: true
order: 93

---

# Agent Cron 下一块选择矩阵

定时 agent 容易陷入两种低效循环：看到 dirty repo 就顺手接管，或在同一主题下连续堆文档。下一块选择矩阵把“该做什么”压缩成一个可复查决策：先保护边界，再看真实信号，最后只选能在本轮验证的小切片。

<!-- more -->

## 入口问题

每次心跳开始时，先回答四个问题：

1. **当前有哪些 clean repo 或明确 owned path？** dirty path 没有归属证据时只读，不接管。
2. **上一段留下的接力点是否仍然成立？** 如果它依赖已完成的主题，先判定 `Stop / Switch`。
3. **本轮能交付什么可验证资产？** 优先代码、测试、脚本、索引同步、proof checker；其次才是纯文档。
4. **这个动作是否提升 AI 时代程序员资产？** 能沉淀为工具、教程、技能、书稿卡片、收入实验证据之一，才值得做。

## 选择矩阵

| 信号 | 优先动作 | 验证方式 | 停止条件 |
| --- | --- | --- | --- |
| clean 工程 repo 中存在小失败、缺测试或脚本 drift | 做最小工程切片 | 聚焦测试 + type/lint/build 中至少一项 + `git diff --check` | 需要接管未知 dirty path、外部服务或大重构 |
| 上一轮已产出文档/书稿卡片，但入口没有链接 | 同步 README、样本包、目录或 cross-link | markdown proof + catalog/link checker | 只是重复解释同一原则，没有改善可发现性 |
| 连续 2 轮都在同主题补内容 | 切换到收入实验、技能固化或工程验证 | 写出候选评分和本轮 proof | 没有真实样本、渠道、用户证据时不扩服务页 |
| dirty repo 有启动前改动 | 只读分诊，列 owned/avoided path | `git status --short` + path-limited diff | 不能明确归属时不 stage、不提交 |
| 找不到安全工程切片 | 做一张可复用 preflight/模板，但必须链接到入口 | checker + catalog proof | 只能写泛泛感想，无法给下一条命令 |

## 上一段接力点变 dirty 时

如果上一段 notebook 建议继续某个工程 repo，但本轮启动时该 repo 已经出现未知未提交改动，不要把“接力建议”自动升级为“接管授权”。先做一次只读快照，然后把候选任务重新放回矩阵打分：

```text
Handoff target: <上一段建议继续的 repo/path>
Startup status: <git status --short 的 path-limited 摘要>
Ownership evidence: known / unknown / current-run-only
Decision: Continue / Narrow / Switch / Stop
Selected replacement: <如果 Switch，写 clean repo 或 clean-adjacent 资产>
Next evidence needed: <如果要回到原 repo，下次需要确认什么>
```

实操规则：

- `Ownership evidence=unknown` 时，最多只读 `git diff -- <path>`；不要格式化、修复、stage 或提交该路径。
- 如果接力点必须依赖 unknown dirty path 才能推进，选择 `Stop` 或 `Switch`，不要为了保持连续性制造混合提交。
- `Switch` 不等于放弃上一段计划；它只是把本轮产出转移到 clean repo、clean adjacent 文档、测试卡或 proof checker 上，并在 notebook 写明回到原路径所需的归属证据。
- 替代任务仍然要满足 `Boundary=1` 和 `Verification=1`：能用 path-limited checker、测试或 diff 检查验证，而不是只写一段感想。

### 快速判例：接力工程 repo 已被他人继续

当上一段建议继续某个工程切片，但本轮启动时该 repo 已经从 clean 变成多文件 dirty，优先把它判成 `Switch`，除非 dirty path 与上一段 owned paths 完全重合且有明确接管证据。

```text
Handoff target: study-buddy/frontend/web interaction test
Startup status: M frontend/... + ?? new test path
Ownership evidence: unknown
Decision: Switch
Selected replacement: docs/documents/trending/ai/agent-cron-next-slice-switchboard.md
Next evidence needed: 下一轮看到 study-buddy clean，或用户明确说明这些 dirty path 可由本轮继续接管
```

这个判例的关键不是“放弃工程项目”，而是把节拍器从“沿着上一句提示机械执行”拉回到“先保护边界，再交付可验证小块”。如果要回到原工程 repo，下一轮的第一条命令仍然是 `git status --short`，而不是直接运行测试或修改 UI。

这条规则可以直接和 [Agent Cron 未提交接力路径分诊](agent-cron-uncommitted-continuation-triage.md) 串用：先分诊接力路径归属，再用本页矩阵选择本轮小块。

## 5 分钟打分法

给每个候选任务按 0/1 打分，满分 5 分：

- **Boundary**：不会混入启动前 dirty path。
- **Verification**：本轮能跑出真实命令结果。
- **Asset**：成果能被未来复用，而不是只写在 notebook。
- **Continuity**：能回应上一段接力点，或明确说明为什么切换。
- **Leverage**：对能力、收入、工具链或项目质量至少一项有增益。

选择规则：优先执行分数最高且 `Boundary=1`、`Verification=1` 的候选；如果没有候选同时满足这两项，本轮只做只读分诊和下一条安全命令，不制造改动。

## Handoff 模板

```text
Candidates:
- <candidate>: Boundary=?, Verification=?, Asset=?, Continuity=?, Leverage=? -> total=?
Selected: <one slice>
Why now: <一句话说明取舍>
Owned paths: <本轮可修改相对路径>
Avoided paths: <启动前或非本轮 dirty path>
Proof: <已执行命令和结果>
Next safe command: <下一轮第一条命令或文件>
Stop/Switch condition: <何时停止当前主题>
```

## 与现有资产的关系

- 用 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 处理启动前 dirty path。
- 用 [Agent Cron 工作日志资产提取器](agent-cron-worklog-asset-extractor.md) 判断 notebook 里的重复判断是否该变成资产。
- 用 [AI 程序员真实边界任务雷达](real-boundary-task-radar.md) 识别真实工程边界，而不是为了心跳制造任务。
- 用 [Agent Cron 交付预算卡](agent-cron-delivery-budget-card.md) 控制本轮投入，避免大任务拖成不可验证半成品。

这张矩阵的产出不是“计划更完整”，而是让下一次心跳能直接看见：为什么选这个、为什么不选那个、下一条安全命令是什么。