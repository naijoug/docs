---
title: Github Action
icon: hashtag

index: true

---

<!-- more -->

## reference

- [GitHub Actions](https://github.com/actions)
    > Automate your GitHub workflows

## GITHUB_TOKEN


## Actions

- [GitHub Marketplace](https://github.com/marketplace)
    > Extend GitHub, Find tools to improve your workflow
- [awesome-actions](https://github.com/sdras/awesome-actions)
    > A curated list of awesome actions to use on GitHub

### 部署到 `GitHub Pages`

- [ghaction-github-pages](https://github.com/crazy-max/ghaction-github-pages) 
    > 

  登录 GitHub 进入项目 `Settings->Actions->General->Workflow permissions` 修改为 `Read and write permissions`

### 同步 `GitHub` 到 `Gitee`

- [hub-mirror-action](https://github.com/Yikun/hub-mirror-action)
    > 

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

### 打包 `Flutter` 程序并上传到 `Telegram`

- [flutter-action](https://github.com/subosito/flutter-action)
    > Flutter environment for use in GitHub Actions. It works on Linux, Windows, and macOS.
- [telegram-action](https://github.com/appleboy/telegram-action)
    > GitHub Action that sends a Telegram message.

```yml
name: Deploy apk to Telegram

# beta 分支触发
on:
  push:
    branches: [ beta ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-java@v2
        with:
          distribution: 'zulu'
          java-version: '11'
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.0' # Flutter 版本
      - run: flutter pub get
      - run: flutter build apk # 打包 Android apk
      
      # 获取时间戳信息
      - name: Get the date
        id: date
        run: | 
          echo "::set-output name=build-date::$(TZ=Asia/Shanghai date +'%Y-%m-%d %H:%M:%S')"
          echo "::set-output name=apk-date::$(TZ=Asia/Shanghai date +'%Y%m%d-%H%M%S')"
    
      # 根据时间戳重命名 apk
      - name: Rename APK
        run: mv ./build/app/outputs/flutter-apk/app-release.apk ./build/app/outputs/flutter-apk/app-${{ steps.date.outputs.apk-date }}.apk

      # 上传到 Telegram 
      - name: Upload to Telegram
        uses: appleboy/telegram-action@master
        with:
          to: ${{ secrets.TELEGRAM_TO }}        # TELEGRAM_TO    : 需要发送的用户或者群组的 ID
          token: ${{ secrets.TELEGRAM_TOKEN }}  # TELEGRAM_TOKEN : 发送 bot 的 token
          message: "New build (${{ steps.date.outputs.build-date }}) available."
          document: ./build/app/outputs/flutter-apk/app-${{ steps.date.outputs.apk-date }}.apk
```