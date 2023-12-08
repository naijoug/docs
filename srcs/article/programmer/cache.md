---
title: “缓存”那些事
icon: hashtag

index: true

---

<!-- more -->

## 缓存淘汰策略

- `FIFO`(First In First Out) : 先进先出策略，队列逻辑。新进入缓存的，缓存满时先移除。
    > 数据结构 : 队列
    > 实现逻辑 :
    >   - 添加数据时
            * 缓存未满时，直接加入队列尾部
            * 缓存已满时，将队列头部数据出队列移除，在队列尾部加入数据
    >   - 移除数据时，遍历队列，从队列中移除指定数据
    
- `LRU`(Least Recently Used) : 最近最少使用策略。最早访问点数据，缓存满时先移除。
    > 数据结构 : 链表 (+ 哈希表)
    > 实现逻辑 : 链表头部为最近使用数据，链表尾部为最近最少使用数据
    >   - 添加数据时
            * 先遍历缓存判断数据是否已在缓存中，如果已在缓存中，将该节点数据交换到链表头部。
            * 如果不在缓存中。如果缓存已满，则将缓存尾部数据移除。最后将新添加数据添加到链表头部。
    >   - 移除数据时，遍历链表，从链表中移除指定元素
    >   - 查询数据时
            * 遍历遍历，查询指定缓存元素。时间复杂度为 `O(n)`
            * 缓存查询优化方案：为了提高缓存效率，则可以使用哈希表，将链表中的每个节点地址保存在哈希表中。这样查询元素时，可以将查询数据时间复杂度优化到 `O(1)`。
        
- `LFU`(Least Frequently Used) : 最少使用策略。使用频率越少的数据，缓存满时先移除。  

## iOS 中的 `NSCache`

- [NSCache](https://github.com/apple/swift-corelibs-foundation/blob/main/Sources/Foundation/NSCache.swift)

实现原理：链表 + 哈希表

## 如何设计一个高效、线程安全的缓存?

## reference

- [2017-03-17 缓存设计](https://xesam.github.io/cache-1)
- [2017-03-17 缓存那些事](https://tech.meituan.com/2017/03/17/cache-about.html)
- [2016-07-27 缓存更新的套路](https://coolshell.cn/articles/17416.html)
- [2015-10-26 YYCache 设计思路](https://blog.ibireme.com/2015/10/26/yycache)