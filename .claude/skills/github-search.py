#!/usr/bin/env python3
"""
GitHub 工具搜索脚本
用于搜索 GitHub 上的工具并生成 Markdown 文档
"""

import json
import re
import urllib.request
import urllib.parse
import urllib.error
from datetime import datetime
from typing import List, Dict, Optional


class GitHubSearcher:
    """GitHub 搜索器"""

    def __init__(self):
        self.base_url = "https://api.github.com"

    def _make_request(self, url: str) -> Dict:
        """发送 HTTP 请求"""
        try:
            req = urllib.request.Request(url)
            # 添加 User-Agent
            req.add_header('User-Agent', 'GitHub-Search-Skill')
            req.add_header('Accept', 'application/vnd.github.v3+json')

            with urllib.request.urlopen(req, timeout=10) as response:
                return json.loads(response.read().decode('utf-8'))

        except urllib.error.URLError as e:
            print(f"请求失败: {e}")
            return {}
        except Exception as e:
            print(f"解析失败: {e}")
            return {}

    def search_repos(
        self,
        query: str,
        count: int = 10,
        language: Optional[str] = None
    ) -> List[Dict]:
        """
        搜索 GitHub 仓库

        Args:
            query: 搜索关键词
            count: 返回数量
            language: 编程语言过滤

        Returns:
            仓库列表
        """
        # 构建搜索查询
        search_query = query
        if language:
            search_query += f" language:{language}"

        # 排除已归档的仓库
        search_query += " archived:false"

        # 按 stars 排序
        params = {
            "q": search_query,
            "sort": "stars",
            "order": "desc",
            "per_page": min(count * 2, 100)  # 获取更多结果,因为要过滤掉一些
        }

        url = f"{self.base_url}/search/repositories?{urllib.parse.urlencode(params)}"
        data = self._make_request(url)

        # 进一步过滤,确保没有已归档的项目,并返回指定数量
        items = data.get("items", []) if data else []
        active_repos = [repo for repo in items if not repo.get("archived", False)]

        return active_repos[:count]

    def get_repo_details(self, owner: str, repo: str) -> Dict:
        """
        获取仓库详细信息

        Args:
            owner: 仓库所有者
            repo: 仓库名称

        Returns:
            仓库详细信息
        """
        url = f"{self.base_url}/repos/{owner}/{repo}"
        return self._make_request(url)


def format_number(num: int) -> str:
    """格式化数字,例如 1000 -> 1k"""
    if num >= 1000000:
        return f"{num / 1000000:.1f}M"
    elif num >= 1000:
        return f"{num / 1000:.1f}k"
    return str(num)


def format_date(date_string: str) -> str:
    """格式化日期,例如 2024-01-15T10:30:00Z -> 2024-01-15"""
    try:
        # 处理 ISO 8601 格式
        if 'T' in date_string:
            return date_string.split('T')[0]
        return date_string
    except:
        return date_string


def clean_filename(name: str) -> str:
    """清理文件名,转换为 kebab-case"""
    # 移除特殊字符
    name = re.sub(r'[^\w\s-]', '', name)
    # 转换为小写并用连字符连接
    return re.sub(r'[-\s]+', '-', name).lower().strip()


