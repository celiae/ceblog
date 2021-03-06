---
title: "yay"
excerpt: "可以作为ArchLinux pacman 的替代品"
coverImage: "/blog/yay/yay.png"
createdate: "2022-05-26"
modifydate: "2022-06-10"
---

## yay - AUR helper (AUR 包管理器)

基于 ArchLinux 的发行版有 pacman 做为核心的包管理器,里面收录的都是开源软件(仅仅只是免费但不开源的软件一般都没有),比如其中有[mariadb](https://mariadb.org/documentation/),但没有 [mysql](https://dev.mysql.com/doc/).`yay`就是用来下载那些不开源包的.也可以用`yay`代替`pacman`

### yay 安装过程

- 安装 ArchLinux 的基本开发环境作为依赖,在 ArchLinux 完整安装过程中可能安装过

  ```console
  pacman -S --needed git base-devel
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

> 当然能用开源用开源.

### 参考

- [Github yay](https://github.com/Jguer/yay)
- [AUR](https://wiki.archlinux.org/title/Arch_User_Repository)
