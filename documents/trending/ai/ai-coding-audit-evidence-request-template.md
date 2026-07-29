---
title: AI 编程审查证据收集请求模板
icon: list-check

index: true
order: 40

---

# AI 编程审查证据收集请求模板

当样本提供者只给了痛点原话或模糊场景时，不要马上进入审查、报价或修复。先用这份模板索取 5 个最小证据，把对话从“我也遇到过”收束成可复核输入。

<!-- more -->

## 使用时机

适合使用：

- 对方已经表达明确痛点，但只给了截图、转述或一句 agent 结论；
- 你已经能判断问题大概率在 PR、CI、agent final report 或 reviewer 疑问中；
- 下一步需要决定进入 30-60 分钟只读审查，还是继续 `Narrow` 到一条命令。

不适合使用：

- 对方要求你登录生产环境、接触密钥、查看完整私有仓库或处理用户数据；
- 对方不能接受脱敏，只能提供不可公开的截图或完整日志；
- 这次沟通没有具体 AI 改动、失败命令、PR diff、agent log 或 reviewer 疑问。

## 复制即用版本

```text
谢谢，这个场景可以先做一轮“证据收集”，我暂时不会让你发完整仓库、密钥、用户数据或内部截图。

请只补 5 个最小证据，能脱敏就脱敏，不能提供就写“没有”：

1. 原始命令：触发问题的命令或 CI job 名称是什么？
2. Exit code / 状态：命令是通过、失败、超时，还是没有运行？
3. 失败摘要：最短 3-8 行即可，只保留错误类型、失败阶段和脱敏后的文件类别。
4. Agent 结论：agent final report 或对话里怎么描述“已验证 / 未验证 / 修好了”？只贴验证段落，不贴完整日志。
5. 改动范围：这次 AI/agent 改了哪些类型的文件？例如文档、前端组件、测试配置、CI 脚本、后端接口；不要贴私有路径。

公开边界也请补一句：哪些内容绝对不能公开？是否允许我只保留证据形状，写成匿名方法复盘？

拿到这些后，我会先交付下一条最安全的验证动作；证据不足时只写 Next evidence needed，并把高风险但未证实的问题标成 P1 Verify / Narrow，不会把推断包装成 P0 Stop 结论。
```

## 5 项证据如何判断

| 证据 | 最小合格标准 | 不合格时怎么收窄 |
| --- | --- | --- |
| 原始命令 | 有命令文本、CI job 名称或 reviewer 指出的检查项 | 只问“哪一个 job / command 失败”，不要问完整日志 |
| Exit code / 状态 | 能区分 passed / failed / timeout / not run | 如果没有 exit code，先记录状态来源，例如 CI UI 或 agent 口头结论 |
| 失败摘要 | 3-8 行，能看出失败阶段和错误类型 | 要求脱敏摘要，不要接收完整私有日志 |
| Agent 结论 | 只贴 final report 的验证段落或一句 claim | 没有 report 时标 `Unverified`，不追问完整对话 |
| 改动范围 | 用文件类别、模块类别或相对路径摘要表达 | 私有路径不可脱敏时，只写文件类型和数量 |

拿到证据后再进入 [AI 编程审查红旗分诊卡](ai-coding-audit-red-flag-triage.md)：P0 Stop 需要有具体可复核证据；如果只是“看起来可能严重”，先写成 P1 Verify，并把缺失命令、日志或人工确认放进 `Next evidence needed`。

## 分流规则

| 收到的材料 | 决策 | 下一步 |
| --- | --- | --- |
| 5 项证据基本齐全，且公开边界清楚 | `Continue` | 进入 [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) |
| 有痛点，但缺命令、exit code 或失败摘要 | `Narrow` | 只回一条补证据请求，或给下一条只读验证命令 |
| 只有截图、私有日志或不能脱敏的材料 | `Stop` | 要求对方删除敏感材料并重发证据形状；不写公开案例 |
| 对方只想要修复，不愿提供证据 | `Stop / Switch` | 不进入审查；可转为普通咨询或放弃样本 |

## 发送前检查

1. **不扩大权限**：没有索要完整仓库、密钥、生产数据、用户数据或内部截图。
2. **不承诺修复**：只承诺下一条安全验证动作或 `Next evidence needed`，不承诺“帮你改好”。
3. **不伪造结论**：没有命令输出时，把 agent 是否真的验证写成 `Unverified`。
4. **不误报 P0**：证据不足时只写 `P1 Verify / Narrow`，不要用“可能有风险”吓成阻断结论。
5. **不混淆公开边界**：公开内容只保留证据形状；公司名、仓库名、私有路径和完整日志默认不可公开。
6. **可在 10 分钟内处理**：如果模板导致对方需要整理半天，说明范围仍然太大，需要继续 `Narrow`。

## 与一页纸样例的衔接

这份模板来自 [AI 编程审查一页纸填写样例](ai-coding-audit-one-pager-filled-example.md) 的 `Next evidence needed`：

```text
raw command, exit code, failure summary, final report verification paragraph, changed file scope
```

对方补齐后，把材料写回：

- [AI 编程审查 Audit Result 记录表](ai-coding-audit-result-log-template.md) 的输入证据和公开边界；
- [AI 编程审查红旗分诊卡](ai-coding-audit-red-flag-triage.md) 的 P0 / P1 / P2 级别；
- [AI 编程审查样本到首份报告清单](ai-coding-audit-intake-to-first-report.md) 的只读审查范围；
- [AI 编程审查发布后观察清单](ai-coding-audit-publish-observation-runbook.md) 的 `Pain quote / Evidence shape / Boundary / Next evidence needed / Decision`。

Pass means：对方能用脱敏证据补齐命令、状态、失败摘要、agent 结论和改动范围。

Fail means：材料仍然只能靠截图、私有日志、泛泛描述或无法授权的信息支撑。

Next evidence needed：缺哪一项就只追哪一项，不把请求扩大成完整审查。
