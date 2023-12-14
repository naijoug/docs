import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as n,c as l,a,b as t,e,d as o,f as i}from"./app-gIO09NSJ.js";const s={},h=t("h1",{id:"regular-expression",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#regular-expression","aria-hidden":"true"},"#"),e(" Regular Expression")],-1),u=t("blockquote",null,[t("p",null,"正则表达式 : 是一个用来匹配字符串的特殊字符串(普通字符 + 特殊字符[元字符])")],-1),x=t("h2",{id:"reference",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),e(" Reference")],-1),g={href:"http://deerchao.net/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"},p={href:"http://www.runoob.com/regexp/regexp-tutorial.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://www.regexlab.com/zh/regref.htm",target:"_blank",rel:"noopener noreferrer"},y={href:"https://regex101.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/aykutkardas/regexlearn.com",target:"_blank",rel:"noopener noreferrer"},m=t("blockquote",null,[t("p",null,"Learn RegEx step by step, from zero to advanced.")],-1),f=i('<h2 id="regular-expression-正则表达式" tabindex="-1"><a class="header-anchor" href="#regular-expression-正则表达式" aria-hidden="true">#</a> Regular Expression（正则表达式)</h2><ul><li><p>非打印字符</p><table><thead><tr><th style="text-align:center;">非打印字符</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>\\cx</code></td><td>匹配由x指明的控制字符。例如， <code>\\cM</code> 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 &#39;c&#39; 字符</td></tr><tr><td style="text-align:center;"><code>\\f</code></td><td>匹配一个换页符。等价于 <code>\\x0c</code> 和 <code>\\cL</code></td></tr><tr><td style="text-align:center;"><code>\\n</code></td><td>匹配一个换行符。等价于 <code>\\x0a</code> 和 <code>\\cJ</code></td></tr><tr><td style="text-align:center;"><code>\\r</code></td><td>匹配一个回车符。等价于 <code>\\x0d</code> 和 <code>\\cM</code></td></tr><tr><td style="text-align:center;"><code>\\t</code></td><td>匹配一个制表符。等价于 <code>\\x09</code> 和 <code>\\cI</code></td></tr><tr><td style="text-align:center;"><code>\\v</code></td><td>匹配一个垂直制表符。等价于 <code>\\x0b</code> 和 <code>\\cK</code></td></tr><tr><td style="text-align:center;"><code>\\s</code></td><td>匹配任何空白字符，包括空格、制表符、换页符等等。等价于 <code>[ \\f\\n\\r\\t\\v]</code></td></tr><tr><td style="text-align:center;"><code>\\S</code></td><td>匹配任何非空白字符。等价于 <code>[^ \\f\\n\\r\\t\\v]</code></td></tr><tr><td style="text-align:center;"><code>\\d</code></td><td>匹配任何数字。等价于 <code>[0-9]</code></td></tr><tr><td style="text-align:center;"><code>\\D</code></td><td>匹配非数字。等价于 <code>[^0-9]</code></td></tr><tr><td style="text-align:center;"><code>\\w</code></td><td>匹配单词字符。等价于 <code>[a-zA-Z_0-9]</code></td></tr><tr><td style="text-align:center;"><code>\\W</code></td><td>匹配非单词字符。等价于 <code>[^a-zA-Z_0-9]</code></td></tr></tbody></table></li><li><p>特殊字符</p><table><thead><tr><th style="text-align:center;">特别字符</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>$</code></td><td>匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 <code>$</code> 也匹配 <code>\\n</code> 或 <code>\\r</code>。要匹配 <code>$</code> 字符本身，请使用 <code>\\$</code></td></tr><tr><td style="text-align:center;"><code>( )</code></td><td>标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 <code>\\(</code> 和 <code>\\)</code></td></tr><tr><td style="text-align:center;"><code>*</code></td><td>匹配前面的子表达式零次或多次。要匹配 <code>*</code> 字符，请使用 <code>\\*</code></td></tr><tr><td style="text-align:center;"><code>+</code></td><td>匹配前面的子表达式一次或多次。要匹配 <code>+</code> 字符，请使用 <code>\\+</code></td></tr><tr><td style="text-align:center;"><code>.</code></td><td>匹配除换行符 <code>\\n</code> 之外的任何单字符。要匹配 <code>.</code> ，请使用 <code>\\.</code></td></tr><tr><td style="text-align:center;"><code>[</code></td><td>标记一个中括号表达式的开始。要匹配 <code>[</code>，请使用 <code>\\[</code></td></tr><tr><td style="text-align:center;"><code>?</code></td><td>匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符，请使用 <code>\\?</code></td></tr><tr><td style="text-align:center;"><code>\\</code></td><td>将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。例如， <code>n</code> 匹配字符 &#39;n&#39;。<code>\\n</code> 匹配换行符。序列 <code>\\\\</code> 匹配 <code>\\</code>，而 <code>\\(</code> 则匹配 <code>(</code></td></tr><tr><td style="text-align:center;"><code>^</code></td><td>匹配输入字符串的开始位置，除非在方括号表达式中使用，此时它表示不接受该字符集合。要匹配 <code>^</code> 字符本身，请使用 <code>\\^</code></td></tr><tr><td style="text-align:center;"><code>{</code></td><td>标记限定符表达式的开始。要匹配 <code>{</code>，请使用 <code>\\{</code></td></tr><tr><td style="text-align:center;">`</td><td>`</td></tr></tbody></table></li><li><p>限定符</p><blockquote><p>指定正则表达式的一个给定组件必须要出现多少次才能满足匹配。有 <code>*</code> 或 <code>+</code> 或 <code>?</code> 或 <code>{n}</code> 或 <code>{n,}</code> 或 <code>{n,m}</code> 共6种。</p></blockquote><table><thead><tr><th style="text-align:center;">限定符</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>*</code></td><td>匹配前面的子表达式零次或多次。例如，zo* 能匹配 &quot;z&quot; 以及 &quot;zoo&quot;。<code>*</code> 等价于<code>{0,}</code></td></tr><tr><td style="text-align:center;"><code>+</code></td><td>匹配前面的子表达式一次或多次。例如，&#39;zo+&#39; 能匹配 &quot;zo&quot; 以及 &quot;zoo&quot;，但不能匹配 &quot;z&quot;。<code>+</code> 等价于 <code>{1,}</code></td></tr><tr><td style="text-align:center;"><code>?</code></td><td>匹配前面的子表达式零次或一次。例如，&quot;do(es)?&quot; 可以匹配 &quot;do&quot; 或 &quot;does&quot; 中的&quot;do&quot; 。<code>?</code> 等价于 <code>{0,1}</code></td></tr><tr><td style="text-align:center;"><code>{n}</code></td><td>n 是一个非负整数。匹配确定的 n 次。例如，<code>o{2}</code> 不能匹配 &quot;Bob&quot; 中的 &#39;o&#39;，但是能匹配 &quot;food&quot; 中的两个 o</td></tr><tr><td style="text-align:center;"><code>{n,}</code></td><td>n 是一个非负整数。至少匹配n 次。例如，<code>o{2,}</code> 不能匹配 &quot;Bob&quot; 中的 &#39;o&#39;，但能匹配 &quot;foooood&quot; 中的所有 o。<code>o{1,}</code> 等价于 <code>o+</code>。<code>o{0,}</code> 则等价于 <code>o*</code></td></tr><tr><td style="text-align:center;"><code>{n,m}</code></td><td>m 和 n 均为非负整数，其中n &lt;= m。最少匹配 n 次且最多匹配 m 次。例如，<code>o{1,3}</code> 将匹配 &quot;fooooood&quot; 中的前三个 o。<code>o{0,1}</code> 等价于 <code>o?</code>。请注意在逗号和两个数之间不能有空格</td></tr></tbody></table></li><li><p>定位符</p><blockquote><p>将正则表达式固定到行首或行尾</p></blockquote><table><thead><tr><th style="text-align:center;">定位符</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>^</code></td><td>匹配输入字符串开始的位置。如果设置了 RegExp 对象的 Multiline 属性，<code>^</code> 还会与 <code>\\n</code> 或 <code>\\r</code> 之后的位置匹配</td></tr><tr><td style="text-align:center;"><code>$</code></td><td>匹配输入字符串结尾的位置。如果设置了 RegExp 对象的 Multiline 属性，<code>$</code> 还会与 <code>\\n</code> 或 <code>\\r</code> 之前的位置匹配</td></tr><tr><td style="text-align:center;"><code>\\b</code></td><td>匹配一个字边界，即字与空格间的位置</td></tr><tr><td style="text-align:center;"><code>\\B</code></td><td>非字边界匹配</td></tr></tbody></table></li><li><p>预定义字符类</p></li></ul><table><thead><tr><th>符号</th><th>意义</th></tr></thead><tbody><tr><td>.</td><td>任何字符（与行结束符可能匹配也可能不匹配）</td></tr><tr><td><code>\\d</code></td><td>数字: <code>[0-9]</code></td></tr><tr><td><code>\\D</code></td><td>非数字： <code>[^0-9]</code></td></tr><tr><td><code>\\s</code></td><td>空白字符：<code>[ \\t\\n\\x0B\\f\\r]</code></td></tr><tr><td><code>\\S</code></td><td>非空白字符：<code>[^\\s]</code></td></tr><tr><td><code>\\w </code></td><td>单词字符：<code>[a-zA-Z_0-9]</code></td></tr><tr><td><code>\\W</code></td><td>非单词字符：<code>[^\\w]</code></td></tr></tbody></table><ul><li><p><code>Greedy</code> 数量词</p><table><thead><tr><th>符号</th><th>意义</th></tr></thead><tbody><tr><td><code>X?</code></td><td>X，一次或一次也没有</td></tr><tr><td><code>X*</code></td><td>X，零次或多次</td></tr><tr><td><code>X+</code></td><td>X，一次或多次</td></tr><tr><td><code>X{n}</code></td><td>X，恰好n次</td></tr><tr><td><code>X{n,}</code></td><td>X，至少n次</td></tr><tr><td><code>X{n,m}</code></td><td>X，至少n次，但是不超过m次</td></tr></tbody></table></li><li><p>范围表示</p><table><thead><tr><th>符号</th><th>意义</th></tr></thead><tbody><tr><td><code>[abc]</code></td><td>a、b 或 c（简单类）</td></tr><tr><td><code>[^abc]</code></td><td>任何字符，除了 a、b 或 c（否定）</td></tr><tr><td><code>[a-zA-Z]</code></td><td>a 到 z 或 A 到 Z，两头的字母包括在内（范围）</td></tr><tr><td><code>[a-d[m-p]]</code></td><td>a 到 d 或 m 到 p：<code>[a-dm-p]</code>（并集）</td></tr><tr><td><code>[a-z&amp;&amp;[def]]</code></td><td>d、e 或 f（交集）</td></tr><tr><td><code>[a-z&amp;&amp;[^bc]]</code></td><td>a 到 z，除了 b 和 c：<code>[ad-z]</code>（减去）</td></tr><tr><td><code>[a-z&amp;&amp;[^m-p]]</code></td><td>a 到 z，而非 m 到 p：<code>[a-lq-z]</code>（减去）</td></tr></tbody></table></li><li><p>常用的一些正则表达式</p><table><thead><tr><th>符号</th><th>意义</th></tr></thead><tbody><tr><td><code>[^\\\\u4E00-\\\\u9FA5]</code></td><td>非中文</td></tr><tr><td><code>[^A-Za-z]</code></td><td>非英文</td></tr><tr><td><code>[^0-9]</code></td><td>非数字</td></tr><tr><td><code>[^A-Za-z\\\\u4E00-\\\\u9FA5]</code></td><td>非中文或英文</td></tr><tr><td><code>[^A-Za-z0-9]</code></td><td>非英文或数字</td></tr><tr><td><code>[^A-Za-z0-9_]</code></td><td>非因为或数字或下划线</td></tr></tbody></table></li></ul>',4);function q(z,k){const d=r("ExternalLinkIcon");return n(),l("div",null,[h,u,a(" more "),x,t("ul",null,[t("li",null,[t("a",g,[e("正则表达式30分钟入门教程"),o(d)])]),t("li",null,[t("a",p,[e("Runoob - 正则表达式"),o(d)])]),t("li",null,[t("a",b,[e("揭开正则表达式的神秘面纱"),o(d)])]),t("li",null,[t("a",y,[e("Regex101"),o(d)])]),t("li",null,[t("a",_,[e("RegexLearn"),o(d)]),m])]),f])}const E=c(s,[["render",q],["__file","regular.html.vue"]]);export{E as default};