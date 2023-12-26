import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c,b as n,e as s,d as e,f as l}from"./app-enJ7wihl.js";const p={},u=n("h2",{id:"github-token",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github-token","aria-hidden":"true"},"#"),s(" GITHUB_TOKEN")],-1),r=n("h2",{id:"actions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#actions","aria-hidden":"true"},"#"),s(" Actions")],-1),d={href:"https://github.com/crazy-max/ghaction-github-pages",target:"_blank",rel:"noopener noreferrer"},k=n("blockquote",null,[n("p",null,[s("登录 GitHub 进入项目 "),n("code",null,"Settings->Actions->General->Workflow permissions"),s(" 修改为 "),n("code",null,"Read and write permissions")])],-1),m={href:"https://github.com/Yikun/hub-mirror-action",target:"_blank",rel:"noopener noreferrer"},v=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1&gt; 创建 ssh 秘钥对 </span>
$ ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;xxx@email.com&quot;</span> <span class="token parameter variable">-f</span> ~/.ssh/github-sync-to-gitee
<span class="token comment"># 2&gt; 查看生成公钥</span>
$ <span class="token function">cat</span> ~/.ssh/github-sync-to-gitee.pub
<span class="token comment"># 3&gt; 登录 Gitee \`设置-&gt;安全设置-&gt;SSH公钥\` 添加同步公钥</span>
<span class="token comment"># 4&gt; 查看生成私钥</span>
$ <span class="token function">cat</span> ~/.ssh/github-sync-to-gitee
<span class="token comment"># 5&gt; 登录 GitHub 进入项目 \`Settings-&gt;Security-&gt;Secrets and variabls-&gt;Actions\` </span>
<span class="token comment">#    添加 repository secret 环境变量 (Name: GITEE_PRIVATE_KEY | Secret: 私钥)</span>
<span class="token comment"># 6&gt; 回到 Gitee \`设置-&gt;安全设置-&gt;私人令牌\` 创建 Gitee 令牌</span>
<span class="token comment"># 7&gt; 回到 GitHub 继续添加 repository secret 环境变量 (Name: GITEETOKEN | Secret: 创建的 Gitee 令牌)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> sync<span class="token punctuation">-</span>to<span class="token punctuation">-</span>gitee
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 当 push 指定分支时触发 sync </span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span> 
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
      <span class="token punctuation">-</span> gh<span class="token punctuation">-</span>pages
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">repo-sync</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Mirror the Github organization repos to Gitee.
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> Yikun/hub<span class="token punctuation">-</span>mirror<span class="token punctuation">-</span>action@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">src</span><span class="token punctuation">:</span> <span class="token string">&quot;github/naijoug&quot;</span>
          <span class="token key atrule">dst</span><span class="token punctuation">:</span> <span class="token string">&quot;gitee/naijoug&quot;</span>
          <span class="token key atrule">dst_key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">dst_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">static_list</span><span class="token punctuation">:</span> <span class="token string">&quot;docs&quot;</span> 
          <span class="token key atrule">force_update</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">debug</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(g,h){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,r,n("ul",null,[n("li",null,[n("a",d,[s("ghaction-github-pages"),e(a)]),s(" : 部署到 GitHub Pages")])]),k,n("ul",null,[n("li",null,[n("a",m,[s("hub-mirror-action"),e(a)]),s(" : 同步 GitHub 到 Gitee")])]),v])}const f=t(p,[["render",b],["__file","github-action.html.vue"]]);export{f as default};
