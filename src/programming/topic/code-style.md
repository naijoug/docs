---
title: 编码规范
icon: hashtag

index: true
order: 2

---

<!-- more -->

## reference

- [Google Style Guides](https://google.github.io/styleguide/) : [Google 开源项目风格指南](http://zh-google-styleguide.readthedocs.io/en/latest/)
- [中文技术文档的写作规范 - 阮一峰](https://github.com/ruanyf/document-style-guide)
- [代码安全指南](https://github.com/Tencent/secguide)
- [awesome-comment](https://github.com/Blankj/awesome-comment) : 神级注释
- [Objective-C开发编码规范](https://github.com/QianKaiLu/Objective-C-Coding-Guidelines-In-Chinese)
- [中文版 Apple 官方 Swift 文档《API Design Guidelines》](https://github.com/SketchK/the-swift-api-design-guidelines-in-chinese)
- [Airbnb JavaScript编码规范指南](https://github.com/libertyAlone/airbnb-javascript-style-guide-cn)
- [JavaScript Standard Style](https://github.com/standard/standard)
    > 🌟 JavaScript Style Guide, with linter & automatic code fixer
- [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)
    > 🛁 Clean Code concepts adapted for JavaScript

## `C/C++`

| Type | Public 
| --- | ---
| Files                 | my_userful_class.cc
| Classes               | MyExcitingClass / MyExcitingEnum
| Variables             | table_name
| Instance Variables    | table_name_ 
| Constants             | kDaysInAWeek
| Functions             | MyExcitingMethod()

## `Python`

- [pylint](https://github.com/pylint-dev/pylint)

```shell
$ pip install pylint # 安装 pylint
$ pylint --generate-rcfile > .pylintrc # 生成 .pylintrc 文件
```

| Type | Public | Internal
| --- | --- | --- 
| Modules                       | lower_with_under      | _lower_with_under
| Packages                      | lower_with_under
| Classes                       | CapWords              | _CapWords
| Exceptions                    | CapWords	 
| Functions                     | lower_with_under()    | _lower_with_under()
| Global/Class Constants        | CAPS_WITH_UNDER       | _CAPS_WITH_UNDER
| Global/Class Variables        | lower_with_under      | _lower_with_under
| Instance Variables            | lower_with_under      | _lower_with_under (protected) or __lower_with_under(private)
| Method Names                  | lower_with_under()    | _lower_with_under() (protected) or __lower_with_under(private) 
| Function/Method Parameters    | lower_with_under 
| Local Variables               | lower_with_under