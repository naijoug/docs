---
title: 历史快照标签先于当前配置反查
icon: clock-rotate-left

index: true
order: 96

---

# 历史快照标签先于当前配置反查

AI 结对实现学习记录、审查记录、订单、积分、教材配置这类“会随时间变化的业务对象”时，最容易犯的错是：历史列表只保存一个当前可查的 id，展示时再去查最新配置。这样短期能少存字段，长期却会让旧记录在用户切换配置、版本改名、目录下架或权限变更后被重新解释。

<!-- more -->

这张卡来自一次 `study-buddy/` 教材上下文切片：当前教材可以被家长切换，目录发布状态也会变化；但错题、专项练习、录音和学习事件的历史记录必须显示“提交当时”的教材标签，而不是用当前教材反查旧记录。原则是：**历史事实保存快照，当前配置只服务新动作。**

## 适用场景

- 用户可以修改 profile、教材、计划、价格、权限、组织、角色或规则，而旧记录仍需要可解释。
- 历史列表、审计日志、账单、学习报告或 case study 需要跨版本展示。
- 当前配置可能被删除、重命名、下架、迁移或变成不可访问。
- 你正在让 agent 改 contract / API / UI，担心它为了复用当前查询而丢掉历史语义。

不适用：纯缓存、临时草稿、可重新计算且不对用户展示的中间状态。那类数据优先用 current lookup，避免把快照字段过早固化成迁移负担。

## 判断表

| 问题 | 如果答案是“是” | 处理方式 |
| --- | --- | --- |
| 记录会进入用户可见历史吗？ | 是 | 保存展示所需的最小快照字段 |
| 当前配置可被用户或运营修改吗？ | 是 | 历史展示不得依赖当前配置反查 |
| 字段改名会改变旧记录含义吗？ | 是 | 快照里保留当时 label/code/version |
| 旧记录需要权限过滤吗？ | 是 | 读接口先按 child / owner 过滤，再展示快照 |
| 快照缺字段时能否安全猜测？ | 否 | 明确显示“旧记录缺少教材信息”等空态 |

最小快照不是把整份对象复制进去，而是保存未来解释这条记录必须的公开字段：`seriesLabel`、`editionCode`、`grade`、`semester`、`volumeTitle`、`capturedAt` 这类 label/code/version，比保存整段教材正文更安全。

## 实施步骤

### 1. 先画清楚 current 与 historical 两条线

```text
Current config: profile / catalog / latest rule -> 只影响新任务、新练习、新内容入口
Historical snapshot: attempt / event / order / audit log -> 只解释当时发生了什么
```

代码上尽量拆成两个类型：

```ts
type CurrentCurriculum = {
  subject: string;
  availability: "ready" | "not_applicable" | "unavailable" | "unconfigured";
  book?: { title: string; editionCode: string; seriesLabel: string };
};

type CurriculumSnapshot = {
  subject: string;
  seriesLabel?: string;
  editionCode?: string;
  grade?: number;
  semester?: "upper" | "lower";
  volumeTitle?: string;
};
```

命名上避免把 `currentCurriculum` 直接塞进 `historyItem.curriculum`。历史字段应明确叫 `snapshot`、`capturedCurriculum` 或 `curriculumSnapshot`。

### 2. 写一条“切换后旧记录不变”的回归测试

不要只测“能显示标签”。最有价值的测试是先制造旧记录，再修改当前配置，最后断言旧记录仍显示旧标签。

```text
Given: 学生在 G3 上册 PEP 语文下提交一次练习
When: 家长把当前教材切到 G3 下册或另一个 edition
Then: 旧练习历史仍显示 G3 上册 PEP 标签；新练习才使用新配置
```

如果是 API 层，断言 response 中有快照字段，且不返回原始答案、解析、私有 payload 或媒体地址。如果是 UI 层，断言历史标签来自 fixture snapshot，而不是从当前设置文本拼出来。

### 3. 快照缺失时诚实降级

历史系统通常会遇到老数据。不要在 UI 里用当前配置“补全”旧记录，因为这会制造看似正确但不可证明的标签。

推荐空态：

```text
教材记录：旧记录缺少教材信息
```

不推荐：

```text
教材记录：当前教材：人教版三年级上册
```

第二种会把当前状态伪装成历史事实，尤其在用户已经切过学期、edition 或地区版本时会误导。

## Verification ladder

从小到大跑验证：

1. **类型/fixture**：历史 fixture 必须同时包含 `currentConfig` 和 `snapshot`，测试能证明二者不同。
2. **API contract**：读历史接口返回快照公开字段；不返回正文、答案、解析、媒体 URL、内部 payload。
3. **数据库/事件**：写入 attempt/event/order 时保存快照；迁移只加索引或可选字段时，不回填猜测值。
4. **UI**：历史列表展示 snapshot label；当前配置卡片展示 current label；两个组件不要复用同一个 formatter 除非函数名区分 current/historical。
5. **E2E/acceptance**：先产生旧记录，再切换配置，再刷新历史页；断言旧标签不变、新动作使用新配置。

## Handoff 模板

```text
Historical object: <attempt/event/order/audit log>
Current object that can change: <profile/catalog/rule/price/permission>
Snapshot fields saved: <label/code/version/time fields>
Old-data fallback: <缺字段时如何显示，不做哪些猜测>
Ownership filter: <child/user/org/project scoped query>
Proof: <切换 current 后旧记录不变的命令 + 结果>
Next risk: <哪个历史分支还没接 snapshot>
```

## 常见反例

- 历史列表只存 `catalogId`，展示时查最新 catalog，导致目录下架后旧记录消失。
- 订单只存当前商品名 id，运营改名后旧发票显示新名称。
- 审查报告只引用最新 PR 描述，issue 中的原始失败命令丢失。
- 旧数据缺字段时用当前 profile 自动补标签，notebook 里写“已兼容历史”，但没有任何切换后不变的测试。

遇到这些反例时，优先补“历史快照字段 + 切换后旧记录不变测试”，不要继续美化列表文案。

## 与现有资产的关系

- 用 [测试契约先数据化再扩分支](test-contract-decision-table.md) 把 current/historical 的状态组合整理成表。
- 用 [薄 API 边界测试地图](thin-api-boundary-test-map.md) 判断读历史接口哪些 ownership、字段白名单和错误分支值得单独测试。
- 用 [从项目实现到可复用资产](project-implementation-to-reusable-asset.md) 把这类产品切片完成后再抽成 docs、skill 或书稿卡片。

一句话复盘：**凡是用户以后会回看的事实，都要保存当时能解释它的最小快照；当前配置只能解释现在和未来，不能重写过去。**
