---
title: AI 编程审查 Issue 到 PR 交接说明
icon: clipboard-list

index: true
order: 33

---

# AI 编程审查 Issue 到 PR 交接说明

这页把 `.github/ISSUE_TEMPLATE/ai-coding-audit.yml` 收到的样本，转换成 `.github/pull_request_template.md` 里可复核的 PR 审查入口。目标不是让 Issue 和 PR 重复填表，而是让样本里的不确定点、证据、公开边界和命令梯，在进入 PR 时仍然可追踪。

<!-- more -->

## 适用场景

当一个 AI coding audit 样本已经从“我遇到一个 agent 失控场景”升级为“这里有一段 PR / diff / log 可以审查”时，使用这张交接表。

| 阶段 | 主要问题 | 交接产物 |
| --- | --- | --- |
| Issue intake | 这个样本是否安全、具体、可审查？ | `repo_or_area`、`current_uncertainty`、`current_evidence`、`public_boundary` |
| 只读首份报告 | 哪个风险最先影响信任？ | 1 页风险报告、Top risks、下一条安全命令梯 |
| PR handoff | 下一位 reviewer 第一眼该复核什么？ | PR snapshot、ownership boundary、verification ladder、unverified items |

## 字段映射

| Issue 字段 | PR 模板位置 | 转换规则 |
| --- | --- | --- |
| `repo_or_area` | Related issue / sample request、Changed area | 保留 repo、模块或文档区域；只写相对路径和公开名称。 |
| `agent_change` | Intended outcome、Files intentionally changed in this PR | 从“agent 做了什么”压缩成可审查目标，不把愿望写成完成事实。 |
| `failure_or_risk` | Main risk found while using the agent | 只保留影响信任或合并决策的风险；普通改进建议放到报告正文。 |
| `current_uncertainty` | Next safe command for reviewer | 把第一优先问题改写成下一条最便宜的验证动作。 |
| `current_evidence` | Starting `git status --short` summary、Evidence supporting that risk | 证据只写命令、exit code、相对路径、脱敏摘要；没有证据的结论进入 Unverified。 |
| `public_boundary` | Do-not-touch paths / secrets / production data、Unverified items | 公开边界决定 PR 里哪些内容只能内部可见，哪些可以匿名复盘。 |
| `boundaries` | Pre-existing dirty paths to avoid、Do-not-touch paths | 明确 include / exclude / read-only constraints，防止把样本范围扩成咨询。 |
| `safety_confirmation` | Reviewer checklist | 任一安全确认无法满足时，PR 不进入公开案例路径。 |
| `command_ladder` | Verification ladder | 按 Minimal / Focused / Build 或 smoke 分层，不要只写“run tests”。 |
| `desired_output` | Continue / Narrow / Stop recommendation | 用输出目标约束交付范围：报告、命令梯、handoff 或停止条件。 |

## 转换步骤

### 1. 先判定是否能进入 PR

只有同时满足下面三点，才把 Issue 转成 PR 审查入口：

- 有具体可审查材料：PR 链接、diff 摘要、agent 运行记录、final report 或命令输出；
- 边界清楚：include / exclude、只读约束、不能触碰的路径已经写明；
- 安全确认完成：没有密钥、生产凭证、客户数据、未经授权截图或绝对私有路径。

如果缺少任一项，结论不是“继续追问所有细节”，而是 `Narrow`：只要求补齐第一条阻塞证据，例如启动 `git status --short`、脱敏 diff 摘要或公开边界确认。

### 2. 把不确定点改写成下一条安全命令

Issue 里的 `current_uncertainty` 通常是一个问题，PR 里需要变成下一位 reviewer 可以执行或复核的动作。

| Issue 不确定点 | PR 下一条安全命令 |
| --- | --- |
| “agent 是否混入了已有 dirty changes？” | 先对比启动 `git status --short` 与 PR changed files，标出 pre-existing dirty paths。 |
| “final report 说测试通过但没写命令。” | 要求补 `Commands run`，先跑最小相关命令，不升级到全量 build。 |
| “生成文件不知道是不是必要。” | 先列 generated / ignored files，并要求说明生成来源和是否需要提交。 |
| “不知道该不该公开复盘。” | 先套 evidence boundary checkpoint，把 claim 标成 `Fact` / `Inference` / `Unverified` / `Private` / `Stop`。 |

### 3. 保留证据链，不复制噪音

从 Issue 到 PR 只搬运能支撑判断的证据：

```text
Issue evidence:
- git status --short: M docs/..., ?? scripts/...
- command: npx -y pnpm@8.15.9 run docs:build -> failed on missing frontmatter
- skipped: visual smoke, no browser context

PR handoff:
- Starting status summary: docs file modified; one unrelated untracked script excluded.
- Evidence supporting risk: docs build failed on missing frontmatter.
- Unverified items: visual smoke not run; browser context unavailable.
- Next safe command: fix frontmatter, rerun docs build only.
```

避免把长日志、私有路径、客户名和“看起来应该没问题”搬进 PR。证据不足时写 `Unverified` 和 `Next evidence needed`，不要补成结论。

## 最小 PR 交接模板

可以把下面内容贴到 PR 模板对应段落：

```markdown
## AI coding audit handoff

- Related sample issue: #[number]
- Current uncertainty from issue:
- Main risk found while using the agent:
- Evidence supporting that risk:
- Public boundary: Public / Internal only / Ask before quoting / Stop
- Pre-existing dirty paths to avoid:
- Next safe command for reviewer:
- Unverified items:
- Continue / Narrow / Stop recommendation:
```

## Continue / Narrow / Stop

| 判断 | 何时使用 | 下一步 |
| --- | --- | --- |
| `Continue` | Issue 证据、边界和安全确认足够，PR 只需按验证梯复核。 | 进入 PR review，跑 Minimal command，再决定是否升级。 |
| `Narrow` | 有真实样本，但缺一个关键证据或边界。 | 只要求补第一条阻塞证据，不扩大审查范围。 |
| `Stop` | 授权不清、敏感信息未清理、生产权限或客户数据风险存在。 | 停止 PR 审查；改成内部安全处理或重新脱敏后再提交。 |

## 发布边界

把 PR 结果写成公开案例前，还要回到 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md) 和 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md)：

- `Fact` 只能来自命令、diff、模板字段或明确授权的记录；
- `Inference` 必须写出推断依据；
- `Unverified` 只能作为下一步证据需求，不能包装成风险结论；
- `Private` 不进入公开文本；
- `Stop` 表示发布链断裂，改写成方法说明或样本征集。
