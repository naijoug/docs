import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as a,a as e,f as t}from"./app-k-DCva-B.js";const r={},n=t('<h2 id="❓编译过程做了哪些事情" tabindex="-1"><a class="header-anchor" href="#❓编译过程做了哪些事情" aria-hidden="true">#</a> ❓编译过程做了哪些事情</h2><details class="hint-container details"><summary>💡</summary><p>编译过程主要包括以下几个步骤：</p><ol><li><p><strong>预处理（Preprocessing）</strong>：预处理器处理源代码中的预处理指令，如#define、#include等。它会扩展源代码中的宏定义，处理条件编译指令，以及插入#include包含的文件；</p></li><li><p><strong>词法分析（Lexical Analysis）</strong>：词法分析将源代码分解成有意义和基础的单词或符号（称为词素或Token），例如关键字，标识符，常量，操作符等；</p></li><li><p><strong>语法分析（Syntax Analysis）</strong>：在这个阶段，编译器使用token产生一种叫做抽象语法树（Abstract Syntax Tree，AST）的数据结构。编译器根据语言的语法规则检查程序的结构，并报告任何错误；</p></li><li><p><strong>语义分析（Semantic Analysis）</strong>：这个阶段主要是检查源代码中是否存在语义错误，例如使用未声明的变量，类型不匹配等；</p></li><li><p><strong>代码优化（Code Optimization）</strong>：在此阶段，编译器会对AST进行优化，以生成更有效率的中间代码或目标代码。优化方式可能包括去除冗余的指令、消除死代码、循环优化等；</p></li><li><p><strong>代码生成（Code Generation）</strong>：最后，编译器将优化过的代码转换成目标语言，通常为机器语言或者接近机器语言的代码。产生的代码会尽可能地优化以提高执行效率。</p></li><li><p><strong>链接（Linking）</strong>：链接器将编译产生的一个或多个对象文件以及库文件链接起来，生成最终的可执行文件。链接过程可以解决直接或间接的外部引用问题，将代码模块和数据模块按照逻辑连接在一起。</p></li></ol><p>以上就是编译过程中主要的步骤，不同的编译器可能会有所不同，但大致过程是相似的。</p></details><h2 id="❓静态链接了解吗" tabindex="-1"><a class="header-anchor" href="#❓静态链接了解吗" aria-hidden="true">#</a> ❓静态链接了解吗</h2><details class="hint-container details"><summary>💡</summary><p>在计算机科学中，静态链接是一种实现软件组件（源代码、字节代码或者软件库）之间依赖关系的方法。它主要发生在编译时或者链接时。</p><p>静态链接的主要步骤包括，链接器找到主程序中调用的函数在库中的位置，然后将这些函数代码直接复制到主程序中。此后，即使库函数有更新，已经生成的可执行文件的行为也不会改变，除非再次执行链接操作。因此，用静态库生成的可执行文件通常会比用动态库生成的大很多。</p><p>静态链接的优点：</p><ol><li><p>可移植性更高：因为所有需要的函数实现都包含在可执行文件中，所以它不依赖于系统上的其他文件。它更方便在不同的系统中运行，只要这个系统支持该可执行文件的格式。</p></li><li><p>运行时性能稍好：因为所有代码都已经在程序启动时加载到内存中，所以程序运行时不需要再去寻找共享库的路径和加载共享库，从而节省了这部分的时间。</p></li></ol><p>静态链接的缺点：</p><ol><li><p>资源占用较大：静态链接产生的可执行文件通常体积较大，每个可执行文件都有一份库函数的副本，当多个程序使用同样的库函数时，会造成存储资源的浪费。</p></li><li><p>可维护性较差：如果库的函数需要更新或者修复bug，那么所有链接了此库的程序必须重新进行链接操作。</p></li></ol></details><h2 id="❓静态库和动态库的区别" tabindex="-1"><a class="header-anchor" href="#❓静态库和动态库的区别" aria-hidden="true">#</a> ❓静态库和动态库的区别</h2><details class="hint-container details"><summary>💡</summary><p>静态库(Static Library)和动态库(Dynamic Library)都是程序在运行过程中需要用到的一些功能模块的集合。二者主要的区别在于链接方式和运行方式，各有其优势和不足。</p><p><strong>静态库</strong>:</p><ol><li><p>在程序编译链接的时候，库函数会嵌入到最终的可执行程序中，生成一个独立的文件，所以它不需要运行环境有对应的库文件。这意味着静态库必须在编译时加入，这样在程序运行的时候就不需要额外的库文件了。</p></li><li><p>使用静态库，改变了库函数，那么需要重新编译程序。这样可以避免因为库文件的改变影响到程序的运行。</p></li><li><p>静态库的缺点是会使得最终的可执行程序文件变大。因为程序中所有调用的库函数都会被复制一份到程序中。</p></li></ol><p><strong>动态库</strong>：</p><ol><li><p>动态库在程序编译链接的时候并不会被加入到可执行程序中，而是在程序运行的时候才被载入。不同的应用程序如果调用相同的库，那么这个库只需要在内存中有一份拷贝，就可以被不同的应用程序共享，节省了系统资源。</p></li><li><p>动态库能够实现库的即插即用，不需要重新编译程序就可以使用新的库。这样使得库的升级变得更方便。</p></li><li><p>动态库的缺点是如果运行环境中缺少需要的动态库，那么程序就无法运行。 并且，因为程序在运行的时候需要寻找和载入动态库，所以使用动态库的程序执行效率略低于使用静态库的程序。</p></li></ol></details>',6);function s(o,p){return l(),a("div",null,[e(" more "),n])}const m=i(r,[["render",s],["__file","0x09.compiler.html.vue"]]);export{m as default};
