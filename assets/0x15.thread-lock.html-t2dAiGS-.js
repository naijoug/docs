import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a as t,b as a,f as o}from"./app-_KbMDiSB.js";const c={},p=a("blockquote",null,[a("p",null,"15 - 线程 & 锁 (7)")],-1),i=o(`<h2 id="_15-1-进程与线程" tabindex="-1"><a class="header-anchor" href="#_15-1-进程与线程" aria-hidden="true">#</a> 15.1 进程与线程</h2><blockquote><p>进程和线程有何区别？</p></blockquote><h2 id="_15-2-上下文切换" tabindex="-1"><a class="header-anchor" href="#_15-2-上下文切换" aria-hidden="true">#</a> 15.2 上下文切换</h2><blockquote><p>如何测量上下文切换时间？</p></blockquote><h2 id="_15-3-哲学家用餐" tabindex="-1"><a class="header-anchor" href="#_15-3-哲学家用餐" aria-hidden="true">#</a> 15.3 哲学家用餐</h2><blockquote><p>在著名的哲学家用餐问题中，一群哲学家围坐在圆桌周围，每两位哲学家之间有一根筷子。每位哲学家需要两根筷子才能用餐，并且一定会先拿起左手边的筷子，然后才会去拿右手边的筷子。如果所有哲学家在同一时间拿起左手边的筷子，就有可能造成死锁。请使用线程和锁，编写代码模拟哲学家用餐问题，避免出现死锁。</p></blockquote><h2 id="_15-4-无死锁的类" tabindex="-1"><a class="header-anchor" href="#_15-4-无死锁的类" aria-hidden="true">#</a> 15.4 无死锁的类</h2><blockquote><p>设计一个类，只有在不可能发生死锁的情况下，才会提供锁。</p></blockquote><h2 id="_15-5-顺序调用" tabindex="-1"><a class="header-anchor" href="#_15-5-顺序调用" aria-hidden="true">#</a> 15.5 顺序调用</h2><p>给定以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">second</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">third</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同一个Foo实例会被传入3个不同的线程。threadA会调用first，threadB会调用second，threadC会调用third。设计一种机制，确保first会在second之前调用，second会在third之前调用。</p><h2 id="_15-6-同步方法" tabindex="-1"><a class="header-anchor" href="#_15-6-同步方法" aria-hidden="true">#</a> 15.6 同步方法</h2><blockquote><p>给定一个类，内含同步方法A和普通方法B。在同一个程序实例中，有两个线程，能否同时执行A？两者能否同时执行A和B？</p></blockquote><h2 id="_15-7-fizzbuzz" tabindex="-1"><a class="header-anchor" href="#_15-7-fizzbuzz" aria-hidden="true">#</a> 15.7 FizzBuzz</h2><blockquote><p>在经典面试题FizzBuzz中，要求你从1到n打印数字。并且，当数字能被3整除时，打印Fizz，能被5整除时，打印Buzz。倘若同时能被3和5整除，就打印FizzBuzz。但与以往不同的是，这里要求你用4个线程，实现一个多线程版本的FizzBuzz，其中，一个用来检测是否被3整除和打印Fizz，另一个用来检测是否被5整除和打印Buzz。第三个线程检测能否被3和5整除和打印FizzBuzz。第四个线程负责遍历数字。</p></blockquote>`,16);function u(l,d){return s(),e("div",null,[p,t(" more "),i])}const h=n(c,[["render",u],["__file","0x15.thread-lock.html.vue"]]);export{h as default};