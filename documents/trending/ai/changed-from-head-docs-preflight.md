---
title: changed-from HEAD 文档改动 Preflight
icon: list-check

index: true
order: 42

---

# changed-from HEAD 文档改动 Preflight

`python3 scripts/check-markdown-proof.py --changed-from HEAD` 适合 agent 在一次文档小改后自动收束检查范围：它应该同时覆盖已修改的目录入口、新增但未暂存的 markdown，并忽略非 markdown 杂项。

<!-- more -->

## 什么时候用

- 本轮新增了一个 AI 文档页面，并同步改了 `README.md` catalog。
- 本轮只改少量 markdown，手动列文件容易漏掉新建页或采纳记录。
- 需要在完整 VuePress build 前先得到一个 10 秒内的 pass/fail proof。

不要把它用于替代完整构建：sidebar、主题配置、组件渲染、include 锚点是否存在，仍交给 `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build`。

## 执行顺序

1. **改前固定基线**：确认 `docs/` 是 clean，或明确哪些 dirty path 不属于本轮。
2. **先跑窄目标 preflight**：对准备修改的入口页和说明页运行一次显式目标检查，确认不是在旧破损上继续叠加。
3. **完成文档改动**：新增页面、更新 `README.md` catalog，并在需要时追加采纳记录。
4. **改后跑自动范围检查**：执行 `python3 scripts/check-markdown-proof.py --changed-from HEAD --list-files`，确认列出的文件正好覆盖新增页面、修改过的入口页和采纳记录。
5. **再决定是否 build**：如果改动触及 VuePress sidebar、include、主题配置或大范围目录入口，追加完整 build；否则记录 checker 输出即可。

如果仓库里已有明确不属于本轮的脏 markdown，先把它写进交接记录，再用显式排除命令保持 proof 可审计：

```bash
python3 scripts/check-markdown-proof.py --changed-from HEAD --exclude AGENTS.md --list-files
```

`--exclude` 只能用于“本轮不接管”的路径；如果排除后变成 `no markdown files changed since HEAD`，说明本轮还没有可验证文档交付，不能把这个失败当作通过。

## 输出判读

```text
documents/trending/ai/README.md
documents/trending/ai/new-page.md
documents/trending/ai/ai-doc-change-proof-adoption-log.md
markdown proof ok: checked 3 file(s)
```

这表示 checker 至少读到了 3 个相对 `HEAD` 变更过的 markdown 文件，并完成 frontmatter、local link、include 文件目标和绝对路径检查。列出的文件还要人工核对：是否包含所有本轮交付文件、是否混入旧脏路径、是否漏掉未暂存的新页面。它不表示页面渲染正确，也不表示锚点存在。

失败时优先修最小问题：

```text
markdown proof failed: 1 issue(s) in 3 file(s)
- documents/trending/ai/new-page.md:24: broken local link `missing.md`
```

如果失败来自 checker 漏报/误报，再把最小样例补进 `scripts/test-check-markdown-proof.py`；如果失败来自文档本身，先修文档，不要扩规则。

## 本轮交付卡片

```text
Experiment: changed-from HEAD docs preflight adoption
Risk: 新增 markdown + 修改 README 时，agent 手动列文件漏掉新页面或采纳记录
Artifact: 一页执行说明 + README catalog + adoption log
Pass means: --changed-from HEAD --list-files 输出包含本轮新增页、README 和采纳记录，且 checker 通过
Fail means: 输出漏掉新增页，或 checker 报断链/frontmatter/绝对路径问题
Excluded: VuePress sidebar、页面渲染、include 锚点存在性
Next evidence needed: 下一次目录入口或新页面改动继续使用 --changed-from HEAD --list-files，并观察是否需要补删除/重命名 fixture
Decision: Continue
```

## 与采纳记录的关系

每次真实使用 `--changed-from HEAD --list-files` 时，只记录四件事：

- 本轮哪些 markdown 应该被自动收束；
- 命令列出的实际检查集合是否覆盖了这些文件；
- 是否用了 `--exclude`，以及被排除路径为什么不属于本轮；
- 是否发现需要改变计划的问题。

如果连续多次只是通过且没有新发现，就把它固定为默认 preflight，不再围绕 checker 写同主题说明页。
