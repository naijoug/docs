# Docker

## Reference

- [Docker](https://github.com/docker)
- [docker_practice](https://github.com/yeasy/docker_practice) : [Docker — 从入门到实践](https://yeasy.gitbook.io/docker_practice)
    > Learn and understand Docker&Container technologies, with real DevOps practice!
- [Docker Resources](https://github.com/hangyan/docker-resources)
- [Docker 基础](https://fe.zuo11.com/server/docker.html)
- [10分钟看懂 Docker 和 K8S](https://zhuanlan.zhihu.com/p/53260098)

## Tool

- [OrbStack](https://github.com/orbstack/orbstack)
    > Fast, light, simple Docker containers & Linux machines for macOS
- [Lima](https://github.com/lima-vm/lima)
    > Linux virtual machines, typically on macOS, for running containerd
- [Colima](https://github.com/abiosoft/colima)
    > Container runtimes on macOS (and Linux) with minimal setup
- [Vagrant](https://github.com/hashicorp/vagrant)
    > Vagrant is a tool for building and distributing development environments.

## Concept

- `Linux Namespace` : Linux 提供的一种内核级别环境隔离的方法。
- Linux 超级父进程的 PID : 1

- Image : 镜像
    > 一个特殊的文件系统，提供容器运行时所需的程序、库、资源、配置(环境变量、用户...)等，不包含任何动态数据，在构建之后内容不再改变。
    
    **分层存储** : 镜像构建会一层层构建，前一层是后一层的基础。每一层构建完成，就不会再改变，改变只会在当前层发生。

- Container : 容器
    > 可以理解为镜像的一个实例。实质是进程，但是与宿主机上的进程不同，容器运行在属于自己的名称空间中。
    
- Repository : 仓库
    > 集中管理镜像的存储、分发的服务。
    
    * Docker Hub (Official)
    * Quay.io (CoreOS)

## Dockerfile

``` Dockerfile

```