import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as r,c as l,a as d,b as n,e as a,d as e,f as t}from"./app-9TEjBeIh.js";const c={},p=n("blockquote",null,[n("p",null,[n("code",null,"Markdown"),a(" 主要是为了方便写作而生的，编写完之后最终是转化为了 "),n("code",null,"HTML"),a(" 文档，而且也是完全兼容 "),n("code",null,"HTML"),a(" 格式文档，可以插入 "),n("code",null,"HTML"),a(" 格式文档。整理 "),n("code",null,"Markdown"),a(" 常用的标记语法。")])],-1),u=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),a(" Reference")],-1),m={href:"http://daringfireball.net/projects/markdown/syntax",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/younghz/Markdown",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.markdown.cn/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"editor",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#editor","aria-hidden":"true"},"#"),a(" Editor")],-1),h={href:"http://zh.mweb.im/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://markdownpad.com",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.marktext.cc/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/marktext/marktext",target:"_blank",rel:"noopener noreferrer"},q=n("blockquote",null,[n("p",null,"📝 A simple and elegant markdown editor, available for Linux, macOS and Windows.")],-1),x={href:"https://milkdown.dev/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/Milkdown/milkdown",target:"_blank",rel:"noopener noreferrer"},T=n("blockquote",null,[n("p",null,"🍼 Plugin driven WYSIWYG markdown editor framework.")],-1),_={href:"https://github.com/MacDownApp/macdown",target:"_blank",rel:"noopener noreferrer"},S=n("blockquote",null,[n("p",null,"Open source Markdown editor for macOS.")],-1),A=t('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="span-行内元素" tabindex="-1"><a class="header-anchor" href="#span-行内元素" aria-hidden="true">#</a> Span (行内元素)</h3><table><thead><tr><th>效果</th><th>格式</th></tr></thead><tbody><tr><td><strong>强调</strong></td><td><code>**文本**</code></td></tr><tr><td><em>斜体</em></td><td><code>*文本*</code></td></tr><tr><td><s>删除线</s></td><td><code>~~文本~~</code></td></tr><tr><td>内嵌代码</td><td><code>`代码`</code></td></tr><tr><td>链接</td><td><code>[显示文本](链接地址)</code></td></tr><tr><td>图片</td><td><code>![图片文本](图片地址)</code></td></tr><tr><td>Email</td><td><code>&lt;mail@mail.com&gt;</code></td></tr></tbody></table><h3 id="block-块区元素" tabindex="-1"><a class="header-anchor" href="#block-块区元素" aria-hidden="true">#</a> Block (块区元素)</h3><table><thead><tr><th>效果</th><th>格式</th></tr></thead><tbody><tr><td>换行符</td><td>在行尾输入两个以上空格</td></tr><tr><td>标题 - Setext 形式</td><td><code>====</code>、<code>----</code></td></tr><tr><td>标题 - atx 形式</td><td><code># 标题1</code>、<code>## 标题2</code>、<code>### 标题3</code>...</td></tr><tr><td>引用</td><td><code>&gt; 引用文本</code> (区块引用可以嵌套使用其他<code>Markdown</code>的标记)</td></tr><tr><td>分割线</td><td>三个以上的星号、减号、底线（中间可以插入空格） <code>****</code>、<code>----</code>、<code>- - -</code>、<code>____</code></td></tr><tr><td>列表 - 无序列表</td><td><code>*</code>、<code>+</code>、<code>-</code></td></tr><tr><td>列表 - 有序列表</td><td><code>1.</code>、<code>2.</code>、<code>3.</code>...</td></tr><tr><td>代码区块</td><td>代码区块需要使用4个空格或者1个Tab制表符就可以</td></tr><tr><td>代码块</td><td>通过符号```首尾包含即可，还可以设置代码语言、描述、链接地址</td></tr><tr><td>表格</td><td>表格标题需要用`</td></tr></tbody></table><p>``` [代码语言] [代码描述(文件名、位置...)] [链接地址] [链接描述] code ```</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>// 表格对齐方式 : 通过第二行控制\n//      + 左对齐(默认) : <span class="token code-snippet code keyword">`:-`</span>、<span class="token code-snippet code keyword">`:---`</span>  \n//      + 居中 : <span class="token code-snippet code keyword">`:`</span>、<span class="token code-snippet code keyword">`:-:`</span>、<span class="token code-snippet code keyword">`:---:`</span>  \n//      + 右对齐 : <span class="token code-snippet code keyword">`-:`</span>、<span class="token code-snippet code keyword">`---:`</span>  \n\n// 写法一：\n<span class="token table"><span class="token table-header-row"><span class="token table-header important">One        </span><span class="token punctuation">|</span><span class="token table-header important"> Two       </span><span class="token punctuation">|</span><span class="token table-header important"> Three</span>\n</span><span class="token table-line"><span class="token punctuation">---</span>        <span class="token punctuation">|</span> <span class="token punctuation">---</span>       <span class="token punctuation">|</span> <span class="token punctuation">---</span>\n</span><span class="token table-data-rows"><span class="token table-data">T1(0,0)    </span><span class="token punctuation">|</span><span class="token table-data"> T1(0,1)   </span><span class="token punctuation">|</span><span class="token table-data"> T1(0,2)</span>\n<span class="token table-data">T1(1,0)    </span><span class="token punctuation">|</span><span class="token table-data"> T1(1,1)   </span><span class="token punctuation">|</span><span class="token table-data"> T1(1,2)</span>\n<span class="token table-data">T1(2,0)    </span><span class="token punctuation">|</span><span class="token table-data"> T1(2,1)   </span><span class="token punctuation">|</span><span class="token table-data"> T1(2,2)</span>\n</span></span>// 写法二：\n<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> One      </span><span class="token punctuation">|</span><span class="token table-header important"> Two       </span><span class="token punctuation">|</span><span class="token table-header important"> Three     </span><span class="token punctuation">|</span>\n</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">---</span>      <span class="token punctuation">|</span> <span class="token punctuation">---</span>       <span class="token punctuation">|</span> <span class="token punctuation">---</span>       <span class="token punctuation">|</span>\n</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> T2(0,0)  </span><span class="token punctuation">|</span><span class="token table-data"> T2(0,1)   </span><span class="token punctuation">|</span><span class="token table-data"> T2(0,2)   </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data"> T2(1,0)  </span><span class="token punctuation">|</span><span class="token table-data"> T2(1,1)   </span><span class="token punctuation">|</span><span class="token table-data"> T2(1,2)   </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data"> T2(2,0)  </span><span class="token punctuation">|</span><span class="token table-data"> T2(2,1)   </span><span class="token punctuation">|</span><span class="token table-data"> T2(2,2)   </span><span class="token punctuation">|</span>\n</span></span>// 写法三：格式简洁、清晰（推荐）\n<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> One        </span><span class="token punctuation">|</span><span class="token table-header important"> Two       </span><span class="token punctuation">|</span><span class="token table-header important"> Three</span>\n</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:---</span>       <span class="token punctuation">|</span> <span class="token punctuation">:---:</span>     <span class="token punctuation">|</span> <span class="token punctuation">---:</span>\n</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> T3(0,0)    </span><span class="token punctuation">|</span><span class="token table-data"> T3(0,1)   </span><span class="token punctuation">|</span><span class="token table-data"> T3(0,2)</span>\n<span class="token punctuation">|</span><span class="token table-data"> T3(1,0)    </span><span class="token punctuation">|</span><span class="token table-data"> T3(1,1)   </span><span class="token punctuation">|</span><span class="token table-data"> T3(1,2)</span>\n<span class="token punctuation">|</span><span class="token table-data"> T3(2,0)    </span><span class="token punctuation">|</span><span class="token table-data"> T3(2,1)   </span><span class="token punctuation">|</span><span class="token table-data"> T3(2,2)</span>\n</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>One</th><th>Two</th><th>Three</th></tr></thead><tbody><tr><td>T1(0,0)</td><td>T1(0,1)</td><td>T1(0,2)</td></tr><tr><td>T1(1,0)</td><td>T1(1,1)</td><td>T1(1,2)</td></tr><tr><td>T1(2,0)</td><td>T1(2,1)</td><td>T1(2,2)</td></tr></tbody></table><table><thead><tr><th>One</th><th>Two</th><th>Three</th></tr></thead><tbody><tr><td>T2(0,0)</td><td>T2(0,1)</td><td>T2(0,2)</td></tr><tr><td>T2(1,0)</td><td>T2(1,1)</td><td>T2(1,2)</td></tr><tr><td>T2(2,0)</td><td>T2(2,1)</td><td>T2(2,2)</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">One</th><th style="text-align:center;">Two</th><th style="text-align:right;">Three</th></tr></thead><tbody><tr><td style="text-align:left;">T3(0,0)</td><td style="text-align:center;">T3(0,1)</td><td style="text-align:right;">T3(0,2)</td></tr><tr><td style="text-align:left;">T3(1,0)</td><td style="text-align:center;">T3(1,1)</td><td style="text-align:right;">T3(1,2)</td></tr><tr><td style="text-align:left;">T3(2,0)</td><td style="text-align:center;">T3(2,1)</td><td style="text-align:right;">T3(2,2)</td></tr></tbody></table><ul><li><p>其它元素</p><table><thead><tr><th>效果</th><th>格式</th></tr></thead><tbody><tr><td>自动链接</td><td><code>&lt;链接地址&gt;</code></td></tr><tr><td>脚注</td><td>在文文本中插入脚注 <code>[^n]</code>,文章结尾脚注格式 <code>[^n]:脚注内容</code></td></tr><tr><td>反斜杠</td><td>用于展示Markdown中已定义的标记 <code>\\标记符号</code></td></tr><tr><td>锚点</td><td>插入锚点 <code>[锚点描述](#锚点名)</code> ，在锚点要跳转的地方插入 <code>## [锚点文本](id:锚点名)</code></td></tr></tbody></table></li></ul>',11),C={id:"mermaid",tabindex:"-1"},D=n("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#",-1),M={href:"https://github.com/mermaid-js/mermaid",target:"_blank",rel:"noopener noreferrer"},B=t(`<blockquote><p>Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown</p></blockquote><h3 id="flow-chart-流程图" tabindex="-1"><a class="header-anchor" href="#flow-chart-流程图" aria-hidden="true">#</a> Flow Chart : 流程图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    fa<span class="token operator">:</span>fa-check<span class="token arrow operator">--&gt;</span>fa<span class="token operator">:</span>fa-coffee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD<span class="token punctuation">;</span>
    A<span class="token arrow operator">--&gt;</span>B<span class="token punctuation">;</span>
    A<span class="token arrow operator">--&gt;</span>C<span class="token punctuation">;</span>
    B<span class="token arrow operator">--&gt;</span>D<span class="token punctuation">;</span>
    C<span class="token arrow operator">--&gt;</span>D<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
    sq<span class="token text string">[Square shape]</span> <span class="token arrow operator">--&gt;</span> ci<span class="token text string">((Circle shape))</span>

    <span class="token keyword">subgraph</span> A
        od<span class="token text string">&gt;Odd shape]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">Two line&lt;br/&gt;edge comment</span> <span class="token arrow operator">--&gt;</span></span> ro
        di<span class="token text string">{Diamond with &lt;br/&gt; line break}</span> <span class="token arrow operator">-.-&gt;</span> ro<span class="token text string">(Rounded&lt;br&gt;square&lt;br&gt;shape)</span>
        di<span class="token arrow operator">==&gt;</span>ro2<span class="token text string">(Rounded square shape)</span>
    <span class="token keyword">end</span>

    <span class="token comment">%% Notice that no text in shape are added here instead that is appended further down</span>
    e <span class="token arrow operator">--&gt;</span> od3<span class="token text string">&gt;Really long text with linebreak&lt;br&gt;in an Odd shape]</span>

    <span class="token comment">%% Comments after double percent signs</span>
    e<span class="token text string">((Inner / circle&lt;br&gt;and some odd &lt;br&gt;special characters))</span> <span class="token arrow operator">--&gt;</span> f<span class="token text string">(,.?!+-*ز)</span>

    cyr<span class="token text string">[Cyrillic]</span><span class="token arrow operator">--&gt;</span>cyr2<span class="token text string">((Circle shape Начало))</span><span class="token punctuation">;</span>

     <span class="token keyword">classDef</span> green <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#9f6<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>2px</span><span class="token punctuation">;</span>
     <span class="token keyword">classDef</span> orange <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f96<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
     <span class="token keyword">class</span> sq,e green
     <span class="token keyword">class</span> di orange
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sequence-diagram-时序图" tabindex="-1"><a class="header-anchor" href="#sequence-diagram-时序图" aria-hidden="true">#</a> Sequence Diagram : 时序图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
    <span class="token keyword">participant</span> Alice
    <span class="token keyword">participant</span> Bob
    Alice<span class="token arrow operator">-&gt;&gt;</span>John<span class="token operator">:</span> Hello John, how are you?
    <span class="token keyword">loop</span> Healthcheck
        John<span class="token arrow operator">-&gt;&gt;</span>John<span class="token operator">:</span> Fight against hypochondria
    <span class="token keyword">end</span>
    <span class="token keyword">Note right of</span> John<span class="token operator">:</span> Rational thoughts &lt;br/&gt;prevail!
    John<span class="token arrow operator">--&gt;&gt;</span>Alice<span class="token operator">:</span> Great!
    John<span class="token arrow operator">-&gt;&gt;</span>Bob<span class="token operator">:</span> How about you?
    Bob<span class="token arrow operator">--&gt;&gt;</span>John<span class="token operator">:</span> Jolly good!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class-diagram-类图" tabindex="-1"><a class="header-anchor" href="#class-diagram-类图" aria-hidden="true">#</a> Class Diagram: 类图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token arrow operator">---</span>
