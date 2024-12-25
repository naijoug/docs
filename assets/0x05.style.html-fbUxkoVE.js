import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as i,b as n,e as s,d as e,f as l}from"./app-NPdVLJBN.js";const o={},u=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),d={href:"https://dart.dev/effective-dart",target:"_blank",rel:"noopener noreferrer"},r={href:"https://dart.cn/effective-dart",target:"_blank",rel:"noopener noreferrer"},k={href:"https://google.github.io/styleguide/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://zh-google-styleguide.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="核心原则" tabindex="-1"><a class="header-anchor" href="#核心原则" aria-hidden="true">#</a> 核心原则</h2><ul><li>可读性：提供清晰的代码结构</li><li>稳定性：减少潜在的错误风险</li><li>可维护性：代码易于理解和修改</li><li>可测试性：便于编写和维护测试</li><li>团队协作：提供统一的代码风格</li></ul><h2 id="通用" tabindex="-1"><a class="header-anchor" href="#通用" aria-hidden="true">#</a> 通用</h2><h3 id="版本管理" tabindex="-1"><a class="header-anchor" href="#版本管理" aria-hidden="true">#</a> 版本管理</h3><h4 id="提交消息规范" tabindex="-1"><a class="header-anchor" href="#提交消息规范" aria-hidden="true">#</a> 提交消息规范</h4><ul><li><code>feat</code>: 添加新特性</li><li><code>fix</code>: 修复 bug</li><li><code>docs</code>: 修改文档</li><li><code>update</code>: 更新内容</li><li><code>comment</code>: 添加注释</li><li><code>tidy</code>: 整理代码</li><li><code>refactor</code>: 重构代码 ...</li></ul><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>✅
feat: 添加用户登录功能
fix: 修复用户无法退出的问题

❌
提交代码
update.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dart" tabindex="-1"><a class="header-anchor" href="#dart" aria-hidden="true">#</a> Dart</h2><h3 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h3><h4 id="文件命名规范" tabindex="-1"><a class="header-anchor" href="#文件命名规范" aria-hidden="true">#</a> 文件命名规范</h4><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅ 正确示例</span>
user_profile_screen<span class="token punctuation">.</span>dart
shopping_cart_widget<span class="token punctuation">.</span>dart
auth_service<span class="token punctuation">.</span>dart

<span class="token comment">// ❌ 错误示例</span>
userProfile<span class="token punctuation">.</span>dart
<span class="token class-name">UserProfile</span><span class="token punctuation">.</span>dart
shopping<span class="token operator">-</span>cart<span class="token punctuation">.</span>dart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件导入规范" tabindex="-1"><a class="header-anchor" href="#文件导入规范" aria-hidden="true">#</a> 文件导入规范</h4><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;utils/my_utils.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token comment">// ❌</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;utils/my_utils.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类与类型命名" tabindex="-1"><a class="header-anchor" href="#类与类型命名" aria-hidden="true">#</a> 类与类型命名</h4><blockquote><p>规则</p></blockquote><ul><li>类名使用<strong>大驼峰</strong>命名法（<code>UpperCamelCase</code>）</li><li>类名应该简洁且具有描述性</li><li>尽量不要是使用无意义的缩写，除了常见的缩写如 <code>URL</code>、<code>ID</code></li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅ </span>
<span class="token keyword">class</span> <span class="token class-name">UserProfile</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
<span class="token keyword">class</span> <span class="token class-name">ShoppingCart</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token comment">// ❌ </span>
<span class="token keyword">class</span> userprofile <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">class</span> shopping_cart <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>理由</p></blockquote><ul><li>符合 <code>Dart</code> 语言的官方推荐规范</li><li>使类名在代码中更容易识别，与变量和方法名明显区分</li><li>与其他主流编程语言（如 <code>Java、Swift</code>）的命名惯例保持一致，降低多语言开发者的学习成本</li></ul><h4 id="变量与方法命名" tabindex="-1"><a class="header-anchor" href="#变量与方法命名" aria-hidden="true">#</a> 变量与方法命名</h4><blockquote><p>规则</p></blockquote><ul><li>变量和方法使用<strong>小驼峰</strong>命名法（<code>lowerCamelCase</code>）</li><li>避免使用单字母命名，除非是循环计数器</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅ </span>
<span class="token class-name">String</span> userName<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">calculateTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
int itemCount<span class="token punctuation">;</span>

<span class="token comment">// ❌ </span>
<span class="token class-name">String</span> <span class="token class-name">UserName</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">calc_tot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
int i<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>理由</p></blockquote><ul><li>符合 <code>Dart</code> 语言的官方推荐规范</li><li>变量名清晰表达其用途，便于理解和维护</li><li>避免使用单字母命名可以提高代码<strong>自文档化</strong>程度</li></ul><h4 id="常量命名" tabindex="-1"><a class="header-anchor" href="#常量命名" aria-hidden="true">#</a> 常量命名</h4><ul><li>常量使用<strong>小驼峰</strong>命名法</li><li>静态常量使用 <code>static const</code></li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token keyword">const</span> double piValue <span class="token operator">=</span> <span class="token number">3.14159</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">const</span> int maxRetryCount <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token class-name">String</span> apiBaseUrl <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;https://api.example.com&#39;</span></span><span class="token punctuation">;</span>

<span class="token comment">// ❌</span>
<span class="token keyword">const</span> double PI_VALUE <span class="token operator">=</span> <span class="token number">3.14159</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">const</span> int <span class="token class-name">MaxRetryCount</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token class-name">String</span> API_BASE_URL <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;https://api.example.com&#39;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码风格" tabindex="-1"><a class="header-anchor" href="#代码风格" aria-hidden="true">#</a> 代码风格</h3><blockquote><p>完成代码编写后，尽量使用 <code>formart</code> 进行一次代码格式化。</p></blockquote><h4 id="行长" tabindex="-1"><a class="header-anchor" href="#行长" aria-hidden="true">#</a> 行长</h4><blockquote><p>规则</p></blockquote><ul><li><code>dart formart</code> 默认行长为 80，有点过短，可以统一为 100。</li></ul><h4 id="缩进" tabindex="-1"><a class="header-anchor" href="#缩进" aria-hidden="true">#</a> 缩进</h4><blockquote><p>规则</p></blockquote><ul><li>使用 2 个空格进行缩进</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isEnabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Enabled&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ❌</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>isEnabled<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Enabled&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>理由</p></blockquote><ul><li>保持代码的视觉层次结构清晰</li><li>提高代码可读性</li></ul><h4 id="空格" tabindex="-1"><a class="header-anchor" href="#空格" aria-hidden="true">#</a> 空格</h4><blockquote><p>规则</p></blockquote><ul><li>在操作符、关键字前后添加空格</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isEnabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Enabled&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
int sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>

<span class="token comment">// ❌</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>isEnabled<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Enabled&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
int sum<span class="token operator">=</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>理由</p></blockquote><ul><li>减少代码密度，降低阅读疲劳，提高代码可读性</li><li>便于快速识别运算逻辑，使操作符和操作数之间的关系更清晰</li></ul><h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h4><ul><li>大括号的开括号不换行</li><li>即使是单行 <code>if</code> 语句也使用大括号</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isError<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

<span class="token comment">// ❌</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  <span class="token keyword">return</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>理由</p></blockquote><ul><li>在不同编辑器和平台下显示一致性</li><li>减少代码占用的水平空间，避免过长的行</li></ul><h3 id="注释规范" tabindex="-1"><a class="header-anchor" href="#注释规范" aria-hidden="true">#</a> 注释规范</h3><h4 id="代码注释" tabindex="-1"><a class="header-anchor" href="#代码注释" aria-hidden="true">#</a> 代码注释</h4><blockquote><p>规则</p></blockquote><ul><li>使用 <code>///</code> 添加<strong>文档注释</strong></li><li>使用 <code>//</code> 添加其它注释</li><li>文档注释： 公共 <code>API</code>、类和方法</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token comment">/// 用户模型类，包含用户的基本信息</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token comment">/// 用户唯一标识符</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
  
  <span class="token comment">/// 用户显示名称</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  
  <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do somehting....</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ❌</span>
<span class="token comment">// 用户类</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token comment">// id</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
  
  <span class="token comment">// 名称</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  
  <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/// do somehting....</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>理由</p></blockquote><ul><li>有意义的注释和文档有助于理解代码的目的和工作原理，提升代码维护性。</li><li>为库、类和方法添加文档注释有助于自动生成 API 文档，提高代码可读性。</li></ul><h4 id="todo-注释" tabindex="-1"><a class="header-anchor" href="#todo-注释" aria-hidden="true">#</a> TODO 注释</h4><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token comment">// TODO(alex): 添加用户头像上传功能 - 2024/10/30前完成</span>
<span class="token comment">// TODO(sarah): 优化图片加载性能 #JIRA-123</span>

<span class="token comment">// ❌</span>
<span class="token comment">// TODO: 修复这个问题</span>
<span class="token comment">// TODO 之后处理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步编程" tabindex="-1"><a class="header-anchor" href="#异步编程" aria-hidden="true">#</a> 异步编程</h3><h4 id="异步方法" tabindex="-1"><a class="header-anchor" href="#异步方法" aria-hidden="true">#</a> 异步方法</h4><ul><li>优先使用 <code>async/await</code> 而不是直接使用 <code>Future</code></li><li>异步方法名应该表明其异步性质</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅ </span>
<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">fetchUserProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> response <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;/profile&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ❌ </span>
<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">getUserProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> api<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;/profile&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3><ul><li>统一的异常处理策略</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅  </span>
<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">handleLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> authService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">,</span> st<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;login error: &#39;</span></span><span class="token punctuation">,</span> e<span class="token punctuation">,</span> st<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  
<span class="token comment">// 💯</span>
<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">handleLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> authService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">on</span> <span class="token class-name">AuthException</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">showErrorDialog</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Authentication failed: </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">e<span class="token punctuation">.</span>message</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">on</span> <span class="token class-name">NetworkException</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">showErrorDialog</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Network error: </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">e<span class="token punctuation">.</span>message</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">showErrorDialog</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;An unexpected error occurred&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ❌</span>
<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">handleLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> authService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>理由</p></blockquote><ul><li>便于问题定位和调试</li><li>提高代码的可维护性</li></ul><h3 id="日志处理" tabindex="-1"><a class="header-anchor" href="#日志处理" aria-hidden="true">#</a> 日志处理</h3><ul><li>便于调试和定位 bug</li><li>可以在开发阶段及时发现问题</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;debug log message&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;info log message&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;error log message&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ❌</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;log message.&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flutter" tabindex="-1"><a class="header-anchor" href="#flutter" aria-hidden="true">#</a> Flutter</h2><h3 id="widget-组织" tabindex="-1"><a class="header-anchor" href="#widget-组织" aria-hidden="true">#</a> Widget 组织</h3><ul><li>将复杂的 <code>Widget</code> 拆分为更小的组件</li><li>使用私有 <code>Widget</code> 来提高代码可读性</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token keyword">class</span> <span class="token class-name">UserProfilePage</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token function">_buildHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">_buildBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">_buildFooter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Widget</span> <span class="token function">_buildHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
  <span class="token class-name">Widget</span> <span class="token function">_buildBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
  <span class="token class-name">Widget</span> <span class="token function">_buildFooter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// =&gt; 个人习惯</span>
<span class="token keyword">class</span> <span class="token class-name">UserProfilePage</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        _headerWidget<span class="token punctuation">,</span>
        _bodyWidget<span class="token punctuation">,</span>
        _footerWidget<span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
    
  <span class="token class-name">Widget</span> <span class="token keyword">get</span> _headerWidget <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
  <span class="token class-name">Widget</span> <span class="token keyword">get</span> _bodyWidget <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
  <span class="token class-name">Widget</span> <span class="token keyword">get</span> _footerWidget <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ❌</span>
<span class="token keyword">class</span> <span class="token class-name">UserProfilePage</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token class-name">Container</span><span class="token punctuation">(</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Header&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token comment">// 大量嵌套的 Widget...</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Container</span><span class="token punctuation">(</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Body&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token comment">// 更多嵌套的 Widget...</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="widget-参数顺序" tabindex="-1"><a class="header-anchor" href="#widget-参数顺序" aria-hidden="true">#</a> Widget 参数顺序</h3><ul><li>必需参数放在可选参数之前</li><li>相关的参数放在一起</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token keyword">class</span> <span class="token class-name">CustomButton</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">CustomButton</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>onPressed<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>child<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ❌</span>
<span class="token keyword">class</span> <span class="token class-name">CustomButton</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">CustomButton</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>child<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>onPressed<span class="token punctuation">,</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="widget-优化" tabindex="-1"><a class="header-anchor" href="#widget-优化" aria-hidden="true">#</a> Widget 优化</h3><blockquote><p><code>const</code> 优化: 可以减少不必要的重绘</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅ </span>
<span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Title&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
  padding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">8.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Content&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ❌ </span>
<span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Title&#39;</span></span><span class="token punctuation">)</span>
<span class="token class-name">SizedBox</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token class-name">Padding</span><span class="token punctuation">(</span>
  padding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">8.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Content&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>列表优化</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅ </span>
<span class="token class-name">ListView</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
  itemCount<span class="token punctuation">:</span> items<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
  itemBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">ListItem</span><span class="token punctuation">(</span>
    key<span class="token punctuation">:</span> <span class="token class-name">ValueKey</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
    item<span class="token punctuation">:</span> items<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">// ❌ </span>
<span class="token class-name">ListView</span><span class="token punctuation">(</span>
  children<span class="token punctuation">:</span> items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">ListItem</span><span class="token punctuation">(</span>
    item<span class="token punctuation">:</span> item<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="资源管理" tabindex="-1"><a class="header-anchor" href="#资源管理" aria-hidden="true">#</a> 资源管理</h3><h4 id="图片资源管理" tabindex="-1"><a class="header-anchor" href="#图片资源管理" aria-hidden="true">#</a> 图片资源管理</h4><ul><li>便于资源的管理和维护</li><li>提高资源文件的可复用性</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># ✅</span>
<span class="token key atrule">assets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> assets/images/
  <span class="token punctuation">-</span> assets/icons/

<span class="token comment"># ❌</span>
<span class="token key atrule">assets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> assets/icons/logo.png
  <span class="token punctuation">-</span> assets/image/icon.png
  <span class="token punctuation">-</span> assets/images/background.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图片使用规范" tabindex="-1"><a class="header-anchor" href="#图片使用规范" aria-hidden="true">#</a> 图片使用规范</h4><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span>
  <span class="token string-literal"><span class="token string">&#39;assets/images/logo.png&#39;</span></span><span class="token punctuation">,</span>
  width<span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
  height<span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
  fit<span class="token punctuation">:</span> <span class="token class-name">BoxFit</span><span class="token punctuation">.</span>cover<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">// ❌</span>
<span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;assets/images/logo.png&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主题和样式" tabindex="-1"><a class="header-anchor" href="#主题和样式" aria-hidden="true">#</a> 主题和样式</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ✅</span>
<span class="token class-name">ThemeData</span> theme <span class="token operator">=</span> <span class="token class-name">ThemeData</span><span class="token punctuation">(</span>
  primaryColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">,</span>
  textTheme<span class="token punctuation">:</span> <span class="token class-name">TextTheme</span><span class="token punctuation">(</span>
    headline1<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>fontSize<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span> fontWeight<span class="token punctuation">:</span> <span class="token class-name">FontWeight</span><span class="token punctuation">.</span>bold<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
      theme<span class="token punctuation">:</span> theme<span class="token punctuation">,</span>
      home<span class="token punctuation">:</span> <span class="token class-name">HomeScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ❌</span>
<span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Title&#39;</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>fontSize<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span> fontWeight<span class="token punctuation">:</span> <span class="token class-name">FontWeight</span><span class="token punctuation">.</span>bold<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖管理" tabindex="-1"><a class="header-anchor" href="#依赖管理" aria-hidden="true">#</a> 依赖管理</h3><h4 id="pubspec-yaml" tabindex="-1"><a class="header-anchor" href="#pubspec-yaml" aria-hidden="true">#</a> <code>pubspec.yaml</code></h4><ul><li>避免使用 <code>any</code></li><li>避免使用不确定的版本范围</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># ✅</span>
<span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter</span><span class="token punctuation">:</span>
    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter
  <span class="token key atrule">http</span><span class="token punctuation">:</span> ^0.13.0
  <span class="token key atrule">provider</span><span class="token punctuation">:</span> ^6.0.0

<span class="token key atrule">dev_dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter_test</span><span class="token punctuation">:</span>
    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter
  <span class="token key atrule">flutter_lints</span><span class="token punctuation">:</span> ^2.0.0

<span class="token comment"># ❌</span>
<span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter</span><span class="token punctuation">:</span>
    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter
  <span class="token key atrule">http</span><span class="token punctuation">:</span> any  <span class="token comment"># 避免使用 any</span>
  <span class="token key atrule">provider</span><span class="token punctuation">:</span> <span class="token string">&#39;&gt;6.0.0&#39;</span> <span class="token comment"># 避免使用不确定的版本范围</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="analysis-options-yaml" tabindex="-1"><a class="header-anchor" href="#analysis-options-yaml" aria-hidden="true">#</a> <code>analysis_options.yaml</code></h4>`,96);function b(h,g){const a=p("ExternalLinkIcon");return c(),i("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[s("Effective Dart"),e(a)]),s(" 👉🏻 "),n("a",r,[s("🇨🇳"),e(a)])]),n("li",null,[n("a",k,[s("Google Style Guides"),e(a)]),s(" : "),n("a",v,[s("Google 开源项目风格指南"),e(a)])])]),m])}const w=t(o,[["render",b],["__file","0x05.style.html.vue"]]);export{w as default};
