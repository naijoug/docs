---
title: Spec Drawer E2E Acceptance Contract
icon: clipboard-check

index: true
order: 99

---

# Spec Drawer E2E Acceptance Contract

当一个开发工作台展示题型、Agent 工具、插件或发布流程时，右侧规格抽屉经常会同时承载“素材需求、平台状态、开放缺口、设计来源”。如果端到端测试只验证主预览能打开，就会漏掉最重要的交接信息：后来者不知道这个 demo 到底缺音频、缺小程序实现，还是已经可上线。

<!-- more -->

这张卡用于把规格抽屉写成 E2E 验收契约：不要只测页面存在，而要测每个会影响后续决策的字段都能被用户看见，并且字段值来自同一份设计规格。

## 适用信号

优先补规格抽屉 E2E，通常满足这些条件：

- 页面是开发/审查工作台，而不是普通终端用户流程。
- 主预览可以渲染，但真实上线还依赖素材授权、平台适配或待实现组件。
- 抽屉里有 `media`、`readiness`、`open gaps`、`source doc` 等字段；这些字段决定下一块工作怎么排。
- 已经有专用 Playwright config 或 lab runner，可以在不打业务 API 的情况下跑本地演示。
- 失败时需要告诉接手者“缺什么”，而不是只留下截图或口头说明。

暂时不要补的情况：

- 抽屉字段仍在快速改名，先固定数据模型或 fixture 更重要。
- 页面还没有稳定的本地 runner，E2E 会把环境问题和规格问题混在一起。
- 字段只重复页面标题，没有独立决策价值。

## 契约字段

一条规格抽屉 E2E 至少覆盖四类字段：

| 字段 | 验收问题 | 示例断言 |
| --- | --- | --- |
| 规格身份 | 用户能否确认当前看的就是目标设计？ | `des-listen-picture-default` 可见 |
| 素材需求 | 是否明确音频、图片、录音、摄像头等依赖？ | `音频: stimulus-required`、`图像: required` |
| 平台状态 | Web / 小程序 / 原生端的 readiness 是否分开？ | `Web: partial`、`小程序: not-implemented` |
| 开放缺口 | 未完成原因是否可交接？ | `正版课本听力录音未授权接入` |
| 来源文档 | 后续修改能否回到设计依据？ | `docs/design/.../listen-and-choose-picture.md` |

不要只断言“抽屉打开”。抽屉打开只能证明容器存在，不能证明里面的决策信息完整。

## Playwright 模板

```js
test("surfaces media requirements and open gaps in the spec drawer", async ({ page }) => {
  await page.goto("/activity-lab.html?id=des-listen-picture-default");
  await expect(page.locator('[data-testid="activity-lab-root"]')).toBeVisible();

  const specDrawer = page.getByRole("complementary", { name: "设计规格与审查面板" });
  await expect(specDrawer.getByRole("heading", { name: "设计规格卡 (Spec Details)" })).toBeVisible();

  await expect(specDrawer.getByText("des-listen-picture-default")).toBeVisible();
  await expect(specDrawer.getByText("音频: stimulus-required")).toBeVisible();
  await expect(specDrawer.getByText("图像: required")).toBeVisible();
  await expect(specDrawer.getByText("Web: partial")).toBeVisible();
  await expect(specDrawer.getByText("小程序: not-implemented")).toBeVisible();
  await expect(specDrawer.getByText("正版课本听力录音未授权接入")).toBeVisible();
  await expect(specDrawer.getByText("docs/design/learning-activities/english/listen-and-choose-picture.md")).toBeVisible();
});
```

如果同一抽屉要覆盖多个题型，不要一开始就参数化所有字段。先选择一个“素材需求最多、平台状态不全、缺口最明确”的样本，证明契约形状；第二个样本出现重复后再抽 helper。

## 验证梯

1. 先跑专用 E2E grep，覆盖目标样本和所有 viewport project。
2. 如果页面有专用 lab config，显式使用 `--config <lab-config>`，不要依赖默认 Playwright config 自动发现。
3. 跑项目最低静态检查，例如 TypeScript check 或组件测试，确认测试引用的字段没有和类型契约漂移。
4. 跑生产 build 或 lab build，确认抽屉字段不会只在 dev server 下存在。
5. 跑 `git diff --check -- <owned files>`，提交前再用 `git status --short` 确认没有把 QA artifacts 或不相关 dirty path 混入。

## 常见坑

- **只测 happy preview**：题型能渲染不代表素材、授权、平台缺口已经可交接。
- **把缺口藏在 fixture 名称里**：`listen-picture` 不能替代“音频缺省状态”的显式文案。
- **平台状态合并成一句话**：Web partial 和小程序 not-implemented 是两个不同下一步。
- **忘记来源文档**：没有 source doc，后续改 UI 时很难判断是修 bug 还是改设计。
- **误用默认 runner**：多 Playwright config 的 repo 中，默认 runner 可能返回 `No tests found`；这也是验收记录的一部分。

## 接力记录模板

```text
Spec drawer contract added: <sample id>
Fields covered: <identity / media / platform readiness / open gaps / source doc>
Proof: <lab e2e command + passed count>
Not covered yet: <next sample or missing platform>
Next safe slice: <helper extraction / second sample / fixture schema check>
```

规格抽屉 E2E 的目标不是把每个文案锁死，而是把“谁能继续做下一块、还缺什么证据、哪个平台未完成”固定成可执行契约。这样开发工作台才不会只是一个漂亮 demo，而是能指导下一轮实现的交接面板。
