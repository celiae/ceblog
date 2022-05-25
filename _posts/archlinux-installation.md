---
title: "ArchLinux 安装"
excerpt: "Gnome桌面,Code-OSS编程,yay包管理器"
coverImage: "/assets/blog/archlinux-installation/archlinux.png"
date: "2022-05-14T15:48:36.322Z"
author:
  name: Celiae
  picture: "/assets/authors/celiae.jpg"
smallImage: "/assets/blog/archlinux-installation/archlinux.svg"
---

## 安装 ArchLinux 完整过程

下载 ArchLinux 系统.iso 文件

```console
curl -O \
http://mirrors.163.com/archlinux/iso/\
2022.05.01/archlinux-2022.05.01-x86_64.iso
```

下载.sig 文件

```console
curl -O \
http://mirrors.163.com/archlinux/iso/\
2022.05.01/archlinux-2022.05.01-x86_64.iso.sig
```

确认资源安全性

```console
gpg --keyserver-options \
auto-key-retrieve --verify \
archlinux-version-x86_64.iso.sig
```

或在已有的 ArchLinux 系统中执行

```console
pacman-key -v archlinux-version-x86_64.iso.sig
```

进入联网工具 iwctl

```console
iwctl
```

查看网卡

```console
device list
```

扫描 wifi

```console
station wlan0 scan
```

扫描结果

```console
station device get-networks
```

连接相应 wifi SSID 为 wifi 名

```console
station device connect SSID
```

是否联网

```console
ping archlinux.org
```

时间矫正

```console
timedatectl set-ntp true
```

镜像源是下载软件包的服务器,把 China 那一块 URL 移到最上面,pacman 则会优先从 China 源下载,速度更快

```console
vim /etc/pacman.d/mirrorlist
```

关掉系统自选镜像源

```console
systemctl stop reflector.service
```

是 UEFI 启动马,有文件则是,空则是普通 BIOS

```console
ls /sys/firmware/efi/efivars
```

磁盘情况,一定清晰自己的磁盘哪个分区放着哪些东西,
后面的命令行根据自己的情况进行修改

```console
lsblk
```

cfdisk 工具操作磁盘, 磁盘文件"/dev/nvme0n1"根据自己的情况进行修改

```console
cfdisk /dev/nvme0n1
```

格式化主分区, btrfs/ext4/... 格式, 根据自己的情况进行修改

```console
mkfs.btrfs /dev/nvme0n1p2
```

格式化 grub 启动分区,根据自己的情况,一般不用这一步

```console
mkfs.vfat /dev/nvme0n1p1
```

挂载主分区,根据自己的情况进行修改

```console
mount /dev/nvme0n1p2 /mnt
```

pacstrap 安装软件包,base 是基础软件包,base-devel 是基础软件包的编译依赖,linux 是系统软件包,linux-firmware 是系统软件包的驱动,grub 是启动软件包,vim 是编辑器,dhcpcd 是网络驱动,iwd 是网络驱动,efibootmgr 是 UEFI 启动马,bash-completion 是编辑器插件,zsh 是编辑器,archlinux-keyring 是软件包签名,openssh 是网络驱动,os-prober 是双系统需要下载的包

```console
pacstrap /mnt
        base base-devel linux linux-firmware grub os-prober\
        networkmanager efibootmgr bash-completion\
        archlinux-keyring openssh vim\
        gnome gnome-tweaks gnome-keyring ibus ibus-rime\
        git firefox jdk-openjdk mariadb man-pages tcpdump yarn
        #(os-prober是双系统需要下载的包)
```

启动时自动挂载主分区

```console
genfstab -U /mnt >> /mnt/etc/fstab
```

切换根分区

```console
arch-chroot /mnt
```

主机名设为 testhostname,bash 会显示为[root@testhostname]

```console
echo 'testhostname' > /etc/hostname
```

内核

```console
mkinitcpio -P
```

设置 root 密码

```console
passwd
```

准备 grub 分区挂载点

```console
mkdir /boot/efi
```

挂载启动分区

```console
mount /dev/nvme0n1p1 /boot/efi
```

安装 grub,引导程序

```console
grub-install --target=x86_64-efi \
--efi-directory=/boot/efi --bootloader=GRUB
```

允许 grub 检测系统 GRUB_DISABLE_OS_PROBER=true true 改为 false

```console
vim /etc/default/grub
```

生成 grub 配置文件

```console
grub-mkconfig -o /boot/grub/grub.cfg
```

