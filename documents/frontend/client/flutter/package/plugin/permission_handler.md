---
title: permission_handler
icon: hashtag

index: true

---

<!-- more -->

## reference

- [permission_handler](https://pub.dev/packages/permission_handler) 👉🏻 [🐙](https://github.com/Baseflow/flutter-permission-handler)
    > Flutter 权限申请与权限状态检查插件。

## usage

`permission_handler` 用于统一处理 Android、iOS、macOS、Windows 等平台的权限状态查询和权限申请。使用前需要按平台补齐原生配置，例如 iOS 的 `Info.plist` 权限说明和 Android 的 `AndroidManifest.xml` 权限声明。

```dart
final status = await Permission.camera.request();

if (status.isGranted) {
  // Continue camera flow.
}
```
