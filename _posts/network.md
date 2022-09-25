---
title: "Network"
excerpt: "先启动 NetworkManager,这是前提."
coverImage: "/blog/network-manager/network-manager.png"
createdate: "2022-05-26"
modifydate: "2022-06-13"
---

## NetworkManager WIFI 联网

NetworkManager 一般是桌面软件需要的联网工具

- 安装 networkmanager 包

  ```console
  sudo pacman -S networkmanager
  ```

- 先启动 NetworkManager

  ```console
  sudo systemctl enable --now NetworkManager
  ```

### 两种方式

1. 图形界面 -安装 GNOME 桌面,点点点操作
2. 终端界面 - nmcli

   联网

   ```console
    nmcli dev wifi con "Cafe Hotspot 1" \
    password caffeine name "My cafe"
   ```

   查看具体手册

   ```console
   man nmcli
   ```
