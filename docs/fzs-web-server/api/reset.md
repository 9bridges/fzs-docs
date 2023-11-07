---
sidebar_position: 7
---

# 重置数据链路

该接口可以重置某个数据节点上的 FZS Agent，重置成功会返回相应的状态信息。

### 请求 URI

`POST /reset`

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

以下请求会重置 ID 为 `V76b2z` 的 FZS Agent。

```shell
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "id": "V76b2z"
}' \
 'http://172.21.16.3:8089/reset'
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
