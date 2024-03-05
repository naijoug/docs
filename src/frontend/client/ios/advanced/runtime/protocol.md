---
title: 协议
icon: hashtag

index: true

---

> `Protocol` - “协议”

<!-- more -->

[objc-runtime-new.h#L1425]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L1425
[objc-runtime-new.h#L1475]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L1475

------

## 看源码

### protocol_t
  > [👉🏻][objc-runtime-new.h#L1425]

```objc
// objc-runtime-new.h#L1425 
struct protocol_t : objc_object { // 协议结构体定义
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
```

### protocol_list_t
  > [👉🏻][objc-runtime-new.h#L1475]
  
```objc
struct protocol_list_t {
    // count is pointer-sized by accident.
    uintptr_t count;
    protocol_ref_t list[0]; // variable-size
}
```

------

## 写总结