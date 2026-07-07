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

## 2026-07-02 20:01

```text
Date: 2026-07-02 20:01
Change target: documents/trending/ai/changed-from-head-docs-preflight.md + README/catalog + checker page + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-doc-change-proof-adoption-log.md documents/trending/ai/ai-doc-change-proof-checker.md && python3 scripts/test-check-markdown-proof.py
Result before edit: markdown proof ok: checked 3 file(s); regression tests ok: 10 test(s)
What changed: 新增 `changed-from HEAD 文档改动 Preflight`，把新增 markdown + 修改 README/catalog + 采纳记录的自动范围检查写成固定执行顺序；README catalog 和 checker 说明页链接到该页。
Verification after edit: python3 scripts/check-markdown-proof.py --changed-from HEAD
Signal: `--changed-from HEAD` 在真实新增页面场景中自动覆盖本轮新增页、修改过的 README、checker 说明页和采纳记录，减少手动列文件漏检风险。
Decision: Continue
Next evidence needed: 下一次如果发生删除、重命名或跨目录移动 markdown，再观察 `--changed-from HEAD` 是否需要补最小 fixture；没有失败样例时不继续扩 checker。
```

## 2026-07-03 13:00

```text
Date: 2026-07-03 13:00
Change target: documents/trending/ai/ai-coding-audit-result-log-template.md + README/catalog + weekly planner + 30-minute experiment
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-weekly-experiment-planner.md documents/trending/ai/thirty-minute-ai-coding-audit-income-experiment.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Result before edit: markdown proof ok: checked 4 file(s)
What changed: 新增 AI 编程审查 Audit Result 私有记录表模板，承接 30 分钟收入实验里的 channel / input evidence / public boundary / deliverable / decision / next evidence needed 字段；README、30 分钟实验和每周规划器都链接到该模板，避免把真实回复散落成不可复查笔记。
Verification after edit: python3 scripts/check-markdown-proof.py --changed-from HEAD
Signal: `--changed-from HEAD` 覆盖本轮新增模板和修改过的入口页，适合作为新增 AI 文档后的自动范围 proof；本轮没有发现断链或 frontmatter 问题，不扩 checker 规则。
Decision: Continue
Next evidence needed: 下一次拿到真实样本后，用记录表填一条私有单轮记录；如果要公开，只发布脱敏摘要并先过匿名案例骨架。
```

## 2026-07-03 15:00

```text
Date: 2026-07-03 15:00
Change target: documents/trending/ai/ai-coding-audit-experiment-switch.md + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-coding-audit-experiment-switch.md documents/trending/ai/ai-coding-audit-roadmap.md documents/trending/ai/ai-coding-audit-result-log-template.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Result before edit: markdown proof ok: checked 4 file(s)
What changed: 把实验切换清单的复盘入口改成先写 Audit Result 私有记录，再把可公开摘要回填路线图；Continue 动作中也先记录渠道、输入证据、公开边界和决策，Stop / Switch 时先写事实依据再封存。
Verification after edit: python3 scripts/check-markdown-proof.py --changed-from HEAD
Signal: `--changed-from HEAD` 能自动覆盖本轮修改过的切换清单与采纳记录，适合作为小范围既有文档改动的 proof；本轮没有发现断链或 frontmatter 问题，不扩 checker。
Decision: Continue
Next evidence needed: 下一次不要再扩 AI coding audit 文档，除非有真实样本或 checker 发现具体失败；否则按实验切换清单切到另一个本地可验证小任务。
```

## 2026-07-07 15:00

