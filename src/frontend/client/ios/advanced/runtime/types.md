---
title: 数据类型
icon: hashtag

index: true

---

> Objc Types Defined: objc 类型定义

<!-- more -->

[runtime.h#L41]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/runtime.h#L41

------

## 看源码
  > [👉🏻][runtime.h#L41]

```objc
// file: runtime.h | line:41
/// An opaque type that represents a method in a class definition.
typedef struct objc_method *Method; // 一个非透明类型，表示一个类定义中的方法

/// An opaque type that represents an instance variable.
typedef struct objc_ivar *Ivar; // 表示一个实例变量

/// An opaque type that represents a category.
typedef struct objc_category *Category; // 表示一个分类

/// An opaque type that represents an Objective-C declared property.
typedef struct objc_property *objc_property_t; // 表示 OC 中定义属性

#ifdef __OBJC__ 
@class Protocol; // OC 环境下是一个类的提前引用声明
#else 
typedef struct objc_object Protocol; // 非 OC 环境下是 objc_object 的别名
#endif
```


> `OC` 中 `Method`、`SEL`、`IMP` 是什么关系？

```objc
// file: runtime.h
// line:43 Method 定义
/// An opaque type that represents a method in a class definition.
typedef struct objc_method *Method;
```

```objc
// file: objc.h
// line:49 
/// An opaque type that represents a method selector.
typedef struct objc_selector *SEL; // 一个不透明类型，表示一个方法选择器

/// A pointer to the function of a method implementation. 
// 一个指向方法实现的指针
#if !OBJC_OLD_DISPATCH_PROTOTYPES
typedef void (*IMP)(void /* id, SEL, ... */ ); 
#else
typedef id _Nullable (*IMP)(id _Nonnull, SEL _Nonnull, ...); 
#endif
```

  `SEL` 是一个指向方法选择器的指针，表示方法名
  `IMP` 方法实现的指针，表示方法实现。

> 方法的调用


> `OC` 对象继承原型链


