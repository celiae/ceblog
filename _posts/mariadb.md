---
title: "Mariadb"
excerpt: "安装 mariadb,创建用户"
coverImage: "/blog/mariadb/mariadb.png"
createdate: "2022-05-25"
modifydate: "2022-05-25"
smallImage: "/blog/mariadb/mariadb-icon.svg"
---

## ArchWiki

本文参考了[ArchWiki 上的 mariadb](https://wiki.archlinux.org/title/MariaDB)

### 安装 mariadb

- root 提权

  ```console
  sudo su
  ```

- ArchLinux 上安装 mariadb

  ```console
  pacman -S mariadb
  ```

- 启用进程之前做一些配置

  ```console
  mariadb-install-db \
   --user=mysql\
   --basedir=/usr \
   --datadir=/var/lib/mysql
  ```

- 启用进程

  ```console
  systemctl enable --now mariadb
  ```

- 进入 mariadb

  ```console
  mysql -u root -p
  ```

### 创建用户

- 新建用户

  ```console
  CREATE USER 'monty'@'localhost' IDENTIFIED BY 'some_pass';
  ```

- 给予权限

  ```console
  GRANT ALL PRIVILEGES ON mydb.* TO 'monty'@'localhost';
  ```

- 刷新先前的权限设置

  ```console
  FLUSH PRIVILEGES;
  ```

### 修改密码

- 跳转到"mysql"数据库

  ```console
  use mysql
  ```

- 刷新权限

  ```console
  flush privileges;
  ```

- 修改密码

  ```console
  ALTER USER 'celiae'@'localhost' IDENTIFIED BY 'new_password';
  ```

### 重置 root 密码

- 停止 mariadb 进程

  ```console
  systemctl stop mariadb
  ```

- 启用 mysql 安全模式

  ```console
  mysqld_safe --skip-grant-tables --skip-networking &
  ```

- 连接进去

  ```console
  mysql -u root
  ```

- 修改密码

  ```console
  use mysql
  ```

  ```console
  flush privileges;
  ```

  ```console
  ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
  ```

  ```console
  exit
  ```

- 杀掉安全模式进程

  ```console
  kill $(cat /var/lib/mysql/$HOSTNAME.pid)
  ```

- 启用 mariadb 进程

  ```console
  systemctl start mariadb
  ```
