import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,a as c,b as n,e as s,d as l,f as i}from"./app-dFL66umn.js";const u={},r=n("h2",{id:"_0680",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0680","aria-hidden":"true"},"#"),s(" 0680")],-1),k=n("p",null,"// #region 0680",-1),d={href:"https://leetcode.cn/problems/valid-palindrome-ii",target:"_blank",rel:"noopener noreferrer"},m=n("blockquote",null,[n("p",null,"给定一个字符串，判断改字符(在最多可以删除一个字符的情况下)是否可以成为回文串。")],-1),v=i(`<details class="hint-container details"><summary>💡</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">validPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span> left <span class="token operator">&lt;</span> right <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">!=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 当遇到不匹配时，分别跳过左边字符和右边字符对剩下范围的字符串继续判断是否为回文串</span>
                <span class="token keyword">return</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            left <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            right <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断一个字符串在指定左右索引范围字符是否为回文串</span>
    <span class="token keyword">boolean</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span> left <span class="token operator">&lt;</span> right <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">!=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            left <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            right <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>// #endregion 0680</p>`,2);function b(f,h){const a=e("ExternalLinkIcon");return p(),o("div",null,[c(" more "),r,k,n("ul",null,[n("li",null,[n("a",d,[s("🟢 680 - 验证回文串 II"),l(a)]),m])]),v])}const w=t(u,[["render",b],["__file","0x0600.html.vue"]]);export{w as default};
