# HTTPS
> Hyper Text Transfer Protocol over Secure Socket Layer，安全的超文本传输协议
> 
> TCP 默认端口 : 443

## Reference

- [mkcert](https://github.com/FiloSottile/mkcert)
    > A simple zero-config tool to make locally trusted development certificates with any names you'd like.

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

