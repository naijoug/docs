---
title: Objective-C
icon: hashtag

index: true
order: 1

---

<!-- more -->

## 设计理念

  `OC` 底层是使用 `C/C++` 实现。定一个继承 `NSObject` 的类，这个类底层使用 `C` 语言中的 `struct` 结构体来实现的。 

###  `Java、python、OC` 运行效率孰高？

### ❓`OC` 的动态性

::: details 💡

  首先理解两个“动态语言与静态语言”

  `OC` 的 `runtime` 文档中介绍中就详细写明了，`runtime` 的设计是为了将 `OC` 中的更多的处理延迟到编译后。

  - 动态类型 (Dynamic typing) : 编译时并不确定对象类型，在运行时才判断对象的类型。`OC` 中一切对象都可以用 `id` 指针指向。
  - 动态绑定 (Dynamic binding) : 方法的调用也是运行时才决定，而并非编译时。
  - 动态加载 (Dynamic loading) : 运行时可以动态加载其它模块或框架

:::

### `OC` 是否支持重载? 为什么?

### 说说对 `self` 和 `super` 的理解？

### 说一下 `dealloc` 的实现机制？

### ❓`OC` 底层方法列表的数据结构是什么？

::: details 💡

  底层是通过结构体来实现了，结构里面的通过数组来存储方法列表
    
  ```objc
  // 方法列表结构体
  struct method_list_t {
    uint32_t entsize;        // 结构体的大小
    uint32_t method_count;   // 方法的数量
    method_t method_list[1]; // 方法列表
  };
  // 方法结构体
  struct method_t {
    SEL sel;                // 方法的名称
    const char *types;      // 方法的类型
    IMP imp;                // 对应的实现（函数指针）
  };
  ```

:::

### `id` vs `NSObject`

- `id` : 可以指向任意的 `OC` 对象

### `id` vs `instancetype`？

### `id` 为什么不能用点语法？

### ❓`nil` vs `Nil` vs `NULL` vs `NSNull`

::: details 💡

  - `nil` : 一种特殊的指针，指向为空的 `OC` 对象
  - `Nil` : 
  - `NULL` : 也是表示空指针，一般代表 `C` 指针为空
  - `NSNull` : 

:::

### ❓`Designated Initializer` 如何添加？

### ❓`+load` 与 `+initialize` 区别

::: details 💡

  这两个都是类方法，可以从下面几个方面去对比两者的区别
  
  - 调用时机
    * `+load` : 这是在运行时加载时，进行触发调用。
    * `+initialize` : 会在类第一次使用时，进行触发调用。
  
  - 调用次数
    * `+load` : 只会在运行时加载时，调用一次。
    * `+initialize` : 第一次调用时，调用一次。

  - 调用父类
    * `+load` : 不会调用父类的 `+load`
    * `+initialize` : 如果当前类没有

  - 手动调用
    * `+load` : 不能手动调用，运行时进行调用的。手动调用会触发异常。
    * `+initialize` : 可以手动调用。
  
:::
  
  > ❓`+load` 的调用顺序
  
::: details 💡
  
  - `+load` 方法调用顺序与编译连接顺序有关。
  - 不同类之间的`+load`方法的调用顺序不能确定，取决于编译连接顺序。
  - 如果父类、子类和分类都实现了 `+load` 方法，`+load` 方法的调用顺序是：先调用父类的`+load`，再调用子类的`+load`，最后调用分类的`+load`。
  
:::

### `OC` 中的内省和反射，底层实现原理？应用场景有哪些？

### `OC` 如何实现多重继承？

### 静态方法是否能被重写?

### 怎么保证自己的类一定能调用到自己写的方法？

### 类簇的优缺点？

------

## NSString

### `NSString` 如何计算字符的个数？
  

  
### ❓`OC` 中的三种字符串？ 
    
