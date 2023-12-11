import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,a as e,f as t}from"./app-KOLbvikU.js";const o={},c=t(`<h2 id="线程安全" tabindex="-1"><a class="header-anchor" href="#线程安全" aria-hidden="true">#</a> 线程安全</h2><h3 id="atomic-线程安全吗" tabindex="-1"><a class="header-anchor" href="#atomic-线程安全吗" aria-hidden="true">#</a> <code>atomic</code> 线程安全吗？</h3><h3 id="如果让你来实现属性的-atomic-如何实现" tabindex="-1"><a class="header-anchor" href="#如果让你来实现属性的-atomic-如何实现" aria-hidden="true">#</a> 如果让你来实现属性的 <code>atomic</code>，如何实现？</h3><h3 id="nsmutablearray-的线程安全性" tabindex="-1"><a class="header-anchor" href="#nsmutablearray-的线程安全性" aria-hidden="true">#</a> <code>NSMutableArray</code> 的线程安全性？</h3><h3 id="oc-中的锁有哪些" tabindex="-1"><a class="header-anchor" href="#oc-中的锁有哪些" aria-hidden="true">#</a> <code>OC</code> 中的锁有哪些？</h3><blockquote><p>自旋和互斥对比？</p></blockquote><blockquote><p>用 <code>C/OC/C++</code> 实现自旋或互斥？</p></blockquote><h3 id="看现象" tabindex="-1"><a class="header-anchor" href="#看现象" aria-hidden="true">#</a> “看现象”</h3><blockquote><p>以下代码输出是什么？</p></blockquote><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">dispatch_async</span><span class="token punctuation">(</span><span class="token function">dispatch_get_global_queue</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">^</span><span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span> performSelector<span class="token punctuation">:</span><span class="token keyword">@selector</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> withObject<span class="token punctuation">:</span>nil afterDelay<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>test
<span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gcd" tabindex="-1"><a class="header-anchor" href="#gcd" aria-hidden="true">#</a> <code>GCD</code></h2><h3 id="gcd-执行原理" tabindex="-1"><a class="header-anchor" href="#gcd-执行原理" aria-hidden="true">#</a> <code>GCD</code> 执行原理？</h3><h3 id="gcg-本质是什么" tabindex="-1"><a class="header-anchor" href="#gcg-本质是什么" aria-hidden="true">#</a> <code>GCG</code> 本质是什么？</h3><h2 id="线程设计" tabindex="-1"><a class="header-anchor" href="#线程设计" aria-hidden="true">#</a> 线程设计</h2><h3 id="ios-中如何创建一个常驻线程" tabindex="-1"><a class="header-anchor" href="#ios-中如何创建一个常驻线程" aria-hidden="true">#</a> <code>iOS</code> 中如何创建一个常驻线程？</h3><h3 id="nstimer-定时器准确吗-如果不准确该怎样实现一个精确的-nstimer" tabindex="-1"><a class="header-anchor" href="#nstimer-定时器准确吗-如果不准确该怎样实现一个精确的-nstimer" aria-hidden="true">#</a> <code>NStimer</code> 定时器准确吗？如果不准确该怎样实现一个精确的 <code>NSTimer</code>?</h3><blockquote><p>iOS 计时器都有哪些，分别存在什么问题？</p></blockquote>`,17);function p(i,u){return n(),s("div",null,[e(" more "),c])}const l=a(o,[["render",p],["__file","thread.html.vue"]]);export{l as default};
