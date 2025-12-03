---
title: Git
icon: hashtag

index: true
order: 3

---

> `Git`是一款自由和开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。是`Linus`(李纳斯)的第二个伟大作品，2005年由于`BitKeeper`软件公司对`Linux`社区停止了免费使用权。`Linus`迫不得己自己开发了一个分布式版本控制工具，因而开发了`Git`。

<!-- more -->

## reference


- [Git Pro 2nd](https://git-scm.com/book/zh/v2)
- [Git 教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
- [Git Cheat Sheet 中文版](https://github.com/flyhigher139/Git-Cheat-Sheet)
- [Learn Git Branching](https://oschina.gitee.io/learn-git-branching/)

---

- [Git Large File Storage](https://git-lfs.com/)
- [Gerrit](https://www.gerritcodereview.com/) : A git serve for code review.
- [First Aid Git](https://firstaidgit.io) 👉🏻 [🐙](https://github.com/magalhini/firstaidgit)
    
## tool
    
- [lazygit](https://github.com/jesseduffield/lazygit)
    > simple terminal UI for git commands
- [GitUI](https://github.com/gitui-org/gitui)
    > Blazing 💥 fast terminal-ui for git written in rust 🦀
- [GitDiagram](https://gitdiagram.com/) 👉🏻 [🐙](https://github.com/ahmedkhaleel2004/gitdiagram)
    > Free, simple, fast interactive diagrams for any GitHub repository

## repositority

- [GitHub](https://github.com)
- [Gitlab](https://gitlab.com)
- [Gitee](https://gitee.com)
- [Bitbucket](https://bitbucket.org/)

## .gitignore
> 忽略无需使用 git 管理的文件

- `.gitignore` 文件规则
    * 所有空格 & `#`开头的注释 都不会被忽略
    * 使用glob模式匹配 ( `glob`模式 : shell使用的简化的正则 )
    * `/` : 说明忽略的是目录
- `glob` 模式
    * `*` : 匹配0个或多个任意字符
    * `[abc]` : 匹配方括号中的其中一个字符(或)
    * `?` : 匹配一个任意字符
    * `[0-9]` : 匹配该字符范围的其中一个字符

  ```sh .gitignore
  *.a     # 忽略所有`.a`后缀的文件
  !lib.a  # 但是`lib.a`除外

  /file   # 忽略根目录的 `file` 文件
  dir/        # 忽略dir目录下的所有文件
  dir/*.txt   # 忽略dir目录下的所有`txt`后缀的的文件( 不会递归忽略到dir的子目录 )
  ```

## Commands

  ```shell
  $ git config --list         # 显示配置信息
  # 设置当前 git 项目的配置(用户名 & 邮箱)
  $ git config user.name 'username'
  $ git config user.email 'user@mail.com'
  # 设置全局用户信息( --global : 设置全局信息，不加设置当前git配置 )
  $ git config --global user.name 'naijoug'  
  $ git config --global user.email 'naijoug@126.com'
  $ git config --global color.ui true     # git显示颜色
  $ git config --global alias.st status   # 设置命令别名
  $ git config --global alise.unstage 'reset HEAD' # 设置命令串别名
  $ git config --global alias.lg 'log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit'
  $ git config --global user.name     # 查看指定的配置信息
  # 设置 github proxy
  git config --global --unset http.https://github.com.proxy # 取消 github 代理
  git config --global http.https://github.com.proxy socks5://xxx.com:8080 # 设置 github 代理
  ```

  ```shell
  # git初始化
  $ git init                  # 将当前目录初始化为git
  $ git init --bare           # 
  # git 添加
  $ git add file              # 添加文件
  $ git add .                 # 添加所有文件
  $ git stage .               # 等价于 git add .
  $ git add -f file           # 强制添加文件( file文件被`.gitignore`忽略 )
  $ git check-ignore -v file  # 可以查看( file文件被忽略 是`.gitignore`文件那一行的原因 )
  $ git status                # 查看状态
  # git 提交
  $ git commit -m 'commit info'   # 提交变动
  $ git commit --amend            # 修改最后一次提交
  # git 查看变动
  $ git diff                    # 查看工作区文件变化
  $ git diff file               # 查看工作区指定文件变化
  $ git diff --staged           # 查看暂存区文件变化
  $ git diff --cached           # 查看暂存区文件变化
  $ git diff HEAD -- file       # 查看版本库和工作区指定文件变化
  # git log
  $ git log                     # 查看历史记录
  $ git log -p -2               # 显示最后两次提交记录 ( -p : 显示每次提交差异 )
  $ git log --stat              # 显示增改行数统计
  $ git log --pretty=oneline    # 将提交信息显示在一行中
  $ git log --pretty=format='%h - %an, %ar : %s' # 格式化提交信息
  $ git log --graph             # 查看历史分支合并图
  $ git log --abbrev-commit     # 缩写(commit id)
  $ git log --pretty=oneline --abbrev-commit # 多参数显示历史记录
  # git 回退
  $ git reset --hard HEAD^      # 回退到上一版本 ( HEAD: 当前版本 HEAD^: 上一版本 HEAD^^: 上上版本  HEAD~100:上100个版本)
  $ git reset --hard b317a3     # 会退到指定版本 (commit id , 可以不写全只写前几位)
  $ git reset HEAD file         # 把暂存区的修改撤销(撤销到工作区)
  $ git reflog                  # 记录每一次git的命令    
  $ git checkout -- file        # 撤销文件工作区的全部修改
  $ git restore --staged file   # 插销暂存文件
  $ git restore --staged .      # 撤销所有暂存文件
  $ git restore .               # 撤销工作区所有修改
  
  # 批量修改提交用户&邮箱
  #   - 安装 git-filter-repo
  pip install git-filter-repo
  #   - 创建邮箱映射文件 mailmap.txt
  echo "NewName <new@email.com> <old@email.com>" > mailmap.txt
  #   - 执行替换
  git filter-repo --mailmap mailmap.txt

  # git 远程操作
  $ git remote                # 查看远程仓库信息
  $ git remote add origin git@github.com:naijoug/NGKit.git    # 添加名为`origin`的仓库
  $ git remote set-url origin https://<Token>@github.com/<Username>/<Repo>.git
  $ git remote -v             # 查看当前remote远程仓库详细信息
  $ git remote show origin    # 查看`origin`远程仓库的详细信息
  $ git remote rename origin name # 重命名`origin`为`name`
  $ git remote rm origin      # 删除名为`origin`的远程仓库
  $ git push origin master    # 推动master到origin远程仓库
  $ git push origin dev:dev   # 推送本地分支 dev 到远程 origin 
  $ git push origin https://<Username>:<Token>@github.com/<Username>/<Repo>.git
  $ git push -u origin master # 设定 master 分支的远程 origin 的 upstream 分支
  #       -u : --set-upstream
  $ git clone git@github.com:naijoug/NGKit/NGKit.git # 从远程仓库clone项目到本地
  $ git fetch origin          # 下载服务器代码到本地,不影响本地代码(在/origin/master远程分支)
  $ git pull                  # 从远程仓库，抓取最新代码到本地
  $ git pull --allow-unrelated-histories
  # git 分支管理
  $ git branch                # 查看分支
  $ git branch dev            # 创建名为`dev`的分支
  $ git branch -d dev         # 删除分支 
  $ git branch -D dev         # 强制删除分支
  $ git branch --set-upstream dev origin/dev  # 设置本地`dev`分支与远程分支`origin/dev`的链接
  $ git branch --merged       # 查看已合并的分支
  $ git branch --no-merged    # 查看未合并的分支
  $ git checkout dev          # 切换分支
  $ git checkout -b dev       # 创建 & 切换分支
  $ git checkout -b dev origin/dev    # 创建与远程分支`origin/dev`对应的的本地分支`dev`
  $ git merge dev             # 合并`dev`分支到当前分支( Fast Forward 模式合并 )
  $ git merge --no-ff -m 'merge no-ff' dev # 不用( Fast Forward )模式进行合并
  # fork 之后
  $ git remote add upstream https://github.com/xxx/xxx # 添加上游仓库地址
  $ git fetch upstream # 拉取上游仓库代码
  $ git merge upstream/master # 合并上游仓库(fork 的原有仓库)

  # git 状态存储
  $ git stash                 # 保存当前工作状态
  $ git stash list            # 显示当前存储的工作状态栈
  $ git stash apply           # 恢复栈顶的工作状态( stash状态未删除 )
  $ git stash drop            # 删除栈顶的工作状态
  $ git stash apply stash@{0} # 恢复指定的stash
  $ git stash pop             # 恢复栈顶工作状态，并删除stash状态
  # git 标签管理
  $ git tag                   # 查看所有便签
  $ git tag v1.0              # 为当前分支打一个标签
  $ git tag v2.0 4d02a0a      # 为指定的( commit id )打标签
  $ git tag -a v3.0 -m 'version 3.0'  # 打标签 & 说明文字
  $ git tag -d v1.0           # 删除标签
  $ git push origin v1.0      # 推送指定tag到远程
  $ git push origin --tags    # 推送所有的tag到远程
  $ git push origin :refs/tags/v1.0   # 删除远程库中的标签
  $ git show v1.0             # 显示指定标签的提交信息
  ```

- `git log` 常用选项

    |选项 | 说明 
    | --- | --- 
    | `-p`              | 按补丁格式显示每个更新之间的差异。 
    | `--stat`          | 显示每次更新的文件修改统计信息。 
    | `--shortstat`     | 只显示 --stat 中最后的行数修改添加移除统计。 
    | `--name-only`     | 仅在提交信息后显示已修改的文件清单。 
    | `--name-status`   | 显示新增、修改、删除的文件清单。 
    | `--abbrev-commit` | 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符。 
    | `--relative-date` | 使用较短的相对时间显示（比如，“2 weeks ago”）。 
    | `--graph`         | 显示 ASCII 图形表示的分支合并历史。 
    | `--pretty`        | 使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）。 

- `--pretty=format` 格式化占位符说明

    | 选项 | 说明 
    | --- | --- 
    | `%H`  | 提交对象（commit）的完整哈希字串 
    | `%h`  | 提交对象的简短哈希字串 
    | `%T`  | 树对象（tree）的完整哈希字串 
    | `%t`  | 树对象的简短哈希字串 
    | `%P`  | 父对象（parent）的完整哈希字串 
    | `%p`  | 父对象的简短哈希字串 
    | `%an` | 作者（author）的名字 
    | `%ae` | 作者的电子邮件地址 
    | `%ad` | 作者修订日期（可以用 -date= 选项定制格式）
    | `%ar` | 作者修订日期，按多久以前的方式显示 
    | `%cn` | 提交者(committer)的名字 
    | `%ce` | 提交者的电子邮件地址 
    | `%cd` | 提交日期 
    | `%cr` | 提交日期，按多久以前的方式显示 
    | `%s`  | 提交说明 
    
## Mercurial

- [Mercurial](https://www.mercurial-scm.org/)
- [Mercurial 中文 Wiki](https://www.mercurial-scm.org/wiki/CategoryChinese)

## Error

> POST git-receive-pack (chunked)
error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400
send-pack: unexpected disconnect while reading sideband packet
fatal: the remote end hung up unexpectedly

```sh
# 这个错误 git 推送 HTTP 缓冲区大小不足 => 通过配置调大缓冲区
git config --global http.postBuffer 524288000
```