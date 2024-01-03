---
title: 方法
icon: hashtag

index: true

---

  > `method` - “方法”
  
<!-- more -->

[objc-runtime-new.h#L190]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L190
[objc-runtime-new.h#L891]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L891
[objc-runtime-new.h#L1279]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L1279
[objc-runtime-new.h#L2828]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L2828
[objc-runtime-new.h#L2833]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L2833

## 看源码

### SEL
  > [👉🏻][objc-runtime-new.h#L190]

```objc
// objc-runtime-new.h#L190
typedef uintptr_t SEL;
```

### method_t
  > [👉🏻][objc-runtime-new.h#L891]

```objc
// objc-runtime-new.h#L891
struct method_t { // 方法结构体定义
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

### method_list_t
  > [👉🏻][objc-runtime-new.h#L1279]

```objc
// objc-runtime-new.h#L1279
struct method_list_t : entsize_list_tt<method_t, method_list_t, 0xffff0003, method_t::pointer_modifier> {
}
```

### objc_super2
  > [👉🏻][objc-runtime-new.h#L2828]

```objc
// objc-runtime-new.h#L2828
struct objc_super2 {
    id receiver;
    Class current_class;
};
```

### message_ref_t
  > [👉🏻][objc-runtime-new.h#L2833]

```objc
// objc-runtime-new.h#L2833
struct message_ref_t {
    IMP imp;
    SEL sel;
};
```

## 写总结

