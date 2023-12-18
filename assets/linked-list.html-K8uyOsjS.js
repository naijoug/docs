import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as r,c as i,a,b as e,e as l,d as n}from"./app-_KbMDiSB.js";const c={},d=e("h2",{id:"reverse-linked-list-反转链表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reverse-linked-list-反转链表","aria-hidden":"true"},"#"),l(),e("code",null,"Reverse Linked List"),l(" - “反转链表”")],-1),u={href:"https://leetcode.cn/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},_=e("blockquote",null,[e("p",null,"通过单链表的头结点 head 进行反转链表，返回反转后的链表。")],-1),h=e("details",{class:"hint-container details"},[e("summary",null,"💡"),e("p",null,"【思路】")],-1),p={href:"https://leetcode.cn/problems/reverse-linked-list-ii/",target:"_blank",rel:"noopener noreferrer"},f=e("blockquote",null,[e("p",null,"通过单链表的头结点 head 和两个整数 left 和 right (left <= right)，反转链表从 left 到 right 位置的链表节点，返回反转后的链表。")],-1),k=e("details",{class:"hint-container details"},[e("summary",null,"💡"),e("blockquote",null,[e("p",null,"如果使用迭代，上面两个题应该怎么处理？")])],-1),m=e("h2",{id:"linked-list-cycle-环形链表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linked-list-cycle-环形链表","aria-hidden":"true"},"#"),l(),e("code",null,"Linked List Cycle"),l(" - “环形链表”")],-1),b=e("p",null,"环形链表 : 表示链表存在首位连接的情况，形成一个环状结构。",-1),y={href:"https://leetcode.cn/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},v=e("blockquote",null,[e("p",null,"判断单链表是否有环？")],-1),x=e("details",{class:"hint-container details"},[e("summary",null,"💡"),e("p",null,"【技巧】使用快慢指针，fast 指针每次走两步，slow 指针每次走一步，如果两个指针相遇，则表明链表有环。如果没有相遇，fast 直接走到链表最后 nil 空指针，则表明链表没有环。"),e("p",null,"【原理】")],-1),g={href:"https://leetcode.cn/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},L=e("blockquote",null,[e("p",null,"求环形链表入环位置的节点？")],-1),q=e("details",{class:"hint-container details"},[e("summary",null,"💡"),e("p",null,"【结论】相遇点 ~ 连接点 = 头指针 ~ 连接点"),e("p",null,"数学公式推导"),e("blockquote",null,[e("p",null,"求环形链表的环长？")]),e("p",null,"【思路1】slow 指针视角，记录第一次相遇点位置，之后使用计数器记录步长，当 slow 指针再次走到该位置时，则计数器步长就是环长。"),e("p",null,"【思路2】fast 指针视角，由于 fast 刚好比 slow 指针多走一倍，所以当两个指针再次相遇时，则 fast 刚好走了环长的两倍。")],-1);function I(w,N){const t=o("ExternalLinkIcon");return r(),i("div",null,[a(" more "),d,e("ul",null,[e("li",null,[e("a",u,[l("🟢 206 - 反转链表"),n(t)]),_])]),h,e("ul",null,[e("li",null,[e("a",p,[l("🟠 92 - 反转链表 II"),n(t)]),f])]),k,m,b,e("ul",null,[e("li",null,[e("a",y,[l("🟢 141 - 环形链表"),n(t)]),v])]),x,e("ul",null,[e("li",null,[e("a",g,[l("🟠 142 - 环形链表 II"),n(t)]),L])]),q])}const C=s(c,[["render",I],["__file","linked-list.html.vue"]]);export{C as default};