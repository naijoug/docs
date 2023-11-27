---
title: 命令行工具
icon: hashtag

index: true

---

<!-- more -->

## Commands

```shell
$ flutter doctor # 检查 flutter 环境是否正确
# flutter create 创建工程
#  配置
#   -template=(app/module/package/plugin/skeleton) 创建工程模板
#   -platforms=(ios/android/windows/linux/macos/web) 指定平台
#   -a 指定 android 开发语言 (默认: kotlin)
#   -i 指定 ios 开发语言 (默认: swift)
$ flutter create test # 创建 flutter test 项目

# 清理
$ flutter clean

# 获取依赖
$ flutter pub get

# 运行 flutter 程序
$ flutter run

# 发布 packages
$ flutter packages pub publish --dry-run # 检查包
$ flutter packages pub pushlish # 发布包

# 构建 framework
$ flutter build ios-framework --output=path/to/
# 构建 cocoapods framework
$ flutter build ios-framework --cocoapods --output=path/to/
```