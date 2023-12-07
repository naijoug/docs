import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as a,c as r,a as l,b as e,d as h,w as u,e as o,f as i}from"./app-86YT7tYj.js";const p={},s=e("h2",{id:"memory-内存",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#memory-内存","aria-hidden":"true"},"#"),o(" memory - “内存”")],-1),b=i('<blockquote><p>一张 100*100 的 RGBA 格式的图片占用多少内存？</p></blockquote><p>首先计算每个像素点占用内存，RGBA 格式的图片由于占用 4 个字节， 然后图片大小为 100*100 = 10000 像素点 (≈ 10240 = 10 * 1024 = 10kb) 所有最后结果为: 4 * 10kb = 40kb</p><blockquote><p>如何计算一个像素点的大小和一张图的大小？</p></blockquote><h2 id="thread-线程" tabindex="-1"><a class="header-anchor" href="#thread-线程" aria-hidden="true">#</a> thread - “线程”</h2><blockquote><p>什么是线程安全？</p></blockquote><blockquote><p>常见的锁有哪些？那个性能最差？</p></blockquote><h2 id="network-网络" tabindex="-1"><a class="header-anchor" href="#network-网络" aria-hidden="true">#</a> network - “网络”</h2><blockquote><p>如果手机应用与服务器通过 <code>TCP</code> 连接，这个时候手机切换为飞行模式，服务器可以短时间内知道到手机离线状态吗？</p></blockquote><p>服务器通过 <code>TCP</code> 短时间内是不能知晓手机的离线状态的。因为 <code>TCP</code> 主要是为了保证数据的可靠传输，通信双方是通过数据交换来了解对方状态。而 <code>TCP</code> 并没有设计心跳检测机制，所有就没有实时检测对方是否离线的能力。</p><blockquote><p>三次握手可以携带数据吗？</p></blockquote><blockquote><p>打开浏览器，输入网址到看到网站首页都经历那些过程？</p></blockquote><blockquote><p>使用 <code>ssh</code> 连接云服务器，整个网络通信过程？</p></blockquote><blockquote><p><code>Charles</code> 抓包软件的原理</p></blockquote><p>可以将它理解成中间人攻击。客户端将 <code>Charles</code> 作为代理服务器(中间人)。客户端所有请求都会先发送给 <code>Charles</code>，<code>Charles</code> 再将客户端的请求转发给服务器。<code>Charles</code> 收到服务器响应之后，再将从服务器收到的回复内容转发给客户端。这样请求和响应数据都被 <code>Charles</code> 记录下来，再通过界面展示即可。</p><p>对于 <code>HTTP</code> 相对来说比较简单，直接进行接收和转发即可。而 <code>HTTPS</code> 中涉及 <code>CA</code> 认证，所以客户端需要进行的操作信任 <code>Charles</code> 的证书，这样通过 <code>Charles</code> 发送给客户端的公钥就可以通过这个证书校验成功，从而完成通信。</p><h2 id="system-操作系统" tabindex="-1"><a class="header-anchor" href="#system-操作系统" aria-hidden="true">#</a> system - “操作系统”</h2><blockquote><p><code>CPU</code> 是如何调用 <code>GPU</code>？</p></blockquote><p>图像的成像原理 : 计算中的图像的展示，需要 <code>CPU</code>、<code>GPU</code> 和显示器合作完成。<code>CPU</code> 负责计算图像哪些数据需要显示，<code>GPU</code> 负责将需要显示的图像数据渲染，然后放入缓存区，显示器读取缓存区数据将图像显示出来。</p><blockquote><p><code>backtrace</code> 是在用户态实现吗？</p></blockquote><p>先理解两个概念 : <code>backtrace</code>、用户态</p><ul><li><code>backtrace</code> 是回溯栈，记录程序运行过程中的调用栈信息，当程序 <code>Crash</code> 时，可以通过这个信息了解程序崩溃的上下文，调试程序问题。</li><li>用户态是属于操作系统的一个分区概念，主要分为内核态和用户态。两者的区别的是为了保证内核安全，只有以内核态运行的程序才具备操作系统所有资源的访问权限，而以用户态运行的程序会受到限制，这样是为了保证操作系统的稳定运行。</li></ul><h2 id="data-structure-数据结构" tabindex="-1"><a class="header-anchor" href="#data-structure-数据结构" aria-hidden="true">#</a> data structure - “数据结构”</h2><blockquote><p>如何从 100 亿 <code>URL</code> 中找出形同的 <code>URL</code>？给定 a、b 两个文件，各存放 50 亿各 <code>URL</code>，每个 <code>URL</code> 各占 64B，内存限制为 4G。找出 a、b 两个文件中相同的 <code>URL</code>。</p></blockquote><p>先计算 100 亿占用内存空间: 100 * 10000 * 10000 * 64B = 1000 * 1000 * 1000 * 10 * 64B ≈ 1024 * 1024 * 1024 * 640B = 640GB</p><h2 id="algorithm-算法" tabindex="-1"><a class="header-anchor" href="#algorithm-算法" aria-hidden="true">#</a> algorithm - “算法”</h2><blockquote><p>大数相加</p></blockquote><blockquote><p>树的遍历</p></blockquote><ul><li><p>前、中、后序遍历</p></li><li><p>层序遍历</p></li></ul><h2 id="architecture-架构" tabindex="-1"><a class="header-anchor" href="#architecture-架构" aria-hidden="true">#</a> architecture - “架构”</h2><blockquote><p>如何设计一个网络库？</p></blockquote><blockquote><p>持续集成方案？</p></blockquote>',31);function n(k,q){const c=t("RouterLink");return a(),r("div",null,[l(" more "),s,e("p",null,[h(c,{to:"/article/programmer/memory.html"},{default:u(()=>[o("“内存”那些事")]),_:1})]),b])}const _=d(p,[["render",n],["__file","interview.html.vue"]]);export{_ as default};
