import{_ as u}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as r,c as k,a as o,b as n,e as s,d as l,w as a,f as d}from"./app-wImInECU.js";const m={},v=d('<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h2>',3),b={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},w=n("blockquote",null,[n("p",null,"删除单链表的倒数第 N 个节点，并返回头结点。")],-1),f={class:"hint-container details"},h=n("summary",null,"💡",-1),y=n("p",null,"【思路1】遍历一次链表得到链表长度 len，第二次就能遍历到 len - n 的节点，进行删除操作即可。",-1),_=n("p",null,"【思路2】栈，先将所有链表节点入栈，出栈时进行计数，当到第 n 个元素时进行删除处理。",-1),x=n("p",null,"【思路3】快慢指针，快指针先走 n 步之后，快慢指针开始同时向前走，当快指针走到链表尾部，这慢指针刚好指向要删除的节点。",-1),N=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * public class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     ListNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     ListNode(int val, ListNode next) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; this.next = next; "),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"removeNthFromEnd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 创建虚头节点，解决删除后链表为空的特殊情况，减少判断逻辑"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        dummy`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" target "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// p 指针先走 n 步"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// p 指针和目标指针开始同时走"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            target `),n("span",{class:"token operator"},"="),s(" target"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// 删除目标节点后面节点"),s(`
        target`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" target"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"removeNthFromEnd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" head"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token omit keyword"},"_"),s(" n"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" p1"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token keyword"},"var"),s(" p2"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token operator"},"="),s(` dummy
        `),n("span",{class:"token keyword"},"var"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" p1"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            p1 `),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            count `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
            `),n("span",{class:"token keyword"},"guard"),s(" count "),n("span",{class:"token operator"},">="),s(" n "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
            p2 `),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
        `),n("span",{class:"token punctuation"},"}"),s(`
        p2`),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s(`next
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g={href:"https://leetcode.cn/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},j=n("blockquote",null,[n("p",null,"判断单链表是否有环？")],-1),I={class:"hint-container details"},A=n("summary",null,"💡",-1),C=n("p",null,"【技巧】使用快慢指针，fast 指针每次走两步，slow 指针每次走一步，如果两个指针相遇，则表明链表有环。如果没有相遇，fast 直接走到链表最后 nil 空指针，则表明链表没有环。",-1),S=n("p",null,"【原理】",-1),D=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode(int x) `),n("span",{class:"token punctuation"},"{"),s(`
 *         val = x;
 *         next = null;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"hasCycle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" slow "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 需要校验 fast.next 为空，非环行链表的情况下，表明已经是最后节点"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 快指针走两步，慢指针走一步"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"=="),s(" slow "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */`),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"hasCycle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" head"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"Bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" fast "),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token keyword"},"var"),s(" slow "),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token comment"},"// swift 可选类型，简化了 java 中的为空判断"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" fast"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            `),n("span",{class:"token keyword"},"guard"),s(" fast "),n("span",{class:"token operator"},"==="),s(" slow "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V={href:"https://leetcode.cn/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},q=n("blockquote",null,[n("p",null,"求环形链表入环位置的节点？")],-1),B={class:"hint-container details"},T=n("summary",null,"💡",-1),F=n("p",null,"【结论】相遇点 ~ 连接点 = 头指针 ~ 连接点",-1),P=n("p",null,"【思路】先使用快慢指针(快指针走两步，慢指针走一步)定位到相遇点；然后将慢指针重新指向头节点，快慢指针开始同时往前走(都走一步)，相遇点就是环的入口。",-1),z=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode(int x) `),n("span",{class:"token punctuation"},"{"),s(`
 *         val = x;
 *         next = null;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"detectCycle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 1> 快慢指针定位环的相遇点"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" slow "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"=="),s(" slow "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// 2> 校验确保环的存在"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" fast"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// 3> 慢指针指向头结点，快慢指针开始齐步走"),s(`
        slow `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"!="),s(" slow "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" slow"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */`),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"detectCycle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" head"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 先使用快慢指针，快指针走两步，慢指针走一步，定位到相遇点"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" fast "),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token keyword"},"var"),s(" slow "),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token keyword"},"while"),s(" fast"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            `),n("span",{class:"token keyword"},"guard"),s(" fast "),n("span",{class:"token operator"},"==="),s(" slow "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"break"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"guard"),s(" fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token nil constant"},"nil"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// 将慢指针移动到头结点，快慢指针都开始走一步，相遇点就是环的入口"),s(`
        slow `),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token keyword"},"while"),s(" fast "),n("span",{class:"token operator"},"!=="),s(" slow "),n("span",{class:"token punctuation"},"{"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` fast
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H={href:"https://leetcode.cn/problems/middle-of-the-linked-list/",target:"_blank",rel:"noopener noreferrer"},J=n("blockquote",null,[n("p",null,"给定一个单链表，返回链表的中间节点。")],-1),K={class:"hint-container details"},M=n("summary",null,"💡",-1),O=n("p",null,"【思路】使用快慢指针，快指针每次走两步，慢指针每次走一步。当快指针走完时",-1),Q=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * public class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     ListNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     ListNode(int val, ListNode next) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; this.next = next; "),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"middleNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" slow "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 需要校验 fast.next 为空，表明已经是最后一个节点"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// fast 未走到最后，fast 走两步，slow 走一步"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" slow"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"middleNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" head"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" p "),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token keyword"},"var"),s(" mid "),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token keyword"},"while"),s(" p"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// swift 的可选类型，简化了 p 指针边界条件的判断"),s(`
            p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            mid `),n("span",{class:"token operator"},"="),s(" mid"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` mid
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function U(W,X){const c=p("ExternalLinkIcon"),i=p("CodeTabs");return r(),k("div",null,[o(" more "),v,o(" 删除链表的倒数第 N 个结点 "),n("ul",null,[n("li",null,[n("a",b,[s("🟢 19 - 删除链表的倒数第 N 个结点"),l(c)]),w])]),n("details",f,[h,y,_,x,l(i,{id:"34",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[N]),tab1:a(({value:e,isActive:t})=>[L]),_:1})]),o(" 环形链表 "),n("ul",null,[n("li",null,[n("a",g,[s("🟢 141 - 环形链表"),l(c)]),j])]),n("details",I,[A,C,S,l(i,{id:"65",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[D]),tab1:a(({value:e,isActive:t})=>[E]),_:1})]),o(" 环形链表 II "),n("ul",null,[n("li",null,[n("a",V,[s("🟠 142 - 环形链表 II"),l(c)]),q])]),n("details",B,[T,F,P,l(i,{id:"96",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[z]),tab1:a(({value:e,isActive:t})=>[G]),_:1})]),o(" 链表的中间结点 "),n("ul",null,[n("li",null,[n("a",H,[s("🟢 876 链表的中间节点"),l(c)]),J])]),n("details",K,[M,O,l(i,{id:"135",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[Q]),tab1:a(({value:e,isActive:t})=>[R]),_:1})])])}const $=u(m,[["render",U],["__file","two-pointer.html.vue"]]);export{$ as default};
