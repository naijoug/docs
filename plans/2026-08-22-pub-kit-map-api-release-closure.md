---
title: Pub Kit map API 发布收口计划
icon: robot
index: false
---

# Pub Kit `map` API 发布收口计划

- **Date**: 2026-08-22
- **Author**: Hermes cron
- **Status**: draft

## Goal

把 `pub_kit` 中新增的 `Result.map` 与 `LoadState.map` 从“代码草稿”收口为可发布 API：行为契约清晰、测试覆盖到错误/旧数据分支、README 示例可复制、发布 dry-run 仍保持 0 warning。

## Context

本计划来自一次无人值守心跳检查：`pub_kit/` 启动时已有未提交的 `lib/pub_kit.dart` 改动，新增了 `Result.map` 与 `LoadState.map`，但还没有看到同轮测试、示例或 changelog 配套。由于该 dirty path 归属不明，本轮不直接接管代码，而是把下一步收口动作写成可执行计划，供下一段在确认边界后继续。

## Non-Goals

- 不执行真实 `dart pub publish`。
- 不擅自修改 `LICENSE` owner/year。
- 不在未确认归属时格式化或批量修改 `pub_kit/` 全仓。
- 不扩大 API 面，例如暂不新增 `flatMap`、`recover`、`mapError`。

## Ownership

- Starting dirty paths observed: `pub_kit/lib/pub_kit.dart`、`docs/AGENTS.md`、`docs/documents/trending/ai/README.md`、`docs/documents/trending/ai/trigger-rule-tightening-loop.md`、`docs/plans/2026-07-21-repo-optimization.md`，以及其它子仓库既有 dirty paths。
- Owned by this plan: `docs/plans/2026-08-22-pub-kit-map-api-release-closure.md`。
- Avoided paths: `pub_kit/lib/pub_kit.dart` and all existing dirty files.
- Decision: **Narrow** — 先固定测试与文档收口清单，下一段再决定是否接管 `pub_kit` dirty diff。

## API Contract To Lock

| API | Success / data branch | Failure branch | Stale data branch | Must not change |
| --- | --- | --- | --- | --- |
| `Result<T>.map<R>` | `Result.success(value)` becomes `Result.success(convert(value))` | keeps `error` and `stackTrace` | n/a | must not invoke `convert` for failures |
| `LoadState<T>.map<R>` idle | remains idle | n/a | n/a | no synthetic data |
| `LoadState<T>.map<R>` loading | n/a | n/a | maps `previous` when present | loading branch stays loading |
| `LoadState<T>.map<R>` data | maps value | n/a | n/a | no change to lifecycle branch |
| `LoadState<T>.map<R>` failure | n/a | keeps `error` and `stackTrace` | maps `previous` when present | must not invoke `convert` when previous is absent |

## Milestones

### M1 — Contract tests

Add focused tests before expanding examples.

| Test | Expected proof |
| --- | --- |
| `Result.success(1).map((v) => '$v')` | returns `ResultSuccess<String>` with value `'1'` |
| `Result.failure(error, stackTrace: stack).map(...)` | returns `ResultFailure` with same `error` and `stackTrace`; converter call count is `0` |
| `LoadState.idle<int>().map(...)` | remains idle; converter call count is `0` |
| `LoadState.loading(previous: 1).map(...)` | remains loading with mapped previous value |
| `LoadState.loading<int>().map(...)` | remains loading with no previous; converter call count is `0` |
| `LoadState.data(1).map(...)` | returns data branch with mapped value |
| `LoadState.failure(error, previous: 1).map(...)` | remains failure, keeps error, maps previous |
| `LoadState.failure<int>(error).map(...)` | remains failure, converter call count is `0` |

### M2 — README quick-start sync

If tests pass, add a tiny `map` example to `pub_kit/README.md` near the existing quick start:

```dart
final title = Result.success({'title': 'Ship'}).map((json) => json['title'] as String);
```

Keep it short; the goal is to explain why `map` exists without turning README into an API reference.

### M3 — Changelog and release proof

Record the API addition in `pub_kit/CHANGELOG.md`, then run the existing release proof chain:

```bash
dart format --set-exit-if-changed lib test example
flutter test
flutter analyze
dart run example/pub_kit_example.dart
dart pub publish --dry-run
git diff --check
```

Expected result before commit: tests pass, analyze reports no issues, example output remains deterministic, dry-run reports `Package has 0 warnings.`

## Stop Conditions

- `pub_kit/lib/pub_kit.dart` has changed again before M1 starts and the new diff no longer matches the `map` API described here.
- Tests reveal a branch ambiguity, such as whether `LoadState.empty` should exist or whether stale `previous` should be preserved on all failures.
- Dry-run introduces a warning unrelated to the `map` API; fix or document that warning before adding more API surface.

## Next Safe Command

From `pub_kit/`, after confirming the current dirty diff is still only the `map` API:

```bash
git diff -- lib/pub_kit.dart
```

Then add only the M1 tests and run:

```bash
flutter test
```

If green, continue through M2 and M3; if red, keep the commit scoped to the failing contract fix and the matching tests.
