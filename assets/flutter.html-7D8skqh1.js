import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as n,c as d,a as c,b as e,e as t,d as r,f as i}from"./app-t3pq4lUi.js";const s={},h={href:"https://juejin.cn/post/7292450647303208999",target:"_blank",rel:"noopener noreferrer"},u={href:"https://juejin.cn/post/6844903669108834311",target:"_blank",rel:"noopener noreferrer"},p=i('<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><table><thead><tr><th>flutter 项目</th><th>说明</th></tr></thead><tbody><tr><td><code>App</code></td><td>应用，适用于 <code>flutter</code> 为主的开发方法，其它端为壳工程</td></tr><tr><td><code>Moudle</code></td><td>模块，适用于 <code>flutter</code> 以模块集成的混合开发方式</td></tr><tr><td><code>Plugin</code></td><td>插件，包含原生代码的插件包</td></tr><tr><td><code>Package</code></td><td>包，纯 <code>dart</code> 的工具包</td></tr></tbody></table><h2 id="混合开发" tabindex="-1"><a class="header-anchor" href="#混合开发" aria-hidden="true">#</a> 混合开发</h2><ul><li>module 方式</li><li>framework 方式</li><li>Cocoapods 方式</li></ul><h2 id="native-消息通道" tabindex="-1"><a class="header-anchor" href="#native-消息通道" aria-hidden="true">#</a> Native 消息通道</h2><ul><li>BasicMessageChannel : 传递字符串和半结构化的信息</li><li>MethodChannel : 传递方法调用 (method invocation)</li><li>EventChannel : 数据流 (event streams) 的通信</li></ul><hr>',7),f={href:"https://juejin.cn/post/6844903666193956872",target:"_blank",rel:"noopener noreferrer"},_=i('<h2 id="flutter-3-x" tabindex="-1"><a class="header-anchor" href="#flutter-3-x" aria-hidden="true">#</a> Flutter 3.x</h2><blockquote><p>全平台支持 (ios、android、web、windows + =&gt; macOS、linux)</p></blockquote><ul><li>全平台支持 (稳定了 macOS、linux)</li><li>无障碍支持</li><li>DevTools 增强</li></ul><h2 id="devtools" tabindex="-1"><a class="header-anchor" href="#devtools" aria-hidden="true">#</a> DevTools</h2><ul><li>hot reload : 热启动</li><li>inspector 布局调试</li></ul><h2 id="widget" tabindex="-1"><a class="header-anchor" href="#widget" aria-hidden="true">#</a> Widget</h2><p><code>package:flutter/material.dart</code></p><ul><li><code>StatelessWidget</code></li><li><code>StatefulWidget</code></li></ul><p><code>Widget</code> 的生命周期</p><ul><li><p><code>StatelessWidget</code></p></li><li><p><code>StatefulWidget</code></p></li></ul><p>常用的 Widget</p><ul><li>MaterialApp :</li><li>Scaffold : 脚手架</li><li>ListView : 列表</li><li>ListTile :</li><li>CircleAvatar : 原形头像</li></ul><p>Text : 显示文字 Image : 显示图片 -&gt; AssetImage PopupMenuButton</p><p>FutureBuilder</p><p>InheritedWidget</p><h2 id="布局系统" tabindex="-1"><a class="header-anchor" href="#布局系统" aria-hidden="true">#</a> 布局系统</h2><ul><li><p>Scaffold : 脚手架</p></li><li><p>Row、Column、Stack : 布局方向</p></li><li><p>Container、Expanded、Positioned、AspectRatio</p></li><li><p>Center、Chip、SizedBox、BoxDecoration</p></li></ul><p>mianAxis: 主轴 crossAxis : 交叉轴</p><p>flexbox : 弹性盒子布局</p><p>padding vs margin</p><h2 id="导航系统" tabindex="-1"><a class="header-anchor" href="#导航系统" aria-hidden="true">#</a> 导航系统</h2><ul><li><p>Navigator 2.0</p><p>页面导航管理 1.0 版本存在很多问题</p></li></ul><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><h2 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理" aria-hidden="true">#</a> 状态管理</h2>',24),b={href:"https://flutter.cn/community/tutorials/state-management-package-getx-provider-analysis",target:"_blank",rel:"noopener noreferrer"},g={href:"https://juejin.cn/post/6984593635681517582",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/7012044249386450981",target:"_blank",rel:"noopener noreferrer"},k=i('<h2 id="渲染引擎" tabindex="-1"><a class="header-anchor" href="#渲染引擎" aria-hidden="true">#</a> 渲染引擎</h2><ul><li>Key <ul><li>GlobalKey</li><li>LocalKey <ul><li>ValueKey</li><li>ObjectKey</li><li>UniqueKey</li></ul></li></ul></li></ul><p>增量渲染</p><h2 id="热重载" tabindex="-1"><a class="header-anchor" href="#热重载" aria-hidden="true">#</a> 热重载</h2><p>flutter_tools</p><h2 id="线程模型" tabindex="-1"><a class="header-anchor" href="#线程模型" aria-hidden="true">#</a> 线程模型</h2><ul><li><p><code>Flutter</code> 的线程模型 : 双队列设计(微任务队列和事件队列)，微任务队列比事件队列具有更高优先级。</p></li><li><p><code>Flutter</code> 的线程管理 : 4 个 Runner Thread ()</p></li><li><p>Microtask : 微任务</p></li><li><p>Isolate : 独立线程</p></li></ul><h2 id="播放器" tabindex="-1"><a class="header-anchor" href="#播放器" aria-hidden="true">#</a> 播放器</h2><blockquote><p>常用的播放器有哪些？</p></blockquote><ul><li>video_player : <code>flutter</code> 官方提供的播放器</li><li>video_player_plus : 扩展的 <code>video_player</code></li><li>Chewie : 封装的 <code>video_player</code></li><li>FijkPlayer : 封装的 <code>ijkPlayer</code></li></ul><blockquote><p>FijkPlayer 状态机</p></blockquote><p><code>IDLE</code> -&gt; <code>Initialized</code> -&gt; <code>Async Preparing</code> -&gt; <code>Prepared</code> -&gt; <code>Started</code> &lt;--&gt; <code>Paused</code> -&gt; <code>Completed</code> -&gt; <code>Stopped</code> -&gt; <code>Error</code> -&gt; <code>End</code></p><blockquote><p>播放器的插件化</p></blockquote><p>插件引用方式</p><ul><li>Local</li><li>Git</li><li>Pub</li></ul><h2 id="lib" tabindex="-1"><a class="header-anchor" href="#lib" aria-hidden="true">#</a> lib</h2>',16),x={href:"https://github.com/jonataslaw/getx",target:"_blank",rel:"noopener noreferrer"},v=e("blockquote",null,[e("p",null,"Open screens/snackbars/dialogs/bottomSheets without context, manage states and inject dependencies easily with Get.")],-1),j={href:"https://github.com/alibaba/flutter_boost",target:"_blank",rel:"noopener noreferrer"},w=e("blockquote",null,[e("p",null,"FlutterBoost is a Flutter plugin which enables hybrid integration of Flutter for your existing native apps with minimum efforts")],-1),y=e("h2",{id:"interview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interview","aria-hidden":"true"},"#"),t(" interview")],-1),F={href:"https://github.com/h65wang/flutter_interview_questions",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/hornhuang/flutter_interviews",target:"_blank",rel:"noopener noreferrer"},S=e("blockquote",null,[e("p",null,"🇨🇳 面试题、学习资料、私房菜，这里是 flutter 中文学习宝库 👩‍🎓‍👜，想要的知识应有尽有，点击 star 不迷路！ 🌟🌟")],-1),q=e("hr",null,null,-1),P={href:"https://juejin.cn/post/7093388612078665764",target:"_blank",rel:"noopener noreferrer"},A={href:"https://juejin.cn/post/7056646298073563166",target:"_blank",rel:"noopener noreferrer"},B={href:"https://juejin.cn/post/6844904199726039054",target:"_blank",rel:"noopener noreferrer"},I={href:"https://juejin.cn/post/6844904136937324552",target:"_blank",rel:"noopener noreferrer"};function W(E,L){const l=a("ExternalLinkIcon");return n(),d("div",null,[c(" more "),e("ul",null,[e("li",null,[e("a",h,[t("2023-10-23 FlutterCandies"),r(l)])]),e("li",null,[e("a",u,[t("2018-09-03 Flutter快速上车之Widget"),r(l)])])]),p,e("ul",null,[e("li",null,[e("a",f,[t("2018-08-28 深入理解Flutter Platform Channel"),r(l)])])]),_,e("ul",null,[e("li",null,[e("a",b,[t("Flutter 状态管理框架 Provider 和 Get 分析"),r(l)])]),e("li",null,[e("a",g,[t("2021-07-14 Flutter GetX深度剖析"),r(l)])]),e("li",null,[e("a",m,[t("2021-09-26 Flutter 对状态管理的认知与思考"),r(l)])])]),k,e("ul",null,[e("li",null,[e("a",x,[t("GetX"),r(l)]),v]),e("li",null,[e("a",j,[t("flutter_boost"),r(l)]),w])]),y,e("ul",null,[e("li",null,[e("a",F,[t("Flutter Interview Questions"),r(l)])]),e("li",null,[e("a",C,[t("flutter_interviews"),r(l)]),S])]),q,e("ul",null,[e("li",null,[e("a",P,[t("2022-05-03 浅谈 Flutter 编译原理"),r(l)])]),e("li",null,[e("a",A,[t("2022-01-24 知道 Flutter 生命周期？"),r(l)])]),e("li",null,[e("a",B,[t("2020-06-26 算是flutter最完整题库了"),r(l)])]),e("li",null,[e("a",I,[t("2020-04-24 Android-Flutter面经"),r(l)])])])])}const G=o(s,[["render",W],["__file","flutter.html.vue"]]);export{G as default};
