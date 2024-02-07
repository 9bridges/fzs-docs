---
sidebar_position: 2
---

# 功能亮点

FZS 数据闪送平台的功能亮点同样可以被总结为八个字：[**灵活多样**](#flexibility)、[**直观易用**](#usability)。

## 灵活多样 {#flexibility}

在 toB 领域，企业级产品与服务如何满足与应对复杂、多变的业务场景，是一个亘古不变的话题。

FZS 数据闪送平台在设计之初所考虑的系统灵活性与多样性，是九桥产品技术团队给到客户的答案。主要体现在以下几个方面：

### 源端支持多样

满足客户业务系统中常见关系型数据库，与大部分国产信创数据库，包括但不限于 Oracle、MySQL、PostgreSQL、SQL Server、DB2、OceanBase、TiDB、GaussDB、openGauss、武汉达梦 DM、人大金仓 Kingbase、LightDB、SUNDB、云和恩墨 MogDB 等。

[查看完整支持列表](/intro/appendix/db-support/index.md)

### 备端支持完整

满足任何兼容 `OCI` 或 `ODBC` 接口的关系型数据库，包括但不限于 Oracle、MySQL、PostgreSQL、SQL Server、DB2、OceanBase、TiDB、GaussDB、openGauss、武汉达梦 DM、人大金仓 Kingbase、LightDB、SUNDB、云和恩墨 MogDB 等。

[查看完整支持列表](/intro/appendix/db-support/index.md)

### 部署方式多选

FZS Agent 支持四种私有部署方式：

- **点对点部署**：源端 Agent 部署在源主机 + 备端 Agent 部署在备主机
- **中间机部署**：
  - 源端 Agent + 备端 Agent 皆部署在中间机
  - 源端 Agent 部署在源主机 + 备端 Agent 部署在中间机
  - 源端 Agent 部署在中间机 + 备端 Agent 部署在备主机

## 直观易用 {#usability}

当一款同步产品的介入到企业 IT 运维体系中时，通常对于忙于满足企业自身业务需求的 IT 运维人员来说，产品的学习成本也会不可避免低随之而至。因此，如何在满足复杂多样的业务需求的同时，尽可能地降低产品的使用门槛与运维成本，是一个重要的设计平衡点。

因此，九桥产品技术团队将 FZS 数据闪送平台的以下几个方面打磨成了亮点：

### 一键部署

通过 FZS Web，用户可以通过一键部署功能，快速部署 FZS Web Server，实现源备端的数据同步。

![quick-deploy-demo](/img/intro/quick-deploy-demo.png)

### 配置链路

通过 FZS Web，用户可以通过配置链路功能，快速配置源备端的数据同步链路。

![datalink-config-demo](/img/intro/datalink-config-demo.png)

### 链路监控

通过 FZS Web 的仪表盘大屏，用户可以实时监控多条数据同步链路的同步计数、增量延时、链路状态等数据。

![monitor-demo](/img/intro/monitor-demo.png)

### 告警平台

通过 FZS Web 的告警平台，用户可以实时监控多条数据同步链路的告警信息，并通过邮件、短信、Webhook 等方式通知管理员用户。

![alert-demo](/img/intro/alert-demo.png)