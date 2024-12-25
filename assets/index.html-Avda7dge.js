import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as r,c as i,b as e,e as n,d as t,f as a}from"./app-NPdVLJBN.js";const c={},p=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),n(" Reference")],-1),d={href:"https://www.apple.com/certificateauthority",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/serhii-londar/open-source-mac-os-apps",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/macdao/ocds-guide-to-setting-up-mac",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/objective-see",target:"_blank",rel:"noopener noreferrer"},b={href:"https://doesitarm.com/",target:"_blank",rel:"noopener noreferrer"},k=e("blockquote",null,[e("p",null,"Apps that are reported to support Apple Silicon")],-1),_={href:"https://isapplesiliconready.com/",target:"_blank",rel:"noopener noreferrer"},f=e("blockquote",null,[e("p",null,"The complete guide for MacOS Apps Optimized for Apple Silicon Macs and the M1 Processor")],-1),g=e("h2",{id:"homebrew",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#homebrew","aria-hidden":"true"},"#"),n(" [Homebrew]")],-1),v=e("blockquote",null,[e("p",null,"🍺 The missing package manager for macOS (or Linux)"),e("p",null,"macOS 缺失的软件包的管理器")],-1),w={href:"https://github.com/Homebrew/brew",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/Homebrew/homebrew-cask",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/brunophilipe/Cakebrew",target:"_blank",rel:"noopener noreferrer"},y=e("blockquote",null,[e("p",null,"Manage your Homebrew formulas with style using Cakebrew.")],-1),x=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 brew</span>
/usr/bin/ruby <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/master/install<span class="token variable">)</span></span>&quot;</span>
    
<span class="token comment"># 安装</span>
$ brew tap caskroom/cask
<span class="token comment"># 使用</span>
$ brew cask search                  <span class="token comment"># 搜素所有可用</span>
$ brew cask search chrome           <span class="token comment"># 关键字搜索</span>
$ brew cask <span class="token function">install</span> google-chrome   <span class="token comment"># 安装</span>
$ brew cask uninstall google-chrome <span class="token comment"># 卸载</span>
$ brew cask list        <span class="token comment"># 查看Cask安装的软件</span>
$ brew cask info atom   <span class="token comment"># 查看特定关键信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开任何来源开关</span>
$ <span class="token function">sudo</span> spctl --master-disable
<span class="token comment"># app 已损坏无法打开</span>
$ <span class="token function">sudo</span> xattr <span class="token parameter variable">-d</span> com.apple.quarantine /Applications/xxxx.app

<span class="token comment"># macOS 显示和隐藏文件必须通过命令行进行操作，需要重启一下\`Finder\`才能生效。</span>
<span class="token comment">#   显示 - 隐藏文件的命令</span>
$ defaults <span class="token function">write</span> com.apple.finder AppleShowAllFiles <span class="token parameter variable">-bool</span> <span class="token boolean">true</span>
$ defaults <span class="token function">write</span> com.apple.finder AppleShowAllFiles YES
<span class="token comment">#   隐藏 - 隐藏文件的命令</span>
$ defaults <span class="token function">write</span> com.apple.finder AppleShowAllFiles <span class="token parameter variable">-bool</span> <span class="token boolean">false</span>
$ defaults <span class="token function">write</span> com.apple.finder AppleShowAllFiles NO

<span class="token comment"># 修改 Launchpad 显示大小</span>
<span class="token comment">#   调整每行数量</span>
$ defaults <span class="token function">write</span> com.apple.dock springboard-rows <span class="token parameter variable">-int</span> <span class="token number">7</span>
<span class="token comment">#   调整每列数量</span>
$ defaults <span class="token function">write</span> com.apple.dock springboard-columns <span class="token parameter variable">-int</span> <span class="token number">8</span>
<span class="token comment">#   重启 Launchpad</span>
$ defaults <span class="token function">write</span> com.apple.dock ResetLaunchPad <span class="token parameter variable">-bool</span> TRUE<span class="token punctuation">;</span> <span class="token function">killall</span> Dock

