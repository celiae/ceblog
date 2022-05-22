---
title: "Iptables 划水技巧"
excerpt: "切换 root 用户,提升权限.sudo命令敲得很累"
coverImage: "/assets/blog/archlinux-installation/archlinux.svg"
date: "2022-05-22T19:56:57.322Z"
author:
  name: Celiae
  picture: "/assets/authors/celiae.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

## 根据 ArchWiki 配置一个基础的防火墙

[Simple_stateful_firewall](https://wiki.archlinux.org/title/Simple_stateful_firewall#Prerequisites)

## 开启端口

- 切换 root 用户,提升权限."sudo"命令敲得很累

  ```sh
  su
  ```

- 忘记命令,看看之前怎么写的.

  ```sh
  iptables -S
  ```

- 部分结果如下,在根据 ArchWiki 配置了[Simple_stateful_firewall](https://wiki.archlinux.org/title/Simple_stateful_firewall#Prerequisites)之后就是这个效果,注意 TCP 链,这个是 ArchWiki 配置后增添了 TCP 和 UDP 链.

  ```sh
  -A TCP -p tcp -m tcp --dport 22 -j ACCEPT
  -A TCP -p tcp -m tcp --dport 80 -j ACCEPT
  -A TCP -p tcp -m tcp --dport 443 -j ACCEPT
  -A TCP -p tcp -m tcp --dport 53 -j ACCEPT
  -A TCP -p tcp -m tcp --dport 3000 -j ACCEPT
  -A TCP -p tcp -m tcp --dport 19000 -j ACCEPT
  -A UDP -p udp -m udp --dport 53 -j ACCEPT
  ```

- 想再开一个端口,依葫芦画瓢.

  ```sh
  iptables -A TCP -p tcp -m tcp --dport 2222 -j ACCEPT
  ```

## 关闭端口

- 查看相应链相应行数

  ```sh
  iptables -nvL --line-numbers
  ```

- 以行删除规则

  ```sh
  iptables -D TCP 6
  ```

## 难

防火墙博大精深,可以根据 ArchWiki 顺着 netfilter 官方学习.

## 烦

这种命令行工具 iptables 大概属于包过滤防火墙.
