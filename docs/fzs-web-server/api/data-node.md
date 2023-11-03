---
sidebar_position: 0
---

# 数据节点

## 测试数据节点连接 {#ping-web-server}

该接口旨在测试数据节点连接，请求成功会返回对应节点的状态信息。

### 请求 URI

`GET /`

### 使用样例

以下请求会获取 IP 地址为 `172.21.16.3`，端口号为 `8089` 的 FZS Web Server 节点的状态信息。

```shell
curl -X GET http://172.21.16.3:8089
```

```json
{
  "version": "v0.1.2",
  "compileTime": "23-10-08 16:27:24",
  "gitHash": "915a23f"
}
```

以上返回信息的字段解释如下：

- `version`：当前 FZS Web Server 版本号。
- `compileTime`: 编译时间。
- `git_hash`：Git 哈希值。

## 获取数据节点授权 {#license-info}

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
