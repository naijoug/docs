---
title: Dart
icon: hashtag

index: true

---

<!-- more -->

## `Dart`

> `final` 与 `const` 区别？

  * `const` : 是编译时常量，必须初始化。
  * `final` : 运行时常量，支持惰性初始化，只能被赋值一次的变量。 
  
```dart
final date = DateTime().now(); // ✅
const date = DateTime().now(); // ❌ 编译错误
```

> `Dart` 中 `..` 表示什么意思？

> `Dart` 的作用域?

> `mixin` `extends` `implement` 之间的关系

> `await for` 如何使用

> `isolate` `compute` 是如何运行的？

> 如何使用反射?

  使用 `Mirror`
  
  * `ClassMirror` : 类
  * `InstanceMirror` : 实例 
  * `ClosureMirror` : 闭包
  * `DeclarationMirror` : 类属性
  * `IsolateMirror` : Isolate
  * `MethodMirror` : 方法

> `Dart` 为啥没有反射？

  因为发射会影响 `Dart` 的 `tree shaking`(摇树优化)。这是一种无用代码裁剪技术，有利于优化发布版本的 `App` 体积。如果反射机制存在，会存在隐式代码，`tree shaking` 时无法准确定位运行时哪些代码不会被调用，冗余代码就没法被裁剪。
  
> 说一下 Future？

> `Dart` 是不是单线程模型？是如何运行的？

> `Dart` 多任务如何并行的？

> 说一下 Stream？

> 说一下 mixin？