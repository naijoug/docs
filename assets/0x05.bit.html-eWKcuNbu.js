import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as h,c as e,f as l}from"./app-b_rSVNxV.js";const o={},a=l('<h2 id="_5-位操作-8" tabindex="-1"><a class="header-anchor" href="#_5-位操作-8" aria-hidden="true">#</a> 5 位操作 (8)</h2><ul><li><p>5.1 二进制插入</p><blockquote><p>给定两个 32 位的整数 N 和 M，以及标识比特位置的 i 与 j。编写一个方法，将 M 插入 N，使得 M 从 N 的第 j 位开始，到第 i 位结束。假设从 j 位到 i 位足以容纳 M，也即若 M=10011，那么 j 和 i 之间至少可容纳 5 个位。例如，不可能出现 j = 3 和 i = 2 的情况，因为第 3 位和第 2 位之间放不下 M。 示例 输入: N = 10000000000, M = 10011, i = 2, j = 6 输出: N = 10001001100</p></blockquote><table><thead><tr><th>解法</th><th>空间复杂度</th><th>时间复杂度</th><th>思路</th></tr></thead></table></li><li><p>5.2 二进制小数</p><blockquote><p>给定一个介于 0 和 1 之间的实数(如 0.72)，类型为 double，打印它的二进制表示。如果该数字无法精确地用32位以内的二进制表示，则打印 &quot;ERROR&quot;。</p></blockquote><table><thead><tr><th>解法</th><th>空间复杂度</th><th>时间复杂度</th><th>思路</th></tr></thead></table></li><li><p>5.3 最接近的数</p><blockquote><p>给定一个正整数，找出与其二进制表示中 1 的个数相同、且大小最接近的那两个数(一个略大，一个略小)。</p></blockquote><table><thead><tr><th>解法</th><th>空间复杂度</th><th>时间复杂度</th><th>思路</th></tr></thead></table></li><li><p>5.4 解释代码<code>((n &amp; (n-1)) == 0)</code>的具体含义</p></li><li><p>5.5 整数转化</p><blockquote><p>编写一个函数，确定需要改变几个位，才能将整数 A 转成整数 B。 示例 输入: 31, 14 输出: 2</p></blockquote><table><thead><tr><th>解法</th><th>空间复杂度</th><th>时间复杂度</th><th>思路</th></tr></thead></table></li><li><p>5.6 奇偶位交换</p><blockquote><p>编写程序，交换某个整数的奇数位和偶数位，使用指令越少越好(也就是说，位 0 与 位 1 交换，位 2 与位 3 交换，依次类推)。</p></blockquote><table><thead><tr><th>解法</th><th>空间复杂度</th><th>时间复杂度</th><th>思路</th></tr></thead></table></li><li><p>5.7 找出缺失的整数</p><blockquote><p>数组 A 包含 0 到 n 的所有整数，但其中缺了一个。在这个问题中，只用一次操作无法取得数组 A 里某个整数的完整内容。此外数组 A 的元素皆以二进制表示，唯一可用的访问操作是 &quot;从 A[i] 取出第 j 位数据&quot;，该操作的时间复杂度为常数。请编写代码找出那个缺少的整数。你有办法在 O(n) 时间内完成吗?</p></blockquote><table><thead><tr><th>解法</th><th>空间复杂度</th><th>时间复杂度</th><th>思路</th></tr></thead></table></li><li><p>5.8 像素设定</p><blockquote><p>有个单色屏幕存储在一个一维字节数组中，使得 8 个连续像素可以存放在一个字节里。屏幕宽度为 w，且 w 可被 8 整除 (即一个字节不会分布在两行上)，屏幕高度可由数组长度及屏幕宽度推算得出。请事先一个函数<code>drawHorizontalLine(byte[] screen, int width, int x1, int x2, int y)</code>，绘制从点 (x1, y) 到点 (x2, y) 的水平线。</p></blockquote><table><thead><tr><th>解法</th><th>空间复杂度</th><th>时间复杂度</th><th>思路</th></tr></thead></table></li></ul>',2),i=[a];function c(p,r){return h(),e("div",null,i)}const n=t(o,[["render",c],["__file","0x05.bit.html.vue"]]);export{n as default};
