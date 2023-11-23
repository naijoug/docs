# Maven

## Reference

- [Maven](https://maven.apache.org/)
- [MVNRepository](https://mvnrepository.com/)

## Usage

```bash
# mvn [插件名]:[目标操作名]
$ mvn help:effective-pom # 查看 effective pom 
$ mvn clean package # 清理目标目录 & 构建项目输打成 jar 包 
$ mvn clean dependency:copy-dependencies package # 按照顺序执行 clean(阶段)、dependency:copy-dependencies(目标)、package(阶段)

$ mvn site # 生成项目文档

$ mvn install -DskipTests
$ mvn install -Dmaven.test.skip=true

$ mvn compiler:compile # 执行 maven-compiler-plugin 的 compile 目标操作

$ mvn archetype:generate -DgroupId=com.ng -DartifactId=sample -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false # 根据设置参数, 生成项目

$ mvn package -DskipTests 
$ mvn package -Dmaven.test.skip=true 
```

## pom.xml

| 配置文件 | 说明
| --- | ---
| Project (项目级)  | 定义在项目 POM 文件 (pom.xml) 
| User (用户级)     | 定义在 Maven 的设置文件 ($USER_HOME/.m2/setting.xml)
| Global (全局级)   | 定义在 Maven 的全局文件 ($M2_HOME/conf/setting.xml)

| POM 类型 | 说明
| --- | ---
| POM           | Project Object Model (项目对象模型), Maven的基本单元, 一个名为 pom.xml 的 XML 文件
| Super POM     | 超类 POM, 包含 POM 默认继承的属性值
| Effective POM | 有效的 POM, 包括继承的所有属性信息

```xml pom.xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.ng</groupId>
    <artifactId>sample</artifactId>
    <packaging>jar</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>sample</name>
    <url>http://maven.apache.org</url>
    
    <dependencies>
        <!-- 依赖 -->
    </dependencies>
    <repositories>
        <!-- 仓库 -->
    </repositories>
    <plugins>
        <!-- 插件 -->
    </plugins>
</project>
```

## Dependency
> - groupId : 所属组织的名称 (类似 Java 包名)
> - artifactId : jar 包的名称 (类似 Java 类名)
> - scope : 依赖作用域
> - version : jar 包版本
> - systemPath : 外部依赖 jar 的路径(相对于项目)
    
    | Scope | 说明
    | --- | --- 
    | compile   | 默认作用域, classpath 中的依赖可以使用
    | provided  | 由 JDK 或 Web 容器提供
    | runtime   | 编译是不需要, 执行时需要
    | test      | 只在测试编译和执行阶段可用
    | system    | 必须要提供系统路径 `systemPath`
    | import    | 使用引入的 POM

    ```xml 
    <!-- 外部依赖 -->
    <dependency>
        <groupId>com.ng</groupId>
        <artifactId>sample</artifactId>
        <scope>system</scope>
        <version>0.1</version>
        <systemPath>${Project}/src/lib/sample.jar</systemPath>
    </dependency>
    ```

## Repository
> Maven 仓库, 一个地方或者目录, 存储项目 jar 包、库、插件或任何其它项目制定组件。

- Maven 仓库类型
    * local : 本地仓库
    * central : 中央仓库
    * remote : 远程仓库

- Maven 依赖搜索顺序
    1. 搜索本地仓库中的依赖, 未找到 -> 第 2 步
    2. 搜索中央仓库中的依赖, 未找到 & 指定了远程仓库 -> 第 3 步
    3. 搜索远程仓库中的依赖, 未找到 -> 第 4 步 
    4. 未找到, 停止构建 & 抛出异常(找不到依赖)

## Plugin
> Maven 是一个执行插件的框架，所有任务均由插件完成。一个插件提供一系列的目标操作
> 
> 插件名字格式 : `maven-[name]-plugin`

- 插件类型

    | 类型 | 说明
    | --- | ---
    | Build Plugins     | (构建插件) 在构建过程中执行, 配置在 pom.xml 文件的 `<build\>` 节点中
    | Reporting Plugins | (报告插件) 在生成站点过程中执行，配置在 pom.xml 文件的 `<reporting/>` 节点中

- 常用插件

    | 插件 | 说明
    | --- | ---
    | clean     | 构建完成后清理目标, 删除目标目录
    | compiler  | 编译 Java 源文件
    | surefire  | 运行 JUnit 单元测试, 生成测试报告
    | jar       | 生成 Jar 包
    | war       | 生成 War 包
    | javadoc   | 生成 Javadoc
    | site      | 生成项目文档
    | antrun    | 运行任意指定构建阶段的一系列 ant 任务
    | archetype | 创建项目

- maven-surefire-plugin

    ```bash 
    $ mvn install -Dmaven.test.skip=true    # 不执行测试用例，不编译测试用例
    $ mvn install -DskipTests # 不执行测试用例，编译测试用例
    ```

    ```xml 
    <!-- -Dmaven.test.skip=true -->
    <plugin>  
        <groupId>org.apache.maven.plugin</groupId>  
        <artifactId>maven-compiler-plugin</artifactId>  
        <version>2.1</version>  
        <configuration>  
            <skip>true</skip>  
        </configuration>  
    </plugin>  
    <plugin>  
        <groupId>org.apache.maven.plugins</groupId>  
        <artifactId>maven-surefire-plugin</artifactId>  
        <version>2.5</version>  
        <configuration>  
            <skip>true</skip>  
        </configuration>  
    </plugin> 
    ```

    ```xml
    <!-- -DskipTests -->
    <plugin>  
        <groupId>org.apache.maven.plugins</groupId>  
        <artifactId>maven-surefire-plugin</artifactId>  
        <version>2.5</version>  
        <configuration>  
            <skipTests>true</skipTests>  
        </configuration>  
    </plugin> 
    ```

- maven-shade-plugin

    ```xml pom.xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-shade-plugin</artifactId>
                <version>3.1.1</version>
                <configuration>
                    <createDependencyReducedPom>true</createDependencyReducedPom>
                </configuration>
                <executions>
                    <execution>
                        <phase>package</phase>
                        <goals>
                            <goal>shade</goal>
                        </goals>
                        <configuration>
                            <transformers>
                                <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                                    <mainClass>io.saxc.cli.Main</mainClass>
                                </transformer>
                            </transformers>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
    ```

- maven-assembly-plugin

    ```xml pom.xml
    <plugin>
        <artifactId>maven-assembly-plugin</artifactId>
        <version>3.1.0</version>
        <configuration>
            <descriptorRefs>
                <descriptorRef>jar-with-dependencies</descriptorRef>
            </descriptorRefs>
            <archive>
                <manifest>
                    <mainClass>Main</mainClass>
                </manifest>
            </archive>
        </configuration>
        <executions>
            <execution>
                <id>make-assembly</id>
                <phase>package</phase>
                <goals>
                    <goal>single</goal>
                </goals>
            </execution>
        </executions>
    </plugin>
    ```