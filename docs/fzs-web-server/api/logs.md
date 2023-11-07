---
sidebar_position: 14
---

# 获取数据链路日志

该接口可以获取 FZS Agent 的增实时运行日志。

### 请求 URI

`POST /logs`

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
 'http://172.21.16.4:48081/logs'
```

### 响应体格式

```json
{
  "infoMsg": "20047 BLK:19 BLKOFF:0 MEM:0 CNT:22<br/>2023-11-07 13:55:27.353 INFO   - ANA REDO RETURN:LOG_NEED_AGAIN<br/>2023-11-07 13:55:27.353 INFO   - th:1 scn_max:b2a4b1e scn_sub_max:1<br/>2023-11-07 13:55:27.353 INFO   - stream clean out size:515 pay time : 2us<br/>2023-11-07 13:55:27.353 INFO   - merge (pay time:38us)<br/>2023-11-07 13:55:27.353 INFO   - export 1 process tgtid = 1, IRP = 1, DRP = 1, URP = 1, QMI = 0, DDL = 0, TRANS = 3, SCN_TIME:2023-11-07 13:55:24)<br/>2023-11-07 13:55:27.353 INFO   - SHOULD SAVE 0 NOT OUTPUT CMT TRANS TO DISK, NEED NOT SAVE<br/>2023-11-07 13:55:27.353 INFO   - SAVED 0 CMT AND UNCMT TRANS TO DISK BEFORE NEXT ANALYSIS<br/>2023-11-07 13:55:27.353 INFO   - th_deal:0x1<br/>2023-11-07 13:55:27.354 INFO   - th:1 scn_max:b2a4b1e scn_sub_max:1<br/>2023-11-07 13:55:27.354 INFO   - th_deal:0x1<br/>2023-11-07 13:55:27.354 INFO   - HAS NO CHANGE<br/>2023-11-07 13:55:27.853 INFO   - there is no incl data kd_buf_list_size:551<br/>2023-11-07 13:55:27.853 INFO   - kd_buf_list_size:551<br/>2023-11-07 13:55:27.854 INFO   - export 1 tgt 1 File Created:/home/fzs/web-server/fzsweb/run/fzs/fzs8AouMB/run/fzs_src/1/1/1861.fzs (Size = 551)<br/>2023-11-07 13:55:27.854 INFO   - write stream to file(pay time:165us)<br/>2023-11-07 13:55:27.854 INFO   - send tgt 1 incl 0 file:/home/fzs/web-server/fzsweb/run/fzs/fzs8AouMB/run/fzs_src/1/1/1861.fzs size:551 finished<br/>2023-11-07 13:55:28.355 INFO   - th:1 scn_max:b2a4b1e scn_sub_max:1<br/>2023-11-07 13:55:28.355 INFO   - th_deal:0x1<br/>2023-11-07 13:55:28.355 INFO   - HAS NO CHANGE<br/>2023-11-07 13:55:29.356 INFO   - th:1 scn_max:b2a4b1e scn_sub_max:1<br/>2023-11-07 13:55:29.356 INFO   - th_deal:0x1<br/>2023-11-07 13:55:29.356 INFO   - HAS NO CHANGE<br/>2023-11-07 13:55:30.357 INFO   - REDO CHANGE:[/u01/app/oracle/oradata/LHR11G/redo01.log], RAC_ID:1, SEQ:120047, MAX_SEQ:120047, DIFF_SEQ:0, CUR_BLK:19, NEXT_BLK:1253, BLK_OFF:0 LEFLAG:8<br/>2023-11-07 13:55:30.357 INFO   - TH:1 READ SIZE:631808<br/>2023-11-07 13:55:30.358 INFO   - REC TH:1 SEQ:120047 BLK:1253 BLKOFF:0 MEM:0 CNT:2087<br/>2023-11-07 13:55:30.359 INFO   - ANA REDO RETURN:LOG_NEED_AGAIN<br/>2023-11-07 13:55:30.359 INFO   - th:1 scn_max:b2a4b47 scn_sub_max:1<br/>2023-11-07 13:55:30.360 INFO   - stream clean out size:225769 pay time : 129us<br/>2023-11-07 13:55:30.362 INFO   - merge (pay time:1949us)<br/>2023-11-07 13:55:30.362 INFO   - export 1 process tgtid = 1, IRP = 0, DRP = 1000, URP = 1000, QMI = 10, DDL = 0, TRANS = 1, SCN_TIME:2023-11-07 13:55:29)<br/>2023-11-07 13:55:30.362 INFO   - stream clean out size:156 pay time : 0us<br/>2023-11-07 13:55:30.362 INFO   - merge (pay time:70us)<br/>2023-11-07 13:55:30.362 INFO   - export 1 tgt 1 File Created:/home/fzs/web-server/fzsweb/run/fzs/fzs8AouMB/run/fzs_src/1/1/1862.fzs (Size = 205799)<br/>2023-11-07 13:55:30.362 INFO   - write stream to file(pay time:281us)<br/>2023-11-07 13:55:30.362 INFO   - export 1 process tgtid = 1, IRP = 0, DRP = 0, URP = 0, QMI = 0, DDL = 1, TRANS = 1, SCN_TIME:2023-11-07 13:55:29)<br/>2023-11-07 13:55:30.362 INFO   - export 1 tgt 1 File Created:/home/fzs/web-server/fzsweb/run/fzs/fzs8AouMB/run/fzs_src/1/1/1863.fzs (Size = 183)<br/>2023-11-07 13:55:30.363 INFO   - write stream to file(pay time:700us)<br/>2023-11-07 13:55:30.363 INFO   - SHOULD SAVE 0 NOT OUTPUT CMT TRANS TO DISK, NEED NOT SAVE<br/>2023-11-07 13:55:30.363 INFO   - SAVED 0 CMT AND UNCMT TRANS TO DISK BEFORE NEXT ANALYSIS<br/>2023-11-07 13:55:30.364 INFO   - th_deal:0x1<br/>2023-11-07 13:55:30.364 INFO   - th:1 scn_max:b2a4b47 scn_sub_max:1<br/>2023-11-07 13:55:30.364 INFO   - th_deal:0x1<br/>2023-11-07 13:55:30.365 INFO   - HAS NO CHANGE<br/>2023-11-07 13:55:30.367 INFO   - send tgt 1 incl 0 file:/home/fzs/web-server/fzsweb/run/fzs/fzs8AouMB/run/fzs_src/1/1/1862.fzs size:205799 finished<br/>2023-11-07 13:55:30.368 INFO   - send tgt 1 incl 0 file:/home/fzs/web-server/fzsweb/run/fzs/fzs8AouMB/run/fzs_src/1/1/1863.fzs size:183 finished<br/>2023-11-07 13:55:31.365 INFO   - th:1 scn_max:b2a4b47 scn_sub_max:1<br/>2023-11-07 13:55:31.365 INFO   - th_deal:0x1<br/>2023-11-07 13:55:31.366 INFO   - HAS NO CHANGE<br/>2023-11-07 13:55:32.366 INFO   - th:1 scn_max:b2a4b47 scn_sub_max:1<br/>2023-11-07 13:55:32.366 INFO   - th_deal:0x1<br/>2023-11-07 13:55:32.367 INFO   - HAS NO CHANGE<br/><br/>",
  "errMsg": ""
}
```

参数说明如下：

| 参数名    | 说明                                  |
| :-------- | :------------------------------------ |
| `infoMsg` | `STRING` 类型，FZS Agent 的运行日志。 |
| `errMsg`  | `STRING` 类型，FZS Agent 的错误日志。 |
