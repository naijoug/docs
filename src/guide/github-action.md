# Github Actions

## GITHUB_TOKEN


## Actions

- [ghaction-github-pages](https://github.com/crazy-max/ghaction-github-pages) : 部署到 GitHub Pages

> 登录 GitHub 进入项目 `Settings->Actions->General->Workflow permissions` 修改为 `Read and write permissions`

- [hub-mirror-action](https://github.com/Yikun/hub-mirror-action) : 同步 GitHub 到 Gitee

```shell
# 1> 创建 ssh 秘钥对 
$ ssh-keygen -t ed25519 -C "xxx@email.com" -f ~/.ssh/github-sync-to-gitee
# 2> 查看生成公钥
$ cat ~/.ssh/github-sync-to-gitee.pub
# 3> 登录 Gitee `设置->安全设置->SSH公钥` 添加同步公钥
# 4> 查看生成私钥
$ cat ~/.ssh/github-sync-to-gitee
# 5> 登录 GitHub 进入项目 `Settings->Security->Secrets and variabls->Actions` 
#    添加 repository secret 环境变量 (Name: GITEE_PRIVATE_KEY | Secret: 私钥)
# 6> 回到 Gitee `设置->安全设置->私人令牌` 创建 Gitee 令牌
# 7> 回到 GitHub 继续添加 repository secret 环境变量 (Name: GITEETOKEN | Secret: 创建的 Gitee 令牌)
```

```yml
name: sync-to-gitee
on:
  # 当 push 指定分支时触发 sync 
  push: 
    branches:
      - main
      - gh-pages
jobs:
  repo-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Mirror the Github organization repos to Gitee.
        uses: Yikun/hub-mirror-action@master
        with:
          src: "github/naijoug"
          dst: "gitee/naijoug"
          dst_key: ${{ secrets.GITEE_PRIVATE_KEY }}
          dst_token: ${{ secrets.GITEE_TOKEN }}
          static_list: "docs" 
          force_update: true
          debug: true
```