import{_ as u}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as r,c as k,a as c,b as n,e as s,d as l,w as a}from"./app-GvBJK9_k.js";const d={},m=n("blockquote",null,[n("p",null,"链表是将一堆零散的内存空间串联起来的数据结构，不需要内存空间连续。链表的数据结构，除了存储数据外，还需存储指向下一个节点的指针。")],-1),v=n("ul",null,[n("li",null,"单链表"),n("li",null,"双向链表"),n("li",null,"循环链表")],-1),b=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),w={href:"https://visualgo.net/zh/list/print",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"curd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#curd","aria-hidden":"true"},"#"),s(),n("code",null,"CURD")],-1),y={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},_=n("blockquote",null,[n("p",null,"删除单链表的倒数第 N 个节点，并返回头结点。")],-1),f={class:"hint-container details"},x=n("summary",null,"💡",-1),N=n("p",null,"【思路1】遍历一次链表得到链表长度 len，第二次就能遍历到 len - n 的节点，进行删除操作即可。",-1),L=n("p",null,"【思路2】栈，先将所有链表节点入栈，出栈时进行计数，当到第 n 个元素时进行删除处理。",-1),g=n("p",null,"【思路3】快慢指针，快指针先走 n 步之后，快慢指针开始同时向前走，当快指针走到链表尾部，这慢指针刚好指向要删除的节点。",-1),j=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii",target:"_blank",rel:"noopener noreferrer"},D=n("blockquote",null,[n("p",null,"给定一个已排序的链表，删除链表中的重复元素(重复元素全部删除)。")],-1),S=n("pre",null,[n("code",null,`  🌰
      输入：1 -> 1 -> 1 -> 2 -> 3
      输出：2 -> 3
