import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c,a as s,b as n,d as l,f as o}from"./app-VvAvirbM.js";const r={},d=s("h1",{id:"hello-vuepress",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#hello-vuepress","aria-hidden":"true"},"#"),n(" Hello VuePress")],-1),p=s("h2",{id:"reference",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),n(" reference")],-1),u={href:"https://v2.vuepress.vuejs.org/zh/guide",target:"_blank",rel:"noopener noreferrer"},m=o(`<h2 id="starter" tabindex="-1"><a class="header-anchor" href="#starter" aria-hidden="true">#</a> starter</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1&gt; 创建并进入目录</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function v(b,h){const e=i("ExternalLinkIcon");return t(),c("div",null,[d,p,s("ul",null,[s("li",null,[s("a",u,[n("VuePress V2 docs"),l(e)])])]),m])}const f=a(r,[["render",v],["__file","vuepress.html.vue"]]);export{f as default};
