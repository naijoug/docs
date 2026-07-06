---
title: 人工智能
icon: robot

index: false

---

<!-- more -->

## catalog

- [AI Awesome](../../awesome/ai/)
- [AI 综合资源](../../awesome/ai/resources.md)
- [Agent 工作流设计](agent-workflow.md)
- [AI 编程验证优先工作流](verification-first-ai-coding.md)
- [AI 程序员资产飞轮](ai-programmer-asset-flywheel.md)
- [把 Agent 心跳沉淀成付费 Offer](heartbeat-to-paid-offer.md)
- [AI 程序员每周收入实验规划器](ai-programmer-weekly-experiment-planner.md)
- [本地可验证 Proof Artifact 清单](local-verifiable-proof-artifact.md)
- [AI 文档改动 Proof Checker](ai-doc-change-proof-checker.md)
- [changed-from HEAD 文档改动 Preflight](changed-from-head-docs-preflight.md)
- [AI 文档 Proof Checker 采纳记录](ai-doc-change-proof-adoption-log.md)
- [AI 编程审查路线图](ai-coding-audit-roadmap.md)（没有真实样本前先跑下面的 30 分钟实验，不要直接扩服务页）
- [30 分钟 AI 编程审查收入实验](thirty-minute-ai-coding-audit-income-experiment.md)
- [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md)
- [AI 编程审查实验切换清单](ai-coding-audit-experiment-switch.md)
- [AI 编程审查服务交付指南](ai-coding-audit-service.md)
- [AI 编程审查发布后观察清单](ai-coding-audit-publish-observation-runbook.md)
- [下一条安全命令梯](next-safe-command-ladder.md)
- [AI 编程审查样板报告](ai-coding-audit-mock-report.md)
- [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md)
- [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md)
- [AI 编程审查 Issue 到 PR 交接说明](ai-coding-audit-issue-to-pr-handoff.md)
- [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md)
- [AI 编程审查样本征集模板](ai-coding-audit-sample-request.md)
- [AI 生成 PR 的最小审查入口](ai-generated-pr-review-entry.md)
- [2026 Agentic Coding 实战最佳实践](agentic-coding-2026.md)
- [AI 编程上下文工程实战指南](context-engineering-for-ai-coding.md)
- [2026 AI Agent 开发入门指南](agent-development-2026.md)
- [2026 提示词工程高级技巧](advanced-prompt-engineering-2026.md)
- [2026 本地大模型部署实战](local-llm-deployment-2026.md)
- [2026 AI 工具全景图](ai-tools-landscape-2026.md)
- [2026 AI Agent 个人效率系统实战指南](ai-agent-productivity-system-2026.md)

## 30-minute AI coding audit entry

如果只是想马上验证一次 AI 编程审查机会，不要先读完整资料库。先按 [30 分钟 AI 编程审查收入实验](thirty-minute-ai-coding-audit-income-experiment.md) 发出一次只收样本的 CTA，再用下面这条最短路径跑一轮：

1. **找样本**：复制 [AI 编程审查样本征集模板](ai-coding-audit-sample-request.md)，只要求对方提供一个 PR、一次失败命令、一段 agent log 或一份脱敏 final report。
2. **收束回复**：用 [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md) 把“我们也遇到过”收束成目标、范围、证据、公开边界和期望输出。
3. **交付首份报告**：按 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) 做 30-60 分钟只读审查；证据不足时只交付 `Next evidence needed`，证据足够时交付 1 页报告。
4. **判断下一步**：用 `Continue / Narrow / Stop` 记录是否进入 PR 审查、缩小样本范围或停止；公开前先走本页的 evidence boundary checkpoint。
5. **观察信号**：先用 [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md) 记录单轮渠道、输入证据、公开边界、交付物和 `Continue / Narrow / Stop`，发布后再用 [AI 编程审查发布后观察清单](ai-coding-audit-publish-observation-runbook.md) 记录痛点原话、证据形状、公开边界和 `Next evidence needed`，不要只看点赞数。
6. **沉淀资产**：如果同类问题重复出现，再回到 [AI 编程审查路线图](ai-coding-audit-roadmap.md) 和 [AI 程序员资产飞轮](ai-programmer-asset-flywheel.md)，判断是否升级为文章、模板、技能、书稿卡片或服务 offer。

