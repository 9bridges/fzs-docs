---
sidebar_position: 10
---

# 获取 FZS 软件路径

该接口可以获取 FZS Agent 的运行路径。

### 请求 URI

`POST /run-path`

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

以下请求会获取 ID 为 `V76b2z` 的 FZS Agent 运行路径。

```shell
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "id": "V76b2z"
}' \
 'http://172.21.16.3:8089/run-path'
```

### 响应体格式

```text
/home/web/fzsweb/run/fzs/fzsV76b2z
```
