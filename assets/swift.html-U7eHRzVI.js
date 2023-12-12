const e=JSON.parse('{"key":"v-7b81ac2f","path":"/interview/ios/swift.html","title":"Swift","lang":"zh-CN","frontmatter":{"title":"Swift","icon":"hashtag","index":true,"order":2,"description":"设计理念 Swift 类和结构体的区别 值类型和引用类型：结构体是值类型，类是引用类型。当一个结构体实例被赋值给一个新的变量或者作为一个函数的参数传递时，这个实例的拷贝会被创建出来。所以改变新变量中的值不会影响原来的实例。而对于类来说，赋值实际上是传递了一个引用，所以修改赋值后的实例也会影响到原来的实例。; 继承：结构体不能继承其他的结构体或者类，而类...","head":[["meta",{"property":"og:url","content":"https://naijoug.github.io/docs/docs/interview/ios/swift.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Swift"}],["meta",{"property":"og:description","content":"设计理念 Swift 类和结构体的区别 值类型和引用类型：结构体是值类型，类是引用类型。当一个结构体实例被赋值给一个新的变量或者作为一个函数的参数传递时，这个实例的拷贝会被创建出来。所以改变新变量中的值不会影响原来的实例。而对于类来说，赋值实际上是传递了一个引用，所以修改赋值后的实例也会影响到原来的实例。; 继承：结构体不能继承其他的结构体或者类，而类..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-12T13:58:56.000Z"}],["meta",{"property":"article:author","content":"naijoug"}],["meta",{"property":"article:modified_time","content":"2023-12-12T13:58:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Swift\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-12T13:58:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"naijoug\\",\\"url\\":\\"https://github.com/naijoug\\"}]}"]]},"headers":[{"level":2,"title":"设计理念","slug":"设计理念","link":"#设计理念","children":[{"level":3,"title":"Swift 类和结构体的区别","slug":"swift-类和结构体的区别","link":"#swift-类和结构体的区别","children":[]},{"level":3,"title":"Swift 中的枚举和其它编程语言的区别","slug":"swift-中的枚举和其它编程语言的区别","link":"#swift-中的枚举和其它编程语言的区别","children":[]},{"level":3,"title":"Swift 中的 String 的设计理念","slug":"swift-中的-string-的设计理念","link":"#swift-中的-string-的设计理念","children":[]},{"level":3,"title":"Swift 中 Array、Dictionary、Set 为什么设计成值类型？","slug":"swift-中-array、dictionary、set-为什么设计成值类型","link":"#swift-中-array、dictionary、set-为什么设计成值类型","children":[]},{"level":3,"title":"cow 设计说一下？","slug":"cow-设计说一下","link":"#cow-设计说一下","children":[]},{"level":3,"title":"inout 关键字做了什么？","slug":"inout-关键字做了什么","link":"#inout-关键字做了什么","children":[]},{"level":3,"title":"Swift 中的闭包","slug":"swift-中的闭包","link":"#swift-中的闭包","children":[]},{"level":3,"title":"Swift 可选类型 Optional 说一下理解？","slug":"swift-可选类型-optional-说一下理解","link":"#swift-可选类型-optional-说一下理解","children":[]},{"level":3,"title":"swift_once 是用在什么地方的？","slug":"swift-once-是用在什么地方的","link":"#swift-once-是用在什么地方的","children":[]},{"level":3,"title":"@propertyWrapper、@_functionBuilder、@dynamicMemberLookup","slug":"propertywrapper、-functionbuilder、-dynamicmemberlookup","link":"#propertywrapper、-functionbuilder、-dynamicmemberlookup","children":[]}]},{"level":2,"title":"function - “函数”","slug":"function-函数","link":"#function-函数","children":[{"level":3,"title":"Swift 函数派发机制","slug":"swift-函数派发机制","link":"#swift-函数派发机制","children":[]},{"level":3,"title":"“Swift 中函数是第一等公民”这句话你是怎么理解的？","slug":"swift-中函数是第一等公民-这句话你是怎么理解的","link":"#swift-中函数是第一等公民-这句话你是怎么理解的","children":[]},{"level":3,"title":"Swift 函数式编程 (函子、单子)","slug":"swift-函数式编程-函子、单子","link":"#swift-函数式编程-函子、单子","children":[]}]},{"level":2,"title":"protocol - “协议”","slug":"protocol-协议","link":"#protocol-协议","children":[{"level":3,"title":"Swift 中的协议与 OC 中协议的特点和区别？","slug":"swift-中的协议与-oc-中协议的特点和区别","link":"#swift-中的协议与-oc-中协议的特点和区别","children":[]},{"level":3,"title":"“面向协议编程” 说说你的理解？","slug":"面向协议编程-说说你的理解","link":"#面向协议编程-说说你的理解","children":[]}]},{"level":2,"title":"generic - “泛型”","slug":"generic-泛型","link":"#generic-泛型","children":[{"level":3,"title":"语法特性泛型 @_specialize","slug":"语法特性泛型-specialize","link":"#语法特性泛型-specialize","children":[]},{"level":3,"title":"泛型类型擦除如何实现？","slug":"泛型类型擦除如何实现","link":"#泛型类型擦除如何实现","children":[]}]},{"level":2,"title":"Codable","slug":"codable","link":"#codable","children":[{"level":3,"title":"Codable 实现原理","slug":"codable-实现原理","link":"#codable-实现原理","children":[]}]},{"level":2,"title":"异步编程","slug":"异步编程","link":"#异步编程","children":[{"level":3,"title":"async/await","slug":"async-await","link":"#async-await","children":[]},{"level":3,"title":"Sendable","slug":"sendable","link":"#sendable","children":[]}]}],"git":{"createdTime":1702384983000,"updatedTime":1702389536000,"contributors":[{"name":"naijoug","email":"naijoug@outlook.com","commits":2}]},"readingTime":{"minutes":12.9,"words":3869},"filePathRelative":"interview/ios/swift.md","localizedDate":"2023年12月12日","autoDesc":true}');export{e as data};
