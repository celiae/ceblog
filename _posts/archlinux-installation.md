---
title: "ArchLinux 安装"
excerpt: "镜像源是下载软件包的服务器,把 China 那一块 URL 移到最上面,pacman 则会优先从 China 源下载,速度更快.关掉系统自选镜像源.
是否为 UEFI 启动,有文件则是,空则是普通 BIOS"
coverImage: "/assets/blog/archlinux-installation/archlinux.svg"
date: "2022-05-14T15:48:36.322Z"
author:
  name: Celiae
  picture: "/assets/authors/celiae.jpg"
ogImage:
  url: "/assets/blog/archlinux-installtion/archlinux.svg"
catagory: "linux"
---

下载 ArchLinux 系统.iso 文件

```sh
curl -O \
http://mirrors.163.com/archlinux/iso/\
2022.05.01/archlinux-2022.05.01-x86_64.iso
```

下载.sig 文件

```sh
curl -O \
http://mirrors.163.com/archlinux/iso/\
2022.05.01/archlinux-2022.05.01-x86_64.iso.sig
```

确认资源安全性

```sh
gpg --keyserver-options \
auto-key-retrieve --verify \
archlinux-version-x86_64.iso.sig
```

或在已有的 ArchLinux 系统中执行

```sh
pacman-key -v archlinux-version-x86_64.iso.sig
```

进入联网工具 iwctl

```sh
iwctl
```

查看网卡

```sh
device list
```

扫描 wifi

```sh
station wlan0 scan
```

扫描结果

```sh
station device get-networks
```

连接相应 wifi SSID 为 wifi 名

```sh
station device connect SSID
```

是否联网

```sh
ping archlinux.org
```

时间矫正

```sh
timedatectl set-ntp true
```

镜像源是下载软件包的服务器,把 China 那一块 URL 移到最上面,pacman 则会优先从 China 源下载,速度更快

```sh
vim /etc/pacman.d/mirrorlist
```

关掉系统自选镜像源

```sh
systemctl stop reflector.service
```

是 UEFI 启动马,有文件则是,空则是普通 BIOS

```sh
ls /sys/firmware/efi/efivars
```

磁盘情况,一定清晰自己的磁盘哪个分区放着哪些东西,
后面的命令行根据自己的情况进行修改

```sh
lsblk
```

cfdisk 工具操作磁盘, 磁盘文件"/dev/nvme0n1"根据自己的情况进行修改

```sh
cfdisk /dev/nvme0n1
```

格式化主分区, btrfs/ext4/... 格式, 根据自己的情况进行修改

```sh
mkfs.btrfs /dev/nvme0n1p2
```

格式化 grub 启动分区,根据自己的情况,一般不用这一步

```sh
mkfs.vfat /dev/nvme0n1p1
```

挂载主分区,根据自己的情况进行修改

```sh
mount /dev/nvme0n1p2 /mnt
```

pacstrap 安装软件包,base 是基础软件包,base-devel 是基础软件包的编译依赖,linux 是系统软件包,linux-firmware 是系统软件包的驱动,grub 是启动软件包,vim 是编辑器,dhcpcd 是网络驱动,iwd 是网络驱动,efibootmgr 是 UEFI 启动马,bash-completion 是编辑器插件,zsh 是编辑器,archlinux-keyring 是软件包签名,openssh 是网络驱动,os-prober 是双系统需要下载的包

```sh
pacstrap /mnt
        base base-devel linux linux-firmware grub os-prober\
        networkmanager efibootmgr bash-completion\
        archlinux-keyring openssh vim\
        gnome gnome-tweaks gnome-keyring ibus ibus-libpinyin\
        git firefox jdk-openjdk mariadb man-pages tcpdump yarn
        #(os-prober是双系统需要下载的包)
```

启动时自动挂载主分区

```sh
genfstab -U /mnt >> /mnt/etc/fstab
```

切换根分区

```sh
arch-chroot /mnt
```

主机名设为 testhostname,bash 会显示为[root@testhostname]

```sh
echo 'testhostname' > /etc/hostname
```

内核

```sh
mkinitcpio -P
```

设置 root 密码

```sh
passwd
```

准备 grub 分区挂载点

```sh
mkdir /boot/efi
```

挂载启动分区

```sh
mount /dev/nvme0n1p1 /boot/efi
```

安装 grub,引导程序

```sh
grub-install --target=x86_64-efi \
--efi-directory=/boot/efi --bootloader=GRUB
```

允许 grub 检测系统 GRUB_DISABLE_OS_PROBER=true true 改为 false

```sh
vim /etc/default/grub
```

生成 grub 配置文件

```sh
grub-mkconfig -o /boot/grub/grub.cfg
```

创建用户,sudo 授权

```sh
useradd -m testuser -G wheel && passwd testuser
```

设置时区 Region/City 可替换为 Asia/Shanghai

```sh
ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
```

一些软件需要用到 LANG 环境变量,设置为 en_US.UTF-8

```sh
echo 'LANG=en_US.UTF-8' > /etc/locale.conf
```

退出硬盘系统至 iso 安装系统,或者按 Ctrl+d

```sh
exit
```

重启

```sh
reboot
```
