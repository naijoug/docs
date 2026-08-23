---
title: 多 Agent 会话控制台检查卡
icon: robot
index: true
order: 36
---

# 多 Agent 会话控制台检查卡

当 Codex Remote、Claude Code Remote Control、MCP 表单审批、插件市场和桌面端多会话逐渐成为日常入口时，程序员的瓶颈不再只是“会不会提示词”，而是能不能同时管理多个 agent 会话、权限、证据和交接。

<!-- more -->

## 趋势信号

- OpenAI 2026-08 release notes 搜索结果显示，Codex Remote 在移动端入口、MCP forms、editable Messages approvals、任务可靠性和 streamed activity 保留上继续增强。
- Claude Code 2026-08 release notes 搜索结果显示，Remote Control、跨会话/继续会话、插件、sandbox、权限和安全控制成为高频更新点。
- 这些变化说明：agent 正从单次 CLI 对话，转向可远程接管、可并行、可审批、可恢复的工作台。

因此，个人程序员需要一个轻量“控制台”习惯：每次不是只看 agent 说了什么，而是看会话状态、授权边界、证据链和下一条安全命令。

## 适用场景

- 同时开了多个 coding agent / review agent / research agent，会话之间容易串上下文。
- 需要远程续跑任务，但不确定上一个会话是否已经提交、发布或留下 dirty diff。
- Agent 请求 MCP 表单、消息审批、插件权限、文件系统权限或生产环境操作。
- cron / headless session 输出很多，下一次接手时不知道哪条是事实、推断、待验证或必须人工授权。

## 控制台四格

| 格子 | 要回答的问题 | 最小记录 |
| --- | --- | --- |
| Session | 这个会话在做哪一个 outcome？是否还有兄弟会话？ | `session_id / repo / branch / goal / owner` |
| Permission | 它请求了哪些外部效果？哪些必须人工授权？ | `read-only / write / network / publish / money / customer` |
| Evidence | 结论来自什么命令、diff、链接或日志？ | `command + exit code + changed paths + source URL` |
| Handoff | 下一位 agent 可以安全执行哪一条命令？ | `next safe command / stop condition / avoided dirty paths` |

## 每次接手的 7 步

1. **先停住冲动**：不要直接让 agent “继续”。先确认 repo、branch、dirty paths 和是否存在未完成发布动作。
2. **列会话边界**：如果有多个会话，只给每个会话一个 outcome，例如 `修红灯`、`写文档`、`做发布 dry-run`，不要让一个会话同时负责审查和发布。
3. **核对权限层级**：读文件、跑测试、写本地文档通常可自动推进；真实发布、生产部署、客户触达、收款链接必须显式授权。
4. **收集证据而非摘要**：保留命令、exit code、相对路径、diff 范围和外部来源；少写“已验证”，多写“用什么验证”。
5. **把审批参数绑定到快照**：如果审批的是 `publish 0.0.1`，记录版本、目标平台、命令和验证时间，避免审批被复用于更大动作。
6. **只提交拥有的路径**：有启动前 dirty path 时，提交前用 pathspec 限定 `git add`，避免把别的会话产物混入。
7. **留下下一条安全命令**：交接语必须能被下一位 agent 直接执行；如果下一步是外部发布，就写授权问题，而不是写“继续发布”。

## 最小记录模板

```markdown
### Agent session control card

- Session: `<tool / session / repo / branch>`
- Outcome: `<本会话唯一目标>`
- Current state: `<green / red / blocked / waiting authorization>`
- Owned paths: `<相对路径列表>`
- Avoided dirty paths: `<相对路径列表>`
- Permission boundary: `<read-only / write / network / publish / customer / money>`
- Evidence: `<命令 + exit code + 输出摘要；外部来源 URL>`
- Approval needed: `<如果需要，写成 yes/no 问题；不需要则写无>`
- Next safe command: `<不扩大权限的下一条命令>`
```

## 个人能力建设含义

多 agent 时代，程序员的护城河会从“我能写代码”转向“我能让多个 agent 稳定交付且可审计”。值得刻意练习的不是堆更多工具，而是下面三件事：

- **会话治理**：每个 agent 只负责一个 outcome，跨会话通过 evidence card 接力。
- **授权治理**：把高风险动作从 prompt 里拆出来，变成可回答、可追溯、可撤销的审批。
- **证据治理**：让任何结论都能回到命令、diff、日志、来源或用户授权，而不是回到 agent 的自信语气。

## 停止条件

- 不知道当前会话是否已经修改、提交、发布或通知外部用户。
- 审批请求没有绑定版本、路径、参数或目标渠道。
- 多个 agent 都在改同一组文件，但没有 owner 和 handoff。
- 只有自然语言总结，没有可复跑命令、相对路径或证据来源。

触发停止条件时，下一步不是继续扩大任务，而是先写一张控制卡，恢复可接手状态。只有控制卡能回答 `Session / Permission / Evidence / Handoff`，才继续让 agent 执行。 
