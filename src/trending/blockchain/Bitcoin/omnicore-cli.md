# omnicore-cli 
> Omni Core RPC 客户端

``` shell
$ omnicore-cli [options] <command> [params] 
#   > 给 Omni Core 发送命令
$ omnicore-cli [options] help               
#   > 显示帮助信息列表
$ omnicore-cli [options] help <command>     
#   > 查询一个命令的帮助信息
#   Options
#       -testnet : 使用测试链
#       -regtest : 回归测试模式
#       -rpcconnect : 节点的 IP (默认: 127.0.0.1)
#       -rpcport : 端口号 (默认: 8332 testnet: 18332 regtest: 18443)
#       -rpcuser : 用户名
#       -rpcpassword : 密码
```

## Reference

- [Omni Core JSON-RPC API][ref-01]

[ref-01]: https://github.com/OmniLayer/omnicore/blob/master/src/omnicore/doc/rpc-api.md

## Configuration (配置)

``` shell
$ omnicore-cli omni_setautocommit true 
# omnicore-cli omni_setautocommit flag
#   > 设置交易指定提交和广播
#       flag : 状态值(true | false)
```

## Data Retrieval (数据查询)

``` shell
$ omnicore-cli omni_getactivations 
#   > 查询待定或已完成的激活特性
$ omnicore-cli omni_getactivecrowdsales 
#   > 列出当前激活的 crowdsale(代币销售 ICO)
$ omnicore-cli omni_getactivedexsells
# omnicore-cli omni_getactivedexsells ( address )
#   >
#       address : 过滤地址(默认: any，包括所有)
$ omnicore-cli omni_getallbalancesforaddress [ADD_XXX] 
# omnicore-cli omni_getallbalancesforaddress "address"
#   > 列出钱包地址所有 token 的余额
#       address : 钱包地址
$ omnicore-cli omni_getallbalancesforid [P_ID] 
# omnicore-cli omni_getallbalancesforid propertyid
#   > 列出所有包含改属性ID的钱包
#       propertyid : 代币属性 ID 或 代币名称
$ omnicore-cli omni_getbalance [ADD_XXX] [P_ID]
# omnicore-cli omni_getbalance "address" propertyid
#   > 查询指定钱包地址的指定货币的数量
#       address : 钱包地址
#       propertyid : 代币属性 ID
$ omnicore-cli omni_getbalanceshash [P_ID]
# omnicore-cli omni_getbalanceshash propertyid
#   > 获取指定货币的余额哈希
#       propertyid : 代币属性 ID
$ omnicore-cli omni_getcrowdsale [P_ID]
# omnicore-cli omni_getcrowdsale propertyid ( verbose )
#   > 查询指定属性 ID 的代币信息
#       propertyid : 代币属性 ID
#       verbose : 默认(true)，是否显示参与者信息
$ omnicore-cli omni_getcurrentconsensushash 
#   > 查询当前一致性哈希
$ omnicore-cli omni_getfeecache 
# omnicore-cli omni_getfeecache ( propertyid )
#   > 查询当前分发的费用信息
#       propertyid : 代币属性 ID
$ omnicore-cli omni_getfeedistribution [D_ID] 
# omnicore-cli omni_getfeedistribution distributionid
#   > 查询费用分发详细信息
#       distributionid : 分发 ID
$ omnicore-cli omni_getfeedistributions [P_ID] 
# omnicore-cli omni_getfeedistributions propertyid
#   > 指定代币费用分发列表
#       propertyid : 属性 ID
$ omnicore-cli omni_getfeeshare 
# omnicore-cli omni_getfeeshare ( address ecosystem )
#   > 查询费用分发(按照百分比显示)
#       address : 钱包地址
#       ecosystem : 检查小费分发的系统(1: main 2: test)
$ omnicore-cli omni_getfeetrigger 
# omnicore-cli omni_getfeetrigger ( propertyid )
#   > 缓存中触发分发的费用总数
#       propertyid : 属性 ID
$ omnicore-cli omni_getgrants [P_ID] 
# omnicore-cli omni_getgrants propertyid
#   > 查询代币的授权和撤销管理单位信息
#       propertyid : 属性 ID
$ omnicore-cli omni_getinfo 
#   > 查询当前区块信息
$ omnicore-cli omni_getmetadexhash [P_ID]
# omnicore-cli omni_getmetadexhash propertyId
#   >
#       propertyid : 属性 ID
$ omnicore-cli omni_getorderbook [P_ID]
# omnicore-cli omni_getorderbook propertyid ( propertyid )
#   > 
#       propertyid : 属性 ID
$ omnicore-cli omni_getpayload [TX_ID]
# omnicore-cli omni_getpayload "txid"
#   >
$ omnicore-cli omni_getproperty [P_ID]
# omnicore-cli omni_getproperty propertyid
#   > 
#       propertyid : 属性 ID
$ omnicore-cli omni_getseedblocks 0 100 # 
# omnicore-cli omni_getseedblocks startblock endblock
#   >
#       startblock : 起始区块 
#       endblock : 结束区块
$ omnicore-cli omni_getsto [TX_ID] [REC] # 
# omnicore-cli omni_getsto "txid" "recipientfilter"
#   >
#       txid : 交易 ID
#       recipientfilter : 
$ omnicore-cli omni_gettrade [TX_ID] 
# omnicore-cli omni_gettrade "txid"
#   > 根据交易 ID 查询币币交易详细信息
#       txid : 交易 ID
$ omnicore-cli omni_gettradehistoryforaddress [ADD_XX] 
# omnicore-cli omni_gettradehistoryforaddress "address" ( count propertyid )
#   > 查询钱包交易历史
#       address : 钱包地址
#       count : 
#       propertyid : 代币属性 ID
$ omnicore-cli omni_gettradehistoryforpair [P_ID_1] [P_ID_2]
# omnicore-cli omni_gettradehistoryforpair propertyid propertyid ( count )
#   > 查询两种代币交易历史
#       propertyid : 代币1 ID
#       propertyid : 代币2 ID
#       count : 查询结果数量(默认: 10)
$ omnicore-cli omni_gettransaction [TX_ID] 
# omnicore-cli omni_gettransaction "txid"
#   > 根据交易 ID 查询 Omni 交易详细信息
#       txid : 交易 ID
$ omnicore-cli omni_listblocktransactions 1 
# omnicore-cli omni_listblocktransactions index
#   > 查询指定区块的交易列表
#       index : 交易区块列表
$ omnicore-cli omni_listpendingtransactions 
# omnicore-cli omni_listpendingtransactions ( "address" )
#   > 查询内存池中未确认的交易列表
#       address : 钱包地址
$ omnicore-cli omni_listproperties 
# omnicore-cliomni_listtransactions ( "address" count skip startblock endblock )
#   > 列出所有 Token 或者 智能属性
#       address : 钱包地址
#       count : 查询数量(默认: 10)
#       skip : 跳过交易数量(默认: 0)
#       startblock : 起始区块
#       endblock : 结束区块
```

