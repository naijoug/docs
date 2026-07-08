---
title: 本地可验证 Proof Artifact 清单
icon: robot

index: true
order: 12

---

# 本地可验证 Proof Artifact 清单

当 AI 程序员想推进收入实验、教程资产或工具项目时，最容易掉进“再写一篇规划”的循环。本清单把下一步收束成一个能在本机运行、能提交、能被别人复核的小交付物。

<!-- more -->

## 适用场景

- 还没有真实客户、发布渠道或外部样本，但仍想推进有复利的资产。
- 已经有文档或技能，但缺少能证明它可以被执行的脚本、fixture、模板或样例。
- cron / agent 节拍中需要选择一个 30-120 分钟内能完成的小任务。

不适用：需要账号授权、真实用户反馈、付费渠道或私有仓库访问的验证。那些只能记录为 `Next evidence needed`，不能伪装成本地验证。

## 选择顺序

| 优先级 | Artifact | 最小完成定义 | 验证方式 |
| --- | --- | --- | --- |
| P0 | 回归测试 | 覆盖一个刚发现或高概率出现的失败样例 | `python3 scripts/test_*.py` 或项目测试命令通过 |
| P1 | 轻量检查脚本 | 对一个重复人工检查项给出 pass/fail | 脚本对正例通过、对负例失败 |
| P2 | 可复制模板 | 让下一次执行能少问一个问题 | 模板包含输入、输出、停止条件和示例 |
| P3 | 入口索引 | 让读者知道该先用哪份材料 | 本地链接检查、目录计数或构建通过 |
| P4 | 说明文档 | 解释已验证 artifact 的边界 | 文档引用真实命令输出，不替代验证 |

如果只能写说明文档，先问：是否已经有一个脚本、测试、模板或样例可引用？没有的话，优先做 P0-P2。

入口索引也可以有自己的 proof artifact。维护 `documents/trending/ai/README.md` 这类目录页时，先跑 markdown proof 兜底链接，再跑目录覆盖检查，确认 catalog 没有漏掉同目录页面：

```bash
python3 scripts/check-markdown-proof.py documents/trending/ai/README.md
python3 scripts/check-ai-catalog.py
```

`check-ai-catalog.py` 只检查 `## catalog` 是否覆盖 `documents/trending/ai/` 下的同级 markdown 页面、是否有重复链接、是否指向缺失同级页面；重复链接和缺失目标会输出 `documents/trending/ai/README.md:line`，便于直接定位目录入口。跨目录链接、frontmatter 和绝对路径仍交给 [AI 文档改动 Proof Checker](ai-doc-change-proof-checker.md)。

## 30 分钟执行板

1. **写风险句**：本轮最可能破的是什么？例如“跨目录链接目标被移动后不会被发现”。
2. **选最小 artifact**：只选一个，避免脚本、文档、模板一起膨胀。
3. **造正反例**：至少准备一个应通过样例和一个应失败样例；没有失败样例时，不扩规则。
4. **跑命令**：记录命令、输出摘要和 exit code 语义。
5. **写边界**：说明这个 artifact 不覆盖什么，下一步需要什么证据。

## 交付卡片模板

```text
Experiment: <本轮 proof artifact>
Risk: <要降低的具体风险>
Artifact: <脚本 / 测试 / 模板 / 索引 / 文档>
Pass means: <什么输出代表本地验证通过>
Fail means: <什么输出要求改变计划>
Excluded: <本轮明确不验证的边界>
Next evidence needed: <下一轮最小证据>
Decision: Continue / Narrow / Stop / Switch
```

## 与现有工作流衔接

- 每周选题先走 [AI 程序员每周收入实验规划器](ai-programmer-weekly-experiment-planner.md)，再用本页把候选任务缩成一个可验证 artifact。
- 如果本轮启动时已经存在未知 dirty path，先用 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 划清 owned / avoided path，再选择 artifact；不要让验证脚本或提交范围吞进他人改动。
- 如果 cron 节拍容易滑向“只复盘不交付”，先用 [Agent Cron 交付预算卡](agent-cron-delivery-budget-card.md) 把 15-45 分钟预算、候选任务评分和下一条安全命令写清，再动手。
- 完成一个可复用 artifact 后，用 [Agent 交接回执模板](agent-handoff-receipt-template.md) 留下 owned changes、avoided dirty paths、verified facts 和 next safe command，让下一轮能直接接手。
- 文档改动优先复用 [AI 文档改动 Proof Checker](ai-doc-change-proof-checker.md)，不要把完整 VuePress build 当作唯一反馈。
- 如果 artifact 来自 AI 编程审查机会，先确认 [AI 编程审查实验切换清单](ai-coding-audit-experiment-switch.md) 里的真实样本和发布证据是否存在；不存在就只做本地 proof，不声明市场验证。

## 停止条件

- 连续两轮只新增说明文档，没有脚本、测试、模板或索引被复用。
- 验证命令只能证明“文件存在”，无法证明风险被降低。
- 需要外部授权才能继续，但没有渠道、样本或许可。

触发停止条件时，把当前实验标为 `Stop / Switch`，回到每周规划器重新选择一个更小、更可验证的 artifact。
