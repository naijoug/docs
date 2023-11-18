# Hello VuePress

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

## depoy

> GitHub Actions


- [ghaction-github-pages](https://github.com/crazy-max/ghaction-github-pages) : 部署到 GitHub Pages
- [hub-mirror-action](https://github.com/Yikun/hub-mirror-action) : 同步 GitHub 到 Gitee
