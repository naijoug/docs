---
title: Swift
icon: hashtag

index: true

---

<!-- more -->

## 设计理念

### `Swift` 类和结构体的区别

### `Swift` 中的枚举和其它编程语言的区别

### `Swift` 中的 `switch` 和其它编程语言有什么区别？

  > 匹配模式深入说一下？

### `Swift` 中的 `String` 的设计理念

  支持 `Unicode` 和字符串操作的安全性。不能直接使用下标索引访问，使用 `String.Index` 进行字符串的访问和操作。

### 值类型 vs 引用类型

### `Swift` 中基础类型 `Array`、`Dictionary`、`Set` 为什么设计成值类型？

### `cow` 设计说一下？

  `cow` (Copy on Write) : Swift 的写时拷贝，也就是说数据只有等到赋值修改时才进行拷贝，主要应用在系统设计的值类型(`String`、`Array`、`Dictionary`)

  > `isKnownUniquelyReferenced` 实现自定义结构体 `Cow`
  
  ```swift
  
  ```

### `inout` 关键字做了什么？

### `Swift` 中的闭包

  * 逃逸闭包 : 闭包作为函数参数传入函数，如果这个闭包在函数返回之后再执行，则为逃逸闭包，闭包参数需要使用 `@escaping` 修饰。
  * 非逃逸闭包 : 闭包作为函数参数，在函数返回之前，这个闭包已经执行，则为非逃逸闭包。
  * 尾随闭包 : 将闭包作为函数的最后一个参数，函数调用时，闭包参数就是一个写在尾随函数调用后面的一个闭包表达式。
  * 自动闭包 : 需要一个不接受参数的闭包作为函数参数，使用 `@autoclosure` 修饰。用作闭包表达式的延迟加载，只有当闭包表达式真正调用时才执行。

### `Swift` 可选类型 `Optional` 说一下理解？

  > `Optional` 可选类型的底层实现




- `Swift` 语法特性泛型 (`@_specialize`)、运算符、下标、字面量协议、尾随闭包
- `Swift` 泛型类型擦除如何实现？
- `Swift` 函数式编程 (函子、单子)，“函数是第一等公民”这句话你是怎么理解的？
- 响应式编程中数据响应、UI 响应。 `RxSwift` `Combine` 这两个框架第比较？
- `Swift 5.1` 新特性 `@propertyWrapper`、`@_functionBuilder`、`@dynamicMemberLookup`
- `Swift` 在其它领域的扩展 (AI、AR、VR、Web、Backend)
- `SwiftUI` vs `Flutter`
- `Swift` 函数派发机制
- `swift_once` 是用在什么地方的？

## `protocol`

### `Swift` 中的协议与 `OC` 中协议的特点和区别？面向协议开发说一下你的理解？

## `Codable`

### `Codable` 实现原理

## `async/await`

### `Sendable` 

  `Swift 5.5` 引入并发模型之后添加的。