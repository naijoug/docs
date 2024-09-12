const l=JSON.parse('{"key":"v-46589b7a","path":"/interview/core/0x05.network.html","title":"network - “网络”","lang":"zh-CN","frontmatter":{"title":"network - “网络”","icon":"hashtag","index":true,"description":"reference ()[2024-06-26 HTTP3 为什么抛弃了经典的 TCP，转而拥抱 QUIC 呢](https://juejin.cn/post/7384266820466180148); (✅)[2023-08-22 POST 为什么会发送两次请求？](https://juejin.cn/post/7269952188927017015...","head":[["meta",{"property":"og:url","content":"https://naijoug.github.io/docs/docs/interview/core/0x05.network.html"}],["meta",{"property":"og:site_name","content":"文档库"}],["meta",{"property":"og:title","content":"network - “网络”"}],["meta",{"property":"og:description","content":"reference ()[2024-06-26 HTTP3 为什么抛弃了经典的 TCP，转而拥抱 QUIC 呢](https://juejin.cn/post/7384266820466180148); (✅)[2023-08-22 POST 为什么会发送两次请求？](https://juejin.cn/post/7269952188927017015..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-12T05:43:47.000Z"}],["meta",{"property":"article:author","content":"naijoug"}],["meta",{"property":"article:modified_time","content":"2024-09-12T05:43:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"network - “网络”\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-12T05:43:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"naijoug\\",\\"url\\":\\"https://github.com/naijoug\\"}]}"]]},"headers":[{"level":2,"title":"reference","slug":"reference","link":"#reference","children":[]},{"level":2,"title":"概念知识","slug":"概念知识","link":"#概念知识","children":[{"level":3,"title":"网络模型","slug":"网络模型","link":"#网络模型","children":[]},{"level":3,"title":"❓为什么能通过一个 URL 就能请求到对应的资源","slug":"❓为什么能通过一个-url-就能请求到对应的资源","link":"#❓为什么能通过一个-url-就能请求到对应的资源","children":[]},{"level":3,"title":"❓MTU 了解吗","slug":"❓mtu-了解吗","link":"#❓mtu-了解吗","children":[]},{"level":3,"title":"❓全双工和半双工模式是什么","slug":"❓全双工和半双工模式是什么","link":"#❓全双工和半双工模式是什么","children":[]},{"level":3,"title":"Cookie","slug":"cookie","link":"#cookie","children":[]},{"level":3,"title":"❓流量控制和拥塞避免的区别","slug":"❓流量控制和拥塞避免的区别","link":"#❓流量控制和拥塞避免的区别","children":[]},{"level":3,"title":"❓了解过端口映射吗，说一下端口映射的方法。","slug":"❓了解过端口映射吗-说一下端口映射的方法。","link":"#❓了解过端口映射吗-说一下端口映射的方法。","children":[]}]},{"level":2,"title":"UDP","slug":"udp","link":"#udp","children":[{"level":3,"title":"❓UDP","slug":"❓udp","link":"#❓udp","children":[]},{"level":3,"title":"❓TCP vs UDP","slug":"❓tcp-vs-udp","link":"#❓tcp-vs-udp","children":[]},{"level":3,"title":"❓有人认为 TCP 一定比 UDP 更快，你觉得呢","slug":"❓有人认为-tcp-一定比-udp-更快-你觉得呢","link":"#❓有人认为-tcp-一定比-udp-更快-你觉得呢","children":[]},{"level":3,"title":"❓UDP 除了不用握手，还有什么优点","slug":"❓udp-除了不用握手-还有什么优点","link":"#❓udp-除了不用握手-还有什么优点","children":[]}]},{"level":2,"title":"TCP","slug":"tcp","link":"#tcp","children":[{"level":3,"title":"❓TCP","slug":"❓tcp","link":"#❓tcp","children":[]},{"level":3,"title":"建立连接","slug":"建立连接","link":"#建立连接","children":[]},{"level":3,"title":"断开连接","slug":"断开连接","link":"#断开连接","children":[]},{"level":3,"title":"运行机制","slug":"运行机制","link":"#运行机制","children":[]}]},{"level":2,"title":"QUIC","slug":"quic","link":"#quic","children":[{"level":3,"title":"❓QUIC 是什么","slug":"❓quic-是什么","link":"#❓quic-是什么","children":[]},{"level":3,"title":"❓QUIC 的底层实现","slug":"❓quic-的底层实现","link":"#❓quic-的底层实现","children":[]},{"level":3,"title":"❓0-RTT 握手过程","slug":"❓0-rtt-握手过程","link":"#❓0-rtt-握手过程","children":[]},{"level":3,"title":"❓FEC 是什么","slug":"❓fec-是什么","link":"#❓fec-是什么","children":[]}]},{"level":2,"title":"IP","slug":"ip","link":"#ip","children":[{"level":3,"title":"❓IPv4 和 IPv6 的区别","slug":"❓ipv4-和-ipv6-的区别","link":"#❓ipv4-和-ipv6-的区别","children":[]},{"level":3,"title":"❓IPv6 的诞生的原因","slug":"❓ipv6-的诞生的原因","link":"#❓ipv6-的诞生的原因","children":[]},{"level":3,"title":"❓IP 头部都有啥内容","slug":"❓ip-头部都有啥内容","link":"#❓ip-头部都有啥内容","children":[]},{"level":3,"title":"❓除了好记以外，为什么要用域名访问服务器，直接用 IP 不行吗","slug":"❓除了好记以外-为什么要用域名访问服务器-直接用-ip-不行吗","link":"#❓除了好记以外-为什么要用域名访问服务器-直接用-ip-不行吗","children":[]},{"level":3,"title":"❓判断一个字符串是不是 IPv6 地址","slug":"❓判断一个字符串是不是-ipv6-地址","link":"#❓判断一个字符串是不是-ipv6-地址","children":[]},{"level":3,"title":"❓ping 使用什么协议","slug":"❓ping-使用什么协议","link":"#❓ping-使用什么协议","children":[]}]},{"level":2,"title":"Socket","slug":"socket","link":"#socket","children":[{"level":3,"title":"❓Socket 了解吗","slug":"❓socket-了解吗","link":"#❓socket-了解吗","children":[]},{"level":3,"title":"❓对于服务器来说，Socket 通信有哪些具体的步骤","slug":"❓对于服务器来说-socket-通信有哪些具体的步骤","link":"#❓对于服务器来说-socket-通信有哪些具体的步骤","children":[]},{"level":3,"title":"❓Socket vs TCP","slug":"❓socket-vs-tcp","link":"#❓socket-vs-tcp","children":[]},{"level":3,"title":"❓Socket vs RTMP","slug":"❓socket-vs-rtmp","link":"#❓socket-vs-rtmp","children":[]},{"level":3,"title":"❓WebSocket 是什么","slug":"❓websocket-是什么","link":"#❓websocket-是什么","children":[]}]},{"level":2,"title":"HTTP","slug":"http","link":"#http","children":[{"level":3,"title":"版本","slug":"版本","link":"#版本","children":[]},{"level":3,"title":"请求方法","slug":"请求方法","link":"#请求方法","children":[]},{"level":3,"title":"状态码","slug":"状态码","link":"#状态码","children":[]},{"level":3,"title":"功能知识","slug":"功能知识","link":"#功能知识","children":[]}]},{"level":2,"title":"HTTPS","slug":"https","link":"#https","children":[{"level":3,"title":"❓HTTPS vs HTTP","slug":"❓https-vs-http","link":"#❓https-vs-http","children":[]},{"level":3,"title":"❓HTTPS 比起 HTTP 有什么缺陷","slug":"❓https-比起-http-有什么缺陷","link":"#❓https-比起-http-有什么缺陷","children":[]},{"level":3,"title":"❓CA 证书是什么解释一下","slug":"❓ca-证书是什么解释一下","link":"#❓ca-证书是什么解释一下","children":[]},{"level":3,"title":"❓CA 证书申请流程","slug":"❓ca-证书申请流程","link":"#❓ca-证书申请流程","children":[]},{"level":3,"title":"❓如何将 CA 证书安装到服务器上","slug":"❓如何将-ca-证书安装到服务器上","link":"#❓如何将-ca-证书安装到服务器上","children":[]},{"level":3,"title":"❓SSL 证书除了压缩加密，还有什么别的用处","slug":"❓ssl-证书除了压缩加密-还有什么别的用处","link":"#❓ssl-证书除了压缩加密-还有什么别的用处","children":[]}]},{"level":2,"title":"FTP","slug":"ftp","link":"#ftp","children":[{"level":3,"title":"❓FTP 和 HTTP 的区别","slug":"❓ftp-和-http-的区别","link":"#❓ftp-和-http-的区别","children":[]}]},{"level":2,"title":"DNS","slug":"dns","link":"#dns","children":[{"level":3,"title":"❓DNS 是什么","slug":"❓dns-是什么","link":"#❓dns-是什么","children":[]},{"level":3,"title":"❓DNS 解析过程","slug":"❓dns-解析过程","link":"#❓dns-解析过程","children":[]},{"level":3,"title":"❓接收到 DNS 查询结果之后还做了什么","slug":"❓接收到-dns-查询结果之后还做了什么","link":"#❓接收到-dns-查询结果之后还做了什么","children":[]},{"level":3,"title":"❓DNS 缓存存在哪，有效期多少，可以设置吗","slug":"❓dns-缓存存在哪-有效期多少-可以设置吗","link":"#❓dns-缓存存在哪-有效期多少-可以设置吗","children":[]},{"level":3,"title":"❓DNS 劫持","slug":"❓dns-劫持","link":"#❓dns-劫持","children":[]},{"level":3,"title":"❓常见的 DNS 格式","slug":"❓常见的-dns-格式","link":"#❓常见的-dns-格式","children":[]},{"level":3,"title":"❓DNS 为什么用 UDP 而不用 TCP","slug":"❓dns-为什么用-udp-而不用-tcp","link":"#❓dns-为什么用-udp-而不用-tcp","children":[]},{"level":3,"title":"❓DNS 中迭代查询和递归查询的区别","slug":"❓dns-中迭代查询和递归查询的区别","link":"#❓dns-中迭代查询和递归查询的区别","children":[]}]},{"level":2,"title":"抓包","slug":"抓包","link":"#抓包","children":[{"level":3,"title":"❓抓包工具抓取 HTTPS 的原理","slug":"❓抓包工具抓取-https-的原理","link":"#❓抓包工具抓取-https-的原理","children":[]},{"level":3,"title":"❓Charles 抓包软件的原理","slug":"❓charles-抓包软件的原理","link":"#❓charles-抓包软件的原理","children":[]},{"level":3,"title":"❓不使用 Charles，4G 网络如何抓包","slug":"❓不使用-charles-4g-网络如何抓包","link":"#❓不使用-charles-4g-网络如何抓包","children":[]},{"level":3,"title":"❓为什么 Wireshark 不能直接抓取 SSL 的原始数据","slug":"❓为什么-wireshark-不能直接抓取-ssl-的原始数据","link":"#❓为什么-wireshark-不能直接抓取-ssl-的原始数据","children":[]},{"level":3,"title":"❓如何设计一个 HTTPS 抓包","slug":"❓如何设计一个-https-抓包","link":"#❓如何设计一个-https-抓包","children":[]}]},{"level":2,"title":"情景题","slug":"情景题","link":"#情景题","children":[{"level":3,"title":"通信流程","slug":"通信流程","link":"#通信流程","children":[]},{"level":3,"title":"音视频","slug":"音视频","link":"#音视频","children":[]},{"level":3,"title":"故障分析","slug":"故障分析","link":"#故障分析","children":[]}]}],"git":{"createdTime":1704610269000,"updatedTime":1726119827000,"contributors":[{"name":"naijoug","email":"naijoug@outlook.com","commits":13},{"name":"guojian","email":"naijoug@outlook.com","commits":2}]},"readingTime":{"minutes":105.25,"words":31574},"filePathRelative":"interview/core/0x05.network.md","localizedDate":"2024年1月7日","autoDesc":true}');export{l as data};
