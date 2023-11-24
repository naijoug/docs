---
title: JavaScript
icon: hashtag

index: true

---

# JavaScript

## Reference

- [JavaScript MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [JavaScript 教程](https://www.liaoxuefeng.com/wiki/1022910821149312)
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
- [JavaScript Tutorial](https://github.com/wangdoc/javascript-tutorial)
- [JS Training](https://github.com/ruanyf/jstraining)

## Libraries

- [JQuery](https://github.com/jquery/jquery)
- [Underscore](https://github.com/jashkenas/underscore)

## Concept

- Access-Control-Allow-Origin 

## Bool 

- true : `{}`、 `[]`、 `负数`、 `new Boolean(false)`
- false : `undefined`、`null`、`0`、`-0`、`NaN`、`""`

## IIFE
> Immediately-Invoked Function Expression : 立即执行函数表达式

```javascript
// 最常用 : 当 `function` 被包含在括号里面，就被解析为函数表达式而不是函数声明
(function(){ /* code */ }());
(function(){ /* code */ })();

// 括号&JS的一些操作符(=、&&、||、...), 可以消除函数表达式和函数声明的歧义
// 解析器读取一个表达式，另一个也读取为表达式
var one = function(){ /* code */ }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();

// 一元操作符
!function(){ /* code */ }();
~function(){ /* code */ }();    
-function(){ /* code */ }();
+function(){ /* code */ }();

// new
new function(){ /* code */ };
new function(){ /* code */ }();
```
