import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as o,a as c,f as t}from"./app-ki1nVTMy.js";const l={},i=t('<hr><h3 id="❓flutterengine" tabindex="-1"><a class="header-anchor" href="#❓flutterengine" aria-hidden="true">#</a> ❓<code>FlutterEngine</code></h3><details class="hint-container details"><summary>💡</summary><blockquote><p><code>FlutterEngine</code> 负责执行 <code>Flutter</code> 源码（即 <code>Dart</code> 代码），承载了 <code>Flutter</code> 深度集成到 <code>Android</code> 和 <code>iOS</code> 操作系统所需的一切基本功能。</p></blockquote><ul><li><p>执行 <code>Dart</code> 代码：内部有一个 <code>Dart VM</code>（虚拟机），用于执行 <code>Flutter</code> 应用的 <code>Dart</code> 代码。</p></li><li><p>渲染 <code>UI</code>：负责驱动 <code>Flutter</code> 的渲染流程，并和底层平台的渲染引擎进行交互，最终将 <code>Flutter</code> 的 <code>UI</code> 渲染到屏幕上。</p></li><li><p>插件：支持和原生平台的插件进行交互，可以通过 <code>Message Channel</code> 和原生代码交互。</p></li><li><p>生命周期：负责管理和处理和应用生命周期相关的事情。</p></li></ul><p>使用<code>FlutterEngine</code>，开发者可以创建一个预热的 <code>Flutter</code> 实例，将 <code>Flutter</code> 的运行环境、资源、代码等提前加载，提升用户体验。当然，这可能会消耗更多的内存。<code>FlutterEngine</code> 的实例可以被多个 <code>FlutterView</code> 共享，以便在同一应用程序中显示多个 <code>Flutter</code> 页面。</p></details><h3 id="❓dart-vm-的作用" tabindex="-1"><a class="header-anchor" href="#❓dart-vm-的作用" aria-hidden="true">#</a> ❓<code>Dart VM</code> 的作用</h3><details class="hint-container details"><summary>💡</summary><blockquote><p><code>Dart Virtual Machine</code>是一个可以执行 <code>Dart</code> 代码的虚拟机。</p></blockquote><ul><li><p><strong>代码解释和执行</strong>：<code>Dart VM</code> 能解释和执行 <code>Dart</code> 代码。在 <code>Dart</code> 程序执行时，<code>Dart VM</code> 负责解释和运行 <code>Dart</code> 代码。</p></li><li><p><strong>实时编译</strong>：在开发模式下，<code>Dart VM</code> 提供了即时编译 (<code>JIT</code>，<code>Just-In-Time Compilation</code>) 功能。即时编译使得开发者能够在修改代码后立即看到效果（即热重载功能）。</p></li><li><p><strong>预先编译</strong>：在发布模式下，<code>Dart VM</code> 提供了预先编译 (<code>AOT</code>, <code>Ahead-Of-Time Compilation</code>) 功能。预先编译将 Dart 源代码直接编译成本地机器代码，这样在用户打开应用的时候能更快地加载和执行。</p></li><li><p><strong>内存管理</strong>：<code>Dart VM</code> 中包含内存管理功能和垃圾回收机制，用于管理 <code>Dart</code> 运行过程中分配的内存。</p></li></ul><p>总结：<code>Dart VM</code> 负责解释执行应用代码，支持即时编译和预先编译，管理内存等，是 <code>Dart</code> 语言和框架（如 <code>Flutter</code>）运行起来的关键组成部分。</p></details><h3 id="❓widget-element-renderobject-之间的关系" tabindex="-1"><a class="header-anchor" href="#❓widget-element-renderobject-之间的关系" aria-hidden="true">#</a> ❓<code>Widget</code> <code>Element</code> <code>RenderObject</code> 之间的关系</h3><details class="hint-container details"><summary>💡</summary><p><code>Flutter</code> 三棵树：</p><ul><li><p><code>Widget</code>：一个描述部件（用户界面元素）的配置数据。<code>Widget</code> 本身是不可变的，当 <code>UI</code> 需要变化时，创建一个新的 <code>Widget</code> 实例。</p></li><li><p><code>Element</code>：<code>Widget</code>在树形结构中的一个实例，可以认为 <code>Element</code> 是 <code>Widget</code> 的实例化，同时它也保存了子 <code>Widget</code> 的状态。<code>Element</code> 使 <code>Widget</code> 获得了生命周期。</p></li><li><p><code>RenderObject</code>：一个描述并实现了绘制操作的对象，也就是承担渲染工作的对象。</p></li></ul><p>工作过程：</p><ul><li>当在 <code>Flutter</code> 中构建 <code>UI</code> 时，会创建一组 <code>Widget</code>。这组 <code>Widget</code> 会通过 <code>createElement</code> 方法创建对应的 <code>Element</code>，并形成一个 <code>Element</code> 树（也就是 <code>Widget</code> 的具象化）。</li><li>每个 <code>Element</code> 又会通过 <code>createRenderObject</code> 方法创建对应的 <code>RenderObject</code>。在这个过程中 <code>Element</code> 起到了桥梁的作用，它连接了 <code>Widget</code> 和 <code>RenderObject</code>，使 <code>Widget</code> 的配置可以应用到 <code>RenderObject</code>。</li><li><code>RenderObject</code> 负责处理最终的布局(<code>layout</code>)和绘制(<code>paint</code>)。</li></ul><p>总结：<code>Widget</code>定义了他们的样式和行为，通过<code>Element</code>配置到<code>RenderObject</code>，然后由<code>RenderObject</code>进行实际的渲染。</p></details><h3 id="❓flutter-中的各种-key" tabindex="-1"><a class="header-anchor" href="#❓flutter-中的各种-key" aria-hidden="true">#</a> ❓<code>Flutter</code> 中的各种 <code>Key</code></h3><details class="hint-container details"><summary>💡</summary><blockquote><p><code>Key</code> 在 <code>Flutter</code> 中被用于控制框架在更新 <code>Widget</code> 树时如何与旧的 <code>Widget</code> 进行匹配。</p></blockquote><p>🌰 一个无 <code>key</code> 的 <code>Widget</code> 列表，向列表的起始位置添加一个新的项目，会发现新的 <code>Widget</code> 实际上被渲染到了列表的最后一个项目的位置。这发生的原因就在于 <code>Flutter</code> 没有一个唯一的方式来确定新加入的 <code>Widget</code> 应该插入到列表的哪个位置。</p><ul><li><p><code>GlobalKey</code>: 在整个 <code>Widget</code> 树中保持一致，而且允许在树中的任何地方进行访问和操作。使用 <code>GlobalKey</code> 可以跨 <code>Widget</code> 访问状态，但是过度使用 <code>GlobalKey</code> 可能会导致性能问题。</p><blockquote><p>使用场景：</p><ul><li>保持状态：当 <code>Widget</code> 的状态需要跨多个 <code>Widget</code> 保持时，可以使用 <code>GlobalKey</code>。</li><li>导航参数传递：当需要向新的界面传递数据，或者从新界面获取数据，可以使用 <code>GlobalKey</code> 来实现。</li></ul></blockquote></li><li><p><code>LocalKey</code></p><ul><li><p><code>ValueKey</code>: 需要一个与当前 <code>Widget</code> 相关联的值，并且这个值在整个 <code>Widget</code> 树中是唯一的。常常用于比对。</p><blockquote><p>使用场景：在滚动的列表中，可能想要确保同类型的项在重建时能保持相同的状态。</p></blockquote></li><li><p><code>ObjectKey</code>: 使用一个对象的 <code>identity</code> 作为 <code>key</code>，在它所关联的对象的整个生命周期内保持一致。</p><blockquote><p>使用场景：在构建列表或表格时，可以用数据源中每个对象的索引作为 <code>ObjectKey</code>。这可以帮助框架区别列表中的不同元素，并在数据源更新时善加利用已有的 <code>Widget</code>。</p></blockquote></li><li><p><code>UniqueKey</code>: 在每次创建时都是全局唯一的，通常用来控制 “顺序无关” 的列表。通常用于改变现有 <code>Widget</code> 的状态。</p><blockquote><p>使用场景：如果有两个相同的 <code>Widget</code> 并想交换它们的位置，可以给它们分配 <code>UniqueKey</code>。当框架比较新老 <code>Widget</code> 时，它们的 <code>Key</code> 将不同，因此框架会交换两个 <code>Widget</code>。</p></blockquote></li></ul></li></ul></details><h3 id="❓flutter-的渲染原理" tabindex="-1"><a class="header-anchor" href="#❓flutter-的渲染原理" aria-hidden="true">#</a> ❓<code>Flutter</code> 的渲染原理</h3><details class="hint-container details"><summary>💡</summary><blockquote><p><code>Flutter</code> 的应用程序界面渲染采用自下而上的方式，基于一个先进的 <code>2D</code> 渲染引擎（称为 <code>Skia</code>）来创建视觉效果，包括文本、形状和颜色等。</p></blockquote><p>渲染过程：</p><ul><li>启动时，<code>Flutter</code> 通过自身的高性能 <code>C++</code> 运行库加载并运行 <code>Dart</code> 代码。</li><li><code>Dart</code> 层采用声明式编程，这些声明（通常为在屏幕上显示的 <code>Widget</code>）全部保存在一个树状结构中，每当状态变化时，<code>Flutter</code> 都会创建一个新的 <code>Widget</code> 树。</li><li>当 <code>Widget</code> 树在 <code>Dart</code> 代码中有所更新，这些变化会转换为绘制命令。</li><li>渲染引擎会按照 <code>Widget</code> 树的层次顺序进行绘制，每一个 <code>Widget</code> 都会映射为 <code>Skia</code> 画笔操作来进行渲染。</li><li>最后生成的图像会在 <code>Flutter</code> 引擎中被组合在一起，并显示在设备的屏幕上。</li></ul></details>',11);function r(a,n){return d(),o("div",null,[c(" more "),i])}const s=e(l,[["render",r],["__file","0x07.rendering.html.vue"]]);export{s as default};
