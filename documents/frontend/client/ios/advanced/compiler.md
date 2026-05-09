---
title: 编译器
icon: hashtag

index: true

---

## reference

- [Chisel](https://github.com/facebook/chisel) 
    > a collection of LLDB Commands

## Compile

- 编译流程 : `预处理 -> 语法和语义分析 -> 生成代码和优化 -> 汇编 -> 链接`

- Clang & LLVM

    | 编译器 | 说明
    | --- | ---
    | `Clang`   | 编译器前端，预处理、词法分析、语法分析、语义分析、静态分析、生成中间代码(LLVM 代码)
    | `LLVM`    | (Low Level Virtual Machine) 编译器后端，将代码优化并产生汇编代码、链接


## Clang

```shell
clang -x objective-c -arch arm-64 -c XX/Test.m -o XX/Test.o
# clang
#   Options:
#       -x          编译语言
#       -arch       编译架构
#       -fobjc-arc  文件采用 ARC 内存管理
#       -c          编译文件
#       -o          编译输出文件

clang -rewrite-objc main.m -o main.cpp
# 将 OC 代码转化为 C/C++ 代码
```

## Memory Layout

```swift
MemoryLayout.size       // 占用的内存大小
MemoryLayout.stride     // 分配的内存大小
MemoryLayout.alignment  // 内存的对齐大小

withUnsafePointer()     // 获取 swift 中对象的指针地址
```

## DWARF & dSYM
> [DWARF Debugging Standard](https://dwarfstd.org)

- DWARF (debuging with attributed record formats) : 一种调试文件的格式
- dSYM (debug Symbils) : 调试符号，符号文件。按照 `DWARF` 格式保存的调试文件

## `LLVM`



## `Swift` 编译器 `swiftc`

### `SIL`(Swift Intermediate Language)

- [SIL](https://github.com/apple/swift/tree/main/lib/SIL)

```shell
# -emit-silgen : 将 swift 源码转化为 raw(原始的) SIL 文件
$ swiftc -emit-silgen Source.swift -o Source.sil
# -emit-sil : 将 raw SIL 文件转化为 canonical(规范的) SIL 文件
$ swiftc Source.sil -emit-sil  > Source-canonical.sil
#   直接将 swift 源码转化为 canonical SIL 文件
$ swiftc Source.swift -emit-sil  > Source-canonical.sil
```