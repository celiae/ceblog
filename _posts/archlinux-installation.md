---
title: "Arch安装"
excerpt: "在实体机器或虚拟机上安装 ArchLinux"
createdate: "2022-05-14"
modifydate: "2022-09-23"
category: "linux"
---

## 在实体机器上安装 ArchLinux

在硬盘上安装 Archlinux.grub 来引导单/双系统.读者需要有一定的计算机基础知识,并能看懂博客语言,轻微的专业术语.

- 发行版 `ArchLinux`
- 启动模式 `UEFI`
- 硬盘加密 `无`
- 双系统 `略微提到`
- 分区结构 `多分区`
- 桌面系统 `xfce`

### 准备工作

1. 一个没有数据的 U 盘
2. 一台电脑
3. 能连上互联网

> 这些是最少要求.后面烧录会覆盖 U 盘中的数据,做好备份.如果想装双系统(比如 Windows+ArchLinux),目前只有 Windows,那就先在 Windows 上做好磁盘分区,下载好 Linux 系统镜像,利用 Ether 将镜像烧录到 U 盘中

### 磁盘分区

#### Windows(图形化)

在磁盘管理中对有空闲的磁盘压缩,生成一个无格式的分区

> 仔细观察会发现有一个`efi`分区,这个是启动分区,底层硬件会先加载此分区,从而决定加载哪个分区的系统.后期引导程序`GRUB`就是安装在`efi`分区,**伏笔**.

#### Linux

利用 `cfdisk` 工具,可以等进入 archiso 时分区也可.

### 下载资源

#### [点我进入下载页面](https://archlinux.org/download/),往下翻找到您的国家，我的是 China,选一个`https`协议的下载链接进行下载.后缀名一个.iso,一个.iso.sig 两个都要下载

#### 确认资源安全性， `<version>` 替换成你所下的版本

```bash
gpg --keyserver-options \
auto-key-retrieve --verify \
archlinux-<version>-x86_64.iso.sig
```

#### 或在已有的 ArchLinux 系统中执行

```bash
pacman-key -v archlinux-<version>-x86_64.iso.sig
```

### 烧录 U 盘

#### A. Windows - 使用软件 [Ether](https://)烧录到 U 盘中

#### B. Linux - 烧录启动盘,拿个 U 盘

```bash
dd if=/path/to/archlinux-<version>-x86_64.iso of=/dev/<udisk>
```

### 进入 archiso 安装命令行

1. 关机
2. 插入烧录好 archlinux.iso 的 U 盘
3. 开机,狂按 F2/F12/DELETE(不同电脑可能不一样,具体按什么查一下电脑怎么进 BIOS/设置硬盘启动项)进入 BIOS 或者直接选择的启动项
   - 进入 BIOS : 设置启动项的优先级,重启
   - 进入选择启动项 : 直接选择 U 盘后回车

### 安装 ArchLinux 到硬盘

#### 进入联网工具 iwctl

```bash
iwctl
```

#### 开始联网

```bash
device list #查看网卡
station wlan0 scan #扫描 wifi
station device get-networks #扫描结果
station device connect <SSID> #连接相应 wifi SSID 为 wifi 名
exit #或者 Ctrl + d
```

#### 检测是否联网

```bash
ping archlinux.org
```

#### 如果时间不正确,请时间矫正

```bash
timedatectl set-ntp true
```

#### 镜像源是下载软件包的服务器,把 China 那一块 URL 移到最上面,pacman 则会优先从 China 源下载,速度更快

```bash
vim /etc/pacman.d/mirrorlist
```

#### 关掉系统自选镜像源

```bash
systemctl stop reflector.service
```

#### 是否为 UEFI 启动,有文件则是,空则是普通 BIOS

> 目前大多数 PC 都是 UEFI 模式，所以下面的一些步骤主要针对 UEFI 系统的安装

```bash
ls /sys/firmware/efi/efivars
```

#### 磁盘情况,清晰自己的磁盘哪个分区放着哪些东西,后面的命令行根据自己的情况进行修改

```bash
lsblk
```

#### cfdisk 工具操作磁盘, 磁盘文件"/dev/nvme0n1"根据自己的情况进行修改.实际上挂载点是灵活的,只要保证其他分区挂载点嵌套在根目录内都可

##### `/dev/sda1` 如果是目标是双系统,且已有 efi 分区,则不需要此分区.后期直接将系统已有的 efi 分区挂载到挂载点即可

- 挂载点 /mnt/boot/efi

- 大小 > 60M

##### `/dev/sda2` swap 分区,可选

- 大小 1G

##### `/dev/sda3` 重要

- 挂载点 /mnt

- 大小 > 40G

##### `/dev/sda4` 个人数据,一般占用空间大.分出来的好处是隔离根分区,根分区出问题不会影响到 home 分区.便于备份

- 挂载点 /mnt/home

- 大小 剩余所有空间

```bash
cfdisk /dev/sda
```

**看清自己的磁盘设备文件名,有的是`nvme0n1p1`,有的是`sda1`**

**已有 windows 情况下不用这一步**:格式化 grub 启动分区

> 注意: Windows 系统自带 efi 分区,直接挂载即可.无需执行下行命令

```bash
mkfs.vfat /dev/sda1
```

#### 格式化`交换分区`,格式化`主分区`和`用户分区`

```bash
# 如果你分了 swap 分区,那就执行
mkfs.swap /dev/sda2
swapon /dev/sda2
```

```bash
mkfs.btrfs /dev/sda3  #选择你的根分区,必要
mkfs.btrfs /dev/sda4  #选择你的home分区
```

#### 先挂载根分区,安装系统

```bash
mount /dev/sda3 /mnt
pacstrap /mnt base linux linux-firmware
```

#### 挂载各个分区

```bash
mount --mkdir /dev/sda1 /mnt/boot/efi
mount --mkdir /dev/sda4 /mnt/home
```

#### 配置启动时自动挂载主分区

```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

#### 切换根分区

```bash
arch-chroot /mnt
```

#### 利用命令补全安装所需软件

```bash
pacman -S base-devel grub efibootmgr os-prober networkmanager bash-completion docker openssh vim git firefox jdk-openjdk man-pages yarn xfce4 xfce4-goodies lightdm lightdm-gtk-greeter
```

#### 生成系统语言,对 '`en_US.UTF-8`' 一行取消注释

vim /etc/locale.gen

```bash
locale-gen
```

#### 配置系统语言.主机名设为 'testhostname',可自行命名.设置 root 密码.创建用户,sudo 授权.设置时区 Region/City 可替换为 Asia/Shanghai.一些软件需要用到 LANG 环境变量,设置为 en_US.UTF-8

```bash
echo 'LANG=en_US.UTF-8' > /etc/locale.conf
echo 'testhostname' > /etc/hostname
passwd
useradd -m testuser -G wheel && passwd testuser
ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
mkinitcpio -P
```

#### 安装 grub,引导程序

```bash
grub-install --target=x86_64-efi \
--efi-directory=/boot/efi --bootloader-id=GRUB
```

#### 如果你需要双系统,请 os-prober 自动扫描双系统:允许 grub 检测系统. true 改为 false,并取消注释

vim /etc/default/grub

```bash
# GRUB_DISABLE_OS_PROBER=true,
^ 删除这个
```

#### 生成 grub 配置文件

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

#### 退出硬盘系统至 iso 安装系统, Ctrl+d

```bash
exit
```

#### 重启

```bash
reboot
```

[ArchLinux Wiki](https://wiki.archlinux.org/) 有更全面的知识.
