---
sidebar_position: 0
---

# 容器化部署

FZS 提供基于 Docker Compose 的容器化部署方式，可以做到真正意义上的一键部署。

## 前置条件

部署前，请确保已经安装了 [Docker Engine](https://docs.docker.com/engine/install/) 以及 [Docker Compose](https://docs.docker.com/compose/install/)，并且已经启动了 Docker 服务。

### 支持架构

- x86_64
- arm64

### 硬件要求

- 最低配置：4 CPU，16 GB 内存，50 GB 硬盘
- 推荐配置：8 CPU，32 GB 内存，50 GB 硬盘
- 网络端口：
  - 对外开放 80 端口，用于 HTTP 访问
  - 对内开放所有端口，用于内部通信

## 开始部署

### 获取 `docker-compose.yml`

前往 [FZS Release](/changelog) 页面，获取最新版本的 `docker-compose.yml` 文件。


### 一键启动

在包含 `docker-compose.yml` 文件的目录下，执行以下命令：

```bash
docker compose up -d
```

检查容器是否启动成功：

```bash
docker ps
```

如果 `web` 与 `daemon` 的容器状态类似以下输出，说明容器启动成功：

```
CONTAINER ID   IMAGE                                                                     COMMAND                  CREATED          STATUS             PORTS                                                                              NAMES
3a0da025e1de   192.168.0.198:880/9bridges/fzs-web-server:0.4.0                          "./start.sh -f"          27 seconds ago   Up 26 seconds                                                                                         fzs-web-server-1
73a1648c3409   9bridges/fzs-daemon:0.2.2-beta.2-node                                     "node index.js"          2 hours ago      Up About an hour                                                                                      fzs-daemon-1
8ca3c3460a0e   192.168.0.198:880/9bridges/synjq-query:0.3.4                             "/usr/local/s2i/run"     2 hours ago      Up 2 hours         8080/tcp, 8443/tcp, 0.0.0.0:8082->8888/tcp, :::8082->8888/tcp                      fzs-query-1
0e7a6d8d0000   9bridges/fzs-web:0.5.1-rc.2                                               "./start.sh"             2 hours ago      Up About an hour   0.0.0.0:5555->5555/tcp, :::5555->5555/tcp, 0.0.0.0:80->8080/tcp, :::80->8080/tcp   fzs-web-1
56c5b25fc7b2   provectuslabs/kafka-ui:latest                                             "/bin/sh -c 'java --…"   3 hours ago      Up 3 hours         0.0.0.0:8080->8080/tcp, :::8080->8080/tcp                                          kafka-ui
391e8bd349c8   192.168.0.198:880/9bridges/fzs-source-connector:2.6.1.Final.86f50f.2.4   "/docker-entrypoint.…"   3 hours ago      Up 3 hours         8778/tcp, 9092/tcp, 0.0.0.0:18083->8083/tcp, :::18083->8083/tcp                    root-connect-1
88e7fa4f48b9   bitnami/kafka:3.6                                                         "/opt/bitnami/script…"   3 hours ago      Up 3 hours         0.0.0.0:9092-9094->9092-9094/tcp, :::9092-9094->9092-9094/tcp                      root-kafka-1
```