`)],-1),q={class:"hint-container details"},B=n("summary",null,"💡",-1),C=n("p",null,"【思路】双指针法，创建已伪头结点，用于解决链表为空或全部为重复元素的情况；然后慢指针指向伪头结点，快指针从头结点开始遍历。",-1),E=n("ul",null,[n("li",null,"如果快指针节点与后面节点值相等，则跳过全部重复节点。特殊情况处理，跳过之后如果链表已经结束，则需要将慢指针指向 null。"),n("li",null,"如果快指针节点与后面节点不相等，则表明不是重复节点。则将慢指针的后继节点指向快指针节点，然后将快慢指针都往前移动一步。")],-1),T=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"deleteDuplicates"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        dummy`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" slow "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" fast "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 快指针去探测不重复的节点"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" fast"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"=="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 探测到重复节点，跳过重复元素"),s(`
                `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" fast"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"=="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token comment"},"// 指向了最后一个重复节点，往前移动一步"),s(`
                fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// 后面为空，则将慢指针指向 null"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    slow`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 探测到不重复节点，将慢指针指向节点，并往前移动"),s(`
                slow`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},";"),s(`
                slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-list",target:"_blank",rel:"noopener noreferrer"},O=n("blockquote",null,[n("p",null,"给定一个已排序的链表，删除链表中的重复元素(重复元素保留一个)。")],-1),V=n("pre",null,[n("code",null,`  🌰
      输入：1 -> 1 -> 1 -> 2 -> 3
      输出：1 -> 2 -> 3
`)],-1),K={class:"hint-container details"},F=n("summary",null,"💡",-1),U=n("p",null,"【思路1】双指针法，取巧方案，类似排序数组中的删除重复元素方案，每次判断值不一样时，将慢指针往前移动，将快指针中的值赋值到慢指针位置。",-1),z=n("p",null,"【思路2】思路 1 虽然得到结果是正确，但是却改变了节点。 优化思路 1 方案，每次判断值不一样时，不进行赋值，直接将慢指针指向快指针节点。",-1),M=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"deleteDuplicates"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" slow "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 快指针值与慢指针指不一样时，将慢指针往前移动，"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" fast"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!="),s(" slow"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                slow`),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        slow`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"deleteDuplicates"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" slow "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 值不相等时，将慢指针指向快指针节点，并将慢指针往前移动"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" fast"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!="),s(" slow"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                slow`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},";"),s(`
                slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        slow`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G={href:"https://leetcode.cn/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},J=n("pre",null,[n("code",null,`  🌰
      输入：head = [1,2,6,3,4,5,6], val = 6
      输出：[1,2,3,4,5]
`)],-1),P={class:"hint-container details"},Q=n("summary",null,"💡",-1),W=n("p",null,"【思路】双指针法",-1),X=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"removeElements"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        dummy`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" slow "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" fast"),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" fast"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!="),s(" val "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 不等于目标值时，将慢节点后继节点指向快指针节点"),s(`
                slow`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},";"),s(`
                slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// 如果已经是最后节点，需要将 slow 后继节点设为 null"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" fast "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                slow`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y={href:"https://leetcode.cn/problems/delete-node-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},Z=n("blockquote",null,[n("p",null,"给定链表中的一个节点，删除这个节点(确保不是链表最后一个节点)")],-1),$=n("pre",null,[n("code",null,`  🌰
      输入：head = [4,5,1,9], node = 5
      输出：[4,1,9]
`)],-1),nn={class:"hint-container details"},sn=n("summary",null,"💡",-1),an=n("p",null,"【思路】取巧方案，只需将后续节点的值赋值给当前节点，然后将删除节点的后继节点指向，后继节点的后继节点。",-1),en=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * public class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode(int x) `),n("span",{class:"token punctuation"},"{"),s(" val = x; "),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"deleteNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" p"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            p`),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 后继节点是最后一个节点，直接指向 null"),s(`
                p`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 后继节点不是最后一个节点，往后移动"),s(`
                p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn={href:"https://leetcode.cn/problems/middle-of-the-linked-list/",target:"_blank",rel:"noopener noreferrer"},ln=n("blockquote",null,[n("p",null,"给定一个单链表，返回链表的中间节点。")],-1),on={class:"hint-container details"},cn=n("summary",null,"💡",-1),pn=n("p",null,"【思路】使用快慢指针，快指针每次走两步，慢指针每次走一步。当快指针走完时",-1),un=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rn=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=n("h2",{id:"merge-合并",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#merge-合并","aria-hidden":"true"},"#"),s(),n("code",null,"merge"),s(" - “合并”")],-1),dn={href:"https://leetcode.cn/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},mn=n("blockquote",null,[n("p",null,"合并两个有序的链表。")],-1),vn={class:"hint-container details"},bn=n("summary",null,"💡",-1),wn=n("p",null,"【思路】创建一个结果链表头，并用一个指针指向这个结果链表用于指向添加位置。然后分别使用两个指针指向两个链表，每次比较比较链表中的值，将较小的链表中的节点添加到结果链表中。直到其中一个链表中已为空，最后将剩下不为空的链表全部添加到结果链表中。",-1),hn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yn=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_n={href:"https://leetcode.cn/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},fn=n("blockquote",null,[n("p",null,"给定一个升序链表数组，合并得到一个升序链表，并返回头结点。")],-1),xn={class:"hint-container details"},Nn=n("summary",null,"💡",-1),Ln=n("p",null,"【思路1】合并两个升序链表比较容易解决。合并多个链表，可以先两个两个合并，最后就合并成一个了。",-1),gn=n("p",null,"【思路2】分治思想，类似归并排序，两两合并，最后合并成为结果链表。",-1),jn=n("p",null,"【思路3】优先级队列，每次将 K 个链表的头结点放入优先级队列中，那么可以每次从优先级队列中取出最小值节点放入结果链表，然后再将该节点的下一个节点放入优先级队列，直到合并完成。",-1),An=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),In=n("h2",{id:"partition-分割",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#partition-分割","aria-hidden":"true"},"#"),s(),n("code",null,"partition"),s(" - “分割”")],-1),Dn={href:"https://leetcode.cn/problems/partition-list",target:"_blank",rel:"noopener noreferrer"},Sn=n("blockquote",null,[n("p",null,"根据给定值将链表元素分割为小于和大于等于该值的两部分。并保持节点元素相对位置。")],-1),qn={class:"hint-container details"},Bn=n("summary",null,"💡",-1),Cn=n("p",null,"【思路】将原链表按照值大小分隔成两条链表，最后合并成结果链表。",-1),En=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tn=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Hn=n("h2",{id:"reverse-反转",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reverse-反转","aria-hidden":"true"},"#"),s(),n("code",null,"reverse"),s(" - “反转”")],-1),On={href:"https://leetcode.cn/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},Vn=n("blockquote",null,[n("p",null,"通过单链表的头结点 head 进行反转链表，返回反转后的链表。")],-1),Kn=n("details",{class:"hint-container details"},[n("summary",null,"💡"),n("p",null,"【思路】")],-1),Fn={href:"https://leetcode.cn/problems/reverse-linked-list-ii/",target:"_blank",rel:"noopener noreferrer"},Un=n("blockquote",null,[n("p",null,"通过单链表的头结点 head 和两个整数 left 和 right (left <= right)，反转链表从 left 到 right 位置的链表节点，返回反转后的链表。")],-1),zn=n("details",{class:"hint-container details"},[n("summary",null,"💡"),n("blockquote",null,[n("p",null,"如果使用迭代，应该怎么处理？")])],-1),Mn=n("h2",{id:"intersection-相交",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#intersection-相交","aria-hidden":"true"},"#"),s(),n("code",null,"intersection"),s(" - “相交”")],-1),Rn={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists",target:"_blank",rel:"noopener noreferrer"},Gn=n("blockquote",null,[n("p",null,[s("求两个单链表是否存在交点？如果存在返回相交起始节点，不存在返回 "),n("code",null,"null"),s("？(已确定不存在环结构)")])],-1),Jn=n("pre",null,[n("code",null,`  🌰
        a1 -> a2 
                \\
                  -> c1 -> c2 -> c3
                /
  b1 -> b2 -> b3
  
  c1 为交点
`)],-1),Pn={class:"hint-container details"},Qn=n("summary",null,"💡",-1),Wn=n("p",null,[s("【思路1】遍历两个链表，变量的同时将节点放入 "),n("code",null,"Set"),s(" 中，如果存入时已存在 "),n("code",null,"Set"),s(" 中，则表明是交点。这种解法时间复杂度 O(n), 需要使用额外空间 ，空间复杂度 O(n)。")],-1),Xn=n("p",null,"【思路2】由于相交之后内容相同，这可以先计算两个链表长度，先让长一点的链表先走两个链表差值。然后两个链表指针同时向前走，然后比较节点是否相同，如果相同就是交点。",-1),Yn=n("p",null,"【思路3】扩展思路3，核心点在于对齐链表，然后就可以开始比较。如果将两个链表前后相加(A+B B+A) 这样也起到了对齐效果，代码实现并不需要真正相加，两个指针，只需要先遍历一个链表然后再从另外一个链表头开始往遍历。",-1),Zn=n("pre",null,[n("code",null,`    [a1 -> a2 -> c1 -> c2 -> c3] -> b1 -> b2 -> b3 -> {c1} -> c2 -> c3
    [b1 -> b2 -> b3 -> c1 -> c2 -> c3] -> a1 -> a2 -> {c1} -> c2 -> c3
`)],-1),$n=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ns=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ss=n("h2",{id:"cycle-环形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cycle-环形","aria-hidden":"true"},"#"),s(),n("code",null,"cycle"),s(" - “环形”")],-1),as=n("blockquote",null,[n("p",null,"环形链表 : 表示链表存在首位连接的情况，形成一个环状结构。")],-1),es={href:"https://leetcode.cn/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},ts=n("blockquote",null,[n("p",null,"判断单链表是否有环？")],-1),ls={class:"hint-container details"},os=n("summary",null,"💡",-1),cs=n("p",null,"【技巧】使用快慢指针，fast 指针每次走两步，slow 指针每次走一步，如果两个指针相遇，则表明链表有环。如果没有相遇，fast 直接走到链表最后 nil 空指针，则表明链表没有环。",-1),is=n("p",null,"【原理】",-1),ps=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),us=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rs={href:"https://leetcode.cn/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},ks=n("blockquote",null,[n("p",null,"求环形链表入环位置的节点？")],-1),ds={class:"hint-container details"},ms=n("summary",null,"💡",-1),vs=n("p",null,"【结论】相遇点 ~ 连接点 = 头指针 ~ 连接点",-1),bs=n("p",null,"【思路】先使用快慢指针(快指针走两步，慢指针走一步)定位到相遇点；然后将慢指针重新指向头节点，快慢指针开始同时往前走(都走一步)，相遇点就是环的入口。",-1),ws=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hs=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ys=n("h2",{id:"sort-排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sort-排序","aria-hidden":"true"},"#"),s(),n("code",null,"sort"),s(" - “排序”")],-1),_s={href:"https://leetcode.cn/problems/insertion-sort-list",target:"_blank",rel:"noopener noreferrer"},fs=n("pre",null,[n("code",null,`  🌰
      输入：4 -> 2 -> 1 -> 3
      输出：1 -> 2 -> 3 -> 4
`)],-1),xs={class:"hint-container details"},Ns=n("summary",null,"💡",-1),Ls=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"insertionSortList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"MIN_VALUE"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        dummy`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" sorted "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" p "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" p "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" p"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},">="),s(" sorted"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 比已排序最后节点值大，直接加入排序链表"),s(`
                sorted `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 排序节点指向该节点的后继节点"),s(`
                sorted`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// 比已排序最后节点小，则需要从链表头结点查询插入节点位置"),s(`
                `),n("span",{class:"token class-name"},"ListNode"),s(" insert "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" insert"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" insert"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<"),s(" p"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"&&"),s(" insert"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},">="),s(" p"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                    insert `),n("span",{class:"token operator"},"="),s(" insert"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                p`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" insert"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                insert`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            p `),n("span",{class:"token operator"},"="),s(" sorted"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gs={href:"https://leetcode.cn/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},js=n("pre",null,[n("code",null,`  🌰
      输入：-1 -> 5 -> 3 -> 4 -> 0
      输出：-1 -> 0 -> 3 -> 4 -> 5
`)],-1),As=n("blockquote",null,[n("p",null,"进阶：O(nlogn)时间复杂度 + 常数级空间复杂度，对链表进行排序。")],-1),Is={class:"hint-container details"},Ds=n("summary",null,"💡",-1),Ss=n("p",null,"【思路1】 同 147 题，使用插入排序进行排序，时间复杂度为 O(n²)，空间复杂度 O(1)",-1),qs=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,`
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function Bs(Cs,Es){const o=p("ExternalLinkIcon"),i=p("CodeTabs");return r(),k("div",null,[m,v,c(" more "),b,n("ul",null,[n("li",null,[n("a",w,[s("链表"),l(o)])])]),h,c(" 删除链表的倒数第 N 个结点 "),n("ul",null,[n("li",null,[n("a",y,[s("🟢 19 - 删除链表的倒数第 N 个结点"),l(o)]),_])]),n("details",f,[x,N,L,g,l(i,{id:"60",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[j]),tab1:a(({value:e,isActive:t})=>[A]),_:1})]),c(" 删除排序链表中的重复元素 II "),n("ul",null,[n("li",null,[n("p",null,[n("a",I,[s("🟠 82 - 删除排序链表中的重复元素 II"),l(o)])]),D,S])]),n("details",q,[B,C,E,l(i,{id:"101",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[T]),_:1})]),c(" 删除排序链表中的重复元素 "),n("ul",null,[n("li",null,[n("p",null,[n("a",H,[s("🟢 83 - 删除排序链表中的重复元素"),l(o)])]),O,V])]),n("details",K,[F,U,z,l(i,{id:"130",data:[{id:"java 思路1"},{id:"java 思路2"}]},{title0:a(({value:e,isActive:t})=>[s("java 思路1")]),title1:a(({value:e,isActive:t})=>[s("java 思路2")]),tab0:a(({value:e,isActive:t})=>[M]),tab1:a(({value:e,isActive:t})=>[R]),_:1})]),c(" 移除链表元素 "),n("ul",null,[n("li",null,[n("p",null,[n("a",G,[s("🟢 203 - 移除链表元素"),l(o)])]),J])]),n("details",P,[Q,W,l(i,{id:"154",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[X]),_:1})]),c(" 删除链表中的节点 "),n("ul",null,[n("li",null,[n("p",null,[n("a",Y,[s("🟠 237 - 删除链表中的节点"),l(o)])]),Z,$])]),n("details",nn,[sn,an,l(i,{id:"180",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[en]),_:1})]),c(" 链表的中间结点 "),n("ul",null,[n("li",null,[n("a",tn,[s("🟢 876 链表的中间节点"),l(o)]),ln])]),n("details",on,[cn,pn,l(i,{id:"205",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[un]),tab1:a(({value:e,isActive:t})=>[rn]),_:1})]),kn,c(" 合并两个有序链表 "),n("ul",null,[n("li",null,[n("a",dn,[s("🟢 21 - 合并两个有序链表"),l(o)]),mn])]),n("details",vn,[bn,wn,l(i,{id:"236",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[hn]),tab1:a(({value:e,isActive:t})=>[yn]),_:1})]),c(" 合并 K 个升序链表 "),n("ul",null,[n("li",null,[n("a",_n,[s("🔴 23 - 合并 K 个升序链表"),l(o)]),fn])]),n("details",xn,[Nn,Ln,gn,jn,l(i,{id:"270",data:[{id:"解法1"}]},{title0:a(({value:e,isActive:t})=>[s("解法1")]),tab0:a(({value:e,isActive:t})=>[An]),_:1})]),In,c(" 分隔链表 "),n("ul",null,[n("li",null,[n("a",Dn,[s("🟠 86 - 分隔链表"),l(o)]),Sn])]),n("details",qn,[Bn,Cn,l(i,{id:"298",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[En]),tab1:a(({value:e,isActive:t})=>[Tn]),_:1})]),Hn,c(" 反转链表 "),n("ul",null,[n("li",null,[n("a",On,[s("🟢 206 - 反转链表"),l(o)]),Vn])]),Kn,c(" 反转链表 II "),n("ul",null,[n("li",null,[n("a",Fn,[s("🟠 92 - 反转链表 II"),l(o)]),Un])]),zn,Mn,c(" 相交链表 "),n("ul",null,[n("li",null,[n("p",null,[n("a",Rn,[s("🟢 160 - 相交链表"),l(o)])]),Gn,Jn])]),n("details",Pn,[Qn,Wn,Xn,Yn,Zn,l(i,{id:"382",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[$n]),tab1:a(({value:e,isActive:t})=>[ns]),_:1})]),ss,as,c(" 环形链表 "),n("ul",null,[n("li",null,[n("a",es,[s("🟢 141 - 环形链表"),l(o)]),ts])]),n("details",ls,[os,cs,is,l(i,{id:"421",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[ps]),tab1:a(({value:e,isActive:t})=>[us]),_:1})]),c(" 环形链表 II "),n("ul",null,[n("li",null,[n("a",rs,[s("🟠 142 - 环形链表 II"),l(o)]),ks])]),n("details",ds,[ms,vs,bs,l(i,{id:"452",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[ws]),tab1:a(({value:e,isActive:t})=>[hs]),_:1})]),ys,c(" 对链表进行插入排序 "),n("ul",null,[n("li",null,[n("p",null,[n("a",_s,[s("🟠 147 - 对链表进行插入排序"),l(o)])]),fs])]),n("details",xs,[Ns,l(i,{id:"487",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[Ls]),_:1})]),c(" 排序链表 "),n("ul",null,[n("li",null,[n("p",null,[n("a",gs,[s("🟠 148 - 排序链表"),l(o)])]),js])]),As,n("details",Is,[Ds,Ss,l(i,{id:"513",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[qs]),_:1})])])}const Os=u(d,[["render",Bs],["__file","0x05.linked-list.html.vue"]]);export{Os as default};
