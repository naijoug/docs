---
title: HTTPS
icon: hashtag

index: true
order: 2

---

<!-- more -->

> Hyper Text Transfer Protocol over Secure Socket Layer，安全的超文本传输协议
> 
> TCP 默认端口 : 443

## reference

- [mkcert](https://github.com/FiloSottile/mkcert)
    > A simple zero-config tool to make locally trusted development certificates with any names you'd like.

## `HTTPS` 的加密过程原理

  首先需要了解两种加密模式，对称加密和非对称加密。
  * 对称加密：通信双方使用同一个密钥进行数据的加密和解密。
  * 非对称加密：有两个秘钥(私钥和公钥)，公钥用来加密数据，私钥用来解密。对称加密比非对称加密来说，因为使用单一秘钥计算量小，没有复杂的数学计算，所以效率上高于非对称加密。
  
  `HTTPS` 的连接过程也是三次握手。相对于 `HTTP` 的区别在于，第二次时服务器除了发送 `ACK` 之外，还会将加密的使用的公钥发送给客户端。第三次时客户端接受到公钥后，会校验公钥的合法性，并生产一个对称加密的秘钥。客户端回复服务端 `ACK` 的同时，也会将生成的秘钥通过公钥加密之后发送给服务端。之后双方就可以使用秘钥进行数据加密通信了。 

  `HTTPS` 中的中间人攻击，是指中间人先伪装成服务器接受客户端发送过来的请求，发送伪装的公钥给客户端。然后伪装成客户端将拦截的请求发送服务器，得到服务器的公钥。这样客户端以后发送请求都会请过中间人，中间人可以在篡改真实的请求。
  
  而为了解决中间人攻击这个问题，就引入了 `CA` 机构，用于给服务器签发数字证书。数字证书是包含服务器标识(如：域名)以及服务器公钥等信息。客户端可以通过这些信息来确认是否连接上正确的服务器，来避免中间人攻击。

## HTTPS 认证方式

- 单向认证 : 
    * root.crt : 客户端使用的 CA 根证书
    * server.keystore : 服务端证书存放的容器

- 双向认证 : 
    * root.crt : 根证书
    * client.p12 : 客户度证书包含私钥
    * root.truststore : 服务器存放的受信任(CA 证书)容器
    * server.keystore : 服务器证书存放容器


## SSH
> SSH (Secure Shell) :
> 
> OpenSSH : SSH 协议的开源实现，使用 SSH 协议实现设备间加密通信(如: 远程控制、文件传输...)

