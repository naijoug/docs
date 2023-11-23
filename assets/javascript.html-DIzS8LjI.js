import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c,b as n,e as a,d as t,f as i}from"./app-NiSSZH60.js";const l={},u=n("h1",{id:"javascript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript","aria-hidden":"true"},"#"),a(" JavaScript")],-1),r=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),a(" Reference")],-1),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.liaoxuefeng.com/wiki/1022910821149312",target:"_blank",rel:"noopener noreferrer"},m={href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/wangdoc/javascript-tutorial",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/ruanyf/jstraining",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"libraries",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#libraries","aria-hidden":"true"},"#"),a(" Libraries")],-1),b={href:"https://github.com/jquery/jquery",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/jashkenas/underscore",target:"_blank",rel:"noopener noreferrer"},g=i(`<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><ul><li>Access-Control-Allow-Origin</li></ul><h2 id="bool" tabindex="-1"><a class="header-anchor" href="#bool" aria-hidden="true">#</a> Bool</h2><ul><li>true : <code>{}</code>、 <code>[]</code>、 <code>负数</code>、 <code>new Boolean(false)</code></li><li>false : <code>undefined</code>、<code>null</code>、<code>0</code>、<code>-0</code>、<code>NaN</code>、<code>&quot;&quot;</code></li></ul><h2 id="iife" tabindex="-1"><a class="header-anchor" href="#iife" aria-hidden="true">#</a> IIFE</h2><blockquote><p>Immediately-Invoked Function Expression : 立即执行函数表达式</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 最常用 : 当 \`function\` 被包含在括号里面，就被解析为函数表达式而不是函数声明</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 括号&amp;JS的一些操作符(=、&amp;&amp;、||、...), 可以消除函数表达式和函数声明的歧义</span>
<span class="token comment">// 解析器读取一个表达式，另一个也读取为表达式</span>
<span class="token keyword">var</span> <span class="token function-variable function">one</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 一元操作符</span>
<span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">~</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token operator">-</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// new</span>
<span class="token keyword">new</span> <span class="token class-name">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function w(y,x){const s=o("ExternalLinkIcon");return p(),c("div",null,[u,r,n("ul",null,[n("li",null,[n("a",d,[a("JavaScript MDN"),t(s)])]),n("li",null,[n("a",k,[a("JavaScript 教程"),t(s)])]),n("li",null,[n("a",m,[a("ECMAScript 6 入门"),t(s)])]),n("li",null,[n("a",h,[a("JavaScript Tutorial"),t(s)])]),n("li",null,[n("a",v,[a("JS Training"),t(s)])])]),f,n("ul",null,[n("li",null,[n("a",b,[a("JQuery"),t(s)])]),n("li",null,[n("a",_,[a("Underscore"),t(s)])])]),g])}const J=e(l,[["render",w],["__file","javascript.html.vue"]]);export{J as default};
