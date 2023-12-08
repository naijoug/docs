---
title: Hexo
icon: hashtag

index: true

---

“Hexo & Pages = Blog”

[Hexo](https://hexo.io/zh-cn/) 一个基于 `Node.js` 的静态博客网站生成器。
  > `Hexo - Slogan` : ` A fast, simple & powerful blog framework`(快速、简洁且高效的博客框架)

在线的 `Git` 仓库([Github](https://github.com)、[Gitee](https://gitee.com) 都提供了免费的 `Pages` 服务(静态网页托管和发布服务)。
> 是一个静态网页托管和发布服务，支持个人博客搭建和项目主页搭建等。

- [GitHub-Pages](https://pages.github.com/)  : GitHub提供的Pages服务，可能访问速度慢。
- [Gitee-Pages](https://help.gitee.com/services/gitee-pages/intro) : Gitee提供的Pages服务，国内服务器访问速度快。

<!-- more -->

## init

``` bash
# 在电脑中安装了`Hexo`环境(前提: 已安装`Node`)    
$ npm install -g hexo-cli 
# 创建目录并使用 hexo 初始化
$ mkdir blog
$ cd blog
$ hexo init     # 执行 `git clone` 操作，从`github`上下载`Hexo`相关文件、默认皮肤`landscape`。
$ npm intall    # 安装`hexo`相关的依赖库(`package.json`)
```

初始化完成后，大致文件结构说明 :

- **_config.yml** : 网站的配置信息，可以自行修改
- **package.json** : 安装的依赖包插件信息，当安装其它插件之后也会添加到里面
- **node_modules** : 安装的依赖库和相关插件在里面
- **public** : 执行 `hexo generate` 操作生成的静态网页文件在在个文件夹下
- **scaffolds** : 模板文件夹,新建文章时使用，默认使用 `post.md`

- **source** : 网站资源文件夹
    * `_posts` : 新建的文章会在 `_posts` 文件夹下
    * `_drafts` : 草稿文件夹，没完成的文章可以放在里面，不会被生成的博客文章列表中
    * 除 `_posts` 文件夹之外，开头命名为 `_` (下划线)的文件 / 文件夹和隐藏的文件将会被忽略
 
- **themes** : 主题文件夹，安装新的皮肤之后会出现在这个文件夹下
- **.deploy_git** : 部署隐藏文件夹，当执行 `hexo deploy` 操作时，先清空`.deploy_git`文件夹，然后将`public`文件夹中生成的静态网页文件拷贝到本文件夹，最后将当中文件`push`到`GitHub`上。

## config

- [hexo-docs](https://hexo.io/zh-cn/docs/configuration.html) : 官方文档

- `_config.yml` : 配置文件
    * `langage` : 网站使用的语言，简体中文应该使用`zh-Hans`  
    * `timezone` : 网站时区，中国应该使用`Asian/Shanghai`  
    * `deploy` : 部署设置，使用`GitHub`和`Gitee`是部署到git上  
        
``` yml  Blog/_config.yml
# 方法一 :
    deploy:  
    type: git  
    repo:   
        github: git@github.com:naijoug/naijoug.github.io.git,main  
        gitee: git@gitee.com:naijoug/naijoug.git,main
# 方法二 : 
    deploy:   
        - type: git  
            repo: git@github.com:naijoug/naijoug.github.io.git  
        branch: main
        - type: git  
            repo: git@gitee.com:naijoug/naijoug.git  
        branch: main 
```

- [Themes](https://hexo.io/themes) : 皮肤专区

```shell
# 添加 cactus 皮肤
$ git submodule add https://github.com/probberechts/hexo-theme-cactus themes/cactus
```

```yml _config.yml
# 修改皮肤
theme: cactus

# 添加皮肤配置
theme_config:
  projects_url: https://github.com/naijoug
  nav: # 配置导航栏
    home: /
    articles: /archives/
    projects: https://github.com/naijoug
    about: /about/
  social_links: # 配置社交账户
    -
      icon: github
      link: https://github.com/naijoug
  logo: # 配置 logo
    enabled: true
    width: 50
    height: 50
    gravatar: true # 使用 Gravatar 作为 logo
  gravatar: # 配置 Gravatar
    email: naijoug@outlook.com
    hash: ab7e35258db202a67e071dc1000123bd
```

- [Plugins](https://hexo.io/plugins) : 插件专区
	
## usage

``` bash
# 写文章
$ hexo new name        # 通过`scaffolds/post.md`模板,新建文章到默认布局(post : source/_posts),文章名字有空格需要用`“”`
$ hexo new post name   # 同上
$ hexo new draft name  # 通过`scaffolds/draft.md`模板,新建文章到草稿布局(draft : source/draft)
$ hexo new page name   # 通过`scaffolds/page.md`模板,新建页面(page : source)
# 发布文章
$ hexo publish draft name  # 发布草稿布局(draft)中的文章到post
# 生成网页
$ hexo generate         # 就是将相关 `.md` 文件转化为了`HTML`网页文件，会将静态文件生成到 `public` 文件夹下。
# 启动网站
$ hexo server           # 默认本地启动网站, http://localhost:4000
$ hexo server -p 5000   # 指定端口启动网站
# 部署网站
$ hexo deploy           # 就是将 `.deploy_git` 文件夹的网页文件，通过命令 `git push` 部署到GitHub和Gitee上。
# 其它命令
$ hexo clean            # 清除缓存,清除`db.json` & `public\`文件夹下生成的静态文件
$ hexo list             # 列出网站资料
$ hexo version          # 查看hexo当前版本
```