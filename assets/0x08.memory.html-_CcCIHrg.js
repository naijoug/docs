import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as i,a,f as o}from"./app-6ik61Qih.js";const d={},t=o('<h2 id="内存分区" tabindex="-1"><a class="header-anchor" href="#内存分区" aria-hidden="true">#</a> 内存分区</h2><h3 id="❓介绍下内存的几大区域" tabindex="-1"><a class="header-anchor" href="#❓介绍下内存的几大区域" aria-hidden="true">#</a> ❓介绍下内存的几大区域</h3><details class="hint-container details"><summary>💡</summary><ul><li><p><strong>代码区（Text Section）</strong>：这里存储的是程序的机器代码，也就是编译后的二进制代码，执行的指令通常都存储在这个区域。</p></li><li><p><strong>数据区（Data Section）/静态区</strong>：用于存储程序运行期间的全局变量和静态变量。静态存储区，在程序的生命周期内，始终存在。它包含了全局变量区和静态变量区，全局区中存放的是全局数据，静态数据区中存放的是 <code>static</code> 数据。</p></li><li><p><strong>堆区（Heap）</strong>：这部分的内存是动态分配的，也就是说，当你在程序中创建一个新的对象时，新的内存就会在堆内存中被分配（如 <code>C/C++</code> 中的 <code>malloc/new</code>，<code>Java</code> 中的 <code>new</code>），当不再需要这部分内存时，它会被回收（如 <code>C/C++</code> 中的 <code>free/delete</code>，<code>Java</code> 中由 <code>GC</code> 自动回收）。</p></li><li><p><strong>栈区（Stack）</strong>：用于存储局部变量、函数参数等数据。当一个函数被调用时，一个新的栈帧会被创建，用来存储函数的局部变量和参数。当函数返回时，栈帧会被销毁。</p></li><li><p><strong>常量区</strong>：这部分内存通常存储常量值，如字符串常量、常量表达式等。</p></li><li><p><strong>BSS (Block Started by Symbol)</strong>：这部分内存用于存储未初始化的全局变量和静态变量。</p></li></ul><p>注意：不同的编程语言和操作系统可能有不同的内存布局，不同的编程语言对内存的管理也不同，例如，<code>C/C++</code> 允许手动管理内存而 <code>Java</code> 和 <code>Python</code> 等语言则使用垃圾回收机制。</p></details><h3 id="❓栈和堆有什么区别-反映在内存中地址中的区别是" tabindex="-1"><a class="header-anchor" href="#❓栈和堆有什么区别-反映在内存中地址中的区别是" aria-hidden="true">#</a> ❓栈和堆有什么区别，反映在内存中地址中的区别是</h3><details class="hint-container details"><summary>💡</summary><p>主要区别：</p><ul><li><p>存储内容：</p><ul><li>栈通常用于存储局部变量和函数调用的信息，如返回地址、参数等。</li><li>堆一般用于存储程序中动态分配的内存，如使用 <code>malloc</code> 或 <code>new</code> 分配的内存。</li></ul></li><li><p>存储结构：</p><ul><li>栈是一种具有特殊规则的线性表，只能在栈顶进行压栈和弹栈的操作。</li><li>堆是一种完全二叉树的结构，每个节点都大于等于（或小于等于）其子节点。</li></ul></li><li><p>存储方式：</p><ul><li>栈的存储方式为先进后出（FILO），即最后压入的元素最先弹出。</li><li>堆通常无特定顺序。</li></ul></li><li><p>内存管理：</p><ul><li>栈的内存由编译器自动分配和释放。</li><li>堆的内存需要程序员手动分配和释放，不正确的操作可能导致内存泄漏。</li></ul></li><li><p>内存大小：</p><ul><li>栈的空间大小比堆小，因为栈的空间大小在程序启动时就确定了。</li><li>堆的空间大小动态改变，可以分配相对较大的内存空间。</li></ul></li></ul><p>内存中区别：</p><ul><li>操作系统会把内存分为代码区，静态存储区，动态存储区（堆区和栈区）。堆区和栈区是动态存储区，用于存放动态分配的内存。</li><li>在大多数系统中，内存模型是从低地址到高地址。 <ul><li>低地址：存放代码区和静态存储区。</li><li>高地址：存放堆区和栈区，其中堆区从低地址开始向上增长，栈区从高地址开始向下增长。 <blockquote><p>在内存中，堆区和栈区是相邻，并且方向相反的，这样可以最大化利用内存，当两者相遇时，就表示没有可用内存了。</p></blockquote></li></ul></li></ul></details><h3 id="❓栈和堆-哪个是连续的-哪个是不连续的" tabindex="-1"><a class="header-anchor" href="#❓栈和堆-哪个是连续的-哪个是不连续的" aria-hidden="true">#</a> ❓栈和堆，哪个是连续的，哪个是不连续的</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>栈内存是连续的，这是因为栈在内存中的分布是连续的，在编译期就已经确定了。栈中数据的存储是有序的，除非出现缓冲区溢出的异常情况。</p></li><li><p>堆内存是不连续的。堆内存是在运行期由程序动态申请的，可能申请的内存地址在物理内存中不连续，它们是通过指针连接在一起的。</p></li></ul></details><h3 id="❓为什么堆的访问速度比栈慢" tabindex="-1"><a class="header-anchor" href="#❓为什么堆的访问速度比栈慢" aria-hidden="true">#</a> ❓为什么堆的访问速度比栈慢</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>内存分配：</p><ul><li>栈上分配内存非常快，只需要移动栈顶指针。</li><li>堆上分配内存需要寻找足够大的连续空闲区域，这是一个时间复杂度较高的操作（尤其当堆变得碎片化时）。</li></ul></li><li><p>内存管理：</p><ul><li>栈的内存管理非常简洁，函数调用栈释放栈帧的机制使得栈无需进行额外的垃圾收集。</li><li>堆的内存管理由程序员手动或垃圾收集器负责，清理无用内存和防止内存泄漏是一项消耗资源的任务。</li></ul></li><li><p>空间局部性：</p><ul><li>栈使用的是 <code>LIFO</code>（后进先出）方式，空间局部性强，更符合 <code>CPU</code> 缓存的工作特性，因此命中率更高。</li><li>堆的释放顺序不固定，空间局部性较差，可能导致缓存命中率降低。</li></ul></li><li><p>多线程环境：</p><ul><li>每个线程都有自己的栈，所以栈的访问速度较快。</li><li>堆是所有线程共享的，需要考虑同步机制，这可能会影响访问速度。</li></ul></li></ul><p>注：虽然堆的访问速度可能比栈慢，但是堆的灵活性更高，能动态分配和释放内存，且空间大小受限于整个程序的可用内存，而非单个函数或线程。因此，堆在程序开发中发挥了非常重要的作用。</p></details><h3 id="❓栈区地址排列是从低到高吗" tabindex="-1"><a class="header-anchor" href="#❓栈区地址排列是从低到高吗" aria-hidden="true">#</a> ❓栈区地址排列是从低到高吗</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>不是。相对于整个内存空间，栈区的物理地址布局由操作系统决定，操作系统可以决定从高地址开始向低地址分配，也可以决定从低地址开始向高地址分配。</p></blockquote><p>在大多数系统中，栈区地址是<strong>从高向低</strong>分配的。也就是说，每当在栈上分配新的空间（如函数调用产生新的栈帧或创建局部变量时），栈指针通常会向下（即向内存地址更小的方向）移动。</p><p>重要的是要明白，各个变量在栈上的相对位置关系是确定的，无论绝对的栈空间是向低地址扩张还是向高地址扩张。例如，一个函数内部的各个局部变量，在相对于该函数开始地址（函数的栈帧起始地址）的位置是确定的，每次函数调用都会有类似的布局。</p><blockquote><p><strong>从高向低</strong>的原因：</p></blockquote><p>主要考虑的是性能与兼容性等问题。栈和堆在地址空间中通常是相邻的，<strong>堆区</strong>地址<strong>从低向高</strong>分配，<strong>栈区</strong>地址<strong>从高向低</strong>分配。</p><ul><li>两者相向而行，有效地利用了处理器的地址空间。哪一部分超出了分配的限制（即堆和栈发生溢出），都能直接触发处理器的地址保护机制。</li><li>如果反过来，需要额外的机制来检测栈是否溢出，这在早期的系统设计中会带来额外的复杂度。</li></ul></details><h3 id="❓内存中存在栈区和堆区-数据结构中存在栈和堆-那么这两者有什么关系" tabindex="-1"><a class="header-anchor" href="#❓内存中存在栈区和堆区-数据结构中存在栈和堆-那么这两者有什么关系" aria-hidden="true">#</a> ❓内存中存在栈区和堆区，数据结构中存在栈和堆，那么这两者有什么关系</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>内存栈区，确实底层工作方式使用了栈的数据结构。</p><blockquote><p>遵循后进先出 <code>LIFO</code>(Last In First Out) 的原则。函数调用过程中，局部变量会被压入栈区，函数调用结束后，会从栈顶弹出。这也是栈区访问效率高于堆区的原因。</p></blockquote></li><li><p>内存堆区，其实与堆这种数据结构就没有太大关系了。</p><blockquote><p><code>heap</code> 在英语中表示一堆、许多的意思，表示一堆可以供程序员自由支配使用的内存区域。堆区的内存分配管理方案就与底层的操作系统以及所使用的编程语言有关了。使用的数据结构包括链表、位图、平衡二叉搜素树等。常用的内存分配算法：最佳适配算法、最差适配算法、首次适配算法、循环首次适配算法等。</p></blockquote></li></ul></details><h2 id="内存寻址" tabindex="-1"><a class="header-anchor" href="#内存寻址" aria-hidden="true">#</a> 内存寻址</h2><h3 id="❓内存寻找方式" tabindex="-1"><a class="header-anchor" href="#❓内存寻找方式" aria-hidden="true">#</a> ❓内存寻找方式</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>内存寻址规定了如何在计算机的物理内存中的具体位置找到指定的数据。</p></blockquote><p>寻址方式：</p><ul><li><p>直接寻址：指令中给出需要访问的内存单元的绝对地址，<code>CPU</code> 直接根据该地址进行访问。</p></li><li><p>间接寻址：指令中给出的并不是所要访问的内存单元的绝对地址，而是一个包含所要访问的内存单元地址的指针。<code>CPU</code> 先访问该指针来获取内存单元的实际地址，然后再访问该内存单元。</p></li><li><p>基址寻址：先取基址寄存器中的内容与指令中的相对地址相加得出实际地址，然后按此地址寻找所需信息。基址寻址实现了内存的动态重定位。</p></li><li><p>变址寻址：先取变址寄存器中的内容与指令中的相对地址相加得出实际地址，然后按此地址寻找所需信息。变址寻址主要用于实现循环和数组的处理。</p></li><li><p>相对寻址：所要访问的内存单元的地址等于 <code>PC</code>（程序计数器）里的内容与指令中给定的位移相加。此寻址方式常用于转移指令中，实现程序的分支。</p></li><li><p>段地址寻址：在 <code>x86</code> 体系结构中，一种特殊的寻址方式。<code>实际的内存地址 = 段地址*16 + 偏移地址</code></p></li></ul></details><h3 id="❓一次寻址过程会访问几次内存" tabindex="-1"><a class="header-anchor" href="#❓一次寻址过程会访问几次内存" aria-hidden="true">#</a> ❓一次寻址过程会访问几次内存</h3><details class="hint-container details"><summary>💡</summary><p>一次寻址过程通常访问一次内存。寻址就是通过地址找到存储器中相应的存储单元。</p><ul><li><p>直接寻址，地址是操作数本身的情况，此寻址方式只访问内存一次。你有一个地址，你直接访问这个地址的内容，就完成了寻址过程。</p></li><li><p>其他复杂的寻址模式，如间接寻址，访问内存的次数可能会增加。间接寻址是指先从一个地址读出另一个地址，然后再从该地址读取(或者写入)数据，这样的寻址方式需要访问内存两次。</p></li></ul><p>总结：访问内存的次数取决于具体的寻址方式。但在大多数情况下，一次寻址操作会访问一次内存。</p></details><h3 id="❓什么是内存对齐" tabindex="-1"><a class="header-anchor" href="#❓什么是内存对齐" aria-hidden="true">#</a> ❓什么是内存对齐</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>内存对齐（<code>Memory Alignment</code>）是计算机内存分配的一种策略，主要是为了提高内存存取的效率。内存对齐也并非没有代价，它会浪费一部分内存。但这种浪费通常被认为是可以接受的，因为带来的好处比损失更大。</p></blockquote><p>在许多计算机体系结构中，直接访问对齐的内存比访问未对齐的内存要快。原因是，<code>CPU</code> 从内存或高速缓存中取数据时，一次能取的最小单位是字（<code>Word</code>）。一个字通常是一个 <code>int</code> 的大小（取决于平台，可以是 32 位或 64 位）。</p><p>所谓的对齐，就是让变量的起始地址能够被字的长度整除。例如，地址为0，4，8，12的变量都是对齐的，而地址为2，6等的变量则是未对齐的。未对齐的变量可能跨越两个字，<code>CPU</code> 需要进行两次内存访问才能将其取出，因此效率低下。</p><p>🌰 假设字长为 4 字节</p><ul><li><p>如果在地址 2 处访问一个 <code>int</code>，那么 <code>CPU</code> 需要：</p><ul><li>从地址 0 读取一个字；</li><li>从地址 4 读取一个字；</li><li>合并以上两个字，然后屏蔽不需要的部分。</li></ul></li><li><p>如果在地址 4 处访问一个 <code>int</code>，那么 <code>CPU</code> 只需要从地址 4 读取一个字。</p></li></ul></details><hr><h2 id="内存错误" tabindex="-1"><a class="header-anchor" href="#内存错误" aria-hidden="true">#</a> 内存错误</h2><h3 id="❓什么情况下会发生-栈溢出" tabindex="-1"><a class="header-anchor" href="#❓什么情况下会发生-栈溢出" aria-hidden="true">#</a> ❓什么情况下会发生“栈溢出”</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>“栈溢出”：一种常见的程序执行错误，发生在程序试图使用超过了栈的大小限制的内存时。程序运行时，操作系统会分配一块固定大小的内存作为栈区。如果递归层数较多、申请临时变量过大等都可能触发栈溢出的问题。</p></blockquote><p>原因：</p><ul><li><p><strong>无限递归或深度过大的递归</strong>：每次函数调用都需要在栈上分配内存用于存储函数的信息（如返回地址，局部变量等）。如果存在无限的递归调用或者递归深度过大，就可能会耗尽栈的空间。</p></li><li><p><strong>过大的局部变量</strong>：如果你在一个函数中声明了一个非常大的局部数组或者其他数据结构，可能会超出栈的大小，触发栈溢出。</p></li><li><p><strong>过多的函数调用层级</strong>：如果一个函数调用另一个函数，然后又调用另一个函数，层级太多的话，可能会超出栈空间。</p></li><li><p><strong>操作系统栈空间分配问题</strong>：在某些特殊情况下，由于操作系统的内存分配问题，栈的空间可能会小于正常情况，也会引发栈溢出。</p></li></ul><p>解决方案：</p><ul><li>避免过深的递归</li><li>避免过大的栈对象</li><li>避免过多的函数层级。</li><li>合理地设定启动参数中的栈大小也是一种有效的方法。</li><li>在有些情况下，可以考虑将部分数据结构从栈区移到堆区，例如使用动态分配内存的方式来创建大型数组。</li></ul></details><h3 id="❓什么情况下会发生-内存不足" tabindex="-1"><a class="header-anchor" href="#❓什么情况下会发生-内存不足" aria-hidden="true">#</a> ❓什么情况下会发生“内存不足”</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>“内存不足”：堆区内存大小，是可以动态扩容的。但是这个大小也是有限，当程序发生内存泄漏，申请堆区内存不断增长，当达到操作系统设自动的内存阈值，就会触发内存不足的问题。</p></blockquote><p>原因：</p><ul><li><p><strong>程序申请的内存超出系统能提供的上限</strong>：如果程序试图动态申请超出系统可提供的内存，将会抛出内存不足的错误。这通常发生在程序加载大文件、创建大数组或大对象等时。</p></li><li><p><strong>内存泄漏</strong>：程序没有正确地释放不再需要的内存，导致可用内存逐渐减少，最后导致内存不足。</p></li><li><p><strong>高内存消耗程序</strong>：某些程序需要大量内存来处理任务，比如大数据处理、高清视频处理或大型游戏等。这些程序运行时如果可用内存不足，也会引发内存不足的错误。</p></li><li><p><strong>过多的程序同时运行</strong>：如果开启过多的程序，系统的可用内存可能会被耗尽，导致程序无法获取足够的内存来运行。</p></li><li><p><strong>虚拟内存设置不当</strong>：操作系统通常会使用硬盘空间作为虚拟内存来临时存储数据，如果虚拟内存设置不足，也可能导致内存不足的错误。</p></li></ul><p>解决方案：</p><ul><li>关闭不需要的应用</li><li>优化程序中的内存使用方式</li><li>增加物理内存</li><li>调整虚拟内存设置</li><li>对于内存泄漏问题要通过调试和内存分析工具寻找并修复代码中的内存管理错误。</li></ul></details><hr><h2 id="内存计算" tabindex="-1"><a class="header-anchor" href="#内存计算" aria-hidden="true">#</a> 内存计算</h2><h3 id="❓一张图片的内存占用大小是由什么决定的" tabindex="-1"><a class="header-anchor" href="#❓一张图片的内存占用大小是由什么决定的" aria-hidden="true">#</a> ❓一张图片的内存占用大小是由什么决定的</h3><details class="hint-container details"><summary>💡</summary><p>图片在内存中占据的空间大小由其分辨率、颜色深度（<code>bits per pixel</code> - <code>BPP</code>）和压缩方法等因素决定。</p><p>决定因素：</p><ul><li>图片尺寸(分辨率)：图片的宽度和高度以像素为单位，宽度和高度相乘就是图片的像素总数。</li><li>每个像素的位数：取决于图像的颜色深度（彩色类型）。 <blockquote><p>彩色图片颜色深度一般为 <code>24bit</code>（即 3 字节，<code>RGB</code> 各 <code>8bit</code>）或 <code>32bit</code>（即 4 字节，<code>RGBA</code> 各 <code>8bit</code>）</p></blockquote></li></ul><p>未压缩图片计算公式：<code>内存占用（字节） = 宽度（像素） * 高度（像素） * 颜色深度（字节）</code></p><p>🌰 一张 <code>1024 * 768</code> 像素，颜色深度为 <code>32bit</code> (每个像素 4 个字节）的图片，其内存占用大概为：<code>1024 * 768 * 4 = 3145728 = 3,145,728byte ≈ 3MB。</code></p><p>注意：这是未经压缩的情况，实际中许多图片格式（如<code>JPEG</code>，<code>PNG</code> 等）都使用了压缩算法，实际占用的内存大小会小于这个计算结果。同时，如果程序使用了图像金字塔、缩略图等技术，那么实际占用的内存也会有所不同。</p></details><h3 id="❓如何计算一个像素点的大小和一张图的大小" tabindex="-1"><a class="header-anchor" href="#❓如何计算一个像素点的大小和一张图的大小" aria-hidden="true">#</a> ❓如何计算一个像素点的大小和一张图的大小</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>一个像素点的大小：取决于图片的颜色模式或位深度。</p><blockquote><p>例如，如果一个图像是 8 位索引色彩的（即使用颜色查找表），那么一个像素点就是 1 字节；如果图像是 24 位真彩色的，那么每个像素点是 3 字节（每种颜色信道 8 位，红、蓝、绿各一）；如果是 32 位 <code>RGBA</code> 模式的图片，一个像素点是 4 字节。</p></blockquote></li><li><p>一张图的大小的计算公式：<code>图像大小(字节) = 图像宽度（像素） x 图像高度（像素） x 每个像素的字节数</code></p><blockquote><p>这是计算原始未压缩图像大小的方式，如果图像进行了压缩（比如 <code>jpg</code>，<code>png</code> 等格式），那么实际的文件大小则会根据压缩算法和压缩比率有所减小。</p></blockquote></li></ul></details><h3 id="❓一张-100-100-的-rgba-格式的图片占用多少内存" tabindex="-1"><a class="header-anchor" href="#❓一张-100-100-的-rgba-格式的图片占用多少内存" aria-hidden="true">#</a> ❓一张 100*100 的 RGBA 格式的图片占用多少内存</h3><details class="hint-container details"><summary>💡</summary><ul><li>首先计算每个像素点占用内存，<code>RGBA</code> 格式的图片占用 4 个字节</li><li>然后计算图片大小为 <code>100*100 = 10000</code> 像素点 (≈ 10240 = 10 * 1024 = 10kb)</li><li>所以最后结果为: 4 * 10kb = 40kb</li></ul></details>',34);function c(r,s){return l(),i("div",null,[a(" more "),t])}const u=e(d,[["render",c],["__file","0x08.memory.html.vue"]]);export{u as default};