---
title: "ArchLinux"
excerpt: "在实体机器或虚拟机上安装ArchLinux "
coverImage: "/blog/archlinux-installation/archlinux.png"
createdate: "2022-05-14"
modifydate: "2022-06-10"
smallImage: "/blog/archlinux-installation/archlinux.svg"
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

  - 开始联网

    ```console
    device list #查看网卡
    station wlan0 scan #扫描 wifi
    station device get-networks #扫描结果
    station device connect <SSID> #连接相应 wifi SSID 为 wifi 名
    exit #或者 Ctrl + d
    ```

  - 检测是否联网

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

  - 是否为 UEFI 启动,有文件则是,空则是普通 BIOS

    > 目前大多数 PC 都是 UEFI 模式，所以下面的一些步骤主要针对 UEFI 系统的安装

    ```console
    ls /sys/firmware/efi/efivars
    ```

  - 磁盘情况,一定清晰自己的磁盘哪个分区放着哪些东西,后面的命令行根据自己的情况进行修改

    ```console
    lsblk
    ```

  - cfdisk 工具操作磁盘, 磁盘文件"/dev/nvme0n1"根据自己的情况进行修改

    | 挂载点        | 磁盘        | 大小         |
    | ------------- | ----------- | ------------ |
    | /mnt/boot/efi | /dev/`sda1` | > 60M        |
    |               | /dev/`sda2` | 1G           |
    | /mnt          | /dev/`sda3` | > 20G        |
    | /mnt/home     | /dev/`sda4` | 剩余所有空间 |

    ```console
    cfdisk /dev/sda
    ```

    **看清自己的磁盘设备文件名,有的是`nvme0n1p1`,有的是`sda1`**

  - **已有 windows 情况下不用这一步**:格式化 grub 启动分区

    > Windows 系统自带 efi 分区,直接挂载即可

    ```console
    mkfs.vfat /dev/sda1
    ```

  - 格式化`交换分区`, swap 格式

    格式化`主分区`和`用户分区`, btrfs/ext4/... 格式

    ```console
    mkfs.swap /dev/sda2
    swapon /dev/sda2
    mkfs.btrfs /dev/sda3
    mkfs.btrfs /dev/sda4
    ```

  - 挂载各个分区

    ```console
    mount /dev/sda3 /mnt
    mkdir -p /mnt/boot/efi
    mount /dev/sda1 /mnt/boot/efi
    mkdir /mnt/home
    mount /dev/sda4 /mnt/home
    ```

  - pacstrap 安装软件包,base 是基础软件包,base-devel 是基础软件包的编译依赖,linux 是系统软件包,linux-firmware 是系统软件包的驱动,grub 是启动软件包,vim 是编辑器,dhcpcd 是网络驱动,iwd 是网络驱动,efibootmgr 是 UEFI 启动马,bash-completion 是编辑器插件,zsh 是编辑器,archlinux-keyring 是软件包签名,openssh 是网络驱动,os-prober 是双系统需要下载的包

    ```console
    pacstrap /mnt
            base base-devel \
            linux linux-firmware \
            grub efibootmgr os-prober \
            networkmanager bash-completion \
            archlinux-keyring openssh vim \
            git firefox jdk-openjdk mariadb \
            man-pages tcpdump yarn
    ```

    桌面安装:`三选一`,三条命令中任选一行,同时安装多个图形界面容易引起系统混乱

    > kde 丰富花哨, gnome 简洁易用, xfce 不大不小

    ```console
    pacstrap /mnt plasma
    pacstrap /mnt gnome
    pacstrap /mnt xfce4 lightdm lightdm-gtk-greeter
    ```

  - 启动时自动挂载主分区

    ```console
    genfstab -U /mnt >> /mnt/etc/fstab
    ```

  - 切换根分区

    ```console
    arch-chroot /mnt
    ```

  - 生成系统语言,对 '`en_US.UTF-8`' 一行取消注释

    vim /etc/locale.gen

    ```console
    locale-gen
    ```

  - 配置系统语言.主机名设为 'testhostname'.设置 root 密码.创建用户,sudo 授权.设置时区 Region/City 可替换为 Asia/Shanghai.一些软件需要用到 LANG 环境变量,设置为 en_US.UTF-8.

    ```console
    echo 'LANG=en_US.UTF-8' > /etc/locale.conf
    echo 'testhostname' > /etc/hostname
    mkinitcpio -P
    passwd
    useradd -m testuser -G wheel && passwd testuser
    ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
    echo 'LANG=en_US.UTF-8' > /etc/locale.conf
    ```

  - 安装 grub,引导程序

    ```console
    grub-install --target=x86_64-efi \
    --efi-directory=/boot/efi --bootloader=GRUB
    ```

  - 允许 grub 检测系统. true 改为 false,并取消注释

    vim /etc/default/grub

    ```console
    # GRUB_DISABLE_OS_PROBER=true,
    ```

  - 生成 grub 配置文件

    ```console
    grub-mkconfig -o /boot/grub/grub.cfg
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
