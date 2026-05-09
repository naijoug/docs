---
title: AI 编程上下文工程实战指南
icon: code

index: true
order: 22

---

# AI 编程上下文工程实战指南

2026 年的 AI 编程已经从“写一段提示词让模型补代码”，进入“给 Agent 一套可执行上下文，让它稳定交付代码变更”的阶段。真正拉开差距的不是谁会一句神奇 Prompt，而是谁能把需求、代码约定、测试命令、权限边界、验收标准和历史决策组织成一套可复用的 **Context Engineering（上下文工程）**。

<!-- more -->

## 1. 什么是上下文工程

上下文工程不是把更多内容塞进模型窗口，而是有选择地告诉 AI：

1. **要做什么**：目标、用户价值、非目标；
2. **在哪里做**：相关模块、文件、接口、数据结构；
3. **按什么规矩做**：编码规范、架构原则、命名风格、安全红线；
4. **怎样算完成**：测试、构建、人工验收标准；
5. **哪些不能碰**：生产配置、数据迁移、凭据、无关重构、外部副作用。

一句话：**Prompt 是一次对话的指令，上下文工程是让 AI 在一个项目里持续正确工作的环境设计。**

## 2. 为什么 2026 年必须重视它

2026 年主流 AI 编程工具出现了三个明显变化：

- **从补全到代理**：Cursor、Windsurf、Claude Code、Codex CLI、GitHub Copilot coding agent 等工具不再只补全函数，而是会读仓库、改文件、跑测试、修复失败。
- **从单轮问答到任务循环**：Agent 会在“计划 → 修改 → 验证 → 再修改”的循环里工作，错误上下文会被放大成连续错误。
- **从个人技巧到团队规范**：越来越多项目开始维护 `AGENTS.md`、`.github/copilot-instructions.md`、Cursor Rules、任务模板、Spec 文档，让 AI 和人遵守同一套工程约定。

这意味着：如果上下文缺失，AI 会很快；但它很快地走错方向。如果上下文设计得好，AI 才可能变成稳定的工程生产力。

## 3. 上下文的四层结构

### 3.1 仓库级上下文：让 Agent 先懂项目

仓库级上下文适合放在 `AGENTS.md`、`README.md`、`.github/copilot-instructions.md`、`.cursor/rules` 等固定位置。核心内容包括：

| 内容 | 应写什么 | 不应写什么 |
| --- | --- | --- |
| 项目概览 | 项目目标、技术栈、主要目录 | 公司宣传口号 |
| 常用命令 | 安装、测试、构建、格式化、类型检查 | 过期命令、只在某人机器可用的命令 |
| 架构约定 | 分层方式、模块边界、依赖方向 | 大段抽象理念 |
| 代码风格 | 命名、错误处理、日志、测试命名 | 与 linter 冲突的个人偏好 |
| 安全边界 | 禁止读取密钥、禁止改生产配置、危险命令确认 | “注意安全”这种空话 |
| PR 规范 | 变更说明、测试结果、风险提示 | 无法执行的流程口号 |

一个可直接复用的 `AGENTS.md` 模板：

```markdown
# AGENTS.md

## Project Overview
- Tech stack: [语言 / 框架 / 数据库 / 部署方式]
- Main purpose: [项目解决什么问题]
- Source root: [主要源码目录]
- Test root: [测试目录]

## Commands
- Install: `...`
- Lint: `...`
- Type check: `...`
- Unit test: `...`
- Build: `...`

## Coding Rules
- Keep changes minimal and task-scoped.
- Do not reformat unrelated files.
- Follow existing naming and error handling style.
- Add or update tests for behavior changes.

## Safety Rules
- Never read, print, or modify secrets.
- Never change production config without explicit approval.
- Never run destructive commands such as `rm -rf`, database drop, or force push.
- If a command may affect external services, stop and ask for human confirmation.

## Expected Final Response
- Summary of changed files.
- Tests or checks executed.
- Known risks and follow-up suggestions.
```

### 3.2 任务级上下文：把需求变成可交付规格

任务级上下文决定本次 Agent 能不能交付。推荐使用固定格式：

```markdown
## Task
[一句话说明要交付什么]

## Background
- 当前问题：...
- 相关路径：...
- 相关接口 / 数据结构：...

## Requirements
1. ...
2. ...
3. ...

## Non-goals
- 不做 ...
- 不改 ...

## Acceptance Criteria
- [ ] 场景 A 能通过
- [ ] 场景 B 能通过
- [ ] 已补充测试
- [ ] 已运行指定命令

## Verification Commands
- `pnpm test xxx`
- `pnpm lint`
```

