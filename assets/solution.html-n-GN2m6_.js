import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c as o,b as e,e as n,d as a,f as r}from"./app-Ic57kXOs.js";const c={},u=e("h2",{id:"uicollectionview-layout",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uicollectionview-layout","aria-hidden":"true"},"#"),n(" UICollectionView layout")],-1),p={href:"https://mp.weixin.qq.com/s/I6vKOTorr0tYeETzDB0yZQ",target:"_blank",rel:"noopener noreferrer"},d=e("h2",{id:"scrollview-nested",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scrollview-nested","aria-hidden":"true"},"#"),n(" ScrollView Nested")],-1),b={href:"https://juejin.im/post/5c63ee7d51882562654aaf37",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/ApterKing/NestedScrollView",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.lymanli.com/2018/05/05/nest-tableview/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.jianshu.com/p/df01610b4e73",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/p/040772693872",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"insert-a-custom-view-to-uitextview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#insert-a-custom-view-to-uitextview","aria-hidden":"true"},"#"),n(" Insert a custom view to UITextView")],-1),f={href:"https://github.com/linkedin/Hakawai",target:"_blank",rel:"noopener noreferrer"},g=e("blockquote",null,[e("p",null,"A powerful, extensible UITextView.")],-1),w={href:"https://github.com/vlas-voloshin/SubviewAttachingTextView",target:"_blank",rel:"noopener noreferrer"},q=e("blockquote",null,[e("p",null,"UITextView behavior and subclass that allow embedding subviews as text attachments.")],-1),V=e("h2",{id:"uicollectionview-inside-uitableviewcell",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uicollectionview-inside-uitableviewcell","aria-hidden":"true"},"#"),n(" UICollectionView inside UITableViewCell")],-1),x={href:"https://stackoverflow.com/questions/24126708",target:"_blank",rel:"noopener noreferrer"},I={href:"https://stackoverflow.com/questions/56318626",target:"_blank",rel:"noopener noreferrer"},y={href:"https://medium.com/better-programming/self-sizing-hell-uitableview-and-uicollectionview-cells-509f0fdc7ff1",target:"_blank",rel:"noopener noreferrer"},U=e("h2",{id:"automating-version-build-number",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#automating-version-build-number","aria-hidden":"true"},"#"),n(" Automating Version & Build Number")],-1),N={href:"https://developer.apple.com/library/archive/qa/qa1827/_index.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://stackoverflow.com/questions/9258344/better-way-of-incrementing-build-number",target:"_blank",rel:"noopener noreferrer"},C={href:"https://gist.github.com/acrookston/55d69a16cd5363426dbf7a3d6a9ee6ce",target:"_blank",rel:"noopener noreferrer"},T=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;Release&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;<span class="token variable">\${CONFIGURATION}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">plist</span><span class="token operator">=</span><span class="token string">&quot;Info.plist&quot;</span>
<span class="token assign-left variable">shortVersion</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>/usr/libexec/PlistBuddy <span class="token parameter variable">-c</span> <span class="token string">&quot;Print :CFBundleShortVersionString&quot;</span> <span class="token string">&quot;<span class="token variable">\${PROJECT_DIR}</span>/<span class="token variable">$plist</span>&quot;</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;versionNumber: <span class="token variable">$shortVersion</span>&quot;</span>
<span class="token assign-left variable">buildNumber</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>/usr/libexec/PlistBuddy <span class="token parameter variable">-c</span> <span class="token string">&quot;Print CFBundleVersion&quot;</span> <span class="token string">&quot;<span class="token variable">\${PROJECT_DIR}</span>/<span class="token variable">$plist</span>&quot;</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;pre buildNumber: <span class="token variable">$buildNumber</span>&quot;</span>
<span class="token assign-left variable">buildNumber</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%y%m%d.%H%M%S&quot;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;current buildNumber: <span class="token variable">$buildNumber</span>&quot;</span>

/usr/libexec/PlistBuddy <span class="token parameter variable">-c</span> <span class="token string">&quot;Set :CFBundleVersion <span class="token variable">$buildNumber</span>&quot;</span> <span class="token string">&quot;<span class="token variable">\${PROJECT_DIR}</span>/<span class="token variable">$plist</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="userdefaults-data-loss" tabindex="-1"><a class="header-anchor" href="#userdefaults-data-loss" aria-hidden="true">#</a> UserDefaults data loss</h2>`,2),B={href:"https://damir.me/the-mystery-of-the-disappearing-nsuserdefaults-keys/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://forums.developer.apple.com/thread/15685",target:"_blank",rel:"noopener noreferrer"};function D(A,O){const s=l("ExternalLinkIcon");return i(),o("div",null,[u,e("ul",null,[e("li",null,[e("a",p,[n("2023-07-23 UICollectionView自定义layout实现按需算高"),a(s)])])]),d,e("ul",null,[e("li",null,[e("a",b,[n("2019.02.13 多层 UIScrollView 嵌套滚动解决方案"),a(s)])]),e("li",null,[e("a",h,[n("2018.09.09 NestedScrollView"),a(s)])]),e("li",null,[e("a",v,[n("2018.05.05 iOS 多级 UIScrollView 嵌套的实现方案"),a(s)])]),e("li",null,[e("a",k,[n("2017.05.08 iOS 嵌套UIScrollview的滑动冲突另一种解决方案"),a(s)])]),e("li",null,[e("a",m,[n("2017.05.02 嵌套UIScrollview的滑动冲突解决方案"),a(s)])])]),_,e("ul",null,[e("li",null,[e("a",f,[n("Hakawai"),a(s)]),g]),e("li",null,[e("a",w,[n("SubviewAttachingTextView"),a(s)]),n(" : 允许 UITextView 嵌入 UIView 视图 "),q])]),V,e("ul",null,[e("li",null,[e("a",x,[n("UICollectionView inside a UITableViewCell — dynamic height?"),a(s)])]),e("li",null,[e("a",I,[n("Dynamic-height UICollectionView inside a dynamic-height UITableViewCell"),a(s)])]),e("li",null,[e("a",y,[n("Self-Sizing Hell — UITableView and UICollectionView Cells"),a(s)])])]),U,e("ul",null,[e("li",null,[e("a",N,[n("Automating Version and Build Numbers Using agvtool"),a(s)])]),e("li",null,[e("a",S,[n("Better way of incrementing build number?"),a(s)])]),e("li",null,[e("a",C,[n("Automatic build versions from git in Xcode"),a(s)])])]),T,e("ul",null,[e("li",null,[e("a",B,[n("The Mystery of the Disappearing NSUserDefaults Keys"),a(s)])]),e("li",null,[e("a",$,[n("NSUserDefaults values lost on background launch"),a(s)])])])])}const E=t(c,[["render",D],["__file","solution.html.vue"]]);export{E as default};
