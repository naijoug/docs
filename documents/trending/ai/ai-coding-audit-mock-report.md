---
title: AI 编程审查样板报告
icon: clipboard-list

index: true
order: 31

---

# AI 编程审查样板报告

这是一份只读 mock audit，用自己的文档链路演示：如何把“AI 编程审查服务”交付成 1 页、可复核、可报价的样板报告。它不是要证明文章写得完美，而是证明下一轮 agent 接手前，团队能看见风险、证据、验证命令和继续条件。

<!-- more -->

## Scope

| 项目 | 内容 |
| --- | --- |
| Reviewed | `docs/documents/trending/ai/ai-coding-audit-service.md`、`docs/documents/trending/ai/README.md` |
| Included | 最近两次 agent 内容提交：新增服务指南、补发布与验证包 |
| Excluded | 不审查 VuePress 主题实现、不修复既有站点 warning、不接管其它 repo dirty 文件 |
| Evidence inspected | `git log --oneline -5 -- documents/trending/ai/ai-coding-audit-service.md`、文档正文、目录入口、既有 build 记录 |
| Audit mode | 只读；本报告作为样例交付物，不改变被审查文章的结论 |

## Executive Summary

这条内容链路已经具备一个可测试 offer 的雏形：从内部 skill、样例报告、公开指南到书稿卡片，边界越来越清晰。当前最大风险不是“内容不够多”，而是还没有把样例审查报告展示给读者，导致读者看完服务指南后，仍然不知道付费交付长什么样。

建议下一步不要继续扩写理论，而是围绕一个小 repo 或一次 PR 形成可公开/可匿名的审查案例。公开前先用 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md) 检查 Scope、脱敏规则和证据形状，再用 48 小时观察表记录真实反馈。

## Top Risks

| Priority | Risk | Evidence | Recommended fix |
| --- | --- | --- | --- |
| P1 | 交付物仍偏抽象，缺少可直接展示的 1 页样板 | 服务指南有报告骨架，但没有一份完整的公开 mock report | 发布本报告，并在服务指南和 AI catalog 中链接，降低读者理解成本 |
| P1 | 验证指标停留在“未发布”状态 | `48 小时观察表` 当前只有 `未发布` 占位 | 下一轮选择一个渠道发布 hook，记录 URL、回复类型和是否有人提供样本 |
| P2 | build warning 容易被误读为本轮新增问题 | 上轮 VuePress build 通过，但保留既有 deprecation/missing highlighter 与 broken link warning | 在报告中显式标注“本轮不处理既有 warning”，避免审查范围蔓延 |
| P2 | 收入实验链路分散在 skill、docs、books 多处 | 资产已经跨 `skills/`、`docs/`、`books/`，但读者入口主要在 docs catalog | 在 docs 文章中集中给出“从指南到样板报告”的阅读路径 |
| P3 | 缺少客户视角的 before/after | 目前更多是作者视角的方法论 | 下一份案例选一个真实失败记录，写出审查前后团队下一步动作的差异 |

## Next Safe Command Ladder

这份样板报告不把“跑 build”放在第一步。下一条安全命令梯要先回答：当前最高风险是什么、哪条最小命令能证明它、失败后应该缩小到哪里。

| Step | Command / check | Why this first | Pass means | Fail means |
| --- | --- | --- | --- | --- |
| 1 | 人工结构检查：确认本报告有 frontmatter、`<!-- more -->`、Scope、Top Risks、命令梯、handoff、`Continue / Narrow / Stop` | 这是报告交付物，最先要证明读者能在 1 页内看懂范围、风险、证据和下一步 | 报告形状完整，可以继续检查入口和命令 | 先补报告结构，不要用站点 build 掩盖交付物读不懂 |
| 2 | 链接检查：确认 `README.md` 已新增本报告入口，服务指南能指向样板报告 | 样板报告的主要风险是“写了但读者找不到” | catalog、服务指南和样板报告形成最小阅读路径 | Narrow 到入口文案或相对链接，不扩大到全站重构 |
| 3 | `git -C docs diff --check -- documents/trending/ai/README.md documents/trending/ai/ai-coding-audit-service.md documents/trending/ai/ai-coding-audit-mock-report.md` | 只检查本轮相关 Markdown，避免把旧 warning 当成本轮问题 | 本轮 patch 没有空白、冲突标记或格式损伤 | 修本轮 touched files；不要接管无关 dirty path |
| 4 | `cd docs/web/vuepress && npx -y pnpm@8.15.9 run docs:build` | 只有在局部结构和链接都清楚后，才用站点 build 做确认 | 站点能生成，本轮没有新增 broken link 或高亮错误 | 记录首个新增错误；若只剩既有 warning，写入 skipped / known issues |

### Stop Conditions

- `git status --short` 显示本轮以外的 dirty path，需要先标注归属，不能混入审查结论。
- 步骤 1 或 2 已经失败，说明报告入口或交付形状不成立，先 Narrow 到内容结构，不继续跑更贵验证。
- 站点 build 失败来自既有配置或外部依赖时，只记录证据和下一步 owner action，不把它包装成“样板报告已验证”。

## 复用到 agent skill

如果这份样板报告要交给另一个 agent 继续用，不要只复制表格。应把它当作 `skills/skills/manual/review/next-safe-command-ladder/` 的公开案例：

1. 先用 `SKILL.md` 的 `Command Selection Patterns` 判断变更类型和最高风险；
2. 再用 `references/ai-coding-audit-example.md` 对齐输出粒度，确认每一级都有 `Why this first`、`Pass means`、`Fail means`；
3. 最后回到本报告，把 skill 输出压缩成客户能读懂的 Scope、Top Risks、命令梯和 handoff。

这样可以避免两个常见偏差：对外报告写得像内部 prompt，或者内部 skill 只剩“跑 lint / test / build”的机械清单。

## Handoff Template

```text
Changed/observed files:
- docs/documents/trending/ai/README.md
- docs/documents/trending/ai/ai-coding-audit-service.md
- docs/documents/trending/ai/ai-coding-audit-mock-report.md

Commands run:
- git -C docs log --oneline -5 -- documents/trending/ai/ai-coding-audit-service.md
- git -C docs diff --check -- ...
- cd docs/web/vuepress && npx -y pnpm@8.15.9 run docs:build

Skipped checks:
- 没有启动本地 dev server；本轮只需要静态 build 验证
- 没有修复既有站点 warning；它们不属于本报告范围

Unverified items:
- 还没有真实读者反馈
- 还没有真实客户 repo/PR 样本

Next owner action:
- 选择一个发布渠道，把 `AI 编程审查服务交付指南` + 本样板报告作为入口，开始记录 48 小时观察表
```

## Continue / Narrow / Stop

- `Continue`：有人看完样板报告后愿意提供一次 PR、agent log、失败构建记录或 repo 片段；下一轮按 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md) 做匿名真实案例。
- `Narrow`：反馈只集中在“命令梯”“dirty workspace”“handoff 模板”之一；下一篇只写这个单点，不扩张成完整服务。
- `Stop`：只有泛泛点赞，没有任何样本、问题或复盘请求；回到 hook，重写痛点表达，而不是继续扩写长文。

## 可复用结论

一次 AI 编程审查的价值，不在于列出最多问题，而在于让下一轮 agent 有更小的入口、更清楚的禁区、更便宜的验证命令，以及一个不会混入他人改动的 handoff。这个样板报告可以作为后续报价、案例文章和 checklist 产品化的最小证明。