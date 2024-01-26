---
sidebar_position: 1
---

# 技术架构

下图以数据流转的角度，展示了 FZS 的技术架构：

```mermaid
flowchart BT
  source-agent -- 发送数据 --> sink-agent
  fzs-web <-. API 交互 .-> source-web-server
  fzs-web <-. API 交互 .-> sink-web-server
  subgraph 数据源端
    source-db[(数据库 S)] -- 抽取数据 --> source-agent
    subgraph fzs-source [FZS 源端]
      source-web-server(FZS Web Server)
      source-agent(FZS Agent)
      source-web-server -. 资源调度 .-> source-agent
    end
  end
  subgraph 管理端
    fzs-daemon(FZS Daemon 预警管理) -. 告警触发 .-> fzs-web(FZS Web 同步管理)
  end
  subgraph 数据备端
    sink-agent -- 装载数据 --> sink-db[(数据库 T)]
    subgraph fzs-sink [FZS 备端]
      sink-web-server(FZS Web Server)
      sink-agent(FZS Agent)
      sink-web-server -. 资源调度 .-> sink-agent
    end
  end
```

### FZS Agent

FZS 的核心组件，负责数据源端抽取、数据高速传输与数据备端装载。

### FZS Web Server

FZS Agent 与 FZS Web 的服务中间件，对外输出 Restful API 服务。

### FZS Web

FZS 的管理平台，通过对接 FZS Web Server 的 Restful API，实现了数据同步链路的创建、启动、停止、监控等功能。

### FZS Daemon

FZS Web 的预警组件，监听各个同步链路的报错信息，并通过邮件、短信、Webhook 等方式通知管理员用户。