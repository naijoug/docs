---
title: 内存管理
icon: hashtag

index: true
order: 8

---

<!-- more -->

## 内存分配

### ❓`OC` 中一个 `NSObject` 对象，占几个字节？

::: details 💡

  一个 `NSObject` 对象应该就是存放这个对象的指针地址。一个指针的大小应该是占用 16 个直接。

  ```objc
  @interface Todo: NSObject 
  {
     int: _no;
     String: _title;
     String: _detail;
  }
  @end
  ```

:::

### ❓如何使用 `UIImageView` 显示一个超大图片，并且支持缩放功能？

::: details 💡

  由于 `UIImageView` 通过 `UIImage` 加载图片，是一次性将图片加载到内存，超大图片会引发内存不足的的问题。所以这个时候不能一次全部加载，需要使用分治思想，将图片像素点分块加载，只加载可视区域像素点。使用 `Tile Rendering` 的解决方案，类似家庭装修贴地砖的方式，先将图片像素按照一定的大小分割成 `Tile`，然后根据图片显示区域渲染。`CATiledLayer` 是一种适用于处理大量数据的渲染的 layer，适合处理这种情况。
  缩放功能可以通过将 `UIImageView` 嵌套在 `UIScrollView` 里面，根据缩放的代理回调，进行 `Tile` 的重新绘制。
  
:::
  
### ❓`C++` 中 `placement new` 特性，在 `OC` 中可以使用吗？

::: details 💡

  `placement new` : 是一种可以已分配内存的位置直接构造对象的特性，而这个已分配内存可以栈区也可以是堆区。
  
  ```cpp
  // 栈内存
  char buffer[sizeof(Foo)]; 
  Foo* foo = new(buffer) Foo(args);
  // 堆内存
  char* buffer = new char[sizeof(Foo)]; 
  Foo* foo = new(buffer) Foo(args);
  ```
  
  `OC` 是不具备这个特性，但是可以借助 `C` 语言分配内存。
  
  ```objc
  // OC 常规方案
  Foo* foo = [[Foo alloc] init];
  // 使用 C 分配内存
  Foo* foo = (Foo*) malloc(sizeof(Foo));
  if (foo != NULL) {
      [foo init];
  }
  ```
  
:::
  
## `autoreleasepool` - “自动释放池”
  
### 什么情况下需要手动创建 `autoreleasepool` ？
  
::: details 💡

  - 大量的对象在短时间内被创建和销毁，且会占用大量内存。在这种情况下，及时地回收内存非常重要。由于 `ARC`（自动引用计数）机制在一次 `RunLoop` 循环结束后才进行垃圾回收，所以如果不使用 `autoreleasepool`，那么在一次 `RunLoop` 循环期间创建的所有对象都不会被立刻释放，这可能会导致内存峰值的显著增加。使用 `autoreleasepool` 可以在代码块结束时立即释放这些对象，从而有效地降低内存峰值。

  - 在子线程或者自定义的线程中运行的代码。默认情况下，只有主线程的 `RunLoop` 会自动创建 `autoreleasepool`，其他的线程需要我们手动创建。

  下面是一个使用 `autoreleasepool` 的例子：

  ```swift
  for _ in 1...1000000 {
    autoreleasepool {
        // 这里面的代码在每次 loop 结束时，会自动释放掉使用了 autorelease 的所有对象
        let image = UIImage(named: "huge_image.png")
        print(image?.size ?? "No image found")
    }
  }
  ```

在这个例子中，每一次循环，都会创建一个新的autorelease对象Image。这可能会消耗大量内存。使用`autoreleasepool`则可以保证在每次循环结束时，Image对象都能够被立即回收，从而有效控制内存使用。
  
:::
  
### “找 bug” 

  > ❓以下代码存在什么问题？

  ```objc
  @autoreleasepool {
    for (int i = 0; i < INT_MAX; i++) {
        Test *test = [[Test alloc] init];
    }
  }
  ```
  
::: details 💡
  
  申请对象时，在 `ARC` 编译期间，会添加 `autorelease`，将申请的对象加入到自动释放池中。如果在一个自动释放池申请大量对象，那么对象的释放都需要等到这个这个自动释放所在的 `RunLoop` 休眠或结束时才能释放，申请大量对象时会造成内存泄漏。这种情况下，需要将 `@autoreleasepool` 加入到 `for` 循环里面。

  ```objc
  for (int i = 0; i < INT_MAX; i++) {
    @autoreleasepool {
        Test *test = [[Test alloc] init];
    }
  }
  ```

:::

  > ❓^ 如果将 `for` 循环改为 `enumerateObjectsUsingBlock` 会不会有问题？

::: details 💡

  不会有问题，这是因为枚举器方法实现时，已经将 `block` 嵌套在 `@autoreleasepool` 中。
  
:::
  
## 引用计数

### 如果让你实现属性的 `weak`，如何实现的？

## 内存分析

### app 内存是如何分析的？

### 内存泄漏可能会出现的几种原因？
    
  > 非 `OC` 对象如何处理？

  > 如果常用框架出现内存泄漏如何处理？