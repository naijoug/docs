---
title: AI 程序员每周实验卡片填写样例
icon: clipboard-list

index: true
order: 40

---

# AI 程序员每周实验卡片填写样例

这是一张按 [AI 程序员每周收入实验规划器](ai-programmer-weekly-experiment-planner.md) 填出来的样例卡片。它的重点不是证明某个想法能赚钱，而是把“没有外部渠道时如何仍然交付可验证资产”写成可复用记录。

<!-- more -->

## 场景

当前没有新的真实客户样本、PR 链接或发布渠道；继续扩写 AI 编程审查服务页会制造进展感，但不会增加证据。此时应切到一个能在本地验证的小实验：用已有 proof checker 为一次文档改动提供前后证据，并把结果写进采纳记录。

## 填写卡片

```text
Experiment: 用 AI 文档改动 Proof Checker 支撑一次真实文档小改动
Audience: 未来修改 docs/documents/trending/ai/ 的自己和 agent
Problem evidence: AI 目录文档经常新增入口、跨文档链接和实验记录；如果只写说明不跑 proof，容易漏掉断链、缺 frontmatter 或本机绝对路径。
Smallest deliverable: 新增一份填写样例，并在 README 与 weekly planner 中加入入口。
Verification: 改前显式检查 README、weekly planner、adoption log；改后对本轮目标文件显式跑 checker，并用 git diff --check 兜底空白问题。
Distribution: README catalog + weekly planner 的样例入口；若后续重复使用，再回灌到书稿或技能。
Stop condition: 如果 checker 只能重复通过且没有真实文档改动，不再扩规则；如果 --changed-from HEAD 被既有 dirty 文件干扰，就显式列本轮文件。
Next evidence needed: 下一次真实 docs 改动中，观察 checker 是否发现人工会漏掉的问题；若没有失败样例，只记录采纳，不新增规则。
Decision: Continue
```

## 为什么是 `Continue`

这张卡片满足三条继续条件：

1. **交付物可复核**：新增文档、入口链接和采纳记录都能被命令检查，而不是只靠主观判断。
2. **资产可复用**：同一套字段可以迁移到脚本、教程、PR 或模板包实验。
3. **停止条件清楚**：没有真实失败样例时，只把 checker 当作 proof 使用，不继续把它扩成万能 linter。

## 后续接力

下一次如果仍没有外部样本，优先从这张卡片复制字段，换一个可本地验证的交付物，例如：

- 为一篇已有长文补一组可复核命令；
- 为一个脚本补最小 fixture；
- 为一个 README 入口补 proof 记录；
- 把重复两次以上的操作沉淀成 `skills/skills/` 下的可复用技能。

不要把 `Decision: Continue` 理解成继续写同类说明文；它只表示“这个 proof 资产值得在下一次真实改动中继续使用”。
