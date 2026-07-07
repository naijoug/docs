---
title: AI 程序员脚本改动练习样例
icon: robot
index: true
order: 913
---

# AI 程序员脚本改动练习样例

这是一张把 [AI 程序员刻意练习闭环](ai-programmer-deliberate-practice-loop.md) 用在真实脚本改动上的填写样例。目标不是证明 agent 能写代码，而是训练程序员先提出可验证假设，再让 agent 做最小改动，最后用命令输出校验假设。

<!-- more -->

## Practice card

| Field | Filled example |
| --- | --- |
| Practice target | 改进 `books/scripts/verify_tech_cards.py` 的日志顺序，让 wrapper 输出的步骤标题先于子进程 verifier 输出出现。 |
| Human hypothesis before agent | 现象不是 verifier 本身错，而是 Python stdout buffering 导致 wrapper 的 `print()` 没有在 `subprocess.run()` 前刷新。最小修复应该是给 wrapper 的关键 `print()` 增加 `flush=True`，并补一个不跑真实 verifier 的回归测试，断言 heading print 发生在 subprocess 事件之前。 |
| Agent proposal summary | 修改 `run_step()` 和最终成功输出的 `print()` 为 `flush=True`；在 `books/scripts/test_verify_tech_cards.py` 中 mock `print` 与 `subprocess.run`，记录事件顺序，验证 heading 先 flush 再进入子进程。 |
| Verification command | `python3 scripts/test_verify_tech_cards.py && python3 scripts/verify_tech_cards.py --full-only && git diff --check -- scripts/verify_tech_cards.py scripts/test_verify_tech_cards.py` |
| Result | 回归测试从 3 个增加到 4 个；full-only verifier 的输出顺序变成 `==> link verifier`、link verifier 结果、`==> index verifier`、index verifier 结果、suite ok。 |
| What I learned that the agent did not own | 人类先定位“日志顺序”而不是“校验失败”，避免把问题扩大成重写 verifier；测试只 mock wrapper 边界，真实 full verifier 再兜底输出顺序和脚本可运行性。 |
| Decision | `Continue`: 该练习值得作为脚本改动样例保存；不要继续扩 wrapper 功能，除非后续日志再次阻断交接。 |
| Next drill | 找一个失败输出不清晰但范围可控的脚本，先写 human hypothesis，再决定是补测试、补错误信息，还是只补文档。 |

## Why this is a good drill

- **小而真实**：改动只有 wrapper 的输出刷新，不改变验证规则，不接管书稿内容。
- **可验证**：单元测试验证事件顺序，full-only 命令验证真实 verifier 仍可运行。
- **有边界**：启动前 `books/tech-cards-handbook/samples/README.md` 已经是既有 dirty path，本轮不接管；只暂存 `scripts/verify_tech_cards.py` 和 `scripts/test_verify_tech_cards.py`。
- **保留人类判断**：先写 `Human hypothesis before agent`，再让 agent 执行，不把“能改代码”误当成“知道该改什么”。

## Reusable pattern

1. 先把异常归类：功能错误、验证规则错误、日志可读性问题、还是交接证据不足。
2. 写一句人类假设，明确最小可观察变化。
3. 让 agent 只改能验证该假设的最小代码。
4. 至少跑一条快速回归测试和一条真实路径命令。
5. 在记录中写清不接管的 dirty path，避免把别人的改动混入提交。

## Stop conditions

- 如果无法用本地命令复现或验证，不要把它包装成脚本改动练习。
- 如果修复需要接管不明归属的 dirty 文件，先停止并改选 clean path。
- 如果连续两轮都在给同一个工具补边角能力，回到 [Agent Cron 交付预算卡](agent-cron-delivery-budget-card.md)，判断是否应该切换到书稿、技能或收入实验。
