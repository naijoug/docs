# Reverse
> Reverse Engineering: 逆向工程

## Reference

- [iOSRE](http://iosre.com)
- [iOS 11.1.2 Runtime Headers](http://developer.limneos.net/)
- [iOS-Runtime-Headers](https://github.com/nst/iOS-Runtime-Headers)
- [iOS 安全 wiki](https://github.com/wufawei/iossecurity)
- [iOS 安全资料整理](https://github.com/satan1a/awesome-ios-security-cn)
- [iOS 逆向工程资料整理](https://niyaoyao.github.io/2017/05/09/Learning-Reverse-From-Today-D4)
- [iOS8下代码安装/卸载APP](https://blog.0xbbc.com/2014/12/ios8%E4%B8%8B%E4%BB%A3%E7%A0%81%E5%AE%89%E8%A3%85%E5%8D%B8%E8%BD%BDapp/)
- [iOS 逆向: 越狱使用 SSH](http://www.veryitman.com/2018/05/12/iOS-%E9%80%86%E5%90%91-%E8%B6%8A%E7%8B%B1%E4%BD%BF%E7%94%A8-SSH/)

## Assets.car

- [Analysing Assets.car file in iOS](https://stackoverflow.com/questions/22630418/analysing-assets-car-file-in-ios)

## Jailbreak
> 越狱

- [Phoenix](https://phoenixpwn.com/) : 9.3.5
- [G0BLIN](https://g0blin.sticktron.net/) : 10.3~10.3.3
- [Meridian](https://meridian.sparkes.zone/) : 10.0~10.3.3
- [Electra](https://coolstar.org/electra/) : 11.2~11.3.1
- [iOS 11.2~11.3.1 越狱工具 Electra 正式发布！附两种详细越狱教程！](http://wemedia.ifeng.com/68205264/wemedia.shtml)
- [iOS10.3.2 越狱小记](https://zhuanlan.zhihu.com/p/35627866)
- [MRMAD](https://mrmad.com.tw/)

- ssh : root/alpine

- Other Jailbreak Teams
    * Pangu : 盘古
    * Taig : 太极
    * Yalu : 鸭绿江

### App Store

- [Cydia Impactor](http://www.cydiaimpactor.com/) 

    > Cydia Impactor is a GUI tool for working with mobile devices. You can use this tool to install IPA files on iOS and APK files on Android. It also can help you exploit the series of Android "Master Key" vulnerabilities.
    
    * [error: cpp 42](https://yalujailbreak.net/cpp-42-cydia-impactor/)

- [Cydia](https://www.cydiaios7.com/)
    
    > Cydia是一个让用户在越狱的iOS设备上查找和安装各类软件包，包括软件、系统修改、主题和铃声等的软件管理器。Cydia是高级包装工具和dpkg的图形界面前端，Cydia也是一个去中心化的软件仓库。

- [Download Cydia](https://downloadcydia.org/) 

- [zJailbreak](http://zjailbreak.com)
- [Xabsi](https://xabsi.com/)
- [TweakBox](https://www.tweakboxapp.com/)
- [TweakBox](https://tweakbox.org/)
- [Tutu App](https://tutu-app.org/)

## iOS 防范反编译

- [Ipa Guard](https://ipaguard.com/)
    > Ipa Guard是一款功能强大的ipa混淆工具，不需要ios app源码，直接对ipa文件进行混淆加密。可对IOS ipa 文件的代码，代码库，资源文件等进行混淆保护。 可以根据设置对函数名、变量名、类名等关键代码进行重命名和混淆处理，降低代码的可读性，增加ipa破解反编译难度。可以对图片，资源，配置等进行修改名称，修改md5。只要是ipa都可以，不限制OC，Swift，Flutter，React Native，H5类app。

------

- 本地数据加密，对本地存储数据进行加密处理
- URL 加密，对代码中的 URL 进行加密处理，防止 URL 被解析
- 网络通讯加密，使用 HTTPS 进行网络请求
- 代码混淆，对程序代码中命名进行混淆处理，程序逻辑机构打乱混排
- 第三方加固，网易云 iOS 应用加固