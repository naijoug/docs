import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-gyVArVUl.js";const p={},e=t(`<h2 id="类结构" tabindex="-1"><a class="header-anchor" href="#类结构" aria-hidden="true">#</a> 类结构</h2><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token comment">// 类实例属性</span>
  <span class="token class-name">String</span> color<span class="token punctuation">;</span>
  int speed<span class="token punctuation">;</span>

  <span class="token comment">// 类静态属性</span>
  <span class="token keyword">static</span> int wheel <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    
  <span class="token comment">// 构造函数</span>
  <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>speed<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 命名构造函数 </span>
  <span class="token class-name">Car</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">String</span> color<span class="token punctuation">,</span> int speed<span class="token punctuation">)</span>
    <span class="token punctuation">:</span> color <span class="token operator">=</span> color<span class="token punctuation">,</span>
      speed <span class="token operator">=</span> speed<span class="token punctuation">;</span>
    
  <span class="token comment">// 实例方法</span>
  <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;This car color is </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">color</span></span><span class="token string">, speed is </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">speed</span></span><span class="token string">.&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> car <span class="token operator">=</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Red&#39;</span></span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
car <span class="token operator">=</span> <span class="token class-name">Car</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Blue&#39;</span></span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
car<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-set-属性访问器" tabindex="-1"><a class="header-anchor" href="#get-set-属性访问器" aria-hidden="true">#</a> <code>get/set</code> - “属性访问器”</h3><blockquote><p><code>get</code> 和 <code>set</code> 是用于封装对象的属性的特殊方法。</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
  <span class="token comment">// 半径属性</span>
  double radius<span class="token punctuation">;</span>
  
  <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>radius<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// get 方法，获取圆的直径</span>
  double <span class="token keyword">get</span> diameter <span class="token operator">=</span><span class="token operator">&gt;</span> radius <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token comment">// set 方法，传入圆的直径，设置为圆的半径</span>
  <span class="token keyword">void</span> <span class="token keyword">set</span> <span class="token function">diameter</span><span class="token punctuation">(</span>double diameter<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> diameter <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Circle</span> circle <span class="token operator">=</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">print</span><span class="token punctuation">(</span>circle<span class="token punctuation">.</span>diameter<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 10</span>
circle<span class="token punctuation">.</span>diameter <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token function">print</span><span class="token punctuation">(</span>circle<span class="token punctuation">.</span>radius<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="factory-工厂构造函数" tabindex="-1"><a class="header-anchor" href="#factory-工厂构造函数" aria-hidden="true">#</a> <code>factory</code> - “工厂构造函数”</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
  <span class="token comment">// 私有构造函数</span>
  <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">_privateConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  <span class="token comment">// 保存实例</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> _instance <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">_privateConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  <span class="token comment">// 工厂构造函数</span>
  <span class="token keyword">factory</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> _instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s1 <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> s2 <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">identical</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extension-类扩展" tabindex="-1"><a class="header-anchor" href="#extension-类扩展" aria-hidden="true">#</a> <code>extension</code> - “类扩展”</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 匿名扩展(仅所在文件可用): 字符串扩展</span>
<span class="token keyword">extension</span> <span class="token keyword">on</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 命名扩展：字符串扩展</span>
<span class="token keyword">extension</span> <span class="token class-name">NumberParsing</span> <span class="token keyword">on</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
  int <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> int<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  double <span class="token function">parseDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> double<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string-literal"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;42&#39;</span></span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 42</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;3.14&#39;</span></span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3.14</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
  <span class="token comment">// _ : 通过下划线，定义私有属性</span>
  double _side<span class="token punctuation">;</span>

  <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_side<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 通过方法来间接访问属性</span>
  double <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> _side <span class="token operator">*</span> _side<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> square <span class="token operator">=</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">print</span><span class="token punctuation">(</span>square<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 9.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><h4 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h4><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 使用 abstract 声明抽象类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Eating...&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//  - 继承方式使用抽象类: 仅需要实现未实现的方法</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Woof!!!&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//  - 接口方式使用抽象类：需要实现所有抽象类中的方法和属性</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Meow!!!&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;The cat is eating...&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Dog</span> dog <span class="token operator">=</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Woof!!!</span>
dog<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// Eating...</span>
<span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span><span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Meow!!!</span>
cat<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// The cat is eating...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h4><blockquote><p><code>Dart</code> 中没有接口，可以通过 <code>implements</code> 一个类或抽象类来实现接口功能。</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">//  - 通过实现一个类，来实现接口功能</span>
<span class="token keyword">class</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Bird</span> <span class="token keyword">implements</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;The bird is flying&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Airplane</span> <span class="token keyword">implements</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;The airplane is flying&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">Bird</span> bird <span class="token operator">=</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bird<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// The bird is flying</span>
<span class="token class-name">Airplane</span> airplane <span class="token operator">=</span> <span class="token class-name">Airplane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
airplane<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// The airplane is flying</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mixin-混入" tabindex="-1"><a class="header-anchor" href="#mixin-混入" aria-hidden="true">#</a> <code>mixin</code> - “混入”</h4><blockquote><p><code>with</code> - 混入功能</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// mixin - 蓝牙功能</span>
<span class="token keyword">mixin</span> <span class="token class-name">Bluetooth</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">bluetoothConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Bluetooth connection established.&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// mixin - wifi 功能</span>
<span class="token keyword">mixin</span> <span class="token class-name">Wifi</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">wifiConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;WiFi connection established.&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 父类 - 智能设备</span>
<span class="token keyword">class</span> <span class="token class-name">SmartDevice</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">powerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Device powered on.&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 智能手机：继承父类 \`SmartDevice\` 混入 \`Bluetooth、Wifi\` 功能</span>
<span class="token keyword">class</span> <span class="token class-name">SmartPhone</span> <span class="token keyword">extends</span> <span class="token class-name">SmartDevice</span> <span class="token keyword">with</span> <span class="token class-name">Bluetooth</span><span class="token punctuation">,</span> <span class="token class-name">Wifi</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">allConnections</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">powerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">bluetoothConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">wifiConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">SmartPhone</span> phone <span class="token operator">=</span> <span class="token class-name">SmartPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
phone<span class="token punctuation">.</span><span class="token function">allConnections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>on</code> - 混入限制</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 抽象类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> heroName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// minxin 限定只有实现 Hero 抽象类的类才能混入该功能</span>
<span class="token keyword">mixin</span> <span class="token class-name">Ability</span> <span class="token keyword">on</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">specialAbility</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">heroName</span></span><span class="token string">’s special ability activated!&#39;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 继承 Hero 抽象类，并混入 Ability 功能</span>
<span class="token keyword">class</span> <span class="token class-name">SuperHero</span> <span class="token keyword">extends</span> <span class="token class-name">Hero</span> <span class="token keyword">with</span> <span class="token class-name">Ability</span> <span class="token punctuation">{</span>
  <span class="token class-name">SuperHero</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heroName<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> heroName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">SuperHero</span> superman <span class="token operator">=</span> <span class="token class-name">SuperHero</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Superman&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">print</span><span class="token punctuation">(</span>superman<span class="token punctuation">.</span><span class="token function">specialAbility</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Superman&#39;s special ability activated!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><blockquote><p>多态性：同一操作作用于不同的对象，可以有不同的解释，产生不同的执行结果。</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 抽象类：形状</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  double <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 矩形</span>
<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> double width<span class="token punctuation">,</span> height<span class="token punctuation">;</span>
  <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token metadata function">@override</span>
  double <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> width <span class="token operator">*</span> height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 圆形</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> double radius<span class="token punctuation">;</span>
  <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>radius<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  double <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 打印形状</span>
<span class="token keyword">void</span> <span class="token function">printArea</span><span class="token punctuation">(</span><span class="token class-name">Shape</span> shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>shape<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 父类指针指向子类对象</span>
  <span class="token class-name">Shape</span> rect <span class="token operator">=</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Shape</span> circ <span class="token operator">=</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">printArea</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>
  <span class="token function">printArea</span><span class="token punctuation">(</span>circ<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 78.5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","0x02.object-oriented.html.vue"]]);export{d as default};
