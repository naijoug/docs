---
title: 交付物打包不污染输出目录
icon: robot

index: true
order: 48

---

# 交付物打包不污染输出目录

当脚本把模板、手册、starter kit 或工作流包成 zip 时，输出目录应该只留下用户要拿走的交付物，而不是顺手留下 staging 目录、临时文件或本地绝对路径日志。打包脚本越接近收入资产，越需要把“可复现”和“无残留”当成发布标准。

<!-- more -->

## 适用场景

- `scripts/package-*.sh`、`make dist`、`npm run package` 等命令会生成 zip、tar、pdf 或站点包。
- 交付物可能被复制给客户、发布到下载页，或作为独立开发产品的 proof artifact。
- 上一轮已经把功能跑通，但执行后 `dist/`、`out/`、`build/` 等目录出现未跟踪 staging 目录。
- cron / agent 接力时，残留目录会被误判成用户改动，增加提交和回滚风险。

不适用：构建系统本身约定输出目录就是完整静态站点或构建缓存；这类目录应由 `.gitignore`、清理命令和部署流程单独管理。

## 原则

**输出目录只放最终交付物；中间态放临时目录并自动清理。**

一个可售包的脚本至少要同时满足三件事：

1. **归档内结构稳定**：zip / tar 里仍然有预期顶层目录，例如 `starter-kit/` 或 `prompt-handbook-standard/`。
2. **输出目录干净**：命令结束后 `--out-dir` 中只出现最终 artifact，不出现同名 staging 目录。
3. **日志可移植**：输出信息使用相对 artifact 名称或用户传入路径，不写本机绝对路径到文档或 notebook。

## 最小脚本模式

```bash
out_dir="${OUT_DIR:-dist}"
artifact_name="starter-kit.zip"
package_root_name="starter-kit"

mkdir -p "$out_dir"
staging_dir="$(mktemp -d)"
trap 'rm -rf "$staging_dir"' EXIT

package_root="$staging_dir/$package_root_name"
mkdir -p "$package_root"

# copy files into "$package_root" ...

(
  cd "$staging_dir"
  zip -qr "$OLDPWD/$out_dir/$artifact_name" "$package_root_name"
)
```

关键点不是 `mktemp` 本身，而是把“归档内顶层目录”和“输出目录中的最终文件”分开：前者服务用户解压体验，后者服务仓库卫生和接力判断。

## Smoke test 必须断言无残留

只检查 zip 存在还不够。测试要证明脚本不会污染输出目录：

```bash
tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

bash scripts/package-starter-kit.sh --out-dir "$tmp_dir/dist"

test -f "$tmp_dir/dist/starter-kit.zip"
test ! -d "$tmp_dir/dist/starter-kit"

entries="$(find "$tmp_dir/dist" -mindepth 1 -maxdepth 1 | wc -l | tr -d ' ')"
test "$entries" = "1"

unzip -l "$tmp_dir/dist/starter-kit.zip" | grep -q 'starter-kit/README.md'
```

这类断言能防住三种回归：

- staging 目录又被建回 `--out-dir`。
- artifact 名称变了但测试仍只看 exit code。
- zip 内顶层目录被打散，用户解压后得到一堆散文件。

## Agent 接力时的决策

| 观察 | 决策 | 动作 |
| --- | --- | --- |
| 打包 repo clean，脚本会留下 staging | Continue | 改为临时 staging，并补无残留测试 |
| 目标测试文件启动时已 dirty | Switch / Narrow | 不接管 unknown dirty；改写相邻文档或等待归属确认 |
| 脚本已无残留但缺少文档 | Asset switch | 写成教程、书稿卡片或技能 reference |
| 输出目录有历史残留但归属不明 | Stop cleanup | 只记录发现，不自动删除或提交 |

这张表的重点是：不要为了“顺手修干净”删除不属于本轮的文件；真正该提交的是脚本和测试里的防回归机制。

## 发布前检查清单

- [ ] `git status --short` 已记录，确认本轮只接管脚本 / 测试 / 文档 clean path。
- [ ] artifact 在新临时输出目录中生成成功。
- [ ] 输出目录没有 staging 目录或多余文件。
- [ ] zip / tar 内保留预期顶层目录和关键 README / 示例文件。
- [ ] `git diff --check -- <changed-files>` 通过。
- [ ] notebook 只写相对路径，例如 `makemoney/scripts/package-starter-kit.sh`，不写本地绝对路径。

## 可复用沉淀

如果同一 repo 连续修了多个打包脚本，不要无限扩同类测试。下一步优先抽象成：

- `docs/...` 的交付物打包准则，服务公开知识库。
- `skills/skills/...` 的 packaging review checklist，服务 agent 复用。
- `books/...` 的技术卡片，服务长期书稿资产。

只有当新的脚本仍存在真实残留风险时，才继续写代码；否则切到资产化，避免机械刷同一类小修。