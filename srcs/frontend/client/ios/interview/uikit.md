# `UIView` 那些事 

## `UIView` vs `CALayer`

## `UIView` vs `CALayer` 为什么要这样设计？

## 屏幕渲染

| 渲染类型 | 说明
| --- | ---
| CPU 渲染 | 简单视图 CPU 渲染可能高于 GPU (不需要创建缓冲区和上下文切换)
| GPU 渲染 | GPU 浮点运算能力强于 CPU，所以 GPU 渲染效率高于 CPU

  * **屏幕渲染**(On-Screen Rendering) : 在当前屏幕的缓冲区进行渲染。优点：不需要创建新的缓存，也不需要进行上下文切换，性能较好；缺点：缓存大小受限制，无法进行复杂的操作。
  * **离屏渲染**(Off-Screen Rendering) : GPU 在当前屏幕外，新开辟了一个缓冲区进行图片的渲染和合成。渲染完成之后再放入当前屏幕的缓冲区。这个过程需要 CPU 调度，将任务分配给 GPU 进行渲染然后再将渲染结果返回，需要进行上下文切换和内存读写等操作，对性能影响较大。
  
> 哪些场景可以触发离屏渲染？
  
  * 圆角 `layer.masksToBounds = YES & layer.cornerRadius > 0`
  * 图层蒙版 `layer.mask`
  * 阴影 `layer.shadowXXX (除 shadowPath)`
  * 光栅化 `layer.shouldRasterize = YES`
  * 抗锯齿 `antialiasing`
  * 不透明 `opacity`
