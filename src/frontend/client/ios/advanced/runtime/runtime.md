# `runtime` - “运行时”

## `runtime` 是什么

> [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide)
> The Objective-C language defers as many decisions as it can from compile time and link time to runtime. Whenever possible, it does things dynamically. 
> This means that the language requires not just a compiler, but also a runtime system to execute the compiled code. 
> The runtime system acts as a kind of operating system for the Objective-C language; it’s what makes the language work. 
>
> Objective-C 语言尽可能地将许多决策从编译时间和链接时间推迟到运行时。它就会尽可能地动态地执行任务。
> 这意味着该语言不仅需要一个编译器，而且还需要一个运行时系统来执行编译过的代码。
> 运行时系统就像是 Objective-C 语言的操作系统；这是语言运行工作的原理所在。
  
  这段说明可以分三段理解
  
  * `OC` 的设计者为了让它具备动态能力，所以将只要可以动态处理的任务都迁移到运行时。
  * 编译器只完成了部分代码编译链接工作，还剩一部分需要运行时处理，所以需要设计这个 `runtime` 来进行代码的动态处理。
  * 将 `runtime` 看做 `OC` 语言的操作系统。操作系统是计算机运行的核心，用来进行系统资源分配，各种任务调度，是计算机可以正常运行的关键。说明了 `runtime` 对于 `OC` 语言的重要性，也是必不可少的一部分。

  这也很好地解释了“为什么是 OC 是一个动态语言？”。

## `NSObject`

```objc
// file: NSObject.h
// line:53 NSObject 头文件定义
@interface NSObject <NSObject> {
    Class isa  OBJC_ISA_AVAILABILITY;
}
```

## 内存模型

