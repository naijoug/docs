# Runtime

## Reference

- [objc4](https://github.com/apple-oss-distributions/objc4)
- [iOS-Runtime-Headers](https://github.com/nst/iOS-Runtime-Headers) : iOS 运行时头文件(包括私有 API)
    > iOS Objective-C headers as derived from runtime introspection
- [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide)
- [Aspects](https://github.com/steipete/Aspects)
    > Delightful, simple library for aspect oriented programming in Objective-C and Swift.

------

- [2013.11.26 Objective-C 中的消息与消息转发](https://blog.ibireme.com/2013/11/26/objective-c-messaging/)
- [2014.11.05 Objective-C Runtime](http://yulingtianxia.com/blog/2014/11/05/objective-c-runtime/)
- [2014.11.06 神经病院objc runtime入院考试](https://blog.sunnyxx.com/2014/11/06/runtime-nuts)
- [2016.06.15 Objective-C 消息发送与转发机制原理](http://yulingtianxia.com/blog/2016/06/15/Objective-C-Message-Sending-and-Forwarding/)
- [2018.03.16 读 objc4 源码，深入理解 Objective-C Runtime](https://shannonchenchn.github.io/2018/03/16/objc-runtime-learning-notes/)

## Concept

- `instance -> class -> method -> SEL -> IMP -> 实现函数`
- `objc_msgSend` : Objective-C 消息传递函数 `id objc_msgSend(id self, SEL op, ... );`

- SEL & IMP

| 类型 | 说明
| --- | --- 
| `SEL`     | 方法选择器 (方法的 ID)
| `IMP`     | 函数指针，方法实现的指针

- 反射

``` objc
/** SEL 反射 */
//  String -> SEL
SEL selector = NSSelectorFromString(@"setName:");
[stu performSelector:selector withObject:@"Kobe"];
//  SEL -> String
NSStringFromSelector(@selector(setName:));

/**  Class 反射 */
//  String -> Class
Class class = NSClassFromString(@"Student");
Student *student = [[class alloc] init]; 
//  Class -> String
Class class = [Student class];
NSString *className = NSStringFromClass(class);

/** Protocol 反射 */
//  String -> Protocol
Protocol protocol = NSProtocolFromString(@"People");
//  Protocol -> String
NSString *protocolName = NSStringFromProtocol(protocol);
```

## OC 的动态特性

- 动态类型（Dynamic typing）
    * `isKindOfClass:` : 判断某一对象是否是某个类或其子类的实例
    * `isMemberOfClass:` : 判断某一对象是否是某个类的实例

- 动态绑定（Dynamic binding）
    * 传统函数 : 编译时期，将函数参数和实现打包到源码
    * OC的消息机制 : 运行时，才去动态查找与实例绑定的属性和方法

- 动态加载（Dynamic loading）
    * 根据需求动态加载资源(如 : @2x,@3x图片的加载)`

## Runtime Struct

| 结构体 | 说明
| --- | ---
| `objc_object`         | objc 对象 `id`，isa 指针包含指向对象的地址
| `objc_class`          | objc 对象的类 `Class`
| `class_data_bits_t`   | 包含 `class_rw_t` 信息 
| `class_rw_t`          | rw : 可读可写，类在运行时才确定的方法、属性、协议 (包含指向 `class_ro_t`的指针)
| `class_ro_t`          | ro : 只读，类在编译期间就确定的方法、属性、协议
| `cache_t`             | 缓存已经使用过的方法
| `bucket_t`            | 缓存使用的哈希表结构体 (`key: SEL ; value: IMP`)


``` objc
struct class_rw_t { // 可读可写
    uint32_t flags;
    uint32_t version;

    const class_ro_t *ro;           // 指向只读的结构体,存放类初始信息
    
    method_array_t methods;         // 方法列表（类对象存放对象方法，元类对象存放类方法）
    property_array_t properties;    // 属性列表
    protocol_array_t protocols;     // 协议列表

    Class firstSubclass;
    Class nextSiblingClass;
}
struct class_ro_t { // 只读 
    uint32_t flags;
    uint32_t instanceStart;
    uint32_t instanceSize;
    uint32_t reserved;

    const uint8_t * ivarLayout;

    const char * name;
    method_list_t * baseMethodList;     // 方法列表
    protocol_list_t * baseProtocols;    // 协议列表
    const ivar_list_t * ivars;          // 成员变量列表

    const uint8_t * weakIvarLayout;
    property_list_t *baseProperties;    // 属性列表
};
```

## Runtime Function

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

## Message Forward
> 消息转发 : `resolveInstanceMethod: -> forwardingTargetForSelector: -> methodSignatureForSelector: -> forwardInvocation:`

| 函数 | 说明
| --- | ---
| `resolveInstanceMethod:`          | 实例方法是否为动态添加
| `resolveClassMethod`              | 类方法是否为动态添加
| `forwardingTargetForSelector:`    | 指定那个对象响应消息
| `methodSignatureForSelector:`     | 进行方法签名
| `forwardInvocation:`              | 根据签名创建 NSInvocation

## Associated Object
> 关联对象

``` objc
@interface NSObject (Extension)
@property (nonatomic, copy) NSString *name;
@end
@implementation NSObject (Extension)
- (void)setName:(NSString *)name {   
    objc_setAssociatedObject(self, @selector(name), name, OBJC_ASSOCIATION_COPY_NONATOMIC);
}
- (NSString *)name {   
    return objc_getAssociatedObject(self,@selector(name));
}
@end
```

## Method Swizzling
> 方法交换

## Type Encoding
> 类型编码
