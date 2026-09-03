---
title: Draft Manifest 先于 Release Gate
icon: robot

index: false

---

把内容型产品交给 Agent 扩展时，先提交一份可验证的 draft manifest，再考虑发布迁移、上线开关或完整 release coverage。这样能把“内容结构是否正确”和“是否已经满足发布标准”拆成两条证据链。

<!-- more -->

## 适用场景

- 教材、题库、课程、模板库、提示词包等内容需要逐步补齐，而不是一次性上线整套。
- 内容必须带来源、授权、审核状态、排序、适用范围等机器可读 metadata。
- 发布门禁需要全量覆盖，但早期只想验证一个单元、一个章节或一个样例包。
- Agent 容易把“生成内容”“写 migration”“打开发布开关”“修 UI 空态”混在同一轮里。

不适用：只有一篇普通文档、没有结构化导入流程、没有发布门禁，也不需要后续批量生产的内容。

## 核心原则

> Draft manifest 的目标是证明“这批内容可以被系统理解”；release gate 的目标是证明“这批内容可以被用户依赖”。不要用后者阻塞前者，也不要用前者冒充后者。

最小 draft manifest 应该同时满足：

1. **可定位**：明确 edition、subject、grade、volume、unit、knowledge point 或同级定位字段。
2. **可排序**：同一作用域内有稳定 `sortOrder`，并有重复排序的负例测试。
3. **可审计**：每条内容带 `source.kind`、rights / review reference、license status 或等价字段。
4. **可回滚**：状态保持 `draft`，不写生产 migration，不激活 catalog 发布开关。
5. **可验证**：结构校验通过；release coverage 仍按预期失败，并能说明失败原因。

## 推荐执行切片

| 步骤 | 本轮只做什么 | 不做什么 | 通过证据 |
|---|---|---|---|
| 1. 写验收标准 | 定义最低内容包、字段、审核、发布门禁 | 不生成真实内容 | plan 中有下一轮最小块 |
| 2. 建 draft 骨架 | 只放 1 个最小 material | 不写 migration、不发布 | content validator 通过 |
| 3. 补同单元第二类型 | 例如 `practice + review` | 不扩整册 | validator 显示 material 数增加 |
| 4. 加 validator 正反例 | 正例覆盖 draft 结构，负例覆盖重复排序或缺授权 | 不改 UI | 单测失败消息可定位 |
| 5. 扩下一个单元 | 每次一个单元、一个提交 | 不一次性铺全册 | release gate 仍诚实失败 |
| 6. 满足 release gate | 全量覆盖、审核、授权、发布状态全部齐备 | 不绕过失败 | coverage 从失败变绿 |

## 验证梯

按从轻到重执行，避免一开始就跑完整 E2E：

```bash
pnpm content:validate
node scripts/content/build-material-migration.mjs | wc -l
pnpm content:coverage:release
```

解释方式：

- `content:validate` 通过：说明 draft manifest 结构能被导入器理解。
- migration 生成有稳定行数：说明未来迁移可确定性生成，但本轮不一定要写入仓库。
- `content:coverage:release` 失败：在 draft 阶段通常是正确结果；记录 `releaseReady: false`、缺口数量和关键 reason，而不是把失败当成未完成。

如果已经补了 validator 测试，再加：

```bash
node --test scripts/content/material.test.mjs
```

单测应覆盖至少一个正例和一个负例：正例证明最小 draft 包可接受；负例证明重复 `sortOrder`、缺 rights reference、缺 source 或非法状态不会静默通过。

## Handoff 模板

```text
Observed:
- 当前 manifest 覆盖到：<subject / grade / volume / unit>
- 当前状态：draft / review / released
- release gate 当前结果：expected fail / pass

Changed:
- 新增 material：<id 列表>
- 新增测试：<正例 / 负例>

Verified:
- pnpm content:validate: <exit + 关键输出>
- node scripts/content/build-material-migration.mjs | wc -l: <行数>
- pnpm content:coverage:release: <expected fail/pass + reason>

Next safe slice:
- 继续补 <下一个 unit> 的 1 个 practice + 1 个 review；或
- 先补 <validator / coverage> 的正反例测试。
```

## 常见反例

- **一次性铺全册**：内容看起来多，但每条 source、rights、unit、sortOrder 的错误定位成本暴涨。
- **draft 刚过结构校验就写生产 migration**：把“可解析”误当成“可发布”，后续撤回困难。
- **为了绿灯放宽 release gate**：短期通过 CI，长期丢失“未覆盖/未审核/未发布”的真实风险信号。
- **只写内容不写负例**：下一轮 Agent 批量生成时，重复排序或缺授权会悄悄进入 manifest。
- **用当前配置反查历史内容**：内容记录被未来配置污染；需要历史快照时，参考 [历史快照标签先于当前配置反查](historical-snapshot-labels-before-current-lookup.md)。

## 检查清单

提交前逐项确认：

- [ ] 本轮只新增 draft manifest 或同一类 validator 测试，没有同时打开 release。
- [ ] 每条 material 都能追到 unit、knowledge point、source、rights/review reference。
- [ ] 同一 unit 内 `sortOrder` 不重复，且有负例保护。
- [ ] `content:validate` 通过。
- [ ] release coverage 的失败是预期失败，记录了 reason；如果通过，也说明满足了哪些发布条件。
- [ ] notebook / plan 里写清下一轮只补哪个 unit 或哪个 validator case。
