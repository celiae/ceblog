---
title: "Docker 简单使用"
excerpt: "可以观察网上各种 Dockerfile.其中会包含一些其他镜像,比如 debian,nginx,mysql...这样在开发完软件之后,不需要在实际的操作系统上配置完整的环境--_像虚拟机一样_--与宿主机隔离运行.不会污染宿主机环境,减少硬件开销,节约成本."
coverImage: "/assets/blog/docker/docker.svg"
date: "2020-05-14T17:46:03.322Z"
author:
  name: Celiae
  picture: "/assets/authors/celiae.jpg"
ogImage:
  url: "/assets/blog/docker/docker.svg"
---

代码当中一般有两种文件

1. Dockerfile
2. docker-compose.yml

| Dockerfile         | docker-compose.yml                                        |
| ------------------ | --------------------------------------------------------- |
| 用来创建自定义镜像 | 用于在启动容器时(docker run)给出大量的参数,便于命令行操作 |

可以观察网上各种 Dockerfile.其中会包含一些其他镜像,比如 debian,nginx,mysql...这样在开发完软件之后,不需要在实际的操作系统上配置完整的环境--_像虚拟机一样_--与宿主机隔离运行.不会污染宿主机环境,减少硬件开销,节约成本.

有了镜像就要启动,启动成容器运行在计算机上.但你可能需要映射端口

```sh
docker run -d --name=code-server -p8080:80
```

假如我们运行一个 code-server,我们想给一些参数

```sh
docker run -d \
  --name=code-server \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Europe/London \
  -e PASSWORD=password `#optional` \
  -e HASHED_PASSWORD= `#optional` \
  -e SUDO_PASSWORD=password `#optional` \
  -e SUDO_PASSWORD_HASH= `#optional` \
  -e PROXY_DOMAIN=code-server.my.domain `#optional` \
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
      - TZ=Europe/London
      - PASSWORD=password #optional
      - HASHED_PASSWORD= #optional
      - SUDO_PASSWORD=password #optional
      - SUDO_PASSWORD_HASH= #optional
      - PROXY_DOMAIN=code-server.my.domain #optional
      - DEFAULT_WORKSPACE=/config/workspace #optional
    volumes:
      - /path/to/appdata/config:/config
    ports:
      - 8443:8443
    restart: unless-stopped
```

以上代码来自[linuxserver/code-server](https://hub.docker.com/r/linuxserver/code-server)

_修改文件比修改命令更容易_
