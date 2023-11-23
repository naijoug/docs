
## Reference

- [2022-11-10 iOS 求职寒冬？听听他们怎么说](https://juejin.cn/post/7164222659528491022)
- [2020-07-24 iOS面试总结（2020年6月）](https://juejin.cn/post/6854573217320402952)
- [2020-04-25 iOSer疫情期间的虐心面试经历](https://juejin.cn/post/6844904137369485325)
- [2020-03-28 快手iOS面经](https://zhangferry.com/2020/03/28/interview_kuaishou/)
- [2018-07-17 2018年 iOS 面试心得](https://juejin.cn/post/6844903639270572046)

------

- [iOSInterviewQuestions](https://github.com/ChenYilong/iOSInterviewQuestions)
    > iOS interview questions;iOS面试题集锦
- [iOSInterviewsAndDevNotes](https://github.com/DevDragonLi/iOSInterviewsAndDevNotes)
    > 🚴 iOS Interviews, Dev Notes && Git ...
- [iOS-Interview-Strategy](https://github.com/iOS-Mayday/iOS-Interview-Strategy)
    > iOS面试技术文章
- [全网各大厂iOS面试题-文集大全](https://github.com/iOS-Mayday/heji)
- [全网各大厂iOS面试题-文集大全](https://github.com/LGBamboo/iOS-Advanced)
- [2020-08-16 iOS面试总结（2020年6月）参考答案](https://zhangferry.com/2020/08/16/interview_202006_answer/)
- [2020-08-15 iOS面试梳理](https://juejin.cn/post/6860888953638256654)
- [2020-07-20 iOS面试了20几家总结出来的面试题](https://juejin.cn/post/6854573212165111822)
- [2020-02-14 阿里、字节：一套高效的iOS面试题](https://juejin.cn/post/6844904064937902094)
    * [2023-04-06 Answer](https://juejin.cn/post/7218915344119234616)
    * [2020-07-06 Answer](https://www.sunyazhou.com/tags/ios%E9%9D%A2%E8%AF%95%E9%A2%98/)
- [2019-12-30 iOS从入门到进阶](https://github.com/miniLV/Interview-series)
- [2018-07-24 出一套 iOS 高级面试题](juejin.im/post/5b56155e6fb9a04f8b78619b)
- [2017-06-08 2017年5月iOS招人心得（附面试题）](https://juejin.cn/post/6844903480805556238)
    * [2017-06-29 面试题总结](https://zhangferry.com/2017/06/29/interview-question/)
- [2016-10-09 一份"有点难"的iOS面试题](https://zhuanlan.zhihu.com/p/22834934)
- [2015-07-04 招聘一个靠谱的 iOS - 孙源(滴滴)](http://blog.sunnyxx.com/2015/07/04/ios-interview)

## Swift

- 类和结构体的区别
- `Cow` (copy on wirte) 写时拷贝机制。`isKnownUniquelyReferenced` 实现自定义结构体 `Cow`
- `Swift` 中的枚举和其它编程语言的区别
- `Swift` 中的 `switch` 和其它编程语言有什么区别？其中的匹配模式深入说一下？
- `Swift` 中的协议与 `OC` 中协议的特点和区别？面向协议开发说一下你的理解？
- `Swift` 可选类型 `Optional` 说一下理解？
- `Swift` 语法特性泛型 (`@_specialize`)、运算符、下标、字面量协议、尾随闭包
- `Swift` 泛型类型擦除如何实现？
- `Swift` 函数式编程 (函子、单子)，“函数是第一等公民”这句话你是怎么理解的？
- 响应式编程中数据响应、UI 响应。 `RxSwift` `Combine` 这两个框架第比较？
- `Swift 5.1` 新特性 `@propertyWrapper`、`@_functionBuilder`、`@dynamicMemberLookup`
- `Swift` 在其它领域的扩展 (AI、AR、VR、Web、Backend)
- `SwiftUI` vs `Flutter`
- `Swift` 函数派发机制
- `swift_once` 是用在什么地方的？

## OC

- `OC` 中的三种字符串？ `Tagged Pointer` 了解吗？ 
- Runtime: isa, 消息转发, 弱引用表.
- Runloop: mode, timer.
- Block: __block, __forwording.
- Property: assign, weak, copy.
- Category: assoc, load

## 设计模式

- MVC、MVVM、Coordinator、单向数据流 (Redux、ReSwift、RxFeedback)

------

## Project Show

- 分层设计
- 使用 `MVVM` 架构进行控制器解耦
- 通过减少离屏渲染、高度缓存和按需加载等方案，解决列表卡顿问题
- 使用 `Hybrid` 开发实现 `Native & JS` 交互
- 使用 `Json-Server` 构建 `Mock Server`，解决并行开发问题
- 使用 `gitlab-ci-runner` 配置 `yml` 文件进行持续集成任务
- 优化安装包过大，优化页面

## Questions

- 设计一个网络框架, 如何进行不同数据解析的设计(header, body), 并能够进行自定义, 重连机制如何处理, 状态码错误转发机制的处理, 如何避免回调地狱, 实现Promise的自实现.
- 根据 `UIControl` 实现 `UIButton`
- 找到两个排序数组的中位数
- pow(double, double)函数的自实现

- 安全方面: lild重签名, Mach-O

- 如果让你实现属性的weak，如何实现的？
- 如果让你来实现属性的atomic，如何实现？
- KVO为什么要创建一个子类来实现？
- 类结构体的组成，isa指针指向了什么？（这里应该将元类和根元类也说一下）
- RunLoop有几种事件源？有几种模式？
- 方法列表的数据结构是什么？
- 分类是如何实现的？它为什么会覆盖掉原来的方法？

- @Property 本质是什么？
- 什么情况下需要手动创建 autoreleasepool ？
- GCG 本质是什么？

- CPU & 进程 & 线程 的关系？

- iOS 常用设计模式？

- iOS 单例实现

- 介绍下内存的几大区域？
- 你是如何组件化解耦的？
- runtime如何通过selector找到对应的IMP地址
- runloop内部实现逻辑？
- 你理解的多线程？
- GCD执行原理？
- 怎么防止别人反编译你的app？
- YYAsyncLayer如何异步绘制？
- 优化你是从哪几方面着手？

- 多种计时器的使用有哪些问题？

- 你一般学习iOS是如何学习的？
- app内存你是如何分析的？
- 用过 TableView 吗，平时怎么解决 TableView 滑动卡顿问题的？
- 网络模型了解么？有哪几种？说说你的看法？
- block本质是什么？
- KVC机制是如何通过key找到value。
- 说说你最熟悉的第三方，知晓其原理么？

- 使用了第三方库, 有看它们是怎么实现的吗？
- 强连通量算法了解嘛？
- 遇到tableView卡顿嘛？会造成卡顿的原因大致有哪些？
- M、V、C相互通讯规则你知道的有哪些？
- NStimer准吗？谈谈你的看法？如果不准该怎样实现一个精确的NSTimer? 

- 编译过程做了哪些事情；
- 字典大致实现原理；
- block和函数指针的理解；
- 一般开始做一个项目，你的架构是如何思考的？
- 你了解的 UIKit 结构？

- OC你了解的锁有哪些？在你回答基础上进行二次提问；
    * 自旋和互斥对比？
    * 用C/OC/C++，任选其一，实现自旋或互斥？口述即可！
- 内存泄漏可能会出现的几种原因，聊聊你的看法？
    * 非OC对象如何处理？
    * 若常用框架出现内存泄漏如何处理？
- 容错处理你们一般是怎么做的？
- 项目开始容错处理没做？如何防止拦截潜在的崩溃？

## Technical Point

- 表格列表 - 双 `UITableView` 实现
- 问答文本 - `NSTextAttachment` 处理富文本
- 消息模块 - `SQLite` 进行消息缓存
- 自定义 `TabBar` - 顶部灰线去除
- 快捷模式 - 动画处理和换肤处理
- 创意Menu - 自定义 `UIWindow`

## Ability

- 设计一个时长统计模块
- 设计一个日志记录模块
- 设计一个缓存模块？LRUCache 算法怎么实现？
- 内存缓存策略有哪些？（例如：LRU策略）NSCache使用什么缓存策略？
- 设计一个通用网络模块
- 设计一个通用视频播放器
- 模块化分层设计方案
- 如何检测 Bug 和崩溃，包括线上版本？
- 如何计算一个像素点的大小以及一张图片的大小？
- 图片格式有哪些？有什么区别？