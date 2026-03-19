---
sidebar_position: 0
---

# API 文档

FZS Web Server 提供 RESTful API，您可以通过 API 对 FZS 同步平台进行运维操作。

通过 API，您可以完成以下运维操作：

## 数据节点管理

- [测试数据节点连接](./api/ping-web-server)
- [获取数据节点授权](./api/license-info)
- [测试数据库可用性](./api/test-db-validity)
- [上传数据节点授权](./api/upload-license)

## 数据链路管理

:::note
数据链路相关 API 需要在源端节点与备端节点上分别调用。
:::

- [创建数据链路](./api/create)
- [启动数据链路](./api/start)
- [停止数据链路](./api/stop)
- [重置数据链路](./api/reset)
- [修复数据链路](./api/fix)
- [销毁数据链路](./api/cancel)
- [获取 FZS 软件路径](./api/run-path)
- [获取链路全量同步信息](./api/full-sync)
- [获取数据链路增量延时](./api/delay)
- [获取数据链路增量计数](./api/count)
- [获取数据链路日志](./api/logs)
- [清除链路错误日志](./api/reset-error)
- [下载数据链路日志](./api/log-tar)
- [获取 FZS 软件包](./api/agent-version)
- [更新 FZS 软件包](./api/upload-agent)
