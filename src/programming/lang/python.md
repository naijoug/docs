---
title: Python
icon: hashtag

index: true

---

<!-- more -->

# [Python](https://www.python.org/)
> Python

## Reference

- [pip](https://github.com/pypa/pip)
    > The Python Package Installer
- [Python Docs](https://docs.python.org/zh-cn/3/)
- [Learn Python](https://github.com/xianhu/LearnPython)
- [Python 100 Days](https://github.com/jackfrued/Python-100-Days)
- [Python 教程](https://www.liaoxuefeng.com/wiki/1016959663602400)
- [Python Cookbook](https://github.com/yidao620c/python3-cookbook)
    > 《Python Cookbook in Chinese》 3rd Edition 翻译
- [Python-Guide-CN](https://github.com/Prodesire/Python-Guide-CN)
    > Python最佳实践指南。 The chinese translation of "Hitchhiker's Guide to Python".
- [interpy-zh](https://github.com/eastlakeside/interpy-zh)
    > 📘《Python进阶》（Intermediate Python - Chinese Version）
- [Python 中文学习大本营](http://www.pythondoc.com/)

## Package Management

- [Rye](https://github.com/mitsuhiko/rye)
    > An Experimental Package Management Solution for Python

## Usage

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

## Python2 vs Python3

| Python2   | Python3 
| ---       | ---       
| `print`   | `print()` 
| `xrange()`| `range()` 
| `except IOError, (errno, strerror)` | `except IOError as (errno, strerror)` 
| `3 / 2 = 1` | `3 / 2 = 1.5` 

## Virtual Environment 
> `venv` & `pyenv` & `pipenv` & `virtualenv` & `Anaconda`

- [pyenv](https://github.com/pyenv/pyenv)
    > Simple Python version management
- [pipenv](https://github.com/pypa/pipenv)
    > Python Development Workflow for Humans.
- [virtualenv](https://github.com/pypa/virtualenv) 
    > Virtual Python Environment builder
- [Anaconda](https://www.anaconda.com)
    > Data science technology for a better world.

```shell
# venv (Python 3.3)
$ python -m venv .env # 创建虚拟环境
$ source .env/bin/activate # 激活虚拟空间
$ deactivate # 关闭虚拟空间

# pyenv
$ brew install pyenv    # 安装 pyenv
$ pyenv versions        # 查看 python 版本

# pipenv
$ pipenv --python 3.10      # 设置项目使用 python 版本
$ pipenv install <package>  # 安装依赖包

# virtualenv
$ pip install virtualenv    # 安装 virtualenv
$ virtualenv test_env                       # 在当前目录建立一个 python 虚拟环境
$ virtualenv --no-site-packages test_env    # 不复制系统 python 环境的第三方包
$ virtualenv -p /usr/bin/python2.7 test_env # 指定 python 版本
$ source test_env/bin/activate # 激活虚拟空间
$ deactivate # 关闭虚拟空间

# conda
$ conda -V          # conda版本
$ conda list        # 查看当前环境安装包
$ conda list -n env # 指定环境安装包
$ conda info        # 查看conda信息
# 查看已创建虚拟环境
$ conda info -e
$ conda env list    
# 创建
$ conda create --name $ENVIRONMENT_NAME [package]
$ conda create -n py3 python=3 # 创建python3环境
$ conda create -n py2 python=2 # 创建python2环境
$ conda create --name python34 python=3.4   # 创建指定版本环境
# 激活
$ source activate py3
# 关闭
$ source deactivate
# 包
$ conda search [package]            # 搜索包
$ conda install -n env [package]    # 安装包
$ conda update -n env [package]     # 更新包        
$ conda remove --name env [package] # 删除包
# 删除虚拟环境
$ conda remove -n env --all
$ conda env remove -n env
```

## Interactive Mode 
> Python 交互模式

- `>>>` : 主提示符(primary prompt)
- `...` : 从属提示符，输入多行结构时出现从属提示符

## `main` & `__main__`

  ```python
  #!/usr/bin/python3      # 大部分 .py 文件不必使用 Shebang，main 文件应该使用
  # Shebang : 一个由井号和叹号构成的字符串行(#!)，用于帮助内核找到 Python 解释器
  def main():
      # TODO
  if __name__ == '__main__': # 作用 : 当作为模块被导入时，主程序不会被执行
      main()
  ```

## `str` & `bytes`

  ```python
  s = 'test'
  b = b'test'
  # str -> bytes
  print(s.encode('utf-8'))
  print(bytes(s, encoding='utf-8'))
  print(str.encode(s))
  # bytes -> str
  print(b.decode('utf-8'))
  print(str(b, encoding='utf-8'))
  print(bytes.decode(b))
  ``` 
  
## Conditional Expression 
> 条件表达式

  ```python
  a, b, c = 1, 2, 3
   
  # 1.常规
  if a>b:
      c = a
  else:
      c = b
   
  # 2.表达式
  c = a if a>b else b # 先执行中间的if，如果返回True，就是左边，False是右边。
   
  # 3.二维列表
  c = [b,a][a>b] #实际是[b,a][False]，因为False被转换为0，所以是[1,2][0]，也就是[1]
                        # False返回第一个，True 返回第一个。
   
  # 4
  c = (a>b and [a] or [b])[0]
  # 这个比较好玩，False and [1] or [2]，因为and的优先级高于or，先算and
  # False和[1] and之后还是False，和[2]or之后却成了[2]
  # True 和[1] and之后是[1]，[1]和[2]or结果是[1]
  # 也就是False和True在和别人做boolean运算的时候，根据and还是or，F和T在前在后有不一样的数据转换规则。
  ```

## 函数

- 默认参数

  ```python
  # 默认参数
  def test1(a, b = 1, c = 2):
      return a + b + c
  test1(10)    # 10 + 1 + 2 = 13
  # 默认参数的值等于定义域的值
  i = 10
  def test2(a, b = 1, c = i):
      return a + b + c
  i = 20
  test2(10)   # 10 + 1 + 10 = 21
  # 默认参数为可变对象时，需要注意。
  def test3(a, b = 1, c = 2, L = []):
      L.append(a + b + c)
      return L
  test3(10)   # [13]
  test3(10)   # [13, 13]
  test3(10)   # [13, 13, 13]
  # 解决方案: 函数内对可变对象进行初始化
  def test4(a, b = 1, c = 2, L = None):
      if L == None:
          L = []
      L.append(a + b + c)
      return L
  test4(10)   # [13]
  test4(10)   # [13]
  ```

- 任意参数
    * `*name` : 不常用，传递的参数被包装成一个元组，在其后面的参数必须是关键字参数
    * `**name` : 必须作为最后一个参数，包含剩余所有的关键字参数

## Error

- `ModuleNotFoundError: No module named '_ctypes'`
> 没有安装外部函数库(`libffi`)的开发链接库软件包

```shell
# > ubuntu
$ apt-get install libffi-dev
# > centos
$ yum install libffi-devel -y
```

- `ModuleNotFoundError: No module named '_lzma'`
> 没有安装(`lzma-dev` - LZMA 压缩是一种数据压缩算法)的开发链接库软件包 

```shell
# > ubuntu
$ apt-get install liblzma-dev -y
# > centos
$ yum install xz-devel -y
$ yum install python-backports-lzma -y
```