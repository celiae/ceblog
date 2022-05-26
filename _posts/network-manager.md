---
title: "NetworkManager"
excerpt: "先启动 NetworkManager,这是前提."
coverImage: "/assets/blog/network-manager/network-manager.png"
date: "2022-05-26T15:48:36.322Z"
author:
  name: Celiae
  picture: "/assets/authors/celiae.jpg"
smallImage: "/assets/blog/network-manager/network-manager.svg"
---

## NetworkManager WIFI 联网

先启动 NetworkManager,这是前提.在 archiso 安装命令行也是 ArchLinux 完整安装过程里执行过可以跳过此步.

```console
sudo systemctl enable --now NetworkManager
```

### 两种方式

1. 安装 GNOME 桌面,点点点操作(图形界面)
2. nmcli(终端界面)

   联网

   ```console
    nmcli dev wifi con "Cafe Hotspot 1" \
    password caffeine name "My cafe"
   ```

   查看具体手册

   ```console
   man nmcli
   ```