这条入口的判断标准是“是否拿到真实可复核证据并交付下一步”，不是点赞、收藏或路线图完整度。

如果连续多轮都没有发布渠道、真实样本或反馈证据，先走 [AI 编程审查实验切换清单](ai-coding-audit-experiment-switch.md)：能拿到证据就 `Continue`，只能验证单点就 `Narrow`，否则把当前资产封存并 `Switch` 到另一个可验证的小实验，避免继续堆文档。

切换到新实验时，不要只换一个更大的想法。先用 [AI 程序员每周收入实验规划器](ai-programmer-weekly-experiment-planner.md) 写清本周约束、候选实验、最小交付物、验证方式和停止条件，优先选择能在本地运行、能提交、能被别人复核的小闭环。

## AI document change preflight

修改本目录的 AI 工作流、收入实验、审查样板或跨目录链接时，先把改动当作一次小实验处理：

1. **改前跑轻量检查**：对准备修改的入口页、长文或跨目录链接目标执行 `python3 scripts/check-markdown-proof.py documents/trending/ai/README.md ...`，确认当前文件没有已知断链、frontmatter 或绝对路径问题。
2. **只记录可复查结果**：如果 checker 通过，把命令和输出追加到 [AI 文档 Proof Checker 采纳记录](ai-doc-change-proof-adoption-log.md)；如果失败，先修最小问题，再考虑是否需要补回归测试。
3. **不要让 checker 变万能 linter**：它负责快速兜底 markdown proof；涉及 sidebar、VuePress 插件或页面渲染时，仍然追加 `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build`。

这条 preflight 的目标不是替代完整构建，而是在 agent 频繁改文档时，给“这次改动没有基础破损”留下可重复证据。

如果要把这轮实验写进书稿，优先参考 `books/tech-cards-handbook/chapters/ai-agent/thirty-minute-route-before-productizing.md`、`books/tech-cards-handbook/chapters/ai-agent/first-report-before-consulting.md`、`books/tech-cards-handbook/chapters/ai-agent/public-case-separates-facts-inferences-unverified.md` 和 `books/tech-cards-handbook/chapters/ai-agent/publish-feedback-needs-evidence-shape.md`：先抽象原则和反馈证据形状，再决定是否公开案例。

## AI-assisted PR review path

如果目标是审查 AI 生成的改动，不要从单篇文章随机阅读。按下面顺序走，能从工作流、验证、PR 入口、服务化样板一路串到可复用资产：

1. 先读 [Agent 工作流设计](agent-workflow.md)，确认 agent 的边界、工具调用和交接格式。
2. 再读 [AI 编程验证优先工作流](verification-first-ai-coding.md)，把验证失败、未验证项和下一条安全命令写成可接手记录。
3. 进入 [AI 生成 PR 的最小审查入口](ai-generated-pr-review-entry.md)，把 `git status --short`、接管文件、避开的 dirty path、验证梯和 `Continue / Narrow / Stop` 固定到 PR 审查入口。
4. 如果要把它产品化，先读 [AI 编程审查路线图](ai-coding-audit-roadmap.md) 看完整路径，再读 [AI 编程审查服务交付指南](ai-coding-audit-service.md)，并用 [下一条安全命令梯](next-safe-command-ladder.md) 把“下一步先跑什么”写成可复核交付物。
5. 交付前用 [AI 编程审查样板报告](ai-coding-audit-mock-report.md) 压缩成客户可读的公开报告；内部执行时把同一条命令梯复用到 `skills/skills/manual/review/next-safe-command-ladder/`，避免 agent 只产出测试清单。
6. 如果还没有真实授权样本，先用 [AI 编程审查样本征集模板](ai-coding-audit-sample-request.md) 获取候选回复；发布后用 [AI 编程审查发布后观察清单](ai-coding-audit-publish-observation-runbook.md) 记录痛点原话、证据形状和 `Continue / Narrow / Stop`。对方回复后，用 [AI 编程审查首次回复模板](ai-coding-audit-first-reply-template.md) 把热情回复收束成范围、证据、公开边界和期望输出，再用 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) 压缩成 30-60 分钟的只读报告。如果样本进入 PR，再用 [AI 编程审查 Issue 到 PR 交接说明](ai-coding-audit-issue-to-pr-handoff.md) 把 Issue 字段映射到 PR snapshot、ownership boundary、verification ladder 和 `Continue / Narrow / Stop`。最后用 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md) 做脱敏复盘，并回到 [AI 程序员资产飞轮](ai-programmer-asset-flywheel.md)，判断这次审查结果应该沉淀成文章、模板、技能还是书稿卡片。

