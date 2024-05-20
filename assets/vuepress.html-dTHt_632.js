import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as o,b as n,e as s,d as t,f as l}from"./app-6ik61Qih.js";const i={},u=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),r={href:"https://v2.vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/vuepress/core",target:"_blank",rel:"noopener noreferrer"},k=n("blockquote",null,[n("p",null,"Vue-Powered Static Site Generator")],-1),v=l(`<h2 id="starter" tabindex="-1"><a class="header-anchor" href="#starter" aria-hidden="true">#</a> starter</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1&gt; 创建并进入目录</span>
$ <span class="token function">mkdir</span> website 
$ <span class="token builtin class-name">cd</span> website
<span class="token comment"># 2&gt; 初始化项目</span>
$ <span class="token function">pnpm</span> init 
<span class="token comment"># 3&gt; 安装 VuePress 依赖</span>
$ <span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next @vuepress/client@next vue
<span class="token comment"># 4&gt; 创建 docs 目录，里面添加 markdown 文档</span>
$ <span class="token function">mkdir</span> docs
<span class="token comment"># 5&gt; 添加 scripts，启动本地服务器预览文档网站</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;docs:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span>,    
        <span class="token string">&quot;docs:build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>,
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
$ <span class="token function">pnpm</span> docs:dev     <span class="token comment"># 启动本地服务器预览</span>
$ <span class="token function">pnpm</span> docs:build   <span class="token comment"># 构建  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h2><h2 id="depoy" tabindex="-1"><a class="header-anchor" href="#depoy" aria-hidden="true">#</a> depoy</h2><blockquote><p>GitHub Actions</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建新的空分支 gh-pages</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">--orphan</span> gh-pages
<span class="token comment"># 清空分支的暂存内容</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://giscus.app/client.js<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-repo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>naijoug/giscus-discussions<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-repo-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>R_kgDOKwe0uw<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-category</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Announcements<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-category-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DIC_kwDOKwe0u84CbJIL<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pathname<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-strict</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-reactions-enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-emit-metadata</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-input-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preferred_color_scheme<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anonymous<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">async</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function m(b,h){const a=p("ExternalLinkIcon");return c(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("VuePress"),t(a)]),s(" 👉🏻 "),n("a",d,[s("🐙"),t(a)]),k])]),v])}const f=e(i,[["render",m],["__file","vuepress.html.vue"]]);export{f as default};