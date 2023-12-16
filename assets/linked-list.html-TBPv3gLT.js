import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as r,c as a,a as c,b as e,e as l,d as s,f as n}from"./app-1T2PYfcf.js";const d={},u=e("h2",{id:"reverse-linked-list-反转链表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reverse-linked-list-反转链表","aria-hidden":"true"},"#"),l(),e("code",null,"Reverse Linked List"),l(" - “反转链表”")],-1),h={href:"https://leetcode.cn/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},_=e("blockquote",null,[e("p",null,"通过单链表的头结点 head 进行反转链表，返回反转后的链表。")],-1),p=e("details",{class:"hint-container details"},[e("summary",null,"💡"),e("p",null,"【思路】")],-1),m={href:"https://leetcode.cn/problems/reverse-linked-list-ii/",target:"_blank",rel:"noopener noreferrer"},k=e("blockquote",null,[e("p",null,"通过单链表的头结点 head 和两个整数 left 和 right (left <= right)，反转链表从 left 到 right 位置的链表节点，返回反转后的链表。")],-1),f=n('<details class="hint-container details"><summary>💡</summary></details><ul><li>再进阶版 <blockquote><p>如果使用迭代，上面两个题应该怎么处理？</p></blockquote></li></ul><details class="hint-container details"><summary>💡</summary></details><h2 id="linked-list-cycle-环形链表" tabindex="-1"><a class="header-anchor" href="#linked-list-cycle-环形链表" aria-hidden="true">#</a> <code>Linked List Cycle</code> - “环形链表”</h2><p>环形链表 : 表示链表存在首位连接的情况，形成一个环状结构。</p>',5),b={href:"https://leetcode.cn/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},y=e("blockquote",null,[e("p",null,"判断单链表是否有环？")],-1),L=e("details",{class:"hint-container details"},[e("summary",null,"💡"),e("p",null,"【技巧】使用快慢指针，fast 指针每次走两步，slow 指针每次走一步，如果两个指针相遇，则表明链表有环。如果没有相遇，fast 直接走到链表最后 nil 空指针，则表明链表没有环。"),e("p",null,"【原理】")],-1),q={href:"https://leetcode.cn/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},v=e("blockquote",null,[e("p",null,"求环形链表入环位置的节点？")],-1),x=n('<details class="hint-container details"><summary>💡</summary><p>【结论】相遇点 ~ 连接点 = 头指针 ~ 连接点</p><p>数学公式推导</p></details><ul><li>延伸版 <blockquote><p>求环形链表的环长？</p></blockquote></li></ul><details class="hint-container details"><summary>💡</summary><p>【思路1】slow 指针视角，记录第一次相遇点位置，之后使用计数器记录步长，当 slow 指针再次走到该位置时，则计数器步长就是环长。</p><p>【思路2】fast 指针视角，由于 fast 刚好比 slow 指针多走一倍，所以当两个指针再次相遇时，则 fast 刚好走了环长的两倍。</p></details>',3);function g(C,N){const t=i("ExternalLinkIcon");return r(),a("div",null,[c(" more "),u,e("ul",null,[e("li",null,[e("a",h,[l("LeetCode 206"),s(t)]),_])]),p,e("ul",null,[e("li",null,[l("进阶版 "),e("a",m,[l("LeetCode 92"),s(t)]),k])]),f,e("ul",null,[e("li",null,[e("a",b,[l("LeetCode 141"),s(t)]),y])]),L,e("ul",null,[e("li",null,[l("进阶版 "),e("a",q,[l("LeetCode 142"),s(t)]),v])]),x])}const B=o(d,[["render",g],["__file","linked-list.html.vue"]]);export{B as default};