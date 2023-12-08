import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,a as e,b as n,f as p}from"./app-4FjOShZC.js";const o={},c=n("blockquote",null,[n("p",null,"排序 : 对一组数据按照一定地条件进行有顺序的排列。")],-1),i=p(`<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> concept</h2><h3 id="衡量指标" tabindex="-1"><a class="header-anchor" href="#衡量指标" aria-hidden="true">#</a> 衡量指标</h3><p>三个衡量指标</p><ul><li>时间复杂度</li><li>空间复杂度(原地排序 - 在原数组进行数据调整，不需要借助额外数组空间)</li><li>排序的稳定性(稳定排序 - 相同的元素排序前后相对位置不发生变化)</li></ul><h3 id="有序度" tabindex="-1"><a class="header-anchor" href="#有序度" aria-hidden="true">#</a> 有序度</h3><p>有序度 : 数组中的数据已经有序的元素的个数 满有序度 : 完全有序的数组的有序度 逆序度 : 数组中的数据与排序方向相反顺序排序的元素的个数</p><p>逆序度 = 满有序度 - 逆序度</p><h2 id="排序算法一览" tabindex="-1"><a class="header-anchor" href="#排序算法一览" aria-hidden="true">#</a> 排序算法一览</h2><table><thead><tr><th>排序算法</th><th>时间复杂度</th><th>空间复杂度</th><th>稳定性</th></tr></thead><tbody><tr><td>冒泡排序</td><td>O(n²)</td><td>O(1)</td><td>✅</td></tr><tr><td>选择排序</td><td>O(n²)</td><td>O(1)</td><td>✅</td></tr><tr><td>插入排序</td><td>O(n²)</td><td>O(1)</td><td>✅</td></tr><tr><td>快速排序</td><td>O(nlogn)</td><td>O(1)</td><td>✅</td></tr><tr><td>归并排序</td><td>O(nlogn)</td><td>O(1)</td><td>✅</td></tr><tr><td>希尔排序</td><td>O(n²)</td><td>O(1)</td><td>✅</td></tr><tr><td>堆排序</td><td>O(n²)</td><td>O(1)</td><td>✅</td></tr><tr><td>计数排序</td><td>O(n)</td><td>O(n)</td><td>✅</td></tr></tbody></table><h2 id="比较排序" tabindex="-1"><a class="header-anchor" href="#比较排序" aria-hidden="true">#</a> 比较排序</h2><p>需要对数组中的两个元素按照某种条件进行比较</p><h3 id="交换排序" tabindex="-1"><a class="header-anchor" href="#交换排序" aria-hidden="true">#</a> 交换排序</h3><p>比较之后，将两个元素进行交换操作。</p><h4 id="bubble-sort-冒泡排序" tabindex="-1"><a class="header-anchor" href="#bubble-sort-冒泡排序" aria-hidden="true">#</a> <code>Bubble Sort</code> - “冒泡排序”</h4><p>核心操作 : 比较 + 交换</p><p>比较 : 每次比较相邻的两个元素</p><p>交换 : 按照排序要求看看是否需要进行两个元素交换。每一轮遍历完，会有一个已排序的元素浮上来。所以叫形象的将这种排序叫做“冒泡排序”，根据排序顺序不同，又可以分为“大冒泡”和“小冒泡”。</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">bubbleSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> nums <span class="token operator">=</span> nums
    <span class="token keyword">let</span> count <span class="token operator">=</span> nums<span class="token punctuation">.</span>count
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token operator">..&lt;</span>count <span class="token punctuation">{</span>
      <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">0</span><span class="token operator">..&lt;</span><span class="token punctuation">(</span>count <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 每次比较交换两个元素</span>
        <span class="token keyword">guard</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">continue</span> <span class="token punctuation">}</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
        nums<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="quick-sort-快速排序" tabindex="-1"><a class="header-anchor" href="#quick-sort-快速排序" aria-hidden="true">#</a> <code>Quick Sort</code> - “快速排序”</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">quickSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h3><p>比较之后，将数据插入到指定的有序位置，其它未排序的数据往后移。</p><h4 id="insertion-sort-简单插入排序" tabindex="-1"><a class="header-anchor" href="#insertion-sort-简单插入排序" aria-hidden="true">#</a> <code>Insertion Sort</code> - “简单插入排序”</h4><p>核心操作 : 比较 + 插入</p><p>比较 : 每次选择无序部分的的第一个元素，然后与有序部分进行比较查找到需要插入的有序位置 插入 : 将需要插入位置后面的元素往后移动，将需要插入的元素插入到有序的位置</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">insertionSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> nums <span class="token operator">=</span> nums
    <span class="token keyword">let</span> count <span class="token operator">=</span> nums<span class="token punctuation">.</span>count
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token operator">..&lt;</span>count <span class="token punctuation">{</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">0</span><span class="token operator">..&lt;</span>i <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nums
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="shell-sort-希尔排序" tabindex="-1"><a class="header-anchor" href="#shell-sort-希尔排序" aria-hidden="true">#</a> <code>Shell Sort</code> - “希尔排序”</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">shellSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h3><p>每次遍历选择</p><h4 id="selection-sort-简单选择排序" tabindex="-1"><a class="header-anchor" href="#selection-sort-简单选择排序" aria-hidden="true">#</a> <code>Selection Sort</code> - “简单选择排序”</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">selectionSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="heap-sort-堆排序" tabindex="-1"><a class="header-anchor" href="#heap-sort-堆排序" aria-hidden="true">#</a> <code>Heap Sort</code> - “堆排序”</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">heapSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h3><p>将数组进行递归分割成子数组，将子数组进行合并排序，最终形成有序数组。</p><h4 id="binary-merge-sort-二路归并排序" tabindex="-1"><a class="header-anchor" href="#binary-merge-sort-二路归并排序" aria-hidden="true">#</a> <code>Binary Merge Sort</code> - “二路归并排序”</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">mergeSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
       
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="multi-merge-sort-多路归并排序" tabindex="-1"><a class="header-anchor" href="#multi-merge-sort-多路归并排序" aria-hidden="true">#</a> <code>Multi Merge Sort</code> - “多路归并排序”</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">multiMergeSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="非比较排序" tabindex="-1"><a class="header-anchor" href="#非比较排序" aria-hidden="true">#</a> 非比较排序</h2><p>排序的过程中，不涉及元素之间的比较，而是利用的数据特性进行巧妙排序。</p><h3 id="桶排序" tabindex="-1"><a class="header-anchor" href="#桶排序" aria-hidden="true">#</a> 桶排序</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">bucketSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="counting-sort-计数排序" tabindex="-1"><a class="header-anchor" href="#counting-sort-计数排序" aria-hidden="true">#</a> <code>Counting Sort</code> - “计数排序”</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">countingSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="radix-sort-基数排序" tabindex="-1"><a class="header-anchor" href="#radix-sort-基数排序" aria-hidden="true">#</a> <code>Radix Sort</code> - “基数排序”</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">radixSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="还有什么排序算法吗" tabindex="-1"><a class="header-anchor" href="#还有什么排序算法吗" aria-hidden="true">#</a> 还有什么排序算法吗？</h2><h3 id="monkey-sort-猴子排序" tabindex="-1"><a class="header-anchor" href="#monkey-sort-猴子排序" aria-hidden="true">#</a> <code>Monkey Sort</code> - “猴子排序”</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">monkeySort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sleep-sort-睡眠排序" tabindex="-1"><a class="header-anchor" href="#sleep-sort-睡眠排序" aria-hidden="true">#</a> <code>Sleep Sort</code> - “睡眠排序”</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">sleepSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="noodle-sort-面条排序" tabindex="-1"><a class="header-anchor" href="#noodle-sort-面条排序" aria-hidden="true">#</a> <code>Noodle Sort</code> - “面条排序”</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">noodleSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55);function l(u,d){return a(),t("div",null,[c,e(" more "),i])}const m=s(o,[["render",l],["__file","sort.html.vue"]]);export{m as default};
