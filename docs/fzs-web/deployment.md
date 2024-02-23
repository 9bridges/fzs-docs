---
sidebar_position: 0
---

# 部署方式

FZS Web 提供基于 Docker 容器的部署方式，可以在任何支持 Docker 的平台上部署。

## 前置条件

部署前，请确保已经安装了 [Docker Engine](https://docs.docker.com/engine/install/) 以及 [Docker Compose](https://docs.docker.com/compose/install/)，并且已经启动了 Docker 服务。

:::info
请确认 FZS Web 与 FZS Web Server 的各自宿主机系统时间一致，否则可能会导致同步链路监控数据异常。
:::

### 支持架构

- x86_64
- arm64

### 硬件要求

- 最低配置：2 CPU，4 GB 内存，20 GB 硬盘
- 推荐配置：4 CPU，8 GB 内存，50 GB 硬盘
- 网络端口：
  - 对外开放 80 端口，用于 HTTP 访问
  - 对内开放所有端口，用于内部通信

## 开始部署

### 拉取镜像

1. 拉取 `fzs-web` 镜像：

```bash
docker pull 9bridges/fzs-web:latest
```

2. 拉取 `fzs-daemon` 镜像：

```bash
docker pull 9bridges/fzs-daemon:latest
```

### 配置 `docker-compose.yml`

1. 选取某一个工作路径，创建 `docker-compose.yml` 文件：

```bash
touch docker-compose.yml
```

2. 编辑 `docker-compose.yml` 文件，填入以下内容并保存：

```yml
version: '3'
name: fzs
services:
  web:
    image: 9bridges/fzs-web
    ports:
      - 80:8080
    volumes:
      - web-data:/data
      - web-agent:/fzs-web/public/fzs-agent
      - web-license:/fzs-web/public/license
      - web-server:/fzs-web/public/fzs-web-server
    restart: unless-stopped
    environment:
      - QUERY_URL=http://query:8888
      - SESSION_SECRET=fzs-is-the-best
        ## SESSION_SECRET 每个客户环境都要不一样，比如：zhaoshang / changjiang

  daemon:
    image: 9bridges/fzs-daemon
    depends_on:
      - web
    restart: unless-stopped
    environment:
      - WEB_URL=http://web:8080

  query:
    image: synjq/synjq-query:latest-jvm
    depends_on:
      - web
    restart: unless-stopped

volumes:
  web-data:
  web-agent:
  web-license:
  web-server:

```

### 启动容器

```bash
docker compose up -d
```

检查容器是否启动成功：

```bash
docker ps
```

如果 `web` 与 `daemon` 的容器状态类似以下输出，说明容器启动成功：

```
CONTAINER ID   IMAGE                          COMMAND                  CREATED        STATUS                PORTS                                       NAMES
66c186a2544f   synjq/fzs-web:0.2.1-hotfix.1   "./start.sh"             30 hours ago   Up 30 hours           0.0.0.0:80->8080/tcp, :::80->8080/tcp       fzs-web-1
4839cb383195   synjq/fzs-daemon:0.0.1-rc.1    "/usr/local/bin/dock…"   2 days ago     Up 2 days             3333/tcp                                    fzs-daemon-1
```

### 检验部署

访问 `http://${your_machine_ip}`，如果能够正常访问以下页面，说明 FZS Web 部署成功。

![login-page](/img/screenshots/login.jpg)
