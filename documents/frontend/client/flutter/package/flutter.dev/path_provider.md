---
title: path_provider
icon: hashtag

index: true

---

<!-- more -->

## reference

- [path_provider](https://pub.dev/packages/path_provider) 👉🏻 [🐙](https://github.com/flutter/packages/tree/main/packages/path_provider/path_provider)
    > Flutter 官方维护的文件系统路径获取插件。

## usage

`path_provider` 用于获取应用沙盒内的常用目录，例如临时目录、应用文档目录、应用支持目录等。适合保存缓存、用户生成文件、本地配置和数据库文件。

```dart
final directory = await getApplicationDocumentsDirectory();
final file = File('${directory.path}/example.txt');
await file.writeAsString('Hello path_provider');
```
