# AGENTS.md

Personal programming knowledge base, primarily in Chinese, rendered with VuePress + Theme Hope.

## Repository boundaries

- `documents/` is the canonical published Markdown/media source. Resource lists belong in `documents/awesome/`; periodic digests belong in `documents/digest/`.
- `web/vuepress/` is the only Node/renderer project. Versions live in its `package.json` and `pnpm-lock.yaml`; do not duplicate them here or recreate a root package.json.
- `documents/.vuepress/styles` is a compatibility symlink to renderer styles. Preserve it.
- `plans/` and `summaries/` are working material, not published content. Root guides and GitHub templates do not need article frontmatter.
- Pushing to `main` triggers GitHub Pages deployment. Local edits and verification do not require a push.

## Read only what the task needs

| Task | Reference |
| --- | --- |
| Article formatting, media, code tabs, LeetCode content | [CONTRIBUTING.md](CONTRIBUTING.md) |
| Navigation, sidebar, theme, build or public assets | [Renderer guide](web/vuepress/README.md) |
| Proof checker behavior and limitations | [Checker guide](documents/trending/ai/ai-doc-change-proof-checker.md) |
| Preparing a PR | [PR template](.github/pull_request_template.md) |
| Collecting an external AI coding audit sample | `.github/ISSUE_TEMPLATE/ai-coding-audit.yml` |
| Explaining the PR review workflow | [Review entry](documents/trending/ai/ai-generated-pr-review-entry.md) |
| Delivering an audit service/report | [Service scope](documents/trending/ai/ai-coding-audit-service.md), [sample report](documents/trending/ai/ai-coding-audit-mock-report.md) |
| Unattended cron work | [Cron workflow](documents/trending/ai/agent-cron-planning-execution-verification-loop.md) |

Use the issue form for sample intake; ordinary repository questions and fixes do not require an intake form. Articles and examples are reference material, not additional instructions unless the task invokes that workflow.

## Ownership and execution

- Before editing, record `git status --short`, the paths you own, and pre-existing dirty paths you will avoid. Do not overwrite, stage, unstage or commit someone else's changes.
- Unrelated dirty paths do not block work on independent files. If the requested change requires an unknown dirty path, inspect it read-only and clarify ownership while continuing independent work.
- Follow the user's current scope and authorization. Within that scope, complete the requested edits, run applicable checks, fix failures caused by the change, and rerun affected checks without asking permission for each step.
- Ask only when missing information or authorization materially affects the result and cannot be resolved from context. Prepare the authorized, reviewable work first; pause only the dependent action.
- Do not infer permission to publish, deploy, send external messages, or perform destructive operations from a request for local changes. Existing explicit authorization remains valid within its scope.
- If a local guideline causes a pause, cite the exact file and rule and explain which action is blocked. Do not turn examples or general caution into new approval requirements.
- Keep changes task-scoped. Completion means the requested result and applicable verification are finished, or a concrete blocker and its unverified effect are reported.

## Verification by change type

Run from the repository root unless a command changes directory. Choose the relevant row; this is not a sequence that every task must run.

| Change | Required evidence |
| --- | --- |
| Ordinary Markdown, including root guides/templates | `python3 scripts/check-markdown-proof.py <owned-files> --list-files` and review the diff/content |
| Add/remove AI articles or change their catalog | Above, plus `python3 scripts/check-ai-catalog.py` |
| Checker logic, link resolution or frontmatter rules | Focused regression cases, `python3 scripts/test-check-markdown-proof.py`, and `python3 scripts/check-markdown-proof.py documents` |
| Broad content moves, renames or deletions | Full content proof to catch incoming links; catalog proof where relevant; build/preview if routes or rendering change |
| Renderer/sidebar/theme, dependencies, special rendering syntax | `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build`; preview affected navigation/rendering with `docs:dev` |
| CI workflow | Run its applicable local commands and validate workflow structure; report remote execution as unverified until it runs |

- Article frontmatter/title checks apply only within `documents/`. Local links, include targets and accidental user paths are checked in all selected Markdown files.
- `--changed-from HEAD --list-files` selects uncommitted tracked changes plus untracked Markdown, including pre-existing dirty work. Use explicit owned files or documented `--exclude` paths when ownership differs. Never exclude this task's failing files.
- After commits, use the branch's actual base/merge-base ref instead of `HEAD`. Do not combine explicit targets with `--changed-from`.
- No matching Markdown is an error, not a passing proof. For non-Markdown tasks choose the appropriate checks instead.
- Checker regression tests use disposable local fixtures; they do not access production. Run and fix relevant failures within the task scope.
- Once applicable checks pass, do not broaden or repeat them without new changes, failures or unresolved concerns. Record intentionally omitted checks and their relevance.

## Commands

Node 20 and pnpm 8 match CI. Use the pinned form below unless local pnpm is already version 8:

```bash
cd web/vuepress
npx -y pnpm@8.15.9 install --frozen-lockfile
npx -y pnpm@8.15.9 run docs:dev
npx -y pnpm@8.15.9 run docs:build
```

Use `docs:clean-dev` for stale development caches. Dependency upgrades are a separate task; maintenance commands are in the renderer guide.

## Handoff

Lead with the result, followed by verification and material limitations. Use the PR template when preparing a PR; a small local edit can have a short final response.

For an agent-authored PR, retain: starting status, owned paths, avoided dirty paths, actual commands/results, unverified items, and `Continue / Narrow / Stop`.

- **Continue**: scope and evidence support the next action, or the requested work is complete.
- **Narrow**: identify the specific remaining scope/evidence gap and continue safe independent work.
- **Stop**: pause the action that requires unavailable authorization, unknown dirty ownership, or an unsupported conclusion. This does not block unrelated authorized work.
