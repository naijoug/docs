import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as u,o as r,c as k,a as c,b as n,e as s,d as o,w as a}from"./app-bePQwkrs.js";const d={},m=n("blockquote",null,[n("p",null,[n("code",null,"Balanced Binary Tree"),s(" - “平衡二叉树”")])],-1),v=n("p",null,"平衡二叉树需要保证左右子树高度差不超过 1。",-1),b=n("p",null,"常见的平衡二叉树",-1),f=n("ul",null,[n("li",null,[n("code",null,"AVL"),s(" 二叉树 (名称来源于两位作者名 G. M. Adelson-Velsky 和 E. M. Landis)")]),n("li",null,"红黑树")],-1),h=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),y={href:"https://visualgo.net/zh/bst/print",target:"_blank",rel:"noopener noreferrer"},w=n("hr",null,null,-1),_=n("h2",{id:"traverse-遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#traverse-遍历","aria-hidden":"true"},"#"),s(),n("code",null,"traverse"),s(" - “遍历”")],-1),g=n("ul",null,[n("li",null,[n("code",null,"DFS"),s("(Depth First Search) - “深度优先搜索”")]),n("li",null,[n("code",null,"BFS"),s("(Breadth First Search) - “广度优先搜索”")])],-1),T={href:"https://leetcode.cn/problems/binary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},N={class:"hint-container details"},L=n("summary",null,"💡",-1),q=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" list"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 前序位置，添加值"),s(`
        `),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" root "),n("span",{class:"token operator"},"="),s(" root "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("contentsOf"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("contentsOf"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` result
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I={href:"https://leetcode.cn/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},x={class:"hint-container details"},A=n("summary",null,"💡",-1),S=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" list"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 中序位置，添加值"),s(`
        `),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" root "),n("span",{class:"token operator"},"="),s(" root "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("contentsOf"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("contentsOf"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` result
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C={href:"https://leetcode.cn/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},E={class:"hint-container details"},F=n("summary",null,"💡",-1),O=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" list"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"traversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 后序位置，添加值"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" root "),n("span",{class:"token operator"},"="),s(" root "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("contentsOf"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("contentsOf"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` result
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},B=n("blockquote",null,[n("p",null,"自顶向下的层序遍历")],-1),V=n("pre",null,[n("code",null,`  🌰
      输入：root = [3,9,20,null,null,15,7]
      输出：[[3],[9,20],[15,7]]
          3
         / \\
        9  20
           / \\
          15  7 
`)],-1),M={class:"hint-container details"},P=n("summary",null,"💡",-1),G=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},">")]),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" levelList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" levelCount "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("levelCount "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
                `),n("span",{class:"token class-name"},"TreeNode"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// 将该层节点添加进入数组"),s(`
                levelList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// 将节点的左右节点继续放入队列中"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                levelCount `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("levelList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"levelOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" root "),n("span",{class:"token operator"},"="),s(" root "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token operator"},"!"),s("queue"),n("span",{class:"token punctuation"},"."),s("isEmpty "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" levelCount "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),s(`count
            `),n("span",{class:"token keyword"},"var"),s(" levelResult "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"while"),s(" levelCount "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                levelResult`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
                levelCount `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"left"),s(),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"left"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"left"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"right"),s(),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"right"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"right"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("levelResult"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` result
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal-ii",target:"_blank",rel:"noopener noreferrer"},H=n("blockquote",null,[n("p",null,"自底向上的层序遍历")],-1),J=n("pre",null,[n("code",null,`  🌰
      输入：root = [3,9,20,null,null,15,7]
      输出：[[15,7],[9,20],[3]]
          3
         / \\
        9  20
           / \\
          15  7 
