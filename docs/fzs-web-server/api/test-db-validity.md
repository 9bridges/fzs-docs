---
sidebar_position: 2
---

# 测试数据库可用性

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

| 参数名               | 说明                                                  |
| :------------------- | :---------------------------------------------------- |
| **`agentType`**      | `NUMBER` 类型，软件包的类型：`0` 为源端，`1` 为备端。 |
| **`databaseConfig`** | 数据库连接参数。                                      |

`databaseConfig` 参数说明如下：

| 参数名                              | 说明                               |
| :---------------------------------- | :--------------------------------- |
| **`host`**                          | `STRING` 类型，格式：`IP`/`端口`。 |
| **`userName`**                      | `STRING` 类型，数据库用户名。      |
| **`passWord`**                      | `STRING` 类型，数据库登录密码。    |
| [**`dbType`**](../intro/db-support) | `STRING` 类型，数据库类型。        |

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
