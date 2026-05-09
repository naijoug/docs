---
title: Fly.io
icon: hashtag

index: true

---

<!-- more -->

## reference

- [Fly.io](https://fly.io) 👉🏻 [🐙](https://github.com/superfly)

## usage

```shell
# 安装 flyctl
brew install flyctl
```

```shell
# 登录授权
fly auth login 

# cd 进入项目根目录
# 部署并启动项目
fly launch --now 
# 部署
fly deploy

# 查询当前服务列表
fly services list

# 查询当前应用列表
fly apps list
# 重启应用
fly apps restart <app-name>

# 查询当前状态
fly status

# 查看运行日志
fly logs
```