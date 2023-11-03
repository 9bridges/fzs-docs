---
sidebar_position: 1
---

# API 文档

FZS Web Server 提供 API 功能，你可以通过 API 对 FZS 同步工具进行运维操作。

你可以通过 API 完成 FZS 同步工具的如下运维操作：

### 数据节点管理

- [测试数据节点连接](./api/ping-web-server)
- [测试数据库可用性](./api/test-db-validity)
- [获取数据节点授权](./api/license-info)
- [上传数据节点](./api/upload-license)
- [上传 FZS 软件包](./api/upload-agent)

### 数据链路管理

- [创建数据链路](./api/create-data-link)
- [启动数据链路](./api/start-data-link)
- [停止数据链路](./api/stop-data-link)
- [销毁数据链路](./api/cancel-data-link)
- [重置数据链路](./api/reset-data-link)
- [修复数据链路](./api/reset-data-link)
- [获取 FZS 软件路径](./api/get-run-path)
- [获取数据链路延时](./api/get-delay)
- [获取链路全量同步信息](./api/get-full)
- [获取数据链路增量计数](./api/get-delay)
- [获取数据链路比对结果](./api/fzs-verify)
- [获取数据链路日志](./api/get-logs)
- [清除链路错误日志](./api/clean-logs)
- [下载数据链路日志](./api/log-tar)
