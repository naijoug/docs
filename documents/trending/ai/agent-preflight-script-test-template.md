---
title: Agent Preflight 脚本测试模板
icon: vial

index: true
order: 94

---

# Agent Preflight 脚本测试模板

Agent cron 的 preflight 脚本如果只靠“刚刚手跑通过”，很容易在下一次改默认路径、日期选择或仓库边界时退化。把 preflight 本身当成被测对象，用临时 workspace 写最小正反例，能让硬规则从 notebook 约定变成可回归资产。

<!-- more -->

## 什么时候值得写自测

满足任意两条，就不要只写 README 说明：

- preflight 会被定时 agent、人工复盘或 CI 反复调用。
- 脚本包含默认目标推断，例如“无参数时选择最新 notebook”。
- 脚本负责防止高代价错误，例如绝对路径泄漏、错误目录提交、漏跑 proof checker。
- 上一轮已经出现过“从错误工作目录运行”“日期文件选错”“缺字段仍通过”等风险。
- 修改脚本比修改业务逻辑更安全，但一旦写坏会影响每轮交接。

## 最小测试骨架

用临时 workspace 复制脚本，构造足够小的文件树，避免污染真实仓库：

```bash
#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
workdir="$(mktemp -d)"
trap 'rm -rf "$workdir"' EXIT

mkdir -p "$workdir/summaries/scripts" "$workdir/summaries/hermes"
cp "$repo_root/scripts/check.sh" "$workdir/summaries/scripts/check.sh"
cp "$repo_root/scripts/check-hermes-notebook.sh" "$workdir/summaries/scripts/check-hermes-notebook.sh"

(
  cd "$workdir/summaries"
  git init -q
  git config user.name test
  git config user.email test@example.com
)
```

测试目标不是复刻真实仓库，而是给脚本的分支条件提供最小证据。

## 必测分支

| 分支 | Fixture | 断言 |
| --- | --- | --- |
| 显式目标 | 写入一个合法 `summaries/hermes/2026-09-02.md` | `summaries/scripts/check.sh summaries/hermes/2026-09-02.md` exit 0 |
| 默认目标 | 写入两个日期文件 | 无参数运行时选择文件名最新的 notebook |
| 空目录 | 不创建任何 notebook | 无参数运行必须失败，并提示显式传入路径 |
| 规则拒绝 | 写入绝对路径、缺字段或错误标题 | checker 必须 exit 非 0 |
| 工作目录边界 | 从 workspace root 调用 | 输出使用相对路径，不能依赖本机 home |

每个断言都要检查 exit code；如果还要检查输出，只匹配稳定短语，不匹配临时目录绝对路径。

## 写法要点

1. **先复制脚本，再运行脚本**：不要直接在真实仓库里创建坏 fixture，避免误提交。
2. **初始化临时 git 仓库**：如果 preflight 包含 `git diff --check`，临时 repo 才能覆盖真实路径。
3. **正例和反例都要有**：只测通过路径，会漏掉“坏文件也通过”的退化。
4. **输出保持可移植**：失败消息里写 `summaries/hermes/YYYY-MM-DD.md` 这类相对路径，不写本机绝对路径。
5. **自测脚本本身可单独运行**：不要要求外部服务、密钥或当前日期；否则 cron 无法稳定复用。

## Handoff 记录模板

```text
Preflight under test: <script path>
Branches covered: explicit target / default latest / empty directory / rejection case
Fixture root: mktemp workspace, removed on exit
Proof command: <test script command>
Observed result: exit <code>, output contains <stable phrase>
Next branch to add: <one missing behavior>
```

## 常见反例

| 反例 | 问题 |
| --- | --- |
| 在真实 `summaries/hermes/` 下临时创建坏 notebook | 容易误提交或触发真实 checker |
| 只检查 stdout，不检查 exit code | 脚本打印错误但仍返回 0 时无法发现 |
| fixture 依赖当前日期 | 跨时区、补记历史记录或延迟任务会误红 |
| 自测调用主 preflight，主 preflight 又调用自测，且没有边界 | 容易递归或让单测变成全量检查 |
| 输出断言匹配临时目录 | 每次运行不同，handoff 不可复核 |

## 与现有资产的关系

- 用 [Agent Cron 下一块选择矩阵](agent-cron-next-slice-switchboard.md) 判断是否应该继续脚本化，还是切到内容或收入实验。
- 用 [AI 文档改动 Proof Checker](ai-doc-change-proof-checker.md) 和 [Content-only 文档 Proof Gate](content-only-docs-proof-gate.md) 覆盖文档类改动的基础 proof。
- 用 [测试 Fixture 失败语义化](test-fixture-failure-semantics.md) 给 fixture 准备、命令启动和清理失败补语义化错误。

这张模板的价值在于：agent 下一次修改 preflight 时，不必从记忆里猜“这个默认行为有没有坏”，而是先跑一条本地、可重复、无副作用的测试命令。