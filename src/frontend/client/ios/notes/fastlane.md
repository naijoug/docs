# fastlane  
> 🚀 The easiest way to automate building and releasing your iOS and Android apps

## Reference

- [fastlane](https://github.com/fastlane/fastlane)
- [Running a Custom Bash Script in fastlane](https://spin.atomicobject.com/2021/05/21/custom-bash-script-fastlane/)

## Extend

- [IPABuildShell](https://github.com/aa335418265/IPABuildShell) 
    > 一个强大的、轻量的 iOS 自动打包工具，无需手动指定授权文件和证书
- [AutoPacking-iOS](https://github.com/stackhou/AutoPacking-iOS) 
    > iOS自动打包脚本 多项选择 一行上传指定位置

## Commands

``` shell
$ brew cask install fastlane # install fastlane

$ fastlane install_plugins  # install plugins
$ fastlane update_plugins   # update plugins

$ fastlane new_action # 自定义 action
```

## Fastfile
> fastlane 自动化脚本文件

## Appfile
> App 相关信息

## Deliverfile
> App 交付文件，设置

## Pluginfile
> 插件配置文件

## Solutions

- Cannot proceed with delivery: an existing transporter instance is currently uploading this package
    > [an existing transporter](https://stackoverflow.com/questions/3870082/application-loader-cannot-proceed-with-delivery-an-existing-transporter-insta)
    > 
    > Solution: `$ rm -rf ~/Library/Caches/com.apple.amp.itmstransporter/UploadTokens/`

