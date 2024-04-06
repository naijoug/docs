---
title: 基础知识
icon: hashtag

index: false

---

<!-- more -->

## concept

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
    * `Apple Push Notification service SSL` (`Sandbox`)
        > 开发环境(沙盒)苹果推送证书
    * `Apple Push Notification service SSL` (`Sandbox` & `Production`)
        > 通用环境(沙盒和生成)苹果推送证书
    * `VoIP Services Certificate`
        > 苹果推送 `VoIP` 服务证书

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

- Localized

    * `InfoPlist.strings` : App 系统显示层面上的本地化的（如 App 名字）
      + [Cocoa Keys](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html)
      + [Core Foundation Keys](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html)
    * `Localizable.strings` : 代码中用到的字符串用宏 `NSLocalizedString(key, comment)` 做本地化默认 .strings 文件
    * `xxx.strings` : 自定义本地化文件，用宏 `NSLocalizedStringFromTable(key, tbl, comment)` 来指定 `.strings` 文件的来源
