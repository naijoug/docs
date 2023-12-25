import{_ as u}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as r,c as k,a as o,b as n,e as s,d as l,w as a}from"./app-3jL1FZzb.js";const d={},m=n("p",null,"链表是将一堆零散的内存空间串联起来的数据结构，不需要内存空间连续。链表的数据结构，除了存储数据外，还需存储指向下一个节点的指针。",-1),v=n("ul",null,[n("li",null,"单链表"),n("li",null,"双向链表"),n("li",null,"循环链表")],-1),b=n("h2",{id:"curd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#curd","aria-hidden":"true"},"#"),s(),n("code",null,"CURD")],-1),w={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},h=n("blockquote",null,[n("p",null,"删除单链表的倒数第 N 个节点，并返回头结点。")],-1),f={class:"hint-container details"},y=n("summary",null,"💡",-1),_=n("p",null,"【思路1】遍历一次链表得到链表长度 len，第二次就能遍历到 len - n 的节点，进行删除操作即可。 【思路2】栈，先将所有链表节点入栈，出栈时进行计数，当到第 n 个元素时进行删除处理。 【思路3】快慢指针，快指针先走 n 步之后，快慢指针开始同时向前走，当快指针走到链表尾部，这慢指针刚好指向要删除的节点。",-1),x=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L={href:"https://leetcode.cn/problems/middle-of-the-linked-list/",target:"_blank",rel:"noopener noreferrer"},g=n("blockquote",null,[n("p",null,"给定一个单链表，返回链表的中间节点。")],-1),j={class:"hint-container details"},I=n("summary",null,"💡",-1),A=n("p",null,"【思路】使用快慢指针，快指针每次走两步，慢指针每次走一步。当快指针走完时",-1),q=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("h2",{id:"merge-合并",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#merge-合并","aria-hidden":"true"},"#"),s(),n("code",null,"merge"),s(" - “合并”")],-1),C={href:"https://leetcode.cn/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},T=n("blockquote",null,[n("p",null,"合并两个有序的链表。")],-1),H={class:"hint-container details"},E=n("summary",null,"💡",-1),B=n("p",null,"【思路】创建一个结果链表头，并用一个指针指向这个结果链表用于指向添加位置。然后分别使用两个指针指向两个链表，每次比较比较链表中的值，将较小的链表中的节点添加到结果链表中。直到其中一个链表中已为空，最后将剩下不为空的链表全部添加到结果链表中。",-1),K=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F={href:"https://leetcode.cn/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},R=n("blockquote",null,[n("p",null,"给定一个升序链表数组，合并得到一个升序链表，并返回头结点。")],-1),U={class:"hint-container details"},z=n("summary",null,"💡",-1),G=n("p",null,"【思路1】合并两个升序链表比较容易解决。合并多个链表，可以先两个两个合并，最后就合并成一个了。",-1),J=n("p",null,"【思路2】分治思想，类似归并排序，两两合并，最后合并成为结果链表。",-1),M=n("p",null,"【思路3】优先级队列，每次将 K 个链表的头结点放入优先级队列中，那么可以每次从优先级队列中取出最小值节点放入结果链表，然后再将该节点的下一个节点放入优先级队列，直到合并完成。",-1),O=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("h2",{id:"partition-分割",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#partition-分割","aria-hidden":"true"},"#"),s(),n("code",null,"partition"),s(" - “分割”")],-1),Q={href:"https://leetcode.cn/problems/partition-list",target:"_blank",rel:"noopener noreferrer"},W=n("blockquote",null,[n("p",null,"根据给定值将链表元素分割为小于和大于等于该值的两部分。并保持节点元素相对位置。")],-1),X={class:"hint-container details"},Y=n("summary",null,"💡",-1),Z=n("p",null,"【思路】将原链表按照值大小分隔成两条链表，最后合并成结果链表。",-1),$=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),sn=n("h2",{id:"reverse-反转",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reverse-反转","aria-hidden":"true"},"#"),s(),n("code",null,"reverse"),s(" - “反转”")],-1),an={href:"https://leetcode.cn/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},en=n("blockquote",null,[n("p",null,"通过单链表的头结点 head 进行反转链表，返回反转后的链表。")],-1),tn=n("details",{class:"hint-container details"},[n("summary",null,"💡"),n("p",null,"【思路】")],-1),ln={href:"https://leetcode.cn/problems/reverse-linked-list-ii/",target:"_blank",rel:"noopener noreferrer"},on=n("blockquote",null,[n("p",null,"通过单链表的头结点 head 和两个整数 left 和 right (left <= right)，反转链表从 left 到 right 位置的链表节点，返回反转后的链表。")],-1),cn=n("details",{class:"hint-container details"},[n("summary",null,"💡"),n("blockquote",null,[n("p",null,"如果使用迭代，上面两个题应该怎么处理？")])],-1),pn=n("h2",{id:"cycle-环形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cycle-环形","aria-hidden":"true"},"#"),s(),n("code",null,"cycle"),s(" - “环形”")],-1),un=n("blockquote",null,[n("p",null,"环形链表 : 表示链表存在首位连接的情况，形成一个环状结构。")],-1),rn={href:"https://leetcode.cn/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},kn=n("blockquote",null,[n("p",null,"判断单链表是否有环？")],-1),dn={class:"hint-container details"},mn=n("summary",null,"💡",-1),vn=n("p",null,"【技巧】使用快慢指针，fast 指针每次走两步，slow 指针每次走一步，如果两个指针相遇，则表明链表有环。如果没有相遇，fast 直接走到链表最后 nil 空指针，则表明链表没有环。",-1),bn=n("p",null,"【原理】",-1),wn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hn=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fn={href:"https://leetcode.cn/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},yn=n("blockquote",null,[n("p",null,"求环形链表入环位置的节点？")],-1),_n=n("details",{class:"hint-container details"},[n("summary",null,"💡"),n("p",null,"【结论】相遇点 ~ 连接点 = 头指针 ~ 连接点"),n("p",null,"数学公式推导"),n("blockquote",null,[n("p",null,"求环形链表的环长？")]),n("p",null,"【思路1】slow 指针视角，记录第一次相遇点位置，之后使用计数器记录步长，当 slow 指针再次走到该位置时，则计数器步长就是环长。"),n("p",null,"【思路2】fast 指针视角，由于 fast 刚好比 slow 指针多走一倍，所以当两个指针再次相遇时，则 fast 刚好走了环长的两倍。")],-1);function xn(Nn,Ln){const c=p("ExternalLinkIcon"),i=p("CodeTabs");return r(),k("div",null,[m,v,o(" more "),b,o(" 删除链表的倒数第 N 个结点 "),n("ul",null,[n("li",null,[n("a",w,[s("🟢 19 - 删除链表的倒数第 N 个结点"),l(c)]),h])]),n("details",f,[y,_,l(i,{id:"42",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[x]),tab1:a(({value:e,isActive:t})=>[N]),_:1})]),o(" 链表的中间结点 "),n("ul",null,[n("li",null,[n("a",L,[s("🟢 876 链表的中间节点"),l(c)]),g])]),n("details",j,[I,A,l(i,{id:"70",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[q]),tab1:a(({value:e,isActive:t})=>[D]),_:1})]),S,o(" 合并两个有序链表 "),n("ul",null,[n("li",null,[n("a",C,[s("🟢 21 - 合并两个有序链表"),l(c)]),T])]),n("details",H,[E,B,l(i,{id:"101",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[K]),tab1:a(({value:e,isActive:t})=>[V]),_:1})]),o(" 合并 K 个升序链表 "),n("ul",null,[n("li",null,[n("a",F,[s("🔴 23 - 合并 K 个升序链表"),l(c)]),R])]),n("details",U,[z,G,J,M,l(i,{id:"135",data:[{id:"解法1"}]},{title0:a(({value:e,isActive:t})=>[s("解法1")]),tab0:a(({value:e,isActive:t})=>[O]),_:1})]),P,o(" 分隔链表 "),n("ul",null,[n("li",null,[n("a",Q,[s("🟠 86 - 分隔链表"),l(c)]),W])]),n("details",X,[Y,Z,l(i,{id:"163",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[$]),tab1:a(({value:e,isActive:t})=>[nn]),_:1})]),sn,o(" 反转链表 "),n("ul",null,[n("li",null,[n("a",an,[s("🟢 206 - 反转链表"),l(c)]),en])]),tn,o(" 反转链表 II "),n("ul",null,[n("li",null,[n("a",ln,[s("🟠 92 - 反转链表 II"),l(c)]),on])]),cn,pn,un,o(" 环形链表 "),n("ul",null,[n("li",null,[n("a",rn,[s("🟢 141 - 环形链表"),l(c)]),kn])]),n("details",dn,[mn,vn,bn,l(i,{id:"247",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[wn]),tab1:a(({value:e,isActive:t})=>[hn]),_:1})]),o(" 环形链表 II "),n("ul",null,[n("li",null,[n("a",fn,[s("🟠 142 - 环形链表 II"),l(c)]),yn])]),_n])}const In=u(d,[["render",xn],["__file","linked-list.html.vue"]]);export{In as default};
