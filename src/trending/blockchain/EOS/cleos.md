
# cleos 
> cli eos

``` shell
# cleos [OPTIONS] SUBCOMMAND
#       -h,--help : 打印帮助信息
#       -u,--url : nodeos 服务 URL 地址
#       --wallet-url : keosd 服务 URL 地址
```

## version (版本)

``` shell
$ cleos version client 
#   > 显示当前 cleos 的版本
```

## create (创建)

``` shell
$ cleos create key  
#   > 创建秘钥对
$ cleos create account account1 account2 [PUB_KEY] # account1 创建 account2，ActiveKey 与 OwnerKey 相同
# cleos create account [OPTIONS] creator name OwnerKey [ActiveKey]
#   > 创建账户
#       creator : 创建者账户名 (只能包含".12345abcdefghijklmnopqrstuvwxyz" & 不超过 13 个字符)
#       name : 创建的新用户名
#       OwnerKey : Owner 公钥
```

## get (查询)

``` shell
$ cleos get info 
#   > 查看当前最新区块链信息
$ cleos get block 1 # 查询第一个区块(创世区块)信息
# cleos get block [OPTIONS] block
#   > 查询区块信息
#       block : 区块ID 或者 区块编号
$ cleos get account eosio # 显示 eosio 账户信息
# cleos get account [OPTIONS] name
#   > 查询账户信息
#       -j,--json : 以 JSON 格式显示
#       name : 账户名称
$ cleos get code  
# cleos get code [OPTIONS] name
#   > 查询账户发布合约的代码信息
#       -c,--code TEXT : 保存合约文件 .wast 的文件名
#       -a,--abi TEXT : 保存合约文件 .abi 的文件名
#       name : 发布合约的账户名
$ cleos get abi eosio # 查询 eosio 发布合约的 abi 信息
# cleos get abi [OPTIONS] name
#   > 查询账户发布的合约 abi 信息
#       name : 发布合约的账户名
$ cleos get table eosio.token eosio accounts # 查询 eosio 账户在 eosio.token 合约中 accounts 表的信息(账户余额)
$ cleos get table eosio eosio userres # 查询 eosio 账户在 eosio 合约中 userres 表的信息(自己账户抵押(网络和 CPU)和购买(RAM)信息)
$ cleos get table eosio eosio delband # 查询 eosio 账户在 eosio 合约中 delband 表的信息(所有抵押(包括给其它账户抵押)信息)
# cleos get table [OPTIONS] contract scope table
#   > 查询合约的数据库表信息
#       contract : 发布合约名称
#       scope : 合约表中的查找范围(账户名)
#       table : 表名
$ cleos get currency balance eosio.token eosio # 查询 eosio 账户在 eosio.token 账户发行代币信息
# cleos get currency balance contract account [symbol]
#   > 查询代币余额
#       contract : 发行代币合约的账户
#       account : 账户名称
#       [symbol] : 代币名称(可空, 表示查询所有)
$ cleos get currency stats eosio.token EOS # 查询 eosio.token 账户发行的 EOS 信息
$ cleos get currency stats eosnowbanker EOSNOW # 查询 eosnowbanker 账户发行的 EOSNOW 代币信息
# cleos get currency stats contract symbol
#   > 查询代币信息
#       contract : 发行代币合约的账户
#       symbol : 代币名称
$ cleos get accounts [PUB_KEY] 
# cleos get accounts public_key
#   > 查询公钥创建的账户列表
#       public_key : 查询账户的公钥
$ cleos get servants eosio # 查询 eosio 账户控制的账户
# cleos get servants account
# > 查询指定账户的控制账户
#       account : 账户名称
$ cleos get transaction 
# cleos get transaction id
# > 查询交易
#       id : 交易 id
$ cleos get actions
# cleos get actions [OPTIONS] account_name [pos] [offset]
# > 查询指定账户部署的的 action
#       account_name : 账户名称
$ cleos get schedule
# cleos get schedule [OPTIONS]
# > 查询超级节点清单
#       j,--json : JSON 格式显示
```

