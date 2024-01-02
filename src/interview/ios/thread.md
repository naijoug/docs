---
title: 多线程
icon: hashtag

index: true
order: 7

---

<!-- more -->

## 线程安全

### `iOS` 中的常用线程相关类型有哪些？

### `iOS` 中线程同步策略有哪些？

### `UIKit` 是线程安全的吗？为什么？

### ❓`atomic` 线程安全吗？

::: details 💡

  `atomic` 属性只保证属性 setter 和 getter 的原子操作，以防止数据被多个线程同时写入或者在写入过程中被另一个线程读取。然而，这并不能完全保证线程安全。

  > 假设有两个线程 A 和 B，它们都尝试更新同一个数值。线程 A 读取该数值，然后在 A 执行写入操作之前，线程 B 也读取了该数值，并且写回了一个新的值。然后线程 A 继续它的写入操作，这样就覆盖了线程 B 的操作。这就是所谓的"竞态条件"，在这种情况下，`atomic`属性并不能保证线程安全。

  虽然 `atomic` 属性可以保证单独的 getter 或 setter 操作是线程安全的，但是它不能保证一个操作序列（例如先读取，然后根据读取的值做计算，然后写回新的值）是作为一个整体的线程安全。

  如果需要一个线程安全的操作，应使用 `mutex`（互斥锁）或者其它的线程同步技术。可以使用 `DispatchQueue`、`NSLock`、`NSOperationQueue` 或者用 `GCD`（`Grand Central Dispatch`）等方式来处理线程同步。

:::

### ❓如果让你来实现属性的 `atomic`，如何实现？

::: details 💡

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

:::

### ❓`NSMutableArray` 的线程安全性？

::: details 💡
  
  > 线程安全：是多线程编程中的一个关键问题。当数据可以被多个线程安全地并行存取时，该数据就是线程安全的。反之，如果数据的一致性不可预测或者发生错误，那么它就不是线程安全的。

  `NSMutableArray` 是非线程安全的。内部封装了一个动态扩容的数组，并且提供了一组添加、删除和修改数组元素的方法。这些方法在同时被多个线程调用的情况下可能会导致数据的一致性问题。

    示例：
    
    线程A 调用了 addObject：方法，试图向数组中添加一个元素。
    同时，线程B也调用了addObject：方法，试图向数组中添加一个元素。

    场景一：
    两个方法的执行是交替进行的，那么就可能出现 线程A 先将元素添加到数组中，然后数组扩容。
    线程B 也将元素添加到同一位置，然后再次触发数组的扩容。
    结果就会导致数据的不一致性，因为两个元素被添加到了同一个位置。

    场景二：
    线程A 在添加元素的同时，线程B 可能在删除元素。
    如果 线程A 已经完成了添加元素，这时 线程B 删除了刚刚已经添加的元素，这样也会引发数据的一致性问题。
    
:::

### `sqlite` 中的读写是线程安全的吗？

### 为什么只有主线程的 `runloop` 是开启的?

### 为什么只在主线程刷新 `UI`?

------

## 线程锁

### ❓`OC` 中的锁有哪些？
    
