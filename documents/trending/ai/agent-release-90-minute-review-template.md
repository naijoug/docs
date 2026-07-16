---
title: Agent 上线前 90 分钟审查模板
icon: robot

index: true
order: 69

---

# Agent 上线前 90 分钟审查模板

这是一份给 AI Agent、RAG 应用和带工具调用的自动化工作流使用的上线前审查模板。目标不是开一场很长的评审会，而是在 90 分钟内产出一份可以被发布系统、安全负责人和值班人员共同消费的证据包。

<!-- more -->

## 适用边界

适合使用：

- 变更包含模型、Prompt、工具 schema、检索索引、权限策略或灰度范围。
- 系统会调用外部工具、读写业务数据、发送消息、发起审批或触发自动化动作。
- 团队已经有最小 Golden Tasks、脱敏执行 trace 或人工验收样本。

不适合使用：

- 还没有真实业务路径，只是在验证 demo 概念。
- 没有可复核证据，只能凭主观感觉判断模型回答好坏。
- 发布风险极高，需要正式安全评审、红队测试或合规审批。

## 90 分钟节奏

| 时间盒 | 目标 | 产物 | 不做什么 |
|---|---|---|---|
| 0-20 分钟 | 固定发布对象和风险面 | 版本字段、工具风险表、灰度范围 | 不临时扩大功能范围 |
| 20-40 分钟 | 跑核心 Golden Tasks | 评估结果、失败样本 ID、脱敏 trace | 不只看平均分 |
| 40-60 分钟 | 检查安全门禁 | 高风险工具、审批、权限、敏感数据结论 | 不用“模型看起来谨慎”替代工具断言 |
| 60-80 分钟 | 填写发布报告 | `gate_decision`、证据链接、回滚开关 | 不把报告写成会议纪要 |
| 80-90 分钟 | 做上线决定 | `pass` / `warn` / `block` 与下一步动作 | 不留下“会后再补证据”的开放口 |

## 输入材料

审查开始前至少准备这些输入：

```yaml
release_candidate:
  release_id: "agent-support-2026-07-16-001"
  agent_version: "2026.07.16"
  prompt_hash: "sha256:..."
  model_version: "provider/model@2026-07-15"
  tool_schema_version: "tools-support-v18"
  golden_tasks_version: "golden-support-v42"
  security_suite_version: "security-agent-v11"
  rollout_scope:
    tenant_group: "internal-beta"
    traffic_percent: 1
    allowed_tools: ["kb_search", "ticket_summarize"]
    blocked_tools: ["crm_update", "refund_payment"]
```

如果这些字段填不出来，先停止上线审查，回到变更整理：发布对象没有被固定时，后面的评估和回滚结论都不可复现。

## 0-20 分钟：固定发布对象和风险面

先写工具风险表，而不是直接讨论“能不能上”。

| 工具 / 能力 | 风险等级 | 本次是否开放 | 必要保护 | 回滚 / 降级方式 |
|---|---|---|---|---|
| `kb_search` | low | 是 | 租户隔离、无敏感字段输出 | 保留只读回答 |
| `ticket_summarize` | medium | 是 | 脱敏 trace、人工可复核摘要 | 降级为人工摘要 |
| `crm_update` | high | 否 | 审批参数绑定、幂等键、审计日志 | 关闭写工具 |
| `refund_payment` | critical | 否 | 双人审批、金额上限、人工执行 | 完全移出自动链路 |

这一段的结论要落到 `rollout_scope.allowed_tools` 和 `rollout_scope.blocked_tools`，否则发布范围仍然不可执行。

## 20-40 分钟：跑核心 Golden Tasks

最小检查不要追求覆盖所有样本，而要覆盖三类样本：

1. 核心成功路径：最常见、最有业务价值的任务。
2. 高成本失败路径：容易循环、超时、反复检索或频繁接管的任务。
3. 高风险边界路径：涉及写操作、敏感数据、越权工具或外部消息的任务。

记录方式：

```yaml
evaluation_result:
  total_cases: 32
  passed_cases: 30
  failed_case_ids:
    - "SEC-approval-parameter-binding-002"
    - "LOOP-search-timeout-004"
  hard_gate_failures:
    forbidden_tool_violation: 0
    sensitive_trace_leak: 0
    missing_approval_binding: 1
  safe_trace_links:
    - "safe_trace://release/agent-support-2026-07-16-001/SEC-approval-parameter-binding-002"
```

失败样本只写数量没有用，必须能回放到具体样本 ID 和脱敏 trace。

## 40-60 分钟：检查安全门禁

对每个高风险能力做硬断言：

