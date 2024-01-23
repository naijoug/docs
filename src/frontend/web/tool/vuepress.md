---
title: VuePress
icon: hashtag

index: true

---

## reference

- [VuePress](https://v2.vuepress.vuejs.org) 👉🏻 [🐙](https://github.com/vuepress/core)
    > Vue-Powered Static Site Generator

## starter

```shell
# 1> 创建并进入目录
$ mkdir website 
$ cd website
# 2> 初始化项目
$ pnpm init 
# 3> 安装 VuePress 依赖
$ pnpm add -D vuepress@next @vuepress/client@next vue
# 4> 创建 docs 目录，里面添加 markdown 文档
$ mkdir docs
# 5> 添加 scripts，启动本地服务器预览文档网站
{
    "scripts": {
        "docs:dev": "vuepress dev docs",    
        "docs:build": "vuepress build docs",
    }
}
$ pnpm docs:dev     # 启动本地服务器预览
$ pnpm docs:build   # 构建  
```

## config



## depoy

> GitHub Actions

```shell
# 创建新的空分支 gh-pages
$ git checkout --orphan gh-pages
# 清空分支的暂存内容
$ git rm -rf .
```

```html
<script src="https://giscus.app/client.js"
        data-repo="naijoug/giscus-discussions"
        data-repo-id="R_kgDOKwe0uw"
        data-category="Announcements"
        data-category-id="DIC_kwDOKwe0u84CbJIL"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
```
