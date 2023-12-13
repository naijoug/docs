---
title: String - “字符串”
icon: hashtag

index: true

---

<!-- more -->

## `Java` 中字符串的常用操作

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

- 基础版 [🟢 LeetCode 125 - 验证回文串](https://leetcode.cn/problems/valid-palindrome)
 > 判断字符串中的字母(大小不敏感，大写字母与小字可以看作相等)和数字是否为回文串，字符中的的其它字符不参与回文串校验。

:::: details 💡

::: code-tabs solutions

@tab java

```java
boolean isPalindrome(String s) {
    int left = 0;
    int right = s.length() - 1;
    while ( left < right ) {
        // 寻找左边第一个字母或数字
        while ( left < right && !Character.isLetterOrDigit(s.charAt(left)) ) {
            left += 1;
        }
        // 寻找右边第一个字母或数字
        while ( left < right && !Character.isLetterOrDigit(s.charAt(right)) ) {
            right -= 1;
        }
        if ( left >= right ) { return true; }
        // 左右指针，判断字符是否相等
        if ( Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right)) ) {
            return false; // 不相等，则表明不是回文串
        } 
        // 相等，跳转到下一个字符进行匹配
        left += 1;
        right -= 1;
    }
    return true;
}
```

@tab python

```python
isPalindrome():
  left = 0
  right
```

:::

::::

:::

- 变形版 [🟢 LeetCode 680 - 验证回文串 II](https://leetcode.cn/problems/valid-palindrome-ii)
> 给定一个字符串，判断改字符(在最多可以删除一个字符的情况下)是否可以成为回文串。

::: details 💡

```java
class Solution {
    public boolean validPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;
        while ( left < right ) {
            if ( s.charAt(left) != s.charAt(right) ) {
                // 当遇到不匹配时，分别跳过左边字符和右边字符对剩下范围的字符串继续判断是否为回文串
                return isPalindrome(s, left, right - 1) || isPalindrome(s, left + 1, right);
            }
            left += 1;
            right -= 1;
        }
        return true;
    }

    // 判断一个字符串在指定左右索引范围字符是否为回文串
    boolean isPalindrome(String s, int left, int right) {
        while ( left < right ) {
            if ( s.charAt(left) != s.charAt(right) ) {
                return false;
            }
            left += 1;
            right -= 1;
        }
        return true;
    }
}
```

:::

- 升级版 [🟡 LeetCode 1616 - 分割两个字符串得到回文串](https://leetcode.cn/problems/split-two-strings-to-make-palindrome)
> a、b 两个字符串长度相同，将两个字符串从相同位置分割，a 的前半部分与 b 的后半部分，或者 b 的前半部分与 a 的后半部分拼接是否可以组成回文串。

::: details 💡

```java 
class Solution {
    public boolean checkPalindromeFormation(String a, String b) {
        return checkPalindrome(a, b) || checkPalindrome(b, a);
    }
    // 判断 a 字符串的开头部分是否可以与 b 字符的后面部分组成回文串
    boolean checkPalindrome(String a, String b) {
        int left = 0; // 左指针指向 a 字符串的开头
        int right = b.length() - 1; // 右指针指向 b 字符的结尾
        while ( left < right ) {
            if ( a.charAt(left) != b.charAt(right) ) {
                // 不匹配，开始将左右指针位置移动到 a、 b 字符串进行回文匹配判断
                return checkPalindrome(b, left, right) || checkPalindrome(a, left, right);
            }
            left += 1;
            right -= 1;
        }
        return true;
    }
    // 判断字符串从 left ~ right 范围是否为回文串
    boolean checkPalindrome(String str, int left, int right) {
        while( left < right ) {
            if ( str.charAt(left) != str.charAt(right) ) {
                return false;
            }
            left += 1;
            right -= 1;
        }
        return true;
    } 
}
```

:::

### 分割回文串

