import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-uNK90VvC.js";const t={},o=e(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ brew tap ethereum/ethereum
$ brew <span class="token function">install</span> ethereum      <span class="token comment"># 安装 go-ethereum</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># geth [options] command [command options] [arguments...]</span>
<span class="token comment">#   &gt; [options] 选项参数</span>
<span class="token comment">#       --datadir : 指定数据目录</span>
<span class="token comment">#       --networkid : 网络唯一 ID</span>
<span class="token comment">#       --testnet : Ropsten 测试网络</span>
<span class="token comment">#       --rinkeby : Rinkeby 测试网络</span>
<span class="token comment">#   &gt; command   命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ geth <span class="token builtin class-name">help</span>
<span class="token comment"># geth init 初始化区块链</span>
<span class="token comment">#   --datadir   指定数据目录  </span>
$ geth init genesis.json <span class="token parameter variable">--datadir</span> data
<span class="token comment"># geth console  </span>
$ geth console <span class="token parameter variable">--datadir</span> data <span class="token parameter variable">--networkid</span> <span class="token number">110</span>
<span class="token comment"># geth 启动以太坊主网 (Mainnet)</span>
$ geth <span class="token parameter variable">--rpc</span> <span class="token parameter variable">--rpcapi</span> web3,eth,net,db,personal <span class="token parameter variable">--rpcaddr</span> <span class="token number">0.0</span>.0.0 <span class="token parameter variable">--rpcport</span> <span class="token number">8545</span>
$ geth attach rpc:http://localhost:8545
$ geth account new  <span class="token comment"># 创建新账户</span>
$ geth <span class="token parameter variable">--testnet</span> account <span class="token function">import</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token builtin class-name">echo</span> C9B7B0F06D5D23722C0057E109D83BA5137ABB867A8F26B0BE9996392AFAE394<span class="token punctuation">)</span>
<span class="token comment"># geth --dev 启动本地测试链</span>
$ geth <span class="token parameter variable">--dev</span> <span class="token parameter variable">--datadir</span> localnet console <span class="token operator"><span class="token file-descriptor important">2</span>&gt;&gt;</span> localnet/localnet.log
<span class="token comment">#   &gt; 在当前 localnet 目录启动本地测试链，开启 cosole 模式，并输出日志到 localnet.log 文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-genesis.json line-numbers-mode" data-ext="genesis.json"><pre class="language-genesis.json"><code>{
  &quot;config&quot;: {
        &quot;chainId&quot;: 10, 
        &quot;homesteadBlock&quot;: 0,
        &quot;eip155Block&quot;: 0,
        &quot;eip158Block&quot;: 0
    },
  &quot;alloc&quot;      : {},
  &quot;coinbase&quot;   : &quot;0x0000000000000000000000000000000000000000&quot;,
  &quot;difficulty&quot; : &quot;0x20000&quot;,
  &quot;extraData&quot;  : &quot;&quot;,
  &quot;gasLimit&quot;   : &quot;0x2fefd8&quot;,
  &quot;nonce&quot;      : &quot;0x0000000000000042&quot;,
  &quot;mixhash&quot;    : &quot;0x0000000000000000000000000000000000000000000000000000000000000000&quot;,
  &quot;parentHash&quot; : &quot;0x0000000000000000000000000000000000000000000000000000000000000000&quot;,
  &quot;timestamp&quot;  : &quot;0x00&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-console" tabindex="-1"><a class="header-anchor" href="#javascript-console" aria-hidden="true">#</a> JavaScript Console</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># eth   区块链操作</span>
<span class="token operator">&gt;</span> eth   <span class="token comment"># eth 查看状态</span>
<span class="token operator">&gt;</span> eth.syncing       <span class="token comment"># 查看同步状态</span>
<span class="token operator">&gt;</span> eth.blockNumber   <span class="token comment"># 查看最新区块高度</span>
<span class="token operator">&gt;</span> eth.getBlock<span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">)</span>  <span class="token comment"># 查询区块</span>
<span class="token operator">&gt;</span> eth.getTransaction<span class="token punctuation">(</span><span class="token string">&#39;0xeb1d491ea5f846e558bd45ddc8b9b91cfe05ad0661bd7e8b5172954b44ffe01d&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 查询交易</span>
<span class="token operator">&gt;</span> eth.getBalance<span class="token punctuation">(</span>eth.accounts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token comment"># 查询第一个用户余额 (单位: wei)</span>
<span class="token operator">&gt;</span> eth.accounts      <span class="token comment"># 查看 keystore 中用户</span>
<span class="token operator">&gt;</span> eth.coinbase      <span class="token comment"># coinbase 账户 (默认第一个)</span>
<span class="token operator">&gt;</span> eth.setEtherbase<span class="token punctuation">(</span>eth.account<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 设置 coinbase 账户为其它账户</span>
<span class="token operator">&gt;</span> eth.sendTransaction<span class="token punctuation">(</span><span class="token punctuation">{</span>from: eth.accounts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>, to: eth.accounts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>, value: web3.toWei<span class="token punctuation">(</span><span class="token number">10</span>, <span class="token string">&#39;ether&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment"># 转账</span>

<span class="token comment"># net   p2p 网络状态</span>

<span class="token comment"># admin 管理节点</span>

<span class="token comment"># personal  账户管理</span>
<span class="token operator">&gt;</span> personal.newAccount<span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># 新建密码为 test 的账户</span>
<span class="token operator">&gt;</span> personal.unlockAccount<span class="token punctuation">(</span><span class="token string">&#39;acount_xxx&#39;</span>, <span class="token string">&#39;password_xxx&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 解锁账户</span>

<span class="token operator">&gt;</span> txpool 交易缓存池
<span class="token operator">&gt;</span> txpool.status <span class="token comment"># 查看交易缓存池状态</span>

<span class="token comment"># miner 挖矿管理</span>
<span class="token operator">&gt;</span> miner.start<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>   <span class="token comment"># 开始挖矿</span>
<span class="token operator">&gt;</span> miner.stop<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 停止挖矿</span>
<span class="token operator">&gt;</span> miner.start<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> admin.sleepBlocks<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> miner.stop<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># 挖到一个区块停止挖矿</span>

<span class="token comment"># web3 </span>
<span class="token operator">&gt;</span> web3.fromWei<span class="token punctuation">(</span>eth.getBalance<span class="token punctuation">(</span>eth.accounts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>, <span class="token string">&#39;ether&#39;</span><span class="token punctuation">)</span> <span class="token comment"># wei 转化为 ether (以太币)</span>
<span class="token operator">&gt;</span> web3.toWei<span class="token punctuation">(</span><span class="token number">10</span>, <span class="token string">&#39;ether&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># ether -&gt; wei</span>

<span class="token comment"># 部署合约</span>
<span class="token comment"># 拷贝 Remix 中的 WEB3DEPLOY 编译后的合约代码进行部署</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[o];function p(i,l){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","geth.html.vue"]]);export{d as default};
