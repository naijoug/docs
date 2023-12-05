---
title: 服务框架
index: false
icon: box-open

---

<!-- more -->

## Framework

- [xmpp](https://xmpp.org/)
- [PBootCMS](https://pbootcms.com)

## RPC vs REST

- [Restful API Design References](https://github.com/aisuhua/restful-api-design-references)
- [2015.03.06 WEB开发中，使用JSON-RPC好，还是RESTful API好？](https://www.zhihu.com/question/28570307)
- [2014.09.26 谁能用通俗的语言解释一下什么是 RPC 框架？](https://www.zhihu.com/question/25536695)

- RPC : (Remote Procedure Call) 远程过程调用
    * [thrift](https://github.com/apache/thrift)
    * [gRPC](https://github.com/grpc)
        > A high performance, open source universal RPC framework
    * [jsonrpc4j](https://github.com/briandilley/jsonrpc4j)
        > JSON-RPC for Java

- REST (Representational State Transfer) : 表现层状态转化  
    * Resource (资源) 
        > 网络上一个实体（具体信息），每个资源都用一个URI来标识和定位。 
    * Representation (表现层)
        > 资源的表现形式。(HTML，XML，JSON，二进制...) 
    * State Transfer (状态转移) 
        > 客户端所有操作本质上就是用某种方法让服务器中的资源状态发生变化。

## OAuth vs JWT

- [Keycloack](https://github.com/keycloak/keycloak)
    > Open Source Identity and Access Management For Modern Applications and Services

- [2018.07.13 全面了解Token,JWT,OAuth,SAML,SSO](https://zhuanlan.zhihu.com/p/38942172)

- OAuth : 一种开放授权框架，为用户资源的授权定义了一个安全、开放及简单的标准，第三方无需知道用户的账号及密码，就可获取到用户的授权信息，并且这是安全的。
- JWT : 一种认证协议