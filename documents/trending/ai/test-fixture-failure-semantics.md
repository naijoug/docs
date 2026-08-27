---
title: 测试 Fixture 失败语义化
icon: bug

index: true
order: 90

---

# 测试 Fixture 失败语义化

AI 结对编程时，测试失败不只要说明“红了”，还要让下一轮能立刻判断红灯来自产品逻辑、测试断言、环境缺失还是 fixture 准备失败。测试里的裸 `unwrap()`、无消息 `assert!`、忽略清理错误，会把这些信息压缩成一条泛化 panic，增加接力成本。

<!-- more -->

这张卡的目标很小：在不改变生产逻辑的前提下，把测试 fixture 的失败点改成可定位、可接手、可复制到 notebook 或 PR 报告的语义化证据。

## 适用场景

- 同一组测试会在 agent 心跳、CI、本地 review 中反复运行。
- 测试里有大量 fixture 创建、文件写入、临时目录清理、外部命令启动或 adapter stub 调用。
- 失败输出只有 `called Result::unwrap()`、`assertion failed`、`No such file or directory`，但看不出是哪一步。
- 本轮只适合做低风险测试可诊断性改进，不适合重构生产路径。

不适用：你还不知道测试是否覆盖真实风险，或需要改业务行为才能让测试通过。那时先回到 [AI 编程验证优先工作流](verification-first-ai-coding.md) 定义风险与最小验证。

## 操作流程

### 1. 先标出 fixture 阶段

把测试拆成 5 类失败来源，不要一上来全局替换：

| 阶段 | 常见代码 | 失败信息应该说明 |
| --- | --- | --- |
| 准备目录 | `create_dir_all(...).unwrap()` | 哪个 fixture root / 子目录无法创建 |
| 写入输入 | `write(...).unwrap()` | 哪个输入文件、用于哪个场景 |
| 启动外部命令 | `Command::new(...).output().unwrap()` | 启动失败，还是子命令 exit 失败 |
| 调用被测函数 | `function(...).unwrap()` | 预期成功的业务前提是什么 |
| 清理现场 | `remove_dir_all(...).unwrap()` 或忽略结果 | 清理失败是否影响后续测试 |

每条消息都写“动作 + 语义对象”，例如 `write pre-existing git fixture`，不要只写 `failed`。

### 2. 只改测试失败信息，不顺手改语义

安全改法：

```rust
std::fs::create_dir_all(&root)
    .expect("create task repository lock fixture root");

save_task(&task)
    .expect("save initial task for repository lock release test");
```

带子命令的测试要拆成两层：

```rust
let output = Command::new("git")
    .args(args)
    .current_dir(repo)
    .output()
    .expect("start git command for baseline fixture");

assert!(
    output.status.success(),
    "git command failed for baseline fixture: {args:?}\nstdout: {}\nstderr: {}",
    String::from_utf8_lossy(&output.stdout),
    String::from_utf8_lossy(&output.stderr),
);
```

不要把 `expect` 文案写成“应该不会失败”。它应该告诉下一轮：如果这里失败，先检查什么。

### 3. 给清理失败留边界

临时目录清理失败不一定代表业务失败，但会污染后续测试或本地环境。选择一种明确策略：

- 清理属于测试契约：用 `expect("remove ... fixture root")`；
- 清理只是 best-effort：显式写注释或记录错误，不要静默丢弃；
- 清理可能受平台影响：在 handoff 里写未验证边界，而不是假装完全覆盖。

### 4. 用聚焦验证闭环

测试失败语义化的小改，不需要默认跑全量构建。最小 proof 通常是：

```bash
cargo fmt --manifest-path src-tauri/Cargo.toml
cargo test <module-or-test-name> --manifest-path src-tauri/Cargo.toml
git diff --check -- <changed-test-file>
```

如果测试跨外部命令、文件系统权限或平台行为，再追加对应 smoke test。最终 notebook 只记录命令和结果，不复制整段 diff。

## 判断清单

提交前确认：

- 每个新 `expect(...)` 都能回答“哪一步失败”。
- 没有把生产代码的锁、进程、网络错误处理伪装成测试文案优化。
- 没有为了消除 `unwrap()` 改变断言顺序、错误类型或业务返回值。
- 聚焦测试覆盖了本轮涉及的模块。
- 最终报告写清未接管 dirty path 和未验证边界。

## 反例

| 反例 | 问题 |
| --- | --- |
| `unwrap()` 全局替换成 `expect("ok")` | 文案没有语义，diff 噪音变大 |
| 顺手把 production `Mutex::lock().unwrap()` 改成吞错 | 行为变化，不再是测试可诊断性改进 |
| 测试红灯时只写“环境问题” | 没有说明是命令启动、fixture 缺失还是断言失败 |
| 清理失败完全忽略 | 下一轮可能遇到同名临时目录污染 |

## 与现有资产的关系

- 用 [从项目实现到可复用资产](project-implementation-to-reusable-asset.md) 判断是否已经有足够真实切片再资产化。
- 用 [下一条安全命令梯](next-safe-command-ladder.md) 把“再跑测试”改写成带风险、pass/fail 语义和停止条件的验证梯。
- 如果要同步到书稿，可参考 `books/tech-cards-handbook/chapters/ai-agent/proof-output-must-be-portable.md` 的原则，避免把本机绝对路径复制进 handoff。

这张卡适合作为 agent 处理测试可诊断性小修复时的默认边界：先让失败输出可读，再决定是否需要更大的测试设计或生产逻辑修改。
