import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as n,c as h,a as c,b as t,e,d as r,f as l}from"./app-51pB87w6.js";const i={},s=t("h2",{id:"reference",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),e(" reference")],-1),u={href:"https://www.zhihu.com/question/19732473/answer/241673170",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.zhihu.com/question/421584363/answer/3169829106",target:"_blank",rel:"noopener noreferrer"},p=l(`<h2 id="进程-线程" tabindex="-1"><a class="header-anchor" href="#进程-线程" aria-hidden="true">#</a> 进程 &amp; 线程</h2><ul><li>进程 : 一个运行的程序，分配独立的内存空间</li><li>线程 : 共享进程中的内存空间</li></ul><blockquote><p>死锁 : 当多个线程完成功能需要同时获取多个共享资源的时候可能会导致死锁</p></blockquote><h3 id="哲学家就餐问题" tabindex="-1"><a class="header-anchor" href="#哲学家就餐问题" aria-hidden="true">#</a> 哲学家就餐问题</h3><p>5个哲学家吃中餐，坐在圆卓子旁。每人有5根筷子（不是5双），每两个人中间放一根，哲学家时而思考，时而进餐。每个人都需要一双筷子才能吃到东西，吃完后将筷子放回原处继续思考，如果每个人都立刻抓住自己左边的筷子，然后等待右边的筷子空出来，同时又不放下已经拿到的筷子，这样每个人都无法得到1双筷子，无法吃饭都会饿死，这种情况就会产生死锁：每个人都拥有其他人需要的资源，同时又等待其他人拥有的资源，并且每个人在获得所有需要的资源之前都不会放弃已经拥有的资源。</p><h3 id="线程状态" tabindex="-1"><a class="header-anchor" href="#线程状态" aria-hidden="true">#</a> 线程状态</h3><table><thead><tr><th>状态</th><th>说明</th></tr></thead><tbody><tr><td>创建</td><td>新创建了一个线程对象。</td></tr><tr><td>可运行</td><td>线程对象创建后，其他线程调用了该对象的<code>start()</code>方法。该状态的线程位于可运行线程池中，变得可运行，等待获取<code>CPU</code>的执行权。</td></tr><tr><td>运行</td><td>就绪状态的线程获取了<code>CPU</code>执行权，执行程序代码。</td></tr><tr><td>阻塞</td><td>阻塞状态是线程因为某种原因放弃<code>CPU</code>使用权，暂时停止运行。直到线程进入就绪状态，才有机会转到运行状态。</td></tr><tr><td>死亡</td><td>线程执行完它的任务时。</td></tr></tbody></table><h3 id="线程队列" tabindex="-1"><a class="header-anchor" href="#线程队列" aria-hidden="true">#</a> 线程队列</h3><ul><li>串行队列，队列中的任务只会顺序执行</li><li>并行队列，队列中的任务通常会并发执行</li></ul><table><thead><tr><th>队列 \\ 任务</th><th>同步</th><th>异步</th></tr></thead><tbody><tr><td>串行</td><td>不需要创建线程</td><td>需要创建一个子线程</td></tr><tr><td>并行</td><td>不需要创建线程</td><td>多个任务，需要创建多个子线程</td></tr></tbody></table><h2 id="io-模型" tabindex="-1"><a class="header-anchor" href="#io-模型" aria-hidden="true">#</a> <code>IO</code> 模型</h2><table><thead><tr><th>\\</th><th>同步</th><th>异步</th></tr></thead><tbody><tr><td>阻塞</td><td>同步阻塞I/O模型</td><td>异步阻塞I/O模型</td></tr><tr><td>非阻塞</td><td>同步非阻塞I/O模型</td><td><strong>异步非阻塞I/O模型</strong></td></tr></tbody></table><blockquote><p>一般我们所说的<em>异步I/O模型</em>通常指的是<strong>异步非阻塞模型</strong>。</p></blockquote><h3 id="同步-异步" tabindex="-1"><a class="header-anchor" href="#同步-异步" aria-hidden="true">#</a> 同步 &amp; 异步</h3><blockquote><p>描述的是程序在请求I/O操作（如读或写操作）后，是否需要等待该操作完成才能继续执行后续操作。</p></blockquote><ul><li>同步(<code>Synchronous</code>)：一个I/O操作的请求会导致程序挂起，直到该操作完成，程序才会继续执行。</li><li>异步(<code>Asynchronous</code>)：一个I/O操作的请求并不会导致程序挂起，而是立即返回，让程序可以执行其他操作。当该I/O操作完成时，程序会收到一个通知，告诉它操作已经完成，可以处理结果了。</li></ul><h3 id="阻塞和非阻塞" tabindex="-1"><a class="header-anchor" href="#阻塞和非阻塞" aria-hidden="true">#</a> 阻塞和非阻塞</h3><blockquote><p>描述的是程序在请求I/O操作时，如果数据还没准备好，程序是否需要等待数据准备好。</p></blockquote><ul><li>阻塞(<code>Blocking</code>)：如果数据还没准备好，程序会暂停执行，等待数据准备好。</li><li>非阻塞(<code>Nonblocking</code>)：如果数据还没有准备好，请求会立即返回，程序可以去做其他的事情。程序需要不断地主动检查数据是否已经准备好。</li></ul><h3 id="经典故事" tabindex="-1"><a class="header-anchor" href="#经典故事" aria-hidden="true">#</a> 经典故事</h3><pre><code>老张爱喝茶，废话不说，煮开水。
出场人物：老张，水壶两把（普通水壶，简称水壶；会响的水壶，简称响水壶）。

&gt;1 老张把水壶放到火上，立等水开。（同步阻塞）
老张觉得自己有点傻

&gt;2 老张把水壶放到火上，去客厅看电视，时不时去厨房看看水开没有。（同步非阻塞）
老张还是觉得自己有点傻，于是变高端了，买了把会响笛的那种水壶。水开之后，能大声发出嘀~~~~的噪音。

&gt;3 老张把响水壶放到火上，立等水开。（异步阻塞）
老张觉得这样傻等意义不大

&gt;4 老张把响水壶放到火上，去客厅看电视，水壶响之前不再去看它了，响了再去拿壶。（异步非阻塞）
老张觉得自己聪明了。

&gt; 所谓同步异步，只是对于水壶而言。
普通水壶，同步；响水壶，异步。
虽然都能干活，但响水壶可以在自己完工之后，提示老张水开了。这是普通水壶所不能及的。
同步只能让调用者去轮询自己（情况2中），造成老张效率的低下。

&gt; 所谓阻塞非阻塞，仅仅对于老张而言。
立等的老张，阻塞；看电视的老张，非阻塞。
情况1和情况3中老张就是阻塞的，媳妇喊他都不知道。虽然3中响水壶是异步的，可对于立等的老张没有太大的意义。
所以一般异步是配合非阻塞使用的，这样才能发挥异步的效用。
</code></pre><h2 id="并行-并发" tabindex="-1"><a class="header-anchor" href="#并行-并发" aria-hidden="true">#</a> 并行 &amp; 并发</h2><ul><li><p>并行(<code>Parallelism</code>)：两个或两个以上的任务或过程在同一时间（并行地）执行。通常情况下，为了实现并行处理，计算机系统必须有多个处理器。</p></li><li><p>并发(<code>Concurrency</code>)：同一时间间隔内执行两个或两个以上的任务或过程。简而言之，它使得一个计算机系统能够在一个时间段内处理多个任务。</p></li></ul><blockquote><p>&quot;并发&quot;可以在单个处理器上下文中通过时分复用技术处理多个任务，而&quot;并行&quot;则需要多个处理器。</p></blockquote>`,24);function f(_,m){const d=o("ExternalLinkIcon");return n(),h("div",null,[c(" more "),s,t("ul",null,[t("li",null,[t("a",u,[e("怎样理解阻塞非阻塞与同步异步的区别？"),r(d)])]),t("li",null,[t("a",b,[e("为什么Linux下没有真正的异步IO模型？"),r(d)])])]),p])}const q=a(i,[["render",f],["__file","thread.html.vue"]]);export{q as default};
