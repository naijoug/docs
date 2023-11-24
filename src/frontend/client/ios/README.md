---
title: iOS
icon: hashtag

index: false

---

<!-- more -->

## catalog

- [基础知识](basic/README.md)
- [进阶知识](advanced/README.md)
- [小技巧](tip/README.md)

## reference

- [Apple Developer](https://developer.apple.com)
- [App Store Connect](https://appstoreconnect.apple.com)
- [Apple Developer Documentation](https://developer.apple.com/documentation)

- [Awesome iOS](https://github.com/kechengsou/awesome-ios)
    > iOS 开发者资源大全
- [Open-Source iOS Apps](https://github.com/dkhamsing/open-source-ios-apps)
    > 📱 Collaborative List of Open-Source iOS Apps
- [Awesome iOS](https://ios.libhunt.com/)
    > A curated list of awesome iOS libraries, including Objective-C and Swift Projects
- [Awesome Swift](https://github.com/matteocrippa/awesome-swift)
    > A collaborative list of awesome Swift libraries and resources. Feel free to contribute!
- [TimLiu-iOS](https://github.com/Tim9Liu9/TimLiu-iOS)
    > iOS开发常用三方库、插件、知名博客等等
- [ObjC 中国](https://objccn.io/)
- [NSHipster 中文](https://nshipster.cn/)
- [iOS Core Animation: Advanced Techniques中文译本](https://github.com/ZsIsMe/ios_core_animation_advanced_techniques)

## Concept

- `Cocoa` vs `Cocoa Touch`

| 框架 | 包含框架 | 开发平台
| --- | --- | ---
| `Cocoa`         | `Foundation` & `AppKit`   | `macOS` 应用程序
| `Cocoa Touch`   | `Foundation` & `UIKit`    | `iOS` 应用程序

- `IAP` (iOS 内购)

| IAP | 服务器地址 
| --- | ---
| 测试 | https://sandbox.itunes.apple.com/verifyReceipt
| 正式 | https://buy.itunes.apple.com/verifyReceipt

- `APNS` (iOS 推送)
 
| APNS | 服务器地址
| --- | ---
| 测试 | gateway.sandbox.push.apple.com:2195 
| 发布 | gateway.push.apple.com:2195

- Services
    * Apple Push Notification service SSL (Sandbox)
        > 开发环境(沙盒)苹果推送证书
    * Apple Push Notification service SSL (Sandbox & Production)
        > 通用环境(沙盒和生成)苹果推送证书
    * VoIP Services Certificate
        > 苹果推送 VoIP 服务证书

- `@main` vs `@UIApplicationMain`

- iOS 唯一标识

  | 标识 | 说明
  | --- | ---
  | `IMEI`    | 国际移动设备身份码，`iOS 5` 以后苹果不再允许获取 IMEI
  | `MAC`     | 网络唯一标识符，`iOS 7` 之后
  | `UDID`    | iOS 设备的唯一识别码，在 `iOS 6`（2013 年 5 月 ） 以后被 Apple 禁止
  | `UUID`    | (Universally Unique Identifier) 通用唯一识别码，NSUUID 每次获取的值都会发生变化，但是它会保持唯一性
  | `IDFA`    | 广告标识符，每台设备的唯一ID。用户可以禁止、重置、还原，`iOS 6` 提出。
  | `IDFV`    | Vendor 标示符，也被称为厂商标识符。只要用户的设备中没有卸载当前 Vendor 的所有 APP，则不会发生变化。什么是 Vendor ？可以理解成 bundleID 的前两部分

- Drawing

  | 绘图 | 说明
  | --- | ---
  | `UIKit`             | `UIBezierPath`、`NSString`的`drawIn...`用于简化文本绘制
  | `Core Graphics`     | (Quartz 2D) 2D绘图系统
  | `Core Animation`    | 2D和3D动画
  | `Core Text`         | 文字绘制和布局  
  | `Core Image`        | 图片过滤处理
  | `OpenGL ES`         | 3D

- Network

  | 网络层 | 说明
  | --- | ---
  | `Cocoa`             | `NSURL`，`Bonjour`，`Game Kit`，`WebKit`
  | `Core Foundation`   | 基于 C 的 `CFNetwork` 和 `CFNetServices`
  | `OS`                | 基于 C 的 `BSD socket`

    * NSURLProtocol

- Store

  | 存储方式 | 说明
  | --- | ---
  | `Plist`             | XML 属性列表 
  | `Preference`        | 偏好设置，一种特殊的 Plist
  | `NSKeyedArchiver`   | 归档 (`NSCoding` `NSSecureCoding`)
  | `SQLite`            | 数据库 
  | `Core Data`         | `ORM` (Object Relational Mapping) 对象关系映射 
  | `KeyChain`          | 钥匙串，沙盒外的存储方式，删除应用不会丢失

- Sandbox

  | 目录 | 数据 | iTunes 同步 | 使用场景
  | --- | --- | --- | ---
  | `Documents`             | 需要持久化的数据 | √ | 一般存储应用重要的运行数据
  | `Library/Preference`    | 偏好设置数据     | √ | 一般存储应用设置数据
  | `Library/Caches`        | 缓存数据         | × | 一般存储体积大、不需要备份的非重要数据
  | `tmp`                   | 临时数据         | × | 应用没有运行时，系统会清除该目录下数据

- Touch & Event & Responder
    > `First responder` : 第一响应者
    > 
    > `Responder Chain` : 响应者链 `UIView -> UIViewController -> SuperView -> ... -> TopView -> Window -> UIApplication -> 丢弃`
    
    * [iOS 触摸事件全家桶](https://github.com/Lotheve/blogdemo/blob/master/TouchEventLib/README.md)
    
  | 核心方法 | 说明
  | --- | ---
  | `hitTest: withEvent:`     | 寻找并返回最合适的 view
  | `pointInside: withEvent:` | 判断点是否在当前 view 中

## GitHub

- [freshOS](https://github.com/freshOS)
    > Simple iOS tools to solve problems 99% of us have.
- [Yalantis](https://github.com/Yalantis)
    > Knowledge is power and the way to get power is by sharing knowledge. We are open source because this is a smart way to live, work and play.
- [Ramotion](https://github.com/Ramotion)
    > UI Engineering, UI/UX Design and Front-End Development Agency
- [NextLevel](https://github.com/NextLevel)
    > Camera Platform in Swift

## OpenSource Apps

- [Kickstarter for iOS](https://github.com/kickstarter/ios-oss)
- [Wikipedia iOS](https://github.com/wikimedia/wikipedia-ios)
- [Firefox for iOS](https://github.com/mozilla-mobile/firefox-ios)
- [WordPress for iOS](https://github.com/wordpress-mobile/WordPress-iOS) 

## Architecture

- [The Composable Architecture (TCA)](https://github.com/pointfreeco/swift-composable-architecture)
    > A library for building applications in a consistent and understandable way, with composition, testing, and ergonomics in mind.

## Animation

- [awesome iOS animation](https://github.com/onmyway133/awesome-ios-animation)
- [Animatable Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/AnimatableProperties/AnimatableProperties.html)
- [CAMediaTimingFunction playground](http://netcetera.org/camtf-playground.html)
- [tween-o-matic](https://github.com/simonwhitaker/tween-o-matic)
    > A Mac OS X app to help you design CAMediaTimingFunction curves

## Localized

- `InfoPlist.strings` : App 系统显示层面上的本地化的（如 App 名字）
    * [Cocoa Keys](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html)
    * [Core Foundation Keys](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html)
- `Localizable.strings` : 代码中用到的字符串用宏 `NSLocalizedString(key, comment)` 做本地化默认 .strings 文件
- `xxx.strings` : 自定义本地化文件，用宏 `NSLocalizedStringFromTable(key, tbl, comment)` 来指定 `.strings` 文件的来源

## Commands

  ```shell
  # 将 OC 代码转化为 C/C++ 代码
  clang -rewrite-objc main.m -o main.cpp
  # 只生成 iOS 平台下代码
  #   xcrun == Xcode Run
  #   -sdk    指定系统平台
  #   -arch   指定的架构
  xcrun -sdk iphoneos clang -arch arm64 -rewrite-objc main.m -o main-arm64.cpp

  # 查看xxx.app的uuid
  $ dwarfdump  --uuid xxx.app/xxx
  # 查看xxx.app.dSYM的uuid
  $ dwarfdump --uuid xxx.app.dSYM/Contents/Resources/DWARF/xxx

  # genstrings [-a] [-q] [-o <outputDir>] sourcefile
  # > 遍历当前目录，生成 Localizable.strings
  #   -a  在存在的文件后面追加内容
  #   -q  关闭多个键/值对的警告
  #   -o  指定输出目录
  $ genstrings -o en.lproj  *.m
  $ genstrings -o zh-Hans.lproj *.m
  # 遍历当前目录及所有子目录中的 .m 文件，生成 Localizable.strings
  $ find . -name \*.m | xargs genstrings -o en.lproj
  $ find ./ -name "*.m" -print0 | xargs -0 genstrings -o en.lproj # 与上面等价
  ```
    
## Debug Tool

- [flipper](https://github.com/facebook/flipper)
    > A desktop debugging platform for mobile developers.
- [FLEX](https://github.com/FLEXTool/FLEX)
    > An in-app debugging and exploration tool for iOS
- [Chisel](https://github.com/facebook/chisel)
    > Chisel is a collection of LLDB commands to assist debugging iOS apps.
- [DoKit](https://github.com/didi/DoKit)
    > 一款面向泛前端产品研发全生命周期的效率平台。
- [Knuff](https://github.com/KnuffApp/Knuff)
    > The debug application for Apple Push Notification Service (APNs).
- [ThemeEngine](https://github.com/CocoaDebug/CocoaDebug)
    > iOS Debugging Tool 🚀
    
## Tool

- [XcodesApp](https://github.com/RobotsAndPencils/XcodesApp) : 切换不同的 Xcode 版本
    > https://github.com/RobotsAndPencils/XcodesApp
- [XcodeProjects](https://github.com/DKalachniuk/XcodeProjects)
    > Switch between projects faster. Don't write "pod install", "pod update" and "cd your-project" anymore. Just click couple of buttons
- [Apple Party](https://github.com/37iOS/AppleParty)
- [ProfilesManager](https://github.com/shaojiankui/ProfilesManager)
    > Apple iOS/macOS Provisioning Profiles management,.provisionprofile, .mobileprovision files manager tool for mac
- [tuist](https://github.com/tuist/tuist)
    > 🚀 Create, maintain, and interact with Xcode projects at scale
- [Sourcery](https://github.com/krzysztofzablocki/Sourcery)
    > Meta-programming for Swift, stop writing boilerplate code.
- [ThemeEngine](https://github.com/alexzielenski/ThemeEngine)
    > OS X App to edit compiled .car files