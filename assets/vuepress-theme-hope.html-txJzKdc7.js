import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c,a as d,b as n,e,d as a,f as l}from"./app-nOqLU-Iw.js";const r={},p=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),e(" reference")],-1),u={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope",target:"_blank",rel:"noopener noreferrer"},m=n("blockquote",null,[n("p",null,"A vuepress theme with tons of features✨")],-1),v=l(`<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">---</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span> 功能禁用  <span class="token comment"># 标题</span>
  <span class="token key atrule">icon</span><span class="token punctuation">:</span> gears     <span class="token comment"># 图表 icon</span>
  <span class="token key atrule">inidex</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>    <span class="token comment"># 是否创建侧边栏索引     </span>
  <span class="token key atrule">order</span><span class="token punctuation">:</span> <span class="token number">3</span>        <span class="token comment"># 侧边栏索引排序(越小越靠前)</span>
  <span class="token key atrule">category</span><span class="token punctuation">:</span>       <span class="token comment"># 分类</span>
    <span class="token punctuation">-</span> 使用指南
  <span class="token key atrule">tag</span><span class="token punctuation">:</span>            <span class="token comment"># 标签</span>
    <span class="token punctuation">-</span> 禁用

  <span class="token comment"># 禁用参数</span>
  <span class="token key atrule">navbar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>           <span class="token comment"># 导航栏       </span>
  <span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>          <span class="token comment"># 侧边栏</span>

  <span class="token key atrule">breadcrumb</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>       <span class="token comment"># 路径导航</span>
  <span class="token key atrule">pageInfo</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>         <span class="token comment"># 页面信息</span>
  <span class="token key atrule">contributors</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>     <span class="token comment"># 贡献者</span>
  <span class="token key atrule">editLink</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>         <span class="token comment"># 编辑此页链接</span>
  <span class="token key atrule">lastUpdated</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>      <span class="token comment"># 更新时间</span>
  <span class="token key atrule">prev</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>             <span class="token comment"># 上一页</span>
  <span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>             <span class="token comment"># 下一页</span>
  <span class="token key atrule">comment</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>          <span class="token comment"># 评论</span>
  <span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>           <span class="token comment"># 页脚</span>

  <span class="token key atrule">backtotop</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>        <span class="token comment"># 返回顶部按钮</span>
  <span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="markdown-增强" tabindex="-1"><a class="header-anchor" href="#markdown-增强" aria-hidden="true">#</a> <code>Markdown</code> 增强</h2><h3 id="codetabs-代码块分组" tabindex="-1"><a class="header-anchor" href="#codetabs-代码块分组" aria-hidden="true">#</a> <code>codetabs</code> - “代码块分组”</h3>`,4),k={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"这个功能很好解决了，多种编程语言对于同一解决方案的描述，可以很方便的组织界面结构。",-1),h=n("blockquote",null,[n("p",null,"示例：")],-1),_=n("pre",null,[n("code",null,`  ::: codetab
  @tab java
  \`\`\`java
  System.out.println("Hello world!");
  \`\`\`

  @tab python
  \`\`\`python
  print('Hello world!')
  \`\`\`
  :::
`)],-1),f=n("h3",{id:"container-容器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#container-容器","aria-hidden":"true"},"#"),e(),n("code",null,"container"),e(" - “容器”")],-1),g={href:"https://theme-hope.vuejs.press/zh/guide/markdown/hint.html",target:"_blank",rel:"noopener noreferrer"},w=l(`<p>提供了一个包裹内容的一系列容器，比较实用的是 <code>details</code> 容器，可以折叠内容，这个可以很方便组织内容展示形式。</p><p>容器类型</p><ul><li><code>import</code> : 重要，紫色容器</li><li><code>info</code> : 信息，青色容器</li><li><code>note</code> : 注解，灰色容器</li><li><code>tip</code> : 提示，绿色容器</li><li><code>warning</code> : 警告，黄色容器</li><li><code>cauting</code> : 危险，红色容器</li><li><code>details</code> : 详情，灰色容器，可以折叠</li></ul><blockquote><p>示例：</p></blockquote><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
❓这一个一个问题？

::: tip 💡提示
 
  这是问题的提示
 
:::

::: details 💯答案

  我是问题的答案

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y=n("h3",{id:"include-导入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#include-导入","aria-hidden":"true"},"#"),e(),n("code",null,"@include:"),e(" - “导入”")],-1),x={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},q=l(`<p>这个功能可以将其它的 <code>markdown</code> 整个文件导入到当前 <code>markdown</code> 文件中，或者也导入其它 <code>markdown</code> 文件区域。</p><p>有点类似编程语言中的 “宏定义”，当生成静态网页时，会将导入部分替换话为对应导入内容。</p><p>这样可以很方便的组织文件结构，也可以很方便的复用文件内容。</p><blockquote><p><code>markdwon</code> 文件</p></blockquote><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> one</span>

<span class="token title important"><span class="token punctuation">##</span> two</span>

<span class="token title important"><span class="token punctuation">###</span> three</span>

// #region tag

<span class="token title important"><span class="token punctuation">####</span> four</span>

<span class="token title important"><span class="token punctuation">####</span> five</span>

// #endregion tag

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>导入整个文件</p></blockquote><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
File not found

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>导入指定行数</p></blockquote><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
File not found


File not found


File not found

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>导入指定区域</p></blockquote><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
File not found

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),j=n("h2",{id:"案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),e(" 案例")],-1),z={href:"https://theme-hope.vuejs.press/zh/demo/",target:"_blank",rel:"noopener noreferrer"},B=n("hr",null,null,-1),F={href:"https://javaguide.cn",target:"_blank",rel:"noopener noreferrer"},J=n("blockquote",null,[n("p",null,"Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide！")],-1),M={href:"https://www.macrozheng.com/",target:"_blank",rel:"noopener noreferrer"},N=n("blockquote",null,[n("p",null,"mall学习教程，架构、业务、技术要点全方位解析。mall项目（60k+star）是一套电商系统，使用现阶段主流技术实现。涵盖了SpringBoot、MyBatis、Elasticsearch、RabbitMQ、Redis、MongoDB、Mysql等技术，采用Docker容器化部署。")],-1),V={href:"https://newzone.top/",target:"_blank",rel:"noopener noreferrer"},E=n("blockquote",null,[n("p",null,"开源工具、效率方法、心理学探索的自我提升笔记")],-1);function L(D,H){const s=t("ExternalLinkIcon");return i(),c("div",null,[d(" more "),p,n("ul",null,[n("li",null,[n("a",u,[e("vuepress-theme-hope"),a(s)]),m])]),v,n("ul",null,[n("li",null,[n("p",null,[n("a",k,[e("docs - 代码块分组"),a(s)])]),b,h,_])]),f,n("ul",null,[n("li",null,[n("p",null,[n("a",g,[e("docs - 提示容器"),a(s)])]),w])]),y,n("ul",null,[n("li",null,[n("p",null,[n("a",x,[e("docs - 导入文件"),a(s)])]),q])]),j,n("ul",null,[n("li",null,[n("a",z,[e("docs - 案例"),a(s)])])]),B,n("ul",null,[n("li",null,[n("a",F,[e("JavaGuide"),a(s)]),J]),n("li",null,[n("a",M,[e("mall学习教程"),a(s)]),N]),n("li",null,[n("a",V,[e("LearnData-开源笔记"),a(s)]),E])])])}const C=o(r,[["render",L],["__file","vuepress-theme-hope.html.vue"]]);export{C as default};
