const e=JSON.parse('{"key":"v-62c32546","path":"/interview/ios/0x01.objective-c.html","title":"Objective-C","lang":"zh-CN","frontmatter":{"title":"Objective-C","icon":"hashtag","index":true,"description":"设计理念 OC 底层是使用 C/C++ 实现。定一个继承 NSObject 的类，这个类底层使用 C 语言中的 struct 结构体来实现的。 ❓OC、Java、Python 运行效率孰高 💡 Objective-C: 编译型语言，运行效率通常优于解释型语言。底层是基于 C，但是由于动态派发的特性会一定程度上影响效率。; Java: 编译型语言，运行...","head":[["meta",{"property":"og:url","content":"https://naijoug.github.io/docs/docs/interview/ios/0x01.objective-c.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Objective-C"}],["meta",{"property":"og:description","content":"设计理念 OC 底层是使用 C/C++ 实现。定一个继承 NSObject 的类，这个类底层使用 C 语言中的 struct 结构体来实现的。 ❓OC、Java、Python 运行效率孰高 💡 Objective-C: 编译型语言，运行效率通常优于解释型语言。底层是基于 C，但是由于动态派发的特性会一定程度上影响效率。; Java: 编译型语言，运行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T04:34:54.000Z"}],["meta",{"property":"article:author","content":"naijoug"}],["meta",{"property":"article:modified_time","content":"2024-03-01T04:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Objective-C\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T04:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"naijoug\\",\\"url\\":\\"https://github.com/naijoug\\"}]}"]]},"headers":[{"level":2,"title":"设计理念","slug":"设计理念","link":"#设计理念","children":[{"level":3,"title":"❓OC、Java、Python 运行效率孰高","slug":"❓oc、java、python-运行效率孰高","link":"#❓oc、java、python-运行效率孰高","children":[]},{"level":3,"title":"❓OC 的动态性","slug":"❓oc-的动态性","link":"#❓oc-的动态性","children":[]},{"level":3,"title":"❓OC 是如何保证系统升级后 ABI 的稳定性","slug":"❓oc-是如何保证系统升级后-abi-的稳定性","link":"#❓oc-是如何保证系统升级后-abi-的稳定性","children":[]},{"level":3,"title":"❓nil vs Nil vs NULL vs NSNull","slug":"❓nil-vs-nil-vs-null-vs-nsnull","link":"#❓nil-vs-nil-vs-null-vs-nsnull","children":[]},{"level":3,"title":"id","slug":"id","link":"#id","children":[]}]},{"level":2,"title":"类簇","slug":"类簇","link":"#类簇","children":[{"level":3,"title":"❓类簇的优缺点","slug":"❓类簇的优缺点","link":"#❓类簇的优缺点","children":[]},{"level":3,"title":"NSString","slug":"nsstring","link":"#nsstring","children":[]},{"level":3,"title":"NSArray","slug":"nsarray","link":"#nsarray","children":[]},{"level":3,"title":"NSDictionary","slug":"nsdictionary","link":"#nsdictionary","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":"❓@property 是什么","slug":"❓-property-是什么","link":"#❓-property-是什么","children":[]},{"level":3,"title":"❓@property 的默认关键字","slug":"❓-property-的默认关键字","link":"#❓-property-的默认关键字","children":[]},{"level":3,"title":"❓@property 的底层实现","slug":"❓-property-的底层实现","link":"#❓-property-的底层实现","children":[]},{"level":3,"title":"原子性","slug":"原子性","link":"#原子性","children":[]},{"level":3,"title":"内存管理","slug":"内存管理","link":"#内存管理","children":[]},{"level":3,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":3,"title":"@synthesize","slug":"synthesize","link":"#synthesize","children":[]}]},{"level":2,"title":"拷贝","slug":"拷贝","link":"#拷贝","children":[{"level":3,"title":"❓copy vs mutableCopy","slug":"❓copy-vs-mutablecopy","link":"#❓copy-vs-mutablecopy","children":[]},{"level":3,"title":"❓copy 修饰的属性的 setter 方法如何重写","slug":"❓copy-修饰的属性的-setter-方法如何重写","link":"#❓copy-修饰的属性的-setter-方法如何重写","children":[]},{"level":3,"title":"❓copy 一般用于不可变对象，为什么","slug":"❓copy-一般用于不可变对象-为什么","link":"#❓copy-一般用于不可变对象-为什么","children":[]},{"level":3,"title":"❓@property (copy) NSMutableArray *array; 这个写法正确吗","slug":"❓-property-copy-nsmutablearray-array-这个写法正确吗","link":"#❓-property-copy-nsmutablearray-array-这个写法正确吗","children":[]},{"level":3,"title":"❓自定义类如何实现 copy 功能","slug":"❓自定义类如何实现-copy-功能","link":"#❓自定义类如何实现-copy-功能","children":[]},{"level":3,"title":"❓自定义类如何实现 mutableCopy 功能","slug":"❓自定义类如何实现-mutablecopy-功能","link":"#❓自定义类如何实现-mutablecopy-功能","children":[]}]},{"level":2,"title":"Block","slug":"block","link":"#block","children":[{"level":3,"title":"❓block vs delegate","slug":"❓block-vs-delegate","link":"#❓block-vs-delegate","children":[]},{"level":3,"title":"❓block vs 函数指针","slug":"❓block-vs-函数指针","link":"#❓block-vs-函数指针","children":[]},{"level":3,"title":"❓block 底层实现","slug":"❓block-底层实现","link":"#❓block-底层实现","children":[]},{"level":3,"title":"__block","slug":"block-1","link":"#block-1","children":[]},{"level":3,"title":"内存管理","slug":"内存管理-1","link":"#内存管理-1","children":[]}]},{"level":2,"title":"类","slug":"类","link":"#类","children":[{"level":3,"title":"❓+load 与 +initialize 区别","slug":"❓-load-与-initialize-区别","link":"#❓-load-与-initialize-区别","children":[]},{"level":3,"title":"❓Designated Initializer 如何添加？","slug":"❓designated-initializer-如何添加","link":"#❓designated-initializer-如何添加","children":[]},{"level":3,"title":"❓OC 如何实现多重继承","slug":"❓oc-如何实现多重继承","link":"#❓oc-如何实现多重继承","children":[]},{"level":3,"title":"❓静态方法是否能被重写","slug":"❓静态方法是否能被重写","link":"#❓静态方法是否能被重写","children":[]},{"level":3,"title":"❓OC 中的内省和反射，底层实现原理，应用场景有哪些","slug":"❓oc-中的内省和反射-底层实现原理-应用场景有哪些","link":"#❓oc-中的内省和反射-底层实现原理-应用场景有哪些","children":[]}]},{"level":2,"title":"分类","slug":"分类","link":"#分类","children":[{"level":3,"title":"❓Category vs Extension","slug":"❓category-vs-extension","link":"#❓category-vs-extension","children":[]},{"level":3,"title":"❓NSObject 添加 Extension 会怎么样","slug":"❓nsobject-添加-extension-会怎么样","link":"#❓nsobject-添加-extension-会怎么样","children":[]},{"level":3,"title":"加载顺序","slug":"加载顺序","link":"#加载顺序","children":[]},{"level":3,"title":"底层实现","slug":"底层实现","link":"#底层实现","children":[]}]},{"level":2,"title":"消息发送","slug":"消息发送","link":"#消息发送","children":[{"level":3,"title":"❓OC 消息发送 vs C++ 调用虚方法","slug":"❓oc-消息发送-vs-c-调用虚方法","link":"#❓oc-消息发送-vs-c-调用虚方法","children":[]},{"level":3,"title":"❓消息转发机制和其他语言的消息机制优劣对比","slug":"❓消息转发机制和其他语言的消息机制优劣对比","link":"#❓消息转发机制和其他语言的消息机制优劣对比","children":[]},{"level":3,"title":"❓OC 是否支持方法重载","slug":"❓oc-是否支持方法重载","link":"#❓oc-是否支持方法重载","children":[]},{"level":3,"title":"方法查找","slug":"方法查找","link":"#方法查找","children":[]},{"level":3,"title":"类方法","slug":"类方法","link":"#类方法","children":[]},{"level":3,"title":"消息发送","slug":"消息发送-1","link":"#消息发送-1","children":[]},{"level":3,"title":"代码题","slug":"代码题","link":"#代码题","children":[]}]}],"git":{"createdTime":1704610269000,"updatedTime":1709267694000,"contributors":[{"name":"naijoug","email":"naijoug@outlook.com","commits":7}]},"readingTime":{"minutes":67.08,"words":20123},"filePathRelative":"interview/ios/0x01.objective-c.md","localizedDate":"2024年1月7日","autoDesc":true}');export{e as data};