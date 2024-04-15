import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t,f as e}from"./app-ki1nVTMy.js";const p={},o=e(`<h2 id="数据类型一览" tabindex="-1"><a class="header-anchor" href="#数据类型一览" aria-hidden="true">#</a> 数据类型一览</h2><ul><li>原始值是不可变，持有原始值的变量修改是被分配了一个新的原始值。</li><li>对象和数组是可变的。</li></ul><blockquote><p>7 种原始数据类型</p></blockquote><table><thead><tr><th>类型</th><th>包装类型</th><th>说明</th></tr></thead><tbody><tr><td><code>boolean</code></td><td><code>Boolean</code></td><td>布尔</td></tr><tr><td><code>number</code></td><td><code>Number</code></td><td>数字</td></tr><tr><td><code>bigint</code></td><td><code>BigInt</code></td><td>大整形</td></tr><tr><td><code>string</code></td><td><code>String</code></td><td>字符串</td></tr><tr><td><code>symbol</code>(ES6)</td><td><code>Symbol</code></td><td>符号，表示独一无二的值</td></tr><tr><td><code>null</code></td><td>-</td><td>空</td></tr><tr><td><code>undefined</code></td><td>-</td><td>未定义 变量未赋值时</td></tr></tbody></table><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>Object</code></td><td>对象类型</td></tr><tr><td><code>Array</code></td><td>数组(一种特殊对象)</td></tr><tr><td><code>Function</code></td><td>函数也是一种对象</td></tr></tbody></table><h2 id="常量-变量" tabindex="-1"><a class="header-anchor" href="#常量-变量" aria-hidden="true">#</a> 常量 &amp; 变量</h2><blockquote><p><code>JavaScript</code> 数据定义是大小写敏感的，语句后面使用分隔符 <code>;</code></p></blockquote><ul><li><code>const</code> : 定义块作用域常量</li><li><code>var</code> : 定义一个变量</li><li><code>let</code>(ES6) : 定义块作用域变量</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义常量</span>
<span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415926</span><span class="token punctuation">;</span>
<span class="token comment">// 定义变量</span>
<span class="token comment">//  - 使用 var 定义整形变量</span>
<span class="token keyword">var</span> no <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>        
<span class="token comment">//  - 使用 let 字符串变量</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">;</span>   
name <span class="token operator">=</span> <span class="token string">&quot;peter&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//  - 未初始化赋值变量，值为 undefined</span>
<span class="token keyword">let</span> value<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;value is &quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升" aria-hidden="true">#</a> 变量提升</h2><blockquote><p>变量提升 : 可以先使用变量(使用时值为 undefined)，之后再进行变量申明。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// var 声明变量存在变量提升</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;peter&quot;</span><span class="token punctuation">;</span> 

<span class="token comment">// let 申明变量不存在变量提升</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ❌ =&gt; 会抛出 &quot;ReferenceError&quot; 错误</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="boolean-布尔值" tabindex="-1"><a class="header-anchor" href="#boolean-布尔值" aria-hidden="true">#</a> <code>Boolean</code> - “布尔值”</h2><ul><li>true : <code>{}</code>、 <code>[]</code>、 <code>负数</code>、 <code>new Boolean(true)</code></li><li>false : <code>undefined</code>、<code>null</code>、<code>0</code>、<code>-0</code>、<code>NaN</code>、<code>&quot;&quot;</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> isOk <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="number-数值" tabindex="-1"><a class="header-anchor" href="#number-数值" aria-hidden="true">#</a> <code>Number</code> - “数值”</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 整形</span>
<span class="token comment">//  - 十进制 decimalism</span>
<span class="token keyword">let</span> dNum <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token comment">//  - 二进制 binary</span>
<span class="token keyword">let</span> bNum <span class="token operator">=</span> <span class="token number">0b101010</span><span class="token punctuation">;</span>
<span class="token comment">//  - 八进制 octonary</span>
<span class="token keyword">let</span> oNum <span class="token operator">=</span> <span class="token number">0o52</span><span class="token punctuation">;</span>
<span class="token comment">//  - 十六进制 hexadecimal</span>
<span class="token keyword">let</span> xNum <span class="token operator">=</span> <span class="token number">0x2A</span><span class="token punctuation">;</span>

<span class="token comment">// 浮点数</span>
<span class="token keyword">let</span> pi <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bigint-大整形" tabindex="-1"><a class="header-anchor" href="#bigint-大整形" aria-hidden="true">#</a> <code>BigInt</code> - “大整形”</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="string-字符串" tabindex="-1"><a class="header-anchor" href="#string-字符串" aria-hidden="true">#</a> <code>String</code> - “字符串”</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ------ 声明 ------</span>

<span class="token comment">//  - 双引号</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;peter&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  - 单引号</span>
<span class="token keyword">let</span> tip <span class="token operator">=</span> <span class="token string">&#39;Tihis is a tip.&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tip<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ES6 新增 \`\`</span>
<span class="token comment">//  - 多行字符串</span>
<span class="token keyword">let</span> content <span class="token operator">=</span> 
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">one line
two line
three line</span><span class="token template-punctuation string">\`</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 模版字符串 : \${} 包裹变量</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> introduce <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, my age is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>introduce<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// My name is peter, my age is 5 years old.</span>

<span class="token comment">// ------ 操作 ------</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;hello world.&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//  - length 字符串长度</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>
<span class="token comment">//  - 通过下标获取字符</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// h</span>
<span class="token comment">//  - substring : 截取字符串</span>
<span class="token keyword">let</span> subStr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, 5) 从索引 0 开始截取索引 5 (不包括)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>subStr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello</span>
subStr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [6, length] 从索引 6 开始截取到字符串结尾</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>subStr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// world.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol-符号" tabindex="-1"><a class="header-anchor" href="#symbol-符号" aria-hidden="true">#</a> <code>Symbol</code> - “符号”</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明一个符号</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Symbol()</span>
<span class="token comment">// 声明一个带描述的符号</span>
<span class="token keyword">let</span> token <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Symbol(token)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="null-undefined-空-未定义" tabindex="-1"><a class="header-anchor" href="#null-undefined-空-未定义" aria-hidden="true">#</a> <code>null</code> &amp; <code>undefined</code> - “空 &amp; 未定义”</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-对象" tabindex="-1"><a class="header-anchor" href="#object-对象" aria-hidden="true">#</a> <code>Object</code> - “对象”</h2><blockquote><p>对象是一块可以被标识符引用的内存区域。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;perter&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [object Object]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="array-数组" tabindex="-1"><a class="header-anchor" href="#array-数组" aria-hidden="true">#</a> <code>Array</code> - “数组”</h2><blockquote><p>数组是一种以整数为键（integer-keyed）的属性并与长度（length）属性关联的常规对象。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ------ 声明 ------</span>

<span class="token comment">//  - 数字数组</span>
<span class="token keyword">let</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  - 字符串数组</span>
<span class="token keyword">let</span> strings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  - 第二个元素为 undefined</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ------ 操作 ------</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//  - 数组长度</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
<span class="token comment">//  - 通过下标获取数组元素</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// one</span>
<span class="token comment">//  - 通过下标修改元素</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;zero&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// zero, two, three</span>

<span class="token comment">// push &amp; pop</span>
<span class="token comment">//  - push : 添加元素(在数组尾部)</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;four&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加单个元素</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;five&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;six&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加多个元素</span>
<span class="token comment">//  - pop : 移除元素(在数组尾部)</span>
arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// zero,two,three,four,five</span>

<span class="token comment">// unshift &amp; shift</span>
<span class="token comment">//  - unshift : 添加元素(在数组头部)</span>
arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加单个元素</span>
arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加多个元素</span>
<span class="token comment">//  - shift : 移除元素(在数组尾部)</span>
arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3,1,zero,two,three,four,five</span>

<span class="token comment">// slice : 截取数组</span>
<span class="token keyword">let</span> subArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 4) 从索引 1 开始截取到索引 4 (不包括)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>subArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1,zero,two</span>
subArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [4, length-1] 从索引 4 开始截取到数组结束</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>subArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// three,four,five</span>

<span class="token comment">// concat : 连接数组(不修改当前数组，返回一个新的合并数组)</span>
<span class="token keyword">let</span> sumArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;six&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;serven&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sumArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3,1,zero,two,three,four,five,six,serven</span>

<span class="token comment">// reverse : 反转数组</span>
arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// five,four,three,two,zero,1,3</span>

<span class="token comment">// sort : 排序数组</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1,3,five,four,three,two,zero</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="function-函数" tabindex="-1"><a class="header-anchor" href="#function-函数" aria-hidden="true">#</a> <code>Function</code> - “函数”</h2><blockquote><p>函数是一种特殊的对象，同其它对对象一样可以具有属性和方法，不同点在于函数可以被调用。</p></blockquote><h3 id="iife" tabindex="-1"><a class="header-anchor" href="#iife" aria-hidden="true">#</a> IIFE</h3><blockquote><p>Immediately-Invoked Function Expression : 立即执行函数表达式</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 最常用 : 当 \`function\` 被包含在括号里面，就被解析为函数表达式而不是函数声明</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="date-日期时间" tabindex="-1"><a class="header-anchor" href="#date-日期时间" aria-hidden="true">#</a> <code>Date</code> - “日期时间”</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,38);function c(l,i){return s(),a("div",null,[t(" more "),o])}const r=n(p,[["render",c],["__file","0x01.guide.html.vue"]]);export{r as default};