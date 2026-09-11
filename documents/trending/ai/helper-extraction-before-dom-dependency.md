---
title: Helper Extraction Before DOM Dependency
icon: flask

index: true
order: 99

---

# Helper Extraction Before DOM Dependency

当一个前端行为只差“真实 DOM 环境”才能测试时，第一反应往往是引入 `jsdom`、Testing Library 或端到端测试。但如果本轮目标只是固定一个很窄的副作用契约，先把副作用入口抽成 helper，通常能用现有 runner 交付更小、更稳的验证。

<!-- more -->

这张卡适合 agent 在 clean repo 中推进小步前端改动：既不逃避行为验证，也不为了一个锚点、滚动、URL 组装或 analytics 事件扩大依赖面。

## 适用信号

优先考虑 helper extraction，而不是马上加 DOM 依赖，通常满足这些条件：

- 真实行为的核心是“选择目标 + 调用一个浏览器 API”，例如 `getElementById(...).scrollIntoView(...)`、`history.pushState(...)`、`localStorage.setItem(...)`。
- 现有测试环境已经能跑 TypeScript / Vitest / node 单测，但没有 DOM renderer。
- 本轮要验证的是参数、目标 id、空目标时不抛错、调用顺序，而不是用户点击后的视觉布局。
- 依赖升级、lockfile 改动或 E2E 启动成本会明显大于业务改动本身。

不适合用这个策略的情况：

- 行为依赖 layout、focus trap、实际可见性、滚动位置或浏览器兼容差异。
- 需要验证 React effect 与真实组件生命周期的交互，例如 strict mode 双调用、portal、transition。
- 已有可靠的 DOM/E2E 测试入口，且本轮改动会影响用户关键路径。

## 改动模板

把浏览器对象作为窄接口注入，默认仍使用真实环境：

```ts
export const TARGET_SECTION_ID = "learning-profile-settings";

export function scrollToTargetSection(
  ownerDocument: Pick<Document, "getElementById"> = document,
) {
  ownerDocument
    .getElementById(TARGET_SECTION_ID)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
```

测试只伪造需要的最小接口：

```ts
it("scrolls to the stable section id", () => {
  const calls: ScrollIntoViewOptions[] = [];
  const ownerDocument = {
    getElementById(id: string) {
      expect(id).toBe(TARGET_SECTION_ID);
      return {
        scrollIntoView(options?: boolean | ScrollIntoViewOptions) {
          calls.push(options as ScrollIntoViewOptions);
        },
      } as HTMLElement;
    },
  } satisfies Pick<Document, "getElementById">;

  scrollToTargetSection(ownerDocument);

  expect(calls).toEqual([{ behavior: "smooth", block: "start" }]);
});
```

## 验证梯

1. 跑目标 helper 所在文件的窄单测，确认参数契约被固定。
2. 跑同一组件或入口的既有测试，确认抽 helper 没破坏导出和静态渲染。
3. 跑 TypeScript check，确认注入接口没有把 DOM 类型污染到非 DOM 包。
4. 跑 build 或项目规定的最低 release proof。
5. 跑 `git diff --check -- <owned paths>`，再检查 `git status --short`，确保只提交本轮 owned path。

如果第 1 步通过但第 3/4 步失败，记录失败位置并先修复真实类型或打包问题；不要把 helper 单测当作完整行为证明。

## 何时升级到 DOM/E2E

helper extraction 是第一块，不是终点。出现下面任一信号时，下一段应升级：

- 用户路径要求验证“点击入口后页面真的滚到目标区域”。
- 辅助功能要求验证 focus、`aria-describedby`、可见 label 或键盘顺序。
- 浏览器 API 被多处复用，helper 参数仍然无法表达真实交互。
- 组件重构后 helper 测试绿，但人工复核发现页面没有挂载对应 id。

接力记录可以这样写：

```text
Helper contract fixed: <helper name + target id/options>
Narrow proof: <test command + result>
Still unproven: <real DOM path / visual path / accessibility path>
Next upgrade: DOM unit / Playwright / manual visual QA
Owned paths: <files>
```

这个策略的价值在于把“暂时不引入 DOM 依赖”变成一个可复核的中间证据，而不是把未验证行为包装成已经完成。
