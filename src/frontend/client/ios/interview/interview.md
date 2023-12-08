#  `iOS` “面试题”

## OC & swift

> `block` 底层实现？

  `block` 底层是使用结构体实现的。
  
  根据内存分区不同，分为三种 `block`
    
   * `__NSGlobalBlock__` : 全局 `block`，类似全局静态变量，存放在静态区 
   * `__NSStackBlock__` : 栈区 `block`，保存在栈区
   * `__NSMallocBlock__` : 堆区 `block`，保存在堆区

> `KVO` 失效了怎么办？

> `Codable` 实现原理

## Xcode

> `Xcode` 证书校验流程

> `Xcode` 打包流程 

## event dispatch - “事件分发”

> 用户点击屏幕上按钮，整个过程讲一下？

## method dispatch - “方法派发”

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

## network - “网络”

> 如何解决两个网络请求之间的依赖?

> 如何优化网络？

## memory - “内存”

> `OC` 中一个 `NSObject` 对象，占几个字节？

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

> OC 中的 `Tagged Pointer` 了解吗？

> 如何使用 `UIImageView` 显示一个超大图片，并且支持缩放功能？

  由于 `UIImageView` 通过 `UIImage` 加载图片，是一次性将图片加载到内存，超大图片会引发内存不足的的问题。所以这个时候不能一次全部加载，需要使用分治思想，将图片像素点分块加载，只加载可视区域像素点。使用 `Tile Rendering` 的解决方案，类似家庭装修贴地砖的方式，先将图片像素按照一定的大小分割成 `Tile`，然后根据图片显示区域渲染。`CATiledLayer` 是一种适用于处理大量数据的渲染的 layer，适合处理这种情况。
  缩放功能可以通过将 `UIImageView` 嵌套在 `UIScrollView` 里面，根据缩放的代理回调，进行 `Tile` 的重新绘制。
  
> `C++` 中 `placement new` 特性，在 `OC` 中可以使用吗？

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
  
> 以下代码存在什么问题？

```objc
@autoreleasepool {
    for (int i = 0; i < INT_MAX; i++) {
        Test *test = [[Test alloc] init];
    }
}
```
  
  申请对象时，在 `ARC` 编译期间，会添加 `autorelease`，将申请的对象加入到自动释放池中。如果在一个自动释放池申请大量对象，那么对象的释放都需要等到这个这个自动释放所在的 `RunLoop` 休眠或结束时才能释放，申请大量对象时会造成内存泄漏。这种情况下，需要将 `@autoreleasepool` 加入到 `for` 循环里面。

> ^ 如果将 `for` 循环改为 `enumerateObjectsUsingBlock` 会不会有问题？

  不会有问题，这是因为枚举器方法实现时，已经将 `block` 嵌套在 `@autoreleasepool` 中。
  
## thread - “线程”

> `atomic` 线程安全吗？

> NSMutableArray 的线程安全性？

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

> `iOS` 中如何创建一个常驻线程？

## data - “数据”

> `FMDB` vs `CoreData` vs `SwiftData`

> `CoreData` 的底层实现

> `SwiftData` 的底层实现

## media - “音视频”

> 如何使用 `AVFoundation` 给视频添加水印？


## optimization - “优化”

> `UITableView` 优化方案?

  * 最核心的优化其实苹果已经帮我们做了，Cell 的复用机制，这个是标配。
  * 对于不等高 Cell，缓存 Cell 高度应该基本操作，还可以配合高度预先计算一起使用。
  * Cell 内部的优化，就是比较通用的视图优化，图片圆角处理等。
  * 滚动过程中，如果涉及 Cell 中数据刷新，比如图片下载，或者定时器刷新数据等。需要根据是否出现在屏幕中，进行网络请求的暂停，定时器的暂停等。

> iOS 启动优化方案？

> iOS 如何检测卡顿？

> iOS 界面卡顿优化方案？

## architecture - “架构”

> 组件化设计思路？

  组件化：有时也称为“模块化”。将一个大的业务功能，按照不同的功能模块进行拆分。

  拆分原则：类似 `SOLID` 原则。
    * 单一职责原则 : 拆分的功能模块应该尽量做到功能单一。
    * 接口隔离原则 : 功能模块尽量做到对外暴露接口的最小化。

  分层原则：网上有一个借用经典四象限法则来划分(以 **业务相关**、**`UI` 相关** 作为两个轴线，来进行组件化分层)
    * 业务功能层 : 业务有关 & `UI` 有关。用户看到的主要功能页面。
    * 业务逻辑层 : 业务有关 & `UI` 无关。在用户使用业务功能时，背后的处理逻辑。
    * `UI` 层 : 业务无关 & `UI` 有关。通用的 `UI` 页面，不关联具体的业务逻辑。
    * 基础层 : 业务无关 & `UI` 无关。通用的基础功能。

  单向依赖原则：组件之间的依赖关系，应该做到上层依赖下层，下层不要依赖上层。

> 下层组件需要调用上层组件怎样处理？

  方案一：依赖注入方式。下层组件定义好钩子函数，注册时，将上层组件注入下层组件定义好的钩子函数。
  
  方案二：间接访问。通过底层的路由组件，将上层组件注册到路由表中，这样下层组件就可以通过路由间接访问到上层组件。