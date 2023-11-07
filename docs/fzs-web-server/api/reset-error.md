---
sidebar_position: 15
---

# 清除链路错误日志

该接口可以清除 FZS Agent 的错误日志。

### 请求 URI

`POST /reset-error`

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

以下请求会清除 ID 为 `8AouMB` 的 FZS Agent 的错误日志。

```shell
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "id": "8AouMB"
}' \
 'http://172.21.16.4:48081/reset-error'
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
