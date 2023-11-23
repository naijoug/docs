# Redis

## Reference

- [redis](https://github.com/redis/redis)
    > Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, Streams, HyperLogLogs, Bitmaps.
- [Redis 中文文档](https://www.redisio.com/)
- [redis7.0-chinese-annotated](https://github.com/CN-annotation-team/redis7.0-chinese-annotated)
    > Redis 7.0.5 版本——中文注释，持续更新！欢迎参与本项目！🍭🍭🍭

## Usage

```shell
# redis cli 连接本地 redis (host: 127.0.0.1 port: 6379)
$ redis-cli 
# redis cli 连接指定远程 redis
$ redis-cli -h <host> -p <port> -a <password>
```

```shell
## Key
> DEL <key>         # 删除一个键值
## String 
## 字符串: 存储一个字符串
> SET <key> <value>     # 设置一个键值
> GET <key>             # 查询一个键值
> GETSET <key> <value>  # 在一个已存在的键上，返回旧的值，设置为新的值
> MSET <key> <value> [<key2> <value2> ...] # 设置多个键值
> MGET <key> [<key2> ...] # 查询多个键值
> APPEND <key> <value> # 在一个已存在字符串后面追加内容
## List
##  列表: 存储一个数组类型 ["one", "two"]
> LPUSH <key> <value> [value2 ...]  # 在列表头部添加一个元素
> RPUSH <key> <value> [value2 ...]  # 在列表尾部添加一个元素
> LPOP <key> # 在列表头部删除一个元素
> RPOP <key> # 在列表尾部删除一个元素 
> LLEN <key> # 查询列表长度
> LRANGE <key> <start> <stop> # 查询指定范围的列表元素
## Set
##  无序集合: 存储一个集合类型(元素不能重复)
> SADD <key> <member> [<member2> ...] # 添加集合成员
> SCARD <key> # 查询集合数量
> SDIFF <key1> <key2> # 返回两个集合的差异
> SMEMBERS <key> # 查询集合的所有成员
> SPOP <key> # 移除集合中的一个随机元素
> SMEMBER <key> <member> # 判断 member 是否为集合中的元素
> SREM <key> <member> [<member2> ...] # 移除集合中的元素
## SortedSet
##  有序集合: 存储一个有序集合类型(元素不能重复，按照分数从小到大排序)
> ZADD <key> <score> <member> [<score2> <member2>] # 添加有序集合成员
> ZCARD <key> # 查询有序集合输了
> ZRANGE <key> <start> <stop> 
> ZREM <key> <member> [<member2> ...] # 移除有序集合中的元素
> ZSCORE <key> <member> # 查询有序集合中元素的分数
## Hash
##  哈希表: 存储一个字典类型 {"field": "value"}
> HSET <key> <field> <value> # 设置一个哈希键值对
> HMSET <key> <field> <value> [<field2> <value2> ...] # 设置多个哈希表的字段和值
> HEXISTS <key> <field> # 查询哈希表是否存在某个字段名
> HGETALL <key>         # 查询哈希表所有字段和值
> HGET <key> <field>    # 查询哈希表指定字段名的值
> HMGET <key> <field> [<field2> ...] # 查询哈希表多个字段名的值
> HLEN <key>  # 查询哈希表字段数量
> HKEYS <key> # 获取哈希表所有字段名
> HVALS <key> # 获取哈希表所有值
```