::: details 💡

  `OC`中有多种方式来实现线程同步，也就是"锁"的概念。

  - `NSLock`：最基本的锁，使用起来非常直观和简单。只需要在操作前加锁，操作后解锁即可。

    ```objc
    NSLock *lock = [[NSLock alloc] init];
    [lock lock];
    // Access shared resource here.
    [lock unlock];
    ```

  - `@synchronized`：线程同步关键字，用于自动加锁和解锁。放在需要保护线程安全的代码前面即可。

    ```objc
    @synchronized (self) {
        // Access shared resource here.
    }
    ```

  - `NSCondition`：条件锁，当某条件满足时加锁，否则一直等待。

    ```objc
    NSCondition *condition = [[NSCondition alloc] init];
    [condition lock];
    while (/* 如果条件不满足 */) {
        [condition wait];
    }
    // Access shared resource here.
    [condition unlock];
    ```

  - `NSRecursiveLock`：递归锁，允许同一个线程多次加锁，不会造成死锁。
    
    ```objc
    NSRecursiveLock *rLock = [[NSRecursiveLock alloc] init];
    [rLock lock];
    // Access shared resource here.
    [rLock unlock];
    ```

  - `dispatch_semaphore_t`：信号量，是 `GCD` 中的一种方式，通过控制信号量的数量来进行线程的并发控制。

    ```objc
    dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);
    dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);
    // Access shared resource here.
    dispatch_semaphore_signal(semaphore);
    ```

  - `Mutex`：互斥锁
  
    ```objc
    pthread_mutex_t mutex;
    pthread_mutex_init(&mutex, NULL);
    pthread_mutex_lock(&mutex);
    // Access shared resource here.
    pthread_mutex_unlock(&mutex);
    ```
  
  - `OSSpinLock`：自旋锁，如果由于竞争资源不可用而无法立即获得锁，它会一直在用户态自旋（忙等），直到锁变为可用为止。由于它在用户态就可以自旋，不用像其他锁那样进入内核态进行线程调度，所以速度非常快。但是自旋锁由于永不阻塞，一直占用 CPU，所以在资源竞争严重的情况下效率会很低。注意，`OSSpinLock` 在 `iOS10.0` 后已经不再安全，推荐使用 `os_unfair_lock`。
   
    ```objc
    pthread_spinlock_t spinlock;
    pthread_spin_init(&spinlock, 0);
    pthread_spin_lock(&spinlock);
    // Access shared resource here.
    pthread_spin_unlock(&spinlock);
    ```

  - `os_unfair_lock`：`OSSpinLock` 的替代品，安全性更好，推荐用于低延迟和高并发的场景。
    
:::
    
### ❓`swift` 中的锁有哪些？

::: details 💡


  - `Dispatch Semaphore` 信号量：当信号量的值 `<=0` 时，会阻塞线程, `>0` 时, 会使信号量的值减1，然后执行后续的代码。

    ```swift
    let semaphore = DispatchSemaphore(value: 1)
    semaphore.wait()
    // Do something
    semaphore.signal()
    ```

  - `NSLock`: 它是对 `mutex` 的一次简单的封装，更加面向对象，用起来更加简单。

    ```swift
    let lock = NSLock()
    lock.lock()
    // Do something
    lock.unlock()
    ```

  - `NSRecursiveLock`：允许同一线程多次加锁，而不会引起死锁。递归锁会跟踪解锁和加锁的数目，只有这两个数目相同时，锁才会被真正释放掉。

    ```swift
    let recursiveLock = NSRecursiveLock()
    recursiveLock.lock()
    // Do something
    recursiveLock.unlock()
    ```

  - `Mutex` (PTHREAD_MUTEX_NORMAL)：可以实现锁的快速检查，如果同步对象已经上锁，这个函数会立刻返回，线程不会进入睡眠状态。

    ```swift
    var mutex = pthread_mutex_t()
    pthread_mutex_lock(&mutex)
    // Do something
    pthread_mutex_unlock(&mutex)
    
    ```

  - `Spin Lock`：忙等锁，会一直占用 `CPU` 的资源，直到获取到锁为止。自旋锁只应使用在保证线程不会被大量阻塞的场景，比如内核的数据结构或者实时线程编程。

    ```swift
    var unfairLock = os_unfair_lock_s()
    os_unfair_lock_lock(&unfairLock)
    // Do something
    os_unfair_lock_unlock(&unfairLock)
    ```

  上述五种锁中，
  `Dispatch Semaphore` 信号量、`NSLock`、`NSRecursiveLock`都是通过 `Foundation` 框架提供的 API 来实现的；
  `Mutex` 锁是通过 `pthread` 库中的 `mutex` 提供的；
  `SpinLock` 是通过 `os` 库中的 `os_unfair_lock` 来实现的。

  在实际开发中，使用哪种锁取决于你的需求：
  
  - 如果需要抢占式的锁，并且不能容忍线程冻结，`NSLock`可能会是一个不错的选择。
  - 对于需要快速检查的情况，`mutex` 可能会更合适。
  - 如果只是需要一个简单的方法来保护一段代码，然后`Dispatch Semaphore`也许就可以满足需求。

