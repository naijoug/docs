const e=JSON.parse('{"key":"v-d290c78e","path":"/interview/core/0x07.thread.html","title":"","lang":"zh-CN","frontmatter":{"description":"title: thread - “多线程” icon: hashtag index: true 概念知识 ❓说说你理解的多线程 💡 多线程是指程序中包含两个或者更多个可以同时运行的部分，这两个或者多个部分互相独立但又共享某些资源，可以并行执行的每个独立的运行部分就是一个线程。 每个线程都有它自己的程序计数器、一组寄存器和堆栈，这些都是线程从被暂停到再...","head":[["meta",{"property":"og:url","content":"https://naijoug.github.io/docs/docs/interview/core/0x07.thread.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:description","content":"title: thread - “多线程” icon: hashtag index: true 概念知识 ❓说说你理解的多线程 💡 多线程是指程序中包含两个或者更多个可以同时运行的部分，这两个或者多个部分互相独立但又共享某些资源，可以并行执行的每个独立的运行部分就是一个线程。 每个线程都有它自己的程序计数器、一组寄存器和堆栈，这些都是线程从被暂停到再..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-17T03:15:38.000Z"}],["meta",{"property":"article:author","content":"naijoug"}],["meta",{"property":"article:modified_time","content":"2024-01-17T03:15:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T03:15:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"naijoug\\",\\"url\\":\\"https://github.com/naijoug\\"}]}"]]},"headers":[{"level":2,"title":"概念知识","slug":"概念知识","link":"#概念知识","children":[{"level":3,"title":"❓说说你理解的多线程","slug":"❓说说你理解的多线程","link":"#❓说说你理解的多线程","children":[]},{"level":3,"title":"❓并行 vs 串行","slug":"❓并行-vs-串行","link":"#❓并行-vs-串行","children":[]},{"level":3,"title":"❓进程 vs 线程 vs 协程","slug":"❓进程-vs-线程-vs-协程","link":"#❓进程-vs-线程-vs-协程","children":[]},{"level":3,"title":"❓进程间如何通信","slug":"❓进程间如何通信","link":"#❓进程间如何通信","children":[]},{"level":3,"title":"❓进程 A 和进程 B 通过管道通信的话是在同一个管道吗","slug":"❓进程-a-和进程-b-通过管道通信的话是在同一个管道吗","link":"#❓进程-a-和进程-b-通过管道通信的话是在同一个管道吗","children":[]},{"level":3,"title":"❓线程间的通信方式","slug":"❓线程间的通信方式","link":"#❓线程间的通信方式","children":[]},{"level":3,"title":"❓最多能开辟多少个进程和线程","slug":"❓最多能开辟多少个进程和线程","link":"#❓最多能开辟多少个进程和线程","children":[]},{"level":3,"title":"❓说说编程语言都开始支持的 async/await","slug":"❓说说编程语言都开始支持的-async-await","link":"#❓说说编程语言都开始支持的-async-await","children":[]}]},{"level":2,"title":"线程安全","slug":"线程安全","link":"#线程安全","children":[{"level":3,"title":"❓什么是线程安全","slug":"❓什么是线程安全","link":"#❓什么是线程安全","children":[]},{"level":3,"title":"❓线程死锁的四个条件","slug":"❓线程死锁的四个条件","link":"#❓线程死锁的四个条件","children":[]},{"level":3,"title":"❓主线程是相对于什么而言的","slug":"❓主线程是相对于什么而言的","link":"#❓主线程是相对于什么而言的","children":[]},{"level":3,"title":"❓常见的线程同步策略","slug":"❓常见的线程同步策略","link":"#❓常见的线程同步策略","children":[]},{"level":3,"title":"❓sqlite 中的读写是线程安全的吗","slug":"❓sqlite-中的读写是线程安全的吗","link":"#❓sqlite-中的读写是线程安全的吗","children":[]}]},{"level":2,"title":"线程锁","slug":"线程锁","link":"#线程锁","children":[{"level":3,"title":"❓线程锁有哪些，那个性能最差","slug":"❓线程锁有哪些-那个性能最差","link":"#❓线程锁有哪些-那个性能最差","children":[]},{"level":3,"title":"❓各种的线程锁的常见使用场景","slug":"❓各种的线程锁的常见使用场景","link":"#❓各种的线程锁的常见使用场景","children":[]},{"level":3,"title":"❓线程锁的底层实现","slug":"❓线程锁的底层实现","link":"#❓线程锁的底层实现","children":[]},{"level":3,"title":"❓CAS 了解吗","slug":"❓cas-了解吗","link":"#❓cas-了解吗","children":[]},{"level":3,"title":"❓信号量和锁的关系","slug":"❓信号量和锁的关系","link":"#❓信号量和锁的关系","children":[]},{"level":3,"title":"❓信号量有什么功能是锁做不到的","slug":"❓信号量有什么功能是锁做不到的","link":"#❓信号量有什么功能是锁做不到的","children":[]},{"level":3,"title":"❓如果让你设计读写锁，你怎么设计","slug":"❓如果让你设计读写锁-你怎么设计","link":"#❓如果让你设计读写锁-你怎么设计","children":[]}]},{"level":2,"title":"分布式","slug":"分布式","link":"#分布式","children":[]},{"level":2,"title":"❓说一说分布式锁","slug":"❓说一说分布式锁","link":"#❓说一说分布式锁","children":[]},{"level":2,"title":"❓如果没有看门狗机制你应该如何解决锁过期的问题","slug":"❓如果没有看门狗机制你应该如何解决锁过期的问题","link":"#❓如果没有看门狗机制你应该如何解决锁过期的问题","children":[]},{"level":2,"title":"线程设计","slug":"线程设计","link":"#线程设计","children":[{"level":3,"title":"❓一个线程打印奇数，一个线程打印偶数，打印 1~100","slug":"❓一个线程打印奇数-一个线程打印偶数-打印-1-100","link":"#❓一个线程打印奇数-一个线程打印偶数-打印-1-100","children":[]},{"level":3,"title":"❓三个线程按照顺序打印 0~100","slug":"❓三个线程按照顺序打印-0-100","link":"#❓三个线程按照顺序打印-0-100","children":[]},{"level":3,"title":"❓需要请求 200 个URL，一次性只能发送10个，该怎么在最短的时间内请求完","slug":"❓需要请求-200-个url-一次性只能发送10个-该怎么在最短的时间内请求完","link":"#❓需要请求-200-个url-一次性只能发送10个-该怎么在最短的时间内请求完","children":[]}]}],"git":{"createdTime":1704610269000,"updatedTime":1705461338000,"contributors":[{"name":"naijoug","email":"naijoug@outlook.com","commits":3}]},"readingTime":{"minutes":32.09,"words":9628},"filePathRelative":"interview/core/0x07.thread.md","localizedDate":"2024年1月7日","autoDesc":true}');export{e as data};
