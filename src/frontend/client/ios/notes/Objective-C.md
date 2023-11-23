# Objective-C

## Reference

- [2018-07-01 isa && 元类 && 函数调用](https://minilv.github.io/2018/07/01/ias-class-metaClass/)

## Concept

- Foundation & Core Foundation

| framework | 说明 
| --- | --- 
| `Foundation`      | OC 对象     
| `Core Foundation` | C 结构体类型 

- `__bridge` & `__bridge_retained` & `__bridge_transfer`

| 桥接方法 | 说明
| --- | ---
| `__bridge`            | 
| `__bridge_retained`   | `Foundation -> Core Foundation`
| `__bridge_transfer`   | `Core Foundation -> Foundation`

- id & instancetype

| 类型 | 相同点 | 不同点
| --- | --- | ---
| `id`            | 可以表示任何对象 | 可以用在返回值和参数类型上
| `instancetype`  | 可以表示任何对象 | 只能用在返回值类型上，编译器会检测 instancetype 的真实类型

- load & initialize

| 方法 | 调用时机 | 子类实现 | 分类实现 | 调用顺序
| --- | --- | --- | --- | ---
| `load`          | 第一次装载进内存时调用  | 不会覆盖父类 | 不会覆盖原始类 | `父类 -> 子类 -> 分类`
| `initialize`    | 第一次使用这个类时调用  | 会覆盖父类   | 会覆盖原始类  | `父类 or 子类 or 分类`

- @property

| 属性 | 特性 | 说明 
| --- | --- | ---
| `readwrite`         | 可读可写    | 生成 getter 方法和 setter 方法
| `readonly`          | 只读        | 只会生成 getter 方法，不会生成 setter 方法
| `retain`            | 持有        | setter 方法将传入参数先持有(retain count +1)，再赋值
| `nonatomic`         | 非原子      | 非线程安全，编译更快
| `atomic`            | 原子        | 原子操作，保证线程安全
| `assign`            | 赋值        | setter 方法将传入参数赋值给实例变量
| `weak`              | 弱引用      | 对象被销毁时，会被设置nil
| `strong`            | 强引用      | 
| `copy`              | 复制        | 类似 strong，在赋值时进行 copy 而不是 retain，用于不可变对象，防止使用过程中被篡改(如：字符串，block)
| `unsafe_unretained` | 不安全的不持有 | 类似 weak，对象销毁时，不会被设置为 nil，比 weak 效率更高
| `nonnull`           | 不为空       | 
| `nullable`          | 可为空       |  

- `@synthesize` & `@dynamic`

| 修饰符 | 说明
| --- | ---
| `@synthesize` | 编译器自动生成 getter 和 setter
| `@dynamic`    | 显式表示不希望编译器生成 getter 和 setter

- category & extension

| 类型 | 加载时机 | 说明
| --- | --- | ---
| category  | 运行时 | 分类，用于扩展现有类功能
| extension | 编译时 | 一种特殊的(匿名) category，只能存在原始类 .m 文件中

- `#include` & `#import` & `@class`

| 类型 | 说明
| --- | ---
| `#include`    | C/C++ 导入关键字
| `#import`     | OC 导入关键字，只导入一次，不会重复导入
| `@class`      | 头文件引用类

- 协变 & 逆变
> iOS 9，泛型使用

| 类型 | 说明
| --- | ---
| `__covariant`     | 协变，子类转父类
| `__contravariant` | 逆变，父类转子类

## KVC & KVO

- [KVO 的内部实现](http://limboy.me/tech/2013/08/05/internal-implementation-of-kvo.html)
- [如何自己动手实现 KVO](https://tech.glowing.com/cn/implement-kvo/)

- `KVC`（Key Value Coding）
    > 是一种间接更改对象状态的方式，使用字符串来描述对象需要更改的属性(以字符串的形式向对象发送消息)。

```objc
valueForKey:                // 获取对象的属性值
setValue:ForKey:            // 修改对象的属性值

// 键路径(Key Path) : 类似属性的链式访问
valueForKeyPath:            // 通过
setValue:forKeyPath:        // 

// 批处理
dictionaryWithValuesForKeys:    // 
dictionaryWithObjects:forKeys:  // 
setValuesForKeysWithDictionary: // 

// 键路径的运算符
//   在键路径中，可以引用一些运算符来进行一些运算，例如获取一组值的平均值、最小值、最大值或者总数。
//1. 例如，计算Student中Book的总数
NSNumber *count = [student.books valueForKeyPath:@"@count"];   
//或者
NSNumber *count = [student valueForKeyPath:@"books.@count"];
//2. 计算Student中所有Book的价钱(price)总和
NSNumber *sum = [student.books valueForKeyPath:@"@sum.price"]; 
//或者
NSNumber *sum = [student valueForKeyPath:@"books.@sum.price"];
//3. 找出Student中Book的所有不同价位(排除相同价位)
NSArray *prices = [student.books valueForKeyPath:@"@distinctUnionOfObjects.price"];
//或者
NSArray *prices = [student valueForKeyPath:@"books.@distinctUnionOfObjects.price"];
```

- `KVO` (Key Value Observing)
    > KVO 是一种非常重要的机制，它允许监听对象的属性的变化。

```objc
/**
    注册监听器
        anObserver ：监听器对象
        keyPath ：监听的属性
        options ：决定了当属性改变时，要传递什么数据给监听器
*/
-(void)addObserver:(NSObject *)anObserver forKeyPath:(NSString *)keyPath options:(NSKeyValueObservingOptions)options context:(void *)context

/** 
    监听器需要实现监听方法
        keyPath ：监听的属性
        object ：谁的属性改变了
        change ：属性改变时传递过来的信息（取决于添加监听器时的options参数）
*/
-(void) observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary *)change context:(void *)context

/** 移除监听器 */
-(void)removeObserver:(NSObject *)observer forKeyPath:(NSString *)keyPath

// 手动设定KVO
- (void)setAge:(NSString *)age {
    [self willChangeValueForKey:@"age"];
    _age = age;
    [self didChangeValueForKey:@"age"];
}
- (NSString *)age {
    return _age;
}
+ (BOOL)automaticallyNotifiesObserversForKey:(NSString *)key {
    // 如果监测到键值为age,则指定为非自动监听对象
    if ([key isEqualToString:@"age"]) {
        return NO;
    }
    return [super automaticallyNotifiesObserversForKey:key];
}
```

## Block

- [How Do I Declare A Block in Objective-C?](http://fuckingblocksyntax.com/)
- [对 Objective-C 中 Block 的追探](http://www.cnblogs.com/biosli/archive/2013/05/29/iOS_Objective-C_Block.html)

```objc
// 定义 block
//      本地变量
returnType (^blockName)(parameterTypes) = ^returnType(parameters) {...};
//      属性
@property (nonatomic, copy, nullability) returnType (^blockName)(parameterTypes);
//      方法参数类型
- (void)someMethodThatTakesABlock:(returnType (^nullability)(parameterTypes))blockName;
//      方法调用参数
[someObject someMethodThatTakesABlock:^returnType (parameters) {...}];
//      C 函数参数类型
void SomeFunctionThatTakesABlock(returnType (^blockName)(parameterTypes));
//      定义一个类型
typedef returnType (^TypeName)(parameterTypes);
TypeName blockName = ^returnType(parameters) {...};
```

- Block 内存机制

| 类型 | 说明
| --- | ---
| `NSMallocBlock`   | 存储于堆区
| `NSStackBlock`    | 存储于栈区
| `NSGlobalBlock`   | 存储于程序数据区

```objc
typedef void (^blk)(void);

blk returnBlock() {
    int val = 11;
    return ^{ NSLog(@"val = %d", val); };
}

void testBlock() {
    // 修改 Block 之外的局部变量，需要使用 __block 关键字
    __block int val = 10;
    
    // 强引用 block : 存放在堆上
    __strong blk strongPointerBlock = ^{ NSLog(@"val = %d", ++val); };
    strongPointerBlock();
    NSLog(@"strongPointerBlock: %@", strongPointerBlock);
    
    // 弱应用 block : 存放在栈上
    __weak blk weakPointerBlock = ^{ NSLog(@"val = %d", ++val); };
    weakPointerBlock();
    NSLog(@"weakPointerBlock: %@", weakPointerBlock);
    
    // 弱引用 copy block : 存放在堆上
    blk copyBlock = [weakPointerBlock copy];
    copyBlock();
    NSLog(@"copyBlock: %@", copyBlock);
    
    // 临时 block : 存放在栈上
    NSLog(@"tempBlock %@", ^{ NSLog(@"val = %d", ++val); } );
    
    // block 作为返回值 : 存放在栈上
    NSLog(@"returnBlock: %@", returnBlock());
}
```

- Block vs 函数指针

| 类型 | 说明
| --- | ---
| Block     | 一个函数对象，包含函数信息，有类型限制
| 函数指针   | 是一个地址，不具备函数原型信息，没有类型限制

```objc
int (*func)(int, int);  // 定义函数指针
int (^block)(int, int); // 定义 Block

(*func)(10, 20);        // 调用函数指针
block(10, 20);          // 调用 Block
```

- 解除循环引用
    1. 局部变量默认都是强引用的，离开其所在的作用域之后就会被释放
    2. 使用 `__weak` 关键字，可以将局部变量声明为弱引用
    3. 在 Block 中引用 `weakSelf`，则 Block 不会再对 `self` 做强引用

```objc
@property (nonatomic, strong) NSMutableArray *myBlocks;
int(^sum)(int, int) = ^(int x, int y) {
    return [self sum:x y:y];
};

// 形成循环引用
[self.myBlocks addObject:sum];

// 修改 block 解除循环引用
__weak DemoObj *weakSelf = self;
int(^sum)(int, int) = ^(int x, int y) {
    return [weakSelf sum: x y: y];
};
```

## Copy

- 深复制 & 潜复制
    > 只有不可变对象创建不可变副本(copy)才是浅复制，其他都是深复制

| 复制类型 | 说明
| --- | ---
| 深复制   | 内容拷贝，源对象和副本指向的是不同的两个对象；源对象引用计数器不变，副本计数器设置为1
| 浅复制   | 指针拷贝，源对象和副本指向的是同一个对象；对象的引用计数器+1

- `Copy` & `MutableCopy`
    >  使用 `copy` 或 `mutableCopy` 方法可以创建一个对象的副本

| 复制类型 | 说明
| --- | ---
| `copy`        | 需要实现`NSCopying`协议，创建的是不可变副本(如`NSString`、`NSArray`、`NSDictionary`)
| `mutableCopy` | 需要先实现`NSMutableCopying`协议，创建的是可变副本(如`NSMutableString`、`NSMutableArray`、`NSMutableDictionary`)

| 源对象 | 复制方式 | 副本 
| --- | --- | --- 
| NSArray NSMutableArray            | copy          | NSArray  
|                                   | mutableCopy   | NSMutableArray 
| NSDictionary NSMutableDictionary  | copy          | NSDictionary  
|                                   | mutableCopy   | NSMutableDictionary 
| NSString NSMutableString          | copy          | NSString 
|                                   | mutableCopy   | NSMutableString 

- 自定义类添加复制功能
    > 如果想自定义 `copy`, 那么就必须遵守 `NSCopying`, 并且实现 `copyWithZone:` 方法
    >
    > 如果想自定义 `mutableCopy`, 那么就必须遵守 `NSMutableCopying`, 并且实现 `mutableCopyWithZone:` 方法

``` objc
// 以copy为例,建议用[self class]代替直接类名
- (id)copyWithZone:(NSZone *)zone {
    id copy = [[[self class] allocWithZone: zone] init];
    // 属性的初始化.....
    return copy;
}

// 自定义对象的copyWithZone
- (id)copyWithZone:(NSZone *)zone {
    Person *p   = [[[self class] allocWithZone: zone] init];  
    p.name      = self.name;
    p.age       = self.age;
    return p;
}
```

## Foundation

### NSObject

``` objc
// 判断是否为aClass或者aClass的子类的实例
- (BOOL)isKindOfClass:(Class)aClass
// 判断是否为aClass的实例(不包括aClass的子类)
- (BOOL)isMemberOfClass:(Class)aClass
// 判断对象是否实现了aProtocol协议
- (BOOL)conformsToProtocol:(Protocol)aProtocol
// 判断这个类的对象是否拥有参数提供的方法
+ (BOOL)instancesRespondToSelector:(SEL)aSelector
// 判断对象是否拥有参数提供的方法
- (BOOL)respondsToSelector:(SEL)aSelector
// 延迟调用参数提供的方法，方法所需参数用withObject传入
- (void)performSelector:(SEL)aSelector withObject:(id)anArgument afterDelay:(NSTimeInterval)delay
```

### nil & NIL & NSNull

| 类型 | 说明
| --- | ---
| `nil`     | 一个空地址，可以存放在集合中
| `NIL`     | 等价于 `nil`
| `NSNull`  | 一个指向 `nil` 的对象，不能存放在集合中

```objc
+ (NSNull *)null;
// [NSNull null]总是返回一样的值，所以可以用==将该值与其他值进行比较
    
NSMutableDictionary *dict = [NSMutableDictionary dictionary];
[dict setValue:[NSNull null] forKey:@"work number"];
id value = [dict valueForKey:@"work number"];
if (value == [NSNull null]) {
	NSLog(@"work number doesn't exist.");
}
```

### NSNumber & NSValue

| 类型 | 说明
| --- | ---
| `NSNumber`  | 将基本数据类型包装成对象
| `NSValue`   | 可以包装任意值(包括结构体)

### NSString & NSMutableString

| 类型 | 说明
| --- | ---
| `NSString`          | 不可变的,不能删除字符或者添加字符。
| `NSMutableString`   | NSString 的子类，可变字符串

### NSArray & NSMutableArray

| 类型 | 说明
| --- | ---
| `NSArray`           | 用来存储对象的有序列表，它是不可变的
| `NSMutableArray`    | NSArray 的子类，可变有序列表，可以添加和删除

``` objc
// 让集合里面的所有元素都执行 aSelector 这个方法
- (void)makeObjectsPerformSelector:(SEL)aSelector;
- (void)makeObjectsPerformSelector:(SEL)aSelector withObject:(id)argument;
```

### NSDictionary & NSMutableDictionary
> 注 : key 需要实现 `NSCopying` 协议

| 类型 | 说明
| --- | ---
| `NSDictionary`          | 不可变的键值对存储对象 
| `NSMutableDictionary`   | NSDictionary 的子类，可变对象

### NSAttributedString

| 属性名 | 说明
| --- | ---
| `NSKernAttributeName`                 | 调整字句 (kerning 字句调整)
| `NSFontAttributeName`                 | 设置字体
| `NSForegroundColorAttributeName`      | 设置文字颜色
| `NSParagraphStyleAttributeName`       | 设置段落样式
| `NSBackgroundColorAttributeName`      | 设置背景颜色
| `NSStrokeColorAttributeName`          | 设置文字描边颜色，需要和`NSStrokeWidthAttributeName`设置描边宽度，这样就能使文字空心.
| `NSStrokeWidthAttributeName`          | 设置描边宽度
| `NSStrikethroughStyleAttributeName`   | 添加删除线，(`strikethrough` 删除线)
| `NSUnderlineStyleAttributeName`       | 添加下划线 
| `NSShadowAttributeName`               | 设置阴影，单独设置不好使，必须和其他属性搭配才好使。
| `NSVerticalGlyphFormAttributeName`    | 该属性所对应的值是一个 `NSNumber` 对象(整数)。0 表示横排文本。1 表示竖排文本。在 `iOS` 中，总是使用横排文本，0 以外的值都未定义。
| `NSObliquenessAttributeName`          | 设置字体倾斜。(`Skew` 斜)
| `NSExpansionAttributeName`            | 设置文本扁平化

### CGPoint & CGSize & CGRect
    > 定义位置 ：`CoreGraphics/CGGeometry.h`

| 结构体 | 创建方法 | 说明
| --- | --- | ---
| `CGPoint`   | `CGPointMake()` | 平面中的一个点 (x, y) 的位置
| `CGSize`    | `CGSizeMake()`  | 宽度和高度
| `CGRect`    | `CGRectMake()`  | 位置和宽高

### NSRange
> 这个结构体用来表示一个范围

``` objc
// 创建 NSRange 变量
// 例：“I love objective-c” 中的 “obj” 可以用 location 为 7，length 为 3 的范围来表示
// 1. 直接给成员赋值
NSRange range;
range.location = 7;
range.length = 3;

// 2. 应用 C 语言的聚合结构赋值机制
NSRange range = {7, 3};
//或者 
NSRange range = {.location = 7, .length = 3};
    
// 3. Foundation 框架提供的快捷函数 NSMakeRange
NSRange range = NSMakeRange(7, 3);
```

### NSDate

``` objc
NSDateFormatter *formatter  = [[NSDateFormatter alloc] init];
formatter.dateFormat        = @"yyyy-MM-dd HH:mm:ss";
// 将 NSString 转换为 NSDate
NSDate *date                = [formatter dateFromString:@"2018-10-29 00:00:00"];
// 将 NSDate 转换为 NSString
NSLog(@"%@", [formatter stringFromDate: date]);
```

### NSAssert
> 断言`NSAssert`仅在 debug 版本起作用，用于检查“不应该”发生的情况。可以把`NSAssert`看成一个在任何系统状态下都可以安全使用的无害测试手段

### NSPredicate 
> 谓词，用于判断条件表达式的求值返回真或假的过程

- 特点
    * 谓词中的匹配指令使用大写字母
    * 谓词中可以使用格式字符串
    * 如果通过对象的 key path 指定匹配条件，需要使用 %K

- 逻辑指令
    1. `&&`
    2. `||`
    3. `！`
    4. `<`
    5. `<=`
    6. `==`
    7. `>`
    8. `>=`
    9. `BETWEEN {}`

- 字符串匹配

| 字符串匹配 | 说明
| --- | ---
| `BEGANWITH`   | 以指定字符开始
| `ENDSWITH`    | 以指定字符结束
| `CONTAINS`    | 包含指定字符，可使用修饰符，`c` 不区分大小写， `d` 不区分注音符号
| `LIKE`        | 使用通配符匹配， `？` 一个字符，`*` 0个或多个字符

``` objc
// 1. 简单示例
NSPredicate *predicate  = [NSPredicate predicateWithFormat:@"self CONTAINS '1'"];
NSString *text          = @"1234";
NSLog(@"%d", [predicate evaluateWithObject: text]);

// 2. 过滤年龄大于5 & 小于15，并且名字包含 1 的用户
//  1> 传统方法
NSMutableArray *result = [NSMutableArray arrayWithCapacity: personList.count];
for (NSInteger i = 0; i < personList.count; i++) {
    Person *person = personList[i];
    if (person.age > 5 && person.age < 15 && NSNotFound != [person.name rangeOfString:@"1"].location) {
        [result addObject: person];
    }
}
return result;
//  2> 谓词方法
NSPredicate *predicate = [NSPredicate predicateWithFormat:@"name CONTAINS '1' && %K BETWEEN {%d, %d}", @"age", 5, 15];
NSArray *result = [personList filteredArrayUsingPredicate: predicate];
```

### NSCache
> 线程安全, 具有自动移除对象来释放内存的 `NSMutableDictionary`, key 不需要实现 `NSCopying` 协议.

- [NSCache](http://nshipster.cn/nscache/)
- [Foundation: NSCache](http://southpeak.github.io/2015/02/11/cocoa-foundation-nscache/)
- [NSCache 源码分析](https://github.com/nixzhu/dev-blog/blob/master/2015-12-09-nscache.md)

### NSTimer & CADisplayLink

| 类型 | 说明
| --- | ---
| NSTimer       | 
| CADisplayLink | 

``` objc
// 每隔 ti 秒，调用一次 aTarget 的 aSelector 方法，yesOrNo 决定了是否重复执行这个任务
+ (NSTimer *)scheduledTimerWithTimeInterval:(NSTimeInterval)ti
     								  target:(id)aTarget 
    								selector:(SEL)aSelector 
    								userInfo:(id)userInfo 
    								 repeats:(BOOL)YesOrNo;
// 通过 invalidate 方法可以停止定时器的工作，一旦定时器被停止了，就不能再次执行任务。只能再创建一个新的定时器才能执行新的任务
- (void)invalidate;

// NSTimer 启动定时器
[NSTimer scheduledTimerWithTimeInterval:0.1 target:self selector:@selector(setNeedsDisplay) userInfo:nil repeats:YES];
// 每次屏幕刷新 就会触发事件
CADisplayLink *link = [CADisplayLink displayLinkWithTarget:self selector:@selector(setNeedsDisplay)];
[link addToRunLoop:[NSRunLoop mainRunLoop] forMode:NSDefaultRunLoopMode];
```

## Memory Management

### Reference

### Basic

- ARC特点
    1. 不允许调用`release`、`retain`、`retainCount`
    2. 允许重写`dealloc`，但是不允许调用`[super dealloc]`
    3. `@property`的参数
        * `strong` : 成员变量是强指针（适用于OC对象类型）
        * `weak` : 成员变量是弱指针（适用于OC对象类型）
        * `assign` : 适用于非OC对象类型
    4. 以前的`retain`改为用`strong`

- Compiler Flags
    
    | 编译标识 | 说明
    | --- | ---
    | `-fobjc-arc`      | MRC 项目中，对使用 ARC 文件的标识
    | `-fno-objc-arc`   | ARC 项目中，对使用 MRC 文件的标识
    
    
### ARC & MRC & @autoreleasepool

> ARC 中是使用散列表实现的，64位系统中，包含64张 `SideTables`，包含 `自旋锁 & 引用计数表 &弱引用表`，引用计数表中的 `分离锁` 可以将一张表拆成多部分，实现并发操作。

ARC 编译阶段 : 在合适的地方插入 `retain` 和 `release`
ARC 运行时阶段 : 处理 `weak` 修饰变量，引用计数为0时，将其设为 `nil`

### @autoreleasepool 实现

> `AutoreleasePoolPage` 使用双向链表实现，当链表容量满了，会在链表的顶端指向下一张表。

### 悬垂指针 & 野指针

| 指针 | 说明
| --- | ---
| **悬垂指针** | 指针内存已经释放，但指针还存在，会出现 `BAD_ACCESS` 错误。
| **野指针**   | 没有进行初始化的指针    

### Usage

``` objc
// MRC 下 retain 和 copy 属性的 set 实现
@property (nonatomic, retain) NSString *name;
- (void)setName:(NSString *)name {
	if (_name != name) {
		[_name release];
		_name = [name retain];
	}
}
@property(nonatomic, copy) NSString *name;
- (void)setName:(NSString *)name {
	if (_name != name) {
		[_name release];
		_name = [name copy];
	}
}
```

### Instrument 内存检测原理

| 工具 | 说明
| --- | --- 
| `Leaks`       | 检测是否未写 `release` (ARC 已经不常见)，C 代码是否未写 `free`
| `Allocations` | 主要思路是在一个时间切片内检测对象的声明周期以观察内存是否会无限增长。通过 `hook` 掉 `alloc，dealloc，retain，release` 等方法，来记录对象的生命周期。

## Multithread

### Reference

- [不再安全的 OSSpinLock](https://blog.ibireme.com/2016/01/16/spinlock_is_unsafe_in_ios/)
- [使用 dispatch_group 来进行线程同步](http://www.jianshu.com/p/228403206664)
- [Run repeating NSTimer with GCD?](https://stackoverflow.com/questions/10522928/run-repeating-nstimer-with-gcd)
- [iOS Swift GCD 开发教程](https://juejin.im/post/5acaea17f265da239a601a01#heading-17)

- [2018-03-03 5 道 iOS 多线程“面试题”](https://juejin.cn/post/6844903569322164232)

- NSMachPort
    > Mach: 第一个以多线程方式处理任务的系统。

### iOS 的三种多线程技术

| 多线程技术 | 说明
| --- | ---
| `NSTread`       | 创建线程简单，管理线程困难
| `GCD`           | 基于 C 语言的 API，使用 block 定义任务，使用方便
| `NSOperation`   | 基于 GCD 封装的面向对象 API，提供更多线程管理特性(如：限制最大并发数量、操作之间的依赖关系)

### NSTread
> `NSThread` 的多线程不会自动使用 `@autoreleasepool`

``` objc
// 开启后台执行任务的方法
- (void)performSelectorInBackground:(SEL)aSelector withObject:(id)arg
// 在后台线程中通知主线程执行任务的方法
- (void)performSelectorOnMainThread:(SEL)aSelector withObject:(id)arg waitUntilDone:(BOOL)wait
// 获取线程信息
[NSThread currentThread]
// 线程休眠
[NSThread sleepForTimeInterval:2.0f];
``` 

### GCD
> GCD 的函数都是以 dispatch (分派、调度)开头的

- `dispatch_queue_t` : 队列
- `dispatch_sync` : 同步操作
- `dispatch_async` : 异步操作

``` objc
// 栅栏函数 : 控制任务的执行顺序
dispatch_barrier_async(queue, ^{
    NSLog(@"barrier");
});

// 延迟函数 : 控制任务延迟执行
dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2.0 * NSEC_PER_SEC)), dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    NSLog(@"%@",[NSThread currentThread]);
});

// 单次函数 : 只执行一次
static dispatch_once_t onceToken;
dispatch_once(&onceToken, ^{
    NSLog(@"onece");
});

// 快速迭代（开多个线程并发完成迭代操作）
dispatch_apply(subpaths.count, queue, ^(size_t index) {
    
});

// 队列组函数
dispatch_group_t group = dispatch_group_create();
// 队列组中的任务执行完毕之后，执行该函数
dispatch_group_notify(dispatch_group_t group, dispatch_queue_t queue, dispatch_block_t block);
// 进入群组和离开群组
dispatch_group_enter(group); //执行该函数后，后面异步执行的block会被gruop监听
dispatch_group_leave(group); //异步block中，所有的任务都执行完毕，最后离开群组

// 信号量函数
dispatch_semaphore();
```

### NSOperation

``` objc
// 定义队列
self.myQueue = [[NSOperationQueue alloc] init];
// 操作调用的方法
- (void)operationAction:(id)obj {
    NSLog(@"%@ - obj : %@", [NSThread currentThread], obj);
}
// 注：一旦将操作添加到队列，操作就会立即被调度执行

// 1. NSInvocationOperation(调度操作)
NSInvocationOperation *op = [[NSInvocationOperation alloc] initWithTarget: self selector:@selector(operationAction:) object:@"Invocation Operation"];
[self.myQueue addOperation:op];

// 2. NSBlockOperation(块操作)
NSBlockOperation *op = [NSBlockOperation blockOperationWithBlock:^{
    [self operationAction:@"Block Operation"];
}];
[self.myQueue addOperation:op];
```

### Lock
> 多线程锁，保证线程安全，确保同一时刻只有一个线程访问共享资源。

| 多线程锁 | 说明
| --- | ---
| `NSLock`                      |  
| `NSCondition`                 | 
| `NSConditionLock`             | 条件锁，满足条件才加锁
| `NSRecursiveLock`             | 递归锁，在一个线程中可以反复加锁 
| `NSDistributedLock`           | 分布式锁，同时操作同一张表中的不同部分
| `dispatch_semaphore`          | GCD 信号量实现加锁
| `pthread_mutex`               | 互斥锁， 
| `pthread_mutex(recursive)`    | 递归锁，
| `@synchronized(self) { ... }` | 同步锁，
| `OSSpinLock`                  | 自旋锁，不停探测锁是否被释放 (不推荐，会造成优先级反转)
| `pthread_rwlock`              | 
| `POSIX Conditions`            |
| `os_unfair_lock`              | 


- 锁的分类
    
    | 类型 | 说明
    | --- | --- 
    | 互斥锁   | 进入休眠，锁被释放之后，被唤醒 
    | 自旋锁   | 进入轮询，锁被释放之后，立刻执行 (效率高于互斥锁，代价高)
    | 条件锁   | 
    | 递归锁   | 
    | 分布式锁 | 

### 经典面试题

``` objc
// 代码一
NSLog(@"1"); 
dispatch_sync(dispatch_get_main_queue(), ^{
    NSLog(@"2"); 
});
NSLog(@"3"); 
// 代码二
NSLog(@"1"); 
dispatch_sync(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_HIGH, 0), ^{
    NSLog(@"2"); 
});
NSLog(@"3");
// 代码三
dispatch_queue_t queue = dispatch_queue_create("serialQueue", DISPATCH_QUEUE_SERIAL);
NSLog(@"1"); 
dispatch_async(queue, ^{
    NSLog(@"2");
    dispatch_sync(queue, ^{
        NSLog(@"3"); 
    });
    NSLog(@"4");
});
NSLog(@"5"); 
// 代码四
NSLog(@"1"); 
dispatch_async(dispatch_get_global_queue(0, 0), ^{
    NSLog(@"2"); 
    dispatch_sync(dispatch_get_main_queue(), ^{
        NSLog(@"3");
    });
    NSLog(@"4");
});
NSLog(@"5");
// 代码五
dispatch_async(dispatch_get_global_queue(0, 0), ^{
    NSLog(@"1"); // 任务1
    dispatch_sync(dispatch_get_main_queue(), ^{
        NSLog(@"2"); // 任务2
    });
    NSLog(@"3"); // 任务3
});
NSLog(@"4"); // 任务4
while (1) {
}
NSLog(@"5"); // 任务5
// 代码六


// 说明:
// 代码一 : 输出 [1] (死锁 = 主队列 + 同步函数)
// 代码二 : 输出 [1 2 3]
// 代码三 : 输出 [1 2 5] (2 5 顺序不一定 ; 3 4 死锁 = 串行队列 + 同步函数)
// 代码四 : 输出 [1 2 5 3 4] (2 5 顺序不一定)
// 代码五 : 输出 [1 4] (1 4 顺序不一定)
```

``` objc
// 以下代码输出什么？
__block int i = 0;
while ( i < 10000 ) {
    dispatch_async(dispatch_get_global_queue(0, 0), ^{
        i++;
    });
}
NSLog(@"i=%d", i);

// : i >= 1000
```