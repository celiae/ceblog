---
title: "Git Github 开发角度"
excerpt: "项目里的所有文件添加到暂存区."
coverImage: "/assets/blog/git-github/git.svg"
date: "2022-05-14T19:56:57.322Z"
author:
  name: Celiae
  picture: "/assets/authors/celiae.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

## Git Github 的使用方法

### **官方文档**[Github Doc](https://docs.github.com)

### 写完代码更新版本同步到远端的流程

| Git          | Github       |
| ------------ | ------------ |
| 版本控制工具 | 代码托管平台 |

1. 在项目根文件夹下,新建仓库.敲完后项目文件夹产生一个.git 文件夹.

   ```sh
   git init
   ```

2. 将项目里的所有文件(-A)添加到暂存区(stage). -A:代指当前文件夹下所有文件

   ```sh
   git add -A
   ```

3. 接下来提交暂存区里的内容到仓库(repo)他会打开系统默认文本编辑器,根据提示写下更新注释,保存退出.如果环境变量 EDITOR=vim,他就打开 vim.

   ```sh
   git commit
   ```

4. 或者直接提交更新注释'message'

   ```sh
   git commit -m 'message'
   ```

5. 使用 ssh 私钥,如果没有配置密钥对 -> tips.配置密钥对

   ```sh
   eval $(ssh-agent)
   ```

   ```sh
   ssh-add /home/ceelia/.ssh/id_ed25519
   ```

6. 地址写自己的.添加远端仓库(Github),如果已添加->第 7 步

   ```sh
   git remote add origin \
   git@github.com:celiae/celiae.github.io.git
   ```

7. 将本地的 master(前) 分支推送到远端 master(后) 分支

   ```sh
   git push -u origin master:master
   ```

## tips

- 配置密钥对,根据提示生成密钥对存放在指定位置,默认在~/.ssh 下

  ```sh
  ssh-keygen -t ed25519 \
  -C "<your_email>@example.com"
  ```

  **公钥放在 Github 上,私钥留在自己电脑里只有自己知道**

- 查看状态,暂存区,仓库...

  ```sh
  git status
  ```

- 查看提交日志

  ```sh
  git log
  ```
