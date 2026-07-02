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

## 2026-07-02 07:15

```text
Date: 2026-07-02 07:15
Change target: documents/trending/ai/README.md + documents/trending/ai/ai-programmer-weekly-experiment-planner.md
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-weekly-experiment-planner.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Result before edit: markdown proof ok: checked 3 file(s)
What changed: 在 AI 目录入口新增 `AI document change preflight`，把 checker 的改前/改后使用方式、采纳记录和 VuePress build 边界写成默认路径；在每周收入实验规划器中把 AI 文档改动 proof checker 固定为目录入口、长文和跨目录链接改动的默认 preflight。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-weekly-experiment-planner.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: checker 第二次用于已有入口页与长文的小改动，仍能在改前和改后快速给出可复查通过结果；目前没有失败样例，不扩规则。
Decision: Continue
Next evidence needed: 下一次优先在包含新增跨目录相对链接或删除/重命名目标文件的改动中观察 checker 是否能发现断链；若发现失败，再补最小回归测试。
```

## 2026-07-02 07:30

```text
Date: 2026-07-02 07:30
Change target: documents/trending/ai/ai-doc-change-proof-checker.md + cross-directory link to scripts/check-markdown-proof.py
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md documents/trending/ai/README.md
Result before edit: markdown proof ok: checked 3 file(s)
What changed: 在 checker 说明页新增从 documents/trending/ai/ 到 scripts/check-markdown-proof.py 的跨目录相对链接，并补充“跨目录链接也要进入 checker 覆盖范围”的维护规则。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md documents/trending/ai/README.md
Signal: checker 能覆盖新增的跨目录相对链接，并确认该链接解析到真实脚本文件；本轮仍没有断链失败样例，不扩规则。
Decision: Continue
Next evidence needed: 下一次优先观察删除、重命名或移动链接目标时 checker 是否能先于 VuePress build 给出失败；若出现失败，再把最小样例写入 scripts/test-check-markdown-proof.py。
```

## 2026-07-02 07:45

```text
Date: 2026-07-02 07:45
Change target: scripts/test-check-markdown-proof.py + documents/trending/ai/ai-doc-change-proof-checker.md
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Result before edit: markdown proof ok: checked 2 file(s)
What changed: 按 07:30 的接力点，把“跨目录链接目标被重命名后应失败”补进 stdlib-only 回归测试；checker 说明页记录该最小场景已经覆盖。
Verification after edit: python3 scripts/test-check-markdown-proof.py + python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: checker 的断链捕获价值从人工说明变成可重复测试：目标存在时通过，目标重命名后同一链接失败；这是一个有失败样例驱动的扩展，而不是无差别加规则。
Decision: Continue
Next evidence needed: 下一次优先观察锚点、带 title 的 markdown link、目录 README 省略后缀等链接形态；只有真实样例失败时再补最小测试。
```

## 2026-07-02 08:00

```text
Date: 2026-07-02 08:00
Change target: scripts/test-check-markdown-proof.py + documents/trending/ai/ai-doc-change-proof-checker.md
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/test-check-markdown-proof.py
Result before edit: markdown proof ok: checked 2 file(s); regression tests ok: 5 test(s)
What changed: 按 07:45 的接力点，把“目录链接省略 README.md 后缀且带 markdown title”补成回归测试；fixture 先验证 `[playbook](playbook "AI playbook")` 能解析到 `playbook/README.md`，再移动 README 并断言同一链接失败。测试暴露出 checker 原先会把仅存在的目录当作通过，因此同步把本地链接候选从 `exists()` 收紧为 `is_file()`。
Verification after edit: python3 scripts/test-check-markdown-proof.py + python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: README 省略后缀与 markdown title 这类常见写法已被最小 fixture 固化，并修掉“目录存在但 README 缺失仍假绿灯”的漏报。
Decision: Continue
Next evidence needed: 下一次优先观察锚点链接或 VuePress alias/include 这类 checker 暂不处理的形态；只有真实误报/漏报时再补最小测试。
```

## 2026-07-02 08:15

