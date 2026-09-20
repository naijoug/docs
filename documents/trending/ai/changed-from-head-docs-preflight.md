---
title: changed-from HEAD 文档改动 Preflight
icon: list-check

index: true
order: 42

---

# changed-from HEAD 文档改动 Preflight

`python3 scripts/check-markdown-proof.py --changed-from HEAD` 检查尚未提交的 tracked Markdown 改动和 untracked Markdown，忽略非 Markdown 文件。它会包含启动前已有的脏文件，文件归属仍需要显式核对。

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

`--exclude` 只能用于“本轮不接管”的路径；如果排除后变成 `no markdown files changed since HEAD`，说明当前检查集合为空，不能把这个失败当作通过。

如果本轮文件已经提交，这条空集合提示只说明基线选择不对，不能据此判断没有交付。验证已提交分支时，确认目标分支并取其 merge-base 提交，使用 `--changed-from <base-commit>`。有无关脏文件时也可以直接检查本轮文件列表；不要同时传文件列表和 `--changed-from`，混用会被拒绝。

删除或重命名页面时还要检查整个 `documents/`，因为指向旧路径的页面可能没有被修改。变更集合检查本身不覆盖这些入站链接。

## 输出判读

```text
documents/trending/ai/README.md
documents/trending/ai/new-page.md
documents/trending/ai/ai-doc-change-proof-adoption-log.md
markdown proof ok: checked 3 file(s)
```

这表示 checker 至少读到了 3 个相对 `HEAD` 变更过的 Markdown 文件，并完成 local link、include 文件目标和绝对路径检查；发布文章还检查 frontmatter/title，仓库指南免除文章元数据要求。列出的文件还要人工核对：是否包含所有本轮交付文件、是否混入旧脏路径、是否漏掉未暂存的新页面。它不表示页面渲染正确，也不表示锚点存在。

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
