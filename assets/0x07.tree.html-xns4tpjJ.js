import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as u,o as p,c as d,a as t,b as n,e as s,d as a,w as l}from"./app-_-qFKnfQ.js";const k={},v=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),m={href:"https://visualgo.net/zh/fenwicktree/print",target:"_blank",rel:"noopener noreferrer"},b={href:"https://visualgo.net/zh/segmenttree/print",target:"_blank",rel:"noopener noreferrer"},_={href:"https://visualgo.net/zh/suffixtree/print",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"traverse-遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#traverse-遍历","aria-hidden":"true"},"#"),s(),n("code",null,"traverse"),s(" - “遍历”")],-1),f={href:"https://leetcode.cn/problems/n-ary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},N={class:"hint-container details"},g=n("summary",null,"💡",-1),y=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},`/*
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w={href:"https://leetcode.cn/problems/n-ary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},x={class:"hint-container details"},L=n("summary",null,"💡",-1),j=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},`/*
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function A(I,C){const e=u("ExternalLinkIcon"),i=u("CodeTabs");return p(),d("div",null,[t(" more "),v,n("ul",null,[n("li",null,[n("a",m,[s("二进制索引树"),a(e)])]),n("li",null,[n("a",b,[s("线段树"),a(e)])]),n("li",null,[n("a",_,[s("后缀树"),a(e)])])]),h,t(" N 叉树的前序遍历 "),n("ul",null,[n("li",null,[n("a",f,[s("🟢 589 - N 叉树的前序遍历"),a(e)])])]),n("details",N,[g,a(i,{id:"34",data:[{id:"java"}]},{title0:l(({value:o,isActive:c})=>[s("java")]),tab0:l(({value:o,isActive:c})=>[y]),_:1})]),t(" N 叉树的后序遍历 "),n("ul",null,[n("li",null,[n("a",w,[s("🟢 590 - N 叉树的后序遍历"),a(e)])])]),n("details",x,[L,a(i,{id:"51",data:[{id:"java"}]},{title0:l(({value:o,isActive:c})=>[s("java")]),tab0:l(({value:o,isActive:c})=>[j]),_:1})]),t(" N 叉树的层序遍历 ")])}const B=r(k,[["render",A],["__file","0x07.tree.html.vue"]]);export{B as default};