## set (设置 & 部署)

``` shell
$ cleos set code 
# cleos set code [OPTIONS] account code-file
#   > 部署代码
#       account : 部署或更新 Code 的账户名称
#       code-file : 包含 Code 文件(WAST 或者 WASM)的全路径
$ cleos set abi
# cleos set abi [OPTIONS] account abi-file
#   > 部署 abi
#       acccount : 部署或更新 ABI 的账户名称
#       abi-file : 包含 ABI 文件的全路径
$ cleos set contract account1 contracts/eosio.token -p account1 # account1 发布合约 eosio.token      
# cleos set contract [OPTIONS] account contract-dir [wast-file] [abi-file]
#   > 部署合约
#       account : 部署合约的账户名称
#       contract-dir : 包含合约文件(.wast 和 .abi)的路径
$ cleos set account permission account1 active '{"threshold":1,"keys":[{"key":"EOS_PUB_KEY","weight":1}]}' owner # 更新 account1 账户 Active 权限为公钥 EOS_PUB_KEY
# cleos set account permission [OPTIONS] account permission authority [parent]
#   > 设置或更新账户权限
#       account : 更新或删除权限的账户名称
#       permission : 权限名字(active | owner)
#       authority : 授权 JSON 信息(delete : NULL)
#       [parent] : 父级权限的名称(默认 : Active)
$ cleos set action permission
# cleos set action permission [OPTIONS] account code type requirement
#   > 设置或更新 Action 权限
#       account : 
#       code : 
#       type : 
#       requirement : 
```

## transfer (转账)

``` shell
$ cleos transfer account1 account2 "0.1 EOS" "test" # account1 转给 account2 0.1 个 EOS
# cleos transfer [OPTIONS] sender recipient amount [memo]
#   > EOS 账户间转账
#       sender : 发送者账户名
#       recipient : 接收者账户名
#       amount : 数量
#       [memo] : 备注信息
```

## net (网络)

``` shell
$ cleos net connect
# cleos net connect host
#   > 与 p2p 节点建立连接
#       host : 节点的 hostname:port 信息
$ cleos net disconnet
# cleos net disconnet host 
#   > 与 p2p 节点断开连接
#       host : 节点的 hostname:port 信息
$ cleos net status
# cleos net status host
#   > 查询与指定 p2p 节点的连接信息
#       host : 节点的 hostname:port 信息
$ cleos net peers 
#   > 获取当前连接 p2p 节点信息
```

## wallet (钱包)

``` shell
$ cleos wallet create # 创建 default 钱包
$ cleos wallet create -n test # 创建名为 test 钱包
# cleos wallet create [OPTIONS]
#   > 创建钱包
#       -n,--name : 新建钱包的名称(默认钱包名称 : default)
$ cleos wallet open # 打开 default 钱包
# cleos wallet open [OPTIONS]
#   > 打开指定钱包
#       -n,--name : 钱包的名称
$ cleos wallet lock # 锁定 default 钱包
# cleos wallet lock [OPTIONS]
#   > 锁定指定钱包
#       -n,--name : 钱包的名称
$ cleos wallet lock_all 
# > 锁定所有钱包
$ cleos wallet unlock --password XXXXXX # 解锁 default 钱包
# cleos wallet lock [OPTIONS]
#   > 锁定指定钱包
#       -n,--name : 钱包的名称
#       --password : 钱包密码
#       --unlock-timeout : 解锁超时时间
$ cleos wallet import XXXXXX # 导入私钥到 default 钱包
# cleos wallet import [OPTIONS] 
#   > 导入私钥到钱包
#       -n,--name : 钱包的名称
#       --private-key : 私钥
$ cleos wallet create_key # 创建秘钥对并添加到 default 钱包(需要提前解锁)
# cleos wallet create_key [OPTIONS] [key_type]
#   > 创建秘钥对并添加到钱包
#       -n,--name : 钱包的名称
#       key_type : 密钥对类型(K1 或者 R1)
$ cleos wallet keys 
#   > 显示所有解锁的钱包的公钥
$ cleos wallet private_keys --password XXXXXX # 显示 default 钱包的所有密钥对
# cleos wallet private_keys [OPTIONS]
#   > 显示钱包中导入的所有密钥对
#       -n,--name : 钱包的名称
#       --password : 钱包密码      
$ cleos wallet stop 
#   > 关闭开启的 keosd 钱包服务
```

