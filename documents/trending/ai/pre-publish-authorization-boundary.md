---
title: Pre-publish Authorization Boundary
icon: robot
index: true
order: 35
---

# Pre-publish Authorization Boundary

发布动作不是普通验证命令。AI agent 可以把包、文档或工具收口到“可发布”，但不能把需要账号、品牌和用户承诺的最后一步伪装成自动化任务。

<!-- more -->

## 适用场景

- 包、插件、网站、课程或服务页已经通过本地验证，下一步看起来只差 `publish`、`deploy`、`release`、`send` 或公开推广。
- cron / agent 正在无人值守运行，无法向用户实时确认授权。
- 仓库里存在启动前 dirty path，需要区分“继续收口”与“接管发布”。
- 交付物会触发外部可见结果：pub.dev、npm、GitHub Release、生产站点、邮件列表、社交账号、付费渠道。

## 核心原则

把发布前工作拆成两层：

1. **可自动推进的收口层**：测试、lint、format、dry-run、README、changelog、release checklist、示例输出、链接检查、打包预检。
2. **必须显式授权的发布层**：真实上传、打 tag 后推送、生产部署、对外宣传、收款页面上线、给潜在客户发送邀约。

Agent 可以完成第一层，并把第二层所需的授权问题压缩成一张清单；但不能因为 dry-run 通过就执行真实发布。

## 发布前边界卡

```text
Artifact: <包 / 网站 / 服务页 / 课程 / 邮件>
Release target: <版本号、URL 或渠道>
Owned changes: <本轮明确接管的相对路径>
Avoided dirty paths: <启动前已有、未接管的相对路径>
Verification passed: <命令 + 结果摘要>
External effect if published: <谁会看到、是否可回滚、是否涉及收费>
Authorization needed: <需要用户回答的最小 yes/no 问题>
Next safe command: <不触发真实发布的下一条命令>
```

## 决策表

| 状态 | Agent 可以做 | Agent 不能做 |
| --- | --- | --- |
| 本地测试未通过 | 修最小红灯，或记录失败边界 | 为赶进度跳过验证发布 |
| dry-run 通过但未授权 | 更新 checklist，记录发布命令和授权问题 | 执行真实 `publish` / `deploy` |
| 有启动前 dirty path | 只提交本轮 owned path，记录 avoided path | `git add .` 或重写归属不明文件 |
| 授权问题不清 | 写成一条可回答问题，例如“是否发布 `0.0.1` 到 pub.dev？” | 自行假设品牌、价格、账号和发布时间 |
| 用户已明确授权 | 先重跑 verification，再执行指定发布动作 | 扩大版本、渠道或宣传范围 |

## 可自动完成的收口清单

- README 能解释目标用户、最短上手路径和限制。
- CHANGELOG / release notes 覆盖用户可见变化，而不是只写内部重构。
- 示例可以本地运行，并且输出与 checklist 记录一致。
- dry-run 或 build artifact 没有 warning / error；如果有，记录是否发布阻塞。
- 工作区提交只包含本轮 owned path；其它 dirty path 在 handoff 中列出。
- notebook 或交接记录写清下一条安全命令，而不是“下次发布”。

## 授权问题模板

```text
当前 artifact 已通过：<验证命令摘要>。
外部影响：<发布后谁可见、是否可回滚、是否收费>。
需要你确认：是否允许我把 <版本/渠道> 发布到 <平台>？
若确认，我会先重跑 <验证命令>，然后只执行 <具体发布命令>。
```

## 与收入实验的关系

收入实验也遵守同样边界：可以自动生成 offer、样例报告、预检清单和发送脚本，但只要涉及真实客户触达、公开标价、收款链接或账号发布，就必须明确授权。这样既能持续推进资产，又不会把“可销售”误当成“已销售”。

## 停止条件

- 唯一剩余动作是外部发布，而用户没有授权。
- dry-run 结果依赖未提交或归属不明的 dirty path。
- 发布后需要长期支持，但 README / issue tracker / rollback plan 尚未写清。
- agent 无法访问必要账号，却仍试图伪造发布结果。

触发停止条件时，本轮应该停止在“可发布证据包”：验证输出、变更清单、授权问题和下一条安全命令。不要用假的链接、假的版本页或未执行的发布结果填补空白。
