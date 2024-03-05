---
title: 内存管理
icon: hashtag

index: true

---

## 引用计数

  `MRC`(Manual Reference Counting) : 手动引用计数。需要程序员自己申请(`retain`)和释放(`release`、`autorelease`)
  
  `ARC`(Automatic Reference Counting) : 自动引用计数，是 iOS 中的内存管理技术。编译器在编译阶段，在代码需要内存管理的地方插入内存管理操作(`retain`、`release`、`autorelase`)，当对象引用计数为 0 时，在 `dealloc` 的时候，会释放掉对象占用内存，自动地管理对象的生命周期。

  `autorelease` 用于延迟对象的释放。正常情况下，如果申请的对象超出作用域会释放。而使用 `autorelease` 的对象，会加入自动释放池中，延迟对象的释放时机。

## `weak` - “弱引用”

### 看源码

> [weak 源码](https://github.com/apple-oss-distributions/objc4/blob/objc4-906/runtime/objc-weak.h)

```objc
// file: objc-weak.h
// line: 80 弱引用条目
struct weak_entry_t {
    DisguisedPtr<objc_object> referent; // 被弱引用的对象
    union {
        struct {
            weak_referrer_t *referrers; // 弱引用的数组
            uintptr_t        out_of_line_ness : 2;
            uintptr_t        num_refs : PTR_MINUS_2;
            uintptr_t        mask;
            uintptr_t        max_hash_displacement;
        };
        struct {
            // out_of_line_ness field is low bits of inline_referrers[1]
            weak_referrer_t  inline_referrers[WEAK_INLINE_COUNT]; // 弱引用的内联数组
        };
    };
};

/**
 * The global weak references table. Stores object ids as keys, and weak_entry_t structs as their values.
 */ 
// line: 119 全局弱引用表，将对象 id 作为键，弱引用条目(weak_entry_t)作为值
struct weak_table_t {
    weak_entry_t *weak_entries; // 持有的弱引用数组
    size_t    num_entries;      // 弱引用数量
    uintptr_t mask;
    uintptr_t max_hash_displacement;
};
// 弱引用注册 deallocating 时选项
enum WeakRegisterDeallocatingOptions {
    ReturnNilIfDeallocating,    
    CrashIfDeallocating,       
    DontCheckDeallocating       
};
```

> [objc_store 源码](https://github.com/apple-oss-distributions/objc4/blob/objc4-906/runtime/NSObject.mm)

```objc
// file: NSObject-private.h
// line: 47
struct SideTable {
    spinlock_t slock;           // 自旋锁
    RefcountMap refcnts;        // 引用计数表
    weak_table_t weak_table;    // 弱引用表
}
```
```objc
// file: NSObject.mm
// line: 273 stong 修饰类型存储逻辑
void objc_storeStrong(id *location, id obj)
{
    id prev = *location; // 保存旧值
    if (obj == prev) { // 值相同直接返回
        return;
    }
    objc_retain(obj);   // 持有新值
    *location = obj;    // 设置新值
    objc_release(prev); // 释放旧值
}

// line: 299 weak 修饰类型存储逻辑
static id 
storeWeak(id *location, objc_object *newObj)
{
    Class previouslyInitializedClass = nil; // 保存初始化类
    id oldObj;              // 旧值
    SideTable *oldTable;    // 旧值所在引用计数表
    SideTable *newTable;    // 新值所在引用计数表
    // Acquire locks for old and new values. Order by lock address to prevent lock ordering problems. Retry if the old value changes underneath us. 
 retry: // 获取旧值和新值的锁。为防止锁排序问题，对锁地址进行排序。如果旧值在下面发生改变将进行重试。
    if (haveOld) { // 获取旧值、旧表
        oldObj = *location;
        oldTable = &SideTables()[oldObj];
    } else {
        oldTable = nil;
    }
    if (haveNew) { // 创建新表
        newTable = &SideTables()[newObj];
    } else {
        newTable = nil;
    }
    // 加锁
    SideTable::lockTwo<haveOld, haveNew>(oldTable, newTable);
    // 线程安全校验，如果旧值发生改变，返回重试
    if (haveOld  &&  *location != oldObj) {
        SideTable::unlockTwo<haveOld, haveNew>(oldTable, newTable);
        goto retry;
    }
    // Prevent a deadlock between the weak reference machinery and the +initialize machinery by ensuring that no weakly-referenced object has an un-+initialized isa.
    // 为了防止弱引用机制与初始化机制发生死锁，确认所有的弱引用对象都有初始化 isa
    if (haveNew  &&  newObj) {
        Class cls = newObj->getIsa();
        if (cls != previouslyInitializedClass  &&  !((objc_class *)cls)->isInitialized()) 
        { // 
            SideTable::unlockTwo<haveOld, haveNew>(oldTable, newTable);
            class_initialize(cls, (id)newObj);
            // If this class is finished with +initialize then we're good.
            // If this class is still running +initialize on this thread (i.e. +initialize called storeWeak on an instance of itself) then we may proceed but it will appear initializing and not yet initialized to the check above.
            // Instead set previouslyInitializedClass to recognize it on retry.
            previouslyInitializedClass = cls;
            goto retry;
        }
    }
    // Clean up old value, if any.
    if (haveOld) { // 清除旧值，从弱引用表中注销
        weak_unregister_no_lock(&oldTable->weak_table, oldObj, location);
    }
    // Assign new value, if any.
    if (haveNew) { // 分配新值，在弱引用表中注册
        newObj = (objc_object *)weak_register_no_lock(&newTable->weak_table, (id)newObj, location, crashIfDeallocating ? CrashIfDeallocating : ReturnNilIfDeallocating);
        // weak_register_no_lock returns nil if weak store should be rejected

        // Set is-weakly-referenced bit in refcount table.
        if (!_objc_isTaggedPointerOrNil(newObj)) {
            newObj->setWeaklyReferenced_nolock();
        }

        // Do not set *location anywhere else. That would introduce a race.
        *location = (id)newObj;
    }
    // 解锁
    SideTable::unlockTwo<haveOld, haveNew>(oldTable, newTable);

    // This must be called without the locks held, as it can invoke arbitrary code. 
    // In particular, even if _setWeaklyReferenced is not implemented, resolveInstanceMethod: may be, and may call back into the weak reference machinery.
    // 因为他可能会被任意代码调用，所以必须要在不加锁的情况下调用。
    // 特别是，即使 _setWeaklyReferenced 没有实现，resolveInstanceMethod: 也有可能调用，导致回调进入弱引用机制中
    callSetWeaklyReferenced((id)newObj);

    return (id)newObj;
}
```
    

## `AutoreleasePool` - “自动释放池”

### 看源码

> [AutoreleasePool 源码](https://github.com/apple-oss-distributions/objc4/blob/objc4-906/runtime/NSObject.mm)

```objc
// file: NSObject.mm
// line: 658
// 自动释放池每页类定义
class AutoreleasePoolPage : private AutoreleasePoolPageData
{
	friend struct thread_data_t;
}
```

```objc
// file: NSObject-internal.h
// line: 132
class AutoreleasePoolPage;
// 自动释放池每页数据
struct AutoreleasePoolPageData 
{
	magic_t const magic;
	__unsafe_unretained id *next;          // 指向下一个数据
	objc_thread_t const thread;
	AutoreleasePoolPage * const parent;    // 上一页指针
	AutoreleasePoolPage *child;            // 下一页指针
	uint32_t const depth;
	uint32_t hiwat;
};
```