<span class="token comment"># 挂载 ntfs 分区 (外接 NTFS 移动硬盘)</span>
<span class="token comment">#   查看 NTFS 分区标识 (如 /dev/disk3)</span>
$ diskutil list 
<span class="token comment"># sudo mount -t ntfs -o rw,auto,nobrowse [NTFS 分区标识] [挂载的目录 如/opt/ntfs]</span>
$ <span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-t</span> ntfs <span class="token parameter variable">-o</span> rw,auto,nobrowse /dev/disk3 /opt/ntfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="software" tabindex="-1"><a class="header-anchor" href="#software" aria-hidden="true">#</a> Software</h2>`,4),A={href:"https://github.com/milanvarady/applite",target:"_blank",rel:"noopener noreferrer"},O=e("blockquote",null,[e("p",null,"User-friendly GUI macOS application for Homebrew Casks")],-1),D={href:"https://github.com/yonaskolb/Mint",target:"_blank",rel:"noopener noreferrer"},T=e("blockquote",null,[e("p",null,"A package manager that installs and runs executable Swift packages"),e("p",null,"Swift Package Manager Tools -> SPMT -> Spearmint -> Mint! 🌱😄")],-1),M={href:"http://zh.mweb.im",target:"_blank",rel:"noopener noreferrer"},$=e("blockquote",null,[e("p",null,"Markdown writing, note taking and static blog generator App")],-1),C={href:"https://github.com/exelban/stats",target:"_blank",rel:"noopener noreferrer"},P=e("blockquote",null,[e("p",null,"macOS system monitor in your menu bar")],-1),H={href:"https://github.com/videolan/vlc",target:"_blank",rel:"noopener noreferrer"},I=e("blockquote",null,[e("p",null,"VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.")],-1),F={href:"https://github.com/majd/ipatool",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"AppStore",-1),R=e("code",null,"ipa",-1),U=e("blockquote",null,[e("p",null,"Command-line tool that allows searching and downloading app packages (known as ipa files) from the iOS App Store")],-1),V={href:"https://ricks-apps.com/",target:"_blank",rel:"noopener noreferrer"},N=e("blockquote",null,[e("p",null,"Download websites to your computer.")],-1),W={href:"https://github.com/mitmproxy/mitmproxy",target:"_blank",rel:"noopener noreferrer"},j=e("blockquote",null,[e("p",null,"An interactive TLS-capable intercepting HTTP proxy for penetration testers and software developers.")],-1),B={href:"http://www.charlesproxy.com/",target:"_blank",rel:"noopener noreferrer"},z=e("blockquote",null,[e("p",null,"Web debugging proxy application.")],-1),E={href:"https://github.com/wulkano/Kap",target:"_blank",rel:"noopener noreferrer"},K=e("blockquote",null,[e("p",null,"An open-source screen recorder built with web technology")],-1),G={href:"https://github.com/dexterleng/vimac",target:"_blank",rel:"noopener noreferrer"},X=e("blockquote",null,[e("p",null,"Productive macOS keyboard-driven navigation")],-1),J={href:"https://github.com/jgraph/drawio-desktop",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/keeweb/keeweb",target:"_blank",rel:"noopener noreferrer"},Q=e("blockquote",null,[e("p",null,"Free cross-platform password manager compatible with KeePass")],-1),Z={href:"https://github.com/Ji4n1ng/OpenInTerminal",target:"_blank",rel:"noopener noreferrer"},ee=e("blockquote",null,[e("p",null,"✨ Finder Toolbar app for macOS to open the current directory in Terminal, iTerm, Hyper or Alacritty.")],-1),ne={href:"https://github.com/dwarvesf/hidden",target:"_blank",rel:"noopener noreferrer"},oe=e("blockquote",null,[e("p",null,"An ultra-light MacOS utility that helps hide menu bar icons")],-1),te={href:"https://github.com/Mortennn/Dozer",target:"_blank",rel:"noopener noreferrer"},ae=e("blockquote",null,[e("p",null,"Hide menu bar icons on macOS")],-1),le={href:"https://betterdisplay.pro/",target:"_blank",rel:"noopener noreferrer"},se={href:"https://github.com/waydabber/BetterDisplay",target:"_blank",rel:"noopener noreferrer"},re=e("blockquote",null,[e("p",null,"Unlock your displays on your Mac! Flexible HiDPI scaling, XDR/HDR extra brightness, virtual screens, DDC control, extra dimming, PIP/streaming, EDID override and lots more!")],-1),ie={href:"https://xscopeapp.com/",target:"_blank",rel:"noopener noreferrer"},ce=e("blockquote",null,[e("p",null,"A powerful set of tools that are ideal for measuring, inspecting & testing on-screen graphics and layouts.")],-1),pe={href:"https://github.com/eczarny/spectacle",target:"_blank",rel:"noopener noreferrer"},de=e("blockquote",null,[e("p",null,"Spectacle allows you to organize your windows without using a mouse.")],-1),ue={href:"https://getstandapp.com/",target:"_blank",rel:"noopener noreferrer"},he=e("blockquote",null,[e("p",null,"Just a simple app for your Mac that reminds you to stand up once an hour.")],-1),me={href:"https://github.com/wtfutil/wtf",target:"_blank",rel:"noopener noreferrer"},be=e("blockquote",null,[e("p",null,"The personal information dashboard for your terminal")],-1),ke={href:"https://github.com/vslavik/poedit",target:"_blank",rel:"noopener noreferrer"},_e=e("blockquote",null,[e("p",null,"Translations editor for Mac, Windows and Unix")],-1),fe={href:"https://github.com/rustdesk/rustdesk",target:"_blank",rel:"noopener noreferrer"},ge=e("blockquote",null,[e("p",null,"An open-source remote desktop, and alternative to TeamViewer.")],-1),ve={href:"https://wangchujiang.com/rightmenu-master/",target:"_blank",rel:"noopener noreferrer"},we={href:"https://github.com/jaywcjlove/rightmenu-master",target:"_blank",rel:"noopener noreferrer"},Se=e("blockquote",null,[e("p",null,"An exceptional Finder right-click menu enhancement tool that makes your right-click menu more powerful.")],-1),qe={href:"https://www.koodoreader.com",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://github.com/koodo-reader/koodo-reader",target:"_blank",rel:"noopener noreferrer"},xe=e("blockquote",null,[e("p",null,"A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux and Web")],-1),Ae=a('<h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h2><ul><li><p>macOS 壁纸路径</p><blockquote><p><code>/Library/Desktop Pictures/</code></p></blockquote></li><li><p>截图快捷键: <code>Command + Shift + 4</code></p><blockquote><ul><li><p>用法 : 系统自带的快捷键截图，通过<code>空格键</code>可以进行<code>窗口模式</code>和<code>自定义区域模式</code>切换，截图完成之后自动保存在桌面。(快捷键<code>Command + Shift + Control + 4</code>将自动保存在剪切板。)</p></li><li><p>缺点 : 没有取消功能，截图完成之后就直接保存到桌面或剪切板。</p></li></ul></blockquote></li><li><p>录屏快捷键: <code>Command + Shift + 5</code></p></li><li><p>修改默认打开程序</p><blockquote><p><code>选中要打开文件 -&gt; 右键 -&gt; 显示简介 -&gt; 打开方式</code></p></blockquote></li><li><p>进入隐藏目录</p><blockquote><ul><li><code>Finder</code> : 前往 -&gt; 前往文件夹，输入 <code>/path</code></li><li><code>Terminal</code> : <code>$ open /path</code></li></ul></blockquote></li><li><p>macOS 文本编辑器<code>&quot;直引号&quot;</code>会变<code>“弯引号”</code>的问题</p><blockquote><p><code>Word</code>、<code>Pages</code>、<code>备忘录</code>，使用英文引号<code>&quot;&quot;</code>(直引号)，可是打出却变为了<code>“”</code>(弯引号)。这几个文本编辑软件都默认打开智能替换的功能，手动进行关闭就行了。</p><ul><li>Word : <code>偏好设置 -&gt; 自动更正 -&gt; 键入时自动套用格式 -&gt; &quot;直引号&quot;替换为“弯引号”</code>(去掉选择对号)</li><li>Pages、备忘录 : <code>编辑 -&gt; 替换 -&gt; 智能引号</code>(去掉选择对号)</li></ul></blockquote></li><li><p>Apple 提供的编辑软件 <code>Pages</code> 和 <code>备忘录</code>，都是默认开启了智能替换功能，包括：<code>智能引号</code>、<code>智能破折号</code>、<code>智能链接</code>...</p><blockquote><ul><li>智能引号 : 就是将<code>&quot;&quot;</code>(直引号)转化为<code>“”</code>(弯引号)</li><li>智能破折号 : 当输入多个破折号<code>-</code>时，会将多个破折号连成一条长破折号</li><li>智能链接 : 把网址复制到文本中时，会自动转化为超链接</li></ul></blockquote></li><li><p>Get iPhone UDID</p><blockquote><ul><li>Finder 1. Finder 2. In the sidebar, select the iPhone 3. Click the subtitle 4. UDID</li><li>Xcode 1. Xcode -&gt; Window 2. Devices &amp; Simulators -&gt; iPhone 3. Identifier</li><li>System Report 1. macOS  -&gt; About This Mac 2. Overview -&gt; System Report 3. Sidebar Hardware -&gt; USB 4. Serial Number</li></ul></blockquote></li></ul>',2);function Oe(De,Te){const o=s("ExternalLinkIcon");return r(),i("div",null,[p,e("ul",null,[e("li",null,[e("a",d,[n("Apple PKI"),t(o)])]),e("li",null,[e("a",u,[n("Open Source macOS Apps"),t(o)])]),e("li",null,[e("a",h,[n("强迫症的 Mac 设置指南"),t(o)])]),e("li",null,[e("a",m,[n("Objective-See's Tools"),t(o)])]),e("li",null,[e("a",b,[n("Does It ARM?"),t(o)]),k]),e("li",null,[e("a",_,[n("Is Apple Silicon ready?"),t(o)]),f])]),g,v,e("ul",null,[e("li",null,[e("a",w,[n("Homebrew"),t(o)]),n(" : 用于安装缺少的命令行工具等")]),e("li",null,[e("a",S,[n("Homebrew Cask"),t(o)]),n(" : brew 的扩展，用于命令行安装 macOS 应用 (GUI程序)")]),e("li",null,[e("a",q,[n("Cakebrew"),t(o)]),n(" : Homebrew 图形化 macOS App "),y])]),x,e("ul",null,[e("li",null,[e("a",A,[n("Applite"),t(o)]),O]),e("li",null,[e("a",D,[n("mint"),t(o)]),n(" : swift 软件包管理 "),T]),e("li",null,[e("a",M,[n("MWeb"),t(o)]),n(" : Markdown 编辑器 "),$]),e("li",null,[e("a",C,[n("stats"),t(o)]),n(" : 电脑状态监控器 "),P]),e("li",null,[e("a",H,[n("VLC"),t(o)]),n(" : 视频播放器 "),I]),e("li",null,[e("a",F,[n("ipatool"),t(o)]),n(" : 命令行搜索和下载 "),L,n(" 中的 iOS 软件包 "),R,U]),e("li",null,[e("a",V,[n("SiteSucker"),t(o)]),n(" : 扒网站 "),N]),e("li",null,[e("a",W,[n("mitmproxy"),t(o)]),n(" : 抓包神器 "),j]),e("li",null,[e("a",B,[n("Charles(青花瓷)"),t(o)]),n(" : 网络代理调试工具 "),z]),e("li",null,[e("a",E,[n("Kap"),t(o)]),n(" : 录屏软件 "),K]),e("li",null,[e("a",G,[n("Vimac"),t(o)]),n(" : 键盘控制 macOS "),X]),e("li",null,[e("a",J,[n("Drawio"),t(o)]),n(" : 开源绘图软件")]),e("li",null,[e("a",Y,[n("keeweb"),t(o)]),n(" : 开源的跨平台密码管理工具 "),Q]),e("li",null,[e("a",Z,[n("OpenInTerminal"),t(o)]),ee]),e("li",null,[e("a",ne,[n("Hidden Bar"),t(o)]),n(" : 隐藏菜单栏 icon "),oe]),e("li",null,[e("a",te,[n("Dozer"),t(o)]),n(" : 菜单栏 icon 管理 "),ae]),e("li",null,[e("a",le,[n("BetterDisplay"),t(o)]),n(" 👉🏻 "),e("a",se,[n("🐙"),t(o)]),re]),e("li",null,[e("a",ie,[n("xScope"),t(o)]),n(" : 屏幕测量工具 "),ce]),e("li",null,[e("a",pe,[n("spectacle"),t(o)]),n(" : 屏幕分屏 "),de]),e("li",null,[e("a",ue,[n("Stand"),t(o)]),n(" : 提醒站立 "),he]),e("li",null,[e("a",me,[n("wtf"),t(o)]),be]),e("li",null,[e("a",ke,[n("Poedit"),t(o)]),n(" : cross-platform translation editor "),_e]),e("li",null,[e("a",fe,[n("RustDesk"),t(o)]),ge]),e("li",null,[e("a",ve,[n("RightMenu Master"),t(o)]),n(" 👉🏻 "),e("a",we,[n("🐙"),t(o)]),Se]),e("li",null,[e("a",qe,[n("koodo-reader"),t(o)]),n(" 👉🏻 "),e("a",ye,[n("🐙"),t(o)]),xe])]),Ae])}const Ce=l(c,[["render",Oe],["__file","index.html.vue"]]);export{Ce as default};