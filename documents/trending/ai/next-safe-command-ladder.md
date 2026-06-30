---
title: 下一条安全命令梯
icon: terminal

index: true
order: 32

---

# 下一条安全命令梯

AI 编程审查里最有价值的一句话，往往不是“代码哪里写得不好”，而是“下一步先跑哪条命令，才能用最小成本证明风险是否还在”。下一条安全命令梯就是把这种判断固定下来：先跑便宜、局部、可解释的检查，再逐级升级到更重的验证。

<!-- more -->

## 为什么不要直接全量验证

全量测试和完整构建当然重要，但它们不应该成为唯一答案。直接把问题丢给最重命令，会带来三类浪费：

| 浪费 | 表现 | 更好的做法 |
| --- | --- | --- |
| 定位慢 | 全量失败后不知道是哪类风险触发 | 先跑能定位风险类别的命令 |
| 成本高 | 每次小改都等完整 CI | 本地先跑最小可解释检查 |
| 结论虚 | final report 只写“构建失败” | 写清下一条命令证明了什么、没证明什么 |

安全命令梯的目标不是少测，而是让每一级验证都有明确理由：如果通过，下一步为什么可以升级；如果失败，为什么足够缩小问题范围。

## 四步写法

### 1. 先写变更类型

不要从命令开始，而是先说这次变更属于哪类：

```text
变更类型：文档链接 / UI 状态 / API schema / 数据迁移 / 脚本行为 / CI 配置
主要风险：
当前证据：
下一条命令：
升级条件：
停止条件：
```

同一条命令在不同变更里证明的东西不同。例如 `npm test` 对 UI 文案小改可能太重，对 reducer 行为修改则可能正好。

### 2. 选最小可解释命令

“最小”不是最短，而是能回答当前风险的最便宜证据：

| 变更类型 | 下一条安全命令 | 证明什么 | 不证明什么 |
| --- | --- | --- | --- |
| Markdown / 目录链接 | `git diff --check` + 链接目标抽样 | 没有空白错误、目标文件存在 | 站点主题渲染完全正确 |
| VuePress 文档站 | `npx -y pnpm@8.15.9 run docs:build` | 路由、frontmatter、构建链路可通过 | 内容表达一定有效 |
| React 状态逻辑 | 相关 reducer / selector 单测 | 状态分支和选择器没有明显回归 | 浏览器交互没有视觉问题 |
| CLI / 脚本 | `--help`、dry-run、小样本目录 | 参数解析和关键路径可执行 | 生产数据规模下完全可靠 |
| CI 配置 | 本地等价命令或 schema 检查 | 配置语法和关键脚本能跑 | 远端 runner 环境完全一致 |

### 3. 写升级条件

命令梯必须告诉接手者：通过之后才跑什么。否则团队会在“跑更多测试”和“现在合并”之间摇摆。

```text
1. `git diff --check` 通过：排除低级格式/冲突风险。
2. 相关单测通过：证明本轮改动触达的核心分支没坏。
3. 构建通过：证明集成链路没有被破坏。
4. 人工 smoke 通过：证明用户能完成关键路径。
```

升级条件要与风险相连，而不是机械列清单。文档改动通常从 diff/link/build 升级；交互改动通常从 typecheck/unit/smoke 升级；数据改动通常从 fixture/schema/dry-run 升级。

### 4. 写停止条件

好的命令梯也要说明什么时候别继续跑：

- 启动前 workspace 已经有未归属改动，且本轮无法确认所有权；
- 第一条命令失败，失败原因已经指向本轮改动；
- 缺少必要密钥、外部服务或生产权限，继续执行会产生副作用；
- 当前任务边界已经漂移，需要先缩小到一个可回滚切片。

停止不是放弃，而是把风险从“隐形的不确定”改成“显式的未验证项”。

## 一页模板

可以把下面模板复制到 PR、审查报告或 agent final report 里：

