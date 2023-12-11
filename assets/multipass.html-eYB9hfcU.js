import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c as u,b as s,e as n,d as e,f as p}from"./app-KOLbvikU.js";const c={},m=s("h2",{id:"reference",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),n(" Reference")],-1),r={href:"https://multipass.run",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/canonical/multipass",target:"_blank",rel:"noopener noreferrer"},d=p(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 multipass</span>
$ brew <span class="token function">install</span> multipass

$ multipass <span class="token parameter variable">--help</span> <span class="token comment"># 查看帮助</span>
$ multipass <span class="token parameter variable">-h</span>
$ multipass launch <span class="token parameter variable">--help</span> <span class="token comment"># 查看 launch 指令帮助</span>
$ multipass <span class="token function">find</span> <span class="token comment"># 查看可用镜像</span>
$ multipass launch <span class="token parameter variable">--name</span> ubuntu <span class="token comment"># 使用最新版 LTS 镜像创建实例</span>
$ multipass shell ubuntu <span class="token comment"># 进入名字为 ubuntu 实例的 shell 终端</span>
$ multipass <span class="token builtin class-name">exec</span> ubuntu -- lsb_release <span class="token parameter variable">-a</span> <span class="token comment"># 使用 multipass 运行 ubuntu 实例命令</span>
$ multipass list <span class="token comment"># 查看虚拟机实例列表</span>
$ multipass info ubuntu <span class="token comment"># 查看 ubuntu 实例信息</span>
$ multipass info <span class="token parameter variable">--all</span> <span class="token comment"># 查看所有实例信息</span>
$ multipass start ubuntu <span class="token comment"># 启动 ubuntu 实例</span>
$ multipass start <span class="token parameter variable">--all</span> <span class="token comment"># 启动所有实例</span>
$ multipass stop ubuntu <span class="token comment"># 停止 ubuntu 实例</span>
$ multipass stop <span class="token parameter variable">--all</span> <span class="token comment"># 停止所有实例</span>
$ multipass delete ubuntu <span class="token comment"># 删除 ubuntu 实例</span>
$ multipass delete <span class="token parameter variable">--purge</span> ubuntu <span class="token comment"># 删除并清理 ubuntu 实例</span>
$ multipass delete <span class="token parameter variable">--all</span> <span class="token comment"># 删除所有实例</span>

$ multipass <span class="token function">mount</span> path/to/dev ubuntu:path/to/dev <span class="token comment"># 将本地目录挂载到 ubuntu 实例目录</span>
$ multipass unmount ubuntu <span class="token comment"># 卸载 ubuntu 实例所有挂载目录</span>
$ multipass unmount ubuntu:path/to/dev <span class="token comment"># 卸载 ubuntu 实例指定挂载目录</span>
$ multipass transfer path/to/file ubuntu:path/to/file <span class="token comment"># 从宿主机传送文件到虚拟机内部</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(v,k){const a=l("ExternalLinkIcon");return i(),u("div",null,[m,s("ul",null,[s("li",null,[s("a",r,[n("Multipass - Official"),e(a)])]),s("li",null,[s("a",o,[n("Multipass - GitHub"),e(a)])])]),d])}const _=t(c,[["render",b],["__file","multipass.html.vue"]]);export{_ as default};
