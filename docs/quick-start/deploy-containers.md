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
[root@jiuqiao ~/fzy/web]#docker ps |grep fzs
bf734fcaad73   192.168.0.198:880/9bridges/provectuslabs/kafka-ui:v0.7.2                 "/bin/sh -c 'java --…"   9 seconds ago   Up 7 seconds                    0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   fzs-kafka-ui-1
c33c43070300   192.168.0.198:880/9bridges/synjq-query:0.3.6                             "/usr/local/s2i/run"      9 seconds ago   Up Less than a second           8080/tcp, 8443/tcp, 8888/tcp                fzs-query-1
a4a4b2070329   192.168.0.198:880/9bridges/fzs-daemon:0.2.2                              "/usr/local/bin/dock…"   9 seconds ago   Up 5 seconds                                                                fzs-daemon-1
b51f4440c567   192.168.0.198:880/9bridges/fzs-source-connector:2.6.1.Final.86f50f.2.4   "/docker-entrypoint.…"   9 seconds ago   Up 8 seconds                    8083/tcp, 8778/tcp, 9092/tcp                fzs-connect-1
a7667b7485d6   192.168.0.198:880/9bridges/fzs-web:0.5.0                                 "./start.sh"              9 seconds ago   Up 8 seconds                    0.0.0.0:80->8080/tcp, :::80->8080/tcp       fzs-web-1
ec58e80ad048   192.168.0.198:880/9bridges/bitnami/kafka:3.6                             "/opt/bitnami/script…"   9 seconds ago   Up 8 seconds                    9092/tcp                                    fzs-kafka-1
dcb96163dd8a   192.168.0.198:880/9bridges/fzs-web-server:0.4.1                          "./start.sh -f"           9 seconds ago   Up 8 seconds                    8081/tcp                                    fzs-web-server-1
```

## 开始体验

访问 `http://${your_machine_ip}`，如果能够正常访问以下页面，说明 FZS 部署成功。

![login-page](/img/screenshots/login.jpg)
