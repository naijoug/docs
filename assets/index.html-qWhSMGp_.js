import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as s,c as d,a as c,b as t,e as n,d as p,f as r}from"./app-uNK90VvC.js";const i={},u=t("h2",{id:"reference",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),n(" reference")],-1),l={href:"http://opensource.apple.com/source/CF/CF-1151.16/",target:"_blank",rel:"noopener noreferrer"},k=r(`<h2 id="uiapplicationmain" tabindex="-1"><a class="header-anchor" href="#uiapplicationmain" aria-hidden="true">#</a> UIApplicationMain</h2><blockquote><p><code>iOS</code> 程序启动的入口 <code>main</code> 函数中的 <code>UIApplicationMain</code> 就是启动了一个 <code>RunLoop</code></p></blockquote><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 通过以下代码，“end main” 不会打印。可以测试出，UIApplicationMain一直没有返回值。</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">@</span>autoreleasepool <span class="token punctuation">{</span>
        <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;start main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">UIApplicationMain</span><span class="token punctuation">(</span>argc<span class="token punctuation">,</span> argv<span class="token punctuation">,</span> nil<span class="token punctuation">,</span> <span class="token function">NSStringFromClass</span><span class="token punctuation">(</span><span class="token punctuation">[</span>AppDelegate class<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;end main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="runloop" tabindex="-1"><a class="header-anchor" href="#runloop" aria-hidden="true">#</a> RunLoop</h2><table><thead><tr><th>framework</th><th>API</th></tr></thead><tbody><tr><td>Foundation</td><td>NSRunLoop</td></tr><tr><td>CoreFoundation</td><td>CFRunLoopRef</td></tr></tbody></table><ul><li><p>核心类</p><table><thead><tr><th>核心类</th><th>说明</th></tr></thead><tbody><tr><td><code>CFRunLoopRef</code></td><td>RunLoop 对象，一个 Loop 包含多个 Mode</td></tr><tr><td><code>CFRunLoopMode</code></td><td>RunLoop 运行模式</td></tr><tr><td><code>CFRunLoopSourceRef</code></td><td>事件源 (输入源)</td></tr><tr><td><code>CFRunLoopTimerRef</code></td><td>基于时间的触发器（如 : NSTimer）</td></tr><tr><td><code>CFRunLoopObserverRef</code></td><td>RunLoop 的观察者，能够监听 RunLoop 的状态改变</td></tr></tbody></table></li><li><p>CFRunLoopMode</p><blockquote><p>每个 Mode 包含若干个 <code>Source/Timer/Observer</code> 切换 Mode，需要退出 Loop，再重新创建另一个 Mode 的 Loop</p></blockquote><table><thead><tr><th>RunLoopMode (运行模式)</th><th>说明</th></tr></thead><tbody><tr><td><code>kCFRunLoopDefaultMode</code></td><td>App 的默认 Mode，通常主线程是在这个Mode下运行</td></tr><tr><td><code>UITrackingRunLoopMode</code></td><td>界面跟踪 Mode，用于 ScrollView 追踪触摸滑动，保证界面滑动时不受其他 Mode 影响</td></tr><tr><td><code>UIInitializationRunLoopMode</code></td><td>在刚启动 App 时第进入的第一个 Mode，启动完成后就不再使用</td></tr><tr><td><code>GSEventReceiveRunLoopMode</code></td><td>接受系统事件的内部 Mode，通常用不到</td></tr><tr><td><code>kCFRunLoopCommonModes</code></td><td>这是一个占位用的 Mode，不是一种真正的 Mode。被标记为 common modes 模式 kCFRunLoopDefaultMode UITrackingRunLoopMode 两种模式。</td></tr></tbody></table></li><li><p>CFRunLoopSourceRef</p><table><thead><tr><th>RunLoopSource (输入源)</th><th>说明</th></tr></thead><tbody><tr><td><code>Source0</code></td><td>非基于 Port 的</td></tr><tr><td><code>Source1</code></td><td>基于 Port 的</td></tr></tbody></table></li><li><p>CFRunLoopActivity</p><table><thead><tr><th>RunLoopActivity (观察者活动状态)</th><th>说明</th></tr></thead><tbody><tr><td><code>kCFRunLoopEntry</code></td><td>即将进入 Loop</td></tr><tr><td><code>kCFRunLoopBeforeTimers</code></td><td>即将处理 Timer</td></tr><tr><td><code>kCFRunLoopBeforeSources</code></td><td>即将处理 Source</td></tr><tr><td><code>kCFRunLoopBeforeWaiting</code></td><td>即将进入休眠</td></tr><tr><td><code>kCFRunLoopAfterWaiting</code></td><td>刚从休眠中唤醒</td></tr><tr><td><code>kCFRunLoopExit</code></td><td>即将推出 Loop</td></tr><tr><td><code>kCFRunLoopAllActivities</code></td><td></td></tr></tbody></table></li></ul>`,6);function h(m,b){const o=a("ExternalLinkIcon");return s(),d("div",null,[c("more "),u,t("ul",null,[t("li",null,[t("a",l,[n("CFRunLoopRef 开源代码"),p(o)])])]),k])}const f=e(i,[["render",h],["__file","index.html.vue"]]);export{f as default};
