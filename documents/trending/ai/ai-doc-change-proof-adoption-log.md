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

## 2026-07-08 01:45

```text
Date: 2026-07-08 01:45
Change target: scripts/check-markdown-proof.py + scripts/test-check-markdown-proof.py + documents/trending/ai/ai-doc-change-proof-checker.md + adoption log
Preflight command: python3 scripts/test-check-markdown-proof.py && python3 scripts/test-check-ai-catalog.py && python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/local-verifiable-proof-artifact.md && python3 scripts/check-ai-catalog.py
Result before edit: check-markdown-proof regression tests ok: 15 test(s); check-ai-catalog regression tests ok: 4 test(s); markdown proof ok: checked 2 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 按 01:30 的预算卡真实评分后，选择一个 P0/P1 小交付：checker 失败输出现在带 1-based 行号，并用保持换行/offset 的 masking 跳过 fenced code 与 inline code；新增回归测试验证代码块里的伪链接不报错、正文断链输出 `path:line`。
Verification after edit: python3 scripts/test-check-markdown-proof.py && python3 scripts/test-check-ai-catalog.py && python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/local-verifiable-proof-artifact.md && python3 scripts/check-ai-catalog.py && git diff --check -- scripts/check-markdown-proof.py scripts/test-check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: 这是对 checker 的可验证小修：失败报告从“知道哪个文件坏了”变成“能直接跳到哪一行”，有最小 fixture 支撑；没有扩大到锚点、sidebar 或 VuePress 渲染检查。
Decision: Continue
Next evidence needed: 下一次若 checker 在真实长文里发现断链，观察行号是否能减少定位成本；若遇到代码块 masking 误差，再补最小 fixture，不扩成通用 markdown parser。
```

## 2026-07-08 02:00

```text
Date: 2026-07-08 02:00
Change target: scripts/check-markdown-proof.py + scripts/test-check-markdown-proof.py + documents/trending/ai/ai-doc-change-proof-checker.md + adoption log
Preflight command: python3 scripts/test-check-markdown-proof.py && python3 scripts/test-check-ai-catalog.py && python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md --exclude AGENTS.md && python3 scripts/check-ai-catalog.py
Result before edit: planned from dirty-worktree constraint: docs/AGENTS.md is an existing unrelated markdown modification, so a changed-from proof needs a scoped exclusion instead of silently checking or editing that file.
What changed: 为 checker 增加可重复 `--exclude GLOB`，按仓库 root-relative POSIX path 或文件名排除已确认不属于本轮的 markdown；新增 CLI 回归测试，验证 `--changed-from HEAD --exclude AGENTS.md` 会跳过脏 `AGENTS.md`，但仍检查本轮 changed markdown；说明页补上使用边界，强调不能用 exclusion 隐藏本轮改坏的文档。
Verification after edit: python3 scripts/test-check-markdown-proof.py && python3 scripts/test-check-ai-catalog.py && python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md && git diff --check -- scripts/check-markdown-proof.py scripts/test-check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: 这个扩展直接服务当前 cron 常见场景：仓库存在明确不接管的脏 markdown 时，仍能对本轮文件做 changed-from proof，且 exclusion 本身有 fixture 防回归。
Decision: Continue
Next evidence needed: 下一次若使用 `--exclude`，必须在 notebook 里写明被排除文件为什么不属于本轮；如果经常需要排除同一类文件，改为更明确的 pathspec/owned-file workflow，而不是扩大默认忽略。
```

## 2026-07-08 02:15

```text
Date: 2026-07-08 02:15
Change target: scripts/check-markdown-proof.py + scripts/test-check-markdown-proof.py + documents/trending/ai/ai-doc-change-proof-checker.md + adoption log
Preflight command: python3 scripts/test-check-markdown-proof.py && python3 scripts/test-check-ai-catalog.py && python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: check-markdown-proof regression tests ok: 17 test(s); check-ai-catalog regression tests ok: 4 test(s); markdown proof ok: checked 2 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 在 `--changed-from` 和 `--exclude` 之后补 `--list-files`，让 proof 输出可审计的实际检查集合，而不是只有 `checked N file(s)`；新增 CLI 回归测试验证 list 输出包含本轮 changed markdown、不会列出被 `--exclude` 排除的 dirty path；说明页把 changed-from 的最小 proof 更新为 `--list-files` 版本。
Verification after edit: python3 scripts/test-check-markdown-proof.py && python3 scripts/test-check-ai-catalog.py && python3 scripts/check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files && git diff --check -- scripts/check-markdown-proof.py scripts/test-check-markdown-proof.py documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: `--exclude` 解决了“不接管旧脏文件”的范围问题，`--list-files` 补上“证明检查集合”的审计问题；这是服务 dirty-worktree cron 的小闭环，不扩展 checker 规则本身。
Decision: Continue
Next evidence needed: 下一次真实 docs 改动优先使用 `--changed-from HEAD --exclude AGENTS.md --list-files`，并在 notebook 中核对列出的文件是否完全对应本轮交付。
```

