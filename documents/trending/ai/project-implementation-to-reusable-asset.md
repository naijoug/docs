---
title: 从项目实现到可复用资产
icon: recycle

index: true
order: 46

---

# 从项目实现到可复用资产

AI 时代的程序员不只要把一个功能做完，还要把做功能时形成的判断、边界、验证命令和失败条件沉淀成下一次能复用的资产。否则每次和 agent 协作都会重新解释上下文、重新踩同样的坑。

<!-- more -->

这页给出一个轻量流程：先完成真实项目切片，再从可复核证据里提取文档、技能、脚本或书稿卡片。它不是“写总结”的流程，而是“减少下一次决策成本”的流程。

## 适用场景

- 一个功能、文档或实验已经有真实改动和验证结果。
- 同一类取舍在 notebook、PR、issue 或 review 中重复出现。
- 你想把一次实现经验变成 `docs/`、`skills/skills/`、`books/` 或脚本里的长期资产。
- 当前工作区存在未归属 dirty path，需要只接管本轮明确相关文件。

不适用：没有真实任务、没有验证结果、没有可脱敏输入，或只是想把“感觉有用”包装成方法论。遇到这些情况，先回到 [AI 程序员证据卡循环](ai-programmer-evidence-card-loop.md) 补证据。

## 四步流程

### 1. 先闭合项目切片

不要在功能还没验证时急着抽象方法。项目切片至少要留下：

| 字段 | 最小要求 |
| --- | --- |
| 真实改动 | 具体文件、函数、页面、章节或流程 |
| 边界 | 接管了什么、避开了什么、哪些动作不做 |
| 验证 | 测试、typecheck、脚本、diff check、人工可复核标准 |
| 结果 | commit、可打开文件、可运行命令或明确阻塞 |

如果只能写“应该可以”“看起来没问题”，说明还没有到资产化阶段。

### 2. 从重复判断里提取资产候选

资产不一定来自最漂亮的实现，而是来自下次最容易重复的判断。

| 重复信号 | 更适合沉淀成 |
| --- | --- |
| 多次遇到同一个停止条件 | skill / preflight card |
| 多次手动执行同一组验证命令 | script / checklist |
| 多次解释同一种产品取舍 | docs article / decision snippet |
| 多次需要同一份交接格式 | template / handoff receipt |
| 多次把实现经验讲给别人 | book card / tutorial |

判断标准只有一个：这个资产能不能让下一次少问一个问题、少写一段临时 prompt，或少跑一次无边界实验。

### 3. 选择最小资产形状

不要把所有经验都写成文章。按复用位置选择形状：

| 资产形状 | 放置位置 | 适合内容 | 验证方式 |
| --- | --- | --- | --- |
| 教程/工作流文档 | `docs/documents/trending/ai/` | 面向未来自己的操作路径、判断表、停止条件 | markdown proof + catalog proof |
| 可复用技能 | `skills/skills/` | agent 可直接调用的步骤、输入输出、检查清单 | YAML/frontmatter 检查 + diff check |
| 书稿卡片 | `books/.../chapters/` | 更稳定的原则、案例结构、反例 | 目录索引 + 人工可读 |
| 脚本/测试 | 项目自己的 `scripts/`、`tests/` | 重复验证命令或机械检查 | 单测或 fixture |
| 收入实验模板 | `docs/` 或 `makemoney/` | 渠道、CTA、证据字段、停止/切换规则 | 真实发布记录或明确阻塞 |

如果资产需要同时修改多个仓库，先拆成“一个资产 + 一个索引链接”的小提交，避免把实现、总结和目录重排混在一起。

### 4. 回写接力，而不是复制全文

完成资产后，notebook 只记录可接手信息：

```text
Project slice: 本轮真实推进了什么
Extracted signal: 从哪类重复判断提取
Asset created: 相对路径
Verification: 实际命令与结果
Next reuse point: 下次什么情况下先用它
```

不要把整篇资产复制进 notebook。notebook 是导航和证据入口，资产文件才是复用主体。

## 示例：从 inline command palette 实现提取技能

| 环节 | 示例 |
| --- | --- |
| 项目切片 | 在 Skills Manager 的搜索框里加入显式 `>` command rows，并逐轮补齐 disabled feedback、DOM proof、视觉密度、二批命令和异步状态。 |
| 重复判断 | “不要做 fake commands”“不要把搜索框过早变成 overlay”“disabled row 也要可执行并解释原因”“enabled command 清空 query 后仍要有状态反馈”。 |
| 资产形状 | 写成 `skills/skills/manual/design/inline-command-palette-minimum/SKILL.md`，因为它下次可以直接指导 agent 或开发者做同类 UI 切片。 |
| 验证方式 | 对技能文件跑 diff check、YAML 检查、绝对路径检查；对原项目实现跑 UI tests 和 typecheck。 |
| 下一次复用 | 任何已有搜索框想加命令入口时，先用该技能写 decision record，再决定是否进入实现。 |

这个例子的关键不是“写了一个技能”，而是技能里的每条规则都来自已经跑过测试的项目切片。资产化发生在证据之后，而不是证据之前。

## Stop rule

出现下面任一情况，停止资产化，回到项目或证据收集：

- 资产只是在复述 notebook，没有减少下一次操作成本。
- 需要伪造外部反馈、用户需求或收入信号才能证明价值。
- 必须接管未知 dirty path 才能完成索引或发布。
- 没有任何命令、diff、链接、样例或人工 checklist 可以验证。
- 同一轮同时想写文档、技能、书稿和服务页，导致范围失控。

停止时写：`Decision: Narrow; next evidence needed: <具体命令、反馈、样本或实现切片>`。

## 与现有资产的关系

- 用 [Agent Cron 工作日志资产提取器](agent-cron-worklog-asset-extractor.md) 从多轮 notebook 中发现可资产化信号。
- 用 [AI 程序员证据卡循环](ai-programmer-evidence-card-loop.md) 补齐真实任务、边界、验证和资产字段。
- 用 `skills/skills/manual/design/inline-command-palette-minimum/` 查看一个从项目实现反向沉淀为技能的样例。