::: details 💡
    
  - `__NSCFConstantString` ：在编译时被创建的常量字符串对象，如`NSString *str = @"Hello, World!"`。这些对象会在编译时就被创建，并且在程序的整个生命周期中都不会被销毁。
  
  - `__NSTaggedPointerString` ：使用 `Tagged Pointer` 技术来提高内存使用效率，通常用于存储较小的字符串数据。
  
  - `__NSCFString` ：本质上是一个 `Core Foundation` 字符串的引用（`CFStringRef`），这种类型的字符串通常会在运行时程序动态创建的对象字符串。

:::

  > `Tagged Pointer` 了解吗？ 

::: details 💡

  > `iOS 7` 之后 Apple 为了优化引入的一项技术。从字面意思上来看`Tagged Pointer`就是带有标签的指针。
  
  一般来说，在 64-bit 架构下，一个指针的值需要占用 8 byte 的内存空间；然而对于一些非常小的数据，比如 NSNumber、NSDate、NSString 等，使用 8 byte 存储对象指针就显得非常浪费。为了解决这个问题，苹果引入了 `Tagged Pointer` 技术，通过标签直接将小的数据对象嵌入到指针中，这样对于小的数据对象，就无需额外的内存来存储了，能够显著提高内存的利用率。需要注意，一个对象是否使用 `Tagged Pointer` 是由系统决定的，不能人为控制。
  
  具体到 `NSString` 这种场景中，如果字符串的内容非常短，那么它的实现方式可能就是 `Tagged Pointer`，直接将字符串内容存在指针中，提高了内存利用率。
  
:::

------

## NSDictionary

### ❓`NSDictionary` 大致实现原理

::: details 💡

  `NSDictionary` 在内部实现上采用了哈希表的数据结构
    
:::
  
### ❓`NSCache` vs `NSDictionary`

### `NSCache` 中缓存的对象，在什么时候被释放？

------

## NSMutableArray

### `[[NSMutableArray alloc] init]` 和 `[NSMutableArray array]` 有什么区别?

### `NSMutableArray` 是怎么实现的，做增删操作的时候内存空间是怎么改变的，可以用别的方法实现吗？"

------

## 拷贝

### ❓自定义类如何实现拷贝功能？如何重写带 `copy` 关键字的 `setter`？

### ❓`copy` 和 `mutablecopy` 的区别？

### ❓`@property (copy) NSMutableArray *array;` 这个写法正确吗？

## 属性

### `@property` 属性是什么？

::: details 💡

  > `@property` 是 `Objective-C` 中的一个关键字，用于声明一个属性。主要作用是为类的实例变量（属性）生成对应的访问器方法，即 `getter` 方法和 `setter` 方法。
  
  `@property` 访问器
  - 原子性 : `atomic`、`nonatomic`
  - 读写性 : `readwrite`、`readonly`
  - 内存管理 : `assign`、`strong`、`weak`、`copy`

  `@property` 优点
  - 隔离性：可以封装实例变量的直接访问，将类的内部实现与外部接口隔离，提高数据的安全性。
  - 可维护性：可以在 `getter` 和 `setter` 中添加特定的逻辑如设置新值时进行验证，获取值时返回一个计算后的值等，提高代码的可维护性。 

:::

### `@property` 的默认关键字？
  
::: details 💡

```objc
// 基本数据类型 => 默认是: atomic, readwrite, assign
@property int num;
// 对象数据类型 => 默认是: atomic, readwrite, strong
@property NSObject *obj;
```

:::
  
### ❓`assign`、`strong`、`weak`、`copy` 区别？
  
