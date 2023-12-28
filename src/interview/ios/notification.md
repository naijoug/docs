---
title: 通知机制
icon: hashtag

index: true

---

<!-- more -->

### `NSNotification` 实现原理？

### 通知的发送时同步还是异步？

### 通知的发送和接受是在同一个线程里吗？如何异步发送消息？

### `NSNotificationQueue` 是异步还是同步发送？在哪个线程响应？

### `NSNotificationQueue` 和 `runloop`的关系？

### 如何保证通知接收的线程在主线程？

### 页面销毁时不移除通知会崩溃吗？

### 多次添加同一个通知会是什么结果？多次移除通知呢？

### 下面代码可以接受通知吗？

```objc
NSNotificationCenter *center = [NSNotificationCenter defaultCenter];
// 发送通知
[center addObserver:self selector:@selector(handleNotification:) name:@"One" object:@1];
// 接收通知
[center postNotificationName:@"One" object:nil];
```