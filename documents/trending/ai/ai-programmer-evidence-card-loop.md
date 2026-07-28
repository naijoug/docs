---
title: AI 程序员证据卡循环
icon: clipboard-check

index: true
order: 54

---

# AI 程序员证据卡循环

AI 时代的程序员很容易把“和模型聊了很多”“生成了很多内容”误认为能力增长。证据卡循环的目标是反过来要求每一次 AI 辅助工作都留下可复核证据：真实任务、输入边界、人工判断、验证结果和可复用资产。

<!-- more -->

## 适用场景

- 你正在用 AI 学习新技术、写代码、写文档、做作品集或设计收入实验。
- 你希望一周后能判断自己到底增长了什么，而不是只统计使用了多少工具。
- 你需要把一次 agent 工作沉淀成模板、脚本、SOP、技能、书稿片段或公开案例。
- 你在 cron、无人值守 agent 或多 repo workspace 中工作，需要下一轮能接上本轮证据。

不适用：没有真实任务、没有验证方法、无法脱敏输入材料、或必须伪造用户反馈/命令输出才能证明价值的场景。遇到这些情况，应先缩小任务或切换方向。

## 核心原则：六个问题

每次有意义的 AI 辅助工作，都要能回答这六个问题：

```text
真实任务是什么？
输入材料是什么？
AI 被允许和禁止做什么？
人做了哪些判断？
验证证据是什么？
沉淀成了什么可复用资产？
```

如果某一项回答不出来，通常说明任务还太大、边界还不清、验证还缺失，或这次工作不值得沉淀。

## 一轮证据卡循环

| 步骤 | 要做什么 | 产物 |
| --- | --- | --- |
| 1. 选一个真实任务 | 不从“学习 AI”“提升效率”开始，而是选一个真实代码、文档、排障、写作、作品集或服务交付片段 | 一句话任务 |
| 2. 先写边界 | 写清输入材料、脱敏材料、允许动作、禁止动作、人工确认点和失败回退 | 边界说明 |
| 3. 让 AI 完成最小切片 | 只让 AI 生成、修改、总结、搜索或执行本轮允许的动作 | AI 参与记录 |
| 4. 人做取舍 | 记录接受、拒绝、改写和最终负责的决定 | 人工判断 |
| 5. 验证并沉淀 | 用命令、diff、来源链接、review、反馈或清单验收，并抽成资产 | 证据 + 可复用资产 |

这一轮不追求“大而全”。它追求的是：下一次面对相似任务时，不必重新发明 prompt、检查清单和验证方式。

## 证据卡模板

```markdown
## Evidence Card

### Task
- Real task:
- Intended user / workflow:
- Success standard:

### Inputs and boundary
- Input materials:
- Redacted / excluded materials:
- Allowed AI actions:
- Disallowed AI actions:
- Human approval points:
- Failure rollback:

### AI participation
- What AI generated, changed, searched, summarized, reviewed, or executed:
- What AI assumed that remains unverified:

### Human judgment
- What I accepted:
- What I rejected or rewrote:
- Final decision I own:

### Verification evidence
- Command / checklist / review method:
- Result:
- Remaining uncertainty:

### Asset created
- Reusable prompt / checklist / script / SOP / card / portfolio fragment:
- Where it lives:
- Next smaller experiment:
```

写卡片时不要把“模型看起来很自信”当证据。证据应该能被别人检查，例如 `git diff`、测试输出、引用来源、截图、人工 review 结论、真实反馈、可运行脚本或可打开的文档链接。

## Continue / Narrow / Switch / Stop

一张证据卡结束后，只做一个决策。

| 决策 | 什么时候用 | 下一步 |
| --- | --- | --- |
| Continue | 证据显示任务确实改进，且资产可复用 | 在相似任务上重复一次并比较差异 |
| Narrow | 只有更小范围的证据成立 | 缩小任务、输入材料、目标用户或验证标准 |
| Switch | 原路径价值弱，但沉淀出的资产有用 | 把资产转入 `docs/`、`books/`、`skills/skills/`，换一个实验方向 |
| Stop | 缺少验证、风险过高或收益不值得 | 保存教训，不继续扩写成产品、服务或章节 |

不要在只有一次内部感觉良好的情况下，就把实验升级为产品、课程或收费服务。至少先有一条外部反馈、一次重复验证，或一份可公开复核的 proof。

## 示例：把一次文档修改变成资产

| 字段 | 示例 |
| --- | --- |
| 真实任务 | 为 `docs/documents/trending/ai/` 新增一页 AI 程序员成长方法文档 |
| 输入材料 | 已有技能 `skills/skills/manual/growth/evidence-card-loop/SKILL.md` 和同目录既有 AI 文档风格 |
| 允许动作 | 新增一页 markdown；只使用相对路径；不接管既有 dirty README |
| 禁止动作 | 不伪造外部反馈；不把无关 dirty 文件一起提交 |
| 人工判断 | 选择先写独立页面，而不是在脏 README 中混入目录改动 |
| 验证证据 | `python3 scripts/check-markdown-proof.py documents/trending/ai/ai-programmer-evidence-card-loop.md`、`git diff --check -- documents/trending/ai/ai-programmer-evidence-card-loop.md` |
| 可复用资产 | 这页文档 + 后续可接入目录的 catalog 条目 |

这个示例刻意把“没有修改 README”也写进边界：在多人或多 agent 工作区里，保护已有未归属改动本身就是工程能力的一部分。

## 每周复盘 rubric

| 问题 | 好证据 | 如果缺失，下周缩小到 |
| --- | --- | --- |
| 是否都是真实任务？ | 卡片命名了具体代码、文档、用户、工作流或决策 | 一封邮件、一个 bug、一页笔记、一张清单 |
| 是否先写了边界？ | 输入、允许动作、禁止动作、确认点明确 | 只允许 AI 做 summary 或 draft |
| 是否保留了人的判断？ | 记录了接受、拒绝、改写和最终负责的决定 | 只记录一个必须人工决定的取舍点 |
| 是否真的验证？ | 有命令输出、review、来源链接、diff 或反馈 | 做一个最便宜的检查再扩展 |
| 是否形成资产？ | 产出 prompt、SOP、脚本、模板、作品集片段或技能 | 从最好的一张卡抽一个模板 |

## 与现有方法衔接

- 想练工程能力时，接到 [AI 程序员刻意练习闭环](ai-programmer-deliberate-practice-loop.md)。
- 在 cron 中推进时，先用 [Agent Cron 规划-执行-验证闭环](agent-cron-planning-execution-verification-loop.md) 控制范围。
- 遇到脏工作区时，先用 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 判断能不能动。
- 想把重复经验抽成公开资产时，接到 [Agent Cron 工作日志资产提取器](agent-cron-worklog-asset-extractor.md)。

## 最小行动

今天只做一张卡：选一个 30-60 分钟能完成的真实任务，先写边界，再让 AI 帮你完成最小切片。结束时如果拿不出验证证据，就把决策写成 `Narrow`，下次缩到更小的任务。