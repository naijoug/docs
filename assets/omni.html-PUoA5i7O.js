import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as r,c as l,b as n,e,d as a,f as t}from"./app-QmDm9YZL.js";const c={},d=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),e(" reference")],-1),m={href:"https://github.com/OmniLayer",target:"_blank",rel:"noopener noreferrer"},p={href:"http://www.omnilayer.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/OmniLayer/omnicore/wiki",target:"_blank",rel:"noopener noreferrer"},v={href:"https://omniexplorer.info",target:"_blank",rel:"noopener noreferrer"},b={href:"https://steemit.com/usdt/@chaimyu/omni-usdt",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载源码</span>
$ <span class="token function">git</span> clone https://github.com/OmniLayer/omnicore.git
<span class="token comment"># 下载依赖 : 同 bitcoin 项目一样，之前编译过 bitcoin 项目不需要重复下载</span>
<span class="token comment"># 编译</span>
$ ./autogen.sh
$ ./configure
$ ./configure -without-gui <span class="token comment"># 不编译 GUI 界面的 Qt 客户端</span>
$ <span class="token function">make</span>
$ <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>macOS make 编译报错</p></blockquote><ul><li><code>miner.h</code> &amp; <code>txmempool.h</code> 中函数报错 <blockquote><p>Solution : 报错函数尾部添加 <code>const</code></p></blockquote></li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ omnicored <span class="token comment"># 启动主网</span>
$ omnicored <span class="token parameter variable">-conf</span><span class="token operator">=</span><span class="token environment constant">PATH</span>/TO/bitcon.conf <span class="token parameter variable">-datadir</span><span class="token operator">=</span>/<span class="token environment constant">PATH</span>/TO/DATADIR <span class="token operator">&amp;</span> <span class="token comment"># 配置文件启动</span>
<span class="token comment"># Options</span>
<span class="token comment">#       -conf : 配置文件</span>
<span class="token comment">#       -datadir : 数据目录</span>
<span class="token comment">#       -reindex : 重建索引</span>
<span class="token comment">#       -txindex : 是否全交易索引(默认: 0, 1: 全交易索引)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bitcoin.conf line-numbers-mode" data-ext="bitcoin.conf"><pre class="language-bitcoin.conf"><code>server=1
rpcuser=omnicorerpc
rpcpassword=5hMTZI9iBGFqKxsWfOUF
rpcallowip=127.0.0.1
rpcport=8332
txindex=1
datacarriersize=80
logtimestamps=1
omnidebug=tally
omnidebug=packets
omnidebug=pending
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function k(f,g){const s=o("ExternalLinkIcon");return r(),l("div",null,[d,n("ul",null,[n("li",null,[n("a",m,[e("Omni"),a(s)]),e(" : Omni Layer Github")]),n("li",null,[n("a",p,[e("Omnilayer"),a(s)]),e(" : Omni Layer 官网")]),n("li",null,[n("a",u,[e("Omni Core wiki"),a(s)]),e(": Omni Core Wiki")]),n("li",null,[n("a",v,[e("omniexplorer"),a(s)]),e(" : Omni 区块浏览器")]),n("li",null,[n("a",b,[e("Omni研究系列【USDT】"),a(s)])])]),h])}const O=i(c,[["render",k],["__file","omni.html.vue"]]);export{O as default};
