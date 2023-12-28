import{_ as u}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as r,c as k,a as c,b as n,e as s,d as l,w as a}from"./app--gyPjc9T.js";const d={},m=n("blockquote",null,[n("p",null,"链表是将一堆零散的内存空间串联起来的数据结构，不需要内存空间连续。链表的数据结构，除了存储数据外，还需存储指向下一个节点的指针。")],-1),v=n("ul",null,[n("li",null,"单链表"),n("li",null,"双向链表"),n("li",null,"循环链表")],-1),b=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),w={href:"https://visualgo.net/zh/list/print",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"curd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#curd","aria-hidden":"true"},"#"),s(),n("code",null,"CURD")],-1),f={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},y=n("blockquote",null,[n("p",null,"删除单链表的倒数第 N 个节点，并返回头结点。")],-1),_={class:"hint-container details"},x=n("summary",null,"💡",-1),N=n("p",null,"【思路1】遍历一次链表得到链表长度 len，第二次就能遍历到 len - n 的节点，进行删除操作即可。",-1),L=n("p",null,"【思路2】栈，先将所有链表节点入栈，出栈时进行计数，当到第 n 个元素时进行删除处理。",-1),g=n("p",null,"【思路3】快慢指针，快指针先走 n 步之后，快慢指针开始同时向前走，当快指针走到链表尾部，这慢指针刚好指向要删除的节点。",-1),j=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I={href:"https://leetcode.cn/problems/middle-of-the-linked-list/",target:"_blank",rel:"noopener noreferrer"},S=n("blockquote",null,[n("p",null,"给定一个单链表，返回链表的中间节点。")],-1),D={class:"hint-container details"},q=n("summary",null,"💡",-1),B=n("p",null,"【思路】使用快慢指针，快指针每次走两步，慢指针每次走一步。当快指针走完时",-1),C=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("h2",{id:"merge-合并",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#merge-合并","aria-hidden":"true"},"#"),s(),n("code",null,"merge"),s(" - “合并”")],-1),E={href:"https://leetcode.cn/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},K=n("blockquote",null,[n("p",null,"合并两个有序的链表。")],-1),V={class:"hint-container details"},F=n("summary",null,"💡",-1),O=n("p",null,"【思路】创建一个结果链表头，并用一个指针指向这个结果链表用于指向添加位置。然后分别使用两个指针指向两个链表，每次比较比较链表中的值，将较小的链表中的节点添加到结果链表中。直到其中一个链表中已为空，最后将剩下不为空的链表全部添加到结果链表中。",-1),z=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" list1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"ListNode"),s(" list2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 头结点：指向结果链表头部"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p1 "),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p2 "),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" p1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" p2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 比较两个链表中值小的添加到结果链表中"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" p1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<="),s(" p2"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                p`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token punctuation"},";"),s(`
                p1 `),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                p`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token punctuation"},";"),s(`
                p2 `),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// 将不为空的链表添加到结果链表尾部"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" p1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            p`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" p2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            p`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" l1"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token omit keyword"},"_"),s(" l2"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" l1 "),n("span",{class:"token operator"},"="),s(" l1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"let"),s(" l2 "),n("span",{class:"token operator"},"="),s(" l2 "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" l1 "),n("span",{class:"token operator"},"??"),s(` l2
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" p"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token keyword"},"var"),s(" op1"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token operator"},"="),s(` l1
        `),n("span",{class:"token keyword"},"var"),s(" op2"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token operator"},"="),s(` l2
        `),n("span",{class:"token comment"},"// 遍历两个链表，并将较小值节点添加到结果链表"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token keyword"},"let"),s(" p1 "),n("span",{class:"token operator"},"="),s(" op1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"let"),s(" p2 "),n("span",{class:"token operator"},"="),s(" op2 "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" p1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<="),s(" p2"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token punctuation"},"{"),s(`
                p`),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` p1
                op1 `),n("span",{class:"token operator"},"="),s(" op1"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                p`),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` p2
                op2 `),n("span",{class:"token operator"},"="),s(" op2"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            `),n("span",{class:"token punctuation"},"}"),s(`
            p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// 将不为空的链表添加到结果链表后面"),s(`
        p`),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" op1 "),n("span",{class:"token operator"},"??"),s(` op2
        `),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},"."),s(`next
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U={href:"https://leetcode.cn/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},G=n("blockquote",null,[n("p",null,"给定一个升序链表数组，合并得到一个升序链表，并返回头结点。")],-1),J={class:"hint-container details"},M=n("summary",null,"💡",-1),P=n("p",null,"【思路1】合并两个升序链表比较容易解决。合并多个链表，可以先两个两个合并，最后就合并成一个了。",-1),Q=n("p",null,"【思路2】分治思想，类似归并排序，两两合并，最后合并成为结果链表。",-1),W=n("p",null,"【思路3】优先级队列，每次将 K 个链表的头结点放入优先级队列中，那么可以每次从优先级队列中取出最小值节点放入结果链表，然后再将该节点的下一个节点放入优先级队列，直到合并完成。",-1),X=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"mergeKLists"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" lists"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" lists"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" lists"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(" lists"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// 遍历链表数组，每次取出一个链表，进行两条链表合并"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" l1 "),n("span",{class:"token operator"},"="),s(" lists"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" lists"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"ListNode"),s(" l2 "),n("span",{class:"token operator"},"="),s(" lists"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            l1 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("l1"),n("span",{class:"token punctuation"},","),s(" l2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" l1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// 合并两个升序链表"),s(`
    `),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" l1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"ListNode"),s(" l2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p1 "),n("span",{class:"token operator"},"="),s(" l1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p2 "),n("span",{class:"token operator"},"="),s(" l2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" p1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" p2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" p1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<="),s(" p2"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                p`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token punctuation"},";"),s(`
                p1 `),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                p`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token punctuation"},";"),s(`
                p2 `),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" p1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            p`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" p2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            p`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("h2",{id:"partition-分割",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#partition-分割","aria-hidden":"true"},"#"),s(),n("code",null,"partition"),s(" - “分割”")],-1),Z={href:"https://leetcode.cn/problems/partition-list",target:"_blank",rel:"noopener noreferrer"},$=n("blockquote",null,[n("p",null,"根据给定值将链表元素分割为小于和大于等于该值的两部分。并保持节点元素相对位置。")],-1),nn={class:"hint-container details"},sn=n("summary",null,"💡",-1),an=n("p",null,"【思路】将原链表按照值大小分隔成两条链表，最后合并成结果链表。",-1),en=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"partition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" l1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 小于 x 链表"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" l2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 大于 x 链表"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p1 "),n("span",{class:"token operator"},"="),s(" l1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p2 "),n("span",{class:"token operator"},"="),s(" l2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 遍历链表，按照大小将原链表分成两条链表，分解时需要注意分解节点与原链表的断开问题。"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" p "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" p"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<"),s(" x "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                p1`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"// 将节点添加到小于 x 链表"),s(`
                p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s("     "),n("span",{class:"token comment"},"// 链表指针前进"),s(`
                p1 `),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s("   "),n("span",{class:"token comment"},"// 小于 x 链表指针前进"),s(`
                p1`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 并将小于 x 链表与原链表断开"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                p2`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},";"),s(`    
                p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                p2 `),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                p2`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// 合并成一条"),s(`
        p1`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" l2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" l1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(` 
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"partition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" head"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token omit keyword"},"_"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" minHead "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" min"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token operator"},"="),s(` minHead
        `),n("span",{class:"token keyword"},"let"),s(" maxHead "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" max"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token operator"},"="),s(` maxHead
        `),n("span",{class:"token keyword"},"var"),s(" node "),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token comment"},"// 根据值大小创建了两条新链表，最后合并。这样不需要处理链表断开的问题。"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" node "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" n "),n("span",{class:"token operator"},"="),s(" node  "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"break"),s(),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" n"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<"),s(" x "),n("span",{class:"token punctuation"},"{"),s(`
                min`),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
                min `),n("span",{class:"token operator"},"="),s(" min"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                max`),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
                max `),n("span",{class:"token operator"},"="),s(" max"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            `),n("span",{class:"token punctuation"},"}"),s(`
            node `),n("span",{class:"token operator"},"="),s(" n"),n("span",{class:"token punctuation"},"."),s(`next
        `),n("span",{class:"token punctuation"},"}"),s(`
        min`),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" maxHead"),n("span",{class:"token punctuation"},"."),s(`next
        `),n("span",{class:"token keyword"},"return"),s(" minHead"),n("span",{class:"token punctuation"},"."),s(`next
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ln=n("h2",{id:"reverse-反转",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reverse-反转","aria-hidden":"true"},"#"),s(),n("code",null,"reverse"),s(" - “反转”")],-1),on={href:"https://leetcode.cn/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},cn=n("blockquote",null,[n("p",null,"通过单链表的头结点 head 进行反转链表，返回反转后的链表。")],-1),pn=n("details",{class:"hint-container details"},[n("summary",null,"💡"),n("p",null,"【思路】")],-1),un={href:"https://leetcode.cn/problems/reverse-linked-list-ii/",target:"_blank",rel:"noopener noreferrer"},rn=n("blockquote",null,[n("p",null,"通过单链表的头结点 head 和两个整数 left 和 right (left <= right)，反转链表从 left 到 right 位置的链表节点，返回反转后的链表。")],-1),kn=n("details",{class:"hint-container details"},[n("summary",null,"💡"),n("blockquote",null,[n("p",null,"如果使用迭代，上面两个题应该怎么处理？")])],-1),dn=n("h2",{id:"intersection-相交",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#intersection-相交","aria-hidden":"true"},"#"),s(),n("code",null,"intersection"),s(" - “相交”")],-1),mn={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists",target:"_blank",rel:"noopener noreferrer"},vn=n("blockquote",null,[n("p",null,[s("求两个单链表是否存在交点？如果存在返回相交起始节点，不存在返回 "),n("code",null,"null"),s("？(已确定不存在环结构)")])],-1),bn=n("pre",null,[n("code",null,`  🌰例子
        a1 -> a2 
                \\
                  -> c1 -> c2 -> c3
                /
  b1 -> b2 -> b3
  
  c1 为交点
`)],-1),wn={class:"hint-container details"},hn=n("summary",null,"💡",-1),fn=n("p",null,[s("【思路1】遍历两个链表，变量的同时将节点放入 "),n("code",null,"Set"),s(" 中，如果存入时已存在 "),n("code",null,"Set"),s(" 中，则表明是交点。这种解法时间复杂度 O(n), 需要使用额外空间 ，空间复杂度 O(n)。")],-1),yn=n("p",null,"【思路2】由于相交之后内容相同，这可以先计算两个链表长度，先让长一点的链表先走两个链表差值。然后两个链表指针同时向前走，然后比较节点是否相同，如果相同就是交点。",-1),_n=n("p",null,"【思路3】扩展思路3，核心点在于对齐链表，然后就可以开始比较。如果将两个链表前后相加(A+B B+A) 这样也起到了对齐效果，代码实现并不需要真正相加，两个指针，只需要先遍历一个链表然后再从另外一个链表头开始往遍历。",-1),xn=n("pre",null,[n("code",null,`    [a1 -> a2 -> c1 -> c2 -> c3] -> b1 -> b2 -> b3 -> {c1} -> c2 -> c3
    [b1 -> b2 -> b3 -> c1 -> c2 -> c3] -> a1 -> a2 -> {c1} -> c2 -> c3
`)],-1),Nn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * public class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode(int x) `),n("span",{class:"token punctuation"},"{"),s(`
 *         val = x;
 *         next = null;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
 
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" headA"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"ListNode"),s(" headB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" pa "),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" pb "),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" pa "),n("span",{class:"token operator"},"!="),s(" pb "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" pa "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                pa `),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                pa `),n("span",{class:"token operator"},"="),s(" pa"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" pb "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                pb `),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                pb `),n("span",{class:"token operator"},"="),s(" pb"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" pa"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ln=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" headA"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token omit keyword"},"_"),s(" headB"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" pa "),n("span",{class:"token operator"},"="),s(` headA
        `),n("span",{class:"token keyword"},"var"),s(" pb "),n("span",{class:"token operator"},"="),s(` headB
        `),n("span",{class:"token keyword"},"while"),s(" pa "),n("span",{class:"token operator"},"!=="),s(" pb "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// swift 中需要使用 !== 判断两个对象是否相等"),s(`
            `),n("span",{class:"token comment"},"// 遍历完一个链表后，开始遍历另一个链表"),s(`
            pa `),n("span",{class:"token operator"},"="),s(" pa "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token operator"},"?"),s(" headB "),n("span",{class:"token punctuation"},":"),s(" pa"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
            pb `),n("span",{class:"token operator"},"="),s(" pb "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token operator"},"?"),s(" headA "),n("span",{class:"token punctuation"},":"),s(" pb"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s(`next
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` pa
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gn=n("h2",{id:"cycle-环形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cycle-环形","aria-hidden":"true"},"#"),s(),n("code",null,"cycle"),s(" - “环形”")],-1),jn=n("blockquote",null,[n("p",null,"环形链表 : 表示链表存在首位连接的情况，形成一个环状结构。")],-1),An={href:"https://leetcode.cn/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},In=n("blockquote",null,[n("p",null,"判断单链表是否有环？")],-1),Sn={class:"hint-container details"},Dn=n("summary",null,"💡",-1),qn=n("p",null,"【技巧】使用快慢指针，fast 指针每次走两步，slow 指针每次走一步，如果两个指针相遇，则表明链表有环。如果没有相遇，fast 直接走到链表最后 nil 空指针，则表明链表没有环。",-1),Bn=n("p",null,"【原理】",-1),Cn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tn=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Hn={href:"https://leetcode.cn/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},En=n("blockquote",null,[n("p",null,"求环形链表入环位置的节点？")],-1),Kn={class:"hint-container details"},Vn=n("summary",null,"💡",-1),Fn=n("p",null,"【结论】相遇点 ~ 连接点 = 头指针 ~ 连接点",-1),On=n("p",null,"【思路】先使用快慢指针(快指针走两步，慢指针走一步)定位到相遇点；然后将慢指针重新指向头节点，快慢指针开始同时往前走(都走一步)，相遇点就是环的入口。",-1),zn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Rn=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function Un(Gn,Jn){const o=p("ExternalLinkIcon"),i=p("CodeTabs");return r(),k("div",null,[m,v,c(" more "),b,n("ul",null,[n("li",null,[n("a",w,[s("链表"),l(o)])])]),h,c(" 删除链表的倒数第 N 个结点 "),n("ul",null,[n("li",null,[n("a",f,[s("🟢 19 - 删除链表的倒数第 N 个结点"),l(o)]),y])]),n("details",_,[x,N,L,g,l(i,{id:"60",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[j]),tab1:a(({value:e,isActive:t})=>[A]),_:1})]),c(" 链表的中间结点 "),n("ul",null,[n("li",null,[n("a",I,[s("🟢 876 链表的中间节点"),l(o)]),S])]),n("details",D,[q,B,l(i,{id:"88",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[C]),tab1:a(({value:e,isActive:t})=>[T]),_:1})]),H,c(" 合并两个有序链表 "),n("ul",null,[n("li",null,[n("a",E,[s("🟢 21 - 合并两个有序链表"),l(o)]),K])]),n("details",V,[F,O,l(i,{id:"119",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[z]),tab1:a(({value:e,isActive:t})=>[R]),_:1})]),c(" 合并 K 个升序链表 "),n("ul",null,[n("li",null,[n("a",U,[s("🔴 23 - 合并 K 个升序链表"),l(o)]),G])]),n("details",J,[M,P,Q,W,l(i,{id:"153",data:[{id:"解法1"}]},{title0:a(({value:e,isActive:t})=>[s("解法1")]),tab0:a(({value:e,isActive:t})=>[X]),_:1})]),Y,c(" 分隔链表 "),n("ul",null,[n("li",null,[n("a",Z,[s("🟠 86 - 分隔链表"),l(o)]),$])]),n("details",nn,[sn,an,l(i,{id:"181",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[en]),tab1:a(({value:e,isActive:t})=>[tn]),_:1})]),ln,c(" 反转链表 "),n("ul",null,[n("li",null,[n("a",on,[s("🟢 206 - 反转链表"),l(o)]),cn])]),pn,c(" 反转链表 II "),n("ul",null,[n("li",null,[n("a",un,[s("🟠 92 - 反转链表 II"),l(o)]),rn])]),kn,dn,c(" 相交链表 "),n("ul",null,[n("li",null,[n("p",null,[n("a",mn,[s("🟢 160 - 相交链表"),l(o)])]),vn,bn])]),n("details",wn,[hn,fn,yn,_n,xn,l(i,{id:"265",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[Nn]),tab1:a(({value:e,isActive:t})=>[Ln]),_:1})]),gn,jn,c(" 环形链表 "),n("ul",null,[n("li",null,[n("a",An,[s("🟢 141 - 环形链表"),l(o)]),In])]),n("details",Sn,[Dn,qn,Bn,l(i,{id:"304",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[Cn]),tab1:a(({value:e,isActive:t})=>[Tn]),_:1})]),c(" 环形链表 II "),n("ul",null,[n("li",null,[n("a",Hn,[s("🟠 142 - 环形链表 II"),l(o)]),En])]),n("details",Kn,[Vn,Fn,On,l(i,{id:"335",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[zn]),tab1:a(({value:e,isActive:t})=>[Rn]),_:1})])])}const Qn=u(d,[["render",Un],["__file","linked-list.html.vue"]]);export{Qn as default};