## Payload Creation (创建 payload)

``` shell
$ omnicore-cli omni_createpayload_cancelalltrades
# omnicore-cli omni_createpayload_cancelalltrades ecosystem
#   >
$ omnicore-cli omni_createpayload_canceltradesbypair
# omnicore-cli omni_createpayload_canceltradesbypair propertyidforsale propertiddesired
#   >
$ omnicore-cli omni_createpayload_canceltradesbyprice 
# omnicore-cli omni_createpayload_canceltradesbyprice propertyidforsale "amountforsale" propertiddesired "amountdesired"
#   >
$ omnicore-cli omni_createpayload_changeissuer [P_ID]  
# omnicore-cli omni_createpayload_changeissuer propertyid
#   >
#       propertyid : 代币属性 ID
$ omnicore-cli omni_createpayload_closecrowdsale [P_ID] 
# omnicore-cli omni_createpayload_closecrowdsale propertyid
#   >
#       propertyid : 代币属性 ID
$ omnicore-cli omni_senddexaccept [P_ID] 
# omnicore-cli omni_senddexaccept propertyid "amount"
#   >
$ omnicore-cli omni_createpayload_dexsell
# omnicore-cli omni_createpayload_dexsell propertyidforsale "amountforsale" "amountdesired" paymentwindow minacceptfee action
#   >
$ omnicore-cli omni_createpayload_disablefreezing [P_ID] 
# omnicore-cli omni_createpayload_disablefreezing propertyid
#   >
#       propertyid : 代币属性 ID
$ omnicore-cli omni_createpayload_enablefreezing [P_ID] 
# omnicore-cli omni_createpayload_enablefreezing propertyid
#   > 
#       propertyid : 代币属性 ID
$ omnicore-cli omni_createpayload_freeze
# omnicore-cli omni_createpayload_freeze "toaddress" propertyid amount
#   > 
#       toaddress : 
#       propertyid : 代币属性 ID
#       amount : 
$ omnicore-cli omni_createpayload_grant [P_ID] 
# omnicore-cli omni_createpayload_grant propertyid "amount" ( "memo" )
#   > 
#       propertyid : 代币属性 ID
#       amount : 
#       memo : 
$ omnicore-cli omni_createpayload_issuancecrowdsal 
# omnicore-cli omni_createpayload_issuancecrowdsale ecosystem type previousid "category" "subcategory" "name" "url" "data" propertyiddesired tokensperunit deadline earlybonus issuerpercentage
#   > 
#       ecosystem :  
#       type : 
#       previousid : 
#       category : 
#       subcategory : 
#       name : 
#       url : 
#       data : 
#       propertyiddesired :  
#       tokensperunit : 
#       deadline : 
#       earlybonus : 
#       issuerpercentage : 
$ omnicore-cli omni_createpayload_issuancefixed 
# omnicore-cli omni_createpayload_issuancefixed ecosystem type previousid "category" "subcategory" "name" "url" "data" "amount"
#   > 
#       ecosystem : 
#       type : 
#       previousid :  
#       category : 
#       subcategory : 
#       name : 
#       url : 
#       data : 
#       amount :  
$ omnicore-cli omni_createpayload_issuancemanaged
# omnicore-cli omni_createpayload_issuancemanaged ecosystem type previousid "category" "subcategory" "name" "url" "data"
#   > 
#       ecosystem :  
#       type :
#       previousid 
#       category
#       subcategory
#       name
#       url
#       data
$ omnicore-cli omni_createpayload_revoke 
# omnicore-cli omni_createpayload_revoke propertyid "amount" ( "memo" )
#   > 
#       propertyid : 
#       amount : 
#       memo : 
$ omnicore-cli omni_createpayload_sendall
# omnicore-cli omni_createpayload_sendall ecosystem
#   > 
#       ecosystem : 
$ omnicore-cli omni_createpayload_simplesend [P_ID]
# omnicore-cli omni_createpayload_simplesend propertyid "amount"
#   > 
#       propertyid : 代币属性 ID
#       amount : 
$ omnicore-cli omni_createpayload_sto
# omnicore-cli omni_createpayload_sto propertyid "amount" ( distributionproperty )
#   > 
#       propertyid : 代币属性 ID
#       amount : 
#       distributionproperty : 
$ omnicore-cli omni_createpayload_trade
# omnicore-cli omni_createpayload_trade propertyidforsale "amountforsale" propertiddesired "amountdesired"
#   > 
#       propertyidforsale : 
#       amountforsale : 
#       propertiddesired : 
#       amountdesired : 
$ omnicore-cli omni_createpayload_unfreeze
# omnicore-cli omni_createpayload_unfreeze "toaddress" propertyid amount
#   > 
#       toaddress : 
#       propertyid :
#       amount :
```

