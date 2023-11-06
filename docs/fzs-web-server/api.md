---
sidebar_position: 1
---

# API 文档

FZS Web Server 提供 API 功能，你可以通过 API 对 FZS 同步工具进行运维操作。

你可以通过 API 完成 FZS 同步工具的如下运维操作：

### 数据节点管理

- [测试数据节点连接](#ping-web-server)
- [获取数据节点授权](#license-info)
- [测试数据库可用性](#test-db-validity)
- [上传数据节点授权](#upload-license)

### 数据链路管理

- [创建数据链路](#create)
- [启动数据链路](#start)
- [停止数据链路](#stop)
- [销毁数据链路](#cancel)
- [重置数据链路](#reset)
- [修复数据链路](#fix)
- [获取 FZS 软件路径](#run-path)
- [获取链路全量同步信息](#full)
- [获取数据链路增量延时](#delay)
- [获取数据链路增量计数](#count)
- [获取数据链路比对结果](#verify)
- [获取数据链路日志](#logs)
- [清除链路错误日志](#clean-logs)
- [下载数据链路日志](#log-tar)
- [更新 FZS 软件包](#upload-agent)

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

## 测试数据库可用性 {#test-db-validity}

该接口旨在测试数据库可用性，请求成功会返回对应节点的数据库可用性信息。

### 请求 URI

`POST /test-db-validity`

### 参数说明

```json
{
  "agentType": 0,
  "databaseConfig": [
    {
      "host": "string",
      "userName": "string",
      "passWord": "string",
      "dbType": "string"
    }
  ]
}
```

参数说明如下：

| 参数名           | 说明                                                              |
| :--------------- | :---------------------------------------------------------------- |
| `agentType`      | `NUMBER` 类型，软件包的类型：`0` 为源端，`1` 为备端。（**必选**） |
| `databaseConfig` | 数据库连接参数。（**必选**）                                      |

`databaseConfig` 参数说明如下：

| 参数名                          | 说明                                           |
| :------------------------------ | :--------------------------------------------- |
| `host`                          | `STRING` 类型，格式：`IP`/`端口`。（**必选**） |
| `userName`                      | `STRING` 类型，数据库用户名。（**必选**）      |
| `passWord`                      | `STRING` 类型，数据库登录密码。（**必选**）    |
| [`dbType`](../intro/db-support) | `STRING` 类型，数据库类型。（**必选**）        |

### 使用样例

以下请求会测试一个 `oracle` 数据库的源端可用性。

```shell
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "agentType": 0,
  "databaseConfig": [
    {
      "host": "172.21.16.4:1621/lhr11g",
      "userName": "***",
      "passWord": "***",
      "dbType": "oracle"
    }
  ]
}' \
 'http://172.21.16.3:8089/test-db-validity'
```

### 响应体格式

```json
{ "stateCode": 0, "stateMsg": "" }
```

参数说明如下：

| 参数名      | 说明                                |
| :---------- | :---------------------------------- |
| `stateCode` | `NUMBER` 类型，错误码。`0` 表示成功 |
| `stateMsg`  | `STRING` 类型，错误消息             |

## 上传数据节点授权 {#upload-license}

该接口可以上传数据节点上传文件，上传成功会返回相应的状态信息。

### 请求 URI

`POST /upload-license`

### 参数说明

```json
{
  "name": "string",
  "filename": "string",
  "file": "string"
}
```

参数说明如下：

| 参数名     | 说明                                                       |
| :--------- | :--------------------------------------------------------- |
| `name`     | `STRING` 类型，授权文件名称。（**必选**）                  |
| `filename` | `STRING` 类型，授权文件名称。（**必选**）                  |
| `file`     | `STRING` 类型，base64 字符串，授权文件的内容。（**必选**） |

### 使用样例

以下请求会上传一个 `sn_nolimit.txt` 授权文件，上传成功会返回 `OK` 。

```shell
curl -i -X POST \
   -H "Content-Type:multipart/form-data" \
   -F "name=sn_nolimit" \
   -F "filename=sn_nolimit" \
   -F "file=@\"./sn_nolimit.txt\";type=text/plain;filename=\"sn_nolimit.txt\"" \
 'http://172.21.16.4:8089/upload-license'
```

### 响应体格式

```text
OK
```
