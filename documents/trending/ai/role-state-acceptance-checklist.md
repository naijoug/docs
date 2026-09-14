---
title: Role State Acceptance Checklist
icon: universal-access

index: true
order: 102

---

# Role State Acceptance Checklist

AI agent 很容易把“按钮能点击、class 会变色”误当成交互已经完成。Role State Acceptance Checklist 用来把组件的视觉选中态、辅助技术语义和 E2E 断言收束到同一张表，避免只靠 CSS locator 验收。

<!-- more -->

## 适用信号

看到下面任一信号时，优先补 role/ARIA 状态，再写或改 E2E：

- 组件里有 `selected`、`active`、`checked`、`current`、`filled` 等视觉 class，但没有 `aria-pressed`、`aria-checked`、`aria-selected` 或原生表单状态。
- Playwright / Testing Library 测试使用 `.selected`、`:nth-child()`、`.active` 断言当前状态。
- 交互是单选、多选、开关、标签页、模式切换、步骤选择、候选项选择或可切换工具按钮。
- 设计说明要求键盘、读屏或移动端双视口验收，但测试只能证明“点击后页面没崩”。

这类问题通常不是大重构，而是把已经存在的状态显式暴露出来：视觉 class 继续负责样式，role/ARIA 负责语义，测试从语义入口验证。

## 选择语义

先按交互意图选择语义，不要所有按钮都加 `aria-pressed`。

| 交互意图 | 推荐语义 | 适合场景 | 测试入口 |
| --- | --- | --- | --- |
| 多个选项中只能选一个答案 | `radiogroup` + `radio` + `aria-checked` | 单选题、图片选项、互斥选择 | `getByRole("radio", { checked: true })` |
| 一个按钮在开/关之间切换 | `button` + `aria-pressed` | 筛选 chip、模式切换、标记点、可多选卡片 | `getByRole("button", { pressed: true })` |
| 标签页切换当前面板 | `tablist` + `tab` + `aria-selected` | 顶部 Tab、配置面板 | `getByRole("tab", { selected: true })` |
| 表单布尔值 | 原生 `checkbox` / `switch` | 勾选项、设置开关 | `getByRole("checkbox", { checked: true })` |
| 当前导航位置 | `aria-current` | 导航、步骤条、面包屑 | `getByRole("link", { current: "page" })` |

如果交互本质是“执行一次动作”，不要伪造 selected 状态；只保留普通 button，并用成功提示、禁用态或状态区域表达结果。

## 最小改造步骤

1. **盘点现有状态来源**：先找 `selected` / `active` class 的条件表达式，确认状态值来自 props、state、URL 还是表单响应。
2. **选择 role/state 契约**：把“互斥答案”优先建成 radio，把“可切换按钮”建成 pressed button；不要为了测试方便牺牲语义。
3. **保留视觉 class**：先不改样式，只在同一条件上增加 ARIA 状态，降低回归风险。
4. **补窄单测**：用静态渲染或 Testing Library 锁定 markup 中的 role/state，证明组件契约存在。
5. **迁移 E2E 断言**：把 CSS/nth locator 改成 role locator，点击前后分别断言 `checked` / `pressed` / `selected`。
6. **跑最短证明链**：组件单测 + 相关 E2E + 相关构建；最后用 path-limited `git diff --check` 确认没有混入无关文件。

## 最小测试表

| 场景 | 旧断言味道 | 新断言目标 | 说明 |
| --- | --- | --- | --- |
| 单选题选择答案 | `.lesson-options .selected` | role `radio` 且 `checked: true` | 读屏可识别当前答案 |
| 筛选 chip 切换 | `.filter-chip.active` | role `button` 且 `pressed: true` | 视觉 active 与状态同步 |
| 模式切换按钮 | `.mode-button.active` | role `button` 且 `pressed: true` | 测试不依赖按钮顺序 |
| 证据句子选择 | `.sentence-item.selected` | role `button` 且 `pressed: true`，名称包含句号/序号 | 可复核选中了哪一句 |
| 图片听选 | `.picture-option-card.selected` | role `radio` 且 `checked: true` | 选项文字和图片标签一起进入可访问名称 |
| Tab 面板 | `.tab.active` | role `tab` 且 `selected: true` | 后续可补 `aria-controls` / panel 关系 |

## 常见坑

- **把 radio 写在 button 上但不设 checked**：有 role 没有状态，测试仍无法判断当前选择。
- **所有选中态都用 pressed**：单选答案会被读成多个可按压按钮，而不是互斥选项。
- **只改 E2E 不改组件**：测试继续靠 CSS 证明视觉结果，没有提升产品可访问性。
- **只改组件不改测试**：后续重构可能删掉 ARIA，旧测试仍然通过。
- **用 nth-child 代表业务含义**：题目选项、筛选项排序变化时，测试会误报或漏报。
- **缺少可访问名称**：`getByRole` 找得到元素，但用户听不到“第几句”“选项 A”“选择时”等上下文。

## Handoff 模板

```text
Interaction class: <radio / pressed-button / tab / checkbox / current-nav>
Owned paths: <本轮组件、单测、E2E 文件>
Avoided paths: <启动前 dirty 或不归属路径>
Semantic contract: <role + aria state + accessible name>
Old locator removed: <CSS/nth locator>
Proof: <组件单测 + 相关 E2E + 构建/类型检查 + git diff --check>
Next safe slice: <下一个仍只靠 selected/active class 的组件>
```

这张清单的目标是让“AI 改交互”留下可复核的产品质量证据：人看到状态，读屏读到状态，测试也从同一个状态入口验收。
