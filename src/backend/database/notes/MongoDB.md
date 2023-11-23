
## Reference

- [MongoDB Docs](https://docs.mongodb.com) : [MongoDB 中文手册](http://www.mongoing.com/docs)
- [菜鸟教程 - MongoDB](http://www.runoob.com/mongodb/mongodb-tutorial.html)
- [MongoDB 入门教程](http://wiki.jikexueyuan.com/list/mongodb/)
- [mLab - 免费的 Mongo 云](https://mlab.com)

## SQL VS MongoDB

| `SQL`术语/概念 | `MongoDB`术语/概念 
| :---: | :---: 
| `database`(数据库)      | `database`(数据库) 
| `table`(表)             | `collection`(集合) 
| `row`(行)               | `document`(文档) 
| `column`(字段)          | `field`(域) 
| `index`	(索引)         | `index`(索引) 
| `table joins`(表连接)   | 不支持 
| `primary key`(主键)     | `primary key`(`MongoDB`自动将`_id`字段设置为主键) 

## Startup & Shutdown

``` shell
# 服务端启动
$ mongod    # 启动 mongo 服务，默认数据库目录"/data/db"
$ mongod --dbpath=/path     # 指定数据库目录
$ mongod --port 20111       # 指定端口号(默认服务端口号 : 27017)
$ mongod --rest             # 启用 HTTP 的用户页面(页面端口号 : 28017)
$ mongod --fork --logpath=/logpath --logappend=true
#   --fork      用于将 mongo 服务挂到 init 进程(pid=1)下启动
#               防止非 exit 退出命令行，出现错误 `got signal 1 (Hangup), will terminate after current cmd ends`
#   --logpath       指定 mongo 日志文件，注意是指定文件不是目录
#   --logappend     使用追加的方式写日志
$ mongod -f /path/file.conf # 通过配置文件启动，conf 中设置启动参数

# 客户端启动
$ ./mongo     # 进入 mongo 后台管理

# 关闭 MongoDB
#  方案一 : mongo 命令
> use admin
> db.shutdownServer()
#  方案二 : kill mongo 进程
```

- ubuntu

``` shell
# 默认 path
#   config : /etc/mongod.conf
#   dbpath : /var/lib/mongodb
#   logpath : /var/log/mongodb
$ sudo service mongod start
$ sudo service mongod stop
$ sudo service mongod restart

$ systemctl start mongod
$ systemctl stop mongod
$ systemctl status mongod
$ systemctl restart mongod
$ systemctl enable mongod   # 重启自动启动 mongo

$ tail -n 100 /var/log/mongodb/mongod.log # 查看 mongo 日志
```

- brew

``` shell
# config: /usr/local/etc/mongod.conf
# logpath: /usr/local/var/log/mongodb
# dbpath: /usr/local/var/mongodb

$ brew services restart mongodb
$ brew services stop mongodb
$ brew services start mongodb
```

## Commands

- 常用命令

``` shell
> show users                # 显示所有用户
> show dbs                  # 显示所有数据库
> db                        # 显示当前所在数据库
> use Users                 # 切换到 Users 数据库
> show collections;         # 显示当前数据库中的表列表
> help                      # 显示帮助信息
> db.help();                # 显示 db 帮助信息
> db.Users.help();          # 显示 Users 表帮助信息 
> db.auth("user", "pwd")    # 用户授权  
```

- 用户授权

``` shell
# 用户授权
> use reporting
> db.grantRolesToUser(
   "reportsUser",
   [
     { role: "readWrite", db: "products" } ,
     { role: "readAnyDatabase", db:"admin" }
   ]
 )
# 撤销用户授权
> use reporting
> db.revokeRolesFromUser(
    "reportsUser",
    [
      { role: "readWrite", db: "accounts" }
    ]
 )
```

- 数据库(创建 & 删除)

``` shell
# 创建数据库
> use User  # 存在，切换到User数据库；不存在，创建(刚创建的数据库，需要插入一条数据后，才能显示)
# 删除数据库
> db.dropDatabase() # 需要先切换到对应数据库
# 创建Info数据库，并创建数据访问用户，有读写权限
> use Info
# 3.0添加用户
> db.createUser({user:"admin", pwd:"admin", roles:["readWrite"]})
# 2.0添加用户
> db.addUser("admin","123456",false) # 最后参数：是否只读
```

- 集合数据(增 & 删 & 改 & 查)

``` shell
# 插入数据
> db.User.insert({"id","0001", "name":"kobe", "age":24}) # User是插入的集合名
> db.User.save({"id":"0002", "name":"James", "age":23})  # 不传_id，等价于insert
# 删除数据
> db.User.remove({"age":24})        # 删除所有age=24的文档
> db.User.remove({"age":24}, true)  # 删除一条age=24的文档
> db.User.remove({})                # 清空User文档
# 修改数据
> db.User.update({"id":"0001"}, {$set : {"name":"James", "age":23}})  # 前面查询条件，后面更新数据，仅更新第一条
> db.User.update({"name":"kobe"}, {$set : {"age":"24"}}, {multi:true}) # 更新所有符合条件数据
> db.User.save({"_id":ObjectId("584e56b8889783db5c067282"), "age":24}); # 修改_id的数据
# 查询数据
> db.User.find()            # 查询User集合数据
> db.User.find().pretty()   # 易读形式查询User集合数据
> db.User.findOne()         # 返回一个文档
# 条件查询
# AND 条件查询 (name=kobe && 12< age && age < 24 )
> db.User.find({"name":"kobe", "age":{$gt:12, $lt:24}})     
# OR 条件查询 (id=0001 or age > 24)
> db.User.find({$or : [{"id":"0001"}, {"age":{$gt:24}}]})  
# AND 和 OR 联合使用 (age=kobe or age < 24)
> db.User.find({"name":"kobe", $or : [{"age":{$lt:24}}]})   
# $lt : < | $lte : <= | $gt : > | $gte : >= | $ne : !=
# 模糊查询
> db.User.find({"name":{$regex:"110"}}) # 查询名字中包含 110 的
# 指定返回字段， 1 -> 返回 ; 0 -> 不返回
> db.User.find({"name":"kobe"},{"_id":0,"age":1}) 
> db.User.find().count()    # 结果集总数
> db.User.find().skip(2)    # 跳过前两条数据
> db.User.find().limit(5)   # 限制条数 
```

- 数据库迁移

``` shell
# mongodump

# mongorestore

```

## Error

- [MongoDB can not start by the command `service mongod start`](https://stackoverflow.com/questions/51184838/mongodb-can-not-start-by-the-command-service-mongod-start)

``` shell
$ [sudo] chown mongodb.mongodb -R /var/lib/mongodb
```


