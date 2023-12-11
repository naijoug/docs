---
title: 多线程
icon: hashtag

index: true

---

<!-- more -->

## 线程安全

### `atomic` 线程安全吗？

### 如果让你来实现属性的 `atomic`，如何实现？

### `NSMutableArray` 的线程安全性？

### `OC` 中的锁有哪些？
    
  > 自旋和互斥对比？

  > 用 `C/OC/C++` 实现自旋或互斥？

### “看现象”

> 以下代码输出是什么？

```objc
NSLog(@"1");
dispatch_async(dispatch_get_global_queue(0, 0), ^{
    NSLog(@"2");
    [self performSelector:@selector(test) withObject:nil afterDelay:10];
    NSLog(@"3");
});
NSLog(@"4");
- (void)test
{
    NSLog(@"5");
}
```

## `GCD`

### `GCD` 执行原理？

### `GCG` 本质是什么？

## 线程设计

### `iOS` 中如何创建一个常驻线程？

### `NStimer` 定时器准确吗？如果不准确该怎样实现一个精确的 `NSTimer`? 

  > iOS 计时器都有哪些，分别存在什么问题？