title<span class="token operator">:</span> Animal example
<span class="token arrow operator">---</span>
<span class="token keyword">classDiagram</span>
    note <span class="token string">&quot;From Duck till Zebra&quot;</span>
    Animal <span class="token arrow operator">&lt;|--</span> Duck
    note for Duck <span class="token string">&quot;can fly\\ncan swim\\ncan dive\\ncan help in debugging&quot;</span>
    Animal <span class="token arrow operator">&lt;|--</span> Fish
    Animal <span class="token arrow operator">&lt;|--</span> Zebra
    Animal <span class="token operator">:</span> +int age
    Animal <span class="token operator">:</span> +String gender
    Animal<span class="token operator">:</span> +isMammal<span class="token punctuation">(</span><span class="token punctuation">)</span>
    Animal<span class="token operator">:</span> +mate<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">class</span> Duck<span class="token punctuation">{</span>
        +String beakColor
        +swim<span class="token punctuation">(</span><span class="token punctuation">)</span>
        +quack<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">class</span> Fish<span class="token punctuation">{</span>
        -int sizeInFeet
        -canEat<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">class</span> Zebra<span class="token punctuation">{</span>
        +bool is_wild
        +run<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-diagram-状态图" tabindex="-1"><a class="header-anchor" href="#state-diagram-状态图" aria-hidden="true">#</a> State Diagram: 状态图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token arrow operator">---</span>
