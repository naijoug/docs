# SVN

## Reference

- [SVN](https://subversion.apache.org/)


## Commands
> 命令行格式：`svn <subcommand> [options] [args]`

  ```sh
  $ svn help                  # 显示帮助信息
  $ svn --version             # svn 版本号
  # 从服务器checkout项目
  $ svn checkout http://192.168.1.118/svn/project --username=user password=pwd   
  $ svn status                # 查看工作区状态
  $ svn add file(folders)     # 添加文件或文件夹
  $ svn commit -m 'comment'   # 提交修改
  $ svn rm file               # 删除文件
  $ svn mv oname nname        # 重命名
  $ svn revert file           # 撤销文件修改
  $ svn update                # 更新服务器代码到本地
  $ svn update -r 5           # 恢复到指定版本
  $ svn diff -r x:y           # 比较 x 和 y 版本差异
  $ svn info                  # 显示工作目录 svn 信息
  $ svn cleanup               # 清除
  $ svn log                   # 查看日志
  $ svn log file              # 查看文件日志
  $ svn log file@12           # 查看文件指定版本日志
  ```

## 文件状态表

  | 文件状态 | 说明 
  | :---: | --- 
  | `  `  | 没有修改 
  | `A`   | 被添加到本地代码仓库 
  | `C`   | 冲突 
  | `D`   | 被删除 
  | `I`   | 被忽略 
  | `M`   | 被修改 
  | `R`   | 被替换 
  | `X`   | 外部定义创建的版本目录 
  | `?`   | 文件没有被添加到本地版本库内 
  | `!`   | 文件丢失或者不完整（不是通过svn命令删除的文件）
  | `~`   | 受控文件被其他文件阻隔 