## 2026-07-08 02:30

```text
Date: 2026-07-08 02:30
Change target: documents/trending/ai/changed-from-head-docs-preflight.md + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/changed-from-head-docs-preflight.md documents/trending/ai/ai-doc-change-proof-checker.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Result before edit: markdown proof ok: checked 3 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages; changed-from proof exited 2 with `markdown proof failed: no markdown files changed since HEAD` after excluding existing unrelated `AGENTS.md`, confirming there was no docs-owned changed markdown yet.
What changed: 更新 `changed-from HEAD 文档改动 Preflight`，把默认改后命令收紧为 `--changed-from HEAD --list-files`，补充 dirty worktree 中使用 `--exclude AGENTS.md --list-files` 的审计边界，并明确排除后没有 changed markdown 不能当作通过。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/changed-from-head-docs-preflight.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files && git diff --check -- documents/trending/ai/changed-from-head-docs-preflight.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: 本轮没有继续扩 checker 代码，而是把上一轮 `--list-files` 和 dirty-path exclusion 的真实使用方式回填到 preflight 文档；changed-from proof 会列出本轮两篇文档，便于交接核对。
Decision: Continue
Next evidence needed: 下一次新增 AI 文档时直接使用 `--changed-from HEAD --exclude AGENTS.md --list-files`，先核对文件列表，再决定是否需要 catalog proof 或 VuePress build。
```

## 2026-07-08 03:00

```text
Date: 2026-07-08 03:00
Change target: documents/trending/ai/ai-programmer-deliberate-practice-loop.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-asset-flywheel.md documents/trending/ai/agent-cron-delivery-budget-card.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 4 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 新增 `AI 程序员刻意练习闭环`，把 AI 时代程序员的能力提升拆成选能力、造小题、人先判断、agent 辅助、验证沉淀五步；README catalog 接入新页面，避免继续只围绕 checker 或 cron 模板自循环。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-deliberate-practice-loop.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Signal: 本轮把“AI 时代程序员如何提升自己”落成可执行练习卡，而不是继续扩工具；新增同级 AI 文档继续用 catalog proof 和 changed-from list-files 证明检查集合。
Decision: Continue
Next evidence needed: 下一次优先试填一次练习卡，选一个 30-60 分钟小样本，并记录 `Human hypothesis before agent` 与真实验证结果。
```

## 2026-07-08 03:15

```text
Date: 2026-07-08 03:15
Change target: documents/trending/ai/ai-programmer-deliberate-practice-card-example.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-deliberate-practice-loop.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 3 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 真实试填 `AI 程序员刻意练习闭环`，新增一张 30 分钟练习卡片填写样例，明确 `Human hypothesis before agent`、验证命令、范围 proof 和下一次代码/脚本练习候选；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-deliberate-practice-loop.md documents/trending/ai/ai-programmer-deliberate-practice-card-example.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Signal: 本轮不是继续扩 checker，而是用上一轮练习模板生成可复制样例；changed-from list-files 可证明新增页面、目录入口和采纳记录都在检查集合里。
Decision: Continue
Next evidence needed: 下一次优先换成代码或脚本样本，先写 human hypothesis，再用失败输出或回归测试验证 agent 提案是否真的改变方案。
```

## 2026-07-08 03:30

```text
Date: 2026-07-08 03:30
Change target: documents/trending/ai/ai-programmer-script-change-drill-example.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-deliberate-practice-loop.md documents/trending/ai/ai-programmer-deliberate-practice-card-example.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 4 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 把本轮 `books/scripts/verify_tech_cards.py` 的真实脚本改动写成 `AI 程序员脚本改动练习样例`，记录 human hypothesis、agent proposal、验证命令、dirty path 边界和下一次 drill；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-script-change-drill-example.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Signal: 本轮练习从文档模板推进到真实脚本改动，并把验证结果反哺为可复制样例；changed-from list-files 可证明新增页面、目录入口和采纳记录都在检查集合里。
Decision: Continue
Next evidence needed: 下一次如果继续练习，优先找一个失败输出或边界条件驱动的代码小题；不要为了练习而给已清晰的 wrapper 继续加功能。
```

## 2026-07-08 04:00

