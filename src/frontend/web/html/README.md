---
title: HMTL
index: false
icon: hashtag

---

## Reference

- [MDN - HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
- [htmx](https://github.com/bigskysoftware/htmx)
    > </> htmx - high power tools for HTML
- [绿叶学习网](www.lvyestudy.com)
- [从 0 到 1: HTML+CSS 快速上手](https://weread.qq.com/web/reader/1053223071cad78210554c5)
- [CANVAS](https://github.com/airingursb/canvas)

## Note

- [HTML](HTML.md)
- [CSS](CSS.md)

## Concept

- Web
    * Web 1.0
    * Web 2.0
    * Web 3.0

- 静态页面 vs 动态页面 : 动态是指是否与服务器进行数据交互

- HTML 基本元素
    * 文字
    * 图片
    * 超链接
    * 音视频

- HTML -> CSS -> JavaScript -> JQuery -> HTML5 -> CSS3 -> ES6 
       -> [Node、React、Vue] -> [webpack、gulp、babel]
    * HTML : 控制网页的结构
    * CSS : 控制网页的外观
    * JavaScript : 控制网页的行为

## ready vs onload

```javascript
// $(document).ready() : 页面的 DOM 结构加载完成 (不包含其它媒体资源)
$(document).ready(function() {
    /* code */
})
$(function() { // JQuery ready
    /* code */
})
// window.onload : 页面的所有资源加载完成 (包括 DOM 和其它媒体资源)
window.onload=function() {
    /* code */
 }
```