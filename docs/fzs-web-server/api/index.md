---
sidebar_position: 1
---

# API 文档

FZS Web Server 提供 API 功能，你可以通过 API 对 FZS 同步工具进行运维操作。

你可以通过 API 完成 FZS 同步工具的如下运维操作：

### 数据节点管理

- [测试数据节点连接](./ping-web-server)
- [获取数据节点授权](./license-info)
- [测试数据库可用性](./test-db-validity)
- [上传数据节点授权](./upload-license)

### 数据链路管理

> #### 注意：
>
> 数据链路相关 API 需要在源端节点与备端节点上**<u>分别调用</u>**。

- [创建数据链路](./create)
- [启动数据链路](./start)
- [停止数据链路](./stop)
- [重置数据链路](./reset)
- [修复数据链路](./fix)
- [销毁数据链路](./cancel)
- [获取 FZS 软件路径](./run-path)
- [获取链路全量同步信息](./full-sync)
- [获取数据链路增量延时](./delay)
- [获取数据链路增量计数](./count)
<!-- - [获取数据链路比对结果](./verify) -->
- [获取数据链路日志](./logs)
- [清除链路错误日志](./reset-error)
- [下载数据链路日志](./log-tar)
- [获取 FZS 软件包](./agent-version)
- [更新 FZS 软件包](./upload-agent)
