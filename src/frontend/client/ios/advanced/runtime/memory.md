---
title: 内存管理
icon: hashtag

index: true
order: 3

---

## reference

- [2022-09-09 探秘AutoreleasePool实现原理](https://juejin.cn/post/7141285896250195982)
- [2022-05-07 Swift 中的 ARC 机制: 从基础到进阶](https://juejin.cn/post/7094799538455576584)
- [2021-03-20 一个 NSObject 对象占用多少个字节](https://juejin.cn/post/6941732574913888269)
- [2014-10-15 黑幕背后的Autorelease](http://blog.sunnyxx.com/2014/10/15/behind-autorelease/)

## 引用计数

  `MRC`(Manual Reference Counting) : 手动引用计数。需要程序员自己申请(`retain`)和释放(`release`、`autorelease`)
  
  `ARC`(Automatic Reference Counting) : 自动引用计数，是 iOS 中的内存管理技术。编译器在编译阶段，在代码需要内存管理的地方插入内存管理操作(`retain`、`release`、`autorelase`)，当对象引用计数为 0 时，在 `dealloc` 的时候，会释放掉对象占用内存，自动地管理对象的生命周期。

  `autorelease` 用于延迟对象的释放。正常情况下，如果申请的对象超出作用域会释放。而使用 `autorelease` 的对象，会加入自动释放池中，延迟对象的释放时机。

### `autoreleasepool`

  自动释放池，`NSAutoreleasePool` 类，`ARC` 之后简化为 `OC` 中的 `@autoreleasepool`，`swift` 中的 `autoreleasepool`。通俗一点理解，就是使用 `autorelease` 的对象，会临时存放在这个池子里面，等到所在的线程的 `RunLoop` 一次循环结束时，会进行引用计数的 -1 操作。
  
  `autoreleasepool` 实现使用的数据结构：栈 + 双向链表。底层实现类为 `AutoreleasePoolPage`，这个是自动释放池的一页，创建时会存储双向链表的一个节点，剩下的空间设计为一个数据栈，用于存放加入自动释放池中的数据。
  对象加入自动释放池时，会调用 `Push` 函数，这个函数会返回一个地址 (这个地址很重要，是释放时 `Pop` 函数的入参，标记释放时的终点)。当着一页数据放满时，会新建一页，连接链表，新数据会继续存放在新创建的 `AutoreleasePoolPage` 的数据栈中。
  对象释放时，调用 `Pop` 函数，从栈顶开始释放对象，一直释放到 `Push` 函数标记的位置。如果释放完一页自动释放池中的全部对象，则根据链表向后一直释放，直到标记位置。

```objc
void * objc_autoreleasePoolPush(void) {
    return AutoreleasePoolPage::push();
}
void objc_autoreleasePoolPop(void *context) {
    AutoreleasePoolPage::pop(context);
}
```

### `RunLoop` 什么时候释放内存

  `RunLoop` : 运行循环，从最基本编程语言语法层面来说就是一个循环 (`for`、`while`)。只不过这个循环结束条件，依赖于与这个 `RunLoop` 一一对应的线程，这个 `RunLoop` 循环结束的条件就是线程结束。而对于 `iOS` 程序来说，程序启动时会启动一个主 `RunLoop` 运行主线程，可以理解为一个死循环，程序结束时才会结束。

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

## 经典面试题

> 下面代码会发生什么？

```objc
@property (nonatomic, strong) NSString *target;
//....

dispatch_queue_t queue = dispatch_queue_create("parallel", DISPATCH_QUEUE_CONCURRENT);
for (int i = 0; i < 1000000 ; i++) {
	dispatch_async(queue, ^{
     	self.target = [NSString stringWithFormat:@"ksddkjalkjd%d",i];
	});
}
```

- [2017-08-25 浅谈 Objective-C 线程安全](https://nemocdz.github.io/post/%E4%BB%8E%E4%B8%80%E9%81%93%E7%BD%91%E6%98%93%E9%9D%A2%E8%AF%95%E9%A2%98%E6%B5%85%E8%B0%88-objective-c-%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8/)