import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as l,c as o,b as n,e as a,d as e,f as r}from"./app-TLKbS0Xy.js";const i={},c=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),a(" reference")],-1),d={href:"https://github.com/bitcoinbook/bitcoinbook",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/tianmingyun/MasterBitcoin2CN",target:"_blank",rel:"noopener noreferrer"},v={href:"https://mistydew.github.io/2018/05/19/bitcoin-source-anatomy-00",target:"_blank",rel:"noopener noreferrer"},k={href:"https://bitcoincore.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bitaddress.org/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"network",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#network","aria-hidden":"true"},"#"),a(" Network")],-1),g=n("thead",null,[n("tr",null,[n("th",null,"网络"),n("th",null,"说明"),n("th",null,"默认端口"),n("th",null,"区块浏览器")])],-1),h=n("td",null,"mainnet",-1),f=n("td",null,"主网",-1),x=n("td",null,"8332",-1),_={href:"https://www.blockchain.com/zh-cn/explorer",target:"_blank",rel:"noopener noreferrer"},B=n("td",null,"testnet",-1),C=n("td",null,"公共测试网",-1),w=n("td",null,"18332",-1),y={href:"https://testnet.blockchain.info",target:"_blank",rel:"noopener noreferrer"},P={href:"https://testnet.manu.backend.hamburg/faucet",target:"_blank",rel:"noopener noreferrer"},T=n("tr",null,[n("td",null,"regtest"),n("td",null,"本地回归测试网"),n("td",null,"18443"),n("td")],-1),q=r(`<h2 id="wallet" tabindex="-1"><a class="header-anchor" href="#wallet" aria-hidden="true">#</a> Wallet</h2><ul><li>Base58Check 编码前缀</li></ul><table><thead><tr><th>种类</th><th>Hex (16进制)</th><th>Base58Check</th></tr></thead><tbody><tr><td>比特币地址 (Bitcoin Address)</td><td>0x00</td><td>1</td></tr><tr><td>P2SH地址 (Pay-to-Script-Hash Address)</td><td>0x05</td><td>3</td></tr><tr><td>测试网络-比特币地址 (Bitcoin Testnet Address)</td><td>0x6F</td><td>m / n</td></tr><tr><td>私钥 WIF (Private Key WIF)</td><td>0x80</td><td>5 (非压缩) K / L (压缩)</td></tr><tr><td>加密私钥 (BIP38 Encrypted Private Key)</td><td>0x0142</td><td>6P</td></tr><tr><td>扩展公钥 (BIP32 Extended Public Key)</td><td>0x0488B21E</td><td>xpub</td></tr></tbody></table><ul><li><p>私钥 -&gt; 公钥 -&gt; BTC 地址</p><blockquote><p><code>PVT_KEY (私钥) ---[ECC 椭圆曲线相乘]---&gt; PUB_KEY (公钥) ---[哈希函数]---&gt; BTC_ADDR (BTC 地址)</code></p></blockquote></li><li><p>非压缩私钥 -&gt; WIF</p><blockquote><p><code>PVT_KEY (私钥 256位 == 64 HEX) ---[CheckBase58]---&gt; WIF (前缀: 5)</code></p></blockquote></li><li><p>压缩私钥 -&gt; 压缩 WIF</p><blockquote><p><code>PVT_KEY (私钥 256位 == 64 HEX) + 0x01 = 66 HEX ---[CheckBase58]---&gt; WIF (前缀: K | L)</code></p></blockquote></li><li><p>非压缩公钥 ((2 + 64 + 64) * 4 = 520)</p><blockquote><p><code>0x04 + PUB_X (64 HEX) + PUB_Y (64 HEX)</code></p></blockquote></li><li><p>压缩公钥 ((2 + 64) * 4 = 264)</p><blockquote><p>PUB_Y 为偶数 : <code>0x02 + PUB_X (64 HEX) </code> PUB_Y 为奇数 : <code>0x03 + PUB_Y (64 HEX)</code></p></blockquote></li></ul><h2 id="钱包分类" tabindex="-1"><a class="header-anchor" href="#钱包分类" aria-hidden="true">#</a> 钱包分类</h2><ul><li><p>非确定性 (随机) 钱包</p></li><li><p>确定性 (种子) 钱包</p><ul><li><p>助记码: 用作确定性钱包的种子的随机数</p></li><li><p>助记码生成过程 <strong>[BIP39]</strong></p><blockquote><p><code>128~256 位随机序列 (熵) ---[SHA256]---&gt; (128 位熵 + 哈希前 4 位) / 11 ---[取 2048 个单词]---&gt; 12 个助记词 ---[PBKDF2]---&gt; 生成 512 位种子</code></p></blockquote></li></ul></li><li><p>分层确定性钱包 (HD Wallet : Hierarchical Deterministic Wallet) <strong>[BIP44]</strong></p><ul><li><p>根种子 -&gt; 公钥</p><blockquote><p><code>根种子 (128、256 或 512) ---[HMAC­SHA512]---&gt; 主私钥 (左 256 位) ---EEC---&gt;主公钥 (264 位)</code></p></blockquote></li><li><p>可扩展秘钥 (extended key) = 私钥 或 公钥 (256 位) + 链码 (256 位)</p></li><li><p>子私钥生成</p><blockquote><p><code>父私钥 (左 256 位) ---ECC---&gt; 父公钥 (265 位) + 父链码 (右 256 位) + 序号 (32 位) ---[HMAC­SHA512]---&gt; 子私钥 (左 256 位)</code></p></blockquote></li></ul><table><thead><tr><th>币种</th><th>HD 路径</th></tr></thead><tbody><tr><td>BTC</td><td>m/44&#39;/0&#39;/0&#39;/0</td></tr><tr><td>BTC (testnet)</td><td>m/44&#39;/1&#39;/0&#39;/0</td></tr><tr><td>LTC</td><td>m/44&#39;/2&#39;/0&#39;/0</td></tr><tr><td>ETH</td><td>m/44&#39;/60&#39;/0&#39;/0</td></tr><tr><td>EOS</td><td>m/44&#39;/194&#39;/0&#39;/0</td></tr></tbody></table></li></ul><h2 id="satoshi" tabindex="-1"><a class="header-anchor" href="#satoshi" aria-hidden="true">#</a> Satoshi</h2><blockquote><p>聪，最小的比特币交易单位：0.00000001 BTC (亿分之一比特币)。</p></blockquote><p>1 BTC = 1,000 mBTC (毫比特币) 1 BTC = 1,000,000 μBTC (微比特币) 1 BTC = 100,000,000 Satoshis (聪比特币) 1 mBTC = 1000 μBTC 1 mBTC = 100,000 Satoshis 1 μBTC = 100 Satoshis</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载 Bitcoin 代码</span>
$ <span class="token function">git</span> clone https://github.com/bitcoin/bitcoin.git
<span class="token comment"># brew 下载依赖</span>
$ brew <span class="token function">install</span> automake berkeley-db4 libtool boost miniupnpc openssl pkg-config protobuf python qt libevent qrencode
$ brew <span class="token function">install</span> librsvg          <span class="token comment"># 用于 make deploy 打包 dmg</span>
$ ./contrib/install_db4.sh <span class="token builtin class-name">.</span>    <span class="token comment"># 安装 Berkeley DB</span>
<span class="token comment"># 编译</span>
<span class="token comment">#   创建一系列的自动配置脚本(确保安装一些必要的库)</span>
$ ./autogen.sh                  
<span class="token comment">#   配置构建过程，生成 Makefile 文件</span>
<span class="token comment">#   --help : 查看配置选项</span>
<span class="token comment">#   Options </span>
<span class="token comment">#       -with-gui : 带有 Qt 图形客户端</span>
<span class="token comment">#       -without-gui : 不带有 Qt 图形客户端</span>
<span class="token comment">#       </span>
$ ./configure -without-gui         
$ <span class="token function">sudo</span> <span class="token function">make</span>                     <span class="token comment"># 编译</span>
$ <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>             <span class="token comment"># 安装到 PATH 路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bitcoind" tabindex="-1"><a class="header-anchor" href="#bitcoind" aria-hidden="true">#</a> bitcoind</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ bitcoind  <span class="token comment"># 启动主网</span>
$ bitcoind <span class="token parameter variable">--daemon</span>             <span class="token comment"># 后台启动主网 (8332)</span>
$ bitcoind <span class="token parameter variable">-testnet</span> <span class="token parameter variable">--daemon</span>    <span class="token comment"># 后台启动测试网</span>
$ bitcoind <span class="token parameter variable">-regtest</span> <span class="token parameter variable">--daemon</span>    <span class="token comment"># 后台启动回归测试网</span>
$ bitcoin-cli stop              <span class="token comment"># 关闭主网</span>
$ bitcoin-cli <span class="token parameter variable">-testnet</span> stop     <span class="token comment"># 关闭测试网</span>
$ bitcoind <span class="token parameter variable">-conf</span> <span class="token environment constant">PATH</span>/TO/bitcoin.conf <span class="token parameter variable">-datadir</span><span class="token operator">=</span><span class="token environment constant">PATH</span>/TO/Datas <span class="token comment"># 配置文件启动</span>
<span class="token comment"># 默认配置文件路径 :</span>
<span class="token comment">#   macOS : </span>
<span class="token comment">#   ubuntu : </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bitcoin.conf line-numbers-mode" data-ext="bitcoin.conf"><pre class="language-bitcoin.conf"><code># testnet : 使用测试网路
# regtest : 使用回归测试网路(本地)
# daemon : 守护进程，后台运行
daemon=1
# txindex : 交易数据库索引，默认仅建议与用户钱包相关的交易数据库。
#           完整的交易数据需要设置该值，改变之后需要重启 bitcoind，重建索引(-reindex)
txindex=1 
# server : 接收命令行和 JSON-RPC 调用
server=1
# rpcallowip : 允许的连接的 IP
rpcallowip=127.0.0.1
# rpcport : 监听 RPC 的端口号
rpcport=8332
# prune : 单位(MB)，删除旧的 blocks，减少存储空间的使用
prune=5000
# maxconnections : 最大连接数，可以减少带宽的消耗
maxconnections=15
# maxmempool : 单位(MB)，最大交易内存池容量，可以控制内存资源的使用 
maxmempool=200
# maxreceivebuffer : 单位(KB)，最大接收 buffer
maxreceivebuffer=2500
# maxsendbuffer : 单位(KB)，最大发送 buffer
maxsendbuffer=500
# minrelaytxfee : 允许的最小交易费用，可以过滤交易费小的交易，节省内存池使用
minrelaytxfee=0.0001
# addnode : 添加一个节点，并进行连接尝试
addnode=XX.XX.XX.XX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bitcoin-core" tabindex="-1"><a class="header-anchor" href="#bitcoin-core" aria-hidden="true">#</a> Bitcoin Core</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Bitcoin Core 版本 v0.16.1 <span class="token punctuation">(</span><span class="token number">64</span> 位<span class="token punctuation">)</span>
使用：
  bitcoin-qt <span class="token punctuation">[</span>命令行选项<span class="token punctuation">]</span>                     

选项：


-?
打印出这段帮助信息并退出 
<span class="token parameter variable">-version</span>
打印版本信息并退出 
<span class="token parameter variable">-alertnotify</span><span class="token operator">=</span><span class="token operator">&lt;</span>cmd<span class="token operator">&gt;</span>
当收到相关提醒或者我们看到一个长分叉时执行命令（%s 将替换为消息） 
<span class="token parameter variable">-blocknotify</span><span class="token operator">=</span><span class="token operator">&lt;</span>cmd<span class="token operator">&gt;</span>
当最佳数据块变化时执行命令 <span class="token punctuation">(</span>命令行中的 %s 会被替换成数据块哈希值<span class="token punctuation">)</span> 
<span class="token parameter variable">-assumevalid</span><span class="token operator">=</span><span class="token operator">&lt;</span>hex<span class="token operator">&gt;</span>
假设已经在区块链中的区块以及其先前的区块都合法，因此对它们略过脚本验证（0表示一律要验证，默认：0000000000000000005214481d2d96f898e3d5416e43359c145944a909d242e0，测试网络：0000000002e9e7b00e1f6dc5123a04aad68dd0f0968d8c7aa45f6640795c37b1） 
<span class="token parameter variable">-conf</span><span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
指定配置文件 <span class="token punctuation">(</span>默认: bitcoin.conf<span class="token punctuation">)</span> 
<span class="token parameter variable">-datadir</span><span class="token operator">=</span><span class="token operator">&lt;</span>dir<span class="token operator">&gt;</span>
指定数据目录 
<span class="token parameter variable">-dbcache</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
设置以MB为单位的数据库缓存大小<span class="token punctuation">(</span><span class="token number">4</span> 到 <span class="token number">16384</span>, 默认值: <span class="token number">450</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-loadblock</span><span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
启动时从其他来源的  blk000??.dat 文件导入区块 
<span class="token parameter variable">-debuglogfile</span><span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
指定调试日志文件：可以用绝对路径，也可以用相对于数据目录的相对路径（默认：debug.log） 
<span class="token parameter variable">-maxorphantx</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
内存中最多保留 <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span> 笔孤立的交易 <span class="token punctuation">(</span>默认: <span class="token number">100</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-maxmempool</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
保持交易内存池大小低于<span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>MB（默认：300） 
<span class="token parameter variable">-mempoolexpiry</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
不要让交易留在内存池中超过 <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span> 个小时 <span class="token punctuation">(</span>默认值: <span class="token number">336</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-persistmempool</span>
是否在退出时保存内存池，并在启动时重新载入<span class="token punctuation">(</span>默认值: <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-blockreconstructionextratxn</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
为了将摘要区块完整重组而额外保留在內存中的交易数量（默认：100） 
<span class="token parameter variable">-par</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
设置脚本验证的程序 <span class="token punctuation">(</span>-2 到 <span class="token number">16</span>, <span class="token number">0</span> <span class="token operator">=</span> 自动, <span class="token operator">&lt;</span><span class="token number">0</span> <span class="token operator">=</span> 保留自由的核心, 默认值: <span class="token number">0</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-pid</span><span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
指定 pid 文件 <span class="token punctuation">(</span>默认: bitcoind.pid<span class="token punctuation">)</span> 
<span class="token parameter variable">-prune</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
修剪（删除）掉老旧区块以降低需要的储存空间。这样会增加一个RPC指令pruneblockchain，可以使用它来删除指定的区块；也可以指定目标储存空间大小，以启用对老旧内存块的自动修剪功能。这个模式跟-txindex和-rescan参数不兼容。警告：还原回不修剪模式会需要重新下载整个区块链。（默认：0表示不修剪内存块，1表示允许使用RPC指令做修剪，<span class="token operator">&gt;</span><span class="token number">550</span>的值表示为区块数据的目标大小，单位是百万字节，MiB） 
-reindex-chainstate
从当前索引的区块中重建链状态 
<span class="token parameter variable">-reindex</span>
从硬盘里的区块文件blk*.dat重建区块链状态和区块索引 
<span class="token parameter variable">-sysperms</span>
创建系统默认权限的文件，而不是 <span class="token builtin class-name">umask</span> 077 <span class="token punctuation">(</span>只在关闭钱包功能时有效<span class="token punctuation">)</span> 
<span class="token parameter variable">-txindex</span>
维护一份完整的交易索引, 用于 getrawtransaction RPC调用 <span class="token punctuation">(</span>默认: <span class="token number">0</span><span class="token punctuation">)</span> 


连接选项：


<span class="token parameter variable">-addnode</span><span class="token operator">=</span><span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>
添加节点并与其保持连接（详情请见RPC命令addnode的说明） 
<span class="token parameter variable">-banscore</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
断开 非礼节点的阀值 <span class="token punctuation">(</span>默认: <span class="token number">100</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-bantime</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
限制 非礼节点 若干秒内不能连接 <span class="token punctuation">(</span>默认: <span class="token number">86400</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-bind</span><span class="token operator">=</span><span class="token operator">&lt;</span>addr<span class="token operator">&gt;</span>
绑定指定的IP地址开始监听。IPv6地址请使用<span class="token punctuation">[</span>host<span class="token punctuation">]</span>:port 格式 
<span class="token parameter variable">-connect</span><span class="token operator">=</span><span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>
只连接到指定的节点。用-connect<span class="token operator">=</span><span class="token number">0</span>可以关闭自动连接。（应用于这个节点的规则与-addnode相同） 
<span class="token parameter variable">-discover</span>
发现自己的 IP 地址（默认: 监听并且无 <span class="token parameter variable">-externalip</span> 或 <span class="token parameter variable">-proxy</span> 时为 <span class="token number">1</span>） 
<span class="token parameter variable">-dns</span>
使用 -addnode, <span class="token parameter variable">-seednode</span> 和 <span class="token parameter variable">-connect</span> 选项时允许查询DNS <span class="token punctuation">(</span>默认: <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-dnsseed</span>
是否允许在节点地址数量不足时，使用DNS查询来搜寻节点（默认：当没用-connect时为1） 
<span class="token parameter variable">-externalip</span><span class="token operator">=</span><span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>
指定您的公共地址 
<span class="token parameter variable">-forcednsseed</span>
始终通过 DNS 查询节点地址 <span class="token punctuation">(</span>默认: <span class="token number">0</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-listen</span>
接受来自外部的连接 <span class="token punctuation">(</span>缺省: 如果不带 <span class="token parameter variable">-proxy</span> or <span class="token parameter variable">-connect</span> 参数设置为1<span class="token punctuation">)</span> 
<span class="token parameter variable">-listenonion</span>
自动建立Tor隐藏服务 <span class="token punctuation">(</span>默认:1<span class="token punctuation">)</span> 
<span class="token parameter variable">-maxconnections</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
保留最多 <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span> 条节点连接 <span class="token punctuation">(</span>默认: <span class="token number">125</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-maxreceivebuffer</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
每个连接的最大接收缓存，<span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>*1000 字节 <span class="token punctuation">(</span>默认: <span class="token number">5000</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-maxsendbuffer</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
每个连接的最大发送缓存，<span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>*1000 字节 <span class="token punctuation">(</span>默认: <span class="token number">1000</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-maxtimeadjustment</span>
跟其他节点的时间差最高可接受的中位数值。本机所认为的时间可能会被其他节点影响，往前或往后在这个值之内。（默认：4200秒） 
<span class="token parameter variable">-onion</span><span class="token operator">=</span><span class="token operator">&lt;</span>ip:port<span class="token operator">&gt;</span>
通过 Tor 隐藏服务连接节点时使用不同的 SOCKS5 代理 <span class="token punctuation">(</span>默认: -proxy<span class="token punctuation">)</span> 
<span class="token parameter variable">-onlynet</span><span class="token operator">=</span><span class="token operator">&lt;</span>net<span class="token operator">&gt;</span>
只连接 <span class="token operator">&lt;</span>net<span class="token operator">&gt;</span>网络中的节点 <span class="token punctuation">(</span>ipv4, ipv6 或 onion<span class="token punctuation">)</span> 
<span class="token parameter variable">-permitbaremultisig</span>
是否转发 非P2SH格式的多签名交易 <span class="token punctuation">(</span>默认: <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-peerbloomfilters</span>
支持用 Bloom 过滤器来过滤区块和交易<span class="token punctuation">(</span>默认值: <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-port</span><span class="token operator">=</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>
使用端口 <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> 监听连接 <span class="token punctuation">(</span>默认: <span class="token number">8333</span> <span class="token punctuation">;</span> testnet: <span class="token number">18333</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-proxy</span><span class="token operator">=</span><span class="token operator">&lt;</span>ip:port<span class="token operator">&gt;</span>
通过 SOCKS5 代理连接 
<span class="token parameter variable">-proxyrandomize</span>
为每个代理连接随机化凭据。这将启用 Tor 流隔离 <span class="token punctuation">(</span>默认: <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-seednode</span><span class="token operator">=</span><span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>
连接一个节点并获取对端地址，然后断开连接 
<span class="token parameter variable">-timeout</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
指定连接超时毫秒数 <span class="token punctuation">(</span>最小: <span class="token number">1</span>, 默认: <span class="token number">5000</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-torcontrol</span><span class="token operator">=</span><span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>
开启监听 onion 连接时的 Tor 控制端口号 <span class="token punctuation">(</span>默认值: <span class="token number">127.0</span>.0.1:9051<span class="token punctuation">)</span> 
<span class="token parameter variable">-torpassword</span><span class="token operator">=</span><span class="token operator">&lt;</span>pass<span class="token operator">&gt;</span>
Tor 控制端口密码 <span class="token punctuation">(</span>默认值: 空白<span class="token punctuation">)</span> 
<span class="token parameter variable">-upnp</span>
使用UPnp映射监听端口 <span class="token punctuation">(</span>默认: <span class="token number">0</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-whitebind</span><span class="token operator">=</span><span class="token operator">&lt;</span>addr<span class="token operator">&gt;</span>
绑定到指定地址和连接的白名单节点。 IPv6使用 <span class="token punctuation">[</span>主机<span class="token punctuation">]</span>:端口 格式 
<span class="token parameter variable">-whitelist</span><span class="token operator">=</span><span class="token operator">&lt;</span>IP address or network<span class="token operator">&gt;</span>
把来自指定地址（例如：1.2.3.4）或CIDR格式网段（例如：1.2.3.0/24）的节点放进白名单。这个选项可以设定多次。 白名单节点不能被DoS banned ，且转发所有来自他们的交易<span class="token punctuation">(</span>即便这些交易已经存在于mempool中<span class="token punctuation">)</span>，常用于网关  
<span class="token parameter variable">-maxuploadtarget</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
尝试保持上传带宽低于（MiB/24h），0<span class="token operator">=</span>无限制（默认：0） 


钱包选项:


<span class="token parameter variable">-addresstype</span>
What <span class="token builtin class-name">type</span> of addresses to use <span class="token punctuation">(</span><span class="token string">&quot;legacy&quot;</span>, <span class="token string">&quot;p2sh-segwit&quot;</span>, or <span class="token string">&quot;bech32&quot;</span>, default: <span class="token string">&quot;p2sh-segwit&quot;</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-changetype</span>
What <span class="token builtin class-name">type</span> of change to use <span class="token punctuation">(</span><span class="token string">&quot;legacy&quot;</span>, <span class="token string">&quot;p2sh-segwit&quot;</span>, or <span class="token string">&quot;bech32&quot;</span><span class="token punctuation">)</span>. Default is same as -addresstype, except when <span class="token parameter variable">-addresstype</span><span class="token operator">=</span>p2sh-segwit a native segwit output is used when sending to a native segwit address<span class="token punctuation">)</span> 
<span class="token parameter variable">-disablewallet</span>
不要加载钱包和禁用钱包的 RPC 调用 
<span class="token parameter variable">-keypool</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
设置私钥池大小为 <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span> <span class="token punctuation">(</span>默认：1000<span class="token punctuation">)</span> 
<span class="token parameter variable">-fallbackfee</span><span class="token operator">=</span><span class="token operator">&lt;</span>amt<span class="token operator">&gt;</span>
当费用估计数据<span class="token punctuation">(</span>default: BTC<span class="token punctuation">)</span>不足时将会启用的费率 <span class="token punctuation">(</span>in <span class="token number">0.0002</span>/kB<span class="token punctuation">)</span> 
<span class="token parameter variable">-discardfee</span><span class="token operator">=</span><span class="token operator">&lt;</span>amt<span class="token operator">&gt;</span>
容许自动免找零成为手续费的交易手续费率（单位：BTC/kB，默认：0.0001）。注意：如果在该费率下，找零的零钱会成为零散钱，则自动弃掉成为手续费。但弃掉的零钱费率永远不会大于零散钱的转发费率，金额也不会大于最长预估确认时间所需的手续费 
<span class="token parameter variable">-mintxfee</span><span class="token operator">=</span><span class="token operator">&lt;</span>amt<span class="token operator">&gt;</span>
当产生交易时，如果每千字节 <span class="token punctuation">(</span>kB<span class="token punctuation">)</span> 的手续费比这个值 <span class="token punctuation">(</span>单位是 BTC<span class="token punctuation">)</span> 低，就视为没支付手续费 <span class="token punctuation">(</span>默认值: <span class="token number">0.00001</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-paytxfee</span><span class="token operator">=</span><span class="token operator">&lt;</span>amt<span class="token operator">&gt;</span>
为付款交易添加交易费 <span class="token punctuation">(</span>BTC/kB<span class="token punctuation">)</span> <span class="token punctuation">(</span>默认: <span class="token number">0.00</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-rescan</span>
重新扫描区块链以查找遗漏的钱包交易 
<span class="token parameter variable">-salvagewallet</span>
启动时尝试从已损坏的钱包文件中恢复私钥 
<span class="token parameter variable">-spendzeroconfchange</span>
付款时允许使用未确认的零钱 <span class="token punctuation">(</span>默认: <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-txconfirmtarget</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
如果未设置交易费用，自动添加足够的交易费以确保交易在平均n个数据块内被确认 <span class="token punctuation">(</span>默认: <span class="token number">6</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-walletrbf</span>
送出允许提高手续费（full-RBF）的交易（仅适用于RPC指令，默认：0） 
<span class="token parameter variable">-upgradewallet</span>
程序启动时升级钱包到最新格式 
<span class="token parameter variable">-wallet</span><span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
指定钱包文件（数据目录内） <span class="token punctuation">(</span>默认: wallet.dat<span class="token punctuation">)</span> 
<span class="token parameter variable">-walletbroadcast</span>
钱包广播事务处理 <span class="token punctuation">(</span>默认: <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-walletdir</span><span class="token operator">=</span><span class="token operator">&lt;</span>dir<span class="token operator">&gt;</span>
指定用来放钱包文件的目录（默认：如果存在的话就用<span class="token operator">&lt;</span>datadir<span class="token operator">&gt;</span>/wallets，否则为<span class="token operator">&lt;</span>datadir<span class="token operator">&gt;</span>） 
<span class="token parameter variable">-walletnotify</span><span class="token operator">=</span><span class="token operator">&lt;</span>cmd<span class="token operator">&gt;</span>
当最佳区块变化时执行命令 <span class="token punctuation">(</span>命令行中的 %s 会被替换成区块哈希值<span class="token punctuation">)</span> 
<span class="token parameter variable">-zapwallettxes</span><span class="token operator">=</span><span class="token operator">&lt;</span>mode<span class="token operator">&gt;</span>
删除钱包的所有交易记录，且只有用 -rescan参数启动客户端才能重新取回交易记录  <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">=</span> 保留 tx meta data , 如 account owner 和 payment request information, <span class="token number">2</span> <span class="token operator">=</span> 不保留 tx meta data<span class="token punctuation">)</span> 


ZeroMQ 通知选项：


<span class="token parameter variable">-zmqpubhashblock</span><span class="token operator">=</span><span class="token operator">&lt;</span>address<span class="token operator">&gt;</span>
允许在<span class="token operator">&lt;</span>address<span class="token operator">&gt;</span>广播哈希区块 
<span class="token parameter variable">-zmqpubhashtx</span><span class="token operator">=</span><span class="token operator">&lt;</span>address<span class="token operator">&gt;</span>
允许在<span class="token operator">&lt;</span>address<span class="token operator">&gt;</span>广播哈希交易 
<span class="token parameter variable">-zmqpubrawblock</span><span class="token operator">=</span><span class="token operator">&lt;</span>address<span class="token operator">&gt;</span>
允许在<span class="token operator">&lt;</span>address<span class="token operator">&gt;</span>广播原始区块 
<span class="token parameter variable">-zmqpubrawtx</span><span class="token operator">=</span><span class="token operator">&lt;</span>address<span class="token operator">&gt;</span>
允许在<span class="token operator">&lt;</span>address<span class="token operator">&gt;</span>广播原始交易 


调试/测试选项：


<span class="token parameter variable">-uacomment</span><span class="token operator">=</span><span class="token operator">&lt;</span>cmt<span class="token operator">&gt;</span>
为用户代理字符串附加说明 
<span class="token parameter variable">-debug</span><span class="token operator">=</span><span class="token operator">&lt;</span>category<span class="token operator">&gt;</span>
输出调试信息 <span class="token punctuation">(</span>默认: <span class="token number">0</span>, 提供 <span class="token operator">&lt;</span>category<span class="token operator">&gt;</span> 是可选项<span class="token punctuation">)</span>. 如果<span class="token operator">&lt;</span>category<span class="token operator">&gt;</span>未提供或<span class="token operator">&lt;</span>category<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token number">1</span>，输出所有调试信息。 <span class="token operator">&lt;</span>category<span class="token operator">&gt;</span> 可能是： net, tor, mempool, http, bench, zmq, db, rpc, estimatefee, addrman, selectcoins, reindex, cmpctblock, rand, prune, proxy, mempoolrej, libevent, coindb, qt, leveldb. 
<span class="token parameter variable">-debugexclude</span><span class="token operator">=</span><span class="token operator">&lt;</span>category<span class="token operator">&gt;</span>
排除某一类Debug信息。可以与 <span class="token parameter variable">-debug</span><span class="token operator">=</span><span class="token number">1</span> 一起使用，以输出除了指定类别以外的Debug日志。 
-help-debug
显示所有调试选项 <span class="token punctuation">(</span>用法: --帮助 -帮助调试<span class="token punctuation">)</span> 
<span class="token parameter variable">-logips</span>
在调试输出中包含IP地址 <span class="token punctuation">(</span>默认: <span class="token number">0</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-logtimestamps</span>
输出调试信息时，前面加上时间戳 <span class="token punctuation">(</span>默认: <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-maxtxfee</span><span class="token operator">=</span><span class="token operator">&lt;</span>amt<span class="token operator">&gt;</span>
最大的单次钱包或原始转账费用<span class="token punctuation">(</span>BTC<span class="token punctuation">)</span>，设置太低可能导致大尺寸交易失败<span class="token punctuation">(</span>默认：0.10<span class="token punctuation">)</span> 
<span class="token parameter variable">-printtoconsole</span>
跟踪/调试信息输出到控制台，不输出到 debug.log 文件 
<span class="token parameter variable">-shrinkdebugfile</span>
客户端启动时压缩debug.log文件<span class="token punctuation">(</span>缺省：no-debug模式时为1<span class="token punctuation">)</span> 


区块链选择选项:


<span class="token parameter variable">-testnet</span>
使用测试链 


节点中继选项:


<span class="token parameter variable">-bytespersigop</span>
转发和采矿时，交易数据中每个sigop的等效字节数（默认：20） 
<span class="token parameter variable">-datacarrier</span>
Relay and mine data carrier transactions <span class="token punctuation">(</span>default: <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-datacarriersize</span>
Maximum size of data <span class="token keyword">in</span> data carrier transactions we relay and mine <span class="token punctuation">(</span>default: <span class="token number">83</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-mempoolreplacement</span>
保证内存池中的交易更换<span class="token punctuation">(</span>默认：1<span class="token punctuation">)</span> 
<span class="token parameter variable">-minrelaytxfee</span><span class="token operator">=</span><span class="token operator">&lt;</span>amt<span class="token operator">&gt;</span>
交易费<span class="token punctuation">(</span>in BTC/kB<span class="token punctuation">)</span>比这更小的在关联、挖掘和生成交易时将被视为零费交易 <span class="token punctuation">(</span>默认: <span class="token number">0.00001</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-whitelistrelay</span>
即使在无关联交易<span class="token punctuation">(</span>默认: <span class="token number">1</span><span class="token punctuation">)</span>时也接受来自白名单同行的关联交易 
<span class="token parameter variable">-whitelistforcerelay</span>
强制转发从白名点节点收到的交易，即使它们违反了本机的转发准则（默认：1） 


数据块创建选项：


<span class="token parameter variable">-blockmaxweight</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
设置BIP141最大区块权重 <span class="token punctuation">(</span>默认: <span class="token number">3996000</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-blockmintxfee</span><span class="token operator">=</span><span class="token operator">&lt;</span>amt<span class="token operator">&gt;</span>
设定生成区块时，所要包含交易每千字节的最低手续费（单位是BTC）。（默认：0.00001） 


RPC 服务器选项：


<span class="token parameter variable">-server</span>
接受命令行和 JSON-RPC 命令 
<span class="token parameter variable">-rest</span>
接受公共 REST 请求 <span class="token punctuation">(</span>默认: <span class="token number">0</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-rpcbind</span><span class="token operator">=</span><span class="token operator">&lt;</span>addr<span class="token operator">&gt;</span><span class="token punctuation">[</span>:port<span class="token punctuation">]</span>
和指定的地址绑定以监听JSON-RPC连接。必须同时指定-rpcallowip这项设定才有作用。不一定要指定端口号，指定的话会覆盖掉-rpcport设定。IPv6请用<span class="token punctuation">[</span>主机<span class="token punctuation">]</span>：通信端口这种格式。这个选项可以设定多次。（默认：127.0.0.1和::1，也就是localhost。当有指定-rpcallowip时，预设值为0.0.0.0和::，也就是所有位址） 
<span class="token parameter variable">-rpccookiefile</span><span class="token operator">=</span><span class="token operator">&lt;</span>loc<span class="token operator">&gt;</span>
认证Cookie的位置 <span class="token punctuation">(</span>默认: data目录<span class="token punctuation">)</span> 
<span class="token parameter variable">-rpcuser</span><span class="token operator">=</span><span class="token operator">&lt;</span>user<span class="token operator">&gt;</span>
JSON-RPC 连接用户名 
<span class="token parameter variable">-rpcpassword</span><span class="token operator">=</span><span class="token operator">&lt;</span>pw<span class="token operator">&gt;</span>
JSON-RPC 连接密码 
<span class="token parameter variable">-rpcauth</span><span class="token operator">=</span><span class="token operator">&lt;</span>userpw<span class="token operator">&gt;</span>
JSON-RPC 连接要使用的用户名和散列密码。<span class="token operator">&lt;</span>userpw<span class="token operator">&gt;</span> 的格式是：<span class="token operator">&lt;</span>USERNAME<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>SALT<span class="token operator">&gt;</span>$<span class="token operator">&lt;</span>HASH<span class="token operator">&gt;</span>。在 share/rpcuser 目录下有一个示范的 python 脚本。之后客户端程序就可以用这对参数正常连接：rpcuser<span class="token operator">=</span><span class="token operator">&lt;</span>USERNAME<span class="token operator">&gt;</span>和rpcpassword<span class="token operator">=</span><span class="token operator">&lt;</span>PASSWORD<span class="token operator">&gt;</span>。这个选项可以被多次指定。 
<span class="token parameter variable">-rpcport</span><span class="token operator">=</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>
使用 <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>端口监听 JSON-RPC 连接 <span class="token punctuation">(</span>默认: <span class="token number">8332</span> <span class="token punctuation">;</span> testnet: <span class="token number">18332</span><span class="token punctuation">)</span> 
<span class="token parameter variable">-rpcallowip</span><span class="token operator">=</span><span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>
允许来自指定地址的 JSON-RPC 连接。 <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>为单一IP <span class="token punctuation">(</span>如: <span class="token number">1.2</span>.3.4<span class="token punctuation">)</span>, 网络/掩码 <span class="token punctuation">(</span>如: <span class="token number">1.2</span>.3.4/255.255.255.0<span class="token punctuation">)</span>, 网络/CIDR <span class="token punctuation">(</span>如:  <span class="token number">1.2</span>.3.4/24<span class="token punctuation">)</span>。该选项可多次指定。 
<span class="token parameter variable">-rpcserialversion</span>
设定非冗余模式时，返回的交易原始数据或区块hex的序列化形式：无segwit为0，或是有segwit为1（默认：1） 
<span class="token parameter variable">-rpcthreads</span><span class="token operator">=</span><span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>
设置RPC服务线程数 <span class="token punctuation">(</span>默认: <span class="token number">4</span><span class="token punctuation">)</span> 


界面选项：


<span class="token parameter variable">-choosedatadir</span>
在启动时选择目录（默认0） 
<span class="token parameter variable">-lang</span><span class="token operator">=</span><span class="token operator">&lt;</span>lang<span class="token operator">&gt;</span>
设置语言, 例如“zh-CN”（默认：系统语言） 
<span class="token parameter variable">-min</span>
启动时最小化 
<span class="token parameter variable">-rootcertificates</span><span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
设置付款请求的SSL根证书（默认：-系统-） 
<span class="token parameter variable">-splash</span>
显示启动画面（默认：1） 
<span class="token parameter variable">-resetguisettings</span>
重置图形界面所有的变更设置 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function S(E,R){const s=p("ExternalLinkIcon");return l(),o("div",null,[c,n("ul",null,[n("li",null,[n("a",d,[a("bitcoinbook"),e(s)]),a(" : 精通比特币 Github")]),n("li",null,[n("a",u,[a("精通比特币 第二版"),e(s)]),a(" : 中文翻译 Github")]),n("li",null,[n("a",v,[a("比特币源码剖析"),e(s)]),a(" :")]),n("li",null,[n("a",k,[a("BitcoinCore"),e(s)]),a(" : 比特币核心开发团队")]),n("li",null,[n("a",m,[a("BitAddress"),e(s)]),a(" : 开源 JavaScript 比特币钱包工具")])]),b,n("table",null,[g,n("tbody",null,[n("tr",null,[h,f,x,n("td",null,[n("a",_,[a("主网区块浏览器"),e(s)])])]),n("tr",null,[B,C,w,n("td",null,[n("a",y,[a("Test 区块浏览器"),e(s)]),a(),n("a",P,[a("Test BTC 水龙头"),e(s)])])]),T])]),q])}const N=t(i,[["render",S],["__file","bitcoin.html.vue"]]);export{N as default};
