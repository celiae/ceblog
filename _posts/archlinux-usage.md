---
title: "Arch使用"
excerpt: "在已有的 ArchLinux 上操作"
createdate: "2022-10-15"
modifydate: "2022-10-15"
category: "linux"
---

## colemak 键盘布局

### tty

`tty` 键盘布局拥有内置colemak, 文件位置在 `/usr/share/kbd/keymaps/i386/colemak/colemak.map.gz` (Archlinux).

#### 临时配置

```bash
loadkeys	/usr/share/kbd/keymaps/i386/colemak/colemak.map.gzbash
```

#### 永久配置

```bash
echo 'KEYMAP=/usr/share/kbd/keymaps/i386/colemak/colemak.map.gz' >> /etc/vconsole.conf
```

### 桌面

桌面系统通常安装 `fcitx`, 通过配置能置换成 `colemak`.

默认情况下, caps lock 映射的 backspace 无法长按连续删除字符, 在 `.bashrc .zshrc`之类的文件中添加 `xset r 66` 命令.

```bash
sudo vim /etc/profile	# <- xset r 66
```

```bash
unset ...
...
xset r 66
```

## PACMAN - Package manager

ArchLinux 的包管理器

### 常用命令

#### 刷新安装包数据库

##### 刷新未更新的数据库

```bash
sudo pacman -Sy
```

##### 强制刷新所有数据库

```bash
sudo pacman -Syy
```

#### 更新系统

```bash
sudo pacman -Syu
```

##### 或

```bash
sudo pacman -Syyu
```

#### 查询

##### 包信息

```bash
sudo pacman -Qi vim
```

##### 包所包含的所有文件

```bash
sudo pacman -Ql vim
```

##### 通过命令查包

```bash
sudo pacman -F nc
```

##### 更新包信息数据库

```bash
sudo pacman -Fy
```

## 运行 C 语言

### 我的运行环境

- linux 操作系统
- xfce 桌面环境
- gcc 编译器
- code-oss 代码编辑器

#### GCC 默认是安装的, 如果没有则按照以上包管理器方法完成安装

#### 安装 code-oss

```bash
sudo pacman -S code
```
