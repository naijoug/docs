import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as d,c,a as n,b as e,e as t,d as r,f as l}from"./app-86YT7tYj.js";const s={},h=l('<p>大多数据编程语言来说，基础的数据类型就是 <code>int</code>、<code>float</code>、<code>double</code>、<code>char</code>、<code>string</code>、<code>bool</code>。基础数据结构就是：数组、链表。高级一点的数据结构有：栈、队列、集合、哈希表。再复杂一些的有：二叉树、图。</p><p>宏观一点理解，数据结构是用来描述这些基础数据类型内存布局，也可以理解为是基础数据类型的容器。而最为底层的数据结构就是数组和链表，数组是描述了一块存储相同数据类型的连续内存空间，而链表则是存储数据类型并通过指针连接的非连续内存空间。而且其它的数据结构都是基于数组和链表来实现的一种数据结构的描述。例如栈、队列、二叉树、图，可以通过数组实现，也可以通过链表实现；哈希表则是通过数组和链表结合实现。</p><h2 id="数据结构到底是什么" tabindex="-1"><a class="header-anchor" href="#数据结构到底是什么" aria-hidden="true">#</a> 数据结构到底是什么？</h2><ul><li>线性表 (Linear List) : 数据的排列特征是按照一条线排列。数组、链表、栈、队列。栈和队列是操作受限的线性表。</li><li>非线性表 : 数据排布非线性结构。二叉树、堆、图。</li></ul><table><thead><tr><th>Data Structure</th><th>说明</th></tr></thead><tbody><tr><td>Array</td><td>数组</td></tr><tr><td>LinkedList</td><td>链表</td></tr><tr><td>Stack / Queue</td><td>栈 / 队列</td></tr><tr><td>BinaryTree / Tree</td><td>二叉树 / 树</td></tr><tr><td>Graph</td><td>图</td></tr><tr><td>HashTable</td><td>哈希表</td></tr><tr><td>Set / DisjointSet</td><td>集合 / 并查集</td></tr><tr><td>Trie</td><td>字典树</td></tr><tr><td>BloomFilter</td><td>布隆过滤器</td></tr></tbody></table><h2 id="array-数组" tabindex="-1"><a class="header-anchor" href="#array-数组" aria-hidden="true">#</a> <code>Array</code> - “数组”</h2>',6),u={href:"https://github.com/apple/swift/blob/swift-DEVELOPMENT-SNAPSHOT-2023-10-30-a/stdlib/public/core/Array.swift",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/apple/swift-corelibs-foundation/blob/main/Sources/Foundation/NSArray.swift",target:"_blank",rel:"noopener noreferrer"},b=l('<blockquote><p>为什么大部分编程语言中的数组下标都是从 0 开始？</p></blockquote><p>这个与数组的结构特性和内存寻址有关系。数组是一块存储相同类型数据的连续内存空间，而数组的指针或引用是指向数组的一个元素的。访问数组其它位置的元素就是计算其位置的指针地址，如果第一元素下标为 0，则寻址公式为：<code>a[i] = a0 + i * dataSize</code>。如果下标是从 1 开始，则寻址公式为：<code>a[i] = a1 + (i - 1) * dataSize</code>。可以看出如果下标为 0，寻址公式少了一次减法运算，提高了数组的访问效率。</p><blockquote><p>为什么数组访问效率优于链表？</p></blockquote><p>归根到底是因为数组分配的一块连续内存。原因可以从两方面分析。其一是数组的访问的可以直接通过下标计算出元素地址，到达了 <code>O(1)</code> 的时间复杂度，而链表访问数据需要遍历整个链表时间复杂度为 <code>O(n)</code>。其二是 <code>CPU</code> 的缓存机制，因为 <code>CPU</code> 访问数据时为了提高效率，每次读取数据时并不是只读指定地址内存，而是读取一个内存块保存到 <code>CPU</code> 缓存中。以数组来说会将数组后面的数据以加载到 <code>CPU</code> 缓存中，当再次读取数组元素时会直接中缓存中读取。</p><h2 id="linked-list-链表" tabindex="-1"><a class="header-anchor" href="#linked-list-链表" aria-hidden="true">#</a> <code>Linked List</code> - “链表”</h2><p>链表是将一堆零散的内存空间串联起来的数据结构，不需要内存空间连续。链表的数据结构，除了存储数据外，还需存储指向下一个节点的指针。</p><ul><li>单链表</li><li>双向链表</li><li>循环链表</li></ul><blockquote><p>数组可以实现链表吗？</p></blockquote><p>可以使用两个数组实现。一个数据数组，一个节点数组(对应数据数组的索引，值为下一个节点的索引)。</p><blockquote><p>带头链表的好处？</p></blockquote><p>带头链表可以简化链表的添加、删除操作。如果是不带头链表，添加时需要判断链表为空的情况，删除时需要判断链表仅剩一个节点的情况。</p><ul><li>不带头链表 : 链表头节点指向链表的第一个数据节点。链表为空时，头结点为空。</li><li>带头链表 : 会有一个不包含数据的节点，头结点一直指向这个节点。链表为空时，也会包含这个头结点。</li></ul><h2 id="stack-栈" tabindex="-1"><a class="header-anchor" href="#stack-栈" aria-hidden="true">#</a> <code>Stack</code> - “栈”</h2><p>栈是一种先进后出的数据结构，主要包含两个操作，入栈(<code>push</code>)和出栈(<code>pop</code>)。入栈，在栈顶添加元素；出栈，在栈顶移除元素。</p><blockquote><p>栈的实现？</p></blockquote><p>栈的实现核心是通过维护栈顶指针来进行栈操作。</p><ul><li>顺序栈 : 使用数组实现栈</li><li>链式栈 : 使用链表实现栈</li></ul><blockquote><p>栈有哪些使用场景？</p></blockquote><ul><li>函数调用栈 : 函数调用时，在函数作用域内的局部变量，数据的内存分配刚好符合栈先进先出的特性。</li><li>表达式求值</li><li>括号匹配</li><li>浏览器的前进和后退功能</li></ul><h2 id="queue-队列" tabindex="-1"><a class="header-anchor" href="#queue-队列" aria-hidden="true">#</a> <code>Queue</code> - “队列”</h2><p>队列是一种先进先出的数据结构。主要包含两个操作，入队(<code>enqueue</code>)和出队(<code>dequeue</code>)。入队，在队列尾部添加元素；出队，在队列头部移除元素。</p>',21),f={href:"https://github.com/apple/swift-collections/blob/main/Sources/DequeModule/Deque.swift",target:"_blank",rel:"noopener noreferrer"},_=l('<blockquote><p>队列的实现？</p></blockquote><p>堆列的实现核心是通过队头指针和队尾指针来进行队列操作。</p><ul><li>顺序队列 : 使用数组实现队列</li><li>链式队列 : 使用链表实现队列</li></ul><blockquote><p>高级队列</p></blockquote><ul><li>循环队列 : 一般使用数组实现，解决的数组队列的在删除数据时的数据迁移问题，在实际应用广泛。</li><li>阻塞队列 : 在队列操作中加入阻塞逻辑就是阻塞队列。入队时如果队列已满则阻塞，等待队列有空位置再入队；出队时如果队列为空则阻塞，等队列有数据时再出队。“生产者-消费者”就是基于阻塞队列实现。</li><li>并发队列 : 多线程的情况下会有多个线程同时访问队列的情况，就会存在线程安全问题，而加入解决多线程访问安全问题的队列的就是并发队列。 <ul><li>解决多线程并发最普遍的解决方案，在入队操作和出队操作时，进行加锁。</li><li>基于数组的循环队列 + <code>CAS</code> 原子操作就可以高效的实现并发队列。</li></ul></li></ul><blockquote><p>队列有哪些使用场景？</p></blockquote><ul><li>线程池</li><li>数据库连接池</li><li>(分布式)消息队列 : <code>kafaka</code></li></ul><h2 id="hash-table-哈希表" tabindex="-1"><a class="header-anchor" href="#hash-table-哈希表" aria-hidden="true">#</a> <code>Hash Table</code> - “哈希表”</h2>',8),k={href:"https://github.com/apple/swift-corelibs-foundation/blob/main/CoreFoundation/Collections.subproj/CFDictionary.c",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/apple/swift/blob/main/stdlib/public/core/Dictionary.swift",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"ordered-hash-table-有序哈希表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ordered-hash-table-有序哈希表","aria-hidden":"true"},"#"),t(),e("code",null,"Ordered Hash Table"),t(" - “有序哈希表”")],-1),y={href:"https://github.com/apple/swift-collections/blob/main/Sources/OrderedCollections/OrderedDictionary/OrderedDictionary.swift",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/LinkedHashMap.java",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/python/cpython/blob/main/Lib/collections/__init__.py#L83",target:"_blank",rel:"noopener noreferrer"},w=l('<h2 id="binary-tree-二叉树" tabindex="-1"><a class="header-anchor" href="#binary-tree-二叉树" aria-hidden="true">#</a> <code>Binary Tree</code> - “二叉树”</h2><blockquote><p><code>Balanced Binary Tree</code> - “平衡二叉树”</p></blockquote><p>平衡二叉树需要保证左右子树高度差不超过 1。</p><p>常见的平衡二叉树</p><ul><li><code>AVL</code> 二叉树 (名称来源于两位作者名 G. M. Adelson-Velsky 和 E. M. Landis)</li><li>红黑树</li></ul><blockquote><p>搜索二叉树</p></blockquote><h2 id="heap-堆" tabindex="-1"><a class="header-anchor" href="#heap-堆" aria-hidden="true">#</a> <code>Heap</code> - “堆”</h2>',7),x={href:"https://github.com/apple/swift-collections/blob/main/Sources/HeapModule/Heap.swift",target:"_blank",rel:"noopener noreferrer"};function L(D,C){const o=i("ExternalLinkIcon");return d(),c("div",null,[n(" more "),h,e("ul",null,[e("li",null,[e("a",u,[t("Swift Array"),r(o)])]),e("li",null,[e("a",p,[t("NSArray"),r(o)])])]),b,e("ul",null,[e("li",null,[e("a",f,[t("Swift - Deque"),r(o)])])]),_,e("ul",null,[e("li",null,[e("a",k,[t("NSDictionary"),r(o)])]),e("li",null,[e("a",m,[t("Swift- Dictionary"),r(o)])])]),q,e("ul",null,[e("li",null,[e("a",y,[t("Swift - OrderedDictionary"),r(o)])]),e("li",null,[e("a",S,[t("Java - LinkedHashMap"),r(o)])]),e("li",null,[e("a",g,[t("Python - OrderedDict"),r(o)])])]),w,e("ul",null,[e("li",null,[e("a",x,[t("Swift - Heap"),r(o)])])])])}const H=a(s,[["render",L],["__file","data-structure.html.vue"]]);export{H as default};
