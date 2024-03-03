import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,a as r,f as s}from"./app-uIw8b4jG.js";const l={},i=s('<h2 id="❓查找两个大文件共同的url" tabindex="-1"><a class="header-anchor" href="#❓查找两个大文件共同的url" aria-hidden="true">#</a> ❓查找两个大文件共同的URL</h2><blockquote><p>如何从 <code>100 亿</code> 个 <code>URL</code> 中找出形同的 <code>URL</code>？给定 a、b 两个文件，各存放 <strong>50 亿</strong> 个 <code>URL</code>，每个 <code>URL</code> 各占 64B，内存限制为 4G。找出 a、b 两个文件中相同的 <code>URL</code>。</p></blockquote><details class="hint-container details"><summary>💡</summary><p>先计算 <strong>100 亿</strong> 占用内存空间: 100 * 10000 * 10000 * 64B = 1000 * 1000 * 1000 * 10 * 64B ≈ 1024 * 1024 * 1024 * 640B = 640GB</p><p>可以通过哈希，分而治之的方法解决。对于这类海量数据处理问题，目标是把数据切分为较小的块，使得每一块可以读进内存进行处理。</p><p>方法步骤：</p><ul><li><p><strong>分割数据</strong>：为了在有限的内存中处理这些URL，我们可以使用哈希函数对这100亿个URL进行切分。选择一个合适的哈希函数，使得每个URL哈希后落在0-9999中。我们按照URL哈希的结果，将URL分别存放至10000个小文件中。</p></li><li><p><strong>逐块处理和比较</strong>：由于哈希函数的选择，所有出现在a和b文件中的相同URL会出现在相同编号的两个小文件中。我们只需要分别比较这10000对小文件，找出每一对小文件中相同的URL，就能找出所有的相同URL。</p></li><li><p><strong>内存排序</strong>：对于每一对小文件，我们可以现将文件读入内存，对于每个文件，使用内存中的排序算法进行排序，这样可以线性扫描两个文件，找出相同的URL。</p></li></ul><p>方法优点：对内存的需求相对较小，所以即使在内存受限的情况下也可以处理非常大的数据量。</p><p>方法缺点：比较的过程需要读写大量的临时小文件，如果数据量非常大，<code>I/O</code> 开销会很大。</p></details><h2 id="❓如何在-100-亿-数据中找到中位数" tabindex="-1"><a class="header-anchor" href="#❓如何在-100-亿-数据中找到中位数" aria-hidden="true">#</a> ❓如何在 <strong>100 亿</strong> 数据中找到中位数</h2><blockquote><p>给定 <strong>100亿</strong> 个无符号的乱序的整数序列，如何求出这 <strong>100亿</strong> 个数的中位数(中位数：排序后最中间那个数)？(内存限制 <code>512M</code>）</p></blockquote><details class="hint-container details"><summary>💡</summary><p>先计算 <strong>100 亿</strong> 数据占用内存空间: 100 * 10000 * 10000 * 4B = 1000 * 1000 * 1000 * 10 * 4B ≈ 1024 * 1024 * 1024 * 40B = 40GB</p><p>不能直接将所有数据加载到内存进行排序。</p><p>使用 “外部排序” ：</p><ul><li><p><strong>分块</strong>：首先将这 <code>100亿</code> 个无符号的乱序整数序列分成若干块，每块的大小小于或等于我们设定的内存限制。</p></li><li><p><strong>内部排序</strong>：接着对每块数据进行排序，可以采用任何一种你熟悉的排序算法对其进行排序。排序后的结果存在硬盘上的临时文件中。</p></li><li><p><strong>归并排序</strong>：该步骤处于所分的块与块之间，需要跨块进行排序的操作。通过建立最小堆，然后将各块中的最小元素输入堆，并弹出堆顶元素，然后重复上述操作，直至所有元素都入堆，这样就完成了所有块的归并排序。</p></li><li><p><strong>查找中位数</strong>：最后，对归并排序后的数据进行顺序读取，一直读取到中位数的位置就可以得到所求的中位数。</p></li></ul><p>注：以上方法仅针对不含重复数据，若数据有重复，一般可以通过使用哈希函数进行预处理，对重复的数据进行压缩以得到正确的中位数。</p></details><h2 id="❓如何排序-10g-的数字文件" tabindex="-1"><a class="header-anchor" href="#❓如何排序-10g-的数字文件" aria-hidden="true">#</a> ❓如何排序 <strong>10G</strong> 的数字文件</h2><blockquote><p>有一个 <strong>10G</strong> 的文件里面每一行都有数字，对这些数字进行排序?</p></blockquote><details class="hint-container details"><summary>💡</summary><p>可以通过对数据进行切片，并使用外部排序方法进行处理。利用这种分而治之的思想，就可以完成对海量数据的排序操作。</p><p>具体步骤：</p><ul><li><p><strong>切片(Split)</strong>：将这个大文件通过一种哈希规则分割到多个小文件中，每个小文件的大小可以使得单个小文件能装入内存中。</p></li><li><p><strong>内部排序(Sort)</strong>：用内部排序算法（如快速排序，归并排序，堆排序等）将这些小文件分别进行排序。</p></li><li><p><strong>合并(Merge)</strong>：将内部排序后的小文件组合并成为一个有序的大文件。可以通过堆排序或者归并排序算法的思想，将多文件之间互相进行比较，并把最小的数据取至新的大文件中。</p></li><li><p><strong>重复步骤</strong>：重复步骤2和步骤3，直到得到一个完全有序的大文件。</p></li></ul></details><h2 id="❓统计不同号码的个数" tabindex="-1"><a class="header-anchor" href="#❓统计不同号码的个数" aria-hidden="true">#</a> ❓统计不同号码的个数</h2><blockquote><p>已知某个文件内包含大量电话号码，每个号码为 8 位数字，如何统计不同号码的个数？(内存限制 <code>100M</code>)</p></blockquote><details class="hint-container details"><summary>💡</summary><p>关键思路是通过一些方法将数据分布在不同的桶中，这样每个桶内的数据量就会小很多。当某个桶的数据量仍然过大无法一次性加载入内存时，可以对该桶继续使用该算法进行划分处理，直到可以放入内存为止。</p><p>具体步骤：</p><ul><li><p><strong>哈希映射</strong>：将电话号码通过哈希映射分配到不同的桶中。</p><blockquote><p>例如，可以创建 256 个桶，然后将电话号码进行哈希映射，将哈希值对 256 取模得到结果 r，就将这个电话号码存放到编号为 r 的桶中。</p></blockquote></li><li><p><strong>统计各个桶内的电话号码数量</strong>：然后我们逐个处理各个桶，由于桶的数量多，所以每个桶内的电话号码数量就少很多，可能就能够放入内存。那么可以通过散列、排序等方式进行无重复电话号码的统计。</p></li><li><p><strong>汇总</strong>：最后将各个桶内的结果汇总，即可得到不同电话号码的总数量。</p></li></ul></details><h2 id="❓如何找出排名前-500-的数" tabindex="-1"><a class="header-anchor" href="#❓如何找出排名前-500-的数" aria-hidden="true">#</a> ❓如何找出排名前 500 的数</h2><blockquote><p>有 1w 个数组，每个数组有 500 个元素，并且有序排列。如何在这 10000*500 个数中找出前 500 的数？</p></blockquote><details class="hint-container details"><summary>💡</summary><p>这是一个典型的堆排序问题。这个算法的效率主要取决于堆的操作，时间复杂度将为O(500*log10000)，在可以接受的范围内。</p><p>具体步骤：</p><ul><li><p><strong>建立小顶堆</strong>：由于每个数组内部的数字已经有序排列了，我们首先从每个数组中取出第一个元素（也就是最小的元素），然后用这些元素建立一个大小为 10000 的小顶堆(<code>minHeap</code>)。这个堆顶元素就是所有数组中最小的元素。</p></li><li><p><strong>替换堆顶元素</strong>：然后将堆顶元素放入结果数组，再从该元素在原数组中的位置向后取下一个元素放入堆中，调整堆使之继续保持小顶堆的性质。</p></li><li><p><strong>重复操作</strong>：重复第 2 步操作，每次都会从堆中取出当前 10000 个数中最小的元素放入结果数组中，直至取满 500 个元素。</p></li><li><p><strong>取出结果</strong>：此时的结果数组中存放的就是整体上 500 个最小的数。</p></li></ul></details><h2 id="❓如何按照-query-的频度排序" tabindex="-1"><a class="header-anchor" href="#❓如何按照-query-的频度排序" aria-hidden="true">#</a> ❓如何按照 query 的频度排序</h2><blockquote><p>有 10 个文件，每个文件大小为 1G，每个文件的每一行存放的都是用户的 query，每个文件的 query 都可能重复。要求按照 query 的频度排序。</p></blockquote><details class="hint-container details"><summary>💡</summary><p>大数据的处理，可以利用 <code>MapReduce</code> 思想做分布式处理。</p><p>具体步骤：</p><ul><li><p><strong>Map 阶段</strong>：在这个阶段，需要读取 10 个 1G 的文件，然后对每个文件进行查询串的统计。可以将每个文件的处理任务分配给一个单独的机器（如果只有一台机器，那么就分时间段处理）。每行数据被读入进行 <code>map</code> 操作，<code>map</code> 的结果是一个 <code>key-value</code> 对，其中 <code>key</code> 是 <code>query</code>，<code>value</code> 是出现的次数 1，得到 <code>&lt;query, 1&gt;</code> 这样的键值对。</p></li><li><p><strong>Combiner 阶段</strong>：在每个机器上，对 <code>map</code> 的过程得到的结果进行局部汇总，得到每个 <code>query</code> 在这个文件中出现的频度，结果是 <code>&lt;query, frequency&gt;</code>。</p></li><li><p><strong>Reduce阶段</strong>：将上一步所有机器的处理结果汇总。对所有的 <code>key</code> 值(<code>query</code>)相同的 <code>value</code> 值(<code>frequency</code>)进行累加，得到每个 <code>query</code> 在所有文件中总的出现次数。</p></li><li><p><strong>排序</strong>：将上一步得到的结果按照频度进行排序，得到频度最高的 <code>query</code>。</p></li></ul></details><h2 id="❓如何查询最热门的查询串" tabindex="-1"><a class="header-anchor" href="#❓如何查询最热门的查询串" aria-hidden="true">#</a> ❓如何查询最热门的查询串</h2><blockquote><p>搜索引擎会通过日志文件把用户每次检索使用的所有查询串都记录下来，每个查询床的长度不超过 255 字节。 假设目前有 1000w 个记录（这些查询串的重复度比较高，虽然总数是 1000w，但如果除去重复后，则不超过 300w 个）。 请统计最热门的 10 个查询串，要求使用的内存不能超过 1G。（一个查询串的重复度越高，说明查询它的用户越多，也就越热门。）</p></blockquote><details class="hint-container details"><summary>💡</summary><p>这是一个Top-K问题。由于限制了内存为1G，因此不能将所有数据都读到内存中来处理。这就需要用到 <code>分治+哈希+堆</code> 的思路来解决这个问题。</p><p>具体步骤：</p><ul><li><p><strong>分块和哈希映射</strong>：首先，将1000万个记录分块处理，每块能够在内存限制下处理。然后使用哈希函数，将查询串按照哈希值分组，将在一定范围内的哈希值的查询串映射到同一块。</p></li><li><p><strong>内存计数</strong>：对于每一块，读取每个查询串，并在内存中维护一个哈希表来进行计数，记录每个查询串出现的频次。</p></li><li><p><strong>建立小顶堆</strong>：维护一个大小为10（对应Top 10）的小顶堆。在处理每一块完后，将哈希表中的频次与小顶堆的根节点（堆中频次最小的查询串）对比，如果频次更高，就替换根节点，并调整堆。重复这个过程，直到所有的块都被处理完。</p></li><li><p><strong>提取Top10</strong>：小顶堆中的10个查询串就是整个搜索日志中频次最高的10个查询串。</p></li></ul><p>注意：如果某一块的数据仍然超过了内存大小，可以通过调整哈希函数，将这一块细分为更小的块。</p></details><h2 id="❓出现频率最高的-100-个词" tabindex="-1"><a class="header-anchor" href="#❓出现频率最高的-100-个词" aria-hidden="true">#</a> ❓出现频率最高的 100 个词</h2><blockquote><p>假如有一个 <strong>1G</strong> 大小的文件，文件里每一行是一个词，每个词的大小不超过 <code>16 byte</code>，要求返回出现频率最高的 100 个词。(内存大小限制是 <code>10M</code>)</p></blockquote><details class="hint-container details"><summary>💡</summary><p>这是一个经典的 <code>Top-K</code> 问题，<code>Top-K</code> 问题即返回数据集中出现频率最高的 K 项。对于这个问题，可能内存很难将所有的数据一次性加载进来，所以我们需要分而治之。</p><p>具体步骤：</p><ul><li><p><strong>哈希映射</strong>：可以使用哈希函数，将词按照哈希值分配到不同的桶里。假设我们有 1000 个桶，那么每个桶大概有 1M 的大小，这样每个桶都可以装进内存。</p></li><li><p><strong>统计词频</strong>：然后逐个读取这 1000 个桶，对每个桶里边的词，可以构建一个词典，词典的 <code>key</code> 是词本身，<code>value</code> 是词的出现次数，每读取一个词，就将对应的 <code>value</code> 值加一以统计词频。同时保持一个大小为 100 的小顶堆，如果读取的单词数量大于 <code>100</code>，就把它和堆顶的词频进行比较，如果比堆顶的词频大，就把堆顶的元素替换掉。</p></li><li><p><strong>汇总词频</strong>：最后会有 1000 个大小为 100 的小顶堆，再把这 1000 个堆汇总，方法与步骤2类似，保持一个大小为 100 的小顶堆，遍历 1000 个堆中的每一个词，然后和目前小顶堆的堆顶单词进行频率比较，如果比堆顶的词频大，就把堆顶的元素替换掉。</p></li></ul></details><h2 id="❓topk-问题" tabindex="-1"><a class="header-anchor" href="#❓topk-问题" aria-hidden="true">#</a> ❓<code>TopK</code> 问题</h2><ul><li>100 个整形数字，找出最大的 10 个</li><li><strong>10 亿</strong> 个整形数字，找出最大的 10 个(可以无序)</li><li><strong>10 亿</strong> 个整形数字，找出最大的 10 个(依次排序)</li><li><strong>10 亿</strong> 个不重复的整形数字，找出最大的 10 个</li><li>10 个数组，每个数组中有 <strong>1 亿</strong> 个整形数字，找出最大的 10 个</li><li><strong>10 亿</strong> 个字符串类型的数字，找出最大的 10 个(单次查询)</li><li><strong>10 亿</strong> 个字符串类型的数字，找出最大的 k 个 (多次查询，每次查询 k 值随机)</li></ul><details class="hint-container details"><summary>💡</summary><ul><li><p><strong>100个整形数字，找出最大的10个</strong>：这个问题可以使用一个堆（优先队列）来解决。我们可以建立一个大小为10的小顶堆。然后遍历这100个整数，对于每一个数字，如果堆中元素个数不满10，就加入到堆中；如果堆中个数已满，并且该数字大于堆顶的数字，就替换堆顶元素，并调整堆。这样遍历完这100个数后，堆中剩下的就是最大的10个数了。</p></li><li><p><strong>10亿个整形数字，找出最大的10个（可以无序）</strong>：根据上一问，现在改变的只是数字个数，我们依然可以使用大小为10的小顶堆来处理，时间复杂度为O(nlogk)。当然，这对于大数据来说，内存是无法全部装下的，所以我们需要借助外部存储，分而治之，将这10亿个数分成小份，每份进行上述操作，然后再将结果进行合并。</p></li><li><p><strong>10亿个整形数字，找出最大的10个（依次排序）</strong>：还是利用小顶堆，得到最大的10个数后，我们需要将十个数进行排序，这可以利用一种现成的排序算法，如快速排序等。</p></li><li><p><strong>10亿个不重复的整形数字，找出最大的10个</strong>：方法仍与前面相同，使用大小为10的小顶堆，由于题目已经保证了所有的数字不重复，所以我们不用去做重复检查。</p></li><li><p><strong>10个数组，每个数组中有1亿个整形数字，找出最大的10个</strong>：这可以理解为是合并多个有序数组，并找出其中最大的10个数，所以我们可以利用一个小顶堆，大小为数组的个数即10，然后每次从堆顶选出最小的元素放入结果数组，再从该元素所在的数组中取出一个元素放入堆中，直到堆为空为止。</p></li><li><p><strong>10亿个字符串类型的数字，找出最大的10个（单次查询）</strong>：由于字符串能够比较大小，因此我们所需要做的就是将字符串转化为数字进行处理，其他的和处理整形数一样，依然是用小顶堆+分别治之的方式来处理。</p></li><li><p><strong>10亿个字符串类型的数字，找出最大的k个 （多次查询，每次查询k值随机）</strong>：还是先转化为数字进行处理，由于k值随机，我们可能需要维护一个大顶堆，每次查找k个最大的数时，动态的将堆的size进行调节然后重新生成堆，或者我们可以采用每次查询都全新生成一个大小为k的小顶堆进行查找。</p></li></ul></details>',27);function n(a,d){return e(),t("div",null,[r(" more "),i])}const g=o(l,[["render",n],["__file","0x03.big-data.html.vue"]]);export{g as default};
