# Character Encoding
> 字符编码

## Reference

- [十分钟搞清字符集和字符编码](https://cenalulu.github.io/linux/character-encoding)
- [字符编码笔记：ASCII，Unicode 和 UTF-8](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

## Concept

- 位 & 字节 & 字符

  | 类型 | 名称 | 位数 | 说明
  | --- | --- | --- | ---
  | `bit`   | 位（比特）   | 1         | 计算机存储信息的最小单位
  | `byte`  | 字节（拜特） | 8         | 计算机存储容量的计量单位
  | `char`  | 字符        | 8 / 16    | 计算机中使用的文字或符号 

- 缩写

  | 缩写 | 说明
  | --- | ---
  | `ASCII`     | (American Standard Code for Information Interchange) 美国信息交换标准代码
  | `ANSI`      | (American National Standards Institute) 美国国家标准学会
  | `UCS`       | (Universal Character Set) 通用字符集
  | `UNICODE`   | 统一的字符编码标准,采用双字节对字符进行编码
  | `UTF`       | (Unicode Transformation Format) Unicode 编码转换

- 字符集 & 字符编码

  | 概念 | 说明
  | --- | ---
  | `Character Sets`     | (字符集) 字符的集合，一般情况下与字符编码一一对应(`Unicode` 字符集例外，有多种字符编码实现)
  | `Character Encoding` | (字符编码) 定义字符集中的字符如何编码为特定的二进制

- 字符集

  | 字符集 | 说明
  | --- | ---
  | `ASCII`     | 美国人定义的英文字符集 
  | `GB18030`   | 中国人为了解决中文而发明制定，只有一种实现，所以可以指代这种字符集对应的字符编码
  | `Unicode`   | 为了解决不同字符集码表不一致而推出，统一了所有字符对应的码。只规定了字符与码表的一一对应关系，没有规定如何实现。所以 `Unicode` 有多种实现方式(`UTF-8`、`UTF-16`、`UTF-32`)

## ANSI
> `ANSI` : 不是一种特定的字符编码，在不同的系统中，表示不同的编码
> 如：
>       在英文系统中，表示 `ASCII` 编码
>       在中文系统中，表示 `GBK` 编码
>       在韩文系统中，表示 `EUC-KR` 编码

## ASCII
> `ASCII` : 8 位，定义了 128 个字符编码，只占用了一个字节的后面 7 位，最前面一位均是 0.

## UTF-8
> `UTF-8` 是 Unicode 的实现方式之一

- `UTF-8` 编码规则
    * 单字节字符，与 `ASCII` 码相同(第一位为 0，后 7 位是字符的 `Unicode` 码)
    * n 字节字符(n > 1)，第一个字节的前 n 位均为 1，n+1 位是 0，后面字节的前两位均为 10。剩下的为字符的 `Unicode` 码。

  | `Unicode` 符号范围 (16进制) | `UTF-8` 编码方式 (2进制)
  | --- | ---
  | 0000 0000 ~ 0000 007F   | 0xxxxxxx
  | 0000 0080 ~ 0000 07FF   | 110xxxxx 10xxxxxx
  | 0000 0800 ~ 0000 FFFF   | 1110xxxx 10xxxxxx 10xxxxxx
  | 0001 0000 ~ 0010 FFFF   | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx


- `Unicode` 的 `Little endian` & `Big endian`

  | 字节序 | 说明 | 文件编码方式确定
  | --- | --- | ---
  | `Little endian` | 第二个字节在前   | 文件头两个字节为 FF FE
  | `Big endian`    | 第一个字节在前   | 文件头两个字节为 FE FF
