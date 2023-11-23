# bitcoin-cli 
> Bitcoin Core RPC 客户端

``` shell
$ bitcoin-cli [options] <command> [params]  
#   > 发送命令到 Bitcoin Core
$ bitcoin-cli [options] -named <command> [name=value] ... 
#   > 发送带有参数的命令到 Bitcoin Core
$ bitcoin-cli [options] help                
#   > 查询所有命令列表
$ bitcoin-cli [options] help <command>      
#   > 获取特定命令帮助信息
```

## Reference

- [比特币核心客户端 RPC 命令][ref-01]

[ref-01]: https://mistydew.github.io/2018/05/06/bitcoin-cli-commands

## Blockchain (区块链)

``` shell
$ bitcoin-cli getbestblockhash 
#   > 查询最长链的区块哈希
$ bitcoin-cli getblock [BLOCK_HASH] 
# bitcoin-cli getblock "blockhash" ( verbosity )
#   > 查询指定哈希的的区块信息
#       "blockhash" : 区块哈希值
#       verbosity : 返回数据格式(默认: 1)
#           0 : 返回对块哈希进行 16 进制编码的字符串
#           1 : 返回区块的基本信息
#           2 : 返回区块中每笔交易的详细信息
$ bitcoin-cli getblockchaininfo  
#   > 查询当前最新区块信息
$ bitcoin-cli getblockcount 
#   > 查询当前区块数量
$ bitcoin-cli getblockhash 1 
# bitcoin-cli getblockhash height
#   > 根据高度查询区块的哈希 
#       height : 区块高度
$ bitcoin-cli getblockheader [BLOCK_HASH] 
# bitcoin-cli getblockheader "hash" ( verbose )
#   > 查询指定区块头部信息
#       "hash" : 区块哈希
#       verbose : 返回数据格式 (默认: true)
#           true : 返回 JOSN 数据
#           false : 16 进制编码格式
$ bitcoin-cli getblockstats 1 
# bitcoin-cli getblockstats hash_or_height ( stats )
#   > 统计区块的费用信息(单位: 聪 satoshis)
#       hash_or_height : 区块哈希或者区块高度
#       stats : 需要查询字段名数组
$ bitcoin-cli getchaintips  
#   > 查询当前所有临时分叉的区块头的基本信息
$ bitcoin-cli getchaintxstats 
# bitcoin-cli getchaintxstats ( nblocks blockhash )
#   > 统计最近一个月的交易量和交易速率
#       nblocks : 计算的区块范围(默认: 一个月)
#       blockhash : 最后一个区块的哈希
$ bitcoin-cli getdifficulty 
#   > 查询当前 POW 工作量证明难度值
$ bitcoin-cli getmempoolancestors [TX_ID] 
# bitcoin-cli getmempoolancestors txid (verbose)
#   > 查询内存池中交易哈希的前驱交易
#       txid : 交易哈希
#       verbose : 返回数据格式 (默认: false)
#           true : JSON 格式
#           false : 交易哈希数组
$ bitcoin-cli getmempooldescendants [TX_ID] 
# bitcoin-cli getmempooldescendants txid (verbose)
#   > 查询指定交易哈希的后续交易
#       txid : 交易哈希
#       verbose : 返回数据格式(默认: false)
#           true : JSON 格式
#           false : 交易哈希数组
$ bitcoin-cli getmempoolentry [TX_ID]  
# bitcoin-cli getmempoolentry txid
#   > 查询内存池中指定交易哈希的信息
#       txid : 交易哈希
$ bitcoin-cli getmempoolinfo 
#   > 查询交易内存池信息
$ bitcoin-cli getrawmempool true 
# bitcoin-cli getrawmempool ( verbose )
#   > 查询内存池中的所有交易
#       verbose : 显示格式(默认: false)
#           true : JSON 格式
#           false : 交易 ID 数组
$ bitcoin-cli gettxout [TX_ID] 1 
# bitcoin-cli gettxout "txid" n ( include_mempool )
#   > 根据交易哈希查询 UTXO 详细信息
#       "txid" : 交易哈希
#       n : vout 编号
#       "include_mempool" : 是否在内存池中(默认: true)
$ bitcoin-cli gettxoutproof ["TX_ID"] 
# bitcoin-cli gettxoutproof ["txid",...] ( blockhash )
#   > 查询交易所在区块的 POW 工作量证明
#       "txid" : 交易哈希
#       blockhash : 交易所在区块哈希
$ bitcoin-cli gettxoutsetinfo 
#   > 查询全部 UTXO 集合信息
$ bitcoin-cli preciousblock [BLOCK_HASH] 
# bitcoin-cli preciousblock "blockhash"
#   > ?
#       "blockhash" : 区块哈希
$ bitcoin-cli pruneblockchain 100 
# bitcoin-cli pruneblockchain height
#   > 修剪区块链
#       height : 区块高度
$ bitcoin-cli savemempool 
#   > 保存交易内存池信息到磁盘
$ bitcoin-cli verifychain 
# bitcoin-cli verifychain ( checklevel nblocks )
#   > 验证区块链数据库
#       checklevel : 验证深度(默认: 3)
#       nblocks : 验证区块数量(默认: 6)
$ bitcoin-cli verifytxoutproof [PROOF] 
# bitcoin-cli verifytxoutproof "proof"
#   > 验证 POW 工作量证明
#           "proof" : 16 进制 POW 工作量证明 (通过 gettxoutproof 获取)
```