```text
Date: 2026-07-08 04:00
Change target: documents/trending/ai/human-hypothesis-validation-ai-coding.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-deliberate-practice-loop.md documents/trending/ai/ai-programmer-script-change-drill-example.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 4 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 新增 `AI 编程中的假设-验证教程`，把 03:30 脚本练习与 03:45 书稿卡片抽成面向 AI 程序员的三段式教程：先写 human hypothesis，再让 agent 做最小可验证改变，最后用 Continue / Narrow / Stop / Switch 更新判断；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/human-hypothesis-validation-ai-coding.md documents/trending/ai/ai-programmer-script-change-drill-example.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Signal: 本轮把真实练习和书稿抽象转成可执行教程，不再继续扩 checker 或 wrapper；changed-from list-files 可证明新增页面、目录入口和采纳记录都在检查集合里。
Decision: Continue
Next evidence needed: 下一次优先用教程模板处理一个新的真实失败输出或边界条件；如果没有代码小题，则把教程提炼成可复用 skill，但必须先确认 `skills/` dirty path 归属。
```

## 2026-07-08 04:16

```text
Date: 2026-07-08 04:16
Change target: documents/trending/ai/failure-output-driven-ai-coding-drill.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/human-hypothesis-validation-ai-coding.md documents/trending/ai/ai-programmer-script-change-drill-example.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 4 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
Failure sample: 临时文件 `_scratch-failure-output-drill.md` 触发 `markdown proof failed: 1 issue(s) in 1 file(s)`，并定位到 `documents/trending/ai/_scratch-failure-output-drill.md:13: broken local link `missing-proof-target.md``；样本随后删除，不进入提交。
What changed: 新增 `失败输出驱动的 AI 编程练习样例`，把 04:00 教程中的 next drill 变成一次真实失败输出练习：先写 human hypothesis，再用断链失败证明 checker 已足够定位，最后选择沉淀样例而不是继续扩工具；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/failure-output-driven-ai-coding-drill.md documents/trending/ai/human-hypothesis-validation-ai-coding.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Signal: 本轮让失败输出直接改变计划：因为已有 `path:line`，所以不改 checker，只沉淀可复制练习；changed-from list-files 需要证明临时失败样本未混入本轮真实检查集合。
Decision: Continue
Next evidence needed: 下一次优先寻找真实项目里的非临时边界条件；如果失败输出已经足够定位，不再扩工具，直接做最小修复或资产化复盘。
```

## 2026-07-08 06:15

```text
Date: 2026-07-08 06:15
Change target: documents/trending/ai/single-channel-offer-publish-preflight.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/income-experiment-switch-without-channel.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 3 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 新增 `单渠道 Offer 发布 Preflight`，把 `makemoney/docs/offer-authorization-request-brief.md` 和书稿里的外部发布授权原则转成 docs 层可执行清单：发布前必须填渠道、账号/身份、联系路径、观察窗口、公开文案来源和停止条件；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/single-channel-offer-publish-preflight.md documents/trending/ai/income-experiment-switch-without-channel.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Signal: 在没有外发授权的情况下，本轮继续选择本地可验证资产，把“若获授权如何只发一个渠道”写清楚，而不是继续扩待授权 offer 或跨渠道发布。
Decision: Continue
Next evidence needed: 下一次如果用户给出渠道、账号、联系路径和观察窗口，按本页 preflight 发布一个渠道并把 URL 写入 `makemoney/runs/`；若仍无授权，切换到新的本地 proof 或真实代码边界。
```

## 2026-07-08 07:00

```text
Date: 2026-07-08 07:00
Change target: documents/trending/ai/real-boundary-task-radar.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-programmer-deliberate-practice-loop.md documents/trending/ai/next-safe-command-ladder.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 4 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 新增 `AI 程序员真实边界任务雷达`，把连续模板/教程/授权材料循环时的下一步选择压成 6 维候选评分：真实边界、可证伪假设、验证方式、所有权、可沉淀资产和停止规则；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/real-boundary-task-radar.md documents/trending/ai/next-safe-command-ladder.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Signal: 本轮不继续围绕外部发布授权扩材料，而是补一个选择机制，要求下一轮先命中失败输出、静默成功、dirty path、授权、成本或用户反馈等真实边界，再投入执行。
Decision: Switch
Next evidence needed: 下一次先给 3 个候选任务按本页打分；如果最高分仍缺真实边界或需要接管未知 dirty path，停止扩写并换一个本地可验证小任务。
```

## 2026-07-08 08:30

