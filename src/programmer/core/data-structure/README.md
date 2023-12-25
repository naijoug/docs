---
title: 数据结构
icon: hashtag

index: false

---

  大多数据编程语言来说，基础的数据类型就是 `int`、`float`、`double`、`char`、`string`、`bool`。基础数据结构就是：数组、链表。高级一点的数据结构有：栈、队列、集合、哈希表。再复杂一些的有：二叉树、图。
  
  宏观一点理解，数据结构是用来描述这些基础数据类型内存布局，也可以理解为是基础数据类型的容器。而最为底层的数据结构就是数组和链表，数组是描述了一块存储相同数据类型的连续内存空间，而链表则是存储数据类型并通过指针连接的非连续内存空间。而且其它的数据结构都是基于数组和链表来实现的一种数据结构的描述。例如栈、队列、二叉树、图，可以通过数组实现，也可以通过链表实现；哈希表则是通过数组和链表结合实现。

<!-- more -->

## 数据结构一览

- 线性表 (Linear List) : 数据的排列特征是按照一条线排列。数组、链表、栈、队列。栈和队列是操作受限的线性表。
- 非线性表 : 数据排布非线性结构。二叉树、堆、图。

| data structure | description
| -- | --
| array                     | 数组
| linked list               | 链表
| binary tree / tree        | 二叉树 / 树
| graph                     | 图
| stack / queue             | 栈 / 队列
| hash table                | 哈希表
| heap (priority queue)     | 堆 (优先级队列)
| binary search tree (BST)  | 二叉搜索树
| trie                      | 前缀树 (字典树)
| disjoint set              | 并查集
| bloom filter              | 布隆过滤器