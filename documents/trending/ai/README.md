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
- [AI 编程审查服务交付指南](ai-coding-audit-service.md)
- [下一条安全命令梯](next-safe-command-ladder.md)
- [AI 编程审查样板报告](ai-coding-audit-mock-report.md)
- [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md)
- [AI 生成 PR 的最小审查入口](ai-generated-pr-review-entry.md)
- [2026 Agentic Coding 实战最佳实践](agentic-coding-2026.md)
- [AI 编程上下文工程实战指南](context-engineering-for-ai-coding.md)
- [2026 AI Agent 开发入门指南](agent-development-2026.md)
- [2026 提示词工程高级技巧](advanced-prompt-engineering-2026.md)
- [2026 本地大模型部署实战](local-llm-deployment-2026.md)
- [2026 AI 工具全景图](ai-tools-landscape-2026.md)
- [2026 AI Agent 个人效率系统实战指南](ai-agent-productivity-system-2026.md)

## AI-assisted PR review path

如果目标是审查 AI 生成的改动，不要从单篇文章随机阅读。按下面顺序走，能从工作流、验证、PR 入口、服务化样板一路串到可复用资产：

1. 先读 [Agent 工作流设计](agent-workflow.md)，确认 agent 的边界、工具调用和交接格式。
2. 再读 [AI 编程验证优先工作流](verification-first-ai-coding.md)，把验证失败、未验证项和下一条安全命令写成可接手记录。
3. 进入 [AI 生成 PR 的最小审查入口](ai-generated-pr-review-entry.md)，把 `git status --short`、接管文件、避开的 dirty path、验证梯和 `Continue / Narrow / Stop` 固定到 PR 审查入口。
4. 如果要把它产品化，继续读 [AI 编程审查服务交付指南](ai-coding-audit-service.md)，再用 [下一条安全命令梯](next-safe-command-ladder.md) 把“下一步先跑什么”写成可复核交付物。
5. 交付前用 [AI 编程审查样板报告](ai-coding-audit-mock-report.md) 压缩成客户可读的公开报告；内部执行时把同一条命令梯复用到 `skills/skills/manual/review/next-safe-command-ladder/`，避免 agent 只产出测试清单。
6. 发布后再用 [匿名 AI 编程审查案例骨架](anonymous-ai-coding-audit-case-skeleton.md) 做脱敏复盘，最后回到 [AI 程序员资产飞轮](ai-programmer-asset-flywheel.md)，判断这次审查结果应该沉淀成文章、模板、技能还是书稿卡片。

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
