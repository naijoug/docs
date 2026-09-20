# naijoug docs

个人程序员知识库。仓库现在把内容源和网站渲染器拆开：

- `documents/`：唯一的 Markdown / media 内容源。
- `web/vuepress/`：当前 VuePress + Theme Hope 网站工程。
- `plans/`：迁移、重构和功能实施计划。

内容源中的主要发布分区：

- `documents/awesome/`：引用资源、工具清单、项目清单等 awesome 类型内容。
- `documents/digest/`：每日热点、每周总结、每月总结等周期性摘要和简报。

## Local Development

本项目锁定 pnpm 8。若本机默认 pnpm 不是 8，可直接用 `npx` 调用指定版本。

```bash
cd web/vuepress
npx -y pnpm@8.15.9 install --frozen-lockfile
npx -y pnpm@8.15.9 run docs:dev
```

开发服务通常会输出 `http://localhost:8080/docs/`。

## Build

```bash
cd web/vuepress
npx -y pnpm@8.15.9 run docs:build
```

构建产物位于 `web/vuepress/.vuepress/dist/`。GitHub Actions 会在推送到 `main` 后构建并发布到 `gh-pages`。

## Editing Rules

- 新增或修改文章时编辑 `documents/`。
- awesome 类型内容放入 `documents/awesome/`，周期性摘要放入 `documents/digest/`。
- 修改导航、侧边栏、主题、构建脚本或公共静态资源时编辑 `web/vuepress/`。
- 不要重新创建根目录 `package.json` 作为 VuePress 入口；当前唯一 Node 工程在 `web/vuepress/`。
- `documents/.vuepress/styles` 是兼容 Theme Hope 样式加载的最小 symlink，不是第二份 VuePress 配置。

文章元数据、链接、媒体和代码 tabs 示例见 [贡献指南](CONTRIBUTING.md)；导航和主题见 [渲染器说明](web/vuepress/README.md)；执行边界与按变更类型选择的检查命令见 [AGENTS.md](AGENTS.md)。按当前任务读取相关入口即可。

## AI-assisted PR Checklist

当一次改动由 AI agent 生成或大幅参与时，先不要只写“已测试”。请把审查入口固定到证据链上：

1. 在 PR 描述中使用 `.github/pull_request_template.md`，记录启动前 `git status --short` 摘要、接管文件、避开的既有 dirty path、验证命令和未验证项。
2. 如果改动来自外部 AI 编程审查样本，使用 `.github/ISSUE_TEMPLATE/ai-coding-audit.yml` 收集失败场景、当前证据、边界和期望输出；普通仓库咨询与修复不要求填此表。
3. 如果改动来自 cron 心跳或无人值守 agent，按 `documents/trending/ai/agent-cron-planning-execution-verification-loop.md` 接续已有任务；只有目标开放时才比较候选工作，并记录选择理由与下一步。
4. Reviewer 判断 `Continue / Narrow / Stop`：范围与证据明确时继续；存在缺口时缩小；需要未知 dirty path 或无法支撑合并结论时暂停对应动作，继续不受影响的已授权工作。
5. 需要公开说明时，参考 `documents/trending/ai/ai-generated-pr-review-entry.md`；需要服务化交付时，参考 `documents/trending/ai/ai-coding-audit-service.md` 与 `documents/trending/ai/ai-coding-audit-mock-report.md`。

最小目标：下一位 reviewer 或 agent 能从 PR 说明复现第一条验证命令，并明确知道哪些结论还没有被验证。

[verify-docs workflow](.github/workflows/verify-docs.yml) 在相关 PR 中运行轻量 Markdown/目录检查及检查器回归，覆盖发布内容和仓库指南。它不发布站点，也不替代涉及渲染器改动时的构建与页面预览。
