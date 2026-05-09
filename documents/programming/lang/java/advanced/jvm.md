---
title: JVM
icon: hashtag

index: true

---

  > `JVM` : JAVA Virtual Machine (Java 虚拟机)

<!-- more -->

## 代码执行顺序

  `静态代码块` -> `main方法` -> `构造代码块` -> `构造方法`

- 普通代码块 : 定义在方法中的的 `{}` 代码块
- 构造代码块 : 定义在类中，但是没有 static 修饰的 `{}` 代码块
- 静态代码块 : 定义在类中，使用 static 修饰的 `{}` 代码块