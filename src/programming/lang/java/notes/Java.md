# Java
> `Java` 是 SUN ( Stanford University Network 斯坦福大学网络公司 ) 1995 年推出的一门高级编程语言。Java 名称的来源 Java 最初被命名为 Oak，目标在于家用电器等小型系统的编程语言，随着市场的变化，SUN 着眼于网络应用的开发。Java 的名字的来源：Java 是印度尼西亚爪哇岛的英文名称，因盛产咖啡而闻名。 
>
> "write once run anywhere"

## Concept

- Java 的三大平台

    | 类型 | 全称 | 说明 
    | --- | --- | ---
    | Java SE | Java Platform Standard Edition      | 基础版本，开发 Java 应用程序
    | Java EE | Java Platform Enterprise Edition    | 企业版本，开发 Java 服务端程序...
    | Java ME | Java Platform Micro Edition         | 嵌入(移动)设备版本

- JDK & JRE & JVM

    | 类型 | 全称 | 说明
    | --- | --- | ---
    | JDK   | Java Development Kit      | 包括了Java运行环境、Java工具和Java基础类库。
    | JRE   | Java Runtime Environment  | 包括Java虚拟机和Java程序所需的核心类库等
    | JVM   | Java Virtual Machine      | Java虚拟机

- JDK 目录
    > - `bin`       : 存放Java的编译器、解释器等工具(可执行文件)。
    > - `include`   : 存放的调用系统资源的接口文件。
    > - `jre`       : 存放Java运行环境文件。
    > - `lib`       : 存放Java的类库文件。
    > - `man`       : man帮助文件
    > - `src.zip`   : JDK提供的类的源代码。

- jar & war & ear

    | 打包类型 | 全称 | 说明
    | --- | --- | ---
    | jar | java archive file       | java 程序打包文件，与 zip 兼容
    | war | web archive file        | web 程序打包文件
    | ear | enterprise archive file | 企业打包文件

- 访问修饰符

    | 位置 | public | protected | default | private   
    | --- | --- | --- | --- | ---
    | 同一类中 | √ | √ | √ | √       
    | 同一包中 | √ | √ | √
    | 子类     | √ | √        
    | 不同包中 | √   

- 基本数据类型

    | 类型 | 说明 | 比特位 | 位数 | 范围 
    | --- | --- | --- | --- | --- 
    | byte      | 一个字节的大小 | 8 bit  | 2(8)  | -128~127 
    | short     | 两个字节的大小 | 16 bit | 2(16) | -2(15)~2(15)-1 
    | int       | 四个字节的大小 | 32 bit | 2(32) | -2(31)~2(31)-1 
    | long      | 八个字节的大小 | 64 bit | 2(64) | -2(63)~2(63)-1 
    | float     | 四个字节的大小 | 32 bit 
    | double    | 八个字节的大小 | 64 bit 
    | char      | 两个字节的大小 | 16 bit | 2(16) 
    | boolean   | 一个字节的大小 | 8 bit

## 代码执行顺序
> `静态代码块` -> `main方法` -> `构造代码块` -> `构造方法`
>
> - 普通代码块 : 定义在方法中的的 `{}` 代码块
> - 构造代码块 : 定义在类中，但是没有 static 修饰的 `{}` 代码块
> - 静态代码块 : 定义在类中，使用 static 修饰的 `{}` 代码块

## POJO & JavaBean

- `POJO` (Plain Old Java Object) : 简单 Java 对象 (纯洁的老式 JAVA 对象)
    * 没有继承任何类
    * 没有实现任何接口
    * 不依赖任何框架
    * 可以包含业务逻辑
    * 可以包含持久化逻辑
    * 可以包含属性访问方法(get & set)

- `JavaBean` : 一种特殊的 JAVA 类, 是一个 Java 的可重用组件
    * 必须具有公共 `Public` 无参数构造函数
    * 所有属性私有化 `Private`, 并且提供公共 `Public` 的访问方法(get & set)
    * 可以序列化(如: 实现 `Serializable` 接口)

## `?` 泛型通配符
> - `? extends T` : 限定通配符的上边界，接收 T 类型或者 T 的子类型
> - `? super T`   : 限定通配符的下边界，接收 T 类型或者 T 的父类型

  ``` java
  // extends，接收 Number 类型或者 Number 的子类型
  Vector<? extends Number> x = new Vector<Integer>(); // 正确
  Vector<? extends Number> x = new Vector<String>();  // 错误
  // super，接收 Integer 或者 Integer 的父类型
  Vector<? super Integer> x = new Vector<Number>();   // 正确
  Vector<? super Integer> x = new Vector<Byte>();     // 错误
  ```

## `abstract` 不可共存的关修饰符

- `final` : 修饰类不能继承，修饰方法不能重写；abstract 修饰必须继承和重写
- `static` : 使用类名调用；abstract 修饰方法没有实现，不能直接调用
- `private` : 修饰的类智能在本类使用；abstract 修饰需要子类重写

## `interface` 接口默认修饰符

- 属性 : `public static final`
- 方法 : `public abstract`

## 字节流 & 字符流

| 类型 | Input (输入流) | Output (输出流) | 特点
| --- | --- | --- | ---
| 字节流 | `InputStream` | `OutputStream`  | 处理单元是一个字节，用于操作二进制文件
| 字符流 | `Reader`      | `Writer`        | 字节流 + 编码表，用于处理文字数据

## Error & Exception
> - `Throwable` : `Error` & `Exception` 的基类
> - `Error` : 错误，一般不通过代码去处理
> - `Exception` : 异常
>       * RuntimeException : 运行时异常
>       * CheckedException : 非运行时异常 (可检测异常)

- 运行时异常: `RuntimeException` 

    | 运行时异常 | 说明
    | --- | ---
    | `ClassCastException`              | 类型转换异常
    | `ArithmeticException`             | 算术异常，如:除数为0
    | `NullPointerException`            | 空指针异常
    | `ArrayIndexOutOfBoundsException`  | 数组越界异常
    | `ArrayStoreException`             | 数组数据存储异常

- 非运行时异常

    | 非运行时异常 | 说明
    | --- | ---
    | `IOException`               | IO 异常 
    | `ClassNotFoundException`    | 类型 class 未找到

- `throw` & `throws` 

    | 类型 | 作用 | 使用位置 | 特点
    | --- | --- | --- | ---
    | `throw`     | 抛出异常 | 在函数内部使用 | 抛出可能异常类，多个用逗号分割
    | `throws`    | 抛出异常 | 定义在函数后面 | 抛出异常对象