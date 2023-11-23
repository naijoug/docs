
## Reference

- [Linux Oracle服务启动&停止脚本与开机自启动](http://www.cnblogs.com/mchina/archive/2012/11/27/2782993.html)
- [oracle 启动监听提示 ：The listener supports no services](http://blog.itpub.net/24162410/viewspace-1814344/)

## Usage

``` shell 
$ su - oracle           # 切换到 oracle 用户
$ sqlplus / as sysdba   # 启动 & 作为 sysdba 用户登录
# 或者
$ sqlplus /nolog        # 启动数据库实例
> conn as sysdba        # 作为 sysdba 用户登录
# 监听
$ lsnrctl status        # 查看监听状态
$ lsnrctl start         # 启用监听(启动数据库之后)
$ lsnrctl stop          # 停止监听
```

``` shell
> startup;              # 启动Oracle
> shutdown normal;      # 正常方式关闭数据库
> shutdown immediate;   # 立即方式关闭数据库
> shutdown abort;       # 直接关闭数据库
> show parameter service_names      # 显示服务名
> alter system register;            # 强制注册服务

> select username from dba_users;   # 查看所有Oracle用户
> select * from v$instance;         # 查看sid实例名
> select * from v$tablespace;       # 查看所有的表空间
> select * from v$tempfile;         # 查看临时表空间
> select name from v$datafile;      # 查看数据库表空间位置
> select * from v$controlfile;      # 查看控制文件
> show error;                       # 查看是否有错误
> show user;                        # 查看当前登录的用户
> conn user/password;               # 切换用户

# 新建表空间
> CREATE TABLESPACE "PMSDB"  LOGGING DATAFILE '/oracle/oradata/orcl/PMSDB.dbf' SIZE 102400M EXTENT MANAGEMENT LOCAL SEGMENT SPACE MANAGEMENT  AUTO ;
# 在表空间新建用户
> Create user byrh_pms identified by password default tablespace users temporary tablespace PMSDB ;
> CREATE USER KPLUS IDENTIFIED BY calypso DEFAULT TABLESPACE CALYPSO TEMPORARY TABLESPACE temp;
# 授权用户
> Grant connect,resource To byrh_pms;
> GRANT SELECT ANY TABLE TO KPLUS;
> GRANT UNLIMITED TABLESPACE TO KPLUS;
> GRANT UPDATE ANY TABLE TO KPLUS;
> grant create table to KPLUS;
> grant create view to KPLUS;
> GRANT RESOURCE TO KPLUS;
> GRANT CONNECT TO KPLUS;
> GRANT CREATE SESSION TO KPLUS;
> grant query rewrite to KPLUS;
# 指定用户建表
> CREATE TABLE "BYRH_PMS"."AUDITTRAIT"
(
  "ID" NUMBER(8,0) NOT NULL ENABLE, 
  "USER_NAME" VARCHAR2(20) NOT NULL ENABLE, 
  "MODULESTYPE" NUMBER(1,0) NOT NULL ENABLE, 
  "TYPE" NUMBER(1,0) NOT NULL ENABLE, 
  "MODULE_ID" VARCHAR2(20), 
  "CURRENCIESPARIES_ID" VARCHAR2(6), 
  "IP" VARCHAR2(18) NOT NULL ENABLE, 
  "OPERATETYPE" NUMBER(1,0) NOT NULL ENABLE, 
  "OPERATERESULT" NUMBER(1,0) NOT NULL ENABLE, 
  "MESSAGETEXT" VARCHAR2(1000), 
  "CREATETIME" DATE NOT NULL ENABLE, 
  "RESERVEDINT1" NUMBER(4,0), 
  "RESERVEDINT2" NUMBER(4,0), 
  "RESERVEDINT3" NUMBER(4,0), 
  "RESERVEDCHAR1" VARCHAR2(512), 
  "RESERVEDCHAR2" VARCHAR2(512), 
  "RESERVEDCHAR3" VARCHAR2(512), 
  CONSTRAINT "AUDITTRAIT_KEY" PRIMARY KEY ("ID")
 );
```

## Solutions

- Oracle命令行删除键变为`^H`

> Solution : [oralce命令行下无法用删除键的解决方法](http://www.mylinuxer.com/?p=434)

```bash
$ stty erase ^H     # 抹去^H，使得删除键生效
$ stty erase ^?     # 还原 
```

- Oracle命令行乱码问题

> Solution : [sqlplus连接oracle中文乱码](http://blog.csdn.net/beyondlpf/article/details/7326239)

``` bash
$ export NLS_LANG=AMERICAN_AMERICA.UTF8 # 增加环境变量，根据数据库的字符集
```

- ORA-12519: TNS:no appropriate service handler found

> Solution : [ORA-12519:TNS:no appropriate service handler found 的解决办法](http://www.myexception.cn/database/506595.html)

``` bash
SQL> select count(*) from v$process;                            # 当前连接数
SQL> select value from v$parameter where name = 'processes';    # 数据库允许的最大连接数
SQL> alter system setprocesses = 1000 scope = spfile;           # 修改最大连接数
# 重启数据库
SQL> shutdown immediate;    
SQL> startup;
```

- ORA-21561

> Solution : [解决ORA-21561: OID generation failed](http://www.jianshu.com/p/45d7e8b6f93c)


