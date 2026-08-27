# AGENTS.md

This document helps AI agents work effectively in this VuePress documentation repository.

## Project Overview

This is a personal programmer's knowledge base built with VuePress using the `vuepress-theme-hope` theme. The documentation is primarily in Chinese and covers programming concepts, algorithms, frontend/backend development, trending technologies, and interview preparation.

**Deployment**: GitHub Pages via GitHub Actions on push to main branch

## Essential Commands

```bash
# Development
cd web/vuepress
npx -y pnpm@8.15.9 run docs:dev          # Start development server
npx -y pnpm@8.15.9 run docs:clean-dev    # Start dev server with clean cache

# Building
cd web/vuepress
npx -y pnpm@8.15.9 run docs:build        # Build for production

# Maintenance
cd web/vuepress
npx -y pnpm@8.15.9 run docs:update-package  # Update VuePress packages

# Node.js environment
Node version: 20
pnpm version: 8
```

If the local default `pnpm` is already version 8, `pnpm run ...` is fine. Otherwise prefer the pinned `npx -y pnpm@8.15.9 ...` form above.

## Code Organization

### Root Structure
```
docs/
├── README.md                     # Repository usage and boundary guide
├── documents/                    # Canonical markdown/media content source
├── web/vuepress/                 # VuePress renderer project
│   ├── package.json              # VuePress project config and scripts
│   ├── pnpm-lock.yaml            # VuePress lockfile
│   ├── README.md                 # Renderer-local usage notes
│   └── .vuepress/                # VuePress configuration
├── .github/workflows/            # CI/CD configs
├── plans/                        # Implementation plans
└── summaries/                    # Draft/generated summaries not published by default
```

### Content Directory Structure (`documents/`)
```
documents/
├── .vuepress/styles -> ../../web/vuepress/.vuepress/styles
├── programmer/                   # Programmer essential skills
│   ├── core/                     # Data structures & algorithms
│   ├── network/                  # Networking knowledge
│   ├── system/                   # Operating systems
│   ├── biz/                      # Business knowledge
│   └── tool/                     # Useful tools
├── programming/                  # Programming knowledge
│   ├── lang/                     # Programming languages
│   └── topic/                    # Programming concepts
├── frontend/                     # Frontend development
│   ├── client/                   # Mobile clients (iOS, Android, Flutter)
│   └── web/                      # Web technologies
├── backend/                      # Backend development
│   ├── server/                   # Server technologies
│   ├── database/                 # Databases
│   └── service/                  # Service frameworks
├── trending/                     # Trending technologies
│   ├── ai/                       # AI/ML topics
│   └── blockchain/               # Blockchain
├── leetcode/                     # LeetCode problems
│   ├── problems/                 # Problem sets (by range)
│   ├── solutions/                # Solution strategies
│   └── books/                    # Reference books
├── interview/                    # Interview preparation
├── article/                      # Articles and readings
└── guide.md                      # Documentation catalog
```

### VuePress Configuration

**Main Config** (`web/vuepress/.vuepress/config.ts`):
- Language: `zh-CN` (Chinese)
- Base path: `/docs/`
- Hostname: `https://naijoug.github.io/docs`
- Public assets: `web/vuepress/.vuepress/public`

**Theme Config** (`web/vuepress/.vuepress/theme/theme.ts`):
- Theme: `vuepress-theme-hope` (v2.0.0-rc.0)
- Icons: FontAwesome
- Comment system: Giscus (enabled)
- Sidebar sorting: `readme` → `order` → `filename` → `title`
- Edit links use `docsDir: "documents"`

**Sidebar Configs** (`web/vuepress/.vuepress/theme/sidebar/`):
- `sidebar.ts` - Main sidebar entry point
- `programmer.ts` - Programmer skills sidebar
- `programming.ts` - Programming knowledge sidebar
- `frontend.ts` - Frontend sidebar
- `backend.ts` - Backend sidebar
- `trending.ts` - Trending tech sidebar
- `article.ts` - Articles sidebar
- `interview.ts` - Interview prep sidebar
- `leetcode.ts` - LeetCode sidebar
- `builder.ts` - Utility class for sidebar construction

## Markdown Frontmatter Patterns

Every markdown file should include frontmatter:

```yaml
---
title: Page Title
icon: hashtag              # FontAwesome icon name

index: true                # Controls page indexing (true/false)
order: 1                   # Controls sidebar order (optional)

---
```

### Common Icons
- `hashtag` - General topics
- `robot` - AI/ML
- `code` - Code/Programming
- `database` - Database
- `server` - Server/Backend
- `laptop-code` - Development
- `book` - Documentation/Books
- `lightbulb` - Solutions/Ideas

