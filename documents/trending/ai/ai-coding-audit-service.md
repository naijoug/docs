---
title: AI 编程审查服务交付指南
icon: clipboard-check

index: true
order: 30

---

# AI 编程审查服务交付指南

AI 编程审查不是“帮客户把代码都改好”，而是在很小的范围内证明一件事：这个团队的 agent 工作流哪里会失控，下一条最安全的验证命令是什么，以及哪些习惯值得固化成模板。

<!-- more -->

## 为什么这是一个适合程序员的最小收入实验

很多团队已经开始让 AI 写代码，但他们真正缺的不是更多提示词，而是可信交付能力：

- agent 接手前没有记录 dirty workspace，容易混入他人改动；
- 改完只看 diff，不知道该跑哪一级验证；
- final report 写了“完成”，但没有列出跳过的检查；
- CI、构建产物、截图和 lockfile 的归属边界不清；
- 团队想引入 agent，却缺少可以复制给新人的工作流样板。

这些问题足够具体，也足够高频，适合做成一次 60-90 分钟的固定范围审查。它比直接卖一个完整工具更低风险：先用人工审查验证痛点，再决定哪些环节值得自动化。

## 固定范围 offer

| 项目 | 范围 |
| --- | --- |
| 目标买家 | 小型开发团队、文档站维护者、独立开发者、正在试用 coding agent 的产品团队 |
| 输入材料 | 一个 repo、一段最近的 agent 改动记录、可公开或可内部执行的验证命令、现有 PR/final report 模板 |
| 交付物 | 1 页风险报告、5 条优先级建议、下一条安全命令梯、一个可复用 handoff 模板 |
| 明确不做 | 不承诺修复所有代码、不接生产权限、不替代安全审计、不做泛泛 AI 工具咨询 |
| 通过信号 | 对方愿意安排复盘、提供第二个 repo、让你把建议落成 checklist，或询问持续服务价格 |

一句话版本：

> 我会只读审查你们的一次 AI 编程工作流，指出最容易造成返工或错误提交的 5 个风险点，并给出下一轮 agent 执行前必须通过的验证清单。

## 交付流程

### 1. 启动前界定边界

先确认审查对象，而不是马上读代码：

```text
repo/workflow：
最近一次 agent 改动：
包含范围：
排除范围：
可运行命令：
不能触碰的文件或分支：
```

如果客户无法提供真实 repo、失败日志、PR 或命令清单，说明当前更适合做免费内容沟通，而不是付费审查。

### 2. 建立所有权快照

只读检查的第一步是让风险显形：

```bash
git status --short
git log -1 --pretty='%h %s'
```

记录三类路径：

| 路径 | 启动状态 | 审查决策 |
| --- | --- | --- |
| `docs/...` | clean / modified / untracked | 可建议 / 避免 / 只观察 |
| `src/...` | clean / modified / untracked | 可建议 / 避免 / 只观察 |
| `scripts/...` | clean / modified / untracked | 可建议 / 避免 / 只观察 |

这一步的价值在于帮助团队理解：agent 的第一项能力不是写代码，而是别把别人的工作弄乱。

### 3. 检查验证梯是否匹配变更类型

把“是否完成”改写成“哪条命令证明了什么”：

| 变更类型 | 最小验证 | 升级验证 |
| --- | --- | --- |
| Markdown / 文档 | frontmatter、链接抽样、站点目录检查 | 文档站 build |
| UI 小改动 | typecheck、单元测试、组件 smoke | 浏览器交互 smoke、截图对比 |
| 脚本 / CLI | `--help`、dry-run、样例输入 | 临时目录端到端验证 |
| 配置 / CI | schema 检查、格式检查 | 本地等价命令或 CI dry-run |

审查报告里不要只写“建议补测试”，而要写“下一条最便宜且最有证明力的命令”。

### 4. 输出 1 页报告

建议固定成下面结构，方便复用和报价：

```markdown
# AI Coding Audit Report: [Project]

## Scope
- Reviewed:
- Included:
- Excluded:
- Evidence inspected:

## Executive Summary

## Top Risks
| Priority | Risk | Evidence | Recommended fix |
| --- | --- | --- | --- |

## Next Safe Command Ladder
1.
2.
3.

## Handoff Template
- Changed/observed files:
- Commands run:
- Skipped checks:
- Unverified items:
- Next owner action:

## Continue / Narrow / Stop
```

## 报价前的自检

在真正对外发布前，先用自己的项目做一次样板交付：

1. 选一个最近被 agent 修改过的小 repo；
2. 只审查，不改代码；
3. 记录启动状态、风险点、命令梯和未验证项；
4. 把报告压缩到 1 页；
5. 让一个真实开发者判断：看完是否知道下一步该跑什么、该改什么、该避免什么。

如果样板报告写不清楚，就不要急着自动化；先打磨交付语言和范围边界。

## 可复用资产

这类服务可以继续沉淀成三类资产：

- 内容资产：写成案例文章，展示“审查前后工作流如何变化”；
- 能力资产：固化为 `skills/skills/manual/growth/income-asset-validation/` 里的 offer builder 和样例报告；
- 产品资产：把重复出现的检查项做成 CLI、PR bot、模板包或团队 onboarding checklist。

最小收入实验的关键不是一次赚多少钱，而是验证“可信 AI 编程交付”是否有人愿意为之投入真实 repo、真实时间和真实预算。
