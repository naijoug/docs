---
title: AI 编程审查一页纸填写样例
icon: clipboard-check

index: true
order: 39

---

# AI 编程审查一页纸填写样例

这是一份脱敏填写样例，用来检验 `books/tech-cards-handbook/samples/ai-agent-skill-reuse-before-new-skill-one-pager.md` 是否真的能减少下一轮决策成本。它不证明某个客户案例已经成立，只演示如何把一次模糊反馈压缩成“先复用技能、暂不新建技能”的交接页。

<!-- more -->

## 30 秒入口判断

```text
Should create a new skill now? No.
Reason: 目前只有 1 条脱敏观察；它仍然需要 next-safe-command-ladder 和 audit-evidence-boundary 两个既有技能串联，而不是一个全新的自动化技能。
Decision: Narrow.
```

## 观察快照

```text
Pain quote: “Agent 改完测试配置后说验证通过，但 CI 的 lint job 失败；我不知道该让它继续修还是先回滚。”
Known evidence: PR diff summary；CI job name；agent final report 中一句 all checks passed。
Missing evidence: 原始 lint 命令；exit code；失败摘要；agent final report 的完整验证段落；涉及文件列表。
Public boundary: 可以公开失败阶段、证据缺口和处理方法；不能公开公司名、仓库名、截图、完整日志、私有路径。
Next evidence needed: 复制 CI 原始命令、exit code、失败摘要、agent final report 验证段落和改动文件范围。
```

## 复用路径

| 判断点 | 先复用什么 | 本样例输出 |
| --- | --- | --- |
| 不知道下一步跑什么 | `skills/skills/manual/review/next-safe-command-ladder/` | 先只读收集失败命令、exit code、失败摘要，不让 agent 自动修复或提交 |
| 不知道能公开什么 | `skills/skills/manual/review/audit-evidence-boundary/` | 只公开失败形状和证据缺口；把“agent 没有验证”降级为待证实推断 |
| 是否新建技能 | `docs/documents/trending/ai/ai-coding-audit-observation-to-skill-checklist.md` | 不新建；等 2-3 条真实样本都需要同样合并输出后再考虑 |

## 技能化门槛与一页纸填写结果

```text
Observation snapshot:
- Pain quote: Agent claimed verification passed while CI lint failed.
- Known evidence: PR diff summary + CI job name + one-line final report claim.
- Missing evidence: raw command, exit code, failure summary, full verification paragraph, changed file scope.
- Public boundary: anonymized method only; no repo name, screenshots, full logs, private paths.

Reuse path:
- Existing skill 1: next-safe-command-ladder.
- Output: collect raw lint command, exit code and failure summary in read-only mode; do not auto-fix.
- Existing skill 2: audit-evidence-boundary.
- Output: publish only evidence shape; treat “agent did not verify” as inference until command output exists.

Skillization threshold:
- Create a new skill only after 2-3 authorized samples repeatedly require the same combined output.
- Until then, keep this as a docs demo and a book sample fill-in.

Decision:
- Continue / Narrow / Stop: Narrow.
- Next evidence needed: raw command, exit code, failure summary, final report verification paragraph, changed file scope.
- Asset destination: docs/documents/trending/ai/ai-coding-audit-one-pager-filled-example.md
```

## 停止条件

- 只能拿到截图、完整私有日志或无法脱敏的路径时，停止公开案例写作，只记录 `Next evidence needed`。
- 如果对方希望 agent 直接修复，但还没有失败命令和 exit code，先拒绝扩大改动面。
- 如果连续两轮都无法拿到原始证据，把收入实验从“审查报告”收窄到“证据收集模板”。

## 后续接力句

```text
下一轮不要新建技能。先用这份一页纸向样本提供者索取 5 个最小证据；补齐后再决定是否进入首份 30-60 分钟只读审查报告。
```

可直接发送的证据收集话术见 [AI 编程审查证据收集请求模板](ai-coding-audit-evidence-request-template.md)。

## 关联文档

- [AI 编程审查技能复用演示](ai-coding-audit-skill-reuse-demo.md)
- [AI 编程审查证据收集请求模板](ai-coding-audit-evidence-request-template.md)
- [AI 编程审查观察到执行技能清单](ai-coding-audit-observation-to-skill-checklist.md)
- [AI 编程审查发布后观察样例](ai-coding-audit-observation-example.md)
- 模板来源：`books/tech-cards-handbook/samples/ai-agent-skill-reuse-before-new-skill-one-pager.md`
- 对应书稿卡片：`books/tech-cards-handbook/chapters/ai-agent/reuse-existing-skill-before-new-skill.md`