## evidence boundary checkpoint

把一次 AI 编程审查写成公开内容前，先做证据边界检查，避免把审查记录包装成未经验证的结论：

- **先分层 claim**：把每条想公开的结论标成 `Fact`、`Inference`、`Unverified`、`Private` 或 `Stop`；没有证据的内容只能进入 `Next evidence needed`。
- **只公开证据形状**：命令、exit code、失败类型和脱敏后的路径可以保留；客户名、私有仓库、绝对路径、密钥、用户数据和未经授权截图要删除。
- **把停止条件写出来**：授权不清、脱敏后无法支撑结论、或验证链断裂时，不发布“真实案例”，改写成方法样板或征集样本的说明。
- **复用内部技能**：内部执行可先用 `skills/skills/manual/review/audit-evidence-boundary/` 做 claim 分层，再进入匿名案例写作。

这个 checkpoint 与 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md) 是同一条路径的发布前闸门：前者判断“能不能说”，后者组织“怎么安全地说”。

## concept

| abbr | full | description
| --- | --- | ---
| `NLP`     | Natural Language Processing           | 自然语言处理
| `LLMs`    | Large Language Models                 | 大语言模型
| `GLM`     | General Language Model                | 通用语言模型
| `LoRA`    | Low-Rank Adaptation of Large Language Models | 大语言模型的低阶适应
| `BERT`    | Bidirectional Encoder Representations from Transformers | 基于大规模无监督预训练的双向表示法
| `GPT`     | Generative Pre-trained Transformer    | 生成式预训练语言模型
| `LLaMA`   | Large Language Model Meta AI          | facebook 大语言模型
| `RNN`     | Recurrent Neural Network              | 循环神经网络
| `CNN`     | Convolutional Neural Network          | 卷积神经网络
| `ELMO`    | Embeddings from Language Models       |  
| `SA`      | Self-Attention                        | 自注意力机制
| `F-FNN`   | Feed-Forward Neural Networks          | 前向神经网络
| `RC`      | Residual Connection                   | 残差连接
| `MLM`     | Masked Language Model                 | 掩码语言模型
| `NSP`     | Next Sentence Prediction              | 下一句预测
| `POS`     | Part of Speech                        | 词性
| `TF`      | Term Frequency                        | 词频
| `SW`      | Stop Words                            | 停用词
| `IDF`     | Inverse Document Frequency            | 逆文档频率
| `FT`      | Fine Tuning                           | 微调

## `TensorFlow` vs `PyTorch` vs  `Jax`

- [TensorFlow](https://github.com/tensorflow/tensorflow)
    > An Open Source Machine Learning Framework for Everyone
- [PyTorch](https://github.com/pytorch/pytorch)
    > Tensors and Dynamic neural networks in Python with strong GPU acceleration
- [Jax](https://github.com/google/jax)
    > Composable transformations of Python+NumPy programs: differentiate, vectorize, JIT to GPU/TPU, and more

## `Transformer` vs `RNN` vs `CNN`

- `Transformer` : (Multi-Head Attention) 多头自注意力机制
    > 特色 : 自然语言处理
- `RNN` : 循环神经网络
    > 特色 : 处理序列数据和时序关系
- `CNN` : 卷积神经网络
    > 特色 : 处理网格数据(如: 图像处理)
