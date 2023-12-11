---
title: Search - “搜索”
icon: hashtag

index: true

---

<!-- more -->

## 顺序搜素



```java
```

## `Binary Search` - “二分搜索”

  二分搜索的前提条件是有序的数组，依赖数组的有序性。每次通过搜素区间的中间元素判断大小，从而缩小一半的搜索范围，搜索的范围成指数级别缩小。

- [LeetCode 704](https://leetcode.cn/problems/binary-search)
    > 给定一个升序数组和一个目标值，如果目标值在数组中返回目标值索引，如果不存在返回 -1。

    ```java
    
    ```
    
- 变形版 [LeetCode 35](https://leetcode.cn/problems/search-insert-position)
    > 给定一个升序数组和一个目标值，如果目标值在数组中存在返回目标值索引，如果不存在返回插入位置索引。
    
    ```java
    
    ```

- 升级版 [LeetCode 278 : 第一个错误的版本](https://leetcode.cn/problems/first-bad-version)
    > 软件已经发行版本号 [1, 2, 3, ..., n]，通过函数 `bool isBadVersion(version)` 可以判断该版本是否发生该错误，现在需要查找到第一个发生该错误的版本。

    ```java
    
    ```

- 进阶版 [LeetCode 34 : 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array)
    > 给定一个非递减数组和一个目标值，查找该目标值在数组中的开始位置和结束位置，如果存在则返回 [start, end]，如果不存在返回 [-1, -1]。
    
    ```java
    class Solution {
        public int[] searchRange(int[] nums, int target) {
            
        }
    }
    ```

## `Binary Search Tree` - “二叉搜索树”

