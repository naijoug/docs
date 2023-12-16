---
title: UIKit
icon: hashtag

index: true
order: 3

---

<!-- more -->

## `UIKit`

### ❓你了解的 `UIKit` 结构？

## `UIView`

### ❓`UIView` & `CALayer` 是什么关系？ 

::: details

每个`UIView`都有一个对应的`CALayer`，称之为 `UIView` 的 backing layer（背部层）。`UIView` 和 `CALayer` 之间是互相关联的，`UIView` 负责处理触摸事件，而 `CALayer` 负责显示视图的内容。

- `UIView`：视图的基类，负责处理用户交互（例如触摸事件），也负责管理子视图（包括添加、删除、遍历子视图）。可以使用 `UIView` 的子类（如`UILabel`，`UIButton`等）创建特定的用户界面，也可以创建自定义视图来绘制复杂的界面。

- `CALayer`：是核心动画库(`Core Animation`)中的类，它负责呈现视图的内容。`UIView` 将很多渲染任务委派给 `CALayer`，例如视图的边框、圆角、阴影、图片等都是由 `CALayer` 来绘制和渲染的。此外 `CALayer` 还负责处理动画效果。

:::

> 为什么要这样设计？

::: details

  这是由于iOS系统的历史原因。在早期的iOS版本中，只有 `CALayer`，并没有 `UIView`，所有的界面渲染和动画都需要通过手动控制 `CALayer` 来完成。
  
  后来，苹果引入了 `UIView`，用以简化界面的创建和管理，并将一些低层的渲染和动画任务委派给 `CALayer`。
  
  这样的设计使得开发者可以更高效地创建和管理用户界面，同时也保持了对底层渲染和动画的高级控制能力。

:::

### ❓`layoutSubviews` 那些情况下会触发？

::: details 💡

  > `layoutSubviews` 在 iOS 的 UIView 的生命周期中，是负责布局及排版子视图的方法。

  - 在初始化 `UIView` 并添加到界面上时，系统会自动调用 `layoutSubviews` 方法进行子视图的布局。
  - 当 `UIView` 的 `bounds` 发生变化，如改变宽高、旋转设备时，系统会调用 `layoutSubviews`。
  - 当直接调用 `UIView` 的 `setNeedsLayout`或者 `layoutIfNeeded` 方法时，系统会调用 `layoutSubviews`。
    * `setNeedsLayout` 会标记当前视图被标记为需要重新布局，然后在接下来的更新周期中，调用 `layoutSubviews` 对标记进行重新布局
    * `layoutIfNeeded` 则会立即对视图进行重新布局，通常在动画的 `block` 内使用
  - 当视图的某个子视图的 `frame` 被显式地修改，也会触发父视图的 `layoutSubviews`。
  - 添加或者删除子视图的时候，也会触发父视图的 `layoutSubviews`。

:::

### ❓根据 `UIControl` 实现 `UIButton`

::: details



:::

## 屏幕渲染

::: details 💡

  | 渲染类型 | 说明
  | --- | ---
  | CPU 渲染 | 简单视图 CPU 渲染可能高于 GPU (不需要创建缓冲区和上下文切换)
  | GPU 渲染 | GPU 浮点运算能力强于 CPU，所以 GPU 渲染效率高于 CPU

  * **屏幕渲染**(On-Screen Rendering) : 在当前屏幕的缓冲区进行渲染。优点：不需要创建新的缓存，也不需要进行上下文切换，性能较好；缺点：缓存大小受限制，无法进行复杂的操作。
  * **离屏渲染**(Off-Screen Rendering) : GPU 在当前屏幕外，新开辟了一个缓冲区进行图片的渲染和合成。渲染完成之后再放入当前屏幕的缓冲区。这个过程需要 CPU 调度，将任务分配给 GPU 进行渲染然后再将渲染结果返回，需要进行上下文切换和内存读写等操作，对性能影响较大。
  
:::
  
### ❓哪些场景可以触发离屏渲染？
  