## Control (控制)

``` shell
$ bitcoin-cli getmemoryinfo 
# bitcoin-cli getmemoryinfo ("mode")
#   > 查询内存信息
#       mode : 
$ bitcoin-cli help get
# bitcoin-cli help ( "command" )
#   > 查询命令帮助信息
#       command : 命令
$ bitcoin-cli logging 
# bitcoin-cli logging ( <include> <exclude> )
#   > 查询 logging 设置信息
#       include :
#       exclude : 
$ bitcoin-cli stop 
#   > 停止 bitcoind 服务
$ bitcoin-cli uptime 
#   > 查询服务总运行时间
```

## Generating (区块生成)

``` shell
$ bitcoin-cli generate 10 
# bitcoin-cli generate nblocks ( maxtries )
#   > 生成区块
#       nblocks : 生成区块的个数
#       maxtries : 最大尝试次数
$ bitcoin-cli generatetoaddress 10 [BTC_ADDR] # 为 BTC 地址生成 10 个区块
# bitcoin-cli generatetoaddress nblocks address (maxtries)
#   > 为指定的 BTC 地址生成区块
#       nblocks : 生成区块的个数
#       address : BTC 地址
#       maxtries : 最大尝试次数
```

## Mining (挖矿)

``` shell
$ bitcoin-cli getblocktemplate
# bitcoin-cli getblocktemplate ( TemplateRequest )
#   > 获取区块模板
#       TemplateRequest : 
$ bitcoin-cli getmininginfo 
#   > 查询挖矿信息
$ bitcoin-cli getnetworkhashps
# bitcoin-cli getnetworkhashps ( nblocks height )
#   > 获取网络算力
#       nblocks : 
#       height : 给定高度的估计(默认: -1)
$ bitcoin-cli prioritisetransaction
# bitcoin-cli prioritisetransaction <txid> <dummy value> <fee delta>
#   > 改变交易优先级
#       txid : 
#       dummy value : 
#       fee delta : 
$ bitcoin-cli submitblock
# bitcoin-cli submitblock "hexdata"  ( "dummy" )
#   > 提交区块
#       hexdata : 
#       dummy : 
```

## Network (网络)

