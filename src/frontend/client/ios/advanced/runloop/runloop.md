# `runloop` - “运行循环”

## 是个啥？

  是 `iOS` 中一种管理线程执行流程的机制。

## 能干啥？

> 线程保活
    


> 性能检测

  通过监听主 `RunLoop` 各个 `Activity` 状态变化，通过观察每种状态变化时间点来确认性能问题。通过计算进入和退出每次 `RunLoop` 的时间差，来确认是否超过了屏幕刷新阈值(60FP = 1/60s = 16.7ms)，如果超过这个值可以知晓每次 `UI` 刷新低于 `60FP` 存在卡顿情况。
    
## 底层实现

> runloop 的定义

```swift

```

> [Swift - RunLoop](https://github.com/apple/swift-corelibs-foundation/blob/main/Sources/Foundation/RunLoop.swift)

> [GUNStep 中的实现](https://github.com/gnustep/libs-base/blob/master/Source/NSRunLoop.m)

```objc

```