```text
Date: 2026-07-02 08:15
Change target: scripts/check-markdown-proof.py + scripts/test-check-markdown-proof.py + documents/trending/ai/ai-doc-change-proof-checker.md
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/test-check-markdown-proof.py
Result before edit: markdown proof ok: checked 2 file(s); regression tests ok: 6 test(s)
What changed: 按 08:00 的接力点观察 VuePress include/alias：真实仓库中算法页大量使用 `<!-- @include: @leetcode/problems/...md#anchor -->`，普通 markdown link checker 不会覆盖。新增 include 解析、`@leetcode` 别名映射和最小回归测试，验证目标文件存在时通过、目标文件重命名后报告 `broken include`；验证文档时又暴露 inline code 示例会被误识别，因此同步新增“inline code 里的 `[label](path)` 与 include 示例不检查”的回归测试。锚点仍不检查，避免把轻量 preflight 做成 VuePress build。
Verification after edit: python3 scripts/test-check-markdown-proof.py + python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md documents/programmer/core/algorithm/0x01.sort.md
Signal: checker 能覆盖一类 VuePress build 才容易发现的文件目标错误，但仍保持在“文件是否存在”的轻量范围内；这是一条由真实仓库写法驱动的扩展。
Decision: Continue
Next evidence needed: 下一次若继续维护 checker，优先只观察真实失败样例；锚点存在性、sidebar 和插件行为交给 VuePress build，不要继续把 checker 扩成万能 linter。
```

## 2026-07-02 18:00

```text
Date: 2026-07-02 18:00
Change target: scripts/check-markdown-proof.py + scripts/test-check-markdown-proof.py + documents/trending/ai/ai-doc-change-proof-checker.md
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/test-check-markdown-proof.py
Result before edit: markdown proof ok: checked 2 file(s); regression tests ok: 8 test(s)
What changed: 按本地可验证 proof artifact 清单选择 P0/P1 交付，新增 `--changed-from GIT_REF` 模式，让 checker 能从 git diff 自动收集本轮变更过的 markdown 文件；同时补最小回归测试，验证它只检查变更 markdown、忽略非 markdown，并能对变更文档里的断链失败。
Verification after edit: python3 scripts/test-check-markdown-proof.py + python3 scripts/check-markdown-proof.py --changed-from HEAD + python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: checker 从“手动列文件”进化为“按 git 基线自动收束范围”，更适合 cron/agent 小改动的固定 preflight；这是有 CLI 行为测试覆盖的扩展。
Decision: Continue
Next evidence needed: 下一次真实 docs 改动优先用 `python3 scripts/check-markdown-proof.py --changed-from HEAD` 作为改后 proof，并确认它列出的 markdown 范围没有漏掉本轮交付文件。
```

## 2026-07-02 19:00

```text
Date: 2026-07-02 19:00
Change target: scripts/check-markdown-proof.py + scripts/test-check-markdown-proof.py + documents/trending/ai/ai-doc-change-proof-checker.md
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/test-check-markdown-proof.py
Result before edit: markdown proof ok: checked 2 file(s); regression tests ok: 9 test(s)
What changed: 复查 18:00 新增的 `--changed-from HEAD` 后，发现它只读取 `git diff --name-only`，会漏掉尚未 `git add` 的新 markdown；本轮补 `git ls-files --others --exclude-standard` 收集 untracked markdown，并新增最小回归测试，验证新文件中的断链也会失败。
Verification after edit: python3 scripts/test-check-markdown-proof.py + python3 scripts/check-markdown-proof.py --changed-from HEAD + python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: checker 的自动范围收束现在覆盖 agent 最常见的“新增文档还未暂存”场景，降低新页面漏检风险；仍只检查 markdown 文件，不扩展到生成产物或 VuePress 配置。
Decision: Continue
Next evidence needed: 下一次真实 docs 新增页面后继续用 `--changed-from HEAD`，确认输出中同时包含新建 markdown 与已修改入口页；若遇到删除文件或 rename 边界，再补最小 fixture。
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
