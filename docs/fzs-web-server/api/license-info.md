---
sidebar_position: 1
---

# 获取数据节点授权

该接口旨在获取数据节点的授权，请求成功会返回对应节点的授权信息。

### 请求 URI

`GET /license-info`

### 使用样例

以下请求会获取 IP 地址为 `172.21.16.3`，端口号为 `8089` 的 FZS Web Server 节点的授权信息。

```shell
curl -X GET http://172.21.16.3:8089/license-info
```

```json
{
  "host": "007f0100",
  "machine": "x86_64",
  "RemainingDay": -1
}
```

以上返回信息的字段解释如下：

- `host`：主机 ID
- `machine`: 主机架构
- `RemainingDay`：授权剩余时间，-1 则表示永久授权
