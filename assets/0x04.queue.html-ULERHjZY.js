import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as k,c as r,a as u,b as n,e as s,d as a,w as t}from"./app-BayOxrKR.js";const d={},m=n("p",null,[s("队列是一种先进先出的数据结构。主要包含两个操作，入队("),n("code",null,"enqueue"),s(")和出队("),n("code",null,"dequeue"),s(")。入队，在队列尾部添加元素；出队，在队列头部移除元素。")],-1),b=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),v={href:"https://github.com/apple/swift-collections/blob/main/Sources/DequeModule/Deque.swift",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"实现",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实现","aria-hidden":"true"},"#"),s(" 实现")],-1),y={href:"https://leetcode.cn/problems/implement-stack-using-queues",target:"_blank",rel:"noopener noreferrer"},w=n("blockquote",null,[n("p",null,"请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。")],-1),_=n("pre",null,[n("code",null,`  实现 MyStack 类：
      void push(int x) 将元素 x 压入栈顶。
      int pop() 移除并返回栈顶元素。
      int top() 返回栈顶元素。
      boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
`)],-1),h={class:"hint-container details"},q=n("summary",null,"💡",-1),x=n("p",null,"【思路】用两个队列轮流当做数据队列，每次入栈时，在有数据的队列添加数据；出栈时，将数据队列中的数据倒入另一个空队列中，不是全部倒入剩下一个，就是栈顶元素；返回栈顶元素时，也是剩一个，先出队列临时保存，并添加进入另一个队列，返回这个临时保存的值。",-1),I=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MyStack"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"var"),s(" queue1"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"var"),s(" queue2"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token comment"},"// 先将 queue1 中的多余数据倒入 queue2"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"queue1To2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("queue1"),n("span",{class:"token punctuation"},"."),s("count "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            queue2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("queue1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 先将 queue2 中的多余数据倒入 queue1"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"queue2To1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("queue2"),n("span",{class:"token punctuation"},"."),s("count "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            queue1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("queue2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token comment"},"// 入栈"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 在数据队列中添加数据"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" queue1"),n("span",{class:"token punctuation"},"."),s("isEmpty "),n("span",{class:"token punctuation"},"{"),s(`
            queue2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            queue1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 出栈"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"Int"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" queue1"),n("span",{class:"token punctuation"},"."),s("isEmpty "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"queue2To1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" queue2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"queue1To2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" queue1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 查询栈顶元素"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"top"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"Int"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" queue1"),n("span",{class:"token punctuation"},"."),s("isEmpty "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"queue2To1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" num "),n("span",{class:"token operator"},"="),s(" queue2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            queue1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` num
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"queue1To2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" num "),n("span",{class:"token operator"},"="),s(" queue1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            queue2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` num
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 栈是否为空"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"Bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
        queue1`),n("span",{class:"token punctuation"},"."),s("isEmpty "),n("span",{class:"token operator"},"&&"),s(" queue2"),n("span",{class:"token punctuation"},"."),s(`isEmpty
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 * Your MyStack object will be instantiated and called as such:
 * let obj = MyStack()
 * obj.push(x)
 * let ret_2: Int = obj.pop()
 * let ret_3: Int = obj.top()
 * let ret_4: Bool = obj.empty()
 */`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g={href:"https://leetcode.cn/problems/implement-queue-using-stacks",target:"_blank",rel:"noopener noreferrer"},T=n("blockquote",null,[n("p",null,"请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：")],-1),j=n("pre",null,[n("code",null,`  实现 MyQueue 类：
      void push(int x) 将元素 x 推到队列的末尾
      int pop() 从队列的开头移除并返回元素
      int peek() 返回队列开头的元素
      boolean empty() 如果队列为空，返回 true ；否则，返回 false
`)],-1),E={class:"hint-container details"},M=n("summary",null,"💡",-1),B=n("p",null,"【思路】类似两杯水倒水一样，一个栈用于入队列，一个栈用于出队列。",-1),F=n("div",{class:"language-swift line-numbers-mode","data-ext":"swift"},[n("pre",{class:"language-swift"},[n("code",null,[s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MyQueue"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"var"),s(" stack1"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"var"),s(" stack2"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token comment"},"// 将 stack1 中数据倒入 stack2"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"stack1To2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("stack1"),n("span",{class:"token punctuation"},"."),s("isEmpty"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("stack1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeLast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 将 stack2 中数据倒入 stack1"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"stack2To1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("stack2"),n("span",{class:"token punctuation"},"."),s("isEmpty"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("stack2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeLast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token comment"},"// 入队列"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token omit keyword"},"_"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"stack2To1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        stack1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 出队列"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"Int"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"stack1To2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" stack2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeLast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 查询队头元素"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"Int"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"stack1To2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" stack2"),n("span",{class:"token punctuation"},"["),s("stack2"),n("span",{class:"token punctuation"},"."),s("count "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 队列是否为空"),s(`
    `),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function-definition function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token class-name"},"Bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
        stack1`),n("span",{class:"token punctuation"},"."),s("isEmpty "),n("span",{class:"token operator"},"&&"),s(" stack2"),n("span",{class:"token punctuation"},"."),s(`isEmpty
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 * Your MyQueue object will be instantiated and called as such:
 * let obj = MyQueue()
 * obj.push(x)
 * let ret_2: Int = obj.pop()
 * let ret_3: Int = obj.peek()
 * let ret_4: Bool = obj.empty()
 */`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function L(S,C){const e=i("ExternalLinkIcon"),l=i("CodeTabs");return k(),r("div",null,[m,u(" more "),b,n("ul",null,[n("li",null,[n("a",v,[s("Swift - Deque"),a(e)])])]),f,u(" 🟢 用队列实现栈 "),n("ul",null,[n("li",null,[n("p",null,[n("a",y,[s("🟢 225 - 用队列实现栈"),a(e)])]),w,_])]),n("details",h,[q,x,a(l,{id:"36",data:[{id:"swift"}]},{title0:t(({value:o,isActive:c})=>[s("swift")]),tab0:t(({value:o,isActive:c})=>[I]),_:1})]),u(" 🟢 用栈实现队列 "),n("ul",null,[n("li",null,[n("p",null,[n("a",g,[s("🟢 232 - 用栈实现队列"),a(e)])]),T,j])]),n("details",E,[M,B,a(l,{id:"62",data:[{id:"swift"}]},{title0:t(({value:o,isActive:c})=>[s("swift")]),tab0:t(({value:o,isActive:c})=>[F]),_:1})])])}const Q=p(d,[["render",L],["__file","0x04.queue.html.vue"]]);export{Q as default};
