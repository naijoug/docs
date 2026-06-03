# VuePress Renderer

这个目录是文档站当前的 VuePress 渲染器。内容源不在本目录，而是在仓库根目录的 `documents/`。

## Commands

```bash
npx -y pnpm@8.15.9 install --frozen-lockfile
npx -y pnpm@8.15.9 run docs:dev
npx -y pnpm@8.15.9 run docs:build
npx -y pnpm@8.15.9 run docs:clean-dev
```

如果本机默认 pnpm 已是 8，可以把上面的 `npx -y pnpm@8.15.9` 替换为 `pnpm`。

## Layout

- `.vuepress/config.ts`：VuePress 主配置，显式设置 `public` 到本目录。
- `.vuepress/theme/`：Theme Hope 导航、侧边栏、插件配置；顶层内容包括 knowledge sections、`awesome/` 和 `digest/`。
- `.vuepress/public/`：网站公共静态资源。
- `.vuepress/styles/`：Theme Hope 样式配置，被 `documents/.vuepress/styles` symlink 引用。
- `.vuepress/dist/`、`.vuepress/.temp/`、`.vuepress/.cache/`：生成目录，已被忽略。

脚本必须显式传入 `../../documents --config ./.vuepress/config.ts`，因为 VuePress 2 的 `sourceDir` 由 CLI 参数控制。
