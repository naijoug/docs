---
title: AI 文档 Proof Checker 采纳记录
icon: clipboard-check

index: true
order: 41

---

# AI 文档 Proof Checker 采纳记录

`AI 文档改动 Proof Checker` 只有在真实文档改动里被复用，才算从一次性脚本变成可依赖资产。本页记录每次采纳时的最小证据：改动目标、先跑什么、发现了什么、是否值得继续维护。

<!-- more -->

## 记录格式

```text
Date:
Change target:
Preflight command:
Result before edit:
What changed:
Verification after edit:
Signal:
Decision: Continue / Narrow / Stop / Switch
Next evidence needed:
```

## 2026-07-02 07:00

```text
Date: 2026-07-02 07:00
Change target: documents/trending/ai/ai-doc-change-proof-adoption-log.md + README/catalog links
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md
Result before edit: markdown proof ok: checked 1 file(s)
What changed: 新增采纳记录页，把 checker 的“下一次 AI 文档改动前先跑”要求落到可复查记录；README catalog 与 checker 页面都链接到本页。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-adoption-log.md documents/trending/ai/README.md documents/trending/ai/ai-doc-change-proof-checker.md
Signal: checker 能在小范围文档改动前后快速给出路径/frontmatter/绝对路径兜底，适合作为 AI 目录文档改动的 preflight。
Decision: Continue
Next evidence needed: 下一次不要只验证新增页面本身；优先在修改已有长文、目录入口或跨目录链接时记录 checker 是否发现人工容易漏掉的问题。
```

## 采纳判断

| 信号 | 处理 |
| --- | --- |
| 连续 2-3 次能在 10 秒内给出可复查通过结果 | 保留为 AI 文档改动默认 preflight |
| 发现断链、缺 frontmatter、误写本机绝对路径 | 记录失败样例，再补最小回归测试 |
| 多次只重复 VuePress build 且没有更快反馈 | `Narrow` 到少数高风险文档，停止扩规则 |
| 需要覆盖 sidebar、代码块渲染或 VuePress 插件行为 | `Switch` 到 docs build / 页面预览，不把 checker 做成万能 linter |

## 下一次优先观察

- 修改 `documents/trending/ai/README.md` 这类目录入口时，checker 是否能提前发现相对链接错误；
- 修改跨目录链接时，是否需要把“允许的链接形态”写入回归 fixture；
- 如果 checker 发现问题，先补一个最小失败样例，再决定是否扩展规则。
