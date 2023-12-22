---
title: Java API
icon: hashtag

index: true
order: 3

---

<!-- more -->

## Object
> `Object`描述的是所有类的通用属性与方法。

- `toString()` 返回对象的描述信息  (类名@哈希码值的十六进制形式 : `java.lang.Object@61bbe9ba` )
- `equals()`  返回的是比较的结果  如果相等返回`true`，否则`false`，比较的是对象的内存地址值。
- `hashCode()` 返回该对象的哈希码值： 采用操作系统底层实现的哈希算法。 
    * 同一个对象的哈希码值是唯一的。
    * `java`规定如果两个对象`equals`返回`true`，那么这两个对象的`hashCode`码必须一致。

## System
> System : 可以获取系统的属性

``` java
// 获取系统属性
Properties properties = System.getProperties();
properties.list(System.out);    //输出系统属性
System.getProperty("os.name");  //获取操作系统名字
(System.getenv("JAVA_HOME");    //获取环境变量
```

## Runtime
> `Runtime` : 类主要描述的是应用程序运行的环境。

``` java
exit() 							// 退出虚拟机
long freeMemory() 				// 获取可用内存数
gc() 							// 调用垃圾回收器程序，但是调用该方法的时候不会马上就运行gc
long maxMemory() 				// 获取JVM最大内存容量
long totalMemory() 			// 获取总内存数
Process exec(String command) 	// 启动一个字符串命令的进程
```




