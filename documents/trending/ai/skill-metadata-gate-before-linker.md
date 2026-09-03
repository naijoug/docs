---
title: Skill Metadata Gate Before Linker
icon: tags
index: true
order: 96
---

# Skill Metadata Gate Before Linker

当一个技能库已经靠 `SKILL.md` 积累了不少可复用工作流时，下一层风险不是“有没有正文”，而是 metadata 缺失导致 linker、slash command、搜索和安装入口把好技能显示成空标题或无摘要。先把 metadata 完整性做成轻量门禁，再继续批量写技能，能把可发现性问题挡在提交前。

<!-- more -->

## 适用场景

- 技能正文已经存在，但 `skill.yaml`、frontmatter、README 目录树或索引入口不一致。
- linker / installer / slash command 依赖 `id`、`title`、`summary`、`triggers` 等字段生成用户可见列表。
- 最近几轮在手工补 metadata，且已经能用脚本扫描出“缺失目录”。
- 新增技能的频率高于人工复查频率，靠记忆维护目录会反复漏。

## 最小门禁字段

不要一开始追求完整 YAML schema；先覆盖能防止用户可见退化的字段：

| 字段 | 为什么必需 | 失败信号 |
| --- | --- | --- |
| `id` | linker、安装和引用的稳定键 | 列表里只能靠目录名猜身份 |
| `version` | 后续迁移、兼容和发布记录需要版本 | 无法判断技能是否更新 |
| `title` | 用户选择技能时的第一可见信息 | `skills-linker list` 出现空标题 |
| `summary` | 检索和安装前判断适用性 | 列表有名称但不知道用途 |
| `kind` | 区分 prompt-only、tool、hybrid 等执行形态 | agent 可能误以为需要运行代码 |
| `tags` | 分类、筛选和目录维护 | README 与 linker 分类漂移 |
| `triggers.keywords` | 让技能能被自然语言触发 | 只能人工记路径 |
| `compatibility.tools` | 说明能在哪些 agent / CLI 中复用 | 跨工具迁移时边界不清 |

这组字段的目标是“不会坏入口”，不是替代人工设计技能内容。

## 30 分钟执行卡

| 步骤 | 动作 | 产出 |
| --- | --- | --- |
| 1 | 记录启动状态：`git status --short` | 明确哪些文件不是本轮所有 |
| 2 | 扫描所有含 `SKILL.md` 的技能目录 | 得到缺 `skill.yaml` 或字段为空的清单 |
| 3 | 先补一个高价值缺口 | 避免批量猜 title / summary 写错 |
| 4 | 跑 linker 列表验证 | 确认标题、分类和摘要能被看见 |
| 5 | 把扫描固化为 dependency-free 脚本 | 没装包前也能 fail fast |
| 6 | 接入项目级检查入口 | 让后续新增技能不能绕过门禁 |

## 验证梯

从轻到重安排，不要一上来跑完整构建：

```bash
python3 apps/scripts/check-skill-metadata.py
python3 apps/scripts/check-skill-metadata.py --category all
./apps/skills-manager-tui/skills-linker list --category manual | grep '<skill-id>'
python3 apps/scripts/check-skill-metadata.py --skills-dir <temp-fixture>
apps/scripts/skills-manager-check
```

其中 `<temp-fixture>` 要同时包含正例和反例：一个只有 `SKILL.md`、没有 `skill.yaml` 的目录；一个有 `skill.yaml` 但关键字段为空的目录；一个字段完整的目录。这样可以证明脚本不是只测 happy path。

## 决策表

| 观察 | 本轮动作 | 下一段建议 |
| --- | --- | --- |
| 缺口数量少且 title 可从正文确认 | 一项一提交补 metadata | 继续扫描到 `missing: 0` |
| 缺口数量多但语义不清 | 只提交扫描清单或门禁脚本 | 下一轮逐项读正文再补 |
| 缺口已清零但没有门禁 | 新增检查脚本并接入聚合检查 | 再扩字段校验或 README 维护规则 |
| 聚合检查因无关 typecheck / build 失败 | 记录阻塞，不把 metadata 修复说成全绿 | 下一轮先修最近且明确的红灯 |
| 工作区启动前已有脏文件 | 不接管未知 diff；换 clean repo 或只读记录 | 等 dirty path 提交后再继续 |

## Handoff 模板

```markdown
- Owned paths: `skills/apps/scripts/check-skill-metadata.py`, `skills/README.md`
- Avoided paths: <启动前 dirty path>
- Proof: `python3 apps/scripts/check-skill-metadata.py --category all` → `0 problem(s)`
- Linker spot check: `<skill-id> [category]: <Title>`
- Remaining risk: <例如只做简单 YAML 解析，尚未校验重复 id>
- Next safe command: `apps/scripts/skills-manager-check`
```

## 常见反例

- 只补 `skill.yaml`，不更新 README 或 linker 可见入口。
- 只检查文件存在，不检查关键字段为空。
- 用依赖很重的 YAML 解析器，让“装包前 preflight”无法运行。
- 一次批量生成几十个 summary，没人逐条核对是否贴合正文。
- 发现聚合检查红灯后仍提交，并在记录中写“全部验证通过”。

## 与现有资产的关系

- 用 [Agent Cron 的脏工作区边界](agent-cron-dirty-worktree-boundary.md) 确认本轮能不能接管技能仓库改动。
- 用 [Agent Preflight 脚本测试模板](agent-preflight-script-test-template.md) 给 metadata checker 补正反向临时 fixture。
- 用 [Green Baseline Before Asset Switch](green-baseline-before-asset-switch.md) 判断修完门禁后是否应该停手，转向书稿、教程或收入实验。
- 用 [从项目实现到可复用资产](project-implementation-to-reusable-asset.md) 把这类仓库内经验抽成可复用技能或文章。

这张卡的核心提醒是：AI 时代的程序员不只写“能被 agent 看懂的正文”，还要维护“能被工具发现、安装、复核的 metadata”。可发现性也是资产质量的一部分。