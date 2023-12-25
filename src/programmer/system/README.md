---
title: 操作系统
index: false
icon: microchip

---

> OS : Operating System

<!-- more -->

## catalog

- [macOS](macos/README.md)
- [Linux](linux/README.md)
- [Windows](windows/README.md)

## Virtual Machine

| System | 虚拟化方案
| -- | --
| `macOS`   | `HyperKit`
| `Linux`   | `KVM`
| `Windows` | `Hyper-V` 

- [Paralles](https://www.parallels.com/) 
- [VMware](https://www.vmware.com/)
- [VirtualBox](https://www.virtualbox.org/)
- [Veertu](https://veertu.com/) 
    > macOS cloud for iOS CI and Devops
- [UTM](https://getutm.app/) 
    > Run virtual machines on iOS
- [Multipass](https://github.com/canonical/multipass)
    > Multipass orchestrates virtual Ubuntu instances

## Computer

- [µGo语言实现——从头开发一个迷你Go语言编译器](https://github.com/wa-lang/ugo-compiler-book)
    > 📚 µGo语言实现(从头开发一个迷你Go语言编译器)[Go版本+Rust版本]

## PATH

```shell
$ echo $PATH # 查看环境变量
$ export PATH=$PATH:<PATH 1>:<PATH 2>:<PATH 3>:----:<PATH N> # 设置 PATH
```

- 环境变量加载顺序
    1. `/etc/profile`       (文件)
    2. `/etc/paths`         (文件) -> 所有用户有效   
    3. `/etc/paths.d`       (目录) -> 所有用户有效
    4. `~/.bash_profile`    (文件) -> 当前用户有效

- 修改环境变量
    1. 修改 `/etc/paths` 文件 (直接将环境变量路径加入)
    2. 修改 `/etc/paths.d` 目录 (在该目录新建文件，在新建文件中加入环境变量路径)
    3. 修改 `~/.bash_profile` 文件 (在 `PATH` 变量中加入新的路径，路径之间用 `:` 分割)
    
- 更新环境变量(使新加入的环境变量生效)
    1. 修改 `/etc/paths.d` 目录，直接生效
    2. 修改 `/etc/paths` 和 `~/.bash_profile` 文件，需要使用命令 `source 文件名` 使得对应文件生效，否则需要重新登录(注销后)环境变量才能生效