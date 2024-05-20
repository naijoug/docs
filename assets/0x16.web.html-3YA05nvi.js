import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as d,c as u,a as r,b as e,d as i,w as s,f as c,e as n}from"./app-6ik61Qih.js";const k={},m=c('<hr><h2 id="web" tabindex="-1"><a class="header-anchor" href="#web" aria-hidden="true">#</a> Web</h2><h3 id="❓web-登录时怎么保持会话状态的" tabindex="-1"><a class="header-anchor" href="#❓web-登录时怎么保持会话状态的" aria-hidden="true">#</a> ❓<code>Web</code> 登录时怎么保持会话状态的</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>在 <code>iOS</code> 中，通过 <code>WebKit</code> 的 <code>WKWebView</code> 进行 <code>Web</code> 登录时，会话状态通常由 <code>Web</code> 服务器通过用户的每次请求中附带的 <code>Cookies</code> 来保持。当用户成功登录后，服务器会生成一个代表该用户会话的 <code>Cookie</code> 并发送给客户端，然后在后续的每次请求中，客户端会将这个 <code>Cookie</code> 带上，让服务器知道这个请求来自哪个用户的会话。</p></blockquote><p>但是 <code>iOS</code> 的 <code>WKWebView</code>并不会像 <code>UIWebView</code> 那样自动保存和发送 <code>Cookie</code>，所以需要手动管理 <code>Cookie</code>。</p><p>具体做法：</p><ul><li><p>登录成功的回调或者其他合适的地方保存服务器通过 <code>Set-Cookie</code> 响应头发送过来的 <code>Cookie</code>。可以通过 <code>WKNavigationDelegate</code> 的接口获取到这个响应头。</p></li><li><p>在每次请求时，手动将保存的 <code>Cookie</code> 放入请求头里。这可以在 <code>WKNavigationDelegate</code> 的 <code>decidePolicyForNavigationAction</code> 接口中处理。获取到请求的 <code>URLRequest</code> 后，修改其<code>HTTPHeaderFields</code> 的 <code>Cookie</code> 字段，然后用 <code>WKWebView</code>的 <code>load</code> 方法发起一个新的请求。</p></li></ul><p>注意：默认情况下，跨域请求不会携带 <code>Cookie</code>，如果需要在跨域请求中保持用户会话，需要设置 <code>NSHTTPCookie</code> 的 <code>HTTPShouldHandleCookies</code> 字段为 <code>true</code>。</p></details><h3 id="❓web-和-native-怎么共享-cookie" tabindex="-1"><a class="header-anchor" href="#❓web-和-native-怎么共享-cookie" aria-hidden="true">#</a> ❓<code>Web</code> 和 <code>Native</code> 怎么共享 <code>Cookie</code></h3>',5),b={class:"hint-container details"},w=c("<summary>💡</summary><p>总体思路通：在 <code>Native</code> 层进行登录等操作后，获取服务端返回的 <code>Cookie</code>，然后在每次 <code>WebView</code> 加载请求时，将 <code>Cookie</code> 设置进 <code>request</code> 的 <code>header</code>。</p><p>具体步骤：</p><ul><li><p>在原生应用获取到 <code>Cookie</code>。如果是通过网络请求来获取数据，那么可以在请求成功后，从<code>Response Headers</code> 里获取 <code>Set-Cookie</code> 字段的值。</p></li><li><p>获取到 <code>Cookie</code> 之后，可以存储到应用的存储空间（如 <code>UserDefault</code>)。</p></li><li><p>在 <code>WebView</code> 发送请求之前，从存储空间获取 <code>Cookie</code>，将其添加到 <code>WKWebView</code> 加载请求的 <code>header</code> 中。在 <code>iOS</code> 中，可以先获取一个 <code>NSMutableURLRequest</code> 的实例，然后通过 <code>setValue:forHTTPHeaderField:</code> 方法设置 <code>Cookie</code>，最后通过 <code>WKWebView</code> 的 <code>loadRequest</code> 方法加载这个请求。</p></li></ul>",4),v=e("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[e("pre",{class:"language-swift"},[e("code",null,[e("span",{class:"token keyword"},"let"),n(" url "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token function"},"URL"),e("span",{class:"token punctuation"},"("),n("string"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token string-literal"},[e("span",{class:"token string"},'"https://example.com"')]),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token keyword"},"var"),n(" request "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token class-name"},"URLRequest"),e("span",{class:"token punctuation"},"("),n("url"),e("span",{class:"token punctuation"},":"),n(" url"),e("span",{class:"token punctuation"},")"),n(`
request`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"setValue"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string-literal"},[e("span",{class:"token string"},'"cookieName=cookieValue"')]),e("span",{class:"token punctuation"},","),n(" forHTTPHeaderField"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token string-literal"},[e("span",{class:"token string"},'"Cookie"')]),e("span",{class:"token punctuation"},")"),n(`
webView`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"load"),e("span",{class:"token punctuation"},"("),n("request"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-java line-numbers-mode","data-ext":"java"},[e("pre",{class:"language-java"},[e("code",null,[e("span",{class:"token class-name"},"String"),n(" url "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token string"},'"https://example.com"'),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token class-name"},"String"),n(" cookieString "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token string"},'"cookieName=cookieValue; Domain=.example.com"'),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token class-name"},"CookieManager"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"getInstance"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"setCookie"),e("span",{class:"token punctuation"},"("),n("url"),e("span",{class:"token punctuation"},","),n(" cookieString"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
webView`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"loadUrl"),e("span",{class:"token punctuation"},"("),n("url"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),W=c(`<h3 id="❓web-渲染和-native-渲染有什么异同点" tabindex="-1"><a class="header-anchor" href="#❓web-渲染和-native-渲染有什么异同点" aria-hidden="true">#</a> ❓<code>Web</code> 渲染和 <code>Native</code> 渲染有什么异同点</h3><details class="hint-container details"><summary>💡</summary><p>不同点：</p><ul><li><p>渲染流程：</p><ul><li><code>Web</code> 渲染流程一般包括解析 <code>HTML</code>、生成 <code>DOM</code> 树、解析 <code>CSS</code>、生成 <code>CSSOM</code> 树、生成渲染树、布局（计算元素的几何位置）、渲染（将元素绘制到屏幕）等步骤。</li><li><code>Native</code> 渲染则是通过构建和调用本地组件、调用系统底层 <code>API</code> 来直接在屏幕上绘制界面。</li></ul></li><li><p>绘图性能：由于 <code>Native</code> 渲染直接调用系统底层 <code>API</code>，通常会比 <code>Web</code> 渲染更快，尤其是在动画和复杂用户交互等场景下。</p></li><li><p>跨平台能力：</p><ul><li><code>Web</code> 渲染基于标准化的 <code>Web</code> 技术，因此具有很强的跨平台能力。</li><li><code>Native</code> 渲染往往是针对单一平台的，不过也有一些跨平台的 <code>Native</code> 框架，如 <code>React Native</code> 和 <code>Flutter</code>。</li></ul></li><li><p>访问系统能力：</p><ul><li><code>Web</code> 可以通过 <code>Web APIs</code> 访问一部分系统功能，但其能力相对受限。</li><li><code>Native</code> 渲染更容易访问和使用操作系统的所有功能，如相机、<code>GPS</code>、陀螺仪等。</li></ul></li></ul><p>相同点：</p><ul><li>都是通过更改 <code>UI</code> 状态来响应用户操作的。</li><li>都可以通过使用动画来增强用户体验。</li><li>为了保证流畅的用户体验，都需要尽量避免在主线程（<code>UI</code> 线程）中进行重型任务。</li></ul></details><hr><h2 id="wkwebview" tabindex="-1"><a class="header-anchor" href="#wkwebview" aria-hidden="true">#</a> WKWebView</h2><h3 id="❓wkwebview-白屏问题如何发生-解决方案" tabindex="-1"><a class="header-anchor" href="#❓wkwebview-白屏问题如何发生-解决方案" aria-hidden="true">#</a> ❓<code>WKWebView</code> 白屏问题如何发生，解决方案</h3><details class="hint-container details"><summary>💡</summary><p>白屏问题引起原因：</p><ul><li><code>WKWebView</code> 初始化后因内存回收等原因被提前释放。</li><li><code>WKWebView</code> 在初始化、加载 <code>web</code> 资源时，由于 <code>CPU</code> 处理不过来产生的卡顿。</li></ul><p>解决方案：</p><ul><li><p>将 <code>WKWebView</code> 强引用以保证其在 <code>ViewController</code> 生命周期内以及网络请求过程中不被释放。</p><blockquote><p>比如在 <code>ViewController</code> 中定义 <code>WKWebView</code> 为全局属性。</p></blockquote></li><li><p>在适当的时机，例如在 <code>viewDidLoad()</code> 函数中进行 <code>WKWebView</code> 的初始化和页面加载。避免过早加载导致 <code>WKWebView</code> 未被正常初始化就已经开始页面加载。</p></li><li><p>使用 <code>Key-Value Observing</code>（<code>KVO</code>）来监听 <code>WKWebView</code> 的 <code>loading</code>、<code>title</code>、<code>estimatedProgress</code>属性，获取 <code>WKWebView</code> 的加载状态并及时进行相应处理。</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code>webView<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> forKeyPath<span class="token punctuation">:</span> <span class="token other-directive property">#keyPath</span><span class="token punctuation">(</span><span class="token class-name">WKWebView</span><span class="token punctuation">.</span>estimatedProgress<span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>new<span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
webView<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> forKeyPath<span class="token punctuation">:</span> <span class="token other-directive property">#keyPath</span><span class="token punctuation">(</span><span class="token class-name">WKWebView</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>new<span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果是因为 <code>WKWebView</code> 在加载大量 <code>web</code> 资源时出现卡顿，导致白屏，可以尝试对 <code>web</code> 资源做一些优化，减少首屏需要加载的资源。</p></li><li><p>合理设置 <code>WKWebView</code> 的 <code>Frame</code>，一开始设置为一像素，等网页加载完毕再设置为全屏可以在一定程度上解决问题。</p></li><li><p>Web开发者工具：白屏问题可能和网页的加载方式也有关系，如果可以的话，可以请网页开发者工具查看对应的网页，看看是否有使用某些特殊的技术导致 <code>WKWebView</code> 无法正确解析。</p></li></ul></details><h3 id="❓wkwebview-缓存和清理缓存的方法" tabindex="-1"><a class="header-anchor" href="#❓wkwebview-缓存和清理缓存的方法" aria-hidden="true">#</a> ❓<code>WKWebView</code> 缓存和清理缓存的方法</h3><details class="hint-container details"><summary>💡</summary><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token comment">// 禁止缓存</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：清理缓存操作可能需要几秒钟的时间去完成，特别是当磁盘中的缓存比较大的情况下，应当对它进行异步处理。</p></details><h3 id="❓wkwebview-设置-useragent-的方法知道吗-有遇到什么问题吗" tabindex="-1"><a class="header-anchor" href="#❓wkwebview-设置-useragent-的方法知道吗-有遇到什么问题吗" aria-hidden="true">#</a> ❓<code>WKWebView</code> 设置 <code>userAgent</code> 的方法知道吗，有遇到什么问题吗</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>直接通过 <code>WKWebView</code> 的 <code>customUserAgent</code> 属性来设置。</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">let</span> webView <span class="token operator">=</span> <span class="token class-name">WKWebView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
webView<span class="token punctuation">.</span>customUserAgent <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Your Custom User Agent&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过 <code>WKWebView</code> 的 <code>evaluateJavaScript</code> 方法获取默认 <code>UserAgent</code>，然后在其基础上添加自定义部分：</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">let</span> webView <span class="token operator">=</span> <span class="token class-name">WKWebView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
webView<span class="token punctuation">.</span><span class="token function">evaluateJavaScript</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;navigator.userAgent&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span>result<span class="token punctuation">,</span> error<span class="token punctuation">)</span> <span class="token keyword">in</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> userAgent <span class="token operator">=</span> result <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        webView<span class="token punctuation">.</span>customUserAgent <span class="token operator">=</span> userAgent <span class="token operator">+</span> <span class="token string-literal"><span class="token string">&quot; Your Custom User Agent&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>可能会遇到的问题：</p><ul><li><p><code>UserAgent</code> 设置没有生效：有时可能会出现设置了 <code>customUserAgent</code> 后没有立即生效的情况，这通常是因为 <code>WKWebView</code> 还在加载页面或者还没有开始加载页面。为了避免这个问题，可以在创建 <code>WKWebView</code> 实例后立即设置 <code>customUserAgent</code>。</p></li><li><p><code>UserAgent</code> 设置被覆盖：有时可能会出现设置了 <code>customUserAgent</code> 后，后续再次设置 <code>customUserAgent</code> 时前一次的设置被覆盖。为了避免这个问题，可以在设置 <code>customUserAgent</code> 前先获取当前的 <code>userAgent</code> ，然后将新的 <code>userAgent</code> 添加到原有的 <code>userAgent</code> 后面。</p></li></ul></details><h3 id="❓customuseragent-和-applicationnameforuseragent-设置-useragent-有什么区别吗" tabindex="-1"><a class="header-anchor" href="#❓customuseragent-和-applicationnameforuseragent-设置-useragent-有什么区别吗" aria-hidden="true">#</a> ❓<code>customUserAgent</code> 和 <code>applicationNameForUserAgent</code> 设置 <code>userAgent</code> 有什么区别吗</h3><details class="hint-container details"><summary>💡</summary><ul><li><p><code>customUserAgent</code>：可以自定义整个 <code>userAgent</code> 字符串的值。</p><blockquote><p>比如可以把 <code>userAgent</code> 设置为任何值，浏览器信息、操作系统信息等都可以被替换或者省略。</p></blockquote></li><li><p><code>applicationNameForUserAgent</code>：对应于 <code>WKWebViewConfiguration</code> 的属性，用于设置 <code>userAgent</code> 字符串的后缀。将其设置为特定字符串后，这个字符串会被添加到整个 <code>userAgent</code> 的末尾，形成新的 <code>userAgent</code>。</p><blockquote><p>这不会改变原有浏览器和操作系统的信息。</p></blockquote></li></ul><p>总结：<code>customUserAgent</code> 可以用来全面自定义 <code>userAgent</code>，而 <code>applicationNameForUserAgent</code> 则只是在默认的 <code>userAgent</code> 字符串后面追加了一小段自定义的字符串。</p></details><h3 id="❓wkwebview-使用过程中有遇到什么问题嘛" tabindex="-1"><a class="header-anchor" href="#❓wkwebview-使用过程中有遇到什么问题嘛" aria-hidden="true">#</a> ❓<code>WKWebView</code> 使用过程中有遇到什么问题嘛</h3><details class="hint-container details"><summary>💡</summary><p>常见问题：</p><ul><li><p><code>Cookie</code> 管理问题：使用 <code>WKWebView</code> 的时候，有时可能会遇到 <code>Cookie</code> 同步问题，这是因为 <code>iOS</code> 的 <code>WKWebView</code> 管理 <code>Cookie</code> 的方式与 <code>UIWebView</code> 和 <code>Safari</code> 不同，所以需要手动管理 <code>Cookie</code>。可以通过在每次请求时，将存储在 <code>HTTPCookieStorage</code> 的 <code>Cookie</code> 写入每次的请求头中。</p></li><li><p>内存泄漏问题：<code>WKWebView</code> 在某些情况下可能导致内存泄漏，特别是在 <code>WKWebView</code> 加载 <code>JavaScript</code> 内容时。对此，可以采取合理地创建和销毁 <code>WKWebView</code> 的方式或者将 <code>WKWebView</code> 视图放在新的 <code>Window</code> 上来避免。</p></li><li><p><code>HTTPS</code> 证书问题：在 <code>WKWebView</code> 中加载自签名证书的 <code>https</code> 站点时，可能会发生未被信任的情况。应对策略是实现相应的 <code>WKNavigationDelegate</code> 中的方法来自定义处理。</p></li><li><p>无法直接加载本地文件：<code>WKWebView</code> 无法像 <code>UIWebView</code> 那样直接加载本地网页或其他文档，但是可以通过 <code>WKWebView</code> 的加载请求方法添加本地文件的 <code>URL</code> 访问本地文件。</p></li></ul></details><h3 id="❓uiwebview-迁移到-wkwebview-过程中有遇到什么问题或者麻烦吗-怎么解决的" tabindex="-1"><a class="header-anchor" href="#❓uiwebview-迁移到-wkwebview-过程中有遇到什么问题或者麻烦吗-怎么解决的" aria-hidden="true">#</a> ❓<code>UIWebview</code> 迁移到 <code>WKWebView</code> 过程中有遇到什么问题或者麻烦吗，怎么解决的</h3><details class="hint-container details"><summary>💡</summary><p>一些常见问题和解决策略：</p><ul><li><p><code>Cookie</code> 管理方面，<code>UIWebView</code> 与浏览器共享 <code>Cookie</code> 存储，但 <code>WKWebView</code> 没有这样的特性。一个常见的解决办法是在 <code>HTTP</code> 请求头中手动添加 <code>Cookie</code>。</p></li><li><p>本地文件加载问题。<code>UIWebView</code> 可以轻松加载本地 <code>HTML</code> 文件，而 <code>WKWebView</code> 不能直接做到这一点。解决方法通常是通过 <code>WKWebView</code> 的 <code>loadFileURL</code> 来加载本地文件。</p></li><li><p>访问历史记录。<code>UIWebView</code> 提供了便捷的 <code>backForwardList</code> 方法来获得历史记录，但是在 <code>WKWebView</code> 中，并没有对应的便捷方法。可以通过其他方式（比如自己编写代码来维护一个历史记录）来替代。</p></li><li><p>在 <code>WKWebView</code> 中，<code>scrollView</code> 的 <code>zoom</code> 功能被禁用了，所以如果需要支持缩放，需要使用一些奇技淫巧，例如在每次加载完毕后执行 <code>JavaScript</code> 代码，手动启用 <code>Pinch Zoom</code>。</p></li><li><p>内存问题。<code>WKWebView</code> 通常会使用更多的内存，如果你的应用在低内存设备上使用，可能需要做一些内存优化。</p></li><li><p>一些旧的 <code>JavaScript</code> 代码可能在 <code>WKWebView</code> 上无法正常工作，可能需要重新调整或编写 <code>JavaScript</code> 代码。</p></li><li><p>原有的 <code>UIWebView Delegate</code> 方法在 <code>WKWebView</code> 中可能不存在等价的方法，需要做出相应的调整和替换。</p></li></ul></details><h3 id="❓js-与-ios-相互调用的方案有哪些" tabindex="-1"><a class="header-anchor" href="#❓js-与-ios-相互调用的方案有哪些" aria-hidden="true">#</a> ❓<code>js</code> 与 <code>iOS</code> 相互调用的方案有哪些</h3>`,17),h={class:"hint-container details"},f=e("summary",null,"💡",-1),V=e("p",null,[e("code",null,"WKWebView")],-1),S=e("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[e("pre",{class:"language-swift"},[e("code",null,[e("span",{class:"token comment"},"// iOS 端"),n(`
`),e("span",{class:"token keyword"},"class"),n(),e("span",{class:"token class-name"},"ViewController"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token class-name"},"UIViewController"),n(),e("span",{class:"token punctuation"},"{"),n(`
    `),e("span",{class:"token keyword"},"func"),n(),e("span",{class:"token function-definition function"},"viewDidLoad"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
        `),e("span",{class:"token keyword"},"super"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"viewDidLoad"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(`
        `),e("span",{class:"token comment"},"// 设置配置"),n(`
        `),e("span",{class:"token keyword"},"let"),n(" config "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token class-name"},"WKWebViewConfiguration"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(`
        `),e("span",{class:"token comment"},"// 设置消息控制器"),n(`
        `),e("span",{class:"token keyword"},"let"),n(" userContentController "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token class-name"},"WKUserContentController"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(`
        `),e("span",{class:"token comment"},'// 添加消息处理，遵循 WKScriptMessageHandler 协议, "AppModel" 需要与 JS 端协商一致'),n(`
        userContentController`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"self"),e("span",{class:"token punctuation"},","),n(" name"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token string-literal"},[e("span",{class:"token string"},'"AppModel"')]),e("span",{class:"token punctuation"},")"),n(`
        config`),e("span",{class:"token punctuation"},"."),n("userContentController "),e("span",{class:"token operator"},"="),n(` userContentController
        `),e("span",{class:"token comment"},"// 使用此配置初始化创建 webview"),n(`
        `),e("span",{class:"token keyword"},"let"),n(" webView "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token class-name"},"WKWebView"),e("span",{class:"token punctuation"},"("),n("frame"),e("span",{class:"token punctuation"},":"),n(" view"),e("span",{class:"token punctuation"},"."),n("bounds"),e("span",{class:"token punctuation"},","),n(" configuration"),e("span",{class:"token punctuation"},":"),n(" config"),e("span",{class:"token punctuation"},")"),n(`
        view`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addSubview"),e("span",{class:"token punctuation"},"("),n("webView"),e("span",{class:"token punctuation"},")"),n(`
    `),e("span",{class:"token punctuation"},"}"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`),e("span",{class:"token comment"},"// 实现 WKScriptMessageHandler 协议，并实现其方法"),n(`
`),e("span",{class:"token keyword"},"extension"),n(),e("span",{class:"token class-name"},"ViewController"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token class-name"},"WKScriptMessageHandler"),n(),e("span",{class:"token punctuation"},"{"),n(`
    `),e("span",{class:"token keyword"},"func"),n(),e("span",{class:"token function-definition function"},"userContentController"),e("span",{class:"token punctuation"},"("),e("span",{class:"token omit keyword"},"_"),n(" userContentController"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token class-name"},"WKUserContentController"),e("span",{class:"token punctuation"},","),n(" didReceive message"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token class-name"},"WKScriptMessage"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
        `),e("span",{class:"token keyword"},"if"),n(" message"),e("span",{class:"token punctuation"},"."),n("name "),e("span",{class:"token operator"},"=="),n(),e("span",{class:"token string-literal"},[e("span",{class:"token string"},'"AppModel"')]),n(),e("span",{class:"token punctuation"},"{"),n(`
            `),e("span",{class:"token function"},"print"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string-literal"},[e("span",{class:"token string"},'"Message received: '),e("span",{class:"token interpolation-punctuation punctuation"},"\\("),e("span",{class:"token interpolation"},[n("message"),e("span",{class:"token punctuation"},"."),n("body")]),e("span",{class:"token interpolation-punctuation punctuation"},")"),e("span",{class:"token string"},'"')]),e("span",{class:"token punctuation"},")"),n(`
            `),e("span",{class:"token comment"},"// 在此处解析 message.body 中的内容，并做出相应的操作"),n(`
        `),e("span",{class:"token punctuation"},"}"),n(`
    `),e("span",{class:"token punctuation"},"}"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`

`),e("span",{class:"token comment"},"// JavaScript 端"),n(`
`),e("span",{class:"token comment"},"// 点击按钮调用 native 方法"),n(`
function `),e("span",{class:"token function"},"callNative"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
    window`),e("span",{class:"token punctuation"},"."),n("webkit"),e("span",{class:"token punctuation"},"."),n("messageHandlers"),e("span",{class:"token punctuation"},"."),e("span",{class:"token class-name"},"AppModel"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"postMessage"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n("body"),e("span",{class:"token punctuation"},":"),n(" '"),e("span",{class:"token class-name"},"Hello"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token class-name"},"Native"),e("span",{class:"token operator"},"!"),n("'"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[e("pre",{class:"language-swift"},[e("code",null,[e("span",{class:"token comment"},"// 向 JS 注入代码"),n(`
`),e("span",{class:"token keyword"},"let"),n(" script "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token class-name"},"WKUserScript"),e("span",{class:"token punctuation"},"("),n("source"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token string-literal"},[e("span",{class:"token string"},`"alert('Hello, JS!')"`)]),e("span",{class:"token punctuation"},","),n(" injectionTime"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token punctuation"},"."),n("atDocumentEnd"),e("span",{class:"token punctuation"},","),n(" forMainFrameOnly"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token boolean"},"false"),e("span",{class:"token punctuation"},")"),n(`
webView`),e("span",{class:"token punctuation"},"."),n("configuration"),e("span",{class:"token punctuation"},"."),n("userContentController"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addUserScript"),e("span",{class:"token punctuation"},"("),n("script"),e("span",{class:"token punctuation"},")"),n(`

`),e("span",{class:"token comment"},"// 调用 JS 方法"),n(`
webView`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"evaluateJavaScript"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string-literal"},[e("span",{class:"token string"},'"doSomething();"')]),e("span",{class:"token punctuation"},","),n(" completionHandler"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token punctuation"},"{"),n(),e("span",{class:"token punctuation"},"("),n("result"),e("span",{class:"token punctuation"},","),n(" error"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token keyword"},"in"),n(`
    `),e("span",{class:"token keyword"},"if"),n(),e("span",{class:"token keyword"},"let"),n(" error "),e("span",{class:"token operator"},"="),n(" error "),e("span",{class:"token punctuation"},"{"),n(`
        `),e("span",{class:"token function"},"print"),e("span",{class:"token punctuation"},"("),n("error"),e("span",{class:"token punctuation"},")"),n(`
    `),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"else"),n(),e("span",{class:"token punctuation"},"{"),n(`
        `),e("span",{class:"token function"},"print"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string-literal"},[e("span",{class:"token string"},'"Success"')]),e("span",{class:"token punctuation"},")"),n(`
    `),e("span",{class:"token punctuation"},"}"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=c("<li><p><code>JavaScriptCore</code>: 可以在 <code>iOS</code> 原生应用与 <code>JavaScript</code> 之间相互掉用，包括通过 <code>JSContext</code> 对象载入 <code>JS</code> 代码，使 <code>JS</code> 能直接访问 <code>native</code> 对象的类和实例方法。</p></li><li><p>使用混合开发框架：如 <code>React-Native</code>, <code>Ionic</code> 等。在这些框架中，通常有一套成熟的机制来完成 <code>JS</code> 和 <code>iOS</code> 之间的调用，比如 <code>React-Native</code> 中的 <code>Bridge</code> 模块，<code>Ionic</code> 中的 <code>Cordova</code> 插件等。</p></li>",2),K=c('<h3 id="❓js-交互前端代码-android-和-ios-为什么要写两套-有办法一套解决吗" tabindex="-1"><a class="header-anchor" href="#❓js-交互前端代码-android-和-ios-为什么要写两套-有办法一套解决吗" aria-hidden="true">#</a> ❓<code>js</code> 交互前端代码 <code>Android</code> 和 <code>iOS</code> 为什么要写两套，有办法一套解决吗</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>从 <code>JavaScript</code> 调用原生代码</p><ul><li><p>在 <code>Android</code> 中，通常是在 <code>Java</code> 代码中创建一个对象并将其注入到 <code>WebView</code> 中，然后在 <code>JavaScript</code> 中使用该对象的名称调用其方法。</p></li><li><p>在 <code>iOS</code> 中，<code>JavaScript</code> 可以通过调用 <code>webkit.messageHandlers.&lt;name&gt;.postMessage(&lt;messageBody&gt;)</code> 来调用原生代码，然后在原生代码中实现相应的 <code>WKScriptMessageHandler</code> 的 <code>didReceive</code> 方法来接收这个调用。</p></li></ul></li><li><p>从原生代码调用 <code>JavaScript</code>：<code>Android</code> 和 <code>iOS</code> 都是通过在原生代码中执行 <code>JavaScript</code> 字符串来实现的。</p></li></ul><p>统一方案：</p><ul><li><p>可以通过一些通用的设计模式或者工具来使得 <code>JavaScript</code> 端的代码尽可能一致。</p><blockquote><p>例如，可以在 <code>JavaScript</code> 中封装一个统一的接口，根据不同的平台调用不同的底层方法，然后在这个接口上层提供统一的 <code>API</code> 给其他 <code>JavaScript</code> 代码使用。</p></blockquote></li><li><p>使用第三方跨平台工具，如 <code>React Native</code>、<code>Cordova</code> 等，它们提供了统一的 <code>JavaScript API</code> 来调用原生功能，并将底层的 <code>Android</code> 和 <code>iOS</code> 的差异封装起来，使得可以用一套 <code>JavaScript</code> 代码来开发 <code>Android</code> 和 <code>iOS</code> 应用。</p></li></ul></details>',2);function A(U,_){const t=p("CodeTabs");return d(),u("div",null,[r(" more "),m,e("details",b,[w,i(t,{id:"63",data:[{id:"iOS(Swift)"},{id:"Android(Java)"}]},{title0:s(({value:a,isActive:o})=>[n("iOS(Swift)")]),title1:s(({value:a,isActive:o})=>[n("Android(Java)")]),tab0:s(({value:a,isActive:o})=>[v]),tab1:s(({value:a,isActive:o})=>[g]),_:1},8,["data"])]),W,e("details",h,[f,e("ul",null,[e("li",null,[V,i(t,{id:"380",data:[{id:"js -> swift"},{id:"swift -> js"}]},{title0:s(({value:a,isActive:o})=>[n("js -> swift")]),title1:s(({value:a,isActive:o})=>[n("swift -> js")]),tab0:s(({value:a,isActive:o})=>[S]),tab1:s(({value:a,isActive:o})=>[y]),_:1})]),C])]),K])}const q=l(k,[["render",A],["__file","0x16.web.html.vue"]]);export{q as default};