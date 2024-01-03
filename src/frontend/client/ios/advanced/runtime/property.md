---
title: 属性
icon: hashtag

index: true

---

<!-- more -->

[objc-runtime-new.h#L1243]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L1243
[objc-runtime-new.h#L1265]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L1265
[objc-runtime-new.h#L1405]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L1405
[objc-runtime-new.h#L1411]: https://github.com/apple-oss-distributions/objc4/blob/objc4-876/runtime/objc-runtime-new.h#L1411

------

## 看源码

### ivar_t
  > [👉🏻][objc-runtime-new.h#L1243]

```objc
// objc-runtime-new.h#L1243
struct ivar_t { // 实例变量结构体定义
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
```

### ivar_list_t
  > [👉🏻][objc-runtime-new.h#L1405]

```objc
// objc-runtime-new.h#L1405
struct ivar_list_t : entsize_list_tt<ivar_t, ivar_list_t, 0> {
    bool containsIvar(Ivar ivar) const {
        return (ivar >= (Ivar)&*begin()  &&  ivar < (Ivar)&*end());
    }
};
```

### property_t
  > [👉🏻][objc-runtime-new.h#L1265]
  
```objc
// objc-runtime-new.h#L1265
struct property_t { // 属性结构体定义
    const char *name;       // 属性名
    const char *attributes; // 特性
};
```

### property_list_t
  > [👉🏻][objc-runtime-new.h#L1411]

```objc
// objc-runtime-new.h#L1411
struct property_list_t : entsize_list_tt<property_t, property_list_t, 0> {
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