:::
    
### ❓自旋锁和互斥锁对比？

::: details 💡

  两者区别在于当锁无法获取的时候，它们处理方式的不同。

  - 自旋锁（`SpinLock`）：
    
    当一个线程尝试获取一个已经被占用的自旋锁时，它会持续地查询（`spin`，故名`自旋锁`）锁的状态以尝试获取锁的所有权。换句话说，线程会在用户态忙等，直到锁被释放。因此，自旋锁是非阻塞的。
    
    这种方式对 `CPU` 是极其消耗资源的，但是当锁持有的时间非常短时（例如，只是简单地读取或修改一小块数据），自旋锁会比互斥锁有更高的性能，因为线程无需在互斥锁的排队、阻塞和唤醒等操作中花费时间。

  - 互斥锁（`Mutex`）：

    互斥锁和自旋锁的最大区别在于，当一个线程试图获取一个已经被占用的互斥锁时，该线程会被阻塞并进入睡眠状态。直到持有锁的线程释放锁，本线程才会被唤醒并获得锁来继续执行。

    这样显然会比自旋锁在无法获得锁时更节省 `CPU` 资源，不过获取锁与释放锁涉及到的线程切换对系统来说也是有一定开销的。然而，对于执行时间较长的代码块（例如IO任务等），使用互斥锁通常会是更好的选择。

  适用场景：
    
  - 自旋锁适用于锁保护的临界区很小且确定时间短的情况。
  - 互斥锁更合适耗时长的操作加锁，如果临界区包含IO、耗时操作或者包含其他形式的锁的话，使用自旋锁反而会因为“忙等”浪费过多CPU时间。

:::

  > 用 `C/C++/OC` 实现自旋锁或互斥锁？

::: details 💡

  实现互斥锁，可以使用原子操作或内存屏障来达成目的。
  使用 `C++11` 实现的自旋锁的简单版本：

  ```cpp
  #include <atomic>
    
  class SpinLock {
    // std::atomic_flag : C++ 中的原子布尔型标志
    std::atomic_flag locked = ATOMIC_FLAG_INIT ;
  public:
    // std::memory_order_acquire & std::memory_order_release
    // 内存序，以确保在多线程环境下的正确性。
    void lock() {
        while (locked.test_and_set(std::memory_order_acquire)) { ; }
    }
    void unlock() {
        locked.clear(std::memory_order_release);
    }
  };
  ```

:::

### ❓用一句话描述 `GCD` 发生的死锁现象？

------

## GCD

  > `GCD (Grand Central Dispatch)` 是 Apple 开发的一个多核编程的解决方案。它主要是通过向指定的队列（`Dispatch Queue`）中添加要执行的任务（任务 = 工作项 = 代码块）来进行工作的。`GCD` 的目标是为了最大化利用处理器的多核，同时最小化线程创建和管理的开销。

### `GCD` 的一些常用的函数？

### ❓`GCD` 执行原理？

