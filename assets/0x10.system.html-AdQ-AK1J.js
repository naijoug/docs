import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as o,a as s,f as c}from"./app-NPdVLJBN.js";const n={},d=c(`<hr><h2 id="虚拟内存" tabindex="-1"><a class="header-anchor" href="#虚拟内存" aria-hidden="true">#</a> 虚拟内存</h2><h3 id="❓-虚拟内存-是什么" tabindex="-1"><a class="header-anchor" href="#❓-虚拟内存-是什么" aria-hidden="true">#</a> ❓“虚拟内存”是什么</h3><details class="hint-container details"><summary>💡</summary><blockquote><p><code>Virtual Memory</code> - “虚拟内存”：是一种内存管理技术，其被广泛应用在现代计算机操作系统中。原本计算机内存空间有限，为了解决程序运行空间不足的问题，虚拟内存技术应运而生。它将内存和磁盘存储器共同作为程序运行的存储空间，从而让系统能够获得更大的可用内存。</p></blockquote><p>具体来讲，操作系统将内存离散分割为大小固定的页或段，然后创建一个页表或段表来管理它们。这些页或段中的一部分存放在内存中，其他的存放在磁盘上。当程序需要访问的内存页不在内存中（即发生缺页）时，操作系统会从磁盘上调入需要的内存页并换出一些不常用的内存页。这个过程被称为页面调度或页面交换。</p><p>虚拟内存技术使得程序无需关心物理内存的实际大小，而可以利用到远大于物理内存的地址空间，这大大提高了物理内存的使用效率并方便了程序的编写。同时，这也是实现内存保护、多任务系统、分布式系统等现代操作系统功能的基础。</p></details><h3 id="❓虚拟内存与物理内存的区别" tabindex="-1"><a class="header-anchor" href="#❓虚拟内存与物理内存的区别" aria-hidden="true">#</a> ❓虚拟内存与物理内存的区别</h3><details class="hint-container details"><summary>💡</summary><p>概念知识：</p><ul><li><p>虚拟内存：是操作系统提供的一种内存抽象。系统会为每个进程提供一块独立的、连续的虚拟内存空间，而该空间的大小并不受物理内存大小的约束。当程序运行时，操作系统会将虚拟内存中的内容按需载入到物理内存中，而那些未被使用或者暂时不被使用的内容则可能被存放在硬盘的交换空间当中。</p></li><li><p>物理内存：是计算机系统中真实存在的内存，也就是常说的 <code>RAM</code>。物理内存的大小是固定的，并且它在线程执行时用于存放线程的代码、数据和栈。</p></li></ul><p>主要区别：</p><ul><li><p>内存大小</p><ul><li>虚拟内存是由操作系统提供的一种内存抽象，其大小可以超过物理内存的大小。</li><li>物理内存是真实存在的，其大小固定。</li></ul></li><li><p>存储内容</p><ul><li>虚拟内存在线程执行时，只有需要用到的部分（也就是已经被映射到物理内存上的部分）才会在物理内存中有对应的存储。</li><li>物理内存在线程执行时用于存放线程的代码、数据和栈。</li></ul></li><li><p>寻址过程：虚拟内存通过内存分页技术，将程序的地址空间分为很多小的页面，只有当这些页面被程序访问时，才会映射到物理内存上。这使得程序可以运行在比实际物理内存大的地址空间中。</p></li></ul><p>注：虚拟内存的主要优点是抽象化了内存，使得每个程序都认为自己有非常大的内存空间可用，并且可以实现内存的有效分配和保护。而物理内存则是所有程序和操作系统进行计算和数据存储的实际载体。</p></details><h3 id="❓一个程序当中的地址是虚拟地址还是物理地址" tabindex="-1"><a class="header-anchor" href="#❓一个程序当中的地址是虚拟地址还是物理地址" aria-hidden="true">#</a> ❓一个程序当中的地址是虚拟地址还是物理地址</h3><details class="hint-container details"><summary>💡</summary><p>在一个程序中，操作系统为其提供的都是虚拟地址，而非物理地址。</p><p>在一个典型的现代计算机系统中，硬件（例如中央处理器）和操作系统之间的交互会使用物理地址，但是你编写的程序实际上并不直接使用物理地址。相反，每一个运行的程序都认为它拥有自己的一段连续的、专有的地址空间，即虚拟地址空间。</p><p>运行一个程序时，该程序看到的每一个内存访问都被操作系统转换为对应的物理内存访问，这中间涉及到虚拟地址到物理地址的映射。这个映射过程是由硬件的内存管理单元（<code>MMU</code>，<code>Memory Management Unit</code>）加上操作系统内核进行管理的。这种处理方式旨在抽象硬件资源，暴露出一个方便编程的接口给程序开发者。</p><p><code>Virtual Memory</code>（虚拟内存）技术让每个程序都以为自己在使用全部的内存，而实际上物理内存会在许多程序之间动态分配和调度。这个抽象层非常有用，因为它使得每个程序不必考虑共享内存这个问题，它们只需要访问自己的地址空间就好了。</p></details><h3 id="❓得到一个虚拟地址后-怎么转成物理地址" tabindex="-1"><a class="header-anchor" href="#❓得到一个虚拟地址后-怎么转成物理地址" aria-hidden="true">#</a> ❓得到一个虚拟地址后，怎么转成物理地址</h3><details class="hint-container details"><summary>💡</summary><p>虚拟地址到物理地址的转化是通过硬件的内存管理单元（<code>MMU</code>）和由操作系统管理的页表（<code>Page table</code>）完成的。</p><p>虚拟地址被分为两部分：页号（<code>Page Number</code>）和页内偏移（<code>Offset</code>）。</p><ul><li><p>页号：用于在页表中查找对应的页框号。</p></li><li><p>页内偏移：表示在这个页框中的具体位置。</p></li></ul><p>转换过程：</p><ul><li><p>通过虚拟地址的页号部分在页表中查找对应的页框号。页表实际上就是一个结构数组，每个元素都包含一个物理页框的相关信息，其中就包括页框号。</p></li><li><p>在找到页框号之后，把它拼接在虚拟地址的页内偏移后面，就得到了完整的物理地址。</p></li></ul></details><h3 id="❓tlb-了解吗" tabindex="-1"><a class="header-anchor" href="#❓tlb-了解吗" aria-hidden="true">#</a> ❓<code>TLB</code> 了解吗</h3><details class="hint-container details"><summary>💡</summary><blockquote><p><code>TLB</code> (<code>Translation Lookaside Buffer</code>) 是一个硬件缓存，系统用 <code>TLB</code> 来改进和加速虚拟地址到物理地址的转换过程。</p></blockquote><p>操作系统通常使用一种叫做分页的内存管理技术，把虚拟地址空间和物理地址空间分割成大小相等的块，称为页面。这种页面映射一般会存储在内存中，但每次地址转换都访问这个映射的开销很大，因此 <code>TLB</code> 用于缓存最近使用过的映射，以减少访问内存的次数，加快地址转换速度。</p><p><code>TLB</code> 是一种依赖硬件支持的高速缓存，它提供了从虚拟内存到物理内存的快速转换，使得内存访问更加高效。</p></details><hr><h3 id="页表" tabindex="-1"><a class="header-anchor" href="#页表" aria-hidden="true">#</a> 页表</h3><h4 id="❓你是怎么理解页表的" tabindex="-1"><a class="header-anchor" href="#❓你是怎么理解页表的" aria-hidden="true">#</a> ❓你是怎么理解页表的</h4><details class="hint-container details"><summary>💡</summary><blockquote><p>页表是内存管理中非常重要的一个数据结构，它存储了虚拟地址和物理地址之间的映射关系。</p></blockquote><p>在操作系统中，每一个正在运行的进程都会有一个相关联的页表。当进程需要访问内存时（实际上进程看到的是虚拟内存），它会给出虚拟地址。这个虚拟地址会通过页表，转换为物理内存地址，然后才能在物理内存中访问到数据或指令。</p><p>页表的实现可能因操作系统而异。比如在一些系统中，页表可能是一个简单的线性数组；在其他系统（比如 <code>Linux</code>）中，页表可能是一个多级结构，这样可以节省大量未使用的虚拟地址空间对应的页表空间。</p><p>页表使得操作系统可以更方便地管理物理内存，为每个进程提供了一个连续的虚拟内存空间，而无论物理内存是否连续。此外，页表还可以用来实现内存保护，比如防止一个进程访问另一个进程的内存空间。</p><p>在硬件层面，内存管理单元（<code>MMU</code>）负责使用页表进行虚拟地址到物理地址的转换。页表通常存储在物理内存中，但当前使用的页表地址（即页表基址）会存储在一个特殊的处理器寄存器中。当发生上下文切换（<code>context switch</code>）时，操作系统会更新这个寄存器的值，以切换到新的页表。</p></details><h4 id="❓二级页表是什么" tabindex="-1"><a class="header-anchor" href="#❓二级页表是什么" aria-hidden="true">#</a> ❓二级页表是什么</h4><details class="hint-container details"><summary>💡</summary><blockquote><p>二级页表是一种内存管理的数据结构，用来将虚拟地址映射到物理地址。其主要目标是解决单级（一级）页表空间占用过大的问题。</p></blockquote><p>在单级页表中，虚拟地址空间通常被分割成固定大小的页，并为每个页维护一个页表项。因此，如果虚拟地址空间很大而实际使用的内存很小，就会造成大量的页表项浪费。</p><p>为了解决这个问题，可以采用二级页表。在二级页表中，虚拟地址被分为三部分：外层页表索引（也叫页目录索引），内层页表索引（也叫页表索引）和偏移。外层页表（也叫页目录）负责管理所有内层页表，而内层页表则负责管理实际的物理页帧。</p><p>二级页表寻址过程：</p><ul><li>首先使用外层页表索引在页目录中查找对应的内层页表。</li><li>然后用内层页表索引在该页表中查找对应的物理页帧。</li><li>最后将找到的页帧地址和原始的偏移拼接起来，就得到了物理地址。</li></ul></details><h4 id="❓内存分页和分段是什么样的" tabindex="-1"><a class="header-anchor" href="#❓内存分页和分段是什么样的" aria-hidden="true">#</a> ❓内存分页和分段是什么样的</h4><details class="hint-container details"><summary>💡</summary><ul><li><p>内存分页（<code>Paging</code>）：操作系统用以管理计算机内存的一种方法，它把物理内存抽象为一个个连续编号的页，每页的大小通常为 4 KB 或 8KB。</p><blockquote><p>分页的主要思想：将线性地址空间划分为大小固定且相等的页，通过页表来实现线性地址到物理地址的转换。每次读取或写入内存时，操作系统都会先查阅页表，找出线性地址对应的物理地址，并进行相应的读写操作。这种机制保证了每个任务（线程或进程）都有自己独立的地址空间，增强了安全性和稳定性，帮助解决了内存碎片的问题。</p></blockquote></li><li><p>内存分段（<code>Segmentation</code>）：操作系统的一种内存管理的方法，但它更注重在逻辑上分组和保护相关的内存区域。</p><blockquote><p>分段的主要思想：将线性地址空间按需分割成大小不等的段，每个段都有自己的起始地址和长度，段和段之间是相互独立的。隔与分页相比，分段更适合用于保护和离程序的不同部分，如代码段、数据段、栈段等。此外，由于是按需分割，分段也能更有效地利用内存空间。</p></blockquote></li></ul><p>注：在现代操作系统中，分页和分段往往会同时使用。例如在x86系统中，先使用分段将线性地址转为逻辑地址，再使用分页将逻辑地址转为物理地址。这样结合使用两者的方法，可以更好地管理和保护内存，提高系统的可靠性和性能。</p></details><blockquote><p>❓分段机制有什么缺点</p></blockquote><details class="hint-container details"><summary>💡</summary><ul><li><p>内存碎片问题：虽然分段机制可以减少内存中的“内部碎片”，但是随着程序的加载和卸载，会产生“外部碎片”，也就是段与段之间的未被使用的内存空间。如果这些空间过小，无法被新的段所利用，这就造成了内存的浪费。</p></li><li><p>段表管理开销：在分段机制中，操作系统需要为每个进程维护一个段表来记录每个段的基地址和界限。当进程数量增多，或者进程拥有的段数量很多时，这将带来不小的管理开销。</p></li><li><p>切换开销：每当 <code>CPU</code> 切换进程时，都需要更新段寄存器的内容，这会导致 <code>CPU</code> 时间的消耗。</p></li><li><p>管理复杂：分段机制需要操作系统有较为复杂的内存管理能力，对于操作系统来说，实现和管理起来相对比较困难。</p></li><li><p>跨段操作：如果需要进行跨段操作，分段机制相对复杂，需要修改更多的段表等信息。</p></li></ul></details><h4 id="❓页表在-linux-中怎么用的-页式、段式、段页式" tabindex="-1"><a class="header-anchor" href="#❓页表在-linux-中怎么用的-页式、段式、段页式" aria-hidden="true">#</a> ❓页表在 <code>Linux</code> 中怎么用的(页式、段式、段页式)</h4><details class="hint-container details"><summary>💡</summary><p><code>Linux</code> 操作系统使用了虚拟内存技术，页表是其核心组成部分。</p><p>在 <code>Linux</code> 中，每个运行中的程序（进程）都有一个与其关联的页表，来管理该程序的虚拟地址到物理地址的映射关系。当程序试图访问一个虚拟地址时，硬件的内存管理单元（<code>MMU</code>）会用这个页表来查找对应的物理地址。</p><p><code>Linux</code> 中的页表是一个多级的结构，这样设计的主要目的是为了节省内存。对于一个大的连续地址空间，如果使用单一的线性页表，会导致大量的页表条目浪费。而多级页表可以避免这种情况，只为实际使用到的虚拟地址分配页表条目。</p><p>三种内存管理方式：</p><ul><li><p>页式：这种方式下，虚拟空间和物理空间都被等分为大小固定的“页”（例如，1 KB 或 4 KB 的大小），每个虚拟页可以映射到任意的物理页中。这种方式简单且易于实现，但会产生内部碎片。</p></li><li><p>段式：这种方式下，将程序由含义分割为若干个逻辑的“段”，这些段的大小并不固定，每个段在内存中是连续的。此种方式可以解决内部碎片的问题，但可能产生外部碎片。</p></li><li><p>段页式：是页式与段式的结合。先将程序分割为若干个逻辑上独立的段，然后再将每一段细分为大小固定的页。这种方式需要两个级联的映射表，一个段表用来管理段，一个页表用来管理页。两级映射后，找到的是实际的物理地址。这种方式结合了页式和段式的优点，既能解决内外碎片问题，也符合程序的逻辑性和局部性原则。</p></li></ul><p>注：<code>Linux</code> 和许多现代操作系统采用的是改良的段页式，也就是 “多级页表” 方法进行内存管理。</p></details><h4 id="❓虚拟内存为什么会涉及到分页或分段" tabindex="-1"><a class="header-anchor" href="#❓虚拟内存为什么会涉及到分页或分段" aria-hidden="true">#</a> ❓虚拟内存为什么会涉及到分页或分段</h4><details class="hint-container details"><summary>💡</summary><p>虚拟内存是一种内存管理技术，它使得程序能够独立于物理内存大小进行操作。虚拟内存的规模并不受到物理内存大小的限制，而是由硬盘空间大小决定。这样每个程序都拥有自己的独立内存空间，从而有效地抽象出了每个程序自己的内存空间，使得程序理解并管理内存更加容易。</p><p>虚拟内存的实现通常涉及到分页或分段，这是由于虚拟内存通常将虚拟地址空间分为一些固定大小的区块，如&quot;页&quot;或&quot;段&quot;，每个区块对应物理内存中的某个区域。通过地址映射，虚拟内存的一个单位（页或段）可以被映射到物理内存的任何一处，这样就实现了逻辑内存（程序看到的内存）和物理内存的隔离。</p><p>分页和分段都是虚拟内存实现的一种方式：</p><ul><li><p>分页是将内存分为固定大小的页，每个页的大小一般为4K。分页的优点在于实现简单，页表结构清晰，且不存在外部碎片。但是可能会存在内部碎片，即一个页中的部分内存没有被利用。</p></li><li><p>分段是将内存按照逻辑单元进行划分，每个段的大小一般不同。分段能够更好地符合程序的逻辑结构，解决了内部碎片的问题，但是可能会存在外部碎片，即由于段与段之间的内存未被利用导致的碎片。</p></li></ul><p>无论是分页还是分段，它们的目的都是为了使得程序能够独立于物理内存操作，简化内存管理，提升了内存利用率和系统的性能。</p></details><h4 id="❓行间的换页算法有哪些" tabindex="-1"><a class="header-anchor" href="#❓行间的换页算法有哪些" aria-hidden="true">#</a> ❓行间的换页算法有哪些</h4><details class="hint-container details"><summary>💡</summary><blockquote><p>“行间的换页算法” 应该是指在虚拟内存系统中，当发生缺页中断，即要访问的页面不在内存中时，系统如何替换内存中的页面的策略。</p></blockquote><p>常见的换页算法：</p><ul><li><p>最佳适应算法（<code>Optimal Page Replacement Algorithm</code>）：这种方法是预测未来可能使用到的页面，将在最长时间内不会被访问的页面换出。虽然这种方法理论上可以得到最低的缺页率，但由于无法预知未来的访问模式，因此在实际系统中很难实现。</p></li><li><p>先进先出算法（<code>First-In-First-Out</code>, <code>FIFO</code>）：这种方法很简单，就是将最先调入内存的页面换出。这种方法易于实现，但可能会导致“<code>Belady</code> 现象”，即增加内存页面数反而导致缺页率增加。</p></li><li><p>最近未使用算法（<code>Least Recently Used</code>, <code>LRU</code>）：这种方法考虑到程序访问页面的局部性原理，选择最长时间未被访问的页面换出。这种方法获得了很好的效果，但需要操作系统记录页面的访问历史，因此实现起来较为复杂。</p></li><li><p>时钟算法（<code>Clock Algorithm</code>）：时钟算法是对 <code>FIFO</code> 和 <code>LRU</code> 的一种折中，通过为每个页面设置一位替换位(<code>R</code>)进行是否需要替换的判断，简化了 <code>LRU</code> 的操作复杂度，同时也避免了 <code>FIFO</code> 算法的 <code>Belady</code> 现象。</p></li></ul></details><hr><h2 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu" aria-hidden="true">#</a> CPU</h2><h3 id="❓cpu-是如何调用-gpu" tabindex="-1"><a class="header-anchor" href="#❓cpu-是如何调用-gpu" aria-hidden="true">#</a> ❓<code>CPU</code> 是如何调用 <code>GPU</code></h3><details class="hint-container details"><summary>💡</summary><p>图像的成像原理 : 计算中的图像的展示，需要 <code>CPU</code>、<code>GPU</code> 和显示器合作完成。<code>CPU</code> 负责计算图像哪些数据需要显示，<code>GPU</code> 负责将需要显示的图像数据渲染，然后放入缓存区，显示器读取缓存区数据将图像显示出来。</p><p><code>CPU</code> 通过与其相连的总线系统，向 <code>GPU</code> 发送指令和数据。这些指令和数据被存储在计算机内存中，由高级软件代码（如 <code>OpenGL</code> 或 <code>DirectX API</code>）组织和发送。当 <code>GPU</code> 接收到 <code>CPU</code> 的指令和数据，它会运行相应的图形处理程序或计算任务。</p><p>具体流程：</p><ul><li><p><code>CPU</code> 首先将图形数据和操作指令（以特定格式，如 <code>OpenGL</code> 或 <code>DirectX API</code> 中的调用）写入内存。这些数据可能包括顶点数据、纹理、渲染指令等。</p></li><li><p><code>CPU</code> 接着通过 <code>IO</code> 总线（如 <code>PCIe</code>）将这些操作指令和数据发送给GPU。</p></li><li><p><code>GPU</code> 接收到这些数据和指令后，将其载入内部的存储器，并开始按指令进行运算操作。</p></li><li><p>运算完后，<code>GPU</code> 将结果写回内存，此处内存可能是专门的显存，也可能是与 <code>CPU</code> 共享的内存。</p></li><li><p><code>CPU</code> 可通过操作系统或 <code>GPU</code> 驱动程序的接口进行查询，判断 <code>GPU</code> 是否已经完成任务。如果 <code>GPU</code> 已经完成任务，<code>CPU</code> 可以获取和使用结果数据。</p></li></ul></details><h3 id="❓cpu-和-gpu-是如何工作-为什么要双缓冲区" tabindex="-1"><a class="header-anchor" href="#❓cpu-和-gpu-是如何工作-为什么要双缓冲区" aria-hidden="true">#</a> ❓<code>CPU</code> 和 <code>GPU</code> 是如何工作，为什么要双缓冲区</h3><details class="hint-container details"><summary>💡</summary><p>基本功能：</p><ul><li><p><strong>CPU（Central Processing Unit）</strong>：计算机的主处理器，能够执行大部分的运算和逻辑操作。</p><blockquote><p><code>CPU</code> 通常负责彼此之间有依赖关系，需要按顺序执行的任务。</p></blockquote></li><li><p><strong>GPU（Graphics Processing Unit）</strong>：专门用于处理图形的处理器。</p><blockquote><p><code>GPU</code> 通常执行大量并行操作，例如渲染及光线追踪等。</p></blockquote></li></ul><blockquote><p>双缓冲区： 双缓冲相当于有两块画布，一块在前台展示，一块在后台绘制。当后台绘制完成后，将后台画布交换到前台，这样就能够确保每次屏幕刷新时，画面都是完整的，从而提高了渲染的效率和质量。</p></blockquote><p>在 <code>CPU</code> 和 <code>GPU</code> 的工作过程中，一种常见的模式是 <code>CPU</code> 负责准备渲染命令及所有相关的数据（如纹理、顶点数据等），然后将这些数据发送给 <code>GPU</code>。再由 <code>GPU</code> 执行实际的渲染操作——这包括图形的光栅化（把几何图形转换为像素格式）、纹理映射、混合等。</p><p>结论：一块缓冲区用于存储 <code>CPU</code> 的输出（即 <code>GPU</code> 的输入），另一块用于存储 <code>GPU</code> 的输出（即下一帧的图像）。这样的设计让 <code>CPU</code> 和 <code>GPU</code> 可以并行工作：当 <code>GPU</code> 在处理当前帧的渲染时，<code>CPU</code> 可以同时准备下一帧的数据。</p></details><hr><h2 id="用户态" tabindex="-1"><a class="header-anchor" href="#用户态" aria-hidden="true">#</a> 用户态</h2><details class="hint-container details"><summary>💡</summary><blockquote><p><code>User Mode</code> - “用户态”</p></blockquote><blockquote><p><code>Kernel Mode</code> - “核心态”</p></blockquote><p>这个区分是一种安全机制，保证了用户程序不能随意访问操作系统核心数据和硬件，保证了操作系统运行的稳定性和安全性。</p><ul><li><p>在用户态运行的代码不能访问操作系统核心数据结构和硬件，不能执行影响操作系统稳定性的操作。</p></li><li><p>核心态运行的代码可以访问操作系统的所有的内存和硬件，大多数操作系统核心程序运行在核心态上，可以执行 CPU 指令，也可以访问所有硬件资源。</p></li></ul></details><h3 id="❓用户态和内核态-什么时候用户态会转为内核态" tabindex="-1"><a class="header-anchor" href="#❓用户态和内核态-什么时候用户态会转为内核态" aria-hidden="true">#</a> ❓用户态和内核态，什么时候用户态会转为内核态</h3><details class="hint-container details"><summary>💡</summary><p>用户态和内核态是操作系统设计中的两种不同的运行级别，其中内核态具有访问所有硬件资源的权限，而用户态的权限有限，不能直接访问硬件资源。</p><p>通常情况下，所有的用户程序都在用户态运行，只有当需要执行特殊的操作（如 <code>I/O</code> 操作、权限管理等）时，才需要切换到内核态。特别地，当程序需要请求操作系统服务时，会通过系统调用（<code>Syscall</code>）从用户态切换到内核态。</p><ul><li><p>用户态 -&gt; 内核态：</p><ul><li><p>程序要进行文件操作，例如打开文件、读写文件等，因为这些操作需要操作系统访问底层的硬件设备，必须在内核态中完成。用户程序需要进行系统调用切换到内核态，由操作系统代为完成。</p></li><li><p>程序需要进行进程间通信（如管道、消息队列、共享内存等）时，也需要在内核态进行。</p></li><li><p>程序需要进行网络发送或接收操作时，需要系统调用滑动到内核态，由网络协议栈完成数据包的处理。</p></li><li><p>用户程序需要创建、结束进程或进行进程调度时，因为涉及到对进程管理表的操作，也必须在内核态进行。</p></li></ul></li><li><p>内核态 -&gt; 用户态：切换回用户态通常发生在系统调用结束返回时，或者发生了需要切换执行其他用户程序的时候。</p></li></ul></details><h3 id="❓backtrace-是在用户态实现吗" tabindex="-1"><a class="header-anchor" href="#❓backtrace-是在用户态实现吗" aria-hidden="true">#</a> ❓<code>backtrace</code> 是在用户态实现吗</h3><details class="hint-container details"><summary>💡</summary><p>先理解两个概念 : <code>backtrace</code>、用户态</p><ul><li><code>backtrace</code> 是回溯栈，记录程序运行过程中的调用栈信息，当程序 <code>Crash</code> 时，可以通过这个信息了解程序崩溃的上下文，调试程序问题。</li><li>用户态是属于操作系统的一个分区概念，主要分为内核态和用户态。两者的区别的是为了保证内核安全，只有以内核态运行的程序才具备操作系统所有资源的访问权限，而以用户态运行的程序会受到限制，这样是为了保证操作系统的稳定运行。</li></ul><p><code>backtrace</code> 一般是在用户态实现的，主要是通过读取和解析程序的调用栈来获取函数的调用历史。</p></details><blockquote><p>❓能否讲讲实现它的大致思路</p></blockquote><details class="hint-container details"><summary>💡</summary><ul><li><p>获取栈顶地址：首先需要获取当前函数的栈顶地址，这可以通过内联汇编或者某些特定的函数实现。</p><blockquote><p>例如，<code>Python</code> 中的 <code>__builtin_frame_address</code>。</p></blockquote></li><li><p>遍历栈帧：然后从栈顶开始，获得每一个栈帧的返回地址，并按照栈的生长方向（通常是向低地址方向），逐个获取下一个栈帧的返回地址。这个过程一直持续到遇到一个无效的栈帧地址为止。</p></li><li><p>解析函数名：有了函数的返回地址，就可以通过解析程序的符号表，找到这个地址所对应的函数名。</p><blockquote><p>在 <code>Linux</code> 中，可以使用 <code>backtrace_symbols</code> 函数帮助我们完成这个任务。</p></blockquote></li><li><p>输出结果：最后，将每一个栈帧对应的函数名输出，就得到了函数的调用栈。</p></li></ul><p>注意：上述过程在实际操作中可能要复杂得多，因为现代的编译器可能会对程序进行各种优化，例如函数内联、尾递归优化等，这些都可能影响到获取调用栈的结果，因此在使用 <code>backtrace</code> 的时候，可能需要关闭这些编译器优化。</p></details><h2 id="io-模型" tabindex="-1"><a class="header-anchor" href="#io-模型" aria-hidden="true">#</a> <code>IO</code> 模型</h2><h3 id="❓linux-中的五种-io-模型" tabindex="-1"><a class="header-anchor" href="#❓linux-中的五种-io-模型" aria-hidden="true">#</a> ❓<code>Linux</code> 中的五种 <code>IO</code> 模型</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>阻塞 <code>I/O</code> (blocking)</p><blockquote><p>程序在进行 <code>IO</code> 操作时，如果数据还未准备好，将会被阻塞（挂起），直到数据准备就绪后才会继续进行。</p></blockquote></li><li><p>非阻塞 <code>I/O</code> (nonblocking)</p><blockquote><p>与阻塞 <code>IO</code> 不同，如果数据还未准备好，该 <code>IO</code> 操作立即返回，不会阻塞程序，程序可以继续执行其它任务。</p></blockquote></li><li><p><code>I/O</code> 多路复用 (multiplexing)</p><blockquote><p>允许单个进程监听多个文件描述符，即可以同时进行多个 <code>IO</code> 操作。当其中某个 <code>IO</code> 操作可以进行时，操作系统会通知该进程。</p></blockquote></li><li><p>信号驱动 <code>I/O</code> (singal driven)</p><blockquote><p>程序会向操作系统注册一个信号，当数据准备就绪时，操作系统会发送一个信号，通知程序进行 <code>IO</code> 操作。</p></blockquote></li><li><p>异步 <code>I/O</code> (asynchronous)</p><blockquote><p>与其他模型不同，并未返回执行结果，而是返回一个准备结果。当操作系统完成 <code>IO</code> 操作后，会通过信号或者回调函数来通知程序。</p></blockquote></li></ul></details><h3 id="❓-select-poll-vs-epoll" tabindex="-1"><a class="header-anchor" href="#❓-select-poll-vs-epoll" aria-hidden="true">#</a> ❓ <code>select/poll</code> vs <code>epoll</code></h3><details class="hint-container details"><summary>💡</summary><ul><li><p><code>select/poll</code>都是一种 <code>I/O</code> 多路复用的技术，主要用于处理多个文件描述符的 I/O 事件。</p><p><strong>select：</strong></p><p>select 是 Unix、Linux 原始的 IO 多路复用 API。select 的核心是一个位图，长度与系统最大文件描述符数量相关。 它可以同时监控多个文件描述符的读写事件，当有文件描述符发生读写事件时，select 函数就会返回，我们就可以对那个文件描述符进行读写操作。</p><p>主要过程：</p><ol><li>初始化文件描述符集合，添加所有需要监控的文件描述符；</li><li>调用 select 函数，它会阻塞当前线程，直到有文件描述符发生读写事件，或者达到指定超时时间；</li><li>select 函数返回后，遍历所有监控的文件描述符，处理读写事件。</li></ol><p>关键 API:</p><ul><li>FD_ZERO(fd_set *set)：清空集合；</li><li>FD_SET(int fd, fd_set *set)：将一个给定的文件描述符 fd 加入集合 set；</li><li>FD_CLR(int fd, fd_set *set)：将一个给定的文件描述符 fd 从集合 set 中移除；</li><li>FD_ISSET(int fd, fd_set *set)：检查 fd 是否在集合 set 中；</li></ul><p>然而 select 的效率对于大并发受限，因为每次调用 select，都必须遍历传递进来的所有文件描述符。而且数量上限受制于 FD_SETSIZE 的大小限制。</p><p><strong>poll：</strong></p><p>poll 函数与 select 类似，都是用来监控多个文件描述符的读写事件。但是 poll 没有最大文件描述符数量的限制。</p><p>主要过程：</p><ol><li>初始化文件描述符数组，每个元素都包含一个需要监控的文件描述符和指定的事件；</li><li>调用 poll 函数，它会阻塞当前线程，直到有文件描述符发生读写事件，或者达到指定超时时间；</li><li>poll 函数返回后，遍历所有监控的文件描述符，处理读写事件。</li></ol><p>关键 API:</p><ul><li>poll(struct pollfd *fds, nfds_t nfds, int timeout)；</li></ul><p>尽管 poll 没有最大文件描述符数量的限制，但同样存在效率问题，因为每次调用 poll 时，内核需要检查所有文件描述符。而且，select 和 poll 在每次调用时都要将全部文件描述符从用户态拷贝到内核态，这也带来了一定开销。这些都是相比 epoll，其使用受限的原因。</p></li><li><p><code>epoll</code> 是在 <code>Linux</code> 系统下进行 <code>I/O</code> 多路复用的一种高效方式，它相较于 <code>select</code> 和 <code>poll</code>，在处理大量并发连接时有明显的性能优势。</p><p><code>epoll</code> 最大的优势在于，它不需要像 <code>select</code> 和 <code>poll</code> 那样每次调用都需要遍历全部的文件描述符，而只需要将有事件发生的文件描述符返回给用户态，大大降低了遍历文件描述符的时间消耗。</p></li></ul><p>以下是创建和使用 <code>epoll</code> 的基本步骤：</p><ol><li>创建一个 <code>epoll</code> 实例：调用 <code>epoll_create</code> 或者 <code>epoll_create1</code> 函数。</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> epollfd <span class="token operator">=</span> <span class="token function">epoll_create1</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>添加需要进行 I/O 操作的文件描述符：调用 <code>epoll_ctl</code> 函数，使用 <code>EPOLL_CTL_ADD</code> 选项和需要添加的文件描述符，以及相应的事件信息。</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">epoll_event</span> evt<span class="token punctuation">;</span>
evt<span class="token punctuation">.</span>events <span class="token operator">=</span> EPOLLIN<span class="token punctuation">;</span> <span class="token comment">// Register for input event</span>
evt<span class="token punctuation">.</span>data<span class="token punctuation">.</span>fd <span class="token operator">=</span> sockfd<span class="token punctuation">;</span> <span class="token comment">// Register sockfd</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">epoll_ctl</span><span class="token punctuation">(</span>epollfd<span class="token punctuation">,</span> EPOLL_CTL_ADD<span class="token punctuation">,</span> sockfd<span class="token punctuation">,</span> <span class="token operator">&amp;</span>evt<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Handle error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>等待事件：调用 <code>epoll_wait</code> 函数，等待注册的文件描述符有事件发生。</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">epoll_event</span> events<span class="token punctuation">[</span>MAX_EVENTS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num_events <span class="token operator">=</span> <span class="token function">epoll_wait</span><span class="token punctuation">(</span>epollfd<span class="token punctuation">,</span> events<span class="token punctuation">,</span> MAX_EVENTS<span class="token punctuation">,</span> <span class="token comment">/* timeout */</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>处理事件：<code>epoll_wait</code> 返回的是已经发生事件的文件描述符列表，用户需要遍历这个列表，并对每个文件描述符进行相应的处理。</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num_events<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> fd <span class="token operator">=</span> events<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>fd<span class="token punctuation">;</span>
    <span class="token comment">// Handle the event</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们通过 <code>epoll</code> 能够高效地处理大量并发的网络连接。需要注意的是，<code>epoll</code> 只支持 Linux，对于其它 Unix-like 系统，可能需要使用 <code>kqueue</code> 或者其它替代技术。</p></details><h3 id="❓有了解过-node-js-的单线程事件处理模型吗" tabindex="-1"><a class="header-anchor" href="#❓有了解过-node-js-的单线程事件处理模型吗" aria-hidden="true">#</a> ❓有了解过 <code>Node.js</code> 的单线程事件处理模型吗</h3><details class="hint-container details"><summary>💡</summary><blockquote><p><code>Node.js</code> 的单线程事件处理模型，也被称为<strong>事件驱动</strong>或<strong>非阻塞I/O模型</strong>。在这种模型下，所有的 <code>I/O</code> 操作（如读写文件，网络通信等）都会立即返回，不会阻塞线程的执行，而是通过回调函数的方式在 <code>I/O</code> 操作完成后通知主线程。这样就可以在等待 <code>I/O</code> 操作完成的过程中处理其他任务，提高了程序的并发性能。</p></blockquote><ul><li><p>在 <code>Node.js</code> 的事件循环中，所有的 <code>JavaScript</code> 代码是在单个线程上执行的。但是，<code>Node.js</code> 也可以通过创建子进程或者使用工作线程来执行计算密集型的任务，避免阻塞主线程。</p></li><li><p><code>Node.js</code> 中的异步操作并不都是非阻塞的。例如，虽然文件 <code>I/O</code> 是非阻塞的，但是有一部分操作（如<code>dns.lookup</code>，<code>crypto</code>等）仍然是阻塞的。阻塞和非阻塞 <code>I/O</code> 的选择取决于特定的系统调用和库函数。</p></li></ul><p>这种单线程事件处理模型使得Node.js在处理高并发、I/O密集型任务上表现出色，特别适合开发实时应用、聊天应用、网络游戏以及服务器端API等。</p></details><blockquote><p>❓那么在进行 <code>I/O</code> 操作时是在后台子线程的吗</p></blockquote><details class="hint-container details"><summary>💡</summary><p>实际上 <code>Node.js</code> 在执行 <code>I/O</code> 操作，比如网络请求或是文件操作时，会把这些操作交给其内部的线程池去处理，而线程池由多个子线程组成。</p><p>这样的设计实际上是为了解决 <code>I/O</code> 操作耗时问题。当主线程将<code> I/O</code> 任务交给线程池后，它就不会等待任务的完成，而是立即返回继续执行其他代码，即非阻塞。当线程池中的子线程完成了 <code>I/O</code> 任务（读取文件，请求网络等），主线程会通过事件通知的方式得到这个消息，并通过预先设置的回调函数进行处理。</p><p>总结：虽然 <code>Node.js</code> 的 <code>JavaScript</code> 执行部分是单线程的，但在进行诸如 <code>I/O</code> 这样的操作时，实际上底层依然是多线程的。</p></details><blockquote><p>❓那为什么说 <code>Node.js</code> 是单线程，这不还是多线程在进行任务吗</p></blockquote><details class="hint-container details"><summary>💡</summary><p><code>Node.js</code>被称为单线程，是指它在 <code>JavaScript</code> 执行层面上只使用了一个线程，也就是主线程。在这个主线程上，所有 <code>JavaScript</code> 代码的运行、事件的调度和回调函数的执行都是在这一个线程中进行的。</p><p>对于如 <code>I/O</code> 操作，网络请求等异步操作，<code>Node.js</code> 会交由其底层的 <code>libuv</code> 库处理，<code>libuv</code> 有一个由多个线程组成的线程池来处理这些异步操作。</p><p>区别在于：<code>JavaScript</code> 代码的执行、事件的调度和回调函数的执行仍然是在一个单线程中进行的，只有在进行一些耗时的操作时，如 <code>I/O</code> 操作和网络请求，才会将操作交给后台的子线程去处理，当操作完成后，子线程将结果返回给主线程，主线程再调用相应的回调函数进行处理。</p><p>总结：即使在后台有多个子线程在执行任务，<code>Node.js</code> 也被认为是单线程的，因为在 <code>JavaScript</code> 代码执行的层面，它仅使用了一个线程。这就是为什么说 <code>Node.js</code> 是单线程的。</p></details><blockquote><p>❓<code>Node.js</code> 可以创建子进程吗</p></blockquote><details class="hint-container details"><summary>💡</summary><p>尽管 <code>Node.js</code> 的主要设计是单线程的，它确实提供了创建新线程的功能。从 <code>Node.js 10.5.0</code> 版本开始，核心模块 <code>worker_threads</code> 提供了创建工作线程的能力，可以使用它来运行 <code>CPU</code> 密集型任务，或者执行一些自定义的异步操作，而不会阻塞到 <code>Node.js</code> 的主线程。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Worker <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;worker_threads&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 worker_threads 创建一个新线程</span>
<span class="token comment">// 新线程上的 JavaScript 代码在 ./path-to-your-script.js 文件中</span>
<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">&#39;./path-to-your-script.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 主线程可以通过监听 message 事件来接收这些数据</span>
worker<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理子线程返回的结果</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><hr><h2 id="其它知识点" tabindex="-1"><a class="header-anchor" href="#其它知识点" aria-hidden="true">#</a> 其它知识点</h2><h3 id="❓字节序有了解吗" tabindex="-1"><a class="header-anchor" href="#❓字节序有了解吗" aria-hidden="true">#</a> ❓字节序有了解吗</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>字节序是指在计算机系统中表示多字节数据（例如：16位、32位、64位数据）时，字节的排列顺序。</p></blockquote><ul><li><p><strong>大端字节序（Big-Endian）</strong>：在大端字节序中，最高位字节存储在内存的最低地址处，最低位字节存储在内存的最高地址处。</p><blockquote><p>举例来说，假设有一个 16 位的数字 <code>0x1234</code>，它存储在内存中的两个字节地址为 <code>0x1000</code> 和 <code>0x1001</code>，则在大端字节序的系统中，<code>0x12</code> 将会存储在地址 <code>0x1000</code> 下，<code>0x34</code> 会存储在地址 <code>0x1001</code> 下。</p></blockquote></li><li><p><strong>小端字节序（Little-Endian）</strong>：在小端字节序中，最低位字节存储在内存的最低地址处，最高位字节存储在内存的最高地址处。</p><blockquote><p>以数字 <code>0x1234</code> 为例，其存储在内存中的两个字节地址为 <code>0x1000</code> 和 <code>0x1001</code>，则在小端字节序的系统中，<code>0x34</code> 会存储在地址 <code>0x1000</code> 下，<code>0x12</code> 会存储在地址 <code>0x1001</code> 下。</p></blockquote></li></ul><p>了解字节序的重要性主要体现在网络通信和跨平台数据交换中，这是因为不同的平台可能使用不同的字节序，如果不对字节序进行处理，直接传递数值，会导致接收端解析出错误的数值。所以在进行网络传输或者跨平台操作时，常常需要进行字节序的转换。例如，在网络中传输数据，无论发送端或接收端的系统字节序如何，按照网络协议，发送的数据都需要转为大端字节序（网络字节序）。</p></details><h3 id="❓解释一下中断" tabindex="-1"><a class="header-anchor" href="#❓解释一下中断" aria-hidden="true">#</a> ❓解释一下中断</h3><details class="hint-container details"><summary>💡</summary><p>中断（Interrupt）是在计算机硬件和操作系统中非常重要的一个概念。它是一种异步的、由硬件或软件产生的信号，指示处理器暂停正在执行的任务，以便进行其他更重要或更紧急的任务。</p><p>而这个过程，通常被称为中断处理，是操作系统内核的重要组成部分。操作系统内核会为每种可能发生的中断定义一个中断处理程序（interrupt handler)，当此中断发生时，处理器会保存当前任务的状态，然后执行对应的中断处理程序，当中断处理完成后，处理器然后再恢复暂停的任务。</p><p>中断是由处理器外部的设备或内部的软件产生的，例如，当我们在键盘上按下一个键时，键盘会产生一个中断，通知处理器有输入需要处理。或者当系统运行出现错误，例如除以零，也会产生一个中断，通知处理器发生了错误需要处理。</p><p>通过中断，操作系统可以有效地管理和调度处理器资源，响应各种硬件设备的请求，处理各种系统错误，实现多任务和并发控制等等，因此中断在操作系统中具有非常重要的角色。</p></details>`,62);function l(t,p){return a(),o("div",null,[s(" more "),d])}const u=e(n,[["render",l],["__file","0x10.system.html.vue"]]);export{u as default};