import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as l,c as i,a as p,b as n,e as s,d as t,f as a}from"./app-BbS1TFYB.js";const u={},r=n("blockquote",null,[n("p",null,[n("code",null,"Memory Management"),s(" - “内存管理”")])],-1),k=a('<h2 id="引用计数" tabindex="-1"><a class="header-anchor" href="#引用计数" aria-hidden="true">#</a> 引用计数</h2><ul><li><p><code>MRC</code>(Manual Reference Counting) : 手动引用计数。需要程序员自己申请(<code>retain</code>)和释放(<code>release</code>、<code>autorelease</code>)</p></li><li><p><code>ARC</code>(Automatic Reference Counting) : 自动引用计数，是 iOS 中的内存管理技术。编译器在编译阶段，在代码需要内存管理的地方插入内存管理操作(<code>retain</code>、<code>release</code>、<code>autorelase</code>)，当对象引用计数为 0 时，在 <code>dealloc</code> 的时候，会释放掉对象占用内存，自动地管理对象的生命周期。</p></li></ul>',2),d=n("h3",{id:"sidetable",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sidetable","aria-hidden":"true"},"#"),s(" SideTable")],-1),v={href:"https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/NSObject-private.h#L47",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// NSObject-private.h#L47</span>
<span class="token comment">// SideTable 结构体</span>
<span class="token keyword">struct</span> SideTable <span class="token punctuation">{</span>
    spinlock_t slock<span class="token punctuation">;</span>           <span class="token comment">// 自旋锁</span>
    RefcountMap refcnts<span class="token punctuation">;</span>        <span class="token comment">// 引用计数表</span>
    weak_table_t weak_table<span class="token punctuation">;</span>    <span class="token comment">// 弱引用表</span>

    <span class="token function">SideTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>weak_table<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>weak_table<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">~</span><span class="token function">SideTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">_objc_fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Do not delete SideTable.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> slock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> slock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> slock<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token comment">// Address-ordered lock discipline for a pair of side tables.</span>
    <span class="token comment">// 对两个 SideTable 递增排序规则进行加锁</span>
    
    template<span class="token operator">&lt;</span>HaveOld<span class="token punctuation">,</span> HaveNew<span class="token operator">&gt;</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">lockTwo</span><span class="token punctuation">(</span>SideTable <span class="token operator">*</span>lock1<span class="token punctuation">,</span> SideTable <span class="token operator">*</span>lock2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    template<span class="token operator">&lt;</span>HaveOld<span class="token punctuation">,</span> HaveNew<span class="token operator">&gt;</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">unlockTwo</span><span class="token punctuation">(</span>SideTable <span class="token operator">*</span>lock1<span class="token punctuation">,</span> SideTable <span class="token operator">*</span>lock2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weak-table-t" tabindex="-1"><a class="header-anchor" href="#weak-table-t" aria-hidden="true">#</a> weak_table_t</h3>`,2),b={href:"https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-weak.h#L119",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// objc-weak.h#L119</span>
<span class="token comment">/**
 * The global weak references table. Stores object ids as keys, and weak_entry_t structs as their values.
 */</span> 
<span class="token comment">// 全局弱引用表，将对象 id 作为键，弱引用条目(weak_entry_t)作为值</span>
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

<span class="token comment">// line: 80 </span>
<span class="token comment">// 弱引用条目</span>
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

    bool <span class="token function">out_of_line</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>out_of_line_ness <span class="token operator">==</span> REFERRERS_OUT_OF_LINE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    weak_entry_t<span class="token operator">&amp;</span> operator<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> weak_entry_t<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">memcpy</span><span class="token punctuation">(</span>this<span class="token punctuation">,</span> <span class="token operator">&amp;</span>other<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">*</span>this<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">weak_entry_t</span><span class="token punctuation">(</span>objc_object <span class="token operator">*</span>newReferent<span class="token punctuation">,</span> objc_object <span class="token operator">*</span><span class="token operator">*</span>newReferrer<span class="token punctuation">)</span>
        <span class="token punctuation">:</span> <span class="token function">referent</span><span class="token punctuation">(</span>newReferent<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        inline_referrers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> newReferrer<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> WEAK_INLINE_COUNT<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            inline_referrers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nil<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="objc-storestrong" tabindex="-1"><a class="header-anchor" href="#objc-storestrong" aria-hidden="true">#</a> objc_storeStrong</h3>`,2),_={href:"https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/NSObject.mm#L275",target:"_blank",rel:"noopener noreferrer"},w=a(`<div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// NSObject.mm#L275</span>
<span class="token comment">// strong 修饰类型存储逻辑</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="objc-storeweak" tabindex="-1"><a class="header-anchor" href="#objc-storeweak" aria-hidden="true">#</a> objc_storeWeak</h3>`,2),f={href:"https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/NSObject.mm#L403",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// NSObject.mm#L403</span>
<span class="token comment">// weak 修饰类型存储逻辑</span>
id <span class="token function">objc_storeWeak</span><span class="token punctuation">(</span>id <span class="token operator">*</span>location<span class="token punctuation">,</span> id newObj<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> storeWeak<span class="token operator">&lt;</span>DoHaveOld<span class="token punctuation">,</span> DoHaveNew<span class="token punctuation">,</span> DoCrashIfDeallocating<span class="token operator">&gt;</span>
        <span class="token punctuation">(</span>location<span class="token punctuation">,</span> <span class="token punctuation">(</span>objc_object <span class="token operator">*</span><span class="token punctuation">)</span>newObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// line: 300</span>
<span class="token keyword">static</span> id <span class="token function">storeWeak</span><span class="token punctuation">(</span>id <span class="token operator">*</span>location<span class="token punctuation">,</span> objc_object <span class="token operator">*</span>newObj<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">ASSERT</span><span class="token punctuation">(</span>haveOld  <span class="token operator">||</span>  haveNew<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>haveNew<span class="token punctuation">)</span> <span class="token function">ASSERT</span><span class="token punctuation">(</span>newObj <span class="token operator">==</span> nil<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="自动释放池" tabindex="-1"><a class="header-anchor" href="#自动释放池" aria-hidden="true">#</a> 自动释放池</h2><blockquote><p><code>autorelease</code> 用于延迟对象的释放。正常情况下，如果申请的对象超出作用域会释放。而使用 <code>autorelease</code> 的对象，会加入自动释放池中，延迟对象的释放时机。</p></blockquote>`,4),y=n("h3",{id:"autoreleasepoolpage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#autoreleasepoolpage","aria-hidden":"true"},"#"),s(" AutoreleasePoolPage")],-1),j={href:"https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/NSObject.mm#L659",target:"_blank",rel:"noopener noreferrer"},O=a(`<div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// NSObject.mm#L659</span>
<span class="token comment">// 自动释放池每页类定义</span>
class AutoreleasePoolPage <span class="token punctuation">:</span> private AutoreleasePoolPageData
<span class="token punctuation">{</span>
	friend <span class="token keyword">struct</span> thread_data_t<span class="token punctuation">;</span>
	
	public<span class="token punctuation">:</span>
	<span class="token comment">// 自动释放池的每页数据大小</span>
	<span class="token keyword">static</span> size_t <span class="token keyword">const</span> SIZE <span class="token operator">=</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">PROTECT_AUTORELEASEPOOL</span></span>
		PAGE_MAX_SIZE<span class="token punctuation">;</span>  <span class="token comment">// must be multiple of vm page size</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
		PAGE_MIN_SIZE<span class="token punctuation">;</span>  <span class="token comment">// size and alignment, power of 2</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>


    <span class="token comment">// line: 1162</span>
    <span class="token comment">// push 进入自动释放池</span>
    <span class="token keyword">static</span> <span class="token keyword">inline</span> <span class="token keyword">void</span> <span class="token operator">*</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        ReturnAutoreleaseInfo info <span class="token operator">=</span> <span class="token function">getReturnAutoreleaseInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">moveTLSAutoreleaseToPool</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>

        id <span class="token operator">*</span>dest<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">slowpath</span><span class="token punctuation">(</span>DebugPoolAllocation<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Each autorelease pool starts on a new pool page.</span>
            <span class="token comment">// 每个自动释放池都会开启新的一页</span>
            dest <span class="token operator">=</span> <span class="token function">autoreleaseNewPage</span><span class="token punctuation">(</span>POOL_BOUNDARY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            dest <span class="token operator">=</span> <span class="token function">autoreleaseFast</span><span class="token punctuation">(</span>POOL_BOUNDARY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">ASSERT</span><span class="token punctuation">(</span>dest <span class="token operator">==</span> <span class="token punctuation">(</span>id <span class="token operator">*</span><span class="token punctuation">)</span>EMPTY_POOL_PLACEHOLDER <span class="token operator">||</span> <span class="token operator">*</span>dest <span class="token operator">==</span> POOL_BOUNDARY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dest<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// line: 1242</span>
    <span class="token comment">// pop 移出自动释放池</span>
    <span class="token keyword">static</span> <span class="token keyword">inline</span> <span class="token keyword">void</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>token<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// We may have an object in the ReturnAutorelease TLS when the pool is</span>
        <span class="token comment">// otherwise empty. Release that first before checking for an empty pool</span>
        <span class="token comment">// so we don&#39;t return prematurely. Loop in case the release placed a new</span>
        <span class="token comment">// object in the TLS.</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">releaseReturnAutoreleaseTLS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">;</span>

        AutoreleasePoolPage <span class="token operator">*</span>page<span class="token punctuation">;</span>
        id <span class="token operator">*</span>stop<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>token <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span><span class="token punctuation">)</span>EMPTY_POOL_PLACEHOLDER<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Popping the top-level placeholder pool.</span>
            page <span class="token operator">=</span> <span class="token function">hotPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>page<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Pool was never used. Clear the placeholder.</span>
                <span class="token keyword">return</span> <span class="token function">setHotPage</span><span class="token punctuation">(</span>nil<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// Pool was used. Pop its contents normally.</span>
            <span class="token comment">// Pool pages remain allocated for re-use as usual.</span>
            page <span class="token operator">=</span> <span class="token function">coldPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            token <span class="token operator">=</span> page<span class="token operator">-&gt;</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            page <span class="token operator">=</span> <span class="token function">pageForPointer</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        stop <span class="token operator">=</span> <span class="token punctuation">(</span>id <span class="token operator">*</span><span class="token punctuation">)</span>token<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>stop <span class="token operator">!=</span> POOL_BOUNDARY<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>stop <span class="token operator">==</span> page<span class="token operator">-&gt;</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">&amp;&amp;</span>  <span class="token operator">!</span>page<span class="token operator">-&gt;</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Start of coldest page may correctly not be POOL_BOUNDARY:</span>
                <span class="token comment">// 1. top-level pool is popped, leaving the cold page in place</span>
                <span class="token comment">// 2. an object is autoreleased with no pool</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// Error. For bincompat purposes this is not </span>
                <span class="token comment">// fatal in executables built with old SDKs.</span>
                <span class="token keyword">return</span> <span class="token function">badPop</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">slowpath</span><span class="token punctuation">(</span>PrintPoolHiwat <span class="token operator">||</span> DebugPoolAllocation <span class="token operator">||</span> DebugMissingPools<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">popPageDebug</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> page<span class="token punctuation">,</span> stop<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> popPage<span class="token operator">&lt;</span>false<span class="token operator">&gt;</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> page<span class="token punctuation">,</span> stop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="autoreleasepoolpagedata" tabindex="-1"><a class="header-anchor" href="#autoreleasepoolpagedata" aria-hidden="true">#</a> AutoreleasePoolPageData</h3>`,2),P={href:"https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/NSObject-internal.h#L133",target:"_blank",rel:"noopener noreferrer"},T=a(`<div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// NSObject-internal.h#L133</span>
<span class="token comment">// 自动释放池每页数据</span>
<span class="token keyword">struct</span> AutoreleasePoolPageData
<span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">SUPPORT_AUTORELEASEPOOL_DEDUP_PTRS</span></span>
    <span class="token keyword">struct</span> AutoreleasePoolEntry <span class="token punctuation">{</span>
        uintptr_t ptr<span class="token punctuation">:</span> <span class="token number">48</span><span class="token punctuation">;</span>
        uintptr_t count<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">;</span>

        <span class="token keyword">static</span> <span class="token keyword">const</span> uintptr_t maxCount <span class="token operator">=</span> <span class="token number">65535</span><span class="token punctuation">;</span> <span class="token comment">// 2^16 - 1</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">static_assert</span><span class="token punctuation">(</span><span class="token punctuation">(</span>AutoreleasePoolEntry<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">.</span>ptr <span class="token operator">=</span> OBJC_VM_MAX_ADDRESS <span class="token punctuation">}</span><span class="token punctuation">.</span>ptr <span class="token operator">==</span> OBJC_VM_MAX_ADDRESS<span class="token punctuation">,</span> <span class="token string">&quot;OBJC_VM_MAX_ADDRESS doesn&#39;t fit into AutoreleasePoolEntry::ptr!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

	magic_t <span class="token keyword">const</span> magic<span class="token punctuation">;</span>
	__unsafe_unretained id <span class="token operator">*</span>next<span class="token punctuation">;</span>          <span class="token comment">// 指向下一个数据</span>
	objc_thread_t <span class="token keyword">const</span> thread<span class="token punctuation">;</span>
	AutoreleasePoolPage <span class="token operator">*</span> <span class="token keyword">const</span> parent<span class="token punctuation">;</span>    <span class="token comment">// 上一页指针</span>
	AutoreleasePoolPage <span class="token operator">*</span>child<span class="token punctuation">;</span>            <span class="token comment">// 下一页指针</span>
	uint32_t <span class="token keyword">const</span> depth<span class="token punctuation">;</span>
	uint32_t hiwat<span class="token punctuation">;</span>

	<span class="token function">AutoreleasePoolPageData</span><span class="token punctuation">(</span>__unsafe_unretained id<span class="token operator">*</span> _next<span class="token punctuation">,</span> objc_thread_t _thread<span class="token punctuation">,</span> AutoreleasePoolPage<span class="token operator">*</span> _parent<span class="token punctuation">,</span> uint32_t _depth<span class="token punctuation">,</span> uint32_t _hiwat<span class="token punctuation">)</span>
		<span class="token punctuation">:</span> <span class="token function">magic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">next</span><span class="token punctuation">(</span>_next<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">thread</span><span class="token punctuation">(</span>_thread<span class="token punctuation">)</span><span class="token punctuation">,</span>
		  <span class="token function">parent</span><span class="token punctuation">(</span>_parent<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">child</span><span class="token punctuation">(</span>nil<span class="token punctuation">)</span><span class="token punctuation">,</span>
		  <span class="token function">depth</span><span class="token punctuation">(</span>_depth<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">hiwat</span><span class="token punctuation">(</span>_hiwat<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function S(A,N){const e=c("ExternalLinkIcon");return l(),i("div",null,[r,p(" more "),k,p(" ref "),d,n("blockquote",null,[n("p",null,[n("a",v,[s("👉🏻"),t(e)])])]),m,n("blockquote",null,[n("p",null,[n("a",b,[s("👉🏻"),t(e)])])]),h,n("blockquote",null,[n("p",null,[n("a",_,[s("👉🏻"),t(e)])])]),w,n("blockquote",null,[n("p",null,[n("a",f,[s("👉🏻"),t(e)])])]),g,p(" ref "),y,n("blockquote",null,[n("p",null,[n("a",j,[s("👉🏻"),t(e)])])]),O,n("blockquote",null,[n("p",null,[n("a",P,[s("👉🏻"),t(e)])])]),T])}const D=o(u,[["render",S],["__file","0x08.memory.html.vue"]]);export{D as default};
