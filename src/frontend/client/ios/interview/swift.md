---
title: Swift
icon: hashtag

index: true
order: 2

---

<!-- more -->

## 设计理念

### `Swift` 类和结构体的区别

  - 值类型和引用类型：结构体是值类型，类是引用类型。当一个结构体实例被赋值给一个新的变量或者作为一个函数的参数传递时，这个实例的拷贝会被创建出来。所以改变新变量中的值不会影响原来的实例。而对于类来说，赋值实际上是传递了一个引用，所以修改赋值后的实例也会影响到原来的实例。
  - 继承：结构体不能继承其他的结构体或者类，而类可以继承其他的类。
  - 类型转化：类可以被强制类型转换，可以使用is和as操作符在运行时检查实例的类型。结构体没有这个功能。
  - 析构函数：类可以有析构函数，用来在类实例被销毁前执行特定的操作。结构体没有析构函数。
  - 引用计数：类可以通过引用计数进行内存管理，而结构体没有这项功能。 
  - 协议：虽然类和结构体都可以实现协议，但是只有类可以利用某些特定的协议提供的运行时特性。

### `Swift` 中的枚举和其它编程语言的区别

  - 关联值：Swift的枚举成员可以与任意类型的值进行关联存储，叫做关联值（Associated Values）。每个枚举成员的关联值类型可以是不同的。
  - 方法：与结构体和类一样，枚举也可以定义方法，从而提供在枚举值实例上调用的功能；
  - 构造函数：枚举可以提供构造函数，用以提供一个带有默认枚举值的实例。
  - 递归枚举：如果枚举的一种case，持有该枚举类型的关联值，那么这个枚举就是递归枚举。
  - 模式匹配：枚举值和switch语句一起使用时，可以进行模式匹配，包括获取枚举值关联值，或者多个case值一起匹配。

  > `Swift` 中的 `switch` 和其它编程语言有什么区别？

  - 模式匹配：可以进行复杂的模式匹配，这包括元组、范围匹配以及关联枚举值等。
  - 无需 `break`：在其他编程语言中，如`C`语言每个 `case` 后面都需要添加 `break` 关键字以退出 `switch` 否则将会发生贯穿现象。在 `Swift` 中每个case后面不需要添加 `break`，当遇到符合的 `case` 后程序会直接退出 `switch` 语句。
  - 绑定常量和变量：在一个 `case` 的语句中，可以用 `let` 或者 `var` 来绑定匹配到的值到临时的常量或变量中。
    
  > 匹配模式深入说一下？

### `Swift` 中的 `String` 的设计理念

  支持 `Unicode` 和字符串操作的安全性。不能直接使用下标索引访问，使用 `String.Index` 进行字符串的访问和操作。

### `Swift` 中 `Array`、`Dictionary`、`Set` 为什么设计成值类型？

  - 语义清晰：可以使赋值的语义更加清晰。当你把一个数组（或字典、集合）赋值给新的变量时，`Swift` 实际上会复制一份这个数组，这意味着新变量和旧变量之间不存在任何关联，对其中一个的改动不会影响到另一个。
  - 线程安全：在涉及多线程操作的环境中，无需担心对数组（或字典、集合）的修改会潜在地影响到其他线程。有利于减少由竞态条件（race condition）导致的问题，并使得代码更加安全。
  - 性能优化：虽然值类型在赋值时需要复制其数据，但 `Swift` 采用了一种被称为“写时复制”（copy-on-write）的优化策略。只有当数据真正需要被改动时，`Swift` 才会复制一份数据，避免了不必要的复制操作。

