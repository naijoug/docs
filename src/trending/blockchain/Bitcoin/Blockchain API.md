## Reference

- [Blockchain API][ref-01]

[ref-01]: https://www.blockchain.com/api

## Receive Payments (接收付款)

> 让任何网站可以轻而易举的接收比特币。此项服务是完全免费和安全的，是商业或个人使用的完美之选。

- `/v2/receive` : 生成接收地址 [GET] {为您的客户提供唯一的，未使用的比特币地址}
    * xpub : xPub（您希望付款的位置）
    * callback_url : 收到付款时要通知的回调URL。
    * key : 请求API密钥
    * gap_limit - 可选。在出错之前允许多少个未使用的地址。

- `/v2/receive/balance_update` : 余额更新 [POST] {监控已付款和已付款的地址}
    * addr : 您要监控的地址
    * callback : 收到付款时要通知的回调URL。
    * key : API密钥。
    * onNotification : 请求通知行为（'KEEP'|'DELETE）。
    * confs : 可选（默认3）。在发送通知之前交易需要的确认数。
    * op : 可选（默认为“ALL”）。您希望接收通知的操作类型（'SPEND'|'RECEIVE'|'ALL'）。

- `/v2/receive/block_notification` : 阻止通知 [POST] 
    * callback : 添加与查询匹配的块时要通知的回调URL。
    * key : API密钥。
    * onNotification : 请求通知行为（'KEEP'|'DELETE）。
    * confs : 可选（默认值1）。在发送通知之前块应该具有的确认数。
    * height : 可选（默认当前链高+ 1）。应发送通知的高度。 

- `/v2/receive/checkgap` : 检查 xPub 地址间隙 [GET]
     * xpub : xPub 值
     * key : API密钥

- `/v2/receive/callback_log` : 回调日志 [GET] {调试未付款}

## Blockchain Wallet Service (Blockchain 钱包服务)

> Blockchain 钱包用户的简单API，用于发送和接收比特币付款。

前提 : 启动本地 `Blockchain Wallet Service`，BaseURL : http://localhost:3000

- `/api/v2/create` : 创建钱包 [GET | POST]

- `/merchant/$guid/payment` : 支付

- `/merchant/$guid/sendmany` : 发送多笔交易

- `/merchant/$guid/balance` : 查询钱包余额

- `/merchant/$guid/list` : 查询地址列表

- `/merchant/$guid/address_balance` : 查询单地址余额

- `/merchant/$guid/new_address` : 生成一个新地址

- `/merchant/$guid/archive_address` : 归档一个地址

- `/merchant/$guid/unarchive_address` : 解档一个地址

## Transactions & Blocks Data (交易数据 & 区块数据)

### Blockchain Data API (Blockchain 数据)

> 提取JSON格式的区块和交易信息。您在本网站上看到的几乎所有数据都可以使用JSON格式。

- `/rawblock/$block_hash` : 单一区块

- `/rawtx/$tx_hash` : 单一交易

- `/charts/$chart-type?format=json` : 图标数据

- `/block-height/$block_height?format=json` : 区块高度

- `/rawaddr/$bitcoin_address` : 单一地址

- `/multiaddr?active=$address|$address` : 多地址

- `/unspent?active=$address` : 查询 BTC 地址包含的 UXTO

- `/balance?active=$address` : 查询 BTC 地址的余额

- `/latestblock` : 最新区块

- `/unconfirmed-transactions?format=json` : 未确认交易

- `/blocks/$time_in_milliseconds?format=json` : 区块

- `/blocks/$pool_name?format=json` : 特定 pool 区块

### Simple Query API (简单查询)

> 为查询区块链数据的简单纯文本 API。 

### WebSocket

> 低延迟流套接字通道提供了新的区块和交易数据。订阅新区块、交易记录、某个地址和接收JSON描述某个事件发生时的交易或区块的消息

URL : `wss://ws.blockchain.info/inv`

## Market Data (市场数据)

### Exchange Rates (兑换率)

> 主要比特币交易所上显示的货币交易数据。

- `ticker` : 查询主流货币转换 BTC 的价格
- `/tobtc` : 指定货币转换为 BTC
    * currency : 货币代码(USD、CNY...)
    * value : 转换的值

### Charts & Statistics (图表 & 统计数字)

> JSON 信息包含图表的数据和统计页。

- `/charts/$chartName` : 图标

- `/stats` : 统计

- `/pools` : 矿池信息
    * timespan : 时间 (默认: 4 day 最大: 10 day)