> [runtime 源码](https://github.com/apple-oss-distributions/objc4/blob/objc4-906/runtime)

> 类型定义

```objc
// file: runtime.h
/// An opaque type that represents a method in a class definition.
typedef struct objc_method *Method; // 一个非透明类型，表示一个类定义中的方法

/// An opaque type that represents an instance variable.
typedef struct objc_ivar *Ivar; // 表示一个实例变量

/// An opaque type that represents a category.
typedef struct objc_category *Category; // 表示一个分类

/// An opaque type that represents an Objective-C declared property.
typedef struct objc_property *objc_property_t; // 表示 OC 中定义属性

#ifdef __OBJC__ 
@class Protocol; // OC 环境下是一个类的提前引用声明
#else 
typedef struct objc_object Protocol; // 非 OC 环境下是 objc_object 的别名
#endif
```

> `isa`、`Class`、`id`都是啥？

```objc 
// file: objc-private.h
// line:82
typedef struct objc_class *Class;   // OC 中的类对象
typedef struct objc_object *id;     // OC 中的实例对象

// line:92 
union isa_t {
    isa_t() { }
    isa_t(uintptr_t value) : bits(value) { }

    uintptr_t bits;
private: // 访问类需要自定义 ptrauth 操作，将它设为私有，这样就可以强制客户端通过 setClass/getClass 来访问
    // Accessing the class requires custom ptrauth operations, so force clients to go through setClass/getClass by making this private.
    Class cls;
}

// line:128 OC 中的类实例定义
struct objc_object {
private:
    char isa_storage[sizeof(isa_t)];
    // reinterpret_cast : C++中的一种强制类型转换运算符，允许讲任意指针类型转化为其它类型指针 
    isa_t &isa() { return *reinterpret_cast<isa_t *>(isa_storage); }
    const isa_t &isa() const { return *reinterpret_cast<const isa_t *>(isa_storage); }
}
```

```objc
// file: objc-runtime-new.h
// line:1414 OC 中类定义
struct objc_class : objc_object {
    // `= delete` : c++ 11 语法，禁止编译器生成构造函数、赋值运算符，保证 objc_class 操作安全性
    objc_class(const objc_class&) = delete;
    objc_class(objc_class&&) = delete;
    void operator=(const objc_class&) = delete;
    void operator=(objc_class&&) = delete;
    // Class ISA;
    Class superclass;
    cache_t cache;             // formerly cache pointer and vtable         缓存指针和虚函数表(优化性能)
    class_data_bits_t bits;    // class_rw_t * plus custom rr/alloc flags   存放类数据
}
```

  * `id` 是一个 `objc_object` 的指针，可以指向 OC 中的任意对象
  * `Class` 是 一个 `objc_class` 的指针，可以这项 OC 中的任意类。而 `objc_class` 又是继承于 `objc_object`，这也说明了 `Class` 也是一个对象，也印证了 `OC 中一切皆对象`。
  * `isa` 是一个联合体，包含一个指向类的指针 `cls`，
  
> `OC` 中的实例变量、属性、方法、协议都存放在哪？

```objc
// file: objc-runtime-new.h
// line:1693 只读类结构定义
struct class_ro_t {
    uint32_t flags;
    uint32_t instanceStart; // 实例内存开始位置
    uint32_t instanceSize;  // 实例内存大小
#ifdef __LP64__
    uint32_t reserved;
#endif

    union {
        const uint8_t * ivarLayout;
        Class nonMetaclass;
    };
    // 类名
    explicit_atomic<const char *> name;
    // 基础的方法列表
    objc::PointerUnion<method_list_t, relative_list_list_t<method_list_t>, method_list_t::Ptrauth, method_list_t::Ptrauth> baseMethods;
    // 基础的协议列表
    objc::PointerUnion<protocol_list_t, relative_list_list_t<protocol_list_t>, PtrauthRaw, PtrauthRaw> baseProtocols;
    // 实例变量列表
    const ivar_list_t * ivars;
    // 弱引用实例变量
    const uint8_t * weakIvarLayout;
    // 基础的属性列表
    objc::PointerUnion<property_list_t, relative_list_list_t<property_list_t>, PtrauthRaw, PtrauthRaw> baseProperties;
}
// line:2294 可读可写类扩展信息
struct class_rw_ext_t {
    DECLARE_AUTHED_PTR_TEMPLATE(class_ro_t)
    class_ro_t_authed_ptr<const class_ro_t> ro; // 指向只读类的指针
    method_array_t methods;         // 方法列表
    property_array_t properties;    // 属性列表 
    protocol_array_t protocols;     // 协议列表
    const char *demangledName;
    uint32_t version;
};
// 可读可写类结构定义
struct class_rw_t { 
    // Be warned that Symbolication knows the layout of this structure.
    uint32_t flags;
    uint16_t witness;
#if SUPPORT_INDEXED_ISA
    uint16_t index;
#endif

    explicit_atomic<uintptr_t> ro_or_rw_ext; // 原子操作指针，用于指向只读类或者类扩展

    Class firstSubclass;    // 第一个子类      
    Class nextSiblingClass; // 下一个兄弟类
    
private: // 联合指针，指向 class_ro_t 或者 class_rw_ext_t
    using ro_or_rw_ext_t = objc::PointerUnion<const class_ro_t, class_rw_ext_t, PTRAUTH_STR("class_ro_t"), PTRAUTH_STR("class_rw_ext_t")>;
}
struct objc_class : objc_object {
    // ...
    // line:2749 类数据读取函数 
    class_rw_t *data() const { // 获取类数据(可读可写)
        return bits.data();
    }
    const class_ro_t *safe_ro() const { // 获取的安全的只读数据
        return bits.safe_ro();
    }
}
```

  首先回答问题，通过 `objc_class` 读取数据函数返回 `class_rw_t` 类型，还有安全读取数据返回 `class_ro_t`。可以得知类中实例变量、属性、方法存放在 `class_rw_t` 和 `class_ro_t` 中。

  然后需要明白 `class_ro_t` 与 `class_rw_t` 的区别
  
  * `class_ro_t` : 这个是编译期间可以确定的，包括类名、实例变量，弱引用实例，基本的属性、方法、协议。
  * `class_rw_t` : 这是运行时期间可以确定的，里面包含一个指向 `class_ro_t`。就是说运行时还会添加一下属性、方法、协议。
  

> `ivar`(实例变量)与 `property`(属性)

```objc
// file: objc-runtime-new.h
// line:1290 实例变量定义
struct ivar_t {
    int32_t *offset;    // 相对于对象内存起始位置偏移
    const char *name;   // 变量名
    const char *type;   // 变量类型
    // alignment is sometimes -1; use alignment() instead
    uint32_t alignment_raw; // 内存对齐
    uint32_t size;          // 变量内存尺寸

    uint32_t alignment() const {  // 内存对齐
        if (alignment_raw == ~(uint32_t)0) return 1U << WORD_SHIFT;
        return 1 << alignment_raw;
    }
};
// 属性定义
struct property_t {
    const char *name;       // 属性名
    const char *attributes; // 特性
};
```

> `class_copyIvarList()` vs `class_copyPropertyList()`

```objc
// file: objc-runtime-new.m
// line: 6082 获取类的实例变量列表
Ivar * class_copyIvarList(Class cls, unsigned int *outCount)
{
    const ivar_list_t *ivars;
    Ivar *result = nil;
    unsigned int count = 0;

    if (!cls) {
        if (outCount) *outCount = 0;
        return nil;
    }
    // 互斥锁，加锁
    mutex_locker_t lock(runtimeLock);
    // 校验类是否已实现
    ASSERT(cls->isRealized());
    // 从 ro 中获取所有实例变量
    if ((ivars = cls->data()->ro()->ivars)  &&  ivars->count) {
        result = (Ivar *)malloc((ivars->count+1) * sizeof(Ivar));
        for (auto& ivar : *ivars) { // 遍历所有实例变量放入结果数组
            if (!ivar.offset) continue;  // anonymous bitfield
            result[count++] = &ivar;
        }
        result[count] = nil;
    }
    if (outCount) *outCount = count;
    return result;
}
// 获取类属性列表
objc_property_t * class_copyPropertyList(Class cls, unsigned int *outCount)
{
    if (!cls) {
        if (outCount) *outCount = 0;
        return nil;
    }
    // 互斥锁，加锁
    mutex_locker_t lock(runtimeLock);
    // 校验类是否已实现
    checkIsKnownClass(cls);
    ASSERT(cls->isRealized());
    
    // 获取类数据
    auto rw = cls->data();
    property_t **result = nil;
    auto const properties = rw->properties(); // 从 rw 中获取所有属性
    unsigned int count = properties.count();
    if (count > 0) { // 存在属性，遍历所有属性放入结果数组中
        result = (property_t **)malloc((count + 1) * sizeof(property_t *));
        count = 0;
        for (auto& prop : properties) {
            result[count++] = &prop;
        }
        result[count] = nil;
    }
    if (outCount) *outCount = count;
    return (objc_property_t *)result;
}
```

> `OC` 中 `Method`、`SEL`、`IMP` 是什么关系？

```objc
// file: runtime.h
// line:43 Method 定义
/// An opaque type that represents a method in a class definition.
typedef struct objc_method *Method;
```
```objc
// file: objc-runtime-new.h
// line:200 SEL 定义
typedef uintptr_t SEL;
// line:919 方法定义
struct method_t {
    method_t(const method_t &other) = delete;
    // The representation of a "big" method. This is the traditional representation of three pointers storing the selector, types and implementation.
    struct big { // 大型方法，传统的表示法
        SEL name;
        const char *types;
        MethodListIMP imp;
    };
    // A "big" method, but name is signed. Used for method lists created at runtime.
    struct bigSigned { // 名字被签名的大型方法，用于在运行时创建方法列表
        SEL __ptrauth_objc_sel name;
        const char * ptrauth_method_list_types types;
        MethodListIMP imp;
    };
    // 方法类型
    enum class Kind {
        // Note: method_invoke detects small methods by detecting 1 in the low bit. Any change to that will require a corresponding change to method_invoke.
        // 提示：method_invoke 通过检测低位的 1 来检测是否是小型方法。如果修改这个枚举 method_invoke 也需要相应修改。
        big = 0, 
        // `small` encompasses both small and small direct methods. We distinguish those cases by doing a range check against the shared cache.
        small = 1, // 包括小型方法和直接访问小型方法。我们通过检查共享缓存区的一个范围来区分这些情况。
        bigSigned = 2,
    };
private:
    static const uintptr_t kindMask = 0x3; // 方法类型掩码
}
```
```objc
// file: objc.h
// line:49 
/// An opaque type that represents a method selector.
typedef struct objc_selector *SEL; // 一个不透明类型，表示一个方法选择器

/// A pointer to the function of a method implementation. 
// 一个指向方法实现的指针
#if !OBJC_OLD_DISPATCH_PROTOTYPES
typedef void (*IMP)(void /* id, SEL, ... */ ); 
#else
typedef id _Nullable (*IMP)(id _Nonnull, SEL _Nonnull, ...); 
#endif
```

  `SEL` 是一个指向方法选择器的指针，表示方法名
  `IMP` 方法实现的指针，表示方法实现。

> 方法的调用


> `metaClass` 是什么？

```objc
// file: objc-runtime.mm
// line:192 通过类名获取 metaClass
/***********************************************************************
* objc_getMetaClass.  Return the id of the meta class the named class.
* Warning: doesn't work if aClassName is the name of a posed-for class's isa!
**********************************************************************/
Class objc_getMetaClass(const char *aClassName)
{
    Class cls;

    if (!aClassName) return Nil;

    cls = objc_getClass (aClassName);
    if (!cls)
    {
        _objc_inform ("class `%s' not linked into application", aClassName);
        return Nil;
    }

    return cls->ISA();
}