## sign (签名)

``` shell
$ cleos sign
# cleos sign [OPTIONS] transaction
# > 签名一个交易
#       -k,--private-key : 私钥
#       -c,--chain-id : 当前区块 id
#       -p,--push-transaction : 签名之后直接发布交易
#       transaction : JSON 格式定义的交易文件
```

## push (发布)

``` shell
$ cleos push action eosio updateauth '{"permission":"active","parent":"owner","account":"account1","auth": {"accounts": [], "waits": [], "keys": [{"key": "EOS_PUB_KEY", "weight": 1}], "threshold": 1}}' # 将 account1 的 Active 权限转移给公钥 EOS_PUB_KEY
$ cleos push action eosio updateauth '{"permission":"owner","parent":"","account":"account1","auth": {"accounts": [], "waits": [], "keys": [{"key": "EOS_PUB_KEY", "weight": 1}], "threshold": 1}}' # 将 account1 的 Owner 权限转移给公钥 EOS_PUB_KEY
$ cleos push action eosio refund '["account1"]' # 领取赎回的 EOS 到 account1 账户
$ cleos push action eosio.token transfer '["account1", "account2", "1 EOS", "memo"]' -p account1 # account1 给 account2 转账 1 个 EOS
# cleos push action [OPTIONS] account action data
#   > 发布仅含单一 action 的交易
#       account : 发布 action 的账户名
#       action : JSON 格式定义的 action
#       data : 合约参数
$ cleos push transaction
# cleos push transaction [OPTIONS] transaction
#   > 发布一个 JSON 格式的交易
#       transaction : JSON 格式的交易
$ cleos push transactions
# cleos push transactions [OPTIONS] transactions
#   > 发布一个 JSON 数组格式的多笔交易
#       transactions : JSON 数组格式的多笔交易
```

## multisig (多签)

``` shell
$ cleos multisig propose
# cleos multisig propose [OPTIONS] proposal_name requested_permissions trx_permissions contract action data [proposer] [proposal_expiration]
#   > 发起多重签名
#       proposal_name : 提议者名字
#       requested_permissions : 权限
#       trx_permissions : 交易权限
#       contract : 合约
#       action : 合约中的 Action
#       data : 合约参数
#       [proposer] : 正在提议者的账户
#       [proposal_expiration] : 提议过期时间
$ cleos multisig review
# cleos multisig review [OPTIONS] proposer proposal_name
#   > 检查签名
#       proposer : 
#       proposal_name : 
$ cleos multisig approve
# cleos multisig approve [OPTIONS] proposer proposal_name permissions
#   > 批准签名
#       proposer : 
#       proposal_name : 
#       permissions : 
$ cleos multisig unapprove
# cleos multisig unapprove [OPTIONS] proposer proposal_name permissions
#   > 拒绝签名
#       proposer : 
#       proposal_name : 
#       permissions :  
$ cleos multisig cancel
# cleos multisig cancel [OPTIONS] proposer proposal_name [canceler]
#   > 取消多重签名
#       proposer : 
#       proposal_name : 
#       [canceler] :  
$ cleos multisig exec
# cleos multisig exec [OPTIONS] proposer proposal_name [executer]
#   > 执行多重签名
#       proposer : 
#       proposal_name : 
#       [executer] :   
```

## system (系统)

