---
title: "Mariadb"
excerpt: "安装 mariadb,创建用户"
createdate: "2022-05-25"
modifydate: "2022-05-25"
category: "linux"
---

## ArchWiki

本文参考了[ArchWiki 上的 mariadb](https://wiki.archlinux.org/title/MariaDB)

## 安装 mariadb

### root 提权

  ```bash
  sudo su
  ```

### ArchLinux 上安装 mariadb

  ```bash
  pacman -S mariadb
  ```

### 启用进程之前做一些配置

  ```bash
  mariadb-install-db \
   --user=mysql\
   --basedir=/usr \
   --datadir=/var/lib/mysql
  ```

### 启用进程

  ```bash
  systemctl enable --now mariadb
  ```

### 进入 mariadb

  ```bash
  mysql -u root -p
  ```

## 初始化

### 新建用户

  ```bash
  CREATE USER 'monty'@'localhost' IDENTIFIED BY 'some_pass';
  ```

### 给予权限

  ```bash
  GRANT ALL PRIVILEGES ON mydb.* TO 'monty'@'localhost';
  ```

### 刷新先前的权限设置

  ```bash
  FLUSH PRIVILEGES;
  ```

## 修改密码

### 跳转到"mysql"数据库

  ```bash
  use mysql
  ```

### 刷新权限

  ```bash
  flush privileges;
  ```

### 修改

  ```bash
  ALTER USER 'celiae'@'localhost' IDENTIFIED BY 'new_password';
  ```

## 重置 root 密码

### 停止 mariadb 进程

  ```bash
  systemctl stop mariadb
  ```

### 启用 mysql 安全模式

  ```bash
  mysqld_safe --skip-grant-tables --skip-networking &
  ```

### 连接进去

  ```bash
  mysql -u root
  ```

### 重置密码

  ```bash
  use mysql
  ```

  ```bash
  flush privileges;
  ```

  ```bash
  ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
  ```

  ```bash
  exit
  ```

### 杀掉安全模式进程

  ```bash
  kill $(cat /var/lib/mysql/$HOSTNAME.pid)
  ```

### 启用 mariadb 进程

  ```bash
  systemctl start mariadb
  ```
