---
title: Readiness Field Contract
icon: robot

index: true
order: 100

---

# Readiness Field Contract

无人值守发布、cron 汇总和人工复核之间，最容易丢失的不是“有没有跑过”，而是失败时还能不能用固定字段定位下一步。`readiness.*` 字段应该被当成产品契约，而不是日志文案。

<!-- more -->

## 适用场景

- 发布脚本、cron、review note 和 checklist 之间已经有多条路径：dry-run、blocked、skipped、failed、published。
- 人类 reviewer 不一定能看到完整日志，只能 grep 或阅读一段紧凑 summary。
- 发布动作需要授权，agent 只能把状态推进到“可复核 / 可授权”，不能替用户真实发布。
- 文档、脚本和测试已经开始出现字段名、默认值或语义漂移。

## 核心原则

1. **字段先于文案**：human-readable summary 可以改写，但 machine-readable `key=value` 必须稳定。
2. **失败路径也要完整**：越是 `blocked`、`skipped`、`failed`，越要保留 `reason`、`next_action`、证据路径和授权状态。
3. **默认值只有一个来源**：同一个状态不要在脚本、测试、文档里各写一份字面量；至少在测试里复用同一个 expected 变量。
4. **字段状态要可枚举**：用 `pass` / `fail` / `missing` / `not_required` / `not_checked`，少用自由文本。
5. **发布授权单独成闸**：`publish_authorized=false` 不是失败，而是“没有授权时的正确停点”。

## 最小字段集

| 字段 | 说明 | 常见取值 | 缺失时风险 |
|---|---|---|---|
| `readiness.status` | 总状态 | `ready` / `blocked` / `skipped` / `failed` / `published` | reviewer 不知道是未跑、失败还是未授权 |
| `readiness.reason` | 阻断或失败原因 | `raw_missing`、`quality_gate_failed`、`publish_blocked` | 只能翻完整日志定位原因 |
| `readiness.next_action` | 下一条安全动作 | 命令、文件路径或人工授权问题 | 接力者不知道先补证据还是先授权 |
| `readiness.public_url` | 发布后可见入口 | URL / `missing` / 空值 | 误把未发布当成已发布 |
| `readiness.site_url` | 本轮验证目标站点 | URL / 空值 | 多环境发布时无法复核目标 |
| `readiness.push` | 是否请求真实推送 | `true` / `false` | dry-run 与真实发布边界混淆 |
| `readiness.review_note_path` | 人工复核记录位置 | 相对路径 / 空值 | 无法确认 reviewer 看的是哪份证据 |
| `readiness.review_note_canonical` | review note 是否在约定路径 | `matched` / `mismatch` / `not_required` | 临时样例被误当正式授权 |
| `readiness.human_review_go` | 人工复核是否明确 go | `true` / `false` | 把 checklist 存在误解为授权通过 |
| `readiness.publish_authorized` | 是否满足真实发布授权 | `true` / `false` | agent 可能越过发布边界 |
| `readiness.git_remote_origin` | 发布仓库远端状态 | URL / `missing` | 本地结果不可追溯到可发布仓库 |

## 测试矩阵

把字段契约转成测试时，不要只测 happy path。最小矩阵应覆盖：

| 路径 | 必锁字段 | 验收标准 |
|---|---|---|
| dry-run 成功但未授权 | `push=false`、`publish_authorized=false`、`review_note_canonical=not_required` | 证明默认路径不会真实发布 |
| push 但缺 review note | `review_note_path=`、`human_review_go=false`、`publish_authorized=false` | 证明缺人工复核时会停住 |
| push 且 review note 非 canonical | `review_note_path=<传入路径>`、`review_note_canonical=mismatch` | 证明临时样例不能伪装正式授权 |
| push 且 review note canonical | `review_note_path=<canonical>`、`review_note_canonical=matched` | 证明授权证据路径可追溯 |
| 原始数据缺失 skipped | `status=skipped`、`reason`、`next_action`、`review_note=not_required` | 证明无人值守跳过后能直接补数据 |
| 新鲜度或质量门禁 failed | `status=failed`、失败详情、下游检查 `not_checked` | 证明失败不会继续走发布链 |
| 已发布 | `status=published`、`public_url`、`git_remote_origin` | 证明外部可见结果可复核 |

## 实施步骤

1. **列字段**：先从 checklist 中抽出应该稳定的 `readiness.*` 字段，不急着改脚本。
2. **跑当前测试**：确认已有基线是 green，避免把历史失败混进字段契约。
3. **按路径补断言**：一次只补一个路径或一组同源字段，提交小 diff。
4. **同步文档**：如果脚本输出字段确实变化，再更新 checklist；不要让文档先幻想未来字段。
5. **写接力点**：记录剩余未覆盖路径，而不是继续机械堆同类断言。

## Stop 条件

- 字段已经稳定，但只是为了“更多测试”继续复制断言。
- 文档要求的字段没有真实脚本输出支撑。
- 唯一剩余动作是真实 `publish` / `deploy` / `push`，但没有显式授权。
- 工作区存在归属不明 dirty path，无法只提交本轮 owned path。

触发 Stop 时，把当前产物收口成证据包：字段矩阵、已验证命令、缺口、下一条安全命令。不要把“未授权发布”伪装成失败，也不要把 dry-run 结果伪装成线上结果。
