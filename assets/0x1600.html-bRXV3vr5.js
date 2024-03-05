import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as u,c as p,a as k,b as n,e as s,d as a,w as o}from"./app--AVddLJq.js";const d={},h=n("h2",{id:"_1600",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1600","aria-hidden":"true"},"#"),s(" 1600")],-1),m=n("p",null,"// #region 1600",-1),_={href:"https://leetcode.cn/problems/throne-inheritance",target:"_blank",rel:"noopener noreferrer"},b=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),f=n("p",null,"// #endregion 1600",-1),v=n("h2",{id:"_1616-✅",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1616-✅","aria-hidden":"true"},"#"),s(" 1616 ✅")],-1),g=n("p",null,"// #region 1616",-1),w={href:"https://leetcode.cn/problems/split-two-strings-to-make-palindrome",target:"_blank",rel:"noopener noreferrer"},y=n("blockquote",null,[n("p",null,"a、b 两个字符串长度相同，将两个字符串从相同位置分割，a 的前半部分与 b 的后半部分，或者 b 的前半部分与 a 的后半部分拼接是否可以组成回文串。")],-1),x={class:"hint-container details"},I=n("summary",null,"💡",-1),P=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"checkPalindromeFormation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 判断 a 字符串的开头部分是否可以与 b 字符的后面部分组成回文串"),s(`
    `),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 左指针指向 a 字符串的开头"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" right "),n("span",{class:"token operator"},"="),s(" b"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"length"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 右指针指向 b 字符的结尾"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s(" left "),n("span",{class:"token operator"},"<"),s(" right "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" a"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(" b"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 不匹配，开始将左右指针位置移动到 a、 b 字符串进行回文匹配判断"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            left `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            right `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 判断字符串从 left ~ right 范围是否为回文串"),s(`
    `),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" str"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" left"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s(" left "),n("span",{class:"token operator"},"<"),s(" right "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(" str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            left `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            right `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(` 
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("p",null,"// #endregion 1616",-1),S=n("h2",{id:"_1631",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1631","aria-hidden":"true"},"#"),s(" 1631")],-1),j=n("p",null,"// #region 1631",-1),C={href:"https://leetcode.cn/problems/path-with-minimum-effort",target:"_blank",rel:"noopener noreferrer"},V=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),N=n("p",null,"// #endregion 1631",-1),B=n("h2",{id:"_1644",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1644","aria-hidden":"true"},"#"),s(" 1644")],-1),E=n("p",null,"// #region 1644",-1),T={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"},L=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),q=n("p",null,"// #endregion 1644",-1),F=n("h2",{id:"_1650",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1650","aria-hidden":"true"},"#"),s(" 1650")],-1),z=n("p",null,"// #region 1650",-1),D={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iii",target:"_blank",rel:"noopener noreferrer"},G=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),H=n("p",null,"// #endregion 1650",-1),J=n("h2",{id:"_1676",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1676","aria-hidden":"true"},"#"),s(" 1676")],-1),K=n("p",null,"// #region 1676",-1),M={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iv",target:"_blank",rel:"noopener noreferrer"},O=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),Q=n("p",null,"// #endregion 1676",-1);function R(U,W){const t=e("ExternalLinkIcon"),c=e("CodeTabs");return u(),p("div",null,[k(" more "),h,m,n("ul",null,[n("li",null,[n("a",_,[s("🟠 1600 - 王位继承顺序"),a(t)])])]),b,f,v,g,n("ul",null,[n("li",null,[n("a",w,[s("🟡 1616 - 分割两个字符串得到回文串"),a(t)]),y])]),n("details",x,[I,a(c,{id:"38",data:[{id:"java"}]},{title0:o(({value:l,isActive:i})=>[s("java")]),tab0:o(({value:l,isActive:i})=>[P]),_:1})]),A,S,j,n("ul",null,[n("li",null,[n("a",C,[s("🟠 1631 - 最小体力消耗路径"),a(t)])])]),V,N,B,E,n("ul",null,[n("li",null,[n("a",T,[s("🟠 1644 - 二叉树的最近公共祖先 II"),a(t)])])]),L,q,F,z,n("ul",null,[n("li",null,[n("a",D,[s("🟠 1650 - 二叉树的最近公共祖先 III"),a(t)])])]),G,H,J,K,n("ul",null,[n("li",null,[n("a",M,[s("🟠 1676 - 二叉树的最近公共祖先 IV"),a(t)])])]),O,Q])}const Z=r(d,[["render",R],["__file","0x1600.html.vue"]]);export{Z as default};
