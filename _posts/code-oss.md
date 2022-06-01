---
title: "Code-OSS 编程"
excerpt: "Code-OSS 需要的化可以安装 AUR 包 code-marketplace"
coverImage: "/assets/blog/code-oss/code-oss.png"
createdate: "2022-05-26T15:48:36.322Z"
modifydate: "2022-06-01T15:48:36.322Z"
smallImage: "/assets/blog/code-oss/code-oss.svg"
---

## Code-OSS

人们熟知 vscode 是当今很流行的代码编辑器,而 Code-OSS 则是它的开源版本.它们之间的关系就好比 chrome 与 chromium 的关系,可能我的理解有误,没有仔细了解过.详细搜索为真.

### 安装 Code-OSS

- 用 pacman 安装.当然安装的是开源版本 Code-OSS,而不是 VScode

  ```console
    sudo pacman -S code
  ```

### Code-OSS 默认的插件源不是微软的 VSCode 插件源,需要的化可以安装 AUR 包 code-marketplace

- 使用 VSCode 插件源

  ```console
  yay -S code-marketplace
  ```

### 启动 Code-OSS

- 在终端中启动

  ```console
  code .
  ```

- 通过 Code-OSS 打开文件夹

  > 文件管理器操作

#### **Github Copilot 运行情况**

- [x] Code-OSS
- [ ] VScode
