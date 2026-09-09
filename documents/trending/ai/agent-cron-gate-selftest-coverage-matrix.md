---
title: Agent Cron 门禁自测覆盖矩阵
icon: robot

index: true
order: 103

---

Agent Cron 的 notebook、preflight 和交接脚本不是“辅助文档”，而是无人值守工作流的控制面。每补一个格式规则，都要同步补一个能失败的自测，否则规则会停留在口头约定里。

<!-- more -->

## 适用场景

当你维护 `summaries/scripts/check.sh`、`summaries/scripts/check-hermes-notebook.sh`、`summaries/scripts/test-check-sh.sh` 或 `summaries/scripts/test-check-hermes-notebook.sh` 时，用这张矩阵判断本轮是否真的把入口、失败分支和接力约束一起覆盖。

## 覆盖矩阵

| 风险 | 自测入口 | 必须覆盖的失败样例 | 通过标准 |
|---|---|---|---|
| notebook 文件不存在 | `summaries/scripts/test-check-sh.sh` | 显式传入 `summaries/hermes/2099-01-01.md` | 错误直接指出 notebook not found，不进入格式校验 |
| 传入目录而非文件 | `summaries/scripts/test-check-sh.sh` | 显式传入 `summaries/hermes` | 错误直接指出 path is a directory |
| 参数数量错误 | `summaries/scripts/test-check-sh.sh` | 传入两个 notebook 参数 | 输出 usage，且 exit code 非 0 |
| 工作目录错误 | `summaries/scripts/test-check-sh.sh` | 从 `summaries/` 内调用 `scripts/check.sh` | 错误提示必须从 workspace root 运行 |
| 默认选择最新文件 | `summaries/scripts/test-check-sh.sh` | 临时构造多个日期文件，最新文件缺字段 | 无参数调用必须选中最新文件并失败 |
| 时间标题格式漂移 | `summaries/scripts/test-check-hermes-notebook.sh` | `## 24:00` 或缺少 `## HH:mm` | checker 报 missing/invalid time heading |
| 单条记录字段不完整 | `summaries/scripts/test-check-hermes-notebook.sh` | 第二条记录缺 `- 后续接力：` | checker 指出具体时间块缺字段 |
| 时间倒序或重复 | `summaries/scripts/test-check-hermes-notebook.sh` | `11:00` 后接 `10:59`，或两个 `11:00` | checker 指出相邻时间不严格递增 |
| 日期文件名不真实 | `summaries/scripts/test-check-hermes-notebook.sh` | `summaries/hermes/2026-99-99.md` | checker 报 invalid Hermes daily notebook date |

## 每次改门禁的最小流程

1. **先定位规则归属**：入口参数、默认发现路径、工作目录属于 `summaries/scripts/check.sh`；条目结构、时间顺序、字段完整性属于 `summaries/scripts/check-hermes-notebook.sh`。
2. **先写失败样例**：用临时目录构造最小 notebook，不要依赖当天真实 notebook 才能失败。
3. **再改实现**：实现只覆盖当前规则，不顺手重构其它分支。
4. **跑完整门禁**：

```bash
summaries/scripts/test-check-hermes-notebook.sh && \
  summaries/scripts/test-check-sh.sh && \
  summaries/scripts/check.sh summaries/hermes/YYYY-MM-DD.md
```

5. **提交前看范围**：`git -C summaries status --short` 里只应包含本轮脚本、测试和当天 notebook；不要把其它 agent 的记录或未知 dirty path 混入。

## 反例

- 只在 notebook 里写“以后要补测试”，但没有让错误路径可失败。
- 只跑当天真实 notebook，通过后就提交；这只能证明 happy path，不能证明规则会拦住坏输入。
- 把所有错误都压成一个 generic failure，导致下一轮 agent 不知道是路径、日期、字段还是工作目录问题。
- 在 `summaries/` 外的 dirty repo 里顺手修脚本，混入未知归属改动。

## 检查

本轮如果声称“增强了 Agent Cron 门禁”，最终记录至少要包含：

- 修改了哪一个入口脚本或测试脚本。
- 新增了哪个负例，负例的错误输出是什么。
- `summaries/scripts/test-check-hermes-notebook.sh` 与 `summaries/scripts/test-check-sh.sh` 是否都通过。
- `summaries/scripts/check.sh summaries/hermes/YYYY-MM-DD.md` 是否通过当天 notebook。
- 提交前 staged scope 是否只包含本轮相关路径。
