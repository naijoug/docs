import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,f as a}from"./app-jEWmPslP.js";const c={},i=a(`<blockquote><p><code>cleos</code> : cli eos</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cleos [OPTIONS] SUBCOMMAND</span>
<span class="token comment">#       -h,--help : 打印帮助信息</span>
<span class="token comment">#       -u,--url : nodeos 服务 URL 地址</span>
<span class="token comment">#       --wallet-url : keosd 服务 URL 地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="version-版本" tabindex="-1"><a class="header-anchor" href="#version-版本" aria-hidden="true">#</a> version (版本)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos version client 
<span class="token comment">#   &gt; 显示当前 cleos 的版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-创建" tabindex="-1"><a class="header-anchor" href="#create-创建" aria-hidden="true">#</a> create (创建)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos create key  
<span class="token comment">#   &gt; 创建秘钥对</span>
$ cleos create account account1 account2 <span class="token punctuation">[</span>PUB_KEY<span class="token punctuation">]</span> <span class="token comment"># account1 创建 account2，ActiveKey 与 OwnerKey 相同</span>
<span class="token comment"># cleos create account [OPTIONS] creator name OwnerKey [ActiveKey]</span>
<span class="token comment">#   &gt; 创建账户</span>
<span class="token comment">#       creator : 创建者账户名 (只能包含&quot;.12345abcdefghijklmnopqrstuvwxyz&quot; &amp; 不超过 13 个字符)</span>
<span class="token comment">#       name : 创建的新用户名</span>
<span class="token comment">#       OwnerKey : Owner 公钥</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-查询" tabindex="-1"><a class="header-anchor" href="#get-查询" aria-hidden="true">#</a> get (查询)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos get info 
<span class="token comment">#   &gt; 查看当前最新区块链信息</span>
$ cleos get block <span class="token number">1</span> <span class="token comment"># 查询第一个区块(创世区块)信息</span>
<span class="token comment"># cleos get block [OPTIONS] block</span>
<span class="token comment">#   &gt; 查询区块信息</span>
<span class="token comment">#       block : 区块ID 或者 区块编号</span>
$ cleos get account eosio <span class="token comment"># 显示 eosio 账户信息</span>
<span class="token comment"># cleos get account [OPTIONS] name</span>
<span class="token comment">#   &gt; 查询账户信息</span>
<span class="token comment">#       -j,--json : 以 JSON 格式显示</span>
<span class="token comment">#       name : 账户名称</span>
$ cleos get code  
<span class="token comment"># cleos get code [OPTIONS] name</span>
<span class="token comment">#   &gt; 查询账户发布合约的代码信息</span>
<span class="token comment">#       -c,--code TEXT : 保存合约文件 .wast 的文件名</span>
<span class="token comment">#       -a,--abi TEXT : 保存合约文件 .abi 的文件名</span>
<span class="token comment">#       name : 发布合约的账户名</span>
$ cleos get abi eosio <span class="token comment"># 查询 eosio 发布合约的 abi 信息</span>
<span class="token comment"># cleos get abi [OPTIONS] name</span>
<span class="token comment">#   &gt; 查询账户发布的合约 abi 信息</span>
<span class="token comment">#       name : 发布合约的账户名</span>
$ cleos get table eosio.token eosio accounts <span class="token comment"># 查询 eosio 账户在 eosio.token 合约中 accounts 表的信息(账户余额)</span>
$ cleos get table eosio eosio userres <span class="token comment"># 查询 eosio 账户在 eosio 合约中 userres 表的信息(自己账户抵押(网络和 CPU)和购买(RAM)信息)</span>
$ cleos get table eosio eosio delband <span class="token comment"># 查询 eosio 账户在 eosio 合约中 delband 表的信息(所有抵押(包括给其它账户抵押)信息)</span>
<span class="token comment"># cleos get table [OPTIONS] contract scope table</span>
<span class="token comment">#   &gt; 查询合约的数据库表信息</span>
<span class="token comment">#       contract : 发布合约名称</span>
<span class="token comment">#       scope : 合约表中的查找范围(账户名)</span>
<span class="token comment">#       table : 表名</span>
$ cleos get currency balance eosio.token eosio <span class="token comment"># 查询 eosio 账户在 eosio.token 账户发行代币信息</span>
<span class="token comment"># cleos get currency balance contract account [symbol]</span>
<span class="token comment">#   &gt; 查询代币余额</span>
<span class="token comment">#       contract : 发行代币合约的账户</span>
<span class="token comment">#       account : 账户名称</span>
<span class="token comment">#       [symbol] : 代币名称(可空, 表示查询所有)</span>
$ cleos get currency stats eosio.token EOS <span class="token comment"># 查询 eosio.token 账户发行的 EOS 信息</span>
$ cleos get currency stats eosnowbanker EOSNOW <span class="token comment"># 查询 eosnowbanker 账户发行的 EOSNOW 代币信息</span>
<span class="token comment"># cleos get currency stats contract symbol</span>
<span class="token comment">#   &gt; 查询代币信息</span>
<span class="token comment">#       contract : 发行代币合约的账户</span>
<span class="token comment">#       symbol : 代币名称</span>
$ cleos get accounts <span class="token punctuation">[</span>PUB_KEY<span class="token punctuation">]</span> 
<span class="token comment"># cleos get accounts public_key</span>
<span class="token comment">#   &gt; 查询公钥创建的账户列表</span>
<span class="token comment">#       public_key : 查询账户的公钥</span>
$ cleos get servants eosio <span class="token comment"># 查询 eosio 账户控制的账户</span>
<span class="token comment"># cleos get servants account</span>
<span class="token comment"># &gt; 查询指定账户的控制账户</span>
<span class="token comment">#       account : 账户名称</span>
$ cleos get transaction 
<span class="token comment"># cleos get transaction id</span>
<span class="token comment"># &gt; 查询交易</span>
<span class="token comment">#       id : 交易 id</span>
$ cleos get actions
<span class="token comment"># cleos get actions [OPTIONS] account_name [pos] [offset]</span>
<span class="token comment"># &gt; 查询指定账户部署的的 action</span>
<span class="token comment">#       account_name : 账户名称</span>
$ cleos get schedule
<span class="token comment"># cleos get schedule [OPTIONS]</span>
<span class="token comment"># &gt; 查询超级节点清单</span>
<span class="token comment">#       j,--json : JSON 格式显示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-设置-部署" tabindex="-1"><a class="header-anchor" href="#set-设置-部署" aria-hidden="true">#</a> set (设置 &amp; 部署)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos <span class="token builtin class-name">set</span> code 
<span class="token comment"># cleos set code [OPTIONS] account code-file</span>
<span class="token comment">#   &gt; 部署代码</span>
<span class="token comment">#       account : 部署或更新 Code 的账户名称</span>
<span class="token comment">#       code-file : 包含 Code 文件(WAST 或者 WASM)的全路径</span>
$ cleos <span class="token builtin class-name">set</span> abi
<span class="token comment"># cleos set abi [OPTIONS] account abi-file</span>
<span class="token comment">#   &gt; 部署 abi</span>
<span class="token comment">#       acccount : 部署或更新 ABI 的账户名称</span>
<span class="token comment">#       abi-file : 包含 ABI 文件的全路径</span>
$ cleos <span class="token builtin class-name">set</span> contract account1 contracts/eosio.token <span class="token parameter variable">-p</span> account1 <span class="token comment"># account1 发布合约 eosio.token      </span>
<span class="token comment"># cleos set contract [OPTIONS] account contract-dir [wast-file] [abi-file]</span>
<span class="token comment">#   &gt; 部署合约</span>
<span class="token comment">#       account : 部署合约的账户名称</span>
<span class="token comment">#       contract-dir : 包含合约文件(.wast 和 .abi)的路径</span>
$ cleos <span class="token builtin class-name">set</span> account permission account1 active <span class="token string">&#39;{&quot;threshold&quot;:1,&quot;keys&quot;:[{&quot;key&quot;:&quot;EOS_PUB_KEY&quot;,&quot;weight&quot;:1}]}&#39;</span> owner <span class="token comment"># 更新 account1 账户 Active 权限为公钥 EOS_PUB_KEY</span>
<span class="token comment"># cleos set account permission [OPTIONS] account permission authority [parent]</span>
<span class="token comment">#   &gt; 设置或更新账户权限</span>
<span class="token comment">#       account : 更新或删除权限的账户名称</span>
<span class="token comment">#       permission : 权限名字(active | owner)</span>
<span class="token comment">#       authority : 授权 JSON 信息(delete : NULL)</span>
<span class="token comment">#       [parent] : 父级权限的名称(默认 : Active)</span>
$ cleos <span class="token builtin class-name">set</span> action permission
<span class="token comment"># cleos set action permission [OPTIONS] account code type requirement</span>
<span class="token comment">#   &gt; 设置或更新 Action 权限</span>
<span class="token comment">#       account : </span>
<span class="token comment">#       code : </span>
<span class="token comment">#       type : </span>
<span class="token comment">#       requirement : </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transfer-转账" tabindex="-1"><a class="header-anchor" href="#transfer-转账" aria-hidden="true">#</a> transfer (转账)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos transfer account1 account2 <span class="token string">&quot;0.1 EOS&quot;</span> <span class="token string">&quot;test&quot;</span> <span class="token comment"># account1 转给 account2 0.1 个 EOS</span>
<span class="token comment"># cleos transfer [OPTIONS] sender recipient amount [memo]</span>
<span class="token comment">#   &gt; EOS 账户间转账</span>
<span class="token comment">#       sender : 发送者账户名</span>
<span class="token comment">#       recipient : 接收者账户名</span>
<span class="token comment">#       amount : 数量</span>
<span class="token comment">#       [memo] : 备注信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="net-网络" tabindex="-1"><a class="header-anchor" href="#net-网络" aria-hidden="true">#</a> net (网络)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos net connect
<span class="token comment"># cleos net connect host</span>
<span class="token comment">#   &gt; 与 p2p 节点建立连接</span>
<span class="token comment">#       host : 节点的 hostname:port 信息</span>
$ cleos net disconnet
<span class="token comment"># cleos net disconnet host </span>
<span class="token comment">#   &gt; 与 p2p 节点断开连接</span>
<span class="token comment">#       host : 节点的 hostname:port 信息</span>
$ cleos net status
<span class="token comment"># cleos net status host</span>
<span class="token comment">#   &gt; 查询与指定 p2p 节点的连接信息</span>
<span class="token comment">#       host : 节点的 hostname:port 信息</span>
$ cleos net peers 
<span class="token comment">#   &gt; 获取当前连接 p2p 节点信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wallet-钱包" tabindex="-1"><a class="header-anchor" href="#wallet-钱包" aria-hidden="true">#</a> wallet (钱包)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos wallet create <span class="token comment"># 创建 default 钱包</span>
$ cleos wallet create <span class="token parameter variable">-n</span> <span class="token builtin class-name">test</span> <span class="token comment"># 创建名为 test 钱包</span>
<span class="token comment"># cleos wallet create [OPTIONS]</span>
<span class="token comment">#   &gt; 创建钱包</span>
<span class="token comment">#       -n,--name : 新建钱包的名称(默认钱包名称 : default)</span>
$ cleos wallet <span class="token function">open</span> <span class="token comment"># 打开 default 钱包</span>
<span class="token comment"># cleos wallet open [OPTIONS]</span>
<span class="token comment">#   &gt; 打开指定钱包</span>
<span class="token comment">#       -n,--name : 钱包的名称</span>
$ cleos wallet lock <span class="token comment"># 锁定 default 钱包</span>
<span class="token comment"># cleos wallet lock [OPTIONS]</span>
<span class="token comment">#   &gt; 锁定指定钱包</span>
<span class="token comment">#       -n,--name : 钱包的名称</span>
$ cleos wallet lock_all 
<span class="token comment"># &gt; 锁定所有钱包</span>
$ cleos wallet unlock <span class="token parameter variable">--password</span> XXXXXX <span class="token comment"># 解锁 default 钱包</span>
<span class="token comment"># cleos wallet lock [OPTIONS]</span>
<span class="token comment">#   &gt; 锁定指定钱包</span>
<span class="token comment">#       -n,--name : 钱包的名称</span>
<span class="token comment">#       --password : 钱包密码</span>
<span class="token comment">#       --unlock-timeout : 解锁超时时间</span>
$ cleos wallet <span class="token function">import</span> XXXXXX <span class="token comment"># 导入私钥到 default 钱包</span>
<span class="token comment"># cleos wallet import [OPTIONS] </span>
<span class="token comment">#   &gt; 导入私钥到钱包</span>
<span class="token comment">#       -n,--name : 钱包的名称</span>
<span class="token comment">#       --private-key : 私钥</span>
$ cleos wallet create_key <span class="token comment"># 创建秘钥对并添加到 default 钱包(需要提前解锁)</span>
<span class="token comment"># cleos wallet create_key [OPTIONS] [key_type]</span>
<span class="token comment">#   &gt; 创建秘钥对并添加到钱包</span>
<span class="token comment">#       -n,--name : 钱包的名称</span>
<span class="token comment">#       key_type : 密钥对类型(K1 或者 R1)</span>
$ cleos wallet keys 
<span class="token comment">#   &gt; 显示所有解锁的钱包的公钥</span>
$ cleos wallet private_keys <span class="token parameter variable">--password</span> XXXXXX <span class="token comment"># 显示 default 钱包的所有密钥对</span>
<span class="token comment"># cleos wallet private_keys [OPTIONS]</span>
<span class="token comment">#   &gt; 显示钱包中导入的所有密钥对</span>
<span class="token comment">#       -n,--name : 钱包的名称</span>
<span class="token comment">#       --password : 钱包密码      </span>
$ cleos wallet stop 
<span class="token comment">#   &gt; 关闭开启的 keosd 钱包服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sign-签名" tabindex="-1"><a class="header-anchor" href="#sign-签名" aria-hidden="true">#</a> sign (签名)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos sign
<span class="token comment"># cleos sign [OPTIONS] transaction</span>
<span class="token comment"># &gt; 签名一个交易</span>
<span class="token comment">#       -k,--private-key : 私钥</span>
<span class="token comment">#       -c,--chain-id : 当前区块 id</span>
<span class="token comment">#       -p,--push-transaction : 签名之后直接发布交易</span>
<span class="token comment">#       transaction : JSON 格式定义的交易文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="push-发布" tabindex="-1"><a class="header-anchor" href="#push-发布" aria-hidden="true">#</a> push (发布)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos push action eosio updateauth <span class="token string">&#39;{&quot;permission&quot;:&quot;active&quot;,&quot;parent&quot;:&quot;owner&quot;,&quot;account&quot;:&quot;account1&quot;,&quot;auth&quot;: {&quot;accounts&quot;: [], &quot;waits&quot;: [], &quot;keys&quot;: [{&quot;key&quot;: &quot;EOS_PUB_KEY&quot;, &quot;weight&quot;: 1}], &quot;threshold&quot;: 1}}&#39;</span> <span class="token comment"># 将 account1 的 Active 权限转移给公钥 EOS_PUB_KEY</span>
$ cleos push action eosio updateauth <span class="token string">&#39;{&quot;permission&quot;:&quot;owner&quot;,&quot;parent&quot;:&quot;&quot;,&quot;account&quot;:&quot;account1&quot;,&quot;auth&quot;: {&quot;accounts&quot;: [], &quot;waits&quot;: [], &quot;keys&quot;: [{&quot;key&quot;: &quot;EOS_PUB_KEY&quot;, &quot;weight&quot;: 1}], &quot;threshold&quot;: 1}}&#39;</span> <span class="token comment"># 将 account1 的 Owner 权限转移给公钥 EOS_PUB_KEY</span>
$ cleos push action eosio refund <span class="token string">&#39;[&quot;account1&quot;]&#39;</span> <span class="token comment"># 领取赎回的 EOS 到 account1 账户</span>
$ cleos push action eosio.token transfer <span class="token string">&#39;[&quot;account1&quot;, &quot;account2&quot;, &quot;1 EOS&quot;, &quot;memo&quot;]&#39;</span> <span class="token parameter variable">-p</span> account1 <span class="token comment"># account1 给 account2 转账 1 个 EOS</span>
<span class="token comment"># cleos push action [OPTIONS] account action data</span>
<span class="token comment">#   &gt; 发布仅含单一 action 的交易</span>
<span class="token comment">#       account : 发布 action 的账户名</span>
<span class="token comment">#       action : JSON 格式定义的 action</span>
<span class="token comment">#       data : 合约参数</span>
$ cleos push transaction
<span class="token comment"># cleos push transaction [OPTIONS] transaction</span>
<span class="token comment">#   &gt; 发布一个 JSON 格式的交易</span>
<span class="token comment">#       transaction : JSON 格式的交易</span>
$ cleos push transactions
<span class="token comment"># cleos push transactions [OPTIONS] transactions</span>
<span class="token comment">#   &gt; 发布一个 JSON 数组格式的多笔交易</span>
<span class="token comment">#       transactions : JSON 数组格式的多笔交易</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multisig-多签" tabindex="-1"><a class="header-anchor" href="#multisig-多签" aria-hidden="true">#</a> multisig (多签)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos multisig propose
<span class="token comment"># cleos multisig propose [OPTIONS] proposal_name requested_permissions trx_permissions contract action data [proposer] [proposal_expiration]</span>
<span class="token comment">#   &gt; 发起多重签名</span>
<span class="token comment">#       proposal_name : 提议者名字</span>
<span class="token comment">#       requested_permissions : 权限</span>
<span class="token comment">#       trx_permissions : 交易权限</span>
<span class="token comment">#       contract : 合约</span>
<span class="token comment">#       action : 合约中的 Action</span>
<span class="token comment">#       data : 合约参数</span>
<span class="token comment">#       [proposer] : 正在提议者的账户</span>
<span class="token comment">#       [proposal_expiration] : 提议过期时间</span>
$ cleos multisig review
<span class="token comment"># cleos multisig review [OPTIONS] proposer proposal_name</span>
<span class="token comment">#   &gt; 检查签名</span>
<span class="token comment">#       proposer : </span>
<span class="token comment">#       proposal_name : </span>
$ cleos multisig approve
<span class="token comment"># cleos multisig approve [OPTIONS] proposer proposal_name permissions</span>
<span class="token comment">#   &gt; 批准签名</span>
<span class="token comment">#       proposer : </span>
<span class="token comment">#       proposal_name : </span>
<span class="token comment">#       permissions : </span>
$ cleos multisig unapprove
<span class="token comment"># cleos multisig unapprove [OPTIONS] proposer proposal_name permissions</span>
<span class="token comment">#   &gt; 拒绝签名</span>
<span class="token comment">#       proposer : </span>
<span class="token comment">#       proposal_name : </span>
<span class="token comment">#       permissions :  </span>
$ cleos multisig cancel
<span class="token comment"># cleos multisig cancel [OPTIONS] proposer proposal_name [canceler]</span>
<span class="token comment">#   &gt; 取消多重签名</span>
<span class="token comment">#       proposer : </span>
<span class="token comment">#       proposal_name : </span>
<span class="token comment">#       [canceler] :  </span>
$ cleos multisig <span class="token builtin class-name">exec</span>
<span class="token comment"># cleos multisig exec [OPTIONS] proposer proposal_name [executer]</span>
<span class="token comment">#   &gt; 执行多重签名</span>
<span class="token comment">#       proposer : </span>
<span class="token comment">#       proposal_name : </span>
<span class="token comment">#       [executer] :   </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="system-系统" tabindex="-1"><a class="header-anchor" href="#system-系统" aria-hidden="true">#</a> system (系统)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cleos system newaccount --stake-net <span class="token string">&#39;0.01 EOS&#39;</span> --stake-cpu <span class="token string">&#39;0.02 EOS&#39;</span> --buy-ram-kbytes <span class="token number">4</span> account1 account2 <span class="token punctuation">[</span>PUB_KEY<span class="token punctuation">]</span> <span class="token comment"># account1 创建 account2 并帮其抵押 0.01 个 EOS 获得网络资源，抵押 0.02 个 EOS 获得 CPU 资源，购买 4K 的 RAM 资源</span>
<span class="token comment"># cleos system newaccount [OPTIONS] creator name OwnerKey [ActiveKey]</span>
<span class="token comment">#   &gt; 创建一个账户，并为其购买 RAM 和抵押 EOS 获得网络和 CPU 资源</span>
<span class="token comment">#       --stake-net : 抵押获取网络资源的 EOS 数量</span>
<span class="token comment">#       --stake-cpu : 抵押获取 CPU 资源的 EOS 数量</span>
<span class="token comment">#       --buy-ram-kbytes : 购买 RAM 数量(KiB)</span>
<span class="token comment">#       creator : 创建者的账户名</span>
<span class="token comment">#       name : 新创建的账户名</span>
<span class="token comment">#       OwnerKey : Owner 权限的公钥</span>
<span class="token comment">#       [ActiveKey] : Active 权限的公钥(可以与 OwnerKey 相同)</span>
$ cleos system regproducer
<span class="token comment"># cleos system regproducer [OPTIONS] account producer_key [url] [location]</span>
<span class="token comment">#   &gt; 注册一个新的区块生成者(BP)</span>
<span class="token comment">#       account : 注册 BP 的账户</span>
<span class="token comment">#       producer_key : BP 的公钥</span>
<span class="token comment">#       [url] : BP 的节点 url 信息</span>
<span class="token comment">#       [location] : 最邻近目标的相对位置</span>
$ cleos system unregprod
<span class="token comment"># cleos system unregprod [OPTIONS] account</span>
<span class="token comment">#   &gt; 注销已存在的的区块生成者(BP)</span>
<span class="token comment">#       account : </span>
$ cleos system voteproducer proxy
<span class="token comment"># cleos system voteproducer proxy [OPTIONS] voter proxy</span>
<span class="token comment">#   &gt; 设置投票代理</span>
<span class="token comment">#       voter : </span>
<span class="token comment">#       proxy : </span>
$ cleos system voteproducer prods account1 eoshuobipool eoscannonchn <span class="token comment"># account1 投票给火币和佳能节点</span>
<span class="token comment"># cleos system voteproducer prods [OPTIONS] voter producers...</span>
<span class="token comment">#   &gt; 投票给一个或多个 BP</span>
<span class="token comment">#       voter : 投票账户</span>
<span class="token comment">#       producers... : BP 账户</span>
$ cleos system voteproducer approve account1 oraclegogogo <span class="token comment"># account1 给 oraclegogogo 节点投票</span>
<span class="token comment"># cleos system voteproducer approve [OPTIONS] voter producer</span>
<span class="token comment">#   &gt; 添加一个 BP 到投票列表</span>
<span class="token comment">#       voter : 投票账户</span>
<span class="token comment">#       producer : BP 账户</span>
$ cleos system voteproducer unapprove account1 eosauthority <span class="token comment"># account1 取消给 eosauthority 节点投票</span>
<span class="token comment"># cleos system voteproducer unapprove [OPTIONS] voter producer</span>
<span class="token comment">#   &gt; 从投票列表中移除一个 BP</span>
<span class="token comment">#       voter : 投票账户</span>
<span class="token comment">#       producer : BP 账户</span>
$ cleos system listproducers
<span class="token comment"># cleos system listproducers [OPTIONS]</span>
<span class="token comment">#   &gt; 显示区块生产者(BP)列表</span>
<span class="token comment">#       -j,--json : 以 JSON 格式显示</span>
$ cleos system delegatebw account1 account2 <span class="token string">&#39;1 EOS&#39;</span> <span class="token string">&#39;2 EOS&#39;</span> <span class="token comment"># account1 为 account2 抵押 1 个 EOS 换取网络资源，抵押 2 个 EOS 换取 CPU 资源</span>
<span class="token comment"># cleos system delegatebw [OPTIONS] from receiver stake_net_quantity stake_cpu_quantity</span>
<span class="token comment">#   &gt; 抵押 EOS 换取带宽资源(网络和 CPU)</span>
<span class="token comment">#       from : 抵押 EOS 的账户</span>
<span class="token comment">#       receiver : 接收资源的账户</span>
<span class="token comment">#       stake_net_quantity : 抵押的网络资源 EOS 数量</span>
<span class="token comment">#       stake_cpu_quantity : 抵押的 CPU 资源 EOS 数量</span>
$ cleos system undelegatebw account2 account1 <span class="token string">&#39;1 EOS&#39;</span> <span class="token string">&#39;2 EOS&#39;</span> <span class="token comment"># account2 赎回 account1 为其抵押的 EOS</span>
<span class="token comment"># cleos system undelegatebw [OPTIONS] from receiver unstake_net_quantity unstake_cpu_quantity</span>
<span class="token comment">#   &gt; 赎回抵押的 EOS，释放带宽资源(网络和 CPU)</span>
<span class="token comment">#       from : 赎回带宽资源的账户</span>
<span class="token comment">#       receiver : 原抵押 EOS 的账户</span>
<span class="token comment">#       unstake_net_quantity : 赎回的网络资源 EOS 数量</span>
<span class="token comment">#       unstake_cpu_quanity : 赎回的 CPU 资源 EOS 数量</span>
$ cleos system listbw account1 <span class="token comment"># 显示 account1 账户的抵押列表</span>
<span class="token comment"># cleos system listbw [OPTIONS] account</span>
<span class="token comment">#   &gt; 获取账户抵押列表</span>
<span class="token comment">#       -j,--json : 以 JSON 格式显示</span>
<span class="token comment">#       account : 抵押资源的账户</span>
$ cleos system bidname account1 eos <span class="token string">&#39;1 EOS&#39;</span> <span class="token comment"># account1 以 1 个 EOS 竞拍 eos 账户名</span>
<span class="token comment"># cleos system bidname [OPTIONS] bidder newname bid</span>
<span class="token comment">#   &gt; 账户名竞拍</span>
<span class="token comment">#       bidder : 竞拍者账户</span>
<span class="token comment">#       newname : 竞拍的账户名</span>
<span class="token comment">#       bid : 竞拍的 EOS 数量</span>
$ cleos system bidnameinfo eos <span class="token comment"># 查看 eos 账户名的竞拍信息</span>
<span class="token comment"># cleos system bidnameinfo [OPTIONS] newname</span>
<span class="token comment">#   &gt; 获取某个账户名(小于12个字符)的竞拍信息(目前最高的竞价者)</span>
<span class="token comment">#       newname : 正在竞拍的账户名</span>
$ cleos system buyram account1 account2 <span class="token string">&#39;0.5 EOS&#39;</span> <span class="token comment"># account1 为 account2 购买 0.5 个 EOS 的 RAM</span>
<span class="token comment"># cleos system buyram [OPTIONS] payer receiver tokens</span>
<span class="token comment">#   &gt; 购买内存(RAM)</span>
<span class="token comment">#       payer : 支付 EOS 的账户</span>
<span class="token comment">#       receiver : 接收 RAM 的账户</span>
<span class="token comment">#       tokens : 花费 EOS 的数量</span>
$ cleos system sellram
<span class="token comment"># cleos system sellram [OPTIONS] account bytes</span>
<span class="token comment">#   &gt; 出售内存(RAM)</span>
<span class="token comment">#       account : 出售 RAM 的账户</span>
<span class="token comment">#       bytes : 出售 RAM 的数量(byte)</span>
$ cleos system claimrewards
<span class="token comment"># cleos system claimrewards [OPTIONS] owner</span>
<span class="token comment">#   &gt; 区块生产者(BP)认领收益</span>
<span class="token comment">#       owner : 认领收益的区块生产者账户</span>
$ cleos system regproxy
<span class="token comment"># cleos system regproxy [OPTIONS] proxy</span>
<span class="token comment">#   &gt; 注册成为投票代理</span>
<span class="token comment">#       proxy : 注册代理的账户</span>
$ cleos system unregproxy
<span class="token comment"># cleos system unregproxy [OPTIONS] proxy</span>
<span class="token comment">#   &gt; 注销投票代理</span>
<span class="token comment">#       proxy : 注销的代理账户</span>
$ cleos system canceldelay
<span class="token comment"># cleos system canceldelay [OPTIONS] canceling_account canceling_permission trx_id</span>
<span class="token comment">#   &gt; 取消一个延迟的交易 </span>
<span class="token comment">#       canceling_account : 取消交易的授权账户  </span>
<span class="token comment">#       canceling_permission : 取消交易的授权     </span>
<span class="token comment">#       trx_id : 交易 ID  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contract" tabindex="-1"><a class="header-anchor" href="#contract" aria-hidden="true">#</a> Contract</h2><ul><li>eosio.bios</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># eosio 账户发布 eosio.bios 智能合约</span>
$ cleos <span class="token builtin class-name">set</span> contract eosio build/contracts/eosio.bios <span class="token parameter variable">-p</span> eosio  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>eosio.token</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># eosio.token 账户发布 eosio.token 智能合约</span>
$ cleos <span class="token builtin class-name">set</span> contract eosio.token build/contracts/eosio.token <span class="token parameter variable">-p</span> eosio.token   
<span class="token comment"># 1&gt; create : 创建代币</span>
<span class="token comment">#       issuer : 发行人</span>
<span class="token comment">#       maximum_supply : 最大供应量</span>
<span class="token comment">#       can_freeze : 冻结</span>
<span class="token comment">#       can_recall : 召回</span>
<span class="token comment">#       can_whitelist : 白名单</span>
<span class="token comment"># =&gt; 发行人 eosio 发行名为 SYS 的代币， 最大数量为 1000000000.0000 (精度小数点后 4 位)</span>
$ cleos push action eosio.token create <span class="token string">&#39;[ &quot;eosio&quot;, &quot;1000000000.0000 SYS&quot;, 0, 0, 0]&#39;</span> <span class="token parameter variable">-p</span> eosio.token
$ cleos push action eosio.token create <span class="token string">&#39;{&quot;issuer&quot;:&quot;eosio&quot;, &quot;maximum_supply&quot;:&quot;1000000000.0000 SYS&quot;, &quot;can_freeze&quot;:0, &quot;can_recall&quot;:0, &quot;can_whitelist&quot;:0}&#39;</span> <span class="token parameter variable">-p</span> eosio.token
<span class="token comment"># 2&gt; issue : 发行</span>
<span class="token comment">#       to : 接收发行 token 的用户</span>
<span class="token comment">#       quantity : 数量</span>
<span class="token comment">#       memo : 备忘</span>
<span class="token comment"># =&gt; 发行人发行 100.0000 个 SYS 给用户 user </span>
<span class="token comment">#   包含一次发行 (issue) &amp; 三次转账 (transfer) </span>
$ cleos push action eosio.token issue <span class="token string">&#39;[ &quot;user&quot;, &quot;100.0000 SYS&quot;, &quot;memo&quot; ]&#39;</span> <span class="token parameter variable">-p</span> eosio
<span class="token comment"># 测试发行，查看执行结果 </span>
<span class="token comment">#       -d : 不要广播 </span>
<span class="token comment">#       -j : json 格式显示执行结果</span>
$ cleos push action eosio.token issue <span class="token string">&#39;[&quot;user&quot;, &quot;100.0000 SYS&quot;, &quot;memo&quot;]&#39;</span> <span class="token parameter variable">-p</span> eosio <span class="token parameter variable">-d</span> <span class="token parameter variable">-j</span>
<span class="token comment"># 3&gt; transfer : 转账</span>
<span class="token comment">#       from : 发送方 </span>
<span class="token comment">#       to : 接收方</span>
<span class="token comment">#       quantity : 数量 </span>
<span class="token comment">#       memo : 备忘</span>
<span class="token comment"># =&gt; user 给 tester 转账 25.0000 个 SYS</span>
$ cleos push action eosio.token transfer <span class="token string">&#39;[ &quot;user&quot;, &quot;tester&quot;, &quot;25.0000 SYS&quot;, &quot;m&quot; ]&#39;</span> <span class="token parameter variable">-p</span> user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>exchange</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># exchange 账户发布 exchange 智能合约</span>
$ cleos <span class="token builtin class-name">set</span> contract exchange build/contracts/exchange <span class="token parameter variable">-p</span> exchange  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>eosio.msig</li></ul><blockquote><p>(multi-signature) 多重签名</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># eosio.msig 账户发布 eosio.misg 智能合约</span>
$ cleos <span class="token builtin class-name">set</span> contract eosio.misg build/contracts/eosio.misg <span class="token parameter variable">-p</span> eosio.misg 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,34),t=[i];function o(l,m){return s(),e("div",null,t)}const r=n(c,[["render",o],["__file","cleos.html.vue"]]);export{r as default};
