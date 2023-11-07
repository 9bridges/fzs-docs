---
sidebar_position: 16
---

# 下载数据链路日志

该接口可以打包下载 FZS Agent 的运行日志。

### 请求 URI

`POST /log-tar`

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

以下请求会获取 ID 为 `8AouMB` 的 FZS Agent 的实时运行日志。

```shell
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "id": "8AouMB"
}' \
 'http://172.21.16.4:48081/log-tar'
```

### 响应体格式

```json
{
  "bytes": [123, 233, 221]
}
```

参数说明如下：

| 参数名  | 说明                                               |
| :------ | :------------------------------------------------- |
| `bytes` | `BUFFER` 类型，FZS Agent 的运行日志文件 `buffer`。 |
