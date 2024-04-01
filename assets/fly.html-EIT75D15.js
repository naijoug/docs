import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as r,c,a as t,b as e,e as n,d as a,f as d}from"./app-xLzS-xd6.js";const o={},m=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),n(" reference")],-1),v={href:"https://fly.io",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/superfly",target:"_blank",rel:"noopener noreferrer"},u=d(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 flyctl</span>
brew <span class="token function">install</span> flyctl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 登录授权</span>
fly auth login 

<span class="token comment"># cd 进入项目根目录</span>
<span class="token comment"># 部署并启动项目</span>
fly launch <span class="token parameter variable">--now</span> 
<span class="token comment"># 部署</span>
fly deploy

<span class="token comment"># 查询当前服务列表</span>
fly services list

<span class="token comment"># 查询当前应用列表</span>
fly apps list
<span class="token comment"># 重启应用</span>
fly apps restart <span class="token operator">&lt;</span>app-name<span class="token operator">&gt;</span>

<span class="token comment"># 查询当前状态</span>
fly status

<span class="token comment"># 查看运行日志</span>
fly logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function b(f,h){const s=i("ExternalLinkIcon");return r(),c("div",null,[t(" more "),m,e("ul",null,[e("li",null,[e("a",v,[n("Fly.io"),a(s)]),n(" 👉🏻 "),e("a",p,[n("🐙"),a(s)])])]),u])}const g=l(o,[["render",b],["__file","fly.html.vue"]]);export{g as default};
