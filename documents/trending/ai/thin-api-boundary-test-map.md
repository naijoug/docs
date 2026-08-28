---
title: 薄 API 边界测试地图
icon: route

index: true
order: 92

---

# 薄 API 边界测试地图

AI 结对补 controller、route handler、middleware 这类薄 API 层测试时，常见误区是重复 integration happy path：接口本来已经能返回 200，却又写一组只验证 200 的 mock 单测。薄层测试真正有价值的地方，是把“不会被 happy path 自动证明”的边界语义锁住：短路、校验失败、资源不存在、冲突、错误转发、结构化失败 payload，以及是否把参数正确传给下游 service。

<!-- more -->

这张地图来自一次连续补强 `news/backend` crawler 与平台 API 的切片：先补 `cache`、`timeout`、`validation` 中间件，再补 `CrawlerController` 和 `PlatformController`。它的目标不是让每个 controller 都有同等数量的单测，而是帮助下一轮 agent 判断：哪些薄层分支值得独立测试，哪些已经被 integration 覆盖，应该停止。

## 适用场景

- route/controller/middleware 本身逻辑很薄，但承担了 HTTP 状态码、错误结构、参数组装或生命周期短路。
- integration test 已覆盖部分 happy path，但没有覆盖错误转发、冲突、not found、headers sent、缓存命中等语义。
- 你能用 mock request/response/next 或 mock service/repository 黑盒验证，不需要真实数据库、网络、浏览器或长时间 sleep。
- 当前 repo clean，或本轮能明确只接管新增测试文件与少量索引文档。

不适用：生产行为还没稳定、测试必须 mock 被测对象内部私有方法、或你只是为了提高覆盖率而复制已有 integration 断言。那时先用 [解析链路测试优先级梯](parser-layer-test-ladder.md) 判断是否应该转到更外层或更纯的边界。

## 优先测试的 6 类薄层语义

| 优先级 | 语义 | 典型断言 | 可接受 mock | 停止条件 |
| --- | --- | --- | --- | --- |
| 1 | 短路与重入 | `409`、`304`、`headersSent` 后不重复写响应、不调用下游 | scheduler/service 状态方法、mock response | integration 已直接覆盖相同短路且无新增副作用 |
| 2 | 参数校验 | 空 body、非法 id、枚举值、数组/非 string query、分页边界 | mock request/response/next | schema/validator 纯函数已有完整测试，controller 只是转发 |
| 3 | not found / conflict | missing 资源返回 `404`，重复 id 返回 `409`，且不写库 | repository/service | 需要真实 DB 事务才能证明时转 integration |
| 4 | 错误转发 | 下游 reject 时调用 `next(error)`，不吞异常、不伪造成功 | repository/service/factory | 只是在断言 mock 被调用，没有 HTTP 语义 |
| 5 | 结构化失败 payload | 外部 crawler/test 失败仍返回 `success: false` 和诊断信息 | factory/crawler 公开方法 | 失败语义属于更底层 service，应转到底层测 |
| 6 | 参数组装与传递 | `enabledOnly`、过滤条件、分页、排序参数正确传给 service | service/repository | integration 已覆盖请求到响应且参数无业务转换 |

薄层测试的价值排序可以简化成一句话：**先测会改变控制流或错误语义的分支，再测参数传递；只重复 200 happy path 时停止。**

## 执行步骤

### 1. 先列出 integration 已覆盖什么

写测试前先读已有 `api.test.ts`、route e2e 或 request-level 测试，用三列判断：

```text
Endpoint / middleware -> 已覆盖 happy path -> 未覆盖错误语义
```

例如：

- `GET /platforms` 已覆盖返回列表；直接 controller 单测只需要补 `enabledOnly` 参数传递和 repository reject 的 `next(error)`。
- `POST /platforms` 如果 integration 没覆盖重复 id，controller 单测可以补 `409` 和“不调用 create”。
- cache middleware 如果 integration 只看 200，则单测补 `ETag`、`If-None-Match`、非 GET 不缓存和失败响应不缓存。

### 2. 每个测试块只证明一个薄层契约

推荐按行为命名，而不是按方法名堆 happy path：

```text
returns 409 without starting a second crawl
passes enabledOnly=true to repository
forwards repository errors to next
returns structured crawler failure payload
skips writing timeout response after headers were sent
```

如果一个断言需要同时 mock repository、factory、clock、HTTP client 和内部 helper，说明它已经不是薄层测试；先收窄成更小的 service 纯函数测试，或上移到 request-level integration。

### 3. 保留聚焦与全量 proof

Node/Express 类项目的一轮最小 proof 可以写成：

```bash
npx prettier --write backend/src/__tests__/<target>.test.ts
npm test --workspace=backend -- <target>
npm run type-check
npm run lint
npm test
git diff --check -- backend/src/__tests__/<target>.test.ts
```

如果是其他技术栈，替换成对应的 formatter、聚焦测试、类型/静态检查、全量测试和 whitespace check。notebook 或 PR 描述里只写真实命令结果，不写“应该通过”。

## Mock 边界

可接受：

- controller mock service/repository/scheduler，只验证 HTTP 响应、参数、错误转发。
- middleware mock request/response/next，只验证是否短路、是否设置 header/status/body。
- 外部 crawler 或 SDK mock 公开方法，用来证明 controller 的结构化失败 payload。

危险信号：

- mock 被测 controller/middleware 自己的内部 helper，再断言 helper 被调用。
- 为了让单测通过修改生产错误文案，而不是修测试 fixture。
- 每个测试都返回 200，只是替换了不同 mock 数据。
- 单测覆盖率上升，但 notebook 里写不出“这个分支防什么真实回归”。

遇到危险信号时，写 `Decision: Stop or Narrow`：停止为同层堆测试，或转向更底层的 validator/utility。

## Handoff 模板

```text
Thin boundary: <controller | middleware | route handler>
Existing integration coverage: <已覆盖的 happy path 或 request-level 断言>
New semantics covered: <409/404/304/next(error)/headersSent/validation/payload/param mapping>
Files changed: <相对路径>
Focused proof: <命令 + 结果>
Full proof: <命令 + 结果>
Stop condition: <下一次何时不再补同类 controller 测试>
```

这个模板适合写进 `summaries/hermes/YYYY-MM-DD.md`、PR 描述或接力 issue。核心是让下一轮知道“为什么这组薄层测试不是重复 integration”。

## 与现有资产的关系

- 用 [解析链路测试优先级梯](parser-layer-test-ladder.md) 判断薄 controller 是否是当前最合适的一层；如果上游 config/factory/scheduler/parser utility 还没测，优先补真实风险更大的层。
- 用 [测试契约先数据化再扩分支](test-contract-decision-table.md) 把大量 query/body 校验整理成表驱动 case，避免复制粘贴断言。
- 用 [测试 Fixture 失败语义化](test-fixture-failure-semantics.md) 让失败输出暴露是 fixture、断言、环境还是业务错误。
- 用 [下一条安全命令梯](next-safe-command-ladder.md) 把“继续补 controller 测试”改写成具体的下一条命令和停止条件。

当薄 API 测试已经覆盖短路、校验、404/409、错误转发和结构化失败语义后，下一次不要继续机械补 happy path。更好的动作是回到 integration 层做一条端到端风险验证，或把这次取舍沉淀为书稿/技能，而不是堆重复 mock。