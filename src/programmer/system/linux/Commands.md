# Linux Commands

## Reference

- [鸟哥 Linux 命令大全](https://man.niaoge.com/)
- [cron 表达式](http://cron.qqe2.com/)

## Commands

```shell
# [命令] [选项(可多个)] [参数]
$ command -options arguments
```

### 命令操作

```shell
# type : 显示命令的类型
$ type ls               # 显示ls命令
$ type python           # 显示python命令

# clear : 清空屏幕
$ clear

# help : 得到Shell内部命令的帮助文档(Mac下没有改命令)
# --help : 显示用法信息
$ cp --help             # 显示cp的帮助信息

# man : 显示程序手册(man 使用 less 工具来显示参考手册)
$ man ls                # 显示程序手册

# info : 显示程序info条目，通过Info阅读器显示程序手册(类似man)

# alias : 创建命令别名 (多条命名可以用`;`进行分割)
$ alias showUsers='cd /Users; ls -l'    # 定义别名showUsers(进入/Users目录，并显示该目录内容)

# unalias : 删除命令别名
$ unalias showUsers                     # 删除showUsers别名
```

### 文件|目录基本操作

``` shell
# ls : 列出目录内容
# -a(all): 所有文件(包括隐藏文件.) ; -l: 长模式显示 ; -i: 显示文件索引结点 ; -r(reverse): 反序 ; -S: 文件大小排序 ; -t: 修改时间排序
$ ls                    # 列出当前目录的文件和子目录
$ ls /usr               # 列出指定目录(/usr)内容
$ ls /usr ~             # 列出多个目录内容(~ : 家目录)
$ ls -l                 # 列出目录详细信息( -l : 长模式输出 )
$ ls -lh                # 列出目录，优化显示存储空间大小

# pwd : 显示当前工作目录
$ pwd

# cd : 切换当前工作目录
$ cd                    # 切换到当前用户家目录
$ cd -                  # 切换到上一个工作目录
$ cd ~user              # 切换到指定用户家目录
$ cd ..                 # 切换到父目录
$ cd /usr/bin           # 切换到指定

# touch : 新建文件|更新文件到当前时间
$ touch file

# file : 确定文件类型
$ file apple.png        # 打印文件类型信息

# mkdir : 创建目录
$ mkdir test            # 创建目录
$ mkdir test develop    # 创建多个目录

# rm : 删除文件|目录
# -i(interactive): 提示用户确认 ; -r(recursive): 递归删除文件 ; -f: 忽视不存在文件 ; -v(verbose)：显示详细操作信息
$ rm file               # 默默删除file
$ rm -i file            # 删除file前,提示确认
$ rm -rf file test      # 删除file1文件和test目录

# rmdir : 删除目录(前提: 目录为空)
$ rmdir test            # 删除test目录

# mv : 移动|重命名 文件|目录
# -i: 提示用户确认 ; -u(update): 仅移动需要更新的文件 ; -v: 显示详细操作信息
$ mv file1 file2        # 移动file1到file2，之后file1不再存在 [ file2存在: 重写file2内容 ； file2不存在: 创建file2(重命名)]
$ mv -i file1 file2     # file2存在会提示是否重写 
$ mv file1 file2 .      # 移动file1和file2 到当前目录

# cp : 复制文件|目录
# -a: 包括复制属性(所有权&权限) ; -i:提示用户确认 ; -r: 递归复制 ; -u: 仅复制更新的 ; -v: 显示详细信息
$ cp file1 file2        # 拷贝file1内容到file2文件 [file2存在: file2中内容会被重写；file2不存在: 创建file2]
$ cp -i file1 file2     # file2存在时，会提示是否重写
$ cp file1 file2 .      # 拷贝file1和file2到当前目录
$ cp test1/* test2      # 拷贝test1目录下所有文件到test2目录(目录必须存在)
$ cp -rv test1 test2    # 拷贝目录test1到目录test2中，并显示拷贝细节

# ln : 创建硬链接|符号链接
# 硬链接 : 关联文件(不能关联目录), 不能关联文件系统之外的文件(需要在同一磁盘分区)
# 符号链接(软链接) : 类似`windows`快捷方式
$ ln file link          # 创建硬链接(为file创建了一个link的硬链接)
$ ln -s file slink      # 创建符号链接(为file创建了一个slink的链接)
```

### 文件查看

``` shell
# cat : 读取文件(1|多个)
$ cat file                      # 读取文件
$ cat -n file                   # 读取文件，并显示行号(空格也添加行号)

# less : 浏览文件(前后浏览, more的改进版)
# more : 浏览文件(只能向前)
$ less|more file                # 操作类似`vi`命令

# head : 输出文件头部
# tail : 输出文件尾部 [-f: 实时查看文件输出, 一般用于查看log日志输出]
# 默认: 10行 ; -n: 指定输出行数  
$ head server.log               # 显示log文件前10行
$ tail -n 100 server.log        # 显示文件后100行
$ tail -100 server.log          # 显示文件后100行
$ tail -f server.log            # 实时查看log文件

# sort : 排序文件内容
$ sort sort.txt                 # 直接输出排序内容 
$ sort sort.txt -o sort.out     # 将排序内容输出到sort.out文件

# uniq : 去掉重复行(不过滤空格)
$ uniq uniq.txt                 # 直接输出重内容
$ uniq uniq.txt uniq.out        # 将去重内容输出到uniq.out文件

# nl : 指定方式显示行号
$ nl file                       # 空格不添加行号
$ nl -b a file                  # == `cat -n file`

# wc : 打印文件中的换行符、字和字节个数
# -l : 限制命令输出只显示行数
$ wc file
$ wc -l file                    # 查看文件的行数

# diff : 比较两个文件不同的地方
$ diff file1 file2
```

### 文件权限

``` shell
# chmod : 改变文件|目录访问权限
#   -c: 当发生改变时，报告处理信息 
#   -f: 错误信息不输出 
#   -R: 递归处理目录所有文件 
#   -v: 显示详细信息
# 权限范围 => 文件所有者(u) | 同组用户(g) | 其他用户(o)  == 所有用户(a)
# 权限代号 => r: 读(4) ; w: 写(2) ; x: 执行(1) ; -: 删除权限(0) ; s: 特殊权限
#   1. 文字设定法
$ chmod +r file             # 为所有用户增加 file 文件的读权限
$ chmod a+x file            # 为所有用户增加 file 文件的可执行权限
$ chmod ug+w,o-x file       # 同时修改不同用户权限
$ chmod a-x file            # 删除可执行权限
$ chmod u=x file            # 设置权限
$ chmod -R u+x dir          # 设置dir目录及子目录下所有文件全新
#   2. 数字设定法
$ chmod 751 file            # 设置文件所有者(读、写、执行 = 7)，同组(读、执行 = 5)，其他(执行 = 1)
# == `chmod u=rwx,g=rx,o=x file`
$ chmod 000 file            # 删除权限

# chgrp : 改变文件|目录的用户组
# -R: 递归目录 ; -v: 显示详细信息
$ chgrp group file # 改变为 file 文件的用户组
$ chgrp -R group folders/ # 将 folders 目录及目录下所有文件改为 group 用户组

# chown : 改变文件|目录的所有者(和用户组)
# -R: 递归目录
$ chown test file # 改变 file 文件拥有者为 test 用户
$ chown -R test:test folders/ # 改变 folders 文件夹内所有的拥有者和用户组为 test 用户
```

### 重定向

``` shell
# | : 管道线(从标准输入读取内容，再把数据输送到标准输出)
$ ls -l /usr/bin | less         # 使用less查看输出的内容 

# grep : 用来查找文件中的匹配文本(配合使用)
$ ls -l | grep python           # 列出当前目录匹配python的文件
$ grep '[keyword]' -A 100 path/to/file # 查询文件指定关键字下文(After) 100 行
$ grep '[keyword]' -B 100 path/to/file # 查询文件指定关键字上文(Before) 100 行
$ grep '[keyword]' -C 100 path/to/file # 查询文件指定关键字上下文(Context) 100 行

# tee : 从`Stdin`读取数据, 同时输出到`Stdout`和文件 (联合其它命令使用)
$ ls -l /usr | tee tee.txt      # 将Users内容同时输出到屏幕和文件

# > : 重定向标准输出
#   > : 重定向内容覆盖到目标文件
#   >> : 重定向内容追加到目标文件
#   2> : 重定向错误信息到目标文件
#   &> : 重定向标准输出&错误信息到统一目标文件
$ ls /usr > ls.txt              # 将目录下的内容，重定向到文件ls.txt
$ > ls.txt                      # 技巧：清空文件ls.txt
$ ls -l /Users >> ls.txt        # 将重定向内容追加到ls.txt文件
$ ls /xxx 2> error.txt          # 重定向标准错误 (No such file or directory)
$ ls /Users /xx &> all.txt      # 联合重定向
$ ./start.sh >> test.log 2>&1   # 

# < : 重定向标准输入
$ cat < error.txt               # 将error.txt文件内容输出到屏幕
```

### 查找

``` shell
# which : 显示一个可执行程序的位置 
$ which /usr/bin | grep python

# find : 在指定目录查找文件
$ find .                        # 查找当前目录所有文件
$ find /usr -name "*.txt"       # 查找后缀为.txt的文件
```

### 打包(解包) & 压缩(解压)

- **打包** : 将多个文件打包成一个大文件
- **压缩** : 将一个大文件通过压缩算法变成一个小文件

``` shell
# tar : 打包工具
# -c(create): 打包文件 ; x(extract): 解包 ; f: 指定打包文件 ; v: 显示执行过程
$ tar cvf file.tar dir  # 打包
$ tar xvf file.tar      # 解包

# rar : 压缩工具
$ rar a file.rar        # 压缩
$ rar x file.rar        # 解压

# gzip : 压缩工具(后缀: .gz)
# -r: 递归 ; -d: 解压 ; -v: 显示详细信息
$ gzip file             # 压缩指定文件
$ gzip -d file          # 解压文件
$ gzip *                # 压缩当前目录每一个文件
$ gzip -r *             # 递归压缩当前目录及子目录每一个文件
$ gzip -d *             # 解压当前目录每一个文件

# zip
$ zip -er file.zip folder/  # 递归压缩文件夹，并加密
$ unzip file.zip            # 解压文件
```

### 磁盘存储

``` shell
# 挂载硬盘
$ fdisk -l              # 查看硬盘名称
$ mkfs.ext4 /dev/sdb    # 首次挂载需要格式化硬盘【高危操作：仅首次需要】
$ mount /dev/sdb /opt   # 将 `/dev/sdb` 硬盘挂载到 `/opt` 下
$ vim /etc/fstab        # 修改 fstab 启动自动挂载 `/dev/sdb  /opt  ext4  defaults  0  0`
$ mount -a              # 执行 fstab 中挂载 (用于检查 fstab 是否修改正确)
$ ll /dev/disk/by-uuid/ # 查看所有分区 UUID
$ blkid                 # 显示所有分区 UUID
$ blkid /dev/sda1       # 查看特定分区 UUID (UUID 挂载 `/dev/sdb  /opt  ext4  defaults  0  0`)

# df : 统计文件系统可以空间和使用情况
$ df -h         # 查看磁盘各分区大小、已用空间

# du(disk usage) : 查看文件或文件夹的磁盘占用空间
$ du                # 显示当前目录占用空间
$ du folder         # 显示指定文件夹(包括子文件夹)占用空间
$ du -h folder      # 使用友好方式显示占用空间
$ du -sh folder     # 只显示输入文件夹(不显示子文件夹)占用空间
```

### 内存监控

``` shell
# top : 实时动态地查看系统的整体运行情况
$ top

# free : 显示空闲的内存数量
$ free

# vmstat : 显示虚拟内存状态
$ vmstat

# iostat : 监视系统输入输出设备 & CPU的使用情况
$ iostat
```

### 进程

``` shell
# ps : 查看进程号
$ ps -A                     # 显示所有进程信息
$ ps -u root                # 显示指定用户信息
$ ps -ef                    # 显示所有进程信息，连同命令行
$ ps -ef | grep ssh         # 查找特定进程

# lsof : 查看进程打开的文件(或端口)
$ lsof -i:8080              # 查看端口为 8080 的进程

# kill : 杀死进程
$ kill 180201               # 杀死指定端口进程
$ kill -9 19468             # 彻底杀死进程

# nohup : 不挂断地(no hangup)运行命令并输出日志到 nohup.out，忽略 SIGHUG [挂起信号 : 关闭终端]
# & : 后台运行，忽略 SIGINT [中断信号 :Ctrl + C]
$ nohup ./service.sh         # Ctrl + C 停止运行，关闭终端不停止运行
$ ./service.sh &             # Ctrl + C 不停止运行，关闭终端停止运行
$ nohup ./service.sh &       # Ctrl + C 不停止运行，关闭终端不停止运行
$ nohup ./service.sh > service.log 2>&1 & # 后台启动服务，将标准错误 2 重定向到标准输出 &1 ，标准输出 &1 再被重定向输入到 service.log 文件中

# jobs [ctrl+z 挂起运行的进程 (ctrl+c : 结束当前任务)]
$ jobs          # 查看任务(任务编号 & 进程号)
$ bg %n         # 将编号为 n 的任务转到后台运行
$ fg %n         # 将编号为 n 的任务转到前台运行

# crontab : 定时任务 
$ crontab -l                # 显示定时任务列表
$ crontab file              # 启动定时任务

# at : 在指定的时间执行任务
$ at 

# watch : 周期性的执行执行
# -n: 周期性间隔时间 ; -d: 高亮显示输出信息变化的地方 ; -t: 不显示标题
$ watch uptime
```

### 网络

``` shell
# ip 
$ ip addr # 查看网卡 IP 信息

# ifconfig : 配置|显示网卡的网络参数
$ ifconfig                      # 显示网络配置信息
$ ifconfig eth0 up              # 启动eth0网卡
$ ifconfig eth0 down            # 关闭eth0网卡
$ ifconfig eth0 192.168.1.100   # 配置ip
$ ifconfig eth0 192.168.2.10 netmask 255.255.255.0 broadcast 192.168.2.255

# ping : 测试主机网络连通性
$ ping www.baidu.com

# curl(command line URL viewer) : 命令行工具，发送网络请求，得到数据
$ curl www.baidu.com                            # 获取网页源码
$ curl -o baidu.html www.baidu.com              # 下载网页源码到文件
$ curl -i www.baidu.com                         # 显示 http response
$ curl -v www.baidu.com                         # 显示整个通信过程
$ curl www.baidu.com?q=curl                     # 发送表单请求(GET)
$ curl -X POST --data 'q=curl' www.baidu.com    # 发送POST请求

# route : 显示网络路由表

# traceroute : 追踪数据包在网络上的传输时的全部路径
$ traceroute www.baidu.com

# netstat : 显示网络连接信息
$ netstat       
$ netstat -a                # 列出所有端口
$ netstat -l                # 只显示监听端口
$ netstat -anp | grep [pid] # 显示特定进程的监听端口

# ss : 显示处于活动状态的套接字信息
# -t: 只显示tcp ; -u: 只显示udp ; -a: 显示所有; -l: 处于监听状态的套接字
$ ss -al       

# ssh : 登录远程主机(安全)
$ ssh root@ip
$ vi /etc/ssh/sshd_config       # ssh 配置

# telent : 
$ telent ip port    # 测试主机特定端口是否可通讯

# scp(secure copy) : 远程拷贝
# -r : 递归复制整个目录 ; 
$ scp /path/file user@remote_ip:/path/          # 拷贝本地到远程服务器
$ scp -r /path/folder user@remote_ip:/path/     # 拷贝本地目录到远程服务
$ scp user@remote_ip:/path/file /path/          # 拷贝远程文件到本地
$ scp -r user@remote_ip:/path/folder /path/     # 拷贝远程目录到本地

# rcp : 通过配置可以在两台主机上无密码拷贝文件

# nslookup : 
$ nslookup -type=NS [domain.com] # 查询域名的域名服务器
$ nslookup -type=TXT xxx.com [name.server.com]      # 查询 TXT 记录是否正确
$ nslookup -type=MX [domain.com] [name.server.com]  # 查询 MX 记录是否正确

# iptables
$ iptables status   # 查看状态
# 防火墙打开关闭
$sudo service iptables stop     # 暂时关闭
$sudo service iptables start    # 暂时打开
$sudo chkconfig iptables on     # 永久打开
$sudo chkconfig iptables off    # 永久关闭

# ufw : Firewalls 防火墙
$ apt install ufw # 安装 ufw
$ ufw status    # 防火墙状态
$ ufw version   # 版本
$ ufw enable    # 开启
$ ufw disable   # 关闭
# 默认规则 : ufw default [allow | deny]
$ ufw default allow # 默认允许所有访问
$ ufw default deny  # 默认禁止所有访问
# 允许 : ufw allow [service]
$ ufw allow smtp    # 允许 smtp 服务 (25/tcp 端口) [== ufw allow 25/tcp]
$ ufw allow 22/tcp  # 允许 22/tcp 端口 (ssh 服务) [== ufw allow ssh]
$ ufw allow 8080    # 允许 8080 tcp/udp 端口
$ ufw allow from 192.168.1.110 # 允许特定 ip 访问
# 否认
# 拒绝 : 否认访问，通知对方机器已被拒绝
# 限制 : 
# 禁用 : ufw deny [service]
$ ufw deny smtp     # 禁用 smtp 服务 
# 删除 : ufw delete xxx
$ ufw delete allow 8080 # 删除允许规则 
$ ufw delete deny smtp  # 删除禁用规则
```

### 系统相关

``` shell
$ cat /etc/issue        # 查看版本号
$ uname -r              # 查看内核版本号
$ sudo passwd root      # 修改密码

# 修改 hostname
#  方案一 : 临时修改，重启失效
$ hostname          # 查看 hostname
$ hostname XX       # 修改 hostname
#  方案二 : 临时生效，重启失效
$ sysctl kernel.hostname        # 查看内核 hostname
$ sysctl kernel.hostname=XX     # 修改内核 hostname
#  方案二 : 永久有效，重启生效
$ vi /etc/hostname              # 修改 hostname (deb/ubuntu)
$ vim /etc/sysconifg/network    # 修改 `HOSTNAME=xxx` (redhat/centos)

# locale : 查看系统编码
$ locale
$ LANG="en_US.UTF-8"            # 临时修改系统变量`LANG`

# export : 将shell变量输出为环境变量
$ export LANG="en_US.UTF-8"     # 修改系统变量`LANG`
#  设置代理
$ export ALL_PROXY=socks://proxy-url:port       # 设置代理地址
$ export SOCKS5_PROXY=socks://proxy-url:port    # 设置 socks5 代理
$ export http_proxy=http://proxy-url:port       # 设置 http 代理
$ export https_proxy=https://proxy-url:port     # 设置 https 代理

# echo : 显示一行文本
# `$((expression))` : 算术表达式 (+、-、*、/、%、**(取幂))
# $NAME : 系统变量
$ echo 'hello world'            # 输出hello world
$ echo $(($((5**2)) + 3))       # 算术表达式 : 5*5 + 3 = 28
$ echo $LANG                    # 查看系统变量`LANG`

# date : 显示系统当前时间和日期
$ date

# cal : 显示系统当前月份的日历
$ cal 
```