::: details 💡
  
  - `assign`：是赋值特性，简单设置变量，不更改引用计数。
    > 主要用在基本的数据类型（如 int、float）或 C 数据类型（如 结构体、C 数组）而不是对象。
  
  - `strong`（类似于：retain）：是所有权（owning）特性。
    > 采用 `ARC`（自动引用计数）环境下，编译器会自动在设置方法中插入 `retain` 调用，使对象的引用计数增加，从而表示当前对象拥有数据值。
  
  - `weak`：是非拥有关系（non-owning）特性，即弱引用。
    > 当用 `weak` 修饰对象时，被指向的对象引用计数不会增加，更重要的是，当对象被释放时，被 `weak` 修饰的变量会自动被置为 `nil`，防止野指针的出现。`weak` 修饰的属性适合在已经存在对对象的`strong`引用，或者对象之间存在相互循环引用的情况下使用。
  
  - `copy`：是拷贝特性。
    > 适合 `NSString`、`NSArray`、`NSDictionary` 等不可变对象。最重要的一点是：使用 `copy` 保持封装性，对象在内部可能需要一个数据的完整副本，并且把这个副本给外界使用，防止作为接口提供的对象的初始数据被改变。

  选择哪种属性修饰符要视情况而定，如果数据是不可变的，那么选择 `assign` 或 `copy` 较好；如果数据是可变的，可以选择 `strong` 或 `weak`。

:::

### `nonnull` 用过吗？

### `NSString` 为什么使用 `copy`，可以使用 `strong` 吗？

::: details 💡

  > `NSString` 使用 `copy` 是为了防止在赋值可变字符串时由于原字符串发生改变而引发非预期问题。

  - `NSString` 的子类 `NSMutableString` 是可以变化的。如果使用 `strong` 并把一个 `NSMutableString` 实例赋值给 `NSString` 对象，然后改变该`NSMutableString` 实例，那么 `NSString` 实例也会随之改变。

  - 如果使用 `copy`，当一个 `NSMutableString` 实例赋值给 `NSString` 对象时，实际上会复制一个不可变的副本。这样即使原字符串改变 `NSString` 实例也不会受影响。
  
:::

### `@dynamic`和 `@synthesize` 关键字的作用？

::: details 💡

- `@synthesize`：告诉编译器编译时自动创建 `getter/setter` 方法，如果你没有手动实现这些方法的话。

- `@dynamic`：这个关键字告诉编译器,属性的getter和setter方法由用户自己实现，不自动生成（当然对于`@dynamic var`，编译器还是会默认添加其成员变量`_var`），如果我们没有手动实现setter和getter，那么程序运行时，编译器发现找不到setter/getter就会崩溃。但是一个好处是它可以让我们在运行时动态绑定对象。

> `@dynamic`常常和运行时函数class_addMethod配合使用,我们可以动态添加方法。最常见的应用是在Core Data的NSManagedObject子类中，Core Data的属性经常被设置为@dynamic, NSManagedObject利用Core Data的底层存储访问这些属性，以便将对象的实际数据保存在磁盘上，而不是内存中。 

简单来说：

@synthesize 用于当你不想手动实现 getter 和 setter 方法时，告诉编译器帮你添加这些方法。

@dynamic 用于告诉编译器不自动生成 setter 和 getter 方法， 需要开发者手动创建还是动态添加。

:::

### `@synthesize` 合成实例变量的规则是什么？假如属性名为 `foo`，存在一个名为 `_foo` 的实例变量，那么还会自动合成新变量么？

### 在有了自动合成属性实例变量之后，`@synthesize` 还有哪些使用场景？



### ❓`@property` 的底层实现？

::: details 💡  
  
  声明 `@property` 后，编译器会根据属性的特性在 `class_rw_t` 结构中的 `methods` 和 `properties` 中生成 `getter` 和 `setter` 方法以及相应的属性。然后在运行时，这些 `getter` 和 `setter` 方法以及属性被引入到`objc_class`的结构中。
  
  ```objc
  struct objc_class {
      Class isa;              // metaclass 的指针
      Class super_class;      // 父类
      cache_t cache;          // 缓存
      class_data_bits_t bits; // 类的相关信息，包含了一个指向 class_rw_t 数据结构的指针
  };
  // 可读写结构，存储运行时添加的类信息
  struct class_rw_t {
      uint32_t flags;
      uint32_t version;
      const class_ro_t *ro;           // 只读结构体，保存编译时确定的类信息
      method_array_t methods;         // 方法列表
      property_array_t properties;    // 属性列表
      protocol_array_t protocols;     // 协议列表
      Class firstSubclass;
      Class nextSiblingClass;
  };
  ```
  
::: 


------

## Block
  
