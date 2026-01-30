# GitHub 工具搜索 Skill 使用指南

## ✨ 已完成的功能

1. ✅ **自动搜索**: 在 GitHub 上搜索指定类型的工具
2. ✅ **智能排序**: 按 stars 数量自动排序
3. ✅ **过滤归档项目**: 自动排除已归档、不再维护的项目
4. ✅ **显示更新时间**: 显示每个项目的最后更新时间
5. ✅ **格式化文档**: 生成符合 VuePress 规范的 Markdown 文档
6. ✅ **语言过滤**: 支持按编程语言过滤结果
7. ✅ **自动归档**: 自动保存到 `src/frontend/web/tool/` 目录

## 🚀 快速开始

### 方式一:命令行使用

```bash
# 基本用法
python3 .claude/skills/github-search.py "搜索关键词" [数量] [语言]

# 示例
python3 .claude/skills/github-search.py "screenshot tool" 10
python3 .claude/skills/github-search.py "markdown editor" 15 JavaScript
python3 .claude/skills/github-search.py "vue component library" 20 TypeScript
```

### 方式二:在 Claude Code 中使用

```
/github-search 搜索关键词 --count 10 --language JavaScript
```

## 📊 生成示例

已成功生成以下文档:
- `screenshot-tool-top-5.md` - 截图工具 Top 5
- `markdown-editor-top-8.md` - Markdown 编辑器 Top 8

## 📝 文档结构

生成的文档包含:
- **Frontmatter**: 符合 VuePress 规范的元数据
- **快速浏览**: Top 列表表格
- **详细信息**: 每个工具的完整介绍
  - 作者信息
  - Stars 数量
  - 编程语言
  - License
  - **最后更新时间** (新增功能)
  - 项目描述
  - 官网链接
  - GitHub 标签
  - GitHub 链接

## 🎯 智能过滤

- **自动排除归档项目**: 使用 GitHub API 的 `archived:false` 查询
- **二次验证**: 在获取结果后再次检查项目的 `archived` 状态
- **只推荐活跃项目**: 确保所有推荐的工具都在积极维护中
- **显示更新时间**: 帮助你判断项目的活跃程度

## 🎯 使用场景

1. **工具调研**: 快速了解某个领域最流行的工具
2. **技术选型**: 为项目选择合适的开源工具
3. **知识整理**: 建立工具知识库
4. **文档生成**: 自动生成工具推荐文档

## 🔧 参数说明

| 参数 | 类型 | 必需 | 说明 | 默认值 |
|------|------|------|------|--------|
| query | string | ✅ | 搜索关键词 | - |
| count | number | ❌ | 返回数量 | 10 |
| language | string | ❌ | 编程语言过滤 | 无 |

## 💡 提示

- GitHub API 有频率限制(未认证时 60 次/小时)
- 搜索关键词使用英文效果更好
- 可以使用 Google 搜索语法优化搜索结果
- 文件名会自动转换为 kebab-case 格式
- **归档项目已自动过滤**,不用担心看到已停止维护的项目
- **最后更新时间**可以帮助你判断项目是否还在活跃开发

## 📂 文件位置

```
.claude/skills/
├── github-search.md      # Skill 配置
├── github-search.py      # Python 脚本
├── README.md            # 说明文档
└── USAGE.md             # 使用指南(本文件)

src/frontend/web/tool/
├── screenshot-tool-top-5.md      # 示例: 截图工具
└── markdown-editor-top-8.md      # 示例: Markdown 编辑器
```

## 🎨 定制化

如需定制输出格式,可以修改 `github-search.py` 中的 `generate_markdown()` 函数。

## 🔮 未来计划

- [x] 支持更多过滤条件(更新时间) - ✅ 已实现
- [x] 过滤归档项目 - ✅ 已实现
- [ ] 添加缓存机制减少 API 调用
- [ ] 支持批量搜索
- [ ] 生成可视化图表
- [ ] 自动更新侧边栏配置
- [ ] 添加项目活跃度评分

## 📞 反馈

如有问题或建议,欢迎反馈!