```text
Date: 2026-07-08 08:30
Change target: scripts/check-ai-catalog.py + scripts/test-check-ai-catalog.py + local proof artifact note + adoption log
Preflight command: python3 scripts/test-check-ai-catalog.py && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Result before edit: check-ai-catalog regression tests ok: 4 test(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages; changed-from proof exited 2 with `markdown proof failed: no markdown files changed since HEAD` after excluding existing unrelated `AGENTS.md`.
What changed: 给 `check-ai-catalog.py` 的 duplicate/missing target 失败输出补 `documents/trending/ai/README.md:line` 定位；新增 CLI 失败回归测试，证明重复目录链接和缺失同级页面都会指向 README 的具体行；更新本地 proof artifact 说明。
Verification after edit: python3 scripts/test-check-ai-catalog.py && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py documents/trending/ai/local-verifiable-proof-artifact.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files && git diff --check -- scripts/check-ai-catalog.py scripts/test-check-ai-catalog.py documents/trending/ai/local-verifiable-proof-artifact.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: 本轮只修一个真实定位边界：目录 proof 已能发现问题，但缺少 README 行号会增加人工查找成本；没有扩成全站导航检查器。
Decision: Continue
Next evidence needed: 下一次新增 AI 文档时观察 catalog proof 的行号是否足够定位；若足够，不再扩 checker，改选新的 repo/命令真实边界或本地 proof。
```

## 2026-07-08 13:00

```text
Date: 2026-07-08 13:00
Change target: documents/trending/ai/monorepo-test-entrypoint-drift.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/real-boundary-task-radar.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 3 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 新增 `Monorepo 测试入口漂移检查`，把 11:02-12:00 暴露的 workspace-level Vitest alias / stale dist 边界沉淀成 5 分钟雷达、执行顺序、练习卡片和跨包 Vitest 示例；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/monorepo-test-entrypoint-drift.md documents/trending/ai/real-boundary-task-radar.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Signal: 本轮没有继续扩 manifest search，而是把真实失败入口抽象为可复用检查，要求 future agent 同时记录 cwd、source-vs-dist 判断和同一失败入口的红绿变化。
Decision: Continue
Next evidence needed: 下一次若遇到跨包测试、package script 与 workspace command 不一致，先填本页练习卡；若没有真实失败输出或风险入口，不继续扩测试配置。
```

## 2026-07-08 20:00

```text
Date: 2026-07-08 20:00
Change target: documents/trending/ai/ai-coding-agent-tool-intake-scorecard.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/real-boundary-task-radar.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 3 file(s); AI catalog proof ok: README catalog covers all sibling AI markdown pages
What changed: 新增 `AI 编程 Agent 工具引入评分卡`，把外部 AI coding agent 榜单/发布信息转成 15 分钟 intake、10 分评分表、sandbox 对照实验模板和停止条件；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-coding-agent-tool-intake-scorecard.md documents/trending/ai/real-boundary-task-radar.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
Signal: 本轮没有追逐具体工具榜单，而是把信息扫描转成可复跑的本地对照实验；只有命中真实痛点、可复跑样本和验证指标时才试用新工具。
Decision: Continue
Next evidence needed: 下一次若看到具体 coding agent 工具变化，先用本页评分；低于 5 分只记录，不迁移默认工具。
```

## 2026-09-04 08:31

```text
Date: 2026-09-04 08:31
Change target: documents/trending/ai/expected-failure-contract.md + README/catalog + adoption log
Preflight command: git status --short; python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/draft-manifest-before-release-gate.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: docs working tree clean; markdown proof ok for README / draft manifest / adoption log; AI catalog proof covered 83 sibling AI markdown page(s).
What changed: 新增 `Expected Failure 也是交付物`，把 draft、coverage、权限、合规等阶段性红灯写成 `Scope / Reason / Allowed signal / Stop signal / Next safe command` 契约；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/expected-failure-contract.md documents/trending/ai/draft-manifest-before-release-gate.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && git diff --check -- documents/trending/ai/README.md documents/trending/ai/expected-failure-contract.md
Signal: 本轮不接管已有 dirty 的 `study-buddy/`、`skills/`、`loom/`，而是把上午看到的 release gate / draft manifest 接力风险抽成可复核 contract，防止下一轮为追绿误改门禁。
Decision: Continue
Next evidence needed: 下一次若接管 `study-buddy/` 内容 draft，先跑 green validator，再把 release coverage 的 expected failure contract 写进计划；若失败形态变成 schema、重复排序或缺授权，则停止内容扩写先修 validator。
```

## 2026-09-05 00:15

