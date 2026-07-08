---
title: AI 编程 Agent 工具引入评分卡
icon: robot

index: true
order: 42

---

# AI 编程 Agent 工具引入评分卡

AI 编程工具更新很快，最危险的不是不知道新工具，而是看到榜单或发布新闻后立刻迁移工作流，却没有留下可复核的比较证据。本页把“信息扫描”压成一次小实验：先判断是否值得试，再用同一个任务样本比较结果。

<!-- more -->

## 适用场景

用这张卡处理下面几类信息：

- 新的 coding agent、IDE 插件、CLI、后台 agent 或代码审查工具发布；
- 榜单文章声称某工具已经显著领先；
- 团队想把默认工具、模型或工作流切到另一个方案；
- 你发现现有 agent 在某类任务上反复失败，但还没有证据说明换工具会更好。

不要用它追热点。只有当工具变化可能改变 `验证速度`、`失败可解释性`、`上下文装载成本`、`代码所有权` 或 `收入实验交付能力` 时，才进入试用。

## 15 分钟 intake

先填这 5 个字段，填不出来就不试：

```text
Tool / change:
Claim source:
Claim being tested:
Current workflow pain:
One reusable task sample:
```

规则：

1. `Claim source` 只记录来源和主张，不把宣传语当事实。
2. `Current workflow pain` 必须来自自己的真实任务，例如失败测试、难以定位的 agent log、上下文漂移、审查报告耗时。
3. `One reusable task sample` 必须能在本地或只读样本里复跑，不能用“感觉更聪明”作为样本。

## 评分表

| 维度 | 0 分 | 1 分 | 2 分 |
| --- | --- | --- | --- |
| 真实痛点 | 只是好奇 | 有模糊低效感 | 有失败输出、耗时记录或交付阻塞 |
| 可复跑样本 | 没有样本 | 有描述但不可复跑 | 有 repo、命令、输入或脱敏日志 |
| 验证指标 | 只看主观体验 | 有 1 个指标 | 有速度、正确性、可解释性或接管成本对照 |
| 切换成本 | 需要迁移大量配置 | 只影响个人局部流程 | 可在 sandbox 中试，不影响主线 |
| 资产沉淀 | 试完即丢 | 能写一段记录 | 能沉淀为教程、技能、书稿卡或服务 proof |

判定：

- `0-4`: Stop。只记录信息，不试用。
- `5-7`: Narrow。只做一次 20-30 分钟 sandbox，不改默认工具。
- `8-10`: Continue。可以安排一次对照实验，但仍先限制在一个样本。

## 对照实验模板

```text
Tool / change:
Baseline tool / workflow:
Task sample:
Human hypothesis before agent:
Success criteria:
Do not touch:
Commands / checks:
Result with baseline:
Result with candidate:
What I learned that the agent did not own:
Decision: Continue / Narrow / Stop / Switch
Next safe command:
```

`Human hypothesis before agent` 要写清楚你认为新工具可能改善哪一段，例如“更快定位跨包测试入口漂移”，而不是“更智能”。

`Do not touch` 要写清楚不接管的 dirty path、私有数据、生产配置和外部发布渠道。

## 最小可比指标

至少选 2 个：

- **验证速度**：从开始到第一个红/绿结果的时间；
- **失败可解释性**：是否给出可定位的文件、行号、命令或下一条安全命令；
- **补丁最小性**：是否只改了任务相关文件；
- **接管成本**：另一个 agent 能否只看记录继续；
- **回滚成本**：候选工具是否留下不可逆状态；
- **资产化结果**：是否产出可复用文档、脚本、测试或技能。

## 停止条件

立即停止试用并回到默认工具，如果出现任一情况：

- 需要上传私有代码、密钥、客户材料或未授权截图；
- 需要改主线配置才能验证一个小样本；
- 候选工具无法给出可复核命令、diff 或失败输出；
- 试用开始扩散到多个 repo、多个任务或多个模型；
- 结果只能写成“体验不错”，不能支持 `Continue / Narrow / Stop / Switch`。

## 与现有流程的连接

- 选样本前先用 [AI 程序员真实边界任务雷达](real-boundary-task-radar.md) 判断是否有真实边界。
- 做实验时沿用 [AI 编程中的假设-验证教程](human-hypothesis-validation-ai-coding.md) 的 `Human hypothesis before agent`。
- 如果样本来自跨包测试入口，先读 [Monorepo 测试入口漂移检查](monorepo-test-entrypoint-drift.md)。
- 如果试用结果可复用，再回到 [AI 程序员资产飞轮](ai-programmer-asset-flywheel.md) 判断沉淀成文章、技能、书稿卡还是收入实验 proof。

## 信息扫描到行动的例子

```text
Tool / change: 某篇 2026 coding agent 榜单把多个 agent 排名为“生产可用”
Claim source: 外部榜单 / 博客摘要
Claim being tested: 是否值得替换当前默认 CLI agent
Current workflow pain: 最近的真实问题不是代码生成能力，而是 dirty worktree 中 proof 范围和失败输出可接手性
One reusable task sample: 选择一个已有 checker/文档 proof 小改动，用同一命令和同一 dirty path 边界比较
Score: 6/10
Decision: Narrow，只做 sandbox 对照；不迁移默认工具，不改生产配置
```

重点不是榜单说谁领先，而是把外部信息转成一条可复跑的本地证据。