## Markdown Conventions

### Content Preview
Use `<!-- more -->` to mark content preview on index pages:

```markdown
Introduction text...

<!-- more -->

Detailed content follows...
```

### Multi-Language Code Tabs
Use `::: code-tabs` with `@tab` for multiple languages:

```markdown
::: code-tabs

@tab java
```java
String s = "Hello";
```

@tab python
```python
s = "Hello"
```

:::
```

### Content Inclusion
Include external markdown sections using path aliases:

```markdown
<!-- @include: @leetcode/problems/0x0100.md#0125 -->
```

**Path Alias**: `@leetcode` → `documents/leetcode/`

### Collapsible Details
Use `::: details` for collapsible content:

```markdown
::: details 💡 Solution Details

Detailed explanation...

:::
```

### Link Formatting
- Internal links: Use relative paths without `.md` extension
- External links: Include GitHub repo icon: `[title](url) 👉🏻 [🐙](repo-url)`

## Naming Conventions

### Files and Directories
- Use lowercase with hyphens for multi-word filenames: `code-style.md`
- Use `0x` prefix for ordered content in algorithms/leetcode: `0x01.string.md`, `0x0000.md`
- Use `README.md` for category index pages

### LeetCode Files
- Problem sets grouped by range: `0x0000.md` (0000-0099), `0x0100.md` (0100-0199)
- Solutions by strategy: `two-pointer.md`, `sliding-window.md`

### Media Files
- Place images in `media/` subdirectory of the topic
- Use descriptive names: `vue-lifecycle.png`, `swift-method-dispatch.jpeg`

## Content Organization Patterns

### Algorithm Topics
For algorithm-related pages in `programmer/core/algorithm/` and `leetcode/`:

```markdown
## [Algorithm Name]

### Problem Type

[Description with emoji indicators]

::: details 💡
[Solution approach]
:::

::: code-tabs
@tab [Language]
[code]
:::
```

**Difficulty Indicators**:
- 🟢 Easy
- 🟠 Medium
- 🔴 Hard

### Reference Sections
Include a `## reference` section at the top for resources:

```markdown
## reference

- [Documentation](url)
- [Tutorial](url) 👉🏻 [🐙](repo-url)
```

### Concept Tables
Use markdown tables for concepts/comparisons:

```markdown
| Term | Full Name | Description |
|------|-----------|-------------|
| API  | Application Programming Interface | ... |
```

## Sidebar Configuration

### Sidebar Builder Utility
Use the `Builder` class from `builder.ts`:

```typescript
import { Builder } from "./builder";

// Auto-generated structure from files
Builder.structure("Section Title", "section/", "section/", "hashtag", true)

// Grouped manual configuration
Builder.group("Group Title", "group/", [
  Builder.page("Subpage 1", "subpage1/"),
  Builder.page("Subpage 2", "subpage2/")
], "prefix", "hashtag", true)

// Single page
Builder.page("Page Title", "page/")
```

### Sidebar Structure Options
- `"structure"` - Auto-generate from file structure
- Manual array - Explicit page/group configuration
- `collapsible: true/false` - Control expandability
- `prefix` - Link prefix for child pages

## AI-assisted Change Workflow

Use this section when an AI agent creates, edits, or reviews a change in this repository.

1. **Start with ownership.** Capture the initial `git status --short` summary, name the paths you will touch, and explicitly list dirty paths you will not take over.
2. **Use the repo entry points.** For AI-generated PRs, fill `.github/pull_request_template.md`; for sample collection or audit requests, use `.github/ISSUE_TEMPLATE/ai-coding-audit.yml` before turning the request into code or documentation work.
3. **Keep the verification ladder small and reproducible.** Record the first safe command, the stronger command, and any command that was intentionally not run. Link the evidence in the PR body instead of replacing it with “tested”.
4. **End with `Continue / Narrow / Stop`.** Continue only when scope and verification are clear; narrow when the request is useful but too broad; stop when the change would require taking over unknown dirty work or making an unverified claim.
5. **Use the documentation chain when explaining the workflow.** Public explanation: `documents/trending/ai/ai-generated-pr-review-entry.md`; service-style audit: `documents/trending/ai/ai-coding-audit-service.md`; sample report: `documents/trending/ai/ai-coding-audit-mock-report.md`.

Minimum handoff block for agent-authored PRs:

```markdown
- Starting `git status --short` summary:
- Owned paths:
- Avoided dirty paths:
- Verification run:
- Not verified:
- Continue / Narrow / Stop:
```

## Testing and Building