def generate_markdown(
    repos: List[Dict],
    query: str,
    count: int,
    language: Optional[str] = None
) -> str:
    """
    生成 Markdown 文档

    Args:
        repos: 仓库列表
        query: 搜索关键词
        count: 返回数量
        language: 编程语言

    Returns:
        Markdown 内容
    """
    # 生成标题
    tool_name = query.replace(" tool", "").replace(" tools", "").title()
    title = f"{tool_name} Top {count} 推荐"

    # 生成 frontmatter
    frontmatter = f"""---
title: {title}
icon: hashtag
index: true
---

"""

    # 生成简介
    language_text = f" ({language})" if language else ""
    intro = f"""# {title}

本文整理了 GitHub 上最受欢迎的 {count} 个 {tool_name}{language_text} 工具,按照 stars 数量排序。所有工具均为活跃维护中,不包含已归档的项目。

<!-- more -->

"""

    # 生成表格
    table_header = """## Top {count} 列表

| 排名 | 名称 | Stars | 语言 | 描述 |
|------|------|-------|------|------|
""".format(count=count)

    table_rows = []
    for idx, repo in enumerate(repos, 1):
        name = repo.get("name", "N/A")
        stars = format_number(repo.get("stargazers_count", 0))
        lang = repo.get("language", "N/A")

        # 表格中的描述限制在 30 个字符以内
        desc = repo.get("description", "暂无描述")
        if desc and len(desc) > 30:
            desc = desc[:30] + ".."
        elif not desc:
            desc = "暂无描述"

        url = repo.get("html_url", "")

        table_rows.append(
            f"| {idx} | [{name}]({url}) | {stars} | {lang} | {desc} |"
        )

    # 表格行之间不能有空行,否则渲染失败
    table = table_header + "\n".join(table_rows)

    # 生成详细信息
    details_section = f"\n\n---\n\n## 详细信息\n\n"

    details = []
    for idx, repo in enumerate(repos, 1):
        name = repo.get("name", "N/A")
        owner = repo.get("owner", {}).get("login", "N/A")
        owner_url = repo.get("owner", {}).get("html_url", "")
        stars = format_number(repo.get("stargazers_count", 0))
        lang = repo.get("language", "N/A")
        license_info = repo.get("license", {}).get("name", "未知") if repo.get("license") else "未指定"
        desc = repo.get("description", "暂无描述")
        url = repo.get("html_url", "")
        homepage = repo.get("homepage", "")

        # 获取最后更新时间
        updated_at = format_date(repo.get("updated_at", ""))

        detail_item = f"""### {idx}. [{name}]({url}) ⭐ {stars}

**作者**: [{owner}]({owner_url})
**语言**: {lang}
**License**: {license_info}
**最后更新**: {updated_at}

{desc}

"""

        if homepage:
            detail_item += f"""**官网**: [{homepage}]({homepage})

"""

        # 提取特点 (从 description 或 topics)
        topics = repo.get("topics", [])
        if topics:
            detail_item += f"""**标签**: {', '.join(f'`{topic}`' for topic in topics[:5])}

"""

        detail_item += f"""**GitHub**: 👉🏻 [🐙]({url})

"""

        details.append(detail_item)

    # 生成参考资料
    current_date = datetime.now().strftime("%Y-%m-%d")
    reference = f"""
---

## 参考资源

- 搜索关键词: `{query}` {f'| 语言过滤: `{language}`' if language else ''}
- 搜索时间: {current_date}
- 数据来源: [GitHub](https://github.com)
"""

    return frontmatter + intro + table + details_section + "\n".join(details) + reference


def main():
    """主函数"""
    import sys

    # 解析命令行参数
    query = sys.argv[1] if len(sys.argv) > 1 else "screenshot tool"
    count = int(sys.argv[2]) if len(sys.argv) > 2 and sys.argv[2].isdigit() else 10
    language = sys.argv[3] if len(sys.argv) > 3 and not sys.argv[3].startswith("--") else None

    # 搜索
    print(f"🔍 搜索 GitHub: {query}")
    if language:
        print(f"📝 语言过滤: {language}")
    print(f"📊 返回数量: {count}")

    searcher = GitHubSearcher()
    repos = searcher.search_repos(query, count, language)

    if not repos:
        print("❌ 未找到相关仓库")
        return

    print(f"✅ 找到 {len(repos)} 个仓库")

    # 生成 Markdown
    markdown = generate_markdown(repos, query, count, language)

    # 生成文件名
    filename = clean_filename(f"{query}-top-{count}")

    # 获取项目根目录 (从 .claude/skills/ 返回到根目录)
    import os
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(os.path.dirname(script_dir))
    output_path = os.path.join(project_root, f"src/frontend/web/tool/{filename}.md")

    # 确保目录存在
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    # 保存文件
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(markdown)

    print(f"✅ 文档已生成: {output_path}")
    print(f"📝 包含 {len(repos)} 个工具")


if __name__ == "__main__":
    main()
