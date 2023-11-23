# MySQL
>  是一个关系型数据库管理系统(`RDBMS`)，被`Oracle`公司收购。是最流行的关系型数据库管理系统，在`WEB`应用方面`MySQL`是最好的`RDBMS`应用软件之一

## Reference

- [MySQL](http://www.mysql.com/)
- [mysql-tutorial](https://github.com/jaywcjlove/mysql-tutorial)
    > MySQL入门教程（MySQL tutorial book）
- [mycli](https://github.com/dbcli/mycli)
    > A Terminal Client for MySQL with AutoCompletion and Syntax Highlighting.
- [菜鸟教程 - MySQL](http://www.runoob.com/mysql/mysql-tutorial.html)

## Concept

- 特点：
    * 一个开放源码的小型关联式数据库管理系统
    * 体积小、速度快、总体拥有成本低
    * `MySQL`被广泛地应用在`Internet`上的中小型网站中

- 各版本区别

| 版本 | 说明 
| --- | --- 
| `Community Server` 社区版本   | 开源免费，但不提供官方技术支持。(**常用版本**) 
| `Enterprise Edition` 企业版本 | 需付费，可以试用30天。 
| `Cluster` 集群版              | 开源免费，可将几个`MySQL Server`封装成一个`Server`。 
| `Cluster CGE` 高级集群版       | 需付费。
| `Workbench`(`GUI TOOL`）      | 一款专为`MySQL`设计的ER/数据库建模工具。它是著名的数据库设计工具`DBDesigner4`的继任者。`MySQL Workbench`又分为两个版本，分别是社区版（`MySQL Workbench OSS`）、商用版（`MySQL Workbench SE`）。 

## Usage

- Startup & Shutdown

``` shell
# 启动
$ service mysqld start          # service启动
$ /etc/inint.d/mysqld start     # mysqld脚本启动
$ safe_mysqld&                  # safe_mysqld 启动
# 停止
$ service mysqld stop
$ /etc/inint.d/mysqld stop
$ mysqladmin shutdown
# 重启
$ service mysqld restart
$ /etc/inint.d/mysqld restart
# 连接mysql数据库
$ mysql -u root -p  
# 其它命令
$ ps -aux | grep mysqld         # 查看mysql是否启动
$ netstat -tl | grep mysql      # 查看mysql是否在监听端口
```

- MySQL Commands

``` mysql
> show databases;       --- 显示mysql中的数据库
> status;               --- 查看mysql状态
> select version();     --- 查看mysql版本
```



