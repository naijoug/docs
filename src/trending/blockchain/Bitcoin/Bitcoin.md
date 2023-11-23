## Reference

- [bitcoinbook][ref-01] : 精通比特币 Github
- [精通比特币 第二版][ref-02] : 中文翻译 Github
- [比特币源码剖析][ref-03] : 
- [BitcoinCore][web-01] : 比特币核心开发团队
- [BitAddress][web-02] : 开源 JavaScript 比特币钱包工具

[ref-01]: https://github.com/bitcoinbook/bitcoinbook
[ref-02]: https://github.com/tianmingyun/MasterBitcoin2CN
[ref-03]: https://mistydew.github.io/2018/05/19/bitcoin-source-anatomy-00
[web-01]: https://bitcoincore.org/
[web-02]: https://www.bitaddress.org/

## Network

| 网络 | 说明 |默认端口 | 区块浏览器
| --- | --- | ---  | ---
| mainnet | 主网 | 8332 | [主网区块浏览器][main-01]
| testnet | 公共测试网 | 18332 | [Test 区块浏览器][test-01] [Test BTC 水龙头][test-02]
| regtest | 本地回归测试网 | 18443 | 

[main-01]: https://www.blockchain.com/zh-cn/explorer
[test-01]: https://testnet.blockchain.info
[test-02]: https://testnet.manu.backend.hamburg/faucet

## Wallet

- Base58Check 编码前缀

| 种类 | Hex (16进制) | Base58Check
| --- | --- | ---
| 比特币地址 (Bitcoin Address) | 0x00 | 1
| P2SH地址 (Pay-to-Script-Hash Address) | 0x05 | 3 
| 测试网络-比特币地址 (Bitcoin Testnet Address) | 0x6F | m / n
| 私钥 WIF (Private Key WIF) | 0x80 | 5 (非压缩) K / L (压缩)
| 加密私钥 (BIP38 Encrypted Private Key) | 0x0142 | 6P
| 扩展公钥 (BIP32 Extended Public Key) | 0x0488B21E | xpub


- 私钥 -> 公钥 -> BTC 地址
    > `PVT_KEY (私钥) ---[ECC 椭圆曲线相乘]---> PUB_KEY (公钥) ---[哈希函数]---> BTC_ADDR (BTC 地址)`

- 非压缩私钥 -> WIF
    > `PVT_KEY (私钥 256位 == 64 HEX) ---[CheckBase58]---> WIF (前缀: 5)` 

- 压缩私钥 -> 压缩 WIF
    > `PVT_KEY (私钥 256位 == 64 HEX) + 0x01 = 66 HEX ---[CheckBase58]---> WIF (前缀: K | L)` 

- 非压缩公钥 ((2 + 64 + 64) * 4 = 520)
    > `0x04 + PUB_X (64 HEX) + PUB_Y (64 HEX)`

- 压缩公钥 ((2 + 64) * 4 = 264)
    > PUB_Y 为偶数 : `0x02 + PUB_X (64 HEX) `
    > PUB_Y 为奇数 : `0x03 + PUB_Y (64 HEX)`


## 钱包分类

- 非确定性 (随机) 钱包

- 确定性 (种子) 钱包 
    
    * 助记码: 用作确定性钱包的种子的随机数
    
    * 助记码生成过程 **[BIP39]**
        > `128~256 位随机序列 (熵) ---[SHA256]---> (128 位熵 + 哈希前 4 位) / 11 ---[取 2048 个单词]---> 12 个助记词 ---[PBKDF2]---> 生成 512 位种子`

- 分层确定性钱包 (HD Wallet : Hierarchical Deterministic Wallet) **[BIP44]**
    
    * 根种子 -> 公钥
        > `根种子 (128、256 或 512) ---[HMAC­SHA512]---> 主私钥 (左 256 位) ---EEC--->主公钥 (264 位)`
    
    * 可扩展秘钥 (extended key) = 私钥 或 公钥 (256 位) + 链码 (256 位)
    
    * 子私钥生成
        > `父私钥 (左 256 位) ---ECC---> 父公钥 (265 位) + 父链码 (右 256 位) + 序号 (32 位) ---[HMAC­SHA512]---> 子私钥 (左 256 位)`
    
    | 币种 | HD 路径 
    | --- | ---
    | BTC | m/44'/0'/0'/0
    | BTC (testnet) | m/44'/1'/0'/0
    | LTC | m/44'/2'/0'/0
    | ETH | m/44'/60'/0'/0
    | EOS | m/44'/194'/0'/0
    
