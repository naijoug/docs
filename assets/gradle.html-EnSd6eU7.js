import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c,a as d,b as n,e,d as a,f as r}from"./app-m-SMUe_1.js";const o={},p=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),e(" reference")],-1),m={href:"https://github.com/gradle/gradle",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/DONGChuan/GradleUserGuide",target:"_blank",rel:"noopener noreferrer"},v=r(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gradle <span class="token parameter variable">-q</span> hello <span class="token comment"># 执行 hello.gradle 脚本</span>
<span class="token comment"># -q : quiet 模式，不会生成 Gradle 日志信息。</span>
<span class="token comment"># -x : 排除默写任务</span>
<span class="token comment"># -b ：指定 build.gradle 脚本所在位置</span>
<span class="token comment"># -p : 指定构建的目录</span>
$ gradle dependencies   <span class="token comment"># 查询依赖列表</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code>task hello <span class="token punctuation">{</span>
    doFrist <span class="token punctuation">{</span>
        println <span class="token string">&#39;Hello&#39;</span>
    <span class="token punctuation">}</span>
    doLast <span class="token punctuation">{</span>
        println <span class="token string">&#39; world!&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 快捷任务定义 doLast : &lt;&lt;</span>
task hello <span class="token operator">&lt;&lt;</span> <span class="token punctuation">{</span>
    println <span class="token string">&#39;Hello world!&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gradle build      <span class="token comment"># 编译和测试，并生成所有类和资源的 jar 文件</span>
$ gradle clean      <span class="token comment"># 删除 build 目录和所有构建生成的文件</span>
$ gradle assemble   <span class="token comment"># 编译打包，不运行单元测试</span>
$ gralde check      <span class="token comment"># 编译和测试代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code><span class="token keyword">repositories</span> <span class="token punctuation">{</span> <span class="token comment">// 外部依赖仓库</span>
    <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 加入 maven 仓库</span>
<span class="token punctuation">}</span>
<span class="token keyword">dependencies</span> <span class="token punctuation">{</span> <span class="token comment">// 外部依赖</span>
    <span class="token comment">// compile : 编译项目源代码的依赖</span>
    <span class="token comment">// runtime : 运行时被生成类使用的依赖，包含 compile</span>
    <span class="token comment">// testCompile : 编译测试所需依赖，包含 compile &amp; runtime</span>
    <span class="token comment">// testRuntime : 运行测试所需的依赖，包含 compile &amp; runtime &amp; testCompile</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function b(k,g){const s=i("ExternalLinkIcon");return t(),c("div",null,[d(" more "),p,n("ul",null,[n("li",null,[n("a",m,[e("gradle"),a(s)]),e(" : Adaptable, fast automation for all")]),n("li",null,[n("a",u,[e("Gradle User Guide 中文版"),a(s)])])]),v])}const f=l(o,[["render",b],["__file","gradle.html.vue"]]);export{f as default};
