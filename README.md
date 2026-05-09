# naijoug docs

个人程序员知识库。仓库现在把内容源和网站渲染器拆开：

- `documents/`：唯一的 Markdown / media 内容源。
- `web/vuepress/`：当前 VuePress + Theme Hope 网站工程。
- `plans/`：迁移、重构和功能实施计划。
- `summaries/`：草稿或生成摘要，不默认发布。

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
- 修改导航、侧边栏、主题、构建脚本或公共静态资源时编辑 `web/vuepress/`。
- 不要重新创建根目录 `package.json` 作为 VuePress 入口；当前唯一 Node 工程在 `web/vuepress/`。
- `documents/.vuepress/styles` 是兼容 Theme Hope 样式加载的最小 symlink，不是第二份 VuePress 配置。
