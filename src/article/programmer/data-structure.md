---
title: “数据结构”那些事
icon: hashtag

index: true

---

<!-- more -->

  大多数据编程语言来说，基础的数据类型就是 `int`、`float`、`double`、`char`、`string`、`bool`。基础数据结构就是：数组、链表。高级一点的数据结构有：栈、队列、集合、哈希表。再复杂一些的有：二叉树、图。
  
  宏观一点理解，数据结构是用来描述这些基础数据类型内存布局，也可以理解为是基础数据类型的容器。而最为底层的数据结构就是数组和链表，数组是描述了一块存储相同数据类型的连续内存空间，而链表则是存储数据类型并通过指针连接的非连续内存空间。而且其它的数据结构都是基于数组和链表来实现的一种数据结构的描述。例如栈、队列、二叉树、图，可以通过数组实现，也可以通过链表实现；哈希表则是通过数组和链表结合实现。
  
## 数据结构到底是什么？

- 线性表 (Linear List) : 数据的排列特征是按照一条线排列。数组、链表、栈、队列。栈和队列是操作受限的线性表。
- 非线性表 : 数据排布非线性结构。二叉树、堆、图。

| Data Structure | 说明
| -- | --
| Array             | 数组
| LinkedList        | 链表
| Stack / Queue     | 栈 / 队列
| BinaryTree / Tree | 二叉树 / 树
| Graph             | 图
| HashTable         | 哈希表
| Set / DisjointSet | 集合 / 并查集 
| Trie              | 字典树
| BloomFilter       | 布隆过滤器

## `Array` - “数组”

- [Swift Array](https://github.com/apple/swift/blob/swift-DEVELOPMENT-SNAPSHOT-2023-10-30-a/stdlib/public/core/Array.swift)
- [NSArray](https://github.com/apple/swift-corelibs-foundation/blob/main/Sources/Foundation/NSArray.swift)

> 为什么大部分编程语言中的数组下标都是从 0 开始？
    
  这个与数组的结构特性和内存寻址有关系。数组是一块存储相同类型数据的连续内存空间，而数组的指针或引用是指向数组的一个元素的。访问数组其它位置的元素就是计算其位置的指针地址，如果第一元素下标为 0，则寻址公式为：`a[i] = a0 + i * dataSize`。如果下标是从 1 开始，则寻址公式为：`a[i] = a1 + (i - 1) * dataSize`。可以看出如果下标为 0，寻址公式少了一次减法运算，提高了数组的访问效率。
  
> 为什么数组访问效率优于链表？
  
  归根到底是因为数组分配的一块连续内存。原因可以从两方面分析。其一是数组的访问的可以直接通过下标计算出元素地址，到达了 `O(1)` 的时间复杂度，而链表访问数据需要遍历整个链表时间复杂度为 `O(n)`。其二是 `CPU` 的缓存机制，因为 `CPU` 访问数据时为了提高效率，每次读取数据时并不是只读指定地址内存，而是读取一个内存块保存到 `CPU` 缓存中。以数组来说会将数组后面的数据以加载到 `CPU` 缓存中，当再次读取数组元素时会直接中缓存中读取。
  
## `Linked List` - “链表”

  链表是将一堆零散的内存空间串联起来的数据结构，不需要内存空间连续。链表的数据结构，除了存储数据外，还需存储指向下一个节点的指针。
  
- 单链表
- 双向链表
- 循环链表

> 数组可以实现链表吗？
 
  可以使用两个数组实现。一个数据数组，一个节点数组(对应数据数组的索引，值为下一个节点的索引)。

> 带头链表的好处？
  
  带头链表可以简化链表的添加、删除操作。如果是不带头链表，添加时需要判断链表为空的情况，删除时需要判断链表仅剩一个节点的情况。
  
  * 不带头链表 : 链表头节点指向链表的第一个数据节点。链表为空时，头结点为空。
  * 带头链表 : 会有一个不包含数据的节点，头结点一直指向这个节点。链表为空时，也会包含这个头结点。
  
## `Stack` - “栈”

  栈是一种先进后出的数据结构，主要包含两个操作，入栈(`push`)和出栈(`pop`)。入栈，在栈顶添加元素；出栈，在栈顶移除元素。
  
> 栈的实现？
  
  栈的实现核心是通过维护栈顶指针来进行栈操作。
  
  * 顺序栈 : 使用数组实现栈     
  * 链式栈 : 使用链表实现栈   

> 栈有哪些使用场景？

  * 函数调用栈 : 函数调用时，在函数作用域内的局部变量，数据的内存分配刚好符合栈先进先出的特性。
  * 表达式求值
  * 括号匹配
  * 浏览器的前进和后退功能

## `Queue` - “队列”

  队列是一种先进先出的数据结构。主要包含两个操作，入队(`enqueue`)和出队(`dequeue`)。入队，在队列尾部添加元素；出队，在队列头部移除元素。
  
  - [Swift - Deque](https://github.com/apple/swift-collections/blob/main/Sources/DequeModule/Deque.swift)
  
> 队列的实现？
  
  堆列的实现核心是通过队头指针和队尾指针来进行队列操作。
  
  * 顺序队列 : 使用数组实现队列
  * 链式队列 : 使用链表实现队列

> 高级队列
  
  * 循环队列 : 一般使用数组实现，解决的数组队列的在删除数据时的数据迁移问题，在实际应用广泛。
  * 阻塞队列 : 在队列操作中加入阻塞逻辑就是阻塞队列。入队时如果队列已满则阻塞，等待队列有空位置再入队；出队时如果队列为空则阻塞，等队列有数据时再出队。“生产者-消费者”就是基于阻塞队列实现。
  * 并发队列 : 多线程的情况下会有多个线程同时访问队列的情况，就会存在线程安全问题，而加入解决多线程访问安全问题的队列的就是并发队列。
    - 解决多线程并发最普遍的解决方案，在入队操作和出队操作时，进行加锁。
    - 基于数组的循环队列 + `CAS` 原子操作就可以高效的实现并发队列。
  
> 队列有哪些使用场景？
  
  * 线程池
  * 数据库连接池
  * (分布式)消息队列 : `kafaka` 
  
## `Hash Table` - “哈希表”

- [NSDictionary](https://github.com/apple/swift-corelibs-foundation/blob/main/CoreFoundation/Collections.subproj/CFDictionary.c)
- [Swift- Dictionary](https://github.com/apple/swift/blob/main/stdlib/public/core/Dictionary.swift)

### `Ordered Hash Table` - “有序哈希表”

- [Swift - OrderedDictionary](https://github.com/apple/swift-collections/blob/main/Sources/OrderedCollections/OrderedDictionary/OrderedDictionary.swift)
- [Java - LinkedHashMap](https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/LinkedHashMap.java)
- [Python - OrderedDict](https://github.com/python/cpython/blob/main/Lib/collections/__init__.py#L83)

## `Binary Tree` - “二叉树”

> `Balanced Binary Tree` - “平衡二叉树”

  平衡二叉树需要保证左右子树高度差不超过 1。
    
  常见的平衡二叉树
  
  * `AVL` 二叉树 (名称来源于两位作者名 G. M. Adelson-Velsky 和 E. M. Landis)
  * 红黑树

> 搜索二叉树

## `Heap` - “堆”

- [Swift - Heap](https://github.com/apple/swift-collections/blob/main/Sources/HeapModule/Heap.swift)
