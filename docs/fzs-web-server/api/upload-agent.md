---
sidebar_position: 18
---

# 更新 FZS 软件包

该接口用于更新 Web Server 上的 FZS Agent 软件包。

### 请求 URI

`POST /upload-agent`

### 参数说明

```json
{
  "name": "string",
  "filename": "string",
  "file": "string"
}
```

参数说明如下：

| 参数名         | 说明                                         |
| :------------- | :------------------------------------------- |
| **`name`**     | `STRING` 类型，FZS Agent ID。                |
| **`filename`** | `STRING` 类型，软件包名称。                  |
| **`file`**     | `STRING` 类型，base64 字符串，软件包的内容。 |

### 使用样例

以下请求将为 ID `rtORekZe` 的 Agent 更新一个 `0131.oracle.afb6e5a2.fzs.linux.11g.web.tar.gz` 软件包，更新成功会返回相应信息。

```shell
curl -i -X POST \
   -H "Content-Type:multipart/form-data" \
   -F "rtORekZe=@/tmp/0131.oracle.afb6e5a2.fzs.linux.11g.web.tar.gz" \
 'http://172.21.16.4:8981/upload-agent'
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