### ❓`block` 与 代理的区别?
  
### ❓`block` 与 函数指针
  
::: details 💡
  
  - `block`：一种特殊的数据类型，可以存储一段代码，并且这段代码可以在任何时候被执行。可以访问在声明他的那个作用域中定义的变量，这被称为“变量捕获”。
  
  - 函数指针：函数指针是存储着函数地址的指针变量，本质上是一个地址值，也就是函数在内存中的起始地址。函数指针不能像 `block` 那样访问变量，只能通过传参的方式去使用外部的数据。
  
:::

### `block` 时什么情况会发生引用循环？

### `UIView` 动画函数 `block` 版本使用，是否需要处理循环引用？

### `block` 内如何修改 `block` 外部变量？

### `block` 在捕获自变量，局部静态变量，全局变量，全局静态变量有什么区别?

### ❓`__block` 的作用？

### `__block` vs `__weak`？

### `__block` 在 `ARC` 和非 `ARC` 有区别吗？

### `block` 捕获外部局部变量实际上发生了什么？`__block` 的作用？

### 一个 `int` 变量用 `__block` 修饰与不修饰有区别吗？

### 在 `block` 中修改 `NSMutableArray`，需不需要添加`__block`？

### ❓为什么在 `block` 外部使用 `__weak` 修饰的同时需要在内部使用 `__strong` 修饰？
  
::: details 💡

:::

### ❓`block` 底层实现？

::: details 💡

  `block` 底层是使用结构体实现的。
  
  根据内存分区不同，分为三种 `block`
    
   - `__NSGlobalBlock__` : 全局 `block`，类似全局静态变量，存放在静态区 
   - `__NSStackBlock__` : 栈区 `block`，保存在栈区
   - `__NSMallocBlock__` : 堆区 `block`，保存在堆区

  > 结构体是什么样?

:::

  
### `block` 一般使用 `copy` 修饰，可以使用 `strong` 吗？发生 `copy` 的时机？

### `block` 如何进行内存管理的？

### `block` 访问对象类型的 `auto` 变量时，在 `ARC` 和 `MRC` 下有什么区别？

### 在block里面使用_property会造成循环引用吗？怎么解决？除了使用self->_property，可以使用valueforkey来访问吗  在block里面可以修改它的值吗setvalueforkey？可以修改它的值，可以用valueforkey来解决，显式的的使用self，block外先持有self的弱引用。

------

## 分类

### OC 中 `Category` vs `Extension`

::: details 💡

  > `Category`(类别)：`Objective-C` 的一个特性，提供了一种给已存在类添加方法的机制.
    
  - `Category` : 只能添加方法，不能添加实例变量(除非通过关联对象)。分类中的方法是运行时添加到方法列表中的。
  - `Extension` : 可以添加方法和计算属性，也可以添加构造方法，也可以实现以一个协议。编译时已经确定，不支持动态添加方法。

:::

### 给 `NSObject` 添加 `Extension` 会怎么样？

### ❓如果分类中添加与类相同的方法签名会发生什么？
  
::: details 💡
  
  分类中的方法是运行时添加到方法列表中，并且是添加中已有方法的前面。所以当分类与原类中的方法相同时，分类中的方法会优先调用，覆盖掉原类中的方法。
 
:::
 
### ❓分类是如何实现的？它为什么会覆盖掉原来的方法？
 
::: details 💡

  底层实现：是一个 `objc_category` 结构体，它包含了类名(name)、类(cls)、类别中所有方法的列表(method_list)、类别的协议列表(protocol_list)、类别中所有的属性列表(property_list)。
    
  加载过程：在程序运行时的 `load` 阶段进行的，所有类和分类的 `+load` 方法（如果有）被调用。在调用 `+load` 方法之前，`runtime` 会先将分类的方法、协议、属性合并到类的数据结构中。这个过程中，分类的方法被放在了原来类方法列表的前面，所以在类和分类中有相同方法名的方法的时候，分类的方法会被优先调用，原类的方法被覆盖。

:::

