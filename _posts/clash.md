---
title: "Clash"
excerpt: "创建如下配置文件"
coverImage: "/assets/blog/clash/clash.png"
createdate: "2022-06-01T15:53:36.322Z"
modifydate: "2022-06-01T16:48:36.322Z"
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
