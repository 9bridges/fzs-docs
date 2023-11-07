---
sidebar_position: 3
---

# 上传数据节点授权

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
