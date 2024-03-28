import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as r,c as i,a as o,b as e,e as n,d as a,f as c}from"./app-tIn8wIjG.js";const d={},m=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),n(" reference")],-1),p={href:"https://flutter.cn/docs/reference/flutter-cli",target:"_blank",rel:"noopener noreferrer"},u=c(`<h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> commands</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查 flutter 环境是否正确</span>
$ flutter doctor 

<span class="token comment"># flutter create 创建工程</span>
<span class="token comment">#  配置</span>
<span class="token comment">#   -template=(app/module/package/plugin/skeleton) 创建工程模板</span>
<span class="token comment">#   -platforms=(ios/android/windows/linux/macos/web) 指定平台</span>
<span class="token comment">#   -a 指定 android 开发语言 (默认: kotlin)</span>
<span class="token comment">#   -i 指定 ios 开发语言 (默认: swift)</span>
$ flutter create <span class="token builtin class-name">test</span> <span class="token comment"># 创建 flutter test 项目</span>

<span class="token comment"># 清理</span>
$ flutter clean

<span class="token comment"># 获取依赖</span>
$ flutter pub get

<span class="token comment"># 运行 flutter 程序</span>
$ flutter run

<span class="token comment"># 发布 packages</span>
$ flutter packages pub publish --dry-run <span class="token comment"># 检查包</span>
$ flutter packages pub pushlish <span class="token comment"># 发布包</span>

<span class="token comment"># 构建 framework</span>
$ flutter build ios-framework <span class="token parameter variable">--output</span><span class="token operator">=</span>path/to/
<span class="token comment"># 构建 cocoapods framework</span>
$ flutter build ios-framework <span class="token parameter variable">--cocoapods</span> <span class="token parameter variable">--output</span><span class="token operator">=</span>path/to/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> env</h2>`,3),v={href:"https://fvm.app",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/leoafarias/fvm",target:"_blank",rel:"noopener noreferrer"},f=e("blockquote",null,[e("p",null,"Flutter Version Management: A simple CLI to manage Flutter SDK versions.")],-1),h={href:"https://github.com/fluttertools/sidekick",target:"_blank",rel:"noopener noreferrer"},k=e("blockquote",null,[e("p",null,"A simple app to make Flutter development more delightful")],-1);function _(g,x){const s=l("ExternalLinkIcon");return r(),i("div",null,[o(" more "),m,e("ul",null,[e("li",null,[e("a",p,[n("Flutter 命令行文档"),a(s)])])]),u,e("ul",null,[e("li",null,[e("a",v,[n("FVM"),a(s)]),n("👉🏻 "),e("a",b,[n("🐙"),a(s)]),f]),e("li",null,[e("a",h,[n("Sidekick for Flutter"),a(s)]),k])])])}const V=t(d,[["render",_],["__file","0x02.command.html.vue"]]);export{V as default};
