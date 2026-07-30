---
title: 测试契约先数据化再扩分支
icon: table

index: true
order: 64

---

# 测试契约先数据化再扩分支

当一个 smoke test 同时维护“应该存在”“明确豁免”“特殊页面规则”几组清单时，不要继续在主循环里叠 `if/else`。先把页面、schema、豁免原因和特殊规则合并成一张决策表，再让测试从表中派生断言。

<!-- more -->

## 适用场景

- 站点、API、打包产物或配置校验需要维护 expected / exempt 两类对象。
- 新增页面或交付物时，经常忘记加入清单，或者同时出现在 expected 与 exempt。
- 主循环已经拆出命名断言，但输入清单仍分散在多个 dict、array 或 hard-coded branch 中。
- 你希望失败信息直接告诉接手者“该补数据表行”，而不是让对方读完整脚本。

不适用：只有一两个固定断言、且对象集合不会增长的测试。过早数据化会让简单测试变成小框架。

## 原则

**先把测试契约写成一张表，再从表派生分类和断言。**

决策表至少要回答四个问题：

| 字段 | 作用 | 最小规则 |
|---|---|---|
| `id` / `page` / `artifact` | 被检查对象 | 必填且唯一。 |
| `expected_type` / `expected_contract` | 应该满足的契约 | 与豁免原因二选一。 |
| `exemption_reason` | 为什么明确豁免 | 豁免时必填非空，不能只写 `skip`。 |
| `notes` / `case` | 特殊规则说明 | 可选；只记录会影响断言分支的事实。 |

数据表不是为了“看起来高级”，而是为了让新增对象必须先做一个显式决策：`Expected`、`Exempt`、`Narrow` 或 `Stop`。

## 最小实现模式

```python
page_decisions = [
    {"page": "index.html", "expected_schema_type": "CollectionPage"},
    {"page": "ai-daily.html", "expected_schema_type": "Blog"},
    {"page": "legacy.html", "exemption_reason": "static landing page without structured data"},
]


def build_decision_maps(rows):
    expected = {}
    exempt = {}
    seen = set()
    for row in rows:
        page = row.get("page")
        if not page:
            raise AssertionError(f"decision row missing page: {row!r}")
        if page in seen:
            raise AssertionError(f"duplicate decision for {page}")
        seen.add(page)

        expected_type = row.get("expected_schema_type")
        reason = row.get("exemption_reason")
        if bool(expected_type) == bool(reason):
            raise AssertionError(f"{page} must have exactly one schema decision")
        if expected_type:
            expected[page] = expected_type
        else:
            exempt[page] = reason.strip()
            if not exempt[page]:
                raise AssertionError(f"{page} exemption reason must be non-empty")
    return expected, exempt
```

随后主测试只做三件事：

1. 从决策表构建 expected / exempt map；
2. 检查实际对象集合是否全部显式分类；
3. 对 expected 对象调用命名断言，对 exempt 对象确认没有意外输出。

## 拆分顺序

1. **先跑原测试。** 记录当前通过输出，确认你不是在修失败业务逻辑。
2. **先抽命名断言，再抽数据表。** 如果主循环还混着 schema basics、页面特殊规则和 presence check，先拆函数；否则数据表会掩盖真实分支。
3. **合并 expected / exempt。** 把多张清单变成单一决策表，并加唯一性、二选一、非空原因检查。
4. **保留派生 map。** 不要一次性重写所有业务断言；先从决策表派生旧结构，降低行为变化风险。
5. **补负向契约。** 新增对象未分类、重复分类、豁免无原因，都应产生明确失败。
6. **跑统一入口。** 除了目标测试，还要跑项目里的 `scripts/check.sh`、`make test` 或 CI 同等入口，确认数据化没有绕过其他检查。

## 示例记录

```text
Observation: tests/test-site-json-ld.sh had expected pages and explicit exemptions in separate maps.
Risk: a new HTML page could be missing from both maps, or an exempt page could lose its reason.
Minimal change: merge both maps into json_ld_page_decisions and derive expected/exempt maps.
Verification: bash tests/test-site-json-ld.sh && bash scripts/check.sh && git diff --check -- tests/test-site-json-ld.sh.
Decision: Continue; future special schema rules can be grouped by data rows before adding branches.
```

## 常见反模式

- **继续堆分支。** 每新增一个页面就在主循环里加 `if page == ...`，三个月后没人知道哪些页面必须有契约。
- **豁免没有原因。** `expected_no_json_ld_pages = {"foo.html": ""}` 让跳过变成沉默失败。
- **双表漂移。** 同一对象同时在 expected 和 exempt，测试顺序决定结果。
- **数据表绕过业务断言。** 把 contract 写成字符串后，没有调用对应的 `assert_*` 函数。
- **只跑目标脚本。** 数据化改动可能影响统一检查入口；至少再跑一次项目级 check。

## 检查清单

- 数据表是否覆盖所有实际对象？
- 每行是否有唯一对象标识？
- expected 与 exempt 是否强制二选一？
- 豁免是否必须写明非空原因？
- 特殊规则是否仍由命名断言验证，而不是只存在于注释里？
- notebook 或 PR 描述是否写清本轮没有改变业务契约，只改变契约组织方式？
