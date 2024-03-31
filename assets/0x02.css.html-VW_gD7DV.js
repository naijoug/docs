import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as n,f as i}from"./app-OU05m4gP.js";const d={},c=i(`<h2 id="概念知识" tabindex="-1"><a class="header-anchor" href="#概念知识" aria-hidden="true">#</a> 概念知识</h2><h3 id="❓说说关于-css-的规范的理解" tabindex="-1"><a class="header-anchor" href="#❓说说关于-css-的规范的理解" aria-hidden="true">#</a> ❓说说关于 <code>CSS</code> 的规范的理解</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓bfc-vs-ifc" tabindex="-1"><a class="header-anchor" href="#❓bfc-vs-ifc" aria-hidden="true">#</a> ❓<code>BFC</code> vs <code>IFC</code></h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓什么是层叠上下文" tabindex="-1"><a class="header-anchor" href="#❓什么是层叠上下文" aria-hidden="true">#</a> ❓什么是层叠上下文</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓-外边距叠加-出现的原因" tabindex="-1"><a class="header-anchor" href="#❓-外边距叠加-出现的原因" aria-hidden="true">#</a> ❓“外边距叠加” 出现的原因</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓css-引入方式-link-与-import-区别" tabindex="-1"><a class="header-anchor" href="#❓css-引入方式-link-与-import-区别" aria-hidden="true">#</a> ❓<code>CSS</code> 引入方式 <code>link</code> 与 <code>@import</code> 区别</h3><details class="hint-container details"><summary>💡</summary><ul><li><code>link</code> 先加载 <code>CSS</code> 后加载 <code>HTML</code>。</li><li><code>@import</code> 先加载 <code>HTML</code> 后加载 <code>CSS</code>。</li></ul></details><hr><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="❓到底使用什么选择器-tag、class、id" tabindex="-1"><a class="header-anchor" href="#❓到底使用什么选择器-tag、class、id" aria-hidden="true">#</a> ❓到底使用什么选择器(<code>tag、class、id</code>)</h3><details class="hint-container details"><summary>💡</summary><ul><li><p><code>tag</code>: 标签选择器，这是最基本的一种选择器。使用 <code>HTML</code> 标签名来选择和样式化元素。</p><blockquote><p>在需要为所有特定类型的标签（例如所有的段落或所有的标题）应用同样的样式时很有用。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// 使页面上的所有 &lt;p&gt; 标签文本居中且变为红色
p</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>class</code>: 类选择器。可以将类应用在任意元素上，并且一个元素可以有多个类。</p><blockquote><p>在不同的元素或者同类型的元素上应用不同的样式，那么可以使用类选择器。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// 可以使用 class=&quot;centered-text&quot; 将样式应用到任意元素上
.centered-text</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>id</code>: <code>ID</code> 选择器，用于选择一个唯一的元素。每个 <code>HTML</code> 文档中的 <code>ID</code> 都应该是唯一的（即每个 <code>ID</code> 只能在页面中出现一次，且一个元素只能有一个 <code>ID</code>）。</p><blockquote><p><code>ID</code> 选择器在需要样式化单一且独特的元素时非常有用，例如页面的导航条。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// 使用 id=&quot;my-unique-element&quot; 将样式应用到一个特定元素上
#my-unique-element</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>结论：应根据实际情况来决定使用哪种选择器。如果需要对所有同类型的元素应用一样的样式，那么用标签选择器；如果需要将样式应用到多个不同类型的元素或者一个类型的元素中的特定一些，那么用类选择器；如果需要为页面上的一个唯一元素应用样式，那么用<code>ID</code>选择器。</p></details><h3 id="❓如何使用更高性能的选择器" tabindex="-1"><a class="header-anchor" href="#❓如何使用更高性能的选择器" aria-hidden="true">#</a> ❓如何使用更高性能的选择器</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓哪些属性能够继承呢" tabindex="-1"><a class="header-anchor" href="#❓哪些属性能够继承呢" aria-hidden="true">#</a> ❓哪些属性能够继承呢</h3><details class="hint-container details"><summary>💡</summary><ul><li>可以继承 : <code>color</code>、<code>text-*</code>、<code>font-*</code>、<code>line-*</code></li><li>不能继承 : <code>background-color</code>、所有盒模型的属性（width、height、border、padding、margin）都是不继承的！</li></ul></details><h3 id="❓display-的属性值-block、inline、inline-block、table-cell-的区别" tabindex="-1"><a class="header-anchor" href="#❓display-的属性值-block、inline、inline-block、table-cell-的区别" aria-hidden="true">#</a> ❓<code>display</code> 的属性值(<code>block</code>、<code>inline</code>、<code>inline-block</code>、<code>table-cell</code>)的区别</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓text-indent、text-align、line-height、vertical-align-这个属性有什么高级技巧" tabindex="-1"><a class="header-anchor" href="#❓text-indent、text-align、line-height、vertical-align-这个属性有什么高级技巧" aria-hidden="true">#</a> ❓<code>text-indent</code>、<code>text-align</code>、<code>line-height</code>、<code>vertical-align</code> 这个属性有什么高级技巧</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓overflow-hidden-可以清除浮动吗" tabindex="-1"><a class="header-anchor" href="#❓overflow-hidden-可以清除浮动吗" aria-hidden="true">#</a> ❓<code>overflow-hidden</code> 可以清除浮动吗</h3><details class="hint-container details"><summary>💡</summary></details><hr><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><h3 id="❓css-有哪些性能优化技巧" tabindex="-1"><a class="header-anchor" href="#❓css-有哪些性能优化技巧" aria-hidden="true">#</a> ❓<code>CSS</code> 有哪些性能优化技巧</h3><details class="hint-container details"><summary>💡</summary></details><h3 id="❓怎样让网页打开速度变快" tabindex="-1"><a class="header-anchor" href="#❓怎样让网页打开速度变快" aria-hidden="true">#</a> ❓怎样让网页打开速度变快</h3><details class="hint-container details"><summary>💡</summary><ul><li>让网页字符变为<code>gb2312</code>,能降低页面尺寸</li><li>压缩<code>HMTL</code>代码，将代码压缩为一行</li></ul></details><h3 id="❓提升-seo-搜索引擎优化" tabindex="-1"><a class="header-anchor" href="#❓提升-seo-搜索引擎优化" aria-hidden="true">#</a> ❓提升 <code>SEO</code> 搜索引擎优化</h3><blockquote><p><code>SEO</code> : <code>Search Engine Optimization</code></p></blockquote><details class="hint-container details"><summary>💡</summary></details>`,34);function t(l,o){return a(),s("div",null,[n(" more "),c])}const u=e(d,[["render",t],["__file","0x02.css.html.vue"]]);export{u as default};
