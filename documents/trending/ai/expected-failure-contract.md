---
title: Expected Failure 也是交付物
icon: robot

index: false

---

在 Agent 工作流里，红灯不一定代表失败；没有解释的红灯才会阻断接力。把“预期失败”写成契约，可以避免下一轮 Agent 为了追求全绿而放宽门禁、跳过授权、或把 draft 阶段误判为 release 阶段。

<!-- more -->

## 适用场景

- 内容、发布、合规、权限、覆盖率等门禁在早期阶段应该失败，但失败原因必须可解释。
- 本轮只推进一个 draft、测试夹具、迁移生成器、审查模板或局部 parser，不打算完成全量上线。
- CI / 本地脚本会同时包含轻量结构校验和重量 release gate，容易被下一轮误修。
- 需要把“我知道这里还是红的”交给人或另一个 Agent，而不是只写一句未完成。

不适用：失败来自语法错误、断链、测试 flake、环境缺依赖或真实回归；这些不是 expected failure，应先修复或隔离。

## 核心原则

> Expected failure 的交付标准不是“允许失败”，而是“失败原因稳定、边界明确、下一条安全命令清楚”。

一条可接力的 expected failure contract 至少包含五个字段：

| 字段 | 写什么 | 不要写什么 |
|---|---|---|
| Scope | 哪个命令、哪个文件、哪个 gate 预计失败 | “还有一些测试没过” |
| Reason | 失败对应的真实缺口：覆盖不足、审核未完成、授权未给、fixture 故意缺字段 | “暂时不用管” |
| Allowed signal | 可接受的 exit code、错误关键词、缺口数量或失败用例名 | 任意红灯都算预期 |
| Stop signal | 哪些变化说明不再是预期失败，需要停下来修 | 没有停止条件 |
| Next safe command | 下一轮先跑哪条命令确认边界仍成立 | 直接跑完整发布或改 gate |

## 执行切片

1. **先跑绿灯校验**：结构、lint、单元测试或 markdown proof 必须先通过，证明本轮基础改动没有破坏。
2. **再跑预期红灯**：执行 release、coverage、权限或合规 gate，记录 exit code 与关键输出。
3. **写 contract**：把红灯压缩成 `Scope / Reason / Allowed signal / Stop signal / Next safe command`。
4. **不改 gate 追绿**：如果红灯符合 contract，本轮停止；不要为了提交漂亮结果放宽阈值。
5. **下一轮先复核 contract**：如果失败形态变化，先更新判断；如果变绿，再说明满足了哪些条件。

## Handoff 模板

```text
Expected failure contract:
- Scope: <command / gate / file>
- Reason: <why this should still fail now>
- Allowed signal: <exit code / error keyword / missing count>
- Stop signal: <what would make this unexpected>
- Next safe command: <one command to re-check before editing>

Green proof already passed:
- <command>: <key output>
```

## 示例：内容 draft 阶段

```text
Expected failure contract:
- Scope: pnpm content:coverage:release
- Reason: 本轮只新增 `draft` material，未补完整单元覆盖、审核状态和发布开关。
- Allowed signal: exit 1；输出包含 missing released coverage 或 releaseReady false。
- Stop signal: validator 失败、重复 sortOrder、缺 source/rights，或 release gate 报 schema error。
- Next safe command: pnpm content:validate && pnpm content:coverage:release

Green proof already passed:
- pnpm content:validate: draft manifest schema ok
```

这类 contract 可以和 [Draft Manifest 先于 Release Gate](draft-manifest-before-release-gate.md) 配套使用：前者说明为什么 release gate 仍红，后者说明 draft manifest 应该先证明哪些结构事实。

## 常见反例

- **把 unknown failure 标成 expected**：没有稳定关键词、exit code 或缺口数量时，不能写 expected。
- **只记录失败不记录绿灯**：没有先证明基础校验通过，红灯可能只是语法或结构破损。
- **停止条件缺失**：下一轮无法判断失败形态变化，只能重做全部调查。
- **为了避免解释而跳过命令**：未实际运行的门禁不能写成 expected failure。
- **把 expected failure 留在最终发布前**：进入 release 阶段后，contract 应被关闭或转成明确 blocker。

## 检查清单

- [ ] 至少有一个 green proof 已通过。
- [ ] expected failure 的命令、exit code 或关键输出已实际记录。
- [ ] contract 写清 allowed signal 和 stop signal。
- [ ] 没有修改 gate 阈值来制造通过。
- [ ] notebook / PR / handoff 中有下一条安全命令。
