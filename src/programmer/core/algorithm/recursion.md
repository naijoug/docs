---
title: Recursion - “递归”
icon: hashtag

index: true

---

<!-- more -->

  
## 递归的本质 
  
  中文名“递归”这两个字很好的诠释了其核心操作“递 + 归”。
  
  递的过程就是一层一层地调用递归函数，归的过程就是触发到边界条件之后进行每一层的递归函数返回，这一去一来的过程就是递归。
  
  递归的本质是借助于系统的内存管理系统提供的栈实现，递的过程中会将该层函数调用的临时变量进行入栈操作，归的过程会将保存的临时变量进行出栈操作，并进行改层函数最终结果计算返回。
  
## 递归问题

> 递归求解的三要素
 
  * 求解问题可以分解问子问题
  * 求解问题与子问题具有相同的求解思路
  * 存在递归终止条件
  
> 递归的弊端

  * 递归层数较深，会照成堆栈溢出
  * 递归过程中会存在重复计算
  * 空间复杂度高，函数调用耗时
  
> 尾递归

  尾递归是在进行递归代码编写时，将递归的调用操作作为函数的最后一个操作直接。 这个时候依赖编译器的“尾调用优化”(Tail Call Optimization) 会将递归代码优化为迭代代码。编译的优化的关键在于函数的最后一步就是递归调用，这个时候就不需要新开辟栈，直接将控制器和调用交个调用函数。
  
  尾递归的优化是编译器的特性，如果编程语言的编译器不支持“尾调用优化”，那么尾递归写法和常规递归也就没有区别了。

  尾递归的写法其实是一种自底向上的一种写法，使用的迭代的思维，需要将子问题的求解结果，从边界情况一直向上传递。从代码理解成面来讲，如果想要使用尾递归优化，还不如直接将递归代码转化为迭代代码清晰。并且尾递归的优化依赖编程语言的编译器，并不一定是百分百有效。

  ```swift
  // 斐波纳契 : 0,1,1,2,3,5,8
  //  f(n) = f(n-1) + fn(n-2)
  func fib(_ n: Int) -> Int {
      guard n > 1 else { return n }
      return f(n - 1) + f(n - 2)
  }
  // 尾递归优化
  func fibTail(_ n: Int, current: Int = 0, next: Int = 1) -> Int {
      guard n != 0 else { return current }
      return fibTail(n - 1, current: next, next: current + next)
  }
  // 迭代
  func fibTraverse(_ n: Int) -> Int {
      guard n > 1 else { return n }
      var pre = 0
      var current = 1
      for _ in 2...n {
           let next = pre + current
           pre = current
           current = next
      }
      return current
  }
  ```

