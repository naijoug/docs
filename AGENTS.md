# AGENTS.md

This document helps AI agents work effectively in this VuePress documentation repository.

## Project Overview

This is a personal programmer's knowledge base built with VuePress using the `vuepress-theme-hope` theme. The documentation is primarily in Chinese and covers programming concepts, algorithms, frontend/backend development, trending technologies, and interview preparation.

**Deployment**: GitHub Pages via GitHub Actions on push to main branch

## Essential Commands

```bash
# Development
pnpm run docs:dev          # Start development server
pnpm run docs:clean-dev    # Start dev server with clean cache

# Building
pnpm run docs:build        # Build for production

# Maintenance
pnpm run docs:update-package  # Update VuePress packages

# Node.js environment
Node version: 20
pnpm version: 8
```

## Code Organization

### Root Structure
```
docs/
├── package.json                  # Project config and scripts
├── .github/workflows/            # CI/CD configs
└── src/                          # Main documentation source
```

### Source Directory Structure (`src/`)
```
src/
├── .vuepress/                    # VuePress configuration
│   ├── config.ts                 # Main VuePress config
│   ├── theme/                    # Theme customization
│   │   ├── navbar.ts             # Navigation bar
│   │   ├── sidebar/              # Sidebar configurations
│   │   ├── styles/               # Custom SCSS
│   │   └── public/               # Static assets
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

**Main Config** (`src/.vuepress/config.ts`):
- Language: `zh-CN` (Chinese)
- Base path: `/docs/`
- Hostname: `https://naijoug.github.io/docs`

**Theme Config** (`src/.vuepress/theme/theme.ts`):
- Theme: `vuepress-theme-hope` (v2.0.0-rc.0)
- Icons: FontAwesome
- Comment system: Giscus (enabled)
- Sidebar sorting: `readme` → `order` → `filename` → `title`

**Sidebar Configs** (`src/.vuepress/theme/sidebar/`):
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

**Path Alias**: `@leetcode` → `src/leetcode/`

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

## Testing and Building

### Before Changes
1. Run `pnpm run docs:dev` to start local server
2. Verify navigation and sidebar structure
3. Check that new pages appear in correct order

### After Changes
1. Check build process: `pnpm run docs:build`
2. Validate no build errors
3. Test production output if possible

### CI/CD
- Automatic deployment to `gh-pages` branch on push to `main`
- Build runs in CI with `NODE_OPTIONS: --max_old_space_size=8192`
- Uses pnpm 8 and Node.js 20

## Important Gotchas

### VuePress Specific
- All content must be in `src/` directory
- VuePress config files are in `src/.vuepress/`, not root
- Static assets go in `src/.vuepress/public/` (not `public/`)
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
- Clean cache if experiencing issues: `pnpm run docs:clean-dev`
- Build output goes to `src/.vuepress/dist/`
- `.nojekyll` file is created automatically for GitHub Pages

## Adding New Content

### New Page
1. Create `.md` file with appropriate frontmatter
2. Add `title`, `icon`, `index`, and optionally `order`
3. Include `<!-- more -->` for preview control
4. Update sidebar config if using manual configuration

### New Section
1. Create directory under appropriate parent (e.g., `src/programmer/new-section/`)
2. Add `README.md` with `index: false` as section index
3. Add section to main sidebar config (`src/.vuepress/theme/sidebar/sidebar.ts`)
4. Consider adding to navigation bar (`src/.vuepress/theme/navbar.ts`)

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