`)],-1),K={class:"hint-container details"},Q=n("summary",null,"💡",-1),W=n("p",null,"【思路1】先按照自顶向下的层序得到结果，然后反转结果数组。",-1),Y=n("p",null,"【思路2】也是自顶向下的层序遍历的思路，但是每次将结果插入到结果数组前面，这样就不用将结果数组反转。",-1),Z=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"levelOrderBottom"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"Collections"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 反转自顶向下的遍历结果"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},">")]),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" levelList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" levelCount "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("levelCount "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"TreeNode"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                levelList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                levelCount `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("levelList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"levelOrderBottom"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},">")]),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" levelList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" levelCount "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("levelCount "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"TreeNode"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                levelList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                levelCount `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" levelList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 将每一层结果插入到结果列表前面"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn={href:"https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},sn=n("pre",null,[n("code",null,`  🌰
      输入：root = [3,9,20,null,null,15,7]
      输出：[[3],[20,9],[15,7]]
          3
         / \\
        9  20
           / \\
          15  7 
`)],-1),an={class:"hint-container details"},en=n("summary",null,"💡",-1),tn=n("p",null,"【思路】遍历的思路与层序遍历的思路一致，需要注意的是用一个布尔值去控制每一层元素添加时的方向，每处理完一层就进行反转处理。",-1),on=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"zigzagLevelOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},">")]),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"boolean"),s(" isPositive "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 通过布尔值控制每一层的元素添加方向"),s(`
        `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" levelList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" levelCount "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("levelCount "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"TreeNode"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("isPositive"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    levelList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    levelList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                levelCount `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            isPositive `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("isPositive"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 反转方向"),s(`
            result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("levelList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ln={href:"https://leetcode.cn/problems/average-of-levels-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},cn=n("pre",null,[n("code",null,`  🌰
      输入：root = [3,9,20,null,null,15,7]
      输出：[3, 14.5, 11]
          3
         / \\
        9  20
           / \\
          15  7 
`)],-1),un={class:"hint-container details"},pn=n("summary",null,"💡",-1),rn=n("p",null,"【思路】按照层序遍历思路，计算每一层的平均值进行返回",-1),kn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Double"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"averageOfLevels"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Double"),n("span",{class:"token punctuation"},">")]),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},">")]),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" count "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" levelCount "),n("span",{class:"token operator"},"="),s(" count"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"double"),s(" levelSum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("count "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"TreeNode"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                levelSum `),n("span",{class:"token operator"},"+="),s(" node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                count `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("levelSum"),n("span",{class:"token operator"},"/"),s("levelCount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn={href:"https://leetcode.cn/problems/binary-tree-vertical-order-traversal",target:"_blank",rel:"noopener noreferrer"},mn=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),vn={href:"https://leetcode.cn/problems/vertical-order-traversal-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},bn=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),fn=n("hr",null,null,-1),hn=n("h2",{id:"depth-深度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#depth-深度","aria-hidden":"true"},"#"),s(),n("code",null,"depth"),s(" - “深度”")],-1),yn={href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},wn=n("blockquote",null,[n("p",null,"给定一个二叉树根节点，返回该二叉树的最大深度。 二叉树的最大深度 : 指从根节点到最远叶子节点的最长路径上的节点数。")],-1),_n={class:"hint-container details"},gn=n("summary",null,"💡",-1),Tn=n("p",null,"【思路】递归，每个节点递归遍历左右子节点，取左右分支中较长的加 1，就是当前节点的最大深度。",-1),Nn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"maxDepth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"maxDepth"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"maxDepth"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ln=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"maxDepth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"Int"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" root "),n("span",{class:"token operator"},"="),s(" root "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"maxDepth"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"maxDepth"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qn={href:"https://leetcode.cn/problems/minimum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},jn=n("blockquote",null,[n("p",null,"给定一个二叉树的根节点，找出其最小深度。 二叉树的最小深度 : 从根节点到最近叶子节点的最短路径上的节点数量。")],-1),In=n("pre",null,[n("code",null,`  🌰
      输入：root = [3,9,20,null,null,15,7]
      输出：2
          3
        /   \\
      9      20
            /   \\
           15    7 
  🌰
      输入：root = [2,null,3,null,4,null,5,null,6]
      输出：5
          2
           \\
            3
             \\
              4
               \\
                5
                 \\
                  6
`)],-1),xn={class:"hint-container details"},An=n("summary",null,"💡",-1),Sn=n("p",null,[s("【思路1】"),n("code",null,"DFS"),s(" 深度优先遍历，这个题与求二叉树的最大深度的不同点在于，不能简单地进行递归判断左右两边最小，会出现为空的情况。")],-1),Dn=n("p",null,[s("【思路2】"),n("code",null,"BFS"),s(" 广度优先遍历，")],-1),Cn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"minDepth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" root"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" min "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"MAX_VALUE"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            min `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"minDepth"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" min"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            min `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"minDepth"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" min"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" min "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),En=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"minDepth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" depth "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},">")]),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token operator"},"!"),s("queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            depth `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" count "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 二叉树该层节点数"),s(`
            `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("count "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"TreeNode"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// 节点左右子节点均为 null，则表明为已达到叶子节点最短路径"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(` 
                    `),n("span",{class:"token keyword"},"return"),s(" depth"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                count `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" depth"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Fn=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"minDepth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"Int"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" root "),n("span",{class:"token operator"},"="),s(" root "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" depth "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token operator"},"!"),s("queue"),n("span",{class:"token punctuation"},"."),s("isEmpty "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" count "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),s(`count
            `),n("span",{class:"token keyword"},"while"),s(" count "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
                count `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"left"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token nil constant"},"nil"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"right"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"return"),s(` depth
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"left"),s(),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"left"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"left"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"right"),s(),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"right"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"right"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            depth `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` depth
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),On=n("hr",null,null,-1),Rn=n("h2",{id:"construct-构造",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#construct-构造","aria-hidden":"true"},"#"),s(),n("code",null,"construct"),s(" - “构造”")],-1),zn={href:"https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},Bn=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),Vn={href:"https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},Mn=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),Pn={href:"https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},Gn=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),Un=n("hr",null,null,-1),Xn=n("h2",{id:"invert-反转",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#invert-反转","aria-hidden":"true"},"#"),s(),n("code",null,"invert"),s(" - “反转”")],-1),Hn={href:"https://leetcode.cn/problems/invert-binary-tree",target:"_blank",rel:"noopener noreferrer"},Jn={class:"hint-container details"},Kn=n("summary",null,"💡",-1),Qn=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"invertTree"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"guard"),s(),n("span",{class:"token keyword"},"let"),s(" root "),n("span",{class:"token operator"},"="),s(" root "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token nil constant"},"nil"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// 交换左右节点"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"left"),s(`
        root`),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"left"),s(),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"right"),s(`
        root`),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"right"),s(),n("span",{class:"token operator"},"="),s(` node

        `),n("span",{class:"token comment"},"// 继续递归对左右节点进行同样操作"),s(`
        `),n("span",{class:"token function"},"invertTree"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"left"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"invertTree"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"right"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` root
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Wn=n("hr",null,null,-1),Yn=n("h2",{id:"same-相同",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#same-相同","aria-hidden":"true"},"#"),s(),n("code",null,"same"),s(" - “相同”")],-1),Zn={href:"https://leetcode.cn/problems/same-tree",target:"_blank",rel:"noopener noreferrer"},$n=n("blockquote",null,[n("p",null,"给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。")],-1),ns=n("pre",null,[n("code",null,`  🌰
      输入：p = [1,2,3], q = [1,2,3]
      输出：true
`)],-1),ss={class:"hint-container details"},as=n("summary",null,"💡",-1),es=n("p",null,"【思路】深度优先遍历，进行不断递归判断左右子节点中的值是否相等。",-1),ts=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isSameTree"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" p"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" q"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" q "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" q "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!="),s(" q"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 如果连个节点值相等，继续判断左右子树是否相等"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isSameTree"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" q"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"isSameTree"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" q"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),os={href:"https://leetcode.cn/problems/symmetric-tree",target:"_blank",rel:"noopener noreferrer"},ls=n("blockquote",null,[n("p",null,"给你一个二叉树的根节点 root ， 检查它是否轴对称。")],-1),cs=n("pre",null,[n("code",null,`  🌰
                1
              /   \\
             2     2
            / \\   / \\
           3   4 4   3
      输入：root = [1,2,2,3,4,4,3]
      输出：true
`)],-1),is={class:"hint-container details"},us=n("summary",null,"💡",-1),ps=n("p",null,"【思路1】深度优先搜索",-1),rs=n("p",null,"【思路2】反转+对比，将二叉树右子树进行反转，然后与左子树进行对比。",-1),ks=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isSymmetric"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" root"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" root"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 左右节点均不为空"),s(`
        `),n("span",{class:"token comment"},"// 先将右边节点进行反转，然后比较是否相同"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isSameTree"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"invert"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 反转二叉树"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"TreeNode"),s(),n("span",{class:"token function"},"invert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        
        `),n("span",{class:"token comment"},"// 递归对左右节点进行反转"),s(`
        `),n("span",{class:"token function"},"invert"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"invert"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        
        `),n("span",{class:"token comment"},"// 对二叉树左右节点进行反转"),s(`
        `),n("span",{class:"token class-name"},"TreeNode"),s(" temp "),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
        root`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        root`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
        
        `),n("span",{class:"token keyword"},"return"),s(" root"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isSameTree"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" root2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" root2 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" root2 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!="),s(" root2"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 如果节点值相等，继续递归比较左右子节点"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isSameTree"),n("span",{class:"token punctuation"},"("),s("root1"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" root2"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"isSameTree"),n("span",{class:"token punctuation"},"("),s("root1"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" root2"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ds={href:"https://leetcode.cn/problems/subtree-of-another-tree",target:"_blank",rel:"noopener noreferrer"},ms=n("blockquote",null,[n("p",null,"给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。 二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。")],-1),vs=n("pre",null,[n("code",null,`  🌰
              3         4
             / \\       / \\ 
            4   5    1    2
           / \\
          1   2
      输入：root = [3,4,5,1,2], subRoot = [4,1,2]
      输出：true
  🌰
              3         4
             / \\       / \\ 
            4   5    1    2
           / \\
          1   2
             /
            0  
      输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
      输出：false
`)],-1),bs={class:"hint-container details"},fs=n("summary",null,"💡",-1),hs=n("p",null,"【思路】递归判断",-1),ys=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isSubtree"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" subRoot"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" subRoot "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" subRoot "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"=="),s(" subRoot"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"isEqual"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},","),s(" subRoot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 根节点值相等，进行相等判断"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(` 
        `),n("span",{class:"token comment"},"// 如果不相等，继续在左右节点进行判断"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isSubtree"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" subRoot"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token function"},"isSubtree"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" subRoot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isEqual"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" root2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" root2 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"("),s("root1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" root2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!="),s(" root2"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 如果节点值相等，继续递归判断左右子树值是否相等"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isEqual"),n("span",{class:"token punctuation"},"("),s("root1"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" root2"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"isEqual"),n("span",{class:"token punctuation"},"("),s("root1"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" root2"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ws=n("hr",null,null,-1),_s=n("h2",{id:"lca-lowest-common-ancestor-最近公共祖先节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lca-lowest-common-ancestor-最近公共祖先节点","aria-hidden":"true"},"#"),s(),n("code",null,"LCA"),s("(Lowest Common Ancestor) - “最近公共祖先节点”")],-1),gs={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},Ts=n("blockquote",null,[n("p",null,"给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。 所有节点的值都是唯一的。p、q 为不同节点且均存在于给定的二叉搜索树中。")],-1),Ns=n("pre",null,[n("code",null,`  🌰
                 6
              /     \\
             2       8
            / \\     / \\
           0   4   7   9
              / \\
             3   5
      输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
      输出: 6 
`)],-1),Ls={class:"hint-container details"},qs=n("summary",null,"💡",-1),js=n("p",null,"【思路】利用二叉搜索树的特征，所有左子树节点均小于该节点值，所有右子树均大于该节点值。那么利用这个特征，如果某一个节点的值，刚好则两个目标节点值的范围内，则就是最近公共祖先。如果大于两个目标节点，则在左子树继续查找；如果小于两个目标节点，则在右子树继续查找。",-1),Is=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) `),n("span",{class:"token punctuation"},"{"),s(" val = x; "),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"TreeNode"),s(),n("span",{class:"token function"},"lowestCommonAncestor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" p"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" q"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},","),s(" q"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},","),s(" q"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"TreeNode"),s(),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" min"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" max"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 当前节点小于最小值，则到右子树查找"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<"),s(" min"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" min"),n("span",{class:"token punctuation"},","),s(" max"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// 当前节点大于最大值，则到左子树查找"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},">"),s(" max"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" min"),n("span",{class:"token punctuation"},","),s(" max"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// min <= root.val <= max，则表明该节点就是公共祖先"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" root"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xs={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},As=n("blockquote",null,[n("p",null,"给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。 所有节点的值都是唯一的。p、q 为不同节点且均存在于给定的二叉树中。")],-1),Ss=n("pre",null,[n("code",null,`  🌰
                 3
              /     \\
             5       1
            / \\     / \\
           6   2   0   8
              / \\
             7   4
      输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
      输出：3
`)],-1),Ds={class:"hint-container details"},Cs=n("summary",null,"💡",-1),Es=n("p",null,"【思路】递归，如果二叉树中的一个节点，可以在左右子树中查找到两个目标节点，则表明该节点就是最近的公共祖先节点。",-1),Fs=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) `),n("span",{class:"token punctuation"},"{"),s(" val = x; "),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"TreeNode"),s(),n("span",{class:"token function"},"lowestCommonAncestor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" p"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" q"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 找到 p 或 q 节点"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"=="),s(" p"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"||"),s(" root"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"=="),s(" q"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" root"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 未找到，继续在左右子树中查找"),s(`
        `),n("span",{class:"token class-name"},"TreeNode"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"lowestCommonAncestor"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},","),s(" q"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"TreeNode"),s(" right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"lowestCommonAncestor"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},","),s(" q"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 在左右子树中查找到目标节点，则表明该节点就是公共祖先"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" root"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 返回查找到的节点"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(" left "),n("span",{class:"token operator"},":"),s(" right"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Os=n("hr",null,null,-1),Rs=n("h2",{id:"binary-search-tree-二叉搜素树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#binary-search-tree-二叉搜素树","aria-hidden":"true"},"#"),s(),n("code",null,"Binary Search Tree"),s(" - “二叉搜素树”")],-1),zs={href:"https://leetcode.cn/problems/validate-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},Bs=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1);function Vs(Ms,Ps){const l=u("ExternalLinkIcon"),i=u("CodeTabs");return r(),k("div",null,[m,v,b,f,c(" more "),h,n("ul",null,[n("li",null,[n("a",y,[s("二叉搜索树"),o(l)])])]),w,_,g,c(" 🟢 前序遍历 "),n("ul",null,[n("li",null,[n("a",T,[s("🟢 144 - 二叉树的前序遍历"),o(l)])])]),n("details",N,[L,o(i,{id:"60",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[q]),tab1:a(({value:e,isActive:t})=>[j]),_:1})]),c(" 🟢 中序遍历 "),n("ul",null,[n("li",null,[n("a",I,[s("🟢 94 - 二叉树的中序遍历"),o(l)])])]),n("details",x,[A,o(i,{id:"80",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[S]),tab1:a(({value:e,isActive:t})=>[D]),_:1})]),c(" 🟢 后序遍历 "),n("ul",null,[n("li",null,[n("a",C,[s("🟢 145 - 二叉树的后序遍历"),o(l)])])]),n("details",E,[F,o(i,{id:"100",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[O]),tab1:a(({value:e,isActive:t})=>[R]),_:1})]),c(" 🟠 层序遍历 "),n("ul",null,[n("li",null,[n("p",null,[n("a",z,[s("🟠 102 - 二叉树的层序遍历"),o(l)])]),B,V])]),n("details",M,[P,o(i,{id:"126",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[G]),tab1:a(({value:e,isActive:t})=>[U]),_:1})]),c(" 🟠 层序遍历 II "),n("ul",null,[n("li",null,[n("p",null,[n("a",X,[s("🟠 107 - 二叉树的层序遍历 II"),o(l)])]),H,J])]),n("details",K,[Q,W,Y,o(i,{id:"158",data:[{id:"java 解法1"},{id:"java 解法2"}]},{title0:a(({value:e,isActive:t})=>[s("java 解法1")]),title1:a(({value:e,isActive:t})=>[s("java 解法2")]),tab0:a(({value:e,isActive:t})=>[Z]),tab1:a(({value:e,isActive:t})=>[$]),_:1})]),c(" 🟠 二叉树的锯齿形层序遍历 "),n("ul",null,[n("li",null,[n("p",null,[n("a",nn,[s("🟠 103 - 二叉树的锯齿形层序遍历"),o(l)])]),sn])]),n("details",an,[en,tn,o(i,{id:"182",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[on]),_:1})]),c(" 🟢 二叉树的层平均值 "),n("ul",null,[n("li",null,[n("p",null,[n("a",ln,[s("🟢 637 - 二叉树的层平均值"),o(l)])]),cn])]),n("details",un,[pn,rn,o(i,{id:"203",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[kn]),_:1})]),c(" 🟠 二叉树的垂直遍历 "),n("ul",null,[n("li",null,[n("a",dn,[s("🟠 314 - 二叉树的垂直遍历"),o(l)])])]),mn,c(" 🔴 二叉树的垂序遍历 "),n("ul",null,[n("li",null,[n("a",vn,[s("🔴 987 - 二叉树的垂序遍历"),o(l)])])]),bn,fn,hn,c(" 🟢 二叉树的最大深度 "),n("ul",null,[n("li",null,[n("a",yn,[s("🟢 104 - 二叉树的最大深度"),o(l)]),wn])]),n("details",_n,[gn,Tn,o(i,{id:"256",data:[{id:"java"},{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),title1:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[Nn]),tab1:a(({value:e,isActive:t})=>[Ln]),_:1})]),c(" 🟢 二叉树的最小深度 "),n("ul",null,[n("li",null,[n("p",null,[n("a",qn,[s("🟢 111 - 二叉树的最小深度"),o(l)])]),jn,In])]),n("details",xn,[An,Sn,Dn,o(i,{id:"288",data:[{id:"java 解法1"},{id:"java 解法2"},{id:"swift 解法2"}]},{title0:a(({value:e,isActive:t})=>[s("java 解法1")]),title1:a(({value:e,isActive:t})=>[s("java 解法2")]),title2:a(({value:e,isActive:t})=>[s("swift 解法2")]),tab0:a(({value:e,isActive:t})=>[Cn]),tab1:a(({value:e,isActive:t})=>[En]),tab2:a(({value:e,isActive:t})=>[Fn]),_:1})]),On,Rn,c(" 🟠 从前序与中序遍历序列构造二叉树 "),n("ul",null,[n("li",null,[n("a",zn,[s("🟠 105 - 从前序与中序遍历序列构造二叉树"),o(l)])])]),Bn,c(" 🟠 从中序与后序遍历序列构造二叉树 "),n("ul",null,[n("li",null,[n("a",Vn,[s("🟠 106 - 从中序与后序遍历序列构造二叉树"),o(l)])])]),Mn,c(" 🟠 根据前序和后序遍历构造二叉树 "),n("ul",null,[n("li",null,[n("a",Pn,[s("🟠 889 - 根据前序和后序遍历构造二叉树"),o(l)])])]),Gn,Un,Xn,c(" 🟠 翻转二叉树 "),n("ul",null,[n("li",null,[n("a",Hn,[s("🟠 226 - 翻转二叉树"),o(l)])])]),n("details",Jn,[Kn,o(i,{id:"355",data:[{id:"swift"}]},{title0:a(({value:e,isActive:t})=>[s("swift")]),tab0:a(({value:e,isActive:t})=>[Qn]),_:1})]),Wn,Yn,c(" 🟢 相同的树 "),n("ul",null,[n("li",null,[n("p",null,[n("a",Zn,[s("🟢 100 - 相同的树"),o(l)])]),$n,ns])]),n("details",ss,[as,es,o(i,{id:"385",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[ts]),_:1})]),c(" 🟢 对称二叉树 "),n("ul",null,[n("li",null,[n("p",null,[n("a",os,[s("🟢 101 - 对称二叉树"),o(l)])]),ls,cs])]),n("details",is,[us,ps,rs,o(i,{id:"414",data:[{id:"java 解法2"}]},{title0:a(({value:e,isActive:t})=>[s("java 解法2")]),tab0:a(({value:e,isActive:t})=>[ks]),_:1})]),c(" 🟢 另一棵树的子树 "),n("ul",null,[n("li",null,[n("p",null,[n("a",ds,[s("🟢 572 - 另一棵树的子树"),o(l)])]),ms,vs])]),n("details",bs,[fs,hs,o(i,{id:"440",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[ys]),_:1})]),ws,_s,c(" 🟠 二叉搜索树的最近公共祖先 "),n("ul",null,[n("li",null,[n("p",null,[n("a",gs,[s("🟠 235 - 二叉搜索树的最近公共祖先"),o(l)])]),Ts,Ns])]),n("details",Ls,[qs,js,o(i,{id:"470",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[Is]),_:1})]),c(" 🟠 二叉树的最近公共祖先 "),n("ul",null,[n("li",null,[n("p",null,[n("a",xs,[s("🟠 236 - 二叉树的最近公共祖先"),o(l)])]),As,Ss])]),n("details",Ds,[Cs,Es,o(i,{id:"496",data:[{id:"java"}]},{title0:a(({value:e,isActive:t})=>[s("java")]),tab0:a(({value:e,isActive:t})=>[Fs]),_:1})]),Os,Rs,c(" 🟠 验证二叉搜索树 "),n("ul",null,[n("li",null,[n("a",zs,[s("🟠 98 - 验证二叉搜索树"),o(l)])])]),Bs])}const Xs=p(d,[["render",Vs],["__file","0x06.binary-tree.html.vue"]]);export{Xs as default};
