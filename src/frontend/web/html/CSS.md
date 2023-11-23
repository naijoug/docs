# CSS
> Cascading Style Sheet : 层叠式样式表

## Reference

- [CSS-Guidelines](https://github.com/chadluo/CSS-Guidelines)
    > 通用 CSS 笔记、建议与指导

## Concept

- CSS 特点
  * CSS会忽略缩进和换行
  * 每一项属性后面都要有`;`分号
  * 层叠式 : 同一个标签可以被多个选择器选择，属性可以被继承

- 引入方式
    * 外部样式表 : `<link rel="stylesheet" type="text/css" href="css/path/style.css"/>`
    * 内部样式表 : `<style type="text/css">xxx</style>`
    * 行内样式表 : `<div style="xxx"></div>`
    * @import 引入 : 极少使用，该引入方式会先加载 HTML，再加载 CSS

- 选择器
    > 选择器权重： `id选择器 >  类选择器  > 标签选择器`
    * 标签选择器 : 页面上的标签
    * id 选择器 : 给元素取一个特定的名字，id 必须是唯一的，并且是区分大小写的。
    * class 选择器 : 给一类元素设置相同的类名，同一个标签可以有多个类选择器
    * 高级选择器
        + 后代选择器 : 选择器1 选择器2
        + 交集选择器 : 标签名.类名
        + 并集选择器 : 选择器1,选择器2
        + 通配符`*` : 所有元素  

- id & class
    * id 属性 : 用于标识唯一元素，同一页面不能重复
    * class 属性 : 用于标记同类元素，同一页可以重复

## Usage

- CSS 常用属性
    * `color : red;` : 文字颜色
    * `background-color : blue` : 背景颜色
    * `font-size : 40px;` : 字号
    * `border : 1px solid green;` : 边框
        - `solid` : 实线
        - `dashed` : 虚线

  ```html
  <style type="text/css">
      body{ <!-- 标签选择器 -->
          background-color : gray;
      }
      #user{ <!-- id选择器 -->
          font-size : 40px;
      }
      .warning{ <!-- 类选择器 -->
          color : red;
      }
      .warning p{ <!-- 后代选择器 -->
          font-size : 50px;
      }
      p.warning{ <!-- 交集选择器 -->
          border : 1px solid yellow;
      }
      p,div{ <!-- 并集选择器 -->
          color : red;
      }
      *{ <!-- 通配符 -->
          background-color : gray;
      }
  </style>
  ```

### QA

- 到底使用什么选择器(标签、id、class)?
    * 标签 : 设置全局
    * class : 样式(改样式使用)
    * id : 行为(js使用)

- 哪些属性能够继承呢？
    - 可以继承 : `color`、`text-*`、`font-*`、`line-*`
    - 不能继承 : `background-color`、所有盒模型的属性（width、height、border、padding、margin）都是不继承的！

- 怎样让网页打开速度变快
    * 让网页字符变为`gb2312`,能降低页面尺寸
    * 压缩`HMTL`代码，将代码压缩为一行

- 提升`SEO`(Search Engine Optimization)搜索引擎优化
    * 设置 `<meta>`