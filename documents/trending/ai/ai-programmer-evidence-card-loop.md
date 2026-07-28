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

## 填写样例：给教程补一个完整样例

下面是一张更完整的填写样例。它不是为了展示“AI 很厉害”，而是为了让下一位接手者能判断：这次改动为什么做、碰了哪些边界、怎样验证、下一步应该继续还是缩小。

```markdown
## Evidence Card

### Task
- Real task: 给 `docs/documents/trending/ai/ai-programmer-evidence-card-loop.md` 补一个完整填写样例。
- Intended user / workflow: 想把 AI 辅助写作、代码改动或 agent cron 工作沉淀成资产的程序员。
- Success standard: 页面里出现一张可复制的完整卡片，字段覆盖任务、输入、边界、AI 参与、人工判断、验证证据、资产和下一步决策。

### Inputs and boundary
- Input materials: 已有教程正文、`skills/skills/manual/growth/evidence-card-loop/SKILL.md`、`docs/documents/trending/ai/README.md` 的目录风格。
- Redacted / excluded materials: 不使用用户私密材料；不写绝对路径。
- Allowed AI actions: 修改这一页 markdown；补充样例；运行 markdown proof 和 diff check。
- Disallowed AI actions: 不接管 `docs/` 中已有的其他 dirty 文件；不伪造外部读者反馈；不改 VuePress 配置。
- Human approval points: 选择样例范围、判断是否值得提交、确认下一步决策。
- Failure rollback: 若 proof 失败，先回滚本节新增内容或缩小为表格样例。

### AI participation
- What AI generated, changed, searched, summarized, reviewed, or executed: 生成完整卡片草稿，补充边界和验证字段，执行本地检查命令。
- What AI assumed that remains unverified: 还没有真实外部读者确认这张样例是否足够清楚。

### Human judgment
- What I accepted: 保留“完整填写样例”作为教程增强，而不是再新增一篇页面。
- What I rejected or rewrote: 不把它包装成已验证的公开反馈案例；不把未提交 README dirty diff 混入提交。
- Final decision I own: 这轮只证明页面自洽和本地检查通过，不证明市场需求。

### Verification evidence
- Command / checklist / review method: `python3 scripts/check-markdown-proof.py documents/trending/ai/ai-programmer-evidence-card-loop.md`；`git diff --check -- documents/trending/ai/ai-programmer-evidence-card-loop.md`。
- Result: 需要提交前记录真实命令输出。
- Remaining uncertainty: 读者是否会照着填写，需要后续真实使用或反馈验证。

### Asset created
- Reusable prompt / checklist / script / SOP / card / portfolio fragment: 这张完整证据卡样例。
- Where it lives: `docs/documents/trending/ai/ai-programmer-evidence-card-loop.md`。
- Next smaller experiment: 用同一模板记录一次真实 PR 审查、书稿审校或收入实验。
```

写完卡片后，决策可以是 `Continue`，但理由必须具体：本地 proof 只能证明文档没有基础破损；如果下一步要证明它真的有用，应找一次真实任务，把填写过程和卡片结果一起保存。

## 场景模板：PR 审查证据卡

代码审查是最适合训练证据卡循环的场景之一，因为它天然有 diff、测试、人工判断和回退点。不要只让 AI 说“这段代码有没有问题”，而是先把审查边界写清楚，再让它围绕风险假设寻找证据。

```markdown
## Evidence Card: PR Review

### Task
- Real task: 审查 `<branch / PR / diff>` 中的一个最小改动面。
- Intended user / workflow: 维护者需要判断这次改动是否可以合并、需要补测试，还是应该退回重做。
- Success standard: 至少留下 1 条确认过的风险判断、1 条测试或人工检查证据、1 个可复用审查提示或 checklist 项。

### Inputs and boundary
- Input materials: `git diff -- <paths>`、相关测试文件、需求说明或 issue 链接。
- Redacted / excluded materials: 不复制密钥、客户数据、内部账号、生产日志原文。
- Allowed AI actions: 总结 diff、列风险假设、建议测试点、指出需要人工确认的行为变化。
- Disallowed AI actions: 不直接改代码、不运行破坏性命令、不替维护者做合并决定、不把未验证风险写成事实。
- Human approval points: 是否接受某条风险判断、是否追加测试、是否合并或退回。
- Failure rollback: 如果 AI 审查噪音过多，缩小到一个文件、一个函数或一条失败测试。

### Verification evidence
- Command / checklist / review method: `git diff --check -- <paths>`、相关测试命令、人工复读需求、逐条标记风险为 confirmed / dismissed / unknown。
- Result: 只记录真实命令输出或人工确认结论。
- Remaining uncertainty: 没有覆盖的集成场景、数据规模、权限组合或浏览器/平台差异。

### Asset created
- Reusable prompt / checklist / script / SOP / card / portfolio fragment: 一条新的 PR 审查 checklist，或一段可复用的风险假设 prompt。
- Where it lives: `docs/...`、`skills/skills/...`、项目 PR 模板或团队审查 SOP。
- Next smaller experiment: 下次只审查一个高风险文件，并比较 AI 审查前后的人工 review 时间与漏报项。
```

这张模板的关键不是“让 AI 替你 review”，而是把 review 变成可复盘的工程判断：哪些风险被证明存在，哪些被排除，哪些还不能确定。

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