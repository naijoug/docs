# Docker Commands

## Reference

- [Docker 命令大全](http://www.runoob.com/docker/docker-command-manual.html)

## Usage

``` shell
$ docker -h
#   > 查看 docker 帮助信息
$ docker COMMAND --help 
#   > 查看指定命令帮助信息
```

``` shell
$ docker deploy
# docker deploy [OPTIONS] STACK      
#   > Deploy a new stack or update an existing stack
$ docker images 
# docker images [OPTIONS] [REPOSITORY[:TAG]]     
#   > 显示镜像列表 (== docker image ls)
$ docker inspect ubuntu     # 查看 ubuntu 镜像详细信息
$ docker inspect myubuntu   # 查看 myubuntu 容器详细信息
# docker inspect [OPTIONS] NAME|ID [NAME|ID...] [flags]   
#   > 显示 Docker 对象(镜像、容器...)详细信息
$ docker login -u xxx -p xxx
# docker login [OPTIONS] [SERVER]       
#   > 登录 Docker 镜像仓库
#       -u          : 登陆的用户名
#       -p          : 登陆的密码
$ docker logout 
# docker logout [SERVER]      
#   > 注销 Docker 镜像仓库
$ docker ps     # 显示运行的容器列表
$ docker ps -l  # 显示最后一次运行的容器信息(无论是否运行)
# docker ps [OPTIONS]          
#   > 显示容器列表 (== docker container ls)
#       -l : 显示最后一次运行的容器信息
$ docker rmi
# docker rmi [OPTIONS] IMAGE [IMAGE...]         
#   > 删除(多个)镜像 (== docker image rm)
$ docker search -s 10 java # 搜索镜像名包含java，并且收藏数大于10的镜像
# docker search [OPTIONS] TERM      
#   > 从 Docker Hub 搜索镜像
#       --automated : 只列出 automated build类型的镜像
#       --no-trunc  : 显示完整的镜像描述
#       -s          : 列出收藏数不小于指定值的镜像
$ docker version     
# docker version [OPTIONS]
#   > 显示 Docker 版本信息
#       -f : 
```

## Management

### checkpoint 
> `docker checkpoint COMMAND`

``` shell
$ docker checkpoint create 
# docker checkpoint create [OPTIONS] CONTAINER CHECKPOINT      
#   > Create a checkpoint from a running container
$ docker checkpoint ls 
# docker checkpoint ls [OPTIONS] CONTAINER         
#   > List checkpoints for a container
$ docker checkpoint rm 
# docker checkpoint rm [OPTIONS] CONTAINER CHECKPOINT          
#   > Remove a checkpoint
```

### config
> `docker config COMMAND`

``` shell
$ docker config create 
# docker config create [OPTIONS] CONFIG file|-      
#   > Create a config from a file or STDIN
$ docker config inspect 
# docker config inspect [OPTIONS] CONFIG [CONFIG...]     
#   > Display detailed information on one or more configs
$ docker config ls 
# docker config ls [OPTIONS]          
#   > List configs
$ docker config rm 
# docker config rm CONFIG [CONFIG...]          
#   > Remove one or more configs
```

### container
> `docker [container] COMMAND`

``` shell
$ docker [container] attach --sig-proxy=false mynginx
# docker [container] attach [OPTIONS] CONTAINER      
#   > 将本地标准输入，输出和错误流附加到正在运行的容器
$ docker [container] commit -a='ng' -m='add test.txt' myubuntu ng/ubuntu:v1 # 根据 myubuntu 容器创建新的镜像
# docker [container] commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]      
#   > 根据容器更改，创建一个新镜像
#       -a          : 提交的镜像作者
#       -c          : 使用 Dockerfile 指令来创建镜像
#       -m          : 提交时的说明文字
#       -p          : 在commit时，将容器暂停
$ docker [container] cp ~/web/index.html mynginx:/web/  # 拷贝本机文件 index.html 到 mynginx 容器
# docker [container] cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-
# docker [container] cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH          
#   > 在本地文件系统和容器之间拷贝文件或文件夹
$ docker [container] create --name mynginx  nginx:latest # 创建一个名为 mynginx 的容器
# docker [container] create [OPTIONS] IMAGE [COMMAND] [ARG...]      
#   > 创建一个新容器，但不启动
$ docker [container] diff mynginx   # 查看容器 mynginx 文件系统更改
# docker [container] diff CONTAINER        
#   > 检测容器文件系统中文件或目录的更改
$ docker [container] exec -it mynginx /bin/bash                 # 以交互模式运行容器终端
$ docker [container] exec -it mynginx /bin/sh /root/server.sh   # 以交互模式运行容器中的脚本
# docker [container] exec [OPTIONS] CONTAINER COMMAND [ARG...]        
#   > 在一个已经运行的容器，执行一个命令
#       -d          : 分离模式: 在后台运行
#       -i          : 即使没有附加也保持 STDIN 打开
#       -t          : 分配一个伪终端
$ docker [container] export -o mynginx-`date +%Y%m%d`.tar mynginx # 将容器打成按日期命名的 tar 压缩包
# docker [container] export [OPTIONS] CONTAINER      
#   > 将容器系统文件导出为一个 tar 压缩包
#       -o          : 将输入内容写到文件
$ docker container inspect
# docker container inspect [OPTIONS] CONTAINER [CONTAINER...]     
#   > 显示(多个)容器的详细信息
#       -f          : 指定返回值的模板文件。
#       -s          : 显示总的文件大小。
#       --type      : 为指定类型返回JSON
$ docker [container] kill -s KILL mynginx # 杀掉运行中的容器 mynginx
# docker [container] kill [OPTIONS] CONTAINER [CONTAINER...]       
#   > 终止(多个)容器
#       -s          : 向容器发送一个信号
$ docker [container] logs -tail 100 test    # 显示 test 容器，最新的100条日志
$ docker [container] logs -f test           # 跟踪显示 test 容器日志
$ docker [container] logs --since="2018-01-01" --tail=10 test # 显示从 2018-01-01 后的最新10条日志
# docker [container] logs [OPTIONS] CONTAINER
#   > 获取容器的日志
#       --since     : 显示日志的时间起点 (eg : 2013-01-02T13:23:37)
#       --tail      : 显示最新的 n 条日志
#       -t          : 显示时间戳
#       -f          : 跟踪日志输出
$ docker container ls       # 显示所有正在运行的容器
$ docker container ls -a    # 显示所有容器(包括未运行的)
$ docker container ls -aq   # 显示所有容器(包括未运行的)的ID
$ docker container ls -n 5  # 显示最近创建的 5 个容器
# docker container ls [OPTIONS]          
#   > 显示容器列表
#       -a          : 显示所有容器(默认: 只显示运行的容器)
#       -f          : 根据条件过滤显示的内容
#       --format    : 指定返回值的模板文件
#       -l          : 显示最近创建的容器
#       -n          : 列出最近创建的n个容器
#       --no-trunc  : 不截断输出
#       -q          : 静默模式，只显示容器编号
#       -s          : 显示总的文件大小
$ docker [container] pause db01 # 暂停数据库容器db01提供服务
# docker [container] pause CONTAINER [CONTAINER...]      
#   > 暂停(多个)容器中的所有进程
$ docker [container] port mynginx # 查看容器 mynginx 端口映射信息
$ docker [container] port mynginx 80 # 查看容器 mynginx 80 端口映射主机的信息
# docker [container] port CONTAINER [PRIVATE_PORT[/PROTO]]       
#   > 显示一个容器的端口映射列表
$ docker container prune
# docker container prune [OPTIONS]       
#   > 删除所有已经停止的容器
$ docker [container] rename 73a09ca1bfef myubuntu # 重命名容器名字为 myubuntu 
# docker [container] rename CONTAINER NEW_NAME     
#   > 重命名一个容器
$ docker [container] restart 
# docker [container] restart [OPTIONS] CONTAINER [CONTAINER...]    
#   > 重启(多个)容器
$ docker [container] rm -f db01 db02    # 强制删除容器 db1、db2
$ docker [container] rm -l db           # 移除容器 nginx01 对容器 db01 的连接，连接名 db
$ docker [container] rm -v nginx01      # 删除容器 nginx01, 并删除容器挂载的数据卷
# docker [container] rm [OPTIONS] CONTAINER [CONTAINER...]       
#   > 删除(多个)容器，容器必须停止
#       -f          : 通过SIGKILL信号强制删除一个运行中的容器
#       -l          : 移除容器间的网络连接，而非容器本身
#       -v          : 删除与容器关联的卷
$ docker [container] run ubuntu /bin/echo "hello world"         # 启动 ubuntu 镜像的容器，并运行 echo 命令输出 "hello world"
$ docker [container] run --name mynginx -d nginx:latest         # 后台启动 docker 镜像 nginx:latest 的容器，并命名为 mynginx
$ docker [container] run -it --rm ubuntu:16.04 /bin/bash        # 启动 ubuntu:16.04 镜像的容器，并执行容器 bash 命令
$ docker [container] run -p 127.0.0.1:80:8080/tcp ubuntu bash   # 容器 8080 端口映射本机 80 端口
$ docker [container] run -p 8080:80 -v /docker/data:/data -d nginx:latest # 后台启动容器，容器 80 端口映射本机 8080 端口，容器 /data 映射本机 /docker/data
# docker [container] run [OPTIONS] IMAGE [COMMAND] [ARG...]
#   > 创建一个新的容器，并运行一个命令
#       -a stdin        : 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项
#       -d              : 后台模式启动，返回容器ID
#       -i              : 交互式操作运行容器，通常与 -t 同时使用
#       -p              : 端口映射，格式为：主机(宿主)端口:容器端口
#       -P              : 端口映射，将容器网络端口映射到主机主机随机端口
#       -t              : 为容器重新分配一个伪输入终端，通常与 -i 同时使用
#       --name="cname"  : 为容器指定一个名称
#       --dns 8.8.8.8   : 指定容器使用的DNS服务器，默认和宿主一致
#       -h "hostname"   : 指定容器的hostname
#       --env-file=[]   : 从指定文件读入环境变量
#       -m              : 设置容器使用内存最大值
#       --net="bridge"  : 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型
#       --link=[]       : 添加链接到另一个容器
#       --expose=[]     : 开放一个端口或一组端口
#       --rm            : 退出容器后将其删除
#       -v              : 容器磁盘映射，格式为：主机目录路径:容器目录路径
$ docker [container] start 
# docker [container] start [OPTIONS] CONTAINER [CONTAINER...]    
#   > 启动已停止的(多个)容器
$ docker [container] stats 
# docker [container] stats [OPTIONS] [CONTAINER...]       
#   > 显示(多个)容器资源使用统计信息
$ docker [container] stop 
# docker [container] stop [OPTIONS] CONTAINER [CONTAINER...]        
#   > 停止正在运行的(多个)容器
$ docker [container] top mynginx # 显示容器 mynginx 正在运行的进程
# docker [container] top CONTAINER [ps OPTIONS]         
#   > 显示一个容器的运行进程
$ docker [container] unpause db01 # 恢复数据库容器db01提供服务
# docker [container] unpause CONTAINER [CONTAINER...]     
#   > 暂停(多个)容器的所有进程
$ docker [container] update 
# docker [container] update [OPTIONS] CONTAINER [CONTAINER...]      
#   > 更新(多个)容器的配置
$ docker [container] wait myngix
# docker [container] wait CONTAINER [CONTAINER...]        
#   > 阻塞直到(多个)容器停止，打印退出代码
```

### image
> `docker [image] COMMAND` : 管理 Docker 镜像

``` shell
$ docker [image] build 
# docker [image] build [OPTIONS] PATH | URL | -       
#   > 根据 Dockerfile 创建一个镜像
#       -t          : 创建的镜像名称，格式: name:tag
$ docker [image] history 
# docker [image] history [OPTIONS] IMAGE     
#   > 查看一个镜像的历史信息
#       -H          : 以可读的格式打印镜像大小和日期，默认为true；
#       --no-trunc  : 显示完整的提交记录；
#       -q          : 仅列出提交记录ID
$ docker [image] import 
# docker [image] import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]      
#   > 从 tar 打包文件中创建镜像
#       -c          : 应用docker 指令创建镜像；
#       -m          : 提交时的说明文字
$ docker image inspect ubuntu # 查看 ubuntu 镜像详细信息
# docker image inspect [OPTIONS] IMAGE [IMAGE...]     
#   > 显示(多个)镜像详细信息
$ docker [image] load 
# docker [image] load [OPTIONS]        
#   > Load an image from a tar archive or STDIN
$ docker image ls                       # 列出本地镜像(只有顶层镜像)
$ docker image ls -a                    # 列出所有本地镜像(包含中间层镜像)
$ docker image ls ubuntu                # 列出指定仓库镜像
$ docker image ls ubuntu:16.04          # 列出特定的某个镜像
$ docker image ls -f dangling=true      # 列出 dangling image (虚悬镜像)
$ docker image ls -f since=mongo:3.2    # 列出 mongo:3.2 之后的建立的镜像
# docker image ls [OPTIONS] [REPOSITORY[:TAG]]
#   > 列出镜像
#       -a              : 列出本地所有的镜像（含中间映像层，默认情况下，过滤掉中间映像层）
#       --digests       : 显示镜像的摘要信息
#       -f,--filter     : 过滤器
#       --format        : 指定返回值的模板文件
#       --no-trunc      : 显示完整的镜像信息
#       -q,--quiet      : 仅显示镜像 ID
$ docker image prune 
# docker image prune [OPTIONS]       
#   > 删除所有未使用的镜像
$ docker [image] pull ubuntu:16.04 # 下载 ubuntu 16.04 镜像
# docker [image] pull [OPTIONS] NAME[:TAG|@DIGEST]
#   > 从镜像仓库下载一个指定镜像
#       -a              : 拉取所有 tagged 镜像
#       --disable-content-trust : 忽略镜像的校验,默认开启
$ docker [image] push mynginx:v1 # 上传本地镜像 mynginx:v1
# docker [image] push [OPTIONS] NAME[:TAG]        
#   > 将本地的镜像上传到镜像仓库 (前提 : 登陆到镜像仓库)
$ docker image rm ubuntu:16.04 # 删除本地镜像 ubuntu:16.04
# docker image rm [OPTIONS] IMAGE [IMAGE...]
#   > 删除(多个)镜像
#       -f          : 强制删除；
#       --no-prune  : 不移除该镜像的过程镜像，默认移除
$ docker [image] save 
# docker [image] save [OPTIONS] IMAGE [IMAGE...]        
#   > 将(多个)镜像打包成 tar 文件
#       -o          : 输出到的文件
$ docker [image] tag httpd ng/httpd:test 
# docker [image] tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]         
#   > 为本地镜像添加新的标签
```

### network
> `docker network COMMAND`

``` shell
$ docker network connect 
# docker network connect [OPTIONS] NETWORK CONTAINER    
#   > Connect a container to a network
$ docker network create 
# docker network create [OPTIONS] NETWORK     
#   > Create a network
$ docker network disconnect 
# docker network disconnect [OPTIONS] NETWORK CONTAINER 
#   > Disconnect a container from a network
$ docker network inspect 
# docker network inspect [OPTIONS] NETWORK [NETWORK...]    
#   > Display detailed information on one or more networks
$ docker network ls 
# docker network ls [OPTIONS]         
#   > List networks
$ docker network prune 
# docker network prune [OPTIONS]      
#   > Remove all unused networks
$ docker network rm 
# docker network rm NETWORK [NETWORK...]         
#   > Remove one or more networks
```

### node    
> `docker node COMMAND`

``` shell
$ docker node demote 
# docker node demote NODE [NODE...]      
#   > Demote one or more nodes from manager in the swarm
$ docker node inspect 
# docker node inspect [OPTIONS] self|NODE [NODE...]     
#   > Display detailed information on one or more nodes
$ docker node ls 
# docker node ls [OPTIONS]         
#   > List nodes in the swarm
$ docker node promote 
# docker node promote NODE [NODE...]     
#   > Promote one or more nodes to manager in the swarm
$ docker node ps 
# docker node ps [OPTIONS] [NODE...]          
#   > List tasks running on one or more nodes, defaults to current node
$ docker node rm 
# docker node rm [OPTIONS] NODE [NODE...]          
#   > Remove one or more nodes from the swarm
$ docker node update 
# docker node update [OPTIONS] NODE     
#   > Update a node
```

### plugin  
> `docker plugin COMMAND`

``` shell
$ docker plugin create 
# docker plugin create [OPTIONS] PLUGIN PLUGIN-DATA-DIR      
#   > Create a plugin from a rootfs and configuration. Plugin data directory must contain config.json and rootfs directory.
$ docker plugin disable 
# docker plugin disable [OPTIONS] PLUGIN     
#   > Disable a plugin
$ docker plugin enable 
# docker plugin enable [OPTIONS] PLUGIN      
#   > Enable a plugin
$ docker plugin inspect 
# docker plugin inspect [OPTIONS] PLUGIN [PLUGIN...]     
#   > Display detailed information on one or more plugins
$ docker plugin install 
# docker plugin install [OPTIONS] PLUGIN [KEY=VALUE...]     
#   > Install a plugin
$ docker plugin ls 
# docker plugin ls [OPTIONS]     
#   > List plugins
$ docker plugin push 
# docker plugin push [OPTIONS] PLUGIN[:TAG]        
#   > Push a plugin to a registry
$ docker plugin rm 
# docker plugin rm [OPTIONS] PLUGIN [PLUGIN...]          
#   > 删除(多个)插件
$ docker plugin set 
# docker plugin set PLUGIN KEY=VALUE [KEY=VALUE...]         
#   > Change settings for a plugin
$ docker plugin upgrade 
# docker plugin upgrade [OPTIONS] PLUGIN [REMOTE] [flags]     
#   > Upgrade an existing plugin
```

### secret      
> `docker secret COMMAND`

``` shell
$ docker secret create 
# docker secret create [OPTIONS] SECRET file|-      
#   > Create a secret from a file or STDIN as content
$ docker secret inspect 
# docker secret inspect [OPTIONS] SECRET [SECRET...]     
#   > Display detailed information on one or more secrets
$ docker secret ls 
# docker secret ls [OPTIONS]         
#   > List secrets
$ docker secret rm 
# docker secret rm SECRET [SECRET...]          
#   > Remove one or more secrets
```

### service    
> `docker service COMMAND`

``` shell
$ docker service create 
# docker service create [OPTIONS] IMAGE [COMMAND] [ARG...]      
#   > Create a new service
$ docker service inspect 
# docker service inspect [OPTIONS] SERVICE [SERVICE...]     
#   > Display detailed information on one or more services
$ docker service logs 
# docker service logs [OPTIONS] SERVICE|TASK        
#   > Fetch the logs of a service or task
$ docker service ls
# docker service ls [OPTIONS]          
#   > List services
$ docker service ps 
# docker service ps [OPTIONS] SERVICE [SERVICE...]          
#   > List the tasks of one or more services
$ docker service rm 
# docker service rm SERVICE [SERVICE...]          
#   > Remove one or more services
$ docker service rollback 
# docker service rollback [OPTIONS] SERVICE    
#   > Revert changes to a service's configuration
$ docker service scale 
# docker service scale SERVICE=REPLICAS [SERVICE=REPLICAS...]       
#   > Scale one or multiple replicated services
$ docker service update 
# docker service update [OPTIONS] SERVICE      
#   > Update a service
```

### swarm       
> `docker swarm COMMAND`

``` shell
$ docker swarm ca 
# docker swarm ca [OPTIONS]          
#   > Display and rotate the root CA
$ docker swarm init [OPTIONS]
# docker swarm init        
#   > Initialize a swarm
$ docker swarm join 
# docker swarm join [OPTIONS] HOST:PORT        
#   > Join a swarm as a node and/or manager
$ docker swarm join-token 
# docker swarm join-token [OPTIONS] (worker|manager)
#   > Manage join tokens
$ docker swarm leave 
# docker swarm leave [OPTIONS] 
#   > Leave the swarm
$ docker swarm unlock 
# docker swarm unlock      
#   > Unlock swarm
$ docker swarm unlock-key 
# docker swarm unlock-key [OPTIONS] 
#   > Manage the unlock key
$ docker swarm update 
# docker swarm update [OPTIONS]      
#   > Update the swarm
```

### system
> `docker system COMMAND` 

``` shell
$ docker system df
# docker system df [OPTIONS]
#   > 查看 Docker 磁盘使用情况
$ docker [system] events --since="1467302400" # 显示docker 2016年7月1日 后的所有事件
$ docker [system] events -f "image"="mysql:5.6" --since="1467302400" # 显示docker 镜像为mysql:5.6 2016年7月1日 后的相关事件    
# docker [system] events [OPTIONS] 
#   > 从服务器获取实时事件
#       -f              ：根据条件过滤事件
#       --since         ：从指定的时间戳后显示所有事件
#       --until         ：流水时间显示到指定的时间为止
$ docker [system] info       
# docker [system] info [OPTIONS]
#   > 显示 Docker 系统信息，包括容器总数，运行容器数...
$ docker system prune       
# docker system prune [OPTIONS]
#   > Remove unused data
```

### trust       
> `docker trust COMMAND`

``` shell
# docker trust key COMMAND
#   > Manage keys for signing Docker images
$ docker trust key generate 
# docker trust key generate NAME   
#   > Generate and load a signing key-pair
$ docker trust key load 
# docker trust key load [OPTIONS] KEYFILE
#   > Load a private key file for signing
# docker trust signer COMMAND  
#   > Manage entities who can sign Docker images
$ docker trust signer add 
# docker trust signer add OPTIONS NAME REPOSITORY [REPOSITORY...]
#   > Add a signer
$ docker trust signer remove 
# docker trust signer remove [OPTIONS] NAME REPOSITORY [REPOSITORY...]
#   > Remove a signer
$ docker trust inspect 
# docker trust inspect IMAGE[:TAG] [IMAGE[:TAG]...]     
#   > Return low-level information about keys and signatures
$ docker trust revoke 
# docker trust revoke [OPTIONS] IMAGE[:TAG]      
#   > Remove trust for an image
$ docker trust sign 
# docker trust sign IMAGE:TAG       
#   > Sign an image
```

### volume
> `docker volume COMMAND`

``` shell
$ docker volume create 
# docker volume create [OPTIONS] [VOLUME]     
#   > Create a volume
$ docker volume inspect 
# docker volume inspect [OPTIONS] VOLUME [VOLUME...]     
#   > Display detailed information on one or more volumes
$ docker volume ls 
# docker volume ls [OPTIONS]         
#   > List volumes
$ docker volume prune 
# docker volume prune [OPTIONS]       
#   > Remove all unused local volumes
$ docker volume rm 
# docker volume rm [OPTIONS] VOLUME [VOLUME...]          
#   > Remove one or more volumes
```