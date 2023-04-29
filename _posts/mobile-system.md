---
title: "Pixel"
excerpt: "红米K20pro刷机(raphael)"
createdate: "2022-06-01"
modifydate: "2022-06-10"
category: "post"
---

## 开始刷机

### 准备工作

1. 一台装有android tool的电脑
2. 数据线
3. 系统包
4. twrp包
5. 要刷的手机

### 打开命令行终端并用数据线连接电脑与手机

#### 重启手机到 **fastboot**, 手机会息屏并重启到 **fastboot**

```bash
adb reboot bootloader
```

查看在 **fastboot** 状态下的设备.

```bash
fastboot devices
```

刷入 **twrp** , 类似一种小系统, 手机的 **bios**.

```bash
fastboot flash recovery <twrp.img>
```

重启到 twrp.

```bash
fastboot boot <twrp.img>
```

### 在 **twrp** 上的设置

1. Swipe to Unlock 滑动解锁
2. Wipe -> Format Data -> 输入yes -> 确定 格式化手机
3. 返回主页面 -> Wipe -> Advanced Wipe -> 选择 Cache,System -> Swipe to Wipe 清楚系统缓存
4. 主页 -> Advanced -> ADB Slideload -> Swipe to Start Sideload 开始等待加载被刷入系统

### 开始刷入系统

#### <system.zip> 取决于下载的系统, 你可以选择其它系统包. 我实际测试过**魔趣**这个系统可以用. 其它的例如cdDroid E..都不行

```bash
adb sideload <system.zip>
```

#### 重启. 完毕

```bash
adb reboot
```

## 安装后要做的事

系统设置向导会使用到 **google** , 可以在设置成离线模式. 之后在通过飞机什么的好好利用 **google** . 拥有 **google** 服务才是我选择这个系统的核心动力

### 提前准备代理软件

举个例子, 准备一个 clash for android 在电脑上. 刷完机, 设置完密码什么的, 先传输clash for android到手机上, 在拔线. 之后在手机上找到传输来的软件 APK , 直接安装, 在导入配置文件, 很NICE. 在完成代理后, 可以再继续 google 设置.

### Tiktok  怎样成功启动

现在是2022-11-2. tiktok 有很完善的检测机制. 要运行 tiktok 必须满足以下条件:

1. 系统语言为 English
2. 禁用 +86(中国) 的SIM卡
3. 开启代理(科学上网)
