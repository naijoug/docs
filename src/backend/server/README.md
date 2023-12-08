---
title: 服务器
index: false
icon: server

---

<!-- more -->


> 一台在 `Internet` 上具有独立 `IP` 地址的计算机

- 本地计算机的 `IP` 地址 & 域名
    * IP地址 `127.0.0.1`
        - 是回送地址，指本地机，一般用来测试使用
        - 无论什么程序，一旦使用回送地址发送数据，协议软件立即返回，不进行任何网络传输
        - 常用测试命令：`ping 127.0.0.1`
    * 域名 `localhost` : 在计算机网络中，`localhost`（本地主机）是给回路网络接口的一个标准主机名，相对应的`IP`地址为`127.0.0.1`
- Web Server
    * 驻留于因特网上某种类型计算机的程序, 只有当 `Internet` 上运行在其他计算机中的浏览器发出请求时，服务器才会响应。
    * 也称为 `WWW(WORLD WIDE WEB)` 服务器，主要功能是提供网上信息浏览服务。`Web` 服务器是可以向发出请求的浏览器提供文档的程序。

## IaaS & Paas & SaaS

- [2013.09.13 IaaS、PaaS、SaaS 的区别？](https://www.zhihu.com/question/21641778)

  | abbr | full | description
  | -- | -- | -- 
  | IaaS  | Infrastructure-as-a-Service   | 基础设置即服务
  | PaaS  | Platform-as-a-Service         | 平台即服务
  | SaaS  | Software-as-a-Service         | 软件即服务

- `Image Hosting Service` : 图床服务
    * [七牛](https://www.qiniu.com/)
    * [imgur](https://imgur.com/)
    * [sm.ms](https://sm.ms/)

## Cloud

- ECS (Elastic Compute Service) : 动态计算服务 (AWS 云服务器)
- SSE (Server-Sent Events) : 服务推送事件 

- [Vercel](https://vercel.com/)
    > Vercel's frontend cloud gives developers frameworks, workflows, and infrastructure to build a faster, more personalized web.
- [zeabur](https://zeabur.com/)
    > Zeabur is a platform that helps developers deploy services with a single click, no matter what programming language or development framework your project uses.
- [deno](https://dash.deno.com)
    > Deploy JavaScript Globally
- [Supabase](https://github.com/supabase/supabase)
    > Supabase is an open source Firebase alternative.