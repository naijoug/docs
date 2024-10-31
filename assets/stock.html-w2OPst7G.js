import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as c,c as a,a as l,b as t,e,d as o,f as h}from"./app-sDdS2reu.js";const i={},s=t("h2",{id:"reference",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),e(" reference")],-1),_={href:"https://zh.wikipedia.org/wiki/%E7%A7%BB%E5%8B%95%E5%B9%B3%E5%9D%87",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zh.wikipedia.org/wiki/MACD",target:"_blank",rel:"noopener noreferrer"},p={href:"https://zh.wikipedia.org/wiki/%E5%B8%83%E6%9E%97%E5%B8%A6",target:"_blank",rel:"noopener noreferrer"},u={href:"https://zh.wikipedia.org/wiki/%E7%9B%B8%E5%B0%8D%E5%BC%B7%E5%BC%B1%E6%8C%87%E6%95%B8",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zh.wikipedia.org/wiki/%E9%9A%8F%E6%9C%BA%E6%8C%87%E6%A0%87",target:"_blank",rel:"noopener noreferrer"},g=t("h2",{id:"quant",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#quant","aria-hidden":"true"},"#"),e(" Quant")],-1),k=t("blockquote",null,[t("p",null,"量化交易")],-1),E={href:"https://openbb.co/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/OpenBB-finance/OpenBB",target:"_blank",rel:"noopener noreferrer"},m=t("blockquote",null,[t("p",null,"Investment Research for Everyone, Everywhere.")],-1),v={href:"https://www.vnpy.com/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/vnpy/vnpy",target:"_blank",rel:"noopener noreferrer"},D=t("blockquote",null,[t("p",null,"基于Python的开源量化交易平台开发框架")],-1),M={href:"https://ufund-me.github.io/Qbot",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/UFund-Me/Qbot",target:"_blank",rel:"noopener noreferrer"},w=t("blockquote",null,[t("p",null,"[🔥updating ...] 自动量化交易机器人 Qbot is an AI-oriented quantitative investment platform, which aims to realize the potential, empower AI technologies in quantitative investment.")],-1),C={href:"http://30daydo.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/Rockyzsu/stock",target:"_blank",rel:"noopener noreferrer"},N=h('<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><table><thead><tr><th>名称</th><th>公式</th></tr></thead><tbody><tr><td>总资产</td><td><code>可用资金 + 市值 + 冻结</code></td></tr><tr><td>收益率</td><td><code>(总资产 - 初始资金) / 初始资金</code></td></tr><tr><td>总市值</td><td><code>(可用 + 冻结 + 在途) * 最新价</code></td></tr><tr><td>仓位</td><td><code>市值 / 总资产</code></td></tr><tr><td>资金</td><td><code>可用资金 + 冻结</code></td></tr><tr><td>涨停</td><td><code>昨收 * ( 1 + 0.1)</code> 保留 2 位小数 四舍五入 (st股票按 5% = 0.05，其它股票按 10% = 0.1)</td></tr><tr><td>跌停</td><td><code>昨收 * ( 1 - 0.1 )</code></td></tr><tr><td>股票收益率</td><td><code>(现价 - 成交价) / 成交价</code></td></tr><tr><td>持仓数量</td><td><code>可用数量 + 冻结数量 + 在途数量</code></td></tr><tr><td>浮动盈亏</td><td><code>(当前价 - 成本价) * 持仓数量</code></td></tr><tr><td>每股盈亏</td><td><code>当前价 - 成本价</code></td></tr><tr><td>除权</td><td>因为分红导致昨日的今日收盘价与今日的昨收价不一样，导致曲线不连续，分为前除权和后除权。</td></tr></tbody></table><h2 id="深市-沪市" tabindex="-1"><a class="header-anchor" href="#深市-沪市" aria-hidden="true">#</a> 深市 &amp; 沪市</h2><table><thead><tr><th>股票市场</th><th>说明</th></tr></thead><tbody><tr><td>深市</td><td><code>00</code> <code>30</code> 开头</td></tr><tr><td>沪市</td><td><code>60</code> 开头</td></tr></tbody></table><h2 id="股票指标" tabindex="-1"><a class="header-anchor" href="#股票指标" aria-hidden="true">#</a> 股票指标</h2><table><thead><tr><th>指标</th><th>说明</th><th>计算公式</th></tr></thead><tbody><tr><td><code>MA</code></td><td>(Moving Average) 移动平均值</td><td></td></tr><tr><td><code>SMA</code></td><td>(Simple Moving Average) 简单移动平均</td><td><code>(P1 + ... + Pn) / n</code></td></tr><tr><td><code>WMA</code></td><td>(Weighted Moving Average) 加权移动平均</td><td></td></tr><tr><td><code>EMA</code></td><td>(Exponential Moving Average) 指数移动平均值</td><td></td></tr><tr><td><code>DEA</code></td><td>讯号线</td><td></td></tr><tr><td><code>DIFF</code></td><td>差离值</td><td></td></tr><tr><td><code>MACD</code></td><td>(Moving Average Convergence Divergence) 指数平滑异同移动平均线</td><td></td></tr><tr><td><code>RSI</code></td><td>(Relative Strength Index) 相对强弱指数</td><td></td></tr><tr><td><code>KDJ</code></td><td>(Stochastic Oscillator) 随机指标</td><td></td></tr></tbody></table><ul><li>MACD</li></ul><table><thead><tr><th>指标</th><th>计算公式</th></tr></thead><tbody><tr><td><code>第一日的 EMA</code></td><td><code>当日的收盘价</code></td></tr><tr><td><code>当日 EMA(12)</code></td><td><code>前一日 EMA(12) × 11 / 13 ＋ 当日收盘价 × 2 / 13</code></td></tr><tr><td><code>当日 EMA(26)</code></td><td><code>前一日 EMA(26) × 25 / 27 ＋ 当日收盘价 × 2 / 27</code></td></tr><tr><td><code>当日 DIFF</code></td><td><code>当日 EMA(12) - 当日 EMA(26)</code></td></tr><tr><td><code>当日 DEA</code></td><td><code>前一日 DEA × 8 / 10 ＋ 当日 DIFF × 2 / 10</code></td></tr><tr><td><code>当日 MACD</code></td><td><code>2 × (DIFF - DEA)</code></td></tr></tbody></table><ul><li>KDJ</li></ul><table><thead><tr><th>指标</th><th>计算公式</th></tr></thead><tbody><tr><td><code>N 日 RSV</code></td><td><code>(Cn－Ln) ÷ (Hn－Ln) * 100% </code>其中，Cn为第n日收盘价；Ln为n日内的最低价；Hn为n日内的最高价。RSV值始终在1—100间波动。N通常取值为9</td></tr><tr><td><code>第一日的 K/D</code></td><td><code>当日的 RSV</code></td></tr><tr><td><code>当日 K 值</code></td><td><code>2/3 * 前一日 K 值 + 1/3 * 当日 RSV</code></td></tr><tr><td><code>当日 D 值</code></td><td><code>2/3 * 前一日 D 值 + 1/3 * 当日 K 值</code></td></tr><tr><td><code>当日 J 值</code></td><td><code>3K - 2D</code></td></tr></tbody></table><ul><li>RSI</li></ul><table><thead><tr><th>指标</th><th>计算公式</th></tr></thead><tbody><tr><td><code>N 日 RSI</code></td><td><code>N 日上涨点数的移动平均 / N 日上涨/下跌点数之和的移动平均 * 100%</code> (N 通常取值 6/12/24)</td></tr><tr><td><code>N 日上涨点数的移动平均</code></td><td><code>N-1 日上涨点数的均值 * (n-1) / n + max(当日上涨点数, 0)</code></td></tr><tr><td><code>N 日上涨/下跌点数的移动平均</code></td><td><code>N-1 日上涨/下跌点数的均值 * (n-1) / n + abs(当日上涨点数)</code></td></tr></tbody></table><h2 id="行情读取方式" tabindex="-1"><a class="header-anchor" href="#行情读取方式" aria-hidden="true">#</a> 行情读取方式</h2><blockquote><p>时间基准为东八区时间，不是手机设置的时间，否则如果手机主设施的美国时间就乱了</p></blockquote><ol><li>9：05 ---9：28 每30秒一次</li><li>9：28---11：32 每5秒一次</li><li>11：32---12：58 每30秒一次</li><li>12：58---15：05 每5秒一次</li><li>15：05---次日9：05 不读</li><li>如果 9：28 以后读到的行情价格的日期不是今天的，说明今天不开盘（节假日或者停盘股票）则这只股票今天不再读数据</li></ol>',15);function I(S,R){const d=n("ExternalLinkIcon");return c(),a("div",null,[l(" more "),s,t("ul",null,[t("li",null,[t("a",_,[e("MA"),o(d)])]),t("li",null,[t("a",b,[e("MACD"),o(d)])]),t("li",null,[t("a",p,[e("BALL"),o(d)])]),t("li",null,[t("a",u,[e("RSI"),o(d)])]),t("li",null,[t("a",f,[e("KD"),o(d)])])]),g,k,t("ul",null,[t("li",null,[t("a",E,[e("OpenBB"),o(d)]),e(" 👉🏻 "),t("a",A,[e("🐙"),o(d)]),m]),t("li",null,[t("a",v,[e("vnpy"),o(d)]),e(" 👉🏻 "),t("a",B,[e("🐙"),o(d)]),D]),t("li",null,[t("a",M,[e("Qbot"),o(d)]),e(" 👉🏻 "),t("a",y,[e("🐙"),o(d)]),w]),t("li",null,[t("a",C,[e("30天掌握量化交易"),o(d)]),e(" 👉🏻 "),t("a",x,[e("🐙"),o(d)])])]),N])}const V=r(i,[["render",I],["__file","stock.html.vue"]]);export{V as default};
