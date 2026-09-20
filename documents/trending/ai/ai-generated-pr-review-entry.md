---
title: AI 生成 PR 的最小审查入口
icon: code-branch

index: true
order: 8

---

AI 生成的 PR 最容易失败在一个细节：它看起来像普通 PR，但真正需要审查的是“agent 如何得到结论”。如果入口还是一句“已测试”，reviewer 很难判断哪些风险已经被验证，哪些只是模型自信。

<!-- more -->

## 为什么需要单独入口

AI-assisted PR 通常有三类额外风险：

| 风险 | 普通 PR 中的表现 | AI 生成 PR 中的放大原因 |
| --- | --- | --- |
| ownership 不清 | 改了不该改的文件 | agent 会顺手整理、重命名或格式化相邻文件 |
| 验证链断裂 | 只写“测试通过” | agent 可能把类型检查、单测、构建、人工检查混成一个结论 |
| handoff 不可接 | reviewer 不知道下一步 | 失败命令、未验证项和下一条安全命令没有被保留下来 |

所以审查入口不应该先问“这个 PR 写得好不好”，而应该先问：

1. 启动前 workspace 是什么状态？
2. 本轮到底接管了哪些文件？
3. 哪些命令真的跑过？输出是什么？
4. 哪些结论没有验证？下一步最小安全动作是什么？
5. 当前应该 `Continue / Narrow / Stop` 哪一种？

## 最小 PR 模板

`docs/.github/pull_request_template.md` 已经把这些问题固化成入口。最小可复制版本如下：

```markdown
## Problem and result

- Intended outcome:
- Related issue / sample request (if applicable):

## Ownership

- Starting `git status --short` summary:
- Owned paths:
- Avoided dirty paths:

## Verification

| Command / check | Result | Evidence |
| --- | --- | --- |
|  |  |  |

- Not verified (reason and effect):
- Continue / Narrow / Stop:

## Audit handoff (only for an audit or unresolved finding)

- Finding and supporting evidence:
- Next safe command / required user action:
```

这个模板刻意不追求“完整项目治理”，而是要求每个 AI PR 至少留下可复核证据。只要 reviewer 能从这些字段复现判断，PR 就具备继续审查的入口。

开头先说明问题和结果；验证表只列本次适用的检查，不必填满格式、单测、构建、人工复核四级。没有审查样本或未解决问题时省略 audit handoff。停合并与停工作应分开：被阻塞的动作暂停，其他已授权步骤继续。

## Reviewer 先看什么

建议 reviewer 按下面顺序看，而不是从代码 diff 第一行开始：

1. **边界**：`Owned paths` 是否与目标一致？是否保留了启动前 dirty path 及暂存状态？
2. **证据**：验证表里是否有真实命令、真实结果，而不是“应该可以”？
3. **失败吸收**：如果有失败命令，PR 是否调整了计划，还是继续声称完成？
4. **未验证项**：未验证项是否被明确写出，下一条命令是否足够小？
5. **建议**：`Continue / Narrow / Stop` 是否与证据一致？

只要前两项不成立，就先不要进入代码风格讨论。AI PR 的首要问题不是写法，而是证据链是否可信。

如果 reviewer 一次发现多条问题，先不要把它们全部写成同等强度的评论。用 [AI 编程审查红旗分诊卡](ai-coding-audit-red-flag-triage.md) 分成 `P0 Stop`、`P1 Verify`、`P2 Improve`：P0 保护合并和发布边界，P1 要求补证据，P2 才进入后续优化。这样可以避免真正的阻断风险被风格建议淹没。

## 三种结论

| 结论 | 使用条件 | 下一步 |
| --- | --- | --- |
| `Continue` | 范围清晰，关键验证已跑，未验证项不阻塞合并判断 | 进入普通 code review |
| `Narrow` | 目标有价值，但 diff 过大、验证不完整或边界漂移 | 要求拆小 PR / 补一条验证命令 |
| `Stop` | 接管了未知 dirty path、关键命令失败却无解释、或结论无法复现 | 暂停相关合并/发布动作，继续可独立验证的工作 |

`Narrow` 是最常见、也最有价值的结论。它不是否定 agent，而是把 agent 的下一步限制到 reviewer 能验证的范围里。

## 连接到 AI coding audit

如果这个 PR 来自样本征集或审查服务，可以把入口串起来：

1. 用 `docs/.github/ISSUE_TEMPLATE/ai-coding-audit.yml` 收集失败场景和期望输出。
2. 用 `docs/.github/pull_request_template.md` 要求实现 PR 交代边界、验证和 handoff。
3. 用 `docs/documents/trending/ai/ai-coding-audit-red-flag-triage.md` 给发现排序，先处理 P0/P1。
4. 用 `docs/documents/trending/ai/ai-coding-audit-mock-report.md` 的 1 页报告格式复盘风险。
5. 再回到 `docs/documents/trending/ai/ai-coding-audit-service.md` 的 `48 小时观察表` 判断是否继续产品化。

这样一来，内容资产、issue 输入、PR 审查和服务交付会形成同一条证据链，而不是四份互不相干的文档。

## README / AGENTS 入口

模板和文章写完以后，还要把它们放到下一轮 agent 真的会看到的位置。否则规则会停留在“存在过”，而不是“默认执行”。

最小入口可以分成两层：

| 入口 | 负责什么 | 不负责什么 |
| --- | --- | --- |
| `docs/README.md` | 给人和 reviewer 一个短 checklist：什么时候使用 AI-assisted PR template、issue template 和 audit 文档 | 不承载完整操作细节 |
| `docs/AGENTS.md` | 给下一轮 agent 可执行规则：启动状态、接管边界、验证梯、handoff block、失败降级 | 不写成对外教程 |

建议新增任何 AI-assisted workflow 资产后，都反问三句：

1. `README.md` 是否用 5 行以内说明了入口和链接？
2. `AGENTS.md` 是否提供准确的任务入口，而不是让所有任务都加载新流程？
3. PR / issue template、文章、样板报告里的字段名称是否一致？

如果答案是否定的，优先补入口，而不是继续写下一篇文章。没有 README / AGENTS 入口的模板，很快会变成下一轮 agent 需要翻历史 summary 才能发现的沉没资产。

## 可复制检查清单

- [ ] PR 说明里有启动前 `git status --short` 摘要。
- [ ] 明确列出本轮接管文件，且没有混入未知 dirty path。
- [ ] 至少一条格式/diff 检查有真实结果。
- [ ] 至少一条聚焦测试、构建或人工复核标准有真实结果。
- [ ] 未验证项没有被包装成“已完成”。
- [ ] 下一条安全命令足够小，可以由下一位 agent 或 reviewer 接手。
- [ ] `Continue / Narrow / Stop` 与证据一致。

如果只能保留一句话，就保留这句：**AI 生成 PR 的审查入口不是“代码看起来对不对”，而是“证据链能不能被下一位人或 agent 接住”。**
