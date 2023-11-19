import{_ as t,r as i,o,c,a as n,b as s,d as a,e as r}from"./app-iaALpFdf.js";const l={},d=n("h1",{id:"hello-vuepress",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hello-vuepress","aria-hidden":"true"},"#"),s(" Hello VuePress")],-1),p=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),u={href:"https://v2.vuepress.vuejs.org/zh/guide",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="starter" tabindex="-1"><a class="header-anchor" href="#starter" aria-hidden="true">#</a> starter</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1&gt; 创建并进入目录</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h2><h2 id="depoy" tabindex="-1"><a class="header-anchor" href="#depoy" aria-hidden="true">#</a> depoy</h2><blockquote><p>GitHub Actions</p></blockquote>`,5),v={href:"https://github.com/crazy-max/ghaction-github-pages",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/Yikun/hub-mirror-action",target:"_blank",rel:"noopener noreferrer"};function b(k,f){const e=i("ExternalLinkIcon");return o(),c("div",null,[d,p,n("ul",null,[n("li",null,[n("a",u,[s("VuePress V2 docs"),a(e)])])]),m,n("ul",null,[n("li",null,[n("a",v,[s("ghaction-github-pages"),a(e)]),s(" : 部署到 GitHub Pages")]),n("li",null,[n("a",h,[s("hub-mirror-action"),a(e)]),s(" : 同步 GitHub 到 Gitee")])])])}const _=t(l,[["render",b],["__file","vuepress.html.vue"]]);export{_ as default};