``` shell
$ cleos system newaccount --stake-net '0.01 EOS' --stake-cpu '0.02 EOS' --buy-ram-kbytes 4 account1 account2 [PUB_KEY] # account1 创建 account2 并帮其抵押 0.01 个 EOS 获得网络资源，抵押 0.02 个 EOS 获得 CPU 资源，购买 4K 的 RAM 资源
# cleos system newaccount [OPTIONS] creator name OwnerKey [ActiveKey]
#   > 创建一个账户，并为其购买 RAM 和抵押 EOS 获得网络和 CPU 资源
#       --stake-net : 抵押获取网络资源的 EOS 数量
#       --stake-cpu : 抵押获取 CPU 资源的 EOS 数量
#       --buy-ram-kbytes : 购买 RAM 数量(KiB)
#       creator : 创建者的账户名
#       name : 新创建的账户名
#       OwnerKey : Owner 权限的公钥
#       [ActiveKey] : Active 权限的公钥(可以与 OwnerKey 相同)
$ cleos system regproducer
# cleos system regproducer [OPTIONS] account producer_key [url] [location]
#   > 注册一个新的区块生成者(BP)
#       account : 注册 BP 的账户
#       producer_key : BP 的公钥
#       [url] : BP 的节点 url 信息
#       [location] : 最邻近目标的相对位置
$ cleos system unregprod
# cleos system unregprod [OPTIONS] account
#   > 注销已存在的的区块生成者(BP)
#       account : 
$ cleos system voteproducer proxy
# cleos system voteproducer proxy [OPTIONS] voter proxy
#   > 设置投票代理
#       voter : 
#       proxy : 
$ cleos system voteproducer prods account1 eoshuobipool eoscannonchn # account1 投票给火币和佳能节点
# cleos system voteproducer prods [OPTIONS] voter producers...
#   > 投票给一个或多个 BP
#       voter : 投票账户
#       producers... : BP 账户
$ cleos system voteproducer approve account1 oraclegogogo # account1 给 oraclegogogo 节点投票
# cleos system voteproducer approve [OPTIONS] voter producer
#   > 添加一个 BP 到投票列表
#       voter : 投票账户
#       producer : BP 账户
$ cleos system voteproducer unapprove account1 eosauthority # account1 取消给 eosauthority 节点投票
# cleos system voteproducer unapprove [OPTIONS] voter producer
#   > 从投票列表中移除一个 BP
#       voter : 投票账户
#       producer : BP 账户
$ cleos system listproducers
# cleos system listproducers [OPTIONS]
#   > 显示区块生产者(BP)列表
#       -j,--json : 以 JSON 格式显示
$ cleos system delegatebw account1 account2 '1 EOS' '2 EOS' # account1 为 account2 抵押 1 个 EOS 换取网络资源，抵押 2 个 EOS 换取 CPU 资源
# cleos system delegatebw [OPTIONS] from receiver stake_net_quantity stake_cpu_quantity
#   > 抵押 EOS 换取带宽资源(网络和 CPU)
#       from : 抵押 EOS 的账户
#       receiver : 接收资源的账户
#       stake_net_quantity : 抵押的网络资源 EOS 数量
#       stake_cpu_quantity : 抵押的 CPU 资源 EOS 数量
$ cleos system undelegatebw account2 account1 '1 EOS' '2 EOS' # account2 赎回 account1 为其抵押的 EOS
# cleos system undelegatebw [OPTIONS] from receiver unstake_net_quantity unstake_cpu_quantity
#   > 赎回抵押的 EOS，释放带宽资源(网络和 CPU)
#       from : 赎回带宽资源的账户
#       receiver : 原抵押 EOS 的账户
#       unstake_net_quantity : 赎回的网络资源 EOS 数量
#       unstake_cpu_quanity : 赎回的 CPU 资源 EOS 数量
$ cleos system listbw account1 # 显示 account1 账户的抵押列表
# cleos system listbw [OPTIONS] account
#   > 获取账户抵押列表
#       -j,--json : 以 JSON 格式显示
#       account : 抵押资源的账户
$ cleos system bidname account1 eos '1 EOS' # account1 以 1 个 EOS 竞拍 eos 账户名
# cleos system bidname [OPTIONS] bidder newname bid
#   > 账户名竞拍
#       bidder : 竞拍者账户
#       newname : 竞拍的账户名
#       bid : 竞拍的 EOS 数量
$ cleos system bidnameinfo eos # 查看 eos 账户名的竞拍信息
# cleos system bidnameinfo [OPTIONS] newname
#   > 获取某个账户名(小于12个字符)的竞拍信息(目前最高的竞价者)
#       newname : 正在竞拍的账户名
$ cleos system buyram account1 account2 '0.5 EOS' # account1 为 account2 购买 0.5 个 EOS 的 RAM
# cleos system buyram [OPTIONS] payer receiver tokens
#   > 购买内存(RAM)
#       payer : 支付 EOS 的账户
#       receiver : 接收 RAM 的账户
#       tokens : 花费 EOS 的数量
$ cleos system sellram
# cleos system sellram [OPTIONS] account bytes
#   > 出售内存(RAM)
#       account : 出售 RAM 的账户
#       bytes : 出售 RAM 的数量(byte)
$ cleos system claimrewards
# cleos system claimrewards [OPTIONS] owner
#   > 区块生产者(BP)认领收益
#       owner : 认领收益的区块生产者账户
$ cleos system regproxy
# cleos system regproxy [OPTIONS] proxy
#   > 注册成为投票代理
#       proxy : 注册代理的账户
$ cleos system unregproxy
# cleos system unregproxy [OPTIONS] proxy
#   > 注销投票代理
#       proxy : 注销的代理账户
$ cleos system canceldelay
# cleos system canceldelay [OPTIONS] canceling_account canceling_permission trx_id
#   > 取消一个延迟的交易 
#       canceling_account : 取消交易的授权账户  
#       canceling_permission : 取消交易的授权     
#       trx_id : 交易 ID  
```

