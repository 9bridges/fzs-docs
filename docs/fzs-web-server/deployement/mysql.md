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