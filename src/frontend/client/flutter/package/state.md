---
title: 状态管理
icon: hashtag

index: true

---

<!-- more -->

## Provider

- [provider](https://pub.dev/packages/provider) 👉🏻 [🐙](https://github.com/rrousselGit/provider)
    > InheritedWidgets, but simple

------

- [2019-06-13 状态管理指南篇——Provider](https://juejin.cn/post/6844903864852807694)

### concept

- `ChangeNotifier` : 用于发送变化通知，模型数据改变时调用 `notifyListeners()` 通知订阅者。
- `ChangeNotifierProvider` : 用于向子节点提供一个 `ChangeNotifier` 实例。
- `Consumer` : 订阅 `ChangeNotifier` 的变化通知，发生变化时会调用 `builder` 函数。

### usage

> 添加依赖
```shell
flutter pub add provider
```

```dart

// 上层 Widget 注入
ChangeNotifierProvider(
  create: (context) => MyModel(),
  child: const TopWidget(),
),
...

// 下层 Widget 使用
Consumer<MyModel>(
  builder: (_, model, _) {
    return BottomWidget(model: model),
  },
),
// Consumer - child 属于可以指定不需要刷新重建的子组件 
Consumer<MyModel>(
  builder: (context, model, child) {
    return BottomWidget(model: model, child: child),
  },
  child: ChildWidget(),
),
```

------

## RiverPod

- [RiverPod](https://riverpod.dev) 👉🏻 [pub](https://pub.dev/packages/riverpod) [🐙](https://github.com/rrousselGit/riverpod)
    > A reactive caching and data-binding framework. Riverpod makes working with asynchronous code a breeze.



------

## Bloc

- [Bloc](https://bloclibrary.dev) 👉🏻 [pub](https://pub.dev/packages/bloc) [🐙](https://github.com/felangel/bloc)
    > A predictable state management library that helps implement the BLoC design pattern



------

## GetX

- [GetX](https://pub.dev/packages/getx) 👉🏻 [🐙](https://github.com/jonataslaw/getx)
    > Open screens/snackbars/dialogs/bottomSheets without context, manage states and inject dependencies easily with Get.