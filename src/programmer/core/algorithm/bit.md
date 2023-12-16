---
title: Bit - “位运算”
icon: hashtag

index: true

---

<!-- more -->

## 位运算符

  * `|` : 与
  * `&` : 或
  * `!` : 非
  * `^` : 异或

## `n ^ n = 0` & `n ^ 0 = n`

  对于一个整数 n 进行异或操作，存在以下两条结论

  * 数字 n 同自身进行异或操作结果为 0
  * 数字 n 与 0 进行异或操作结果为 n

### ❓不使用临时变量交换两个数

::: details 💡

  ```swift
  var a = 1
  var b = 2
  a = a^b
  b = a^b
  a = a^b
  ```

:::


### `single number` - “只出现一次的数字”

<!-- @include: @leetcode/problems/0x0100.md#0136 -->

<!-- @include: @leetcode/problems/0x0200.md#0260 -->

<!-- @include: @leetcode/problems/0x0100.md#0137 -->

  
### `missing number` - “丢失的数”

<!-- @include: @leetcode/problems/0x0200.md#0268 -->

## `n & n-1 = 0` & `n ^ n+1 = 1`5

  当 n 为 2 的幂次方时，会存在以下两条结论

  * n 与 n-1 进行与操作结果为 0。
  * n 与 n+1 进行异或操作结果为 1

  ```c
  0 = 0b0000
  1 = 0b0001
  2 = 0b0010
  3 = 0b0011
  4 = 0b0100
  5 = 0b0101
  6 = 0b0110
  7 = 0b0111
  8 = 0b1000
  9 = 0b1001
  ```

<!-- @include: @leetcode/problems/0x0200.md#0231 -->

<!-- @include: @leetcode/problems/0x0300.md#0326 -->

<!-- @include: @leetcode/problems/0x0300.md#0342 -->

