---
title: Trigger 规则收窄闭环
icon: robot
index: true
order: 39
---

# Trigger 规则收窄闭环

当 trigger examples 的 `score` 已经能指出 miss / false trigger / co-trigger，下一步不要立刻扩写所有关键词。更稳的做法是每次只选择一个技能、一类误触发或一个边界词，完成“设定假设 → 改一处规则 → 复跑 score → 记录指标变化”的小闭环。

<!-- more -->

## 适用场景

- 已经跑通 `export → predictor adapter → score`，并确认 `Missing predictions: 0`。
- 报告里有清晰的 `MISS`、`FALSE_TRIGGER` 或 `EXTRA`，但不知道先改哪一类。
- 当前 predictor 仍是 keyword demo，容易因为补召回而牺牲 near miss 拒绝率。
- 想让下一次修改可以被复核，而不是把一次调参变成不可解释的大 diff。

## 四步收窄法

1. **锁定一个错误类型**：本轮只处理 positive miss、negative false trigger 或 co-trigger 中的一类。
2. **锁定一个技能名**：例如只处理 `search` 的 miss，或只处理 `pr` 的 near miss false trigger。
3. **写出规则假设**：先用一句话说明“为什么这个词应该触发 / 不应该触发”，再改代码或样例。
4. **用同一组命令复测**：复跑 export、adapter、score，并比较目标技能指标与 overall 指标。

## 选择顺序

| 错误信号 | 优先动作 | 避免的误区 |
| --- | --- | --- |
| 某技能 `pos_hit/pos_total = 0` | 先加最小召回规则 | 一次性把相邻技能的词都加进去 |
| near miss 误触发同名技能 | 先收窄触发词或增加排除条件 | 用更宽泛关键词覆盖更多正例 |
| expected A 但 predicted B | 先写清 A / B 的边界句 | 只调置信度，不改语义边界 |
| overall recall 提升但 reject rate 明显下降 | 回滚或拆小规则 | 只看召回，不看负例 |

## 最小命令模板

```bash
cd skills
python3 apps/skills-manager-tui/trigger_examples_tool.py --skills-dir skills export --out output/trigger-cases-scratch.jsonl
python3 apps/skills-manager-tui/predictor_adapter_template.py --input output/trigger-cases-scratch.jsonl --output output/trigger-predictions-scratch.jsonl
python3 apps/skills-manager-tui/trigger_examples_tool.py --skills-dir skills score --predictions output/trigger-predictions-scratch.jsonl --details --confusion --top 12 --csv-out output/trigger-score-csv-scratch
python3 -m py_compile apps/skills-manager-tui/predictor_adapter_template.py
```

如果只验证一个技能，可以再加一个小脚本读取 predictions 和 cases，断言目标正例命中数、同技能 near miss false trigger 数、以及是否误触发相邻技能。这个脚本可以临时执行，不一定提交；但 notebook 里要留下可复核的输出数字。

## 记录模板

```markdown
- 本轮假设：`<skill>` 的 `<关键词/边界>` 应该 `<触发/不触发>`，因为 `<依据>`。
- 改动范围：只修改 `<path>` 的 `<函数/规则块>`，不接管其他 dirty path。
- 指标变化：overall positive recall `<before> → <after>`；negative reject rate `<before> → <after>`；`<skill>` `<before> → <after>`。
- 反例检查：`<near miss 名称>` false trigger 为 `<N>`；若 N 上升，下一轮先修这个回归。
- 接力点：下一次只处理 `<下一个技能或错误类型>`。
```

## 判断标准

一次 trigger 规则修改只有在同时满足下面条件时，才算完成：

- 目标技能的目标指标有改善，或误触发被明确压低。
- `Missing predictions` 仍为 0。
- overall 指标没有出现无法解释的明显回退。
- 本轮只提交目标文件和 notebook；scratch JSONL / CSV 不进入仓库。
- 后续接力指向一个新的小问题，而不是“继续优化全部规则”。

这种节奏会牺牲单轮改动速度，但能换来可审计的 trigger 演进历史：每条规则为什么存在、解决了哪个 case、有没有伤到 near miss，都能从 score 输出和 notebook 里复查。
