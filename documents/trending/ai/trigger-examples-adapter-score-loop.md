---
title: Trigger Examples Adapter Score 闭环
icon: robot
index: true
order: 38
---

# Trigger Examples Adapter Score 闭环

`summary` 和 JSONL 抽样只能证明样例可读、数据集可审计；下一步要把它接到一个 predictor adapter，跑 `score`，得到 miss、false trigger 和 co-trigger 的可操作清单。即使 adapter 只是 keyword demo，也能暴露“评测链路是否跑通”和“报告字段是否足够指导下一次修复”。

<!-- more -->

## 适用场景

- `skills/skills/manual/.../references/trigger-examples.md` 已经没有 0 cases warning。
- 已经做过 JSONL 抽样，确认没有明显重复 prompt 或临时输出污染。
- 还没有真实 trigger engine，但想先验证 `export → predict → score → CSV` 的端到端接口。
- 需要把下一次技能改进从“感觉哪些样例不准”转成 miss / false trigger / co-trigger 的证据表。

## 20 分钟流程

1. **导出 cases**：从 `skills/` 运行 `trigger_examples_tool.py export`，写到 scratch 路径；不要把一次性 JSONL 纳入提交。
2. **生成 predictions**：先用 `apps/skills-manager-tui/predictor_adapter_template.py --mode keyword-demo` 跑通格式；真实接入时只替换 adapter 内的 `predict_case()`。
3. **跑 score**：使用 `--details --confusion --top N --csv-out ...`，同时拿到总体指标、分技能指标、详情和混淆表。
4. **先看链路健康**：确认没有 `Missing predictions`；如果有，先修 adapter 输出 schema，不要急着调规则。
5. **再看最大问题类别**：区分 positive miss、negative false trigger、positive co-trigger。三者对应的修复不同。
6. **挑一个下一步**：只选择一个 skill 或一类规则做修复；不要把 score 报告当成一次全量重写清单。
7. **删除或隔离 scratch 输出**：只提交方法卡、技能样例或 adapter 代码；临时 cases / predictions / CSV 默认不提交。

## 命令模板

```bash
cd skills
python3 apps/skills-manager-tui/trigger_examples_tool.py --skills-dir skills export --out output/trigger-cases-scratch.jsonl
python3 apps/skills-manager-tui/predictor_adapter_template.py --input output/trigger-cases-scratch.jsonl --output output/trigger-predictions-scratch.jsonl
python3 apps/skills-manager-tui/trigger_examples_tool.py --skills-dir skills score --predictions output/trigger-predictions-scratch.jsonl --details --confusion --top 8 --csv-out output/trigger-score-csv-scratch
python3 -c "from pathlib import Path; [p.unlink() for p in [Path('output/trigger-cases-scratch.jsonl'), Path('output/trigger-predictions-scratch.jsonl')] if p.exists()]; print('scratch jsonl removed')"
```

如果工作区已有 `output/` dirty，优先写到任务约定的 scratch 位置并在 notebook 里说明没有提交 scratch 数据。

## 读 score 的顺序

| 输出 | 先看什么 | 常见含义 | 下一步 |
| --- | --- | --- | --- |
| Overall | `Missing predictions` 是否为 0 | 非 0 说明 adapter 没覆盖所有 case id | 先修 adapter schema / row count |
| Overall | `Positive recall` | 低 recall 说明 trigger 规则或模型召回不足 | 挑 top miss 技能补规则或样例边界 |
| Overall | `Negative reject rate` | 低 reject 说明 near miss 被误触发 | 优先修 false trigger 规则 |
| Per skill | `pos_hit/pos_total` | 某技能完全 0 hit 通常代表 adapter 不认识它 | 加最小识别规则或映射真实技能名 |
| Details | `MISS` / `FALSE_TRIGGER` / `EXTRA` | 具体 prompt 级错误 | 每次只改一个技能或一条规则 |
| Confusion | expected → predicted wrong skill | 技能边界重叠 | 调整 trigger 词、增加 near miss、或拆分多模式技能 |

## Demo 结果怎么解释

一次 keyword-demo dry run 可能出现类似信号：

- manual cases：346。
- positive recall：约 0.20，说明 demo 规则只覆盖少数关键词，不代表真实 trigger engine 质量。
- negative reject rate：约 0.80，说明 near miss 能暴露不少误触发。
- missing predictions：0，说明 `export → adapter → score` 的 ID 对齐和 JSONL schema 是通的。
- 明显 miss：`search`、`weekly-income-experiment`、`audit-evidence-boundary` 等 keyword-demo 没有规则的技能会接近全 miss。
- 明显 false trigger：`pr` / `refactor` 的 negative near miss 如果仍触发同名技能，说明规则过宽。

结论：demo score 的价值不是证明 predictor 好，而是证明评测接口、错误分类和 CSV 交付形状可用。真实接入前，先用它决定第一条要替换的 adapter 规则。

## 交付记录模板

```markdown
- 实际推进：导出 manual trigger cases，使用 predictor adapter 生成 predictions，并运行 score / confusion / CSV demo；未提交 scratch 输出。
- 验证方式：`export` 写出 N cases；adapter 写出 N predictions；`score` 输出 `Missing predictions: 0`、positive recall、negative reject rate、主要 confusion，并写出 overall / per_skill / details / confusion CSV。
- 后续接力：下一次优先选择一个具体技能或一类 false trigger，把 keyword-demo 规则替换成真实 trigger engine 或更窄的 adapter 规则。
```

## 判断标准

`score` 闭环回答的不是“技能写得好不好”，而是“当 trigger engine 给出预测后，我们能不能定位错在哪里”。只要有全量 predictions、可读 details 和可导出的 CSV，下一次改进就应该基于错误类型，而不是继续凭印象改 trigger examples。
