---
title: "Docker 简单使用"
excerpt: "可以观察网上各种 Dockerfile."
coverImage: "/assets/blog/docker/docker.svg"
date: "2022-05-14T17:46:03.322Z"
author:
  name: Celiae
  picture: "/assets/authors/celiae.jpg"
ogImage:
  url: "/assets/blog/docker/docker.svg"
---

## 1. Docker 开发角度

代码当中一般有两种文件

1. Dockerfile
2. docker-compose.yml

| Dockerfile         | docker-compose.yml                                        |
| ------------------ | --------------------------------------------------------- |
| 用来创建自定义镜像 | 用于在启动容器时(docker run)给出大量的参数,便于命令行操作 |

可以观察网上各种 Dockerfile.其中会包含一些其他镜像,比如 debian,nginx,mysql...这样在开发完软件之后,不需要在实际的操作系统上配置完整的环境,像虚拟机一样与宿主机隔离运行.不会污染宿主机环境,减少硬件开销,节约成本.

有了镜像就要启动,启动成容器运行在计算机上.但你可能需要映射端口

```sh
docker run -d --name=code-server -p8080:80
```

## 2. 运行 code-server

假如我们运行一个 code-server,我们想给一些参数

```sh
docker run -d \
  --name=code-server \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Shanghai \
  -e PASSWORD=password `#optional` \
  -e SUDO_PASSWORD=password `#optional` \
  -e DEFAULT_WORKSPACE=/config/workspace `#optional` \
  -p 8443:8443 \
  -v /path/to/appdata/config:/config \
  --restart unless-stopped \
  lscr.io/linuxserver/code-server:latest
```

以上代码来自[linuxserver/code-server](https://hub.docker.com/r/linuxserver/code-server)

显然不易维护,下次启动还复制粘贴回车运行.利用 docker-compose 读取 docker-compose.yml 文件并启动容器

```sh
docker-compose up -d
```

默认读取当前文件夹下的 docker-compose.yml, 选项 -d 意为 daemon 使它运行在后台,每次运行容器只需这一个命令和一个配置文件 docker-compose.yml.例如 code-server 的配置文件 docker-compose.yml 可以为这样:

```sh
---
version: "2.1"
services:
  code-server:
    image: lscr.io/linuxserver/code-server:latest
    container_name: code-server
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai
      - PASSWORD=password #optional
      - SUDO_PASSWORD=password #optional
      - DEFAULT_WORKSPACE=/config/workspace #optional
    volumes:
      - /path/to/appdata/config:/config
    ports:
      - 8443:8443
    restart: unless-stopped
```

以上代码来自[linuxserver/code-server](https://hub.docker.com/r/linuxserver/code-server)

## 修改文件比修改命令更容易

## 3. 构建自己的镜像 & 同步到 dockerhub

1. 假如写好了代码,通过网络搜索相应框架的 Dockerfile 模板,稍作更改于是

   ```sh
   docker build -t celiae/ceblog:latest .
   ```

   _稍等片刻,可以得到镜像名为"celiae/ceblog",标签名为"latest"的镜像.latest 以为最新版._

2. 端口映射,run

   ```sh
   docker run -p 1024:3000 celiae/ceblog:latest
   ```

   _浏览器输入"localhost:1024",OK_

3. 刚刚 run 的容器

   ```sh
   docker ps -a
   ```

   _这是在运行中的容器进程_

4. 觉得 OK 后推到 dockerhub

   ```sh
   docker push celiae/ceblog:latest
   ```

   _在 dockerhub 登陆账号在仓库(repository)中能看到 celiae/ceblog 的最新版本_

5. 在你的服务器上获取镜像

   ```sh
   docker pull celiae/ceblog:latest
   ```

   _run 的步骤基本一样_

6. 服务器上运行镜像

   ```sh
   docker run -d -p 1024:3000 \
   celiae/ceblog:latest
   ```

   _-d 运行在 daemon 后台_
