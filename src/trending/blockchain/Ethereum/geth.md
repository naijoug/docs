## Install

``` shell
$ brew tap ethereum/ethereum
$ brew install ethereum      # 安装 go-ethereum
```

## Usage 

``` shell
# geth [options] command [command options] [arguments...]
#   > [options] 选项参数
#       --datadir : 指定数据目录
#       --networkid : 网络唯一 ID
#       --testnet : Ropsten 测试网络
#       --rinkeby : Rinkeby 测试网络
#   > command   命令
```

``` shell 
$ geth help
# geth init 初始化区块链
#   --datadir   指定数据目录  
$ geth init genesis.json --datadir data
# geth console  
$ geth console --datadir data --networkid 110
# geth 启动以太坊主网 (Mainnet)
$ geth --rpc --rpcapi web3,eth,net,db,personal --rpcaddr 0.0.0.0 --rpcport 8545
$ geth attach rpc:http://localhost:8545
$ geth account new  # 创建新账户
$ geth --testnet account import <(echo C9B7B0F06D5D23722C0057E109D83BA5137ABB867A8F26B0BE9996392AFAE394)
# geth --dev 启动本地测试链
$ geth --dev --datadir localnet console 2>> localnet/localnet.log
#   > 在当前 localnet 目录启动本地测试链，开启 cosole 模式，并输出日志到 localnet.log 文件
```

``` genesis.json
{
  "config": {
        "chainId": 10, 
        "homesteadBlock": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
  "alloc"      : {},
  "coinbase"   : "0x0000000000000000000000000000000000000000",
  "difficulty" : "0x20000",
  "extraData"  : "",
  "gasLimit"   : "0x2fefd8",
  "nonce"      : "0x0000000000000042",
  "mixhash"    : "0x0000000000000000000000000000000000000000000000000000000000000000",
  "parentHash" : "0x0000000000000000000000000000000000000000000000000000000000000000",
  "timestamp"  : "0x00"
}
```

## JavaScript Console

``` shell
# eth   区块链操作
> eth   # eth 查看状态
> eth.syncing       # 查看同步状态
> eth.blockNumber   # 查看最新区块高度
> eth.getBlock(66)  # 查询区块
> eth.getTransaction('0xeb1d491ea5f846e558bd45ddc8b9b91cfe05ad0661bd7e8b5172954b44ffe01d') # 查询交易
> eth.getBalance(eth.accounts[0])   # 查询第一个用户余额 (单位: wei)
> eth.accounts      # 查看 keystore 中用户
> eth.coinbase      # coinbase 账户 (默认第一个)
> eth.setEtherbase(eth.account[1])  # 设置 coinbase 账户为其它账户
> eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[1], value: web3.toWei(10, 'ether')})  # 转账

# net   p2p 网络状态

# admin 管理节点

# personal  账户管理
> personal.newAccount('test')   # 新建密码为 test 的账户
> personal.unlockAccount('acount_xxx', 'password_xxx')  # 解锁账户

> txpool 交易缓存池
> txpool.status # 查看交易缓存池状态

# miner 挖矿管理
> miner.start(10)   # 开始挖矿
> miner.stop()      # 停止挖矿
> miner.start(1); admin.sleepBlocks(1); miner.stop(); # 挖到一个区块停止挖矿

# web3 
> web3.fromWei(eth.getBalance(eth.accounts[0]), 'ether') # wei 转化为 ether (以太币)
> web3.toWei(10, 'ether')   # ether -> wei

# 部署合约
# 拷贝 Remix 中的 WEB3DEPLOY 编译后的合约代码进行部署
```