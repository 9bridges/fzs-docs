# 恒生电子 LightDB

LightDB 是恒生电子股份有限公司研发并将长期支持的一款同时支持在线事务处理与在线分析处理的融合型分布式数据库产品，具备 SQL 兼容性高、容量弹性伸缩、金融级高可用、现代硬件融合、纯内存计算等核心特性，主要适用于对可用性、一致性要求较高的系统。

## Oracle 至 LightDB 链路适配

### 同步功能支持

| Oracle 对象               | FZS 是否支持                                                                                                   |
| :------------------------ | :------------------------------------------------------------------------------------------------------------- |
| 表                        | 支持                                                                                                           |
| 分区表（1、2 级别分区表） | 支持（但 1、2 级分区操作：合并、拆分、交换、移动分区、重建分区索引、哈希分区表添加分区、表空间的指定暂不支持） |
| 临时表（事务、会话级）    | 支持                                                                                                           |
| 视图                      | 暂不支持                                                                                                       |
| 物化视图                  | 暂不支持                                                                                                       |
| 索引                      | 支持                                                                                                           |
| 约束                      | 支持                                                                                                           |
| 序列                      | 支持                                                                                                           |
| 同义词                    | 暂不支持                                                                                                       |
| 触发器                    | 暂不支持                                                                                                       |
| 函数                      | 暂不支持                                                                                                       |
| 存储过程                  | 暂不支持                                                                                                       |
| 包                        | 暂不支持                                                                                                       |
| Dblink                    | 暂不支持                                                                                                       |
| type                      | 支持（详见数据类型映射关系）                                                                                   |

### 数据类型映射

| Oracle 数据类型                | LightDB 数据类型（LightDB 内部数据类型转换）   |
| :----------------------------- | :--------------------------------------------- |
| `TIMESTAMP(1) WITH TIME ZONE`  | `TIMESTAMP(1) WITH TIME ZONE (TIMESTAMPTZ(1))` |
| `INTERVAL YEAR(4) TO MONTH`    | `INTERVAL YEAR TO MONTH`                       |
| `BFILE`                        | `BYTEA`                                        |
| `NCLOB`                        | `TEXT`                                         |
| `INTERVAL DAY(n) TO SECOND(n)` | `INTERVAL DAY TO SECOND(6)`                    |
| `LONG RAW `                    | `BYTEA`                                        |
| `BINARY_FLOAT`                 | `REAL (FLOAT4)`                                |
| `NCHAR`                        | `CHAR (BPCHAR)`                                |
| `UROWID`                       | `OID`                                          |
| `TIMESTAMP(n)`                 | `TIMESTAMP(n)`                                 |
| `BINARY_DOUBLE`                | `DOUBLE PRECISION (FLOAT8)`                    |
| `FLOAT`                        | `FLOAT8`                                       |
| `TIMESTAMP(n) WITH TIME ZONE`  | `TIMESTAMP(n) WITH TIME ZONE (TIMESTAAMPTZ)`   |
| `NVARCHAR2`                    | `NVARCHAR2`                                    |
| `ROWID`                        | `TID`                                          |
| `XMLTYPE`                      | `BYTEA`                                        |
| `BLOB`                         | `BYTEA`                                        |
| `LONG`                         | `TEXT`                                         |
| `CLOB`                         | `TEXT`                                         |
| `RAW`                          | `BYTEA`                                        |
| `DATE`                         | `DATE`                                         |
| `CHAR`                         | `CHAR (BPCHAR)`                                |
| `VARCHAR2`                     | `VARCHAR2`                                     |
| `NUMBER`                       | `NUMERIC`                                      |
| `INT`                          | `BIGINT (INT8)`                                |

## LightDB 到 LightDB 链路适配
