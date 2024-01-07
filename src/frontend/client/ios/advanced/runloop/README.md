---
title: Runloop
icon: hashtag

index: false

---

<!--more -->

## reference

- [CFRunLoopRef 开源代码](http://opensource.apple.com/source/CF/CF-1151.16/)
- [2015-05-18 深入理解RunLoop - 郭曜源](http://blog.ibireme.com/2015/05/18/runloop/)
- [2015-03-20 CFRunLoop - 戴铭](https://github.com/ming1016/study/wiki/CFRunLoop)

------

- [2022-04-02 当面试官问Runloop时，想听到的答案是什么？](https://juejin.cn/post/7081932582576717831)
- [2022-04-04 由点入面吃透RunLoop](https://juejin.cn/post/7082739417370066974)
- [2020-07-15 秒杀面试官的RunLoop底层原理](https://juejin.cn/post/6850418117169840135)


## UIApplicationMain
> `iOS` 程序启动的入口 `main` 函数中的 `UIApplicationMain` 就是启动了一个 `RunLoop`

```objc
// 通过以下代码，“end main” 不会打印。可以测试出，UIApplicationMain一直没有返回值。
int main(int argc, char * argv[]) {
    @autoreleasepool {
        NSLog(@"start main");
        int result = UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
        NSLog(@"end main");
        return result;
        
    }
}
```

## RunLoop

| framework | API 
| --- | --- 
| Foundation        | NSRunLoop 
| CoreFoundation    | CFRunLoopRef 

- 核心类

    | 核心类 | 说明 |
    | --- | ---
    | `CFRunLoopRef`            | RunLoop 对象，一个 Loop 包含多个 Mode
    | `CFRunLoopMode`           | RunLoop 运行模式
    | `CFRunLoopSourceRef`      | 事件源 (输入源)
    | `CFRunLoopTimerRef`       | 基于时间的触发器（如 : NSTimer）
    | `CFRunLoopObserverRef`    | RunLoop 的观察者，能够监听 RunLoop 的状态改变
    
- CFRunLoopMode
    > 每个 Mode 包含若干个 `Source/Timer/Observer`
    > 切换 Mode，需要退出 Loop，再重新创建另一个 Mode 的 Loop
    
    | RunLoopMode (运行模式) | 说明 
    | --- | --- 
    | `kCFRunLoopDefaultMode`       | App 的默认 Mode，通常主线程是在这个Mode下运行 
    | `UITrackingRunLoopMode`       | 界面跟踪 Mode，用于 ScrollView 追踪触摸滑动，保证界面滑动时不受其他 Mode 影响 
    | `UIInitializationRunLoopMode` | 在刚启动 App 时第进入的第一个 Mode，启动完成后就不再使用 
    | `GSEventReceiveRunLoopMode`   | 接受系统事件的内部 Mode，通常用不到 
    | `kCFRunLoopCommonModes`       | 这是一个占位用的 Mode，不是一种真正的 Mode。被标记为 common modes 模式 kCFRunLoopDefaultMode UITrackingRunLoopMode 两种模式。 
    
- CFRunLoopSourceRef
    
    | RunLoopSource (输入源) | 说明
    | --- | --- 
    | `Source0` | 非基于 Port 的
    | `Source1` | 基于 Port 的

- CFRunLoopActivity

    | RunLoopActivity (观察者活动状态) | 说明
    | --- | ---
    | `kCFRunLoopEntry`             | 即将进入 Loop  
    | `kCFRunLoopBeforeTimers`      | 即将处理 Timer
    | `kCFRunLoopBeforeSources`     | 即将处理 Source
    | `kCFRunLoopBeforeWaiting`     | 即将进入休眠
    | `kCFRunLoopAfterWaiting`      | 刚从休眠中唤醒
    | `kCFRunLoopExit`              | 即将推出 Loop
    | `kCFRunLoopAllActivities`     | 


## RunLoop & Thread

- RunLoop 和线程一一对应。
- 主线程默认会创建一个 Loop 并启动。
- 其它线程 Loop 默认不会启动，需要我们手动启动。
- 存储在全局字典中 (`key: 线程 ; value: Loop`)
