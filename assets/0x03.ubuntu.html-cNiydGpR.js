import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as o,b as n,e as s,d as l,f as i}from"./app-NPdVLJBN.js";const p={},d=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" Reference")],-1),u={href:"https://ubuntu.com/",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前 Ubuntu 版本详细信息</span>
$ lsb_release <span class="token parameter variable">-a</span> 
$ <span class="token function">cat</span> /etc/issue
$ <span class="token function">cat</span> /etc/os-release
$ <span class="token function">uname</span> <span class="token parameter variable">-a</span>

$ <span class="token function">sudo</span> <span class="token function">passwd</span> <span class="token comment"># 设置 root 密码</span>
$ <span class="token function">su</span> root <span class="token comment"># 切换到 root 账户</span>

<span class="token comment"># 查看网卡 IP 的三种方法</span>
$ <span class="token function">ip</span> addr
$ <span class="token function">ifconfig</span>
$ <span class="token function">ip</span> address show eth0 <span class="token comment"># eth0 网卡名字</span>
<span class="token comment"># Ubuntu 设置多个 IP 地址</span>
<span class="token comment">#   方案一 : ip addr (临时生效，重启失效)</span>
$ <span class="token function">ip</span> addr <span class="token function">add</span> <span class="token number">192.168</span>.1.110/20 dev eth0 <span class="token comment"># 为网卡 eth0 添加一个新的 IP 地址 </span>
$ <span class="token function">ip</span> addr del <span class="token number">192.168</span>.1.110/20 dev eth0 <span class="token comment"># 为网卡 eth0 删除一个 IP 地址</span>
<span class="token comment">#   方案二 : ifconfig (临时生效)</span>
$ <span class="token function">ifconfig</span> eth0:0 <span class="token number">192.168</span>.1.110 <span class="token comment"># 添加多个 eth0:0、eth0:1...</span>
<span class="token comment">#   方案三 : 修改网卡配置文件，永久生效</span>
$ <span class="token function">vim</span> /etc/network/interfaces
<span class="token comment">#   添加内容 :</span>
<span class="token comment">#   auto eth0:0</span>
<span class="token comment">#   iface eth0:0 inet static</span>
<span class="token comment">#   address 192.168.1.110/20</span>
$ <span class="token function">ifdown</span> eth0 <span class="token operator">&amp;</span> <span class="token function">ifup</span> eth0 <span class="token comment"># 重启网卡生效</span>

$ locale <span class="token comment"># 查看系统当前 locale</span>
$ locale <span class="token parameter variable">-a</span> <span class="token comment"># 查看系统支持的语言包</span>
<span class="token comment"># 设置 locale 支持中文 (\`zh_CN.UTF-8\`)</span>
$ <span class="token function">sudo</span> <span class="token function">apt</span> search language-pack-zh <span class="token comment"># 搜索中文语言包</span>
$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> language-pack-zh-hans <span class="token comment"># 安装中文语言包</span>
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF-8 <span class="token comment"># 临时修改方案 : 修改 LANG 值</span>
$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/default/locale <span class="token comment"># 永久修改方案 : 修改 locale 系统文件</span>
<span class="token comment">#       LANG=&quot;zh_CN.UTF-8&quot;      | &quot;en_US.UTF-8&quot;</span>
<span class="token comment">#       LANGUAGE=&quot;zh_CN:zh&quot;     | &quot;en_US.us&quot;</span>
<span class="token comment"># error : locale: Cannot set LC_ALL to default locale: No such file or directory</span>
$ <span class="token function">sudo</span> locale-gen zh_CN.UTF-8 <span class="token comment"># 根据模板生成指定语言库</span>

<span class="token comment"># 无法解析主机 </span>
$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/hostname <span class="token comment"># 修改的 hostname</span>
$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/hosts <span class="token comment"># 添加 hostname 的本机 ip</span>
<span class="token comment">#   127.0.1.1 XXX</span>

<span class="token comment"># install desktop</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> ubuntu-desktop xrdp <span class="token parameter variable">-y</span> <span class="token comment"># 安装左面和 RDP 软件</span>
$ <span class="token function">sudo</span> adduser <span class="token punctuation">[</span><span class="token environment constant">USER</span><span class="token punctuation">]</span> <span class="token comment"># 创建新用户</span>
$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">sudo</span> <span class="token punctuation">[</span><span class="token environment constant">USER</span><span class="token punctuation">]</span> <span class="token comment"># 用户授权</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function r(v,k){const a=t("ExternalLinkIcon");return c(),o("div",null,[d,n("ul",null,[n("li",null,[n("a",u,[s("Ubuntu"),l(a)])])]),m])}const h=e(p,[["render",r],["__file","0x03.ubuntu.html.vue"]]);export{h as default};
