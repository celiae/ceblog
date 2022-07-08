---
title: "Virtualbox"
excerpt: "虚拟机在arch的使用方法"
coverImage: "/assets/blog/ruankao/logo.png"
createdate: "2022-07-08T12:19:47.322Z"
modifydate: "2022-07-08T12:19:47.322Z"
smallImage: "/assets/blog/archlinux-installation/archlinux.svg"
---

## Virtualbox

先安装,他会给你两个选项

1. virtualbox-host-dkms
2. virtualbox-host-modules-arch (选这个)

```console
sudo pacman -S virtualbox virtualbox-guest-utils
```

启动发现用不了，找不到 `vboxdrv`. 安装模块:

```console
sudo pacman -S virtualbox-host-modules-arch
```

> 它与另一个包`virtualbox-host-dkms`相冲突,不过如要在 Arch 上使用 virtualbox 最简单就是安装`virtualbox-host-modules-arch`这个包

启用模块,还有网络模块.

```console
sudo modprobe vboxdrv
sudo modprobe vboxnetadp
sudo modprobe vboxnetflt
```

可以开刷
