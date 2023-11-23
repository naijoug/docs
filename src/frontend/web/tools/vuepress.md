---
title: VuePress
icon: hashtag
index: true

---

## reference

- [VuePress V2 docs](https://v2.vuepress.vuejs.org/zh/guide)

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

## theme

- [hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope)
    > A vuepress theme with tons of features✨

```yml
---
title: 功能禁用  # 标题
icon: gears     # 图表 icon
order: 3        # 排序
category:       # 分类
  - 使用指南
tag:            # 标签
  - 禁用

# 禁用参数
navbar: false           # 导航栏       
sidebar: false          # 侧边栏

breadcrumb: false       # 路径导航
pageInfo: false         # 页面信息
contributors: false     # 贡献者
editLink: false         # 编辑此页链接
lastUpdated: false      # 更新时间
prev: false             # 上一页
next: false             # 下一页
comment: false          # 评论
footer: false           # 页脚

backtotop: false        # 返回顶部按钮
---
```

## depoy

> GitHub Actions

```shell
# 创建新的空分支 gh-pages
$ git checkout --orphan gh-pages
# 清空分支的暂存内容
$ git rm -rf .
```

```yml

```

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

## hope

align-center
home
box
blog
route
copy
search
lock
table-columns
clipboard-check
box-archive
chart-simple
quote-left
ellipsis
chart-pie
highlighter
superscript
image
person-chalkboard
square-check
square-root-variable
code
laptop-code
palette
circle-half-stroke
circle-info
comment-dots
object-group
puzzle-piece
mobile-screen
rss
sitemap
dumbbell


## cases

- [JavaGuide](https://javaguide.cn)
    > Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide！
- [mall学习教程](https://www.macrozheng.com/)
    > mall学习教程，架构、业务、技术要点全方位解析。mall项目（60k+star）是一套电商系统，使用现阶段主流技术实现。涵盖了SpringBoot、MyBatis、Elasticsearch、RabbitMQ、Redis、MongoDB、Mysql等技术，采用Docker容器化部署。
- [LearnData-开源笔记](https://newzone.top/)
    > 开源工具、效率方法、心理学探索的自我提升笔记