### Before Changes
1. Capture the initial `git status --short` summary and decide which paths you own.
2. For content-only edits, prefer a narrow proof first: `python3 scripts/check-markdown-proof.py <changed-markdown-or-directory>`.
3. For renderer, sidebar, or navigation edits, run `cd web/vuepress && npx -y pnpm@8.15.9 run docs:dev` and verify the affected navigation or page order.

### After Changes
1. Run the changed-file proof gate from the repo root: `python3 scripts/check-markdown-proof.py --changed-from HEAD`.
2. If the change touches checker logic, link handling, frontmatter rules, or broad content structure, also run the regression and full-content baseline:
   - `python3 scripts/test-check-markdown-proof.py`
   - `python3 scripts/check-markdown-proof.py documents`
3. For renderer, sidebar, theme, or build-related edits, run `cd web/vuepress && npx -y pnpm@8.15.9 run docs:build`.
4. Report any command intentionally not run as an explicit unverified item; do not replace it with “tested”.

### CI/CD
- Automatic deployment to `gh-pages` branch on push to `main`
- Build runs in CI with `NODE_OPTIONS: --max_old_space_size=8192`
- Uses pnpm 8 and Node.js 20

## Important Gotchas

### VuePress Specific
- All canonical content must be in `documents/`
- VuePress config files are in `web/vuepress/.vuepress/`, not root
- Static renderer assets go in `web/vuepress/.vuepress/public/` (not `public/`)
- Theme Hope reads SCSS from `sourceDir/.vuepress/styles`; keep `documents/.vuepress/styles` as the minimal compatibility symlink to `web/vuepress/.vuepress/styles`
- Base path is `/docs/` - internal links should account for this

### Markdown Processing
- HTML comments `<!-- -->` are processed by VuePress plugins
- Custom syntax like `::: code-tabs` requires vuepress-theme-hope
- Frontmatter is required for proper indexing and ordering

### File Path Handling
- Use absolute paths when referencing assets in markdown
- Sidebar link prefixes should include trailing slash: `"section/"`
- The `include` directive supports path aliases defined in theme config

### Sidebar Auto-Generation
- Uses `sidebarSorter`: `readme` → `order` → `filename` → `title`
- Files with higher `order` values appear first
- `index: false` in frontmatter excludes from sidebar index
- `.gitkeep` files are ignored by sidebar generation

### Build Considerations
- Clean cache if experiencing issues: `cd web/vuepress && npx -y pnpm@8.15.9 run docs:clean-dev`
- Build output goes to `web/vuepress/.vuepress/dist/`
- The GitHub Actions deploy workflow creates `web/vuepress/.vuepress/dist/.nojekyll`

## Adding New Content

### New Page
1. Create `.md` file with appropriate frontmatter
2. Add `title`, `icon`, `index`, and optionally `order`
3. Include `<!-- more -->` for preview control
4. Update sidebar config if using manual configuration

### New Section
1. Create directory under appropriate parent (e.g., `documents/programmer/new-section/`)
2. Add `README.md` with `index: false` as section index
3. Add section to main sidebar config (`web/vuepress/.vuepress/theme/sidebar/sidebar.ts`)
4. Consider adding to navigation bar (`web/vuepress/.vuepress/theme/navbar.ts`)

### LeetCode Problems
1. Add to appropriate range file (e.g., `0x0300.md` for problems 0300-0399)
2. Use `// #region ####` markers for problem boundaries
3. Include difficulty indicator, link, description, and solutions
4. Reference from algorithm concept pages using `@include`

## Theme-Specific Features

### Enabled Plugins (from `theme.ts`)
- **comment**: Giscus integration for discussions
- **mdEnhance**: Multiple markdown enhancements
  - `align`: Text alignment
  - `codetabs`: Code language tabs
  - `demo`: Code demo components
  - `figure`: Enhanced figures
  - `imgLazyload`: Lazy image loading
  - `imgSize`: Image size attributes
  - `include`: File inclusion with path aliases
  - `mark`: Text highlighting
  - `playground`: Interactive code playgrounds
  - `sub`/`sup`: Subscript/superscript
  - `tabs`: Tabbed content
  - `vPre`: Vue directive support

### Disabled Features (commented out)
- `chart` (requires chart.js)
- `component`
- `echarts`
- `flowchart` (requires flowchart.ts)
- `katex`
- `mathjax` (requires mathjax-full)
- `mermaid`
- `pwa` (progressive web app)

## Language and Style

- Primary language: Chinese (zh-CN)
- Technical terms often bilingual (Chinese with English in parentheses)
- Code examples in various languages: Java, Python, Swift, Dart, JavaScript, etc.
- Use clear section headers with emoji indicators where appropriate
- Maintain consistent formatting across similar content types
