import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c,a as o,f as r}from"./app-NVknrtE1.js";const d={},t=r('<h2 id="组件化" tabindex="-1"><a class="header-anchor" href="#组件化" aria-hidden="true">#</a> 组件化</h2><h3 id="组件化设计思路" tabindex="-1"><a class="header-anchor" href="#组件化设计思路" aria-hidden="true">#</a> 组件化设计思路？</h3><p>组件化：有时也称为“模块化”。将一个大的业务功能，按照不同的功能模块进行拆分。</p><p>拆分原则：类似 <code>SOLID</code> 原则。 * 单一职责原则 : 拆分的功能模块应该尽量做到功能单一。 * 接口隔离原则 : 功能模块尽量做到对外暴露接口的最小化。</p><p>分层原则：网上有一个借用经典四象限法则来划分(以 <strong>业务相关</strong>、<strong><code>UI</code> 相关</strong> 作为两个轴线，来进行组件化分层) * 业务功能层 : 业务有关 &amp; <code>UI</code> 有关。用户看到的主要功能页面。 * 业务逻辑层 : 业务有关 &amp; <code>UI</code> 无关。在用户使用业务功能时，背后的处理逻辑。 * <code>UI</code> 层 : 业务无关 &amp; <code>UI</code> 有关。通用的 <code>UI</code> 页面，不关联具体的业务逻辑。 * 基础层 : 业务无关 &amp; <code>UI</code> 无关。通用的基础功能。</p><p>单向依赖原则：组件之间的依赖关系，应该做到上层依赖下层，下层不要依赖上层。</p><h3 id="下层组件需要调用上层组件怎样处理" tabindex="-1"><a class="header-anchor" href="#下层组件需要调用上层组件怎样处理" aria-hidden="true">#</a> 下层组件需要调用上层组件怎样处理？</h3><p>方案一：依赖注入方式。下层组件定义好钩子函数，注册时，将上层组件注入下层组件定义好的钩子函数。</p><p>方案二：间接访问。通过底层的路由组件，将上层组件注册到路由表中，这样下层组件就可以通过路由间接访问到上层组件。</p>',9);function n(h,s){return a(),c("div",null,[o(" more "),t])}const m=e(d,[["render",n],["__file","architecture.html.vue"]]);export{m as default};
