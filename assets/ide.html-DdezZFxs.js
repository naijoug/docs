import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as s,c,a as i,b as t,e,d as a,f as l}from"./app-U2dvIeUo.js";const r={},p=t("blockquote",null,[t("p",null,"IDE (Integrated Development Environment) : 集成开发环境")],-1),u=t("h2",{id:"reference",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),e(" reference")],-1),m={href:"https://zed.dev/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/zed-industries/zed",target:"_blank",rel:"noopener noreferrer"},k=t("blockquote",null,[t("p",null,"Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.")],-1),g=l(`<h2 id="xcode" tabindex="-1"><a class="header-anchor" href="#xcode" aria-hidden="true">#</a> Xcode</h2><ul><li><p>Xcode Snippets 占位符 : <code>&lt;# summary #&gt;</code></p></li><li><p>显示 Xcode 编译时间 : <code>$ defaults write com.apple.dt.Xcode ShowBuildOperationDuration -bool YES</code></p></li><li><p>Xcode 快捷键</p><table><thead><tr><th>快捷键</th><th>说明</th></tr></thead><tbody><tr><td><code>Command + /</code></td><td>注释代码</td></tr><tr><td><code>Command + Option + [</code></td><td>代码向上移动一行</td></tr><tr><td><code>Command + Option + ]</code></td><td>代码向下移动一行</td></tr><tr><td><code>Command + [</code></td><td>代码向左移动 tab</td></tr><tr><td><code>Command + ]</code></td><td>代码向右移动 tab</td></tr><tr><td><code>Command + Option + &lt;-</code></td><td>局部折叠代码块</td></tr><tr><td><code>Command + Option + -&gt;</code></td><td>局部展开代码块</td></tr><tr><td><code>Command + Option + Shift + &lt;-</code></td><td>全局折叠代码块</td></tr><tr><td><code>Command + Option + Shift + -&gt;</code></td><td>全局展开代码库</td></tr><tr><td><code>Command + Ctrl + Shift + &lt;-</code></td><td>折叠注释块</td></tr><tr><td><code>Command + Ctrl + Shift + -&gt;</code></td><td>展开注释块</td></tr></tbody></table></li></ul><h2 id="androidstudio" tabindex="-1"><a class="header-anchor" href="#androidstudio" aria-hidden="true">#</a> AndroidStudio</h2><ul><li><p>忽略对某个特定单词的拼写检查(<code>Typo</code>)</p><ul><li><p>在项目的根目录下建立一个名为 <code>.idea/dictionaries</code> 的目录（如果不存在）</p></li><li><p>创建一个以字典的 <code>xml</code> 文件，比如 <code>dict.xml</code></p></li><li><p>将想要忽略检测的单词的加入字典单词 <code>words</code> 中</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ProjectDictionaryState<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dictionary</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>words</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>w</span><span class="token punctuation">&gt;</span></span>ogo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>w</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>words</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dictionary</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="jetbrains-idea" tabindex="-1"><a class="header-anchor" href="#jetbrains-idea" aria-hidden="true">#</a> JetBrains - IDEA</h2><ul><li><p>设置文件夹为资源文件夹 : <code>Project Settings -&gt; Modules -&gt; Sources</code>，可以设置(<code>Mark as</code>)文件类型</p></li><li><p>IDEA 控制台乱码</p><blockquote><p>在 Configuration 中配置</p></blockquote><ul><li>方法一 : <code>Server -&gt; VM options</code> 设置为 <code>-Dfile.encoding=UTF-8</code></li><li>方法二 : <code>Startup/Connection -&gt; Pass environment variables</code> 添加 <code>JAVA_TOOL_OPTIONS</code> : <code>-Dfile.encoding=UTF-8</code></li></ul></li><li><p>IDEA 快捷键</p><table><thead><tr><th>快捷键</th><th>说明</th></tr></thead><tbody><tr><td><code>double Shift</code></td><td>在项目目录的所有文件中查找</td></tr><tr><td><code>Command + F</code></td><td>在当前文件中查找</td></tr><tr><td><code>Command + Shift + F</code></td><td>在当前项目中查找包含查询内容的文件</td></tr><tr><td><code>Command + E</code></td><td>最近打开的文件</td></tr><tr><td><code>Option + F7</code></td><td>查询项目中，所有引用(类、函数、变量)的地方</td></tr></tbody></table></li></ul><h2 id="jetbrains-pycharm" tabindex="-1"><a class="header-anchor" href="#jetbrains-pycharm" aria-hidden="true">#</a> JetBrains - PyCharm</h2><ul><li>关闭科学模式 (Scientific Mode) <ul><li><code>View</code> -&gt; <code>Scientific Mode</code></li><li><code>Preferences</code> -&gt; <code>Tools</code> -&gt; <code>Python Scientific</code> -&gt; <code>Show plots in toolwindow</code></li></ul></li></ul>`,8);function b(f,_){const n=d("ExternalLinkIcon");return s(),c("div",null,[p,i(" more "),u,t("ul",null,[t("li",null,[t("a",m,[e("zed"),a(n)]),e(" 👉🏻 "),t("a",h,[e("🐙"),a(n)]),k])]),g])}const S=o(r,[["render",b],["__file","ide.html.vue"]]);export{S as default};