## Satoshi

> 聪，最小的比特币交易单位：0.00000001 BTC (亿分之一比特币)。

1 BTC = 1,000 mBTC (毫比特币)
1 BTC = 1,000,000 μBTC (微比特币)
1 BTC = 100,000,000 Satoshis (聪比特币)
1 mBTC = 1000 μBTC
1 mBTC = 100,000 Satoshis
1 μBTC = 100 Satoshis

## Install

``` shell
# 下载 Bitcoin 代码
$ git clone https://github.com/bitcoin/bitcoin.git
# brew 下载依赖
$ brew install automake berkeley-db4 libtool boost miniupnpc openssl pkg-config protobuf python qt libevent qrencode
$ brew install librsvg          # 用于 make deploy 打包 dmg
$ ./contrib/install_db4.sh .    # 安装 Berkeley DB
# 编译
#   创建一系列的自动配置脚本(确保安装一些必要的库)
$ ./autogen.sh                  
#   配置构建过程，生成 Makefile 文件
#   --help : 查看配置选项
#   Options 
#       -with-gui : 带有 Qt 图形客户端
#       -without-gui : 不带有 Qt 图形客户端
#       
$ ./configure -without-gui         
$ sudo make                     # 编译
$ sudo make install             # 安装到 PATH 路径
```

## bitcoind

``` shell
$ bitcoind  # 启动主网
$ bitcoind --daemon             # 后台启动主网 (8332)
$ bitcoind -testnet --daemon    # 后台启动测试网
$ bitcoind -regtest --daemon    # 后台启动回归测试网
$ bitcoin-cli stop              # 关闭主网
$ bitcoin-cli -testnet stop     # 关闭测试网
$ bitcoind -conf PATH/TO/bitcoin.conf -datadir=PATH/TO/Datas # 配置文件启动
# 默认配置文件路径 :
#   macOS : 
#   ubuntu : 
```

``` bitcoin.conf
# testnet : 使用测试网路
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
```

## Bitcoin Core

