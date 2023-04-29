---
title: "Iptables"
excerpt: "基本防火墙"
createdate: "2022-05-22"
modifydate: "2022-06-10"
category: "linux"
---

## Iptables

根据 ArchWiki 配置一个基础的防火墙: [Simple_stateful_firewall](https://wiki.archlinux.org/title/Simple_stateful_firewall#Prerequisites)

### 开启端口

切换 root 用户,提升权限."sudo"命令敲得很累

```bash
su
```

忘记命令,看看之前怎么写的.

```bash
iptables -S
```

部分结果如下,在根据 ArchWiki 配置了[Simple_stateful_firewall](https://wiki.archlinux.org/title/Simple_stateful_firewall#Prerequisites)之后就是这个效果,注意 TCP 链,这个是 ArchWiki 配置后增添了 TCP 和 UDP 链.

```bash
-A TCP -p tcp -m tcp --dport 22 -j ACCEPT
-A TCP -p tcp -m tcp --dport 80 -j ACCEPT
-A TCP -p tcp -m tcp --dport 443 -j ACCEPT
-A TCP -p tcp -m tcp --dport 53 -j ACCEPT
-A TCP -p tcp -m tcp --dport 3000 -j ACCEPT
-A TCP -p tcp -m tcp --dport 19000 -j ACCEPT
-A UDP -p udp -m udp --dport 53 -j ACCEPT
```

想再开一个端口,依葫芦画瓢.

```bash
iptables -A TCP -p tcp -m tcp --dport 2222 -j ACCEPT
```

### 关闭端口

查看相应链相应行数

```bash
iptables -nvL --line-numbers
```

以行删除规则

```bash
iptables -D TCP 6
```