创建用户,sudo 授权

```console
useradd -m testuser -G wheel && passwd testuser
```

设置时区 Region/City 可替换为 Asia/Shanghai

```console
ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
```

一些软件需要用到 LANG 环境变量,设置为 en_US.UTF-8

```console
echo 'LANG=en_US.UTF-8' > /etc/locale.conf
```

退出硬盘系统至 iso 安装系统,或者按 Ctrl+d

```console
exit
```

重启

```console
reboot
```

[ArchLinux Wiki](https://wiki.archlinux.org/) 有更全面的知识.

## GNOME 桌面

- ### 个人电脑用桌面很舒服

  一般 Linux 运行在服务器上,而服务器不需要桌面提供友好界面.例如在云服务器里的 Linux 只用命令行执行脚本负责开启一个容器或服务即可;可在个人电脑,光用 vim 写代码可能有点费手.在软件工程里讲究的就是重用模块,有的操作不必每次都要敲命令.个人观点,图形界面从某种意义上讲也是重用模块,解偶,减少重复工作.

- ### 我喜欢 GNOME 的地方

  1. Gnome 的系统设置简洁,易用.可以轻易设置系统代理,一般应用都会走 GNOME 系统代理.Code-OSS,Firefox...

  2. UI,图标很酷,感觉界面文字描述言简意赅.

  3. gnome-terminal 用的很爽,我喜欢暗色主题,对眼镜好.terminal 可以设置系统主题,同样是黑色.

  4. 虚拟机管理器 box 结合 qemu 后端玩虚拟机也可.

#### 总之就是简单漂亮,其他桌面比如 KDE-plasma,xfce 也很好.找到自己口味快乐就完事了

## NetworkManager WIFI 联网

先启动 NetworkManager,这是前提.在 archiso 安装命令行也是 ArchLinux 完整安装过程里执行过可以跳过此步.

```console
sudo systemctl enable --now NetworkManager
```

两种方式:

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

## Firefox 浏览器

- ### 代理

  一般默认走系统代理,也就是 GNOME 系统设置(settings)里 Network 设置.

- ### 看类似经济学人(The Economist),纽约时报(NY Time)的外刊

  一般这种外刊试看一个月或者一定时间后会开始收费,而且价格不菲,用的都是刀乐儿$.
  可以使用一个开源插件[bypass-paywalls](https://github.com/iamadamdev/bypass-paywalls-chrome).支持 Firefox 和 Chrome 浏览器.教程官网有.

## yay - AUR helper (AUR 包管理器)

基于 ArchLinux 的发行版有 pacman 做为核心的包管理器,里面收录的都是开源软件(仅仅只是免费但不开源的软件一般都没有),比如其中有[mariadb](https://mariadb.org/documentation/),但没有 [mysql](https://dev.mysql.com/doc/).

### yay 安装过程

- 安装 ArchLinux 的基本开发环境作为依赖,在 ArchLinux 完整安装过程中可能安装过

  ```console
  pacman -S --needed git base-develGasdfasdf
  ```

- 从 ArchLinux 官方下载 yay 原始包

  ```console
  git clone https://aur.archlinux.org/yay.git
  ```

- 进入目录

  ```console
  cd yay
  ```

- 利用 ArchLinux 的工具"makepkg"安装 yay

  ```console
  makepkg -si
  ```

- yay 更新系统(pacman+AUR)

  ```console
  yay
  ```

- pacman 更新系统(pacman)

  ```console
  sudo pacman -Syu
  ```

当然能用开源用开源,喜欢就好.

[yay 在 Github](https://github.com/Jguer/yay)

## Code-OSS

人们熟知 vscode 是当今很流行的代码编辑器,而 Code-OSS 则是它的开源版本.它们之间的关系就好比 chrome 与 chromium 的关系,可能我的理解有误,没有仔细了解过.[这篇文章](https://carlchenet.com/you-think-the-visual-studio-code-binary-you-use-is-a-free-software-think-again/) 关于 vscode 写的很细.

### 安装 Code-OSS

- 用 pacman 安装

  ```console
    sudo pacman -S code
  ```

  _当然安装的是开源版本 Code-OSS,而不是 VScode_

Code-OSS 默认的插件源不是 VSCode 插件源,需要的化可以安装 code-marketplace

- 使用 VSCode 插件源

  ```console
  yay -S code-marketplace
  ```

### Github Copilot 貌似不能运行在 Code-OSS 上

AI 代码补全 Github Copilot 好似不兼容 Code-OSS
