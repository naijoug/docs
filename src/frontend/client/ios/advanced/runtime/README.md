---
title: runtime
icon: hashtag

index: false

---

> 参考源码 
> - [objc-876](https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime)
> - [libmalloc-409.40.6](https://github.com/apple-oss-distributions/libmalloc/tree/libmalloc-409.40.6)

<!-- more -->

## reference

- [objc4](https://github.com/apple-oss-distributions/objc4)
- [A debuggable objc runtime](https://github.com/RetVal/objc-runtime)
- [iOS-Runtime-Headers](https://github.com/nst/iOS-Runtime-Headers) : iOS 运行时头文件(包括私有 API)
    > iOS Objective-C headers as derived from runtime introspection
- [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide)
- [Aspects](https://github.com/steipete/Aspects)
    > Delightful, simple library for aspect oriented programming in Objective-C and Swift.

## `runtime` 是什么

[Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide)

> The Objective-C language defers as many decisions as it can from compile time and link time to runtime. Whenever possible, it does things dynamically. 
> This means that the language requires not just a compiler, but also a runtime system to execute the compiled code. 
> The runtime system acts as a kind of operating system for the Objective-C language; it’s what makes the language work. 
>
> Objective-C 语言尽可能地将许多决策从编译时间和链接时间推迟到运行时。它就会尽可能地动态地执行任务。
> 这意味着该语言不仅需要一个编译器，而且还需要一个运行时系统来执行编译过的代码。
> 运行时系统就像是 Objective-C 语言的操作系统；这是语言运行工作的原理所在。
  
  这段说明可以分三段理解
  
  * `OC` 的设计者为了让它具备动态能力，所以将只要可以动态处理的任务都迁移到运行时。
  * 编译器只完成了部分代码编译链接工作，还剩一部分需要运行时处理，所以需要设计这个 `runtime` 来进行代码的动态处理。
  * 将 `runtime` 看做 `OC` 语言的操作系统。操作系统是计算机运行的核心，用来进行系统资源分配，各种任务调度，是计算机可以正常运行的关键。说明了 `runtime` 对于 `OC` 语言的重要性，也是必不可少的一部分。

  这也很好地解释了“为什么是 OC 是一个动态语言？”。

## struct - “运行时结构体”

| 结构体 | 说明
| --- | ---
| `objc_object`         | `objc` 对象 `id`，`isa` 指针包含指向对象的地址
| `objc_class`          | `objc` 对象的类 `Class`
| `class_data_bits_t`   | 包含 `class_rw_t` 信息 
| `class_rw_t`          | `rw` : 可读可写，包含指向 `class_rw_ext_t` 或 `class_ro_t` 的指针
| `class_rw_ext_t`      | 类在运行时才确定的方法、属性、协议 (包含指向 `class_ro_t`的指针)
| `class_ro_t`          | `ro` : 只读，类在编译期间就确定的方法、属性、协议
| `cache_t`             | 缓存已经使用过的方法
| `bucket_t`            | 缓存使用的哈希表结构体 (`key: SEL ; value: IMP`)

## function - “运行时函数”

| 函数 | 说明
| --- | ---
| *Class*       | 
| `class_getName`                       | 获取类名
| `class_getSuperclass`                 | 获取父类
| `class_getInstanceSize`               | 获取实例尺寸
| `class_getInstanceVariable`           | 获取实例变量的信息
| `class_getClassVariable`              | 获取类成员变量的信息
| `class_getVersion`                    | 获取类版本号
| `class_setVersion`                    | 设置类版本号
| `class_isMetaClass`                   | 是否是一个元类
| *Ivar*        |
| `class_addIvar`                       | 添加成员变量
| `class_copyIvarList`                  | 获取整个成员变量列表
| *Property*    |
| `class_addProperty`                   | 为类添加属性
| `class_replaceProperty`               | 替换类属性
| `class_getProperty`                   | 获取指定的属性
| `class_copyPropertyList`              | 获取属性列表
| *Method*      |
| `class_addMethod`                     | 添加方法
| `class_replaceMethod`                 | 替换方法实现
| `class_getInstanceMethod`             | 获取实例方法
| `class_getClassMethod`                | 获取类方法
| `class_copyMethodList`                | 获取所有方法的数组
| `class_getMethodImplementation`       | 返回方法实现
| `class_respondsToSelector`            | 类实例是否响应指定的 `selector`
| *Protocol*    | 
| `class_addProtocol`                   | 添加协议
| `class_conformsToProtocol`            | 是否实现指定的协议