import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c,b as n,e as t,d as l,f as s}from"./app-aW0fSETx.js";const m={},d=s(`<h1 id="omnicore-cli" tabindex="-1"><a class="header-anchor" href="#omnicore-cli" aria-hidden="true">#</a> omnicore-cli</h1><blockquote><p>Omni Core RPC 客户端</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ omnicore-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span>params<span class="token punctuation">]</span> 
<span class="token comment">#   &gt; 给 Omni Core 发送命令</span>
$ omnicore-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token builtin class-name">help</span>               
<span class="token comment">#   &gt; 显示帮助信息列表</span>
$ omnicore-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token builtin class-name">help</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>     
<span class="token comment">#   &gt; 查询一个命令的帮助信息</span>
<span class="token comment">#   Options</span>
<span class="token comment">#       -testnet : 使用测试链</span>
<span class="token comment">#       -regtest : 回归测试模式</span>
<span class="token comment">#       -rpcconnect : 节点的 IP (默认: 127.0.0.1)</span>
<span class="token comment">#       -rpcport : 端口号 (默认: 8332 testnet: 18332 regtest: 18443)</span>
<span class="token comment">#       -rpcuser : 用户名</span>
<span class="token comment">#       -rpcpassword : 密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,4),r={href:"https://github.com/OmniLayer/omnicore/blob/master/src/omnicore/doc/rpc-api.md",target:"_blank",rel:"noopener noreferrer"},p=s(`<h2 id="configuration-配置" tabindex="-1"><a class="header-anchor" href="#configuration-配置" aria-hidden="true">#</a> Configuration (配置)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ omnicore-cli omni_setautocommit <span class="token boolean">true</span> 
<span class="token comment"># omnicore-cli omni_setautocommit flag</span>
<span class="token comment">#   &gt; 设置交易指定提交和广播</span>
<span class="token comment">#       flag : 状态值(true | false)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-retrieval-数据查询" tabindex="-1"><a class="header-anchor" href="#data-retrieval-数据查询" aria-hidden="true">#</a> Data Retrieval (数据查询)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ omnicore-cli omni_getactivations 
<span class="token comment">#   &gt; 查询待定或已完成的激活特性</span>
$ omnicore-cli omni_getactivecrowdsales 
<span class="token comment">#   &gt; 列出当前激活的 crowdsale(代币销售 ICO)</span>
$ omnicore-cli omni_getactivedexsells
<span class="token comment"># omnicore-cli omni_getactivedexsells ( address )</span>
<span class="token comment">#   &gt;</span>
<span class="token comment">#       address : 过滤地址(默认: any，包括所有)</span>
$ omnicore-cli omni_getallbalancesforaddress <span class="token punctuation">[</span>ADD_XXX<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_getallbalancesforaddress &quot;address&quot;</span>
<span class="token comment">#   &gt; 列出钱包地址所有 token 的余额</span>
<span class="token comment">#       address : 钱包地址</span>
$ omnicore-cli omni_getallbalancesforid <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_getallbalancesforid propertyid</span>
<span class="token comment">#   &gt; 列出所有包含改属性ID的钱包</span>
<span class="token comment">#       propertyid : 代币属性 ID 或 代币名称</span>
$ omnicore-cli omni_getbalance <span class="token punctuation">[</span>ADD_XXX<span class="token punctuation">]</span> <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span>
<span class="token comment"># omnicore-cli omni_getbalance &quot;address&quot; propertyid</span>
<span class="token comment">#   &gt; 查询指定钱包地址的指定货币的数量</span>
<span class="token comment">#       address : 钱包地址</span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
$ omnicore-cli omni_getbalanceshash <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span>
<span class="token comment"># omnicore-cli omni_getbalanceshash propertyid</span>
<span class="token comment">#   &gt; 获取指定货币的余额哈希</span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
$ omnicore-cli omni_getcrowdsale <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span>
<span class="token comment"># omnicore-cli omni_getcrowdsale propertyid ( verbose )</span>
<span class="token comment">#   &gt; 查询指定属性 ID 的代币信息</span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
<span class="token comment">#       verbose : 默认(true)，是否显示参与者信息</span>
$ omnicore-cli omni_getcurrentconsensushash 
<span class="token comment">#   &gt; 查询当前一致性哈希</span>
$ omnicore-cli omni_getfeecache 
<span class="token comment"># omnicore-cli omni_getfeecache ( propertyid )</span>
<span class="token comment">#   &gt; 查询当前分发的费用信息</span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
$ omnicore-cli omni_getfeedistribution <span class="token punctuation">[</span>D_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_getfeedistribution distributionid</span>
<span class="token comment">#   &gt; 查询费用分发详细信息</span>
<span class="token comment">#       distributionid : 分发 ID</span>
$ omnicore-cli omni_getfeedistributions <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_getfeedistributions propertyid</span>
<span class="token comment">#   &gt; 指定代币费用分发列表</span>
<span class="token comment">#       propertyid : 属性 ID</span>
$ omnicore-cli omni_getfeeshare 
<span class="token comment"># omnicore-cli omni_getfeeshare ( address ecosystem )</span>
<span class="token comment">#   &gt; 查询费用分发(按照百分比显示)</span>
<span class="token comment">#       address : 钱包地址</span>
<span class="token comment">#       ecosystem : 检查小费分发的系统(1: main 2: test)</span>
$ omnicore-cli omni_getfeetrigger 
<span class="token comment"># omnicore-cli omni_getfeetrigger ( propertyid )</span>
<span class="token comment">#   &gt; 缓存中触发分发的费用总数</span>
<span class="token comment">#       propertyid : 属性 ID</span>
$ omnicore-cli omni_getgrants <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_getgrants propertyid</span>
<span class="token comment">#   &gt; 查询代币的授权和撤销管理单位信息</span>
<span class="token comment">#       propertyid : 属性 ID</span>
$ omnicore-cli omni_getinfo 
<span class="token comment">#   &gt; 查询当前区块信息</span>
$ omnicore-cli omni_getmetadexhash <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span>
<span class="token comment"># omnicore-cli omni_getmetadexhash propertyId</span>
<span class="token comment">#   &gt;</span>
<span class="token comment">#       propertyid : 属性 ID</span>
$ omnicore-cli omni_getorderbook <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span>
<span class="token comment"># omnicore-cli omni_getorderbook propertyid ( propertyid )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       propertyid : 属性 ID</span>
$ omnicore-cli omni_getpayload <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span>
<span class="token comment"># omnicore-cli omni_getpayload &quot;txid&quot;</span>
<span class="token comment">#   &gt;</span>
$ omnicore-cli omni_getproperty <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span>
<span class="token comment"># omnicore-cli omni_getproperty propertyid</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       propertyid : 属性 ID</span>
$ omnicore-cli omni_getseedblocks <span class="token number">0</span> <span class="token number">100</span> <span class="token comment"># </span>
<span class="token comment"># omnicore-cli omni_getseedblocks startblock endblock</span>
<span class="token comment">#   &gt;</span>
<span class="token comment">#       startblock : 起始区块 </span>
<span class="token comment">#       endblock : 结束区块</span>
$ omnicore-cli omni_getsto <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span> <span class="token punctuation">[</span>REC<span class="token punctuation">]</span> <span class="token comment"># </span>
<span class="token comment"># omnicore-cli omni_getsto &quot;txid&quot; &quot;recipientfilter&quot;</span>
<span class="token comment">#   &gt;</span>
<span class="token comment">#       txid : 交易 ID</span>
<span class="token comment">#       recipientfilter : </span>
$ omnicore-cli omni_gettrade <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_gettrade &quot;txid&quot;</span>
<span class="token comment">#   &gt; 根据交易 ID 查询币币交易详细信息</span>
<span class="token comment">#       txid : 交易 ID</span>
$ omnicore-cli omni_gettradehistoryforaddress <span class="token punctuation">[</span>ADD_XX<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_gettradehistoryforaddress &quot;address&quot; ( count propertyid )</span>
<span class="token comment">#   &gt; 查询钱包交易历史</span>
<span class="token comment">#       address : 钱包地址</span>
<span class="token comment">#       count : </span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
$ omnicore-cli omni_gettradehistoryforpair <span class="token punctuation">[</span>P_ID_1<span class="token punctuation">]</span> <span class="token punctuation">[</span>P_ID_2<span class="token punctuation">]</span>
<span class="token comment"># omnicore-cli omni_gettradehistoryforpair propertyid propertyid ( count )</span>
<span class="token comment">#   &gt; 查询两种代币交易历史</span>
<span class="token comment">#       propertyid : 代币1 ID</span>
<span class="token comment">#       propertyid : 代币2 ID</span>
<span class="token comment">#       count : 查询结果数量(默认: 10)</span>
$ omnicore-cli omni_gettransaction <span class="token punctuation">[</span>TX_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_gettransaction &quot;txid&quot;</span>
<span class="token comment">#   &gt; 根据交易 ID 查询 Omni 交易详细信息</span>
<span class="token comment">#       txid : 交易 ID</span>
$ omnicore-cli omni_listblocktransactions <span class="token number">1</span> 
<span class="token comment"># omnicore-cli omni_listblocktransactions index</span>
<span class="token comment">#   &gt; 查询指定区块的交易列表</span>
<span class="token comment">#       index : 交易区块列表</span>
$ omnicore-cli omni_listpendingtransactions 
<span class="token comment"># omnicore-cli omni_listpendingtransactions ( &quot;address&quot; )</span>
<span class="token comment">#   &gt; 查询内存池中未确认的交易列表</span>
<span class="token comment">#       address : 钱包地址</span>
$ omnicore-cli omni_listproperties 
<span class="token comment"># omnicore-cliomni_listtransactions ( &quot;address&quot; count skip startblock endblock )</span>
<span class="token comment">#   &gt; 列出所有 Token 或者 智能属性</span>
<span class="token comment">#       address : 钱包地址</span>
<span class="token comment">#       count : 查询数量(默认: 10)</span>
<span class="token comment">#       skip : 跳过交易数量(默认: 0)</span>
<span class="token comment">#       startblock : 起始区块</span>
<span class="token comment">#       endblock : 结束区块</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="payload-creation-创建-payload" tabindex="-1"><a class="header-anchor" href="#payload-creation-创建-payload" aria-hidden="true">#</a> Payload Creation (创建 payload)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ omnicore-cli omni_createpayload_cancelalltrades
<span class="token comment"># omnicore-cli omni_createpayload_cancelalltrades ecosystem</span>
<span class="token comment">#   &gt;</span>
$ omnicore-cli omni_createpayload_canceltradesbypair
<span class="token comment"># omnicore-cli omni_createpayload_canceltradesbypair propertyidforsale propertiddesired</span>
<span class="token comment">#   &gt;</span>
$ omnicore-cli omni_createpayload_canceltradesbyprice 
<span class="token comment"># omnicore-cli omni_createpayload_canceltradesbyprice propertyidforsale &quot;amountforsale&quot; propertiddesired &quot;amountdesired&quot;</span>
<span class="token comment">#   &gt;</span>
$ omnicore-cli omni_createpayload_changeissuer <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span>  
<span class="token comment"># omnicore-cli omni_createpayload_changeissuer propertyid</span>
<span class="token comment">#   &gt;</span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
$ omnicore-cli omni_createpayload_closecrowdsale <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_createpayload_closecrowdsale propertyid</span>
<span class="token comment">#   &gt;</span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
$ omnicore-cli omni_senddexaccept <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_senddexaccept propertyid &quot;amount&quot;</span>
<span class="token comment">#   &gt;</span>
$ omnicore-cli omni_createpayload_dexsell
<span class="token comment"># omnicore-cli omni_createpayload_dexsell propertyidforsale &quot;amountforsale&quot; &quot;amountdesired&quot; paymentwindow minacceptfee action</span>
<span class="token comment">#   &gt;</span>
$ omnicore-cli omni_createpayload_disablefreezing <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_createpayload_disablefreezing propertyid</span>
<span class="token comment">#   &gt;</span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
$ omnicore-cli omni_createpayload_enablefreezing <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_createpayload_enablefreezing propertyid</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
$ omnicore-cli omni_createpayload_freeze
<span class="token comment"># omnicore-cli omni_createpayload_freeze &quot;toaddress&quot; propertyid amount</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       toaddress : </span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
<span class="token comment">#       amount : </span>
$ omnicore-cli omni_createpayload_grant <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span> 
<span class="token comment"># omnicore-cli omni_createpayload_grant propertyid &quot;amount&quot; ( &quot;memo&quot; )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
<span class="token comment">#       amount : </span>
<span class="token comment">#       memo : </span>
$ omnicore-cli omni_createpayload_issuancecrowdsal 
<span class="token comment"># omnicore-cli omni_createpayload_issuancecrowdsale ecosystem type previousid &quot;category&quot; &quot;subcategory&quot; &quot;name&quot; &quot;url&quot; &quot;data&quot; propertyiddesired tokensperunit deadline earlybonus issuerpercentage</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       ecosystem :  </span>
<span class="token comment">#       type : </span>
<span class="token comment">#       previousid : </span>
<span class="token comment">#       category : </span>
<span class="token comment">#       subcategory : </span>
<span class="token comment">#       name : </span>
<span class="token comment">#       url : </span>
<span class="token comment">#       data : </span>
<span class="token comment">#       propertyiddesired :  </span>
<span class="token comment">#       tokensperunit : </span>
<span class="token comment">#       deadline : </span>
<span class="token comment">#       earlybonus : </span>
<span class="token comment">#       issuerpercentage : </span>
$ omnicore-cli omni_createpayload_issuancefixed 
<span class="token comment"># omnicore-cli omni_createpayload_issuancefixed ecosystem type previousid &quot;category&quot; &quot;subcategory&quot; &quot;name&quot; &quot;url&quot; &quot;data&quot; &quot;amount&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       ecosystem : </span>
<span class="token comment">#       type : </span>
<span class="token comment">#       previousid :  </span>
<span class="token comment">#       category : </span>
<span class="token comment">#       subcategory : </span>
<span class="token comment">#       name : </span>
<span class="token comment">#       url : </span>
<span class="token comment">#       data : </span>
<span class="token comment">#       amount :  </span>
$ omnicore-cli omni_createpayload_issuancemanaged
<span class="token comment"># omnicore-cli omni_createpayload_issuancemanaged ecosystem type previousid &quot;category&quot; &quot;subcategory&quot; &quot;name&quot; &quot;url&quot; &quot;data&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       ecosystem :  </span>
<span class="token comment">#       type :</span>
<span class="token comment">#       previousid </span>
<span class="token comment">#       category</span>
<span class="token comment">#       subcategory</span>
<span class="token comment">#       name</span>
<span class="token comment">#       url</span>
<span class="token comment">#       data</span>
$ omnicore-cli omni_createpayload_revoke 
<span class="token comment"># omnicore-cli omni_createpayload_revoke propertyid &quot;amount&quot; ( &quot;memo&quot; )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       propertyid : </span>
<span class="token comment">#       amount : </span>
<span class="token comment">#       memo : </span>
$ omnicore-cli omni_createpayload_sendall
<span class="token comment"># omnicore-cli omni_createpayload_sendall ecosystem</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       ecosystem : </span>
$ omnicore-cli omni_createpayload_simplesend <span class="token punctuation">[</span>P_ID<span class="token punctuation">]</span>
<span class="token comment"># omnicore-cli omni_createpayload_simplesend propertyid &quot;amount&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
<span class="token comment">#       amount : </span>
$ omnicore-cli omni_createpayload_sto
<span class="token comment"># omnicore-cli omni_createpayload_sto propertyid &quot;amount&quot; ( distributionproperty )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       propertyid : 代币属性 ID</span>
<span class="token comment">#       amount : </span>
<span class="token comment">#       distributionproperty : </span>
$ omnicore-cli omni_createpayload_trade
<span class="token comment"># omnicore-cli omni_createpayload_trade propertyidforsale &quot;amountforsale&quot; propertiddesired &quot;amountdesired&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       propertyidforsale : </span>
<span class="token comment">#       amountforsale : </span>
<span class="token comment">#       propertiddesired : </span>
<span class="token comment">#       amountdesired : </span>
$ omnicore-cli omni_createpayload_unfreeze
<span class="token comment"># omnicore-cli omni_createpayload_unfreeze &quot;toaddress&quot; propertyid amount</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       toaddress : </span>
<span class="token comment">#       propertyid :</span>
<span class="token comment">#       amount :</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="raw-transactions-原始交易" tabindex="-1"><a class="header-anchor" href="#raw-transactions-原始交易" aria-hidden="true">#</a> Raw Transactions (原始交易)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ omnicore-cli omni_createrawtx_change
<span class="token comment"># omnicore-cli omni_createrawtx_change &quot;rawtx&quot; &quot;prevtxs&quot; &quot;destination&quot; fee ( position )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       rawtx : 原始交易</span>
<span class="token comment">#       prevtxs :</span>
<span class="token comment">#       destination : </span>
<span class="token comment">#       fee :</span>
<span class="token comment">#       position : </span>
$ omnicore-cli omni_createrawtx_input
<span class="token comment"># omnicore-cli omni_createrawtx_input &quot;rawtx&quot; &quot;txid&quot; n</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       rawtx : 原始交易</span>
<span class="token comment">#       txid : 交易 ID</span>
<span class="token comment">#       n : </span>
$ omnicore-cli omni_createrawtx_multisig
<span class="token comment"># omnicore-cli omni_createrawtx_multisig &quot;rawtx&quot; &quot;payload&quot; &quot;seed&quot; &quot;redeemkey&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       rawtx : 原始交易</span>
<span class="token comment">#       payload : </span>
<span class="token comment">#       seed :</span>
<span class="token comment">#       redeemkey : </span>
$ omnicore-cli omni_createrawtx_opreturn
<span class="token comment"># omnicore-cli omni_createrawtx_opreturn &quot;rawtx&quot; &quot;payload&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       rawtx : 原始交易</span>
<span class="token comment">#       payload : </span>
$ omnicore-cli omni_createrawtx_reference
<span class="token comment"># omnicore-cli omni_createrawtx_reference &quot;rawtx&quot; &quot;destination&quot; ( amount )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       rawtx : 原始交易</span>
<span class="token comment">#       destination : </span>
<span class="token comment">#       amount : </span>
$ omnicore-cli omni_decodetransaction
<span class="token comment"># omnicore-cli omni_decodetransaction &quot;rawtx&quot; ( &quot;prevtxs&quot; height )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       rawtx : 原始交易</span>
<span class="token comment">#       prevtxs :  </span>
<span class="token comment">#       height : </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transaction-creation-创建交易" tabindex="-1"><a class="header-anchor" href="#transaction-creation-创建交易" aria-hidden="true">#</a> Transaction Creation (创建交易)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ omnicore-cli omni_send 
<span class="token comment"># omnicore-cli omni_send &quot;fromaddress&quot; &quot;toaddress&quot; propertyid &quot;amount&quot; ( &quot;redeemaddress&quot; &quot;referenceamount&quot; )</span>
<span class="token comment">#   &gt; 创建并</span>
<span class="token comment">#       &quot;fromaddress&quot; : </span>
<span class="token comment">#       &quot;toaddress&quot; : </span>
<span class="token comment">#       propertyid : </span>
<span class="token comment">#       &quot;amount&quot; : </span>
<span class="token comment">#       &quot;redeemaddress&quot; : </span>
<span class="token comment">#       &quot;referenceamount&quot; : </span>
$ omnicore-cli omni_sendall
<span class="token comment"># omnicore-cli omni_sendall &quot;fromaddress&quot; &quot;toaddress&quot; ecosystem ( &quot;redeemaddress&quot; &quot;referenceamount&quot; )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       toaddress : </span>
<span class="token comment">#       ecosystem : </span>
<span class="token comment">#       redeemaddress : </span>
<span class="token comment">#       referenceamount : </span>
$ omnicore-cli omni_sendcancelalltrades
<span class="token comment"># omnicore-cli omni_sendcancelalltrades &quot;fromaddress&quot; ecosystem</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       ecosystem : </span>
$ omnicore-cli omni_sendcanceltradesbypair
<span class="token comment"># omnicore-cli omni_sendcanceltradesbypair &quot;fromaddress&quot; propertyidforsale propertiddesired</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       propertyidforsale : </span>
<span class="token comment">#       propertiddesired : </span>
$ omnicore-cli omni_sendcanceltradesbyprice
<span class="token comment"># omnicore-cli omni_sendcanceltradesbyprice &quot;fromaddress&quot; propertyidforsale &quot;amountforsale&quot; propertiddesired &quot;amountdesired&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       propertyidforsale : </span>
<span class="token comment">#       amountforsale : </span>
<span class="token comment">#       propertiddesired : </span>
<span class="token comment">#       amountdesired : </span>
$ omnicore-cli omni_sendchangeissuer
<span class="token comment"># omnicore-cli omni_sendchangeissuer &quot;fromaddress&quot; &quot;toaddress&quot; propertyid</span>
<span class="token comment">#   &gt;</span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       toaddress : </span>
<span class="token comment">#       propertyid : </span>
$ omnicore-cli omni_sendclosecrowdsale
<span class="token comment"># omnicore-cli omni_sendclosecrowdsale &quot;fromaddress&quot; propertyid</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       propertyid :</span>
$ omnicore-cli omni_senddexaccept 
<span class="token comment"># omnicore-cli omni_senddexaccept &quot;fromaddress&quot; &quot;toaddress&quot; propertyid &quot;amount&quot; ( override )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       toaddress : </span>
<span class="token comment">#       propertyid : </span>
<span class="token comment">#       amount :</span>
<span class="token comment">#       override : </span>
$ omnicore-cli omni_senddexsell
<span class="token comment"># omnicore-cli omni_senddexsell &quot;fromaddress&quot; propertyidforsale &quot;amountforsale&quot; &quot;amountdesired&quot; paymentwindow minacceptfee action</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       propertyidforsale </span>
<span class="token comment">#       amountforsale</span>
<span class="token comment">#       amountdesired</span>
<span class="token comment">#       paymentwindow </span>
<span class="token comment">#       minacceptfee </span>
<span class="token comment">#       action</span>
$ omnicore-cli omni_senddisablefreezing
<span class="token comment"># omnicore-cli omni_senddisablefreezing &quot;fromaddress&quot; propertyid</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       propertyid : </span>
$ omnicore-cli omni_sendenablefreezing
<span class="token comment"># omnicore-cli omni_sendenablefreezing &quot;fromaddress&quot; propertyid</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       propertyid : </span>
$ omnicore-cli omni_sendfreeze
<span class="token comment"># omnicore-cli omni_sendfreeze &quot;fromaddress&quot; &quot;toaddress&quot; propertyid amount</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       toaddress : </span>
<span class="token comment">#       propertyid : </span>
<span class="token comment">#       amount : </span>
$ omnicore-cli omni_sendgrant
<span class="token comment"># omnicore-cli omni_sendgrant &quot;fromaddress&quot; &quot;toaddress&quot; propertyid &quot;amount&quot; ( &quot;memo&quot; )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       toaddress : </span>
<span class="token comment">#       propertyid : </span>
<span class="token comment">#       amount : </span>
<span class="token comment">#       memo : </span>
$ omnicore-cli omni_sendissuancecrowdsale
<span class="token comment"># omnicore-cli omni_sendissuancecrowdsale &quot;fromaddress&quot; ecosystem type previousid &quot;category&quot; &quot;subcategory&quot; &quot;name&quot; &quot;url&quot; &quot;data&quot; propertyiddesired tokensperunit deadline ( earlybonus issuerpercentage )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       ecosystem : </span>
<span class="token comment">#       type : </span>
<span class="token comment">#       previousid </span>
<span class="token comment">#       category</span>
<span class="token comment">#       subcategory</span>
<span class="token comment">#       name</span>
<span class="token comment">#       url</span>
<span class="token comment">#       data </span>
<span class="token comment">#       propertyiddesired </span>
<span class="token comment">#       tokensperunit </span>
<span class="token comment">#       deadline </span>
<span class="token comment">#       earlybonus </span>
<span class="token comment">#       issuerpercentage </span>
$ omnicore-cli omni_sendissuancefixed
<span class="token comment"># omnicore-cli omni_sendissuancefixed &quot;fromaddress&quot; ecosystem type previousid &quot;category&quot; &quot;subcategory&quot; &quot;name&quot; &quot;url&quot; &quot;data&quot; &quot;amount&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       ecosystem : </span>
<span class="token comment">#       type : </span>
<span class="token comment">#       previousid :</span>
<span class="token comment">#       category :</span>
<span class="token comment">#       subcategory : </span>
<span class="token comment">#       name : </span>
<span class="token comment">#       url : </span>
<span class="token comment">#       data : </span>
<span class="token comment">#       amount : </span>
$ omnicore-cli omni_sendissuancemanaged
<span class="token comment"># omnicore-cli omni_sendissuancemanaged &quot;fromaddress&quot; ecosystem type previousid &quot;category&quot; &quot;subcategory&quot; &quot;name&quot; &quot;url&quot; &quot;data&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       ecosystem : </span>
<span class="token comment">#       type :</span>
<span class="token comment">#       previousid : </span>
<span class="token comment">#       category :</span>
<span class="token comment">#       subcategory :</span>
<span class="token comment">#       name : </span>
<span class="token comment">#       url : </span>
<span class="token comment">#       data :  </span>
$ omnicore-cli omni_sendrawtx
<span class="token comment"># omnicore-cli omni_sendrawtx &quot;fromaddress&quot; &quot;rawtransaction&quot; ( &quot;referenceaddress&quot; &quot;redeemaddress&quot; &quot;referenceamount&quot; )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       rawtransaction : </span>
<span class="token comment">#       referenceaddress : </span>
<span class="token comment">#       redeemaddress : </span>
<span class="token comment">#       referenceamount : </span>
$ omnicore-cli omni_sendrevoke
<span class="token comment"># omnicore-cli omni_sendrevoke &quot;fromaddress&quot; propertyid &quot;amount&quot; ( &quot;memo&quot; )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       propertyid : </span>
<span class="token comment">#       amount : </span>
<span class="token comment">#       memo : </span>
$ omnicore-cli omni_sendsto
<span class="token comment"># omnicore-cli omni_sendsto &quot;fromaddress&quot; propertyid &quot;amount&quot; ( &quot;redeemaddress&quot; distributionproperty )</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       propertyid : </span>
<span class="token comment">#       amount : </span>
<span class="token comment">#       redeemaddress : </span>
<span class="token comment">#       distributionproperty : </span>
$ omnicore-cli omni_sendtrade
<span class="token comment"># omnicore-cli omni_sendtrade &quot;fromaddress&quot; propertyidforsale &quot;amountforsale&quot; propertiddesired &quot;amountdesired&quot;</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       propertyidforsale : </span>
<span class="token comment">#       amountforsale : </span>
<span class="token comment">#       propertiddesired : </span>
<span class="token comment">#       amountdesired : </span>
$ omnicore-cli omni_sendunfreeze
<span class="token comment"># omnicore-cli omni_sendunfreeze &quot;fromaddress&quot; &quot;toaddress&quot; propertyid amount</span>
<span class="token comment">#   &gt; </span>
<span class="token comment">#       fromaddress : </span>
<span class="token comment">#       toaddress : </span>
<span class="token comment">#       propertyid : </span>
<span class="token comment">#       amount : </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function u(v,b){const e=i("ExternalLinkIcon");return o(),c("div",null,[d,n("ul",null,[n("li",null,[n("a",r,[t("Omni Core JSON-RPC API"),l(e)])])]),p])}const _=a(m,[["render",u],["__file","omnicore-cli.html.vue"]]);export{_ as default};
