# Xcode

## Reference

- [XcodesApp](https://github.com/XcodesOrg/XcodesApp)
    > The easiest way to install and switch between multiple versions of Xcode - with a mouse click.

## Usage

```bash
# xed : 
$ xed . // 打开当前目录下的 Xcode 项目
# 启动 Xcode
$ xed --launch
$ xed -x
# 启动 Xcode 项目 
$ xed xxx.xcodeproj   // == open xxx.xcodeproj
$ xed xxx.xcworkspace
```

## Folders
> Xcode 文件夹说明
>
> [Can I delete data from iOS DeviceSupport?](https://stackoverflow.com/questions/29930198/can-i-delete-data-from-ios-devicesupport)

- `iOS DeviceSupport`
    * 路径 : `~/Library/Developer/Xcode/iOS DeviceSupport`
    * 作用 : 连接设备的自动创建，[Processing symbol files] 就是在往这个文件夹写入文件。删除之后，再次连接设备会重新生成。
    * 建议 : 占用空间大，没用的旧版本可以删除。
- `DerivedData`
    * 路径 : `~/Library/Developer/Xcode/DerivedData`
    * 作用 : Xcode 编译项目产生的文件，可重新生成。
    * 建议 : 没用的旧项目可以删除，当前开发的项目应该保留，这可以加快项目编译时间。
- `Archives`
    * 路径 : `~/Library/Developer/Xcode/Archives`
    * 作用 : 提交 App Store 或者 Adhoc 打包的 ipa 文件，删除了不可恢复。
    * 建议 : 如果需要线上需要调试的版本，应该保留。
- `Provisioning Profiles`
    * 路径 : `~/Library/MobileDevice/Provisioning Profiles`
    * 作用 : Xcode 中各种开发证书 Provisioning Profile。
    * 建议 : 开发者不要删除，删除之后需要再次从苹果开发者网站下载。
- `iPhone Simulator`
    * 路径 : `~/Library/Application Support/iPhone Simulator`
    * 作用 : Xcode6 之前的模拟器的位置。
    * 建议 : 已不存在，不用关注。
- `Devices`
    * 路径 : `~/Library/Developer/CoreSimulator/Devices`
    * 作用 : Xcode6 之后的模拟器的位置。每个长串名字的文件夹代表一个模拟器，在它的 device.plist 文件可以看到具体的哪个模拟器型号。
    * 建议 : 开发者保留，删除之后再需要旧版本的模拟器，还需要重新下载。
- `com.apple.dt.Xcode`
    * 路径 : `~/Library/Caches/com.apple.dt.Xcode`
    * 作用 : 缓存
    * 建议 : 占用空间小，可以不关注。
- `Backup`
    * 路径 : `~/Library/Application Support/MobileSync/Backup`
    * 作用 : iTunes 对 iPhone 设备的备份。
    * 建议 : 如果需要备份手机可以保留。旧的备份可以删除，保留最新。
- `XCPGDevices`
    * 路径 : `~/Library/Developer/XCPGDevices`
    * 作用 : 模拟器上 App 应用运行生成缓存文件。
    * 建议 : 可以删除
- `Plug-ins`
    * 路径 : `~/Library/Application Support/Developer/Shared/Xcode/Plug-ins`
    * 作用 : Xcode 安装的插件 
    * 建议 : 不使用的插件可以删除
- `DocSets`
    * 路径 : `~/Library/Developer/Shared/Documentation/DocSets`
    * 作用 : Xcode 开发文档
    * 建议 : 开发者应该保留，开发必备资料库

