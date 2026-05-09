---
title: 命令行
icon: hashtag

index: true

---

## reference

## commands

  ```shell
  # 将 OC 代码转化为 C/C++ 代码
  clang -rewrite-objc main.m -o main.cpp
  # 只生成 iOS 平台下代码
  #   xcrun == Xcode Run
  #   -sdk    指定系统平台
  #   -arch   指定的架构
  xcrun -sdk iphoneos clang -arch arm64 -rewrite-objc main.m -o main-arm64.cpp

  # 查看 xxx.app 的 uuid
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


