const l=JSON.parse('{"key":"v-62c32546","path":"/interview/ios/0x01.objective-c.html","title":"Objective-C","lang":"zh-CN","frontmatter":{"title":"Objective-C","icon":"hashtag","index":true,"description":"设计理念 OC 底层是使用 C/C++ 实现。定一个继承 NSObject 的类，这个类底层使用 C 语言中的 struct 结构体来实现的。 ❓OC、Java、Python 运行效率孰高 💡 Objective-C: 编译型语言，运行效率通常优于解释型语言。底层是基于 C，但是由于动态派发的特性会一定程度上影响效率。; Java: 编译型语言，运行...","head":[["meta",{"property":"og:url","content":"https://naijoug.github.io/docs/docs/interview/ios/0x01.objective-c.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Objective-C"}],["meta",{"property":"og:description","content":"设计理念 OC 底层是使用 C/C++ 实现。定一个继承 NSObject 的类，这个类底层使用 C 语言中的 struct 结构体来实现的。 ❓OC、Java、Python 运行效率孰高 💡 Objective-C: 编译型语言，运行效率通常优于解释型语言。底层是基于 C，但是由于动态派发的特性会一定程度上影响效率。; Java: 编译型语言，运行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-19T12:45:18.000Z"}],["meta",{"property":"article:author","content":"naijoug"}],["meta",{"property":"article:modified_time","content":"2024-02-19T12:45:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Objective-C\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-19T12:45:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"naijoug\\",\\"url\\":\\"https://github.com/naijoug\\"}]}"]]},"headers":[{"level":2,"title":"设计理念","slug":"设计理念","link":"#设计理念","children":[{"level":3,"title":"❓OC、Java、Python 运行效率孰高","slug":"❓oc、java、python-运行效率孰高","link":"#❓oc、java、python-运行效率孰高","children":[]},{"level":3,"title":"❓OC 的动态性","slug":"❓oc-的动态性","link":"#❓oc-的动态性","children":[]},{"level":3,"title":"❓OC 是如何保证系统升级后 ABI 的稳定性","slug":"❓oc-是如何保证系统升级后-abi-的稳定性","link":"#❓oc-是如何保证系统升级后-abi-的稳定性","children":[]},{"level":3,"title":"❓id vs self vs super","slug":"❓id-vs-self-vs-super","link":"#❓id-vs-self-vs-super","children":[]},{"level":3,"title":"❓id vs NSObject","slug":"❓id-vs-nsobject","link":"#❓id-vs-nsobject","children":[]},{"level":3,"title":"❓id vs instancetype","slug":"❓id-vs-instancetype","link":"#❓id-vs-instancetype","children":[]},{"level":3,"title":"❓id 为什么不能用点语法？","slug":"❓id-为什么不能用点语法","link":"#❓id-为什么不能用点语法","children":[]},{"level":3,"title":"❓nil vs Nil vs NULL vs NSNull","slug":"❓nil-vs-nil-vs-null-vs-nsnull","link":"#❓nil-vs-nil-vs-null-vs-nsnull","children":[]},{"level":3,"title":"❓类簇的优缺点","slug":"❓类簇的优缺点","link":"#❓类簇的优缺点","children":[]}]},{"level":2,"title":"NSString","slug":"nsstring","link":"#nsstring","children":[{"level":3,"title":"❓OC 中的三种字符串？","slug":"❓oc-中的三种字符串","link":"#❓oc-中的三种字符串","children":[]},{"level":3,"title":"❓NSString 如何计算字符的个数？","slug":"❓nsstring-如何计算字符的个数","link":"#❓nsstring-如何计算字符的个数","children":[]}]},{"level":2,"title":"NSArray","slug":"nsarray","link":"#nsarray","children":[{"level":3,"title":"❓[[NSMutableArray alloc] init] 和 [NSMutableArray array] 有什么区别?","slug":"❓-nsmutablearray-alloc-init-和-nsmutablearray-array-有什么区别","link":"#❓-nsmutablearray-alloc-init-和-nsmutablearray-array-有什么区别","children":[]},{"level":3,"title":"❓NSMutableArray 是怎么实现的，做增删操作的时候内存空间是怎么改变的，可以用别的方法实现吗？","slug":"❓nsmutablearray-是怎么实现的-做增删操作的时候内存空间是怎么改变的-可以用别的方法实现吗","link":"#❓nsmutablearray-是怎么实现的-做增删操作的时候内存空间是怎么改变的-可以用别的方法实现吗","children":[]}]},{"level":2,"title":"NSDictionary","slug":"nsdictionary","link":"#nsdictionary","children":[{"level":3,"title":"❓NSDictionary 大致实现原理","slug":"❓nsdictionary-大致实现原理","link":"#❓nsdictionary-大致实现原理","children":[]},{"level":3,"title":"❓NSDictionary vs NSHashTable vs NSMapTable","slug":"❓nsdictionary-vs-nshashtable-vs-nsmaptable","link":"#❓nsdictionary-vs-nshashtable-vs-nsmaptable","children":[]},{"level":3,"title":"❓NSDictionary vs NSCache","slug":"❓nsdictionary-vs-nscache","link":"#❓nsdictionary-vs-nscache","children":[]},{"level":3,"title":"❓isEqual 和 hash 的关系？","slug":"❓isequal-和-hash-的关系","link":"#❓isequal-和-hash-的关系","children":[]}]},{"level":2,"title":"拷贝","slug":"拷贝","link":"#拷贝","children":[{"level":3,"title":"❓copy 和 mutableCopy 的区别？","slug":"❓copy-和-mutablecopy-的区别","link":"#❓copy-和-mutablecopy-的区别","children":[]},{"level":3,"title":"❓自定义类如何实现 copy 功能？","slug":"❓自定义类如何实现-copy-功能","link":"#❓自定义类如何实现-copy-功能","children":[]},{"level":3,"title":"❓自定义类如何实现 mutableCopy 功能？","slug":"❓自定义类如何实现-mutablecopy-功能","link":"#❓自定义类如何实现-mutablecopy-功能","children":[]},{"level":3,"title":"❓如何重写带 copy 关键字的 setter？","slug":"❓如何重写带-copy-关键字的-setter","link":"#❓如何重写带-copy-关键字的-setter","children":[]},{"level":3,"title":"❓@property (copy) NSMutableArray *array; 这个写法正确吗？","slug":"❓-property-copy-nsmutablearray-array-这个写法正确吗","link":"#❓-property-copy-nsmutablearray-array-这个写法正确吗","children":[]},{"level":3,"title":"❓为什么不可变对象要用 copy？","slug":"❓为什么不可变对象要用-copy","link":"#❓为什么不可变对象要用-copy","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":"❓@property 属性是什么？","slug":"❓-property-属性是什么","link":"#❓-property-属性是什么","children":[]},{"level":3,"title":"❓@property 的默认关键字？","slug":"❓-property-的默认关键字","link":"#❓-property-的默认关键字","children":[]},{"level":3,"title":"❓@property 的底层实现？","slug":"❓-property-的底层实现","link":"#❓-property-的底层实现","children":[]},{"level":3,"title":"❓assign、strong、weak、copy 区别？","slug":"❓assign、strong、weak、copy-区别","link":"#❓assign、strong、weak、copy-区别","children":[]},{"level":3,"title":"❓NSString 为什么使用 copy，可以使用 strong 吗？","slug":"❓nsstring-为什么使用-copy-可以使用-strong-吗","link":"#❓nsstring-为什么使用-copy-可以使用-strong-吗","children":[]},{"level":3,"title":"❓assign 可以用于 OC 对象吗？","slug":"❓assign-可以用于-oc-对象吗","link":"#❓assign-可以用于-oc-对象吗","children":[]},{"level":3,"title":"❓nonnull 用过吗","slug":"❓nonnull-用过吗","link":"#❓nonnull-用过吗","children":[]},{"level":3,"title":"❓@synthesize vs @dynamic","slug":"❓-synthesize-vs-dynamic","link":"#❓-synthesize-vs-dynamic","children":[]},{"level":3,"title":"❓@synthesize 合成实例变量的规则是什么？如果属性名为 foo，存在一个名为 _foo 的实例变量，还会自动合成新变量么？","slug":"❓-synthesize-合成实例变量的规则是什么-如果属性名为-foo-存在一个名为-foo-的实例变量-还会自动合成新变量么","link":"#❓-synthesize-合成实例变量的规则是什么-如果属性名为-foo-存在一个名为-foo-的实例变量-还会自动合成新变量么","children":[]},{"level":3,"title":"❓@synthesize 都有哪些使用场景？","slug":"❓-synthesize-都有哪些使用场景","link":"#❓-synthesize-都有哪些使用场景","children":[]}]},{"level":2,"title":"Block","slug":"block","link":"#block","children":[{"level":3,"title":"❓block vs delegate","slug":"❓block-vs-delegate","link":"#❓block-vs-delegate","children":[]},{"level":3,"title":"❓block vs 函数指针","slug":"❓block-vs-函数指针","link":"#❓block-vs-函数指针","children":[]},{"level":3,"title":"❓block 什么情况会发生循环引用？","slug":"❓block-什么情况会发生循环引用","link":"#❓block-什么情况会发生循环引用","children":[]},{"level":3,"title":"❓UIView 动画函数 block 版本是否需要处理循环引用？","slug":"❓uiview-动画函数-block-版本是否需要处理循环引用","link":"#❓uiview-动画函数-block-版本是否需要处理循环引用","children":[]},{"level":3,"title":"❓block 底层实现","slug":"❓block-底层实现","link":"#❓block-底层实现","children":[]},{"level":3,"title":"❓block 内如何修改外部变量","slug":"❓block-内如何修改外部变量","link":"#❓block-内如何修改外部变量","children":[]},{"level":3,"title":"❓block 在捕获自动变量，局部静态变量，全局变量，全局静态变量有什么区别","slug":"❓block-在捕获自动变量-局部静态变量-全局变量-全局静态变量有什么区别","link":"#❓block-在捕获自动变量-局部静态变量-全局变量-全局静态变量有什么区别","children":[]},{"level":3,"title":"❓block 捕获外部局部变量实际上发生了什么","slug":"❓block-捕获外部局部变量实际上发生了什么","link":"#❓block-捕获外部局部变量实际上发生了什么","children":[]},{"level":3,"title":"❓block 修改捕获变量除了用 __block 还可以怎么做？有哪些局限性？","slug":"❓block-修改捕获变量除了用-block-还可以怎么做-有哪些局限性","link":"#❓block-修改捕获变量除了用-block-还可以怎么做-有哪些局限性","children":[]},{"level":3,"title":"❓block 中修改 NSMutableArray 需不需要添加 __block","slug":"❓block-中修改-nsmutablearray-需不需要添加-block","link":"#❓block-中修改-nsmutablearray-需不需要添加-block","children":[]},{"level":3,"title":"❓__block vs __weak","slug":"❓-block-vs-weak","link":"#❓-block-vs-weak","children":[]},{"level":3,"title":"❓__block 在 ARC 和非 ARC 有区别吗","slug":"❓-block-在-arc-和非-arc-有区别吗","link":"#❓-block-在-arc-和非-arc-有区别吗","children":[]},{"level":3,"title":"❓一个 int 变量用 __block 修饰与不修饰有区别吗","slug":"❓一个-int-变量用-block-修饰与不修饰有区别吗","link":"#❓一个-int-变量用-block-修饰与不修饰有区别吗","children":[]},{"level":3,"title":"❓block 如何进行内存管理的","slug":"❓block-如何进行内存管理的","link":"#❓block-如何进行内存管理的","children":[]},{"level":3,"title":"❓block 一般使用 copy 修饰，可以使用 strong 吗，发生 copy 的时机","slug":"❓block-一般使用-copy-修饰-可以使用-strong-吗-发生-copy-的时机","link":"#❓block-一般使用-copy-修饰-可以使用-strong-吗-发生-copy-的时机","children":[]},{"level":3,"title":"❓为什么在 block 外部使用 __weak 修饰的同时需要在内部使用 __strong 修饰","slug":"❓为什么在-block-外部使用-weak-修饰的同时需要在内部使用-strong-修饰","link":"#❓为什么在-block-外部使用-weak-修饰的同时需要在内部使用-strong-修饰","children":[]},{"level":3,"title":"❓block 访问对象类型的 auto 变量时，在 ARC 和 MRC 下有什么区别","slug":"❓block-访问对象类型的-auto-变量时-在-arc-和-mrc-下有什么区别","link":"#❓block-访问对象类型的-auto-变量时-在-arc-和-mrc-下有什么区别","children":[]},{"level":3,"title":"❓block 中可以使用 KVC 来访问实例变量吗，可以使用 KVC 修改它的值吗","slug":"❓block-中可以使用-kvc-来访问实例变量吗-可以使用-kvc-修改它的值吗","link":"#❓block-中可以使用-kvc-来访问实例变量吗-可以使用-kvc-修改它的值吗","children":[]}]},{"level":2,"title":"类","slug":"类","link":"#类","children":[{"level":3,"title":"❓+load 与 +initialize 区别","slug":"❓-load-与-initialize-区别","link":"#❓-load-与-initialize-区别","children":[]},{"level":3,"title":"❓Designated Initializer 如何添加？","slug":"❓designated-initializer-如何添加","link":"#❓designated-initializer-如何添加","children":[]},{"level":3,"title":"❓OC 中的内省和反射，底层实现原理，应用场景有哪些","slug":"❓oc-中的内省和反射-底层实现原理-应用场景有哪些","link":"#❓oc-中的内省和反射-底层实现原理-应用场景有哪些","children":[]},{"level":3,"title":"❓OC 如何实现多重继承","slug":"❓oc-如何实现多重继承","link":"#❓oc-如何实现多重继承","children":[]},{"level":3,"title":"❓静态方法是否能被重写","slug":"❓静态方法是否能被重写","link":"#❓静态方法是否能被重写","children":[]}]},{"level":2,"title":"分类","slug":"分类","link":"#分类","children":[{"level":3,"title":"❓Category vs Extension","slug":"❓category-vs-extension","link":"#❓category-vs-extension","children":[]},{"level":3,"title":"❓NSObject 添加 Extension 会怎么样","slug":"❓nsobject-添加-extension-会怎么样","link":"#❓nsobject-添加-extension-会怎么样","children":[]},{"level":3,"title":"❓如果分类中添加与类相同的方法签名会发生什么","slug":"❓如果分类中添加与类相同的方法签名会发生什么","link":"#❓如果分类中添加与类相同的方法签名会发生什么","children":[]},{"level":3,"title":"❓分类是如何实现的，它为什么会覆盖掉原来的方法","slug":"❓分类是如何实现的-它为什么会覆盖掉原来的方法","link":"#❓分类是如何实现的-它为什么会覆盖掉原来的方法","children":[]},{"level":3,"title":"❓分类中有与主类相同的方法，如果想要调用主类中的方法如何处理","slug":"❓分类中有与主类相同的方法-如果想要调用主类中的方法如何处理","link":"#❓分类中有与主类相同的方法-如果想要调用主类中的方法如何处理","children":[]},{"level":3,"title":"❓两个分类的 load 方法的加载顺序","slug":"❓两个分类的-load-方法的加载顺序","link":"#❓两个分类的-load-方法的加载顺序","children":[]},{"level":3,"title":"❓两个分类的同名方法的加载顺序","slug":"❓两个分类的同名方法的加载顺序","link":"#❓两个分类的同名方法的加载顺序","children":[]},{"level":3,"title":"❓一个类中有个多个分类都实现了相同的方法，会调用哪个方法","slug":"❓一个类中有个多个分类都实现了相同的方法-会调用哪个方法","link":"#❓一个类中有个多个分类都实现了相同的方法-会调用哪个方法","children":[]},{"level":3,"title":"❓分类中为什么不能添加 @property","slug":"❓分类中为什么不能添加-property","link":"#❓分类中为什么不能添加-property","children":[]},{"level":3,"title":"❓分类的结构体里面有哪些成员","slug":"❓分类的结构体里面有哪些成员","link":"#❓分类的结构体里面有哪些成员","children":[]},{"level":3,"title":"❓分类中如何添加属性","slug":"❓分类中如何添加属性","link":"#❓分类中如何添加属性","children":[]}]},{"level":2,"title":"消息发送","slug":"消息发送","link":"#消息发送","children":[{"level":3,"title":"❓OC 是否支持方法重载","slug":"❓oc-是否支持方法重载","link":"#❓oc-是否支持方法重载","children":[]},{"level":3,"title":"❓OC 中是如何通过 selector 找到对应的 IMP 地址","slug":"❓oc-中是如何通过-selector-找到对应的-imp-地址","link":"#❓oc-中是如何通过-selector-找到对应的-imp-地址","children":[]},{"level":3,"title":"❓怎么保证自己的类一定能调用到自己写的方法","slug":"❓怎么保证自己的类一定能调用到自己写的方法","link":"#❓怎么保证自己的类一定能调用到自己写的方法","children":[]},{"level":3,"title":"❓OC 中的类方法和实例方法有什么本质区别和联系","slug":"❓oc-中的类方法和实例方法有什么本质区别和联系","link":"#❓oc-中的类方法和实例方法有什么本质区别和联系","children":[]},{"level":3,"title":"❓在类方法中是否可以使用 self","slug":"❓在类方法中是否可以使用-self","link":"#❓在类方法中是否可以使用-self","children":[]},{"level":3,"title":"❓SEL、_cmd 是什么","slug":"❓sel、-cmd-是什么","link":"#❓sel、-cmd-是什么","children":[]},{"level":3,"title":"❓OC 中对象消息发送的大致流程","slug":"❓oc-中对象消息发送的大致流程","link":"#❓oc-中对象消息发送的大致流程","children":[]},{"level":3,"title":"❓向一个 nil 对象发送消息将会发生什么","slug":"❓向一个-nil-对象发送消息将会发生什么","link":"#❓向一个-nil-对象发送消息将会发生什么","children":[]},{"level":3,"title":"❓向一个对象发送消息 [obj foo] 和 objc_msgSend() 函数之间有什么关系","slug":"❓向一个对象发送消息-obj-foo-和-objc-msgsend-函数之间有什么关系","link":"#❓向一个对象发送消息-obj-foo-和-objc-msgsend-函数之间有什么关系","children":[]},{"level":3,"title":"❓一个对象向一个不存在的方法发送消息，消息是如何转发的","slug":"❓一个对象向一个不存在的方法发送消息-消息是如何转发的","link":"#❓一个对象向一个不存在的方法发送消息-消息是如何转发的","children":[]},{"level":3,"title":"❓unrecognized selector 异常是如何发生，应该如何避免","slug":"❓unrecognized-selector-异常是如何发生-应该如何避免","link":"#❓unrecognized-selector-异常是如何发生-应该如何避免","children":[]},{"level":3,"title":"❓_objc_msgForward 函数是做什么的，直接调用它将会发生什么","slug":"❓-objc-msgforward-函数是做什么的-直接调用它将会发生什么","link":"#❓-objc-msgforward-函数是做什么的-直接调用它将会发生什么","children":[]},{"level":3,"title":"❓C++ 调用虚方法与 OC 发消息有什么区别","slug":"❓c-调用虚方法与-oc-发消息有什么区别","link":"#❓c-调用虚方法与-oc-发消息有什么区别","children":[]},{"level":3,"title":"❓消息转发机制和其他语言的消息机制优劣对比","slug":"❓消息转发机制和其他语言的消息机制优劣对比","link":"#❓消息转发机制和其他语言的消息机制优劣对比","children":[]},{"level":3,"title":"❓在方法调用的时候，方法查询-> 动态解析-> 消息转发 之前做了什么","slug":"❓在方法调用的时候-方法查询-动态解析-消息转发-之前做了什么","link":"#❓在方法调用的时候-方法查询-动态解析-消息转发-之前做了什么","children":[]},{"level":3,"title":"❓下面代码能正常运行吗(如果能，输出是什么)","slug":"❓下面代码能正常运行吗-如果能-输出是什么","link":"#❓下面代码能正常运行吗-如果能-输出是什么","children":[]}]}],"git":{"createdTime":1704610269000,"updatedTime":1708346718000,"contributors":[{"name":"naijoug","email":"naijoug@outlook.com","commits":4}]},"readingTime":{"minutes":80.75,"words":24225},"filePathRelative":"interview/ios/0x01.objective-c.md","localizedDate":"2024年1月7日","autoDesc":true}');export{l as data};