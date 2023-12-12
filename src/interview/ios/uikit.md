---
title: UIKit
icon: hashtag

index: true
order: 3

---

<!-- more -->

## `UIKit`

### 你了解的 `UIKit` 结构？

## `UIView`

### `UIView` vs `CALayer` 为什么要这样设计？

### `layoutSubviews` 那些情况下会触发？

  > `layoutSubviews` 在 iOS 的 UIView 的生命周期中，是负责布局及排版子视图的方法。

  - 在初始化 `UIView` 并添加到界面上时，系统会自动调用 `layoutSubviews` 方法进行子视图的布局。
  - 当 `UIView` 的 `bounds` 发生变化，如改变宽高、旋转设备时，系统会调用 `layoutSubviews`。
  - 当直接调用 `UIView` 的 `setNeedsLayout`或者 `layoutIfNeeded` 方法时，系统会调用 `layoutSubviews`。
    * `setNeedsLayout` 会标记当前视图被标记为需要重新布局，然后在接下来的更新周期中，调用 `layoutSubviews` 对标记进行重新布局
    * `layoutIfNeeded` 则会立即对视图进行重新布局，通常在动画的 `block` 内使用
  - 当视图的某个子视图的 `frame` 被显式地修改，也会触发父视图的 `layoutSubviews`。
  - 添加或者删除子视图的时候，也会触发父视图的 `layoutSubviews`。

### 根据 `UIControl` 实现 `UIButton`

## 屏幕渲染

| 渲染类型 | 说明
| --- | ---
| CPU 渲染 | 简单视图 CPU 渲染可能高于 GPU (不需要创建缓冲区和上下文切换)
| GPU 渲染 | GPU 浮点运算能力强于 CPU，所以 GPU 渲染效率高于 CPU

  * **屏幕渲染**(On-Screen Rendering) : 在当前屏幕的缓冲区进行渲染。优点：不需要创建新的缓存，也不需要进行上下文切换，性能较好；缺点：缓存大小受限制，无法进行复杂的操作。
  * **离屏渲染**(Off-Screen Rendering) : GPU 在当前屏幕外，新开辟了一个缓冲区进行图片的渲染和合成。渲染完成之后再放入当前屏幕的缓冲区。这个过程需要 CPU 调度，将任务分配给 GPU 进行渲染然后再将渲染结果返回，需要进行上下文切换和内存读写等操作，对性能影响较大。
  
### 哪些场景可以触发离屏渲染？
  
  * 圆角 `layer.masksToBounds = YES & layer.cornerRadius > 0`
  * 图层蒙版 `layer.mask`
  * 阴影 `layer.shadowXXX (除 shadowPath)`
  * 光栅化 `layer.shouldRasterize = YES`
  * 抗锯齿 `antialiasing`
  * 不透明 `opacity`



## event dispatch - “事件分发”

> 用户点击屏幕上按钮，整个过程讲一下？