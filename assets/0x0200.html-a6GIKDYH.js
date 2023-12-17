import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as r,c as i,a,b as e,e as n,d as o}from"./app-SDsRO-JA.js";const d={},_=e("h2",{id:"_0206",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0206","aria-hidden":"true"},"#"),n(" 0206")],-1),c=e("p",null,"// #region 0206",-1),h={href:"https://leetcode.cn/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},u=e("blockquote",null,[e("p",null,"通过单链表的头结点 head 进行反转链表，返回反转后的链表。")],-1),p=e("details",{class:"hint-container details"},[e("summary",null,"💡"),e("p",null,"【思路】")],-1),m=e("p",null,"// #endregion 0206",-1),b=e("h2",{id:"_0213",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0213","aria-hidden":"true"},"#"),n(" 0213")],-1),f=e("p",null,"// #region 0213",-1),g={href:"https://leetcode.cn/problems/house-robber-ii",target:"_blank",rel:"noopener noreferrer"},k=e("details",{class:"hint-container details"},[e("summary",null,"💡")],-1),x=e("p",null,"// #endregion 0213",-1),I=e("h2",{id:"_0216",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0216","aria-hidden":"true"},"#"),n(" 0216")],-1),y=e("p",null,"// #region 0216",-1),q={href:"https://leetcode.cn/problems/combination-sum-iii",target:"_blank",rel:"noopener noreferrer"},v=e("details",{class:"hint-container details"},[e("summary",null,"💡")],-1),V=e("p",null,"// #endregion 0216",-1),B=e("h2",{id:"_0231",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0231","aria-hidden":"true"},"#"),n(" 0231")],-1),N=e("p",null,"// #region 0231",-1),O={href:"https://leetcode.cn/problems/power-of-two",target:"_blank",rel:"noopener noreferrer"},E=e("blockquote",null,[e("p",null,"判断一个整数是否为 2 的幂次方")],-1),w=e("details",{class:"hint-container details"},[e("summary",null,"💡")],-1),C=e("p",null,"// #endregion 0231",-1),L=e("h2",{id:"_0234",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0234","aria-hidden":"true"},"#"),n(" 0234")],-1),z=e("p",null,"// #region 0234",-1),T={href:"https://leetcode.cn/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},j=e("details",{class:"hint-container details"},[e("summary",null,"💡")],-1),A=e("p",null,"// #endregion 0234",-1),D=e("h2",{id:"_0260",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0260","aria-hidden":"true"},"#"),n(" 0260")],-1),F=e("p",null,"// #region 0260",-1),G={href:"https://leetcode.cn/problems/single-number-iii",target:"_blank",rel:"noopener noreferrer"},H=e("blockquote",null,[e("p",null,"一个非空的整数数组中，除了两个元素只出现一次外，其余元素均出现两次。找出两个只出现一次的数字 时间复杂度: O(n) 空间复杂度: O(1)")],-1),J=e("details",{class:"hint-container details"},[e("summary",null,"💡"),e("blockquote",null,[e("p",null,"升级版 一个非空的整数数组，除了三个元素只出现一次外，其余元素均出现两次。找出三个只出现一次的数字。 时间复杂度: O(n) 空间复杂度: O(1)")])],-1),K=e("p",null,"// #endregion 0260",-1),M=e("h2",{id:"_0268",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0268","aria-hidden":"true"},"#"),n(" 0268")],-1),P=e("p",null,"// #region 0268",-1),Q={href:"https://leetcode.cn/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},R=e("blockquote",null,[e("p",null,"给定一个包含 [0, n] 中的 n 个数的数组 nums，找出 [0, n] 这个范围中没有出现在数组中的那个数。")],-1),S=e("details",{class:"hint-container details"},[e("summary",null,"💡"),e("p",null,[n("【思路】 由于这个数组的值范围为[0, n]，则表明刚好是长度为 n+1 长度的数组。数字刚好与所在的索引的位置匹配，而缺失的数表明该位置没有数。那么使用 "),e("code",null,"x ^ x = 0"),n(" 的特性。只要将数组中数值与所有的索引进行异或操作，那么结果刚好就是缺失的那个数。 代码实现时，必须要构造一个 0~n 的数组，可以在循环变量数组时，直接使用索引值。需要注意的是 nums 长度为 n，不是 n+1。所以遍历时索引值只能到 n-1，所以可以将进行异或操作的结果值初始值设置为 n。")]),e("blockquote",null,[e("p",null,"升级版 给定一个包含 [0, n] 中的 n-1 个数的数组 nums，找出 [0, n] 这个范围中没有出现在数组中的两个数。")])],-1),U=e("p",null,"// #endregion 0268",-1),W=e("h2",{id:"_0278",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0278","aria-hidden":"true"},"#"),n(" 0278")],-1),X=e("p",null,"// #region 0278",-1),Y={href:"https://leetcode.cn/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},Z=e("blockquote",null,[e("p",null,[n("软件已经发行版本号 [1, 2, 3, ..., n]，通过函数 "),e("code",null,"bool isBadVersion(version)"),n(" 可以判断该版本是否发生该错误，现在需要查找到第一个发生该错误的版本。")])],-1),$=e("details",{class:"hint-container details"},[e("summary",null,"💡")],-1),ee=e("p",null,"// #endregion 0278",-1),ne=e("h2",{id:"_0283",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0283","aria-hidden":"true"},"#"),n(" 0283")],-1),le=e("p",null,"// #region 0283",-1),oe={href:"https://leetcode.cn/problems/move-zeroes/",target:"_blank",rel:"noopener noreferrer"},te=e("blockquote",null,[e("p",null,"给定一个数组，将数组中的 0 都移动到数组后面，其它元素相对位置保持不变。")],-1),se=e("details",{class:"hint-container details"},[e("summary",null,"💡")],-1),re=e("p",null,"// #endregion 0283",-1);function ie(ae,de){const l=s("ExternalLinkIcon");return r(),i("div",null,[a(" more "),_,c,e("ul",null,[e("li",null,[e("a",h,[n("🟢 206 - 反转链表"),o(l)]),u])]),p,m,b,f,e("ul",null,[e("li",null,[e("a",g,[n("🟠 213 - 打家劫舍 II"),o(l)])])]),k,x,I,y,e("ul",null,[e("li",null,[e("a",q,[n("🟠 216 - 组合总和 III"),o(l)])])]),v,V,B,N,e("ul",null,[e("li",null,[e("a",O,[n("🟢 231 - 2 的幂"),o(l)]),E])]),w,C,L,z,e("ul",null,[e("li",null,[e("a",T,[n("🟢 234 - 回文链表"),o(l)])])]),j,A,D,F,e("ul",null,[e("li",null,[e("a",G,[n("🟠 260 - 只出现一次的数字 III"),o(l)]),H])]),J,K,M,P,e("ul",null,[e("li",null,[e("a",Q,[n("🟢 268 - 丢失的数字"),o(l)]),R])]),S,U,W,X,e("ul",null,[e("li",null,[e("a",Y,[n("🟢 278 - 第一个错误的版本"),o(l)]),Z])]),$,ee,ne,le,e("ul",null,[e("li",null,[e("a",oe,[n("🟢 283 - 移动零"),o(l)]),te])]),se,re])}const he=t(d,[["render",ie],["__file","0x0200.html.vue"]]);export{he as default};
