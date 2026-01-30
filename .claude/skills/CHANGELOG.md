# 更新日志

## v1.2.0 (2026-01-22)

### 🎉 优化改进

- ✨ **优化表格显示**: 改进 Top 列表表格的描述字段
  - 将描述长度限制在 30 个字符以内
  - 超出部分显示 ".." 而不是 "..."
  - 表格更加简洁易读,不会导致换行
- 🐛 **修复表格渲染问题**: 修复表格行之间有空行导致 Markdown 渲染失败的问题
  - 移除 `"\n".join()` 中的额外换行
  - 确保表格行之间紧密相连
  - Markdown 表格现在可以正确渲染

### 📝 效果对比

**v1.1.0 (旧版本)**:
```markdown
| 排名 | 名称 | Stars | 语言 | 描述 |
|------|------|-------|------|------|
| 1 | [ksnip](https://github.com/ksnip/ksnip) | 3.1k | C++ | ksnip the cross-platform screenshot and annotation... |

| 2 | [tools-ocr](https://github.com/AnyListen/tools-ocr) | 3.1k | Java | 树洞 OCR 文字识别... |
```
❌ 表格行之间有空行,渲染失败

**v1.2.0 (新版本)**:
```markdown
| 排名 | 名称 | Stars | 语言 | 描述 |
|------|------|-------|------|------|
| 1 | [mantine](https://github.com/mantinedev/mantine) | 30.4k | TypeScript | A fully featured React compone.. |
| 2 | [primitives](https://github.com/radix-ui/primitives) | 18.5k | TypeScript | Radix Primitives is an open-so.. |
```
✅ 表格行之间无空行,正确渲染

## v1.1.0 (2026-01-22)

### 🎉 新增功能

- ✨ **智能过滤归档项目**: 自动排除已归档、不再维护的 GitHub 仓库
  - 使用 GitHub API 查询参数 `archived:false`
  - 二次验证项目的 `archived` 状态
  - 只返回活跃维护中的项目

- ✨ **显示最后更新时间**: 为每个工具添加"最后更新"字段
  - 显示项目最后一次更新的日期
  - 帮助判断项目活跃度
  - 格式化 ISO 8601 日期为易读格式

### 📝 文档改进

- 更新 README.md,添加智能过滤功能说明
- 更新 USAGE.md,说明新增的过滤和时间显示功能
- 在生成的文档开头说明"不包含已归档的项目"

### 🔧 技术改进

- 优化搜索策略,获取更多结果以确保过滤后仍有足够数量
- 添加日期格式化函数 `format_date()`
- 在详细信息模板中添加最后更新时间字段

### 🐛 修复问题

- 修复了包含已归档项目的搜索结果问题
- 例如: neofetch (23.5k stars) 等已归档项目不再出现在结果中

## v1.0.0 (2026-01-22)

### 🎉 首次发布

- ✨ GitHub 工具搜索基础功能
- ✨ 按 stars 数量自动排序
- ✨ 支持按编程语言过滤
- ✨ 自动生成 Markdown 文档
- ✨ 自动归档到指定目录

---

## 使用示例对比

### v1.0.0 (旧版本)
```bash
python3 github-search.py "screenshot tool" 5
```

结果包含:
- neofetch (23.5k stars) - **已归档** ⚠️
- wraith (4.8k stars) - **已归档** ⚠️
- ksnip (3.1k stars) ✓
- tools-ocr (3.1k stars) ✓
- normcap (2.5k stars) ✓

### v1.1.0 (新版本)
```bash
python3 github-search.py "screenshot tool" 5
```

结果包含:
- ksnip (3.1k stars) ✓ - 最后更新: 2026-01-22
- tools-ocr (3.1k stars) ✓ - 最后更新: 2026-01-18
- normcap (2.5k stars) ✓ - 最后更新: 2026-01-22
- wayback (2.1k stars) ✓ - 最后更新: 2026-01-22
- codeimage (2.0k stars) ✓ - 最后更新: 2026-01-22

**改进**: 所有结果都是活跃维护中的项目!
