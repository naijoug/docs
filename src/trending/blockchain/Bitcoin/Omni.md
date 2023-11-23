## Reference

- [Omni][ref-01] : Omni Layer Github
- [Omnilayer][ref-02] : Omni Layer 官网 
- [Omni Core wiki][ref-03]: Omni Core Wiki
- [omniexplorer][ref-04] : Omni 区块浏览器
- [Omni研究系列【USDT】][ref-05]

[ref-01]: https://github.com/OmniLayer
[ref-02]: http://www.omnilayer.org/
[ref-03]: https://github.com/OmniLayer/omnicore/wiki
[ref-04]: https://omniexplorer.info
[ref-05]: https://steemit.com/usdt/@chaimyu/omni-usdt

## Install

``` shell
# 下载源码
$ git clone https://github.com/OmniLayer/omnicore.git
# 下载依赖 : 同 bitcoin 项目一样，之前编译过 bitcoin 项目不需要重复下载
# 编译
$ ./autogen.sh
$ ./configure
$ ./configure -without-gui # 不编译 GUI 界面的 Qt 客户端
$ make
$ make install
```

> macOS make 编译报错

- `miner.h` & `txmempool.h` 中函数报错
    > Solution : 报错函数尾部添加 `const`

## Usage

``` shell
$ omnicored # 启动主网
$ omnicored -conf=PATH/TO/bitcon.conf -datadir=/PATH/TO/DATADIR & # 配置文件启动
# Options
#       -conf : 配置文件
#       -datadir : 数据目录
#       -reindex : 重建索引
#       -txindex : 是否全交易索引(默认: 0, 1: 全交易索引)
```

``` bitcoin.conf
server=1
rpcuser=omnicorerpc
rpcpassword=5hMTZI9iBGFqKxsWfOUF
rpcallowip=127.0.0.1
rpcport=8332
txindex=1
datacarriersize=80
logtimestamps=1
omnidebug=tally
omnidebug=packets
omnidebug=pending
```