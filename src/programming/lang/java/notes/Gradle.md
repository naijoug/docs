# Gradle

## Reference

- [gradle](https://github.com/gradle/gradle) : Adaptable, fast automation for all
- [Gradle User Guide 中文版](https://github.com/DONGChuan/GradleUserGuide)

## Usage

``` bash
$ gradle -q hello # 执行 hello.gradle 脚本
# -q : quiet 模式，不会生成 Gradle 日志信息。
# -x : 排除默写任务
# -b ：指定 build.gradle 脚本所在位置
# -p : 指定构建的目录
$ gradle dependencies   # 查询依赖列表
```

```gradle build.gralde
task hello {
    doFrist {
        println 'Hello'
    }
    doLast {
        println ' world!'
    }
}
// 快捷任务定义 doLast : <<
task hello << {
    println 'Hello world!'
}
```

``` bash
$ gradle build      # 编译和测试，并生成所有类和资源的 jar 文件
$ gradle clean      # 删除 build 目录和所有构建生成的文件
$ gradle assemble   # 编译打包，不运行单元测试
$ gralde check      # 编译和测试代码
```

```gradle build.gradle
repositories { // 外部依赖仓库
    mavenCentral() // 加入 maven 仓库
}
dependencies { // 外部依赖
    // compile : 编译项目源代码的依赖
    // runtime : 运行时被生成类使用的依赖，包含 compile
    // testCompile : 编译测试所需依赖，包含 compile & runtime
    // testRuntime : 运行测试所需的依赖，包含 compile & runtime & testCompile
}
```