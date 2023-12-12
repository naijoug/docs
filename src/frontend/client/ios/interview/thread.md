---
title: 多线程
icon: hashtag

index: true
order: 7

---

<!-- more -->

## 线程安全

### `atomic` 线程安全吗？

  `atomic` 属性只保证属性 setter 和 getter 的原子操作，以防止数据被多个线程同时写入或者在写入过程中被另一个线程读取。然而，这并不能完全保证线程安全。

  > 假设有两个线程 A 和 B，它们都尝试更新同一个数值。线程 A 读取该数值，然后在 A 执行写入操作之前，线程 B 也读取了该数值，并且写回了一个新的值。然后线程 A 继续它的写入操作，这样就覆盖了线程 B 的操作。这就是所谓的"竞态条件"，在这种情况下，`atomic`属性并不能保证线程安全。

  虽然 `atomic` 属性可以保证单独的 getter 或 setter 操作是线程安全的，但是它不能保证一个操作序列（例如先读取，然后根据读取的值做计算，然后写回新的值）是作为一个整体的线程安全。

  如果需要一个线程安全的操作，应使用 `mutex`（互斥锁）或者其它的线程同步技术。可以使用 `DispatchQueue`、`NSLock`、`NSOperationQueue` 或者用 `GCD`（`Grand Central Dispatch`）等方式来处理线程同步。

### 如果让你来实现属性的 `atomic`，如何实现？

  可以使用互斥锁，对读写操作进行保护，来防止不同线程中的读写操作相互干扰。

  ```swift
  public class Atomic<T> {
    // 定义 `DispatchQueue` 是一个串行队列，所以这个操作是互斥的
    private let queue = DispatchQueue(label: "queue.atomic.lock")
    private var value: T
    public init(_ value: T) {
        self.value = value
    }
    // get set 中进行加锁保护
    public var atomicValue: T {
        set {
            queue.sync {
                value = newValue
            }
        }
        get {
            return queue.sync {
                value
            }
        }
    }
  }
  ```

### `OC` 中的锁有哪些？
    
  > 自旋和互斥对比？

  > 用 `C/OC/C++` 实现自旋或互斥？

### `NSMutableArray` 的线程安全性？

### “看现象”

> 以下代码输出是什么？

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

## `GCD`

  > `Grand Central Dispatch`（GCD）是 Apple 开发的一个多核编程的解决方案。它主要是通过向指定的队列（`Dispatch Queue`）中添加要执行的任务（任务 = 工作项 = 代码块）来进行工作的。`GCD` 的目标是为了最大化利用处理器的多核，同时最小化线程创建和管理的开销。

### `GCD` 执行原理？

  - 任务：执行操作的最小单元，只能插入到队列中。它是一个虚拟函数，不能直接访问属性或方法。
  - 队列（Dispatch Queue）：用于存放任务的先进先出（FIFO）类型的线程安全的数据结构。

  `GCD` 为每个处理器的核心在系统内存中维护一个线程池，当向 `DispatchQueue` 添加任务时，系统会自动将任务分发到这些线程中运行，以实现任务的并发执行。

  `DispatchQueue` 存在两种类型：`Serial Dispatch Queue`（串行队列）和 `Concurrent Dispatch Queue`（并行队列）。每个任务添加到串行队列中会按照添加到队列中的顺序依次执行，而添加到并行队列中的任务则会被调度在多个线程中并发执行。

  GCD 主要有四个特点：

  - 可用于多核的并行运算
  - 自动利用更多的CPU内核
  - 自动管理线程的生命周期（线程的创建，调度和销毁）
  - 具有线程同步的功能

## 线程设计

### `iOS` 中如何创建一个常驻线程？

在 `iOS` 中，你可以使用 `NSThread` 创建一个常驻线程，也就是让这个线程不进入消亡状态。这通常通过以下步骤实现：

1.创建一个 `NSThread` 对象。

2.在新线程的方法里添加一个 `RunLoop`。

3.让 `RunLoop` 启动。

以下是一段相关代码示例：

```c
NSThread *thread = [[NSThread alloc] initWithTarget:self selector:@selector(createPermanentThread) object:nil];
[thread start];

// ...

- (void)createPermanentThread {
    @autoreleasepool {
        // 创建一个RunLoop
        NSRunLoop *runLoop = [NSRunLoop currentRunLoop];
        // 添加一个Port，防止RunLoop因为没有事件源而退出
        [runLoop addPort:[NSPort port] forMode:NSDefaultRunLoopMode];
        // 启动
        [runLoop run];
    }
}
```

在这个例子中，我们添加了一个 `NSPort` 事件源到 `RunLoop` 中防止它因为没有事件源立即退出。现在这个线程将会一直存在，它不会像其他线程那样在执行完任务后就消亡，你可以随时往这个线程的 `RunLoop` 中添加需要在这个线程上处理的任务。

需要注意的是，长期持有一个线程会占用一定的系统资源，可能会影响到应用的性能，特别是在资源受限的移动设备上，因此在创建常驻线程时需要谨慎考虑。

上述代码为 `Objective-C`，使用 `NSThread` 来创建线程， `Swift` 中使用 `pthread` 创建线程的方法略有不同。

### `NStimer` 定时器准确吗？如果不准确该怎样实现一个精确的 `NSTimer`? 

`NSTimer` 的定时并不会非常精确，因为它依赖于 `RunLoop` 的执行情况，如果 `RunLoop` 处于除 `Default` 模式之外的状态或 `RunLoop` 是忙于其它事情，那么 `NSTimer` 是不会被执行的。因此，如果你启动了一个每秒触发一次的 NSTimer，实际上它触发的时间间隔可能会稍微大于一秒。

如果你需要更为精确的定时器，有几种常见的方案：

1. GCD：使用 `dispatch_after` 来实现定时器功能，它可以脱离 `RunLoop` 工作。

```swift
let time: TimeInterval = 2.0
DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + time) {
    print("2 seconds later output")
}
```

2. `CADisplayLink`: 这是一个和屏幕刷新率同步的定时器，每一帧刷新都会被调用，精度很高，常用于做动画。

```swift
var displayLink: CADisplayLink? = CADisplayLink(target: self, selector: #selector(update))
displayLink?.add(to: RunLoop.current, forMode: .common)
```

3. 使用 `NSInvocation` 创造的 `NSTimer`，这种 `NSTimer` 精度较高。

需要注意的是，更高的定时精度意味着更高的系统负荷，我们应该根据实际需求选择合适的定时器。

  > iOS 计时器都有哪些，分别存在什么问题？