## Raw Transactions (原始交易)

``` shell
$ omnicore-cli omni_createrawtx_change
# omnicore-cli omni_createrawtx_change "rawtx" "prevtxs" "destination" fee ( position )
#   > 
#       rawtx : 原始交易
#       prevtxs :
#       destination : 
#       fee :
#       position : 
$ omnicore-cli omni_createrawtx_input
# omnicore-cli omni_createrawtx_input "rawtx" "txid" n
#   > 
#       rawtx : 原始交易
#       txid : 交易 ID
#       n : 
$ omnicore-cli omni_createrawtx_multisig
# omnicore-cli omni_createrawtx_multisig "rawtx" "payload" "seed" "redeemkey"
#   > 
#       rawtx : 原始交易
#       payload : 
#       seed :
#       redeemkey : 
$ omnicore-cli omni_createrawtx_opreturn
# omnicore-cli omni_createrawtx_opreturn "rawtx" "payload"
#   > 
#       rawtx : 原始交易
#       payload : 
$ omnicore-cli omni_createrawtx_reference
# omnicore-cli omni_createrawtx_reference "rawtx" "destination" ( amount )
#   > 
#       rawtx : 原始交易
#       destination : 
#       amount : 
$ omnicore-cli omni_decodetransaction
# omnicore-cli omni_decodetransaction "rawtx" ( "prevtxs" height )
#   > 
#       rawtx : 原始交易
#       prevtxs :  
#       height : 
```

