---
title: 依赖变更命令审批清单
icon: shield-halved

index: true
order: 101

---

# 依赖变更命令审批清单

当 agent 能代替人执行 shell 命令时，`npm install` 不是唯一会改变依赖和运行环境的入口。依赖变更命令审批清单把“哪些命令必须显式确认、为什么确认、如何测试不漂移”固定下来，避免前端预扫描和后端执行策略各自漏掉一类包管理器命令。

<!-- more -->

## 适用信号

看到下面任一信号时，优先把命令归入“依赖或环境变更”风险，而不是当作普通构建命令直接执行：

- 命令会修改 `package.json`、lockfile、虚拟环境、全局包、Cargo 依赖或语言运行环境。
- 命令的主语是包管理器：`npm`、`pnpm`、`yarn`、`bun`、`pip`、`pip3`、`python -m pip`、`uv`、`cargo` 等。
- 子命令表达 mutation：`add`、`install`、`ci`、`remove`、`uninstall`、`update`、`upgrade`、`sync`、`lock`。
- 命令可能经过 monorepo 选项转发，例如 `pnpm --filter web update`、`yarn workspace app add ...`。

反例也要写进测试：`npm run add-fixture`、`pnpm run update-docs` 这类脚本名包含 mutation 词，但真实子命令是 `run`，不应自动升级为依赖变更。

## 判定字段

实现审批策略时，至少让前后端共享下面这些字段；即使暂时不能共享代码，也要共享测试表。

| 字段 | 含义 | 示例 |
| --- | --- | --- |
| `raw_command` | 原始命令文本，用于日志和确认弹窗 | `pnpm --filter web update` |
| `tool` | 去掉环境变量和前置选项后的执行工具 | `pnpm` |
| `effective_subcommand` | 第一个真实 mutation 子命令 | `update` |
| `scope_hint` | monorepo workspace、包名或运行环境范围 | `--filter web` |
| `risk_type` | 统一风险类型 | `dependency_or_environment_change` |
| `severity` | 审批等级 | `medium` 或 `high` |
| `approval_message` | 给用户看的原因 | `This command can change dependencies or the runtime environment.` |
| `false_positive_guard` | 本条规则不能误伤的脚本形态 | `npm run add-fixture` |

审批弹窗不应该只显示 “command requires approval”。至少要展示风险类别、严重度和命令原文，方便用户判断是否允许。

## 最小测试表

把下面表格放进前端预扫描、后端执行策略和任何 wrapper 脚本的回归测试中：

| 命令 | 预期 | 说明 |
| --- | --- | --- |
| `npm ci` | 需要审批 | 会重建依赖树和 lockfile 对应环境 |
| `pnpm --filter web update` | 需要审批 | mutation 子命令在 workspace 选项之后 |
| `yarn add react` | 需要审批 | 直接新增依赖 |
| `bun remove left-pad` | 需要审批 | 删除依赖 |
| `python -m pip uninstall requests` | 需要审批 | mutation 子命令在 `pip` 之后 |
| `pip3 install -r requirements.txt` | 需要审批 | 改变 Python 环境 |
| `cargo add anyhow` | 需要审批 | 修改 Cargo 依赖 |
| `cargo remove anyhow` | 需要审批 | 删除 Cargo 依赖 |
| `npm run add-fixture` | 不需要审批 | mutation 词只是脚本名 |
| `pnpm run update-docs` | 不需要审批 | 真实子命令是 `run` |

如果某个工具确实允许 `run` 脚本内部执行安装命令，不要在这层猜测脚本内容；应在脚本执行前显示脚本名和 package script 内容，或让更高层的命令审查读取脚本定义。

## 实现顺序

1. **先冻结测试表**：把正例、反例和 monorepo 选项都写进 fixture，避免只按当前实现补测试。
2. **解析真实子命令**：跳过环境变量、全局选项、workspace 选项；遇到 `python -m pip` 时从 `pip` 后继续找子命令。
3. **统一风险标签**：把 `install`、`ci`、`add`、`remove`、`uninstall`、`update`、`upgrade` 映射到同一个风险类型，避免确认文案只覆盖 “install”。
4. **前后端都测**：前端预扫描负责提前提醒，后端执行策略负责最后兜底；二者任一通过都不能成为跳过审批的理由。
5. **提交前跑最短 proof**：聚焦规则测试，再跑 type/build 或执行策略测试；最后用 path-limited diff check 保证只提交本轮相关文件。

## 常见坑

- **只匹配字符串**：看到 `install` 就拦，会误伤 `npm run install-fixture`。
- **只看第一个参数**：`pnpm --filter web update` 的第一个参数是选项，不是子命令。
- **只做前端提示**：真正执行命令的后端策略仍可能漏掉 `ci`、`remove`、`uninstall`。
- **文案仍叫 install**：用户看到 “install dependency” 会低估 `remove`、`update`、`upgrade` 的影响。
- **不记录反例**：没有 false-positive guard，后续 tightening 很容易把普通脚本也变成审批噪音。

## Handoff 模板

```text
Command class: dependency_or_environment_change
Owned paths: <本轮修改的执行策略、预扫描或测试文件>
Avoided paths: <启动前 dirty 或不归属路径>
Positive fixtures: npm ci / pnpm --filter web update / python -m pip uninstall / cargo add
Negative fixtures: npm run add-fixture / pnpm run update-docs
Proof: <聚焦测试 + build/type 或后端策略测试 + git diff --check>
Next safe command: <下一轮最小验证命令>
```

这张清单的目标不是让 agent 永远不改依赖，而是把“改依赖”从隐式副作用变成可见决策：用户确认前知道风险，agent 提交前能证明前端提示和后端兜底没有漂移。
