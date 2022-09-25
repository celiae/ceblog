---
title: "刷机"
excerpt: "红米K20pro刷机(raphael)"
coverImage: "/blog/clash/clash.png"
createdate: "2022-06-01"
modifydate: "2022-06-10"
---

## 开始刷机

```console
adb reboot bootloader
```

```console
fastboot devices
```

```console
fastboot flash recovery twrp-3.6.0_9-0-raphael.img
```

```console
fastboot boot twrp-3.6.0_9-0-raphael.img
```

1. Recovery -> Format Data
2. Advanced -> 选择 Cache,System
3. 主页 -> Advanced -> ADB Slideload

```console
adb sideload PixelExperience_raphael-12.0-20211125-0124-BETA.zip
```

```console
adb reboot
```