```text
Date: 2026-07-07 15:00
Change target: scripts/check-markdown-proof.py + scripts/test-check-markdown-proof.py + documents/trending/ai/ai-doc-change-proof-checker.md + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md documents/trending/ai/local-verifiable-proof-artifact.md && python3 scripts/test-check-markdown-proof.py
Result before edit: markdown proof ok: checked 3 file(s); check-markdown-proof regression tests ok: 14 test(s)
What changed: 按“本地可验证 proof artifact”路线，给引用式链接定义补一个真实 markdown 兼容边界：最多 3 个前导空格的 `[label]: target` 现在会被识别，并新增最小回归测试确认缩进定义不会被误报为缺失定义，同时仍能报告缩进定义指向的断链。
Verification after edit: python3 scripts/test-check-markdown-proof.py + python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md; `python3 scripts/check-markdown-proof.py --changed-from HEAD` 因既有 `docs/AGENTS.md` 缺少 frontmatter 失败，未把该既有 dirty path 纳入本轮修复。
Signal: checker 继续作为小型本地 proof 工具维护；本轮只扩一个 markdown 语法兼容点，并有失败/通过 fixture 支撑，不把它扩成完整 linter。`--changed-from HEAD` 的失败也提醒：在仓库已有非本轮 dirty markdown 时，交付 proof 应显式列出本轮文件，避免接管他人改动。
Decision: Continue
Next evidence needed: 下一次只在真实文档写法或 checker 误报/漏报暴露新边界时再补规则；没有新失败样例时，优先用现有 explicit-target checker 或在干净工作区使用 `--changed-from HEAD` 做交付 proof。
```

## 2026-07-07 16:00

```text
Date: 2026-07-07 16:00
Change target: documents/trending/ai/ai-programmer-weekly-experiment-card-proof-artifact-example.md + README/catalog + weekly planner + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-weekly-experiment-planner.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Result before edit: markdown proof ok: checked 3 file(s)
What changed: 新增每周实验卡片填写样例，把“没有外部渠道时如何选择本地可验证 proof artifact”写成一张完整 `Continue` 卡片；README catalog 和 weekly planner 都接入该样例。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-weekly-experiment-planner.md documents/trending/ai/ai-programmer-weekly-experiment-card-proof-artifact-example.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: checker 在真实新增页面 + 修改入口页场景中继续作为显式目标 proof 使用；本轮没有新增 checker 规则，也没有依赖受既有 dirty `AGENTS.md` 干扰的 `--changed-from HEAD`。
Decision: Continue
Next evidence needed: 下一次优先用这张实验卡片指导另一个本地可验证交付物；只有真实断链、误报或漏报出现时才扩 checker 规则。
```

## 2026-07-07 17:00

