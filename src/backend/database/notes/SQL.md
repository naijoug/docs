# SQL
> Structured Query Language : 结构化查询语言，是一种对关系型数据库中的数据进行定义和操作的语言。

## Concept

- `SQL`语句的特点
    * 不区分大小写 (比如数据库认为user和UsEr是一样的)
    * 每条语句都必须以分号 `;` 结尾
    * `SQL`中的常用关键字有: `select`、`insert`、`update`、`delete`、`from`、`create`、`where`、`desc`、`order`、`by`、`group`、`table`、`alter`、`view`、`index`等等
    * 数据库中不可以使用关键字来命名表、字段

- `SQL`语句分类

| 分类 | 全称 | 说明
| --- | --- | ---
| `DDL` | Data Definition Language (数据定义语句)     | 包括`create`和`drop`等
| `DML` | Data Manipulation Language (数据操作语句)   | 包括`insert`、`update`、`delete`等
| `DQL` | Data Query Language (数据查询语句)          | 包括`select`、`where`、`order by`等

- 约束

| 约束字段 | 说明
| --- | ---
| `primary key`     | 主键(简称PK),用来唯一地标识某一条记录，默认就包含了not null 和 unique 两个约束
| `foreign key`     | 外键，用来建立表与表之间的联系
| `autoincrement`   | 自动增长，必须为 integer 类型
| `not null`        | 规定字段的值不能为`null`
| `unique`          | 规定字段的值必须唯一
| `default`         | 指定字段的默认值

## Usage

### DDL (Data Definition Language)

> 数据定义语句 : create | drop 

``` sql
--- 创建表
/*
create table 表名 (字段名1 字段类型1, 字段名2 字段类型2, …);
create table if not exists 表名 (字段名1 字段类型1, 字段名2 字段类型2, …);
*/
create table t_student (id integer, name text, age integer, score real) ;
create table t_student (id integer primary key, name text not null unique, age integer not null default 1) ;
-- id作为t_student表的主键
-- name字段不能为null，并且唯一
-- age字段不能为null，并且默认为1
create table t_student (id integer primary key autoincrement, name text, age integer) ;
-- id字段为自动增长主键
create table t_student (id integer primary key autoincrement, name text, age integer, class_id integer, constraint fk_t_student_class_id_t_class_id foreign key (class_id) (id)) ; references t_class -- 新建一个外键
-- t_student表中有一个叫做fk_t_student_class_id_t_class_id的外键
-- 这个外键的作用是用t_student表中的class_id字段引用t_class表的id字段

--- 删除表
/*
drop table 表名;
drop table if exists 表名;
*/
drop table t_student;
```

### DML (Data Manipulation Language)

> 数据操作语句 : insert | update | delete

``` sql
--- 插入
/*
insert into 表名 (字段1, 字段2, …) values (字段1的值, 字段2的值, …);
*/
insert into t_student (name, age) values ('kobe', 24) ; 
-- 注意: 数据库中的字符串内容应该用单引号 ' 括住

--- 更新
/*
update 表名 set 字段1 = 字段1的值, 字段2 = 字段2的值, … ;
*/
update t_student set name = 'jack', age = 20 ;
-- 注意: 上面的示例会将t_student表中所有记录的name都改为jack，age都改为20

--- 删除
/*
delete from 表名 ;
*/
delete from t_student ;
-- 注意: 上面的示例会将t_student表中所有记录都删掉
```

### DQL (Data Query Language)

> 数据查询语句 : select | where | order by | group by | having

``` sql
--- 查询
/*
select 字段1, 字段2, … from 表名 ;
select * from 表名;
*/
select name, age from t_student ;
select * from t_student ;
select * from t_student where age > 10 ;  --- 条件查询

--- 起别名 : 字段和表都可以起别名
/*
select 字段1 别名 , 字段2 别名 , … from 表名 别名 ;
select 字段1 别名, 字段2 as 别名, … from 表名 as 别名 ;
select 别名.字段1, 别名.字段2, … from 表名 别名 ;
*/
select name myname, age myage from t_student ; 
-- 给name起个叫做myname的别名，给age起个叫做myage的别名
select s.name, s.age from t_student s ;
-- 给t_student表起个别名叫做s，利用s来引用表中的字段

--- 条件查询
/*
where 字段 = 某个值; ( where 字段 is 某个值; )
where 字段 != 某个值; ( where 字段 is not 某个值; )
where 字段 > 某个值;
where 字段1 = 某个值 and 字段2 > 某个值 ;
where 字段1 = 某个值 or 字段2 = 某个值 ;
*/
-- 将t_student表中年龄大于10 并且 姓名不等于jack的记录，年龄都改为 5
update t_student set age = 5 where age > 10 and name != ‘jack’ ;
-- 删除t_student表中年龄小于等于10 或者 年龄大于30的记录
delete from t_student where age <= 10 or age > 30 ;
-- 将t_student表中名字等于jack的记录，height字段的值 都改为 age字段的值
update t_student set score = age where name = ‘jack’ ;   

--- 查询数量
/*
select count (字段) from 表名 ;
select count ( * ) from 表名 ;
*/ 
select count (age) from t_student ;
select count ( * ) from t_student where score >= 60;

--- 排序查询结果
/*
select * from t_student order by 字段 ;
*/
select * from t_student order by age ;
-- 默认是按照升序排序（由小到大），也可以变为降序（由大到小）
select * from t_student order by age desc ;  --- 降序
select * from t_student order by age asc ;   --- 升序（默认）
-- 先按照年龄排序（升序），年龄相等就按照身高排序（降序）
select * from t_student order by age asc, height desc ;

--- 限制查询,分页查询
/*
select * from 表名 limit 数值1, 数值2 ;
*/
select * from t_student limit 7 ;
-- 表示取最前面的7条记录，相当于select * from t_student limit 0, 7 ;
select * from t_student limit 4, 8 ; 
-- 可以理解为：跳过最前面4条语句，然后取8条记录
```




