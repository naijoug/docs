---
title: AI 编程中的假设-验证教程
icon: lightbulb

index: true
order: 24

---

# AI 编程中的假设-验证教程

AI 时代的程序员不能只把任务交给 agent，也不能只审美式地阅读 agent 输出。更稳的做法是：在 agent 动手前先写下可证伪的人类假设，再让 agent 给出候选方案，最后用真实验证结果更新判断。

<!-- more -->

## 适用场景

这篇教程适用于这些 30-90 分钟的小任务：

- 一个测试失败、构建失败、脚本输出异常或文档 proof 失败；
- 一个需求边界不清，但能先验证一个局部行为；
- 一次 AI 生成代码的审查，需要判断它是不是解决了真实问题；
- 一次刻意练习，希望训练自己的定位、验证和取舍能力，而不是只训练提问技巧。

如果任务没有可运行命令、没有可复核样本，也没有人工可检查标准，先回到 [AI 程序员刻意练习闭环](ai-programmer-deliberate-practice-loop.md) 缩小练习题。

## 三段式流程

### 1. 写下 Human hypothesis before agent

在调用 agent 或接受修改前，先用 3-5 行写清楚：

```text
Human hypothesis before agent:
- Symptom: 现在能观察到的失败或异常是什么？
- Suspected cause: 我认为最可能的原因是什么？为什么？
- Smallest check: 哪条命令、哪段 fixture、哪个人工检查能最快证伪它？
- Risk boundary: 哪些文件、目录、外部行为本轮不接管？
```

这一步的价值不是“猜对”，而是让后续对比有基线：如果 agent 的方案没有改变失败输出，或者绕开了最小检查，就不能算通过。

### 2. 让 agent 只做最小可验证改变

给 agent 的任务要压成一个动作：

- 修改一个函数、一个测试、一个文档段落或一个命令入口；
- 不要同时重构、改格式、补需求和换工具链；
- 明确要求保留或新增验证证据；
- 明确不要接管启动前已经脏的路径。

可复制提示词：

```text
请基于下面的人类假设做最小改动。只改与本假设直接相关的文件；如果需要扩大范围，先在输出里说明原因。改完必须运行验证命令，并报告失败输出是否改变。

Human hypothesis before agent:
...

Verification command:
...

Do not touch:
...
```

### 3. 用验证结果更新判断

验证后只做四类判断：

| 判断 | 条件 | 下一步 |
| --- | --- | --- |
| `Continue` | 失败消失，或失败输出按假设方向变化，并且验证覆盖本轮改动 | 提交本轮小改动，再补复盘 |
| `Narrow` | 假设只解释了部分现象，或验证暴露更小的边界问题 | 把任务缩成下一条更小命令 |
| `Stop` | 没有可复核输入，或改动会接管未知 dirty path / 外部授权 | 停止本线，不做“看起来合理”的补丁 |
| `Switch` | 当前题没有反馈闭环，但存在另一个本地可验证小题 | 切换任务，并记录为什么切换 |

## 完整练习卡片

```text
Practice target:

Human hypothesis before agent:
- Symptom:
- Suspected cause:
- Smallest check:
- Risk boundary:

Agent proposal summary:

Files changed:

Verification:
- Command:
- Result before:
- Result after:
- Did the failure output change? yes / no / not applicable

What I learned that the agent did not own:

Decision: Continue / Narrow / Stop / Switch

Next drill:
```

## 示例：脚本输出顺序异常

```text
Practice target:
修正 wrapper 脚本中步骤标题可能晚于子进程输出的问题。

Human hypothesis before agent:
- Symptom: full verifier 的最终 summary 和 step heading 在终端中顺序不稳定。
- Suspected cause: wrapper 的 print 没有 flush，子进程输出先被终端显示。
- Smallest check: mock print 与 subprocess.run，断言 heading 先 flush 再调用子进程；再跑真实 full verifier。
- Risk boundary: 不修改验证规则、不改书稿内容、不接管已有 dirty samples 文件。

Agent proposal summary:
给 wrapper 的 heading、失败信息和最终 success print 加 flush=True，并补测试。

Verification:
- Command: python3 scripts/test_verify_tech_cards.py && python3 scripts/verify_tech_cards.py --full-only
- Result after: 回归测试通过，真实 verifier heading 先于对应子进程输出。
- Did the failure output change? yes

What I learned that the agent did not own:
输出顺序问题不一定来自业务逻辑；先写最小假设能避免把 wrapper 问题误判成 verifier 规则问题。

Decision: Continue
Next drill: 找一个由真实失败输出驱动的非 wrapper 小题。
```

这类样例可以继续沉淀到 [AI 程序员脚本改动练习样例](ai-programmer-script-change-drill-example.md)，再抽象成书稿卡片或技能。

## 常见反模式

- **先让 agent 猜，再替它找理由**：没有 human hypothesis，最后只能评价“改得像不像”。
- **一次验证多个变量**：同时改测试、实现、文档和命令，失败时不知道哪个变量有效。
- **把通过当成理解**：命令通过只是证据之一，还要写 `What I learned that the agent did not own`。
- **忽略脏工作区边界**：启动前已有改动的文件不应被顺手格式化或混入提交。
- **没有停止条件**：外部授权、真实样本或验证命令缺失时，应 `Stop` 或 `Switch`，而不是继续补“合理内容”。

## 交付标准

一次假设-验证练习至少要留下：

1. `Human hypothesis before agent`；
2. agent 提案摘要，而不是完整聊天记录；
3. 改前/改后验证命令或人工可复核标准；
4. `What I learned that the agent did not own`；
5. `Decision: Continue / Narrow / Stop / Switch`；
6. 下一条可执行的小练习。

这样，AI 编程练习才不会退化成“让 agent 多写几次”，而是持续训练人类程序员的判断、验证和资产化能力。
