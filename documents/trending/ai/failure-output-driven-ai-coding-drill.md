---
title: 失败输出驱动的 AI 编程练习样例
icon: lightbulb

index: true
order: 25

---

# 失败输出驱动的 AI 编程练习样例

这是一张把 [AI 编程中的假设-验证教程](human-hypothesis-validation-ai-coding.md) 落到真实失败输出的小练习卡。重点不是修一个大功能，而是训练：先写 human hypothesis，再让失败输出改变下一步计划。

<!-- more -->

## Practice target

用一个临时 markdown proof 失败样本验证：当 checker 已经能给出 `path:line` 时，下一步不应该继续扩 checker，而应该把行号作为定位证据，收敛到最小修复或文档化练习。

## Human hypothesis before agent

```text
Human hypothesis before agent:
- Symptom: 本轮需要一个新的真实失败输出或边界条件，但不应该为了练习继续修改 checker 或 wrapper。
- Suspected cause: 现有 `check-markdown-proof.py` 已经能报告行号；如果故意制造一个断链，失败输出应足够定位到具体 markdown 行。
- Smallest check: 创建一个临时 AI 文档，放入缺失的本地链接，运行 `python3 scripts/check-markdown-proof.py <file>`，观察是否输出 `path:line`。
- Risk boundary: 不提交临时失败样本；不修改 `docs/scripts/check-markdown-proof.py`；不接管启动前已有的 `docs/AGENTS.md`。
```

## Failure output observed

临时样本只用于生成失败输出，运行后已删除，不进入提交。实际观察到的输出是：

```text
markdown proof failed: 1 issue(s) in 1 file(s)
- documents/trending/ai/_scratch-failure-output-drill.md:13: broken local link `missing-proof-target.md`
```

这条输出提供了三件足够行动的信息：

1. 失败类型：`broken local link`；
2. 文件集合：只有临时样本 1 个文件；
3. 定位点：第 13 行的 `missing-proof-target.md`。

## Agent proposal summary

本轮不修改 checker。把这次失败输出写成练习样例，并把“失败输出是否改变计划”记录成判断：

- 如果输出没有行号，下一步才考虑补 checker fixture；
- 如果输出有行号，本轮计划从“改工具”切换为“沉淀练习样例”；
- 如果失败来自启动前脏文件，应先排除或停止，而不是顺手修未知归属文件。

## Verification

```text
Verification:
- Command before: python3 scripts/check-markdown-proof.py documents/trending/ai/_scratch-failure-output-drill.md
- Result before: markdown proof failed，并定位到 `_scratch-failure-output-drill.md:13` 的断链。
- Command after: python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/failure-output-driven-ai-coding-drill.md documents/trending/ai/human-hypothesis-validation-ai-coding.md documents/trending/ai/ai-doc-change-proof-adoption-log.md
- Expected after: markdown proof ok，并且 changed-from proof 只列出本轮真实文档文件，不包含临时样本。
- Did the failure output change the plan? yes：它证明现有 checker 足够定位，所以本轮不扩工具。
```

## What I learned that the agent did not own

失败输出的价值不在于“有红字”，而在于它是否足以改变计划：

- 有 `path:line`：优先修内容或沉淀样例；
- 只有笼统失败：才考虑改工具输出；
- 失败来自临时或未知归属文件：先清理/排除，再验证本轮文件集合；
- 验证命令通过但没有列出文件：在 dirty worktree 中仍要补 `--list-files` 证明检查集合。

## Decision

`Decision: Continue`

理由：这次失败输出足以证明 checker 的定位能力，本轮继续沉淀练习资产，而不是扩大工具代码。

## Next drill

找一个真实项目里的非临时边界条件，例如失败测试、构建 warning 或 CLI 参数误用。仍然先写 `Human hypothesis before agent`，再比较失败输出是否改变了实现、测试或文档计划。
