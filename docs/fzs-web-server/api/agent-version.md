---
sidebar_position: 17
---

# 获取 FZS 软件包

该接口获取 Web Server 上的 FZS Agent 软件包。

### 请求 URI

`POST /agent-version`

### 参数说明

```json
{
  "id": "string"
}
```

参数说明如下：

| 参数名 | 说明                                                                                              |
| :----- | :------------------------------------------------------------------------------------------------ |
| `id`   | `STRING` 类型，FZS Agent ID。**注意：** 传入**<u>空值</u>**则返回当前 Web Server 上的所有软件包。 |

### 使用样例

以下请求会获取 `172.21.16.3:35081` Web Server 上的所有 FZS Agent 包。

```shell
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "id": ""
}' \
 'http://172.21.16.3:35081/agent-version'
```

### 响应体格式

```json
{
  "agentVersions": [
    {
      "agentType": "oracle",
      "dbVerson": "10g",
      "softVersion": "main.e45bf1ad"
    },
    {
      "agentType": "oracle",
      "dbVerson": "11g",
      "softVersion": "main.odbc.pos.61e430b1"
    },
    {
      "agentType": "oracle",
      "dbVerson": "12c",
      "softVersion": "main.e45bf1ad"
    },
    {
      "agentType": "ora2ob",
      "dbVerson": "10g",
      "softVersion": "feature-zsuf30-obtarget.b0960426"
    },
    {
      "agentType": "ora2ob",
      "dbVerson": "11g",
      "softVersion": "feature-zsuf30-obtarget.b0960426"
    },
    {
      "agentType": "ora2ob",
      "dbVerson": "12c",
      "softVersion": "feature-zsuf30-obtarget.b0960426"
    },
    {
      "agentType": "odbc",
      "dbVerson": "10g",
      "softVersion": "main.odbc.pos.7fd493f2"
    },
    {
      "agentType": "odbc",
      "dbVerson": "11g",
      "softVersion": "main.odbc.pos.7fd493f2"
    },
    {
      "agentType": "odbc",
      "dbVerson": "12c",
      "softVersion": "main.odbc.pos.7fd493f2"
    },
    {
      "agentType": "oceanbase",
      "dbVerson": "3.x",
      "softVersion": "feature-ob-his-zs.bf91530f"
    }
  ]
}
```

参数说明如下：

| 参数名          | 说明                                     |
| :-------------- | :--------------------------------------- |
| `agentVersions` | Web Server 上的单个或多个 Agent 包信息。 |

`agentVersions` 参数说明如下：

| 参数名        | 说明                                          |
| :------------ | :-------------------------------------------- |
| `agentType`   | `STRING` 类型，FZS Agent 包的类型。           |
| `dbVerson`    | `STRING` 类型，FZS Agent 包对应的数据库版本。 |
| `softVersion` | `STRING` 类型，FZS Agent 包的版本。           |
