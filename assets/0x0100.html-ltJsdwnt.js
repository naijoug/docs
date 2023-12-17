import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as p,c as i,a as c,b as n,e as s,d as e,f as t}from"./app-SDsRO-JA.js";const r={},u=n("h2",{id:"_0104",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0104","aria-hidden":"true"},"#"),s(" 0104")],-1),d=n("p",null,"// #region 0104",-1),k={href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},h=n("blockquote",null,[n("p",null,"给定一个二叉树根节点，返回该二叉树的最大深度。")],-1),_=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),m=n("p",null,"// #endregion 0104",-1),b=n("h2",{id:"_0111",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0111","aria-hidden":"true"},"#"),s(" 0111")],-1),v=n("p",null,"// #region 0111",-1),f={href:"https://leetcode.cn/problems/minimum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},g=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),y=n("p",null,"// #endregion 0111",-1),w=n("h2",{id:"_0121",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0121","aria-hidden":"true"},"#"),s(" 0121")],-1),x=n("p",null,"// #region 0121",-1),I={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},q=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),O=n("p",null,"// #endregion 0121",-1),C=n("h2",{id:"_0122",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0122","aria-hidden":"true"},"#"),s(" 0122")],-1),L=n("p",null,"// #region 0122",-1),j={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},N=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),V=n("p",null,"// #endregion 0122",-1),A=n("h2",{id:"_0123",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0123","aria-hidden":"true"},"#"),s(" 0123")],-1),S=n("p",null,"// #region 0123",-1),B={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"},D=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),E=n("p",null,"// #endregion 0123",-1),P=n("h2",{id:"_0125",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0125","aria-hidden":"true"},"#"),s(" 0125")],-1),R=n("p",null,"// #region 0125",-1),T={href:"https://leetcode.cn/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},U=n("blockquote",null,[n("p",null,"判断字符串中的字母(大小不敏感，大写字母与小字可以看作相等)和数字是否为回文串，字符中的的其它字符不参与回文串校验。")],-1),z=t(`<details class="hint-container details"><summary>💡</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span> left <span class="token operator">&lt;</span> right <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 寻找左边第一个字母或数字</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span> left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isLetterOrDigit</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 寻找右边第一个字母或数字</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span> left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isLetterOrDigit</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> left <span class="token operator">&gt;=</span> right <span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token comment">// 左右指针，判断字符是否相等</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 不相等，则表明不是回文串</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">// 相等，跳转到下一个字符进行匹配</span>
        left <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        right <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>// #endregion 0125</p><h2 id="_0136" tabindex="-1"><a class="header-anchor" href="#_0136" aria-hidden="true">#</a> 0136</h2><p>// #region 0136</p>`,4),F={href:"https://leetcode.cn/problems/single-number/",target:"_blank",rel:"noopener noreferrer"},G=n("blockquote",null,[n("p",null,"一个非空的整数数组，除了某个元素只出现一次外，其余元素均出现两次。找出只出现一次的数字")],-1),H=n("details",{class:"hint-container details"},[n("summary",null,"💡"),n("p",null,[s("【思路】 由于存在相同的元素均出现两次，刚好可以使用 "),n("code",null,"x ^ x = 0"),s(" 的特性。将所有数字进行异或操作，则相同的数字异或结果为 0，只出现一次的数与 0 进行异或结果就是只出现一次的数。 时间复杂度: O(n) 空间复杂度: O(1)")])],-1),J=n("p",null,"// #endregion 0136",-1),K=n("h2",{id:"_0137",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0137","aria-hidden":"true"},"#"),s(" 0137")],-1),M=n("p",null,"// #region 0137",-1),Q={href:"https://leetcode.cn/problems/single-number-ii",target:"_blank",rel:"noopener noreferrer"},W=n("blockquote",null,[n("p",null,"一个非空的整数数组中，除了某个元素只出现一次外，其余元素均出现三次。找出只出现一次的数字 时间复杂度: O(n) 空间复杂度: O(1)")],-1),X=n("details",{class:"hint-container details"},[n("summary",null,"💡"),n("p",null,[s("【思路】 这道题是 136 的变形版本，不能使用 "),n("code",null,"x ^ x = 0"),s(" 特性。但是但是还是可以使用位运算的特性进行求解。")])],-1),Y=n("p",null,"// #endregion 0137",-1),Z=n("h2",{id:"_0141",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0141","aria-hidden":"true"},"#"),s(" 0141")],-1),$=n("p",null,"// #region 0141",-1),nn={href:"https://leetcode.cn/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},sn=n("blockquote",null,[n("p",null,"判断单链表是否有环？")],-1),an=n("details",{class:"hint-container details"},[n("summary",null,"💡"),n("p",null,"【技巧】使用快慢指针，fast 指针每次走两步，slow 指针每次走一步，如果两个指针相遇，则表明链表有环。如果没有相遇，fast 直接走到链表最后 nil 空指针，则表明链表没有环。"),n("p",null,"【原理】")],-1),en=n("p",null,"// #endregion 0141",-1),tn=n("h2",{id:"_0142",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0142","aria-hidden":"true"},"#"),s(" 0142")],-1),on=n("p",null,"// #region 0142",-1),ln={href:"https://leetcode.cn/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},pn=n("blockquote",null,[n("p",null,"求环形链表入环位置的节点？")],-1),cn=t('<details class="hint-container details"><summary>💡</summary><p>【结论】相遇点 ~ 连接点 = 头指针 ~ 连接点</p><p>数学公式推导</p><blockquote><p>求环形链表的环长？</p></blockquote><p>【思路1】slow 指针视角，记录第一次相遇点位置，之后使用计数器记录步长，当 slow 指针再次走到该位置时，则计数器步长就是环长。</p><p>【思路2】fast 指针视角，由于 fast 刚好比 slow 指针多走一倍，所以当两个指针再次相遇时，则 fast 刚好走了环长的两倍。</p></details><p>// #endregion 0142</p><h2 id="_0144" tabindex="-1"><a class="header-anchor" href="#_0144" aria-hidden="true">#</a> 0144</h2><p>// #region 0144</p>',4),rn={href:"https://leetcode.cn/problems/binary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},un=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),dn=n("p",null,"// #endregion 0144",-1),kn=n("h2",{id:"_0146",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0146","aria-hidden":"true"},"#"),s(" 0146")],-1),hn=n("p",null,"// #region 0146",-1),_n={href:"https://leetcode.cn/problems/lru-cache",target:"_blank",rel:"noopener noreferrer"},mn=n("blockquote",null,[n("p",null,[n("code",null,"get"),s(),n("code",null,"put"),s(" 操作需要 O(1) 的平均时间复杂度")])],-1),bn=t('<details class="hint-container details"><summary>💡</summary><p>【思路】: 哈希表 + 双向链表</p><ul><li>首先解决数据的缓存问题。由于需要 O(1) 的时间复杂度，所以应该很自然的想到了使用哈希表来保存数据。这样保存和查询都可以做到 O(1) 的时间复杂度。</li><li>再来解决最近最少使用的问题。这需要使用双向链表的结构来保存数据，链表头部为最少使用的数据，链表尾部为最近使用的数据。 <ul><li>查询数据时，这个查询过的数据为最近使用，也就是需要移除就之前链表中的这个数据，将这个数据重新加入到链表尾部。</li><li>添加数据时，如果这个 key 已存在，则移除旧数据，将新数据加入链表尾部；如果 key 不存在，需要判断缓存是否已满，如果已满则移除链表头部最少使用数据，添加新数据到链表尾部，如果未满则直接添加新数据到链表尾部。</li></ul></li></ul></details><p>// #endregion 0146</p><h2 id="_0151" tabindex="-1"><a class="header-anchor" href="#_0151" aria-hidden="true">#</a> 0151</h2><p>// #region 0151</p>',4),vn={href:"https://leetcode.cn/problems/reverse-words-in-a-string",target:"_blank",rel:"noopener noreferrer"},fn=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),gn=n("p",null,"// #endregion 0151",-1),yn=n("h2",{id:"_0160",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0160","aria-hidden":"true"},"#"),s(" 0160")],-1),wn=n("p",null,"// #region 0160",-1),xn={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists",target:"_blank",rel:"noopener noreferrer"},In=n("blockquote",null,[n("p",null,"求两个相交链表的相交起始节点？")],-1),qn=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),On=n("p",null,"// #endregion 0160",-1),Cn=n("h2",{id:"_0167",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0167","aria-hidden":"true"},"#"),s(" 0167")],-1),Ln=n("p",null,"// #region 0167",-1),jn={href:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},Nn=n("blockquote",null,[n("p",null,"给定目标值，在有序数组中查找两个索引对应的值相加等于目标值。")],-1),Vn=t(`<details class="hint-container details"><summary>💡</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span> left <span class="token operator">&lt;</span> right <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> sum <span class="token operator">=</span> numbers<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> numbers<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span> sum <span class="token operator">==</span> target <span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> sum <span class="token operator">&lt;</span> target <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 小于目标值，调整左边</span>
                left <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// sum &gt; target</span>
                <span class="token comment">// 大于目标值，调整右边</span>
                right <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>// #endregion 0167</p><h2 id="_0187" tabindex="-1"><a class="header-anchor" href="#_0187" aria-hidden="true">#</a> 0187</h2><p>// #region 0187</p>`,4),An={href:"https://leetcode.cn/problems/repeated-dna-sequences",target:"_blank",rel:"noopener noreferrer"},Sn=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),Bn=n("p",null,"// #endregion 0187",-1),Dn=n("h2",{id:"_0188",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0188","aria-hidden":"true"},"#"),s(" 0188")],-1),En=n("p",null,"// #region 0188",-1),Pn={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv",target:"_blank",rel:"noopener noreferrer"},Rn=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),Tn=n("p",null,"// #endregion 0188",-1),Un=n("h2",{id:"_0189",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0189","aria-hidden":"true"},"#"),s(" 0189")],-1),zn=n("p",null,"// #region 0189",-1),Fn={href:"https://leetcode.cn/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},Gn=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),Hn=n("p",null,"// #endregion 0189",-1);function Jn(Kn,Mn){const a=l("ExternalLinkIcon");return p(),i("div",null,[c(" more "),u,d,n("ul",null,[n("li",null,[n("a",k,[s("🟢 104 - 二叉树的最大深度"),e(a)]),h])]),_,m,b,v,n("ul",null,[n("li",null,[n("a",f,[s("🟢 111 - 二叉树的最小深度"),e(a)])])]),g,y,w,x,n("ul",null,[n("li",null,[n("a",I,[s("🟢 121 - 买卖股票的最佳时机"),e(a)])])]),q,O,C,L,n("ul",null,[n("li",null,[n("a",j,[s("🟠 122 - 买卖股票的最佳时机 II"),e(a)])])]),N,V,A,S,n("ul",null,[n("li",null,[n("a",B,[s("🔴 123 - 买卖股票的最佳时机 III"),e(a)])])]),D,E,P,R,n("ul",null,[n("li",null,[n("a",T,[s("🟢 125 - 验证回文串"),e(a)]),U])]),z,n("ul",null,[n("li",null,[n("a",F,[s("🟢 136 - 只出现一次的数字"),e(a)]),G])]),H,J,K,M,n("ul",null,[n("li",null,[n("a",Q,[s("🟠 137 - 只出现一次的数字 II"),e(a)]),W])]),X,Y,Z,$,n("ul",null,[n("li",null,[n("a",nn,[s("🟢 141 - 环形链表"),e(a)]),sn])]),an,en,tn,on,n("ul",null,[n("li",null,[n("a",ln,[s("🟠 142 - 环形链表 II"),e(a)]),pn])]),cn,n("ul",null,[n("li",null,[n("a",rn,[s("🟢 144 - 二叉树的前序遍历"),e(a)])])]),un,dn,kn,hn,n("ul",null,[n("li",null,[n("a",_n,[s("🟠 146 - LRU 缓存"),e(a)]),mn])]),bn,n("ul",null,[n("li",null,[n("a",vn,[s("🟠 151 - 反转字符串中的单词"),e(a)])])]),fn,gn,yn,wn,n("ul",null,[n("li",null,[n("a",xn,[s("🟢 160 - 相交链表"),e(a)]),In])]),qn,On,Cn,Ln,n("ul",null,[n("li",null,[n("a",jn,[s("🟠 167 - 两数之和 II - 输入有序数组"),e(a)]),Nn])]),Vn,n("ul",null,[n("li",null,[n("a",An,[s("🟠 187 - 重复的DNA序列"),e(a)])])]),Sn,Bn,Dn,En,n("ul",null,[n("li",null,[n("a",Pn,[s("🔴 188 - 买卖股票的最佳时机 IV"),e(a)])])]),Rn,Tn,Un,zn,n("ul",null,[n("li",null,[n("a",Fn,[s("🟠 189 - 打家劫舍"),e(a)])])]),Gn,Hn])}const Xn=o(r,[["render",Jn],["__file","0x0100.html.vue"]]);export{Xn as default};
