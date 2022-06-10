---
title: "Nginx"
excerpt: "下载 nginx 编辑 nginx 配置文件"
coverImage: "/assets/blog/nginx/nginx.png"
createdate: "2022-05-15T14:47:47.322Z"
modifydate: "2022-06-10T10:40:47.322Z"
smallImage: "/assets/blog/nginx/nginx.svg"
---

## 在已有 Linux 上启用 nginx

1. 下载 nginx

   ```console
   sudo pacman -S nginx
   ```

2. 启动 nginx

   ```console
   sudo systemctl start nginx
   ```

3. 编辑 nginx 配置文件

   ```console
   sudo vim /etc/nginx/nginx.conf
   ```

4. 测试 nginx 配置文件语法

   ```console
   sudo nginx -t
   ```

5. 在 docker 安装 nginx

   ```console
   docker pull nginx
   ```
