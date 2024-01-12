import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as u,o as k,c as d,a as e,b as n,e as s,d as a,w as o,f as i}from"./app-J1yPHcPX.js";const m={},b=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),h={href:"https://visualgo.net/zh/cyclefinding/print",target:"_blank",rel:"noopener noreferrer"},v=i('<h2 id="搜索算法" tabindex="-1"><a class="header-anchor" href="#搜索算法" aria-hidden="true">#</a> 搜索算法</h2><table><thead><tr><th>算法</th><th>说明</th></tr></thead><tbody><tr><td>Binary Search</td><td>二分搜索</td></tr><tr><td>Breadth-first search (BFS)</td><td>广度优先搜索</td></tr><tr><td>Depth-first search (DFS)</td><td>深度优先搜索</td></tr></tbody></table><h2 id="顺序搜素" tabindex="-1"><a class="header-anchor" href="#顺序搜素" aria-hidden="true">#</a> 顺序搜素</h2><details class="hint-container details"><summary>💡</summary></details><h2 id="binary-search-二分搜索" tabindex="-1"><a class="header-anchor" href="#binary-search-二分搜索" aria-hidden="true">#</a> <code>Binary Search</code> - “二分搜索”</h2><p>二分搜索的前提条件是有序的数组，依赖数组的有序性。每次通过搜素区间的中间元素判断大小，从而缩小一半的搜索范围，搜索的范围成指数级别缩小。</p>',6),f={href:"https://leetcode.cn/problems/binary-search",target:"_blank",rel:"noopener noreferrer"},_=n("blockquote",null,[n("p",null,"给定一个升序数组和一个目标值，如果目标值在数组中返回目标值索引，如果不存在返回 -1。")],-1),w={class:"hint-container details"},y=n("summary",null,"💡",-1),g=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"search"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" right "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"<="),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" mid "),n("span",{class:"token operator"},"="),s(" left "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token punctuation"},"("),s("right "),n("span",{class:"token operator"},"-"),s(" left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),s("mid"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(" mid"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),s("mid"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 目标值在左边，调整右边界"),s(`
                right `),n("span",{class:"token operator"},"="),s(" mid "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 目标值在右边，调整左边界"),s(`
                left `),n("span",{class:"token operator"},"="),s(" mid "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S={href:"https://leetcode.cn/problems/search-insert-position",target:"_blank",rel:"noopener noreferrer"},x=n("blockquote",null,[n("p",null,"给定一个升序数组和一个目标值，如果目标值在数组中存在返回目标值索引，如果不存在返回插入位置索引。")],-1),j=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),q={href:"https://leetcode.cn/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},B=n("blockquote",null,[n("p",null,[s("软件已经发行版本号 [1, 2, 3, ..., n]，通过函数 "),n("code",null,"bool isBadVersion(version)"),s(" 可以判断该版本是否发生该错误，现在需要查找到第一个发生该错误的版本。")])],-1),L=n("details",{class:"hint-container details"},[n("summary",null,"💡")],-1),A={href:"https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array",target:"_blank",rel:"noopener noreferrer"},C=n("blockquote",null,[n("p",null,"给定一个非递减数组和一个目标值，查找该目标值在数组中的开始位置和结束位置，如果存在则返回 [start, end]，如果不存在返回 [-1, -1]。")],-1),F=i('<details class="hint-container details"><summary>💡</summary></details><h2 id="binary-search-tree-二叉搜索树" tabindex="-1"><a class="header-anchor" href="#binary-search-tree-二叉搜索树" aria-hidden="true">#</a> <code>Binary Search Tree</code> - “二叉搜索树”</h2><h2 id="bfs-广度优先搜索" tabindex="-1"><a class="header-anchor" href="#bfs-广度优先搜索" aria-hidden="true">#</a> <code>BFS</code> - “广度优先搜索”</h2>',3),V={href:"https://leetcode.cn/problems/open-the-lock",target:"_blank",rel:"noopener noreferrer"},N=n("blockquote",null,[n("p",null,"四个圆形锁盘(数字为 0 ~ 9，初始为 0)，给定一组死锁数组和一个解锁密码，最小需要几步可以解锁成功?(不能经过死锁，每次只能转动一个锁盘，并且只能转动一次)")],-1),z=n("pre",null,[n("code",null,`  🌰
      输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
      输出：6
      解释：
      可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
      注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
      因为当拨动到 "0102" 时这个锁就会被锁定。
`)],-1),E={class:"hint-container details"},T=n("summary",null,"💡",-1),D=n("p",null,[s("【思路1】"),n("code",null,"BFS")],-1),H=n("p",null,[s("【思路2】双向 "),n("code",null,"BFS")],-1),I=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"openLock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" deadends"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Set"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},">")]),s(" visited "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HashSet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 记录已试过的密码"),s(`
        `),n("span",{class:"token class-name"},"Set"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},">")]),s(" deadSet "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HashSet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 
        `),n("span",{class:"token comment"},"// 将死锁转化为集合，便于判断"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" deadend "),n("span",{class:"token operator"},":"),s(" deadends"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            deadSet`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("deadend"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("visited"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"contains"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0000"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},">")]),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0000"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        visited`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0000"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" step "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" size "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"String"),s(" password "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("deadSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"contains"),n("span",{class:"token punctuation"},"("),s("password"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(` 
                    `),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 过滤掉死锁"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("password"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"equals"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                    `),n("span",{class:"token keyword"},"return"),s(" step"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 解锁成功"),s(`
                `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" next "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"nextPasswords"),n("span",{class:"token punctuation"},"("),s("password"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("visited"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"contains"),n("span",{class:"token punctuation"},"("),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
                    queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    visited`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            step `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"/// 根据密码获取下一个可以转动的密码数组"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"nextPasswords"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" password"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},">")]),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"wheel"),n("span",{class:"token punctuation"},"("),s("password"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"wheel"),n("span",{class:"token punctuation"},"("),s("password"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"/// 转动锁盘"),s(`
    `),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token function"},"wheel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" password"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"boolean"),s(" forward"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" chars "),n("span",{class:"token operator"},"="),s(" password"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toCharArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("forward"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 往前拨动"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("chars"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token char"},"'9'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                chars`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'0'"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                chars`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 往后拨动"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("chars"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token char"},"'0'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                chars`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'9'"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                chars`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"("),s("chars"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,`
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function G(J,K){const t=u("ExternalLinkIcon"),p=u("CodeTabs");return k(),d("div",null,[e(" more "),b,n("ul",null,[n("li",null,[n("a",h,[s("寻找循环的问题"),a(t)])])]),v,e(" 二分查找 "),n("ul",null,[n("li",null,[n("a",f,[s("🟢 704 - 二分查找"),a(t)]),_])]),n("details",w,[y,a(p,{id:"78",data:[{id:"java"}]},{title0:o(({value:c,isActive:l})=>[s("java")]),tab0:o(({value:c,isActive:l})=>[g]),_:1})]),e(" 搜索插入位置 "),n("ul",null,[n("li",null,[n("a",S,[s("🟢 35 - 搜索插入位置"),a(t)]),x])]),j,e("  "),n("ul",null,[n("li",null,[n("a",q,[s("🟢 278 - 第一个错误的版本"),a(t)]),B])]),L,e(" 在排序数组中查找元素的第一个和最后一个位置 "),n("ul",null,[n("li",null,[n("a",A,[s("🟢 34 - 在排序数组中查找元素的第一个和最后一个位置"),a(t)]),C])]),F,e(" 打开转盘锁 "),n("ul",null,[n("li",null,[n("p",null,[n("a",V,[s("🟠 752 - 打开转盘锁"),a(t)])]),N,z])]),n("details",E,[T,D,H,a(p,{id:"164",data:[{id:"java 解法1"},{id:"java 解法2"}]},{title0:o(({value:c,isActive:l})=>[s("java 解法1")]),title1:o(({value:c,isActive:l})=>[s("java 解法2")]),tab0:o(({value:c,isActive:l})=>[I]),tab1:o(({value:c,isActive:l})=>[P]),_:1})])])}const Q=r(m,[["render",G],["__file","0x02.search.html.vue"]]);export{Q as default};
