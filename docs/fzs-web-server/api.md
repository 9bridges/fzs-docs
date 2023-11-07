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

---

### 数据链路管理

> #### 注意：
>
> 数据链路相关 API 需要在源端节点与备端节点上**<u>分别调用</u>**。

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

---

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

---

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

---

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

---

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

| 参数名         | 说明                                           |
| :------------- | :--------------------------------------------- |
| **`name`**     | `STRING` 类型，授权文件名称。                  |
| **`filename`** | `STRING` 类型，授权文件名称。                  |
| **`file`**     | `STRING` 类型，base64 字符串，授权文件的内容。 |

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

---

## 创建数据链路 {#create}

该接口可以在某个数据节点上创建一条链路，创建成功会返回相应的状态信息。

### 请求 URI

`POST /create`

### 参数说明

```json
{
  "id": "string",
  "dataPort": "string",
  "ip": "string",
  "agentType": 0,
  "databaseConfig": [
    {
      "host": "string",
      "userName": "string",
      "passWord": "string",
      "dbType": "string"
    }
  ],
  "sourceConfig": {
    "mapUser": "string",
    "mapTable": "string",
    "mapNotTable": "string",
    "fullSyncCnt": "string",
    "mustFullSync": "string",
    "mustSyncDDL": "string",
    "rateLimit": "string",
    "beginTime": "string",
    "ifFzsText": "string",
    "obIncSyncUsername": "string",
    "obIncSyncPassword": "string",
    "obIncSyncConfigURL": "string"
  },
  "sinkConfig": {
    "mapUser": "string",
    "mapTable": "string",
    "mapColumn": "string",
    "ifFzsText": "string",
    "ifDirectLoad": "string",
    "portToQueue": "string",
    "portToAlloc": "string",
    "fullSyncCnt": "string"
  },
  "asmLogin": "string",
  "asmOracleSID": "string",
  "asmOracleHome": "string",
  "asmMode": "string",
  "asmConfig": [
    {
      "asmDev": "string",
      "asmDisk": "string"
    }
  ],
  "execSwitch": "string",
  "extraConfig": {
    "config-key": "config-value"
  }
}
```

参数说明如下：

| 参数名               | 说明                                                                                                                            |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| **`id`**             | `STRING` 类型，FZS Agent ID。此 ID 用于生成 Web Server 上的 FZS Agent 路径。                                                    |
| **`dataPort`**       | `STRING` 类型，同步链路的数据传输端口。                                                                                         |
| **`ip`**             | `STRING` 类型，同步链对端节点的 IP 地址。例如：如果此接口向 Web Server 请求，则填写备端 Web Server 的 IP 地址，反之亦然。       |
| **`agentType`**      | `STRING` 类型，FZS Agent 的类型，`0` 则代表源端，`1` 则代表备端。                                                               |
| **`databaseConfig`** | Web Server 数据库连接参数。                                                                                                     |
| **`sourceConfig`**   | Web Server 源端同步参数。**注意：**仅当请求的是源端 Web Server 时添加。                                                         |
| **`sinkConfig`**     | Web Server 备端同步参数。**注意：**仅当请求的是备端 Web Server 时添加。                                                         |
| `asmLogin`           | `STRING` 类型，Oracle ASM 登录字符串，**注意：**仅当数据节点的数据库类型为 `Oracle` 时添加。                                    |
| `asmOracleSID`       | `STRING` 类型，Oracle ASM 登录 SID，**注意：**仅当数据节点的数据库类型为 `Oracle` 时添加。                                      |
| `asmOracleHome`      | `STRING` 类型，Oracle ASM Home 路径，**注意：**仅当数据节点的数据库类型为 `Oracle` 时添加。                                     |
| `asmMode`            | `STRING` 类型，Oracle ASM 模式，`0` 代表 `db` 模式，`1` 代表 `raw` 模式。**注意：**仅当数据节点的数据库类型为 `Oracle` 时添加。 |
| `asmConfig`          | ASM 配置参数。                                                                                                                  |
| `execSwitch`         | `STRING` 类型，是否执行源端备端的灾备切换，`1` 则代表执行，`0` 则代表不执行。                                                   |
| `extraConfig`        | FZS Agent 的其他配置项。                                                                                                        |

`databaseConfig` 参数说明如下：

| 参数名                              | 说明                               |
| :---------------------------------- | :--------------------------------- |
| **`host`**                          | `STRING` 类型，格式：`IP`/`端口`。 |
| **`userName`**                      | `STRING` 类型，数据库用户名。      |
| **`passWord`**                      | `STRING` 类型，数据库登录密码。    |
| [**`dbType`**](../intro/db-support) | `STRING` 类型，数据库类型。        |

`sourceConfig` 参数说明如下：

