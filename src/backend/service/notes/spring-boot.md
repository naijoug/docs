# Spring Boot

## Reference

- [Spring Boot](https://github.com/spring-projects/spring-boot)
- [Awesome Spring Boot](https://github.com/ityouknow/awesome-spring-boot)
- [Spring Boot Tutorial](https://github.com/waylau/spring-boot-tutorial)
- [Spring Boot Learning](https://github.com/dyc87112/SpringBoot-Learning)
- [Spring Boot 参考指南](https://github.com/qibaoguang/Spring-Boot-Reference-Guide)

## Concept

- Spring IoC/AOP -> Spring -> Spring Boot -> Spring Cloud 
- IoC : Inversion of Control 控制反转
- AOP : Aspect Oriented Programming 面向切面编程
- DI : Dependency Injection 依赖注入

## Spring

- [Spring IoC有什么好处呢？](https://www.zhihu.com/question/23277575)

## Usage

- starter

    | starter | description
    | -- | --
    | spring-boot-starter | 核心模块, 包括自动配置支持、日志和 YAML
    | spring-boot-starter-test | 测试模块, 包括 JUnit、Hamcrest、Mockito

- 项目结构
    * Application.java : 用于框架配置
    * domain : 实体(Entity) & 数据访问层(Repository)
    * service : 业务处理
    * controller : 页面访问控制

## Annotation

- `@SpringBootApplication` : 程序入口点 (包含以下三个注解)
    * `@Configuration` : 配置
    * `@EnableAutoConfiguration` : 自动配置项目依赖
    * `@ComponentScan` : 组件扫描
- `@RestController` : controller 里面的方法以 json 格式输出，不需要写 jackjson 配置