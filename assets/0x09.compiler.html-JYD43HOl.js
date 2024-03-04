import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a,f as o}from"./app-ts76ylnm.js";const t={},r=o('<h2 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h2><h3 id="❓编译过程做了哪些事情" tabindex="-1"><a class="header-anchor" href="#❓编译过程做了哪些事情" aria-hidden="true">#</a> ❓编译过程做了哪些事情</h3><details class="hint-container details"><summary>💡</summary><p>编译过程：</p><ul><li><p><strong>预处理（Preprocessing）</strong>：预处理器处理源代码中的预处理指令，如 <code>#define、#include</code> 等。</p><blockquote><p>扩展源代码中的宏定义，处理条件编译指令，以及插入 <code>#include</code> 包含的文件。</p></blockquote></li><li><p><strong>词法分析（Lexical Analysis）</strong>：词法分析将源代码分解成有意义和基础的单词或符号（称为词素或 <code>Token</code>）。</p><blockquote><p>例如关键字，标识符，常量，操作符等。</p></blockquote></li><li><p><strong>语法分析（Syntax Analysis）</strong>：在这个阶段，编译器使用 <code>Token</code> 产生一种叫做抽象语法树（<code>Abstract Syntax Tree</code>，<code>AST</code>）的数据结构。</p><blockquote><p>编译器根据语言的语法规则检查程序的结构，并报告任何错误。</p></blockquote></li><li><p><strong>语义分析（Semantic Analysis）</strong>：这个阶段主要是检查源代码中是否存在语义错误。</p><blockquote><p>例如使用未声明的变量，类型不匹配等。</p></blockquote></li><li><p><strong>代码优化（Code Optimization）</strong>：在此阶段，编译器会对 <code>AST</code> 进行优化，以生成更有效率的中间代码或目标代码。</p><blockquote><p>优化方式可能包括去除冗余的指令、消除死代码、循环优化等。</p></blockquote></li><li><p><strong>代码生成（Code Generation）</strong>：编译器将优化过的代码转换成目标语言，通常为机器语言或者接近机器语言的代码。</p><blockquote><p>产生的代码会尽可能地优化以提高执行效率。</p></blockquote></li><li><p><strong>链接（Linking）</strong>：链接器将编译产生的一个或多个对象文件以及库文件链接起来，生成最终的可执行文件。</p><blockquote><p>链接过程可以解决直接或间接的外部引用问题，将代码模块和数据模块按照逻辑连接在一起。</p></blockquote></li></ul></details><h3 id="❓程序到可执行文件的过程-链接过程都干了啥" tabindex="-1"><a class="header-anchor" href="#❓程序到可执行文件的过程-链接过程都干了啥" aria-hidden="true">#</a> ❓程序到可执行文件的过程，链接过程都干了啥</h3><details class="hint-container details"><summary>💡</summary><p>将程序转换为可执行文件可以分为编译和链接两个过程。</p><ul><li><p>编译：</p><ul><li>预处理：这一步主要处理源文件中的预处理命令，如宏定义、头文件包含等。</li><li>编译：预处理过的源文件被编译成汇编语言。</li><li>汇编：汇编程序将汇编语言文件转换为目标文件，这是个二进制文件，包含了源程序编译后的机器语言代码。</li></ul></li><li><p>链接：</p><blockquote><p>链接主要对编译生成的多个目标文件之间的引用进行解析并合并，输出为一个可执行文件。</p></blockquote><ul><li>符号解析：每个符号对应着一块内存，符号解析的主要目标就是找到这块内存的地址。链接器要负责把每个符号的引用与定义关联起来。</li><li>重定位：在符号解析的基础上，进行地址分配和重定位。地址分配就是把每个段分配一个运行时内存地址。重定位就是把每条指令和全局变量引用的符号修改成运行时地址。</li><li>段合并：将所有目标文件的同名段合并成一个段，位于一个可执行文件中的同一位置。</li><li>空间和地址分配：为每个段分配一个内存地址。</li><li>重定位表和符号表的创建和更新：创建和更新这两个表是为了程序的加载和运行。</li><li>调试及其它的信息：加入必要的调试等信息。</li><li>结果输出：将链接结果输出到可执行文件。</li></ul><p>链接：就是解决各个编译单元之间的引用问题，包括地址分配，符号解析，重定位等步骤。它是把各个编译单元编译生成的目标文件连接成一个完整的可执行程序的过程。</p></li></ul></details><h2 id="链接库" tabindex="-1"><a class="header-anchor" href="#链接库" aria-hidden="true">#</a> 链接库</h2><h3 id="❓静态链接了解吗" tabindex="-1"><a class="header-anchor" href="#❓静态链接了解吗" aria-hidden="true">#</a> ❓静态链接了解吗</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>静态链接是一种实现软件组件（源代码、字节代码或者软件库）之间依赖关系的方法。它主要发生在编译时或者链接时。</p></blockquote><p>静态链接的主要步骤：</p><ul><li>链接器找到主程序中调用的函数在库中的位置。</li><li>将这些函数代码直接复制到主程序中。</li><li>此后，即使库函数有更新，已经生成的可执行文件的行为也不会改变，除非再次执行链接操作。因此，用静态库生成的可执行文件通常会比用动态库生成的大很多。</li></ul><p>静态链接的优点：</p><ul><li><p>可移植性更高：因为所有需要的函数实现都包含在可执行文件中，所以它不依赖于系统上的其他文件。它更方便在不同的系统中运行，只要这个系统支持该可执行文件的格式。</p></li><li><p>运行时性能稍好：因为所有代码都已经在程序启动时加载到内存中，所以程序运行时不需要再去寻找共享库的路径和加载共享库，从而节省了这部分的时间。</p></li></ul><p>静态链接的缺点：</p><ul><li><p>资源占用较大：静态链接产生的可执行文件通常体积较大，每个可执行文件都有一份库函数的副本，当多个程序使用同样的库函数时，会造成存储资源的浪费。</p></li><li><p>可维护性较差：如果库的函数需要更新或者修复 <code>bug</code>，那么所有链接了此库的程序必须重新进行链接操作。</p></li></ul></details><h3 id="❓动态库与静态库区别" tabindex="-1"><a class="header-anchor" href="#❓动态库与静态库区别" aria-hidden="true">#</a> ❓动态库与静态库区别</h3><details class="hint-container details"><summary>💡</summary><p>解释：</p><ul><li><p>静态库：在编译时就被链接到目标程序中，程序运行时不再需要该静态库。生成的可执行文件较大，因为所有使用的库函数代码都会被复制到目标代码中。因此，静态库的改动需要重新编译程序才能生效，但具有较好的可移植性。</p></li><li><p>动态库：在编译时并不会被链接到目标程序中，而是在程序运行时由系统动态地加载并链接到程序中。动态库虽然会缩小生成的可执行文件的体积，但需要保证运行环境中有相应的库文件。动态库的一个特点是，多个应用程序可以共享一个动态库的单一拷贝，这样可以节省系统资源。</p></li></ul><p>区别：</p><ul><li>空间占用：静态库会让程序体积变大，动态库则会让程序在运行时占用更多内存。</li><li>调试：静态库调试比较简单，因为所有的代码都在可执行文件中。而动态库则需要在运行时才能够进行调试。</li><li>兼容性：静态链接的程序更便于分发，因为它包含了所有需要的代码。而动态链接的程序则需要可以访问特定版本的动态库，否则可能会导致运行错误。</li><li>更新：动态库可以利用系统的动态链接机制进行更新，而不需要重新编译程序。</li></ul></details><h3 id="❓静态库和动态库各自的好处" tabindex="-1"><a class="header-anchor" href="#❓静态库和动态库各自的好处" aria-hidden="true">#</a> ❓静态库和动态库各自的好处</h3><details class="hint-container details"><summary>💡</summary><p>静态库的好处：</p><ul><li>高效：静态库在编译阶段就已经被包含到了二进制可执行文件中，运行时不需要额外的动态链接过程，所以从这个角度来说静态链接的执行效率会优于动态链接。</li><li>可移植性：因为静态库被打包到了最终的可执行文件中，可以简化程序的发布，不需要考虑是否缺少某些动态库。</li><li>安全：避免了动态库版本不一致导致的问题。</li></ul><p>动态库的好处：</p><ul><li>节省资源：若有很多程序都要用到某个库，那么使用静态库将会在每个程序中都生成一份这个库的拷贝。而动态库只需要一份拷贝，所有的程序共享同一份动态库，这样就节省了磁盘空间和内存。</li><li>更新简便：如果库需要更新或者修复 <code>bug</code>，只需要重新编译库，然后替换现有的动态库文件即可，不需要对使用到这个库的软件进行重新链接。对于使用静态库的程序则需要重新编译链接全部程序。</li><li>动态链接：可以在程序运行时动态加载所需的库，甚至是程序启动后再决定加载哪个库。这极大的提高了程序的灵活性和功能的扩展性。</li></ul></details>',12);function c(s,d){return i(),e("div",null,[a(" more "),r])}const u=l(t,[["render",c],["__file","0x09.compiler.html.vue"]]);export{u as default};
