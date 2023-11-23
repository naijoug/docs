# Shell
> Shell 脚本 : 包含一系列命令的文件
> 
> Shell : 读取脚本文件，并执行脚本中的所有命令 (== 在命令行一条一条的输入命令)

## Reference

- [Shell 教程](https://www.runoob.com/linux/linux-shell.html)
- [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)
- [shell-book](https://github.com/52fhy/shell-book)
- [explainshell](https://github.com/idank/explainshell)
    > match command-line arguments to their help text

## Concept

- 命令种类

  | 命令种类 | 说明
  | -- | --
  | 可执行程序            | 使用编程语言(C、C++、Java、Python...)编写，编译成的可执行二进制文件
  | Shell 内建命令        | Shell (builtins) 命令 (如 cd、ls...)
  | 脚本定义的 Shell 函数  | Shell 脚本中，自定义一系列操作组合的 Shell 函数
  | 命令别名              | 定义其它命令的别名

- 文件描述符

  | 描述符 | 说明
  | -- | --
  | `STDIN`   | 0, 标准输入 
  | `STDOUT`  | 1, 标准输出
  | `STDERR`  | 2, 标准错误输出

- 脚本目录

  | 目录 | 权限 
  | -- | --
  | `~/bin`                 | 个人脚本(当前用户可用)
  | `/usr/local/bin`        | 个人脚本(所有用户可用) | 安装软件脚本
  | `/usr/local/sbin`       | 系统管理员脚本
  | `/bin` & `/usr/bin`     | 系统提供的一下脚本(不要改动)
  | `/sbin` & `/usr/sbin`   | 系统提供的系统管理员脚本(不要改动)

- Shell 脚本中的 $

  | 符号 | 说明 
  | -- | -- 
  | `$$`    | Shell 本身的进程ID (ProcessID)
  | `$!`    | Shell 最后运行的后台进程ID
  | `$?`    | 最后运行的命令的结束代码 (返回值，0: 正确，其它: 错误)
  | `$-`    | 显示 Shell 使用的当前选项，与 set 功能相同
  | `$*`    | 所有参数列表，以"`$1 $2 … $n`"的形式输出所有参数
  | `$@`    | 所有参数列表，以"`$1`" "`$2`" … "`$n`" 的形式输出所有参数
  | `$#`    | Shell 的参数个数
  | `$0`    | Shell 本身的文件名
  | `$1~$n` | Shell 的各参数值，`$1`是第1个参数，`$2`是第2个参数...，`${10}`是第10个参数 (`> 10` 需要使用`{}`)

## 通配符

- 通配符表

  | 通配符 | 意义 
  | :---: | --- 
  | `*`               | 匹配任意多个字符(包括零个或一个) 
  | `?`               | 匹配任意一个字符(不包括零个) 
  | `[characters]`    | 匹配任意一个属于字符集中的字符 
  | `[!characters]`   | 匹配任意一个不是字符集中的字符 
  | `[[:class:]]`     | 匹配任意一个属于指定`字符类`(详见字符类表)中的字符 

- 字符类表

  | 字符类 | 意义 
  | --- | --- 
  | `[:alnum:]`       | 匹配任意一个字母或数字 
  | `[:alpha:]`       | 匹配任意一个字母 
  | `[:digit:]`       | 匹配任意一个数字 
  | `[:lower:]`       | 匹配任意一个小写字母 
  | `[:upper]`        | 匹配任意一个大写字母 

- 范例

  | 模式 | 匹配对象 
  | :---: | --- 
  | `*`                       | 所有文件 
  | `g*`                      | 文件名以“g”开头的文件 
  | `b*.txt`                  | 以”b” 开头，中间有零个或任意多个字符，并以”.txt” 结尾 的文件 
  | `Data???`                 | 以“Data”开头，其后紧接着 3 个字符的文件 
  | `[abc]*`                  | 文件名以”a”，”b”，或”c”开头的文件 
  | `BACKUP.[0-9][0-9][0-9]`  | 以”BACKUP.” 开头，并紧接着3个数字的文件 
  | `[[:upper:]]*`            | 以大写字母开头的文件 
  | `[![:digit:]]*`           | 不以数字开头的文件 
  | `*[[:lower:]123]`         | 文件名以小写字母结尾， 或以“1”，“2”，或“3”结尾的文件 

## Usage

```bash
$ cat /etc/shells   # 查看本机 shell 种类
$ echo $SHELL       # 查看当前使用 shell
```

- sh : Bourne Shell

- [bash](https://wiki.archlinux.org/index.php/Bash_(简体中文)) 
  > Bourne Again Shell
    * 1.`/etc/profile`
    * 2.`/etc/paths`
    * 3.`~/.bash_profile` ( bash 下，在这个文件中配置环境变量)
    * 4.`~/.bash_login`
    * 5.`~/.profile`
    * 6.`~/.bashrc`
    
- [zsh](https://wiki.archlinux.org/index.php/Zsh_(简体中文))
    * 1.`/etc/zshenv`
    * 2.`~/.zshenv`
    * 3.`~/.zprofile` ( zsh 下，在这个文件中配置环境变量)
    * 4.`~/.zlogin`
    * 5.`~/.zshrc`

## Usage

```bash
#!/bin/bash # Shebang : 指定解析脚本使用的 Shell 程序

# > 注释 : 注释以 “#” 开头，会被解释器忽略
# > 多行注释 : EOF 可以使用其它符号('、!)代替
:<<EOF
xxx...
xxx...
EOF

# > 变量 : 字母、数组和下划线 (首字母不能为数字，不能使用 Shell 中的关键字)
num=100     # 定义变量 【注：等号两边不能有空格】
echo $num   # 输出变量 num
num=99      # 修改变量
echo ${num} # 输出变量 num 【注：花括号可以省略，添加时为了帮助解析器识别】
unset num   # 删除变量 num 【注：删除后不能使用，只读变量不能删除】
# > 只读变量 : 只读变量定义后不能修改和删除
PI=3.1415926 
readonly PI # 定义只读变量 PI
echo $PI

# > 字符串
#   单引号 : 原样输出字符串，不能使用变量和转义字符
#   双引号 : 可以使用变量和转义字符
str='this is a string'          # 单引号字符串
str2="the num is \"${num}\""    # 双引号字符串
# > 拼接字符串
str3='the num is "'${num}'" !'  
# > 字符串长度
echo ${#str}        # 打印 str1 字符串的长度
# > 截取子字符串
echo ${str:0:4}     # 截取第0个字符开始的4个字符
# > 查找子字符串
echo `expr index "$str" is` # ?

# > 索引数组 : 支持一维数组，不支持多维数组
# > 定义数组
tuple=("one" "two" "three")
tuple2=(
    "one"
    "two"
    "three"
)
tuple3[0]="one"
tuple3[1]="two"
tuple3[2]="three"
# > 读取数组
echo ${tuple[0]}    # 读取 tuple 数组第一个元素值
echo ${tuple[@]}    # 读取 tuple 数组所有值
# > 数组长度
echo ${#tuple[@]}   # 获取数组长度
echo ${#tuple[*]}   # 获取数组长度
echo ${#tuple[2]}   # 获取第3个元素长度

# 关联数组 : 类似字典，索引可以自定义key
declare -a dic
dic=([key1]="value1" [key2]="value2" [key3]="value3")
echo ${dic[key1]}   # 打印 key1 的值
echo ${!dic[*]}     # 打印所有 key
echo ${dic[@]}      # 打印所有 value
# 遍历所有 key
for key in ${!dic[*]};do
    echo "$key: ${dic[$key]}"
done

# > 运算符
# > 算法运算符 : + 、- 、* 、/ 、%、= 、==、!=
#  expr : 表达式计算工具, 用法: `expr [算术表达式]`
sum=`expr 1 + 1`
echo '1 + 1 = '$sum
a=3
b=5
res=`expr $a + $b`  
res=`expr $a - $b`
res=`expr $a * $b`
# > 关系运算符 
if [ $a == $b ] # 判断 a 与 b 是否相等
then
    echo "a 等于 b"
fi
# > 布尔运算符

# > 逻辑运算符

# > 字符串运算符

# > 文件测试运算符

# > 函数定义
[function] funname [()] # function 可以省略
{
    action;
    [return int;] # 若省略 return, 则将最后一条命令运行结果作为返回值
}
```

```sh
# 判断上一个 shell 命令是否执行成功
if [ $? -eq 0 ]; then
    echo "succeeded."
else
    echo "failed."
fi
# 或者
if [ $? -ne 0 ]; then
    echo "failed."
else
    echo "succeeded."
fi
```