```text
Date: 2026-07-07 17:00
Change target: scripts/check-ai-catalog.py + scripts/test-check-ai-catalog.py + README/catalog + local proof artifact note + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai
Result before edit: markdown proof ok: checked 39 file(s)
What changed: 新增 AI catalog 覆盖检查脚本和 stdlib 回归测试，把 `documents/trending/ai/README.md` 的 `## catalog` 从人工维护提升为可运行 proof：同级 markdown 页面必须被 catalog 覆盖，重复链接和缺失目标会失败；README preflight 与本地 proof artifact 清单都接入该命令。
Verification after edit: python3 scripts/test-check-ai-catalog.py + python3 scripts/check-ai-catalog.py + python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/local-verifiable-proof-artifact.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: 本轮没有继续扩通用 markdown checker，而是为入口索引做一个边界更窄的 proof artifact；测试覆盖正例、漏链、重复链接、缺失目标和 CLI 成功路径。
Decision: Continue
Next evidence needed: 下一次新增或删除 `documents/trending/ai/*.md` 时，优先观察 `check-ai-catalog.py` 是否能在提交前发现 README catalog 漏更新；如果未来目录页分组变化，再补最小 fixture，而不是把脚本扩成全站导航生成器。
```

## 2026-07-07 18:00

```text
Date: 2026-07-07 18:00
Change target: documents/trending/ai/agent-cron-dirty-worktree-boundary.md + README/catalog + local proof artifact note + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-weekly-experiment-planner.md documents/trending/ai/local-verifiable-proof-artifact.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 3 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 新增 `Agent Cron 的脏工作区边界`，把 cron agent 在多 repo、已有 dirty path 场景下的 Snapshot / Ownership / Selection / Commit 护栏写成一张可执行卡；README catalog 和本地 proof artifact 清单都接入该页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/local-verifiable-proof-artifact.md documents/trending/ai/agent-cron-dirty-worktree-boundary.md documents/trending/ai/ai-doc-change-proof-adoption-log.md + python3 scripts/check-ai-catalog.py
Signal: 这是对 17:00 catalog proof 的真实新增页面试用：新增同级 AI 文档后必须同步 README catalog，否则 catalog proof 会失败；本轮没有扩 checker 规则。
Decision: Continue
Next evidence needed: 下一次若继续处理 cron 节拍任务，优先用这张边界卡决定是否可以在脏工作区中推进；如果必须接管未知 dirty path，则停止并等待明确授权。
```

## 2026-07-07 19:00

```text
Date: 2026-07-07 19:00
Change target: documents/trending/ai/agent-handoff-receipt-template.md + README/catalog + local proof artifact note + adoption log
Preflight command: not run before edit; this was a low-risk new page plus catalog update chosen after the repo status snapshot
Result before edit: not captured; use the post-edit explicit file proof below for this round
What changed: 新增 `Agent 交接回执模板`，把一次 agent / cron / reviewer 交接压缩成 owned changes、avoided dirty paths、verified facts、commands run、open risks、next safe command 和 `Continue / Narrow / Stop / Switch`；README catalog 与本地 proof artifact 清单都接入该模板。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/local-verifiable-proof-artifact.md documents/trending/ai/agent-handoff-receipt-template.md documents/trending/ai/ai-doc-change-proof-adoption-log.md + python3 scripts/check-ai-catalog.py
Signal: 本轮继续把 18:00 的脏工作区边界推进成可复用交接模板，并用 catalog proof 验证新增同级 AI 文档没有漏接入口；没有扩 checker 规则。
Decision: Continue
Next evidence needed: 下一次优先在真实跨 agent 接力或 PR review 场景中试填这张回执；如果只是在总结里重复描述，说明模板需要 `Narrow` 成更短的交接卡。
```

## 2026-07-08 01:15

```text
Date: 2026-07-08 01:15
Change target: documents/trending/ai/income-experiment-switch-without-channel.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-weekly-experiment-planner.md documents/trending/ai/local-verifiable-proof-artifact.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 3 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 新增 `渠道未授权时的收入实验切换卡`，把“已有 offer 资产但缺少首发渠道、账号或联系方式授权”的状态写成 Waiting / Do-not-do / Switch / Return condition；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/income-experiment-switch-without-channel.md documents/trending/ai/ai-doc-change-proof-adoption-log.md + python3 scripts/check-ai-catalog.py
Signal: 本轮没有继续给待授权 OpenClaw offer 加功能，而是把“缺授权则切换”的决策沉淀为可复用卡片；新增同级 AI 文档后继续用 catalog proof 防漏链。
Decision: Switch
Next evidence needed: 如果用户确认首发渠道和联系方式，再回到对应 offer 的 publish preflight；否则下一轮选择另一个本地可验证、可提交的小资产。
```

## 2026-07-08 01:30

```text
Date: 2026-07-08 01:30
Change target: documents/trending/ai/agent-cron-delivery-budget-card.md + README/catalog + local proof artifact note + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/local-verifiable-proof-artifact.md documents/trending/ai/agent-cron-dirty-worktree-boundary.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 4 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 新增 `Agent Cron 交付预算卡`，把无人值守节拍的 15-45 分钟预算、候选任务评分、交付卡片模板、验证标准和停止条件写成可复用模板；README catalog 与本地 proof artifact 清单接入该页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/local-verifiable-proof-artifact.md documents/trending/ai/agent-cron-delivery-budget-card.md documents/trending/ai/ai-doc-change-proof-adoption-log.md + python3 scripts/check-ai-catalog.py
Signal: 本轮把“不要只写 notebook”进一步落实到可执行预算卡，下一次 cron 可以先评分候选任务，再选择一个可验证小交付；新增同级 AI 文档继续用 catalog proof 防漏链。
Decision: Continue
Next evidence needed: 下一轮优先试用这张预算卡真实评分 2-3 个候选任务；若仍只是写总结，说明预算卡需要收窄到更硬的执行闸门。
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
