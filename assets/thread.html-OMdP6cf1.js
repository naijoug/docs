import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as r,c as d,a,b as e,e as t,d as c,f as n}from"./app-NiSSZH60.js";const p={},h=e("h1",{id:"multithread",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#multithread","aria-hidden":"true"},"#"),t(" Multithread")],-1),s=e("blockquote",null,[e("p",null,"多线程")],-1),u=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),t(" Reference")],-1),m={href:"https://www.zhihu.com/question/19732473/answer/20851256",target:"_blank",rel:"noopener noreferrer"},_=n('<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><ul><li><p>真正意义上的 异步IO 是说内核直接将数据拷贝至用户态的内存单元，再通知程序直接去读取数据。</p></li><li><p>select / poll / epoll 都是同步IO的多路复用模式</p></li><li><p>同步和异步</p><ul><li>同步和异步关注的是消息通信机制</li><li>所谓同步，就是在发出一个<em>调用</em>时，没得到结果之前，该<em>调用</em>就不返回。但是一旦调用返回就得到返回值了，<em>调用者</em>主动等待这个<em>调用</em>的结果</li><li>所谓异步，就是在发出一个<em>调用</em>时，这个<em>调用</em>就直接返回了，不管返回有没有结果。当一个异步过程调用发出后，<em>被调用者</em>通过状态，来通知<em>调用者</em>，或者通过回调函数处理这个调用</li></ul></li><li><p>阻塞和非阻塞</p><ul><li>阻塞和非阻塞关注的是程序在等待调用结果时的状态</li><li>阻塞调用是指调用结果返回之前，当前线程会被挂起。调用线程只有在得到结果之后才返回</li><li>非阻塞调用是指在不能立即得到结果之前，该调用不会阻塞当前线程</li></ul></li><li><p>经典故事</p><blockquote><p>老张爱喝茶，废话不说，煮开水。 出场人物：老张，水壶两把（普通水壶，简称水壶；会响的水壶，简称响水壶）。 1 老张把水壶放到火上，立等水开。（同步阻塞） 老张觉得自己有点傻 2 老张把水壶放到火上，去客厅看电视，时不时去厨房看看水开没有。（同步非阻塞） 老张还是觉得自己有点傻，于是变高端了，买了把会响笛的那种水壶。水开之后，能大声发出嘀~~~~的噪音。 3 老张把响水壶放到火上，立等水开。（异步阻塞） 老张觉得这样傻等意义不大 4 老张把响水壶放到火上，去客厅看电视，水壶响之前不再去看它了，响了再去拿壶。（异步非阻塞） 老张觉得自己聪明了。</p><p>所谓同步异步，只是对于水壶而言。 普通水壶，同步；响水壶，异步。 虽然都能干活，但响水壶可以在自己完工之后，提示老张水开了。这是普通水壶所不能及的。 同步只能让调用者去轮询自己（情况2中），造成老张效率的低下。</p><p>所谓阻塞非阻塞，仅仅对于老张而言。 立等的老张，阻塞；看电视的老张，非阻塞。 情况1和情况3中老张就是阻塞的，媳妇喊他都不知道。虽然3中响水壶是异步的，可对于立等的老张没有太大的意义。所以一般异步是配合非阻塞使用的，这样才能发挥异步的效用。</p></blockquote></li><li><p>进程 &amp; 线程</p><blockquote><p>进程 : 一个运行的程序，分配独立的内存空间</p><p>线程 : 共享进程中的内存空间</p><p>死锁 : 当多个线程完成功能需要同时获取多个共享资源的时候可能会导致死锁</p></blockquote><ul><li>哲学家就餐问题</li></ul><blockquote><p>5个哲学家吃中餐，坐在圆卓子旁。每人有5根筷子（不是5双），每两个人中间放一根，哲学家时而思考，时而进餐。每个人都需要一双筷子才能吃到东西，吃完后将筷子放回原处继续思考，如果每个人都立刻抓住自己左边的筷子，然后等待右边的筷子空出来，同时又不放下已经拿到的筷子，这样每个人都无法得到1双筷子，无法吃饭都会饿死，这种情况就会产生死锁：每个人都拥有其他人需要的资源，同时又等待其他人拥有的资源，并且每个人在获得所有需要的资源之前都不会放弃已经拥有的资源。</p></blockquote><ul><li>线程的状态</li></ul><table><thead><tr><th>状态</th><th>说明</th></tr></thead><tbody><tr><td>创建</td><td>新创建了一个线程对象。</td></tr><tr><td>可运行</td><td>线程对象创建后，其他线程调用了该对象的<code>start()</code>方法。该状态的线程位于可运行线程池中，变得可运行，等待获取<code>CPU</code>的执行权。</td></tr><tr><td>运行</td><td>就绪状态的线程获取了<code>CPU</code>执行权，执行程序代码。</td></tr><tr><td>阻塞</td><td>阻塞状态是线程因为某种原因放弃<code>CPU</code>使用权，暂时停止运行。直到线程进入就绪状态，才有机会转到运行状态。</td></tr><tr><td>死亡</td><td>线程执行完它的任务时。</td></tr></tbody></table></li><li><p>线程队列</p><ul><li>串行队列，队列中的任务只会顺序执行</li><li>并行队列，队列中的任务通常会并发执行</li><li>队列使用 <ul><li>串行队列，同步任务，不需要新建线程</li><li>串行队列，异步任务，需要一个子线程</li><li>并行队列，同步任务，不需要创建线程</li><li>并行队列，异步任务，有多少个任务，就开N个线程执行</li></ul></li></ul></li></ul>',2);function f(b,k){const l=o("ExternalLinkIcon");return r(),d("div",null,[h,s,a(" more "),u,e("ul",null,[e("li",null,[e("a",m,[t("怎样理解阻塞非阻塞与同步异步的区别？"),c(l)])])]),_])}const C=i(p,[["render",f],["__file","thread.html.vue"]]);export{C as default};
