const e=JSON.parse('{"key":"v-24f797c3","path":"/interview/book/cracking-the-coding-interview/0x16.mid.html","title":"中等难题","lang":"zh-CN","frontmatter":{"title":"中等难题","icon":"hashtag","index":true,"description":"16 - 中等难题 (26) 16.1 交换数字 编写一个函数，不用临时变量，直接交换两个数。 16.2 单词频率 设计一个方法，找出任意指定单词在一本书中的出现频率。如果我们多次使用此方法，应该怎么办？ 16.3 交点 给定两条线段（表示为起点和终点），如果它们有交点，请计算其交点。 16.4 井字游戏 设计一个算法，判断玩家是否赢了井字游戏。 16...","head":[["meta",{"property":"og:url","content":"https://naijoug.github.io/docs/docs/interview/book/cracking-the-coding-interview/0x16.mid.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"中等难题"}],["meta",{"property":"og:description","content":"16 - 中等难题 (26) 16.1 交换数字 编写一个函数，不用临时变量，直接交换两个数。 16.2 单词频率 设计一个方法，找出任意指定单词在一本书中的出现频率。如果我们多次使用此方法，应该怎么办？ 16.3 交点 给定两条线段（表示为起点和终点），如果它们有交点，请计算其交点。 16.4 井字游戏 设计一个算法，判断玩家是否赢了井字游戏。 16..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-14T10:22:09.000Z"}],["meta",{"property":"article:author","content":"naijoug"}],["meta",{"property":"article:modified_time","content":"2023-12-14T10:22:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"中等难题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-14T10:22:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"naijoug\\",\\"url\\":\\"https://github.com/naijoug\\"}]}"]]},"headers":[{"level":2,"title":"16.1 交换数字","slug":"_16-1-交换数字","link":"#_16-1-交换数字","children":[]},{"level":2,"title":"16.2 单词频率","slug":"_16-2-单词频率","link":"#_16-2-单词频率","children":[]},{"level":2,"title":"16.3 交点","slug":"_16-3-交点","link":"#_16-3-交点","children":[]},{"level":2,"title":"16.4 井字游戏","slug":"_16-4-井字游戏","link":"#_16-4-井字游戏","children":[]},{"level":2,"title":"16.5 阶乘尾数","slug":"_16-5-阶乘尾数","link":"#_16-5-阶乘尾数","children":[]},{"level":2,"title":"16.6 最小差","slug":"_16-6-最小差","link":"#_16-6-最小差","children":[]},{"level":2,"title":"16.7 最大数值","slug":"_16-7-最大数值","link":"#_16-7-最大数值","children":[]},{"level":2,"title":"16.8 整数的英语表示","slug":"_16-8-整数的英语表示","link":"#_16-8-整数的英语表示","children":[]},{"level":2,"title":"16.9 运算","slug":"_16-9-运算","link":"#_16-9-运算","children":[]},{"level":2,"title":"16.10 生存人数","slug":"_16-10-生存人数","link":"#_16-10-生存人数","children":[]},{"level":2,"title":"16.11 跳水板","slug":"_16-11-跳水板","link":"#_16-11-跳水板","children":[]},{"level":2,"title":"16.12 XML编码","slug":"_16-12-xml编码","link":"#_16-12-xml编码","children":[]},{"level":2,"title":"16.13 平分正方形","slug":"_16-13-平分正方形","link":"#_16-13-平分正方形","children":[]},{"level":2,"title":"16.14 最佳直线","slug":"_16-14-最佳直线","link":"#_16-14-最佳直线","children":[]},{"level":2,"title":"16.15 珠玑妙算","slug":"_16-15-珠玑妙算","link":"#_16-15-珠玑妙算","children":[]},{"level":2,"title":"16.16 部分排序","slug":"_16-16-部分排序","link":"#_16-16-部分排序","children":[]},{"level":2,"title":"16.17 连续数列","slug":"_16-17-连续数列","link":"#_16-17-连续数列","children":[]},{"level":2,"title":"16.18 模式匹配","slug":"_16-18-模式匹配","link":"#_16-18-模式匹配","children":[]},{"level":2,"title":"16.19 水域大小","slug":"_16-19-水域大小","link":"#_16-19-水域大小","children":[]},{"level":2,"title":"16.20 T9键盘","slug":"_16-20-t9键盘","link":"#_16-20-t9键盘","children":[]},{"level":2,"title":"16.21 交换和","slug":"_16-21-交换和","link":"#_16-21-交换和","children":[]},{"level":2,"title":"16.22 兰顿蚂蚁","slug":"_16-22-兰顿蚂蚁","link":"#_16-22-兰顿蚂蚁","children":[]},{"level":2,"title":"16.23 Rand5与Rand7","slug":"_16-23-rand5与rand7","link":"#_16-23-rand5与rand7","children":[]},{"level":2,"title":"16.24 数对和","slug":"_16-24-数对和","link":"#_16-24-数对和","children":[]},{"level":2,"title":"16.25 LRU缓存","slug":"_16-25-lru缓存","link":"#_16-25-lru缓存","children":[]},{"level":2,"title":"16.26 计算器","slug":"_16-26-计算器","link":"#_16-26-计算器","children":[]}],"git":{"createdTime":1702510819000,"updatedTime":1702549329000,"contributors":[{"name":"naijoug","email":"naijoug@outlook.com","commits":2}]},"readingTime":{"minutes":6.99,"words":2096},"filePathRelative":"interview/book/cracking-the-coding-interview/0x16.mid.md","localizedDate":"2023年12月13日","autoDesc":true}');export{e as data};
