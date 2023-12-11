---
title: 多线程
icon: hashtag

index: true

---

<!-- more -->

## 线程安全

> `atomic` 线程安全吗？

> NSMutableArray 的线程安全性？

## 

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

## `iOS` 中如何创建一个常驻线程？