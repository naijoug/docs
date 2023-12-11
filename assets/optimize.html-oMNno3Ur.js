import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,a as r,f as d}from"./app-KOLbvikU.js";const h={},l=d('<h2 id="优化你一般从哪几方面着手" tabindex="-1"><a class="header-anchor" href="#优化你一般从哪几方面着手" aria-hidden="true">#</a> 优化你一般从哪几方面着手？</h2><h2 id="uitableview-优化方案" tabindex="-1"><a class="header-anchor" href="#uitableview-优化方案" aria-hidden="true">#</a> <code>UITableView</code> 优化方案</h2><ul><li>最核心的优化其实苹果已经帮我们做了 <code>Cell</code> 的复用机制。</li><li>对于不等高 Cell，缓存 Cell 高度应该基本操作，还可以配合高度预先计算一起使用。</li><li>Cell 内部的优化，就是比较通用的视图优化，图片圆角处理等。</li><li>滚动过程中，如果涉及 Cell 中数据刷新，比如图片下载，或者定时器刷新数据等。需要根据是否出现在屏幕中，进行网络请求的暂停，定时器的暂停等。</li></ul><h2 id="ios-启动优化方案" tabindex="-1"><a class="header-anchor" href="#ios-启动优化方案" aria-hidden="true">#</a> iOS 启动优化方案</h2><h2 id="ios-如何检测卡顿" tabindex="-1"><a class="header-anchor" href="#ios-如何检测卡顿" aria-hidden="true">#</a> iOS 如何检测卡顿</h2><h2 id="ios-界面卡顿优化方案" tabindex="-1"><a class="header-anchor" href="#ios-界面卡顿优化方案" aria-hidden="true">#</a> iOS 界面卡顿优化方案</h2><h2 id="安装包体积优化方案" tabindex="-1"><a class="header-anchor" href="#安装包体积优化方案" aria-hidden="true">#</a> 安装包体积优化方案</h2>',7);function o(t,c){return a(),i("div",null,[r(" more "),l])}const f=e(h,[["render",o],["__file","optimize.html.vue"]]);export{f as default};
