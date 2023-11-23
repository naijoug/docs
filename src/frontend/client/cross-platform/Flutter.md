---
title: Flutter
index: false
icon: hashtag

---

<!-- more -->

> Flutter makes it easy and fast to build beautiful apps for mobile and beyond

## Reference

- [Flutter](https://github.com/flutter/flutter)
- [Flutter 中文网](https://flutter.cn)
- [深入浅出 Dart](https://www.coding-time.cn/dart/preamble.html)
- [猫哥 Flutter](https://wiki.ducafecat.tech/)
- [Flutter 实战](https://github.com/flutterchina/flutter_in_action_2nd)
- [Flutter开发实战详解系列](https://github.com/CarGuo/gsy_flutter_book)
    > 本系列将完整讲述：如何快速从 0 开发一个完整的 Flutter APP，配套高完成度 Flutter 开源项目 GSYGithubAppFlutter ，同时会提供一些Flutter的开发细节技巧，之后深入源码和实战为你全面解析 Flutter 。
- [fvm](https://github.com/leoafarias/fvm)
    > Flutter Version Management: A simple CLI to manage Flutter SDK versions.

------

- [2023-10-23 FlutterCandies](https://juejin.cn/post/7292450647303208999)

## Usage

```shell
$ flutter doctor # 检查 flutter 环境是否正确
# flutter create 创建工程
#  配置
#   -template=(app/module/package/plugin/skeleton) 创建工程模板
#   -platforms=(ios/android/windows/linux/macos/web) 指定平台
#   -a 指定 android 开发语言 (默认: kotlin)
#   -i 指定 ios 开发语言 (默认: swift)
$ flutter create test # 创建 flutter test 项目
$ flutter pub get
$ flutter run
$ flutter clean
```

## Concept

| flutter 项目 | 说明
| -- | --
| `App`     | 应用，适用于 `flutter` 为主的开发方法，其它端为壳工程 
| `Moudle`  | 模块，适用于 `flutter` 以模块集成的混合开发方式
| `Plugin`  | 插件，包含原生代码的插件包
| `Package` | 包，纯 `dart` 的工具包
  
`pub.dev`
  
```shell
# 发布 packages
$ flutter packages pub publish --dry-run # 检查包
$ flutter packages pub pushlish # 发布包
```
 
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

## DevTools

- hot reload : 热启动
- inspector 布局调试

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
  
## 混合开发

- module 方式
- framework 方式
- Cocoapods 方式

```shell

# 构建 framework
$ flutter build ios-framework --output=path/to/

# 构建 cocoapods framework
$ flutter build ios-framework --cocoapods --output=path/to/
```

## lib

- [GetX](https://github.com/jonataslaw/getx)
    > Open screens/snackbars/dialogs/bottomSheets without context, manage states and inject dependencies easily with Get.
- [flutter_boost](https://github.com/alibaba/flutter_boost)
    > FlutterBoost is a Flutter plugin which enables hybrid integration of Flutter for your existing native apps with minimum efforts
    
## interview

- [Flutter Interview Questions](https://github.com/h65wang/flutter_interview_questions)
- [flutter_interviews](https://github.com/hornhuang/flutter_interviews)
    > 🇨🇳 面试题、学习资料、私房菜，这里是 flutter 中文学习宝库 👩‍🎓‍👜，想要的知识应有尽有，点击 star 不迷路！ 🌟🌟

------

- [2022-05-03 浅谈 Flutter 编译原理](https://juejin.cn/post/7093388612078665764)
- [2022-01-24 知道 Flutter 生命周期？](https://juejin.cn/post/7056646298073563166)
- [2020-06-26 算是flutter最完整题库了](https://juejin.cn/post/6844904199726039054)
- [2020-04-24 Android-Flutter面经](https://juejin.cn/post/6844904136937324552)













