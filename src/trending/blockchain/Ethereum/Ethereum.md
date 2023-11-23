## Reference

- [Ethereum](https://www.ethereum.org/) : 以太坊官网
- [EthFans](https://ethfans.org/) : 以太坊爱好者
- [Ethplorer](https://ethplorer.io/) : 以太坊代币浏览器
- [Ethersacn](https://etherscan.io/) : 以太坊区块浏览器
- [Etherchain](https://www.etherchain.org/) : 以太坊区块链浏览器
- [parity](https://github.com/paritytech/parity-ethereum) : 以太坊轻节点
- [infura](https://infura.io/) : 
- [MEW - vintage](https://vintage.myetherwallet.com)
- [ETH Gas Station](https://ethgasstation.info/) : 以太坊 gas 站点

## Wallet

- [MetaMask](https://github.com/MetaMask) : 
- [MyEtherWallet](https://www.myetherwallet.com) : 一个开源的生成以太坊钱包和发送交易的JavaScript客户端工具
- [MyCrypto](https://mycrypto.com) : 一个开源的以太坊钱包工具
- [Upchain](https://github.com/xilibi2003/Upchain-wallet) : 以太坊钱包 Android
- [ETHPM](https://www.ethpm.com/) : 以太坊智能合约包管理器

## Testnet

- [MultiFaucet](https://github.com/Anish-Agnihotri/MultiFaucet)
    > MultiFaucet drips ETH, tokens, and NFTs across many testnet networks, at once.
- [Ropsten](https://github.com/ethereum/ropsten) : 以太坊 PoW 测试网 - [MetaMask Faucet](https://faucet.metamask.io/)
- [Rinkeby](https://rinkeby.io/) : 以太坊官方 PoA 测试网 - [Faucet](https://faucet.rinkeby.io/)
- [Kovan](https://github.com/kovan-testnet/proposal) : Parity 提供的 PoA 测试网 - [Faucet](https://faucet.kovan.network/)
- [Goerli](https://github.com/goerli/testnet) - [Faucet](https://goerli-faucet.slock.it/)

## QA
- [Ethereum JSON RPC](https://github.com/ethereum/wiki/wiki/json-rpc)
- [以太坊 JSON RPC 手册](http://cw.hubwiz.com/card/c/ethereum-json-rpc-api/)

- [Solidity 语言](http://www.tryblockchain.org/)
- [Python以太坊区块链交互将数据存入数据库](https://segmentfault.com/a/1190000016273607#articleHeader4)
- [科普 | 释放阻塞的以太坊交易](https://ethfans.org/ajian1984/articles/releasing-stuck-ethereum-transactions)
- ERC20 & ERC23 Token
- [Transactions 和Internal Transactions的区别](https://dewone.zendesk.com/hc/zh-cn/articles/360005205873-Transactions-%E5%92%8CInternal-Transactions%E7%9A%84%E5%8C%BA%E5%88%AB)
- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874/listening-for-ethereum-smart-contract-events-in-java)
- [以太坊-web3j监听合约事件没有回调？](https://my.oschina.net/u/1189224/blog/1843831)

## ERC-20

- [EIP 20](https://eips.ethereum.org/EIPS/eip-20)
- [科普 | 理解ERC-20 token合约](https://ethfans.org/posts/understanding-erc-20-token-contracts)

- ERC-20 Token Standard

``` javascript
contract ERC20 {
    // Methods
    function name() public view returns (string)
    function symbol() public view returns (string)
    function decimals() public view returns (uint8)
    function totalSupply() public view returns (uint256)
    function balanceOf(address _owner) public view returns (uint256 balance)
    function transfer(address _to, uint256 _value) public returns (bool success)
    
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
    function approve(address _spender, uint256 _value) public returns (bool success)
    function allowance(address _owner, address _spender) public view returns (uint256 remaining)
    // Events 
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}
```

## web3j

- [web3j](https://github.com/web3j/web3j) : 以太坊 JSON-RPC Java 接口实现
- [web3j Docs](https://docs.web3j.io/)
- [web3j - cn](https://watermelon.gitbook.io/web3j/)
- [web3j官网中文版](https://juejin.im/entry/5b448c57f265da0f93138ccb) 

``` shell
## install
$ brew tap web3j/web3j
$ brew install web3j
## wallet
$ web3j wallet create # 创建钱包
$ web3j wallet update <walletfile>  # 更新钱包密码
$ web3j wallet send 
```

## Truffle & Embark : 以太坊智能合约开发框架

- [Truffle Docs](https://truffleframework.com/docs)
- [Truffle 文档](https://truffleframework.org/docs/)

## Solidity

- [以太坊Solidity语言中文文档](https://github.com/etherchina/solidity-doc-cn)
- [Solidity Docs](https://solidity.readthedocs.io)
- [Solidity 文档](https://solidity-cn.readthedocs.io)
- [Smart Contract Security Best Practices](https://github.com/ConsenSys/smart-contract-best-practices)
- [Remix](https://remix.ethereum.org/) : Solidity 在线 IDE
- [OpenZeppelin](https://openzeppelin.org/) : Solidity 智能合约构建工具

- 数据类型
    * 值类型 Value Type
        + bool
        + int
        + 枚举类型 `enum`
        + 函数类型 `function`
        + 地址类型 `address`
            * balance 查询账户余额
            * transfer() 发起转账
            * send
            * call
            * delegatecall
        + 可支付地址类型 `address payable`
    * 引用类型 Reference Type
        + bytes 变长字节数组 (byte[])
        + string 等价于 bytes，可相互转换
        + array 变长数组
            * storage 与 memory 有区别
            * 多维数组定义方式倒序
            * 外部函数不能返回变长数据
        + struct 结构体，只能在当前合约或子类合约使用
    * 映射类型 Mapping 
        + 类哈希结构
        
- 函数访问控制
    * private : 仅当前合约使用，不能被继承合约使用
    * internal : 当前合约或继承合约
    * external : 其它合约可以调用，当前合约使用需要使用 `this`
    * public  : 其它合约可以调用，当前合约使用不需要使用 `this`
- 函数类型 : 告诉编译器函数是否读取或修改状态变量
    * pure : 不可读，不能改
    * view : 可读，不能改
    * payable : 允许从调用中接受以太币

- 数据位置
    * memory : 数据存储在内存中 (字节数组形式存储)
        + 默认 : 函数的参数、返回值
    * storage : 数据被存入区块链中 (键值对形式存储)
        + 默认 : 局部变量、状态变量
    * calldata : 只读，存储在内存中
        + 默认 : 外部函数的参数(不含返回参数) 

- 以太币单位
    * wei
    * finney
    * szabo
    * ether = 10^18 wei
- 时间单位
    * seconds
    * minutes
    * hours
    * days
    * weeks
    * years

- 特殊函数
    * msg.sender : 消息发送者
    * msg.value : 消息发送的 wei 数量

