import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as l,b as n,e,d as t,f as s}from"./app-uNK90VvC.js";const i={},u=s('<h2 id="引用计数" tabindex="-1"><a class="header-anchor" href="#引用计数" aria-hidden="true">#</a> 引用计数</h2><p><code>MRC</code>(Manual Reference Counting) : 手动引用计数。需要程序员自己申请(<code>retain</code>)和释放(<code>release</code>、<code>autorelease</code>)</p><p><code>ARC</code>(Automatic Reference Counting) : 自动引用计数，是 iOS 中的内存管理技术。编译器在编译阶段，在代码需要内存管理的地方插入内存管理操作(<code>retain</code>、<code>release</code>、<code>autorelase</code>)，当对象引用计数为 0 时，在 <code>dealloc</code> 的时候，会释放掉对象占用内存，自动地管理对象的生命周期。</p><p><code>autorelease</code> 用于延迟对象的释放。正常情况下，如果申请的对象超出作用域会释放。而使用 <code>autorelease</code> 的对象，会加入自动释放池中，延迟对象的释放时机。</p><h2 id="weak-弱引用" tabindex="-1"><a class="header-anchor" href="#weak-弱引用" aria-hidden="true">#</a> <code>weak</code> - “弱引用”</h2><h3 id="看源码" tabindex="-1"><a class="header-anchor" href="#看源码" aria-hidden="true">#</a> 看源码</h3>',6),r={href:"https://github.com/apple-oss-distributions/objc4/blob/objc4-906/runtime/objc-weak.h",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// file: objc-weak.h</span>
<span class="token comment">// line: 80 弱引用条目</span>
<span class="token keyword">struct</span> weak_entry_t <span class="token punctuation">{</span>
    DisguisedPtr<span class="token operator">&lt;</span>objc_object<span class="token operator">&gt;</span> referent<span class="token punctuation">;</span> <span class="token comment">// 被弱引用的对象</span>
    <span class="token keyword">union</span> <span class="token punctuation">{</span>
        <span class="token keyword">struct</span> <span class="token punctuation">{</span>
            weak_referrer_t <span class="token operator">*</span>referrers<span class="token punctuation">;</span> <span class="token comment">// 弱引用的数组</span>
            uintptr_t        out_of_line_ness <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">;</span>
            uintptr_t        num_refs <span class="token punctuation">:</span> PTR_MINUS_2<span class="token punctuation">;</span>
            uintptr_t        mask<span class="token punctuation">;</span>
            uintptr_t        max_hash_displacement<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">struct</span> <span class="token punctuation">{</span>
            <span class="token comment">// out_of_line_ness field is low bits of inline_referrers[1]</span>
            weak_referrer_t  inline_referrers<span class="token punctuation">[</span>WEAK_INLINE_COUNT<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 弱引用的内联数组</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * The global weak references table. Stores object ids as keys, and weak_entry_t structs as their values.
 */</span> 
<span class="token comment">// line: 119 全局弱引用表，将对象 id 作为键，弱引用条目(weak_entry_t)作为值</span>
<span class="token keyword">struct</span> weak_table_t <span class="token punctuation">{</span>
    weak_entry_t <span class="token operator">*</span>weak_entries<span class="token punctuation">;</span> <span class="token comment">// 持有的弱引用数组</span>
    size_t    num_entries<span class="token punctuation">;</span>      <span class="token comment">// 弱引用数量</span>
    uintptr_t mask<span class="token punctuation">;</span>
    uintptr_t max_hash_displacement<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 弱引用注册 deallocating 时选项</span>
<span class="token keyword">enum</span> WeakRegisterDeallocatingOptions <span class="token punctuation">{</span>
    ReturnNilIfDeallocating<span class="token punctuation">,</span>    
    CrashIfDeallocating<span class="token punctuation">,</span>       
    DontCheckDeallocating       
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k={href:"https://github.com/apple-oss-distributions/objc4/blob/objc4-906/runtime/NSObject.mm",target:"_blank",rel:"noopener noreferrer"},v=s(`<div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// file: NSObject-private.h</span>
<span class="token comment">// line: 47</span>
<span class="token keyword">struct</span> SideTable <span class="token punctuation">{</span>
    spinlock_t slock<span class="token punctuation">;</span>           <span class="token comment">// 自旋锁</span>
    RefcountMap refcnts<span class="token punctuation">;</span>        <span class="token comment">// 引用计数表</span>
    weak_table_t weak_table<span class="token punctuation">;</span>    <span class="token comment">// 弱引用表</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// file: NSObject.mm</span>
<span class="token comment">// line: 273 stong 修饰类型存储逻辑</span>
<span class="token keyword">void</span> <span class="token function">objc_storeStrong</span><span class="token punctuation">(</span>id <span class="token operator">*</span>location<span class="token punctuation">,</span> id obj<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    id prev <span class="token operator">=</span> <span class="token operator">*</span>location<span class="token punctuation">;</span> <span class="token comment">// 保存旧值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> prev<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 值相同直接返回</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">objc_retain</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 持有新值</span>
    <span class="token operator">*</span>location <span class="token operator">=</span> obj<span class="token punctuation">;</span>    <span class="token comment">// 设置新值</span>
    <span class="token function">objc_release</span><span class="token punctuation">(</span>prev<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 释放旧值</span>
<span class="token punctuation">}</span>

<span class="token comment">// line: 299 weak 修饰类型存储逻辑</span>
<span class="token keyword">static</span> id 
<span class="token function">storeWeak</span><span class="token punctuation">(</span>id <span class="token operator">*</span>location<span class="token punctuation">,</span> objc_object <span class="token operator">*</span>newObj<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Class previouslyInitializedClass <span class="token operator">=</span> nil<span class="token punctuation">;</span> <span class="token comment">// 保存初始化类</span>
    id oldObj<span class="token punctuation">;</span>              <span class="token comment">// 旧值</span>
    SideTable <span class="token operator">*</span>oldTable<span class="token punctuation">;</span>    <span class="token comment">// 旧值所在引用计数表</span>
    SideTable <span class="token operator">*</span>newTable<span class="token punctuation">;</span>    <span class="token comment">// 新值所在引用计数表</span>
    <span class="token comment">// Acquire locks for old and new values. Order by lock address to prevent lock ordering problems. Retry if the old value changes underneath us. </span>
 retry<span class="token punctuation">:</span> <span class="token comment">// 获取旧值和新值的锁。为防止锁排序问题，对锁地址进行排序。如果旧值在下面发生改变将进行重试。</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>haveOld<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 获取旧值、旧表</span>
        oldObj <span class="token operator">=</span> <span class="token operator">*</span>location<span class="token punctuation">;</span>
        oldTable <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token function">SideTables</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>oldObj<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        oldTable <span class="token operator">=</span> nil<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>haveNew<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 创建新表</span>
        newTable <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token function">SideTables</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>newObj<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        newTable <span class="token operator">=</span> nil<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 加锁</span>
    SideTable<span class="token punctuation">:</span><span class="token punctuation">:</span>lockTwo<span class="token operator">&lt;</span>haveOld<span class="token punctuation">,</span> haveNew<span class="token operator">&gt;</span><span class="token punctuation">(</span>oldTable<span class="token punctuation">,</span> newTable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 线程安全校验，如果旧值发生改变，返回重试</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>haveOld  <span class="token operator">&amp;&amp;</span>  <span class="token operator">*</span>location <span class="token operator">!=</span> oldObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        SideTable<span class="token punctuation">:</span><span class="token punctuation">:</span>unlockTwo<span class="token operator">&lt;</span>haveOld<span class="token punctuation">,</span> haveNew<span class="token operator">&gt;</span><span class="token punctuation">(</span>oldTable<span class="token punctuation">,</span> newTable<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">goto</span> retry<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Prevent a deadlock between the weak reference machinery and the +initialize machinery by ensuring that no weakly-referenced object has an un-+initialized isa.</span>
    <span class="token comment">// 为了防止弱引用机制与初始化机制发生死锁，确认所有的弱引用对象都有初始化 isa</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>haveNew  <span class="token operator">&amp;&amp;</span>  newObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Class cls <span class="token operator">=</span> newObj<span class="token operator">-&gt;</span><span class="token function">getIsa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cls <span class="token operator">!=</span> previouslyInitializedClass  <span class="token operator">&amp;&amp;</span>  <span class="token operator">!</span><span class="token punctuation">(</span><span class="token punctuation">(</span>objc_class <span class="token operator">*</span><span class="token punctuation">)</span>cls<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">isInitialized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
        <span class="token punctuation">{</span> <span class="token comment">// </span>
            SideTable<span class="token punctuation">:</span><span class="token punctuation">:</span>unlockTwo<span class="token operator">&lt;</span>haveOld<span class="token punctuation">,</span> haveNew<span class="token operator">&gt;</span><span class="token punctuation">(</span>oldTable<span class="token punctuation">,</span> newTable<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">class_initialize</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>newObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// If this class is finished with +initialize then we&#39;re good.</span>
            <span class="token comment">// If this class is still running +initialize on this thread (i.e. +initialize called storeWeak on an instance of itself) then we may proceed but it will appear initializing and not yet initialized to the check above.</span>
            <span class="token comment">// Instead set previouslyInitializedClass to recognize it on retry.</span>
            previouslyInitializedClass <span class="token operator">=</span> cls<span class="token punctuation">;</span>
            <span class="token keyword">goto</span> retry<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Clean up old value, if any.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>haveOld<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 清除旧值，从弱引用表中注销</span>
        <span class="token function">weak_unregister_no_lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>oldTable<span class="token operator">-&gt;</span>weak_table<span class="token punctuation">,</span> oldObj<span class="token punctuation">,</span> location<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Assign new value, if any.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>haveNew<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 分配新值，在弱引用表中注册</span>
        newObj <span class="token operator">=</span> <span class="token punctuation">(</span>objc_object <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">weak_register_no_lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>newTable<span class="token operator">-&gt;</span>weak_table<span class="token punctuation">,</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>newObj<span class="token punctuation">,</span> location<span class="token punctuation">,</span> crashIfDeallocating <span class="token operator">?</span> CrashIfDeallocating <span class="token punctuation">:</span> ReturnNilIfDeallocating<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// weak_register_no_lock returns nil if weak store should be rejected</span>

        <span class="token comment">// Set is-weakly-referenced bit in refcount table.</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">_objc_isTaggedPointerOrNil</span><span class="token punctuation">(</span>newObj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newObj<span class="token operator">-&gt;</span><span class="token function">setWeaklyReferenced_nolock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Do not set *location anywhere else. That would introduce a race.</span>
        <span class="token operator">*</span>location <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>newObj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 解锁</span>
    SideTable<span class="token punctuation">:</span><span class="token punctuation">:</span>unlockTwo<span class="token operator">&lt;</span>haveOld<span class="token punctuation">,</span> haveNew<span class="token operator">&gt;</span><span class="token punctuation">(</span>oldTable<span class="token punctuation">,</span> newTable<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// This must be called without the locks held, as it can invoke arbitrary code. </span>
    <span class="token comment">// In particular, even if _setWeaklyReferenced is not implemented, resolveInstanceMethod: may be, and may call back into the weak reference machinery.</span>
    <span class="token comment">// 因为他可能会被任意代码调用，所以必须要在不加锁的情况下调用。</span>
    <span class="token comment">// 特别是，即使 _setWeaklyReferenced 没有实现，resolveInstanceMethod: 也有可能调用，导致回调进入弱引用机制中</span>
    <span class="token function">callSetWeaklyReferenced</span><span class="token punctuation">(</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>newObj<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>newObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="autoreleasepool-自动释放池" tabindex="-1"><a class="header-anchor" href="#autoreleasepool-自动释放池" aria-hidden="true">#</a> <code>AutoreleasePool</code> - “自动释放池”</h2><h3 id="看源码-1" tabindex="-1"><a class="header-anchor" href="#看源码-1" aria-hidden="true">#</a> 看源码</h3>`,4),m={href:"https://github.com/apple-oss-distributions/objc4/blob/objc4-906/runtime/NSObject.mm",target:"_blank",rel:"noopener noreferrer"},b=s(`<div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// file: NSObject.mm</span>
<span class="token comment">// line: 658</span>
<span class="token comment">// 自动释放池每页类定义</span>
class AutoreleasePoolPage <span class="token punctuation">:</span> private AutoreleasePoolPageData
<span class="token punctuation">{</span>
	friend <span class="token keyword">struct</span> thread_data_t<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// file: NSObject-internal.h</span>
<span class="token comment">// line: 132</span>
class AutoreleasePoolPage<span class="token punctuation">;</span>
<span class="token comment">// 自动释放池每页数据</span>
<span class="token keyword">struct</span> AutoreleasePoolPageData 
<span class="token punctuation">{</span>
	magic_t <span class="token keyword">const</span> magic<span class="token punctuation">;</span>
	__unsafe_unretained id <span class="token operator">*</span>next<span class="token punctuation">;</span>          <span class="token comment">// 指向下一个数据</span>
	objc_thread_t <span class="token keyword">const</span> thread<span class="token punctuation">;</span>
	AutoreleasePoolPage <span class="token operator">*</span> <span class="token keyword">const</span> parent<span class="token punctuation">;</span>    <span class="token comment">// 上一页指针</span>
	AutoreleasePoolPage <span class="token operator">*</span>child<span class="token punctuation">;</span>            <span class="token comment">// 下一页指针</span>
	uint32_t <span class="token keyword">const</span> depth<span class="token punctuation">;</span>
	uint32_t hiwat<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(_,w){const a=p("ExternalLinkIcon");return c(),l("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[e("weak 源码"),t(a)])])]),d,n("blockquote",null,[n("p",null,[n("a",k,[e("objc_store 源码"),t(a)])])]),v,n("blockquote",null,[n("p",null,[n("a",m,[e("AutoreleasePool 源码"),t(a)])])]),b])}const j=o(i,[["render",h],["__file","memory.html.vue"]]);export{j as default};
