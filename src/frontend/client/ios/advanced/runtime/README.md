---
title: 运行时
icon: hashtag

index: false

---

> 参考源码 [objc-876](https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime)

<!-- more -->

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

## reference

- [objc4](https://github.com/apple-oss-distributions/objc4)
- [A debuggable objc runtime](https://github.com/RetVal/objc-runtime)
- [iOS-Runtime-Headers](https://github.com/nst/iOS-Runtime-Headers) : iOS 运行时头文件(包括私有 API)
    > iOS Objective-C headers as derived from runtime introspection
- [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide)
- [Aspects](https://github.com/steipete/Aspects)
    > Delightful, simple library for aspect oriented programming in Objective-C and Swift.

------

- [2020-01-23 Aspects深度解析-iOS面向切面编程](https://juejin.cn/post/6844904052778598408)
- [2019-08-05 Runtime原理探究](https://www.jianshu.com/p/30de582dbeb7)
- [](✅) [2019-03-07 OC对象的本质](https://www.jianshu.com/p/1bf78e1b3594)
    > 作者的 Slogan : 汇编是检验一切语法糖的唯一标准
- [2018-03-16 读 objc4 源码，深入理解 Objective-C Runtime](https://shannonchenchn.github.io/2018/03/16/objc-runtime-learning-notes/)
- [](✅) [2017-09-15 Why is MetaClass in Objective-C？](https://nemocdz.github.io/post/why-is-metaclass-in-objective-c/) 💯
    > 作者从自己遇到的一个面试题出发，按照第一性原理进行问题推导。
      👉🏻 首先去研究了 `OC` 中的源码，梳理了 `isa`、`MetaClass` 关系。
      👉🏻 在搜索 `MetaClass` 的过程，发现了 `Python` 中也有这个设计。进而了解到是源于 `Smalltalk` 的设计，而 `OC` 就是借鉴的 `Smalltalk` 的设计思想。
      👉🏻 进一步思考如果没有 `MetaClass` 是否可行。在宏观成面思考了面向对象的两种设计思想，以 `C++` (借鉴 `Simula`)为代表的*类的划分*，还有以 `OC` (借鉴 `Smalltalk`)为代表的`消息传递`。
- [2016-06-15 Objective-C 消息发送与转发机制原理](http://yulingtianxia.com/blog/2016/06/15/Objective-C-Message-Sending-and-Forwarding/)
- [2014-11-06 神经病院objc runtime入院考试](https://blog.sunnyxx.com/2014/11/06/runtime-nuts)
- [2014-11-05 Objective-C Runtime](http://yulingtianxia.com/blog/2014/11/05/objective-c-runtime/)
- [2013-11-26 Objective-C 中的消息与消息转发](https://blog.ibireme.com/2013/11/26/objective-c-messaging/)

## concept

- `instance -> class -> method -> SEL -> IMP -> 实现函数`
- `objc_msgSend` : Objective-C 消息传递函数 `id objc_msgSend(id self, SEL op, ... );`

- SEL & IMP

| 类型 | 说明
| --- | --- 
| `SEL`     | 方法选择器 (方法的 ID)
| `IMP`     | 函数指针，方法实现的指针

- 反射

``` objc
/** SEL 反射 */
//  String -> SEL
SEL selector = NSSelectorFromString(@"setName:");
[stu performSelector:selector withObject:@"Kobe"];
//  SEL -> String
NSStringFromSelector(@selector(setName:));

/**  Class 反射 */
//  String -> Class
Class class = NSClassFromString(@"Student");
Student *student = [[class alloc] init]; 
//  Class -> String
Class class = [Student class];
NSString *className = NSStringFromClass(class);

/** Protocol 反射 */
//  String -> Protocol
Protocol protocol = NSProtocolFromString(@"People");
//  Protocol -> String
NSString *protocolName = NSStringFromProtocol(protocol);
```

## OC 的动态特性

- 动态类型（Dynamic typing）
    * `isKindOfClass:` : 判断某一对象是否是某个类或其子类的实例
    * `isMemberOfClass:` : 判断某一对象是否是某个类的实例

- 动态绑定（Dynamic binding）
    * 传统函数 : 编译时期，将函数参数和实现打包到源码
    * OC的消息机制 : 运行时，才去动态查找与实例绑定的属性和方法

- 动态加载（Dynamic loading）
    * 根据需求动态加载资源(如 : @2x,@3x图片的加载)`

## Runtime Struct

| 结构体 | 说明
| --- | ---
| `objc_object`         | objc 对象 `id`，isa 指针包含指向对象的地址
| `objc_class`          | objc 对象的类 `Class`
| `class_data_bits_t`   | 包含 `class_rw_t` 信息 
| `class_rw_t`          | rw : 可读可写，类在运行时才确定的方法、属性、协议 (包含指向 `class_ro_t`的指针)
| `class_ro_t`          | ro : 只读，类在编译期间就确定的方法、属性、协议
| `cache_t`             | 缓存已经使用过的方法
| `bucket_t`            | 缓存使用的哈希表结构体 (`key: SEL ; value: IMP`)


``` objc
struct class_rw_t { // 可读可写
    uint32_t flags;
    uint32_t version;

    const class_ro_t *ro;           // 指向只读的结构体,存放类初始信息
    
    method_array_t methods;         // 方法列表（类对象存放对象方法，元类对象存放类方法）
    property_array_t properties;    // 属性列表
    protocol_array_t protocols;     // 协议列表

    Class firstSubclass;
    Class nextSiblingClass;
}
struct class_ro_t { // 只读 
    uint32_t flags;
    uint32_t instanceStart;
    uint32_t instanceSize;
    uint32_t reserved;

    const uint8_t * ivarLayout;

    const char * name;
    method_list_t * baseMethodList;     // 方法列表
    protocol_list_t * baseProtocols;    // 协议列表
    const ivar_list_t * ivars;          // 成员变量列表

    const uint8_t * weakIvarLayout;
    property_list_t *baseProperties;    // 属性列表
};
```
