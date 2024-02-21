import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,a as t,f as e}from"./app-fqDzxcod.js";const o={},p=e(`<h3 id="❓dart-是不是单线程模型-是如何运行的" tabindex="-1"><a class="header-anchor" href="#❓dart-是不是单线程模型-是如何运行的" aria-hidden="true">#</a> ❓<code>Dart</code> 是不是单线程模型，是如何运行的</h3><details class="hint-container details"><summary>💡</summary><p>是的，Dart是单线程执行模型，它的并发模型基于&quot;事件循环&quot;。</p><p>Dart使用单线程事件循环模型，所有的Dart代码在一个称为&quot;Isolate&quot;的单线程执行环境中运行。每个Isolate有自己的内存堆，不同的Isolate之间不能共享内存，只能通过消息传递来交互。</p><p>事件循环可以看作是一个大循环，在这个循环中，Dart语言会不断去检查事件队列，如果有事件（如用户交互、I/O、计时器等）就处理事件，事件处理完后再去检查下一个事件，如果事件队列为空则等待事件的发生。</p><p>由于Dart是单线程模型，所以针对某个特定的任务，假如这个任务特别耗时，会占据线程大量时间，其他任务就无法得到及时的处理，因此Dart中有&quot;Microtask&quot; 和 &quot;Event&quot; 两种任务队列，Microtask 队列优先级高于 Event队列，执行顺序为：先执行所有 Microtask 任务，然后再处理一个 Event 任务，再执行此 Event 产生的所有 Microtask，依此类推。</p><p>在处理异步任务（如网络请求）时，Dart语言提供了Future和async/await的编程模式，使开发者可以用同步的方式书写和理解异步代码。</p></details><h3 id="❓dart-多任务如何并行的" tabindex="-1"><a class="header-anchor" href="#❓dart-多任务如何并行的" aria-hidden="true">#</a> ❓<code>Dart</code> 多任务如何并行的</h3><details class="hint-container details"><summary>💡</summary><p>Dart 本身是单线程的，它依赖于事件循环和异步编程以便在单一线程中完成尽可能多的任务。然而，对于需要并行计算或者诸如文件读写等阻塞性操作，Dart 提供了 &quot;Isolate&quot; 的概念。</p><p>Isolate 可以被看作是 Dart 的轻量级线程。每个 Isolate 有其自己的内存堆并且不与其他 Isolate 共享内存。这避免了多线程环境中的常见问题，如线程锁定和数据紊乱等，并增强了安全性。但是，因为内存不共享，所以 Isolates 之间只能通通过消息传递进行通信。</p><p>这就是 Dart 如何实现并发的：你可以在单线程中处理异步任务，如果需要任务并行计算则可以创建多个 Isolates 来执行任务。</p><p>要注意的是，虽然每个 Isolate 有自己的事件队列，但是创建、启动和管理 Isolate 需要相对较重的资源（比如内存和计算时间），并且消息传递和上下文切换也有一些开销。所以在确实需要的情况下才使用 Isolate 进行并发操作，例如处理 CPU 密集型任务或者进行大量的 I/O 操作。</p></details><h3 id="❓future-与-microtask-两者的执行顺序" tabindex="-1"><a class="header-anchor" href="#❓future-与-microtask-两者的执行顺序" aria-hidden="true">#</a> ❓<code>Future</code> 与 <code>microtask</code> 两者的执行顺序</h3><details class="hint-container details"><summary>💡</summary><p>Dart 中的事件队列分为两种，一个是事件队列 Event Queue，另一个是微任务队列 Microtask Queue。</p><p>Future 和 Microtask 都是异步操作，但当你将它们添加到事件循环时，它们的处理顺序是不同的。</p><p>Future 是将任务添加到 Event Queue 中，然后按照事件顺序来处理。</p><p>而 Microtask 是将任务添加到 Microtask Queue 中，而 Microtask Queue 的优先级高于 Event Queue。</p><p>所以，执行顺序一般来说，Microtask 会在 Future 之前执行。</p><p>具体的运行机制是这样的：</p><ol><li><p>Event 循环从 Microtask Queue 中获取任务，如果 Microtask Queue 中有任务，那么一直执行到 Microtask Queue为空。</p></li><li><p>当 Microtask Queue 为空时，Event 循环会检查 Event Queue，如果有任务，那么取出一个执行，然后再去执行 Microtask Queue 中的任务。</p></li><li><p>循环上述两步。</p></li></ol><p>因此，当两者同时存在时，Microtask 会被首先执行。</p></details><h3 id="❓isolate-compute-是如何运行的" tabindex="-1"><a class="header-anchor" href="#❓isolate-compute-是如何运行的" aria-hidden="true">#</a> ❓<code>isolate</code> <code>compute</code> 是如何运行的？</h3><details class="hint-container details"><summary>💡</summary><p>在Dart中，所有代码默认都在称为主Isolate的单线程中运行。这就意味着，即使你的设备有多个CPU核心，你的Dart代码也只能在一个核心上运行。</p><p>然而，Dart语言提供了一种机制，可以在不同的线程上执行代码，这就是Isolate。每个Isolate都有自己的内存堆和事件循环，所以它们可以并行运行，而不需要担心线程安全问题。</p><p>以下是一个创建新的Isolate的例子：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:isolate&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Isolate</span><span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span>printMessage<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Hello, Isolate!&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们首先创建了一个新的Isolate并在其中运行了<code>printMessage</code>函数，并给它传递了一个字符串参数。</p><p>不过，创建新的Isolate是一个相对复杂且开销较大的操作。如果你只是需要在后台执行一项短期且有限的计算任务，那么Dart还提供了一个<code>compute</code>函数，这个函数会创建一个新的Isolate，执行给定的函数，并返回结果。当计算完成后，这个Isolate会被自动销毁。</p><p>以下是一个使用<code>compute</code>函数的例子：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:isolate&#39;</span></span><span class="token punctuation">;</span>

int <span class="token function">longRunningCalculation</span><span class="token punctuation">(</span>int value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// This could be a CPU-intensive operation that lasts a long time.</span>
  <span class="token keyword">return</span> value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  int result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">compute</span><span class="token punctuation">(</span>longRunningCalculation<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Will print: 20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们使用<code>compute</code>函数在新的Isolate中执行<code>longRunningCalculation</code>函数，并返回结果。这允许我们在后台进行CPU密集型计算，而不会阻塞UI或其他操作。</p></details>`,8);function i(c,l){return n(),s("div",null,[t(" more "),p])}const d=a(o,[["render",i],["__file","0x04.thread.html.vue"]]);export{d as default};