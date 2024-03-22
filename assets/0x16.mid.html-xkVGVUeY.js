import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,a as i,b as e,f as r}from"./app-dpqdmZgS.js";const d={},o=e("blockquote",null,[e("p",null,"16 - 中等难题 (26)")],-1),c=r(`<h2 id="_16-1-交换数字" tabindex="-1"><a class="header-anchor" href="#_16-1-交换数字" aria-hidden="true">#</a> 16.1 交换数字</h2><blockquote><p>编写一个函数，不用临时变量，直接交换两个数。</p></blockquote><h2 id="_16-2-单词频率" tabindex="-1"><a class="header-anchor" href="#_16-2-单词频率" aria-hidden="true">#</a> 16.2 单词频率</h2><blockquote><p>设计一个方法，找出任意指定单词在一本书中的出现频率。如果我们多次使用此方法，应该怎么办？</p></blockquote><h2 id="_16-3-交点" tabindex="-1"><a class="header-anchor" href="#_16-3-交点" aria-hidden="true">#</a> 16.3 交点</h2><blockquote><p>给定两条线段（表示为起点和终点），如果它们有交点，请计算其交点。</p></blockquote><h2 id="_16-4-井字游戏" tabindex="-1"><a class="header-anchor" href="#_16-4-井字游戏" aria-hidden="true">#</a> 16.4 井字游戏</h2><blockquote><p>设计一个算法，判断玩家是否赢了井字游戏。</p></blockquote><h2 id="_16-5-阶乘尾数" tabindex="-1"><a class="header-anchor" href="#_16-5-阶乘尾数" aria-hidden="true">#</a> 16.5 阶乘尾数</h2><blockquote><p>设计一个算法，算出n阶乘有多少个尾随零。</p></blockquote><h2 id="_16-6-最小差" tabindex="-1"><a class="header-anchor" href="#_16-6-最小差" aria-hidden="true">#</a> 16.6 最小差</h2><blockquote><p>给定两个整数数组，计算具有最小差（非负）的一对数值（每个数组中取一个值），并返回该对数值的差。</p></blockquote><pre><code>示例：
输入：{1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}
输出：3，即数值对(11, 8)
</code></pre><h2 id="_16-7-最大数值" tabindex="-1"><a class="header-anchor" href="#_16-7-最大数值" aria-hidden="true">#</a> 16.7 最大数值</h2><blockquote><p>编写一个方法，找出两个数字中最大的那一个。不得使用if-else或其他比较运算符。</p></blockquote><h2 id="_16-8-整数的英语表示" tabindex="-1"><a class="header-anchor" href="#_16-8-整数的英语表示" aria-hidden="true">#</a> 16.8 整数的英语表示</h2><blockquote><p>给定一个整数，打印该整数的英文描述（例如“One Thousand, Two Hundred Thirty Four”）。</p></blockquote><h2 id="_16-9-运算" tabindex="-1"><a class="header-anchor" href="#_16-9-运算" aria-hidden="true">#</a> 16.9 运算</h2><blockquote><p>请实现整数数字的乘法、减法和除法运算，运算结果均为整数数字，程序中只允许使用加法运算符。</p></blockquote><h2 id="_16-10-生存人数" tabindex="-1"><a class="header-anchor" href="#_16-10-生存人数" aria-hidden="true">#</a> 16.10 生存人数</h2><blockquote><p>给定一个列有出生年份和死亡年份的名单，实现一个方法以计算生存人数最多的年份。你可以假设所有人都出生于1900年至2000年（含1900和2000）之间。如果一个人在某一年的任意时期都处于生存状态，那么他们应该被纳入那一年的统计中。例如，生于1908年、死于1909年的人应当被列入1908年和1909年的计数。</p></blockquote><h2 id="_16-11-跳水板" tabindex="-1"><a class="header-anchor" href="#_16-11-跳水板" aria-hidden="true">#</a> 16.11 跳水板</h2><blockquote><p>你正在使用一堆木板建造跳水板。有两种类型的木板，其中一种长度较短（长度记为shorter），一种长度较长（长度记为longer）。你必须正好使用K块木板。编写一个方法，生成跳水板所有可能的长度。</p></blockquote><h2 id="_16-12-xml编码" tabindex="-1"><a class="header-anchor" href="#_16-12-xml编码" aria-hidden="true">#</a> 16.12 XML编码</h2><blockquote><p>XML极为冗长，你找到一种编码方式，可将每个标签对应为预先定义好的整数值，该编码方式的语法如下：</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Element   --&gt; Tag Attributes END Children END
Attribute --&gt; Tag Value
END       --&gt; 0
Tag       --&gt; 映射至某个预定义的整数值
Value     --&gt; 字符串值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>例如：
下列XML会被转换压缩成下面的字符串
（假定对应关系为family -&gt; 1、person-&gt; 2、firstName -&gt; 3、lastName -&gt; 4、state -&gt; 5）。

&lt;family lastName=&quot;McDowell&quot; state=&quot;CA&quot;&gt;
    &lt;person firstName=&quot;Gayle&quot;&gt;Some Message&lt;/person&gt;
&lt;/family&gt;

变为：1 4 McDowell 5 CA 0 2 3 Gayle 0 Some Message 0 0
</code></pre><p>编写代码，打印XML元素编码后的版本（传入Element和Attribute对象）。</p><h2 id="_16-13-平分正方形" tabindex="-1"><a class="header-anchor" href="#_16-13-平分正方形" aria-hidden="true">#</a> 16.13 平分正方形</h2><blockquote><p>给定两个正方形及一个二维平面。请找出将这两个正方形分割成两半的一条直线。假设正方形顶边和底边与x轴平行。</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#467，#478，#527，#559</p></div><h2 id="_16-14-最佳直线" tabindex="-1"><a class="header-anchor" href="#_16-14-最佳直线" aria-hidden="true">#</a> 16.14 最佳直线</h2><blockquote><p>给定一个二维平面及平面上的若干点。请找出一条直线，其通过的点的数目最多。</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#490，#519，#528，#562</p></div><h2 id="_16-15-珠玑妙算" tabindex="-1"><a class="header-anchor" href="#_16-15-珠玑妙算" aria-hidden="true">#</a> 16.15 珠玑妙算</h2><blockquote><p>珠玑妙算游戏（the game of master mind）的玩法如下。计算机有4个槽，每个槽放一个球，颜色可能是红色（R）、黄色（Y）、绿色（G）或蓝色（B）。例如，计算机可能有RGGB 4种（槽1为红色，槽2、3为绿色，槽4为蓝色）。作为用户，你试图猜出颜色组合。打个比方，你可能会猜YRGB。要是猜对某个槽的颜色，则算一次“猜中”；要是只猜对颜色但槽位猜错了，则算一次“伪猜中”。注意，“猜中”不能算入“伪猜中”。举个例子，实际颜色组合为RGBY，而你猜的是GGRR，则算一次猜中，一次伪猜中。给定一个猜测和一种颜色组合，编写一个方法，返回猜中和伪猜中的次数。</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#638，#729</p></div><h2 id="_16-16-部分排序" tabindex="-1"><a class="header-anchor" href="#_16-16-部分排序" aria-hidden="true">#</a> 16.16 部分排序</h2><blockquote><p>给定一个整数数组，编写一个函数，找出索引m和n，只要将m和n之间的元素排好序，整个数组就是有序的。注意：n-m尽量最小，也就是说，找出符合条件的最短序列。</p></blockquote><pre><code>示例：
输入：1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19
输出：(3, 9)
</code></pre><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#481，#552，#666，#707，#734，#745</p></div><h2 id="_16-17-连续数列" tabindex="-1"><a class="header-anchor" href="#_16-17-连续数列" aria-hidden="true">#</a> 16.17 连续数列</h2><blockquote><p>给定一个整数数组（有正数有负数），找出总和最大的连续数列，并返回总和。</p></blockquote><pre><code>示例：
    输入：2, -8, 3, -2, 4, -10
    输出：5（即{3, -2, 4}）
</code></pre><h2 id="_16-18-模式匹配" tabindex="-1"><a class="header-anchor" href="#_16-18-模式匹配" aria-hidden="true">#</a> 16.18 模式匹配</h2><blockquote><p>你有两个字符串，即pattern和value。pattern字符串由字母a和b组成，用于描述字符串中的模式。例如，字符串catcatgocatgo匹配模式aabab（其中cat是a，go是b）。该字符串也匹配像a、ab和b这样的模式。编写一个方法判断value字符串是否匹配pattern字符串。</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#630，#642，#652，#662，#684，#717，#726</p></div><h2 id="_16-19-水域大小" tabindex="-1"><a class="header-anchor" href="#_16-19-水域大小" aria-hidden="true">#</a> 16.19 水域大小</h2><blockquote><p>你有一个用于表示一片土地的整数矩阵，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小。</p></blockquote><pre><code>示例：
    输入：
        0 2 1 0
        0 1 0 1
        1 1 0 1
        0 1 0 1
    输出：
        2, 4, 1（任意顺序）
</code></pre><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#673，#686，#705，#722</p></div><h2 id="_16-20-t9键盘" tabindex="-1"><a class="header-anchor" href="#_16-20-t9键盘" aria-hidden="true">#</a> 16.20 T9键盘</h2><blockquote><p>在老式手机上，用户通过数字键盘输入，手机将提供与这些数字相匹配的单词列表。每个数字映射到0至4个字母。给定一个数字序列，实现一个算法来返回匹配单词的列表。你会得到一张含有有效单词的列表（存储你想要的任何数据结构）。映射如下图所示。</p></blockquote><table><thead><tr><th style="text-align:center;">1</th><th style="text-align:center;">2 (abc)</th><th style="text-align:center;">3(def)</th></tr></thead><tbody><tr><td style="text-align:center;">4 (ghi)</td><td style="text-align:center;">5 (jkl)</td><td style="text-align:center;">6 (mno)</td></tr><tr><td style="text-align:center;">7 (pqrs)</td><td style="text-align:center;">8 (tuv)</td><td style="text-align:center;">9 (wxyz)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">0</td><td style="text-align:center;"></td></tr></tbody></table><pre><code>示例：
输入：8733
输出：tree, used
</code></pre><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#470，#486，#653，#702，#725，#743</p></div><h2 id="_16-21-交换和" tabindex="-1"><a class="header-anchor" href="#_16-21-交换和" aria-hidden="true">#</a> 16.21 交换和</h2><blockquote><p>给定两个整数数组，请交换一对数值（每个数组中取一个数值），使得两个数组所有元素的和相等。</p></blockquote><pre><code>示例：
    输入：{4, 1, 2, 1, 1, 2}和{3, 6, 3, 3}
    输出：{1, 3}
</code></pre><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#544，#556，#563，#570，#582，#591，#601，#605，#634</p></div><h2 id="_16-22-兰顿蚂蚁" tabindex="-1"><a class="header-anchor" href="#_16-22-兰顿蚂蚁" aria-hidden="true">#</a> 16.22 兰顿蚂蚁</h2><blockquote><p>一只蚂蚁坐在由白色和黑色方格构成的无限网格上。开始时，网格全白，蚂蚁面向右侧。每行走一步，蚂蚁执行以下操作。(1) 如果在白色方格上，则翻转方格的颜色，向右（顺时针）转90度，并向前移动一个单位。(2) 如果在黑色方格上，则翻转方格的颜色，向左（逆时针方向）转90度，并向前移动一个单位。编写程序来模拟蚂蚁执行的前K个动作，并打印最终的网格。请注意，题目没有提供表示网格的数据结构，你需要自行设计。你编写的方法接受的唯一输入是K，你应该打印最终的网格，不需要返回任何值。方法签名类似于 <code>void printKMoves(int K)</code>。</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#473，#480，#532，#539，#558，#569，#598，#615，#626</p></div><h2 id="_16-23-rand5与rand7" tabindex="-1"><a class="header-anchor" href="#_16-23-rand5与rand7" aria-hidden="true">#</a> 16.23 Rand5与Rand7</h2><blockquote><p>给定rand5()，实现一个方法rand7()，即给定一个生成0到4（含0和4）随机数的方法，编写一个生成0到6（含0和6）随机数的方法。</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#504，#573，#636，#667，#696，#719</p></div><h2 id="_16-24-数对和" tabindex="-1"><a class="header-anchor" href="#_16-24-数对和" aria-hidden="true">#</a> 16.24 数对和</h2><blockquote><p>设计一个算法，找出数组中两数之和为指定值的所有整数对。</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#547，#596，#643，#672</p></div><h2 id="_16-25-lru缓存" tabindex="-1"><a class="header-anchor" href="#_16-25-lru缓存" aria-hidden="true">#</a> 16.25 LRU缓存</h2><blockquote><p>设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值（允许你插入和检索特定键对应的值），并在初始化时指定最大容量。当缓存被填满时，它应该删除最近最少使用的项目。</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#523，#629，#693</p></div><h2 id="_16-26-计算器" tabindex="-1"><a class="header-anchor" href="#_16-26-计算器" aria-hidden="true">#</a> 16.26 计算器</h2><blockquote><p>给定一个包含正整数、加（+）、减（-）、乘（×）、除（/）的算数表达式（括号除外），计算其结果。</p></blockquote><pre><code>示例：
    输入：2 * 3 + 5/6 * 3 + 15
    输出：23.5
</code></pre><div class="hint-container tip"><p class="hint-container-title">提示</p><p>#520，#623，#664，#697</p></div>`,76);function l(h,s){return a(),n("div",null,[o,i(" more "),c])}const b=t(d,[["render",l],["__file","0x16.mid.html.vue"]]);export{b as default};