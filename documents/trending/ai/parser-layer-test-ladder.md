---
title: 解析链路测试优先级梯
icon: vial

index: true
order: 91

---

# 解析链路测试优先级梯

AI 结对补测试时，最容易在 crawler、adapter、importer 这类链路里过度 mock：为了覆盖某个 protected parser，mock 掉网络、DOM、配置、repository 和调度器，最后测试只证明 mock 自己会返回 mock 值。更稳的做法是先沿着边界从外到内排优先级：配置校验、工厂分发、调度聚合、纯函数解析、薄 controller；只有这些都无法覆盖真实风险时，才进入带网络和 protected 方法的 crawler 测试。

<!-- more -->

这张卡来自一次连续补强 `news/backend` crawler 链路测试的切片：先覆盖 platform import，再覆盖 crawler factory、scheduler、data extractor 和 controller。它的目标不是“多写测试”，而是让下一轮 agent 能判断：当前最小测试应该落在哪一层，什么时候该停。

## 适用场景

- 一个功能链路包含配置读取、类型分发、任务调度、数据解析和 API 暴露等多层边界。
- 你想补测试，但还没确定该 mock 哪些依赖、跑哪些命令、避免哪些已有 dirty path。
- 生产 bug 或回归风险来自“链路断在某一层”，而不是单个函数算法错误。
- 当前 repo clean，适合做小步测试提交；或者只有少量可明确避开的既有 dirty path。

不适用：需求本身还没定、生产行为仍在改、测试失败原因未知，或必须接管他人未提交的大 diff 才能继续。那时先走 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 和 [AI 编程验证优先工作流](verification-first-ai-coding.md)。

## 五层优先级

| 优先级 | 边界 | 首选测试形状 | 该证明什么 | 常见停止条件 |
| --- | --- | --- | --- | --- |
| 1 | 配置导入 / schema 校验 | mock repository + 临时配置文件 | 有效配置能加载；无效配置暴露 id 和校验细节；单项失败不拖垮整批 | 需要真实 DB 或外部服务才能断言时停 |
| 2 | 工厂分发 | 构造最小平台配置 | type 到具体实现的映射正确；未知 type 有诊断错误；disabled 项被跳过 | 断言内部私有字段而非公开行为时停 |
| 3 | 调度聚合 | mock factory + repository | 空任务 no-op；成功/失败平台隔离；并发重入被拒绝；统计字段稳定 | 需要 sleep 或真实 cron 才能稳定通过时停 |
| 4 | 解析纯函数 | 直接喂 HTML、JSON、URL、日期、数字样本 | selector、JSONPath、日期/数字解析、URL 归一化等底层规则稳定 | 必须 mock protected 方法才到达函数时，优先抽纯函数 |
| 5 | 薄 controller/API | mock service/scheduler | 409 短路、成功响应、错误转发、状态响应 | integration test 已覆盖同一断言且无新增错误语义时停 |

这条顺序的核心是：先测“边界契约”，再测“实现细节”。如果某层测试只剩下确认 mock 调用了 mock，就下移到更纯的函数，或上移到更真实的 API/integration 层。

## 执行流程

### 1. 先画链路，不先写测试

用 5 行以内写出本轮链路：

```text
Input config -> factory -> scheduler -> parser utility -> controller response
```

然后给每层标一个最小风险句：

- config：坏平台配置是否能被定位？
- factory：新增 type 是否会被错误分发？
- scheduler：一个平台失败是否会拖垮全量 crawl？
- parser utility：日期、数字、URL、selector 是否会产生静默空值？
- controller：正在运行时是否会错误启动第二轮？

没有风险句的层先不测。

### 2. 每轮只接一层

一轮只新增一个测试文件或一个紧密相关的测试块，并把验证命令限制在可复核范围内：

```bash
npx prettier --write backend/src/__tests__/<target>.test.ts
npm test --workspace=backend -- <target>
npm run type-check
npm run lint
npm test
git diff --check -- backend/src/__tests__/<target>.test.ts
```

如果 repo 不是 Node 项目，把这组命令替换成对应生态的 formatter、聚焦测试、类型/静态检查、全量测试和 whitespace check。重点是保留“聚焦 -> 全量 -> diff”的证据链。

### 3. Mock 只留在边界，不吞掉风险

Mock 的可接受边界：

- repository：避免真实数据库副作用；
- factory：调度器只关心 crawler 的公开 `crawl()` 行为；
- scheduler/service：controller 只关心响应和错误转发；
- 文件系统：配置导入可用临时文件，但错误信息必须保留路径/平台 id 语义。

危险 mock 信号：

- mock 了被测对象内部方法，再断言该内部方法被调用；
- 为了覆盖分支，把 production error 改成测试专用 error；
- 测试只能在固定执行顺序或固定时钟 sleep 下通过；
- 断言的是 class 名、私有字段或实现细节，而不是外部契约。

遇到危险信号，写 `Decision: Narrow`，回到纯函数层或更外层 API 层。

## Handoff 模板

```text
Layer chosen: <config | factory | scheduler | parser utility | controller>
Risk statement: <本层要防的真实回归>
Files changed: <相对路径>
Focused proof: <命令 + 结果>
Full proof: <命令 + 结果>
Skipped layers: <为什么不测 / 下一次何时再测>
Next safe test: <下一层最小测试或停止条件>
```

这个模板适合写进 notebook、PR 描述或 issue 接力。不要复制完整测试代码，只写层级、风险和 proof。

## 反例

| 反例 | 问题 | 更好的动作 |
| --- | --- | --- |
| 先测具体 crawler 的 protected parser | 需要绕开封装，mock 过深 | 先测解析纯函数或公开 crawl contract |
| 为了覆盖 scheduler，启动真实 cron 并 sleep | 慢且不稳定 | mock crawler，直接调用 `runNow()` 或等价公开方法 |
| controller test 重复 integration happy path | 增量低 | 只补 409、`next(error)`、状态布尔值这类薄层语义 |
| 一个提交同时补 config、factory、scheduler、parser | 失败时难定位 | 每轮一层，验证通过后再接下一层 |
| notebook 写“已增加大量测试” | 无法接手 | 写清测试数量、命令、文件和 commit |

## 与现有资产的关系

- 用 [从项目实现到可复用资产](project-implementation-to-reusable-asset.md) 判断测试切片是否已经足够沉淀。
- 用 [下一条安全命令梯](next-safe-command-ladder.md) 把“继续补测试”改成具体层级、命令和停止条件。
- 用 [测试 Fixture 失败语义化](test-fixture-failure-semantics.md) 优化测试失败输出，让下一轮能区分 fixture、断言、环境和业务错误。
- 用 [Monorepo 测试入口漂移检查](monorepo-test-entrypoint-drift.md) 确认聚焦测试、workspace test、根级 test 没有入口漂移。

当连续几轮都能沿着这张梯子新增低 mock、可验证的测试时，可以继续工程质量推进；当只剩下重复 controller happy path 或 protected 方法绕行时，停止堆测试，转向文档、技能或真实用户反馈。
