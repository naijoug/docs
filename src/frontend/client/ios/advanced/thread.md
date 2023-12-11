---
title: 多线程
icon: hashtag

index: true
order: 8

---

## OC 中为什么使用 `nonatomic` 而非 `atomic`？

## OC 中的 `atomic` 修饰符保证线程安全吗？

## 如何保证线程安全，与 `atomic` 有什么区别？

## `GCD` vs `NSOperation`

  `NSOperation` 是对 `GCD` 的封装，对比 `GCD` 多了添加任务依赖、优先级设置的功能。
  
  `GCD` (Grand Central Dispatch) : 直译为大中央调度，是一种多线程并发解决方案。底层使用线程池来管理线程，屏蔽了程序创建线程的工作。只需要指定任务运行队列(串行或并行队列)，以及任务运行方式(同步或异步)。
  
  `GCD` 中的队列
   * 主队列 : 串行队列
   * 全局队列 : 并行队列
   * 自定义队列 : 串行或并行队列