``` shell
$ bitcoin-cli addnode
# bitcoin-cli addnode "node" "add|remove|onetry"
#   > 添加一个 P2P 节点
#       node : 节点
#       add|remove|onetry : 添加 | 移除 | 尝试连接节点一次
$ bitcoin-cli clearbanned 
#   > 清除所有禁用的的 IP (黑名单)
$ bitcoin-cli disconnectnode 
# bitcoin-cli disconnectnode "[address]" [nodeid]
#   > 断开与指定节点的连接
#       address : 节点地址
#       nodeid : 节点 ID 
$ bitcoin-cli getaddednodeinfo 
# bitcoin-cli getaddednodeinfo ( "node" )
#   > 查询所有添加节点的信息
#       node : 指定的节点
$ bitcoin-cli getconnectioncount 
#   > 查询当前 P2P 连接数量
$ bitcoin-cli getnettotals 
#   > 查询当前网络信息(输入输出字节、以及当前时间)
$ bitcoin-cli getnetworkinfo    
#   > 查询当前网络信息
$ bitcoin-cli getpeerinfo 
#   > 查询连接的 P2P 节点信息
$ bitcoin-cli listbanned 
#   > 查询禁用的 IP / 子网 (黑名单)
$ bitcoin-cli ping 
#   > 测试 ping 连接节点的信息
$ bitcoin-cli setban 
# bitcoin-cli setban "subnet" "add|remove" (bantime) (absolute)
#   > 添加(移除)从禁止列表 (黑名单)
#       subnet : 子网 
#       add | remove : 添加 | 删除 
#       bantime : 禁止时间
#       absolute : (true: bantime 必须设置绝对时间(since 1970))
$ bitcoin-cli setnetworkactive true(false) 
#   > 启用(禁止)所有连接的 P2P 网络
```

## Rawtransactions (原始交易)

``` shell
$ bitcoin-cli combinerawtransaction
# bitcoin-cli combinerawtransaction ["hexstring",...]
#   > 
$ bitcoin-cli createrawtransaction 
# bitcoin-cli createrawtransaction [{"txid":"id","vout":n},...] [{"address":amount},{"data":"hex"},...] ( locktime ) ( replaceable )
# > 根据交易参数创建一笔交易(16 进制交易信息)
#       locktime : 
#       replaceable : 
$ bitcoin-cli decoderawtransaction [HEX_TX] 
# bitcoin-cli decoderawtransaction "hexstring" ( iswitness )
#   > 解码 16 进制交易信息
#       hexstring : 16 进制交易信息
#       iswitness : 是否隔离见证
$ bitcoin-cli decodescript
# bitcoin-cli decodescript "hexstring"
#   > 解码脚本
#       hexstring : 交易信息
$ bitcoin-cli fundrawtransaction
# bitcoin-cli fundrawtransaction "hexstring" ( options iswitness )
#   > 资助交易
#       hexstring : 16 进制交易信息
#       options : 
#       iswitness : 
$ bitcoin-cli getrawtransaction [TX_ID] 
# bitcoin-cli getrawtransaction "txid" ( verbose "blockhash" )
#   > 根据交易哈希查询交易详细信息
#       "txid" : 交易哈希
#       verbose : 显示格式(默认: false)
#           true : JSON 格式
#           false : 16 进制格式
#       "blockhash" : 查找的区块哈希
$ bitcoin-cli sendrawtransaction [HEX_TX] 
# bitcoin-cli sendrawtransaction "hexstring" ( allowhighfees )
#   > 发送已签名 16 进制交易
#       hexstring : 已签名 16 进制交易信息
#       allowhighfees : 
$ bitcoin-cli signrawtransaction [HEX_TX] 
# bitcoin-cli signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )
#   > 签名 16 进制交易信息
#       hexstring : 未签名 16 进制交易信息
$ bitcoin-cli signrawtransactionwithkey [HEX_TX] [PTV_KEY1, PTC_KEY2] 
# bitcoin-cli signrawtransactionwithkey "hexstring" ["privatekey1",...] ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] sighashtype )
#   > 使用私钥进行签名 
#       hexstring : 未签名 16 进制交易信息
#       ["privatekey1",...] : 签名的私钥
$ bitcoin-cli testmempoolaccept
# bitcoin-cli testmempoolaccept ["rawtxs"] ( allowhighfees )
#   > 
```

