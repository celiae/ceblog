---
title: "Clash"
excerpt: "配置代理,访问真正的Internet"
coverImage: "/blog/clash/clash.png"
createdate: "2022-06-01"
modifydate: "2022-06-10"
---

## Clash 代理

### 安装 clash

```console
sudo pacman -S clash
```

### 获取你的配置文件

```console
sudo mkdir /etc/clash
```

取到的配置文件放在/etc/clash/下

### systemd

在 /etc/systemd/system/clash.service 中创建如下配置文件

```console
[Unit]
Description=Clash daemon, A rule-based proxy in Go.
After=network.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/clash -d /etc/clash -f /etc/clash/config.yaml

[Install]
WantedBy=multi-user.target
```

### 启动

```console
sudo systemctl enable --now clash.service
```