::: details 💡

  - 任务：执行操作的最小单元，只能插入到队列中。它是一个虚拟函数，不能直接访问属性或方法。
  - 队列（`Dispatch Queue`）：用于存放任务的先进先出（`FIFO`）类型的线程安全的数据结构。

  `GCD` 为每个处理器的核心在系统内存中维护一个线程池，当向 `DispatchQueue` 添加任务时，系统会自动将任务分发到这些线程中运行，以实现任务的并发执行。

  `DispatchQueue` 存在两种类型：`Serial Dispatch Queue`（串行队列）和 `Concurrent Dispatch Queue`（并行队列）。每个任务添加到串行队列中会按照添加到队列中的顺序依次执行，而添加到并行队列中的任务则会被调度在多个线程中并发执行。

  `GCD` 主要有四个特点：

  - 可用于多核的并行运算
  - 自动利用更多的 `CPU` 内核
  - 自动管理线程的生命周期（线程的创建，调度和销毁）
  - 具有线程同步的功能

:::

### `GCD` 的队列（`dispatch_queue_t`）分哪两种类型？默认提供哪些队列?

### `GCD` 主线程 & 主队列的关系?

### 线程和队列的关系？一个线程是否可能存在于两个队列?

### 队列一定会创建线程吗? 队列是否可以无限制创建?

### 如何用 `GCD` 同步若干个异步调用？

### `dispatch_barrier_async` 的作用是什么？

### `dispatch_barrier_sync` 与 `dispatch_group_t` 的区别？

### `dispatch_group_t` 如何实现 `dispatch_barrier_sync` 类似的功能?

### `dispatch_get_current_queue` 为什么被废弃？

### `dispatch_once` 实现原理？

### `DispatchQoS` 的作用？

### `GCD` 背后的线程模型是什么？

### `GCD` 已经调用能不能取消？

### 下面代码执行结果？

```objc
NSLog(@"1");
dispatch_sync(dispatch_get_main_queue(), ^{
    NSLog(@"2");
});
NSLog(@"3");
```

> 改为 `global queue` 呢？

```objc
NSLog(@"1");
dispatch_sync(dispatch_get_global_queue(), ^{
    NSLog(@"2");
});
NSLog(@"3");
```

### 下面代码输出结果？

```objc
dispatch_queue_t queue = dispatch_get_main_queue();
BOOL isEqual = [queue isKindOfClass:[NSObject class]];
NSLog(@"isEqual=%d", isEqual);
```

------

## NSOperation

### 了解 `NSOperation` 与 `NSOperationQueue` 吗？

### 有哪些场景是 `NSOperation` 比 `GCD` 更容易实现的？

### `NSOperationQueue` 中的 `maxConcurrentOperationCount` 默认值？

### `NSOperation` 是如何终止/取消任务的?

------

## 线程设计

### 如何实现一个线程安全的 NSMutableArray?

### ❓`iOS` 中线程间如何通信？

### ❓`iOS` 中如何创建一个常驻线程？

::: details 💡

  创建一个常驻线程，也就是这个线程并不会在任务执行完后就立即退出，而是能够等待新的任务的加入并执行。这在处理一些持久的、周期性的或者需要在特定线程中执行的任务非常有用。

  核心点在于创建线程时，启动 `RunLoop`，但是 `RunLoop` 如果在没有任何事件源时会退出，所以需要添加一个 port 事件让 `RunLoop` 一直运行。

  下面是一个 `Swift` 版本的常驻线程

  ```swift
  /// 守护线程
  class DaemonThread: NSObject {
    // 创建的守护线程，并开启一个Runloop
    private lazy var thread = Thread {
        // 添加了一个 port 事件源到 RunLoop 中防止它因为没有事件源立即退出
        RunLoop.current.add(Port(), forMode: .default)
        // 启动 RunLoop
        RunLoop.current.run()
    }
    
    override init() {
        super.init()
        // 启动线程
        thread.start()
    }
    /// 在守护进程执行任务
    func execute(task: @escaping () -> ()) {
        perform(#selector(runTask(_:)), on: thread, with: task, waitUntilDone: false)
    }
    /// 停止守护线程
    func stop() {
        perform(#selector(clear), on: thread, with: nil, waitUntilDone: false)
    }
    
    /// 清理资源 : 停止 RunLoop、退出线程
    @objc private func clear() {
        CFRunLoopStop(CFRunLoopGetCurrent())
        Thread.exit()
    }
    /// 执行任务
    @objc private func runTask(_ task: () -> ()) {
        task()
    }
  }
  ```