## Util (工具)

``` shell
$ bitcoin-cli createmultisig
# bitcoin-cli createmultisig nrequired ["key",...] ( "address_type" )
#   > 创建多签名
#       nrequired : 要求签名的数量
$ bitcoin-cli estimatesmartfee
# bitcoin-cli estimatesmartfee conf_target ("estimate_mode")
#   > 智能估计交易费
$ bitcoin-cli signmessagewithprivkey
# bitcoin-cli signmessagewithprivkey "privkey" "message"
#   > 通过私钥签名消息
#       privkey : 私钥
#       message : 消息内容
$ bitcoin-cli validateaddress [BTC_ADDR] 
# bitcoin-cli validateaddress "address"
#   > 验证 BTC 地址是否合法
#       address : BTC 地址
$ bitcoin-cli verifymessage
# bitcoin-cli verifymessage "address" "signature" "message"
#   > 验证消息
#       address : BTC 地址
```

## Wallet (钱包)

``` shell
$ bitcoin-cli abandontransaction [TX_ID] 
# bitcoin-cli abandontransaction "txid"
#   > 放弃交易
#       txid : 交易哈希
$ bitcoin-cli abortrescan 
#   >  
$ bitcoin-cli addmultisigaddress 
# bitcoin-cli addmultisigaddress nrequired ["key",...] ( "label" "address_type" )
#   > 添加多签名地址
#       nrequired : 
$ bitcoin-cli backupwallet wallet.backup
# bitcoin-cli backupwallet "destination"
#   > 备份钱包
#           destination : 备份目标文件
$ bitcoin-cli bumpfee [TX_ID] # 
# bitcoin-cli bumpfee "txid" ( options )
#   > 
#       txid : 交易哈希
#       options : 
$ bitcoin-cli createwallet test 
# bitcoin-cli createwallet "wallet_name"
#   > 根据钱包名字创建名的钱包
#       "wallet_name" : 钱包名字
$ bitcoin-cli dumpprivkey [BTC_ADDR] 
# bitcoin-cli dumpprivkey "address"
#   > 根据 BTC 地址查询私钥
#       address : BTC 地址
$ bitcoin-cli dumpwallet wallet.txt 
# bitcoin-cli dumpwallet "filename"
#   > 将钱包存储为可读的文件
#       filename : 文件名
$ bitcoin-cli encryptwallet 666666 
# bitcoin-cli encryptwallet "passphrase"
#   > 加密钱包
#       passphrase : 钱包密码
$ bitcoin-cli getaddressesbylabel test 
# bitcoin-cli getaddressesbylabel "label"
#   > 根据标签查询 BTC 地址
#       label : 标签
$ bitcoin-cli getaddressinfo [BTC_ADDR] 
# bitcoin-cli getaddressinfo "address"
#   > 查询 BTC 地址信息
#       address : BTC 地址
$ bitcoin-cli getbalance  
# bitcoin-cli getbalance ( "(dummy)" minconf include_watchonly )
#   > 查询总共可用余额
#       dummy : 
#       minconf : 最小确认数(默认: 0)
#       include_watchonly : (默认: false)
$ bitcoin-cli getnewaddress 
$ bitcoin-cli getnewaddress test # 生成标签为 test 的地址
# bitcoin-cli getnewaddress ( "label" "address_type" )
#   > 生成一个新的 BTC 地址(无标签)
#       "label" : 标签名
#       "address_type" : 地址类型
#           legacy :
#           p2sh-segwit : 
#           bech32 : 
$ bitcoin-cli getrawchangeaddress 
# bitcoin-cli getrawchangeaddress ( "address_type" )
#   > 生成一个找零的 BTC 地址 (不常用)
#       address_type : 地址类型
$ bitcoin-cli getreceivedbyaddress [BTC_ADDR] 
# bitcoin-cli getreceivedbyaddress "address" ( minconf )
#   > 查询 BTC 地址接收的总金额
#       address : BTC 地址
#       minconf : 最小确认数
$ bitcoin-cli gettransaction [TX_ID] 
# bitcoin-cli gettransaction "txid" ( include_watchonly )
#   > 根据交易哈希查询交易(简化交易信息)
#       txid : 交易哈希
#       include_watchonly : 
$ bitcoin-cli getunconfirmedbalance 
#   > 查询未确认的金额
$ bitcoin-cli getwalletinfo 
#   > 查询当前钱包信息
$ bitcoin-cli importaddress [BTC_ADDR]
# bitcoin-cli importaddress "address" ( "label" rescan p2sh )
#   > 导入 BTC 地址 或者 脚本
#       address : BTC 地址
#       label : 标签
#       rescan :   
#       p2sh :  
$ bitcoin-cli importmulti '[......]' 
# bitcoin-cli importmulti "requests" ( "options" )
#   > 多类型导入工具
#       requests : 导入的 JSON 数组 (私钥、公钥或者 P2SH 脚本)
#       options : JSON 格式选项
$ bitcoin-cli importprivkey [PVT_KEY] 
# bitcoin-cli importprivkey "privkey" ( "label" ) ( rescan )
#   > 导入私钥
#       privkey : 私钥
#       label : 标签
#       rescan : 
$ bitcoin-cli importprunedfunds 
# bitcoin-cli importprunedfunds "rawtransaction" "txoutproof"
#   > 导入未修剪资金
#       rawtransaction : 原始的 16 进制交易数据
#       txoutproof : 
$ bitcoin-cli importpubkey [PUB_KEY]
# bitcoin-cli importpubkey "pubkey" ( "label" rescan )
#   > 导入公钥
#       pubkey : 公钥
#       label : 标签
#       rescan : 
$ bitcoin-cli importwallet test.dat 
# bitcoin-cli importwallet "filename"
#   > 导入钱包
#       filename : 钱包文件
$ bitcoin-cli keypoolrefill 
# bitcoin-cli keypoolrefill ( newsize )
#   > 重置密钥池大小
#       newsize : 密钥池大小(默认: 1000)，必须必现在的值大(小于当前值无效)
$ bitcoin-cli listaddressgroupings 
#   > 查询 BTC 地址分组的列表信息
$ bitcoin-cli listlabels 
# bitcoin-cli listlabels ( "purpose" )
#   > 查询标签列表
#       purpose : BTC 地址性质(send | receive)
$ bitcoin-cli listlockunspent 
#   > 查询锁定的 UXTO
$ bitcoin-cli listreceivedbyaddress 
# bitcoin-cli listreceivedbyaddress ( minconf include_empty include_watchonly address_filter )
#   > 查询 BTC 接收地址账户余额列表
#       minconf : 包括付款前的最低确认数(默认: 1)
#       include_empty : 是否包括未收到任何付款的地址(默认: false)
#       include_watchonly : 是否只包括监视地址(默认: false)
#       address_filter : 过滤地址(只返回包含此地址的信息)
$ bitcoin-cli listsinceblock 
# bitcoin-cli listsinceblock ( "blockhash" target_confirmations include_watchonly include_removed )
#   > 查询区块中的所有交易
#       blockhash :
#       target_confirmations : 
#       include_watchonly : 
#       include_removed : 
$ bitcoin-cli listtransactions 
# bitcoin-cli listtransactions (dummy count skip include_watchonly)
#   > 查询整个钱包的交易列表
#       dummy : (* : 向后兼容)
#       count : 数量(默认: 10)
#       skip : 跳过(默认: 0)
#       include_watchonly : 
$ bitcoin-cli listunspent 
# bitcoin-cli listunspent ( minconf maxconf  ["addresses",...] [include_unsafe] [query_options])
#   > 查询钱包中的 UXTO 
#       minconf : 最小确认数(默认: 1)
#       maxconf : 最大确认数(默认: 9999999)
#       ["addresses",...] : 过滤 BTC 地址
#       include_unsafe : 是否包含不安全花费(默认: true)
#       query_options : JSON 格式查询选项
$ bitcoin-cli listwallets 
#   > 已加载钱包的列表
$ bitcoin-cli loadwallet test # 加载 test 钱包
# bitcoin-cli loadwallet "filename"
#   > 加载钱包
#       "filename" : 钱包文件目录 或 钱包文件(.dat) [默认在 walletdir 目录中查找]
$ bitcoin-cli lockunspent true 
# bitcoin-cli lockunspent unlock ([{"txid":"txid","vout":n},...])
#   > 锁定 UTXO
#       unlock : true | false
$ bitcoin-cli removeprunedfunds
# bitcoin-cli removeprunedfunds "txid"
#   > 
#       txid : 交易 ID
$ bitcoin-cli rescanblockchain
# bitcoin-cli rescanblockchain ("start_height") ("stop_height")
#   > 
#       start_height : 起始高度
#       stop_height : 结束高度
$ bitcoin-cli sendmany
# bitcoin-cli sendmany "" {"address":amount,...} ( minconf "comment" ["address",...] replaceable conf_target "estimate_mode")
#   > 发送 BTC 到多个账户
#       "" : 固定设置，为了向后兼容
#       amounts : JSON 格式地址和数量
$ bitcoin-cli sendtoaddress [BTC_ADDR] 10 # 给一个 BTC 地址发送 10 个比特币
# bitcoin-cli sendtoaddress "address" amount ( "comment" "comment_to" subtractfeefromamount replaceable conf_target "estimate_mode")
#  > 给一个 BTC 地址发送 BTC，自动进行交易的匹配，以及找零地址的创建
#       "address" : BTC 地址
#       amount : 比特币数量
#       "comment" : 备注 (不保存在区块链中，仅保存在本地钱包中用作标记)
#       "comment_to" : 填写备注的人或组织名 (同上)
#       subtractfeefromamount : 费用将在发送金额中扣除(默认: false)
#       replaceable : 通过 BIP 215 允许更高费用的交易代替
#       conf_target : 确认目标
#       "estimate_mode" : 费用模式(默认: UNSET)
#           UNSET : 
#           ECONOMICAL : 
#           CONSERVATIVE : 
$ bitcoin-cli sethdseed 
# bitcoin-cli sethdseed ( "newkeypool" "seed" )
#   > 设置一个新的 HD 钱包种子
#       newkeypool : 
#       seed : 
$ bitcoin-cli settxfee 
# bitcoin-cli settxfee amount
#   > 设置交易费
#       amount : 交易费金额
$ bitcoin-cli signmessage [BTC_ADDR] [MSG]  
# bitcoin-cli signmessage "address" "message"
#   > 签名一个消息
#       address : BTC 地址
#       message : 消息内容
$ bitcoin-cli signrawtransactionwithwallet [HEX_TX] 
# bitcoin-cli signrawtransactionwithwallet "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] sighashtype )
#   > 通过钱包签名交易数据
#       hexstring : 16 进制交易数据
#       prevtxs : 之前依赖交易输出
#       sighashtype : 签名哈希类型(默认: ALL)
#           ALL | NONE | SINGLE ...
$ bitcoin-cli unloadwallet test # 卸载 test 钱包
# bitcoin-cli unloadwallet ( "wallet_name" )
#   > 卸载钱包
#       wallet_name : 钱包名称
$ bitcoin-cli walletlock 
#   > 锁定钱包
$ bitcoin-cli walletpassphrase 666666 150 # 解锁钱包 150 秒
# bitcoin-cli walletpassphrase "passphrase" timeout
#   > 解锁钱包
#       passphrase : 密码
#       timeout : 锁定超时时间
$ bitcoin-cli walletpassphrasechange [OLD] [NEW] 
# bitcoin-cli walletpassphrasechange "oldpassphrase" "newpassphrase"
#   > 修改钱包密码
#       oldpassphrase : 旧密码
#       newpassphrase : 新密码
```