## Transaction Creation (创建交易)

``` shell
$ omnicore-cli omni_send 
# omnicore-cli omni_send "fromaddress" "toaddress" propertyid "amount" ( "redeemaddress" "referenceamount" )
#   > 创建并
#       "fromaddress" : 
#       "toaddress" : 
#       propertyid : 
#       "amount" : 
#       "redeemaddress" : 
#       "referenceamount" : 
$ omnicore-cli omni_sendall
# omnicore-cli omni_sendall "fromaddress" "toaddress" ecosystem ( "redeemaddress" "referenceamount" )
#   > 
#       fromaddress : 
#       toaddress : 
#       ecosystem : 
#       redeemaddress : 
#       referenceamount : 
$ omnicore-cli omni_sendcancelalltrades
# omnicore-cli omni_sendcancelalltrades "fromaddress" ecosystem
#   > 
#       fromaddress : 
#       ecosystem : 
$ omnicore-cli omni_sendcanceltradesbypair
# omnicore-cli omni_sendcanceltradesbypair "fromaddress" propertyidforsale propertiddesired
#   > 
#       fromaddress : 
#       propertyidforsale : 
#       propertiddesired : 
$ omnicore-cli omni_sendcanceltradesbyprice
# omnicore-cli omni_sendcanceltradesbyprice "fromaddress" propertyidforsale "amountforsale" propertiddesired "amountdesired"
#   > 
#       fromaddress : 
#       propertyidforsale : 
#       amountforsale : 
#       propertiddesired : 
#       amountdesired : 
$ omnicore-cli omni_sendchangeissuer
# omnicore-cli omni_sendchangeissuer "fromaddress" "toaddress" propertyid
#   >
#       fromaddress : 
#       toaddress : 
#       propertyid : 
$ omnicore-cli omni_sendclosecrowdsale
# omnicore-cli omni_sendclosecrowdsale "fromaddress" propertyid
#   > 
#       fromaddress : 
#       propertyid :
$ omnicore-cli omni_senddexaccept 
# omnicore-cli omni_senddexaccept "fromaddress" "toaddress" propertyid "amount" ( override )
#   > 
#       fromaddress : 
#       toaddress : 
#       propertyid : 
#       amount :
#       override : 
$ omnicore-cli omni_senddexsell
# omnicore-cli omni_senddexsell "fromaddress" propertyidforsale "amountforsale" "amountdesired" paymentwindow minacceptfee action
#   > 
#       fromaddress : 
#       propertyidforsale 
#       amountforsale
#       amountdesired
#       paymentwindow 
#       minacceptfee 
#       action
$ omnicore-cli omni_senddisablefreezing
# omnicore-cli omni_senddisablefreezing "fromaddress" propertyid
#   > 
#       fromaddress : 
#       propertyid : 
$ omnicore-cli omni_sendenablefreezing
# omnicore-cli omni_sendenablefreezing "fromaddress" propertyid
#   > 
#       fromaddress : 
#       propertyid : 
$ omnicore-cli omni_sendfreeze
# omnicore-cli omni_sendfreeze "fromaddress" "toaddress" propertyid amount
#   > 
#       fromaddress : 
#       toaddress : 
#       propertyid : 
#       amount : 
$ omnicore-cli omni_sendgrant
# omnicore-cli omni_sendgrant "fromaddress" "toaddress" propertyid "amount" ( "memo" )
#   > 
#       fromaddress : 
#       toaddress : 
#       propertyid : 
#       amount : 
#       memo : 
$ omnicore-cli omni_sendissuancecrowdsale
# omnicore-cli omni_sendissuancecrowdsale "fromaddress" ecosystem type previousid "category" "subcategory" "name" "url" "data" propertyiddesired tokensperunit deadline ( earlybonus issuerpercentage )
#   > 
#       fromaddress : 
#       ecosystem : 
#       type : 
#       previousid 
#       category
#       subcategory
#       name
#       url
#       data 
#       propertyiddesired 
#       tokensperunit 
#       deadline 
#       earlybonus 
#       issuerpercentage 
$ omnicore-cli omni_sendissuancefixed
# omnicore-cli omni_sendissuancefixed "fromaddress" ecosystem type previousid "category" "subcategory" "name" "url" "data" "amount"
#   > 
#       fromaddress : 
#       ecosystem : 
#       type : 
#       previousid :
#       category :
#       subcategory : 
#       name : 
#       url : 
#       data : 
#       amount : 
$ omnicore-cli omni_sendissuancemanaged
# omnicore-cli omni_sendissuancemanaged "fromaddress" ecosystem type previousid "category" "subcategory" "name" "url" "data"
#   > 
#       fromaddress : 
#       ecosystem : 
#       type :
#       previousid : 
#       category :
#       subcategory :
#       name : 
#       url : 
#       data :  
$ omnicore-cli omni_sendrawtx
# omnicore-cli omni_sendrawtx "fromaddress" "rawtransaction" ( "referenceaddress" "redeemaddress" "referenceamount" )
#   > 
#       fromaddress : 
#       rawtransaction : 
#       referenceaddress : 
#       redeemaddress : 
#       referenceamount : 
$ omnicore-cli omni_sendrevoke
# omnicore-cli omni_sendrevoke "fromaddress" propertyid "amount" ( "memo" )
#   > 
#       fromaddress : 
#       propertyid : 
#       amount : 
#       memo : 
$ omnicore-cli omni_sendsto
# omnicore-cli omni_sendsto "fromaddress" propertyid "amount" ( "redeemaddress" distributionproperty )
#   > 
#       fromaddress : 
#       propertyid : 
#       amount : 
#       redeemaddress : 
#       distributionproperty : 
$ omnicore-cli omni_sendtrade
# omnicore-cli omni_sendtrade "fromaddress" propertyidforsale "amountforsale" propertiddesired "amountdesired"
#   > 
#       fromaddress : 
#       propertyidforsale : 
#       amountforsale : 
#       propertiddesired : 
#       amountdesired : 
$ omnicore-cli omni_sendunfreeze
# omnicore-cli omni_sendunfreeze "fromaddress" "toaddress" propertyid amount
#   > 
#       fromaddress : 
#       toaddress : 
#       propertyid : 
#       amount : 
```
