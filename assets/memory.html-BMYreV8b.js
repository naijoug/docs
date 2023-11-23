import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as r,a as o,b as t,e as a,f as c}from"./app-NiSSZH60.js";const h={},n=t("h1",{id:"memory-management",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#memory-management","aria-hidden":"true"},"#"),a(" Memory Management")],-1),l=t("blockquote",null,[t("p",null,"内存管理")],-1),s=c('<h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><ul><li><p>程序可执行文件结构</p><table><thead><tr><th>类型</th><th>可读写</th><th>说明</th></tr></thead><tbody><tr><td><code>.text</code></td><td>只读</td><td>代码区</td></tr><tr><td><code>rodata</code></td><td>只读</td><td>常量区</td></tr><tr><td><code>.data</code></td><td>读写</td><td>全局变量和静态变量区 (已经初始化)</td></tr><tr><td><code>.bss</code></td><td>读写</td><td>全局变量和静态变量区 (未初始化)</td></tr><tr><td><code>heap</code></td><td>读写</td><td>堆区</td></tr><tr><td><code>stack</code></td><td>读写</td><td>栈区</td></tr></tbody></table></li><li><p>全局变量 &amp; 静态变量</p><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>全局变量</code></td><td>变量在整个项目中都能使用，不同文件不能命名相同的全局变量名</td></tr><tr><td><code>静态变量</code></td><td>static 对变量进行了作用域限制 (函数外: 当前文件可见 ; 函数内: 当前函数可见，多次调用不会丢失)</td></tr></tbody></table></li><li><p>内存分配</p><table><thead><tr><th>地址分类</th><th>说明</th></tr></thead><tbody><tr><td><code>虚拟地址</code></td><td>用户编程时将代码分成若干个段，每段代码的地址 = <code>段名称 + 段内相对地址</code></td></tr><tr><td><code>逻辑地址</code></td><td>虚拟地址中的段内相对地址</td></tr><tr><td><code>物理地址</code></td><td>实际物理内存中所看到的存储地址</td></tr></tbody></table></li></ul>',3);function i(m,b){return e(),r("div",null,[n,l,o(" more "),s])}const f=d(h,[["render",i],["__file","memory.html.vue"]]);export{f as default};
