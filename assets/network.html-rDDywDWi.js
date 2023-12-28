import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c,a as o,f as a}from"./app--gyPjc9T.js";const h={},r=a('<h2 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> <code>TCP</code></h2><h3 id="tcp-ip-五层模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip-五层模型" aria-hidden="true">#</a> <code>TCP/IP</code> 五层模型</h3><ol><li>应用层 : <code>DNS</code>、<code>HTTP</code>、<code>HTTPS</code>、<code>RPC</code>、<code>P2P</code> (<code>DHCP</code>、<code>RTMP</code>、<code>GTP</code>) <blockquote><p><code>OSI</code> 七层模型中，将应用层细分为(应用层、表示层、会话层)</p></blockquote><ul><li>表示层 :</li><li>会话层 :</li></ul></li><li>传输层 : <code>TCP</code>、<code>UDP</code>、<code>QUIC</code></li><li>网络层 : (IP 层) <code>IP</code> (<code>ICMP</code>、<code>OSPF</code>、<code>BGP</code>、<code>IPSec</code>、<code>GRE</code>)</li><li>链路层 : (MAC 层) <code>ARP</code>、<code>VLAN</code>、<code>STP</code></li><li>物理层 : 网络跳线</li></ol><h3 id="tcp-vs-udp" tabindex="-1"><a class="header-anchor" href="#tcp-vs-udp" aria-hidden="true">#</a> <code>TCP</code> vs <code>UDP</code></h3><blockquote><p><code>TCP</code> 特点</p></blockquote><ul><li>可靠性 : 通过确认应答、超时重传等机制保证数据的可靠传输。</li><li>有序性 : 通过数据序号来保证数据有序，传输完成后通过排序来保证数据的正确性。</li><li>双全工 : 通信双方(服务端和客户端)都具备发送和接受数据的能力。(三次握手来保证)</li></ul><blockquote><p><code>UDP</code> 特点</p></blockquote><ul><li>不可靠 : 通信通信双方不需要建立连接，不能保证数据准确送达。</li><li>无序性 : 每次发送的数据包相互独立，没有特定的顺序。</li><li>速度快 : 由于数据包结构简单，保证的 <code>UDP</code> 传输速度优于 <code>TCP</code></li></ul><p>一些游戏、直播和需要低延迟实时性要求较高的应用，会使用 <code>UDP</code>。</p><blockquote><p><code>TCP</code> 的 <code>keepalive</code> 机制</p></blockquote><p><code>keepalive</code> 顾名思义是否还活着，是一种心跳检测机制。用于判断连接方是否还处于活动状态，以便断开已经失活连接释放资源。发送探测包后，如果处于活动状态，接收方会发送确认信号；如果处于失活状态，则会再连续再发送几次探测包如果均无响应则证明对方已断开连接，可以释放资源。</p><p>需要注意的一点是，这个 <code>keepalive</code> 机制的时长一般默认为 2 小时。所以，不能使用使用该机制来确认实时性较高的保活探测。</p><h3 id="解释下-tcp-的慢启动特性" tabindex="-1"><a class="header-anchor" href="#解释下-tcp-的慢启动特性" aria-hidden="true">#</a> 解释下 <code>TCP</code> 的慢启动特性?</h3><h3 id="如果手机应用与服务器通过-tcp-连接-这个时候手机切换为飞行模式-服务器可以短时间内知道到手机离线状态吗" tabindex="-1"><a class="header-anchor" href="#如果手机应用与服务器通过-tcp-连接-这个时候手机切换为飞行模式-服务器可以短时间内知道到手机离线状态吗" aria-hidden="true">#</a> 如果手机应用与服务器通过 <code>TCP</code> 连接，这个时候手机切换为飞行模式，服务器可以短时间内知道到手机离线状态吗？</h3><details class="hint-container details"><summary>💡</summary><p>服务器通过 <code>TCP</code> 短时间内是不能知晓手机的离线状态的。因为 <code>TCP</code> 主要是为了保证数据的可靠传输，通信双方是通过数据交换来了解对方状态。而 <code>TCP</code> 并没有设计心跳检测机制，所有就没有实时检测对方是否离线的能力。</p></details><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> <code>HTTP</code></h2><h3 id="为什么说-http-是无状态的" tabindex="-1"><a class="header-anchor" href="#为什么说-http-是无状态的" aria-hidden="true">#</a> 为什么说 <code>HTTP</code> 是无状态的？</h3><h3 id="三次握手可以携带数据吗" tabindex="-1"><a class="header-anchor" href="#三次握手可以携带数据吗" aria-hidden="true">#</a> 三次握手可以携带数据吗？</h3><h3 id="http-vs-https" tabindex="-1"><a class="header-anchor" href="#http-vs-https" aria-hidden="true">#</a> <code>HTTP</code> vs <code>HTTPS</code></h3><p><code>HTTP</code>: 是基于 <code>TCP/IP</code> 通信协议的一种数据传输协议。 <code>HTTPS</code> : <code>= HTTP + SSL</code>，在 <code>HTTP</code> 协议的基础加上了加密处理。</p><h3 id="❓http-中-get、post-区别" tabindex="-1"><a class="header-anchor" href="#❓http-中-get、post-区别" aria-hidden="true">#</a> ❓<code>HTTP</code> 中 <code>GET</code>、<code>POST</code> 区别</h3><h3 id="http-中的-post-请求的-body-体使用-form-urlencoded-和-multipart-form-data-的区别" tabindex="-1"><a class="header-anchor" href="#http-中的-post-请求的-body-体使用-form-urlencoded-和-multipart-form-data-的区别" aria-hidden="true">#</a> <code>HTTP</code> 中的 <code>POST</code> 请求的 <code>body</code> 体使用 <code>form-urlencoded</code> 和 <code>multipart/form-data</code> 的区别？</h3><h3 id="如何用-http-实现长连接" tabindex="-1"><a class="header-anchor" href="#如何用-http-实现长连接" aria-hidden="true">#</a> 如何用 <code>HTTP</code> 实现长连接？</h3><h3 id="http2-0-针对同一个域名的多个请求-会建立多少个-tcp-连接" tabindex="-1"><a class="header-anchor" href="#http2-0-针对同一个域名的多个请求-会建立多少个-tcp-连接" aria-hidden="true">#</a> <code>HTTP2.0</code> 针对同一个域名的多个请求，会建立多少个 <code>TCP</code> 连接？</h3><h3 id="❓http-各个版本的区别" tabindex="-1"><a class="header-anchor" href="#❓http-各个版本的区别" aria-hidden="true">#</a> ❓<code>HTTP</code> 各个版本的区别</h3><details class="hint-container details"><summary>💡</summary><ul><li><code>HTTP</code> 1.0 : 最早期版本，每次请求都会重新创建 <code>TCP</code> 的连接的创建和释放，造成极大的资源消耗。属于“非持续性连接”。</li><li><code>HTTP</code> 1.1 : 改善了 1.0 版本的问题，修正为“持续性连接”。一次 <code>TCP</code> 连接可以发送多个请求和回复。引入 <code>pipeline</code> (管道)机制，可以同时发送多个请求，但是响应会按照请求队列的先后顺序进行，被称为“队头阻塞”问题。</li><li><code>HTTP</code> 2.0 : 优化了传输数据格式(1.x 文本 -&gt; 二进制)，减少了解析复杂度和提升传输速度。通过多路复用机制，解决了 1.0 “队头阻塞” 的问题，一次连接可以同时进行多个请求和响应。头信息压缩处理，减少数据体积。添加了服务器推送功能。</li><li><code>HTTP</code> 3.0 : 开发中... <code>TCP</code> -&gt; <code>QUIC</code></li></ul></details><hr><h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><h2 id="dns-是什么" tabindex="-1"><a class="header-anchor" href="#dns-是什么" aria-hidden="true">#</a> <code>DNS</code> 是什么？</h2><h3 id="dns-解析过程" tabindex="-1"><a class="header-anchor" href="#dns-解析过程" aria-hidden="true">#</a> <code>DNS</code> 解析过程？</h3><hr><h2 id="其它知识点" tabindex="-1"><a class="header-anchor" href="#其它知识点" aria-hidden="true">#</a> 其它知识点</h2><h3 id="打开浏览器-输入网址到看到网站首页都经历那些过程" tabindex="-1"><a class="header-anchor" href="#打开浏览器-输入网址到看到网站首页都经历那些过程" aria-hidden="true">#</a> 打开浏览器，输入网址到看到网站首页都经历那些过程？</h3><h3 id="❓cookie-vs-session" tabindex="-1"><a class="header-anchor" href="#❓cookie-vs-session" aria-hidden="true">#</a> ❓<code>Cookie</code> vs <code>Session</code></h3><h3 id="❓socket" tabindex="-1"><a class="header-anchor" href="#❓socket" aria-hidden="true">#</a> ❓<code>Socket</code></h3><h3 id="网络模型了解么-有哪几种-说说你的看法" tabindex="-1"><a class="header-anchor" href="#网络模型了解么-有哪几种-说说你的看法" aria-hidden="true">#</a> 网络模型了解么？有哪几种？说说你的看法？</h3><h3 id="使用-ssh-连接云服务器-整个网络通信过程" tabindex="-1"><a class="header-anchor" href="#使用-ssh-连接云服务器-整个网络通信过程" aria-hidden="true">#</a> 使用 <code>ssh</code> 连接云服务器，整个网络通信过程？</h3><h3 id="charles-抓包软件的原理" tabindex="-1"><a class="header-anchor" href="#charles-抓包软件的原理" aria-hidden="true">#</a> <code>Charles</code> 抓包软件的原理</h3><details class="hint-container details"><summary>💡</summary><p>可以将它理解成中间人攻击。客户端将 <code>Charles</code> 作为代理服务器(中间人)。客户端所有请求都会先发送给 <code>Charles</code>，<code>Charles</code> 再将客户端的请求转发给服务器。<code>Charles</code> 收到服务器响应之后，再将从服务器收到的回复内容转发给客户端。这样请求和响应数据都被 <code>Charles</code> 记录下来，再通过界面展示即可。</p><p>对于 <code>HTTP</code> 相对来说比较简单，直接进行接收和转发即可。而 <code>HTTPS</code> 中涉及 <code>CA</code> 认证，所以客户端需要进行的操作信任 <code>Charles</code> 的证书，这样通过 <code>Charles</code> 发送给客户端的公钥就可以通过这个证书校验成功，从而完成通信。</p></details><h3 id="不使用-charles-4g-网络如何抓包" tabindex="-1"><a class="header-anchor" href="#不使用-charles-4g-网络如何抓包" aria-hidden="true">#</a> 不使用 <code>Charles</code>，<code>4G</code> 网络如何抓包？</h3>',40);function i(t,s){return d(),c("div",null,[o(" more "),r])}const p=e(h,[["render",i],["__file","network.html.vue"]]);export{p as default};
