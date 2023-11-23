# HTTP
> Hyper Text Transfer Protocol，超文本传输协议 
> 
> TCP 默认端口 : 80

## reference

- [2023-08-22 post为什么会发送两次请求？](https://juejin.cn/post/7269952188927017015)

## Concept

- `URL`
    > Uniform Resource Locator (统一资源定位器)
    > 
    > **语法规则** : `scheme://host.domain:port/path/filename`

    * `scheme` : 定义网络服务类型
        - `http` : 超文本传输协议，普通网页。
        - `https` : 安全超文本传输协议，安全加密网页。
        - `ftp` : 文件传输协议，文件上传或下载。
        - `file` : 访问本机文件。
    * `host` : 定义主机域 (http默认主机域 : www)
    * `domain` : 域名 (google.com)
    * `port` : 主机端口号 (http默认端口号 : 80)
    * `path` : 资源在中服务器路径
    * `filename` : 资源名称


- `URL Encoding`
    > URL只能使用`ASCII`字符集来通过英特网进行发送。
    >
    > URL中包含的`ASCII`之外的字符，需要转化为`ASCII`格式。

    * 非`ASCII`字符 : 转化为`%` + `两位十六进制数`
    * 空格 : 使用`+`替换


- `HTTP` 字段信息

  | 字段 | 含义 | 说明
  | --- | --- | --- 
  | `Header`          | 请求头   |  HTTP客户程序（浏览器），向服务器发送请求的时候必须指明请求类型，一般是GET或者POST
  | `Content-Type`    | 内容类型 | 一般是指网页中存在的Content-Type，用于定义网络文件或网络请求的类型
  | `Content-Length`  | 内容长度 | 表示请求消息正文的长度
  | `Authorization`   | 授权信息 |
  | `Cookie`          | 在服务端生成，发送给客户端，客户端会将Cookie的key/value保存到某个目录下的文本文件内，下次请求同一网站时就发送该Cookie给服务器。在浏览器中非常重要，主要应用于用户登录和购物车等，移动应用开发不建议使用
  | `User-Agent`      | 浏览器类型 | 服务器可以根据浏览器的类型选择推送不同的内容给客户端

- `HTTP` 请求方式

  | 方法名 | 说明
  | --- | ---
  | `GET`     | 获取指定资源
  | `POST`    | 向指定资源提交数据进行处理请求，在RESTful风格中用于新增资源
  | `HEAD`    | 获取指定资源头部信息
  | `PUT`     | 替换指定资源(不支持浏览器操作)
  | `DELETE`  | 删除指定资源
  | `OPTIONS` | 允许客户端查看服务器的性能
  | `TRACE`   | 回显服务器收到的请求，主要用于测试或诊断
  | `CONNECT` | 预留给能够将连接改为管道方式的代理服务器(HTTP代理使用)

- `Content-Type` 类型
 
  | `Content-Type` | 浏览器支持 | 说明
  | --- | --- | ---
  | `application/x-www-form-urlencoded`   | √ | 提交的数据按照key1=val1&key2=val2的方式进行编码
  | `multipart/form-data`                 | √ | 采用这种方式上传文件(支持二进制文件)
  | `application/json`                    | × | 表明服务端消息主体是序列化后的JSON字符串
  | `text/xml`                            | × | 文本


## GET vs POST
> 幂等性 : 同一方法执行多次和执行一次效果相同

  | 类型 | 参数位置 | 参数长度 | 幂等性 | 缓存性
  | --- | --- | --- | --- | --- 
  | `GET`   | 以 ? 拼接 | 最长 2048 字符 | 幂等   | 可缓存
  | `POST`  | 请求体内  | 没有限制       | 不幂等 | 不可缓存