import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-NWzcul-W.js";const t={},d=e(`<h2 id="数据类型一览" tabindex="-1"><a class="header-anchor" href="#数据类型一览" aria-hidden="true">#</a> 数据类型一览</h2><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>boolean</code></td><td>布尔类型，[ture/false，默认: false]</td></tr><tr><td><code>char</code></td><td>字符类型，16位的 Unicode 字符 [<code>\\u0000</code> ~ <code>\\uffff</code>]</td></tr><tr><td><code>byte</code></td><td>字节类型，8位有符号整形 [-128(-2^7) ~ 127(2^7-1)]</td></tr><tr><td><code>short</code></td><td>短整形，16位有符号整形 [-32768(-2^15) ~ 32767(2^15 - 1)]</td></tr><tr><td><code>int</code></td><td>整形，32位有符号整形 [-2147483648(-2^31) ~ 2147483647(2^31 - 1)]</td></tr><tr><td><code>long</code></td><td>长整型，64位有符号整形 [(-2^63) ~ (2^63 -1)]</td></tr><tr><td><code>float</code></td><td>单精度浮点，</td></tr><tr><td><code>double</code></td><td>双精度浮点，</td></tr></tbody></table><h2 id="基本上数据类型" tabindex="-1"><a class="header-anchor" href="#基本上数据类型" aria-hidden="true">#</a> 基本上数据类型</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 布尔类型</span>
<span class="token keyword">boolean</span> isOk <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// 字符类型</span>
<span class="token keyword">char</span> c <span class="token operator">=</span> <span class="token char">&#39;$&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 字节类型</span>
<span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token comment">// 短整形</span>
<span class="token keyword">short</span> s <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
<span class="token comment">// 整形</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span>
<span class="token comment">// 长整形：L 结尾</span>
<span class="token keyword">long</span> l <span class="token operator">=</span> <span class="token number">1000000L</span><span class="token punctuation">;</span>


<span class="token comment">// 浮点：f 结尾</span>
<span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token number">0.618f</span><span class="token punctuation">;</span>
<span class="token comment">// 双精度浮点</span>
<span class="token keyword">double</span> d <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 声明数组 : dataType[] arr;</span>

<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> iArr<span class="token punctuation">;</span> <span class="token comment">// 整数数组</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sArr<span class="token punctuation">;</span> <span class="token comment">// 字符串数组</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[d];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","01.datatype.html.vue"]]);export{u as default};
