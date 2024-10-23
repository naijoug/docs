---
title: 序列化
icon: hashtag

index: true

---

  > 序列化，将数据接口或对象转化为可读取的格式(如：文件、缓存、网络数据流)，待以后恢复读取使用。

<!-- more -->

## reference

- [序列化](https://zh.wikipedia.org/wiki/%E5%BA%8F%E5%88%97%E5%8C%96)

## XML

  - XML 解析类型

    | 解析类型 | 全称 | 读写 | 解析速度 | 适合
    | --- | --- | --- | --- | ---
    | SAX   | Simple API for XML    | 只能读不能写   | 快     | 大型文本
    | DOM   | Document Object Model | 可读可写      | 慢     | 小型文本

## JSON

- [JSON](https://www.json.org)
- [JSON For You](https://json4u.com) 👉🏻 [🐙](https://github.com/loggerhead/json4u)
    > The best JSON visualization and processing tool.

## YAML

- [YAML](https://github.com/yaml)
- [YAML 语言教程](https://www.ruanyifeng.com/blog/2016/07/yaml.html)

## Protobuf

- [protobuf](https://github.com/protocolbuffers/protobuf)
- [高效的数据压缩编码方式 Protobuf](https://halfrost.com/protobuf_encode)

  ```protobuf hello.proto
  syntax = "proto3";  // protocol buffers 版本
  option java_package = "io.grpc.hello"; // 生成的 Java 代码包名

  import "google/protobuf/empty.proto"; // 导入谷歌标准空消息
  package hello; // proto 文件包名

  // 定义一个服务
  service HelloService {
      // 1> 单项 RPC : 客户端发送一个请求，服务端返回一个应答 (类似函数调用)
      rpc SayHello(HelloRequest) returns (HelloResponse) {}
      // 2> 服务端流式 RPC : 客户端发送一个请求，获取一个数据流用来读取一系列的消息(直到没有更多消息为止)
      rpc LotsOfReplies(HelloRequest) returns (stream HelloResponse) {}
      // 3> 客户端流式 RPC : 客户端提供一个数据流写入一系列消息，服务端读取完毕，返回一个应答
      rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse) {}
      // 4> 双向流式 RPC : 客户端和服务端通过一个读写数据流按任意顺序读写
      rpc BidiHello(stream HelloRequest) returns (stream HelloResponse) {}
  }
  // 空服务
  service EmptyService {
      rpc EmptyRequest(Empty) returns (HelloResponse) {}
      rpc EmptyResponse(HelloRequest) return (Empty) {}
      rpc EmptyAll(Empty) returns (Empty) {}
  }
  // 请求参数消息
  message HelloRequest {
      string name = 1;
  }
  // 返回数据消息
  message HelloResponse {
      string message = 1;
  }
  ```
