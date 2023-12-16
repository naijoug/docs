const e=JSON.parse('{"key":"v-73aa44a6","path":"/interview/ios/thread.html","title":"多线程","lang":"zh-CN","frontmatter":{"title":"多线程","icon":"hashtag","index":true,"order":7,"description":"线程安全 ❓atomic 线程安全吗？ 💡 atomic 属性只保证属性 setter 和 getter 的原子操作，以防止数据被多个线程同时写入或者在写入过程中被另一个线程读取。然而，这并不能完全保证线程安全。 假设有两个线程 A 和 B，它们都尝试更新同一个数值。线程 A 读取该数值，然后在 A 执行写入操作之前，线程 B 也读取了该数值，并且写...","head":[["meta",{"property":"og:url","content":"https://naijoug.github.io/docs/docs/interview/ios/thread.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"多线程"}],["meta",{"property":"og:description","content":"线程安全 ❓atomic 线程安全吗？ 💡 atomic 属性只保证属性 setter 和 getter 的原子操作，以防止数据被多个线程同时写入或者在写入过程中被另一个线程读取。然而，这并不能完全保证线程安全。 假设有两个线程 A 和 B，它们都尝试更新同一个数值。线程 A 读取该数值，然后在 A 执行写入操作之前，线程 B 也读取了该数值，并且写..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-16T07:01:34.000Z"}],["meta",{"property":"article:author","content":"naijoug"}],["meta",{"property":"article:modified_time","content":"2023-12-16T07:01:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-16T07:01:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"naijoug\\",\\"url\\":\\"https://github.com/naijoug\\"}]}"]]},"headers":[{"level":2,"title":"线程安全","slug":"线程安全","link":"#线程安全","children":[{"level":3,"title":"❓atomic 线程安全吗？","slug":"❓atomic-线程安全吗","link":"#❓atomic-线程安全吗","children":[]},{"level":3,"title":"❓如果让你来实现属性的 atomic，如何实现？","slug":"❓如果让你来实现属性的-atomic-如何实现","link":"#❓如果让你来实现属性的-atomic-如何实现","children":[]},{"level":3,"title":"❓NSMutableArray 的线程安全性？","slug":"❓nsmutablearray-的线程安全性","link":"#❓nsmutablearray-的线程安全性","children":[]},{"level":3,"title":"❓OC 中的锁有哪些？","slug":"❓oc-中的锁有哪些","link":"#❓oc-中的锁有哪些","children":[]},{"level":3,"title":"❓swift 中的锁有哪些？","slug":"❓swift-中的锁有哪些","link":"#❓swift-中的锁有哪些","children":[]},{"level":3,"title":"❓自旋锁和互斥锁对比？","slug":"❓自旋锁和互斥锁对比","link":"#❓自旋锁和互斥锁对比","children":[]}]},{"level":2,"title":"GCD","slug":"gcd","link":"#gcd","children":[{"level":3,"title":"❓GCD 执行原理？","slug":"❓gcd-执行原理","link":"#❓gcd-执行原理","children":[]}]},{"level":2,"title":"线程设计","slug":"线程设计","link":"#线程设计","children":[{"level":3,"title":"❓iOS 中如何创建一个常驻线程？","slug":"❓ios-中如何创建一个常驻线程","link":"#❓ios-中如何创建一个常驻线程","children":[]},{"level":3,"title":"❓Timer 定时器准确吗？如果不准确该怎样实现一个精确的 Timer?","slug":"❓timer-定时器准确吗-如果不准确该怎样实现一个精确的-timer","link":"#❓timer-定时器准确吗-如果不准确该怎样实现一个精确的-timer","children":[]}]}],"git":{"createdTime":1702384983000,"updatedTime":1702710094000,"contributors":[{"name":"naijoug","email":"naijoug@outlook.com","commits":3}]},"readingTime":{"minutes":10.69,"words":3208},"filePathRelative":"interview/ios/thread.md","localizedDate":"2023年12月12日","autoDesc":true}');export{e as data};