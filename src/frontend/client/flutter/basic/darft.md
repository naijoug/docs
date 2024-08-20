---
title: Darft
icon: hashtag

index: false

---

<!-- more -->

- [2023-10-23 FlutterCandies](https://juejin.cn/post/7292450647303208999)
- [2018-09-03 Flutter 快速上车之 Widget](https://juejin.cn/post/6844903669108834311)

- [Flutter 单例模式](https://flutter.cn/community/tutorials/singleton-pattern-in-flutter-n-dart)

## Google Pay

- [2024-06-05 2024年Google Play 最新内购/订阅实现](https://juejin.cn/post/7376532114106236979)
- [2023-05-15 App集成谷歌内购(GooglePay)的全过程](https://juejin.cn/post/7233310081809760317)

## Concept

| flutter 项目 | 说明
| -- | --
| `App`     | 应用，适用于 `flutter` 为主的开发方法，其它端为壳工程 
| `Moudle`  | 模块，适用于 `flutter` 以模块集成的混合开发方式
| `Plugin`  | 插件，包含原生代码的插件包
| `Package` | 包，纯 `dart` 的工具包

## 混合开发

- module 方式
- framework 方式
- Cocoapods 方式
 
## Native 消息通道

- BasicMessageChannel : 传递字符串和半结构化的信息
- MethodChannel : 传递方法调用 (method invocation)
- EventChannel : 数据流 (event streams) 的通信

------

- [2018-08-28 深入理解Flutter Platform Channel](https://juejin.cn/post/6844903666193956872)

## Flutter 3.x
> 全平台支持 (ios、android、web、windows + => macOS、linux)

- 全平台支持 (稳定了 macOS、linux)
- 无障碍支持
- DevTools 增强

---

## 埋点

- [2023-03-31 Flutter 全埋点方案详解](https://juejin.cn/post/7216604612404723770)
- [2021-10-04 实现一个精准滑动埋点](https://flutter.cn/community/tutorials/flutter-accurate-rolling-exposure-practice)
- [2020-11-07 Flutter 之全埋点思考与实现](https://juejin.cn/post/6892371163859976199)
- [2019-06-13 一个高准确率的 Flutter 埋点框架如何设计](https://juejin.cn/post/6844903864479514631)

- [flutter_page_tracker](https://github.com/SBDavid/flutter_page_tracker)
    > flutter埋点、弹窗埋点、页面埋点事件捕获框架，支持普通页面的页面曝光事件（PageView），页面离开事件（PageExit）。支持在TabView和PageView组件中发送页面曝光和页面离开

## Widget

`package:flutter/material.dart`

- `StatelessWidget` 
- `StatefulWidget`
  
`Widget` 的生命周期
  
- `StatelessWidget`
    
- `StatefulWidget`

常用的 Widget

- MaterialApp : 
- Scaffold : 脚手架
- ListView : 列表
- ListTile : 
- CircleAvatar : 原形头像

Text : 显示文字
Image : 显示图片 -> AssetImage
PopupMenuButton

FutureBuilder

InheritedWidget

## 布局系统

- Scaffold : 脚手架

- Row、Column、Stack : 布局方向

- Container、Expanded、Positioned、AspectRatio

- Center、Chip、SizedBox、BoxDecoration

mianAxis: 主轴
crossAxis : 交叉轴

flexbox : 弹性盒子布局

padding vs margin

## 导航系统 

- Navigator 2.0

  页面导航管理
  1.0 版本存在很多问题

## 生命周期
  
## 状态管理

- [Flutter 状态管理框架 Provider 和 Get 分析](https://flutter.cn/community/tutorials/state-management-package-getx-provider-analysis)

<!--  -->

- [2021-07-14 Flutter GetX深度剖析](https://juejin.cn/post/6984593635681517582)
- [2021-09-26 Flutter 对状态管理的认知与思考](https://juejin.cn/post/7012044249386450981)

## 渲染引擎

- Key
    * GlobalKey
    * LocalKey
        * ValueKey
        * ObjectKey
        * UniqueKey

增量渲染

## 热重载

flutter_tools

## 线程模型

- `Flutter` 的线程模型 : 双队列设计(微任务队列和事件队列)，微任务队列比事件队列具有更高优先级。 
- `Flutter` 的线程管理 : 4 个 Runner Thread ()
  
- Microtask : 微任务
- Isolate : 独立线程

## 播放器

> 常用的播放器有哪些？
  
  * video_player : `flutter` 官方提供的播放器
  * video_player_plus : 扩展的 `video_player`
  * Chewie : 封装的 `video_player`
  * FijkPlayer : 封装的 `ijkPlayer` 
 
> FijkPlayer 状态机

  `IDLE` -> `Initialized` -> `Async Preparing` -> `Prepared`
    -> `Started` <--> `Paused` 
    -> `Completed`
    -> `Stopped` 
    -> `Error`
    -> `End`
 
> 播放器的插件化

  插件引用方式
  * Local
  * Git
  * Pub