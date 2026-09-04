---
title: Standalone Test Runner 自动发现清单
icon: list-check

index: true
order: 99

---

# Standalone Test Runner 自动发现清单

很多小型脚本仓库会把测试写成“可被 pytest 收集，也能直接 `python3 tests/test_x.py` 运行”的双入口。风险在于：文件顶部不断新增 `test_*` 函数，但底部 standalone runner 仍维护一份手写清单，最后 CI 看起来绿，实际漏跑新增用例。

<!-- more -->

这张清单把 runner 改造成自动发现前的判断、改动方式和验收标准固定下来，适合 agent 在小步维护测试资产时复用。

## 适用信号

优先处理满足下面条件的测试文件：

- 文件内已有多个 `test_*` 函数，且底部存在 `for test in [...]`、`tests = [...]` 或逐个调用的手写 runner。
- 该文件被 shell 脚本、preflight 或 README 明确要求可直接执行，而不是只依赖 pytest。
- 新增测试时必须同时改 runner 清单，否则会出现 silent skip。
- 改动范围可以限制在一个测试文件，不需要重构业务代码。

不适合处理的情况：

- runner 需要固定随机种子、临时目录生命周期或跨进程顺序，自动排序会改变语义。
- 测试函数需要参数化框架、fixture 注入或 pytest marker 才能运行。
- 文件已经有清晰的测试注册 DSL，本轮只是看不懂；先读 DSL，不要替换。

## 改动模板

最小实现可以保留 `python3 tests/test_x.py` 的入口，只替换手写清单：

```python
from collections.abc import Callable
from typing import cast


def _standalone_tests() -> list[Callable[[], None]]:
    tests = [
        cast(Callable[[], None], value)
        for name, value in globals().items()
        if name.startswith("test_") and callable(value)
    ]
    return sorted(tests, key=lambda test: test.__code__.co_firstlineno)


if __name__ == "__main__":
    tests = _standalone_tests()
    for test in tests:
        test()
    print(f"regression tests ok: {len(tests)} test(s)")
```

设计要点：

- **只收集本模块 callable**：避免误把导入的常量、数据样例或 helper 当测试。
- **按源码行号排序**：保留人工阅读顺序，方便失败时对照上下文。
- **输出测试数量**：提交记录和 notebook 可以复核“本轮没有少跑”。
- **保留窄类型标注**：`Callable[[], None]` 足够表达 standalone runner 的约束；需要参数的测试不应由这个 runner 直接执行。

## 验证梯

改完后按从窄到宽执行：

1. `python3 tests/test_x.py`：确认 standalone 入口真实运行，并记录输出中的测试数量。
2. 仓库原有检查脚本，例如 `scripts/check.sh`、`python3 -m pytest` 或等价命令：确认框架入口没有被破坏。
3. `git diff --check -- tests/test_x.py`：确认没有空白错误。
4. `git status --short`：确认只留下本轮 owned path。

如果第 1 步通过、第 2 步失败，不要把失败藏在 summary 里；记录失败命令、exit code 和下一条安全命令。自动发现 runner 的价值是暴露真实入口差异，不是让所有失败看起来一致。

## 接力记录格式

```text
Target file:
Previous runner shape: manual list / direct calls / other
Discovered tests: <count>
Standalone command: <command + result>
Repo-wide check: <command + result>
Owned paths:
Skipped paths:
Next safe command:
```

## 停止条件

出现任一情况就停止在只读分诊，不要继续改：

- 目标 repo 启动前已有未知 dirty path，且 runner 文件在 dirty path 内。
- 现有 runner 故意跳过慢测试、外部服务测试或破坏性测试，但没有注释说明边界。
- 自动发现会执行导入进来的测试函数或依赖 pytest fixture 的函数。

这时下一步不是“强行自动化”，而是先补 runner contract 注释：哪些测试会被 standalone 入口执行，哪些必须交给 pytest 或 CI。