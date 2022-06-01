---
title: "Clash"
excerpt: "在实体机器上安装ArchLinux "
coverImage: "/assets/blog/clash/clash.png"
createdate: "2022-05-14T15:48:36.322Z"
modifydate: "2022-05-14T15:48:36.322Z"
smallImage: "/assets/blog/archlinux-installation/archlinux.svg"
---

## Clash 代理

### 安装 clash

```console
sudo pacman -S clash
```

### systemd

在 /etc/systemd/system/clash.service 中创建如下配置文件

```console
[Unit]
Description=Clash daemon, A rule-based proxy in Go.
After=network.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/clash -d /etc/clash

[Install]
WantedBy=multi-user.target
```

### 启动

```console
sudo systemctl enable clash.service
```
