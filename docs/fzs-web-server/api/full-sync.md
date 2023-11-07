---
sidebar_position: 11
---

# 获取链路全量同步信息

该接口可以获取 FZS Agent 的全量同步实时信息。

### 请求 URI

`POST /full-sync`

### 参数说明

```json
{
  "id": "string"
}
```

参数说明如下：

| 参数名   | 说明                          |
| :------- | :---------------------------- |
| **`id`** | `STRING` 类型，FZS Agent ID。 |

### 使用样例

以下请求会获取 ID 为 `8AouMB` 的 FZS Agent 的全量信息。

```shell
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "id": "8AouMB"
}' \
 'http://172.21.16.4:48081/full-sync'
```

### 响应体格式

```json
{
  "id": "8AouMB",
  "checkPoint": 1699335671,
  "startTime": null,
  "endTime": null,
  "fullStart": 1699330259,
  "fullEnd": 1699330280,
  "fullTotalCnt": 24,
  "fullFinishCnt": 24
}
```

参数说明如下：

| 参数名          | 说明                                      |
| :-------------- | :---------------------------------------- |
| `id`            | `STRING` 类型，FZS Agent ID。             |
| `checkPoint`    | `NUMBER` 类型，当前检查点 `unix` 时间戳   |
| `startTime`     | `NUMBER` 类型，查询起始时间 `unix` 时间戳 |
| `endTime`       | `NUMBER` 类型，查询结束时间 `unix` 时间戳 |
| `fullStart`     | `NUMBER` 类型，全量开始时间 `unix` 时间戳 |
| `fullEnd`       | `NUMBER` 类型，全量结束时间 `unix` 时间戳 |
| `fullTotalCnt`  | `NUMBER` 类型，全量总计行数。             |
| `fullFinishCnt` | `NUMBER` 类型，全量完成行数。             |
