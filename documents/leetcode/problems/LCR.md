---
title: LCR
icon: hashtag

index: true

---

<!-- more -->

## 126 ✅

// #region 126

- [🟢 126 - 斐波那契数](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof)
    > 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

        F(0) = 0，F(1) = 1
        F(n) = F(n - 1) + F(n - 2)，其中 n > 1
        给定 n ，请计算 F(n) 。

        答案需要取模 1e9+7(1000000007) ，如计算初始结果为：1000000008，请返回 1。

::: details 💡

【思路】递归 + dp 备忘录，读题要仔细，结果需要取模。

::: code-tabs

@tab dart
```dart
class Solution {
  final Map<int, int> dp = {};  
  int fib(int n) {
    if (n == 0 || n == 1) return n;
    if (dp[n] != null) return dp[n]!;
    // 看清题目：答案需要取模 1000000007
    final fn = (fib(n - 1) + fib(n - 2)) % 1000000007;
    dp[n] = fn;
    return fn;
  }
}
```

:::

// #endregion 126

------

## 136 ✅

// #region 136

- [🟢 136 - 删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/)
    > 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
    > 返回删除后的链表的头节点。

        🌰
        输入: head = [4,5,1,9], val = 5
        输出: [4,1,9]
        解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
        示例 2:
        
        🌰
        输入: head = [4,5,1,9], val = 1
        输出: [4,5,9]
        解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
        
        说明：
        题目保证链表中节点的值互不相同

::: details 💡

【思路】核心点在于需要找到要删除节点的前一个节点

::: code-tabs

@tab dart 双指针
```dart
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? deleteNode(ListNode? head, int val) {
    final dummy = ListNode();
    dummy.next = head;
    // 思路：遍历找改值节点，
    ListNode? prev = dummy; // 指向遍历节点的前一个节点
    ListNode? node = dummy.next;
    while (node?.val != val) {
        prev = prev?.next;
        node = node?.next;
    }
    // 前一个节点指向要删除的下一个节点
    prev?.next = node?.next;
    return dummy?.next;
  }
}
```

@tab dart 单指针
```dart
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? deleteNode(ListNode? head, int val) {
    // 带头节点，解决需要删除头结点的情况
    final dummy = ListNode();
    dummy.next = head;
    // 思路：遍历找到目标值的前一个节点
    ListNode? node = dummy;
    while (node?.next?.val != val) {
        node = node?.next;
    }
    // 前一个节点指向要删除的下一个节点
    node?.next = node?.next?.next;
    return dummy?.next;
  }
}
```

:::

// #endregion 136

------

## 147

// #region 147

- [🟢 147 - 最小栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof)
    > 请你设计一个最小栈 。它提供 `push，pop，top` 操作，并能在常数时间内检索到最小元素的栈。

        实现 MinStack 类:
        
        MinStack() 初始化堆栈对象。
        void push(int val) 将元素val推入堆栈。
        void pop() 删除堆栈顶部的元素。
        int top() 获取堆栈顶部的元素。
        int getMin() 获取堆栈中的最小元素。

::: details 💡

【思路】入栈时，通过使用一个列表保存栈中值对应的最小值，出栈时同时进行移除。

::: code-tabs

@tab dart
```dart
class MinStack {

  List<int> _list = [];
  // 使用一个最小值列表保存栈中值对应的最小值
  List<int> _minList = [];
 
  MinStack() {}
  
  void push(int x) {
    _list.add(x);
    if (_minList.isEmpty) {
        _minList.add(x);
    } else {
        _minList.add(min(_minList.last, x));
    }
  }
  
  void pop() {
    _list.removeLast();
    _minList.removeLast();
  }
  
  int top() => _list.last;
  
  int getMin() => _minList.last;
}
```

:::

// #endregion 0000