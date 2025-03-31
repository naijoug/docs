import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c,b as n,e as l,d as o,f as s}from"./app-wGKmCHO4.js";const m={},d=s(`<h1 id="bitcoin-cli" tabindex="-1"><a class="header-anchor" href="#bitcoin-cli" aria-hidden="true">#</a> bitcoin-cli</h1><blockquote><p>Bitcoin Core RPC 客户端</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ bitcoin-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span>params<span class="token punctuation">]</span>  
<span class="token comment">#   &gt; 发送命令到 Bitcoin Core</span>
$ bitcoin-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token parameter variable">-named</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span>name<span class="token operator">=</span>value<span class="token punctuation">]</span> <span class="token punctuation">..</span>. 
<span class="token comment">#   &gt; 发送带有参数的命令到 Bitcoin Core</span>
$ bitcoin-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token builtin class-name">help</span>                
<span class="token comment">#   &gt; 查询所有命令列表</span>
$ bitcoin-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token builtin class-name">help</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>      
<span class="token comment">#   &gt; 获取特定命令帮助信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,4),p={href:"https://mistydew.github.io/2018/05/06/bitcoin-cli-commands",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="blockchain-区块链" tabindex="-1"><a class="header-anchor" href="#blockchain-区块链" aria-hidden="true">#</a> Blockchain (区块链)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ bitcoin-cli getbestblockhash 
<span class="token comment">#   &gt; 查询最长链的区块哈希</span>
$ bitcoin-cli getblock <span class="token punctuation">[</span>BLOCK_HASH<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli getblock &quot;blockhash&quot; ( verbosity )</span>
<span class="token comment">#   &gt; 查询指定哈希的的区块信息</span>
<span class="token comment">#       &quot;blockhash&quot; : 区块哈希值</span>
<span class="token comment">#       verbosity : 返回数据格式(默认: 1)</span>
<span class="token comment">#           0 : 返回对块哈希进行 16 进制编码的字符串</span>
<span class="token comment">#           1 : 返回区块的基本信息</span>
<span class="token comment">#           2 : 返回区块中每笔交易的详细信息</span>
$ bitcoin-cli getblockchaininfo  
<span class="token comment">#   &gt; 查询当前最新区块信息</span>
$ bitcoin-cli getblockcount 
<span class="token comment">#   &gt; 查询当前区块数量</span>
$ bitcoin-cli getblockhash <span class="token number">1</span> 
<span class="token comment"># bitcoin-cli getblockhash height</span>
<span class="token comment">#   &gt; 根据高度查询区块的哈希 </span>
<span class="token comment">#       height : 区块高度</span>
$ bitcoin-cli getblockheader <span class="token punctuation">[</span>BLOCK_HASH<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli getblockheader &quot;hash&quot; ( verbose )</span>
<span class="token comment">#   &gt; 查询指定区块头部信息</span>
<span class="token comment">#       &quot;hash&quot; : 区块哈希</span>
<span class="token comment">#       verbose : 返回数据格式 (默认: true)</span>
<span class="token comment">#           true : 返回 JOSN 数据</span>
<span class="token comment">#           false : 16 进制编码格式</span>
$ bitcoin-cli getblockstats <span class="token number">1</span> 
<span class="token comment"># bitcoin-cli getblockstats hash_or_height ( stats )</span>
<span class="token comment">#   &gt; 统计区块的费用信息(单位: 聪 satoshis)</span>
<span class="token comment">#       hash_or_height : 区块哈希或者区块高度</span>
<span class="token comment">#       stats : 需要查询字段名数组</span>
$ bitcoin-cli getchaintips  
<span class="token comment">#   &gt; 查询当前所有临时分叉的区块头的基本信息</span>
$ bitcoin-cli getchaintxstats 
<span class="token comment"># bitcoin-cli getchaintxstats ( nblocks blockhash )</span>
<span class="token comment">#   &gt; 统计最近一个月的交易量和交易速率</span>
<span class="token comment">#       nblocks : 计算的区块范围(默认: 一个月)</span>
<span class="token comment">#       blockhash : 最后一个区块的哈希</span>
$ bitcoin-cli getdifficulty 
<span class="token comment">#   &gt; 查询当前 POW 工作量证明难度值</span>
$ bitcoin-cli getmempoolancestors <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli getmempoolancestors txid (verbose)</span>
<span class="token comment">#   &gt; 查询内存池中交易哈希的前驱交易</span>
<span class="token comment">#       txid : 交易哈希</span>
<span class="token comment">#       verbose : 返回数据格式 (默认: false)</span>
<span class="token comment">#           true : JSON 格式</span>
<span class="token comment">#           false : 交易哈希数组</span>
$ bitcoin-cli getmempooldescendants <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli getmempooldescendants txid (verbose)</span>
<span class="token comment">#   &gt; 查询指定交易哈希的后续交易</span>
<span class="token comment">#       txid : 交易哈希</span>
<span class="token comment">#       verbose : 返回数据格式(默认: false)</span>
<span class="token comment">#           true : JSON 格式</span>
<span class="token comment">#           false : 交易哈希数组</span>
$ bitcoin-cli getmempoolentry <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span>  
<span class="token comment"># bitcoin-cli getmempoolentry txid</span>
<span class="token comment">#   &gt; 查询内存池中指定交易哈希的信息</span>
<span class="token comment">#       txid : 交易哈希</span>
$ bitcoin-cli getmempoolinfo 
<span class="token comment">#   &gt; 查询交易内存池信息</span>
$ bitcoin-cli getrawmempool <span class="token boolean">true</span> 
<span class="token comment"># bitcoin-cli getrawmempool ( verbose )</span>
<span class="token comment">#   &gt; 查询内存池中的所有交易</span>
<span class="token comment">#       verbose : 显示格式(默认: false)</span>
<span class="token comment">#           true : JSON 格式</span>
<span class="token comment">#           false : 交易 ID 数组</span>
$ bitcoin-cli gettxout <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span> <span class="token number">1</span> 
<span class="token comment"># bitcoin-cli gettxout &quot;txid&quot; n ( include_mempool )</span>
<span class="token comment">#   &gt; 根据交易哈希查询 UTXO 详细信息</span>
<span class="token comment">#       &quot;txid&quot; : 交易哈希</span>
<span class="token comment">#       n : vout 编号</span>
<span class="token comment">#       &quot;include_mempool&quot; : 是否在内存池中(默认: true)</span>
$ bitcoin-cli gettxoutproof <span class="token punctuation">[</span><span class="token string">&quot;TX_ID&quot;</span><span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli gettxoutproof [&quot;txid&quot;,...] ( blockhash )</span>
<span class="token comment">#   &gt; 查询交易所在区块的 POW 工作量证明</span>
<span class="token comment">#       &quot;txid&quot; : 交易哈希</span>
<span class="token comment">#       blockhash : 交易所在区块哈希</span>
$ bitcoin-cli gettxoutsetinfo 
<span class="token comment">#   &gt; 查询全部 UTXO 集合信息</span>
$ bitcoin-cli preciousblock <span class="token punctuation">[</span>BLOCK_HASH<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli preciousblock &quot;blockhash&quot;</span>
<span class="token comment">#   &gt; ?</span>
<span class="token comment">#       &quot;blockhash&quot; : 区块哈希</span>
$ bitcoin-cli pruneblockchain <span class="token number">100</span> 
<span class="token comment"># bitcoin-cli pruneblockchain height</span>
<span class="token comment">#   &gt; 修剪区块链</span>
<span class="token comment">#       height : 区块高度</span>
$ bitcoin-cli savemempool 
<span class="token comment">#   &gt; 保存交易内存池信息到磁盘</span>
$ bitcoin-cli verifychain 
<span class="token comment"># bitcoin-cli verifychain ( checklevel nblocks )</span>
<span class="token comment">#   &gt; 验证区块链数据库</span>
<span class="token comment">#       checklevel : 验证深度(默认: 3)</span>
<span class="token comment">#       nblocks : 验证区块数量(默认: 6)</span>
$ bitcoin-cli verifytxoutproof <span class="token punctuation">[</span>PROOF<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli verifytxoutproof &quot;proof&quot;</span>
<span class="token comment">#   &gt; 验证 POW 工作量证明</span>
<span class="token comment">#           &quot;proof&quot; : 16 进制 POW 工作量证明 (通过 gettxoutproof 获取)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="control-控制" tabindex="-1"><a class="header-anchor" href="#control-控制" aria-hidden="true">#</a> Control (控制)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ bitcoin-cli getmemoryinfo 
<span class="token comment"># bitcoin-cli getmemoryinfo (&quot;mode&quot;)</span>
<span class="token comment">#   &gt; 查询内存信息</span>
<span class="token comment">#       mode : </span>
$ bitcoin-cli <span class="token builtin class-name">help</span> get
<span class="token comment"># bitcoin-cli help ( &quot;command&quot; )</span>
<span class="token comment">#   &gt; 查询命令帮助信息</span>
<span class="token comment">#       command : 命令</span>
$ bitcoin-cli logging 
<span class="token comment"># bitcoin-cli logging ( &lt;include&gt; &lt;exclude&gt; )</span>
<span class="token comment">#   &gt; 查询 logging 设置信息</span>
<span class="token comment">#       include :</span>
<span class="token comment">#       exclude : </span>
$ bitcoin-cli stop 
<span class="token comment">#   &gt; 停止 bitcoind 服务</span>
$ bitcoin-cli <span class="token function">uptime</span> 
<span class="token comment">#   &gt; 查询服务总运行时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generating-区块生成" tabindex="-1"><a class="header-anchor" href="#generating-区块生成" aria-hidden="true">#</a> Generating (区块生成)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ bitcoin-cli generate <span class="token number">10</span> 
<span class="token comment"># bitcoin-cli generate nblocks ( maxtries )</span>
<span class="token comment">#   &gt; 生成区块</span>
<span class="token comment">#       nblocks : 生成区块的个数</span>
<span class="token comment">#       maxtries : 最大尝试次数</span>
$ bitcoin-cli generatetoaddress <span class="token number">10</span> <span class="token punctuation">[</span>BTC_ADDR<span class="token punctuation">]</span> <span class="token comment"># 为 BTC 地址生成 10 个区块</span>
<span class="token comment"># bitcoin-cli generatetoaddress nblocks address (maxtries)</span>
<span class="token comment">#   &gt; 为指定的 BTC 地址生成区块</span>
<span class="token comment">#       nblocks : 生成区块的个数</span>
<span class="token comment">#       address : BTC 地址</span>
<span class="token comment">#       maxtries : 最大尝试次数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mining-挖矿" tabindex="-1"><a class="header-anchor" href="#mining-挖矿" aria-hidden="true">#</a> Mining (挖矿)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ bitcoin-cli getblocktemplate
<span class="token comment"># bitcoin-cli getblocktemplate ( TemplateRequest )</span>
<span class="token comment">#   &gt; 获取区块模板</span>
<span class="token comment">#       TemplateRequest : </span>
$ bitcoin-cli getmininginfo 
<span class="token comment">#   &gt; 查询挖矿信息</span>
$ bitcoin-cli getnetworkhashps
<span class="token comment"># bitcoin-cli getnetworkhashps ( nblocks height )</span>
<span class="token comment">#   &gt; 获取网络算力</span>
<span class="token comment">#       nblocks : </span>
<span class="token comment">#       height : 给定高度的估计(默认: -1)</span>
$ bitcoin-cli prioritisetransaction
<span class="token comment"># bitcoin-cli prioritisetransaction &lt;txid&gt; &lt;dummy value&gt; &lt;fee delta&gt;</span>
<span class="token comment">#   &gt; 改变交易优先级</span>
<span class="token comment">#       txid : </span>
<span class="token comment">#       dummy value : </span>
<span class="token comment">#       fee delta : </span>
$ bitcoin-cli submitblock
<span class="token comment"># bitcoin-cli submitblock &quot;hexdata&quot;  ( &quot;dummy&quot; )</span>
<span class="token comment">#   &gt; 提交区块</span>
<span class="token comment">#       hexdata : </span>
<span class="token comment">#       dummy : </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="network-网络" tabindex="-1"><a class="header-anchor" href="#network-网络" aria-hidden="true">#</a> Network (网络)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ bitcoin-cli addnode
<span class="token comment"># bitcoin-cli addnode &quot;node&quot; &quot;add|remove|onetry&quot;</span>
<span class="token comment">#   &gt; 添加一个 P2P 节点</span>
<span class="token comment">#       node : 节点</span>
<span class="token comment">#       add|remove|onetry : 添加 | 移除 | 尝试连接节点一次</span>
$ bitcoin-cli clearbanned 
<span class="token comment">#   &gt; 清除所有禁用的的 IP (黑名单)</span>
$ bitcoin-cli disconnectnode 
<span class="token comment"># bitcoin-cli disconnectnode &quot;[address]&quot; [nodeid]</span>
<span class="token comment">#   &gt; 断开与指定节点的连接</span>
<span class="token comment">#       address : 节点地址</span>
<span class="token comment">#       nodeid : 节点 ID </span>
$ bitcoin-cli getaddednodeinfo 
<span class="token comment"># bitcoin-cli getaddednodeinfo ( &quot;node&quot; )</span>
<span class="token comment">#   &gt; 查询所有添加节点的信息</span>
<span class="token comment">#       node : 指定的节点</span>
$ bitcoin-cli getconnectioncount 
<span class="token comment">#   &gt; 查询当前 P2P 连接数量</span>
$ bitcoin-cli getnettotals 
<span class="token comment">#   &gt; 查询当前网络信息(输入输出字节、以及当前时间)</span>
$ bitcoin-cli getnetworkinfo    
<span class="token comment">#   &gt; 查询当前网络信息</span>
$ bitcoin-cli getpeerinfo 
<span class="token comment">#   &gt; 查询连接的 P2P 节点信息</span>
$ bitcoin-cli listbanned 
<span class="token comment">#   &gt; 查询禁用的 IP / 子网 (黑名单)</span>
$ bitcoin-cli <span class="token function">ping</span> 
<span class="token comment">#   &gt; 测试 ping 连接节点的信息</span>
$ bitcoin-cli setban 
<span class="token comment"># bitcoin-cli setban &quot;subnet&quot; &quot;add|remove&quot; (bantime) (absolute)</span>
<span class="token comment">#   &gt; 添加(移除)从禁止列表 (黑名单)</span>
<span class="token comment">#       subnet : 子网 </span>
<span class="token comment">#       add | remove : 添加 | 删除 </span>
<span class="token comment">#       bantime : 禁止时间</span>
<span class="token comment">#       absolute : (true: bantime 必须设置绝对时间(since 1970))</span>
$ bitcoin-cli setnetworkactive true<span class="token punctuation">(</span>false<span class="token punctuation">)</span> 
<span class="token comment">#   &gt; 启用(禁止)所有连接的 P2P 网络</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rawtransactions-原始交易" tabindex="-1"><a class="header-anchor" href="#rawtransactions-原始交易" aria-hidden="true">#</a> Rawtransactions (原始交易)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ bitcoin-cli combinerawtransaction
<span class="token comment"># bitcoin-cli combinerawtransaction [&quot;hexstring&quot;,...]</span>
<span class="token comment">#   &gt; </span>
$ bitcoin-cli createrawtransaction 
<span class="token comment"># bitcoin-cli createrawtransaction [{&quot;txid&quot;:&quot;id&quot;,&quot;vout&quot;:n},...] [{&quot;address&quot;:amount},{&quot;data&quot;:&quot;hex&quot;},...] ( locktime ) ( replaceable )</span>
<span class="token comment"># &gt; 根据交易参数创建一笔交易(16 进制交易信息)</span>
<span class="token comment">#       locktime : </span>
<span class="token comment">#       replaceable : </span>
$ bitcoin-cli decoderawtransaction <span class="token punctuation">[</span>HEX_TX<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli decoderawtransaction &quot;hexstring&quot; ( iswitness )</span>
<span class="token comment">#   &gt; 解码 16 进制交易信息</span>
<span class="token comment">#       hexstring : 16 进制交易信息</span>
<span class="token comment">#       iswitness : 是否隔离见证</span>
$ bitcoin-cli decodescript
<span class="token comment"># bitcoin-cli decodescript &quot;hexstring&quot;</span>
<span class="token comment">#   &gt; 解码脚本</span>
<span class="token comment">#       hexstring : 交易信息</span>
$ bitcoin-cli fundrawtransaction
<span class="token comment"># bitcoin-cli fundrawtransaction &quot;hexstring&quot; ( options iswitness )</span>
<span class="token comment">#   &gt; 资助交易</span>
<span class="token comment">#       hexstring : 16 进制交易信息</span>
<span class="token comment">#       options : </span>
<span class="token comment">#       iswitness : </span>
$ bitcoin-cli getrawtransaction <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli getrawtransaction &quot;txid&quot; ( verbose &quot;blockhash&quot; )</span>
<span class="token comment">#   &gt; 根据交易哈希查询交易详细信息</span>
<span class="token comment">#       &quot;txid&quot; : 交易哈希</span>
<span class="token comment">#       verbose : 显示格式(默认: false)</span>
<span class="token comment">#           true : JSON 格式</span>
<span class="token comment">#           false : 16 进制格式</span>
<span class="token comment">#       &quot;blockhash&quot; : 查找的区块哈希</span>
$ bitcoin-cli sendrawtransaction <span class="token punctuation">[</span>HEX_TX<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli sendrawtransaction &quot;hexstring&quot; ( allowhighfees )</span>
<span class="token comment">#   &gt; 发送已签名 16 进制交易</span>
<span class="token comment">#       hexstring : 已签名 16 进制交易信息</span>
<span class="token comment">#       allowhighfees : </span>
$ bitcoin-cli signrawtransaction <span class="token punctuation">[</span>HEX_TX<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli signrawtransaction &quot;hexstring&quot; ( [{&quot;txid&quot;:&quot;id&quot;,&quot;vout&quot;:n,&quot;scriptPubKey&quot;:&quot;hex&quot;,&quot;redeemScript&quot;:&quot;hex&quot;},...] [&quot;privatekey1&quot;,...] sighashtype )</span>
<span class="token comment">#   &gt; 签名 16 进制交易信息</span>
<span class="token comment">#       hexstring : 未签名 16 进制交易信息</span>
$ bitcoin-cli signrawtransactionwithkey <span class="token punctuation">[</span>HEX_TX<span class="token punctuation">]</span> <span class="token punctuation">[</span>PTV_KEY1, PTC_KEY2<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli signrawtransactionwithkey &quot;hexstring&quot; [&quot;privatekey1&quot;,...] ( [{&quot;txid&quot;:&quot;id&quot;,&quot;vout&quot;:n,&quot;scriptPubKey&quot;:&quot;hex&quot;,&quot;redeemScript&quot;:&quot;hex&quot;},...] sighashtype )</span>
<span class="token comment">#   &gt; 使用私钥进行签名 </span>
<span class="token comment">#       hexstring : 未签名 16 进制交易信息</span>
<span class="token comment">#       [&quot;privatekey1&quot;,...] : 签名的私钥</span>
$ bitcoin-cli testmempoolaccept
<span class="token comment"># bitcoin-cli testmempoolaccept [&quot;rawtxs&quot;] ( allowhighfees )</span>
<span class="token comment">#   &gt; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="util-工具" tabindex="-1"><a class="header-anchor" href="#util-工具" aria-hidden="true">#</a> Util (工具)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ bitcoin-cli createmultisig
<span class="token comment"># bitcoin-cli createmultisig nrequired [&quot;key&quot;,...] ( &quot;address_type&quot; )</span>
<span class="token comment">#   &gt; 创建多签名</span>
<span class="token comment">#       nrequired : 要求签名的数量</span>
$ bitcoin-cli estimatesmartfee
<span class="token comment"># bitcoin-cli estimatesmartfee conf_target (&quot;estimate_mode&quot;)</span>
<span class="token comment">#   &gt; 智能估计交易费</span>
$ bitcoin-cli signmessagewithprivkey
<span class="token comment"># bitcoin-cli signmessagewithprivkey &quot;privkey&quot; &quot;message&quot;</span>
<span class="token comment">#   &gt; 通过私钥签名消息</span>
<span class="token comment">#       privkey : 私钥</span>
<span class="token comment">#       message : 消息内容</span>
$ bitcoin-cli validateaddress <span class="token punctuation">[</span>BTC_ADDR<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli validateaddress &quot;address&quot;</span>
<span class="token comment">#   &gt; 验证 BTC 地址是否合法</span>
<span class="token comment">#       address : BTC 地址</span>
$ bitcoin-cli verifymessage
<span class="token comment"># bitcoin-cli verifymessage &quot;address&quot; &quot;signature&quot; &quot;message&quot;</span>
<span class="token comment">#   &gt; 验证消息</span>
<span class="token comment">#       address : BTC 地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wallet-钱包" tabindex="-1"><a class="header-anchor" href="#wallet-钱包" aria-hidden="true">#</a> Wallet (钱包)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ bitcoin-cli abandontransaction <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli abandontransaction &quot;txid&quot;</span>
<span class="token comment">#   &gt; 放弃交易</span>
<span class="token comment">#       txid : 交易哈希</span>
$ bitcoin-cli abortrescan 
<span class="token comment">#   &gt;  </span>
$ bitcoin-cli addmultisigaddress 
<span class="token comment"># bitcoin-cli addmultisigaddress nrequired [&quot;key&quot;,...] ( &quot;label&quot; &quot;address_type&quot; )</span>
<span class="token comment">#   &gt; 添加多签名地址</span>
<span class="token comment">#       nrequired : </span>
$ bitcoin-cli backupwallet wallet.backup
<span class="token comment"># bitcoin-cli backupwallet &quot;destination&quot;</span>
<span class="token comment">#   &gt; 备份钱包</span>
<span class="token comment">#           destination : 备份目标文件</span>
$ bitcoin-cli bumpfee <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span> <span class="token comment"># </span>
<span class="token comment"># bitcoin-cli bumpfee &quot;txid&quot; ( options )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       txid : 交易哈希</span>
<span class="token comment">#       options : </span>
$ bitcoin-cli createwallet <span class="token builtin class-name">test</span> 
<span class="token comment"># bitcoin-cli createwallet &quot;wallet_name&quot;</span>
<span class="token comment">#   &gt; 根据钱包名字创建名的钱包</span>
<span class="token comment">#       &quot;wallet_name&quot; : 钱包名字</span>
$ bitcoin-cli dumpprivkey <span class="token punctuation">[</span>BTC_ADDR<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli dumpprivkey &quot;address&quot;</span>
<span class="token comment">#   &gt; 根据 BTC 地址查询私钥</span>
<span class="token comment">#       address : BTC 地址</span>
$ bitcoin-cli dumpwallet wallet.txt 
<span class="token comment"># bitcoin-cli dumpwallet &quot;filename&quot;</span>
<span class="token comment">#   &gt; 将钱包存储为可读的文件</span>
<span class="token comment">#       filename : 文件名</span>
$ bitcoin-cli encryptwallet <span class="token number">666666</span> 
<span class="token comment"># bitcoin-cli encryptwallet &quot;passphrase&quot;</span>
<span class="token comment">#   &gt; 加密钱包</span>
<span class="token comment">#       passphrase : 钱包密码</span>
$ bitcoin-cli getaddressesbylabel <span class="token builtin class-name">test</span> 
<span class="token comment"># bitcoin-cli getaddressesbylabel &quot;label&quot;</span>
<span class="token comment">#   &gt; 根据标签查询 BTC 地址</span>
<span class="token comment">#       label : 标签</span>
$ bitcoin-cli getaddressinfo <span class="token punctuation">[</span>BTC_ADDR<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli getaddressinfo &quot;address&quot;</span>
<span class="token comment">#   &gt; 查询 BTC 地址信息</span>
<span class="token comment">#       address : BTC 地址</span>
$ bitcoin-cli getbalance  
<span class="token comment"># bitcoin-cli getbalance ( &quot;(dummy)&quot; minconf include_watchonly )</span>
<span class="token comment">#   &gt; 查询总共可用余额</span>
<span class="token comment">#       dummy : </span>
<span class="token comment">#       minconf : 最小确认数(默认: 0)</span>
<span class="token comment">#       include_watchonly : (默认: false)</span>
$ bitcoin-cli getnewaddress 
$ bitcoin-cli getnewaddress <span class="token builtin class-name">test</span> <span class="token comment"># 生成标签为 test 的地址</span>
<span class="token comment"># bitcoin-cli getnewaddress ( &quot;label&quot; &quot;address_type&quot; )</span>
<span class="token comment">#   &gt; 生成一个新的 BTC 地址(无标签)</span>
<span class="token comment">#       &quot;label&quot; : 标签名</span>
<span class="token comment">#       &quot;address_type&quot; : 地址类型</span>
<span class="token comment">#           legacy :</span>
<span class="token comment">#           p2sh-segwit : </span>
<span class="token comment">#           bech32 : </span>
$ bitcoin-cli getrawchangeaddress 
<span class="token comment"># bitcoin-cli getrawchangeaddress ( &quot;address_type&quot; )</span>
<span class="token comment">#   &gt; 生成一个找零的 BTC 地址 (不常用)</span>
<span class="token comment">#       address_type : 地址类型</span>
$ bitcoin-cli getreceivedbyaddress <span class="token punctuation">[</span>BTC_ADDR<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli getreceivedbyaddress &quot;address&quot; ( minconf )</span>
<span class="token comment">#   &gt; 查询 BTC 地址接收的总金额</span>
<span class="token comment">#       address : BTC 地址</span>
<span class="token comment">#       minconf : 最小确认数</span>
$ bitcoin-cli gettransaction <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli gettransaction &quot;txid&quot; ( include_watchonly )</span>
<span class="token comment">#   &gt; 根据交易哈希查询交易(简化交易信息)</span>
<span class="token comment">#       txid : 交易哈希</span>
<span class="token comment">#       include_watchonly : </span>
$ bitcoin-cli getunconfirmedbalance 
<span class="token comment">#   &gt; 查询未确认的金额</span>
$ bitcoin-cli getwalletinfo 
<span class="token comment">#   &gt; 查询当前钱包信息</span>
$ bitcoin-cli importaddress <span class="token punctuation">[</span>BTC_ADDR<span class="token punctuation">]</span>
<span class="token comment"># bitcoin-cli importaddress &quot;address&quot; ( &quot;label&quot; rescan p2sh )</span>
<span class="token comment">#   &gt; 导入 BTC 地址 或者 脚本</span>
<span class="token comment">#       address : BTC 地址</span>
<span class="token comment">#       label : 标签</span>
<span class="token comment">#       rescan :   </span>
<span class="token comment">#       p2sh :  </span>
$ bitcoin-cli importmulti <span class="token string">&#39;[......]&#39;</span> 
<span class="token comment"># bitcoin-cli importmulti &quot;requests&quot; ( &quot;options&quot; )</span>
<span class="token comment">#   &gt; 多类型导入工具</span>
<span class="token comment">#       requests : 导入的 JSON 数组 (私钥、公钥或者 P2SH 脚本)</span>
<span class="token comment">#       options : JSON 格式选项</span>
$ bitcoin-cli importprivkey <span class="token punctuation">[</span>PVT_KEY<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli importprivkey &quot;privkey&quot; ( &quot;label&quot; ) ( rescan )</span>
<span class="token comment">#   &gt; 导入私钥</span>
<span class="token comment">#       privkey : 私钥</span>
<span class="token comment">#       label : 标签</span>
<span class="token comment">#       rescan : </span>
$ bitcoin-cli importprunedfunds 
<span class="token comment"># bitcoin-cli importprunedfunds &quot;rawtransaction&quot; &quot;txoutproof&quot;</span>
<span class="token comment">#   &gt; 导入未修剪资金</span>
<span class="token comment">#       rawtransaction : 原始的 16 进制交易数据</span>
<span class="token comment">#       txoutproof : </span>
$ bitcoin-cli importpubkey <span class="token punctuation">[</span>PUB_KEY<span class="token punctuation">]</span>
<span class="token comment"># bitcoin-cli importpubkey &quot;pubkey&quot; ( &quot;label&quot; rescan )</span>
<span class="token comment">#   &gt; 导入公钥</span>
<span class="token comment">#       pubkey : 公钥</span>
<span class="token comment">#       label : 标签</span>
<span class="token comment">#       rescan : </span>
$ bitcoin-cli importwallet test.dat 
<span class="token comment"># bitcoin-cli importwallet &quot;filename&quot;</span>
<span class="token comment">#   &gt; 导入钱包</span>
<span class="token comment">#       filename : 钱包文件</span>
$ bitcoin-cli keypoolrefill 
<span class="token comment"># bitcoin-cli keypoolrefill ( newsize )</span>
<span class="token comment">#   &gt; 重置密钥池大小</span>
<span class="token comment">#       newsize : 密钥池大小(默认: 1000)，必须必现在的值大(小于当前值无效)</span>
$ bitcoin-cli listaddressgroupings 
<span class="token comment">#   &gt; 查询 BTC 地址分组的列表信息</span>
$ bitcoin-cli listlabels 
<span class="token comment"># bitcoin-cli listlabels ( &quot;purpose&quot; )</span>
<span class="token comment">#   &gt; 查询标签列表</span>
<span class="token comment">#       purpose : BTC 地址性质(send | receive)</span>
$ bitcoin-cli listlockunspent 
<span class="token comment">#   &gt; 查询锁定的 UXTO</span>
$ bitcoin-cli listreceivedbyaddress 
<span class="token comment"># bitcoin-cli listreceivedbyaddress ( minconf include_empty include_watchonly address_filter )</span>
<span class="token comment">#   &gt; 查询 BTC 接收地址账户余额列表</span>
<span class="token comment">#       minconf : 包括付款前的最低确认数(默认: 1)</span>
<span class="token comment">#       include_empty : 是否包括未收到任何付款的地址(默认: false)</span>
<span class="token comment">#       include_watchonly : 是否只包括监视地址(默认: false)</span>
<span class="token comment">#       address_filter : 过滤地址(只返回包含此地址的信息)</span>
$ bitcoin-cli listsinceblock 
<span class="token comment"># bitcoin-cli listsinceblock ( &quot;blockhash&quot; target_confirmations include_watchonly include_removed )</span>
<span class="token comment">#   &gt; 查询区块中的所有交易</span>
<span class="token comment">#       blockhash :</span>
<span class="token comment">#       target_confirmations : </span>
<span class="token comment">#       include_watchonly : </span>
<span class="token comment">#       include_removed : </span>
$ bitcoin-cli listtransactions 
<span class="token comment"># bitcoin-cli listtransactions (dummy count skip include_watchonly)</span>
<span class="token comment">#   &gt; 查询整个钱包的交易列表</span>
<span class="token comment">#       dummy : (* : 向后兼容)</span>
<span class="token comment">#       count : 数量(默认: 10)</span>
<span class="token comment">#       skip : 跳过(默认: 0)</span>
<span class="token comment">#       include_watchonly : </span>
$ bitcoin-cli listunspent 
<span class="token comment"># bitcoin-cli listunspent ( minconf maxconf  [&quot;addresses&quot;,...] [include_unsafe] [query_options])</span>
<span class="token comment">#   &gt; 查询钱包中的 UXTO </span>
<span class="token comment">#       minconf : 最小确认数(默认: 1)</span>
<span class="token comment">#       maxconf : 最大确认数(默认: 9999999)</span>
<span class="token comment">#       [&quot;addresses&quot;,...] : 过滤 BTC 地址</span>
<span class="token comment">#       include_unsafe : 是否包含不安全花费(默认: true)</span>
<span class="token comment">#       query_options : JSON 格式查询选项</span>
$ bitcoin-cli listwallets 
<span class="token comment">#   &gt; 已加载钱包的列表</span>
$ bitcoin-cli loadwallet <span class="token builtin class-name">test</span> <span class="token comment"># 加载 test 钱包</span>
<span class="token comment"># bitcoin-cli loadwallet &quot;filename&quot;</span>
<span class="token comment">#   &gt; 加载钱包</span>
<span class="token comment">#       &quot;filename&quot; : 钱包文件目录 或 钱包文件(.dat) [默认在 walletdir 目录中查找]</span>
$ bitcoin-cli lockunspent <span class="token boolean">true</span> 
<span class="token comment"># bitcoin-cli lockunspent unlock ([{&quot;txid&quot;:&quot;txid&quot;,&quot;vout&quot;:n},...])</span>
<span class="token comment">#   &gt; 锁定 UTXO</span>
<span class="token comment">#       unlock : true | false</span>
$ bitcoin-cli removeprunedfunds
<span class="token comment"># bitcoin-cli removeprunedfunds &quot;txid&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       txid : 交易 ID</span>
$ bitcoin-cli rescanblockchain
<span class="token comment"># bitcoin-cli rescanblockchain (&quot;start_height&quot;) (&quot;stop_height&quot;)</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       start_height : 起始高度</span>
<span class="token comment">#       stop_height : 结束高度</span>
$ bitcoin-cli sendmany
<span class="token comment"># bitcoin-cli sendmany &quot;&quot; {&quot;address&quot;:amount,...} ( minconf &quot;comment&quot; [&quot;address&quot;,...] replaceable conf_target &quot;estimate_mode&quot;)</span>
<span class="token comment">#   &gt; 发送 BTC 到多个账户</span>
<span class="token comment">#       &quot;&quot; : 固定设置，为了向后兼容</span>
<span class="token comment">#       amounts : JSON 格式地址和数量</span>
$ bitcoin-cli sendtoaddress <span class="token punctuation">[</span>BTC_ADDR<span class="token punctuation">]</span> <span class="token number">10</span> <span class="token comment"># 给一个 BTC 地址发送 10 个比特币</span>
<span class="token comment"># bitcoin-cli sendtoaddress &quot;address&quot; amount ( &quot;comment&quot; &quot;comment_to&quot; subtractfeefromamount replaceable conf_target &quot;estimate_mode&quot;)</span>
<span class="token comment">#  &gt; 给一个 BTC 地址发送 BTC，自动进行交易的匹配，以及找零地址的创建</span>
<span class="token comment">#       &quot;address&quot; : BTC 地址</span>
<span class="token comment">#       amount : 比特币数量</span>
<span class="token comment">#       &quot;comment&quot; : 备注 (不保存在区块链中，仅保存在本地钱包中用作标记)</span>
<span class="token comment">#       &quot;comment_to&quot; : 填写备注的人或组织名 (同上)</span>
<span class="token comment">#       subtractfeefromamount : 费用将在发送金额中扣除(默认: false)</span>
<span class="token comment">#       replaceable : 通过 BIP 215 允许更高费用的交易代替</span>
<span class="token comment">#       conf_target : 确认目标</span>
<span class="token comment">#       &quot;estimate_mode&quot; : 费用模式(默认: UNSET)</span>
<span class="token comment">#           UNSET : </span>
<span class="token comment">#           ECONOMICAL : </span>
<span class="token comment">#           CONSERVATIVE : </span>
$ bitcoin-cli sethdseed 
<span class="token comment"># bitcoin-cli sethdseed ( &quot;newkeypool&quot; &quot;seed&quot; )</span>
<span class="token comment">#   &gt; 设置一个新的 HD 钱包种子</span>
<span class="token comment">#       newkeypool : </span>
<span class="token comment">#       seed : </span>
$ bitcoin-cli settxfee 
<span class="token comment"># bitcoin-cli settxfee amount</span>
<span class="token comment">#   &gt; 设置交易费</span>
<span class="token comment">#       amount : 交易费金额</span>
$ bitcoin-cli signmessage <span class="token punctuation">[</span>BTC_ADDR<span class="token punctuation">]</span> <span class="token punctuation">[</span>MSG<span class="token punctuation">]</span>  
<span class="token comment"># bitcoin-cli signmessage &quot;address&quot; &quot;message&quot;</span>
<span class="token comment">#   &gt; 签名一个消息</span>
<span class="token comment">#       address : BTC 地址</span>
<span class="token comment">#       message : 消息内容</span>
$ bitcoin-cli signrawtransactionwithwallet <span class="token punctuation">[</span>HEX_TX<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli signrawtransactionwithwallet &quot;hexstring&quot; ( [{&quot;txid&quot;:&quot;id&quot;,&quot;vout&quot;:n,&quot;scriptPubKey&quot;:&quot;hex&quot;,&quot;redeemScript&quot;:&quot;hex&quot;},...] sighashtype )</span>
<span class="token comment">#   &gt; 通过钱包签名交易数据</span>
<span class="token comment">#       hexstring : 16 进制交易数据</span>
<span class="token comment">#       prevtxs : 之前依赖交易输出</span>
<span class="token comment">#       sighashtype : 签名哈希类型(默认: ALL)</span>
<span class="token comment">#           ALL | NONE | SINGLE ...</span>
$ bitcoin-cli unloadwallet <span class="token builtin class-name">test</span> <span class="token comment"># 卸载 test 钱包</span>
<span class="token comment"># bitcoin-cli unloadwallet ( &quot;wallet_name&quot; )</span>
<span class="token comment">#   &gt; 卸载钱包</span>
<span class="token comment">#       wallet_name : 钱包名称</span>
$ bitcoin-cli walletlock 
<span class="token comment">#   &gt; 锁定钱包</span>
$ bitcoin-cli walletpassphrase <span class="token number">666666</span> <span class="token number">150</span> <span class="token comment"># 解锁钱包 150 秒</span>
<span class="token comment"># bitcoin-cli walletpassphrase &quot;passphrase&quot; timeout</span>
<span class="token comment">#   &gt; 解锁钱包</span>
<span class="token comment">#       passphrase : 密码</span>
<span class="token comment">#       timeout : 锁定超时时间</span>
$ bitcoin-cli walletpassphrasechange <span class="token punctuation">[</span>OLD<span class="token punctuation">]</span> <span class="token punctuation">[</span>NEW<span class="token punctuation">]</span> 
<span class="token comment"># bitcoin-cli walletpassphrasechange &quot;oldpassphrase&quot; &quot;newpassphrase&quot;</span>
<span class="token comment">#   &gt; 修改钱包密码</span>
<span class="token comment">#       oldpassphrase : 旧密码</span>
<span class="token comment">#       newpassphrase : 新密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function v(r,b){const e=i("ExternalLinkIcon");return t(),c("div",null,[d,n("ul",null,[n("li",null,[n("a",p,[l("比特币核心客户端 RPC 命令"),o(e)])])]),u])}const q=a(m,[["render",v],["__file","bitcoin-cli.html.vue"]]);export{q as default};