::: details 💡

  离屏渲染的意思是，图形或文字无法在当前屏幕缓冲区完成渲染，需要额外创建一个图形缓冲区进行操作，完成后再加载到当前屏幕缓冲区显示。

  `iOS` 以下几种场景会触发离屏渲染：

  - 使用阴影效果：如果给 `UIView` 添加阴影效果，会触发离屏渲染。如果可以的话，使用 `shadowPath` 来指定阴影路径，可以避免离屏渲染。
    > `layer.shadowXXX`
   
  - 使用圆角效果：对 `UIView` 的图层进行圆角裁剪(`cornerRadius`)时，如果同时设置了 `masksToBounds` 也会触发离屏渲染。
    > `layer.masksToBounds = true & layer.cornerRadius > 0`
   
  - 使用遮罩(mask)：`CALayer` 的 `mask` 属性可以设置遮罩，给视图层添加遮罩也会触发离屏渲染。
    > `layer.mask`
   
  - 使用光栅化：`shouldRasterize` 属性可以将图层缓存为位图并在 `GPU` 中重用，但这同时也会触发离屏渲染。
    > `layer.shouldRasterize = true`
   
  - 抗锯齿：设置视图的 `layer` 的 `allowsEdgeAntialiasing` 属性为 `true` 会触发离屏渲染。因为抗锯齿需要对视图的边缘像素进行额外的计算和混合，这些操作不能在当前屏幕的缓冲区完成，因此需要离屏渲染。所以，在大部分情况下，如果不是对视觉效果有非常高要求，通常不推荐开启抗锯齿，因为这会增加GPU压力，降低性能。
    > `layer.allowsEdgeAntialiasing = true`

  - 不透明度：设置视图的 `alpha` 值本身不会触发离屏渲染。但是有一种场景需要注意，那就是对有子视图的视图设置 `alpha` 值，并且该视图的 `opaque` 属性为 `true` 时，可能会造成额外的离屏渲染。这是因为系统需要先单独绘制这个视图和它的子视图到一个临时的缓冲区，然后将这个临时的缓冲区以指定的 `alpha` 值（也就是透明度）绘制到屏幕上。因此，为了避免这种离屏渲染，当你需要设置视图的`alpha` 值时，应该设置它的 `opaque` 属性为 `false`。
    > `opacity & opaque = true`

  离屏渲染对系统资源消耗比较大，因为它需要创建新的缓冲区，进行上下文切换，最后再把缓冲区的内容载入到屏幕缓冲区。如果在一个视图中使用过多的离屏渲染，可能会导致性能问题，所以在开发过程中需要尽量避免触发离屏渲染。

:::

## event dispatch - “事件分发”

### ❓用户点击屏幕上按钮，整个过程讲一下？

::: details

  iOS 系统用户点击屏幕上的按钮大致过程如下：

  - 当用户触摸屏幕时，硬件会将触摸事件转化为一个或一系列的 `UITouch` 对象，并将它们与一次特定的事件(`UIEvent`对象)关联起来。系统会将触摸事件派发给对应的 `UIApplication` 对象。

  - `UIApplication` 对象接收到触摸事件后，会将事件传递给合适的 `UIWindow` 对象。`UIWindow` 对象再将其分发给正在显示的、并且能够响应事件的 `UIView` 对象。 

  - 如果此 `UIView` 对象就是我们所点击的视图(如：按钮 `UIButton` 对象)，那么此按钮会接收到此点击事件。

  - `UIButton` 对象接收到手势事件后，便会根据事件类型来调用对应的方法。

  - 若 `UIButton` 对象存在 `UIControl` 事件（比如 `TouchUpInside`）并且挂接有对应的 Action（函数方法），那么系统就会执行这个 Action。

:::

### ❓事件响应链（Event Responder Chain） 这个详细的讲讲？

::: details

  `Event Responder Chain` 事件响应链 : 是指当某一个事件发生，如触摸事件、系统事件等，这个事件会从一个对象传递到另一个对象的链式机制。

  当手指触摸屏幕时，`UIKit` 会创建一个包含了触摸的所有信息的事件对象，并会将该事件对象发送给视图层级中最前面的视图对象，即被触摸的视图。
  如果该视图不能处理该事件，那系统就会将事件传递给它的上一级视图，也就是它的 `superview`；
  如果上级视图也不能处理，那就接着向上传递，直到传递给窗口，再接着传递给 `UIApplication`，最后传递给 `UIApplication` 的代理。
  
  这样从一个对象向另一个对象传递的链式过程就是事件响应链。

  详细的事件传递流程如下：

  - 如果一个视图是用户交互禁用的（`userInteractionEnabled = false`），或是隐藏的（`hidden = true`），或者是透明的(`alpha = 0`), 那么这个视图和他的子视图就无法成为第一响应者，也就接收不到任何事件。

  - 如果当前视图无法处理接收到的事件或者消息，那么它会将这个事件或消息传递给自己的 `superview`，如此往复，如果都处理不了的话，那么最后会传递给 `UIWindow` 对象。

  - 如果 `UIWindow` 对象也无法处理接收的事件或消息，那么就会传递给 `UIApplication` 对象。

  - 最后由 `UIApplication` 将事件或消息传递给应用程序的代理对象（也就是通常所说的`AppDelegate`）。

  这种设计机制可以保证所有的事件或消息都能得到处理，并且事件或消息的处理是有优先级的，即由具体的视图优先处理，若其无法处理再逐级上报，直到找到可以处理的对象。且每一个响应者都可以选择向上层的响应者传递事件，以便于上层响应者做一些统一的处理。

:::