### `cow` 设计说一下？

  `cow` (Copy on Write) : Swift 的写时拷贝，也就是说数据只有等到赋值修改时才进行拷贝，主要应用在系统设计的值类型(`String`、`Array`、`Dictionary`)
  
  > `isKnownUniquelyReferenced` 实现自定义结构体 `Cow`
  
  `isKnownUniquelyReferenced` 函数可以用来检测是被被多个变量引用
  
  ```swift
  // 数据包装类
  final class Wrapper<A> {
    var wrapper: A
    init(_ value: A) { 
        self.wrapper = value 
    }
  }
  struct MyArray {
    private var storage: Wrapper<[Int]>
    init() {
        storage = Box([1, 2, 3])
    }
    /// 添加数据
    mutating func append(_ item: Int) {
        // 判断是否为唯一的引用，如果不是，先创建副本对象，在进行添加修改
        if !isKnownUniquelyReferenced(&storage) {
            storage = Wrapper(storage.wrapper)
        }
        storage.wapper.append(item)
    }
  }
  ```

### `inout` 关键字做了什么？

### `Swift` 中的闭包

  - 逃逸闭包 : 闭包作为函数参数传入函数，如果这个闭包在函数返回之后再执行，则为逃逸闭包，闭包参数需要使用 `@escaping` 修饰。
  - 非逃逸闭包 : 闭包作为函数参数，在函数返回之前，这个闭包已经执行，则为非逃逸闭包。
  - 尾随闭包 : 将闭包作为函数的最后一个参数，函数调用时，闭包参数就是一个写在尾随函数调用后面的一个闭包表达式。
  - 自动闭包 : 需要一个不接受参数的闭包作为函数参数，使用 `@autoclosure` 修饰。用作闭包表达式的延迟加载，只有当闭包表达式真正调用时才执行。

### `Swift` 可选类型 `Optional` 说一下理解？

  > `Optional` 可选类型的底层实现

  ```swift
  public enum Optional<Wrapped>: ExpressibleByNilLiteral {
    case none           // 表示没有值 nil
    case some(Wrapped)  // 表示有值
  }
  ```

### `swift_once` 是用在什么地方的？

  `swift_once`是Swift的一个内部函数，它提供了一种线程安全的方式来执行一次初始化或者配置代码。与 `Objective-C` 中 `dispatch_once()` 实现类似的功能。
  
  在 `Swift` 的底层实现层面，像类型元数据的初始化、静态变量和全局变量的初始化、静态属性和懒惰属性的初始化等，都是使用`swift_once`来确保它们的初始化代码只会被执行一次。

### `@propertyWrapper`、`@_functionBuilder`、`@dynamicMemberLookup`

  - `@propertyWrapper` : `Swift 5.1` 引入了一项新特性：属性包装器（property wrappers）。属性包装器提供了一种将特性添加到属性上的新方法，例如线程安全，懒加载，键值观察，存储在数据库中等，从而使这些属性更易于复用。简单来说，属性包装器就是一个定义了特殊访问策略的结构或类，我们可以将这个访问策略附加到属性上，而不是重新实现相同的访问策略。
  
  ```swift
  // 定义属性包装器
  @propertyWrapper
  struct HundredOrLess {
    private var score = 0
    var wrappedValue: Int {
        get { return score }
        set { score = min(newValue, 100) }
    }
  }
  // 使用属性包装器
  struct Grade {
    /// 数学成绩
    @HundredOrLess var math: Int
    /// 体育成绩
    @HundredOrLess var gym: Int
  }
  ```

  - `@_functionBuilder` : `Swift 5.1` 引入了函数建构器特性，目前还处于私有阶段，故以 _ 开头。函数建构器功能主要用于简化大量样板代码。
  
  ```swift
  // SwiftUI 
  VStack(content: { 
    return Group { 
      Text("Hello") 
      Text("World") 
    } 
  })
  // @_functionBuilder 可以简化为如下写法
  VStack { 
    Text("Hello") 
    Text("World") 
  }
  ```
  
  - `@dynamicMemberLookup` : `Swift 4.2` 引入的 `@dynamicMemberLookup` 特性。这种新特性允许我们创建被动态调用的类型，它的属性和方法在编译时是未知的，只有在运行时才会确定。这对于利用 `Swift` 来调用 `Python`，`JavaScript`，`Ruby` 和其他动态语言的代码非常有用。这样可以使得 `Swift` 具有一定的动态性，同时又不失类型安全。

  ```swift
  @dynamicMemberLookup
  struct DynamicMember {
    let dictionary = ["dynamicMember": 110, "otherMember": 119]
    subscript(dynamicMember member: String) -> Int {
        return dictionary[member] ?? 114
    }
  }
  let member = DynamicMember()
  print(member.dynamicMember) // 110
  ```
  
