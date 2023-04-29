---
title: "Docker"
excerpt: "构造镜像,运行容器,上传dockerhub"
createdate: "2022-05-14"
modifydate: "2023-04-06"
category: "linux"
---

## Docker

> - Dockerfile: 用来创建自定义镜像
>
> - docker-compose.yml: 可整合多个镜像, 常用于在启动容器时配置运行参数,便于命令行操作
>
> 以上是常见的文件命名方法, 也可取其他文件名. 例如 abc.yml.

有了镜像就要启动, 启动成容器运行在计算机上. 如果容器需要接管本地流量, 则宿主机作代理, 开启映射端口

```bash
docker run -d --name=code-server -p8080:80
```

## 运行 code-server

假如我们运行一个 code-server,我们想给一些参数

```bash
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

*以上代码来自[linuxserver/code-server](https://hub.docker.com/r/linuxserver/code-server)*

显然不易维护. 利用 docker-compose 读取 docker-compose.yml 文件并启动容器

```bash
docker-compose up -d
```

默认读取当前文件夹下的 docker-compose.yml, 选项 -d 意为 daemon 使它运行在后台,每次运行容器只需这一个命令和一个配置文件. 例如给出 code-server 的配置文件 docker-compose.yml:

```bash
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

_以上代码来自[linuxserver/code-server](https://hub.docker.com/r/linuxserver/code-server)_

> 修改文件比修改命令更容易

## 测试

###  构建镜像 

通常在开发完工后会将项目打包成生产环境, 也就是产品. 

```bash
docker build -t celiae/ceblog:latest .
```

稍等片刻,可以得到镜像名为"celiae/ceblog",标签名为"latest"的镜像.latest 以为最新版.

### 启用容器

```bash
docker run -p 1024:3000 celiae/ceblog:latest
```

端口映射, 浏览器输入"localhost:1024",OK

### 查询

```bash
docker ps -a
```

它会列出正在运行中的容器进程

## DockerHub

### 测试成功后推到 dockerhub

```bash
docker push celiae/ceblog:latest
```

在 dockerhub 登陆账号在仓库(repository)中能看到 celiae/ceblog 的最新版本

### 获取镜像

```bash
docker pull celiae/ceblog:latest
```

run 的步骤基本一样

### 服务器上运行镜像

```bash
docker run -d -p 1024:3000 celiae/ceblog:latest
```

-d 运行在 daemon 后台
