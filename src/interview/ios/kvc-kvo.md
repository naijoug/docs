---
title: KVC & KVO
icon: hashtag

index: true
order: 4

---

<!-- more -->

## `KVC`

> `KVC`(Key Value Coding) : 是 `OC` 的特性，可以直接通过键名访问属性和属性赋值。是通过 `NSObject` 的扩展(`NSKeyValueCoding`)来实现，所有继承 `NSObject` 的类型都可以使用 `KVC` 特性。

```objc
// 通过 key 读取值
- (nullable id)valueForKey:(NSString *)key;                          
//通过 key 来赋值
- (void)setValue:(nullable id)value forKey:(NSString *)key;          
// keyPath 读取值
- (nullable id)valueForKeyPath:(NSString *)keyPath;                  
// keyPath 来赋值
- (void)setValue:(nullable id)value forKeyPath:(NSString *)keyPath;  
```

### ❓`KVC` 机制是如何通过 `key` 找到 `value` ？



### `KVC` 有哪些实际应用？
  
  * 动态取值或赋值
  * 可以读取或修改类的私有属性

### `KVC` 的底层实现？

## `KVO`

> `KVO`(Key Value Observer) : 是一种观察者模式的实现。
  
### KVO为什么要创建一个子类来实现？

  
### `KVO` 失效了怎么办？

### `KVO` 的底层实现
  