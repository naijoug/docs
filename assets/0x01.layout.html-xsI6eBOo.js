import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as s,f as t}from"./app-LRXv-RhI.js";const i={},c=t(`<h2 id="渲染对象组件" tabindex="-1"><a class="header-anchor" href="#渲染对象组件" aria-hidden="true">#</a> 渲染对象组件</h2><h3 id="widget" tabindex="-1"><a class="header-anchor" href="#widget" aria-hidden="true">#</a> Widget</h3><blockquote><p>抽象类</p></blockquote><h3 id="renderobjectwidget" tabindex="-1"><a class="header-anchor" href="#renderobjectwidget" aria-hidden="true">#</a> RenderObjectWidget</h3><blockquote><p>抽象类，继承于 <code>Widget</code></p></blockquote><h3 id="singlechildrenderobjectwidget" tabindex="-1"><a class="header-anchor" href="#singlechildrenderobjectwidget" aria-hidden="true">#</a> SingleChildRenderObjectWidget</h3><blockquote><p>抽象类，继承于 <code>RenderObjectWidget</code> 用于渲染单个子组件</p></blockquote><h3 id="multichildrenderobjectwidget" tabindex="-1"><a class="header-anchor" href="#multichildrenderobjectwidget" aria-hidden="true">#</a> MultiChildRenderObjectWidget</h3><blockquote><p>抽象类，继承于 <code>RenderObjectWidget</code> 用于渲染多个子组件</p></blockquote><h2 id="弹性布局" tabindex="-1"><a class="header-anchor" href="#弹性布局" aria-hidden="true">#</a> 弹性布局</h2><h3 id="flex-弹性" tabindex="-1"><a class="header-anchor" href="#flex-弹性" aria-hidden="true">#</a> Flex - “弹性”</h3><blockquote><p><code>MultiChildRenderObjectWidget</code> 实现类</p></blockquote><ul><li>direction : 主轴方向</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 等同于 Row</span>
<span class="token class-name">Flex</span><span class="token punctuation">(</span>
  direction<span class="token punctuation">:</span> <span class="token class-name">Axis</span><span class="token punctuation">.</span>horizontal<span class="token punctuation">,</span> <span class="token comment">// 横向</span>
  children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">// 等同于 Column</span>
<span class="token class-name">Flex</span><span class="token punctuation">(</span>
  direction<span class="token punctuation">:</span> <span class="token class-name">Axis</span><span class="token punctuation">.</span>vertical<span class="token punctuation">,</span> <span class="token comment">// 竖向</span>
  children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="row-行" tabindex="-1"><a class="header-anchor" href="#row-行" aria-hidden="true">#</a> Row - “行”</h3><blockquote><p>继承于 <code>Flex</code> X 轴 : 水平布局</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Row</span><span class="token punctuation">(</span>
  children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="column-列" tabindex="-1"><a class="header-anchor" href="#column-列" aria-hidden="true">#</a> Column - “列”</h3><blockquote><p>继承于 <code>Flex</code> Y 轴 : 垂直布局</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Column</span><span class="token punctuation">(</span>
  children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wrap-可换行" tabindex="-1"><a class="header-anchor" href="#wrap-可换行" aria-hidden="true">#</a> Wrap - “可换行”</h3><blockquote><p>从左往右，从上往下，的顺序依次布局 先 <code>Row</code> 再 <code>Column</code></p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="flexible-有弹性的" tabindex="-1"><a class="header-anchor" href="#flexible-有弹性的" aria-hidden="true">#</a> Flexible - “有弹性的”</h3><blockquote><p>控制子组件按照弹性规则布局</p></blockquote><ul><li>flex : 弹性系数</li><li>fit : 适配规则 (FlexFit)</li></ul><blockquote><p>FlexFit</p></blockquote><ul><li>tight : 收紧</li><li>loose : 宽松</li></ul><h3 id="expaneded-扩展" tabindex="-1"><a class="header-anchor" href="#expaneded-扩展" aria-hidden="true">#</a> Expaneded - “扩展”</h3><blockquote><p>继承于 <code>Flexible</code>，扩展填满可用区域</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Expanded</span><span class="token punctuation">(</span>
  child<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spacer-间隔" tabindex="-1"><a class="header-anchor" href="#spacer-间隔" aria-hidden="true">#</a> Spacer - “间隔”</h3><blockquote><p>用于在弹性布局中添加间隔</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// </span>
<span class="token class-name">Flex</span><span class="token punctuation">(</span>
  children<span class="token punctuation">:</span><span class="token punctuation">[</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;one&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>本质 : <code>Expanded</code> + <code>SizedBox</code> 组合实现</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token metadata function">@override</span>
<span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token class-name">Expanded</span><span class="token punctuation">(</span>
    flex<span class="token punctuation">:</span> flex<span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">.</span><span class="token function">shrink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="层叠布局" tabindex="-1"><a class="header-anchor" href="#层叠布局" aria-hidden="true">#</a> 层叠布局</h2><h3 id="stack-栈" tabindex="-1"><a class="header-anchor" href="#stack-栈" aria-hidden="true">#</a> Stack - “栈”</h3><blockquote><p><code>MultiChildRenderObjectWidget</code> 实现类 Z 轴 : 层叠布局</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="indexedstack-索引栈" tabindex="-1"><a class="header-anchor" href="#indexedstack-索引栈" aria-hidden="true">#</a> IndexedStack - “索引栈”</h3><blockquote><p>内部实现类 <code>_RawIndexedStack</code> 继承于 <code>Stack</code> 显示栈内指定索引组件</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">IndexedStack</span><span class="token punctuation">(</span>
  index<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 显示栈内索引为 1 的组件</span>
  children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token class-name">Center</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;stack 0&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Center</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;stack 1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Center</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;stack 2&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="positioned-位置组件-用于控制子组件在栈中的位置" tabindex="-1"><a class="header-anchor" href="#positioned-位置组件-用于控制子组件在栈中的位置" aria-hidden="true">#</a> Positioned : 位置组件，用于控制子组件在栈中的位置</h3><ul><li>top、bottom、left、right</li><li>width、height</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="动态布局" tabindex="-1"><a class="header-anchor" href="#动态布局" aria-hidden="true">#</a> 动态布局</h2><h3 id="flow-流动" tabindex="-1"><a class="header-anchor" href="#flow-流动" aria-hidden="true">#</a> Flow - “流动”</h3><ul><li>delegate : 代理 (FlowDelegate)，通过代理控制布局</li></ul><blockquote><p>FlowDelegate : 流动代理，通过继承该类实现自定义布局</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="单子组件" tabindex="-1"><a class="header-anchor" href="#单子组件" aria-hidden="true">#</a> 单子组件</h2><h3 id="container-容器" tabindex="-1"><a class="header-anchor" href="#container-容器" aria-hidden="true">#</a> Container - “容器”</h3><blockquote><p>大融合容器(尺寸、形状、颜色、间距...) 尺寸规则 : 无子组件，填充父组件；有子组件，包裹子组件。</p></blockquote><ul><li>width : 容器宽度</li><li>height : 容器高度</li><li>color : 容器背景色</li><li>alignment : 子组件对齐方式</li><li>margin : 外边距</li><li>padding : 内边距 (通过 <code>Padding</code> 组件实现)</li><li>constraints : 约束</li><li>decoration : 装饰器 (通过 <code>DecoratedBox</code> 组件实现)</li><li>foregroundDecoration : 前景装饰器 (通过 <code>DecoratedBox</code> 组件实现)</li><li>clipBehavior : 裁剪</li><li>transform : 形变</li></ul><h3 id="placeholder-占位符" tabindex="-1"><a class="header-anchor" href="#placeholder-占位符" aria-hidden="true">#</a> Placeholder - “占位符”</h3><blockquote><p>用于 todo 功能的占位展示</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="对齐" tabindex="-1"><a class="header-anchor" href="#对齐" aria-hidden="true">#</a> 对齐</h2><h3 id="align-对齐" tabindex="-1"><a class="header-anchor" href="#align-对齐" aria-hidden="true">#</a> Align - “对齐”</h3><blockquote><p>控制子组件的对齐方式</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="center-居中" tabindex="-1"><a class="header-anchor" href="#center-居中" aria-hidden="true">#</a> Center - “居中”</h3><blockquote><p>继承于 <code>Align</code>，居中对齐 (语法糖，提高可读性和使用便利性)</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="padding-内间距" tabindex="-1"><a class="header-anchor" href="#padding-内间距" aria-hidden="true">#</a> Padding - “内间距”</h3><blockquote><p>与子组件添加内间距</p></blockquote><ul><li>padding : 内间距 (EdgeInsetsGeometry)</li></ul><blockquote><p>EdgeInsetsGeometry : 抽象类</p></blockquote><ul><li>EdgeInsets</li><li>EdgeInsetsDirectional</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Padding</span><span class="token punctuation">(</span>
  padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 上下左右 均为 10 的间距 </span>
  child<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token comment">// 子组件</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="safearea-安全区域" tabindex="-1"><a class="header-anchor" href="#safearea-安全区域" aria-hidden="true">#</a> SafeArea - “安全区域”</h3><blockquote><p>用于控制子组件在安全区域内显示 本质上是根据手机设备添加一定的上下间距</p></blockquote><ul><li>minimun : 最小间距</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">SafeArea</span><span class="token punctuation">(</span>
  child<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token comment">// 子组件</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mediaquery-媒体查询" tabindex="-1"><a class="header-anchor" href="#mediaquery-媒体查询" aria-hidden="true">#</a> MediaQuery - “媒体查询”</h3><blockquote><p>用户获取设备信息 实现原理 : 通过 <code>InheritedWidget</code> 继承链实现</p></blockquote><ul><li>size : 获取设备尺寸</li><li>orientation : 设备横竖屏状态 (portrait | landscape)</li><li>devicePixelRatio : 屏幕像素密度</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 获取设备宽高</span>
<span class="token keyword">final</span> size <span class="token operator">=</span> <span class="token class-name">MediaQuery</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span>
<span class="token keyword">final</span> screenWidth <span class="token operator">=</span> size<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
<span class="token keyword">final</span> screenHeight <span class="token operator">=</span> size<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intrinsicwidth-真实宽度" tabindex="-1"><a class="header-anchor" href="#intrinsicwidth-真实宽度" aria-hidden="true">#</a> IntrinsicWidth - “真实宽度”</h3><h3 id="intrinsicheight-真实宽度" tabindex="-1"><a class="header-anchor" href="#intrinsicheight-真实宽度" aria-hidden="true">#</a> IntrinsicHeight - “真实宽度”</h3><h3 id="preferredsize" tabindex="-1"><a class="header-anchor" href="#preferredsize" aria-hidden="true">#</a> PreferredSize - “”</h3><div class="language-dar line-numbers-mode" data-ext="dar"><pre class="language-dar"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="显示" tabindex="-1"><a class="header-anchor" href="#显示" aria-hidden="true">#</a> 显示</h2><h3 id="visibility-是否可见" tabindex="-1"><a class="header-anchor" href="#visibility-是否可见" aria-hidden="true">#</a> Visibility - “是否可见”</h3><blockquote><p>控制子组件是否显示</p></blockquote><h3 id="opacity-透明度" tabindex="-1"><a class="header-anchor" href="#opacity-透明度" aria-hidden="true">#</a> Opacity - “透明度”</h3><blockquote><p>控制子组件的透明度 渲染透明度是一种性能消耗，应尽量减少该组件使用。</p></blockquote><ul><li>opacity : 透明度 (0.0 ~ 1.0)</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Opacity</span><span class="token punctuation">(</span>
  opacity<span class="token punctuation">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token comment">// 透明度</span>
  child<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="offstage-台下" tabindex="-1"><a class="header-anchor" href="#offstage-台下" aria-hidden="true">#</a> Offstage - “台下”</h3><blockquote><p>控制子组件不可见</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2><h3 id="aspectratio-比例" tabindex="-1"><a class="header-anchor" href="#aspectratio-比例" aria-hidden="true">#</a> AspectRatio - “比例”</h3><h3 id="preferredsize-理想尺寸" tabindex="-1"><a class="header-anchor" href="#preferredsize-理想尺寸" aria-hidden="true">#</a> PreferredSize - “理想尺寸”</h3><h3 id="customsinglechildlayout" tabindex="-1"><a class="header-anchor" href="#customsinglechildlayout" aria-hidden="true">#</a> CustomSingleChildLayout</h3><h3 id="custommultichildlayout" tabindex="-1"><a class="header-anchor" href="#custommultichildlayout" aria-hidden="true">#</a> CustomMultiChildLayout</h3><h3 id="repaintboundary-重绘编辑" tabindex="-1"><a class="header-anchor" href="#repaintboundary-重绘编辑" aria-hidden="true">#</a> RepaintBoundary - “重绘编辑”</h3><h3 id="physicalmodel-物理模型" tabindex="-1"><a class="header-anchor" href="#physicalmodel-物理模型" aria-hidden="true">#</a> PhysicalModel - “物理模型”</h3><blockquote><p>用于渲染阴影效果</p></blockquote><ul><li>color : 设置背景色颜色</li><li>elevation : 海拔高度</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="transform-形变" tabindex="-1"><a class="header-anchor" href="#transform-形变" aria-hidden="true">#</a> Transform - “形变”</h3><blockquote><p>Transfrom 形变是在布局完成之后再生效。</p></blockquote><ul><li>translate : 平移</li><li>rotate : 旋转</li><li>scale : 缩放</li></ul><h3 id="fractionaltranslation" tabindex="-1"><a class="header-anchor" href="#fractionaltranslation" aria-hidden="true">#</a> FractionalTranslation</h3><blockquote><p>修改子组件偏移</p></blockquote><h3 id="imagefiltered-图像滤镜" tabindex="-1"><a class="header-anchor" href="#imagefiltered-图像滤镜" aria-hidden="true">#</a> ImageFiltered - “图像滤镜”</h3><blockquote><p>用于给子组件添加滤镜</p></blockquote><blockquote><p>ImageFilter : 滤镜效果</p></blockquote><ul><li>blur : 模糊效果</li><li>matrix : 滤镜矩阵</li></ul><h3 id="backdropfilter-背景滤镜" tabindex="-1"><a class="header-anchor" href="#backdropfilter-背景滤镜" aria-hidden="true">#</a> BackdropFilter : “背景滤镜”</h3><blockquote><p>用于给子组件的背景添加滤镜</p></blockquote><h3 id="shadermask-着色器遮罩" tabindex="-1"><a class="header-anchor" href="#shadermask-着色器遮罩" aria-hidden="true">#</a> ShaderMask - “着色器遮罩”</h3><blockquote><p>用于给子组件添加遮罩效果</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="裁剪" tabindex="-1"><a class="header-anchor" href="#裁剪" aria-hidden="true">#</a> 裁剪</h2><h3 id="clipoval-椭圆" tabindex="-1"><a class="header-anchor" href="#clipoval-椭圆" aria-hidden="true">#</a> ClipOval - “椭圆”</h3><blockquote><p>将子组件裁剪为椭圆</p></blockquote><h3 id="cliprect-矩形" tabindex="-1"><a class="header-anchor" href="#cliprect-矩形" aria-hidden="true">#</a> ClipRect - “矩形”</h3><blockquote><p>将子组件裁剪为矩形</p></blockquote><h3 id="cliprrect-圆角矩形" tabindex="-1"><a class="header-anchor" href="#cliprrect-圆角矩形" aria-hidden="true">#</a> ClipRRect - “圆角矩形”</h3><blockquote><p>将子组件裁剪为圆角矩形</p></blockquote><h3 id="clippath-路径" tabindex="-1"><a class="header-anchor" href="#clippath-路径" aria-hidden="true">#</a> ClipPath - “路径”</h3><blockquote><p>将子组件按照自定义路径裁剪</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="custompaint-自定义绘图" tabindex="-1"><a class="header-anchor" href="#custompaint-自定义绘图" aria-hidden="true">#</a> CustomPaint - “自定义绘图”</h3><blockquote><p>提供一个画布，进行自定义绘制</p></blockquote>`,131);function l(d,o){return n(),e("div",null,[s(" more "),c])}const u=a(i,[["render",l],["__file","0x01.layout.html.vue"]]);export{u as default};
