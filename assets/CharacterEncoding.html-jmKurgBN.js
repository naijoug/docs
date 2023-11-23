import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as a,c as n,b as t,e as d,d as o,f as i}from"./app-NiSSZH60.js";const h={},l=t("h1",{id:"character-encoding",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#character-encoding","aria-hidden":"true"},"#"),d(" Character Encoding")],-1),x=t("blockquote",null,[t("p",null,"字符编码")],-1),s=t("h2",{id:"reference",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),d(" Reference")],-1),b={href:"https://cenalulu.github.io/linux/character-encoding",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html",target:"_blank",rel:"noopener noreferrer"},p=i('<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><ul><li><p>位 &amp; 字节 &amp; 字符</p><table><thead><tr><th>类型</th><th>名称</th><th>位数</th><th>说明</th></tr></thead><tbody><tr><td><code>bit</code></td><td>位（比特）</td><td>1</td><td>计算机存储信息的最小单位</td></tr><tr><td><code>byte</code></td><td>字节（拜特）</td><td>8</td><td>计算机存储容量的计量单位</td></tr><tr><td><code>char</code></td><td>字符</td><td>8 / 16</td><td>计算机中使用的文字或符号</td></tr></tbody></table></li><li><p>缩写</p><table><thead><tr><th>缩写</th><th>说明</th></tr></thead><tbody><tr><td><code>ASCII</code></td><td>(American Standard Code for Information Interchange) 美国信息交换标准代码</td></tr><tr><td><code>ANSI</code></td><td>(American National Standards Institute) 美国国家标准学会</td></tr><tr><td><code>UCS</code></td><td>(Universal Character Set) 通用字符集</td></tr><tr><td><code>UNICODE</code></td><td>统一的字符编码标准,采用双字节对字符进行编码</td></tr><tr><td><code>UTF</code></td><td>(Unicode Transformation Format) Unicode 编码转换</td></tr></tbody></table></li><li><p>字符集 &amp; 字符编码</p><table><thead><tr><th>概念</th><th>说明</th></tr></thead><tbody><tr><td><code>Character Sets</code></td><td>(字符集) 字符的集合，一般情况下与字符编码一一对应(<code>Unicode</code> 字符集例外，有多种字符编码实现)</td></tr><tr><td><code>Character Encoding</code></td><td>(字符编码) 定义字符集中的字符如何编码为特定的二进制</td></tr></tbody></table></li><li><p>字符集</p><table><thead><tr><th>字符集</th><th>说明</th></tr></thead><tbody><tr><td><code>ASCII</code></td><td>美国人定义的英文字符集</td></tr><tr><td><code>GB18030</code></td><td>中国人为了解决中文而发明制定，只有一种实现，所以可以指代这种字符集对应的字符编码</td></tr><tr><td><code>Unicode</code></td><td>为了解决不同字符集码表不一致而推出，统一了所有字符对应的码。只规定了字符与码表的一一对应关系，没有规定如何实现。所以 <code>Unicode</code> 有多种实现方式(<code>UTF-8</code>、<code>UTF-16</code>、<code>UTF-32</code>)</td></tr></tbody></table></li></ul><h2 id="ansi" tabindex="-1"><a class="header-anchor" href="#ansi" aria-hidden="true">#</a> ANSI</h2><blockquote><p><code>ANSI</code> : 不是一种特定的字符编码，在不同的系统中，表示不同的编码 如： 在英文系统中，表示 <code>ASCII</code> 编码 在中文系统中，表示 <code>GBK</code> 编码 在韩文系统中，表示 <code>EUC-KR</code> 编码</p></blockquote><h2 id="ascii" tabindex="-1"><a class="header-anchor" href="#ascii" aria-hidden="true">#</a> ASCII</h2><blockquote><p><code>ASCII</code> : 8 位，定义了 128 个字符编码，只占用了一个字节的后面 7 位，最前面一位均是 0.</p></blockquote><h2 id="utf-8" tabindex="-1"><a class="header-anchor" href="#utf-8" aria-hidden="true">#</a> UTF-8</h2><blockquote><p><code>UTF-8</code> 是 Unicode 的实现方式之一</p></blockquote><ul><li><p><code>UTF-8</code> 编码规则</p><ul><li>单字节字符，与 <code>ASCII</code> 码相同(第一位为 0，后 7 位是字符的 <code>Unicode</code> 码)</li><li>n 字节字符(n &gt; 1)，第一个字节的前 n 位均为 1，n+1 位是 0，后面字节的前两位均为 10。剩下的为字符的 <code>Unicode</code> 码。</li></ul><table><thead><tr><th><code>Unicode</code> 符号范围 (16进制)</th><th><code>UTF-8</code> 编码方式 (2进制)</th></tr></thead><tbody><tr><td>0000 0000 ~ 0000 007F</td><td>0xxxxxxx</td></tr><tr><td>0000 0080 ~ 0000 07FF</td><td>110xxxxx 10xxxxxx</td></tr><tr><td>0000 0800 ~ 0000 FFFF</td><td>1110xxxx 10xxxxxx 10xxxxxx</td></tr><tr><td>0001 0000 ~ 0010 FFFF</td><td>11110xxx 10xxxxxx 10xxxxxx 10xxxxxx</td></tr></tbody></table></li><li><p><code>Unicode</code> 的 <code>Little endian</code> &amp; <code>Big endian</code></p><table><thead><tr><th>字节序</th><th>说明</th><th>文件编码方式确定</th></tr></thead><tbody><tr><td><code>Little endian</code></td><td>第二个字节在前</td><td>文件头两个字节为 FF FE</td></tr><tr><td><code>Big endian</code></td><td>第一个字节在前</td><td>文件头两个字节为 FE FF</td></tr></tbody></table></li></ul>',9);function _(f,F){const e=r("ExternalLinkIcon");return a(),n("div",null,[l,x,s,t("ul",null,[t("li",null,[t("a",b,[d("十分钟搞清字符集和字符编码"),o(e)])]),t("li",null,[t("a",u,[d("字符编码笔记：ASCII，Unicode 和 UTF-8"),o(e)])])]),p])}const m=c(h,[["render",_],["__file","CharacterEncoding.html.vue"]]);export{m as default};
