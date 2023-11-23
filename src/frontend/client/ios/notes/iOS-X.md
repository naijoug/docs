# iOS X

## Reference

- [Apple Technologies](https://developer.apple.com/documentation/technologies)
- [New Technologies WWDC22](https://developer.apple.com/documentation/new-technologies-wwdc22)
- [WWDC Notes](https://www.wwdcnotes.com/)

------

- [iOS 15 - iOS 16 开发适配](https://github.com/XLsn0w/iOS16)
- iOS 14
    * [iOS 14 相册适配指南](https://mp.weixin.qq.com/s/eGHi17N-XOsZB2Bh-tZZXA)
    * [iOS14 隐私适配及部分解决方案](https://juejin.im/post/6850418120923250701)
- [iOS13AdaptationTips](https://github.com/ChenYilong/iOS13AdaptationTips)
- [iOS12AdaptationTips](https://github.com/ChenYilong/iOS12AdaptationTips)
- [iOS11AdaptationTips](https://github.com/ChenYilong/iOS11AdaptationTips)
- [iOS10AdaptationTips](https://github.com/ChenYilong/iOS10AdaptationTips)
- [iOS9AdaptationTips](https://github.com/ChenYilong/iOS9AdaptationTips)
- [iOS6、7、8、9新特性汇总和适配说明](https://blog.6ag.cn/1195.html)

## iPhone Device

- [Screen Sizes](https://www.screensizes.app/)
- [iOS Resolution](https://www.ios-resolution.com/)
    > Display proerties of every iPhone, iPad and iPod touch Apple ever made
- [iPhone Comparison](https://socialcompare.com/en/comparison/apple-iphone-product-line-comparison)
- [iOS Devices](https://www.innerfence.com/howto/apple-ios-devices-dates-versions-instruction-sets)
    > Releases, Firmware, Instruction Sets, Screen Sizes

| iPhone 机型  | 设备分辨率(Pixel) | 尺寸 | 逻辑分辨率(Point) | Scale Factor 
| ---       | ---           | ---   | ---           | --- 
| `3GS`     | 320 * 480     | 3.5   | 320 * 480     | @1x 
| `4/4S`    | 640 * 960     | 3.5   | 320 * 480     | @2x 
| `5/5C/5S` | 640 * 1136    | 4     | 320 * 568     | @2x 
| `6 ~ 8`   | 750 * 1334    | 4.7   | 357 * 667     | @2x  
| `6P ~ 8P` | 1242 * 2208   | 5.5   | 414 * 736     | @3x 
| `X/XS`    | 1125 * 2436   | 5.8   | 375 * 812     | @3x 
| `XR`      | 828 * 1792    | 6.1   | 414 * 896     | @2x
| `XS Max`  | 1242 * 2688   | 6.5   | 414 * 896     | @3x

## iOS 16

- `Swift Charts` : Swift 图表框架
    > Construct and customize charts on every Apple platform.
    
## iOS 15

- `StoreKit 2` : 应用内购买
    * [Implementing a store in your app using the StoreKit API](https://developer.apple.com/documentation/storekit/in-app_purchase/implementing_a_store_in_your_app_using_the_storekit_api)

## iOS 14

- `WidgetKit` : iOS 小组件
    > Show relevant, glanceable content from your app as widgets in iOS and macOS, and as watch complications.
- `App Clips` : 轻应用
    > Provide users a shortcut to selected content and features of your app.
- `Accessibility` : 无障碍框架
    > Make your apps accessible to everyone who uses Apple devices.
- `System`
    > Perform low-level file operations using type-safe APIs.

## iOS 13

- **`SwiftUI`**
    > Declare the user interface and behavior for your app on every platform.
- **`Combine`**
    > Customize handling of asynchronous events by combining event-processing operators.
- `MetricKit` : 崩溃和性能分析
    > Aggregate and analyze per-device reports on exception and crash diagnostics and on power and performance metrics.
- `VisionKit` : 文档识别框架
    > Add Live Text features to images, scan data in the camera’s viewfinder, and scan documents.
- `RealityKit` : 增强现实
    > Simulate and render 3D content for use in your augmented reality apps.
- `Core Haptics` : 触觉反馈
    > Compose and play haptic patterns to customize your iOS app’s haptic feedback.

## iOS 11

- `ARKit` : 虚拟现实(Augmented reality)
    > Integrate iOS device camera and motion features to produce augmented reality experiences in your app or game.
- `Core ML` : 机器学习框架
    > Integrate machine learning models into your app.
- `Core NFC` : NFC 框架
    > Detect NFC tags, read messages that contain NDEF data, and save data to writable tags.
- `Vision` : 视觉识别框架
    > Apply computer vision algorithms to perform a variety of tasks on input images and video.

## iOS 10

- `UserNotifications` : 用户推送服务
    > Push user-facing notifications to the user’s device from a server, or generate them locally from your app.
- `Speech` : 语音识别框架
    > Perform speech recognition on live or prerecorded audio, receive transcriptions, alternative interpretations, and confidence levels of the results.
    * [Speech Recognition API](https://developer.apple.com/videos/play/wwdc2016/509) : WWDC 
    * [SpeakToMe](https://developer.apple.com/library/archive/samplecode/SpeakToMe) : iOS Sample, Using Speech Recognition with AVAudioEngine
    * [Transcribing Speech to Text](https://developer.apple.com/tutorials/app-dev-training/transcribing-speech-to-text)
- `Messages` : 消息框架
    > Create app extensions that allow users to send text, stickers, media files, and interactive messages.
- `SiriKit` : Siri
    > Empower users to interact with their devices through voice, intelligent suggestions, and personalized workflows.

## iOS 9

- [`applinks`][applinks] : 深度链接 (Universal Links)
    > The root object for a universal links service definition.
- `Contacts` : 联系人
    > Access the user's contacts and format and localize contact information.
- `Compression` : 压缩框架
    > Leverage common compression algorithms for lossless data compression.
- `ReplayKit` : 录屏
    > Record or stream video from the screen, and audio from the app and microphone.

[applinks]: https://developer.apple.com/documentation/bundleresources/applinks

## iOS 8

- **`Swift`**
    > Build apps using a powerful open language.
- [`UIVisualEffect`][UIVisualEffect] : 毛玻璃效果
    > An initializer for visual effect views and blur and vibrancy effect objects.
- `WebKit` : 网页框架
    > Integrate web content seamlessly into your app, and customize content interactions to meet your app’s needs.
- `PhotoKit` : 相册处理
    > Work with image and video assets managed by the Photos app, including those from iCloud Photos and Live Photos.
- `AVKit` : 多媒体框架
    > Create user interfaces for media playback, complete with transport controls, chapter navigation, picture-in-picture support, and display of subtitles and closed captions.
- `HealthKit` : 健康框架
    > Access and share health and fitness data while maintaining the user’s privacy and control.
- `HomeKit` : 物联网
    > Configure, control, and communicate with home automation accessories.

[UIVisualEffect]: https://developer.apple.com/documentation/uikit/uivisualeffect

## iOS 7

- `UIDynamicAnimator` : 物理仿真动画
    > An object that provides physics-related capabilities and animations for its dynamic items, and provides the context for those animations.
- `SpriteKit` : (精灵) 2D 游戏框架
    > Add high-performance 2D content with smooth animations to your app, or create a game with a high-level set of 2D game-based tools.

## iOS 5

- `Core Image` : 图片或滤镜处理框架
    > Use built-in or custom filters to process still and video images.
- `Core Bluetooth` : 蓝牙框架
    > Communicate with Bluetooth low energy and BR/EDR (“Classic”) Devices.

## iOS 4

- `Core Motion` : 加速器、陀螺仪
    > Process accelerometer, gyroscope, pedometer, and environment-related events.
- `Accelerate` : 大规模数学计算和图片处理
    > Make large-scale mathematical computations and image calculations, optimized for high performance and low energy consumption.
- `Image I/O` : 图片读写
    > Read and write most image file formats, and access an image’s metadata.
- `EventKit` : 日历提醒
    > Create, view, and edit calendar and reminder events.

## iOS 3

- `Core Text` : 文本布局和文字处理框架
    > Create text layouts, optimize font handling, and access font metrics and glyph data.
- `Core Data` : 数据存储框架
    > Persist or cache data on a single device, or sync data to multiple devices with CloudKit.
- `MapKit` : 地图框架
    > Display map or satellite imagery within your app, call out points of interest, and determine placemark information for map coordinates.
- `StoreKit` : 应用内购买
    > Support in-app purchases and interactions with the App Store.
- `GameKit`
    > Enable players to interact with friends, compare leaderboard ranks, earn achievements, and participate in multiplayer games.

## iOS 2

- **`Foundation`** : 基础框架
    > Access essential data types, collections, and operating-system services to define the base layer of functionality for your app.
- **`UIKit`** : UI 框架
    > Construct and manage a graphical, event-driven user interface for your iOS or tvOS app.
- **`AVFoundation`** : 多媒体基础框架
    > Work with audiovisual assets, control device cameras, process audio, and configure system audio interactions.
- `Core Graphics` : 核心绘图框架
    > Harness the power of Quartz technology to perform lightweight 2D rendering with high-fidelity output. Handle path-based drawing, antialiased rendering, gradients, images, color management, PDF documents, and more.
- `Core Animation` : 核心动画框架
    > Render, compose, and animate visual elements.
- `Core Location` : 地理定位框架
    > Obtain the geographic location and orientation of a device.
- `Media Player` : 媒体播放器
    > Find and play songs, audio podcasts, audio books, and more from within your app.
- `Objective-C Runtime` : OC 运行时
    > Gain low-level access to the Objective-C runtime and the Objective-C root types.
- `Security` : 加密框架
    > Secure the data your app manages, and control access to your app.
- `System Configuration` : 系统配置
    > Allow applications to access a device’s network configuration settings. Determine the reachability of the device, such as whether Wi-Fi or cell connectivity are active.