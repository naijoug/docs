---
title: LCR
icon: hashtag

index: true

---

<!-- more -->

## 126

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