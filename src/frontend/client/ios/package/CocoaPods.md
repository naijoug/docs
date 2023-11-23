# CocoaPods
> The Cocoa Dependency Manager.

## Reference

- [CocoaPods](https://github.com/CocoaPods/CocoaPods)
- [CocoaPods doc](https://rubydoc.info/gems/cocoapods)
- [2020-09-16 Podfile 的解析逻辑](https://www.desgard.com/2020/09/16/cocoapods-story-4.html)
- [2020-10-12 Podspec 文件分析](https://www.desgard.com/2020/10/12/cocoapods-story-5.html)

## Concept

## Commands

```shell
$ brew install cocoapods        # brew 安装 cocoapods

# 参数说明:
#   --no-repo-update : `pod install` & `pod update` 会默认执行`pod repo update`会更新本地pod索引,加上这个参数就仅跟新当前项目需要的框架。
#   --verbose :         显示具体的输出信息
#   --silent :          不显示具体的输出信息
$ pod init          # 在当前目录创建 `Podfile` 文件
$ pod install       # 安装 Podfile 中的依赖库
$ pod update        # 更新 Podfile 中的依赖库
$ pod --no-repo-update --verbose update     # 仅更新当前项目框架

# 在本机注册一个Cocoapods账号
# 格式 : `pod trunk register 邮箱 '昵称' --description='设备信息'`
#   第一次注册后，切换设备后继续使用这个命令进行登录(可以不输入昵称)，
#   `--description` : 用于区分不同的设备
$ pod trunk register xxx@mail.com 'xxx' --description='macbook'

# 查看注册信息
#   Pods : 提交的库的信息
#   Sessions : 注册的设备信息
$ pod trunk me 

# 创建`Podspec`文件
# 已经创建后项目的情况下，可以使用此命令创建`.podspec`文件
$ pod spec create 'XXKit'
$ pod spec lint XXKit.podspec # 远程校验 Podspec 文件是否有错误

# 根据Cocoapods的项目模板，创建`Podspec`文件和一个空项目
# 创建的过程，可以通过命令行输入项目的相关信息
$ pod lib create 'XXKit'

# 本地校验 Podspec 文件是否有错误
# 参数说明:
#   --verbose :         显示具体的输出信息
#   --allow-warnings :  可以屏蔽用到的第三方框架的警告
#   --fail-fast :       出现错误就立即定制校验(正常情况是会校验完所有错误，才会停止)
#   --use-libraries :   用到了库文件需要加上这个参数
#   --sources :         包含了 Cocoapods 仓库以外的其他仓库
#   --subspec=XXX :     校验某个子模块
$ pod lib lint XXKit.podspec

# 上传到 CocoaPods 官方仓库
$ pod trunk push XXKit.podspec                  # 将`Podspec`上传到 CocoaPods  官方的仓库中
$ pod trunk push XXKit.podspec --verbose        # 显示上传信息
$ pod trunk add-owner 'XXKit' 'xxx@mail.com'    # 添加一个小伙伴到你项目
$ pod search XXKit                              # 查询 Cocoapods 是否包含这个库

# 上传到私有仓库
$ pod repo                                      # 查看当前 Repo 仓库有哪些
$ pod repo add XXSpecs git@xxx.com:xxx/XXSpecs.git # 添加一个repo specs
$ pod repo remove XXSpecs                       # 删除一个repo specs
$ pod repo push XXSpecs XXKit.podspec           # 添加specs文件到指定的远程repo
```

## Podfile

```ruby
source 'https://github.com/CocoaPods/Sepcs.git' # 指定获得框架的源代码的仓库
source 'https://xxx.gitt.com/xxx/XXSpecs.git'   # 指定私有仓库

use_frameworks! # 编译成动态库(.framework)[Swift库必须写],不写编译成静态库(.a)
platform: ios, '11.0' # 指定在哪个版本编译

def debug_pods
    pod 'SwiftLint', :configurations => ['Debug']
end
def app_pods
    pod 'Test', :git => "https://github.com/xxx/Test.git" # 获取指定 url 版本库
    pod 'XXKit', :path => 'LocalPods/Modules/XXKit' # 开发模式, 引用本地开发库
end
```

## Podsepc

- `resources` vs `resource_bundles`
    * [Cocoapods Resources Management?](https://yoxisem544.github.io/cocoapods-resources/)

```ruby
# 不推荐: 直接将资源拷贝到主工程(容易造成资源重名冲突)
spec.resources = ['Sources/Resource/*.png']
# 推荐: bundle 引入模式
#   动态库: 在所在 framework 下生成资源 bundle
#   静态库: 在主工程下生成资源 bundle
spec.resource_bundles = {
    'XXKit' => ['Sources/Resource/*']
}
```

```ruby
Pod::Spec.new do |s|
  s.name                  = 'XX Kit'
  s.version               = '0.0.1'
  s.summary               = 'XX Kit.'        
  s.description = <<-DESC
                    This is XXKit.
                  DESC               
  s.homepage              = 'https://github.com/xxx/XXKit'
  s.license               = { :type => 'MIT', :file => 'LICENSE' }
  s.author                = { 'xxx' => 'xxx@mail.com' }
  s.source                = { :git => 'https://github.com/xxx/XXKit.git', :tag => s.version.to_s }
  s.swift_version         = '5.0'
  s.ios.deployment_target = '11.0'

  s.frameworks            = 'UIKit'
  s.source_files          = ["Sources/*.swift", "Sources/Module/**/*"]
  s.resource_bundles      = {
    'XXKit' => ['Sources/Resource/*']
  }
  
  s.dependency 'Ext'
end
```