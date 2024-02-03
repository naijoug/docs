import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as o,a as p,b as n,e,d as a,f as r}from"./app-4qc0DF58.js";const c={},d=n("h2",{id:"pip",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pip","aria-hidden":"true"},"#"),e(" pip")],-1),m={href:"https://github.com/pypa/pip",target:"_blank",rel:"noopener noreferrer"},u=r(`<h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> command</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># pip</span>
$ pip <span class="token parameter variable">--version</span>         <span class="token comment"># 查看 pip 版本</span>
$ pip <span class="token function">install</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span> <span class="token comment"># 安装 Python 包</span>

<span class="token comment"># 临时使用镜像安装 Python 包</span>
$ pip <span class="token function">install</span> <span class="token parameter variable">-i</span> https://mirrors.aliyun.com/pypi/simple <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
$ pip list              <span class="token comment"># 查看已安装的 Python 包</span>

<span class="token comment"># pip config</span>
<span class="token comment"># pip 设置阿里镜像源 &gt; https://developer.aliyun.com/mirror/pypi</span>
$ pip config <span class="token builtin class-name">set</span> global.index-url https://mirrors.aliyun.com/pypi/simple/
$ pip config <span class="token builtin class-name">set</span> install.trusted-host mirrors.aliyun.com
<span class="token comment"># pip 取消设置阿里镜像源</span>
$ pip config <span class="token builtin class-name">unset</span> global.index-url
$ pip config <span class="token builtin class-name">unset</span> install.trusted-host

<span class="token comment"># 显示 pip 配置设置</span>
$ pip config list       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rye" tabindex="-1"><a class="header-anchor" href="#rye" aria-hidden="true">#</a> <code>Rye</code></h2>`,3),v={href:"https://github.com/mitsuhiko/rye",target:"_blank",rel:"noopener noreferrer"};function h(b,k){const s=t("ExternalLinkIcon");return l(),o("div",null,[p(" more "),d,n("blockquote",null,[n("p",null,[n("a",m,[e("pip"),a(s)]),e(" : The Python Package Installer")])]),u,n("blockquote",null,[n("p",null,[n("a",v,[e("Rye"),a(s)]),e(" : An Experimental Package Management Solution for Python")])])])}const _=i(c,[["render",h],["__file","index.html.vue"]]);export{_ as default};
