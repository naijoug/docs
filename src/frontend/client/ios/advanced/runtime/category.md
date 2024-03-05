---
title: 分类
icon: hashtag

index: true

---

> `Category` - “分类”

<!-- more -->

[objc-runtime-new.h#L2805]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L2805

## 看源码

### category_t
  > [👉🏻][objc-runtime-new.h#L2805]

```objc
// objc-runtime-new.h#L2805
struct category_t {
    const char *name;   // 分类名
    classref_t cls;     // 引用类
    WrappedPtr<method_list_t, method_list_t::Ptrauth> instanceMethods;  // 实例方法列表
    WrappedPtr<method_list_t, method_list_t::Ptrauth> classMethods;     // 类方法列表
    struct protocol_list_t *protocols;              // 协议列表
    struct property_list_t *instanceProperties;     // 实例属性列表
    // Fields below this point are not always present on disk.
    // 以下字段在磁盘并不总是存在
    struct property_list_t *_classProperties;       // 类属性列表，
};
```
