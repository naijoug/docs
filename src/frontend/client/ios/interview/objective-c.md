---
title: Objective-C
icon: hashtag

index: true

---

<!-- more -->

## `OC` 设计理念

  `OC` 底层是使用 `C/C++` 实现。定一个继承 `NSObject` 的类，这个类底层使用 `C` 语言中的 `struct` 结构体来实现的。 

### `OC` 的动态性

### 类结构体的组成，`isa` 指针指向了什么？

### `OC` 底层方法列表的数据结构是什么？

### `id`、`nil`、`NULL`

### `+load` 与 `+initialize` 的区别

  - `+load` : 
  - `+initialize` :
  
### `@Property` 本质是什么？
  
  >  assign, weak, copy 区别？
  
### `NSDictionary` 大致实现原理

### `OC` 中的三种字符串？ `Tagged Pointer` 了解吗？ 

## `block`
  
### `block` 与 函数指针
  
### `block` 底层实现？

  `block` 底层是使用结构体实现的。
  
  根据内存分区不同，分为三种 `block`
    
   * `__NSGlobalBlock__` : 全局 `block`，类似全局静态变量，存放在静态区 
   * `__NSStackBlock__` : 栈区 `block`，保存在栈区
   * `__NSMallocBlock__` : 堆区 `block`，保存在堆区

## `Category`

- Category : 只能添加方法，不能添加实例变量(除非通过关联对象)。分类中的方法是运行时添加到方法列表中的。
- Extension : 可以添加方法和计算属性，也可以添加构造方法，也可以实现以一个协议。编译时已经确定，不支持动态添加方法。

### 如果分类中添加与类相同的方法签名会发生什么？
  
  分类中的方法是运行时添加到方法列表中，并且是添加中已有方法的前面。所以当分类与原类中的方法相同时，分类中的方法会优先调用，覆盖掉原类中的方法。
 
### 分类是如何实现的？它为什么会覆盖掉原来的方法？
 
### 分类中如何添加属性？
 
## `msgSend`
  
> 以下代码输出？

```objc
@interface Animail
@end
@interface Dog : Animal
@end
@implementation Dog
- (instancetype)init {
    self = [super init];
    if (self) {
        NSLog(@"%@", NSStringFromClass([self class]));
        NSLog(@"%@", NSStringFromClass([super class]));
    }
    return self;
}
@end
```

## `runtime`

### `runtime` 如何通过 `selector` 找到对应的 `IMP` 地址

### isa, 消息转发, 弱引用表

## `runloop`

### `runLoop` 有几种事件源？有几种模式？

### `runloop` 内部实现逻辑？