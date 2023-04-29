---
title: "Code"
excerpt: "VSCode开源版本,前端语言编写而成的IDE"
createdate: "2022-05-26"
modifydate: "2022-07-08"
category: "develop"
---

## Code-OSS

人们熟知 vscode 是当今很流行的代码编辑器,而 Code-OSS 则是它的开源版本.它们之间的关系就好比 chrome 与 chromium 的关系,可能我的理解有误,没有仔细了解过.详细搜索为真.

### 安装 Code-OSS

用 pacman 安装.当然安装的是开源版本 Code-OSS,而不是 VScode

```bash
  sudo pacman -S code
```

### Code-OSS 默认的插件源不是微软的 VSCode 插件源,需要的化可以安装 AUR 包 code-marketplace

使用 VSCode 插件源

```bash
yay -S code-marketplace
```

### 启动 Code-OSS

在终端中启动

```bash
code .
```

### Python `Import`

在 code-oss 导入 python 模块时，code 只会扫描`全局` pip 模块安装位置.在虚拟环境中安装的模块不会被 code 探测到.所以如果想要某个模块的代码补全,最简单的就是直接将模块安装到全局

也就是:

```bash
pip install scrapy
```

而不是在虚拟环境中:

```bash
python3 -m venv tutorial-env
pip install scrapy
```
