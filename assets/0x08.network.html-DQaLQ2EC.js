import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e,f as o}from"./app-4qjgWOI3.js";const t={},p=o(`<hr><h2 id="urlsession" tabindex="-1"><a class="header-anchor" href="#urlsession" aria-hidden="true">#</a> URLSession</h2><h3 id="❓nsurlsession-vs-nsurlconnection" tabindex="-1"><a class="header-anchor" href="#❓nsurlsession-vs-nsurlconnection" aria-hidden="true">#</a> ❓<code>NSURLSession</code> vs <code>NSURLConnection</code></h3><details class="hint-container details"><summary>💡</summary><p><code>NSURLConnection</code> 和 <code>NSURLSession</code> 都是提供的用于网络请求的类。</p><ul><li><p><strong>NSURLConnection</strong>：<code>iOS 7</code>之前用于处理 <code>HTTP</code>、<code>FTP</code>等协议的网络请求的主要类。</p><blockquote><p>提供了同步和异步两种方式来获取网络数据。由于同步请求会阻塞主线程，因此开发中一般使用异步请求。然而，<code>NSURLConnection</code> 在 <code>iOS 9.0</code> 之后已经被标记为过期。</p></blockquote></li><li><p><strong>NSURLSession</strong>：<code>iOS 7</code>之后引入的新的网络请求类，用于替代<code>NSURLConnection</code>。</p><blockquote><p>相比于<code>NSURLConnection</code>，<code>NSURLSession</code>提供了一些新的特性，例如后台下载、上传任务等。同时，<code>NSURLSession</code>提供了更现代化、组件化的接口，使得网络请求的处理更为方便和灵活。</p></blockquote><p><code>NSURLSession</code> 有 <code>DataTask</code>、<code>UploadTask</code>、<code>DownloadTask</code>三种任务类型，分别对应获取数据、上传和下载文件的操作。对于任务的处理，<code>NSURLSession</code> 采用了 <code>Block</code> 的方式，使得请求的结果处理在同一个地方，更为清晰。</p></li></ul></details><h3 id="❓urlsession-解决了-urlconnection-什么问题" tabindex="-1"><a class="header-anchor" href="#❓urlsession-解决了-urlconnection-什么问题" aria-hidden="true">#</a> ❓URLSession 解决了 URLConnection 什么问题</h3><details class="hint-container details"><summary>💡</summary><ul><li><p><strong>后台传输</strong>：<code>NSURLConnection</code> 不支持在应用退出后继续传输数据，<code>NSURLSession</code> 通过创建后台会话可以在应用处于后台或者被杀死后继续进行数据传输。</p></li><li><p><strong>请求的暂停和续传</strong>：<code>NSURLConnection</code> 无法像 <code>NSURLSession</code> 那样暂停和续传网络请求，因为它并没有提供相应的方法或者对应的操作状态。</p></li><li><p><strong>代理回调</strong>： <code>NSURLConnection</code> 使用代理的方式进行回调，在复杂应用场景下，可能导致代理方法混杂，变得难以管理和维护。而 <code>NSURLSession</code> 则采用了基于 <code>block</code> 的回调方式，更加直观和方便。</p></li><li><p><strong>配置会话</strong>：<code>NSURLSession</code> 提供了 <code>NSURLSessionConfiguration</code> 类，可以用于配置会话的行为，比如请求超时、蜂窝网络是否访问、<code>HTTP</code> 最大并发数等，而 <code>NSURLConnection</code> 则无法做到这些。</p></li><li><p><strong>重用和取消网络请求</strong>：<code>NSURLSession</code> 通过 <code>NSURLSessionTask</code> 对象来管理每个网络请求，每个任务都是可以取消、暂停和恢复的，而 <code>NSURLConnection</code> 则无法做到。</p></li></ul></details><h3 id="❓说一下-nsurlsession-具体的实现原理" tabindex="-1"><a class="header-anchor" href="#❓说一下-nsurlsession-具体的实现原理" aria-hidden="true">#</a> ❓说一下 <code>NSURLSession</code> 具体的实现原理</h3><details class="hint-container details"><summary>💡</summary><ul><li><p><code>NSURLSessionConfiguration</code>：这是一个会话配置对象，它决定了会话的行为模式。</p><blockquote><p>如：允许蜂窝访问、cookie 策略、超时设置、HTTP 管道化等。</p></blockquote></li><li><p><code>NSURLSession</code>：这是网络加载的上下文环境。</p><blockquote><p>它协调一组相关网络数据转换任务的完成。会话中包含一个代理以及一个用来监控特定任务组的进度的委托。</p></blockquote></li><li><p><code>NSURLSessionTask</code>：任务对象负责启动并维护相关的网络操作，提供了开始、暂停、取消任务的操作；并且可以查看传输进度、网络状态等信息。</p><blockquote><p>细分为三个子类，分别是 <code>NSURLSessionDataTask</code>、<code>NSURLSessionUploadTask</code>、<code>NSURLSessionDownloadTask</code>，对应的是数据获取任务、上传任务和下载任务。</p></blockquote></li><li><p><code>NSURLSessionDelegate</code>：会话代理</p><blockquote><p>监听整个会话的事件，比如任务的完成、认证请求、后台下载完成等。</p></blockquote></li><li><p><code>NSURLSessionTaskDelegate</code>：任务代理</p><blockquote><p>监听特定任务的事件，例如上传进度、下载进度等。</p></blockquote></li></ul></details><h3 id="❓断点续传怎么实现-需要设置什么" tabindex="-1"><a class="header-anchor" href="#❓断点续传怎么实现-需要设置什么" aria-hidden="true">#</a> ❓断点续传怎么实现，需要设置什么</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>断点续传：主要是利用 <code>HTTP</code> 协议中的 <code>Range</code> 请求头字段，在发起网络请求时设置 <code>Range</code> 字段，告诉服务器我们需要从哪个字节开始接收数据。</p></blockquote><p>具体实现步骤如下：</p><ul><li><p>在用户暂停或者请求失败等需要断点续传的情况下，需要保存已经接收到的数据长度。</p><blockquote><p>比如使用<code>NSURLSessionDownloadTask</code> 进行下载时，可以调用 <code>cancelByProducingResumeData:</code> 方法获取到一个 <code>NSData</code> 对象，这个对象包含了已经下载数据的长度以及资源的链接等信息，可以保存到本地用于以后恢复下载。</p></blockquote></li><li><p>当需要恢复下载时，可以使用这个 <code>NSData</code> 对象调用 <code>NSURLSession</code> 的 <code>downloadTaskWithResumeData:</code> 方法来创建一个 <code>NSURLSessionDownloadTask</code> 对象，然后再调用 <code>resume</code> 方法，即可完成断点下载。</p></li><li><p>另外一种方法则是，在请求头部添加 <code>Range</code> 字段，值为 <code>bytes=已下载长度-</code> 这样在发出请求时，服务器会接收到这个字段，然后从需要的字节开始返回数据。这种方式需要自己处理已下载的数据，将新下载的数据拼接到已下载的数据后面。</p></li></ul><p>注意：并不是所有服务器都支持断点续传的，这需要服务器支持 <code>HTTP</code> 协议中的 <code>Range</code> 字段。</p></details><h3 id="❓网络层的优化方案有哪些" tabindex="-1"><a class="header-anchor" href="#❓网络层的优化方案有哪些" aria-hidden="true">#</a> ❓网络层的优化方案有哪些</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>服务端优化</p><ul><li><strong>数据压缩</strong>：如果需要传输的数据很大，可以对数据进行压缩，减少传输的数据量，从而提高传输速度。不过这样可能会增加 <code>CPU</code> 的使用量，因此需要针对具体的场景进行权衡。</li><li><strong>使用CDN</strong>：使用内容分发网络（CDN）进行数据的分发，可以有效降低服务器压力，保障数据传输速度。</li></ul></li><li><p>网络通讯优化</p><ul><li><strong>DNS 预解析</strong>：预先解析可能需要用到的域名，这样在需要进行网络请求时，就可以省去 <code>DNS</code> 解析的时间。</li><li><strong>减少重定向</strong>：重定向会增加网络请求的 <code>RTT</code>，即往返时间，合理规划 <code>API</code> ，尽量减小重定向。</li><li><strong>使用 HTTP/2</strong>：<code>HTTP/2</code> 相比 <code>HTTP/1.1</code> 在多路复用、数据压缩、服务器推送等方面都有所优化，可以用来提高网络传输效率。</li></ul></li><li><p>客户端优化</p><ul><li><strong>请求合并</strong>：如果有大量小的网络请求，可以尝试将这些请求合并，尽可能地减少请求数量，因为每个请求在请求发送和响应接收时都会有一定的固定开销。</li><li><strong>调整超时时间</strong>：根据网络环境的实际情况，合理设置网络请求的超时时间，避免无果等待，浪费资源。</li><li><strong>使用缓存</strong>：对于获取到的网络数据，如果可能多次使用，可以将其缓存到本地，这样在下次需要时，就可以直接从本地读取，避免重新发起网络请求。</li><li><strong>优化图片加载</strong>：针对图片资源，可以优化图片的尺寸和质量，选择合适的图片格式，或使用一些图片加载与缓存的框架等方式来加快图片的加载速度。</li></ul></li></ul></details><h3 id="❓如何解决两个网络请求之间的依赖" tabindex="-1"><a class="header-anchor" href="#❓如何解决两个网络请求之间的依赖" aria-hidden="true">#</a> ❓如何解决两个网络请求之间的依赖</h3><details class="hint-container details"><summary>💡</summary><ul><li><code>DispatchGroup</code>：利用队列组进行网络请求之间的依赖。 <blockquote><p>可以把两个网络请求添加到一个队列分组中，然后利用队列组的 <code>notify</code> 方法监听在队列组中所有任务都完成后才执行的方法。</p></blockquote></li></ul><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">let</span> dispatchGroup <span class="token operator">=</span> <span class="token class-name">DispatchGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

dispatchGroup<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
doSomething <span class="token punctuation">{</span>
    <span class="token comment">// when task is done</span>
    dispatchGroup<span class="token punctuation">.</span><span class="token function">leave</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
dispatchGroup<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
doSomethingElse <span class="token punctuation">{</span>
    <span class="token comment">// when another task is done</span>
    dispatchGroup<span class="token punctuation">.</span><span class="token function">leave</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

dispatchGroup<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span>queue<span class="token punctuation">:</span> <span class="token punctuation">.</span>main<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Both asynchronous tasks are complete!&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Operation</code> 是基于 <code>GCD</code> 更高一层的封装，提供了更多的可控制性。 <blockquote><p>利用它的 <code>addDependency</code> 方法，可轻易创建依赖关系。</p></blockquote></li></ul><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token class-name">OperationQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> operation1 <span class="token operator">=</span> <span class="token class-name">BlockOperation</span> <span class="token punctuation">{</span>
  <span class="token comment">// your network request</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> operation2 <span class="token operator">=</span> <span class="token class-name">BlockOperation</span> <span class="token punctuation">{</span>
  <span class="token comment">// Another network request</span>
<span class="token punctuation">}</span>
<span class="token comment">// operation2 在 operation1 完成后才执行</span>
operation2<span class="token punctuation">.</span><span class="token function">addDependency</span><span class="token punctuation">(</span>operation1<span class="token punctuation">)</span>

queue<span class="token punctuation">.</span><span class="token function">addOperations</span><span class="token punctuation">(</span><span class="token punctuation">[</span>operation1<span class="token punctuation">,</span>operation2<span class="token punctuation">]</span><span class="token punctuation">,</span> waitUntilFinished<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="❓设计一个网络框架" tabindex="-1"><a class="header-anchor" href="#❓设计一个网络框架" aria-hidden="true">#</a> ❓设计一个网络框架</h3><details class="hint-container details"><summary>💡</summary><p>设计原则：</p><ul><li>解耦性：网络框架与业务代码相分离，做到各部分职责明确，降低各部分之间的耦合程度。</li><li>扩展性：应对业务或需求的变化，有良好的扩展性是十分重要的。</li><li>安全性：保证数据的安全传输，包括数据加密，<code>HTTPS</code> 验证等。</li><li>易用性：网络请求的发起和结果的处理应该尽可能简洁明了。</li></ul><p>一个网络框架的简单设计：</p><ul><li><p>网络配置类 <code>NetworkConfiguration</code>：</p><blockquote><p>用于处理一些全局的网络配置，比如 <code>BaseURL</code>、超时时间、公共的请求头、公共的请求参数等。</p></blockquote></li><li><p>网络请求类 <code>NetworkRequest</code>：</p><blockquote><p>这是一个抽象的基类，它包含一个请求的所有必要要素，例如：<code>URL</code>、<code>HTTP</code>方法（<code>GET</code>、<code>POST</code>...）、<code>HTTP</code>头、请求参数等。</p></blockquote><p>也可以创建这个类的子类，比如 <code>JSONNetworkRequest</code>、<code>FormDataNetworkRequest</code> 等，它们覆盖和扩展基类一些行为以适应特定类型的网络请求。</p></li><li><p>网络会话类 <code>NetworkSession</code>：</p><blockquote><p>这个类用来执行 <code>NetworkRequest</code>，它依赖于 <code>URLSession</code> 等系统组件执行实际的网络请求。这个类也是处理证书挑战，提供 <code>URLSessionDelegate</code> 等系统回调的地方。</p></blockquote><p>这个类通常是个单例对象，所有的 <code>NetworkRequest</code> 都由它来负责发送，也可以创建多个 <code>NetworkSession</code> 对象，每个对象可以有自己的 <code>URLSessionConfiguration</code>。</p></li><li><p>结果处理 <code>NetworkResponse</code>：</p><blockquote><p>用一个类或者结构体来封装网络请求的返回结果，它一般包含原始的 <code>HTTPURLResponse</code> 对象，请求是否成功的标志，请求返回的数据或者是请求失败的错误对象。</p></blockquote><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">NetworkResponse</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> response<span class="token punctuation">:</span> <span class="token class-name">HTTPURLResponse</span><span class="token operator">?</span>
    <span class="token keyword">var</span> data<span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token operator">?</span>
    <span class="token keyword">var</span> error<span class="token punctuation">:</span> <span class="token class-name">Error</span><span class="token operator">?</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>错误定义 <code>NetworkError</code>：</p><blockquote><p>用来在网络请求时产生错误时返回给调用者具体的错误信息。可以使用 <code>Swift</code> 的 <code>Error</code> 协议来定义。</p></blockquote></li></ul></details><blockquote><p>❓重连机制如何处理</p></blockquote><details class="hint-container details"><summary>💡</summary><blockquote><p>网络重连机制主要是在网络连接失败或断开时，自动进行重新连接。</p></blockquote><p>以下是一些通用的处理步骤：</p><ul><li><p>立即重连：在网络连接断开后立即进行连接，但是这种方式并不总是有效，因为有可能是网络环境问题，立即重连也可能会失败。</p></li><li><p>延时重连：这是一个更好的策略，即在初次连接断开後，不立即重连，而是采用逐步增加的时间间隔进行重连，例如初次连接失败后 2 秒后进行第一次重连，如果还是失败，则 4 秒后进行第二次重连，依次类推，增加重试间隔。</p></li><li><p>最大重连次数：设置一个最大的重连次数，例如 3 次或 5 次。一旦重连次数达到这个值，就不再进行重连，而是将错误报告给用户。</p></li><li><p>网络状态检查：在进行重连之前，先检查当前的网络状态，如果网络不可用，那么就不进行重连。</p></li></ul><p>大多数的网络库，例如 <code>OkHttp</code>、<code>AFNetworking</code>、<code>Alamofire</code> 等，都内置了这种网络重试的机制，只需要简单的配置即可启用。需要注意的是，过于频繁的重连可能会加重服务器的负担，所以需要根据实际情况合理配置重连策略。</p></details><blockquote><p>❓状态码错误转发机制的处理</p></blockquote><details class="hint-container details"><summary>💡</summary><blockquote><p>状态码错误通常是指网络请求已经成功完成，但是服务端返回了一个错误的状态码，例如<code>HTTP</code> 400，403，404，500等错误。处理这类错误的一种常见方法是使用 <code>HTTP</code> 错误中间件或者拦截器。</p></blockquote><p>以下是一种可能的处理步骤：</p><ul><li><p>判断 <code>HTTP</code> 状态码：</p><blockquote><p>在接收到网络请求的响应后，首先检查 <code>HTTP</code> 状态码。如果状态码在 200-299 之间，通常表示请求成功。否则，就表示发生了错误。</p></blockquote></li><li><p>创建错误对象：</p><blockquote><p>根据 <code>HTTP</code> 状态码，创建一个表示具体错误的对象。这个错误对象通常会包含错误的状态码，以及服务器返回的错误信息。</p></blockquote></li><li><p>使用中间件或者拦截器：</p><blockquote><p>创建一个错误处理中间件或者拦截器。这个中间件的任务是在每个网络请求完成后，检查请求的结果。如果发现结果中包含了 <code>HTTP</code> 错误，那么就把这个错误转发给应用程序的其他部分。</p></blockquote></li><li><p>错误处理：</p><blockquote><p>在应用程序的其他部分，注册错误处理函数。这些处理函数会在接收到由中间件转发的错误时被调用。根据错误的具体情况，执行相应的处理，例如显示错误信息，或者重新执行网络请求。</p></blockquote></li></ul></details><h3 id="❓如何避免网络回调地狱" tabindex="-1"><a class="header-anchor" href="#❓如何避免网络回调地狱" aria-hidden="true">#</a> ❓如何避免网络回调地狱</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>网络回调地狱是由于多个异步网络请求操作嵌套造成的问题，通常看到很多嵌套的 &quot;回调&quot; 代码。</p></blockquote><ul><li><p><strong>使用Promises或者Futures库：</strong> 这些库让您可以将异步操作连锁在一起，而不用嵌套。它们通常引入了一种类似于同步编程的编程风格，但仍然非阻塞。</p></li><li><p><strong>使用Async/Await模式：</strong> 这是最近几年在很多语言中兴起的一种新的编程模式，它可以让你以一种类似同步的方式编写异步代码。例如在<code>JS</code>、<code>C#</code>和<code>Python</code>中都有这种模式。</p></li><li><p><strong>使用Reactive编程库：</strong> 如<code>RxJava</code>，<code>RxSwift</code>等，可以让你将异步操作表示为数据流，然后你可以对这些数据流进行各种各样的组合和处理。</p></li><li><p><strong>使用协程：</strong> 协程是可以挂起和恢复的函数，很适合用来简化异步编程。比如 <code>Kotlin</code> 中就内置了协程支持。</p></li><li><p><strong>将回调函数提取成单独的函数或者方法：</strong> 尽量避免在一个方法中编写过多的嵌套代码。每个回调函数都可以提取成单独的函数或者方法。</p></li><li><p><strong>使用事件驱动设计：</strong> 将每个操作作为事件，通过事件监听和触发来完成操作，可以有效地避免回调地狱。</p></li></ul><p>记住，并没有一种 &quot;最好的&quot; 选择，适合的才是最好的，根据你当前的语言环境，编程风格和任务需求来选择适合自己的策略。</p></details><h3 id="swift-如何实现自己的-promise" tabindex="-1"><a class="header-anchor" href="#swift-如何实现自己的-promise" aria-hidden="true">#</a> <code>swift</code> 如何实现自己的 <code>Promise</code></h3><details class="hint-container details"><summary>💡</summary><p>实现自己的 <code>Promise</code> 实质上是要创建一个可以包装异步操作，并能够在之后获取其结果的对象。</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token comment">// 一种简单的 Promise 实现</span>
<span class="token keyword">class</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token class-name">Value</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">var</span> value<span class="token punctuation">:</span> <span class="token class-name">Value</span><span class="token operator">?</span>
    <span class="token keyword">private</span> <span class="token keyword">var</span> error<span class="token punctuation">:</span> <span class="token class-name">Error</span><span class="token operator">?</span>
    <span class="token keyword">private</span> <span class="token keyword">var</span> callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">Value</span><span class="token punctuation">,</span> <span class="token class-name">Error</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">func</span> <span class="token function-definition function">fulfill</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> value<span class="token punctuation">:</span> <span class="token class-name">Value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
        <span class="token function">executeCallbacksIfNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">reject</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> error<span class="token punctuation">:</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>error <span class="token operator">=</span> error
        <span class="token function">executeCallbacksIfNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// then 方法被调用来添加一个将在 Promise 解决时调用的回调</span>
    <span class="token keyword">func</span> <span class="token function-definition function">then</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> callback<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">Value</span><span class="token punctuation">,</span> <span class="token class-name">Error</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        callbacks<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
        <span class="token function">executeCallbacksIfNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 一旦 Promise 被解决(fulfilled 或 rejected)，它就会执行所有回调函数，并清空回调队列</span>
    <span class="token keyword">private</span> <span class="token keyword">func</span> <span class="token function-definition function">executeCallbacksIfNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> value <span class="token operator">=</span> value <span class="token punctuation">{</span>
            callbacks<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
            callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token keyword">let</span> error <span class="token operator">=</span> error <span class="token punctuation">{</span>
            callbacks<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">failure</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
            callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用 Promise</span>
<span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token class-name">Int</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

promise<span class="token punctuation">.</span>then <span class="token punctuation">{</span> result <span class="token keyword">in</span>
    <span class="token keyword">switch</span> result <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token keyword">let</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Value: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">value</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">failure</span><span class="token punctuation">(</span><span class="token keyword">let</span> error<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Error: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">error</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在全局队列上模拟一个异步操作，2秒后，\`fulfill\` 方法将 \`Promise\` 状态更改为已解决，并打印“Value: 5”。</span>
<span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span><span class="token function">global</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// simulate async operation</span>
    promise<span class="token punctuation">.</span><span class="token function">fulfill</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提醒一下，这只是一种基础的实现方式，实际上可能需要追加一些额外的功能，例如错误处理、链式调用和并发控制等。</p></details><hr><h2 id="web" tabindex="-1"><a class="header-anchor" href="#web" aria-hidden="true">#</a> Web</h2><h3 id="❓wkwebview-缓存和清理缓存的方法" tabindex="-1"><a class="header-anchor" href="#❓wkwebview-缓存和清理缓存的方法" aria-hidden="true">#</a> ❓<code>WKWebView</code> 缓存和清理缓存的方法</h3><details class="hint-container details"><summary>💡</summary><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token comment">// 禁止缓存</span>
<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://www.website.com&quot;</span></span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token class-name">URLRequest</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> url<span class="token punctuation">)</span>
request<span class="token punctuation">.</span>cachePolicy <span class="token operator">=</span> <span class="token punctuation">.</span>reloadIgnoringLocalCacheData
wkWebView<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>

<span class="token comment">// 清除缓存</span>
<span class="token keyword">let</span> dateFrom <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>timeIntervalSince1970<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> websiteDataTypes <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
websiteDataTypes<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">WKWebsiteDataTypeDiskCache</span><span class="token punctuation">)</span>
websiteDataTypes<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">WKWebsiteDataTypeMemoryCache</span><span class="token punctuation">)</span>
<span class="token class-name">WKWebsiteDataStore</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeData</span><span class="token punctuation">(</span>ofTypes<span class="token punctuation">:</span> websiteDataTypes<span class="token punctuation">,</span> modifiedSince<span class="token punctuation">:</span> dateFrom<span class="token punctuation">,</span> completionHandler<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：清理缓存操作可能需要几秒钟的时间去完成，特别是当磁盘中的缓存比较大的情况下，应当对它进行异步处理。</p></details>`,28);function c(l,i){return s(),a("div",null,[e(" more "),p])}const r=n(t,[["render",c],["__file","0x08.network.html.vue"]]);export{r as default};