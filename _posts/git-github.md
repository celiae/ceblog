---
title: "Git - Github"
excerpt: "Git本地提交,上传Github"
coverImage: "/blog/git-github/git.png"
createdate: "2022-05-14"
modifydate: "2022-06-10"
smallImage: "/blog/git-github/git-icon.svg"
---

## Git Github 的使用方法

**Github 文档**[Github Doc](https://docs.github.com)

**Git 文档**[Git Pro](https://)

### 写完代码更新版本同步到远端的流程

| Git          | Github       |
| ------------ | ------------ |
| 版本控制工具 | 代码托管平台 |

1. 在项目根文件夹下,新建仓库.敲完后项目文件夹产生一个.git 文件夹.

   > 先赐予当前目录版本控制系统

   ```console
   git init
   ```

2. 将项目里的所有文件(-A)添加到暂存区(stage). -A:代指当前文件夹下所有文件

   > 觉得代码写的有一定数量了

   ```console
   git add -A
   ```

3. 接下来提交暂存区里的内容到仓库(repo)他会打开系统默认文本编辑器,根据提示写下更新注释,保存退出.如果环境变量 EDITOR=vim,他就打开 vim.

   > 代码完成，功能测试完毕

   ```console
   git commit
   ```

   或者直接提交更新注释'message'

   ```console
   git commit -m 'message'
   ```

4. 使用 ssh 私钥,如果没有配置密钥对 -> tips.配置密钥对

   ```console
   eval $(ssh-agent)
   ```

   ```console
   ssh-add /home/ceelia/.ssh/id_ed25519
   ```

5. 地址写自己的.添加远端仓库(Github)

   ```console
   git remote add origin \
   git@github.com:celiae/celiae.github.io.git
   ```

6. 将本地的 master(前) 分支推送到远端 master(后) 分支

   ```console
   git push -u origin master:master
   ```

### tips

- 配置密钥对,根据提示生成密钥对存放在指定位置,默认在~/.ssh 下

  ```console
  ssh-keygen -t ed25519 \
  -C "<your_email>@example.com"
  ```

  **公钥放在 Github 上,私钥留在自己电脑里只有自己知道**

- 查看状态,暂存区,仓库...

  ```console
  git status
  ```

- 查看提交日志

  ```console
  git log
  ```
