import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as e}from"./app-Ca4UmUmQ.js";const i={},r=e(`<h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> commands</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 OC 代码转化为 C/C++ 代码</span>
clang -rewrite-objc main.m <span class="token parameter variable">-o</span> main.cpp
<span class="token comment"># 只生成 iOS 平台下代码</span>
<span class="token comment">#   xcrun == Xcode Run</span>
<span class="token comment">#   -sdk    指定系统平台</span>
<span class="token comment">#   -arch   指定的架构</span>
xcrun <span class="token parameter variable">-sdk</span> iphoneos clang <span class="token parameter variable">-arch</span> arm64 -rewrite-objc main.m <span class="token parameter variable">-o</span> main-arm64.cpp

<span class="token comment"># 查看 xxx.app 的 uuid</span>
$ dwarfdump  <span class="token parameter variable">--uuid</span> xxx.app/xxx
<span class="token comment"># 查看xxx.app.dSYM的uuid</span>
$ dwarfdump <span class="token parameter variable">--uuid</span> xxx.app.dSYM/Contents/Resources/DWARF/xxx

<span class="token comment"># genstrings [-a] [-q] [-o &lt;outputDir&gt;] sourcefile</span>
<span class="token comment"># &gt; 遍历当前目录，生成 Localizable.strings</span>
<span class="token comment">#   -a  在存在的文件后面追加内容</span>
<span class="token comment">#   -q  关闭多个键/值对的警告</span>
<span class="token comment">#   -o  指定输出目录</span>
$ genstrings <span class="token parameter variable">-o</span> en.lproj  *.m
$ genstrings <span class="token parameter variable">-o</span> zh-Hans.lproj *.m
<span class="token comment"># 遍历当前目录及所有子目录中的 .m 文件，生成 Localizable.strings</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token punctuation">\\</span>*.m <span class="token operator">|</span> <span class="token function">xargs</span> genstrings <span class="token parameter variable">-o</span> en.lproj
$ <span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*.m&quot;</span> <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> genstrings <span class="token parameter variable">-o</span> en.lproj <span class="token comment"># 与上面等价</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[r];function l(t,p){return a(),s("div",null,c)}const d=n(i,[["render",l],["__file","command.html.vue"]]);export{d as default};
