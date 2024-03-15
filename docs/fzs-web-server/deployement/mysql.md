# MySQL

以下是部署 MySQL 相关数据链路的一些注意事项。

## MySQL 做源端

### 拓扑结构支持

1. 单机
2. 主从 / 双主
3. `MHA` 集群
4. 多主 `NDB` 集群
5. 托管（云服务商提供的 MySQL 服务）

详情参考：[MySQL 支持的拓扑结构](https://debezium.io/documentation/reference/2.5/connectors/mysql.html#supported-mysql-topologies)

### 配置 MySQL 数据库

1. **创建 `fzs `用户**

```sql
CREATE USER 'fzs'@'localhost' IDENTIFIED BY 'fzs';
```

2. **赋予 `fzs` 用户权限**

```sql
GRANT SELECT, RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'fzs' IDENTIFIED BY 'fzs';
FLUSH PRIVILEGES;
```

3. **启用 `binlog`**

  - 查看 `binlog` 状态

  ```
  mysql> show variables like '%log_bin%';
  ```

  - 如果 `binlog` 是 `OFF` 状态，修改 `my.cnf` 文件

  ```cnf
  server-id                   = 223344 # Querying variable is called server_id, e.g. SELECT variable_value FROM information_schema.global_variables WHERE variable_name='server_id';
  log_bin                     = mysql-bin
  binlog_format               = ROW
  binlog_row_image            = FULL
  binlog_expire_logs_seconds  = 864000
  ```

 - 重启 MySQL 服务

  :::danger
  重启 MySQL 服务会导致数据库服务中断，需要谨慎操作。
  :::

  ```bash
  systemctl restart mysql
  ```

4. **启用 `GTIDs`**

  - 查看 `GTID` 状态

  ```sql
  mysql> show variables like '%gtid_mode%';
  ```

  - 如果 `GTID` 是 `OFF` 状态，执行以下命令

  ```sql
  SET GLOBAL ENFORCE_GTID_CONSISTENCY = 'WARN';
  SET GLOBAL ENFORCE_GTID_CONSISTENCY = 'ON';
  SET GLOBAL GTID_MODE = 'OFF_PERMISSIVE';
  SET GLOBAL GTID_MODE = 'ON_PERMISSIVE';
  SET GLOBAL GTID_MODE = 'ON';
  ```

5. **配置会话超时**

  - 查看会话超时时间

  ```sql
  mysql> show variables like '%wait_timeout%';
  ```

  - 如果会话超时时间不是默认值，执行以下命令：

  ```
  mysql> set binlog_rows_query_log_events=ON;
  ```

6. **开启 query log events**

  - 查看 query log events 状态

  ```sql
  mysql> show variables like '%binlog_rows_query_log_events%';
  ```

  - 如果 query log events 是 `OFF` 状态，执行以下命令：

  ```sql
  mysql> set binlog_rows_query_log_events=ON;
  ```

7. **校验 binlog row value options**

  - 查看 binlog row value options 状态

  ```sql
  mysql> show global variables where variable_name = 'binlog_row_value_options';
  ```

  - 如果 binlog row value options 是 `PARTIAL_JSON` 状态，执行以下命令：

  ```sql
  mysql> set @@global.binlog_row_value_options="" ;
  ```

详情参考：[MySQL 配置](https://debezium.io/documentation/reference/2.5/connectors/mysql.html#setting-up-mysql)

### 部署 FZS Source Connector

1. 准备以下两个镜像：

  - `bitnami/kafka`
  - `9bridges/fzs-source-connector`

2. 创建一个 `docker-compose-source.yml` 文件，内容如下：

  ```yml
  version: '3'
  name: fzs-source
  services:
    kafka:
      image: bitnami/kafka:3.7
      ports:
        - 9092:9092
      environment:
        # KRaft settings
        - KAFKA_CFG_NODE_ID=0
        - KAFKA_CFG_PROCESS_ROLES=controller,broker
        - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka:9093
        # Listeners
        - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093
        - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://:9092
        - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT
        - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
        - KAFKA_CFG_INTER_BROKER_LISTENER_NAME=PLAINTEXT
    connector:
      image: 9bridges/fzs-source-connector:2.4
      ports:
        - 8083:8083
      links:
        - kafka
      environment:
        - BOOTSTRAP_SERVERS=kafka:9092
        - GROUP_ID=1
        - CONFIG_STORAGE_TOPIC=my_connect_configs
        - OFFSET_STORAGE_TOPIC=my_connect_offsets
        - STATUS_STORAGE_TOPIC=my_connect_statuses
  ```

3. 启动 FZS Source Connector：

  ```bash
  docker compose -f docker-compose-source.yml up -d
  ```

## MySQL 做目标端

1. **创建 `fzs` 用户**

```sql
CREATE USER 'fzs'@'localhost' IDENTIFIED BY 'fzs';
```

2. **赋予 `fzs `用户权限**

```sql
GRANT ALL PRIVILEGES ON *.* TO 'fzs'@'localhost' WITH GRANT OPTION;
```
