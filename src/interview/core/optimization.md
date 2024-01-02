---
title: optimization - “优化”
icon: hashtag

index: true

---

  程序开发中的“优化”，从程序的整个运行过程来说...
  
<!-- more -->
  
## 前端优化

  前端程序来说，由于是和用户交互，这些优化不仅涉及程序的本身的优化，还涉及一个用户体验方面的优化
  
### 启动优化
  
  也就是打开程序的快慢。
  App 角度来说就是用户点击打开 App 到看到首屏展示的速度。
  Web 角度来说就是用户打开网站到网页加载完成。

  * 减小包体积。
  * 减少启动逻辑，将启动无关的逻辑延迟加载。

### 数据优化
    
  这个是从程序角度进行数据的优化处理。主要体现在用户在进入页面后加载 loading 时间长，或者提交表单之后等待时间长等问题。
  
  * 分页 :  
  * 缓存 :
  * 压缩 :
  * 预加载 :

### 体验优化

  用户在使用前端应用过程是否出现卡顿、白屏、交互困难等问题
  
  * 耗时操作放入子线程
  * FPS 帧率调试
  
## 后端优化

  后端程序来说，由于主要是和数据打交道，这些优化主要是程序逻辑、数据处理、架构等方面的优化。
  
## 网络优化
  

  
## 数据库优化

  * 实现数据存储的方案

  * 数据库的查询优化方案

  * 数据库的分库分表方案