import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as u,c as k,a as e,b as n,e as s,d as t,w as o}from"./app-TyFLvDt8.js";const d={},m={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},_=n("blockquote",null,[n("p",null,"给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。 返回 你能获得的 最大 利润 。")],-1),b=n("pre",null,[n("code",null,`  🌰
      输入：prices = [7,1,5,3,6,4]
      输出：7
      解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
           随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
           总利润为 4 + 3 = 7 。
  🌰
      输入：prices = [1,2,3,4,5]
      输出：4
      解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
           总利润为 4 。
`)],-1),v={class:"hint-container details"},f=n("summary",null,"💡",-1),h=n("p",null,"【思路1】贪心算法",-1),y=n("p",null,"【思路2】动态规划",-1),w=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"maxProfit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" prices"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" profit "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 总利润"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" prices"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 每日利润"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" dayProfit "),n("span",{class:"token operator"},"="),s(" prices"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-"),s(" prices"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// 贪心算法，所有上涨的交易日进行买卖"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dayProfit "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                profit `),n("span",{class:"token operator"},"+="),s(" dayProfit"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" profit"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function x(g,I){const c=a("ExternalLinkIcon"),l=a("CodeTabs");return u(),k("div",null,[e(" more "),e(" 🟠 买卖股票的最佳时机 II "),n("ul",null,[n("li",null,[n("p",null,[n("a",m,[s("🟠 122 - 买卖股票的最佳时机 II"),t(c)])]),_,b])]),n("details",v,[f,h,y,t(l,{id:"23",data:[{id:"java 解法1"}]},{title0:o(({value:i,isActive:p})=>[s("java 解法1")]),tab0:o(({value:i,isActive:p})=>[w]),_:1})])])}const N=r(d,[["render",x],["__file","0x07.greedy.html.vue"]]);export{N as default};
