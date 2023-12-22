---
title: 包管理
icon: hashtag

index: false

---

<!-- more -->
  
## pip

  > [pip](https://github.com/pypa/pip) : The Python Package Installer

### command

```shell
# pip
$ pip --version         # 查看 pip 版本
$ pip install <package> # 安装 Python 包

# 临时使用镜像安装 Python 包
$ pip install -i https://mirrors.aliyun.com/pypi/simple <package>
$ pip list              # 查看已安装的 Python 包

# pip config
# pip 设置阿里镜像源 > https://developer.aliyun.com/mirror/pypi
$ pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
$ pip config set install.trusted-host mirrors.aliyun.com
# pip 取消设置阿里镜像源
$ pip config unset global.index-url
$ pip config unset install.trusted-host

# 显示 pip 配置设置
$ pip config list       
```

## `Rye`

  > [Rye](https://github.com/mitsuhiko/rye) : An Experimental Package Management Solution for Python
  