## Contract

- eosio.bios

``` shell
# eosio 账户发布 eosio.bios 智能合约
$ cleos set contract eosio build/contracts/eosio.bios -p eosio  
```

- eosio.token

``` shell
# eosio.token 账户发布 eosio.token 智能合约
$ cleos set contract eosio.token build/contracts/eosio.token -p eosio.token   
# 1> create : 创建代币
#       issuer : 发行人
#       maximum_supply : 最大供应量
#       can_freeze : 冻结
#       can_recall : 召回
#       can_whitelist : 白名单
# => 发行人 eosio 发行名为 SYS 的代币， 最大数量为 1000000000.0000 (精度小数点后 4 位)
$ cleos push action eosio.token create '[ "eosio", "1000000000.0000 SYS", 0, 0, 0]' -p eosio.token
$ cleos push action eosio.token create '{"issuer":"eosio", "maximum_supply":"1000000000.0000 SYS", "can_freeze":0, "can_recall":0, "can_whitelist":0}' -p eosio.token
# 2> issue : 发行
#       to : 接收发行 token 的用户
#       quantity : 数量
#       memo : 备忘
# => 发行人发行 100.0000 个 SYS 给用户 user 
#   包含一次发行 (issue) & 三次转账 (transfer) 
$ cleos push action eosio.token issue '[ "user", "100.0000 SYS", "memo" ]' -p eosio
# 测试发行，查看执行结果 
#       -d : 不要广播 
#       -j : json 格式显示执行结果
$ cleos push action eosio.token issue '["user", "100.0000 SYS", "memo"]' -p eosio -d -j
# 3> transfer : 转账
#       from : 发送方 
#       to : 接收方
#       quantity : 数量 
#       memo : 备忘
# => user 给 tester 转账 25.0000 个 SYS
$ cleos push action eosio.token transfer '[ "user", "tester", "25.0000 SYS", "m" ]' -p user
```

- exchange

``` shell
# exchange 账户发布 exchange 智能合约
$ cleos set contract exchange build/contracts/exchange -p exchange  
```

- eosio.msig 
> (multi-signature) 多重签名

``` shell
# eosio.msig 账户发布 eosio.misg 智能合约
$ cleos set contract eosio.misg build/contracts/eosio.misg -p eosio.misg 
```