---
title: Trigger Examples JSONL 抽样质量检查
icon: robot
index: true
order: 37
---

# Trigger Examples JSONL 抽样质量检查

当 `trigger_examples_tool.py summary` 已经没有 0 cases 警告时，不要马上继续堆样例数量。下一步要导出 JSONL，做一次轻量抽样质量检查：确认样例确实覆盖了多个技能、没有重复 prompt、negative 不只是“空白反例”，并记录下一条最小修复路径。

<!-- more -->

## 适用场景

- `skills/skills/manual/.../references/trigger-examples.md` 已按 `Positive (Chinese)`、`Positive (English)`、`Negative / Near Miss` 三段式被 parser 识别。
- `python3 apps/skills-manager-tui/trigger_examples_tool.py --skills-dir skills summary` 已经输出总 cases，且没有 `parsed to 0 cases` 警告。
- 需要从“格式可解析”推进到“数据集可用”，但还没有接入真实 trigger runner。
- 当前工作区有其他 dirty diff，只能做只读导出、抽样检查，或新增一张方法卡。

## 15 分钟流程

1. **导出临时 JSONL**：优先写到可丢弃路径或已约定的临时输出目录；检查完删除，避免把一次性数据混进提交。
2. **看总量与分布**：记录 cases 总数、manual skills 数量、positive / negative 数量、language 分布。
3. **查重复 prompt**：按 `prompt` 做 exact duplicate 检查；重复不一定错，但要确认不是复制粘贴漏改。
4. **抽样高风险技能**：优先看多模式技能、刚修过标题格式的技能、收入实验 / 搜索 / 工具类技能。
5. **检查 negative 质量**：near miss 应该像真实用户请求，但不该触发目标技能；不要只写“不要触发”。
6. **检查样例是否过宽**：positive 如果只是泛泛“帮我写代码 / 帮我搜索”，应改成能体现技能边界的任务。
7. **决定下一步**：若发现具体脏样例，只改一个技能文件；若本轮只是审计通过，就记录证据和下一次更高价值动作。

## 命令模板

```bash
cd skills
python3 apps/skills-manager-tui/trigger_examples_tool.py --skills-dir skills export --out output/trigger-cases-scratch.jsonl
python3 -c "import json,collections; p='output/trigger-cases-scratch.jsonl'; rows=[json.loads(l) for l in open(p,encoding='utf-8') if l.strip()]; print('cases',len(rows)); print('skills',len({r['skill'] for r in rows})); print('positive',sum(r['polarity']=='positive' for r in rows),'negative',sum(r['polarity']=='negative' for r in rows)); print('langs',dict(collections.Counter(r['language'] for r in rows))); d=collections.defaultdict(list); _=[d[r['prompt']].append(r['id']) for r in rows]; dup=[(k,v) for k,v in d.items() if len(v)>1]; print('duplicate_prompts',len(dup)); [print('DUP',v,k[:120]) for k,v in dup[:5]]"
python3 -c "from pathlib import Path; p=Path('output/trigger-cases-scratch.jsonl'); p.unlink(missing_ok=True); print('removed', not p.exists())"
```

如果 shell 对多行脚本、heredoc 或删除命令有限制，优先把检查压成单行 `python3 -c`，并用 `Path.unlink(missing_ok=True)` 删除临时 JSONL。

## 质量判断表

| 检查项 | 通过信号 | 需要修复的信号 | 下一步 |
| --- | --- | --- | --- |
| 覆盖 | 每个 manual 技能都有 cases，summary 无 0 cases warning | 某技能缺失或 0 cases | 回到格式规范卡修标题 |
| 分布 | positive / negative 都有，语言分布能解释 | 只有 positive 或只有中文 | 给目标技能补 near miss 或英文样例 |
| 重复 | exact duplicate 为 0，或重复有明确跨技能意图 | 同一句 prompt 出现在多个技能且没有区分上下文 | 每次只修一个技能的样例文本 |
| 多模式技能 | prompt 内保留模式词，边界清晰 | 样例过宽，可能把普通请求误判为技能触发 | 拆成更具体的用户请求或加 negative near miss |
| 临时输出 | JSONL 导出后删除，提交不包含 scratch 数据 | `output/` 或临时文件被误 stage | 删除临时文件并复查 `git status --short` |

## 交付记录模板

```markdown
- 实际推进：导出 manual trigger examples JSONL，并做分布、重复 prompt、重点技能抽样检查；未把临时 JSONL 纳入提交。
- 验证方式：`export` 输出 N cases；抽样脚本输出 skills、positive / negative、language 分布和 `duplicate_prompts 0`；删除临时 JSONL 后复查目标 repo status。
- 后续接力：若没有发现样例质量问题，下一次再接入真实 trigger runner 或 adapter score；若发现具体问题，下一次只修一个技能的 `references/trigger-examples.md`。
```

## 判断标准

格式检查回答“工具能不能读到样例”，JSONL 抽样回答“读到的样例像不像可评测数据”。只有两者都留下命令证据，trigger examples 才从文档资产进入可测试资产。