```



> `OC` 对象继承原型链

## 协议

```objc
// file: objc-runtime-new.h
// line:1613 协议定义
struct protocol_t : objc_object {
    const char *mangledName;
    struct protocol_list_t *protocols;
    method_list_t *instanceMethods;
    method_list_t *classMethods;
    method_list_t *optionalInstanceMethods;
    method_list_t *optionalClassMethods;
    property_list_t *instanceProperties;
    uint32_t size;   // sizeof(protocol_t)
    uint32_t flags;
    // Fields below this point are not always present on disk.
    const char **_extendedMethodTypes;
    const char *_demangledName;
    property_list_t *_classProperties;
}
struct protocol_list_t {
    // count is pointer-sized by accident.
    uintptr_t count;
    protocol_ref_t list[0]; // variable-size
}
```

## `Category` - “分类”

```objc
// line:3256
struct category_t {
    const char *name;   // 分类名
    classref_t cls;     // 引用类
    WrappedPtr<method_list_t, method_list_t::Ptrauth> instanceMethods;  // 实例方法
    WrappedPtr<method_list_t, method_list_t::Ptrauth> classMethods;     // 类方法列表
    struct protocol_list_t *protocols;              // 协议列表
    struct property_list_t *instanceProperties;     // 实例属性列表
    // Fields below this point are not always present on disk.
    struct property_list_t *_classProperties;       // 类属性列表
};
```

## `Associated Object` - “关联对象”

```objc
// file: objc-runtime.mm
// line:706 获取关联对象
id objc_getAssociatedObject(id object, const void *key)
{
    return _object_get_associative_reference(object, key);
}
// 设置关联对象
void objc_setAssociatedObject(id object, const void *key, id value, objc_AssociationPolicy policy)
{
    _object_set_associative_reference(object, key, value, policy);
}
// 移除关联对象
void objc_removeAssociatedObjects(id object) 
{
    if (object && object->hasAssociatedObjects()) {
        _object_remove_associations(object, /*deallocating*/false);
    }
}
```

## reference

- [objc4](https://github.com/apple-oss-distributions/objc4)
- [A debuggable objc runtime](https://github.com/RetVal/objc-runtime)

------

- [2017-09-15 Why is MetaClass in Objective-C？](https://nemocdz.github.io/post/why-is-metaclass-in-objective-c/) 💯
    > 作者从自己遇到的一个面试题出发，按照第一性原理进行问题推导。
      👉🏻 首先去研究了 `OC` 中的源码，梳理了 `isa`、`MetaClass` 关系。
      👉🏻 在搜索 `MetaClass` 的过程，发现了 `Python` 中也有这个设计。进而了解到是源于 `Smalltalk` 的设计，而 `OC` 就是借鉴的 `Smalltalk` 的设计思想。
      👉🏻 进一步思考如果没有 `MetaClass` 是否可行。在宏观成面思考了面向对象的两种设计思想，以 `C++` (借鉴 `Simula`)为代表的*类的划分*，还有以 `OC` (借鉴 `Smalltalk`)为代表的`消息传递`。
