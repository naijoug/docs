import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as u,o as r,c as k,a as o,b as n,e as s,d as l,w as a}from"./app-shl8DweF.js";const d={},v=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),m={href:"https://visualgo.net/zh/fenwicktree/print",target:"_blank",rel:"noopener noreferrer"},b={href:"https://visualgo.net/zh/segmenttree/print",target:"_blank",rel:"noopener noreferrer"},f={href:"https://visualgo.net/zh/suffixtree/print",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"traverse-遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#traverse-遍历","aria-hidden":"true"},"#"),s(),n("code",null,"traverse"),s(" - “遍历”")],-1),h={href:"https://leetcode.cn/problems/n-ary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},w={class:"hint-container details"},y=n("summary",null,"💡",-1),N=n("p",null,"【思路1】递归，在前序位置进行数据收集",-1),g=n("p",null,"【思路2】迭代，使用栈的数据结构模拟递归过程中的调用栈",-1),x=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},`/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/`),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"preorder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Node"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" list"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Node"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Node"),s(" node "),n("span",{class:"token operator"},":"),s(" root"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var children: [Node]
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.children = []
 *     }
 * }
 */`),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"preorder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" root "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" nums "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token operator"},"!"),s("stack"),n("span",{class:"token punctuation"},"."),s("isEmpty "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 栈顶取出元素"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" node"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Node"),s(),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeLast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            nums`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token comment"},"// 子节点倒序入栈"),s(`
            `),n("span",{class:"token keyword"},"for"),s(" child "),n("span",{class:"token keyword"},"in"),s(" node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reversed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("child"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` nums
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L={href:"https://leetcode.cn/problems/n-ary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},j={class:"hint-container details"},A=n("summary",null,"💡",-1),C=n("p",null,"【思路1】递归，后序位置进行数据收集",-1),E=n("p",null,"【思路2】迭代优化，进行前序数据收集后，进行反转",-1),D=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},`/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/`),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"postorder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Node"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" list"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Node"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Node"),s(" node "),n("span",{class:"token operator"},":"),s(" root"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 后序位置，添加值"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var children: [Node]
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.children = []
 *     }
 * }
 */`),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"postorder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
    	`),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" root "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" nums "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token operator"},"!"),s("stack"),n("span",{class:"token punctuation"},"."),s("isEmpty "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" node "),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeLast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"for"),s(" child "),n("span",{class:"token keyword"},"in"),s(" node"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token punctuation"},"{"),s(`
                stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("child"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            nums`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reversed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function V(z,B){const c=u("ExternalLinkIcon"),i=u("CodeTabs");return r(),k("div",null,[o(" more "),v,n("ul",null,[n("li",null,[n("a",m,[s("二进制索引树"),l(c)])]),n("li",null,[n("a",b,[s("线段树"),l(c)])]),n("li",null,[n("a",f,[s("后缀树"),l(c)])])]),_,o(" 🟢 N 叉树的前序遍历 "),n("ul",null,[n("li",null,[n("a",h,[s("🟢 589 - N 叉树的前序遍历"),l(c)])])]),n("details",w,[y,N,g,l(i,{id:"40",data:[{id:"java 解法1"},{id:"swift 解法2 💯"}]},{title0:a(({value:e,isActive:t})=>[s("java 解法1")]),title1:a(({value:e,isActive:t})=>[s("swift 解法2 💯")]),tab0:a(({value:e,isActive:t})=>[x]),tab1:a(({value:e,isActive:t})=>[I]),_:1})]),o(" 🟢 N 叉树的后序遍历 "),n("ul",null,[n("li",null,[n("a",L,[s("🟢 590 - N 叉树的后序遍历"),l(c)])])]),n("details",j,[A,C,E,l(i,{id:"66",data:[{id:"java 解法1"},{id:"swift 解法2 💯"}]},{title0:a(({value:e,isActive:t})=>[s("java 解法1")]),title1:a(({value:e,isActive:t})=>[s("swift 解法2 💯")]),tab0:a(({value:e,isActive:t})=>[D]),tab1:a(({value:e,isActive:t})=>[S]),_:1})]),o(" 🟢 N 叉树的层序遍历 ")])}const F=p(d,[["render",V],["__file","0x07.tree.html.vue"]]);export{F as default};