```markdown
## Next Safe Command Ladder

| Step | Command / check | Why this first | Pass means | Fail means |
| --- | --- | --- | --- | --- |
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |

### Stop conditions
- 

### Unverified after this ladder
- 

### Continue / Narrow / Stop
- Continue:
- Narrow:
- Stop:
```

## 示例：文档站内容改动

```markdown
## Next Safe Command Ladder

| Step | Command / check | Why this first | Pass means | Fail means |
| --- | --- | --- | --- | --- |
| 1 | `git -C docs diff --check -- documents/trending/ai/next-safe-command-ladder.md` | 先排除空白、冲突标记和 Markdown 低级错误 | 单文件 diff 基础健康 | 先修格式，不进入构建 |
| 2 | 人工检查 README 相对链接目标存在 | 本轮新增入口，最可能错在路径 | 目录入口可点击到新文档 | 先修链接或文件名 |
| 3 | `cd docs/web/vuepress && npx -y pnpm@8.15.9 run docs:build` | 最后验证 VuePress 集成链路 | frontmatter、路由和站点构建可通过 | 记录真实 warning/error，再决定是否 Narrow |

### Stop conditions
- `docs/` 启动前不是 clean，且新增文件会混入他人改动；
- build 失败来自既有 warning 以外的新 broken link 或 frontmatter 错误。

### Unverified after this ladder
- 没有真实读者反馈；
- 没有验证这篇文章是否能带来样本请求。

### Continue / Narrow / Stop
- Continue: 读者能按模板写出自己的 3 级命令梯；
- Narrow: 读者只关心 dirty workspace 或 PR handoff，则下一篇只写该单点；
- Stop: 只有泛泛点赞，没有人提供真实改动场景。
```

## 原则读法：命令梯不是测试清单

安全命令梯和普通测试清单的差别，不在于命令数量，而在于每条命令是否回答当前最大的未知风险。写审查意见时，可以先用三句话判断它是不是“命令梯”：

1. **它从风险开始**：先说明当前最可能出错的是所有权、状态分支、数据迁移、外部契约还是发布链路，而不是先列 `lint / test / build`。
2. **它解释每一级结论**：每条命令都写清 `Pass means` 和 `Fail means`，让接手者知道通过后为什么升级、失败后为什么 Narrow。
3. **它有停止条件**：当第一条命令已经定位问题、workspace 归属不清或继续验证需要外部权限时，停止并交接未验证项，而不是为了显得完整继续跑重命令。

如果一份审查报告只写“再跑一遍测试”，它给的是任务清单；如果它写清“先跑哪条、为什么、通过/失败分别改变什么决定”，它才是下一条安全命令梯。

## 审查时的判断句

给客户或团队反馈时，尽量用这种句式：

> 我不建议现在直接跑全量 CI。先跑 `git diff --check` 和这个模块的 focused test，因为当前最大风险是 agent 混入了不该改的文件，以及 reducer 的一个状态分支没有被覆盖。如果这两步通过，再升级到 build；如果第一步失败，本轮先 Narrow 到所有权和格式问题。

这句话比“建议补测试”更可执行，因为它同时说明了风险、命令、顺序和分叉条件。

## 接回 AI 编程审查

在 [AI 编程审查服务交付指南](ai-coding-audit-service.md) 里，“下一条安全命令梯”是最容易产品化的交付物之一。它可以被复用到：

- [AI 生成 PR 的最小审查入口](ai-generated-pr-review-entry.md)：让 reviewer 先看证据链，而不是先争代码风格；
- [AI 编程验证优先工作流](verification-first-ai-coding.md)：把“验证优先”落成具体命令顺序；
- [AI 编程审查样板报告](ai-coding-audit-mock-report.md)：把审查结论压缩成一页可复核报告。

如果真实反馈集中在“我不知道下一步该跑什么”，就不要继续扩写完整咨询服务。先把命令梯做成模板、CLI checklist 或 PR bot，再决定是否扩大为完整 offer。
