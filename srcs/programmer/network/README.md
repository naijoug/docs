---
title: 网络知识
icon: sitemap

index: false

---

<!-- more -->

## reference

- [即时通讯网](http://www.52im.net/)
- [TCP/IP详解 卷1：协议](http://www.52im.net/topic-tcpipvol1.html)
- [TxThinking Talks](https://talks.txthinking.com/)
- [网络安全学习资料](https://github.com/findneo/Newbie-Security-List)

## Tool

- [JSDelivr](https://www.jsdelivr.com) 
    > A free CDN for Open Source
- [OpenSSH](https://github.com/openssh/openssh-portable)
- [curl](https://github.com/curl/curl)
  > A command line tool and library for transferring data with URL syntax
- [SwitchHosts](https://github.com/oldj/SwitchHosts)
- [ping test](https://ping.chinaz.com/)
- [Proxyman](https://github.com/ProxymanApp)
    > Modern and Delightful Web Debugging Proxy for macOS, iOS, and Android ⚡️
- [whistle](https://github.com/avwo/whistle)
    > HTTP, HTTP2, HTTPS, Websocket debugging proxy

## 内网穿透

- [frp](https://github.com/fatedier/frp)
  > A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.
- [Holer](https://github.com/Wisdom-Projects/holer)
  > Holer exposes local servers behind NATs and firewalls to the public internet over secure tunnels.
- [localtunnel](https://github.com/localtunnel/localtunnel)
  > expose yourself
- [ngrok](https://github.com/inconshreveable/ngrok)
  > Introspected tunnels to localhost

## Concept

  | 缩写 | 说明
  | -- | --
  | `DNS`     | (Domain Name Server) 域名解析服务器
  | `IM`      | (Instant Messaging) 即时通讯
  | `SSH`     | (Secure Shell) 安全(加密) Shell
  | `CDN`     | (Content Delivery Network) 内容分发网络
  | `VPN`     | (Virtual Private Network) 虚拟私人网络
  | `VPS`     |（Virtual Private Server）虚拟专用服务器技术，将一台服务器分割成多个虚拟专享服务器的优质服务。 实现VPS的技术分为容器技术，和虚拟化技术。 每个VPS主机都可分配独立公网IP地址、独立操作系统、独立超大空间、独立内存、独立CPU资源、独立执行程序和独立系统配置等.

- TCP & UDP & HTTP

  | 类型 | 特点 | 说明 | 应用
  | --- | --- | --- | ---
  | `TCP\IP`  | 传输速度慢，不容易丢包   | 传输协议，长连接          | 聊天
  | `UDP`     | 传输速度快，容易丢包     | 传输协议，长连接          | 局域网游戏，网络游戏
  | `HTTP`    | 传输速度慢，单次传输     | 超文本传输协议，短连接     | 网站

- 网络请求状态码

  | 状态码 | 说明
  | --- | ---
  | 1xx   | 代表临时响应，需要请求者继续执行操作的状态代码。
  | 2xx   | 代表的多是操作成功。
  | `200` | 请求成功
  | 3xx   | 代表重定向，表示要完成请求，需要进一步操作
  | 4xx   | 代表请求错误，表示请求可能出错，妨碍了服务器的处理。
  | `404` | NotFound
  | 5xx   | 代表服务器错误，表示服务器在尝试处理请求时发生内部错误。 这些错误可能是服务器本身的错误，而不是请求出错
  | `500` | 服务器内部错误

## OSI 模型 (Open Systems Interconnection Model)
> 国际标准组织定义的开放式系统环境通信协议

- 物理层 (Physical Layer)
- 数据链路层 (Data Link Layer)
- 网络层 (Network Layer)
- 传输层 (Transport Layer)
- 会话层 (Session Layer)
- 表示层 (Presentation Layer)
- 应用层 (Application Layer)

## `TCP/IP`

- 应用层 (OSI 应用层 & 表示层 & 会话层)
- 传输层
- 网络层
- 数据链路层
- 物理层

## `DNS`
> DNS 解析 : 域名到 IP 地址的映射，DNS 解析使用 UDP 数据报，端口号 53，采用明文传输。

  | 解析方式 | 说明
  | -- | --
  | 递归查询 | 不断地自下而上遍历解析 `我去给你问一下`
  | 迭代查询 | `我告诉你谁可能知道`

  | 解析记录 | 说明
  | -- | --
  | A 记录        | (Address) 
  | NS 记录       | (Name Server) 
  | MX 记录       | (Mail Exchange) 
  | CNAME 记录    | (Canonical Name) 
  | TXT 记录      | (Textfile)
  | TTL 值        | (Time-To-Live) 
  | PTR 值        | (Pointer)

## `SSH`

  ```shell
  # 安装 openssh
  $ sudo apt-get update # 更新系统工具和依赖
  $ sudo apt-get install openssh-server openssh-client
    
  # 启用 openssh
  $ /etc/init.d/ssh start       # 启动
  $ /etc/init.d/ssh stop        # 停止
  $ /etc/init.d/ssh restart     # 重新启动
  # 利用 service 启用
  $ sudo service ssh start      # 启动
  $ sudo service ssh stop       # 停止
  $ sudo service ssh restart    # 重新启动

  # 启用账户 & 密码登录
  #   1. 修改 PasswordAuthentication 为 yes
  $ sudo vim /etc/ssh/sshd_config 
  #   2. 重启 ssh 服务
  $ sudo service sshd restart

  # 私钥登录
  #   方案一 : 将本机
  $ ssh-keygen                # 创建 ssh 密钥对(~/.ssh/id_rsa.pub)
  $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com" 
  $ ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa-xxx
  #   -t : 加密算法(默认: RSA)
  #   -b : 秘钥长度(默认: 2048)
  #   -C : 指定秘钥的用户信息
  $ ssh-copy-id user@host     # 复制本机公钥到目标主机(~/.ssh/authorized_keys)
  #   方案二 : 私钥文件直接登录
  $ chmod 400 private_key.pem # 添加权限
  $ ssh -i private_key.pem user@host 
  ```