---
sidebar_position: 4
---

# FZS Web Server

**FZS Web Server** 是连接 FZS Web 前端与底层同步引擎的核心中间件。它提供了丰富的 RESTful API，不仅支撑了 FZS Web 的所有交互功能，也允许用户通过 API 进行二次开发，实现自动化的运维管理。

## 核心功能

* **服务中间件**：作为 FZS Agent 与 FZS Web 之间的桥梁，负责指令下发与状态聚合。
* **API 服务**：对外提供标准化的 HTTP 接口，支持创建任务、查询状态、控制启停等操作。

## 文档目录

* **[部署指南](./deployement/index.md)**
  <br/>如何在不同的数据库环境（LightDB, MySQL, OceanBase 等）中部署 FZS Web Server。

* **[API 参考](./api/index.md)**
  <br/>详细的接口定义文档，包含请求参数、响应示例及错误码说明。

:::warning 版本兼容性
请确保 FZS Web Server 与 FZS Web 以及 FZS Agent 的版本保持一致。版本跨度过大可能导致通信失败或功能异常。
:::