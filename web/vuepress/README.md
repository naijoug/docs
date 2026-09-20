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

## Configuration sources

- 依赖版本以 [package.json](package.json) 和 [pnpm-lock.yaml](pnpm-lock.yaml) 为准。
- 语言和站点 base 在 [.vuepress/config.ts](.vuepress/config.ts)：当前是 `zh-CN` 和 `/docs/`。
- [.vuepress/theme/theme.ts](.vuepress/theme/theme.ts) 配置 hostname、`docsDir: "documents"`、FontAwesome 图标和 Giscus；Markdown 扩展位于 `markdown` 配置中。
- 代码 tabs、details、include 等内容写法见 [贡献指南](../../CONTRIBUTING.md)。新增依赖某插件的语法前检查实际配置；例如 Mermaid 当前未启用。

## Sidebar and navigation

入口是 [.vuepress/theme/sidebar/sidebar.ts](.vuepress/theme/sidebar/sidebar.ts)，各知识分区有独立配置。新增顶层分区时也检查 [.vuepress/theme/navbar.ts](.vuepress/theme/navbar.ts)。

自动结构侧边栏按 `readme → order → filename → title` 排序。当前依赖实现中，正数 `order` 按从小到大排列，先于未设置 order 的页面；负数排在未设置 order 的页面后。避免依赖 `0` 的边界行为。页面的 `index: false` 不进入自动侧边栏，目录隐藏设置使用 `dir.index`。

使用 [Builder](.vuepress/theme/sidebar/builder.ts) 时，目录 link/prefix 保留末尾 `/`：

```typescript
Builder.structure("Section Title", "section/", "section/", "hashtag", true)
Builder.group("Group Title", "group/", [
  Builder.page("Subpage 1", "subpage1/"),
  Builder.page("Subpage 2", "subpage2/"),
], "group/", "hashtag", true)
Builder.page("Page Title", "page/")
```

`children: "structure"` 自动读取文件结构；手动数组需要显式维护条目。自动侧边栏之外，文章内的 README catalog 仍需要同步。

## Verification and maintenance

修改导航、排序、主题或特殊渲染语法后运行 `docs:build`，再用 `docs:dev` 检查受影响页面。普通 README 文案改动按根目录 AGENTS.md 的 Markdown 检查即可。只有出现缓存陈旧问题时才用 `docs:clean-dev`。

只有任务包含依赖升级时才运行 `npx -y pnpm@8.15.9 run docs:update-package`，并审查 package/lockfile 变化。构建产物在 `.vuepress/dist/`；部署 workflow 设置 `NODE_OPTIONS=--max_old_space_size=8192`，并在产物中创建 `.nojekyll`。
