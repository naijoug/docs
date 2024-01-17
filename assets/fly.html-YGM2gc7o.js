import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,f as a}from"./app-k-DCva-B.js";const i={},l=a(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 登录授权</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[l];function c(r,t){return s(),e("div",null,d)}const o=n(i,[["render",c],["__file","fly.html.vue"]]);export{o as default};
