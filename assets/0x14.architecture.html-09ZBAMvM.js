const e=JSON.parse('{"key":"v-b797caa8","path":"/interview/ios/0x14.architecture.html","title":"架构设计","lang":"zh-CN","frontmatter":{"title":"架构设计","icon":"hashtag","index":true,"description":"架构设计 ❓AppDelegate 如何瘦身 💡 AppDelegate：`iOS 应用程序的入口点和中央协调者，因此通常有许多代码都会集中在此。按照最初的设计，它处理生命周期事件、推送通知等。随着时间的推移，AppDelegate 可能会积累大量的代码，导致其难以理解和维护。 使用服务类：可以将 AppDelegate 中的一些代码剥离出来，建立为...","head":[["meta",{"property":"og:url","content":"https://naijoug.github.io/docs/docs/interview/ios/0x14.architecture.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"架构设计"}],["meta",{"property":"og:description","content":"架构设计 ❓AppDelegate 如何瘦身 💡 AppDelegate：`iOS 应用程序的入口点和中央协调者，因此通常有许多代码都会集中在此。按照最初的设计，它处理生命周期事件、推送通知等。随着时间的推移，AppDelegate 可能会积累大量的代码，导致其难以理解和维护。 使用服务类：可以将 AppDelegate 中的一些代码剥离出来，建立为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-25T12:52:33.000Z"}],["meta",{"property":"article:author","content":"naijoug"}],["meta",{"property":"article:modified_time","content":"2024-02-25T12:52:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构设计\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-25T12:52:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"naijoug\\",\\"url\\":\\"https://github.com/naijoug\\"}]}"]]},"headers":[{"level":2,"title":"架构设计","slug":"架构设计","link":"#架构设计","children":[{"level":3,"title":"❓AppDelegate 如何瘦身","slug":"❓appdelegate-如何瘦身","link":"#❓appdelegate-如何瘦身","children":[]},{"level":3,"title":"❓从 0 开始做一个项目，你是如何架构思考的","slug":"❓从-0-开始做一个项目-你是如何架构思考的","link":"#❓从-0-开始做一个项目-你是如何架构思考的","children":[]},{"level":3,"title":"❓如何编写单元测试(例如完成了网络模块，如何测试该网络模块，测试用例应该如何覆盖)","slug":"❓如何编写单元测试-例如完成了网络模块-如何测试该网络模块-测试用例应该如何覆盖","link":"#❓如何编写单元测试-例如完成了网络模块-如何测试该网络模块-测试用例应该如何覆盖","children":[]},{"level":3,"title":"❓内存缓存策略有哪些，NSCache 使用什么缓存策略","slug":"❓内存缓存策略有哪些-nscache-使用什么缓存策略","link":"#❓内存缓存策略有哪些-nscache-使用什么缓存策略","children":[]},{"level":3,"title":"❓无痕埋点如何实现，你认为理想的无痕埋点应该具备哪些特点","slug":"❓无痕埋点如何实现-你认为理想的无痕埋点应该具备哪些特点","link":"#❓无痕埋点如何实现-你认为理想的无痕埋点应该具备哪些特点","children":[]},{"level":3,"title":"❓手动埋点、自动化埋点、可视化埋点","slug":"❓手动埋点、自动化埋点、可视化埋点","link":"#❓手动埋点、自动化埋点、可视化埋点","children":[]},{"level":3,"title":"❓说说你常用的几个重构的技巧，你觉得重构适合什么时候来做","slug":"❓说说你常用的几个重构的技巧-你觉得重构适合什么时候来做","link":"#❓说说你常用的几个重构的技巧-你觉得重构适合什么时候来做","children":[]}]},{"level":2,"title":"组件化","slug":"组件化","link":"#组件化","children":[{"level":3,"title":"❓组件化设计思路","slug":"❓组件化设计思路","link":"#❓组件化设计思路","children":[]},{"level":3,"title":"❓下层组件需要调用上层组件怎样处理","slug":"❓下层组件需要调用上层组件怎样处理","link":"#❓下层组件需要调用上层组件怎样处理","children":[]},{"level":3,"title":"❓组件之间如何解耦","slug":"❓组件之间如何解耦","link":"#❓组件之间如何解耦","children":[]},{"level":3,"title":"❓CTMediator vs MGJRouter","slug":"❓ctmediator-vs-mgjrouter","link":"#❓ctmediator-vs-mgjrouter","children":[]},{"level":3,"title":"❓为什么 CTMediator 方案优于其它路由的方案","slug":"❓为什么-ctmediator-方案优于其它路由的方案","link":"#❓为什么-ctmediator-方案优于其它路由的方案","children":[]},{"level":3,"title":"❓基于 CTMediator 的组件化方案，有哪些核心组成","slug":"❓基于-ctmediator-的组件化方案-有哪些核心组成","link":"#❓基于-ctmediator-的组件化方案-有哪些核心组成","children":[]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"❓iOS 中的的单例实现","slug":"❓ios-中的的单例实现","link":"#❓ios-中的的单例实现","children":[]},{"level":3,"title":"❓说说单例模式优缺点","slug":"❓说说单例模式优缺点","link":"#❓说说单例模式优缺点","children":[]},{"level":3,"title":"❓苹果设计的类对象 [MyClass class] 是不是单例模式","slug":"❓苹果设计的类对象-myclass-class-是不是单例模式","link":"#❓苹果设计的类对象-myclass-class-是不是单例模式","children":[]},{"level":3,"title":"❓iOS 为什么没有类似于 Java 的 Builder 的构造模式","slug":"❓ios-为什么没有类似于-java-的-builder-的构造模式","link":"#❓ios-为什么没有类似于-java-的-builder-的构造模式","children":[]},{"level":3,"title":"❓iOS 中常用设计模式实践有哪些","slug":"❓ios-中常用设计模式实践有哪些","link":"#❓ios-中常用设计模式实践有哪些","children":[]},{"level":3,"title":"❓MVC、MVP、MVVM、Coordinator","slug":"❓mvc、mvp、mvvm、coordinator","link":"#❓mvc、mvp、mvvm、coordinator","children":[]},{"level":3,"title":"❓MVC 介绍一下，会有什么问题","slug":"❓mvc-介绍一下-会有什么问题","link":"#❓mvc-介绍一下-会有什么问题","children":[]},{"level":3,"title":"❓MVC 相互通讯规则都有哪些","slug":"❓mvc-相互通讯规则都有哪些","link":"#❓mvc-相互通讯规则都有哪些","children":[]},{"level":3,"title":"❓Model 会持有 View 吗","slug":"❓model-会持有-view-吗","link":"#❓model-会持有-view-吗","children":[]},{"level":3,"title":"❓MVVM 如何实现绑定","slug":"❓mvvm-如何实现绑定","link":"#❓mvvm-如何实现绑定","children":[]},{"level":3,"title":"❓单向数据流 (Redux、ReSwift、RxFeedback)","slug":"❓单向数据流-redux、reswift、rxfeedback","link":"#❓单向数据流-redux、reswift、rxfeedback","children":[]}]},{"level":2,"title":"持续集成","slug":"持续集成","link":"#持续集成","children":[{"level":3,"title":"❓使用过什么持续集成方式","slug":"❓使用过什么持续集成方式","link":"#❓使用过什么持续集成方式","children":[]},{"level":3,"title":"❓Jenkins 怎么备份恢复","slug":"❓jenkins-怎么备份恢复","link":"#❓jenkins-怎么备份恢复","children":[]},{"level":3,"title":"❓Jenkins 使用过哪些插件","slug":"❓jenkins-使用过哪些插件","link":"#❓jenkins-使用过哪些插件","children":[]}]},{"level":2,"title":"模块设计","slug":"模块设计","link":"#模块设计","children":[{"level":3,"title":"❓设计实现一个时长统计模块","slug":"❓设计实现一个时长统计模块","link":"#❓设计实现一个时长统计模块","children":[]},{"level":3,"title":"❓设计实现一个日志记录模块","slug":"❓设计实现一个日志记录模块","link":"#❓设计实现一个日志记录模块","children":[]},{"level":3,"title":"❓设计实现一个网络请求模块","slug":"❓设计实现一个网络请求模块","link":"#❓设计实现一个网络请求模块","children":[]},{"level":3,"title":"❓设计实现一个数据缓存模块","slug":"❓设计实现一个数据缓存模块","link":"#❓设计实现一个数据缓存模块","children":[]},{"level":3,"title":"❓设计实现一个数据存储模块","slug":"❓设计实现一个数据存储模块","link":"#❓设计实现一个数据存储模块","children":[]}]}],"git":{"createdTime":1704610269000,"updatedTime":1708865553000,"contributors":[{"name":"naijoug","email":"naijoug@outlook.com","commits":4}]},"readingTime":{"minutes":35.57,"words":10670},"filePathRelative":"interview/ios/0x14.architecture.md","localizedDate":"2024年1月7日","autoDesc":true}');export{e as data};