:::


### `AFNetworking` 2.0 中常驻线程设计是为了解决什么问题？



### `iOS` 下如何实现指定线程数目的线程池？

### 执行一个 `NSThread` 任务, 如何在执行过程中终止该线程?

### 开启一条线程的方法？线程可以取消吗？

### 如何终止正在运行的工作线程？

### 有a、b、c、d 4个异步请求，如何判断a、b、c、d都完成执行？如果需要a、b、c、d顺序执行，该如何实现？



### 下面这段伪代码存在什么问题？应该如何改进？

```objc
int main(int argc, const char * argv[]) {
    // ...
    
    NSUInteger threadCount = [NSProcessInfo processInfo].activeProcessorCount;
    NSCondition *cond = [NSCondition new];
    for (int i = 0; i < threadCount; i++) {
        [NSThread detachNewThreadWithBlock:^{
            while (YES) {
                [cond lock];
                while (/* Queue is empty */) {
                    [cond wait];
                }
                // Dequeue an item.
                [cond unlock];
                // Handle the item.
            }
        }];
    }

    while (YES) {
        // Enqueue something when it comes.
        [cond broadcast];
    }
    
    // ...
}

```

------

## 定时器

### ❓`Timer` 定时器准确吗？如果不准确该怎样实现一个精确的 `Timer`? 

::: details 💡

  `Timer` 的定时并不会非常精确，因为它依赖于 `RunLoop` 的执行情况，如果 `RunLoop` 处于除 `Default` 模式之外的状态或 `RunLoop` 是忙于其它事情，那么 `Timer` 是不会被执行的。因此，如果你启动了一个每秒触发一次的 `Timer`，实际上它触发的时间间隔可能会稍微大于一秒。
  
  更精确的定时器方案：
  
  - `RunLoop - common` 模式 : 将 `Timer` 加入 `RunLoop` 中的 `.common` 模式。
  
    ```swift
    let timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { timer in
     print("\(Date().timestamp)")
    }
    RunLoop.current.add(timer, forMode: .common)
    ```
    
  - 在自定义线程中使用 `Timer`
    
    ```swift
    var thread = Thread(target: self, selector: #selector(newThread), object: nil)
    thread?.start()
    
    @objc func newThread() {
      autoreleasepool {
          timer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(timerAction(_:)), userInfo: nil, repeats: true)
          RunLoop.current.run() // 启动子线程的 RunLoop
      }
    } 
    ```

  - `CADisplayLink`: 这是一个和屏幕刷新率同步的定时器，每一帧刷新都会被调用，精度很高，常用于做动画。

    ```swift
    // 与屏幕刷新同步刷新调用 render 函数
    var displayLink: CADisplayLink? = CADisplayLink(target: self, selector: #selector(render))
    displayLink?.add(to: RunLoop.current, forMode: .common)
    ```

  - `GCD`：使用 `dispatch_after` 来实现定时器功能

    ```swift
    DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + 1.0) {
      print("\(Date().timestamp)")
    }
    ```

  - `GCD`：使用 `DispatchSourceTimer` 来实现定时器
  
    ```swift
    let queue = DispatchQueue.global(qos: .default)
    var gcdTimer: DispatchSourceTimer? = DispatchSource.makeTimerSource(flags: [], queue: queue)
    gcdTimer?.schedule(deadline: .now(), repeating: .seconds(1))
    gcdTimer?.setEventHandler(handler: {
      DispatchQueue.global(qos: .default).async {
          print("\(Date().timestamp)")
      }
    })
    gcdTimer?.resume() 
    ```

:::

### `NSTimer`、`CADisplayLink`、`dispatch_source_t` 的优劣?

### `NSTimer` 的循环引用如何解决？

