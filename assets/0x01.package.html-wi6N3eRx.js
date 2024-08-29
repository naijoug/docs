import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as l,c as i,a as c,b as s,e as n,d as e,f as t}from"./app-w3bKIIf-.js";const r={},d=s("h2",{id:"spm",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#spm","aria-hidden":"true"},"#"),n(" SPM")],-1),u=s("blockquote",null,[s("p",null,"Swift Package Manager")],-1),m={href:"https://github.com/apple/swift-package-manager",target:"_blank",rel:"noopener noreferrer"},k=t(`<h3 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看版本</span>
$ swift package <span class="token parameter variable">--version</span>
<span class="token comment"># 查看帮助</span>
$ swift package <span class="token parameter variable">--help</span>
<span class="token comment"># 创建 executable 类型项目</span>
$ swift package init <span class="token parameter variable">--type</span><span class="token operator">=</span>executable 
<span class="token comment"># 生成一个 Xcode 项目</span>
$ swift package generate-xcodeproj
<span class="token comment"># 编译项目</span>
$ swift build
<span class="token comment"># 运行可执行文件</span>
$ swift run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cocoapods" tabindex="-1"><a class="header-anchor" href="#cocoapods" aria-hidden="true">#</a> Cocoapods</h2><blockquote><p>The Cocoa Dependency Manager.</p></blockquote>`,4),v={href:"https://github.com/CocoaPods/CocoaPods",target:"_blank",rel:"noopener noreferrer"},b={href:"https://rubydoc.info/gems/cocoapods",target:"_blank",rel:"noopener noreferrer"},g=s("hr",null,null,-1),h={href:"https://www.desgard.com/2020/09/16/cocoapods-story-4.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.desgard.com/2020/10/12/cocoapods-story-5.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<h3 id="commands-1" tabindex="-1"><a class="header-anchor" href="#commands-1" aria-hidden="true">#</a> Commands</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ brew <span class="token function">install</span> cocoapods        <span class="token comment"># brew 安装 cocoapods</span>

<span class="token comment"># 参数说明:</span>
<span class="token comment">#   --no-repo-update : \`pod install\` &amp; \`pod update\` 会默认执行\`pod repo update\`会更新本地pod索引,加上这个参数就仅跟新当前项目需要的框架。</span>
<span class="token comment">#   --verbose :         显示具体的输出信息</span>
<span class="token comment">#   --silent :          不显示具体的输出信息</span>
$ pod init          <span class="token comment"># 在当前目录创建 \`Podfile\` 文件</span>
$ pod <span class="token function">install</span>       <span class="token comment"># 安装 Podfile 中的依赖库</span>
$ pod update        <span class="token comment"># 更新 Podfile 中的依赖库</span>
$ pod --no-repo-update <span class="token parameter variable">--verbose</span> update     <span class="token comment"># 仅更新当前项目框架</span>

<span class="token comment"># 在本机注册一个Cocoapods账号</span>
<span class="token comment"># 格式 : \`pod trunk register 邮箱 &#39;昵称&#39; --description=&#39;设备信息&#39;\`</span>
<span class="token comment">#   第一次注册后，切换设备后继续使用这个命令进行登录(可以不输入昵称)，</span>
<span class="token comment">#   \`--description\` : 用于区分不同的设备</span>
$ pod trunk register xxx@mail.com <span class="token string">&#39;xxx&#39;</span> <span class="token parameter variable">--description</span><span class="token operator">=</span><span class="token string">&#39;macbook&#39;</span>

<span class="token comment"># 查看注册信息</span>
<span class="token comment">#   Pods : 提交的库的信息</span>
<span class="token comment">#   Sessions : 注册的设备信息</span>
$ pod trunk me 

<span class="token comment"># 创建\`Podspec\`文件</span>
<span class="token comment"># 已经创建后项目的情况下，可以使用此命令创建\`.podspec\`文件</span>
$ pod spec create <span class="token string">&#39;XXKit&#39;</span>
$ pod spec lint XXKit.podspec <span class="token comment"># 远程校验 Podspec 文件是否有错误</span>

<span class="token comment"># 根据Cocoapods的项目模板，创建\`Podspec\`文件和一个空项目</span>
<span class="token comment"># 创建的过程，可以通过命令行输入项目的相关信息</span>
$ pod lib create <span class="token string">&#39;XXKit&#39;</span>

<span class="token comment"># 本地校验 Podspec 文件是否有错误</span>
<span class="token comment"># 参数说明:</span>
<span class="token comment">#   --verbose :         显示具体的输出信息</span>
<span class="token comment">#   --allow-warnings :  可以屏蔽用到的第三方框架的警告</span>
<span class="token comment">#   --fail-fast :       出现错误就立即定制校验(正常情况是会校验完所有错误，才会停止)</span>
<span class="token comment">#   --use-libraries :   用到了库文件需要加上这个参数</span>
<span class="token comment">#   --sources :         包含了 Cocoapods 仓库以外的其他仓库</span>
<span class="token comment">#   --subspec=XXX :     校验某个子模块</span>
$ pod lib lint XXKit.podspec

<span class="token comment"># 上传到 CocoaPods 官方仓库</span>
$ pod trunk push XXKit.podspec                  <span class="token comment"># 将\`Podspec\`上传到 CocoaPods  官方的仓库中</span>
$ pod trunk push XXKit.podspec <span class="token parameter variable">--verbose</span>        <span class="token comment"># 显示上传信息</span>
$ pod trunk add-owner <span class="token string">&#39;XXKit&#39;</span> <span class="token string">&#39;xxx@mail.com&#39;</span>    <span class="token comment"># 添加一个小伙伴到你项目</span>
$ pod search XXKit                              <span class="token comment"># 查询 Cocoapods 是否包含这个库</span>

<span class="token comment"># 上传到私有仓库</span>
$ pod repo                                      <span class="token comment"># 查看当前 Repo 仓库有哪些</span>
$ pod repo <span class="token function">add</span> XXSpecs git@xxx.com:xxx/XXSpecs.git <span class="token comment"># 添加一个repo specs</span>
$ pod repo remove XXSpecs                       <span class="token comment"># 删除一个repo specs</span>
$ pod repo push XXSpecs XXKit.podspec           <span class="token comment"># 添加specs文件到指定的远程repo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="podfile" tabindex="-1"><a class="header-anchor" href="#podfile" aria-hidden="true">#</a> Podfile</h3><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>source <span class="token string-literal"><span class="token string">&#39;https://github.com/CocoaPods/Sepcs.git&#39;</span></span> <span class="token comment"># 指定获得框架的源代码的仓库</span>
source <span class="token string-literal"><span class="token string">&#39;https://xxx.gitt.com/xxx/XXSpecs.git&#39;</span></span>   <span class="token comment"># 指定私有仓库</span>

use_frameworks<span class="token operator">!</span> <span class="token comment"># 编译成动态库(.framework)[Swift库必须写],不写编译成静态库(.a)</span>
<span class="token symbol">platform</span><span class="token operator">:</span> ios<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;11.0&#39;</span></span> <span class="token comment"># 指定在哪个版本编译</span>

<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">debug_pods</span></span>
    pod <span class="token string-literal"><span class="token string">&#39;SwiftLint&#39;</span></span><span class="token punctuation">,</span> <span class="token symbol">:configurations</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;Debug&#39;</span></span><span class="token punctuation">]</span>
<span class="token keyword">end</span>
<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">app_pods</span></span>
    pod <span class="token string-literal"><span class="token string">&#39;Test&#39;</span></span><span class="token punctuation">,</span> <span class="token symbol">:git</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;https://github.com/xxx/Test.git&quot;</span></span> <span class="token comment"># 获取指定 url 版本库</span>
    pod <span class="token string-literal"><span class="token string">&#39;XXKit&#39;</span></span><span class="token punctuation">,</span> <span class="token symbol">:path</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&#39;LocalPods/Modules/XXKit&#39;</span></span> <span class="token comment"># 开发模式, 引用本地开发库</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="podsepc" tabindex="-1"><a class="header-anchor" href="#podsepc" aria-hidden="true">#</a> Podsepc</h3>`,5),x=s("code",null,"resources",-1),X=s("code",null,"resource_bundles",-1),w={href:"https://yoxisem544.github.io/cocoapods-resources/",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment"># 不推荐: 直接将资源拷贝到主工程(容易造成资源重名冲突)</span>
spec<span class="token punctuation">.</span>resources <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;Sources/Resource/*.png&#39;</span></span><span class="token punctuation">]</span>
<span class="token comment"># 推荐: bundle 引入模式</span>
<span class="token comment">#   动态库: 在所在 framework 下生成资源 bundle</span>
<span class="token comment">#   静态库: 在主工程下生成资源 bundle</span>
spec<span class="token punctuation">.</span>resource_bundles <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">&#39;XXKit&#39;</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;Sources/Resource/*&#39;</span></span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>Pod<span class="token double-colon punctuation">::</span><span class="token class-name">Spec</span><span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token keyword">do</span> <span class="token operator">|</span>s<span class="token operator">|</span>
  s<span class="token punctuation">.</span>name                  <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;XX Kit&#39;</span></span>
  s<span class="token punctuation">.</span>version               <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;0.0.1&#39;</span></span>
  s<span class="token punctuation">.</span>summary               <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;XX Kit.&#39;</span></span>        
  s<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;-</span><span class="token symbol">DESC</span></span><span class="token string">
                    This is XXKit.
                  </span><span class="token delimiter"><span class="token symbol">DESC</span></span></span>               
  s<span class="token punctuation">.</span>homepage              <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;https://github.com/xxx/XXKit&#39;</span></span>
  s<span class="token punctuation">.</span>license               <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token symbol">:type</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&#39;MIT&#39;</span></span><span class="token punctuation">,</span> <span class="token symbol">:file</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&#39;LICENSE&#39;</span></span> <span class="token punctuation">}</span>
  s<span class="token punctuation">.</span>author                <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-literal"><span class="token string">&#39;xxx&#39;</span></span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&#39;xxx@mail.com&#39;</span></span> <span class="token punctuation">}</span>
  s<span class="token punctuation">.</span>source                <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token symbol">:git</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&#39;https://github.com/xxx/XXKit.git&#39;</span></span><span class="token punctuation">,</span> <span class="token symbol">:tag</span> <span class="token operator">=&gt;</span> s<span class="token punctuation">.</span>version<span class="token punctuation">.</span>to_s <span class="token punctuation">}</span>
  s<span class="token punctuation">.</span>swift_version         <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;5.0&#39;</span></span>
  s<span class="token punctuation">.</span>ios<span class="token punctuation">.</span>deployment_target <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;11.0&#39;</span></span>

  s<span class="token punctuation">.</span>frameworks            <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;UIKit&#39;</span></span>
  s<span class="token punctuation">.</span>source_files          <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Sources/*.swift&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Sources/Module/**/*&quot;</span></span><span class="token punctuation">]</span>
  s<span class="token punctuation">.</span>resource_bundles      <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">&#39;XXKit&#39;</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;Sources/Resource/*&#39;</span></span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  
  s<span class="token punctuation">.</span>dependency <span class="token string-literal"><span class="token string">&#39;Ext&#39;</span></span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="carthage" tabindex="-1"><a class="header-anchor" href="#carthage" aria-hidden="true">#</a> Carthage</h2><blockquote><p>A simple, decentralized dependency manager for Cocoa</p></blockquote>`,4),C={href:"https://github.com/Carthage/Carthage",target:"_blank",rel:"noopener noreferrer"};function P($,S){const a=p("ExternalLinkIcon");return l(),i("div",null,[c(" more "),d,u,s("ul",null,[s("li",null,[s("a",m,[n("Swift Package Manager"),e(a)])])]),k,s("ul",null,[s("li",null,[s("a",v,[n("CocoaPods"),e(a)])]),s("li",null,[s("a",b,[n("CocoaPods doc"),e(a)])])]),g,s("ul",null,[s("li",null,[s("a",h,[n("2020-09-16 Podfile 的解析逻辑"),e(a)])]),s("li",null,[s("a",f,[n("2020-10-12 Podspec 文件分析"),e(a)])])]),_,s("ul",null,[s("li",null,[x,n(" vs "),X,s("ul",null,[s("li",null,[s("a",w,[n("Cocoapods Resources Management?"),e(a)])])])])]),y,s("ul",null,[s("li",null,[s("a",C,[n("Carthage"),e(a)])])])])}const E=o(r,[["render",P],["__file","0x01.package.html.vue"]]);export{E as default};
