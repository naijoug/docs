import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as c,b as a,f as o}from"./app-ri5NbhQI.js";const t="/docs/assets/objc-class-diagram-0JRmvx1z.jpg",i={},d=a("blockquote",null,[a("p",null,"运行时")],-1),l=o('<h2 id="对象模型" tabindex="-1"><a class="header-anchor" href="#对象模型" aria-hidden="true">#</a> 对象模型</h2><h3 id="❓oc-的对象模型" tabindex="-1"><a class="header-anchor" href="#❓oc-的对象模型" aria-hidden="true">#</a> ❓<code>OC</code> 的对象模型</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>Objective-C 类图</p></blockquote><figure><img src="'+t+`" alt="objc-class-diagram" tabindex="0" loading="lazy"><figcaption>objc-class-diagram</figcaption></figure></details><h3 id="❓isa-是什么" tabindex="-1"><a class="header-anchor" href="#❓isa-是什么" aria-hidden="true">#</a> ❓<code>isa</code> 是什么？</h3><details class="hint-container details"><summary>💡</summary><blockquote><p><code>isa</code>： <code>OC</code> 对象的一个指针，它是每个 <code>OC</code> 对象的第一个成员变量，用于指向该对象的类对象。</p></blockquote><p><code>Objective-C</code> 的对象模型中，对象分为实例对象、类对象、元类对象，这三种对象都含有 <code>isa</code> 指针。</p><ul><li><p>实例对象: 实例对象的<code>isa</code>指向它的类对象；实例对象主要存储实例变量的值。</p></li><li><p>类对象: 类对象的<code>isa</code>指向元类对象；类对象主要存储实例方法、属性、以及遵守的协议等信息。</p></li><li><p>元类对象: 元类对象的<code>isa</code>指向自身；元类对象主要存储类方法等信息。</p></li></ul><p>当发送消息给一个对象时，<code>runtime</code> 通过这个对象的 <code>isa</code> 指针找到它的类对象，然后在类对象的方法列表中查找对应的方法进行调用。</p></details><h3 id="❓类结构体的组成-isa-指针指向了什么" tabindex="-1"><a class="header-anchor" href="#❓类结构体的组成-isa-指针指向了什么" aria-hidden="true">#</a> ❓类结构体的组成，<code>isa</code> 指针指向了什么？</h3><details class="hint-container details"><summary>💡</summary><p>先给出答案 <code>isa</code> 指针是指向类对象，每一个对象都包含 <code>isa</code> 指针，通过这个指针可以找到类对象。</p><p>当一个对象调用某个方法时(消息发送)，运行时先在当前方法列表中查找，如果不存在，通过 <code>isa</code> 指针查找类对象中是否存在方法，如果还不存在会通过父类指针进一步往上查找，最后还是找不到就会抛出未找到异常。</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// id 就是 objc_object</span>
<span class="token keyword">struct</span> objc_object <span class="token punctuation">{</span>
  Class _Nonnull isa<span class="token punctuation">;</span>         <span class="token comment">// 指向对象所属的类</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Class 就是 objc_class</span>
<span class="token keyword">struct</span> objc_class <span class="token punctuation">{</span>
  Class _Nonnull isa<span class="token punctuation">;</span>         <span class="token comment">// 指向元类</span>
  Class _Nullable superclass<span class="token punctuation">;</span> <span class="token comment">// 指向父类</span>
  cache_t cache<span class="token punctuation">;</span>              <span class="token comment">// 方法缓存</span>
  class_data_bits_t bits<span class="token punctuation">;</span>     <span class="token comment">// 包含方法列表和其他信息</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="isa-指针里面都存了什么-32和64位分别讲一下" tabindex="-1"><a class="header-anchor" href="#isa-指针里面都存了什么-32和64位分别讲一下" aria-hidden="true">#</a> <code>isa</code> 指针里面都存了什么，32和64位分别讲一下?</h3><h3 id="_64位后怎么获取-isa-指针" tabindex="-1"><a class="header-anchor" href="#_64位后怎么获取-isa-指针" aria-hidden="true">#</a> 64位后怎么获取 <code>isa</code> 指针？</h3><h3 id="讲一下对象-类对象-元类-跟元类结构体的组成以及他们是如何相关联的" tabindex="-1"><a class="header-anchor" href="#讲一下对象-类对象-元类-跟元类结构体的组成以及他们是如何相关联的" aria-hidden="true">#</a> 讲一下对象，类对象，元类，跟元类结构体的组成以及他们是如何相关联的？</h3><h3 id="为什么要设计-metaclass" tabindex="-1"><a class="header-anchor" href="#为什么要设计-metaclass" aria-hidden="true">#</a> 为什么要设计 <code>metaclass</code>？</h3><hr><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="为什么对象方法没有保存的对象结构体里-而是保存在类对象的结构体里" tabindex="-1"><a class="header-anchor" href="#为什么对象方法没有保存的对象结构体里-而是保存在类对象的结构体里" aria-hidden="true">#</a> 为什么对象方法没有保存的对象结构体里，而是保存在类对象的结构体里？</h3><h3 id="class-copyivarlist-vs-class-copypropertylist" tabindex="-1"><a class="header-anchor" href="#class-copyivarlist-vs-class-copypropertylist" aria-hidden="true">#</a> <code>class_copyIvarList</code> vs <code>class_copyPropertyList</code></h3><h3 id="class-ro-t-vs-class-rw-t" tabindex="-1"><a class="header-anchor" href="#class-ro-t-vs-class-rw-t" aria-hidden="true">#</a> <code>class_ro_t</code> vs <code>class_rw_t</code></h3><h3 id="能否向编译后得到的类中增加实例变量-能否向运行时创建的类中添加实例变量" tabindex="-1"><a class="header-anchor" href="#能否向编译后得到的类中增加实例变量-能否向运行时创建的类中添加实例变量" aria-hidden="true">#</a> 能否向编译后得到的类中增加实例变量？能否向运行时创建的类中添加实例变量？</h3><hr><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="对象方法-与-类方法存放在哪" tabindex="-1"><a class="header-anchor" href="#对象方法-与-类方法存放在哪" aria-hidden="true">#</a> 对象方法 与 类方法存放在哪？</h3><h3 id="class、objc-getclass、object-getclass-三个方法的区别" tabindex="-1"><a class="header-anchor" href="#class、objc-getclass、object-getclass-三个方法的区别" aria-hidden="true">#</a> <code>class</code>、<code>objc_getClass</code>、<code>object_getclass</code> 三个方法的区别？</h3><h3 id="在运行时创建类的方法-objc-allocateclasspair-的方法名尾部为什么是pair-成对的意思" tabindex="-1"><a class="header-anchor" href="#在运行时创建类的方法-objc-allocateclasspair-的方法名尾部为什么是pair-成对的意思" aria-hidden="true">#</a> 在运行时创建类的方法 <code>objc_allocateClassPair</code> 的方法名尾部为什么是pair（成对的意思）？</h3><h3 id="method-t-里包含什么" tabindex="-1"><a class="header-anchor" href="#method-t-里包含什么" aria-hidden="true">#</a> <code>method_t</code> 里包含什么？</h3><h3 id="❓super-是什么" tabindex="-1"><a class="header-anchor" href="#❓super-是什么" aria-hidden="true">#</a> ❓<code>super</code> 是什么？</h3><details class="hint-container details"><summary>💡</summary><p><code>super</code> 并不是一个指针，在 <code>OC</code> 进行消息调用时，其实是有两个隐藏参数的，一个是接收者(receiver)，一个是方法选择器(selector)。</p><p>常见的 <code>self</code> 表示的是接收者。而 <code>super</code> 其实是一个编译器标示符，当发送给 <code>super</code> 一个消息时，调用者仍然是 <code>self</code> ，但是运行时会从当前类的父类开始查找方法。</p><blockquote><p>以下代码输出？</p></blockquote><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token keyword">@interface</span> Animal
<span class="token keyword">@end</span>
<span class="token keyword">@interface</span> Dog <span class="token punctuation">:</span> Animal
<span class="token keyword">@end</span>
<span class="token keyword">@implementation</span> Dog
<span class="token operator">-</span> <span class="token punctuation">(</span>instancetype<span class="token punctuation">)</span>init <span class="token punctuation">{</span>
  <span class="token keyword">self</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">super</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token function">NSStringFromClass</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">self</span> class<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token function">NSStringFromClass</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">super</span> class<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说 <code>super</code> 并不会改变消息的接收者，所以当我们调用 <code>[super class]</code> 时，虽然是从父类开始查找 <code>class</code> 方法，但是方法的接收者依然是 <code>self</code> 本身，其类别自然是当前类本身。这也是为什么我们再调用 <code>[super class]</code> 时还会返回 <code>Dog</code> 类的原因。</p></details><blockquote><p><code>super</code> 的底层实现？</p></blockquote><details class="hint-container details"><summary>💡</summary><p><code>OC</code> 中 <code>super</code> 的实现是通过 <code>runtime</code> 的 <code>objc_msgSendSuper</code> 和 <code>objc_msgSendSuper_stret</code> 两个函数来完成的。具体来说，当编译器遇到 <code>[super method]</code> 这种形式的调用时，会转化为 <code>objc_msgSendSuper(super_cls, sel)</code> 的形式。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// super 结构体</span>
<span class="token keyword">struct</span> <span class="token class-name">objc_super</span> <span class="token punctuation">{</span>
  __unsafe_unretained id receiver<span class="token punctuation">;</span>        <span class="token comment">// 消息的接收者</span>
  __unsafe_unretained Class super_class<span class="token punctuation">;</span>  <span class="token comment">// 父类(开始查找的类)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// objc_msgSendSuper</span>
<span class="token keyword">void</span> <span class="token function">objc_msgSendSuper</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">objc_super</span> <span class="token operator">*</span>super<span class="token punctuation">,</span> SEL op<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="❓oc-运行时在工程中的有过实践运用吗" tabindex="-1"><a class="header-anchor" href="#❓oc-运行时在工程中的有过实践运用吗" aria-hidden="true">#</a> ❓<code>OC</code> 运行时在工程中的有过实践运用吗？</h3><hr><h2 id="method-swizzling" tabindex="-1"><a class="header-anchor" href="#method-swizzling" aria-hidden="true">#</a> Method Swizzling</h2><h3 id="method-swizzling-原理" tabindex="-1"><a class="header-anchor" href="#method-swizzling-原理" aria-hidden="true">#</a> <code>Method Swizzling</code> 原理？</h3><h3 id="method-swizzling-时-不替换父类-只替换子类-怎么处理" tabindex="-1"><a class="header-anchor" href="#method-swizzling-时-不替换父类-只替换子类-怎么处理" aria-hidden="true">#</a> <code>Method Swizzling</code> 时, 不替换父类, 只替换子类，怎么处理?</h3><h3 id="method-swizzling-的优缺点-缺点会导致什么问题" tabindex="-1"><a class="header-anchor" href="#method-swizzling-的优缺点-缺点会导致什么问题" aria-hidden="true">#</a> <code>Method Swizzling</code> 的优缺点? 缺点会导致什么问题?</h3><h3 id="如何安全的进行方法替换" tabindex="-1"><a class="header-anchor" href="#如何安全的进行方法替换" aria-hidden="true">#</a> 如何安全的进行方法替换？</h3><h3 id="方法交换和分类同时去-hook-一个方法-结果会怎么样-具体交换的是什么-交换时是如何处理传参数" tabindex="-1"><a class="header-anchor" href="#方法交换和分类同时去-hook-一个方法-结果会怎么样-具体交换的是什么-交换时是如何处理传参数" aria-hidden="true">#</a> 方法交换和分类同时去 <code>hook</code> 一个方法,结果会怎么样? 具体交换的是什么? 交换时是如何处理传参数?</h3><blockquote><p>如果使用 <code>NSInvocation</code> 的话, 是否能处理方法有返回值的场景?具体怎么处理的?</p></blockquote>`,36);function p(r,u){return n(),e("div",null,[d,c(" more "),l])}const k=s(i,[["render",p],["__file","runtime.html.vue"]]);export{k as default};
