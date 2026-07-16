---
title: Agent 发布证据字段映射表
icon: robot

index: true
order: 70

---

# Agent 发布证据字段映射表

这是一份把测试、发布和安全审查连接起来的字段映射表。它适合放在 Agent 上线前评审、灰度发布和事故复盘之间，避免团队在第 8 章已经跑了 Golden Tasks，却在第 9 章发布报告和第 10 章安全门禁里重新口头解释一遍。

<!-- more -->

## 使用场景

当一次 Agent 变更包含模型、Prompt、工具 schema、检索索引、权限策略或灰度范围时，用这张表把三类材料接起来：

1. **评估侧证据**：Golden Tasks、失败样本、脱敏执行 trace、安全回归结果。
2. **发布侧报告**：版本字段、灰度范围、`gate_decision`、回滚开关、复审任务。
3. **安全侧门禁**：高风险工具、审批绑定、敏感数据、审计事件和 `pass` / `warn` / `block` 结论。

如果只是做 demo、没有真实业务路径或没有可复核 trace，先不要填这张表；先补最小 Golden Tasks 和一条可脱敏回放的执行记录。

## 一页字段映射

| 评估侧产物 | 发布报告字段 | 安全门禁消费方式 | 缺失时默认动作 |
|---|---|---|---|
| Golden Tasks 版本 | `golden_tasks_version` | 判断候选版本是否基于固定样本通过 | `block`：发布对象不可复现 |
| 成功率、失败率、成本、延迟 | `evaluation_summary` | 判断是否满足准入阈值，是否只能小流量灰度 | `warn`：只允许内部或只读灰度 |
| 失败样本 ID | `evidence.failed_case_ids` | 确认失败是否触发硬门禁或复审任务 | `block`：无法定位失败样本 |
| 脱敏执行 trace | `evidence.safe_trace_links` | 回放工具调用、审批、权限和数据边界 | `block`：高风险能力不能上线 |
| 禁止工具违规数 | `hard_gate_failures.forbidden_tool_violation` | 高风险工具门禁必须为 0 | `block`：禁止动作出现过 |
| 审批参数绑定样本 | `evidence.approval_binding_cases` | 检查审批人、参数快照和执行结果一致 | `warn` 或 `block`：按工具风险等级决定 |
| 审计事件 ID | `evidence.audit_event_ids` | 追责高风险工具、审批和回滚动作 | `warn`：只读灰度；写操作暂停 |
| 回滚演练结果 | `rollback.version_switch` / `capability_switch` / `traffic_switch` | 判断异常时能否止损 | `warn`：不放量；关键能力缺失时 `block` |
| 安全回归集版本 | `security_suite_version` | 确认本轮安全检查可复现 | `block`：安全结论不可复查 |
| 复审任务 | `next_review.tasks` | 把 `warn` 的限制条件转为下一轮入口 | `warn` 不能升级为 `pass` |

## 最小 YAML 骨架

```yaml
release_evidence_map:
  release_id: "agent-support-2026-07-16-001"
  source_versions:
    agent_version: "2026.07.16"
    prompt_hash: "sha256:..."
    model_version: "provider/model@2026-07-15"
    tool_schema_version: "tools-support-v18"
    golden_tasks_version: "golden-support-v42"
    security_suite_version: "security-agent-v11"
  evaluation_summary:
    total_cases: 32
    passed_cases: 30
    failed_case_ids:
      - "SEC-approval-parameter-binding-002"
    hard_gate_failures:
      forbidden_tool_violation: 0
      sensitive_trace_leak: 0
      missing_approval_binding: 1
  release_report_fields:
    gate_decision: "warn"
    rollout_scope:
      tenant_group: "internal-beta"
      traffic_percent: 1
      allowed_tools: ["kb_search", "ticket_summarize"]
      blocked_tools: ["crm_update", "refund_payment"]
    evidence:
      safe_trace_links:
        - "safe_trace://release/agent-support-2026-07-16-001/SEC-approval-parameter-binding-002"
      audit_event_ids: ["audit_01HX..."]
    rollback:
      version_switch: "prompt:model:tools -> previous_stable"
      capability_switch: "disable_write_tools"
      traffic_switch: "internal-beta -> 0%"
  safety_gate:
    decision: "warn"
    reason: "只读灰度通过；写操作审批参数绑定仍缺 1 个样例"
    blocked_until:
      - "补齐 SEC-approval-parameter-binding-002"
      - "重跑 security-agent-v11"
```

## 决策规则

- **`pass`**：硬门禁为 0，灰度范围明确，回滚开关可执行，失败样本不影响本次开放能力。
- **`warn`**：核心只读路径可上线，但写操作、高风险租户或外部流量需要额外证据；报告必须写清不能做什么。
- **`block`**：发布对象无法复现、禁止工具被调用、敏感 trace 泄漏、审批绑定缺失且本次要开放相关写能力，或回滚不可执行。

不要把 `warn` 写成“原则上通过”。`warn` 的价值在于明确限制范围：哪些工具不开、哪些租户不放、哪些失败样本必须补齐后才能复审。

## 与 90 分钟审查模板配合

如果时间有限，先按 [Agent 上线前 90 分钟审查模板](agent-release-90-minute-review-template.md) 跑完整节奏，再用本页检查字段是否断链：

1. 0-20 分钟固定版本字段和工具风险表。
2. 20-40 分钟产出 Golden Tasks 结果、失败样本和脱敏 trace。
3. 40-60 分钟判断硬门禁和安全结论。
4. 60-80 分钟把字段写入发布报告。
5. 80-90 分钟用 `pass` / `warn` / `block` 做最终发布决定。

本页是字段对账表；90 分钟模板是执行节奏。两者一起使用，才能把“评估通过了”变成“这个版本可以按什么范围上线”。

## 执行技能入口

需要把这张字段映射表交给 agent 或 reviewer 执行时，使用 `skills/skills/manual/review/agent-release-gate/`。技能负责把本页字段压缩成可审计的 `pass` / `warn` / `block` 门禁报告：

- 本页先确认字段是否断链，避免发布报告缺少 Golden Tasks、脱敏 trace、审计事件或回滚开关。
- 技能再决定缺失证据应该降级为 `warn`，还是直接阻断为 `block`。
- 输出必须写清允许范围、禁用范围、复审条件和下一条安全检查，不能只写“建议通过”。

如果 reviewer 不确定 `warn` 应该写到什么粒度，先对照脱敏样例 `skills/skills/manual/review/agent-release-gate/references/filled-example.md`：它展示了如何把未解决失败样本、只读灰度、禁用写工具和 re-entry condition 放进同一份门禁报告。

发布会现场需要快速口头对齐时，先打开 `skills/skills/manual/review/agent-release-gate/references/quick-reference.md`：它把可复现发布对象、证据字段、硬门禁和 `warn` 范式压缩成一页检查表，适合在填本页之前确认哪些缺失会直接 `block`，哪些缺失只能降级为受限 `warn`。

## 复核清单

- [ ] 每个发布报告字段都能追溯到评估侧产物或安全侧门禁。
- [ ] 每个失败样本都有 ID、owner、脱敏 trace 和下一步处理方式。
- [ ] `gate_decision` 与安全门禁结论一致，没有发布报告写 `pass`、安全结论写 `warn` 的分裂状态。
- [ ] `warn` 明确限制工具、租户、流量或能力范围。
- [ ] `block` 写清重新进入审查的条件，而不是只写“待修复”。
- [ ] 报告中没有本机绝对路径、密钥、真实用户数据或未授权客户信息。
