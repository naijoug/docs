# macOS

## Reference

- [Apple PKI](https://www.apple.com/certificateauthority)
- [Open Source macOS Apps](https://github.com/serhii-londar/open-source-mac-os-apps)
- [强迫症的 Mac 设置指南](https://github.com/macdao/ocds-guide-to-setting-up-mac)
- [Objective-See's Tools](https://github.com/objective-see)
- [Does It ARM?](https://doesitarm.com/)
    > Apps that are reported to support Apple Silicon
- [Is Apple Silicon ready?](https://isapplesiliconready.com/)
    > The complete guide for MacOS Apps Optimized for Apple Silicon Macs and the M1 Processor

## [Homebrew]
> 🍺 The missing package manager for macOS (or Linux)
> 
> macOS 缺失的软件包的管理器

- [Homebrew](https://github.com/Homebrew/brew) : 用于安装缺少的命令行工具等
- [Homebrew Cask](https://github.com/Homebrew/homebrew-cask) : brew 的扩展，用于命令行安装 macOS 应用 (GUI程序)
- [Cakebrew](https://github.com/brunophilipe/Cakebrew) : Homebrew 图形化 macOS App
    > Manage your Homebrew formulas with style using Cakebrew.

```shell
# 安装 brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    
# 安装
$ brew tap caskroom/cask
# 使用
$ brew cask search                  # 搜素所有可用
$ brew cask search chrome           # 关键字搜索
$ brew cask install google-chrome   # 安装
$ brew cask uninstall google-chrome # 卸载
$ brew cask list        # 查看Cask安装的软件
$ brew cask info atom   # 查看特定关键信息
```

## Usage

```shell
# 打开任何来源开关
$ sudo spctl --master-disable
# app 已损坏无法打开
$ sudo xattr -d com.apple.quarantine /Applications/xxxx.app

# macOS 显示和隐藏文件必须通过命令行进行操作，需要重启一下`Finder`才能生效。
#   显示 - 隐藏文件的命令
$ defaults write com.apple.finder AppleShowAllFiles -bool true
$ defaults write com.apple.finder AppleShowAllFiles YES
#   隐藏 - 隐藏文件的命令
$ defaults write com.apple.finder AppleShowAllFiles -bool false
$ defaults write com.apple.finder AppleShowAllFiles NO

# 修改 Launchpad 显示大小
#   调整每行数量
$ defaults write com.apple.dock springboard-rows -int 7
#   调整每列数量
$ defaults write com.apple.dock springboard-columns -int 8
#   重启 Launchpad
$ defaults write com.apple.dock ResetLaunchPad -bool TRUE; killall Dock

# 挂载 ntfs 分区 (外接 NTFS 移动硬盘)
#   查看 NTFS 分区标识 (如 /dev/disk3)
$ diskutil list 
# sudo mount -t ntfs -o rw,auto,nobrowse [NTFS 分区标识] [挂载的目录 如/opt/ntfs]
$ sudo mount -t ntfs -o rw,auto,nobrowse /dev/disk3 /opt/ntfs
```

## Software

- [Applite](https://github.com/milanvarady/applite)
    > User-friendly GUI macOS application for Homebrew Casks
- [mint](https://github.com/yonaskolb/Mint) : swift 软件包管理
    > A package manager that installs and runs executable Swift packages
    >
    > Swift Package Manager Tools -> SPMT -> Spearmint -> Mint! 🌱😄
- [MWeb](http://zh.mweb.im) : Markdown 编辑器
    > Markdown writing, note taking and static blog generator App
- [VLC](https://github.com/videolan/vlc) : 视频播放器
    > VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.
- [ipatool](https://github.com/majd/ipatool) : 命令行搜索和下载 `AppStore` 中的 iOS 软件包 `ipa` 
    > Command-line tool that allows searching and downloading app packages (known as ipa files) from the iOS App Store
- [SiteSucker](https://ricks-apps.com/) : 扒网站
    > Download websites to your computer.
- [mitmproxy](https://github.com/mitmproxy/mitmproxy) : 抓包神器
    > An interactive TLS-capable intercepting HTTP proxy for penetration testers and software developers.
    >
    > MITM : Man in the middle attack (中间人攻击)
- [Charles(青花瓷)](http://www.charlesproxy.com/) : 网络代理调试工具
    > Web debugging proxy application. 
- [Kap](https://github.com/wulkano/Kap) : 录屏软件
    > An open-source screen recorder built with web technology
- [Vimac](https://github.com/dexterleng/vimac) : 键盘控制 macOS
    > Productive macOS keyboard-driven navigation
- [Drawio](https://github.com/jgraph/drawio-desktop) : 开源绘图软件
- [keeweb](https://github.com/keeweb/keeweb) : 开源的跨平台密码管理工具
    > Free cross-platform password manager compatible with KeePass
- [OpenInTerminal](https://github.com/Ji4n1ng/OpenInTerminal)
    > ✨ Finder Toolbar app for macOS to open the current directory in Terminal, iTerm, Hyper or Alacritty.
- [Hidden Bar](https://github.com/dwarvesf/hidden) : 隐藏菜单栏 icon
    > An ultra-light MacOS utility that helps hide menu bar icons
- [Dozer](https://github.com/Mortennn/Dozer) : 菜单栏 icon 管理
    > Hide menu bar icons on macOS
- [xScope](https://xscopeapp.com/) : 屏幕测量工具 
    > A powerful set of tools that are ideal for measuring, inspecting & testing on-screen graphics and layouts.
- [spectacle](https://github.com/eczarny/spectacle) : 屏幕分屏
    > Spectacle allows you to organize your windows without using a mouse.
- [Stand](https://getstandapp.com/) : 提醒站立
    > Just a simple app for your Mac that reminds you to stand up once an hour.
- [wtf](https://github.com/wtfutil/wtf) 
    > The personal information dashboard for your terminal
- [Poedit](https://github.com/vslavik/poedit) : cross-platform translation editor
    > Translations editor for Mac, Windows and Unix
- [RustDesk](https://github.com/rustdesk/rustdesk)
    > An open-source remote desktop, and alternative to TeamViewer.

## Tips

- macOS 壁纸路径 
    > `/Library/Desktop Pictures/`

- 截图快捷键: `Command + Shift + 4`
    > * 用法 : 系统自带的快捷键截图，通过`空格键`可以进行`窗口模式`和`自定义区域模式`切换，截图完成之后自动保存在桌面。(快捷键`Command + Shift + Control + 4`将自动保存在剪切板。)
    >
    > * 缺点 : 没有取消功能，截图完成之后就直接保存到桌面或剪切板。
- 录屏快捷键: `Command + Shift + 5`

- 修改默认打开程序
    > `选中要打开文件 -> 右键 -> 显示简介 -> 打开方式`

- 进入隐藏目录
    > * `Finder` : 前往 -> 前往文件夹，输入 `/path`
    > * `Terminal` : `$ open /path`

- macOS 文本编辑器`"直引号"`会变`“弯引号”`的问题
    > `Word`、`Pages`、`备忘录`，使用英文引号`""`(直引号)，可是打出却变为了`“”`(弯引号)。这几个文本编辑软件都默认打开智能替换的功能，手动进行关闭就行了。
    > * Word : `偏好设置 -> 自动更正 -> 键入时自动套用格式 -> "直引号"替换为“弯引号”`(去掉选择对号)
    > * Pages、备忘录 : `编辑 -> 替换 -> 智能引号`(去掉选择对号)
    
- Apple 提供的编辑软件 `Pages` 和 `备忘录`，都是默认开启了智能替换功能，包括：`智能引号`、`智能破折号`、`智能链接`...
    > * 智能引号 : 就是将`""`(直引号)转化为`“”`(弯引号)
    > * 智能破折号 : 当输入多个破折号`-`时，会将多个破折号连成一条长破折号
    > * 智能链接 : 把网址复制到文本中时，会自动转化为超链接

- Get iPhone UDID
    > * Finder
        1. Finder
        2. In the sidebar, select the iPhone
        3. Click the subtitle
        4. UDID
    > * Xcode
        1. Xcode -> Window
        2. Devices & Simulators -> iPhone
        3. Identifier
    > * System Report
        1. macOS  -> About This Mac
        2. Overview -> System Report
        3. Sidebar Hardware -> USB
        4. Serial Number