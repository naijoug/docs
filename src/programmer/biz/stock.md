## Reference

- [MA](https://zh.wikipedia.org/wiki/%E7%A7%BB%E5%8B%95%E5%B9%B3%E5%9D%87)
- [MACD](https://zh.wikipedia.org/wiki/MACD)
- [BALL](https://zh.wikipedia.org/wiki/%E5%B8%83%E6%9E%97%E5%B8%A6)
- [RSI](https://zh.wikipedia.org/wiki/%E7%9B%B8%E5%B0%8D%E5%BC%B7%E5%BC%B1%E6%8C%87%E6%95%B8)
- [KD](https://zh.wikipedia.org/wiki/%E9%9A%8F%E6%9C%BA%E6%8C%87%E6%A0%87)

## Quant
> 量化交易

- [Qbot](https://github.com/UFund-Me/Qbot)
    > [🔥updating ...] 自动量化交易机器人 Qbot is an AI-oriented quantitative investment platform, which aims to realize the potential, empower AI technologies in quantitative investment.

## Concept

| 名称 | 公式
| -- | --
| 总资产      | `可用资金 + 市值 + 冻结`
| 收益率      | `(总资产 - 初始资金) / 初始资金`
| 总市值      | `(可用 + 冻结 + 在途) * 最新价`
| 仓位        | `市值 / 总资产`
| 资金        | `可用资金 + 冻结`
| 涨停        | `昨收 * ( 1 + 0.1)`  保留 2 位小数 四舍五入 (st股票按 5% = 0.05，其它股票按 10% = 0.1)
| 跌停        | `昨收 * ( 1 - 0.1 )`
| 股票收益率   | `(现价 - 成交价) / 成交价`
| 持仓数量     | `可用数量 + 冻结数量 + 在途数量`
| 浮动盈亏     | `(当前价 - 成本价) * 持仓数量`
| 每股盈亏     | `当前价 - 成本价`
| 除权        | 因为分红导致昨日的今日收盘价与今日的昨收价不一样，导致曲线不连续，分为前除权和后除权。

## 深市 & 沪市

| 股票市场 | 说明
| --- | ---
| 深市 | `00` `30` 开头
| 沪市 | `60` 开头

## 股票指标

| 指标 | 说明 | 计算公式
| --- | --- | ---
| `MA`      | (Moving Average) 移动平均值 | 
| `SMA`     | (Simple Moving Average) 简单移动平均 | `(P1 + ... + Pn) / n`
| `WMA`     | (Weighted Moving Average) 加权移动平均 | 
| `EMA`     | (Exponential Moving Average) 指数移动平均值 | 
| `DEA`     | 讯号线
| `DIFF`    | 差离值
| `MACD`    | (Moving Average Convergence Divergence) 指数平滑异同移动平均线 | 
| `RSI`     | (Relative Strength Index) 相对强弱指数 | 
| `KDJ`     | (Stochastic Oscillator) 随机指标 | 

- MACD

| 指标 | 计算公式
| --- | ---
| `第一日的 EMA`    | `当日的收盘价`
| `当日 EMA(12)`    | `前一日 EMA(12) × 11 / 13 ＋ 当日收盘价 × 2 / 13`
| `当日 EMA(26)`    | `前一日 EMA(26) × 25 / 27 ＋ 当日收盘价 × 2 / 27`
| `当日 DIFF`       | `当日 EMA(12) - 当日 EMA(26)`
| `当日 DEA`        | `前一日 DEA × 8 / 10 ＋ 当日 DIFF × 2 / 10`
| `当日 MACD`       | `2 × (DIFF - DEA)`
 
- KDJ

| 指标 | 计算公式
| --- | ---
| `N 日 RSV`    | `(Cn－Ln) ÷ (Hn－Ln) * 100% `其中，Cn为第n日收盘价；Ln为n日内的最低价；Hn为n日内的最高价。RSV值始终在1—100间波动。N通常取值为9
| `第一日的 K/D` | `当日的 RSV`
| `当日 K 值`    | `2/3 * 前一日 K 值 + 1/3 * 当日 RSV`
| `当日 D 值`    | `2/3 * 前一日 D 值 + 1/3 * 当日 K 值`
| `当日 J 值`    | `3K - 2D`
 
- RSI

| 指标 | 计算公式
| --- | ---
| `N 日 RSI` | `N 日上涨点数的移动平均 / N 日上涨/下跌点数之和的移动平均 * 100%` (N 通常取值 6/12/24)
| `N 日上涨点数的移动平均`      | `N-1 日上涨点数的均值 * (n-1) / n + max(当日上涨点数, 0)`
| `N 日上涨/下跌点数的移动平均` | `N-1 日上涨/下跌点数的均值 * (n-1) / n + abs(当日上涨点数)`

## 行情读取方式
> 时间基准为东八区时间，不是手机设置的时间，否则如果手机主设施的美国时间就乱了
1.  9：05 ---9：28 每30秒一次
2.  9：28---11：32 每5秒一次
3.  11：32---12：58 每30秒一次
4.  12：58---15：05 每5秒一次
5.  15：05---次日9：05 不读
6.  如果 9：28 以后读到的行情价格的日期不是今天的，说明今天不开盘（节假日或者停盘股票）则这只股票今天不再读数据
