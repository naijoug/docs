import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as u,c as r,a as d,b as n,e as s,d as o,w as a}from"./app-CmXikh8R.js";const k={},m=n("h2",{id:"_126",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_126","aria-hidden":"true"},"#"),s(" 126")],-1),v=n("p",null,"// #region 126",-1),b={href:"https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("blockquote",null,[n("p",null,"斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：")],-1),h=n("pre",null,[n("code",null,`  F(0) = 0，F(1) = 1
  F(n) = F(n - 1) + F(n - 2)，其中 n > 1
  给定 n ，请计算 F(n) 。

  答案需要取模 1e9+7(1000000007) ，如计算初始结果为：1000000008，请返回 1。
`)],-1),f={class:"hint-container details"},x=n("summary",null,"💡",-1),y=n("p",null,"【思路】递归 + dp 备忘录，读题要仔细，结果需要取模。",-1),g=n("div",{class:"language-dart line-numbers-mode","data-ext":"dart"},[n("pre",{class:"language-dart"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),s("int"),n("span",{class:"token punctuation"},","),s(" int"),n("span",{class:"token punctuation"},">")]),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`  
  int `),n("span",{class:"token function"},"fib"),n("span",{class:"token punctuation"},"("),s("int n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" n "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" n"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 看清题目：答案需要取模 1000000007"),s(`
    `),n("span",{class:"token keyword"},"final"),s(" fn "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fib"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token function"},"fib"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"1000000007"),n("span",{class:"token punctuation"},";"),s(`
    dp`),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" fn"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" fn"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("p",null,"// #endregion 126",-1),N=n("hr",null,null,-1),L=n("h2",{id:"_136",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_136","aria-hidden":"true"},"#"),s(" 136")],-1),C=n("p",null,"// #region 136",-1),F={href:"https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/",target:"_blank",rel:"noopener noreferrer"},A=n("blockquote",null,[n("p",null,"给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。 返回删除后的链表的头节点。")],-1),V=n("pre",null,[n("code",null,`  🌰
  输入: head = [4,5,1,9], val = 5
  输出: [4,1,9]
  解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
  示例 2:
  
  🌰
  输入: head = [4,5,1,9], val = 1
  输出: [4,5,9]
  解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
  
  说明：
  题目保证链表中节点的值互不相同
`)],-1),q={class:"hint-container details"},B=n("summary",null,"💡",-1),E=n("p",null,"【思路】核心点在于需要找到要删除节点的前一个节点",-1),S=n("div",{class:"language-dart line-numbers-mode","data-ext":"dart"},[n("pre",{class:"language-dart"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"deleteNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(" head"),n("span",{class:"token punctuation"},","),s(" int val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"final"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    dummy`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 思路：遍历找改值节点，"),s(`
    `),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(" prev "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 指向遍历节点的前一个节点"),s(`
    `),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(" node "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!="),s(" val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        prev `),n("span",{class:"token operator"},"="),s(" prev"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 前一个节点指向要删除的下一个节点"),s(`
    prev`),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-dart line-numbers-mode","data-ext":"dart"},[n("pre",{class:"language-dart"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"deleteNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(" head"),n("span",{class:"token punctuation"},","),s(" int val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 带头节点，解决需要删除头结点的情况"),s(`
    `),n("span",{class:"token keyword"},"final"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    dummy`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 思路：遍历找到目标值的前一个节点"),s(`
    `),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token operator"},"?"),s(" node "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!="),s(" val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 前一个节点指向要删除的下一个节点"),s(`
    node`),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("p",null,"// #endregion 136",-1);function I(R,j){const l=i("ExternalLinkIcon"),c=i("CodeTabs");return u(),r("div",null,[d(" more "),m,v,n("ul",null,[n("li",null,[n("p",null,[n("a",b,[s("🟢 126 - 斐波那契数"),o(l)])]),_,h])]),n("details",f,[x,y,o(c,{id:"24",data:[{id:"dart"}]},{title0:a(({value:e,isActive:t})=>[s("dart")]),tab0:a(({value:e,isActive:t})=>[g]),_:1})]),w,N,L,C,n("ul",null,[n("li",null,[n("p",null,[n("a",F,[s("🟢 136 - 删除链表的节点"),o(l)])]),A,V])]),n("details",q,[B,E,o(c,{id:"57",data:[{id:"dart 双指针"},{id:"dart 单指针"}]},{title0:a(({value:e,isActive:t})=>[s("dart 双指针")]),title1:a(({value:e,isActive:t})=>[s("dart 单指针")]),tab0:a(({value:e,isActive:t})=>[S]),tab1:a(({value:e,isActive:t})=>[T]),_:1})]),D])}const G=p(k,[["render",I],["__file","LCR.html.vue"]]);export{G as default};
