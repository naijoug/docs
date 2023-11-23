import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as n,c as r,b as e,e as i,d as o,f as c}from"./app-NiSSZH60.js";const s={},t=e("h1",{id:"xcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#xcode","aria-hidden":"true"},"#"),i(" Xcode")],-1),p=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),i(" Reference")],-1),u={href:"https://github.com/XcodesOrg/XcodesApp",target:"_blank",rel:"noopener noreferrer"},h=e("blockquote",null,[e("p",null,"The easiest way to install and switch between multiple versions of Xcode - with a mouse click.")],-1),v=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># xed : </span>
$ xed <span class="token builtin class-name">.</span> // 打开当前目录下的 Xcode 项目
<span class="token comment"># 启动 Xcode</span>
$ xed <span class="token parameter variable">--launch</span>
$ xed <span class="token parameter variable">-x</span>
<span class="token comment"># 启动 Xcode 项目 </span>
$ xed xxx.xcodeproj   // <span class="token operator">==</span> <span class="token function">open</span> xxx.xcodeproj
$ xed xxx.xcworkspace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="folders" tabindex="-1"><a class="header-anchor" href="#folders" aria-hidden="true">#</a> Folders</h2>`,3),m=e("p",null,"Xcode 文件夹说明",-1),b={href:"https://stackoverflow.com/questions/29930198/can-i-delete-data-from-ios-devicesupport",target:"_blank",rel:"noopener noreferrer"},x=c("<ul><li><code>iOS DeviceSupport</code><ul><li>路径 : <code>~/Library/Developer/Xcode/iOS DeviceSupport</code></li><li>作用 : 连接设备的自动创建，[Processing symbol files] 就是在往这个文件夹写入文件。删除之后，再次连接设备会重新生成。</li><li>建议 : 占用空间大，没用的旧版本可以删除。</li></ul></li><li><code>DerivedData</code><ul><li>路径 : <code>~/Library/Developer/Xcode/DerivedData</code></li><li>作用 : Xcode 编译项目产生的文件，可重新生成。</li><li>建议 : 没用的旧项目可以删除，当前开发的项目应该保留，这可以加快项目编译时间。</li></ul></li><li><code>Archives</code><ul><li>路径 : <code>~/Library/Developer/Xcode/Archives</code></li><li>作用 : 提交 App Store 或者 Adhoc 打包的 ipa 文件，删除了不可恢复。</li><li>建议 : 如果需要线上需要调试的版本，应该保留。</li></ul></li><li><code>Provisioning Profiles</code><ul><li>路径 : <code>~/Library/MobileDevice/Provisioning Profiles</code></li><li>作用 : Xcode 中各种开发证书 Provisioning Profile。</li><li>建议 : 开发者不要删除，删除之后需要再次从苹果开发者网站下载。</li></ul></li><li><code>iPhone Simulator</code><ul><li>路径 : <code>~/Library/Application Support/iPhone Simulator</code></li><li>作用 : Xcode6 之前的模拟器的位置。</li><li>建议 : 已不存在，不用关注。</li></ul></li><li><code>Devices</code><ul><li>路径 : <code>~/Library/Developer/CoreSimulator/Devices</code></li><li>作用 : Xcode6 之后的模拟器的位置。每个长串名字的文件夹代表一个模拟器，在它的 device.plist 文件可以看到具体的哪个模拟器型号。</li><li>建议 : 开发者保留，删除之后再需要旧版本的模拟器，还需要重新下载。</li></ul></li><li><code>com.apple.dt.Xcode</code><ul><li>路径 : <code>~/Library/Caches/com.apple.dt.Xcode</code></li><li>作用 : 缓存</li><li>建议 : 占用空间小，可以不关注。</li></ul></li><li><code>Backup</code><ul><li>路径 : <code>~/Library/Application Support/MobileSync/Backup</code></li><li>作用 : iTunes 对 iPhone 设备的备份。</li><li>建议 : 如果需要备份手机可以保留。旧的备份可以删除，保留最新。</li></ul></li><li><code>XCPGDevices</code><ul><li>路径 : <code>~/Library/Developer/XCPGDevices</code></li><li>作用 : 模拟器上 App 应用运行生成缓存文件。</li><li>建议 : 可以删除</li></ul></li><li><code>Plug-ins</code><ul><li>路径 : <code>~/Library/Application Support/Developer/Shared/Xcode/Plug-ins</code></li><li>作用 : Xcode 安装的插件</li><li>建议 : 不使用的插件可以删除</li></ul></li><li><code>DocSets</code><ul><li>路径 : <code>~/Library/Developer/Shared/Documentation/DocSets</code></li><li>作用 : Xcode 开发文档</li><li>建议 : 开发者应该保留，开发必备资料库</li></ul></li></ul>",1);function _(f,X){const l=d("ExternalLinkIcon");return n(),r("div",null,[t,p,e("ul",null,[e("li",null,[e("a",u,[i("XcodesApp"),o(l)]),h])]),v,e("blockquote",null,[m,e("p",null,[e("a",b,[i("Can I delete data from iOS DeviceSupport?"),o(l)])])]),x])}const S=a(s,[["render",_],["__file","Xcode.html.vue"]]);export{S as default};
