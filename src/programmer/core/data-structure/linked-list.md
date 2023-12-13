---
title: Linked List - “链表”
icon: hashtag

index: true
order: 2

---

<!-- more -->


## `Reverse Linked List` - “反转链表”

- [LeetCode 206](https://leetcode.cn/problems/reverse-linked-list)
  > 通过单链表的头结点 head 进行反转链表，返回反转后的链表。
  
::: details 💡

【思路】

:::

- 进阶版 [LeetCode 92](https://leetcode.cn/problems/reverse-linked-list-ii/)
  > 通过单链表的头结点 head 和两个整数 left 和 right (left <= right)，反转链表从 left 到 right 位置的链表节点，返回反转后的链表。

::: details 💡
:::

- 再进阶版
  > 如果使用迭代，上面两个题应该怎么处理？

::: details 💡
:::


## `Linked List Cycle` - “环形链表”

  环形链表 : 表示链表存在首位连接的情况，形成一个环状结构。

- [LeetCode 141](https://leetcode.cn/problems/linked-list-cycle)
  > 判断单链表是否有环？

::: details 💡

【技巧】使用快慢指针，fast 指针每次走两步，slow 指针每次走一步，如果两个指针相遇，则表明链表有环。如果没有相遇，fast 直接走到链表最后 nil 空指针，则表明链表没有环。
  
【原理】 

:::

- 进阶版 [LeetCode 142](https://leetcode.cn/problems/linked-list-cycle-ii) 
  > 求环形链表入环位置的节点？

::: details 💡

【结论】相遇点 ~ 连接点 = 头指针 ~ 连接点

  数学公式推导

:::

- 延伸版
  > 求环形链表的环长？

::: details 💡

【思路1】slow 指针视角，记录第一次相遇点位置，之后使用计数器记录步长，当 slow 指针再次走到该位置时，则计数器步长就是环长。

【思路2】fast 指针视角，由于 fast 刚好比 slow 指针多走一倍，所以当两个指针再次相遇时，则 fast 刚好走了环长的两倍。

:::

  
  
  
  