---
title: VuePress Hope
icon: hashtag

index: true

---

<!-- more -->

## reference

- [VuePress Theme Hope](https://theme-hope.vuejs.press) 👉🏻 [🐙](https://github.com/vuepress-theme-hope/vuepress-theme-hope)
  > A vuepress theme with tons of features✨

##

```yml
  ---
  title: 功能禁用  # 标题
  icon: gears     # 图表 icon
  inidex: true    # 是否创建侧边栏索引     
  order: 3        # 侧边栏索引排序(越小越靠前)
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

## `Markdown` 增强 

### `codetabs` - “代码块分组”

- [docs - 代码块分组](https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html)

  这个功能很好解决了，多种编程语言对于同一解决方案的描述，可以很方便的组织界面结构。
  
  > 示例：
  
        ::: codetab
        @tab java
        ```java
        System.out.println("Hello world!");
        ```
  
        @tab python
        ```python
        print('Hello world!')
        ```
        :::

 
### `container` - “容器”

- [docs - 提示容器](https://theme-hope.vuejs.press/zh/guide/markdown/hint.html)

  提供了一个包裹内容的一系列容器，比较实用的是 `details` 容器，可以折叠内容，这个可以很方便组织内容展示形式。
  
  容器类型
  
  - `import` : 重要，紫色容器
  - `info` : 信息，青色容器
  - `note` : 注解，灰色容器
  - `tip` : 提示，绿色容器
  - `warning` : 警告，黄色容器
  - `cauting` : 危险，红色容器
  - `details` : 详情，灰色容器，可以折叠
  
  > 示例：
  
  ```md
  
  ❓这一个一个问题？
  
  ::: tip 💡提示
   
    这是问题的提示
   
  :::
  
  ::: details 💯答案
  
    我是问题的答案
  
  :::
  ```

### `@include:` - “导入”

- [docs - 导入文件](https://theme-hope.vuejs.press/zh/guide/markdown/include.html)

  这个功能可以将其它的 `markdown` 整个文件导入到当前 `markdown` 文件中，或者也导入其它 `markdown` 文件区域。
  
  有点类似编程语言中的 “宏定义”，当生成静态网页时，会将导入部分替换话为对应导入内容。
  
  这样可以很方便的组织文件结构，也可以很方便的复用文件内容。

  > `markdwon` 文件 : `test.md`
  
  ```md 
  # one
  
  ## two
  
  ### three
  
  <!-- #region #endregion 用于包裹标记的区域 -->
  // #region tag
  
  ### four
  
  ### five
  
  // #endregion tag
  
  ```

  > 导入整个文件
  
  `<!-- @include: ./test.md -->`
  
  > 导入指定行数
  
  `<!-- @include: ./test.md{2-4} -->` : 导入 2 ~ 4 行内容
  
  `<!-- @include: ./test.md{2-} -->` : 导入 2 行后面的所有内容
  
  `<!-- @include: ./test.md{-4} -->` : 导入 4 行之前的所有内容

  > 导入指定区域
  
  `<!-- @include: ./test.md#tag -->` : 导入 tag 标记的区域内容
  
## 案例

- [docs - 案例](https://theme-hope.vuejs.press/zh/demo/)

------

- [JavaGuide](https://javaguide.cn)
    > Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide！
- [mall学习教程](https://www.macrozheng.com/)
    > mall学习教程，架构、业务、技术要点全方位解析。mall项目（60k+star）是一套电商系统，使用现阶段主流技术实现。涵盖了SpringBoot、MyBatis、Elasticsearch、RabbitMQ、Redis、MongoDB、Mysql等技术，采用Docker容器化部署。
- [LearnData-开源笔记](https://newzone.top/)
    > 开源工具、效率方法、心理学探索的自我提升笔记