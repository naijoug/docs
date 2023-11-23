## Reference

- [developers.eos.io](https://developers.eos.io/)
- [EOS 区块链开发指南](http://www.eosdata.io/)
- [麒麟 EOS 测试网社区](http://knowledge.cryptokylin.io/)
- [EOS 中文社区](https://eosfans.io/)
- [EOS WiKi中文版](http://eoswiki.readthedocs.io/zh_CN/latest/)
- [EOS 官方文档中文版](https://eos.readthedocs.io/zh_CN/latest/)
- [eos-java-rpc-wrapper](https://github.com/EOSEssentials/eos-java-rpc-wrapper)

- [EOS开发文档](https://github.com/eoshackathon/eos_dapp_development_cn)
- [玩转 EOS](https://bihu.com/article/761325)
- [EOS开发系列目录](https://bihu.com/article/293974)
- [区块链3.0：拥抱EOS](http://www.cnblogs.com/Evsward/p/eos-intro.html)
- [EOS1.1版本新特性介绍](https://www.cnblogs.com/Evsward/p/9330057.html)

- [EOS多节点组网：商业场景分析以及节点启动时序](https://www.cnblogs.com/Evsward/p/eos-boot.html#undefined)
- [EOS多主机多节点环境配置](https://www.cnblogs.com/hbright/p/9259456.html)
- [EOS源码解析 使用require_recipient来触发合约动作](https://eos.live/detail/11530)
- [EOS 货币标量和单位制](https://www.jianshu.com/p/9a82009b5134)

## Net

| 网路 | 区块浏览器 | 链 ID
| --- | --- | ---
| [EOS-Mainnet][main-00] | [Monitor][main-01] | `aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906`
| [EOS-Jungle-Testnet][jungle-00] | [Monitor][jungle-01] | 
| [EOS-Party-Testnet][party-00] | [Monitor][party-01]
| [CryptoKylin-Testnet][kylin-00] | [Monitor][kylin-01] `5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191`

[main-00]:   https://github.com/EOS-Mainnet/eos
[main-01]:   http://eosnetworkmonitor.io
[jungle-00]: https://github.com/CryptoLions/EOS-Jungle-Testnet
[jungle-01]: http://dev.cryptolions.io
[party-00]:  https://github.com/eostea/EOS-Party-Testnet
[party-01]:  https://party.eosmonitor.io
[kylin-00]:  https://github.com/cryptokylin/CryptoKylin-Testnet
[kylin-01]:  https://www.cryptokylin.io/

- Kylin Faucet
    * 免费账户 : http://faucet.cryptokylin.io/create_account?new_account_name
    * 获得免费 Token : http://faucet.cryptokylin.io/get_token?your_account_name

## Block

| Producer | Scope | Time | Explain
| --- | --- | --- | ---
| eosio | 0 ~ 12150 | 2018.06.08-08:08:08  | 
| genesisblock | 12151 ~ 1000000 | 2018.06.09-14:14:29 | 主网启动
| 21 个超级节点 | 1000000 ~  |  | 投票超过 15%
 
### Website

| 网址 | 说明 
| --- | ---
| [eostracker.io][web-01] | EOS 区块浏览器工具
| [eosmonitor][web-02] | EOSTEA 提供的 EOS 区块浏览器工具
| [eosflare][web-03] | eosflare.io 节点提供的区块浏览器工具
| [EOS Meta][web-04] | EOSTEA 提供
| [eospark][web-05] | EOSpark 提供
| [eos.host][web-06] | 前 30 区块生产者排行榜 
| [EOS Seed List][web-07] | EOS 种子节点列表
| [EOS Favor][web-08] | EOS 互助社区
| [IMEOS.ONE][web-09] | EOS 信息整理网站
| [bp.json 验证器][web-10] | 检查出块节点小工具

[web-01]: https://eostracker.io
[web-02]: https://eosmonitor.io
[web-03]: https://eosflare.io
[web-04]: https://eosmeta.io
[web-05]: https://eospark.com
[web-06]: https://eos.host
[web-07]: https://eosnodes.privex.io
[web-08]: http://eosfavor.com
[web-09]: https://www.imeos.one
[web-10]: https://validate.eosnation.io

## Develop

- 开发环境
    * 编程语言 : C++
    * Web 编码方式 : WebAssembly (Web 汇编)

- WebAssembly
    * [WebAssembly docs](https://developer.mozilla.org/zh-CN/docs/WebAssembly)
    * [WebAssembly 实践：如何写代码](https://segmentfault.com/a/1190000008402872)
    * [WebAssembly 现状和实况](https://www.ibm.com/developerworks/cn/web/wa-lo-webassembly-status-and-reality/index.html)
    
- EOSIO
    * nodeos - server-side blockchain node component (服务端区块链节点组件)
    * cleos - command line interface to interact with the blockchain and to manage wallets (与区块链交互和管理钱包的命令行接口)
    * keosd - component that manages EOSIO wallets (管理 EOSIO 钱包组件)   

- Multi-Index API : EOS 提供的访问数据库的 C++ 接口，使智能合约能够读取和修改

## ABI (Application Binary Interface) 
> 一个 JSON 格式的描述文件，描述了二进制如何转为为用户的 Action

- [support secondary key in get table without the need of modifying abi file](https://github.com/EOSIO/eos/pull/4053)

``` json xxx.abi
{
    "____comment": "comment...",
    "types": [],
    "structs": [],
    "actions": [],
    "tables": [],
    "ricardian_clauses": [],
    "abi_extensions": []
}
``` 

- `____commit` : 注释
- `types` : 使用的的类型
- `structs` : 合约及引用文件中定义的结构体、类、函数等
- `actions` : EOSIO_ABI() 中的函数就是一个 Action
- `tables` : 数据库中的表，需要指定主键(primary_key)
- `ricardian_clauses` : 
- `abi_extensions` : 

## Install

- [EOSnetworkMonitor EOS-Mainnet](https://github.com/CryptoLions/EOS-MainNet)
> EOS 主网安装脚本

- Local

``` bash
# 1. 下载 eos 源码，以及依赖
$ git clone https://github.com/EOSIO/eos --recursive 
# 2. 进入 eos 代码目录，运行编译脚本
$ cd eos
$ ./eosio_build.sh
#   build 指定版本
$ git checkout v1.1.1  
$ git submodule update --init --recursive # 下载依赖
$ ./eosio_build.sh -s EOS
# 3. 将二进制程序安装到 /usr/local/bin
$ cd build
$ sudo make install
```

- Mainnet

``` bash
# 1. 下载 Mainnet eos 源码和依赖
$ git clone https://github.com/EOS-Mainnet/eos --recursive
# 2. 切换到主网分支 mainnet-x.x.x
$ git tag # 查看分支
$ git checkout mainnet-1.1.1 # 切换到主网分支
# 3. 编译
$ cd eos & ./eosio_build.sh
# 4. 安装
$ cd build & sudo make install
# 5. 配置 config.ini
#   chain-state-db-size-mb : 10240 # db 大小
#   http-server-address : 0.0.0.0:8888 # http 节点服务， 0.0.0.0 使得外网IP，127.0.0.1 仅此ip可用 
#   p2p-peer-address : xxx # p2p 节点，用于同步节点
# 6. 初次启动节点，带有 --genesis-json
#       mainnet-genesis.json : mainnet 分支下有改文件
$ nodeos --genesis-json mainnet-genesis.json --config-dir path/to/config --data-dir path/to/data
# 7. 关闭后，再次启动节点
$ nodeos --config-dir path/to/config --data-dir path/to/data
```

- Docker

``` bash
$ docker pull eosio/eos-dev

$ docker run --rm --name eosio -d -p 8888:8888 -p 9876:9876 -v /tmp/work:/work -v /tmp/eosio/data:/mnt/dev/data -v /tmp/eosio/config:/mnt/dev/config eosio/eos-dev  /bin/bash -c "nodeos -e -p eosio --plugin eosio::producer_plugin --plugin eosio::history_plugin --plugin eosio::chain_api_plugin --plugin eosio::history_api_plugin --plugin eosio::http_plugin -d /mnt/dev/data --config-dir /mnt/dev/config --http-server-address=0.0.0.0:8888 --access-control-allow-origin=* --contracts-console --http-validate-host=false"

$ docker logs --tail 10 eosio

$ alias cleos='docker exec -it eosio /opt/eosio/bin/cleos -u http://localhost:8888'

$ docker stop eosio
``` 

## nodeos (node eos)

``` shell
# 进入 nodeos 目录
$ cd build/programs/nodeos
# 1. 参数启动 nodeos
#   -e : enable-stale-production = true
#   -p eosio : producer-name = eosio
#   --plugin : 启动插件
#   --config-dir : 自定义配置文件 config.ini 目录
#   --data-dir : 自定义数据存放目录
#   --replay-blockchain : 
$ nodeos -e -p eosio --plugin eosio::chain_api_plugin --plugin eosio::history_api_plugin
# 2. 默认配置文件路径启动
# config : macOS: ~/Library/Application Support/eosio/nodeos/config
#          Linux: ~/.local/share/eosio/nodeos/config
# data : macOS: ~/Library/Application Support/eosio/nodeos/data
#        Linux: ~/.local/share/eosio/nodeos/data
$ nodeos 
# 3. 自定义配置文件路径启动
$ nodeos --config-dir path/to/config --data-dir path/to/data
###### nodeos 其它命令 ######
$ nodeos --print-genesis-json # 从 blocks.log 读取创世区块信息打印到 console
$ nodeos --extract-genesis-json genesis.json # 从 block.log 读取创世区块信息写入到 genesis.json 文件
$ nodeos --delete-all-block # 删除旧的区块数据重新启动
```

## keosd (key eos)

``` shell
# 进入 keosd 目录
$ cd build/programs/keosd
# 启动 keosd
#   默认目录启动 : ~/eosio-wallet
$ keosd --http-server-address 127.0.0.1:8900
#   自定义目录启动
$ keosd --config-dir ~/path/to/config --data-dir ~/path/to/data
```

## eosiocpp

``` shell
# 新建名为 hello 的合约
$ eosiocpp -n hello 
# 编译 wast
$ eosiocpp -o hello.wast hello.cpp
# 编译 abi
$ eosiocpp -g hello.abi hello.cpp
```

## Main Plugin

- main (主函数, 配置 nodeos 版本 和 eosio root 目录)
- chain_plugin (区块链管理插件)
- wallet_plugin (钱包管理插件)
- http_plugin (Web 服务插件)
- net_plugin (网络插件)
- producer_plugin (区块生成者插件)

## API Plugin

- wallet_api_plugin (钱包 API 插件)
    * /v1/wallet/create
    * /v1/wallet/create_key
    * /v1/wallet/get_public_keys
    * /v1/wallet/import_key
    * /v1/wallet/list_keys
    * /v1/wallet/list_wallets
    * /v1/wallet/lock
    * /v1/wallet/lock_all
    * /v1/wallet/open
    * /v1/wallet/set_timeout
    * /v1/wallet/sign_digest
    * /v1/wallet/sign_transaction
    * /v1/wallet/unlock
    
- chain_api_plugin (区块链 API 插件)
    * /v1/chain/abi_bin_to_json
    * /v1/chain/abi_json_to_bin
    * /v1/chain/get_abi
    * /v1/chain/get_account
    * /v1/chain/get_block
    * /v1/chain/get_block_header_state
    * /v1/chain/get_code
    * /v1/chain/get_currency_balance
    * /v1/chain/get_currency_stats
    * /v1/chain/get_info  
    * /v1/chain/get_producers
    * /v1/chain/get_required_keys
    * /v1/chain/get_table_rows
    * /v1/chain/push_block
    * /v1/chain/push_transaction
    * /v1/chain/push_transactions
    
- history_api_plugin (历史 API 插件)
    * /v1/history/get_actions
    * /v1/history/get_controlled_accounts
    * /v1/history/get_key_accounts
    * /v1/history/get_transaction

## Error

### Build Error

- `Could not find a package configuration file provided by "LLVM"` : [43](https://github.com/EOSIO/eos/issues/43)
    > Solution : `export LLVM_DIR=/usr/local/Cellar/llvm/4.0.0_1/lib/cmake`

- `Failed to find Gettext libintl (missing: Intl_INCLUDE_DIR)` : [2028](https://github.com/EOSIO/eos/issues/2028)
    > Solution : `brew unlink gettext && brew link --force gettext`

### Startup Error

- `db.revision() >= head->block_num: fork database is inconsistent with shared memory` : [3140](https://github.com/EOSIO/eos/issues/3140)
    > Solution : `nodeos --replay-blockchain`

- `Genesis state can only be set on a fresh blockchain` : [3755](https://github.com/EOSIO/eos/issues/3755)
    > Solution : 仅在第一次启动时加上 `--genesis-json` 参数，之后启动不需要加

- `database dirty flag set (likely due to unclean shutdown): replay required` : [4742](https://github.com/EOSIO/eos/issues/4742)
    > Solution : 是因为没有正常关掉服务引起的 mongodb 数据库错误。删除旧数据文件，使用参数 `nodeos --replay-blockchain --hard-replay-blockchain` 重新启动

- `std::exception::what: unrecognised option 'wallet-dir'` : [5742](https://github.com/EOSIO/eos/issues/5742)
    > Solution : 删除 config.ini 中的无法识别的配置

### Command Error

- `Error 3080004: transaction exceeded the current CPU usage limit imposed on the transaction`
    > Solution : CPU 资源不足，需要抵押 EOS 换取 CPU 资源

- `Error 3081001: transaction reached the deadline set due to leeway on account CPU limits`
    > Solution : CPU 资源不足，需要抵押 EOS 换取 CPU 资源

- `Error 3040003: transaction should have at least one required authority`
    > Solution : 需要授权