## `function` - “函数”

### `Swift` 函数派发机制

  - **直接派发（Direct Dispatch）**：直接派发发生在值类型（枚举、结构体）和 `final` 类上的方法、属性和下标。这些操作的派发是在编译时期决定的，不存在动态派发的过程，不能被覆盖，执行效率也是最高的。
  - **虚表派发（Virtual Table Dispatch）**：虚表派发发生在普通类（非 `final`）上的方法、属性和下标。这些操作的派发方式由 `Swift` 编译器在运行时通过虚表（`vtable`）来查找。虚表是一种在编译时期生成的用于动态派发函数的数据结构，存储了类型的动态类型信息。
  - **见证表派发（Witness Table Dispatch）**：见证表派发发生在协议方法、属性和下标的操作。这些操作的派发方式由 `Swift` 编译器在运行时通过一种名为见证表的类似于虚表的机制，查找并调用相应的实现。见证表包含了协议的动态类型信息和协议方法的实现。对于带有 `where` 子句的协议扩展提供的默认实现，会为符合不同条件的类型生成不同的见证表。

### “`Swift` 中函数是第一等公民”这句话你是怎么理解的？

  同其它基础数据类型一样，可以运用在以下场景

  - 函数可以作为参数传递给其他函数(高阶函数)。
  - 函数可以作为其他函数的返回值。
  - 函数可以赋值给变量。
  - 函数可以存储在数据结构中。

### `Swift` 函数式编程 (函子、单子)

  > 函数式编程是一种编程范式，函子（`functor`）和单子（`monad`）是函数式编程中的术语。
  
  - 函子 : 是一种可以将所有的输入操作映射到输出操作的对象。在 `Swift` 中，最常见的函子就是 `Array`, `map` 方法就是一个典型的函子操作。
  - 单子 : 是函子的一个特例，满足一些额外条件。具体来说，它需要实现两个方法：一个是用来创建单子的方法，另一个是用来连接两个单子的方法。在 `Swift` 中，对于 `Array` 来说，创建单子的方法是初始化方法，连接两个单子的方法同样是 `flatMap`。

## `protocol` - “协议”

### `Swift` 中的协议与 `OC` 中协议的特点和区别？

  - 相同点 : 协议在 `Swift` 和 `Objective-C` 中都是定义一组特定的方法、属性或者其它要求的工具。其他类、结构体或者枚举都可以遵守这些协议，并提供这些要求的具体实现。

  - 不同点
    * `Objective-C` 中，协议往往用于实现“委托”模式，尤其是在 UI 编程中经常使用。协议中只能包含方法的声明。
    * `Swift` 中的协议更加强大。

  `Swift` 协议：

  - 要求遵循协议的类型提供特定名称和类型的实例属性或者类型属性
  - 要求遵循协议的类型提供特定名称和类型的方法、初始化方法、下标操作符
  - 要求遵循协议的类型提供特定的操作符方法
  - 为遵循协议的类型提供默认的方法或者属性的实现
  - 可以定义类型别名
  - 可以继承其它协议
  - 可以在协议中使用关联类型等

### “面向协议编程” 说说你的理解？

  - 面向协议编程的核心思想 : 先定义出我们需要的行为和特性，然后再根据这些要求来编写具体的实现，而不是先写具体的类型然后再去考虑它们之间的关系。
  - 面向协议编程使得我们的代码更加灵活和可复用。由于协议的默认实现和多协议继承等特性，我们能够轻松地定义出行为复杂的类型，并且能够通过协议的组合来实现更为强大的功能。另外，协议也使得我们的代码解耦性更强，更容易进行单元测试。

## `generic` - “泛型”

