---
title: "Nginx"
excerpt: "下载 nginx 编辑 nginx 配置文件"
createdate: "2022-05-15"
modifydate: "2022-06-10"
category: "linux"
---

## 在已有 Linux 上启用 nginx

下载 nginx

```bash
sudo pacman -S nginx
```

启动 nginx

```bash
sudo systemctl start nginx
```

编辑 nginx 配置文件

```bash
sudo vim /etc/nginx/nginx.conf
```

测试 nginx 配置文件语法

```bash
sudo nginx -t
```

在 docker 安装 nginx

```bash
docker pull nginx
```

