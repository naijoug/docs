import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as c,c as l,a as i,b as e,e as o,d as r,f as s}from"./app-86YT7tYj.js";const h={},d=s('<h2 id="缓存淘汰策略" tabindex="-1"><a class="header-anchor" href="#缓存淘汰策略" aria-hidden="true">#</a> 缓存淘汰策略</h2><ul><li><p><code>FIFO</code>(First In First Out) : 先进先出策略，队列逻辑。新进入缓存的，缓存满时先移除。</p><blockquote><p>数据结构 : 队列 实现逻辑 :</p><ul><li>添加数据时 * 缓存未满时，直接加入队列尾部 * 缓存已满时，将队列头部数据出队列移除，在队列尾部加入数据</li><li>移除数据时，遍历队列，从队列中移除指定数据</li></ul></blockquote></li><li><p><code>LRU</code>(Least Recently Used) : 最近最少使用策略。最早访问点数据，缓存满时先移除。</p><blockquote><p>数据结构 : 链表 (+ 哈希表) 实现逻辑 : 链表头部为最近使用数据，链表尾部为最近最少使用数据</p><ul><li>添加数据时 * 先遍历缓存判断数据是否已在缓存中，如果已在缓存中，将该节点数据交换到链表头部。 * 如果不在缓存中。如果缓存已满，则将缓存尾部数据移除。最后将新添加数据添加到链表头部。</li><li>移除数据时，遍历链表，从链表中移除指定元素</li><li>查询数据时 * 遍历遍历，查询指定缓存元素。时间复杂度为 <code>O(n)</code> * 缓存查询优化方案：为了提高缓存效率，则可以使用哈希表，将链表中的每个节点地址保存在哈希表中。这样查询元素时，可以将查询数据时间复杂度优化到 <code>O(1)</code>。</li></ul></blockquote></li><li><p><code>LFU</code>(Least Frequently Used) : 最少使用策略。使用频率越少的数据，缓存满时先移除。</p></li></ul><h2 id="ios-中的-nscache" tabindex="-1"><a class="header-anchor" href="#ios-中的-nscache" aria-hidden="true">#</a> iOS 中的 <code>NSCache</code></h2>',3),u={href:"https://github.com/apple/swift-corelibs-foundation/blob/main/Sources/Foundation/NSCache.swift",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"实现原理：链表 + 哈希表",-1),p=e("h2",{id:"如何设计一个高效、线程安全的缓存",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何设计一个高效、线程安全的缓存","aria-hidden":"true"},"#"),o(" 如何设计一个高效、线程安全的缓存?")],-1),f=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),o(" reference")],-1),b={href:"https://xesam.github.io/cache-1",target:"_blank",rel:"noopener noreferrer"},m={href:"https://tech.meituan.com/2017/03/17/cache-about.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://coolshell.cn/articles/17416.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://blog.ibireme.com/2015/10/26/yycache",target:"_blank",rel:"noopener noreferrer"};function g(N,F){const t=n("ExternalLinkIcon");return c(),l("div",null,[i(" more "),d,e("ul",null,[e("li",null,[e("a",u,[o("NSCache"),r(t)])])]),_,p,f,e("ul",null,[e("li",null,[e("a",b,[o("2017-03-17 缓存设计"),r(t)])]),e("li",null,[e("a",m,[o("2017-03-17 缓存那些事"),r(t)])]),e("li",null,[e("a",k,[o("2016-07-27 缓存更新的套路"),r(t)])]),e("li",null,[e("a",x,[o("2015-10-26 YYCache 设计思路"),r(t)])])])])}const S=a(h,[["render",g],["__file","cache.html.vue"]]);export{S as default};
