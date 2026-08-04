---
title: AI 趋势日报新鲜度门禁
icon: filter

index: true
order: 81

---

# AI 趋势日报新鲜度门禁

自动化趋势日报最容易出现的伪进展，不是“抓不到内容”，而是连续几天都抓到同一批 URL：publisher 覆盖看起来达标，页面也能生成，但读者看到的是重复日报。本页把“新鲜度”做成发布前门禁，避免用通过脚本的旧候选包装成新内容。

<!-- more -->

## 适用场景

- 日报、周报、趋势扫描、竞品监控或 RSS 聚合产品已经有自动抓取脚本。
- 已有 publisher / source 覆盖门槛，但连续日期的候选池可能高度重复。
- 内容面向订阅、公开站点、销售线索或付费报告，不能只靠“当天成功生成”判断质量。
- 当前还没有足够人工审稿时间，需要让 cron 先挡住明显不可发布的草案。

不适用：一次性资料搜集、人工精选长文、或明确允许重复追踪同一事件的专题更新。那些场景应改用“事件状态变化”门槛，而不是 URL 新鲜度门槛。

## 三层发布门禁

| 层级 | 要挡住什么 | 最小证据 |
| --- | --- | --- |
| Source health | 数据源整体不可用，导致候选池过窄 | `N` 个源中至少 `75%` 可抓取 |
| Publisher coverage | 单一来源占满页面，视角过窄 | 最终 raw 至少 `4` 个 publisher |
| Freshness | 连续日期 URL 完全重复，伪装成新日报 | 相对前一期至少 `1` 个新 URL |

三个门禁不要互相替代：source health 好不代表内容新，publisher 多不代表不是旧 URL，freshness 通过也不代表摘要可读。它们只是把最容易被自动化掩盖的失败先挡住。

## 最小实现

```bash
# 1. 先抓取并输出过滤漏斗，确认不是黑箱生成
python3 scripts/fetch_ai_daily_sources.py \
  --date YYYY-MM-DD \
  --report \
  --dry-run \
  --min-items 1

# 2. 校验当天 raw：publisher 覆盖 + 与前一期 URL 对比
python3 scripts/validate_ai_daily_raw.py \
  data/ai_daily/sources/YYYY-MM-DD.raw.json \
  --min-publishers 4 \
  --compare-against data/ai_daily/sources/PREVIOUS-DATE.raw.json \
  --min-new-urls 1
```

如果已经有 cron 入口，把门禁做成默认关闭的观察期变量，而不是立刻改变无人值守发布行为：

```bash
AI_DAILY_COMPARE_PREVIOUS_RAW=true \
AI_DAILY_MIN_PUBLISHERS=4 \
AI_DAILY_MIN_NEW_URLS=1 \
AI_DAILY_FETCH_RAW=true \
AI_DAILY_REFRESH_RAW=true \
AI_DAILY_PUSH=false \
./scripts/run_ai_daily_cron.sh YYYY-MM-DD
```

默认关闭的好处是：旧流水线不被突然打断，但人工发布前可以用同一条命令证明“这期不是重复内容”。

## 失败时怎么判断

| 失败信号 | 常见原因 | 下一步 |
| --- | --- | --- |
| health 低于阈值 | RSS 超时、TLS 波动、源站改版 | 先换稳定源或降权波动源，不要扩大摘要生成规则 |
| publisher 少于门槛 | 低频官方博客在 lookback 窗口内没有新内容 | 先看 `--report` 的 `recent / keyword / selected`，再决定补高频源或调关键词 |
| new URLs 为 0 | lookback 扩大后连续复用同一批候选 | 不发布；补更高频且相关的来源，或等待真实新内容进入候选池 |
| 门禁都通过但页面差 | action hint / opportunity 规则过泛 | 人工复核 3-5 条卡片，按“发现错配 → 加窄规则 → 补测试 → 重新生成”收敛 |

不要为了让当天页面生成而降低 `--min-publishers` 或关闭 freshness gate。门禁失败本身就是有价值的产品信号：今天的自动化候选还不值得公开。

## 人工复核清单

发布前抽查 5 个问题：

1. 今天至少有一个 URL 是前一期没有出现过的吗？
2. 新 URL 是否真的进入最终页面，而不是只停留在 raw 候选池？
3. 新来源有没有挤出更重要的官方或高质量来源？
4. 每条 action hint 是否能变成一个工程动作、评测表或产品实验？
5. `opportunities` 是否来自当天 selected items，而不是通用 AI 口号？

如果 1–2 失败，先处理 freshness；如果 3 失败，调 priority 或 publisher cap；如果 4–5 失败，补更窄的文案规则和测试。

## Go / Narrow / Stop

| 判断 | 条件 | 动作 |
| --- | --- | --- |
| `Go` | source health、publisher coverage、freshness 都通过，且人工抽查没有明显错配 | 允许进入公开发布或人工审稿队列 |
| `Narrow` | freshness 通过，但摘要、行动提示或机会提示偏泛 | 不公开；只修文案规则、测试和当期页面 |
| `Stop` | 与前一期完全重复，或 publisher 覆盖不足 | 不发布；回到来源漏斗和高频源选择 |

这张门禁卡的目标不是追求每天都发，而是保护读者信任：自动化可以提高产能，但新鲜度和可行动价值必须先被证明。