- 禁止工具没有出现在执行 trace 中。
- 需要审批的工具有审批记录、审批人、参数快照和审批后执行结果。
- 敏感字段在日志、评估报告和调试输出中已经脱敏。
- 权限失败返回确定状态，例如 `missing_permission`、`approval_required` 或 `tenant_boundary_violation`。
- 安全回归集失败时默认 `block`，除非本次发布范围完全不包含相关能力且报告中写明阻断边界。

安全结论示例：

```yaml
security_gate:
  decision: "warn"
  reason: "只读能力通过；写操作审批参数绑定缺少 1 个回归样本"
  required_before_write_gray:
    - "补齐 SEC-approval-parameter-binding-002"
    - "重跑 security-agent-v11"
```

## 60-80 分钟：填写发布报告

把前面三段汇总成统一报告：

```yaml
release_report:
  release_id: "agent-support-2026-07-16-001"
  owner: "agent_release_owner"
  agent_version: "2026.07.16"
  prompt_hash: "sha256:..."
  model_version: "provider/model@2026-07-15"
  tool_schema_version: "tools-support-v18"
  golden_tasks_version: "golden-support-v42"
  security_suite_version: "security-agent-v11"
  gate_decision: "warn"
  decision_reason: "只读灰度通过；写操作审批参数绑定仍缺 1 个样例"
  rollout_scope:
    tenant_group: "internal-beta"
    traffic_percent: 1
    allowed_tools: ["kb_search", "ticket_summarize"]
    blocked_tools: ["crm_update", "refund_payment"]
  evidence:
    failed_case_ids: ["SEC-approval-parameter-binding-002"]
    safe_trace_links:
      - "safe_trace://release/agent-support-2026-07-16-001/SEC-approval-parameter-binding-002"
    audit_event_ids: ["audit_01HX..."]
  rollback:
    version_switch: "prompt:model:tools -> previous_stable"
    capability_switch: "disable_write_tools"
    traffic_switch: "internal-beta -> 0%"
    owner: "agent_oncall"
  next_review:
    required_before_write_gray: true
    tasks:
      - "补齐写操作审批参数绑定样例并重跑安全回归集"
      - "演练 crm_update 熔断后人工接管路径"
```

## 80-90 分钟：做上线决定

| `gate_decision` | 可以做 | 不能做 | 下一步 |
|---|---|---|---|
| `pass` | 按报告里的灰度范围上线，并持续观察指标 | 临时扩大工具或租户范围 | 进入灰度监控和回滚预案 |
| `warn` | 只读灰度、内部灰度或人工接管灰度 | 开放高风险写操作、扩大外部流量 | 补齐指定证据后复审 |
| `block` | 不发布候选版本 | 绕过失败样本或只改口头承诺 | 修复失败样本，重新进入审查 |

如果会上无法在 90 分钟内确定结论，默认写 `block` 或 `warn`，不要用“原则上通过，细节后补”替代证据。

## 复核清单

上线前最后检查：

- [ ] 发布对象有版本字段：代码、Prompt、模型、工具 schema、Golden Tasks、安全回归集。
- [ ] 灰度范围有明确租户、流量比例、允许工具和阻断工具。
- [ ] 失败样本有 ID、脱敏 trace 和 owner。
- [ ] 高风险工具有审批、幂等、审计和回滚开关。
- [ ] `gate_decision` 是 `pass`、`warn` 或 `block` 之一。
- [ ] `warn` 和 `block` 都写清重新进入审查的条件。
- [ ] 报告没有本机绝对路径、密钥、真实用户数据或未授权客户信息。

## 与书稿章节的对应关系

- 第 8 章负责提供 Golden Tasks、评估结果、失败样本和脱敏 trace。
- 第 9 章负责把 `gate_decision` 接入灰度、监控、回滚和发布报告。
- 第 10 章负责判断安全门禁是否通过，以及失败时为什么必须阻断或降级发布。

这份模板是三章内容的执行入口：先把证据变成统一字段，再用字段做发布决定。

## 与执行技能配合

如果 90 分钟审查需要由 agent 代跑或交给另一个 reviewer 接手，使用 `skills/skills/manual/review/agent-release-gate/` 作为执行技能入口：

1. 先用本模板在 0-80 分钟内收集版本字段、工具风险、Golden Tasks、安全门禁和发布报告草稿。
2. 再用 [Agent 发布证据字段映射表](agent-release-evidence-field-map.md) 检查字段是否能从评估侧追溯到发布侧和安全侧。
3. 最后让执行技能产出 `pass` / `warn` / `block`、允许范围、禁用范围、复审条件和下一条安全检查。

技能不是替代审查证据的捷径；如果本模板里的版本字段、失败样本或脱敏 trace 缺失，技能应默认收窄范围或阻断上线。

需要一个可复制的填报形态时，对照 `skills/skills/manual/review/agent-release-gate/references/filled-example.md`：先模仿它写出 release object、evidence map、allowed/disabled scope、re-entry condition，再把真实证据替换为脱敏相对路径或审计 ID。
