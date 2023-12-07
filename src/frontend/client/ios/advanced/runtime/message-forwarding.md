# “消息转发”那些事

## `OC` 中的消息转发

## `Swift` 中的方法派发

派发方式 :
  - 静态派发
  - 动态派发
    * 函数表派发 : 基于 `VTable` (Virtual Method Table)
    * 消息派发 : 基于 OC 运行时机制      
   
派发效率 : `静态派发` > `函数表派发` > `消息派发`
   
  * 静态派发 : `swift` 中大多数类型被设计为值类型(`struct`、`enum`)，值类型的方法都是静态派发。如果是 `final` 修饰引用类型也是静态派发。`extension` 中的方法也是静态派发。通过 `function_ref` 指令调用方法。
  * 函数表派发 : 属于动态派发，对于引用类型，不是 `extension` 中的方法是通过 `VTable`(Virtual Method Table) 虚方法表进行派发。还存在一中 `WTable`(Witness Table) 见证者表，用于保存引用类型实现的协议方法。通过 `class_method` 指令调用方法。
  * 消息转发 : 属于动态派发，使用 `@objc` 和 `dynamic` 修饰的方法通过消息转发。仅通过 `@objc` 修饰的方法，不会改变派发方式，仅生成一个可供 `OC` 使用的方法。通过 `objc_method` 指令调用方法。 
  
## `objc_msgSend` - “消息发送”

> [看源码](https://github.com/apple-oss-distributions/objc4/blob/objc4-906/runtime/Messengers.subproj/objc-msg-arm64.s)

```objc
// file: message.h
// line:83 objc_msgSend 函数声明
OBJC_EXPORT id _Nullable
objc_msgSend(id _Nullable self, SEL _Nonnull op, ...)
```
```objc
// file: objc-msg-arm64.s
// line: 575 objc_msgSend 汇编实现
    MSG_ENTRY _objc_msgSend
	UNWIND _objc_msgSend, NoFrame

	cmp	p0, #0			// nil check and tagged pointer check
#if SUPPORT_TAGGED_POINTERS
	b.le	LNilOrTagged		//  (MSB tagged pointer looks negative)
#else
	b.eq	LReturnZero
#endif
	ldr	p14, [x0]		// p14 = raw isa
	GetClassFromIsa_p16 p14, 1, x0	// p16 = class
LGetIsaDone:
	// calls imp or objc_msgSend_uncached
	CacheLookup NORMAL, _objc_msgSend, __objc_msgSend_uncached

#if SUPPORT_TAGGED_POINTERS
LNilOrTagged:
	b.eq	LReturnZero		// nil check
	GetTaggedClass
	b	LGetIsaDone
// SUPPORT_TAGGED_POINTERS
#endif

LReturnZero:
	// x0 is already zero
	mov	x1, #0
	movi	d0, #0
	movi	d1, #0
	movi	d2, #0
	movi	d3, #0
	ret

	END_ENTRY _objc_msgSend
```

> `Message Forwarding` - “消息转发”

  `resolveInstanceMethod` -> `forwardingTargetForSelector` -> `methodSignatureForSelector` -> `forwardInvocation` -> 无法处理
  
```objc
// file: objc-runtime-new.mm
// line:7085
/***********************************************************************
* resolveClassMethod
* Call +resolveClassMethod, looking for a method to be added to class cls.
* cls should be a metaclass.
* Does not check if the method already exists.
**********************************************************************/
static void resolveClassMethod(id inst, SEL sel, Class cls)
{
    lockdebug::assert_unlocked(&runtimeLock);
    ASSERT(cls->isRealized());
    ASSERT(cls->isMetaClass());

    if (!lookUpImpOrNilTryCache(inst, @selector(resolveClassMethod:), cls)) {
        // Resolver not implemented.
        return;
    }

    Class nonmeta;
    {
        mutex_locker_t lock(runtimeLock); // 互斥锁，上锁
        nonmeta = getMaybeUnrealizedNonMetaClass(cls, inst);
        // +initialize path should have realized nonmeta already
        if (!nonmeta->isRealized()) {
            _objc_fatal("nonmeta class %s (%p) unexpectedly not realized",
                        nonmeta->nameForLogging(), nonmeta);
        }
    }
    BOOL (*msg)(Class, SEL, SEL) = (typeof(msg))objc_msgSend;
    bool resolved = msg(nonmeta, @selector(resolveClassMethod:), sel);

    // Cache the result (good or bad) so the resolver doesn't fire next time.
    // +resolveClassMethod adds to self->ISA() a.k.a. cls
    IMP imp = lookUpImpOrNilTryCache(inst, sel, cls);

    if (resolved  &&  PrintResolving) {
        if (imp) {
            _objc_inform("RESOLVE: method %c[%s %s] "
                         "dynamically resolved to %p",
                         cls->isMetaClass() ? '+' : '-',
                         cls->nameForLogging(), sel_getName(sel), imp);
        }
        else {
            // Method resolver didn't add anything?
            _objc_inform("RESOLVE: +[%s resolveClassMethod:%s] returned YES"
                         ", but no new implementation of %c[%s %s] was found",
                         cls->nameForLogging(), sel_getName(sel),
                         cls->isMetaClass() ? '+' : '-',
                         cls->nameForLogging(), sel_getName(sel));
        }
    }
}


/***********************************************************************
* resolveInstanceMethod
* Call +resolveInstanceMethod, looking for a method to be added to class cls.
* cls may be a metaclass or a non-meta class.
* Does not check if the method already exists.
**********************************************************************/
static void resolveInstanceMethod(id inst, SEL sel, Class cls)
{
    lockdebug::assert_unlocked(&runtimeLock);
    ASSERT(cls->isRealized());
    SEL resolve_sel = @selector(resolveInstanceMethod:);

    if (!lookUpImpOrNilTryCache(cls, resolve_sel, cls->ISA(/*authenticated*/true))) {
        // Resolver not implemented.
        return;
    }

    BOOL (*msg)(Class, SEL, SEL) = (typeof(msg))objc_msgSend;
    bool resolved = msg(cls, resolve_sel, sel);

    // Cache the result (good or bad) so the resolver doesn't fire next time.
    // +resolveInstanceMethod adds to self a.k.a. cls
    IMP imp = lookUpImpOrNilTryCache(inst, sel, cls);

    if (resolved  &&  PrintResolving) {
        if (imp) {
            _objc_inform("RESOLVE: method %c[%s %s] "
                         "dynamically resolved to %p",
                         cls->isMetaClass() ? '+' : '-',
                         cls->nameForLogging(), sel_getName(sel), imp);
        }
        else {
            // Method resolver didn't add anything?
            _objc_inform("RESOLVE: +[%s resolveInstanceMethod:%s] returned YES"
                         ", but no new implementation of %c[%s %s] was found",
                         cls->nameForLogging(), sel_getName(sel),
                         cls->isMetaClass() ? '+' : '-',
                         cls->nameForLogging(), sel_getName(sel));
        }
    }
}
```

## `methodInvoke` - “直接方法调用”

```objc
// file: message.h
// line: 266 method_invoke 函数声明
OBJC_EXPORT id _Nullable
method_invoke(id _Nullable receiver, Method _Nonnull m, ...) 
```

> [Type Encodings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtTypeEncodings.html)