``` shell
Bitcoin Core 版本 v0.16.1 (64 位)
使用：
  bitcoin-qt [命令行选项]                     

选项：


-?
打印出这段帮助信息并退出 
-version
打印版本信息并退出 
-alertnotify=<cmd>
当收到相关提醒或者我们看到一个长分叉时执行命令（%s 将替换为消息） 
-blocknotify=<cmd>
当最佳数据块变化时执行命令 (命令行中的 %s 会被替换成数据块哈希值) 
-assumevalid=<hex>
假设已经在区块链中的区块以及其先前的区块都合法，因此对它们略过脚本验证（0表示一律要验证，默认：0000000000000000005214481d2d96f898e3d5416e43359c145944a909d242e0，测试网络：0000000002e9e7b00e1f6dc5123a04aad68dd0f0968d8c7aa45f6640795c37b1） 
-conf=<file>
指定配置文件 (默认: bitcoin.conf) 
-datadir=<dir>
指定数据目录 
-dbcache=<n>
设置以MB为单位的数据库缓存大小(4 到 16384, 默认值: 450) 
-loadblock=<file>
启动时从其他来源的  blk000??.dat 文件导入区块 
-debuglogfile=<file>
指定调试日志文件：可以用绝对路径，也可以用相对于数据目录的相对路径（默认：debug.log） 
-maxorphantx=<n>
内存中最多保留 <n> 笔孤立的交易 (默认: 100) 
-maxmempool=<n>
保持交易内存池大小低于<n>MB（默认：300） 
-mempoolexpiry=<n>
不要让交易留在内存池中超过 <n> 个小时 (默认值: 336) 
-persistmempool
是否在退出时保存内存池，并在启动时重新载入(默认值: 1) 
-blockreconstructionextratxn=<n>
为了将摘要区块完整重组而额外保留在內存中的交易数量（默认：100） 
-par=<n>
设置脚本验证的程序 (-2 到 16, 0 = 自动, <0 = 保留自由的核心, 默认值: 0) 
-pid=<file>
指定 pid 文件 (默认: bitcoind.pid) 
-prune=<n>
修剪（删除）掉老旧区块以降低需要的储存空间。这样会增加一个RPC指令pruneblockchain，可以使用它来删除指定的区块；也可以指定目标储存空间大小，以启用对老旧内存块的自动修剪功能。这个模式跟-txindex和-rescan参数不兼容。警告：还原回不修剪模式会需要重新下载整个区块链。（默认：0表示不修剪内存块，1表示允许使用RPC指令做修剪，>550的值表示为区块数据的目标大小，单位是百万字节，MiB） 
-reindex-chainstate
从当前索引的区块中重建链状态 
-reindex
从硬盘里的区块文件blk*.dat重建区块链状态和区块索引 
-sysperms
创建系统默认权限的文件，而不是 umask 077 (只在关闭钱包功能时有效) 
-txindex
维护一份完整的交易索引, 用于 getrawtransaction RPC调用 (默认: 0) 


连接选项：


-addnode=<ip>
添加节点并与其保持连接（详情请见RPC命令addnode的说明） 
-banscore=<n>
断开 非礼节点的阀值 (默认: 100) 
-bantime=<n>
限制 非礼节点 若干秒内不能连接 (默认: 86400) 
-bind=<addr>
绑定指定的IP地址开始监听。IPv6地址请使用[host]:port 格式 
-connect=<ip>
只连接到指定的节点。用-connect=0可以关闭自动连接。（应用于这个节点的规则与-addnode相同） 
-discover
发现自己的 IP 地址（默认: 监听并且无 -externalip 或 -proxy 时为 1） 
-dns
使用 -addnode, -seednode 和 -connect 选项时允许查询DNS (默认: 1) 
-dnsseed
是否允许在节点地址数量不足时，使用DNS查询来搜寻节点（默认：当没用-connect时为1） 
-externalip=<ip>
指定您的公共地址 
-forcednsseed
始终通过 DNS 查询节点地址 (默认: 0) 
-listen
接受来自外部的连接 (缺省: 如果不带 -proxy or -connect 参数设置为1) 
-listenonion
自动建立Tor隐藏服务 (默认:1) 
-maxconnections=<n>
保留最多 <n> 条节点连接 (默认: 125) 
-maxreceivebuffer=<n>
每个连接的最大接收缓存，<n>*1000 字节 (默认: 5000) 
-maxsendbuffer=<n>
每个连接的最大发送缓存，<n>*1000 字节 (默认: 1000) 
-maxtimeadjustment
跟其他节点的时间差最高可接受的中位数值。本机所认为的时间可能会被其他节点影响，往前或往后在这个值之内。（默认：4200秒） 
-onion=<ip:port>
通过 Tor 隐藏服务连接节点时使用不同的 SOCKS5 代理 (默认: -proxy) 
-onlynet=<net>
只连接 <net>网络中的节点 (ipv4, ipv6 或 onion) 
-permitbaremultisig
是否转发 非P2SH格式的多签名交易 (默认: 1) 
-peerbloomfilters
支持用 Bloom 过滤器来过滤区块和交易(默认值: 1) 
-port=<port>
使用端口 <port> 监听连接 (默认: 8333 ; testnet: 18333) 
-proxy=<ip:port>
通过 SOCKS5 代理连接 
-proxyrandomize
为每个代理连接随机化凭据。这将启用 Tor 流隔离 (默认: 1) 
-seednode=<ip>
连接一个节点并获取对端地址，然后断开连接 
-timeout=<n>
指定连接超时毫秒数 (最小: 1, 默认: 5000) 
-torcontrol=<ip>:<port>
开启监听 onion 连接时的 Tor 控制端口号 (默认值: 127.0.0.1:9051) 
-torpassword=<pass>
Tor 控制端口密码 (默认值: 空白) 
-upnp
使用UPnp映射监听端口 (默认: 0) 
-whitebind=<addr>
绑定到指定地址和连接的白名单节点。 IPv6使用 [主机]:端口 格式 
-whitelist=<IP address or network>
把来自指定地址（例如：1.2.3.4）或CIDR格式网段（例如：1.2.3.0/24）的节点放进白名单。这个选项可以设定多次。 白名单节点不能被DoS banned ，且转发所有来自他们的交易(即便这些交易已经存在于mempool中)，常用于网关  
-maxuploadtarget=<n>
尝试保持上传带宽低于（MiB/24h），0=无限制（默认：0） 


钱包选项:


-addresstype
What type of addresses to use ("legacy", "p2sh-segwit", or "bech32", default: "p2sh-segwit") 
-changetype
What type of change to use ("legacy", "p2sh-segwit", or "bech32"). Default is same as -addresstype, except when -addresstype=p2sh-segwit a native segwit output is used when sending to a native segwit address) 
-disablewallet
不要加载钱包和禁用钱包的 RPC 调用 
-keypool=<n>
设置私钥池大小为 <n> (默认：1000) 
-fallbackfee=<amt>
当费用估计数据(default: BTC)不足时将会启用的费率 (in 0.0002/kB) 
-discardfee=<amt>
容许自动免找零成为手续费的交易手续费率（单位：BTC/kB，默认：0.0001）。注意：如果在该费率下，找零的零钱会成为零散钱，则自动弃掉成为手续费。但弃掉的零钱费率永远不会大于零散钱的转发费率，金额也不会大于最长预估确认时间所需的手续费 
-mintxfee=<amt>
当产生交易时，如果每千字节 (kB) 的手续费比这个值 (单位是 BTC) 低，就视为没支付手续费 (默认值: 0.00001) 
-paytxfee=<amt>
为付款交易添加交易费 (BTC/kB) (默认: 0.00) 
-rescan
重新扫描区块链以查找遗漏的钱包交易 
-salvagewallet
启动时尝试从已损坏的钱包文件中恢复私钥 
-spendzeroconfchange
付款时允许使用未确认的零钱 (默认: 1) 
-txconfirmtarget=<n>
如果未设置交易费用，自动添加足够的交易费以确保交易在平均n个数据块内被确认 (默认: 6) 
-walletrbf
送出允许提高手续费（full-RBF）的交易（仅适用于RPC指令，默认：0） 
-upgradewallet
程序启动时升级钱包到最新格式 
-wallet=<file>
指定钱包文件（数据目录内） (默认: wallet.dat) 
-walletbroadcast
钱包广播事务处理 (默认: 1) 
-walletdir=<dir>
指定用来放钱包文件的目录（默认：如果存在的话就用<datadir>/wallets，否则为<datadir>） 
-walletnotify=<cmd>
当最佳区块变化时执行命令 (命令行中的 %s 会被替换成区块哈希值) 
-zapwallettxes=<mode>
删除钱包的所有交易记录，且只有用 -rescan参数启动客户端才能重新取回交易记录  (1 = 保留 tx meta data , 如 account owner 和 payment request information, 2 = 不保留 tx meta data) 


ZeroMQ 通知选项：


-zmqpubhashblock=<address>
允许在<address>广播哈希区块 
-zmqpubhashtx=<address>
允许在<address>广播哈希交易 
-zmqpubrawblock=<address>
允许在<address>广播原始区块 
-zmqpubrawtx=<address>
允许在<address>广播原始交易 


调试/测试选项：


-uacomment=<cmt>
为用户代理字符串附加说明 
-debug=<category>
输出调试信息 (默认: 0, 提供 <category> 是可选项). 如果<category>未提供或<category> = 1，输出所有调试信息。 <category> 可能是： net, tor, mempool, http, bench, zmq, db, rpc, estimatefee, addrman, selectcoins, reindex, cmpctblock, rand, prune, proxy, mempoolrej, libevent, coindb, qt, leveldb. 
-debugexclude=<category>
排除某一类Debug信息。可以与 -debug=1 一起使用，以输出除了指定类别以外的Debug日志。 
-help-debug
显示所有调试选项 (用法: --帮助 -帮助调试) 
-logips
在调试输出中包含IP地址 (默认: 0) 
-logtimestamps
输出调试信息时，前面加上时间戳 (默认: 1) 
-maxtxfee=<amt>
最大的单次钱包或原始转账费用(BTC)，设置太低可能导致大尺寸交易失败(默认：0.10) 
-printtoconsole
跟踪/调试信息输出到控制台，不输出到 debug.log 文件 
-shrinkdebugfile
客户端启动时压缩debug.log文件(缺省：no-debug模式时为1) 


区块链选择选项:


-testnet
使用测试链 


节点中继选项:


-bytespersigop
转发和采矿时，交易数据中每个sigop的等效字节数（默认：20） 
-datacarrier
Relay and mine data carrier transactions (default: 1) 
-datacarriersize
Maximum size of data in data carrier transactions we relay and mine (default: 83) 
-mempoolreplacement
保证内存池中的交易更换(默认：1) 
-minrelaytxfee=<amt>
交易费(in BTC/kB)比这更小的在关联、挖掘和生成交易时将被视为零费交易 (默认: 0.00001) 
-whitelistrelay
即使在无关联交易(默认: 1)时也接受来自白名单同行的关联交易 
-whitelistforcerelay
强制转发从白名点节点收到的交易，即使它们违反了本机的转发准则（默认：1） 


数据块创建选项：


-blockmaxweight=<n>
设置BIP141最大区块权重 (默认: 3996000) 
-blockmintxfee=<amt>
设定生成区块时，所要包含交易每千字节的最低手续费（单位是BTC）。（默认：0.00001） 


RPC 服务器选项：


-server
接受命令行和 JSON-RPC 命令 
-rest
接受公共 REST 请求 (默认: 0) 
-rpcbind=<addr>[:port]
和指定的地址绑定以监听JSON-RPC连接。必须同时指定-rpcallowip这项设定才有作用。不一定要指定端口号，指定的话会覆盖掉-rpcport设定。IPv6请用[主机]：通信端口这种格式。这个选项可以设定多次。（默认：127.0.0.1和::1，也就是localhost。当有指定-rpcallowip时，预设值为0.0.0.0和::，也就是所有位址） 
-rpccookiefile=<loc>
认证Cookie的位置 (默认: data目录) 
-rpcuser=<user>
JSON-RPC 连接用户名 
-rpcpassword=<pw>
JSON-RPC 连接密码 
-rpcauth=<userpw>
JSON-RPC 连接要使用的用户名和散列密码。<userpw> 的格式是：<USERNAME>:<SALT>$<HASH>。在 share/rpcuser 目录下有一个示范的 python 脚本。之后客户端程序就可以用这对参数正常连接：rpcuser=<USERNAME>和rpcpassword=<PASSWORD>。这个选项可以被多次指定。 
-rpcport=<port>
使用 <port>端口监听 JSON-RPC 连接 (默认: 8332 ; testnet: 18332) 
-rpcallowip=<ip>
允许来自指定地址的 JSON-RPC 连接。 <ip>为单一IP (如: 1.2.3.4), 网络/掩码 (如: 1.2.3.4/255.255.255.0), 网络/CIDR (如:  1.2.3.4/24)。该选项可多次指定。 
-rpcserialversion
设定非冗余模式时，返回的交易原始数据或区块hex的序列化形式：无segwit为0，或是有segwit为1（默认：1） 
-rpcthreads=<n>
设置RPC服务线程数 (默认: 4) 


界面选项：


-choosedatadir
在启动时选择目录（默认0） 
-lang=<lang>
设置语言, 例如“zh-CN”（默认：系统语言） 
-min
启动时最小化 
-rootcertificates=<file>
设置付款请求的SSL根证书（默认：-系统-） 
-splash
显示启动画面（默认：1） 
-resetguisettings
重置图形界面所有的变更设置 
```


