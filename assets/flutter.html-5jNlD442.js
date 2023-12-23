import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as d,c as n,a as c,b as e,e as l,d as i,f as a}from"./app-jZxpMbcW.js";const h={},s={href:"https://juejin.cn/post/7292450647303208999",target:"_blank",rel:"noopener noreferrer"},u={href:"https://juejin.cn/post/6844903669108834311",target:"_blank",rel:"noopener noreferrer"},p={href:"https://flutter.cn/community/tutorials/singleton-pattern-in-flutter-n-dart",target:"_blank",rel:"noopener noreferrer"},f=a('<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><table><thead><tr><th>flutter 项目</th><th>说明</th></tr></thead><tbody><tr><td><code>App</code></td><td>应用，适用于 <code>flutter</code> 为主的开发方法，其它端为壳工程</td></tr><tr><td><code>Moudle</code></td><td>模块，适用于 <code>flutter</code> 以模块集成的混合开发方式</td></tr><tr><td><code>Plugin</code></td><td>插件，包含原生代码的插件包</td></tr><tr><td><code>Package</code></td><td>包，纯 <code>dart</code> 的工具包</td></tr></tbody></table><h2 id="混合开发" tabindex="-1"><a class="header-anchor" href="#混合开发" aria-hidden="true">#</a> 混合开发</h2><ul><li>module 方式</li><li>framework 方式</li><li>Cocoapods 方式</li></ul><h2 id="native-消息通道" tabindex="-1"><a class="header-anchor" href="#native-消息通道" aria-hidden="true">#</a> Native 消息通道</h2><ul><li>BasicMessageChannel : 传递字符串和半结构化的信息</li><li>MethodChannel : 传递方法调用 (method invocation)</li><li>EventChannel : 数据流 (event streams) 的通信</li></ul><hr>',7),_={href:"https://juejin.cn/post/6844903666193956872",target:"_blank",rel:"noopener noreferrer"},b=a('<h2 id="flutter-3-x" tabindex="-1"><a class="header-anchor" href="#flutter-3-x" aria-hidden="true">#</a> Flutter 3.x</h2><blockquote><p>全平台支持 (ios、android、web、windows + =&gt; macOS、linux)</p></blockquote><ul><li>全平台支持 (稳定了 macOS、linux)</li><li>无障碍支持</li><li>DevTools 增强</li></ul><h2 id="devtools" tabindex="-1"><a class="header-anchor" href="#devtools" aria-hidden="true">#</a> DevTools</h2><ul><li>hot reload : 热启动</li><li>inspector 布局调试</li></ul><h2 id="widget" tabindex="-1"><a class="header-anchor" href="#widget" aria-hidden="true">#</a> Widget</h2><p><code>package:flutter/material.dart</code></p><ul><li><code>StatelessWidget</code></li><li><code>StatefulWidget</code></li></ul><p><code>Widget</code> 的生命周期</p><ul><li><p><code>StatelessWidget</code></p></li><li><p><code>StatefulWidget</code></p></li></ul><p>常用的 Widget</p><ul><li>MaterialApp :</li><li>Scaffold : 脚手架</li><li>ListView : 列表</li><li>ListTile :</li><li>CircleAvatar : 原形头像</li></ul><p>Text : 显示文字 Image : 显示图片 -&gt; AssetImage PopupMenuButton</p><p>FutureBuilder</p><p>InheritedWidget</p><h2 id="布局系统" tabindex="-1"><a class="header-anchor" href="#布局系统" aria-hidden="true">#</a> 布局系统</h2><ul><li><p>Scaffold : 脚手架</p></li><li><p>Row、Column、Stack : 布局方向</p></li><li><p>Container、Expanded、Positioned、AspectRatio</p></li><li><p>Center、Chip、SizedBox、BoxDecoration</p></li></ul><p>mianAxis: 主轴 crossAxis : 交叉轴</p><p>flexbox : 弹性盒子布局</p><p>padding vs margin</p><h2 id="导航系统" tabindex="-1"><a class="header-anchor" href="#导航系统" aria-hidden="true">#</a> 导航系统</h2><ul><li><p>Navigator 2.0</p><p>页面导航管理 1.0 版本存在很多问题</p></li></ul><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><h2 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理" aria-hidden="true">#</a> 状态管理</h2>',24),g={href:"https://flutter.cn/community/tutorials/state-management-package-getx-provider-analysis",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/6984593635681517582",target:"_blank",rel:"noopener noreferrer"},x={href:"https://juejin.cn/post/7012044249386450981",target:"_blank",rel:"noopener noreferrer"},k=a('<h2 id="渲染引擎" tabindex="-1"><a class="header-anchor" href="#渲染引擎" aria-hidden="true">#</a> 渲染引擎</h2><ul><li>Key <ul><li>GlobalKey</li><li>LocalKey <ul><li>ValueKey</li><li>ObjectKey</li><li>UniqueKey</li></ul></li></ul></li></ul><p>增量渲染</p><h2 id="热重载" tabindex="-1"><a class="header-anchor" href="#热重载" aria-hidden="true">#</a> 热重载</h2><p>flutter_tools</p><h2 id="线程模型" tabindex="-1"><a class="header-anchor" href="#线程模型" aria-hidden="true">#</a> 线程模型</h2><ul><li><p><code>Flutter</code> 的线程模型 : 双队列设计(微任务队列和事件队列)，微任务队列比事件队列具有更高优先级。</p></li><li><p><code>Flutter</code> 的线程管理 : 4 个 Runner Thread ()</p></li><li><p>Microtask : 微任务</p></li><li><p>Isolate : 独立线程</p></li></ul><h2 id="播放器" tabindex="-1"><a class="header-anchor" href="#播放器" aria-hidden="true">#</a> 播放器</h2><blockquote><p>常用的播放器有哪些？</p></blockquote><ul><li>video_player : <code>flutter</code> 官方提供的播放器</li><li>video_player_plus : 扩展的 <code>video_player</code></li><li>Chewie : 封装的 <code>video_player</code></li><li>FijkPlayer : 封装的 <code>ijkPlayer</code></li></ul><blockquote><p>FijkPlayer 状态机</p></blockquote><p><code>IDLE</code> -&gt; <code>Initialized</code> -&gt; <code>Async Preparing</code> -&gt; <code>Prepared</code> -&gt; <code>Started</code> &lt;--&gt; <code>Paused</code> -&gt; <code>Completed</code> -&gt; <code>Stopped</code> -&gt; <code>Error</code> -&gt; <code>End</code></p><blockquote><p>播放器的插件化</p></blockquote><p>插件引用方式</p><ul><li>Local</li><li>Git</li><li>Pub</li></ul><h2 id="lib" tabindex="-1"><a class="header-anchor" href="#lib" aria-hidden="true">#</a> lib</h2>',16),v={href:"https://github.com/jonataslaw/getx",target:"_blank",rel:"noopener noreferrer"},y=e("blockquote",null,[e("p",null,"Open screens/snackbars/dialogs/bottomSheets without context, manage states and inject dependencies easily with Get.")],-1),j={href:"https://github.com/alibaba/flutter_boost",target:"_blank",rel:"noopener noreferrer"},C=e("blockquote",null,[e("p",null,"FlutterBoost is a Flutter plugin which enables hybrid integration of Flutter for your existing native apps with minimum efforts")],-1);function F(w,S){const t=r("ExternalLinkIcon");return d(),n("div",null,[c(" more "),e("ul",null,[e("li",null,[e("p",null,[e("a",s,[l("2023-10-23 FlutterCandies"),i(t)])])]),e("li",null,[e("p",null,[e("a",u,[l("2018-09-03 Flutter快速上车之Widget"),i(t)])])]),e("li",null,[e("p",null,[e("a",p,[l("Flutter 单例模式"),i(t)])])])]),f,e("ul",null,[e("li",null,[e("a",_,[l("2018-08-28 深入理解Flutter Platform Channel"),i(t)])])]),b,e("ul",null,[e("li",null,[e("a",g,[l("Flutter 状态管理框架 Provider 和 Get 分析"),i(t)])]),e("li",null,[e("a",m,[l("2021-07-14 Flutter GetX深度剖析"),i(t)])]),e("li",null,[e("a",x,[l("2021-09-26 Flutter 对状态管理的认知与思考"),i(t)])])]),k,e("ul",null,[e("li",null,[e("a",v,[l("GetX"),i(t)]),y]),e("li",null,[e("a",j,[l("flutter_boost"),i(t)]),C])])])}const B=o(h,[["render",F],["__file","flutter.html.vue"]]);export{B as default};
