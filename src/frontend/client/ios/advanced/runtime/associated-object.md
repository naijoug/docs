---
title: 关联对象
icon: hashtag

index: true

---

> `Associated Object` - “关联对象”

<!-- more -->

## 源码

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

## 使用

``` objc
@interface NSObject (Extension)
@property (nonatomic, copy) NSString *name;
@end
@implementation NSObject (Extension)
- (void)setName:(NSString *)name {   
    objc_setAssociatedObject(self, @selector(name), name, OBJC_ASSOCIATION_COPY_NONATOMIC);
}
- (NSString *)name {   
    return objc_getAssociatedObject(self, @selector(name));
}
@end
```