低质量指令：

```text
帮我把支付模块优化一下。
```

高质量指令：

```text
任务：为支付回调增加幂等处理。

背景：
- 回调入口：src/routes/payment-webhook.ts
- 订单服务：src/services/order-service.ts
- 数据库表：payment_events

要求：
1. 同一个 provider_event_id 只能处理一次。
2. 已处理事件再次到达时返回 200，但不能重复发货。
3. 记录重复回调日志，日志中不能包含完整用户手机号或 token。
4. 补充首次回调、重复回调、异常回滚 3 类测试。

非目标：
- 不改支付 provider SDK。
- 不重构订单状态机。
- 不新增外部队列。

验收：
- 相关测试通过。
- 说明是否需要数据库唯一索引。
```

## 4. “上下文包”工作流

面对中大型需求，不要把所有材料一次丢给模型。更稳的做法是构造上下文包：

```text
探索 → 摘要 → 规格 → 实施 → 验证 → 沉淀
```

### 4.1 探索：先读，不写

第一轮只允许 Agent 阅读：

```text
请先阅读 README、AGENTS.md、相关源码和测试。
不要修改文件。
输出：
1. 当前实现路径；
2. 可能需要修改的文件；
3. 风险点；
4. 最小实现方案。
```

这一步的价值是防止 Agent 一上来就“猜架构”。

### 4.2 摘要：把噪声压缩成工作记忆

让 Agent 把探索结果压缩成 10-20 条事实：

```markdown
## Working Context
- API 入口是 ...
- 鉴权在 ... 中间件完成
- 现有错误格式是 `{ code, message }`
- 单元测试使用 ...
- 不应修改 ...
```

这个摘要可以直接复制到后续任务中，比把几十个文件全文重复塞进去更稳定。

### 4.3 规格：先定验收，再写代码

复杂功能建议先写 `spec.md` 或 issue 描述，至少包括：

- 用户故事；
- 业务规则；
- 边界情况；
- 数据变化；
- API 变化；
- 兼容性要求；
- 测试矩阵；
- 不做事项。

如果团队采用 Spec-Driven Development，可以把规格作为实现前的正式产物。GitHub Spec Kit、OpenSpec 等工具的共同思路都是：**先把需求变成可审查规格，再让 AI 根据规格实现。**

### 4.4 实施：小步提交，禁止“大爆炸修改”

推荐把 Agent 任务拆成短闭环：

1. 只补测试，不改实现；
2. 只实现最小逻辑，让测试通过；
3. 只处理边界情况；
4. 只更新文档；
5. 最后统一检查 diff。

每一步都能独立审查和回滚，避免一次生成几千行难以 Review 的代码。

### 4.5 验证：让上下文包含“怎么证明”

给 Agent 的任务里必须写清验证命令，否则它很容易只做静态解释：

```text
完成后必须运行：
1. `pnpm test payment-webhook`
2. `pnpm lint src/routes/payment-webhook.ts src/services/order-service.ts`
3. 如果命令失败，先修复与本次改动直接相关的问题；如果是历史失败，说明证据。
```

最终回复也要固定格式：

```markdown
## Changed Files
- ...

## Verification
- [x] `...` passed
- [ ] `...` failed: 原因 ...

## Risks
- ...

## Follow-up
- ...
```

## 5. 上下文工程的常见反模式

### 5.1 上下文越多越好

错误。过多上下文会引入噪声，让模型抓错重点。更好的原则是：

- 优先给相关文件，而不是全仓库；
- 优先给接口和测试，而不是历史讨论；
- 优先给当前约束，而不是过期文档；
- 长材料先摘要，再进入实现。

### 5.2 只给业务需求，不给代码约定

Agent 不知道项目习惯时，会自动套用训练数据里的常见模式，结果可能和项目风格冲突。仓库必须提供：错误处理方式、日志规范、测试风格、目录约定和依赖边界。

### 5.3 只让 AI 实现，不让 AI 验证

没有验证命令的 AI 编程，本质是“看起来完成”。每个任务都应至少包含一种自动验证：单元测试、类型检查、lint、构建、快照测试或最小手动验收步骤。

### 5.4 把敏感信息当上下文

