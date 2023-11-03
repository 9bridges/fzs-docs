---
sidebar_position: 1
---

# API 文档

FZS Web Server 提供 API 功能，你可以通过 API 对 FZS 同步工具进行运维操作。

你可以通过 API 完成 FZS 同步工具的如下运维操作：

### 数据节点管理

- [测试数据节点连接](./api/data-node#ping-web-server)
- [获取数据节点授权](./api/data-node#license-info)
- [测试数据库可用性](./api/data-node/test-db-validity)
- [上传数据节点](./api/data-node/upload-license)
- [上传 FZS 软件包](./api/data-node/upload-agent)

### 数据链路管理

- [创建数据链路](./api/data-link/create)
- [启动数据链路](./api/data-link/start)
- [停止数据链路](./api/data-link/stop)
- [销毁数据链路](./api/data-link/cancel)
- [重置数据链路](./api/data-link/reset)
- [修复数据链路](./api/data-link/fix)
- [获取 FZS 软件路径](./api/data-link/run-path)
- [获取链路全量同步信息](./api/data-link/full)
- [获取数据链路增量延时](./api/data-link/delay)
- [获取数据链路增量计数](./api/data-link/count)
- [获取数据链路比对结果](./api/data-link/verify)
- [获取数据链路日志](./api/data-link/logs)
- [清除链路错误日志](./api/data-link/clean-logs)
- [下载数据链路日志](./api/data-link/log-tar)
