---
title: AI 程序员真实边界任务雷达
icon: compass

index: true
order: 22

---

# AI 程序员真实边界任务雷达

当 agent 心跳连续多轮都能写出模板、教程或卡片时，下一步最危险的不是“没产出”，而是把低风险文档扩写误当成能力提升。真实边界任务雷达用来在 5 分钟内筛出一个会改变判断的小任务：失败输出、静默成功、所有权不清、外部授权、性能/成本、用户反馈，至少命中一个真实边界再动手。

<!-- more -->

## 什么时候使用

使用它的典型信号：

- 最近 2-3 轮都在扩同一套模板、checker、preflight 或 offer 文案；
- 当前 workspace 有既有 dirty path，不能随意接管，但仍需要找一个可验证切片；
- 已经有 `Human hypothesis before agent`，却找不到能让假设变真的失败输出或反例；
- 想提升 AI 时代程序员能力，但练习题太泛，做完后不能沉淀成代码、文档、书稿或技能资产。

不要在这些场景使用它：

- 已经有明确用户授权、明确发布渠道和时间窗口；这时直接走 [单渠道 Offer 发布 Preflight](single-channel-offer-publish-preflight.md)。
- 已经有 failing test、构建失败或客户样本；这时直接用 [AI 编程中的假设-验证教程](human-hypothesis-validation-ai-coding.md)。
- 当前唯一安全动作是停止并交接；这时写清 `Next safe command`，不要为了“推进”制造任务。

## 5 分钟雷达

先列 3 个候选任务，每个任务只打 0/1 分。总分低于 3 的候选，不进入本轮。

| 维度 | 1 分标准 | 0 分信号 |
| --- | --- | --- |
| Boundary | 命中真实边界：失败输出、静默成功、权限/授权、dirty path、成本、用户反馈之一 | 只是扩写同一主题，没有新风险 |
| Hypothesis | 能先写一句可证伪的 `Human hypothesis before agent` | 只能写“完善一下”“优化一下” |
| Verification | 30-60 分钟内能用命令、测试、结构断言或人工可复核标准验证 | 只能靠主观感觉判断好坏 |
| Ownership | 能只修改本轮明确归属文件，并避开既有 dirty path | 需要接管未知改动或混合提交 |
| Asset | 通过后能沉淀成代码、教程、书稿卡片、技能或 run 记录 | 做完只剩一段聊天记录 |
| Stop rule | 失败或阻塞时有明确 `Narrow / Stop / Switch` | 失败后只能继续加范围 |

## 候选任务写法

```markdown
## Candidate

- Task:
- Boundary hit: Failure output / Silent success / Permission / Dirty path / Cost / User feedback / Other
- Human hypothesis before agent:
- What would change my mind:
- Verification command or standard:
- Ownership boundary:
- Asset if passed:
- Stop rule:
- Score: /6
- Decision: Continue / Narrow / Stop / Switch
```

## 示例：从“继续写教程”切到真实边界

```markdown
## Candidate A

- Task: 再写一篇 AI 程序员能力提升教程
- Boundary hit: Other
- Human hypothesis before agent: 读者需要更多解释
- What would change my mind: 无明确标准
- Verification command or standard: markdown proof only
- Ownership boundary: docs clean path
- Asset if passed: docs page
- Stop rule: 无
- Score: 2/6
- Decision: Stop
```

```markdown
## Candidate B

- Task: 找一个 CLI 参数误用导致静默成功的边界，补 negative test
- Boundary hit: Silent success
- Human hypothesis before agent: 未知参数不应该返回成功，否则 final report 会把 0 检查误当成通过
- What would change my mind: 真实 CLI 已经 exit non-zero，并且测试覆盖了这个负例
- Verification command or standard: focused regression test + real CLI command + `git diff --check`
- Ownership boundary: 只改 clean 的 `scripts/` 文件，不碰启动前 dirty path
- Asset if passed: 代码修复 + 书稿/教程复盘
- Stop rule: 如果没有真实失败或静默成功，停止扩工具，改写候选任务
- Score: 6/6
- Decision: Continue
```

## 与下一条安全命令梯的关系

雷达回答“本轮该选哪个任务”，[下一条安全命令梯](next-safe-command-ladder.md) 回答“选定后先跑哪条命令”。顺序不要颠倒：

1. 先用雷达筛候选，避免在低价值任务上设计漂亮验证链；
2. 对得分最高的候选写 `Human hypothesis before agent`；
3. 再写最小 `Next safe command`；
4. 命令失败时，让失败输出改变计划，而不是继续扩范围；
5. 命令通过后，只提交本轮明确相关文件，并把未验证项留给下一轮。

## Stop / Switch 条件

出现这些信号时，本轮不要继续扩当前主题：

- 同一主题连续 2 轮没有新失败输出、新用户反馈或新边界；
- 验证命令只能证明“文档语法没坏”，不能证明任务判断变好；
- 候选任务必须接管启动前 dirty path 才能完成；
- 外部发布、联系用户、改价格或承诺交付需要授权，但授权包缺字段；
- 任务完成后不能沉淀成任何可复用资产。

这时把决策写成 `Decision: Switch`，下一轮重新用雷达选候选，不要用更长的文档掩盖边界不足。

## 接力句

```text
Next safe command: 先给 3 个候选任务按 `real-boundary-task-radar.md` 打分；只执行分数 >= 3 且命中真实边界的候选。若最高分任务仍需要接管未知 dirty path 或外部授权，本轮 Switch 到本地可验证的小边界。
```
