import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as a,c as i,a as c,b as e,e as o,d as n,f as s}from"./app-TyFLvDt8.js";const h={},d=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),o(" Reference")],-1),u={href:"https://github.com/docker",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/yeasy/docker_practice",target:"_blank",rel:"noopener noreferrer"},_={href:"https://yeasy.gitbook.io/docker_practice",target:"_blank",rel:"noopener noreferrer"},f=e("blockquote",null,[e("p",null,"Learn and understand Docker&Container technologies, with real DevOps practice!")],-1),k={href:"https://github.com/hangyan/docker-resources",target:"_blank",rel:"noopener noreferrer"},m={href:"https://fe.zuo11.com/server/docker.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zhuanlan.zhihu.com/p/53260098",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"tool",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tool","aria-hidden":"true"},"#"),o(" Tool")],-1),x={href:"https://github.com/orbstack/orbstack",target:"_blank",rel:"noopener noreferrer"},v=e("blockquote",null,[e("p",null,"Fast, light, simple Docker containers & Linux machines for macOS")],-1),D={href:"https://github.com/lima-vm/lima",target:"_blank",rel:"noopener noreferrer"},q=e("blockquote",null,[e("p",null,"Linux virtual machines, typically on macOS, for running containerd")],-1),L={href:"https://github.com/abiosoft/colima",target:"_blank",rel:"noopener noreferrer"},y=e("blockquote",null,[e("p",null,"Container runtimes on macOS (and Linux) with minimal setup")],-1),C={href:"https://github.com/hashicorp/vagrant",target:"_blank",rel:"noopener noreferrer"},O=e("blockquote",null,[e("p",null,"Vagrant is a tool for building and distributing development environments.")],-1),S=s(`<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><ul><li><p><code>Linux Namespace</code> : Linux 提供的一种内核级别环境隔离的方法。</p></li><li><p>Linux 超级父进程的 PID : 1</p></li><li><p>Image : 镜像</p><blockquote><p>一个特殊的文件系统，提供容器运行时所需的程序、库、资源、配置(环境变量、用户...)等，不包含任何动态数据，在构建之后内容不再改变。</p></blockquote><p><strong>分层存储</strong> : 镜像构建会一层层构建，前一层是后一层的基础。每一层构建完成，就不会再改变，改变只会在当前层发生。</p></li><li><p>Container : 容器</p><blockquote><p>可以理解为镜像的一个实例。实质是进程，但是与宿主机上的进程不同，容器运行在属于自己的名称空间中。</p></blockquote></li><li><p>Repository : 仓库</p><blockquote><p>集中管理镜像的存储、分发的服务。</p></blockquote><ul><li>Docker Hub (Official)</li><li>Quay.io (CoreOS)</li></ul></li></ul><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h2><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function V(N,I){const r=l("ExternalLinkIcon");return a(),i("div",null,[c(" more "),d,e("ul",null,[e("li",null,[e("a",u,[o("Docker"),n(r)])]),e("li",null,[e("a",p,[o("docker_practice"),n(r)]),o(" : "),e("a",_,[o("Docker — 从入门到实践"),n(r)]),f]),e("li",null,[e("a",k,[o("Docker Resources"),n(r)])]),e("li",null,[e("a",m,[o("Docker 基础"),n(r)])]),e("li",null,[e("a",b,[o("10分钟看懂 Docker 和 K8S"),n(r)])])]),g,e("ul",null,[e("li",null,[e("a",x,[o("OrbStack"),n(r)]),v]),e("li",null,[e("a",D,[o("Lima"),n(r)]),q]),e("li",null,[e("a",L,[o("Colima"),n(r)]),y]),e("li",null,[e("a",C,[o("Vagrant"),n(r)]),O])]),S])}const E=t(h,[["render",V],["__file","index.html.vue"]]);export{E as default};