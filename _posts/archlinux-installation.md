---
title: "安装 ArchLinux 完整过程"
excerpt: "在实体机器上安装ArchLinux "
coverImage: "/assets/blog/archlinux-installation/archlinux.png"
date: "2022-05-14T15:48:36.322Z"
author:
  name: Celiae
  picture: "/assets/authors/celiae.jpg"
smallImage: "/assets/blog/archlinux-installation/archlinux.svg"
---

## 在实体机器上安装 ArchLinux

虚拟机上的安装过程基本一样,而且更简单.设置好网络,下载好 Linux 系统镜像,不需要 U 盘就可以实现.

- ### 准备工作

  1. 一个没有数据的 U 盘
  2. 一台电脑
  3. 能连上互联网

  > 这些是最少要求.后面烧录会覆盖 U 盘中的数据,做好备份.如果想装双系统(比如 Windows+ArchLinux),目前只有 Windows,那就先在 Windows 上做好磁盘分区,下载好 Linux 系统镜像,利用 Ether 将镜像烧录到 U 盘中

- ### 磁盘分区

  - Windows(推荐)

    在磁盘管理中对有空闲的磁盘压缩,生成一个无格式的分区

    > 仔细观察会发现有一个`efi`分区,这个是启动分区,底层硬件会先加载此分区,从而决定加载哪个分区的系统.后期引导程序`GRUB`就是安装在`efi`分区,**伏笔**.

  - Linux

    利用 `cfdisk` 工具,可以等进入 archiso 时分区也可.

- ### 下载资源

  _在不同的系统上下载资源_

  - Windows

    - 在 ArchLinux 官网上直接下载 ArchLinux 系统.iso 文件,以下简称 archlinux.iso

  - Linux

    - 利用`curl`下载 archlinux.iso

      ```console
      curl -O \
      http://mirrors.163.com/archlinux/iso/\
      2022.05.01/archlinux-2022.05.01-x86_64.iso
      ```

    - 下载.sig 文件

      ```console
      curl -O \
      http://mirrors.163.com/archlinux/iso/\
      2022.05.01/archlinux-2022.05.01-x86_64.iso.sig
      ```

    - 确认资源安全性

      ```console
      gpg --keyserver-options \
      auto-key-retrieve --verify \
      archlinux-version-x86_64.iso.sig
      ```

    - 或在已有的 ArchLinux 系统中执行

      ```console
      pacman-key -v archlinux-version-x86_64.iso.sig
      ```

- ### 烧录 U 盘

  - Windows - 使用软件 [Ether](https://)烧录到 U 盘中

  - Linux - 烧录启动盘,随便拿个 U 盘.

    ```console
    dd -if=/path/to/archlinux-version-x86_64.iso -of=/dev/sda
    ```

- ### 进入 archiso 安装命令行

  1. 关机
  2. 插入烧录好 archlinux.iso 的 U 盘
  3. 开机,狂按 F2/F12/DELETE(具体按什么百度查你电脑怎么进 BIOS/设置硬盘启动项)进入 BIOS 或者直接选择的启动项
     - BIOS : 设置启动项的优先级,重启
     - 直接选择的启动项 : 直接选择 U 盘后回车

- ### 安装 ArchLinux 到硬盘

  - 进入联网工具 iwctl

    ```console
    iwctl
    ```

  - 查看网卡

    ```console
    device list
    ```

  - 扫描 wifi

    ```console
    station wlan0 scan
    ```

  - 扫描结果

    ```console
    station device get-networks
    ```

  - 连接相应 wifi SSID 为 wifi 名

    ```console
    station device connect SSID
    ```

  - 是否联网

    ```console
    ping archlinux.org
    ```

  - 时间矫正

    ```console
    timedatectl set-ntp true
    ```

  - 镜像源是下载软件包的服务器,把 China 那一块 URL 移到最上面,pacman 则会优先从 China 源下载,速度更快

    ```console
    vim /etc/pacman.d/mirrorlist
    ```

  - 关掉系统自选镜像源

    ```console
    systemctl stop reflector.service
    ```

  - 是 UEFI 启动马,有文件则是,空则是普通 BIOS

    ```console
    ls /sys/firmware/efi/efivars
    ```

  - 磁盘情况,一定清晰自己的磁盘哪个分区放着哪些东西,后面的命令行根据自己的情况进行修改

    ```console
    lsblk
    ```

  - cfdisk 工具操作磁盘, 磁盘文件"/dev/nvme0n1"根据自己的情况进行修改

    ```console
    cfdisk /dev/nvme0n1
    ```

  - 格式化主分区, btrfs/ext4/... 格式, 根据自己的情况进行修改

    ```console
    mkfs.btrfs /dev/nvme0n1p2
    ```

  - 格式化 grub 启动分区,根据自己的情况,一般不用这一步

    ```console
    mkfs.vfat /dev/nvme0n1p1
    ```

  - 挂载主分区,根据自己的情况进行修改

    ```console
    mount /dev/nvme0n1p2 /mnt
    ```

  - pacstrap 安装软件包,base 是基础软件包,base-devel 是基础软件包的编译依赖,linux 是系统软件包,linux-firmware 是系统软件包的驱动,grub 是启动软件包,vim 是编辑器,dhcpcd 是网络驱动,iwd 是网络驱动,efibootmgr 是 UEFI 启动马,bash-completion 是编辑器插件,zsh 是编辑器,archlinux-keyring 是软件包签名,openssh 是网络驱动,os-prober 是双系统需要下载的包

    ```console
    pacstrap /mnt
            base base-devel \
            linux linux-firmware \
            grub efibootmgr os-prober \
            networkmanager bash-completion \
            archlinux-keyring openssh vim \
            gnome gnome-tweaks gnome-keyring \
            ibus ibus-rime \
            git firefox jdk-openjdk mariadb \
            man-pages tcpdump yarn
            #(os-prober是双系统需要下载的包)
    ```

  - 启动时自动挂载主分区

    ```console
    genfstab -U /mnt >> /mnt/etc/fstab
    ```

  - 切换根分区

    ```console
    arch-chroot /mnt
    ```

  - 主机名设为 testhostname,bash 会显示为[root@testhostname]

    ```console
    echo 'testhostname' > /etc/hostname
    ```

  - 内核

    ```console
    mkinitcpio -P
    ```

  - 设置 root 密码

    ```console
    passwd
    ```

  - 准备 grub 分区挂载点

    ```console
    mkdir /boot/efi
    ```

  - 挂载启动分区

    ```console
    mount /dev/nvme0n1p1 /boot/efi
    ```

  - 安装 grub,引导程序

    ```console
    grub-install --target=x86_64-efi \
    --efi-directory=/boot/efi --bootloader=GRUB
    ```

  - 允许 grub 检测系统 GRUB_DISABLE_OS_PROBER=true true 改为 false

    ```console
    vim /etc/default/grub
    ```

  - 生成 grub 配置文件

    ```console
    grub-mkconfig -o /boot/grub/grub.cfg
    ```

  - 创建用户,sudo 授权

    ```console
    useradd -m testuser -G wheel && passwd testuser
    ```

  - 设置时区 Region/City 可替换为 Asia/Shanghai

    ```console
    ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
    ```

  - 一些软件需要用到 LANG 环境变量,设置为 en_US.UTF-8

    ```console
    echo 'LANG=en_US.UTF-8' > /etc/locale.conf
    ```

  - 退出硬盘系统至 iso 安装系统,或者按 Ctrl+d

    ```console
    exit
    ```

  - 重启

    ```console
    reboot
    ```

[ArchLinux Wiki](https://wiki.archlinux.org/) 有更全面的知识.
