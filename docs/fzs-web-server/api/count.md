---
sidebar_position: 13
---

# 获取数据链路增量计数

该接口可以获取 FZS Agent 的增量链路增量计数。

### 请求 URI

`POST /count`

### 参数说明

```json
{
  "id": "string",
  "startTime": 1699336083,
  "endTime": 1699336083
}
```

参数说明如下：

| 参数名      | 说明                                        |
| :---------- | :------------------------------------------ |
| **`id`**    | `STRING` 类型，FZS Agent ID。               |
| `startTime` | `NUMBER` 类型，查询起始时间 `unix` 时间戳。 |
| `endTime`   | `NUMBER` 类型，查询结束时间 `unix` 时间戳。 |

### 使用样例

以下请求会获取 ID 为 `8AouMB` 的 FZS Agent 的增量链路增量计数。

```shell
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "id": "8AouMB"
}' \
 'http://172.21.16.4:48081/count'
```

### 响应体格式

```json
[
  {
    "id": "8AouMB",
    "checkPoint": 1699336365,
    "startTime": null,
    "endTime": null,
    "icnt": 6634,
    "ucnt": 603604,
    "dcnt": 603604,
    "ddlCnt": 603
  }
]
```

响应体返回一个数组，数组中每个元素为一个对象，对象中的参数说明如下：

| 参数名       | 说明                                      |
| :----------- | :---------------------------------------- |
| `id`         | `STRING` 类型，FZS Agent ID。             |
| `checkPoint` | `NUMBER` 类型，当前检查点 `unix` 时间戳   |
| `startTime`  | `NUMBER` 类型，查询起始时间 `unix` 时间戳 |
| `endTime`    | `NUMBER` 类型，查询结束时间 `unix` 时间戳 |
| `icnt`       | `NUMBER` 类型，增量插入计数               |
| `ucnt`       | `NUMBER` 类型，增量更新计数               |
| `dcnt`       | `NUMBER` 类型，增量删除计数               |
| `ddlCnt`     | `NUMBER` 类型，增量 DDL 计数              |