### 一个类，有个多个分类都实现了相同的方法，会调用哪个方法？

### 分类中有与主类相同的方法，我想要调用主类中的方法，有什么办法吗？

### 两个分类的 `load` 方法的加载顺序？

### 两个分类的同名方法的加载顺序？
 
### ❓分类的结构体里面有哪些成员？
 
### 分类中为什么不能添加 `@property`？

::: details 💡



:::

### ❓分类中如何添加属性？
 
::: details 💡
 
  可以使用关联对象（`Associated Objects`）让分类拥有“伪属性”。
 
 在Objective-C中，分类（Category）的定义中并不支持直接添加属性（instance variable）。但我们可以通过 Objective-C 的关联对象（Associative References）机制实现给分类添加属性。 

以下是一个例子，演示如何给一个分类添加一个属性：

  ```objc
  #import "NSObject+Property.h"
  #import <objc/runtime.h>

  static const void *MyKey = &MyKey;

  @implementation NSObject (Property)
  // getter
  - (NSString *)myProperty {
    // `objc_getAssociatedObject` 用于取关联对象。
    //  - 首个参数是要存取的对象
    //  - 第二个参数是键，我们用一个静态常量 `MyKey` 作为键（每个关联到对象的键必须全局唯一）
    return objc_getAssociatedObject(self, MyKey);
  }
  // setter
  - (void)setMyProperty:(NSString *)myProperty {
    // `objc_setAssociatedObject` 第三个参数是存储的值，第四个参数是关联策略
    // `OBJC_ASSOCIATION_COPY_NONATOMIC`，表示这是一个 copy ，非原子操作的特性
    objc_setAssociatedObject(self, MyKey, myProperty, OBJC_ASSOCIATION_COPY_NONATOMIC);
  }
  @end
  ```

在这个示例中，我们定义了一个 `NSObject` 的分类并为它添加了一个 `myProperty` 属性。

。对于 ，例如在这里我们将它设为了 。

  通过关联对象可以间接实现在分类中"添加"属性，这也是 `Objective-C` 动态的特性之一。
 
:::

------

## 关联对象

### 关联对象的如何进行内存管理的？

### 关联对象如何实现 `weak` 属性？

### 关联对象的底层实现？

### 关联对象需要在主对象 `dealloc` 的时候手动释放吗？

### 关联对象有什么应用，系统如何管理关联对象？其被释放的时候需要手动将所有的关联对象的指针置空吗？

------

## 消息发送

### `OC` 中的类方法和实例方法有什么本质区别和联系？

### 在类方法中是否可以使用 `self`？

### `sel`、`_cmd` 是什么？

### ❓`OC` 中对象消息发送的大致流程？

### ❓向一个 `nil` 对象发送消息将会发生什么？

### 向一个对象发送消息 `[obj foo]` 和 `objc_msgSend()` 函数之间有什么关系？

### ❓`unrecognized selector` 异常是怎么发生的？如何避免？

### `_objc_msgForward` 函数是做什么的，直接调用它将会发生什么？

### ❓`OC` 中是如何通过 `selector` 找到对应的 `IMP` 地址

::: details 💡

  - 消息的接受者（receiver）会在自己的类和超类（superclasses）的方法列表中查找与消息匹配的 `selector`。
  - 如果找到了匹配的 `selector`，那么会从方法列表中取出对应的函数指针（IMP），并且调用这个函数。
  - 如果没有找到匹配的 `selector`，那么会进入消息转发（forwarding）流程。

  类方法与实例方法

:::

### 消息转发机制和其他语言的消息机制优劣对比？

### 在方法调用的时候，`方法查询-> 动态解析-> 消息转发` 之前做了什么？

### 下面代码能正常运行吗，如果可以输出是什么？

```objc
@interface Person : NSObject 
@property(nonatomic,copy) NSString *name; 
@end
@implementation Person
- (void)speak {
    NSLog(@"My name is:%@",self.name); 
}
@end

@implementation ViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    
    id cls = [Person class];
    void *obj = &cls;
    [(__bridge id)obj speak];
}
@end
```