| 参数名               | 说明                                                                                                        |
| :------------------- | :---------------------------------------------------------------------------------------------------------- |
| **`mapUser`**        | `STRING` 类型，需要同步的用户名。 格式：`USER1,USER2,USER3`，多个用户逗号分隔                               |
| `mapTable`           | `STRING` 类型，需要同步的表名。 格式：`USER.TABLE1,USER.TABLE2,USER.TABLE3`，多张表逗号分隔                 |
| `mapNotTable`        | `STRING` 类型，需要排除的表名。 格式：`USER.TABLE1,USER.TABLE2,USER.TABLE3`，多张表逗号分隔                 |
| `fullSyncCnt`        | `STRING` 类型，全量同步的并发数。默认值为 `8`                                                               |
| `mustFullSync`       | `STRING` 类型，是否进行全量同步。是则填写 `1`，否则填写 `0`                                                 |
| `mustSyncDDL`        | `STRING` 类型，是否同步 DDL 语句。是则填写 `1`，否则填写 `0`                                                |
| `rateLimit`          | `STRING` 类型，同步限速。                                                                                   |
| `beginTime`          | `STRING` 类型，同步指定历史时间。**注意**：此时间不能大于当前时间                                           |
| `ifFzsText`          | `STRING` 类型，是否开启文本转换。是则填写 `1`，否则填写 `0`                                                 |
| `obIncSyncUsername`  | `STRING` 类型，OceanBase 增量模块使用的用户名。**注意：** 仅当源端数据节点类型为 `OceanBase` 时添加。       |
| `obIncSyncPassword`  | `STRING` 类型，OceanBase 增量模块使用的密码。**注意：** 仅当源端数据节点类型为 `OceanBase` 时添加。         |
| `obIncSyncConfigURL` | `STRING` 类型，OceanBase 增量模块使用的集群配置 URL。**注意：** 仅当源端数据节点类型为 `OceanBase` 时添加。 |

`sinkConfig` 参数说明如下：

| 参数名         | 说明                                                                                                    |
| :------------- | :------------------------------------------------------------------------------------------------------ |
| `mapUser`      | `STRING` 类型，需要同步的用户名。 格式：`USER1,USER2,USER3`，多个用户逗号分隔                           |
| `mapTable`     | `STRING` 类型，需要同步的表名。 格式：`USER.TABLE1,USER.TABLE2,USER.TABLE3`，多张表逗号分隔             |
| `mapColumn`    | `STRING` 类型，需要同步的列名。 格式：`USER.TABLE.COL1,USER.TABLE.COL2,USER.TABLE.COL3`，多个列逗号分隔 |
| `ifFzsText`    | `STRING` 类型，是否开启文本转换。是则填写 `1`，否则填写 `0`                                             |
| `ifDirectLoad` | `STRING` 类型，是否开启直接路径装载。是则填写 `1`，否则填写 `0`                                         |
| `portToQueue`  | `STRING` 类型，备端进程装载端口。                                                                       |
| `portToAlloc`  | `STRING` 类型，备端进程分配端口。                                                                       |
| `fullSyncCnt`  | `STRING` 类型，全量同步的并发数。**注意：** 此参数的值须与 `sourceConfig` 中的 `fullSyncCnt` 相同       |

`asmConfig` 参数说明如下：

| 参数名    | 说明                      |
| :-------- | :------------------------ |
| `asmDev`  | `STRING` 类型，ASM 路径。 |
| `asmDisk` | `STRING` 类型，ASM 名称。 |

`extraConfig` 参数说明如下：

[点我查看](../intro/agent-config)

### 使用样例

> #### 注意：
>
> 创建一条完整的数据链路，需要在源端节点与备端节点上分别调用 `/create` 接口。

以下请求会在 `172.21.16.3:8089` 的 Web Server 上创建一个源端 FZS Agent，创建成功则会返回相应状态。

```shell
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "id": "V76b2z",
  "dataPort": "8203",
  "ip": "192.168.0.24",
  "agentType": 0,
  "asmLogin": "",
  "asmOracleSID": "",
  "asmOracleHome": "",
  "asmMode": "db",
  "asmConfig": [
    {
      "asmDev": "",
      "asmDisk": ""
    }
  ],
  "databaseConfig": [
    {
      "host": "192.168.0.24:1521/orcl",
      "userName": "fzs1",
      "passWord": "fzs1",
      "dbType": "oracle"
    }
  ],
  "sourceConfig": {
    "dataPort": "8203",
    "mapUser": "",
    "mapTable": "",
    "mapNotTable": "",
    "fullSyncCnt": "8",
    "mustfullSync": "1",
    "mustSyncDDL": "1",
    "rateLimit": null,
    "asmLogin": "",
    "asmOracleSID": "",
    "asmOracleHome": "",
    "asmMode": "db",
    "asmDisk": "",
    "asmDev": "",
    "beginTime": null,
    "extraConfig": "",
    "obIncSyncUsername": null,
    "obIncSyncPassword": null,
    "obIncSyncConfigURL": null,
    "ifFzsText": "0"
  },
  "execSwitch": "0",
  "extraConfig": null
}' \
 'http://172.21.16.3:8089/create'
```

以下请求会在 `172.21.16.4:8089` 的 Web Server 上创建一个备端 FZS Agent，创建成功则会返回相应状态。

```shell
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "id": "-ChB4l",
  "dataPort": "8203",
  "ip": "192.168.0.24",
  "agentType": 1,
  "asmLogin": "",
  "asmOracleSID": "",
  "asmOracleHome": "",
  "asmMode": "db",
  "asmConfig": [
    {
      "asmDev": "",
      "asmDisk": ""
    }
  ],
  "databaseConfig": [
    {
      "host": "192.168.0.24:1521/orcl",
      "userName": "fzs1",
      "passWord": "fzs1",
      "dbType": "oracle"
    }
  ],
  "sinkConfig": {
    "id": "69ab59fd-72f7-4f71-a349-032c6f91e96b",
    "usedById": "clonqfx6i0001tzso2l208qob",
    "mapUser": "",
    "mapTable": "",
    "mapColumn": "",
    "ifFzsText": "0",
    "ifDirectLoad": "1",
    "portToQueue": "18409",
    "portToAlloc": "16938",
    "asmLogin": "",
    "asmOracleSID": "",
    "asmOracleHome": "",
    "asmMode": "db",
    "asmDisk": "",
    "asmDev": "",
    "extraConfig": "",
    "fullSyncCnt": "8"
  },
  "extraConfig": null
}' \
 'http://172.21.16.4:8089/create'
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

---