title<span class="token operator">:</span> Simple sample
<span class="token arrow operator">---</span>
<span class="token keyword">stateDiagram-v2</span>
    <span class="token text string">[*]</span> <span class="token arrow operator">--&gt;</span> Still
    Still <span class="token arrow operator">--&gt;</span> <span class="token text string">[*]</span>

    Still <span class="token arrow operator">--&gt;</span> Moving
    Moving <span class="token arrow operator">--&gt;</span> Still
    Moving <span class="token arrow operator">--&gt;</span> Crash
    Crash <span class="token arrow operator">--&gt;</span> <span class="token text string">[*]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="entity-relationship-diagram-实体关系图" tabindex="-1"><a class="header-anchor" href="#entity-relationship-diagram-实体关系图" aria-hidden="true">#</a> Entity Relationship Diagram : 实体关系图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">erDiagram</span>
    CUSTOMER <span class="token arrow operator">||--o{</span> ORDER <span class="token operator">:</span> places
    ORDER <span class="token arrow operator">||--|{</span> LINE-ITEM <span class="token operator">:</span> contains
    CUSTOMER <span class="token arrow operator">}|..|{</span> DELIVERY-ADDRESS <span class="token operator">:</span> uses
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="user-journey-diagram-用户体验旅程图" tabindex="-1"><a class="header-anchor" href="#user-journey-diagram-用户体验旅程图" aria-hidden="true">#</a> User Journey Diagram : 用户体验旅程图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">journey</span>
    title My working day
    section Go to work
      Make tea<span class="token operator">:</span> 5<span class="token operator">:</span> Me
      Go upstairs<span class="token operator">:</span> 3<span class="token operator">:</span> Me
      Do work<span class="token operator">:</span> 1<span class="token operator">:</span> Me, Cat
    section Go home
      Go downstairs<span class="token operator">:</span> 5<span class="token operator">:</span> Me
      Sit down<span class="token operator">:</span> 5<span class="token operator">:</span> Me
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gantt-diagram-甘特图" tabindex="-1"><a class="header-anchor" href="#gantt-diagram-甘特图" aria-hidden="true">#</a> Gantt Diagram : 甘特图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">gantt</span>
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    <span class="token comment">%% (\`excludes\` accepts specific dates in YYYY-MM-DD format, days of the week (&quot;sunday&quot;) or &quot;weekends&quot;, but not the word &quot;weekdays&quot;.)</span>

    section A section
    Completed task            <span class="token operator">:</span>done,    des1, 2014-01-06,2014-01-08
    Active task               <span class="token operator">:</span>active,  des2, 2014-01-09, 3d
    Future task               <span class="token operator">:</span>         des3, after des2, 5d
    Future task2              <span class="token operator">:</span>         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line <span class="token operator">:</span>crit, done, 2014-01-06,24h
    Implement parser and jison          <span class="token operator">:</span>crit, done, after des1, 2d
    Create tests for parser             <span class="token operator">:</span>crit, active, 3d
    Future task in critical line        <span class="token operator">:</span>crit, 5d
    Create tests for renderer           <span class="token operator">:</span>2d
    Add to mermaid                      <span class="token operator">:</span>1d
    Functionality added                 <span class="token operator">:</span>milestone, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               <span class="token operator">:</span>active, a1, after des1, 3d
    Add gantt diagram to demo page      <span class="token operator">:</span>after a1  , 20h
    Add another diagram to demo page    <span class="token operator">:</span>doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               <span class="token operator">:</span>after doc1, 3d
    Add gantt diagram to demo page      <span class="token operator">:</span>20h
    Add another diagram to demo page    <span class="token operator">:</span>48h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pie-chart-饼图" tabindex="-1"><a class="header-anchor" href="#pie-chart-饼图" aria-hidden="true">#</a> Pie Chart : 饼图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token comment">%%{init: {&quot;pie&quot;: {&quot;textPosition&quot;: 0.5}, &quot;themeVariables&quot;: {&quot;pieOuterStrokeWidth&quot;: &quot;5px&quot;}} }%%</span>
<span class="token keyword">pie</span> showData
    title Key elements in Product X
    <span class="token string">&quot;Calcium&quot;</span> <span class="token operator">:</span> 42.96
    <span class="token string">&quot;Potassium&quot;</span> <span class="token operator">:</span> 50.05
    <span class="token string">&quot;Magnesium&quot;</span> <span class="token operator">:</span> 10.01
    <span class="token string">&quot;Iron&quot;</span> <span class="token operator">:</span>  5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="quadrant-chart-象限图" tabindex="-1"><a class="header-anchor" href="#quadrant-chart-象限图" aria-hidden="true">#</a> Quadrant Chart : 象限图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code>quadrantChart
    title Reach and engagement of campaigns
    <span class="token arrow operator">x-</span>axis Low Reach <span class="token arrow operator">--&gt;</span> High Reach
    y-axis Low Engagement <span class="token arrow operator">--&gt;</span> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A<span class="token operator">:</span> <span class="token text string">[0.3, 0.6]</span>
    Campaign B<span class="token operator">:</span> <span class="token text string">[0.45, 0.23]</span>
    Campaign C<span class="token operator">:</span> <span class="token text string">[0.57, 0.69]</span>
    Campaign D<span class="token operator">:</span> <span class="token text string">[0.78, 0.34]</span>
    Campaign E<span class="token operator">:</span> <span class="token text string">[0.40, 0.34]</span>
    Campaign F<span class="token operator">:</span> <span class="token text string">[0.35, 0.78]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="requirement-diagram-需求图" tabindex="-1"><a class="header-anchor" href="#requirement-diagram-需求图" aria-hidden="true">#</a> Requirement Diagram : 需求图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">requirementDiagram</span>

    requirement test_req <span class="token punctuation">{</span>
    id<span class="token operator">:</span> 1
    text<span class="token operator">:</span> the test text.
    risk<span class="token operator">:</span> high
    verifymethod<span class="token operator">:</span> test
    <span class="token punctuation">}</span>

    element test_entity <span class="token punctuation">{</span>
    type<span class="token operator">:</span> simulation
    <span class="token punctuation">}</span>

    test_entity - satisfies <span class="token arrow operator">-&gt;</span> test_req
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-graph-git-图" tabindex="-1"><a class="header-anchor" href="#git-graph-git-图" aria-hidden="true">#</a> Git Graph : Git 图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token arrow operator">---</span>
title<span class="token operator">:</span> Example Git diagram
<span class="token arrow operator">---</span>
<span class="token keyword">gitGraph</span>
   commit
   commit
   branch develop
   checkout develop
   commit
   commit
   checkout main
   merge develop
   commit
   commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c4-diagram" tabindex="-1"><a class="header-anchor" href="#c4-diagram" aria-hidden="true">#</a> C4 Diagram</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code>C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary<span class="token text string">(b0, &quot;BankBoundary0&quot;)</span> <span class="token punctuation">{</span>
        Person<span class="token text string">(customerA, &quot;Banking Customer A&quot;, &quot;A customer of the bank, with personal bank accounts.&quot;)</span>
        Person<span class="token text string">(customerB, &quot;Banking Customer B&quot;)</span>
        Person_Ext<span class="token text string">(customerC, &quot;Banking Customer C&quot;, &quot;desc&quot;)</span>

        Person<span class="token text string">(customerD, &quot;Banking Customer D&quot;, &quot;A customer of the bank, &lt;br/&gt; with personal bank accounts.&quot;)</span>

        System<span class="token text string">(SystemAA, &quot;Internet Banking System&quot;, &quot;Allows customers to view information about their bank accounts, and make payments.&quot;)</span>

        Enterprise_Boundary<span class="token text string">(b1, &quot;BankBoundary&quot;)</span> <span class="token punctuation">{</span>

          SystemDb_Ext<span class="token text string">(SystemE, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)</span>

          System_Boundary<span class="token text string">(b2, &quot;BankBoundary2&quot;)</span> <span class="token punctuation">{</span>
            System<span class="token text string">(SystemA, &quot;Banking System A&quot;)</span>
            System<span class="token text string">(SystemB, &quot;Banking System B&quot;, &quot;A system of the bank, with personal bank accounts. next line.&quot;)</span>
          <span class="token punctuation">}</span>

          System_Ext<span class="token text string">(SystemC, &quot;E-mail system&quot;, &quot;The internal Microsoft Exchange e-mail system.&quot;)</span>
          SystemDb<span class="token text string">(SystemD, &quot;Banking System D Database&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span>

          Boundary<span class="token text string">(b3, &quot;BankBoundary3&quot;, &quot;boundary&quot;)</span> <span class="token punctuation">{</span>
            SystemQueue<span class="token text string">(SystemF, &quot;Banking System F Queue&quot;, &quot;A system of the bank.&quot;)</span>
            SystemQueue_Ext<span class="token text string">(SystemG, &quot;Banking System G Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      BiRel<span class="token text string">(customerA, SystemAA, &quot;Uses&quot;)</span>
      BiRel<span class="token text string">(SystemAA, SystemE, &quot;Uses&quot;)</span>
      Rel<span class="token text string">(SystemAA, SystemC, &quot;Sends e-mails&quot;, &quot;SMTP&quot;)</span>
      Rel<span class="token text string">(SystemC, customerA, &quot;Sends e-mails to&quot;)</span>

      UpdateElementStyle<span class="token text string">(customerA, $fontColor=&quot;red&quot;, $bgColor=&quot;grey&quot;, $borderColor=&quot;red&quot;)</span>
      UpdateRelStyle<span class="token text string">(customerA, SystemAA, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetX=&quot;5&quot;)</span>
      UpdateRelStyle<span class="token text string">(SystemAA, SystemE, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetY=&quot;-10&quot;)</span>
      UpdateRelStyle<span class="token text string">(SystemAA, SystemC, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetY=&quot;-40&quot;, $offsetX=&quot;-50&quot;)</span>
      UpdateRelStyle<span class="token text string">(SystemC, customerA, $textColor=&quot;red&quot;, $lineColor=&quot;red&quot;, $offsetX=&quot;-50&quot;, $offsetY=&quot;20&quot;)</span>

      UpdateLayoutConfig<span class="token text string">($c4ShapeInRow=&quot;3&quot;, $c4BoundaryInRow=&quot;1&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mindmap-思维导图" tabindex="-1"><a class="header-anchor" href="#mindmap-思维导图" aria-hidden="true">#</a> Mindmap : 思维导图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code>mindmap
  root<span class="token text string">((mindmap))</span>
    Origins
      Long history
      <span class="token operator">:</span><span class="token operator">:</span>icon<span class="token text string">(fa fa-book)</span>
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness&lt;br/&gt;and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="timeline-时间线" tabindex="-1"><a class="header-anchor" href="#timeline-时间线" aria-hidden="true">#</a> Timeline : 时间线</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code>timeline
    title History of Social Media Platform
    2002 <span class="token operator">:</span> LinkedIn
    2004 <span class="token operator">:</span> Facebook
         <span class="token operator">:</span> Google
    2005 <span class="token operator">:</span> Youtube
    2006 <span class="token operator">:</span> Twitter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zenuml-uml-图" tabindex="-1"><a class="header-anchor" href="#zenuml-uml-图" aria-hidden="true">#</a> ZenUML : UML 图</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code>zenuml
    title Demo
    Alice<span class="token arrow operator">-&gt;</span>John<span class="token operator">:</span> Hello John, how are you?
    John<span class="token arrow operator">-&gt;</span>Alice<span class="token operator">:</span> Great!
    Alice<span class="token arrow operator">-&gt;</span>John<span class="token operator">:</span> See you later!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function E(R,O){const s=o("ExternalLinkIcon");return r(),l("div",null,[p,d(" more "),u,n("ul",null,[n("li",null,[n("a",m,[a("Markdown 官网语法"),e(s)])]),n("li",null,[n("a",v,[a("Markdown 基本语法"),e(s)])]),n("li",null,[n("a",k,[a("Markdown 中文网"),e(s)])])]),b,n("ul",null,[n("li",null,[n("a",h,[a("MWeb"),e(s)])]),n("li",null,[n("a",g,[a("MarkdownPad"),e(s)])]),n("li",null,[n("a",y,[a("MarkText"),e(s)]),a(" 👉🏻 "),n("a",w,[a("🐙"),e(s)]),q]),n("li",null,[n("a",x,[a("Milkdown"),e(s)]),a(" 👉🏻 "),n("a",f,[a("🐙"),e(s)]),T]),n("li",null,[a("[MacDown][https://macdown.uranusjr.com/] 👉🏻 "),n("a",_,[a("🐙"),e(s)]),S])]),A,n("h2",C,[D,a(),n("a",M,[a("Mermaid"),e(s)])]),B])}const L=i(c,[["render",E],["__file","markdown.html.vue"]]);export{L as default};
