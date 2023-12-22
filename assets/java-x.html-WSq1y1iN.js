import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,a as n,f as d}from"./app-jKqdfQJq.js";const o={},s=d(`<h2 id="oraclejdk-vs-openjdk" tabindex="-1"><a class="header-anchor" href="#oraclejdk-vs-openjdk" aria-hidden="true">#</a> OracleJDK vs OpenJDK</h2><h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> concept</h2><ul><li><p>Java 的三大平台</p><table><thead><tr><th>类型</th><th>全称</th><th>说明</th></tr></thead><tbody><tr><td>Java SE</td><td>Java Platform Standard Edition</td><td>基础版本，开发 Java 应用程序</td></tr><tr><td>Java EE</td><td>Java Platform Enterprise Edition</td><td>企业版本，开发 Java 服务端程序...</td></tr><tr><td>Java ME</td><td>Java Platform Micro Edition</td><td>嵌入(移动)设备版本</td></tr></tbody></table></li><li><p><code>JDK</code> &amp; <code>JRE</code> &amp; <code>JVM</code></p><table><thead><tr><th>类型</th><th>全称</th><th>说明</th></tr></thead><tbody><tr><td><code>JDK</code></td><td>Java Development Kit</td><td>包括了 Java 运行环境、Java 工具和 Java 基础类库</td></tr><tr><td><code>JRE</code></td><td>Java Runtime Environment</td><td>包括 Java 虚拟机和 Java 程序所需的核心类库等</td></tr><tr><td><code>JVM</code></td><td>Java Virtual Machine</td><td>Java 虚拟机</td></tr></tbody></table></li><li><p>JDK 目录</p><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td><code>bin</code></td><td>存放 Java 的编译器、解释器等工具(可执行文件)</td></tr><tr><td><code>include</code></td><td>存放的调用系统资源的接口文件</td></tr><tr><td><code>jre</code></td><td>存放 Java 运行环境文件</td></tr><tr><td><code>lib</code></td><td>存放 Java 的类库文件</td></tr><tr><td><code>man</code></td><td>man 帮助文件</td></tr><tr><td><code>src.zip</code></td><td>JDK 提供的类的源代码</td></tr></tbody></table></li><li><p><code>jar</code> &amp; <code>war</code> &amp; <code>ear</code></p><table><thead><tr><th>打包类型</th><th>全称</th><th>说明</th></tr></thead><tbody><tr><td><code>jar</code></td><td>java archive file</td><td>java 程序打包文件，与 zip 兼容</td></tr><tr><td><code>war</code></td><td>web archive file</td><td>web 程序打包文件</td></tr><tr><td><code>ear</code></td><td>enterprise archive file</td><td>企业打包文件</td></tr></tbody></table></li></ul><h2 id="java-5" tabindex="-1"><a class="header-anchor" href="#java-5" aria-hidden="true">#</a> Java 5</h2><h3 id="静态导入" tabindex="-1"><a class="header-anchor" href="#静态导入" aria-hidden="true">#</a> 静态导入</h3><blockquote><p>用于导入类的某个静态属性或方法。使用静态导入可以简化程序对类静态属性和方法的调用。</p></blockquote><blockquote><p>语法 : <code>import static 包名.类名.静态属性|静态方法|*</code></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">System</span><span class="token punctuation">.</span>out
out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增强-for-循环" tabindex="-1"><a class="header-anchor" href="#增强-for-循环" aria-hidden="true">#</a> 增强 for 循环</h3><blockquote><p>增强 for 循环只能用在数组、或实现 Iterable 接口的集合类上</p></blockquote><blockquote><p>语法 : <code>for(变量类型 变量 : 需迭代的数组或集合){ }</code></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可变参数" tabindex="-1"><a class="header-anchor" href="#可变参数" aria-hidden="true">#</a> 可变参数</h3><blockquote><p>允许为方法定义长度可变的参数。</p></blockquote><blockquote><p>语法 : <code>数据类型... 变量名</code> <code>(int... number)</code></p></blockquote><ul><li>可变长参数是Object[] 数组。（可变参数里存的是对象数组）</li><li>JDK中具有可变参数的类Arrays.asList()方法。</li><li>可变参数的细节 <ul><li>声明 : 在一个方法中，最多只能有一个可变参数。可变参数只能放在参数列表的最后面。</li><li>调用 : 当使用可变参数时，可以传0或多个参数。当使用可变参数时，也可以传一个数组进去，就表示多个参数。</li><li>使用 : 在方法内部使用时，就是在使用一个数组。当调用时没有传参数时（传了0个），这时在方法内部的参数数组是有值的（不为null），但长度为0.</li></ul></li></ul><h3 id="自动装箱-拆箱" tabindex="-1"><a class="header-anchor" href="#自动装箱-拆箱" aria-hidden="true">#</a> 自动装箱/拆箱</h3><blockquote><p>自动装箱：可以把一个基本数据类型直接赋给对应的包装类。 自动拆箱：可以把一个包装类对象直接赋给对应的基本数据类型。</p></blockquote><table><thead><tr><th>包装类</th><th>基本数据类型</th></tr></thead><tbody><tr><td>Boolean</td><td>boolean</td></tr><tr><td>Character</td><td>char</td></tr><tr><td>Byte</td><td>byte</td></tr><tr><td>Short</td><td>short</td></tr><tr><td>Integer</td><td>int</td></tr><tr><td>Long</td><td>long</td></tr><tr><td>Float</td><td>float</td></tr><tr><td>Double</td><td>double</td></tr></tbody></table><h3 id="枚举类" tabindex="-1"><a class="header-anchor" href="#枚举类" aria-hidden="true">#</a> 枚举类</h3><blockquote><p><code>enum</code> 关键字用于定义一个枚举类。</p></blockquote><ul><li>枚举类也是一种特殊形式的<code>Java</code>类。</li><li>枚举类中声明的每一个枚举值代表枚举类的一个实例对象。</li><li>与<code>Java</code>中的普通类一样，在声明枚举类时，也可以声明属性、方法和构造函数.</li><li>枚举类可以声明抽象方法,但是要有具体的枚举值去实现.</li><li>枚举类也可以实现接口(序列化)、或继承抽象类。</li><li>JDK5中扩展了<code>switch</code>语句，它除了可以接收<code>int</code>, <code>byte</code>, <code>char</code>, <code>short</code>外，还可以接收一个枚举类型(<code>enum</code>)。</li><li>若枚举类只有一个枚举值，则可以当作单态设计模式使用。</li></ul><h2 id="java-8" tabindex="-1"><a class="header-anchor" href="#java-8" aria-hidden="true">#</a> Java 8</h2><blockquote><p>Objects are a poor man&#39;s closures.</p></blockquote><h3 id="lambda" tabindex="-1"><a class="header-anchor" href="#lambda" aria-hidden="true">#</a> <code>Lambda</code></h3><blockquote><p>Lambda 表达式 : 闭包。允许将函数作为一个方法的参数。</p></blockquote><blockquote><p>语法格式 : <code>(parameters) -&gt; expression</code> || <code>(parameters) -&gt; { statements; }</code></p></blockquote><h3 id="optional" tabindex="-1"><a class="header-anchor" href="#optional" aria-hidden="true">#</a> <code>Optional</code></h3><blockquote><p>可选类型，用于解决空指针异常的问题</p></blockquote><h3 id="接口定义默认实现" tabindex="-1"><a class="header-anchor" href="#接口定义默认实现" aria-hidden="true">#</a> 接口定义默认实现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Tool</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;use tool to work!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="functional-interface" tabindex="-1"><a class="header-anchor" href="#functional-interface" aria-hidden="true">#</a> Functional Interface</h3><blockquote><p>函数式接口，也称为 SAM。</p></blockquote><ul><li><code>SAM</code> : (Single Abstract Method) 一类特殊的接口，只定义唯一一个抽象方法接口(不包括 Object 隐式公共方法)</li><li><code>@FunctionalInterface</code> : 标记接口是函数式接口</li></ul>`,34);function c(l,r){return t(),e("div",null,[n(" more "),s])}const u=a(o,[["render",c],["__file","java-x.html.vue"]]);export{u as default};
