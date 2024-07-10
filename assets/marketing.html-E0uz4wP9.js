import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as d,a as o,f as c}from"./app-ma-gf7Uv.js";const r={},a=c(`<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> concept</h2><table><thead><tr><th>指标</th><th>定义</th><th>计算公式</th><th>用途</th></tr></thead><tbody><tr><td><code>CPI</code></td><td>每次安装成本</td><td><code>总广告成本 / 安装次数</code></td><td>用于衡量每次应用安装的成本</td></tr><tr><td><code>CPA</code></td><td>每次行动成本</td><td><code>总广告成本 / 获取的用户或客户数量</code></td><td>用于衡量获取一个用户或客户的成本</td></tr><tr><td><code>ROAS</code></td><td>广告投资回报率</td><td><code>广告带来的总收入 / 广告支出</code></td><td>用于衡量每一单位广告支出带来的收入</td></tr><tr><td><code>ROI</code></td><td>投资回报率</td><td><code>(收益 - 成本) / 成本</code></td><td>衡量任何类型的投资的收益率</td></tr><tr><td><code>ARPPU</code></td><td>付费用户的平均收入</td><td><code>总收入 / 付费用户数</code></td><td>用于评估每个实际付费用户在一定时间内为产品或服务贡献的平均收入。</td></tr></tbody></table><pre><code>🌰 某广告活动的数据如下：
    - 总广告成本：$1000
    - 安装次数：200 次
    - 获取的用户或客户数量：50 人
    - 广告带来的总收入：$3000
    - 付费用户数：30
    
   指标计算：
      CPI  =&gt; $1000 / 200 = $5
      CPA  =&gt; $1000 / 50 = $20
      ROAS =&gt; $3000 / $1000 = 3（即每花费 1 美元的广告费，带来 3 美元的收入）
      ROI  =&gt; ($3000 - $1000) / $1000 = 2（即投资回报率为 200%）
      ARPPU =&gt; $3000 / 30 = $100
</code></pre><h3 id="cpi-cost-per-install-每次安装成本" tabindex="-1"><a class="header-anchor" href="#cpi-cost-per-install-每次安装成本" aria-hidden="true">#</a> <code>CPI</code>(<code>Cost Per Install</code>): 每次安装成本</h3><blockquote><p>指移动应用安装广告中，每获得一次应用安装所需支付的费用。在移动应用广告中，<code>CPI</code> 是一个重要的指标，因为它直接衡量了获取新用户的成本。</p></blockquote><h3 id="cpa-cost-per-acquisition-action-每次获取-行动-成本" tabindex="-1"><a class="header-anchor" href="#cpa-cost-per-acquisition-action-每次获取-行动-成本" aria-hidden="true">#</a> <code>CPA</code>(<code>Cost Per Acquisition/Action</code>): 每次获取(行动)成本</h3><blockquote><p>指广告主为获得一个目标行动（例如销售、注册、订阅等）所需支付的费用。在某些情况下，<code>CPA</code> 也可以指每次获取潜在客户的费用<code>CPL</code>(<code>Cost Per Lead</code>)。</p></blockquote><h3 id="roas-return-on-advertising-spend-广告支出回报率" tabindex="-1"><a class="header-anchor" href="#roas-return-on-advertising-spend-广告支出回报率" aria-hidden="true">#</a> <code>ROAS</code>(<code>Return On Advertising Spend</code>): 广告支出回报率</h3><blockquote><p>这是衡量广告活动效益的指标，公式是广告产生的总收入除以广告支出。它是一种用来评估广告投资回报的效率工具。</p></blockquote><h3 id="roi-return-on-investment-投资回报率" tabindex="-1"><a class="header-anchor" href="#roi-return-on-investment-投资回报率" aria-hidden="true">#</a> <code>ROI</code>(<code>Return On Investment</code>): 投资回报率</h3><blockquote><p>这是一个更广泛的商业指标，不仅限于广告。<code>ROI</code> 衡量的是某项投资的回报，计算公式是利润除以成本。这个指标帮助公司评估其投资是否值得，并确定未来的投资策略。</p></blockquote><h3 id="arppu-average-revenue-per-paying-user-每个付费用户的平均收入。" tabindex="-1"><a class="header-anchor" href="#arppu-average-revenue-per-paying-user-每个付费用户的平均收入。" aria-hidden="true">#</a> <code>ARPPU</code>(<code>Average Revenue Per Paying User</code>): 每个付费用户的平均收入。</h3><blockquote><p>一个常用于衡量用户盈利能力的指标，特别是在游戏行业和应用内购买（<code>IAP</code>）模式中</p></blockquote><hr><h2 id="facebook" tabindex="-1"><a class="header-anchor" href="#facebook" aria-hidden="true">#</a> facebook</h2><h3 id="aem-aggregated-event-measurement" tabindex="-1"><a class="header-anchor" href="#aem-aggregated-event-measurement" aria-hidden="true">#</a> <code>AEM</code> (<code>Aggregated Event Measurement</code>)</h3><ul><li><strong>定义</strong>：聚合事件测量。</li><li><strong>用途</strong>：<code>AEM</code> 是 <code>Facebook</code> 为应对苹果 <code>iOS 14.5</code> 及更高版本中的 <code>App Tracking Transparency</code> (<code>ATT</code>) 政策而推出的一种解决方案。它允许广告主在用户选择不允许跨应用跟踪时，仍然能够测量和优化广告效果。</li><li><strong>工作原理</strong>：<code>AEM</code> 通过聚合和延迟报告的方式来保护用户隐私，同时提供广告活动的关键数据。广告主可以设置最多 8 个优先级事件，这些事件将在用户与广告互动后进行测量和报告。</li><li><strong>示例</strong>：一个电商网站可以设置“页面浏览”、“添加到购物车”、“购买”等事件，并根据这些事件来优化广告投放。</li></ul><h3 id="w2a-website-to-app" tabindex="-1"><a class="header-anchor" href="#w2a-website-to-app" aria-hidden="true">#</a> <code>W2A</code> (<code>Website to App</code>)</h3><ul><li><strong>定义</strong>：网站到应用。</li><li><strong>用途</strong>：<code>W2A</code> 是一种广告策略，旨在将网站访问者引导到移动应用中，以提高用户体验和转化率。通过这种策略，广告主可以在用户访问其网站后，引导用户下载并使用其移动应用。</li><li><strong>工作原理</strong>：广告主可以在其网站上设置深度链接或弹出窗口，提示用户下载应用。同时，广告活动可以针对已经访问过网站的用户进行再营销，引导他们安装并使用应用。</li><li><strong>示例</strong>：一个在线零售商可以在其网站上展示一个弹出窗口，建议用户下载其移动应用以获得更好的购物体验和独家优惠。</li></ul>`,19);function n(i,s){return t(),d("div",null,[o(" more "),a])}const p=e(r,[["render",n],["__file","marketing.html.vue"]]);export{p as default};
