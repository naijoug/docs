# Multipass

## Reference

- [Multipass - Official](https://multipass.run)
- [Multipass - GitHub](https://github.com/canonical/multipass)

## Usage

``` shell
# 安装 multipass
$ brew install multipass

$ multipass --help # 查看帮助
$ multipass -h
$ multipass launch --help # 查看 launch 指令帮助
$ multipass find # 查看可用镜像
$ multipass launch --name ubuntu # 使用最新版 LTS 镜像创建实例
$ multipass shell ubuntu # 进入名字为 ubuntu 实例的 shell 终端
$ multipass exec ubuntu -- lsb_release -a # 使用 multipass 运行 ubuntu 实例命令
$ multipass list # 查看虚拟机实例列表
$ multipass info ubuntu # 查看 ubuntu 实例信息
$ multipass info --all # 查看所有实例信息
$ multipass start ubuntu # 启动 ubuntu 实例
$ multipass start --all # 启动所有实例
$ multipass stop ubuntu # 停止 ubuntu 实例
$ multipass stop --all # 停止所有实例
$ multipass delete ubuntu # 删除 ubuntu 实例
$ multipass delete --purge ubuntu # 删除并清理 ubuntu 实例
$ multipass delete --all # 删除所有实例

$ multipass mount path/to/dev ubuntu:path/to/dev # 将本地目录挂载到 ubuntu 实例目录
$ multipass unmount ubuntu # 卸载 ubuntu 实例所有挂载目录
$ multipass unmount ubuntu:path/to/dev # 卸载 ubuntu 实例指定挂载目录
$ multipass transfer path/to/file ubuntu:path/to/file # 从宿主机传送文件到虚拟机内部
```