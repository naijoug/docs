---
title: 设计模式
icon: hashtag

index: true
order: 3

---

<!-- more -->

## reference

- [设计模式](https://refactoringguru.cn/design-patterns/catalog)
- [图说设计模式](https://github.com/me115/design_patterns)
- [📚 Java 23种设计模式全归纳](https://github.com/youlookwhat/DesignPattern)
- [设计模式 Java版本](https://github.com/quanke/design-pattern-java)


## `SOLID` 设计原则

  | 设计原则 | 英文名 | 中文名 | 说明 
  | --- | --- | --- | ---
  | `SRP` | Single Responsibility Principle   | 单一职责原则  | 一个类只负责一件事。
  | `OCP` | Open Closed Principle             | 开放封闭原则  | 对修改关闭，对扩展开放。
  | `LSP` | Liskov Substitution Principle     | 里式替换原则  | 父类可以被子类替换，且功能不受影响
  | `ISP` | Interface Segregation Principle   | 接口隔离原则  | 根据功能设计单独的接口，不要设置一个臃肿的接口
  | `DIP` | Dependency Inversion Principle    | 依赖倒置原则  | 抽象不依赖具体，具体依赖于抽象

  - `LoD` : Law of Demeter 迪米特法则 (LKP Least Knowledge Principle 最少知识原则) 高内聚，低耦合

## `Creational Patterns` - “创建型” (5)
> 对象是如何创建的

- Abstract Factory Pattern : 抽象工厂模式
- Builder Pattern : 建造者模式
- Factory Pattern : 工厂模式
- Prototype Pattern : 原型模式
- Singleton Pattern : 单例模式

## `Structural Patterns` - “结构型” (7)
> 对象是按照怎样的结构组合的

- Adapter Pattern : 适配器模式
- Bridge Pattern : 桥接模式
- Composite Pattern : 组合模式
- Decorator Pattern : 装饰器模式
- Facade Pattern : 外观模式
- Flyweight Pattern : 亨元模式
- Proxy Pattern : 代理模式

## `Behavioral Patterns` - “行为型” (11)
> 对象之间的访问行为如何完成的

- Chain of Responsibility : 责任链模式
- Command : 命令模式
- Interpreter : 解释器模式
- Iterator : 迭代器模式
- Mediator : 中介者模式
- Memento : 备忘录模式
- Observer : 观察者模式
- State : 状态模式
- Strategy : 策略模式
- Template Method : 模板方法模式
- Visitor : 访问者模式
