---
title: Runtime 函数
icon: hashtag

index: true
order: 3

---

| 函数 | 说明
| --- | ---
| *Class*       | 
| `class_getName`                       | 获取类名
| `class_getSuperclass`                 | 获取父类
| `class_getInstanceSize`               | 获取实例尺寸
| `class_getInstanceVariable`           | 获取实例变量的信息
| `class_getClassVariable`              | 获取类成员变量的信息
| `class_getVersion`                    | 获取类版本号
| `class_setVersion`                    | 设置类版本号
| `class_isMetaClass`                   | 是否是一个元类
| *Ivar*        |
| `class_addIvar`                       | 添加成员变量
| `class_copyIvarList`                  | 获取整个成员变量列表
| *Property*    |
| `class_addProperty`                   | 为类添加属性
| `class_replaceProperty`               | 替换类属性
| `class_getProperty`                   | 获取指定的属性
| `class_copyPropertyList`              | 获取属性列表
| *Method*      |
| `class_addMethod`                     | 添加方法
| `class_replaceMethod`                 | 替换方法实现
| `class_getInstanceMethod`             | 获取实例方法
| `class_getClassMethod`                | 获取类方法
| `class_copyMethodList`                | 获取所有方法的数组
| `class_getMethodImplementation`       | 返回方法实现
| `class_respondsToSelector`            | 类实例是否响应指定的 selector
| *Protocol*    | 
| `class_addProtocol`                   | 添加协议
| `class_conformsToProtocol`            | 是否实现指定的协议

