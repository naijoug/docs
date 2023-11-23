# IDE

## Xcode

- Xcode Snippets 占位符 :  `<# summary #>`
- 显示 Xcode 编译时间 : `$ defaults write com.apple.dt.Xcode ShowBuildOperationDuration -bool YES`

- Xcode 快捷键

  | 快捷键 | 说明
  | -- | --
  | `Command + /`                     | 注释代码  
  | `Command + Option + [`            | 代码向上移动一行 
  | `Command + Option + ]`            | 代码向下移动一行 
  | `Command + [`                     | 代码向左移动 tab 
  | `Command + ]`                     | 代码向右移动 tab 
  | `Command + Option + <-`           | 局部折叠代码块 
  | `Command + Option + ->`           | 局部展开代码块 
  | `Command + Option + Shift + <-`   | 全局折叠代码块 
  | `Command + Option + Shift + ->`   | 全局展开代码库 
  | `Command + Ctrl + Shift + <-`     | 折叠注释块 
  | `Command + Ctrl + Shift + ->`     | 展开注释块 

## JetBrains - IDEA

- 设置文件夹为资源文件夹 : `Project Settings -> Modules -> Sources`，可以设置(`Mark as`)文件类型

- IDEA 控制台乱码
    > 在 Configuration 中配置
    * 方法一 : `Server -> VM options`  设置为 `-Dfile.encoding=UTF-8`
    * 方法二 : `Startup/Connection -> Pass environment variables` 添加 `JAVA_TOOL_OPTIONS` : `-Dfile.encoding=UTF-8`
    
- IDEA 快捷键

  | 快捷键 | 说明
  | -- | --
  | `double Shift`        | 在项目目录的所有文件中查找
  | `Command + F`         | 在当前文件中查找
  | `Command + Shift + F` | 在当前项目中查找包含查询内容的文件
  | `Command + E`         | 最近打开的文件
  | `Option + F7`         | 查询项目中，所有引用(类、函数、变量)的地方


## JetBrains - PyCharm

- 关闭科学模式 (Scientific Mode)
    * `View` -> `Scientific Mode`
    * `Preferences` -> `Tools` -> `Python Scientific` -> `Show plots in toolwindow`
