import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e,f as t}from"./app-8FswgYYv.js";const p={},i=t(`<h2 id="库" tabindex="-1"><a class="header-anchor" href="#库" aria-hidden="true">#</a> 库</h2><h3 id="library-库文件" tabindex="-1"><a class="header-anchor" href="#library-库文件" aria-hidden="true">#</a> <code>library</code> - “库文件”</h3><blockquote><p>每个文件就是一个库。</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// helper.dart</span>

<span class="token keyword">void</span> <span class="token function">helperFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Helper Function is called&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// main.dart</span>

<span class="token comment">// 导入库文件</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;helper.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">helperFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用 helper.dart 中的函数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="part-库拆分" tabindex="-1"><a class="header-anchor" href="#part-库拆分" aria-hidden="true">#</a> <code>part</code> - “库拆分”</h3><blockquote><p><code>part</code> 和 <code>part of</code> 是用于将一个库（<code>library</code>）切分成多个部分（<code>part</code>）而使用的关键字。</p></blockquote><ul><li><p><code>part</code> 是用在库文件中的，它告诉 <code>Dart</code> 编译器，库被拆分成了其他的部分，这些部分的文件路径就写在 <code>part</code> 后面。</p></li><li><p><code>part of</code> 是用在拆分文件中的，它告诉 <code>Dart</code> 编译器，这个文件是某个库的一部分。<code>part of</code> 后面跟的是库的名称。</p></li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// my_lib.dart</span>
<span class="token keyword">library</span> my_lib<span class="token punctuation">;</span>

<span class="token comment">// part: 声明拆分的库文件</span>
<span class="token keyword">part</span> <span class="token string-literal"><span class="token string">&#39;part_1.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">part</span> <span class="token string-literal"><span class="token string">&#39;part_2.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">myLibFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;This is a function defined in my_lib.dart&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// part_1.dart</span>
<span class="token keyword">part</span> of my_lib<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">part1Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;This is a function defined in part_1.dart&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Part1Class</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Method in Part1Class&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// part_2.dart</span>
<span class="token keyword">part</span> of my_lib<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">part2Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;This is a function defined in part_2.dart&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// main.dart</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;my_lib.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 以下三个函数均可被调用</span>
  <span class="token function">myLibFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">part1Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">part2Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 实例化 Part1Class</span>
  <span class="token class-name">Part1Class</span> p1 <span class="token operator">=</span> <span class="token class-name">Part1Class</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p1<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="包导入" tabindex="-1"><a class="header-anchor" href="#包导入" aria-hidden="true">#</a> 包导入</h2><h3 id="as-重命名" tabindex="-1"><a class="header-anchor" href="#as-重命名" aria-hidden="true">#</a> <code>as</code> - “重命名”</h3><blockquote><p>在导入一个包时，可以为其提供一个别名，以解决命名冲突的问题。</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span> <span class="token operator">as</span> fl<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">fl<span class="token punctuation">.</span></span>MaterialApp</span><span class="token punctuation">(</span>
    home<span class="token punctuation">:</span> <span class="token class-name"><span class="token namespace">fl<span class="token punctuation">.</span></span>Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hello world&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-hide-部分导入" tabindex="-1"><a class="header-anchor" href="#show-hide-部分导入" aria-hidden="true">#</a> <code>show/hide</code> - “部分导入”</h3><ul><li><p><code>show</code>: 如果只需要导入一部分内容，可以使用 <code>show</code> 关键字进行指定。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span> <span class="token keyword">show</span> <span class="token class-name">Text</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 我们导入了Text，所以可以直接使用</span>
  <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hello world&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// RaisedButton没有被导入，所以下面的代码会报错</span>
  <span class="token comment">// var button = RaisedButton();  </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>hide</code>: 与 <code>show</code> 相反，如果需要隐藏某部分内容，不希望它们在当前的文件中被访问，可以使用 <code>hide</code> 关键字。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span> <span class="token keyword">hide</span> <span class="token class-name">Text</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 我们隐藏了Text，所以下面的代码会报错</span>
  <span class="token comment">// var text = Text(&#39;Hello world&#39;);</span>
  <span class="token comment">// RaisedButton可以正常使用</span>
  <span class="token keyword">var</span> button <span class="token operator">=</span> <span class="token class-name">RaisedButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="deferred-as-延迟导入" tabindex="-1"><a class="header-anchor" href="#deferred-as-延迟导入" aria-hidden="true">#</a> <code>deferred as</code> - “延迟导入”</h3><blockquote><p>懒加载的一种方式，它允许把库的加载推迟到实际使用时再加载。</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:mylib/mylib.dart&#39;</span></span> <span class="token keyword">deferred</span> <span class="token operator">as</span> mylib<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">await</span> mylib<span class="token punctuation">.</span><span class="token function">loadLibrary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ... 现在可以使用 mylib 中的代码了</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function c(o,l){return s(),a("div",null,[e(" more "),i])}const r=n(p,[["render",c],["__file","0x03.package.html.vue"]]);export{r as default};
