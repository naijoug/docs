---
title: KVC & KVO
icon: hashtag

index: true
order: 4

---

<!-- more -->

## `KVC`

  > `KVC (Key Value Coding)` : 是 `OC` 的特性，可以直接通过键名访问属性和属性赋值。通过 `NSObject` 的扩展(`NSKeyValueCoding`)来实现，所有继承 `NSObject` 的类型都可以使用 `KVC` 特性。

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

### 若一个类有实例变量 `NSString *_foo`，调用 `setValue:forKey:` 时，可以以 `foo` 还是 `_foo` 作为 `key`？

### `KVC` 成员变量会不会触发？

### `KVC` 的 `keyPath` 中的集合运算符如何使用？

### `KVC` 和 `KVO` 的 `keyPath` 一定是属性么？

### `KVC` 有哪些实际应用？
  
  * 动态取值或赋值
  * 可以读取或修改类的私有属性

### `KVC` 的底层实现？

------

## `KVO`

  > `KVO (Key Value Observer)` : 是一种观察者模式的实现。
  
### `addObserver:forKeyPath:options:context:`各个参数的作用分别是什么，`observer` 中需要实现哪个方法才能获得 `KVO` 回调？

### `KVO` 的优缺点？

### 如何手动触发一个 `value` 的 `KVO`？

### 如何手动关闭 `KVO`?

### 通过 `KVC` 修改属性会触发 `KVO` 吗？

### 如何取消系统默认的 `KVO` 并手动触发（给 `KVO` 的触发设定条件：改变的值符合某个条件时再触发`KVO`）？
  
### 如何关闭默认的 `KVO` 的默认实现，并进入自定义的 `KVO` 实现？
  
### `KVO` 失效了怎么办？

### `KVO` 的底层实现？

### `KVO` 为什么要创建一个子类来实现？

### 哪些情况下会引发 `KVO` 崩溃，怎么防护？