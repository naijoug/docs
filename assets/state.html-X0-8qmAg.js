import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as r,c,a as i,b as n,e,d as a,f as t}from"./app-8FswgYYv.js";const p={},u=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),e(" reference")],-1),d=n("a",{href:"%E2%9C%85"},null,-1),h={href:"https://juejin.cn/post/7296286286154776595",target:"_blank",rel:"noopener noreferrer"},_=n("blockquote",null,[n("p",null,[e("作者对比了状态库 "),n("code",null,"GetX vs RiverPod + flutter_hooks"),e("，路由库对比 "),n("code",null,"GetX router vs go_router"),e("，国际化库对比 "),n("code",null,"GetX vs flutter_localizations"),e("。作者的没有给出自己的选择，要么 "),n("code",null,"GetX"),e(" 全家桶梭哈或者其它搭配。")])],-1),k=n("a",{href:"%E2%9C%85"},null,-1),v={href:"https://juejin.cn/post/7163925807893577735",target:"_blank",rel:"noopener noreferrer"},b=n("blockquote",null,[n("p",null,[e("作者对比了 "),n("code",null,"Provider vs Riverpod vs BLoC vs flutter_redux vs GetX"),e("。最佳选择："),n("code",null,"RiverPod"),e("。")])],-1),m=n("a",{href:"%E2%9C%85"},null,-1),f={href:"https://juejin.cn/post/7066707540502904862",target:"_blank",rel:"noopener noreferrer"},g=n("blockquote",null,[n("p",null,[e("作者对比了 "),n("code",null,"BLoC vs Provider vs GetX"),e("。给出建议：大型工程化项目适合 "),n("code",null,"BLoC"),e("；"),n("code",null,"Provider"),e("很纯粹易用；"),n("code",null,"GetX"),e(" 一把梭哈，极度适合新手开发者。")])],-1),x=n("a",{href:"%E2%9C%85"},null,-1),C={href:"https://juejin.cn/post/7061784793150652452",target:"_blank",rel:"noopener noreferrer"},P=n("blockquote",null,[n("p",null,[e("作者对比了 "),n("code",null,"Provider vs BLoc vs RiverPod"),e("。最终结论：推荐使用 "),n("code",null,"RiverPod"),e("。")])],-1),j=n("h2",{id:"provider",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#provider","aria-hidden":"true"},"#"),e(" Provider")],-1),q={href:"https://pub.dev/packages/provider",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/rrousselGit/provider",target:"_blank",rel:"noopener noreferrer"},B=n("blockquote",null,[n("p",null,"InheritedWidgets, but simple")],-1),G=n("hr",null,null,-1),w=n("a",{href:""},null,-1),N={href:"https://juejin.cn/post/6844903866706706439",target:"_blank",rel:"noopener noreferrer"},R=n("a",{href:""},null,-1),L={href:"https://juejin.cn/post/6844903864852807694",target:"_blank",rel:"noopener noreferrer"},X=t(`<h3 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> concept</h3><ul><li><code>ChangeNotifier</code> : 用于发送变化通知，模型数据改变时调用 <code>notifyListeners()</code> 通知订阅者。</li><li><code>ChangeNotifierProvider</code> : 用于向子节点提供一个 <code>ChangeNotifier</code> 实例。</li><li><code>Consumer</code> : 订阅 <code>ChangeNotifier</code> 的变化通知，发生变化时会调用 <code>builder</code> 函数。</li></ul><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h3><blockquote><p>添加依赖</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flutter pub <span class="token function">add</span> provider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
<span class="token comment">// 上层 Widget 注入</span>
<span class="token class-name">ChangeNotifierProvider</span><span class="token punctuation">(</span>
  create<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">MyModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">TopWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">// 下层 Widget 使用</span>
<span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyModel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>
  builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> model<span class="token punctuation">,</span> _<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">BottomWidget</span><span class="token punctuation">(</span>model<span class="token punctuation">:</span> model<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">// Consumer - child 属于可以指定不需要刷新重建的子组件 </span>
<span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyModel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>
  builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> model<span class="token punctuation">,</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">BottomWidget</span><span class="token punctuation">(</span>model<span class="token punctuation">:</span> model<span class="token punctuation">,</span> child<span class="token punctuation">:</span> child<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">ChildWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="riverpod" tabindex="-1"><a class="header-anchor" href="#riverpod" aria-hidden="true">#</a> RiverPod</h2>`,8),E={href:"https://riverpod.dev",target:"_blank",rel:"noopener noreferrer"},W={href:"https://pub.dev/packages/riverpod",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/rrousselGit/riverpod",target:"_blank",rel:"noopener noreferrer"},S=n("blockquote",null,[n("p",null,"A reactive caching and data-binding framework. Riverpod makes working with asynchronous code a breeze.")],-1),V=n("hr",null,null,-1),F=n("a",{href:""},null,-1),I={href:"https://juejin.cn/post/7063111063427874847",target:"_blank",rel:"noopener noreferrer"},A=t(`<h3 id="concept-1" tabindex="-1"><a class="header-anchor" href="#concept-1" aria-hidden="true">#</a> concept</h3><blockquote><p><code>RiverPod</code> 对比 <code>Provider</code> 的优点：</p></blockquote><ul><li>更少的模版代码</li><li>不依赖 <code>BuildContext</code></li><li>编译安全</li></ul><h2 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> usage</h2><blockquote><p>安装依赖</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flutter pub <span class="token function">add</span> flutter_riverpod
flutter pub <span class="token function">add</span> riverpod_annotation
flutter pub <span class="token function">add</span> dev:riverpod_generator
flutter pub <span class="token function">add</span> dev:build_runner
flutter pub <span class="token function">add</span> dev:custom_lint
flutter pub <span class="token function">add</span> dev:riverpod_lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="bloc" tabindex="-1"><a class="header-anchor" href="#bloc" aria-hidden="true">#</a> Bloc</h2>`,8),z={href:"https://bloclibrary.dev",target:"_blank",rel:"noopener noreferrer"},T={href:"https://pub.dev/packages/bloc",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/felangel/bloc",target:"_blank",rel:"noopener noreferrer"},D=n("blockquote",null,[n("p",null,"A predictable state management library that helps implement the BLoC design pattern")],-1),H=n("hr",null,null,-1),J=n("h2",{id:"getx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getx","aria-hidden":"true"},"#"),e(" GetX")],-1),K={href:"https://pub.dev/packages/getx",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/jonataslaw/getx",target:"_blank",rel:"noopener noreferrer"},U=n("blockquote",null,[n("p",null,"Open screens/snackbars/dialogs/bottomSheets without context, manage states and inject dependencies easily with Get.")],-1),Y=n("hr",null,null,-1),Z=n("h2",{id:"get-it",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#get-it","aria-hidden":"true"},"#"),e(" get_it")],-1),$={href:"https://pub.dev/packages/get_it",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://github.com/fluttercommunity/get_it",target:"_blank",rel:"noopener noreferrer"},en=n("blockquote",null,[n("p",null,"Get It - Simple direct Service Locator that allows to decouple the interface from a concrete implementation and to access the concrete implementation from everywhere in your App. 简单直接的服务定位器，可以使接口和具体的实现解耦，可以在应用的任意位置访问具体实现。")],-1);function sn(an,tn){const s=l("ExternalLinkIcon");return r(),c("div",null,[i(" more "),u,n("ul",null,[n("li",null,[d,n("a",h,[e("2023-11-01 flutter状态库到底用哪个！"),a(s)]),_]),n("li",null,[k,n("a",v,[e("2022-11-09 Flutter 工程化框架选择 — 状态管理何去何从"),a(s)]),b]),n("li",null,[m,n("a",f,[e("2022-02-20 Flutter 项目该如何选择状态管理？"),a(s)]),g]),n("li",null,[x,n("a",C,[e("2022-02-07 2021 年的 Flutter 状态管理：如何选择？"),a(s)]),P])]),j,n("ul",null,[n("li",null,[n("a",q,[e("provider"),a(s)]),e(" 👉🏻 "),n("a",y,[e("🐙"),a(s)]),B])]),G,n("ul",null,[n("li",null,[w,n("a",N,[e("2019-06-16 全面理解 State 与 Provider"),a(s)])]),n("li",null,[R,n("a",L,[e("2019-06-13 状态管理指南篇 —— Provider"),a(s)])])]),X,n("ul",null,[n("li",null,[n("a",E,[e("RiverPod"),a(s)]),e(" 👉🏻 "),n("a",W,[e("pub"),a(s)]),e(),n("a",M,[e("🐙"),a(s)]),S])]),V,n("ul",null,[n("li",null,[F,n("a",I,[e("2022-02-10 Flutter Riverpod 全面深入解析，为什么官方推荐它？"),a(s)])])]),A,n("ul",null,[n("li",null,[n("a",z,[e("Bloc"),a(s)]),e(" 👉🏻 "),n("a",T,[e("pub"),a(s)]),e(),n("a",O,[e("🐙"),a(s)]),D])]),H,J,n("ul",null,[n("li",null,[n("a",K,[e("GetX"),a(s)]),e(" 👉🏻 "),n("a",Q,[e("🐙"),a(s)]),U])]),Y,Z,n("ul",null,[n("li",null,[n("a",$,[e("get_it"),a(s)]),e(" 👉🏻 "),n("a",nn,[e("🐙"),a(s)]),en])])])}const rn=o(p,[["render",sn],["__file","state.html.vue"]]);export{rn as default};
