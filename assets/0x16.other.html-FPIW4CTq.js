import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as d,a as i,f as s}from"./app-9H1pRb3K.js";const r={},t=s('<hr><h2 id="综合性问题" tabindex="-1"><a class="header-anchor" href="#综合性问题" aria-hidden="true">#</a> 综合性问题</h2><h3 id="❓apn-的基本原理" tabindex="-1"><a class="header-anchor" href="#❓apn-的基本原理" aria-hidden="true">#</a> ❓<code>APN</code> 的基本原理</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓ios-是如何进行资源管理的" tabindex="-1"><a class="header-anchor" href="#❓ios-是如何进行资源管理的" aria-hidden="true">#</a> ❓<code>iOS</code> 是如何进行资源管理的</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓苹果使用证书的目的是什么" tabindex="-1"><a class="header-anchor" href="#❓苹果使用证书的目的是什么" aria-hidden="true">#</a> ❓苹果使用证书的目的是什么</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓xcode-证书校验流程" tabindex="-1"><a class="header-anchor" href="#❓xcode-证书校验流程" aria-hidden="true">#</a> ❓<code>Xcode</code> 证书校验流程</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓xcode-打包流程" tabindex="-1"><a class="header-anchor" href="#❓xcode-打包流程" aria-hidden="true">#</a> ❓<code>Xcode</code> 打包流程</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓pki-体系当中加密和签名有什么区别" tabindex="-1"><a class="header-anchor" href="#❓pki-体系当中加密和签名有什么区别" aria-hidden="true">#</a> ❓<code>PKI</code> 体系当中加密和签名有什么区别？</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓appstore-安装-app-时的认证流程" tabindex="-1"><a class="header-anchor" href="#❓appstore-安装-app-时的认证流程" aria-hidden="true">#</a> ❓<code>AppStore</code> 安装 <code>app</code> 时的认证流程</h3><details class="hint-container details"><summary>💡</summary></details><hr><h2 id="开源库" tabindex="-1"><a class="header-anchor" href="#开源库" aria-hidden="true">#</a> 开源库</h2><h3 id="❓pod-对应的产物是什么-自己有没有编写过-library" tabindex="-1"><a class="header-anchor" href="#❓pod-对应的产物是什么-自己有没有编写过-library" aria-hidden="true">#</a> ❓<code>pod</code> 对应的产物是什么，自己有没有编写过 <code>library</code></h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓说说你最熟悉的第三方-知晓其原理吗" tabindex="-1"><a class="header-anchor" href="#❓说说你最熟悉的第三方-知晓其原理吗" aria-hidden="true">#</a> ❓说说你最熟悉的第三方，知晓其原理吗</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓yyasynclayer-如何异步绘制" tabindex="-1"><a class="header-anchor" href="#❓yyasynclayer-如何异步绘制" aria-hidden="true">#</a> ❓<code>YYAsyncLayer</code> 如何异步绘制</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓afnetworking-的底层原理" tabindex="-1"><a class="header-anchor" href="#❓afnetworking-的底层原理" aria-hidden="true">#</a> ❓<code>AFNetworking</code> 的底层原理</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓afnetworking-2-0-中常驻线程设计是为了解决什么问题" tabindex="-1"><a class="header-anchor" href="#❓afnetworking-2-0-中常驻线程设计是为了解决什么问题" aria-hidden="true">#</a> ❓<code>AFNetworking</code> 2.0 中常驻线程设计是为了解决什么问题</h3><details class="hint-container details"><summary>💡</summary><p>AFNetworking 2.0中的AFURLConnectionOperation类中确实存在一个常驻线程的设计。其是为了解决NSURLConnection的异步操作的线程问题。</p><p>如果我们创建一个新线程，并在新线程中创建一个异步NSURLConnection网络请求，这个请求只有在runloop运行的时候才会进行。如果新线程的工作一旦完成就退出了，那么NSURLConnection的异步请求就被中断了，所以在网络请求期间这个线程必须被保活，保证其runloop在请求完成之前一直是在运行状态。</p><p>所以，AFNetworking创建了一个常驻线程，把所有的网络请求的操作（NSURLSession和NSURLConnection）都放到这个线程的runloop中，完全避免了新建线程的开销以及由于线程退出导致的网络请求被中断问题。这样，无论发起多少个网络请求，都只有一个线程在执行，避免了频繁的线程切换和大量线程并发所带来的性能问题。</p></details><h3 id="❓sdwebimage-的缓存机制" tabindex="-1"><a class="header-anchor" href="#❓sdwebimage-的缓存机制" aria-hidden="true">#</a> ❓<code>SDWebImage</code> 的缓存机制</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓sdwebimage-是如何解决-uitableviewcell-复用时出现图片错乱问题" tabindex="-1"><a class="header-anchor" href="#❓sdwebimage-是如何解决-uitableviewcell-复用时出现图片错乱问题" aria-hidden="true">#</a> ❓<code>SDWebImage</code> 是如何解决 <code>UITableViewCell</code> 复用时出现图片错乱问题</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓如何从磁盘快速显示图片-sdwebimage-做了什么" tabindex="-1"><a class="header-anchor" href="#❓如何从磁盘快速显示图片-sdwebimage-做了什么" aria-hidden="true">#</a> ❓如何从磁盘快速显示图片，<code>SDWebImage</code> 做了什么</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓sdwebimage-的清除缓存策略" tabindex="-1"><a class="header-anchor" href="#❓sdwebimage-的清除缓存策略" aria-hidden="true">#</a> ❓<code>SDWebImage</code> 的清除缓存策略</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓jspatch、aspects" tabindex="-1"><a class="header-anchor" href="#❓jspatch、aspects" aria-hidden="true">#</a> ❓<code>JSPatch</code>、<code>Aspects</code></h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓jspatch-是如何处理-block-的" tabindex="-1"><a class="header-anchor" href="#❓jspatch-是如何处理-block-的" aria-hidden="true">#</a> ❓<code>JSPatch</code> 是如何处理 <code>block</code> 的</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓yymodel-的实现原理" tabindex="-1"><a class="header-anchor" href="#❓yymodel-的实现原理" aria-hidden="true">#</a> ❓<code>YYModel</code> 的实现原理</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓alamofire-的实现原理" tabindex="-1"><a class="header-anchor" href="#❓alamofire-的实现原理" aria-hidden="true">#</a> ❓<code>Alamofire</code> 的实现原理</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓rxswift-的实现原理" tabindex="-1"><a class="header-anchor" href="#❓rxswift-的实现原理" aria-hidden="true">#</a> ❓<code>RxSwift</code> 的实现原理</h3><details class="hint-container details"><summary>💡</summary></details><hr><h2 id="调试" tabindex="-1"><a class="header-anchor" href="#调试" aria-hidden="true">#</a> 调试</h2><h3 id="❓如何检测野指针" tabindex="-1"><a class="header-anchor" href="#❓如何检测野指针" aria-hidden="true">#</a> ❓如何检测野指针</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓bad-access-在什么情况下出现-如何调试-bad-access-错误" tabindex="-1"><a class="header-anchor" href="#❓bad-access-在什么情况下出现-如何调试-bad-access-错误" aria-hidden="true">#</a> ❓<code>BAD_ACCESS</code> 在什么情况下出现？如何调试 <code>BAD_ACCESS</code> 错误？</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓lldb-gdb-常用的调试命令" tabindex="-1"><a class="header-anchor" href="#❓lldb-gdb-常用的调试命令" aria-hidden="true">#</a> ❓<code>lldb (gdb)</code> 常用的调试命令？</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓怎么检测图层混合" tabindex="-1"><a class="header-anchor" href="#❓怎么检测图层混合" aria-hidden="true">#</a> ❓怎么检测图层混合？</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓日常如何检查内存泄漏" tabindex="-1"><a class="header-anchor" href="#❓日常如何检查内存泄漏" aria-hidden="true">#</a> ❓日常如何检查内存泄漏？</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓oom-out-of-memory-类型的崩溃介绍下-怎么检测-怎么处理" tabindex="-1"><a class="header-anchor" href="#❓oom-out-of-memory-类型的崩溃介绍下-怎么检测-怎么处理" aria-hidden="true">#</a> ❓<code>OOM</code>(Out Of Memory) 类型的崩溃介绍下, 怎么检测, 怎么处理?</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓不使用-instruments-如何检测-memory-leak-zombie-object-等问题" tabindex="-1"><a class="header-anchor" href="#❓不使用-instruments-如何检测-memory-leak-zombie-object-等问题" aria-hidden="true">#</a> ❓不使用 <code>instruments</code>，如何检测 <code>memory leak</code>, <code>zombie object</code> 等问题？</h3><details class="hint-container details"><summary>💡</summary></details><hr><h2 id="web" tabindex="-1"><a class="header-anchor" href="#web" aria-hidden="true">#</a> Web</h2><h3 id="❓web-登录时怎么保持会话状态的" tabindex="-1"><a class="header-anchor" href="#❓web-登录时怎么保持会话状态的" aria-hidden="true">#</a> ❓<code>Web</code> 登录时怎么保持会话状态的？</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓web-渲染和-native-渲染有什么异同点" tabindex="-1"><a class="header-anchor" href="#❓web-渲染和-native-渲染有什么异同点" aria-hidden="true">#</a> ❓<code>Web</code> 渲染和 <code>Native</code> 渲染有什么异同点？</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓web-和-native-怎么共享-cookie" tabindex="-1"><a class="header-anchor" href="#❓web-和-native-怎么共享-cookie" aria-hidden="true">#</a> ❓<code>Web</code> 和 <code>Native</code> 怎么共享 <code>cookie</code>？</h3><details class="hint-container details"><summary>💡</summary></details><hr><h2 id="开放性问题" tabindex="-1"><a class="header-anchor" href="#开放性问题" aria-hidden="true">#</a> 开放性问题</h2><h3 id="❓平常有看过什么技术书籍吗" tabindex="-1"><a class="header-anchor" href="#❓平常有看过什么技术书籍吗" aria-hidden="true">#</a> ❓平常有看过什么技术书籍吗？</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓什么时候接触ios开发-学习路径" tabindex="-1"><a class="header-anchor" href="#❓什么时候接触ios开发-学习路径" aria-hidden="true">#</a> ❓什么时候接触<code>iOS</code>开发，学习路径？</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓你是如何学习提升-ios-相关知识技能" tabindex="-1"><a class="header-anchor" href="#❓你是如何学习提升-ios-相关知识技能" aria-hidden="true">#</a> ❓你是如何学习提升 <code>iOS</code> 相关知识技能？</h3><details class="hint-container details"><summary>💡</summary></details>',78);function h(c,n){return e(),d("div",null,[i(" more "),t])}const m=a(r,[["render",h],["__file","0x16.other.html.vue"]]);export{m as default};
