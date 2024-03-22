import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c,a as p,b as n,e as s,d as i,f as l}from"./app-dpqdmZgS.js";const u={},d=n("blockquote",null,[n("p",null,[n("code",null,"Associated Object"),s(" - “关联对象”")])],-1),k=n("h2",{id:"associatedobject",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#associatedobject","aria-hidden":"true"},"#"),s(" AssociatedObject")],-1),r={href:"https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime.mm#L705",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// objc-runtime.mm#L705</span>
<span class="token comment">// 获取关联对象</span>
id <span class="token function">objc_getAssociatedObject</span><span class="token punctuation">(</span>id object<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>key<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">_object_get_associative_reference</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 设置关联对象</span>
<span class="token keyword">void</span> <span class="token function">objc_setAssociatedObject</span><span class="token punctuation">(</span>id object<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>key<span class="token punctuation">,</span> id value<span class="token punctuation">,</span> objc_AssociationPolicy policy<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">_object_set_associative_reference</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> policy<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 移除关联对象</span>
<span class="token keyword">void</span> <span class="token function">objc_removeAssociatedObjects</span><span class="token punctuation">(</span>id object<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>object <span class="token operator">&amp;&amp;</span> object<span class="token operator">-&gt;</span><span class="token function">hasAssociatedObjects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">_object_remove_associations</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> <span class="token comment">/*deallocating*/</span>false<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token keyword">@interface</span> <span class="token function">NSObject</span> <span class="token punctuation">(</span>Extension<span class="token punctuation">)</span>
<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> copy<span class="token punctuation">)</span> NSString <span class="token operator">*</span>name<span class="token punctuation">;</span>
<span class="token keyword">@end</span>
<span class="token keyword">@implementation</span> <span class="token function">NSObject</span> <span class="token punctuation">(</span>Extension<span class="token punctuation">)</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>setName<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name <span class="token punctuation">{</span>   
    <span class="token function">objc_setAssociatedObject</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> <span class="token keyword">@selector</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> OBJC_ASSOCIATION_COPY_NONATOMIC<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name <span class="token punctuation">{</span>   
    <span class="token keyword">return</span> <span class="token function">objc_getAssociatedObject</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> <span class="token keyword">@selector</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(v,_){const a=e("ExternalLinkIcon");return o(),c("div",null,[d,p(" more "),k,n("blockquote",null,[n("p",null,[n("a",r,[s("👉🏻"),i(a)])])]),b])}const y=t(u,[["render",m],["__file","0x07.associated-object.html.vue"]]);export{y as default};