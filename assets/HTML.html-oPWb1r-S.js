import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,f as d}from"./app-NiSSZH60.js";const i={},o=d('<h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1><blockquote><p>HTML : (Hypertext Markup Language) 超文本标记语言，是网页的文件格式</p><p>XHTML : (Extensible Hypertext Markup Language) 可扩展超文本标记语言，通俗讲就是更加严格的 HTML。</p></blockquote><h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><ul><li><p>标准文档流</p><blockquote><p>元素默认自动从左往右，从上往下的流式排列方式。前面元素发生变化，后面的元素也相应地改变。</p></blockquote><ul><li>空白折叠现象（标签内的文字，不管有多少个空格、换行、tab，都会缩减为同一个空格。）</li><li>高矮补齐，底边对齐</li><li>块级元素、行内级元素</li><li>块级元素和行内级元素切换</li></ul></li><li><p>HTML 不是编程语言，是一种描述性标记语言</p><blockquote><p>语法: <code>&lt;tag&gt;content&lt;/tag&gt;</code></p></blockquote></li><li><p><code>&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;&lt;/html&gt;</code> : 标识当前页面使用 W3C 的 XHTML 标准</p></li><li><p><code>div+css</code></p><blockquote><ul><li><code>div</code> : 负责描述页面结构</li><li><code>css</code> : 负责描述页面样式</li></ul></blockquote></li><li><p>HTML特点</p><ul><li>HTML对空格、<code>tab</code>、换行忽略</li><li>空白折叠 : 标签内的文字，多个空格、<code>tab</code>、换行，会被压缩为一个空格。</li><li><code>&lt;h1&gt;</code>标签一般只能有一个</li></ul></li><li><p>标签分类</p><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>容器标签</td><td>任何标签都可以包含，包括自己(<code>div</code>、<code>li</code>、<code>dd</code>、<code>dt</code>、<code>td</code>)</td></tr><tr><td>文本标签</td><td>只能存放文字、图片、表单，以及其他文本标签</td></tr></tbody></table></li><li><p>元素分类</p><table><thead><tr><th>元素</th><th>说明</th></tr></thead><tbody><tr><td>block</td><td>块元素。块元素占据一行，不能与其它元素位于同一行，可以嵌套其它块元素和行内元素</td></tr><tr><td>inline</td><td>行内元素。可以和其它行内元素位于同一行，不能嵌套块元素</td></tr></tbody></table></li></ul><h2 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> Element</h2><ul><li><p>常用标签</p><ul><li><p><code>&lt;h&gt;&lt;/h&gt;</code> : 标题(head)，h1 ~ h6</p></li><li><p><code>&lt;p&gt;&lt;/p&gt;</code> : 段落(paragraph)，只能存放文字、图片、表单</p></li><li><p><code>&lt;img /&gt;</code> : 图片</p><ul><li><code>alt</code> : 替代(alternate)，图片不存在时显示的替代文字</li></ul></li><li><p><code>&lt;a&gt;&lt;/a&gt;</code> : 超链接(anchor 锚点)</p><ul><li><code>href</code> : 链接跳转地址(hypertext reference) <ul><li>外部链接 : 外部网页 url</li><li>内部链接 : 本地网页 path</li><li>锚点链接 : 锚定当前网页的某一个位置</li></ul></li><li><code>title</code> : 鼠标悬浮的提示信息</li><li><code>target</code> : 是否新页面打开 <ul><li><code>_self</code> : (默认)在当前窗口打开</li><li><code>_blank</code> : 在新窗口打开</li><li><code>_parent</code> : 在父窗口打开</li><li><code>_top</code> : 在顶层窗口打开</li></ul></li><li><code>name</code> : 页面锚点，用于定位到页面某部分</li></ul></li><li><p><code>&lt;div&gt;&lt;/div&gt;</code> : 块，分割(division)</p></li><li><p><code>&lt;span&gt;&lt;/span&gt;</code> : 就是文本级的div</p></li><li></li><li><p><code>&lt;ul&gt;&lt;/ul&gt;</code> : 无序列表(unordered list)</p></li><li><p><code>&lt;ol&gt;&lt;/ol&gt;</code> : 有序列表(ordered list)</p><ul><li><code>&lt;li&gt;&lt;/li&gt;</code> : 列表项(list item)</li></ul></li><li><p><code>&lt;dl&gt;&lt;/dl&gt;</code> : 定义列表(defintion list)</p><ul><li><code>&lt;dt&gt;&lt;/dt&gt;</code> : 定义标题(definition title)</li><li><code>&lt;dd&gt;&lt;/dd&gt;</code> : 定义描述(definition description)</li></ul></li><li><p><code>&lt;form&gt;&lt;/form&gt;</code> : 表单</p><ul><li><code>action</code> : 提交表单</li><li><code>method</code> : 提交表单时所用的HTTP方法(GET 或 POST)</li></ul></li><li><p><code>&lt;input /&gt;</code></p><ul><li><code>text</code> : 单行文本框</li><li><code>radio</code> : 单选按钮</li><li><code>checkbox</code> : 复选框</li><li><code>password</code> : 密码输入框</li><li><code>button</code> : 普通按钮</li><li><code>submit</code> : 提交按钮</li><li><code>reset</code> : 重置按钮</li></ul></li><li><p><code>&lt;select&gt;&lt;/select&gt;</code> : 下拉列表</p><ul><li><code>&lt;option&gt;&lt;/option&gt;</code> : 每一项</li></ul></li><li><p><code>&lt;textarea&gt;&lt;/textarea&gt;</code> : 文本域</p></li><li><p><code>&lt;table&gt;&lt;/table&gt;</code> : 表格</p><ul><li><code>&lt;caption&gt;&lt;/caption&gt;</code> : 标题</li><li><code>&lt;thead&gt;&lt;/thead&gt;</code> : 表格头部体</li><li><code>&lt;tbody&gt;&lt;/tbody&gt;</code> : 表格内容体</li><li><code>tr</code> : 表格行(table row)</li><li><code>th</code> : 表头(table head)</li><li><code>td</code> : 表格小格(table dock)</li><li>合并单元格 : (行跨度)<code>rowspan</code> &amp; (列跨度)<code>colspan</code></li></ul></li><li><p>废弃标签</p><ul><li><code>&lt;br&gt;&lt;/br&gt;</code> : 换行，打断(breaking)</li><li><code>&lt;b&gt;&lt;/b&gt;</code> : 粗体(bold)</li><li><code>&lt;u&gt;&lt;/u&gt;</code> : 下划线(underline)</li><li><code>&lt;i&gt;&lt;/i&gt;</code> : 斜体(italic)</li><li><code>&lt;del&gt;&lt;/del&gt;</code> : 删除(delete)</li><li><code>&lt;strong&gt;&lt;/strong&gt;</code> : 强调</li><li><code>&lt;em&gt;&lt;/em&gt;</code> : 强调(emphasize)</li><li><code>&lt;hr /&gt;</code> : 分割线</li></ul></li></ul></li><li><p>能嵌套在 head 标签内的标签</p><ul><li>title : 网页标题</li><li>meta : 定义页面的特殊信息(关键字、页面描述...)，用于搜索引擎提取</li><li>link : 引入外链文件</li><li>style : 定义元素 CSS 样式</li><li>script : 定义页面 JavaScript 代码</li><li>base :</li></ul></li><li><p>自闭合标签</p><ul><li>meta</li><li>link</li><li>br</li><li>hr</li><li>img</li><li>input</li></ul></li><li><p>能嵌套在 body 标签内的标签</p><ul><li>h1 ~ h6 : 标题</li><li>p : (paragraph) 段落标签</li><li>br : 换行标签 (自闭合标签 <code>&lt;/br&gt;</code>)</li><li>hr : (horizon 地平线) 水平线标签 (自闭合标签 <code>&lt;hr/&gt;</code>)</li><li>div : (division 分区) 区域划分标签</li></ul></li><li><p>字符实体</p><table><thead><tr><th>字符</th><th>显示</th><th>-</th></tr></thead><tbody><tr><td><code>&amp;nbsp;</code></td><td></td><td>空格</td></tr><tr><td><code>&amp;quot;</code></td><td>&quot;</td><td>引号</td></tr><tr><td><code>&amp;times;</code></td><td>×</td><td>乘号</td></tr><tr><td><code>&amp;divide;</code></td><td>÷</td><td>除号</td></tr><tr><td><code>&amp;gt;</code></td><td>&gt;</td><td>大于号</td></tr><tr><td><code>&amp;lt;</code></td><td>&lt;</td><td>小于号</td></tr><tr><td><code>&amp;amp;</code></td><td>&amp;</td><td>与符号</td></tr><tr><td><code>&amp;copy;</code></td><td>©️</td><td>版权符号</td></tr></tbody></table></li><li><p>文本标签</p><ul><li>b : 粗体</li><li>i : 斜体</li><li>s : 中划线(删除线)</li><li>u : 下划线</li><li>strong : (strong 强调) 粗体</li><li>em : (emphasized 强调) 斜体，语义性更好</li><li>sup : (superscripted) 上标</li><li>sub : (subscripted) 下标</li><li>big : 大字号</li><li>small : 小字号</li></ul></li></ul>',6),c=[o];function p(a,r){return t(),e("div",null,c)}const h=l(i,[["render",p],["__file","HTML.html.vue"]]);export{h as default};