不要把 `.env`、API key、生产数据库连接、用户隐私数据粘给 AI。需要说明配置时，用占位符和字段含义替代真实值。

### 5.5 没有禁止事项

很多 AI 错误不是“不会做”，而是“做太多”。每个任务都要写 Non-goals，例如：不重构、不改公共 API、不升级依赖、不改生产配置、不处理无关 lint。

## 6. 可复制的上下文文件体系

一个适合普通项目的结构：

```text
project/
├── AGENTS.md                         # Agent 总说明
├── README.md                         # 人类读者入口
├── docs/
│   ├── architecture.md               # 架构说明
│   ├── api-conventions.md            # API 约定
│   └── testing.md                    # 测试策略
├── .github/
│   ├── copilot-instructions.md       # Copilot 仓库指令
│   └── pull_request_template.md      # PR 验收模板
├── .cursor/
│   └── rules/                        # Cursor 规则
└── specs/
    └── feature-name.md               # 复杂需求规格
```

注意：不要为了 AI 单独维护一套与人类文档冲突的规则。最好的上下文是“人和 Agent 共用”的工程事实。

## 7. 程序员的操作清单

### 新项目初始化

- [ ] 写 `README.md`：项目目标、启动方式、目录结构；
- [ ] 写 `AGENTS.md`：命令、规则、安全边界、最终回复格式；
- [ ] 写最小测试命令；
- [ ] 建 PR 模板，要求填写测试结果；
- [ ] 把敏感配置示例化为 `.env.example`，不要暴露真实值。

### 每次交给 AI 前

- [ ] 明确任务目标；
- [ ] 列出相关文件；
- [ ] 写清非目标；
- [ ] 写清验收标准；
- [ ] 写清验证命令；
- [ ] 限定是否允许新增依赖、改 schema、改公共 API。

### AI 完成后

- [ ] 看 diff 是否超出范围；
- [ ] 检查测试是否真的运行；
- [ ] 检查错误处理和日志是否符合项目约定；
- [ ] 检查是否泄露敏感信息；
- [ ] 把本次有效的提示、规则、坑点沉淀回 `AGENTS.md` 或项目文档。

## 8. 一个完整示例：给 Agent 的任务卡

```markdown
## Task
为用户导出接口增加异步任务状态查询。

## Context
- API 目录：src/api/user-export/
- 当前同步导出入口：src/api/user-export/export.ts
- 任务表：export_jobs
- 测试目录：tests/user-export/
- 项目错误格式：`{ code: string, message: string }`

## Requirements
1. 新增 `POST /user-export/jobs` 创建导出任务。
2. 新增 `GET /user-export/jobs/:id` 查询状态。
3. 状态包括 `pending | running | success | failed`。
4. 创建任务时只返回 jobId，不直接生成文件。
5. 用户只能查询自己的任务。
6. 补充权限、状态查询、异常任务 3 类测试。

## Non-goals
- 不实现真实文件上传到对象存储。
- 不改现有同步导出接口。
- 不新增队列依赖。
- 不修改无关格式化。

## Verification
- `pnpm test tests/user-export`
- `pnpm lint src/api/user-export`

## Output Format
- 修改文件列表
- 测试结果
- 主要设计说明
- 风险与后续建议
```

这类任务卡比“帮我做一个异步导出”更长，但它能显著降低返工，因为 Agent 知道边界、知道验收，也知道哪些地方不能发挥。

## 9. 参考资料

- [AGENTS.md](https://agents.md/)：面向编码 Agent 的项目说明文件约定。
- [GitHub Spec Kit](https://github.com/github/spec-kit)：围绕规格驱动开发的 AI 编程工具包。
- [OpenSpec](https://openspec.dev/)：面向 AI Coding Assistant 的规格驱动开发实践。
- [GitHub Copilot custom instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)：仓库级 Copilot 指令。
- [Cursor Rules](https://docs.cursor.com/context/rules)：为 Cursor 提供项目规则与上下文。

## 10. 总结

AI 编程的核心能力正在从“我能不能写出一个好 Prompt”迁移到“我能不能设计一个让 Agent 稳定交付的上下文系统”。

对程序员来说，最值得马上做的不是追新工具，而是给自己的项目补齐三件东西：

1. 一份清晰的 `AGENTS.md`；
2. 一个任务卡模板；
3. 一套包含测试命令的验收流程。

有了这三件事，AI 才不只是聊天助手，而会逐渐变成可管理、可验证、可复盘的工程协作者。
