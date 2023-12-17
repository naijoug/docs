import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as r,a as s,b as e,e as l,d as t,f as u}from"./app-SDsRO-JA.js";const i={},d=e("h2",{id:"lru-cache-最近最少使用缓存",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lru-cache-最近最少使用缓存","aria-hidden":"true"},"#"),l(),e("code",null,"LRU Cache"),l(" - “最近最少使用缓存”")],-1),h={href:"https://leetcode.cn/problems/lru-cache",target:"_blank",rel:"noopener noreferrer"},_=e("blockquote",null,[e("p",null,[e("code",null,"get"),l(),e("code",null,"put"),l(" 操作需要 O(1) 的平均时间复杂度")])],-1),m=u('<details class="hint-container details"><summary>💡</summary><p>【思路】: 哈希表 + 双向链表</p><ul><li>首先解决数据的缓存问题。由于需要 O(1) 的时间复杂度，所以应该很自然的想到了使用哈希表来保存数据。这样保存和查询都可以做到 O(1) 的时间复杂度。</li><li>再来解决最近最少使用的问题。这需要使用双向链表的结构来保存数据，链表头部为最少使用的数据，链表尾部为最近使用的数据。 <ul><li>查询数据时，这个查询过的数据为最近使用，也就是需要移除就之前链表中的这个数据，将这个数据重新加入到链表尾部。</li><li>添加数据时，如果这个 key 已存在，则移除旧数据，将新数据加入链表尾部；如果 key 不存在，需要判断缓存是否已满，如果已满则移除链表头部最少使用数据，添加新数据到链表尾部，如果未满则直接添加新数据到链表尾部。</li></ul></li></ul></details><h2 id="lfu-cache-最不经常使用缓存" tabindex="-1"><a class="header-anchor" href="#lfu-cache-最不经常使用缓存" aria-hidden="true">#</a> <code>LFU Cache</code> - “最不经常使用缓存”</h2>',2),p={href:"https://leetcode.cn/problems/lfu-cache",target:"_blank",rel:"noopener noreferrer"},f=e("blockquote",null,[e("p",null,[e("code",null,"get"),l(),e("code",null,"put"),l(" 操作需要 O(1) 的时间复杂度")])],-1),b=e("details",{class:"hint-container details"},[e("summary",null,"💡"),e("p",null,"【思路】: 双哈希表"),e("ul",null,[e("li",null,[l("数据缓存的问题。同 "),e("code",null,"LRU"),l(" 一样需要哈希表来保证数据存取的 O(1) 的时间复杂度。")]),e("li",null,"最不经常时间的问题。这个需要为没有数据加上一个 frequency 使用频率计数值来进行标记。关键点在于需要 O(1) 时间复杂度，那么使用")])],-1);function k(x,L){const n=o("ExternalLinkIcon");return c(),r("div",null,[s(" more "),d,e("ul",null,[e("li",null,[e("a",h,[l("🟠 146 - LRU 缓存"),t(n)]),_])]),m,e("ul",null,[e("li",null,[e("a",p,[l("🔴 460 - LFU 缓存"),t(n)]),f])]),b])}const N=a(i,[["render",k],["__file","hash-table.html.vue"]]);export{N as default};
