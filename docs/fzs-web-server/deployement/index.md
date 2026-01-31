---
sidebar_position: 1
---

# FZS Web Server 部署

本章节详细介绍如何部署 FZS Web Server 的后端存储数据库，以及各种数据库作为源端时的特殊配置要求。

FZS Web Server 依赖一个关系型数据库来存储元数据（如用户信息、链路配置、日志等）。

## 支持的存储后端

您可以选择以下任意一种数据库作为 FZS Web Server 的元数据存储库：

* **[MySQL](./mysql.md)**：最通用的选择，适用于大多数场景。
* **[LightDB](./lightdb.md)**：适用于恒生系金融业务场景。
* **[OceanBase](./oceanbase.md)**：适用于高并发、分布式场景。

请点击上方链接查看具体数据库的部署与配置指南。