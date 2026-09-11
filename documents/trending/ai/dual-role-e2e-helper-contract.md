---
title: 双角色 E2E Helper 契约
icon: vial

index: true
order: 99

---

# 双角色 E2E Helper 契约

当同一条用户入口需要覆盖学生、家长、管理员等多个角色时，端到端测试很容易复制三份“点击入口、等待页面、断言区域可见”的代码。复制能快速补洞，但一旦锚点、按钮文案或移动端入口改变，所有用例都会一起漂移。

<!-- more -->

这张卡用于把“同一入口、多角色预期”的 E2E 断言压成可复用 helper：入口动作只写一次，角色差异只保留在契约参数里，让测试既覆盖真实路径，又不会变成维护负担。

## 适用信号

优先抽取 E2E helper，通常满足这些条件：

- 同一页面入口在 desktop / mobile 上选择器不同，但业务语义相同，例如侧边栏 profile 与移动端 role pill。
- 多个角色会进入同一目标区域，但断言不同：学生看到只读提示，家长看到保存按钮。
- 已有 E2E 路径证明真实点击和 viewport 行为，不再只是 helper 单测或静态渲染。
- 三个以上用例重复同一组 locator、scroll/viewport、文案或按钮可用性断言。

暂时不要抽取的情况：

- 入口仍在快速探索，抽 helper 会隐藏失败上下文。
- 各角色路径其实不是同一行为，只是碰巧落到同一个页面。
- 用例还没有稳定通过，应该先固定最小失败证据，再重构测试结构。

## 契约拆分

把 helper 分成两类：

1. **动作 helper**：只表达“用户怎样进入目标区域”，例如 `openProfileShortcut(page, projectName)`。
2. **断言 helper**：只表达“目标区域在这个角色下应该满足什么”，例如 `expectLearningProfileSection(page, { readonly: true })`。

不要把角色切换、入口点击、区域定位、按钮断言全部塞进一个黑盒 helper。动作和断言分开后，失败时仍能看出是入口坏了、锚点坏了，还是角色权限坏了。

## Playwright 示例

```js
async function openProfileShortcut(page, projectName) {
  if (projectName === "mobile") {
    await page.getByRole("button", { name: /学生|家长/ }).click();
    return;
  }

  await page.locator(".sidebar-profile").click();
}

async function expectLearningProfileSection(page, options = {}) {
  const { readonly = false } = options;
  const section = page.locator("#learning-profile-settings");

  await expect(section).toBeInViewport();

  if (readonly) {
    await expect(section).toContainText("当前页面不会保存学习资料变更");
    await expect(section.getByRole("button", { name: "保存学习资料" })).toHaveCount(0);
  } else {
    await expect(section).not.toContainText("当前页面不会保存学习资料变更");
    await expect(section.getByRole("button", { name: "保存学习资料" })).toBeEnabled();
  }
}
```

用例只保留业务意图：

```js
test("student profile shortcut opens readonly learning-profile settings", async ({ page }, testInfo) => {
  await openProfileShortcut(page, testInfo.project.name);
  await expectLearningProfileSection(page, { readonly: true });
});

test("parent profile shortcut opens editable learning-profile settings", async ({ page }, testInfo) => {
  await page.getByRole("button", { name: "家长视角" }).click();
  await openProfileShortcut(page, testInfo.project.name);
  await expectLearningProfileSection(page, { readonly: false });
});
```

## 验证梯

1. 先只跑受影响的 E2E grep，覆盖所有 viewport project，例如 desktop 与 mobile。
2. 跑同入口相关的单元测试或组件测试，确认 helper 化没有掩盖导出、文案或状态分支问题。
3. 跑 TypeScript / lint / build 等项目最低 release proof。
4. 跑 `git diff --check -- <owned e2e file>`，避免测试重构带入空白噪音。
5. 提交前检查 `git status --short`，只纳入本轮 helper 化文件。

## 常见坑

- **helper 过度抽象**：如果 helper 名字只能叫 `setupHappyPathAndAssertEverything`，说明职责太大。
- **隐藏角色语义**：用布尔值可以，但调用处必须读得出业务含义；必要时用 `{ mode: "readonly" | "editable" }`。
- **只抽动作不抽断言**：入口 helper 统一了点击，但断言仍散落时，锚点和文案漂移仍会重复维护。
- **跳过真实路径证明**：这张卡建立在已有 E2E runner 上；如果只有 helper 单测，仍需另写“未证明的真实路径”。

## 接力记录模板

```text
E2E helperized: <action helper> + <assertion helper>
Covered roles: <student readonly / parent editable / ...>
Covered projects: <desktop / mobile / ...>
Proof: <command + passed count>
Still separate: <not-yet-covered entry or role>
```

这类 helper 的目标不是让测试更“聪明”，而是把多角色产品契约固定在一个可维护的位置：入口行为改变时只修动作，权限语义改变时只修断言。
