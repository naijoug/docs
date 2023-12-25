---
title: RunLoop
icon: hashtag

index: true

---

  > 运行循环

<!-- more -->

### ❓`RunLoop` 有几种事件源？有几种模式？

::: details 💡

  `RunLoop`是用来管理事件和处理 `IO` 的基本架构
  
  三种事件源

  - `Timer`：定时器事件
    > `RunLoop` 按照设定的时间区间接收定时器事件。
  - `Source`：输入源事件
    > 包括两种类型：source0 & source1
    * source0 : 自定义的输入源，需要程序员自己生成和管理。
    * source1 ： 基于 `Port` 的输入源，接收来自其他线程或进程的消息，然后在当前线程上调用指定的处理方法。
  - `Observer`：观察者事件
    > 可以设置在 `RunLoop` 各个运行阶段接收的事件。

  运行模式

  - `NSDefaultRunLoopMode`（kCFRunLoopDefaultMode）：默认模式
    > 如果不手动指定模式，`RunLoop` 就在这个模式下运行。
  - `UITrackingRunLoopMode`：界面跟踪模式
    > 用于 `ScrollView` 滚动时。
  - `UIInitializationRunLoopMode`：启动 App 时第进入的模式
    > 启动完成后就不再使用。
  - `NSRunLoopCommonModes`（kCFRunLoopCommonModes）：这是一个占位模式，不是一种真正的 Mode。
    > 可以将事件源（`Timer/Observer/Source`）添加到 `CommonModes` 中，`RunLoop` 运行在哪种 Mode 时，只要这种 Mode 被标记为 Common 的属性，则 `RunLoop` 就会处理相应的事件。

:::

### ❓`Runloop` 内部实现逻辑？

::: details 💡

  `RunLoop` 的内部实现可以简单地概括为一个 `while` 循环，在这个循环中处理各种输入源的事件。`RunLoop` 在开启后会一直在这个循环中执行，直到接收到停止 `RunLoop` 的消息。

  - `RunLoop` 在启动时会从预设的 `Mode` 中选择一个，然后进入 `RunLoop` 的循环。
  
  - 进入循环周期
    * 首先，处理所有到期的定时器事件。
    * 然后，处理所有的输入源事件。输入源的事件包括来自 `Port` 的消息，以及用户定义的其他事件。
    * 然后，如果有观察者的话，`RunLoop` 会通知观察者当前 `RunLoop` 的状态。
    * 最后，如果在处理事件的过程中没有任何源需要处理，那么 `RunLoop` 会进入休眠等待被唤醒。

  - 继续下一次循环，直到接收到结束 `RunLoop` 的消息。

:::

### `runloop` 与 `performSelector` 的关系？

### `performSelector` vs `NSInvocation`

### ❓以下代码输出是什么？

  ```objc
  NSLog(@"1");
  dispatch_async(dispatch_get_global_queue(0, 0), ^{
    NSLog(@"2");
    [self performSelector:@selector(test) withObject:nil afterDelay:10];
    NSLog(@"3");
  });
  NSLog(@"4");
  - (void)test {
    NSLog(@"5");
  }
  ```

::: details 💡

  > 打印顺序 : 1, 4, 2, 3

  "1"和"4"是普通的直接执行代码，因此会按照顺序输出。
  
  "2"和"3"位于异步并发队列中，会在新线程中执行，所以会在"1"和"4"之后开始执行。

  "5"不会输出。原因是`[self performSelector:@selector(test) withObject:nil afterDelay:10];`这一行代码被放在异步并发队列中，并且是在子线程中执行，但是这种执行方式是依赖 `RunLoop` 的，而新创建的线程默认是没有启动 `RunLoop` 的，所以`performSelector:afterDelay:`方法会失效。


  > 如果想要使 "5" 能够打印，应该怎么处理？
    
  ```objc
  // 方案一 : 放入主线程 RunLoop
  [self performSelectorOnMainThread:@selector(test) withObject:nil waitUntilDone:NO];
    
  // 方案二 : 在子线程中手动启动 RunLoop
  NSRunLoop *runLoop = [NSRunLoop currentRunLoop];
  [self performSelector:@selector(test) withObject:nil afterDelay:5.0];
  [runLoop run];
  ```

:::