---
title: String - “字符串”
icon: hashtag

index: true

---

  对于大部分编程语言来说，字符串就是字符数组，所以使用技巧上与数组大致相同。

<!-- more -->

## 字符串的常用操作

::: code-tabs

@tab java
```java
String str = "Hello, world!";
// 获取字符串长度
int len = str.length(); // 13
// 获取指定索引字符
char c =  str.charAt(5); // ,
// 判断字符类型
boolean isDigit = Character.isDigit(c);     // 是否为数字字符
boolean isLetter = Character.isLetter(c);   // 是否为字母字符
boolean isLetterOrDigit = Character.isLetterOrDigit(c); // 字符是字母或者数字
// 大小写转换
String upperString = str.toUpperCase(); // 字母全部转化为大写
String lowerString = str.toLowercase(); // 字母全部转化为小写
char upperC = Character.toUpperCase(c); // 转化为大写字符
char lowerC = Character.toLowerCase(c); // 转化为小写字符
```

@tab python
```py
s = 'Hello, world!'
# 获取字符串长度
l = len(s) # 13
# 获取指定索引字符
c = s[5] # ,
# 判断字符类型
is_alapha = c.isalpha() # 字符是否是字母
is_digit = c.isdigit() # 字符是否是数字
# 大小写转换
upper_s = s.upper() # 字母全部转化为大写
lower_s = s.lower() # 字母全部转化为小写
```

:::


## `Palindrome` - “回文串”

> 回文串 : 字符串收尾形成对称

### 判断回文串

  这个类型的题目根据一定的条件，判断字符串是否是一个回文串。
  
<!-- @include: @leetcode/problems/0x0100.md#0125 -->

<!-- @include: @leetcode/problems/0x0600.md#0680 -->

<!-- @include: @leetcode/problems/0x1600.md#1616 -->


### 分割回文串

