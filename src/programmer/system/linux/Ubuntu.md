# Ubuntu

## Reference

- [Ubuntu](https://ubuntu.com/)

## Usage

```shell
# 查看当前 Ubuntu 版本详细信息
$ lsb_release -a 
$ cat /etc/issue
$ cat /etc/os-release
$ uname -a

$ sudo passwd # 设置 root 密码
$ su root # 切换到 root 账户

# 查看网卡 IP 的三种方法
$ ip addr
$ ifconfig
$ ip address show eth0 # eth0 网卡名字
# Ubuntu 设置多个 IP 地址
#   方案一 : ip addr (临时生效，重启失效)
$ ip addr add 192.168.1.110/20 dev eth0 # 为网卡 eth0 添加一个新的 IP 地址 
$ ip addr del 192.168.1.110/20 dev eth0 # 为网卡 eth0 删除一个 IP 地址
#   方案二 : ifconfig (临时生效)
$ ifconfig eth0:0 192.168.1.110 # 添加多个 eth0:0、eth0:1...
#   方案三 : 修改网卡配置文件，永久生效
$ vim /etc/network/interfaces
#   添加内容 :
#   auto eth0:0
#   iface eth0:0 inet static
#   address 192.168.1.110/20
$ ifdown eth0 & ifup eth0 # 重启网卡生效

$ locale # 查看系统当前 locale
$ locale -a # 查看系统支持的语言包
# 设置 locale 支持中文 (`zh_CN.UTF-8`)
$ sudo apt search language-pack-zh # 搜索中文语言包
$ sudo apt install language-pack-zh-hans # 安装中文语言包
$ export LANG=zh_CN.UTF-8 # 临时修改方案 : 修改 LANG 值
$ sudo vim /etc/default/locale # 永久修改方案 : 修改 locale 系统文件
#       LANG="zh_CN.UTF-8"      | "en_US.UTF-8"
#       LANGUAGE="zh_CN:zh"     | "en_US.us"
# error : locale: Cannot set LC_ALL to default locale: No such file or directory
$ sudo locale-gen zh_CN.UTF-8 # 根据模板生成指定语言库

# 无法解析主机 
$ sudo vim /etc/hostname # 修改的 hostname
$ sudo vim /etc/hosts # 添加 hostname 的本机 ip
#   127.0.1.1 XXX

# install desktop
$ sudo apt-get update
$ sudo apt-get install ubuntu-desktop xrdp -y # 安装左面和 RDP 软件
$ sudo adduser [USER] # 创建新用户
$ sudo usermod -aG sudo [USER] # 用户授权
```