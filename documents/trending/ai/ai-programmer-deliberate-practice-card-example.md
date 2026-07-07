---
title: AI 程序员刻意练习卡片填写样例
icon: clipboard-list

index: true
order: 46

---

# AI 程序员刻意练习卡片填写样例

这是一张 30 分钟练习样例：不是让 agent 直接写新内容，而是先由人判断“这轮最容易漂移的风险是什么”，再用本地 proof 验证改动是否真的闭环。

<!-- more -->

## 填写样例

```text
Practice date: 2026-07-08
Practice target: 文档工程 + AI 目录 proof 审计
Why this capability now: 上一轮新增了 AI 程序员刻意练习闭环；如果只留下模板，下一轮仍可能不知道如何开始。本轮需要把模板试填成一个可复制样例。
Sample / fixture: docs/documents/trending/ai/ai-programmer-deliberate-practice-loop.md 与 AI catalog
Human hypothesis before agent: 最小有价值练习不是继续扩 checker，而是新增一张填写样例；风险是新增同级页面后忘记接入 README catalog、或者 changed-from proof 只显示 checked N file(s) 而无法确认文件集合。
Agent prompt or role: 让 agent 作为文档工程 reviewer，只提出 30 分钟内可完成、可验证、不会接管既有 dirty path 的练习产物。
Agent proposal summary: 新增样例页，更新 README catalog 和 proof adoption log；验证时使用显式目标 proof、AI catalog proof、changed-from list-files 和结构断言。
Verification command or review standard: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-deliberate-practice-loop.md documents/trending/ai/ai-programmer-deliberate-practice-card-example.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Result: 通过后才提交；如果 changed-from 列表包含 AGENTS.md，说明 exclusion 或 ownership boundary 写错，需要停止并重新核对。
What I learned that the agent did not own: 人类判断的关键不是“能不能再写一页”，而是先设定 drift risk：不要让工具维护循环吞掉能力练习；样例必须让下一轮能直接复制。
Reusable asset created: docs/documents/trending/ai/ai-programmer-deliberate-practice-card-example.md
Decision: Continue
Next drill: 换一个代码或脚本样本，先写 human hypothesis，再让 agent 生成候选测试，最后比较失败输出是否改变了方案。
```

## 复盘要点

- **先写人类假设**：本轮假设是“新增样例比继续扩工具更能减少下一轮启动成本”。如果先让 agent 自由规划，容易继续围绕 checker 加功能。
- **样本要小**：只接触 `docs/documents/trending/ai/` 中本轮明确拥有的页面和目录入口，不接管既有 `AGENTS.md` 改动。
- **验证要能证明范围**：`--list-files` 必须列出本轮改动文件；只看到 `checked 4 file(s)` 不足以证明没有误检或漏检。
- **沉淀要可复制**：下一轮可以直接复制本页的 `Human hypothesis before agent`、`Verification command or review standard` 和 `What I learned that the agent did not own` 三行，再替换样本。

## 下一次练习候选

| 候选 | Human hypothesis before agent | 最小 proof |
| --- | --- | --- |
| 脚本回归 | 失败输出是否足够定位，必须由一个最小 fixture 证明 | `python3 scripts/test-check-markdown-proof.py` |
| 书稿卡片 | 新卡片是否真的补齐索引和章节计数，而不是孤立文件 | `python3 scripts/verify_tech_cards.py --full-only` |
| 只读 PR 审查 | 风险不在代码生成，而在 owned files、dirty paths 和 next safe command 是否清楚 | 人工审查表 + 真实 `git status --short` |

如果下一次无法写出 `Human hypothesis before agent`，不要开始练习；先把任务缩小到一个能被命令或人工标准复核的样本。
