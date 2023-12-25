---
title: Runtime
icon: hashtag

index: true

---

  > 运行时

<!-- more -->

### ❓`OC` 的对象模型

::: details 💡


> Objective-C 类图

![objc-class-diagram](media/objc-class-diagram.jpg)


:::

### ❓`isa` 是什么？

::: details 💡

  > `isa`： `OC` 对象的一个指针，它是每个 `OC` 对象的第一个成员变量，用于指向该对象的类对象。
    
  `Objective-C` 的对象模型中，对象分为实例对象、类对象、元类对象，这三种对象都含有 `isa` 指针。

  - 实例对象: 实例对象的`isa`指向它的类对象；实例对象主要存储实例变量的值。

  - 类对象: 类对象的`isa`指向元类对象；类对象主要存储实例方法、属性、以及遵守的协议等信息。

  - 元类对象: 元类对象的`isa`指向自身；元类对象主要存储类方法等信息。

  当发送消息给一个对象时，`runtime` 通过这个对象的 `isa` 指针找到它的类对象，然后在类对象的方法列表中查找对应的方法进行调用。

:::

### 讲一下对象，类对象，元类，跟元类结构体的组成以及他们是如何相关联的？

### 为什么要设计 `metaclass`？

### 为什么对象方法没有保存的对象结构体里，而是保存在类对象的结构体里？

### `class_copyIvarList` vs `class_copyPropertyList`

### `class_ro_t` vs `class_rw_t`

### 能否向编译后得到的类中增加实例变量？能否向运行时创建的类中添加实例变量？

### 对象方法 与 类方法存放在哪？

### `class`、`objc_getClass`、`object_getclass` 三个方法的区别？

### 在运行时创建类的方法 `objc_allocateClassPair` 的方法名尾部为什么是pair（成对的意思）？

### ❓`super` 是什么？

::: details 💡

  `super` 并不是一个指针，在 `OC` 进行消息调用时，其实是有两个隐藏参数的，一个是接收者(receiver)，一个是方法选择器(selector)。
  
  常见的 `self` 表示的是接收者。而 `super` 其实是一个编译器标示符，当发送给 `super` 一个消息时，调用者仍然是 `self` ，但是运行时会从当前类的父类开始查找方法。
  
> 以下代码输出？

  ```objc
  @interface Animal
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
  
  也就是说 `super` 并不会改变消息的接收者，所以当我们调用 `[super class]` 时，虽然是从父类开始查找 `class` 方法，但是方法的接收者依然是 `self` 本身，其类别自然是当前类本身。这也是为什么我们再调用 `[super class]` 时还会返回 `Dog` 类的原因。

:::

  > `super` 的底层实现？

::: details 💡

  `OC` 中 `super` 的实现是通过 `runtime` 的 `objc_msgSendSuper` 和 `objc_msgSendSuper_stret` 两个函数来完成的。具体来说，当编译器遇到 `[super method]` 这种形式的调用时，会转化为 `objc_msgSendSuper(super_cls, sel)` 的形式。

  ```c
  // super 结构体
  struct objc_super {
    __unsafe_unretained id receiver;        // 消息的接收者
    __unsafe_unretained Class super_class;  // 父类(开始查找的类)
  };
  // objc_msgSendSuper
  void objc_msgSendSuper(struct objc_super *super, SEL op, ...)
  ```

:::

### ❓`weak` 的底层实现？

### ❓`OC` 运行时在工程中的有过实践运用吗？