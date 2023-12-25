---
title: Flutter
icon: hashtag

index: true

---

<!-- more -->

## `Flutter`

> 命令式 `UI` vs 声明式 `UI`
  
  * 命令式 : 告诉程序一步一步如何搭建我所需要的界面，类似做菜的教程
  * 声明式 : 告诉程序我需要一个怎样的界面，类似做菜的菜单

> `Widget` `Element` `RenderObject` 之间的关系？

  `Flutter` 的三棵树，代表了使用树的数据结构构成的三种元素。
  
  * `Widget` 树，可以理解为对 `UI` 的一些配置。
  * `Element` 树，这个是真正进行 `UI` 元素。
  * `RenderObject` 树，代表渲染树 

> `Flutter` 跨平台是如何实现的？

  `Flutter` 其实主要实现了两大块，一个是视图层的渲染，另一个调用原生功能。对于一款应用来说，核心就是展示给用户界面，再有就是与用户交互，交互过程中可能会涉及一些设备功能的调起(摄像头、麦克风、相册等)。
  
  * 界面渲染 : `Skia` 绘制引擎进行视图的统一渲染
  * 原生通信 : 通过 `Channel` 机制进行与原生进行交互
    - `BasicMessageChannel` : 用于基本的字符串信息通信
    - `MethodChannel` : 方法调用通信
    - `EventChannel` : 数据流通信
  
> `Flutter` 与 `RN` (`React Native`) 不同之处？

> 为什么说 `Flutter` 是原生的？

> `Flutter` 的优缺点?

> `Flutter` 的渲染原理？

## `Widget`

> `ListView` 与 `Sliver` 区别  

> `InheritedWidget` 作用

## `lifecycle` - “生命周期”

> `Flutter` 的生命周期？

  * `StatelessWidget` : `build`
  * `StatefulWidget` : `initState` -> ``
  
## `state` - “状态管理”

> `Provider` `BLoc` `GetX` 区别
  
## `AOT` vs `JIT` 

- AOT(Ahead Of Time) : 提前编译或运行前编译，程序运行前已经编译成对应平台的机器码，可以直接运行。
- JIT(Just In Time) : 即时编译或运行时编译，程序运行时编译成运行平台的机器码，提高运行效率。
  
## `hot reload` - “热重载”

> `hot reload`(热重载)、`hot restart`(热重启)、`hot update`(热更新)？


> `Flutter` 是如何实现热重载的？
  
## `thread` - “线程模型”

> `Future` 与 `microtask` 两者的执行顺序
  
## `memory` - “内存管理”

> `Flutter` 的内存管理
  
## `optimization` - “优化”

> `Flutter` 列表优化方案？

> `Flutter` 包体积如何优化？

  包体积的优化说到底就是包里面所含有资源的优化，主要包含两类文件一类是资源文件，另一个类是二进制文件。
  
  * 资源文件的优化: 图片的压缩，bundle 优化，无用资源的移除，资源的动态下发
  * 二进制文件优化: 无用代码的移除；减少第三方的依赖；编译优化，主要有编译参数相关，以及底层编译生成产物优化，需要去进行底层研究对一些无用功能的裁剪。

> `Flutter` 渲染优化方案？

  渲染优化来说主要涉及两个方面，其一是首次加载的渲染，其二是 `StatefulWidget` 状态改变时页面的重建渲染。
  
  * 首次渲染方面: 构建 `Widget` 时应该合理搭建，减少复杂度；能使用 `const` 的地方尽量使用
  * 重建渲染方面: 尽量减少状态改变引起重建区域；减少 `saveLayer()`的触发
  
  触发 `saveLayer()`
    * ShaderMask
    * ColorFilter
    * Chip & `disabledColorAlpha != 0xff`
    * Text & `overflowShader`