# GitHub 工具搜索 Skill

这是一个自动化的 GitHub 工具搜索和文档生成工具。

## 功能特点

- 🔍 在 GitHub 上搜索指定类型的工具
- 📊 按照 stars 数量自动排序
- 🚫 **自动过滤已归档的项目** - 只显示活跃维护中的工具
- 📅 **显示最后更新时间** - 帮助判断项目活跃度
- 📝 自动生成格式化的 Markdown 文档
- 🎯 支持按编程语言过滤
- 📦 自动归档到 `src/frontend/web/tool/` 目录

## 使用方法

### 方式一:直接运行 Python 脚本

```bash
# 基本用法:搜索 top 10
python3 .claude/skills/github-search.py "screenshot tool"

# 指定数量
python3 .claude/skills/github-search.py "markdown editor" 15

# 按语言过滤
python3 .claude/skills/github-search.py "screenshot tool" 10 JavaScript
```

### 方式二:使用 Claude Code Skill

在 Claude Code 中直接使用:

```
/github-search screenshot tool
```

参数说明:
- `query`: 搜索关键词 (必需)
- `--count`: 返回数量 (可选,默认 10)
- `--language`: 编程语言过滤 (可选)
- `--output`: 输出文件名 (可选)

## 示例

### 搜索截图工具

```bash
python3 .claude/skills/github-search.py "screenshot tool" 10
```

生成的文档:
- 包含 top 10 个截图工具
- 按 stars 排序
- 包含详细信息(描述、语言、License、官网等)
- 自动保存到 `src/frontend/web/tool/screenshot-tool-top-10.md`

### 搜索 Markdown 编辑器

```bash
python3 .claude/skills/github-search.py "markdown editor" 15 JavaScript
```

搜索 JavaScript 编写的 Markdown 编辑器,返回 top 15。

## 生成的文档格式

文档包含以下部分:

1. **Frontmatter**: 标题、图标、索引配置
2. **简介**: 说明文档内容和排序规则,特别说明已过滤归档项目
3. **Top 列表**: 快速浏览的表格形式
4. **详细信息**: 每个工具的完整介绍
   - 作者信息
   - 编程语言
   - License
   - **最后更新时间** (新增)
   - 项目描述
   - 官网链接(如果有)
   - GitHub 标签
   - GitHub 链接
5. **参考资源**: 搜索关键词、时间、数据来源

## 智能过滤功能

- **自动过滤已归档项目**: 使用 GitHub 搜索查询 `archived:false` 过滤
- **二次验证**: 在获取结果后再次检查 `archived` 字段
- **只返回活跃项目**: 确保推荐的都是正在维护的工具

## 技术栈

- Python 3.x
- GitHub REST API
- Markdown 生成

## 文件结构

```
.claude/skills/
├── github-search.md    # Skill 配置文件
├── github-search.py    # Python 实现脚本
└── README.md          # 本文档
```

## 注意事项

1. GitHub API 有请求频率限制(未认证时每小时 60 次)
2. 如果需要更高频率,可以设置 GitHub Token 环境变量
3. 搜索结果会实时从 GitHub 获取,确保数据的准确性
4. 生成的文件名会自动转换为 kebab-case 格式
5. **已自动过滤归档项目**,只推荐活跃维护的工具
6. **最后更新时间**可以帮助判断项目活跃度

## 扩展建议

未来可以考虑:
- ✅ ~~添加更多过滤条件(比如:最近更新时间、issues 数量等)~~ 已实现最后更新时间
- ✅ ~~过滤已归档项目~~ 已实现
- 支持导出为其他格式(JSON、CSV 等)
- 添加缓存机制减少 API 调用
- 支持批量搜索多个关键词
- 添加项目活跃度评分系统
