# HTML
> HTML : (Hypertext Markup Language) 超文本标记语言，是网页的文件格式
> 
> XHTML : (Extensible Hypertext Markup Language) 可扩展超文本标记语言，通俗讲就是更加严格的 HTML。

## Concept

- 标准文档流
    > 元素默认自动从左往右，从上往下的流式排列方式。前面元素发生变化，后面的元素也相应地改变。

    * 空白折叠现象（标签内的文字，不管有多少个空格、换行、tab，都会缩减为同一个空格。）
    * 高矮补齐，底边对齐
    * 块级元素、行内级元素
    * 块级元素和行内级元素切换  

- HTML 不是编程语言，是一种描述性标记语言
    > 语法: `<tag>content</tag>`

- `<html xmlns="http://www.w3.org/1999/xhtml"></html>` : 标识当前页面使用 W3C 的 XHTML 标准

- `div+css`
    > * `div` : 负责描述页面结构
    > * `css` : 负责描述页面样式

- HTML特点
    * HTML对空格、`tab`、换行忽略
    * 空白折叠 : 标签内的文字，多个空格、`tab`、换行，会被压缩为一个空格。
    * `<h1>`标签一般只能有一个

- 标签分类

  | 类型 | 说明
  | -- | -- 
  | 容器标签 | 任何标签都可以包含，包括自己(`div`、`li`、`dd`、`dt`、`td`)
  | 文本标签 | 只能存放文字、图片、表单，以及其他文本标签

- 元素分类

  | 元素 | 说明
  | -- | --
  | block     | 块元素。块元素占据一行，不能与其它元素位于同一行，可以嵌套其它块元素和行内元素
  | inline    | 行内元素。可以和其它行内元素位于同一行，不能嵌套块元素

## Element

- 常用标签
    * `<h></h>` : 标题(head)，h1 ~ h6
    * `<p></p>` : 段落(paragraph)，只能存放文字、图片、表单
    * `<img />` : 图片
        - `alt` : 替代(alternate)，图片不存在时显示的替代文字
    * `<a></a>` : 超链接(anchor 锚点)
        - `href` : 链接跳转地址(hypertext reference)
            + 外部链接 : 外部网页 url
            + 内部链接 : 本地网页 path
            + 锚点链接 : 锚定当前网页的某一个位置
        - `title` : 鼠标悬浮的提示信息
        - `target` : 是否新页面打开
            + `_self` : (默认)在当前窗口打开
            + `_blank` : 在新窗口打开
            + `_parent` : 在父窗口打开
            + `_top` : 在顶层窗口打开
        - `name` : 页面锚点，用于定位到页面某部分
    * `<div></div>` : 块，分割(division)
    * `<span></span>` : 就是文本级的div
    * 
    * `<ul></ul>` : 无序列表(unordered list)
    * `<ol></ol>` : 有序列表(ordered list) 
        - `<li></li>` : 列表项(list item)
    * `<dl></dl>` : 定义列表(defintion list)
        - `<dt></dt>` : 定义标题(definition title)
        - `<dd></dd>` : 定义描述(definition description)
    
    * `<form></form>` : 表单
        - `action` : 提交表单
        - `method` : 提交表单时所用的HTTP方法(GET 或 POST)
    * `<input />` 
        - `text` : 单行文本框
        - `radio` : 单选按钮
        - `checkbox` : 复选框
        - `password` : 密码输入框
        - `button` : 普通按钮
        - `submit` : 提交按钮
        - `reset` : 重置按钮
    * `<select></select>` : 下拉列表
        - `<option></option>` : 每一项
    * `<textarea></textarea>` : 文本域
    * `<table></table>` : 表格
        - `<caption></caption>` : 标题
        - `<thead></thead>` : 表格头部体
        - `<tbody></tbody>` : 表格内容体
        - `tr` : 表格行(table row)
        - `th` : 表头(table head)
        - `td` : 表格小格(table dock)
        - 合并单元格 : (行跨度)`rowspan` & (列跨度)`colspan`
    * 废弃标签
        - `<br></br>` : 换行，打断(breaking)
        - `<b></b>` : 粗体(bold)
        - `<u></u>` : 下划线(underline)
        - `<i></i>` : 斜体(italic)
        - `<del></del>` : 删除(delete)
        - `<strong></strong>` : 强调
        - `<em></em>` : 强调(emphasize)
        - `<hr />` : 分割线

- 能嵌套在 head 标签内的标签
    * title : 网页标题
    * meta : 定义页面的特殊信息(关键字、页面描述...)，用于搜索引擎提取
    * link : 引入外链文件
    * style : 定义元素 CSS 样式
    * script : 定义页面 JavaScript 代码
    * base : 

- 自闭合标签
    * meta
    * link
    * br
    * hr
    * img
    * input

- 能嵌套在 body 标签内的标签
    * h1 ~ h6 : 标题
    * p : (paragraph) 段落标签
    * br : 换行标签 (自闭合标签 `</br>`)
    * hr : (horizon 地平线) 水平线标签 (自闭合标签 `<hr/>`)
    * div : (division 分区) 区域划分标签
  
- 字符实体

    | 字符 | 显示 | -
    | -- | -- | --
    | `&nbsp;`      |   | 空格
    | `&quot;`      | " | 引号
    | `&times;`     | × | 乘号
    | `&divide;`    | ÷ | 除号
    | `&gt;`        | > | 大于号
    | `&lt;`        | < | 小于号
    | `&amp;`       | & | 与符号
    | `&copy;`      | ©️ | 版权符号

- 文本标签
    * b : 粗体
    * i : 斜体
    * s : 中划线(删除线)
    * u : 下划线
    * strong : (strong 强调) 粗体
    * em : (emphasized 强调) 斜体，语义性更好
    * sup : (superscripted) 上标
    * sub : (subscripted) 下标
    * big : 大字号
    * small : 小字号