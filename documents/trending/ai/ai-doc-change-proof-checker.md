---
title: AI 文档改动 Proof Checker
icon: list-check

index: true
order: 40

---

# AI 文档改动 Proof Checker

AI 协作写文档时，最容易把“写完了”误判成“可交付”：链接可能失效，frontmatter 可能缺字段，summary 里可能带入本机用户目录绝对路径。这个小检查器把发布前的最低证据链收束成一条可运行命令。

<!-- more -->

## 适用场景

- 新增或修改 `documents/trending/ai/` 下的教程、模板、实验记录；
- cron/agent 本轮只改了少量 markdown，需要一个比“人工扫一眼”更可复核的 proof；
- 还没有外部反馈，但希望留下下次可以重复运行的本地验证资产。

它不是完整 markdown linter，也不替代 VuePress 构建；它只检查三类高频低级错误：

1. 每个 markdown 是否有 YAML frontmatter；
2. frontmatter 是否包含 `title`；
3. 正文中的本地 markdown 链接、图片链接和引用式链接是否能解析到真实文件、目录 `README.md` 或同名 `.md`；不会把只有目录存在但缺少 README 的链接误判为通过；引用式链接允许最多 3 个前导空格的定义写法；
4. VuePress `<!-- @include: ... -->` 引用是否能解析到真实文件；当前只内置 `@leetcode` 别名，锚点部分只用于定位章节，不检查锚点是否存在；
5. 内容中是否误写本机用户目录绝对路径；
6. 指定的检查目标是否真实存在，避免 typo 造成 `checked 0 file(s)` 的假绿灯；
7. 使用 `--changed-from` 时，只检查某个 git ref 之后变更过的 markdown 文件，并补上尚未 `git add` 的 untracked markdown。

## 使用方式

脚本源码放在 [scripts/check-markdown-proof.py](../../../scripts/check-markdown-proof.py)。在 `docs/` 仓库内运行：

```bash
python3 scripts/check-markdown-proof.py
```

默认检查 `documents/trending/ai/`。也可以指定文件或目录：

```bash
python3 scripts/check-markdown-proof.py documents/trending/ai/README.md
python3 scripts/check-markdown-proof.py documents/trending/ai docs/other/path
```

只想检查当前分支相对某个 git ref 的 markdown 改动时，使用 `--changed-from`：

```bash
python3 scripts/check-markdown-proof.py --changed-from HEAD
```

这个模式会忽略非 markdown 改动，覆盖已跟踪文件的新增、修改和重命名，也会通过 `git ls-files --others --exclude-standard` 补上未暂存的新 markdown；在没有 markdown 文件变更时以 exit 2 失败，避免“本轮其实没检查任何文档”的假绿灯。新增页面 + 修改目录入口的固定用法见 [changed-from HEAD 文档改动 Preflight](changed-from-head-docs-preflight.md)。

如果需要从其他目录调用，显式传入仓库根目录：

```bash
python3 scripts/check-markdown-proof.py --root docs documents/trending/ai
```

通过时输出类似：

```text
markdown proof ok: checked 25 file(s)
```

失败时会列出相对路径和具体问题，适合直接贴进 PR、agent final report 或 Hermes notebook。

如果目标路径拼错或目录里没有 markdown，命令会以非 0 状态退出：

```text
markdown proof failed: 1 target(s) not found
- documents/trending/ai/missing.md: target not found
```

维护 checker 本身时，先跑回归测试：

```bash
python3 scripts/test-check-markdown-proof.py
```

跨目录链接本身也应该进入 checker 覆盖范围：如果本页链接到脚本源码或回归测试，命令必须能从 `documents/trending/ai/` 解析到 `scripts/` 下的真实文件；链接路径一旦写错，应先修链接或补最小回归样例，而不是直接跳到 VuePress build。当前回归测试已覆盖“跨目录链接目标存在时通过、目标重命名后失败”的最小场景，也覆盖目录链接省略 `README.md` 后缀并携带 markdown title 时仍能解析、目标 README 被移动后应失败的场景。

VuePress include 是另一类容易被 markdown 链接检查漏掉的引用：例如算法页里的 `<!-- @include: @leetcode/problems/0x0000.md#0088 -->` 不会出现在普通 `[text](path)` 里。本 checker 现在会解析 include 文件目标和 `@leetcode` 别名；锚点仍交给 VuePress build 或人工检查，只把“目标文件不存在”作为轻量 preflight 的失败条件。

## 何时还需要 VuePress build

这个 checker 只适合 30-120 分钟的小改动 proof。下面情况仍然要跑完整构建：

| 改动类型 | 最小 proof | 追加验证 |
| --- | --- | --- |
| 只改 AI 目录内一两篇文档 | `python3 scripts/check-markdown-proof.py documents/trending/ai/changed.md` | 人工检查渲染预期 |
| 已经有明确 git 基线，只想检查本轮文档改动 | `python3 scripts/check-markdown-proof.py --changed-from HEAD` | 确认输出列出的 tracked 与 untracked markdown 就是本轮要交付的文件 |
| 改 checker 规则或 CLI 行为 | `python3 scripts/test-check-markdown-proof.py` + checker 覆盖目标文档 | 必要时补一个最小 fixture，再跑 docs build |
| 新增目录入口、sidebar、主题配置 | checker 覆盖改动文档 | `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build` |
| 改代码块、组件、VuePress 插件 | checker 只做路径兜底 | docs build + 页面预览 |
| 公开案例或客户样本 | checker 只查绝对路径 | 另走 evidence boundary 和脱敏检查 |

## 本周实验卡片

```text
Experiment: markdown proof checker for AI docs
Audience: 自己、后续 agent、需要审查 AI 文档改动的维护者
Problem evidence: 近期多轮 AI 文档实验都依赖人工检查和 VuePress build，缺少一个快速 proof 命令
Smallest deliverable: scripts/check-markdown-proof.py + 本页说明 + README 入口
Verification: checker 在 documents/trending/ai/ 通过；对单篇文件也可运行；diff check 通过
Distribution: 接入 README catalog 和每周收入实验规划器的自动化工具候选
Stop condition: 如果 checker 只能重复 VuePress build 已覆盖的内容且没有更快反馈，就停止扩展
Next evidence needed: 下一次 AI 文档改动前先跑该命令，记录它是否提前发现问题
Decision: Continue / Narrow / Stop / Switch
```

## 和每周收入实验的关系

这不是一个可以直接收费的产品，而是“自动化工具”候选的一块 proof artifact：

- 它解决自己真实重复场景：AI 写文档后需要快速证明改动没有基础破损；
- 它能本地运行，不依赖外部账号或客户材料；
- 它留下可复用命令，未来可以扩成更通用的 docs QA 模板包；
- 如果连续几次没有复用价值，就按 [AI 程序员每周收入实验规划器](ai-programmer-weekly-experiment-planner.md) 的停止条件切换，不继续堆检查规则；
- 每次实际复用时，写入 [AI 文档 Proof Checker 采纳记录](ai-doc-change-proof-adoption-log.md)，用通过/失败样例决定继续维护、缩小范围还是停止扩展。
