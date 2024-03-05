---
title: 类
icon: hashtag

index: true

---

[objc-private.h#L75]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-private.h#L75
[objc-private.h#L76]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-private.h#L76
[objc-private.h#L83]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-private.h#L83
[objc-private.h#L121]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-private.h#L121

[objc-runtime-new.h#L1505]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L1505
[objc-runtime-new.h#L1873]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L1873
[objc-runtime-new.h#L1883]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L1883
[objc-runtime-new.h#L2005]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L2005
[objc-runtime-new.h#L2254]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L2254
[objc-runtime-new.h#L2787]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L2787


## 看源码

### isa
  > [👉🏻][objc-private.h#L83]

```objc
// objc-private.h#L83
union isa_t {
    isa_t() { }
    isa_t(uintptr_t value) : bits(value) { }

    uintptr_t bits;
private: 
    // Accessing the class requires custom ptrauth operations, so force clients to go through setClass/getClass by making this private.
    Class cls; // 访问类需要自定义 ptrauth 操作，将它设为私有，这样就可以强制客户端通过 setClass/getClass 来访问
}
```

### Class
  > [👉🏻][objc-private.h#L75]

```objc 
// objc-private.h#L75
typedef struct objc_class *Class;   // OC 中的类对象
```

### id
  > [👉🏻][objc-private.h#L76]

```objc 
// objc-private.h#L76
typedef struct objc_object *id;     // OC 中的实例对象
```

### objc_object
  > [👉🏻][objc-private.h#L121]

```objc
// objc-private.h#121
struct objc_object { // OC 中的类实例结构体定义
private:
    char isa_storage[sizeof(isa_t)];
    // reinterpret_cast : C++中的一种强制类型转换运算符，允许讲任意指针类型转化为其它类型指针 
    isa_t &isa() { return *reinterpret_cast<isa_t *>(isa_storage); }
    const isa_t &isa() const { return *reinterpret_cast<const isa_t *>(isa_storage); }
}
```

### objc_class
  > [👉🏻][objc-runtime-new.h#L2254]

```objc
// objc-runtime-new.h#L2254
struct objc_class : objc_object { // OC 中类结构体定义
    // `= delete` : c++ 11 语法，禁止编译器生成构造函数、赋值运算符，保证 objc_class 操作安全性
    objc_class(const objc_class&) = delete;
    objc_class(objc_class&&) = delete;
    void operator=(const objc_class&) = delete;
    void operator=(objc_class&&) = delete;
    // Class ISA;
    Class superclass;
    cache_t cache;             // formerly cache pointer and vtable         缓存指针和虚函数表(优化性能)
    class_data_bits_t bits;    // class_rw_t * plus custom rr/alloc flags   存放类数据
    
    class_rw_t *data() const { // 获取类数据(可读可写)
        return bits.data();
    }
    const class_ro_t *safe_ro() const { // 获取的安全的只读数据
        return bits.safe_ro();
    }
}
```

### class_data_bits_t
  > [👉🏻][objc-runtime-new.h#L2005]

```objc
// objc-runtime-new.h#L2005
struct class_data_bits_t { // 类数据存放结构体
    friend objc_class;
}
```

### class_ro_t
  > [👉🏻][objc-runtime-new.h#L1505]

```objc
// objc-runtime-new.h#L1505
struct class_ro_t { // 类只读结构体定义
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
```
  
### class_rw_t
  > [👉🏻][objc-runtime-new.h#L1883]

```objc
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
```

### class_rw_ext_t
  > [👉🏻][objc-runtime-new.h#L1873]

```objc
// objc-runtime-new.h#L1873 
struct class_rw_ext_t { // 可读可写类扩展信息
    DECLARE_AUTHED_PTR_TEMPLATE(class_ro_t)
    class_ro_t_authed_ptr<const class_ro_t> ro; // 指向只读类的指针
    method_array_t methods;         // 方法列表
    property_array_t properties;    // 属性列表 
    protocol_array_t protocols;     // 协议列表
    const char *demangledName;
    uint32_t version;
};
```

### swift_class_t
  > [👉🏻][objc-runtime-new.h#L2787]

```objc
// objc-runtime-new.h#L2787
struct swift_class_t : objc_class {
    uint32_t flags;
    uint32_t instanceAddressOffset;
    uint32_t instanceSize;
    uint16_t instanceAlignMask;
    uint16_t reserved;

    uint32_t classSize;
    uint32_t classAddressOffset;
    void *description;
    // ...

    void *baseAddress() {
        return (void *)((uint8_t *)this - classAddressOffset);
    }
};
```

## 写总结

  首先回答问题，通过 `objc_class` 读取数据函数返回 `class_rw_t` 类型，还有安全读取数据返回 `class_ro_t`。可以得知类中实例变量、属性、方法存放在 `class_rw_t` 和 `class_ro_t` 中。

  然后需要明白 `class_ro_t` 与 `class_rw_t` 的区别
  
  * `class_ro_t` : 这个是编译期间可以确定的，包括类名、实例变量，弱引用实例，基本的属性、方法、协议。
  * `class_rw_t` : 这是运行时期间可以确定的，里面包含一个指向 `class_ro_t`。就是说运行时还会添加一下属性、方法、协议。

## `metaClass` 是什么？

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

## 写总结

- `isa` 是一个联合体，包含一个指向类的指针 `cls`，`cls` 是 `Class` 类型。

- `Class` 是一个 `objc_class` 的指针，可以指向 `OC` 中的任意类对象。而 `objc_class` 又是继承于 `objc_object`，这也说明了 `Class` 也是一个对象，也印证了 `OC 中一切皆对象`。

- `id` 是一个 `objc_object` 的指针，可以指向 `OC` 中的任意实例对象。
  
> `OC` 中的实例变量、属性、方法、协议都存放在哪？