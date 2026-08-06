---
title: Trigger Examples 进入 Eval 的格式规范
icon: robot
index: true
order: 36
---

# Trigger Examples 进入 Eval 的格式规范

当一个技能已经有 `references/trigger-examples.md`，但 `trigger_examples_tool.py summary` 仍提示 `parsed to 0 cases`，不要继续堆更多样例。先把文件结构改成 parser 能识别的标准二级标题，再复跑 summary，确认样例真正进入 eval 数据集。

<!-- more -->

## 适用场景

- `skills/skills/manual/.../references/trigger-examples.md` 已存在，但 summary 报 0 cases。
- 文件里有 `Strong triggers`、`Good triggers`、`Positive (should trigger)`、`Trigger`、三级中英文小节或按模式分组的标题。
- 技能本身已经能被列表工具发现；问题只在 trigger examples 没有被 eval parser 读取。
- 当前 workspace 有其他 dirty diff，本轮只能接管一个目标技能文件或一张格式规范卡。

## 标准结构

trigger examples 文件至少保留这三个二级标题：

```markdown
## Positive (Chinese)

- 中文强触发样例。
- 另一条中文触发样例。

## Positive (English)

- English positive trigger example.
- Another English trigger example.

## Negative / Near Miss

- 不应该触发该技能的近似请求。
- A near miss that should not trigger this skill.
```

可以额外保留人工说明区，但不要指望它进入 eval：

```markdown
## Narrow first

- 需要先澄清范围、权限、仓库或目标文件的请求。
```

## 常见失败形态

| 失败形态 | 为什么会丢样例 | 最小修法 |
| --- | --- | --- |
| `## Strong triggers` / `## Medium triggers` | parser 不把这些标题映射为 positive / negative bucket | 合并到 `Positive (Chinese)` 与 `Positive (English)` |
| `## Positive (should trigger)` | 对人类清晰，但与工具约定不一致 | 改为标准 `Positive (Chinese)` / `Positive (English)` |
| `### Chinese` / `### English` | 样例藏在三级标题下，二级 bucket 缺失 | 把语言分组提升为标准二级标题 |
| 按 `Algorithm Mode` / `Debugging Mode` 分组 | 模式名不是 eval label | 保留模式词在样例文本里，标题改回标准三段式 |
| 只有“何时使用”说明，没有项目符号样例 | 没有可抽取 case | 每段补可直接作为用户请求的 bullet |

## 15 分钟修复流程

1. **先做只读定位**：运行 `python3 apps/skills-manager-tui/trigger_examples_tool.py --skills-dir skills summary`，记录 0 cases 技能名和当前总 cases。
2. **检查 ownership**：对目标文件跑 `git status --short -- skills/manual/.../references/trigger-examples.md`，确认本轮能独立接管。
3. **只改标题与样例分桶**：优先保留原有样例语义，把旧标题映射到标准三段式；不要顺手重写 `SKILL.md` 或 registry。
4. **补足近似反例**：每个技能至少要有几条 `Negative / Near Miss`，避免 eval 只学会“看到关键词就触发”。
5. **保留人工收窄区**：把需要先问范围、权限、路径或输入证据的请求放进 `Narrow first`。
6. **复跑 summary**：确认目标技能从 0 cases 变成正数，并且不再出现在 0 cases warning。
7. **提交最小范围**：只 stage 目标 trigger examples 文件；如果新增本规范卡，再单独提交 docs 相关文件。

## 验证命令模板

```bash
cd skills
python3 apps/skills-manager-tui/trigger_examples_tool.py --skills-dir skills summary
python3 -c "from pathlib import Path; p=Path('skills/manual/<category>/<skill>/references/trigger-examples.md'); text=p.read_text(); missing=[h for h in ['## Positive (Chinese)','## Positive (English)','## Negative / Near Miss'] if h not in text]; assert not missing, missing; bad=[part for part in text.split() if part != '/' and part.startswith('/')]; assert not bad, bad; print('trigger examples format proof ok')"
git diff --check -- skills/manual/<category>/<skill>/references/trigger-examples.md
```

文档侧新增或更新本目录页面时，再跑：

```bash
cd docs
python3 scripts/check-markdown-proof.py documents/trending/ai/README.md documents/trending/ai/trigger-examples-eval-format.md
python3 scripts/check-ai-catalog.py
```

## 交付记录模板

```markdown
- 实际推进：将 `skills/skills/manual/<category>/<skill>/references/trigger-examples.md` 改成 `Positive (Chinese)`、`Positive (English)`、`Negative / Near Miss` 三段，并保留 `Narrow first` 人工收窄说明。
- 验证方式：`trigger_examples_tool.py summary` 输出包含 `<skill>\tP\tN\tTOTAL`，且没有 `parsed to 0 cases` 警告；`git diff --check` 无 whitespace error。
- 后续接力：如果 summary 已无 0 cases，下一段改做 JSONL 抽样质量检查，而不是继续追数量。
```

## 判断标准

这张卡的目标不是让样例文件更漂亮，而是让“人类觉得写了样例”变成“工具确实能抽取并参与 eval”。只要 summary 仍然报 0 cases，本轮就没有完成；只要命令输出可复核、目标文件边界清楚，即使只修一个技能也是有效推进。