```text
Date: 2026-09-05 00:15
Change target: documents/trending/ai/standalone-test-runner-auto-discovery.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/agent-cron-next-slice-switchboard.md
Result before edit: markdown proof ok: checked 2 file(s)
What changed: 新增 `Standalone Test Runner 自动发现清单`，把前几轮在 makemoney 测试文件中反复处理的手写 standalone runner 清单漂移，抽象成适用信号、改动模板、验证梯、接力格式和停止条件；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/standalone-test-runner-auto-discovery.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && git diff --check -- documents/trending/ai/README.md documents/trending/ai/standalone-test-runner-auto-discovery.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: 工程小改动已经连续多轮证明“手写 runner 清单”是 silent skip 风险；这次不继续机械扫 makemoney，而是把可复用判断沉淀到 docs，供后续 clean repo 小切片直接复用。
Decision: Continue
Next evidence needed: 下一次遇到 pytest fixture、慢测试跳过或 intentionally skipped standalone 测试时，不要套用自动发现模板；先补 runner contract 注释，再决定是否扩成新清单。
```

## 2026-09-07 11:00

```text
Date: 2026-09-07 11:00
Change target: documents/trending/ai/readiness-field-contract.md + README/catalog + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/pre-publish-authorization-boundary.md documents/trending/ai/agent-release-evidence-field-map.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 4 file(s); AI catalog proof ok: README catalog covers 85 sibling AI markdown page(s)
What changed: 新增 `Readiness Field Contract`，把最近在 `makemoney/` 里连续补的发布 readiness 字段断言抽象成字段原则、最小字段集、失败/跳过/授权路径测试矩阵和 Stop 条件；README catalog 接入新页面。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/readiness-field-contract.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && git diff --check -- documents/trending/ai/README.md documents/trending/ai/readiness-field-contract.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: 当 cron、publish 脚本和 checklist 已经连续多轮围绕同一组字段补断言时，继续在项目内堆测试的边际收益下降；更高价值是沉淀一份能指导后续发布门禁设计的可复用 contract。
Decision: Continue
Next evidence needed: 下一次遇到新的发布/部署脚本时，先用本页字段矩阵做缺口扫描；只有字段已存在且高风险路径未覆盖，才补最小测试，不要为了统一文案改脚本输出。
```

## 2026-09-07 16:01

```text
Date: 2026-09-07 16:01
Change target: documents/trending/ai/agent-cron-dirty-worktree-boundary.md + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/agent-cron-dirty-worktree-boundary.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 3 file(s); AI catalog proof ok: README catalog covers 86 sibling AI markdown page(s)
What changed: 在 `Agent Cron 的脏工作区边界` 中补充多 repo 快速分诊表，把 clean / owned-dirty / unknown-dirty / summary-only 四类状态映射到动作和记录方式；强调 summary-only 不能算实质成果，主项目 dirty 时也可切到 clean 的 docs/books 做可验证资产。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/agent-cron-dirty-worktree-boundary.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && git diff --check -- documents/trending/ai/agent-cron-dirty-worktree-boundary.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: 本轮没有新增同级页面，不需要改 README catalog；显式目标 proof 能覆盖既有页面的小幅增强，并继续避免 `--changed-from HEAD` 在有其他 dirty 仓库时扩大边界。
Decision: Continue
Next evidence needed: 下一次 cron 若面对多个 dirty 产品仓库，先按这张分诊表记录 clean / owned-dirty / unknown-dirty / summary-only，再选择一个能提交和验证的最小切片。
```

## 2026-09-07 23:00

```text
Date: 2026-09-07 23:00
Change target: documents/trending/ai/README.md AI-assisted PR review path + adoption log
Preflight command: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-coding-audit-red-flag-triage.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py
Result before edit: markdown proof ok: checked 3 file(s); AI catalog proof ok: README catalog covers 86 sibling AI markdown page(s)
What changed: 在 30-minute AI coding audit entry 和 AI-assisted PR review path 中，把 `AI 编程审查红旗分诊卡` 从“存在的参考页”升级为交付前排序动作：发现超过三条或同一样本多条发现时，先压成 P0 / P1 / P2，再写首份报告、进入 code review 或暂停合并。
Verification after edit: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/ai-coding-audit-red-flag-triage.md documents/trending/ai/ai-doc-change-proof-adoption-log.md && python3 scripts/check-ai-catalog.py && git diff --check -- documents/trending/ai/README.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
Signal: 上一段接力点要求把红旗分诊连接到更靠前的执行页；README 入口比继续扩写单页更能改变下一轮默认路径，并且没有新增页面或 catalog 风险。
Decision: Continue
Next evidence needed: 下一次如继续 AI coding audit，不要再加同主题导航；优先找真实样本、渠道反馈或一条可本地验证的审查报告 fixture，再决定是否沉淀技能或书稿卡片。
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
