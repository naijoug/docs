import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as t,c as i,a as o,b as n,e as s,d as c,f as p}from"./app-LSdL6nZt.js";const u={},d=n("blockquote",null,[n("p",null,"Cascading Style Sheet : 层叠式样式表")],-1),r=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" Reference")],-1),k={href:"https://github.com/chadluo/CSS-Guidelines",target:"_blank",rel:"noopener noreferrer"},v=n("blockquote",null,[n("p",null,"通用 CSS 笔记、建议与指导")],-1),m=p(`<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><ul><li><p>CSS 特点</p><ul><li>CSS会忽略缩进和换行</li><li>每一项属性后面都要有<code>;</code>分号</li><li>层叠式 : 同一个标签可以被多个选择器选择，属性可以被继承</li></ul></li><li><p>引入方式</p><ul><li>外部样式表 : <code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;css/path/style.css&quot;/&gt;</code></li><li>内部样式表 : <code>&lt;style type=&quot;text/css&quot;&gt;xxx&lt;/style&gt;</code></li><li>行内样式表 : <code>&lt;div style=&quot;xxx&quot;&gt;&lt;/div&gt;</code></li><li><template></template></li></ul></li><li><p>选择器</p><blockquote><p>选择器权重： <code>id选择器 &gt; 类选择器 &gt; 标签选择器</code></p></blockquote><ul><li>标签选择器 : 页面上的标签</li><li>id 选择器 : 给元素取一个特定的名字，id 必须是唯一的，并且是区分大小写的。</li><li>class 选择器 : 给一类元素设置相同的类名，同一个标签可以有多个类选择器</li><li>高级选择器 <ul><li>后代选择器 : 选择器1 选择器2</li><li>交集选择器 : 标签名.类名</li><li>并集选择器 : 选择器1,选择器2</li><li>通配符<code>*</code> : 所有元素</li></ul></li></ul></li><li><p>id &amp; class</p><ul><li>id 属性 : 用于标识唯一元素，同一页面不能重复</li><li>class 属性 : 用于标记同类元素，同一页可以重复</li></ul></li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><ul><li><p>CSS 常用属性</p><ul><li><code>color : red;</code> : 文字颜色</li><li><code>background-color : blue</code> : 背景颜色</li><li><code>font-size : 40px;</code> : 字号</li><li><code>border : 1px solid green;</code> : 边框 <ul><li><code>solid</code> : 实线</li><li><code>dashed</code> : 虚线</li></ul></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span><span class="token punctuation">{</span> &lt;!-- 标签选择器 --&gt;
        <span class="token property">background-color</span> <span class="token punctuation">:</span> gray<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">#user</span><span class="token punctuation">{</span> &lt;!-- id选择器 --&gt;
        <span class="token property">font-size</span> <span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.warning</span><span class="token punctuation">{</span> &lt;!-- 类选择器 --&gt;
        <span class="token property">color</span> <span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.warning p</span><span class="token punctuation">{</span> &lt;!-- 后代选择器 --&gt;
        <span class="token property">font-size</span> <span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">p.warning</span><span class="token punctuation">{</span> &lt;!-- 交集选择器 --&gt;
        <span class="token property">border</span> <span class="token punctuation">:</span> 1px solid yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">p,div</span><span class="token punctuation">{</span> &lt;!-- 并集选择器 --&gt;
        <span class="token property">color</span> <span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">*</span><span class="token punctuation">{</span> &lt;!-- 通配符 --&gt;
        <span class="token property">background-color</span> <span class="token punctuation">:</span> gray<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="qa" tabindex="-1"><a class="header-anchor" href="#qa" aria-hidden="true">#</a> QA</h3><ul><li><p>到底使用什么选择器(标签、id、class)?</p><ul><li>标签 : 设置全局</li><li>class : 样式(改样式使用)</li><li>id : 行为(js使用)</li></ul></li><li><p>哪些属性能够继承呢？</p><ul><li>可以继承 : <code>color</code>、<code>text-*</code>、<code>font-*</code>、<code>line-*</code></li><li>不能继承 : <code>background-color</code>、所有盒模型的属性（width、height、border、padding、margin）都是不继承的！</li></ul></li><li><p>怎样让网页打开速度变快</p><ul><li>让网页字符变为<code>gb2312</code>,能降低页面尺寸</li><li>压缩<code>HMTL</code>代码，将代码压缩为一行</li></ul></li><li><p>提升<code>SEO</code>(Search Engine Optimization)搜索引擎优化</p><ul><li>设置 <code>&lt;meta&gt;</code></li></ul></li></ul>`,6);function g(h,b){const a=l("ExternalLinkIcon");return t(),i("div",null,[o(" more "),d,r,n("ul",null,[n("li",null,[n("a",k,[s("CSS-Guidelines"),c(a)]),v])]),m])}const f=e(u,[["render",g],["__file","CSS.html.vue"]]);export{f as default};