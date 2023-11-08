---
sidebar_position: 8
---

# 修复数据链路

:::tip
此接口仅需要向**<u>源端</u>** Web Server 请求即可。
:::

该接口可以修复某数据链路的某些用户或者表，使其重新进行全同步，调用成功会返回相应的状态信息。

### 请求 URI

`POST /fix`

### 参数说明

同 `/create` [接口参数](./create/#create-params)。

### 使用样例

同 `/create` [接口使用样例](./create/#create-usage)，将接口路径中的 `/create` 替换为 `/fix` 即可。

### 响应体格式

```json
{ "stateCode": 0, "stateMsg": "" }
```

参数说明如下：

| 参数名      | 说明                                |
| :---------- | :---------------------------------- |
| `stateCode` | `NUMBER` 类型，错误码。`0` 表示成功 |
| `stateMsg`  | `STRING` 类型，错误消息             |