### 语法特性泛型 `@_specialize`

  > `@_specialize` 是 `Swift` 中的一个特殊标记特性，它用于改变编译器如何编译和优化泛型函数。`@_specialize` 告诉编译器生成特定类型参数的专门化版本的代码。

  ```swift
  // 比较两个 Comparable 的元素并返回最小的一个
  func min<T: Comparable>(_ x: T, _ y: T) -> T {
    return y < x ? y : x
  }

  // @_specialize 优化，生成一个专门处理 Int 的版本
  @_specialize(where T == Int)
  func min<T: Comparable>(_ x: T, _ y: T) -> T {
    return y < x ? y : x
  }
  ```

### 泛型类型擦除如何实现？

  > 泛型类型擦除 : 将具有特定泛型类型约束的对象转化为一个不再具有特定泛型类型的对象，但仍然保持相似的行为。
  
  泛型类型擦除处理，一般是通过将泛型类型或函数包装在一个非泛型类型中来达成的。
  
  ```swift 
  // 协议
  protocol MyProtocol {}
  // 实现 MyProtocol 的泛型类
  class MyGenericClass<T: MyProtocol> {}
  // 将泛型类 MyGenericClass 进行类型擦除，同事具备 MyProtocol 的行为
  class AnyMyGenericClass {
    private var _myClass: AnyObject
    init<T: MyProtocol>(_ myClass: MyGenericClass<T>) {
        _myClass = myClass
    }
  }
  ```

## `Codable`

 > `Codable`是一个组合协议，它是 `Decodable` 和 `Encodable` 的 "混合协议"，用于通用序列化和反序列化的情况。

### `Codable` 实现原理

  在标准库中，定义了一个 `Decoder` 协议，一般解码器（比如 `JSONDecoder`）都会遵循这个协议。相应地，还有一个 `Encoder` 协议，编码器（如 `JSONEncoder`）会遵循这个协议。

  对于每个数据类型，只要它遵循了 `Decodable` 协议，就可以解码；遵循了 `Encodable` 协议，就可以编码。通过协议默认实现编码解码任务。

  ```swift
  // 解码方法
  init(from decoder: Decoder) throws
  // 编码方法
  func encode(to encoder: Encoder) throws
  ```
  
## 异步编程

### `async/await`

  > `async/await`是在 `Swift 5.5` 新引入的两个关键字，主要用于简化、美化 `Swift` 中的异步任务的编码和阅读。

  `async/await` 带来了更清晰、更简洁的异步编程模型。解决了过去处理多异步任务回调地狱的问题，可以和同步代码一样顺序编写，大大提高了代码的可读性和可维护性。

  - `async`：表示一个函数为异步函数。异步函数是一个可以在后台进程运行而不会阻塞当前的运行进程。
  - `await`：通常在异步函数中调用另一个异步函数时使用，以表示等待这个异步函数的执行结果。

  ```swift
  func fetchDataFromServer() async -> Data {
    ...
  }
  func processData() async {
    let data = await fetchDataFromServer() 
    ...
  }
  ```

### `Sendable` 

  > `Sendable` 是 `Swift 5.5` 中与并发相关的新特性之一，是一个标记性的协议。用于表示遵循该协议的类型是能安全地发送到和接收自别的并发上下文（例如，异步任务、actor）。

  类型可以标记 `Sendable` 协议的两个条件：

  - 值类型（例如，枚举、结构体
  - 所有的存储属性（包括递归地）都是 `Sendable`

  ```swift
  // 直接遵循 Sendable 协议
  struct Point: Sendable {
    let x: Double
    let y: Double
  }

  // 扩展遵循 Sendable 协议
  struct Point {
    let x = Double
    let y = Double
  }
  extension Point: Sendable {}
  ```

  > `class` 类型可以标记为 `Sendable` 吗？

  `class` 并不是值类型，因此不能直接让 `class` 遵从 `Sendable` 协议。但是可以通过 `@unchecked Sendable` 属性强制表明 `class` 是 `Sendable`。必须保证这个类型是 `class`，在传递这个类的实例时仍旧能保证线程安全。

  `class`遵从 `Sendable` 协议时必须小心，因为 `Sendable` 要求遵循该协议的类型是线程安全的。如果不能保证线程安全，使用 `@unchecked Sendable` 可能引发难以调试的线程问题。
  