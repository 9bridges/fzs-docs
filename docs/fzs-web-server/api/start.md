---
sidebar_position: 5
---

# 启动数据链路

该接口可以在某个数据节点上启动一个 FZS Agent，启动成功会返回相应的状态信息。

### 请求 URI

`POST /start`

### 参数说明

同 `/create` [接口参数](./create/#create-params)。

### 使用样例

同 `/create` [接口使用样例](./create/#create-usage)，将接口路径中的 `/create` 替换为 `/start` 即可。

### 响应体格式

```json
{ "stateCode": 0, "stateMsg": "" }
```

参数说明如下：

| 参数名      | 说明                                |
| :---------- | :---------------------------------- |
| `stateCode` | `NUMBER` 类型，错误码。`0` 表示成功 |
| `stateMsg`  | `STRING` 类型，错误消息             |
