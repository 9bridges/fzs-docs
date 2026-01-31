---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 部署方案

在选择核心组件 FZS Agent 的部署方案时，我们提供两种选项：

<Tabs>
  <TabItem value="p2p" label="点对点 (性能至上)" default>

**点对点部署**是追求极致性能与低时延的首选方案。

在此模式下，源端 Agent 与备端 Agent 直接部署在各自的数据库服务器（或紧邻的服务器）上，数据通过高速网络直接传输，没有中间跳转环节。

```mermaid
flowchart BT
  source-agent -- 发送数据 --> sink-agent
  fzs-web <-. API 交互 .-> source-web-server
  fzs-web <-. API 交互 .-> sink-web-server
  user-ex((示例用户)) -. UI 交互 .-> fzs-web
  subgraph 源端主机
    source-db[(数据库 S)] -- 抽取数据 --> source-agent
    subgraph fzs-source [FZS 源端]
      source-web-server(FZS Web Server 源端)
      source-agent(FZS Agent 源端)
      source-web-server -. 资源调度 .-> source-agent
    end
  end
  subgraph 中间机
    fzs-daemon(FZS Daemon 预警管理)
    fzs-web(FZS Web 同步管理)
    fzs-daemon -. 触发告警 .-o fzs-web
  end
  subgraph 备端主机
    sink-agent -- 装载数据 --> sink-db[(数据库 T)]
    subgraph fzs-sink [FZS 备端]
      sink-web-server(FZS Web Server 备端)
      sink-agent(FZS Agent 备端)
      sink-web-server -. 资源调度 .-> sink-agent
    end
  end
```

  </TabItem>
  <TabItem value="middle" label="中间机 (安全至上)">

**中间机部署**适用于对生产环境有严格侵入性限制的场景。

在此模式下，Agent 不部署在核心生产服务器上，而是部署在独立的中间服务器上。它通过网络连接到源库和目标库。这种方式对生产服务器的资源占用最小，且便于统一管理。

  </TabItem>
</Tabs>

每种拓扑结构都各自满足不同的业务运行和数据安全的需求，允许用户根据其特定要求选择最合适的选项。

## 方案详情

### 点对点 {#performance-first}

对于追求高性能、低时延的用户，我们建议使用点对点部署方式。点对点部署方式下，源端和备端直接通信，不存在任何数据中途流转的环节，数据传输效率高，适用于对数据传输性能要求较高的场景。

为了达到最佳的性能，[FZS Web Server](/fzs-web-server/index.md) 源端和备端需要分别部署在源端和备端主机上，以便对各自的 FZS Agent 进行管理与资源调度，数据库源端和备端之间需要直接通信。

### 中间机 {#security-first}

对于追求数据安全、业务侵入性低的用户，我们建议使用中间机部署方式。中间机部署方式下，源端和备端通过中间机进行数据传输，中间机负责数据的中转，源端和备端之间不直接通信，数据传输过程中不会暴露源端和备端的真实地址，适用于对数据传输安全性要求较高的场景。如下图所示：

```mermaid
flowchart BT
  source-agent -- 发送数据 --> sink-agent
  fzs-web <-. API 交互 .-> fzs-web-server(FZS Web Server)
  user-ex((示例用户)) -. UI 交互 .-> fzs-web
  source-db[(数据库 S)] -- 抽取数据 --> source-agent
  sink-agent -- 装载数据 --> sink-db[(数据库 T)]
  subgraph 源端主机
    source-db[(数据库 S)]
  end
  subgraph 中间机
    fzs-daemon(FZS Daemon 预警管理)
    fzs-web(FZS Web 同步管理)
    fzs-web-server(FZS Web Server)
    source-agent(FZS Agent 源端)
    sink-agent(FZS Agent 备端)
    fzs-daemon -. 触发告警 .-o fzs-web
    fzs-web-server -. 资源调度 .-> sink-agent
    fzs-web-server -. 资源调度 .-> source-agent
  end
  subgraph 备端主机
    sink-db[(数据库 T)]
  end
```

为了达到最佳的安全性与最低的业务侵入性，只需一个 [FZS Web Server](/fzs-web-server/index.md) 部署在中间机上，它便可以对源端和备端的 FZS Agent 进行管理与资源调度，实现数据的远程抽取与装载，数据库源端和备端之间不直接通信。

:::note
使用中间机部署方式时，FZS 暂不支持配置以 `Oracle` 或者 `SUNDB` 作为源端的同步链路。
:::