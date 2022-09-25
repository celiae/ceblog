---
title: "ArchLinux"
excerpt: "在实体机器或虚拟机上安装ArchLinux"
coverImage: "/blog/archlinux-installation/archlinux.png"
createdate: "2022-05-14"
modifydate: "2022-09-23"
smallImage: "/blog/archlinux-installation/archlinux.svg"
---

## 在实体机器上安装 ArchLinux

我会在硬盘上安装 Archlinux.grub 来引导单/双系统.读者需要有一定的计算机基础知识,并能看懂博客语言,轻微的专业术语.

| 发行版    | 启动模式 | 硬盘加密 | 双系统   | 分区结构 | 桌面系统 |
| --------- | -------- | -------- | -------- | -------- | -------- |
| ArchLinux | UEFI     | 无       | 略微提到 | 多分区   | xfce     |

- ### 准备工作

  1. 一个没有数据的 U 盘
  2. 一台电脑
  3. 能连上互联网

  > 这些是最少要求.后面烧录会覆盖 U 盘中的数据,做好备份.如果想装双系统(比如 Windows+ArchLinux),目前只有 Windows,那就先在 Windows 上做好磁盘分区,下载好 Linux 系统镜像,利用 Ether 将镜像烧录到 U 盘中

- ### 磁盘分区

  - Windows(图形化)

    在磁盘管理中对有空闲的磁盘压缩,生成一个无格式的分区

    > 仔细观察会发现有一个`efi`分区,这个是启动分区,底层硬件会先加载此分区,从而决定加载哪个分区的系统.后期引导程序`GRUB`就是安装在`efi`分区,**伏笔**.

  - Linux

    利用 `cfdisk` 工具,可以等进入 archiso 时分区也可.

- ### 下载资源

  - [点我进入下载页面](https://archlinux.org/download/),往下翻找到 China,选一个`https`协议的下载链接进行下载.后缀名一个.iso,一个.iso.sig 两个都要下载

  - 确认资源安全性

    ```console
    gpg --keyserver-options \
    auto-key-retrieve --verify \
    archlinux-<version>-x86_64.iso.sig
    ```

  - 或在已有的 ArchLinux 系统中执行

    ```console
    pacman-key -v archlinux-<version>-x86_64.iso.sig
    ```

- ### 烧录 U 盘

  - Windows - 使用软件 [Ether](https://)烧录到 U 盘中

  - Linux - 烧录启动盘,拿个 U 盘.

    ```console
    dd if=/path/to/archlinux-<version>-x86_64.iso of=/dev/<udisk>
    ```

- ### 进入 archiso 安装命令行

  1. 关机
  2. 插入烧录好 archlinux.iso 的 U 盘
  3. 开机,狂按 F2/F12/DELETE(不同电脑可能不一样,具体按什么查一下电脑怎么进 BIOS/设置硬盘启动项)进入 BIOS 或者直接选择的启动项
     - 进入 BIOS : 设置启动项的优先级,重启
     - 进入选择启动项 : 直接选择 U 盘后回车

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

  - 如果时间不正确,请时间矫正

    ```console
    date    #对一下时间 如果不对那就执行下行命令
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

  - cfdisk 工具操作磁盘, 磁盘文件"/dev/nvme0n1"根据自己的情况进行修改.实际上挂载点是灵活的,只要保证其他分区嵌套在根分区内都可

    | 挂载点        | 磁盘        | 大小         | 备注                                                                                       |
    | ------------- | ----------- | ------------ | ------------------------------------------------------------------------------------------ |
    | /mnt/boot/efi | /dev/`sda1` | > 60M        | 如果是双系统,且已有 efi 分区,则不需要此分区.后期直接将系统已有的 efi 分区挂载到挂载点即可  |
    |               | /dev/`sda2` | 1G           | swap 分区,可选                                                                             |
    | /mnt          | /dev/`sda3` | > 20G        | `重要`                                                                                     |
    | /mnt/home     | /dev/`sda4` | 剩余所有空间 | 个人数据,一般占用空间大.分出来的好处是隔离根分区,根分区出问题不会影响到 home 分区.便于备份 |

    ```console
    cfdisk /dev/sda
    ```

    **看清自己的磁盘设备文件名,有的是`nvme0n1p1`,有的是`sda1`**

  - **已有 windows 情况下不用这一步**:格式化 grub 启动分区

    > 注意: Windows 系统自带 efi 分区,直接挂载即可.无需执行下行命令

    ```console
    mkfs.vfat /dev/sda1
    ```

  - 格式化`交换分区`,格式化`主分区`和`用户分区`

    ```console
    mkfs.swap /dev/sda2   #如果你分了swap分区,那就执行
    swapon /dev/sda2      #同上
    mkfs.btrfs /dev/sda3  #选择你的根分区,必要
    mkfs.btrfs /dev/sda4  #选择你的home分区
    ```

  - pacstrap 安装软件包,base 是基础软件包,base-devel 是基础软件包的编译依赖,linux 是系统软件包,linux-firmware 是系统软件包的驱动,grub 是启动软件包,vim 是编辑器,dhcpcd 是网络驱动,iwd 是网络驱动,efibootmgr 是 UEFI 启动马,bash-completion 是编辑器插件,zsh 是编辑器,archlinux-keyring 是软件包签名,openssh 是网络驱动,os-prober 是双系统需要下载的包

    ```console
    mount /dev/sda3 /mnt  #先挂载根分区,安装必要软件
    pacstrap /mnt
            base base-devel \
            linux linux-firmware \
            grub efibootmgr os-prober \
            networkmanager bash-completion \
            archlinux-keyring openssh vim \
            git firefox jdk-openjdk mariadb \
            man-pages yarn \
            xfce4
    ```

    > 安装桌面. 同时安装多个图形界面容易引起系统混乱

    ```console
    pacstrap /mnt xfce4 lightdm lightdm-gtk-greeter
    ```

  - 挂载各个分区

    ```console
    mount --mkdir /dev/sda1 /mnt/boot/efi
    mount --mkdir /dev/sda4 /mnt/home
    ```

  - 配置启动时自动挂载主分区

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

  - 配置系统语言.主机名设为 'testhostname',可自行命名.设置 root 密码.创建用户,sudo 授权.设置时区 Region/City 可替换为 Asia/Shanghai.一些软件需要用到 LANG 环境变量,设置为 en_US.UTF-8.

    ```console
    echo 'LANG=en_US.UTF-8' > /etc/locale.conf
    echo 'testhostname' > /etc/hostname
    mkinitcpio -P
    passwd
    useradd -m testuser -G wheel && passwd testuser
    ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
    ```

  - 安装 grub,引导程序

    ```console
    grub-install --target=x86_64-efi \
    --efi-directory=/boot/efi --bootloader-id=GRUB
    ```

  - 如果你需要双系统,请 os-prober 自动扫描双系统:允许 grub 检测系统. true 改为 false,并取消注释

    vim /etc/default/grub

    ```console
    # GRUB_DISABLE_OS_PROBER=true,
    ^ 删除这个
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
