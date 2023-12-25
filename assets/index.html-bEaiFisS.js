import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c as d,a as p,b as e,d as n,w as s,e as t,f as r}from"./app-3jL1FZzb.js";const h={},u=e("blockquote",null,[e("p",null,"OS : Operating System")],-1),m=e("h2",{id:"catalog",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#catalog","aria-hidden":"true"},"#"),t(" catalog")],-1),_=r('<h2 id="virtual-machine" tabindex="-1"><a class="header-anchor" href="#virtual-machine" aria-hidden="true">#</a> Virtual Machine</h2><table><thead><tr><th>System</th><th>虚拟化方案</th></tr></thead><tbody><tr><td><code>macOS</code></td><td><code>HyperKit</code></td></tr><tr><td><code>Linux</code></td><td><code>KVM</code></td></tr><tr><td><code>Windows</code></td><td><code>Hyper-V</code></td></tr></tbody></table>',2),k={href:"https://www.parallels.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.vmware.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.virtualbox.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://veertu.com/",target:"_blank",rel:"noopener noreferrer"},v=e("blockquote",null,[e("p",null,"macOS cloud for iOS CI and Devops")],-1),x={href:"https://getutm.app/",target:"_blank",rel:"noopener noreferrer"},w=e("blockquote",null,[e("p",null,"Run virtual machines on iOS")],-1),H={href:"https://github.com/canonical/multipass",target:"_blank",rel:"noopener noreferrer"},T=e("blockquote",null,[e("p",null,"Multipass orchestrates virtual Ubuntu instances")],-1),P=e("h2",{id:"computer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#computer","aria-hidden":"true"},"#"),t(" Computer")],-1),V={href:"https://github.com/wa-lang/ugo-compiler-book",target:"_blank",rel:"noopener noreferrer"},A=e("blockquote",null,[e("p",null,"📚 µGo语言实现(从头开发一个迷你Go语言编译器)[Go版本+Rust版本]")],-1),y=r(`<h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> PATH</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token comment"># 查看环境变量</span>
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:<span class="token operator">&lt;</span><span class="token environment constant">PATH</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>:<span class="token operator">&lt;</span><span class="token environment constant">PATH</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>:<span class="token operator">&lt;</span><span class="token environment constant">PATH</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>:----:<span class="token operator">&lt;</span><span class="token environment constant">PATH</span> N<span class="token operator">&gt;</span> <span class="token comment"># 设置 PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>环境变量加载顺序</p><ol><li><code>/etc/profile</code> (文件)</li><li><code>/etc/paths</code> (文件) -&gt; 所有用户有效</li><li><code>/etc/paths.d</code> (目录) -&gt; 所有用户有效</li><li><code>~/.bash_profile</code> (文件) -&gt; 当前用户有效</li></ol></li><li><p>修改环境变量</p><ol><li>修改 <code>/etc/paths</code> 文件 (直接将环境变量路径加入)</li><li>修改 <code>/etc/paths.d</code> 目录 (在该目录新建文件，在新建文件中加入环境变量路径)</li><li>修改 <code>~/.bash_profile</code> 文件 (在 <code>PATH</code> 变量中加入新的路径，路径之间用 <code>:</code> 分割)</li></ol></li><li><p>更新环境变量(使新加入的环境变量生效)</p><ol><li>修改 <code>/etc/paths.d</code> 目录，直接生效</li><li>修改 <code>/etc/paths</code> 和 <code>~/.bash_profile</code> 文件，需要使用命令 <code>source 文件名</code> 使得对应文件生效，否则需要重新登录(注销后)环境变量才能生效</li></ol></li></ul>`,3);function S(O,L){const a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),d("div",null,[u,p(" more "),m,e("ul",null,[e("li",null,[n(a,{to:"/programmer/system/macos/"},{default:s(()=>[t("macOS")]),_:1})]),e("li",null,[n(a,{to:"/programmer/system/linux/"},{default:s(()=>[t("Linux")]),_:1})]),e("li",null,[n(a,{to:"/programmer/system/windows/"},{default:s(()=>[t("Windows")]),_:1})])]),_,e("ul",null,[e("li",null,[e("a",k,[t("Paralles"),n(o)])]),e("li",null,[e("a",f,[t("VMware"),n(o)])]),e("li",null,[e("a",b,[t("VirtualBox"),n(o)])]),e("li",null,[e("a",g,[t("Veertu"),n(o)]),v]),e("li",null,[e("a",x,[t("UTM"),n(o)]),w]),e("li",null,[e("a",H,[t("Multipass"),n(o)]),T])]),P,e("ul",null,[e("li",null,[e("a",V,[t("µGo语言实现——从头开发一个迷你Go语言编译器"),n(o)]),A])]),y])}const q=c(h,[["render",S],["__file","index.html.vue"]]);export{q as default};
