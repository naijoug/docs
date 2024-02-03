const e=JSON.parse('{"key":"v-9d8dba5e","path":"/interview/ios/0x10.thread.html","title":"多线程","lang":"zh-CN","frontmatter":{"title":"多线程","icon":"hashtag","index":true,"description":"线程安全 ❓iOS 中的常用线程相关类型有哪些 💡 在iOS开发中，有几种常见的用于处理多线程和并发的技术： 1. NSThread：这是最基础的线程使用方式，Cocoa 提供了对象化的线程 NSThread，可以直接操作线程，如创建、启动、休眠等。 2. GCD (Grand Central Dispatch)：GCD是Apple开发的一个多核编程...","head":[["meta",{"property":"og:url","content":"https://naijoug.github.io/docs/docs/interview/ios/0x10.thread.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"多线程"}],["meta",{"property":"og:description","content":"线程安全 ❓iOS 中的常用线程相关类型有哪些 💡 在iOS开发中，有几种常见的用于处理多线程和并发的技术： 1. NSThread：这是最基础的线程使用方式，Cocoa 提供了对象化的线程 NSThread，可以直接操作线程，如创建、启动、休眠等。 2. GCD (Grand Central Dispatch)：GCD是Apple开发的一个多核编程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-23T08:01:03.000Z"}],["meta",{"property":"article:author","content":"naijoug"}],["meta",{"property":"article:modified_time","content":"2024-01-23T08:01:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-23T08:01:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"naijoug\\",\\"url\\":\\"https://github.com/naijoug\\"}]}"]]},"headers":[{"level":2,"title":"线程安全","slug":"线程安全","link":"#线程安全","children":[{"level":3,"title":"❓iOS 中的常用线程相关类型有哪些","slug":"❓ios-中的常用线程相关类型有哪些","link":"#❓ios-中的常用线程相关类型有哪些","children":[]},{"level":3,"title":"❓iOS 中线程同步策略有哪些","slug":"❓ios-中线程同步策略有哪些","link":"#❓ios-中线程同步策略有哪些","children":[]},{"level":3,"title":"❓atomic 线程安全吗","slug":"❓atomic-线程安全吗","link":"#❓atomic-线程安全吗","children":[]},{"level":3,"title":"❓如果让你来实现属性的 atomic，如何实现","slug":"❓如果让你来实现属性的-atomic-如何实现","link":"#❓如果让你来实现属性的-atomic-如何实现","children":[]},{"level":3,"title":"❓NSMutableArray 的线程安全性","slug":"❓nsmutablearray-的线程安全性","link":"#❓nsmutablearray-的线程安全性","children":[]},{"level":3,"title":"❓为什么只有主线程的 runloop 是开启的","slug":"❓为什么只有主线程的-runloop-是开启的","link":"#❓为什么只有主线程的-runloop-是开启的","children":[]},{"level":3,"title":"❓为什么只在主线程刷新 UI","slug":"❓为什么只在主线程刷新-ui","link":"#❓为什么只在主线程刷新-ui","children":[]},{"level":3,"title":"❓UIKit 是线程安全的吗","slug":"❓uikit-是线程安全的吗","link":"#❓uikit-是线程安全的吗","children":[]},{"level":3,"title":"❓0x8BADF00D 是什么？","slug":"❓0x8badf00d-是什么","link":"#❓0x8badf00d-是什么","children":[]},{"level":3,"title":"0xdead10cc 、0xbad22222 、oxdeadfa11 呢？","slug":"_0xdead10cc-、0xbad22222-、oxdeadfa11-呢","link":"#_0xdead10cc-、0xbad22222-、oxdeadfa11-呢","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]},{"level":2,"title":"线程锁","slug":"线程锁","link":"#线程锁","children":[{"level":3,"title":"❓OC 中的锁有哪些","slug":"❓oc-中的锁有哪些","link":"#❓oc-中的锁有哪些","children":[]},{"level":3,"title":"❓swift 中的锁有哪些","slug":"❓swift-中的锁有哪些","link":"#❓swift-中的锁有哪些","children":[]},{"level":3,"title":"❓自旋锁 vs 互斥锁","slug":"❓自旋锁-vs-互斥锁","link":"#❓自旋锁-vs-互斥锁","children":[]}]},{"level":2,"title":"GCD","slug":"gcd","link":"#gcd","children":[{"level":3,"title":"❓GCD 什么情况下会发生的死锁现象","slug":"❓gcd-什么情况下会发生的死锁现象","link":"#❓gcd-什么情况下会发生的死锁现象","children":[]},{"level":3,"title":"❓GCD 执行原理","slug":"❓gcd-执行原理","link":"#❓gcd-执行原理","children":[]},{"level":3,"title":"❓GCD 的队列（dispatch_queue_t）分哪两种类型，默认提供哪些队列","slug":"❓gcd-的队列-dispatch-queue-t-分哪两种类型-默认提供哪些队列","link":"#❓gcd-的队列-dispatch-queue-t-分哪两种类型-默认提供哪些队列","children":[]},{"level":3,"title":"❓GCD 主线程 & 主队列的关系","slug":"❓gcd-主线程-主队列的关系","link":"#❓gcd-主线程-主队列的关系","children":[]},{"level":3,"title":"❓线程和队列的关系，一个线程是否可能存在于两个队列","slug":"❓线程和队列的关系-一个线程是否可能存在于两个队列","link":"#❓线程和队列的关系-一个线程是否可能存在于两个队列","children":[]},{"level":3,"title":"❓队列一定会创建线程吗，队列是否可以无限制创建","slug":"❓队列一定会创建线程吗-队列是否可以无限制创建","link":"#❓队列一定会创建线程吗-队列是否可以无限制创建","children":[]},{"level":3,"title":"❓如何用 GCD 同步若干个异步调用？","slug":"❓如何用-gcd-同步若干个异步调用","link":"#❓如何用-gcd-同步若干个异步调用","children":[]},{"level":3,"title":"❓GCD 的一些常用的函数？","slug":"❓gcd-的一些常用的函数","link":"#❓gcd-的一些常用的函数","children":[]},{"level":3,"title":"❓dispatch_barrier_async 的作用是什么？","slug":"❓dispatch-barrier-async-的作用是什么","link":"#❓dispatch-barrier-async-的作用是什么","children":[]},{"level":3,"title":"❓dispatch_barrier_sync 与 dispatch_group_t 的区别？","slug":"❓dispatch-barrier-sync-与-dispatch-group-t-的区别","link":"#❓dispatch-barrier-sync-与-dispatch-group-t-的区别","children":[]},{"level":3,"title":"❓dispatch_barrier_sync 的功能用 dispatch_group_t 如何实现?","slug":"❓dispatch-barrier-sync-的功能用-dispatch-group-t-如何实现","link":"#❓dispatch-barrier-sync-的功能用-dispatch-group-t-如何实现","children":[]},{"level":3,"title":"❓dispatch_get_current_queue 为什么被废弃","slug":"❓dispatch-get-current-queue-为什么被废弃","link":"#❓dispatch-get-current-queue-为什么被废弃","children":[]},{"level":3,"title":"❓dispatch_once 实现原理","slug":"❓dispatch-once-实现原理","link":"#❓dispatch-once-实现原理","children":[]},{"level":3,"title":"❓DispatchQoS 的作用","slug":"❓dispatchqos-的作用","link":"#❓dispatchqos-的作用","children":[]},{"level":3,"title":"❓GCD 背后的线程模型是什么","slug":"❓gcd-背后的线程模型是什么","link":"#❓gcd-背后的线程模型是什么","children":[]},{"level":3,"title":"❓GCD 已经调用能不能取消","slug":"❓gcd-已经调用能不能取消","link":"#❓gcd-已经调用能不能取消","children":[]},{"level":3,"title":"❓下面代码执行结果","slug":"❓下面代码执行结果","link":"#❓下面代码执行结果","children":[]},{"level":3,"title":"❓下面代码输出结果","slug":"❓下面代码输出结果","link":"#❓下面代码输出结果","children":[]}]},{"level":2,"title":"NSOperation","slug":"nsoperation","link":"#nsoperation","children":[{"level":3,"title":"❓了解 NSOperation 与 NSOperationQueue 吗","slug":"❓了解-nsoperation-与-nsoperationqueue-吗","link":"#❓了解-nsoperation-与-nsoperationqueue-吗","children":[]},{"level":3,"title":"❓有哪些场景是 NSOperation 比 GCD 更容易实现的","slug":"❓有哪些场景是-nsoperation-比-gcd-更容易实现的","link":"#❓有哪些场景是-nsoperation-比-gcd-更容易实现的","children":[]},{"level":3,"title":"❓NSOperationQueue 中的 maxConcurrentOperationCount 默认值","slug":"❓nsoperationqueue-中的-maxconcurrentoperationcount-默认值","link":"#❓nsoperationqueue-中的-maxconcurrentoperationcount-默认值","children":[]},{"level":3,"title":"❓NSOperation 是如何终止/取消任务的","slug":"❓nsoperation-是如何终止-取消任务的","link":"#❓nsoperation-是如何终止-取消任务的","children":[]}]},{"level":2,"title":"线程设计","slug":"线程设计","link":"#线程设计","children":[{"level":3,"title":"❓如何实现一个线程安全的 NSMutableArray","slug":"❓如何实现一个线程安全的-nsmutablearray","link":"#❓如何实现一个线程安全的-nsmutablearray","children":[]},{"level":3,"title":"❓iOS 中线程间如何通信","slug":"❓ios-中线程间如何通信","link":"#❓ios-中线程间如何通信","children":[]},{"level":3,"title":"❓iOS 中如何创建一个常驻线程","slug":"❓ios-中如何创建一个常驻线程","link":"#❓ios-中如何创建一个常驻线程","children":[]},{"level":3,"title":"❓iOS 下如何实现指定线程数目的线程池","slug":"❓ios-下如何实现指定线程数目的线程池","link":"#❓ios-下如何实现指定线程数目的线程池","children":[]},{"level":3,"title":"❓执行一个 NSThread 任务, 如何在执行过程中终止该线程","slug":"❓执行一个-nsthread-任务-如何在执行过程中终止该线程","link":"#❓执行一个-nsthread-任务-如何在执行过程中终止该线程","children":[]},{"level":3,"title":"❓开启一条线程的方法，线程可以取消吗","slug":"❓开启一条线程的方法-线程可以取消吗","link":"#❓开启一条线程的方法-线程可以取消吗","children":[]},{"level":3,"title":"❓如何终止正在运行的工作线程","slug":"❓如何终止正在运行的工作线程","link":"#❓如何终止正在运行的工作线程","children":[]},{"level":3,"title":"❓有 a、b、c、d 4个异步请求，如何判断 a、b、c、d 都完成执行","slug":"❓有-a、b、c、d-4个异步请求-如何判断-a、b、c、d-都完成执行","link":"#❓有-a、b、c、d-4个异步请求-如何判断-a、b、c、d-都完成执行","children":[]},{"level":3,"title":"❓下面这段伪代码存在什么问题，如何改进","slug":"❓下面这段伪代码存在什么问题-如何改进","link":"#❓下面这段伪代码存在什么问题-如何改进","children":[]}]},{"level":2,"title":"定时器","slug":"定时器","link":"#定时器","children":[{"level":3,"title":"❓Timer 定时器准确吗，怎样实现一个精确的 Timer","slug":"❓timer-定时器准确吗-怎样实现一个精确的-timer","link":"#❓timer-定时器准确吗-怎样实现一个精确的-timer","children":[]},{"level":3,"title":"❓NSTimer vs CADisplayLink vs dispatch_source_t","slug":"❓nstimer-vs-cadisplaylink-vs-dispatch-source-t","link":"#❓nstimer-vs-cadisplaylink-vs-dispatch-source-t","children":[]},{"level":3,"title":"❓NSTimer 的循环引用如何解决","slug":"❓nstimer-的循环引用如何解决","link":"#❓nstimer-的循环引用如何解决","children":[]}]}],"git":{"createdTime":1704610269000,"updatedTime":1705996863000,"contributors":[{"name":"naijoug","email":"naijoug@outlook.com","commits":3}]},"readingTime":{"minutes":53.01,"words":15902},"filePathRelative":"interview/ios/0x10.thread.md","localizedDate":"2024年1月7日","autoDesc":true}');export{e as data};