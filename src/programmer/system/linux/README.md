---
title: Linux
icon: hashtag

index: false

---

> Linux is not Unix

<!-- more -->

## catalog

- [Linux 命令](command.md)

## reference

- [snapcraft](https://snapcraft.io/) : The app store for Linux
- [Linux 内核](https://www.kernel.org/)
- [跟阿铭学 Linux（第2版）](http://www.apelearn.com/study_v2/)
- [快乐的 Linux 命令行](https://github.com/billie66/TLCL)
- [Linux 工具快速教程](https://github.com/me115/linuxtools_rst)
- [Linux Command](https://git.io/linux) 👉🏻 [🐙](https://github.com/jaywcjlove/linux-command)
    > Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。
- [cmd-wrapped](https://github.com/YiNNx/cmd-wrapped)
    > 👩‍💻 A CLI Tool for Command Line Insights
- [thefuck](https://github.com/nvbn/thefuck)
    > Magnificent app which corrects your previous console command.
    
## Linux Tools

- [NetData](https://github.com/netdata/netdata)
    > Real-time performance monitoring, done right! 
- [Glances](https://github.com/nicolargo/glances)
    > Glances an Eye on your system. A top/htop alternative for GNU/Linux, BSD, Mac OS and Windows operating systems.
- [Linux Dash](https://github.com/tariqbuilds/linux-dash)
    > A beautiful web dashboard for Linux
- [Conky](https://github.com/brndnmtthws/conky)
    > Light-weight system monitor for X, Wayland, and other things, too
- [Ward](https://github.com/Rudolf-Barbu/Ward)
    > Server dashboard
- [Prometheus](https://github.com/prometheus/prometheus)
    > The Prometheus monitoring system and time series database.
- [Grafana](https://github.com/grafana/grafana)
    > The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many more.

## init.d & service & systemd

- [How do I run a single command at startup using systemd?](https://askubuntu.com/questions/919054/how-do-i-run-a-single-command-at-startup-using-systemd)

  | - | -
  | -- | --
  | `init`    | 最初的 Linux 启动进程 `PID = 0`，启动参数在 `/etc/init.d` 目录下
  | `service` | 命令 `System V init`，可以理解为 `init` 的一个别名
  | `systemd` | 最新的 Linux 初始化系统 `PID = 1`，d (daemon 守护进程) 

  ```shell
  # systemd 
  #   - systemctl : 控制系统的主命令
  $ systemctl --version # 查看版本信息
  $ sudo systemctl reboot           # 重启系统
  $ sudo systemctl rescue           # 进入救援模式
  $ sudo systemctl daemon-reload    # 重新加载配置文件
  $ sudo systemctl cat xxx.service  # 查看服务信息
  #   - hostnamectl : 当前主机相关
  $ hostnamectl # 显示当前主机信息
  $ sudo hostname set-hostname test # 设置主机名
  #   - localectl : 本地化相关
  $ localectl # 显示本地化设置
  $ sudo localctl set-locale LANG=zh_CN.utf8 # 设置本地化参数
  #   - timedatectl : 时间相关
  $ timedatectl # 显示当前时间设置
  $ timedatectl list-timezones # 显示所有可用的时区
  $ sudo timedatectl set-timezone Asia/Shanghai # 设置当前时区
  $ sudo timedatectl set-time yyyy-MM-dd
  $ sudo timedatectl set-time HH:mm:ss

  # 启动 nginx 三种方式
  $ sudo /etc/init.d/nginx start
  $ service nginx start
  $ sudo systemctl start nginx
  ```

## RPM (Redhat Package Manager)
> Red Hat 公司定义的包管理器
> Linux : RedHat、CentOS

  ``` shell
  $ rpm -ivh package.rpm  # 安装 rpm 包
  $ rpm -Uvh package.rpm  # 升级 rpm 包
  $ rpm -ev package       # 卸载 rpm 包
  $ rpm -qlp package.rpm  # 查看包中的文件列表
  $ rpm -qip package.rpm  # 查看包中的内容信息
  $ rpm -qa               # 查询系统中已安装 rpm 包
  ```

- `yum` (Yellowdog Updater Modified)
    > 基于 RPM 的包管理工具，能够从指定的软件源自动下载目标 RPM 包并安装，可以自动处理下载相关依赖包。
    * 软件源配置文件 : `/etc/yum.repos.d/xxx.repo`
    * yum 配置文件 : `/etc/yum.conf`
    
  ``` shell
  $ yum list  # 列出系统中已安装软件
  $ yum install package # 安装指定软件
  $ yum check-update # 检查系统可升级软件列表
  $ yum update # 升级系统中可升级软件
  $ yum update package # 升级指定软件
  $ yum remove package # 卸载软件
  ```

## DPKG (Debian Package)
> Debian Linux 系统定义的包管理器
> Linux : Debian、Ubuntu

  ``` shell
  $ dpkg -i package.deb       # 安装 deb 包
  $ dpkg -i package.deb       # 升级 deb 包 (同安装)
  $ dpkg -r package.deb       # 卸载 deb 包 (不卸载配置文件)
  $ dpkg -P package.deb       # 卸载 deb 包 (卸载配置文件)
  $ dpkg -c package.deb       # 查看包中包含文件信息
  $ dpkg --info package.deb   # 查看包中内容信息
  $ dpkg -l package           # 查看系统中已安装的包
  ```

- `apt` (Advanced Packaging Tool)
    > 功能与 yum 类型，通过 apt-rpm 支持 rpm 包管理。 
    * 软件源配置文件 :` /etc/apt/sources.list`
    * apt 配置文件 : `/etc/apt/apt.conf.d`
    
  ``` shell
  $ apt-get update # 更新软件源索引
  $ apt-get install package # 安装指定软件
  $ apt-get source package # 下载指定软件源代码
  $ apt-get upgrade # 升级所有软件到最新版本
  $ apt-get dist-upgrade # 升级系统和所有软件
  $ apt-get remove package # 卸载指定软件

  $ apt-get install package=version   # 安装指定版本软件
  $ apt-cache madison package         # 列出软件的所有来源
  $ apt-cache policy package          # 列出软件的所有来源
  $ apt-cache showpkg package         # 列出软件的所有来源
  $ apt-get install -s package        # 模拟安装软件     
  $ apt-show-versions -a package      # 列出所有版本   

  $ apt-get install python-flask  # 安装 flask
  ```

## Alien
> RPM 包与 DEB 包相互转换工具

  ``` shell
  $ alien -d package.rpm # rpm -> deb
  $ alien -r package.deb # deb -> rpm
  ``` 