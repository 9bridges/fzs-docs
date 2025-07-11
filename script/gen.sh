#!/bin/bash

# 设置镜像版本
WEB_VERSION=0.6.0
DAEMON_VERSION=0.3.0
QUERY_VERSION=0.5.25
WEB_SERVER_VERSION=0.5.0
CONNECT_VERSION=3.7.0

# 设置 web 登录端口
WEB_PORT=80

# 设置 web-server 端口相关参数
ENABLE_WEB_PORT_MAPPING=true
WEB_SERVER_HOST=

# 根据需要，一般不需要修改
WEB_SERVER_PORT=8081
WEB_DATA_PORT_START=8203
WEB_DATA_PORT_END=8303

# postgres 系列数据库使用的驱动，支持 lightdb/gaussdb/opengauss 选项，请按照实际数据库类型来进行配置
PG_SERIES_DRIVER=gaussdb

# 设置 kafka 可视化界面的端口
KAFKA_UI_PORT=8080

TAR_NAME=fzs.${WEB_VERSION}

# 镜像仓库地址
REPOSITORY=192.168.0.198:880


# 脚本内部参数，不需要修改
PLATFORM=
TAR=
FOR_ORACLE=

tar_image() {
    images=(
        "${REPOSITORY}/9bridges/fzs-web:${WEB_VERSION}"
        "${REPOSITORY}/9bridges/fzs-daemon:${DAEMON_VERSION}"
        "${REPOSITORY}/9bridges/synjq-query:${QUERY_VERSION}"
        "${REPOSITORY}/9bridges/fzs-web-server:${WEB_SERVER_VERSION}"
    )
    if [ -z "$FOR_ORACLE" ]; then
        images+=(
            "${REPOSITORY}/9bridges/bitnami/kafka:3.6"
            "${REPOSITORY}/9bridges/fzs-source-connector:${CONNECT_VERSION}"
            "${REPOSITORY}/9bridges/provectuslabs/kafka-ui:v0.7.2"
        )
    else
        wget http://192.168.0.198:1721/repository/maven-releases/fzs/Linux/webserver/${WEB_SERVER_VERSION}/webserver-${WEB_SERVER_VERSION}.gz
    fi
    echo "开始拉取镜像..."
    for image in "${images[@]}"; do
        echo "拉取镜像: $image"
        if docker pull ${PLATFORM} "$image"; then
            echo "成功拉取镜像: $image"
        else
            echo "拉取镜像失败: $image" >&2
            exit 1
        fi
    done

    echo "所有镜像拉取完毕，开始保存和压缩..."

    # 保存所有镜像并压缩
    if docker save "${images[@]}" -o "fzs.image.tar"; then
        if tar -czf "$1.tar.gz" "fzs.image.tar" "gen.sh"; then
            echo "镜像文件压缩成功: $1.tar.gz"
			rm -rf fzs.image.tar
        else
            echo "镜像文件压缩失败" >&2
        fi
    else
        echo "镜像保存或压缩失败" >&2
    fi
}


usage() {
    cat <<EOF
Usage: $0 [options]

Options:
  -p PORT                Set the web server port.
  -h HOST                Set the web server host. Enables web port mapping.
  -s PORT                Set the web server port for the service.
  -r START               Set the starting port for web data.
  -e END                 Set the ending port for web data.
  -d DRIVER              Set the PostgreSQL series driver. (opengauss/gaussdb/lightdb)
  -k PORT                Set the Kafka UI port.
  -t                     Tar the images.
  -a                     Set tar platform to arm64.
  -o                     Oracle tar no need kafka/kafka-ui/connect.
EOF
}

while getopts ":p:m:h:s:r:b:e:d:k:tao" opt; do
    case ${opt} in
        p)
            WEB_PORT=${OPTARG}
            ;;
        h)
            WEB_SERVER_HOST=${OPTARG}
            ;;
        s)
            WEB_SERVER_PORT=${OPTARG}
            ;;
        r)
            WEB_DATA_PORT_START=${OPTARG}
            ;;
        e)
            WEB_DATA_PORT_END=${OPTARG}
            ;;
        d)
            PG_SERIES_DRIVER=${OPTARG}
            ;;
        k)
            KAFKA_UI_PORT=${OPTARG}
            ;;
        t)
            TAR=true
            ;;
        a)
            PLATFORM="--platform linux/arm64"
            ;;
        o)
            FOR_ORACLE=true
            ;;
        \?)
            echo "Invalid option: -${OPTARG}" >&2
            usage
            exit 1
            ;;
        :)
            echo "Option -${OPTARG} requires an argument." >&2
            usage
            exit 1
            ;;
    esac
done

if [ -n "$TAR" ]; then
    tar_image "$TAR_NAME"
    exit 0
fi

if [ -z "$WEB_SERVER_HOST" ]; then
    echo ""
    echo "ERROR: 请设置物理机 ip 地址，例如 $0 -h xx.xx.xx.xx"
    echo ""
    exit 1
fi

# 创建 docker-compose.yml 文件
cat <<EOF > docker-compose.yml
version: '3.8'
name: fzs
services:
  web:
    image: ${REPOSITORY}/9bridges/fzs-web:${WEB_VERSION}
    ports:
      - "${WEB_PORT}:8080"
    volumes:
      - ./web-data:/data
      - ./web-agent:/fzs-web/public/fzs-agent
      - ./web-license:/fzs-web/public/license
      - ./web-server:/fzs-web/public/fzs-web-server
    restart: unless-stopped
    depends_on:
      - web-server
    environment:
      - QUERY_URL=http://query:8888
      - SESSION_SECRET=fzs-is-the-best
      - DEFAULT_WEB_SERVER_IP=${WEB_SERVER_HOST}
      - DEFAULT_WEB_SERVER_PORT=${WEB_SERVER_PORT}
      - DEFAULT_WEB_DATA_PORT_START=${WEB_DATA_PORT_START}
      - DEFAULT_WEB_DATA_PORT_END=${WEB_DATA_PORT_END}
    networks:
      - fzs

  daemon:
    image: ${REPOSITORY}/9bridges/fzs-daemon:${DAEMON_VERSION}
    restart: unless-stopped
    depends_on:
      - web
    environment:
      - WEB_URL=http://web:8080
    networks:
      - fzs

  query:
    image: ${REPOSITORY}/9bridges/synjq-query:${QUERY_VERSION}
    depends_on:
      - web
    restart: unless-stopped
    environment:
      - WEB_URL=http://web:8080
    networks:
      - fzs

  web-server:
    image: ${REPOSITORY}/9bridges/fzs-web-server:${WEB_SERVER_VERSION}
    privileged: true
    environment:
      - FZS_WEB_PORT=${WEB_SERVER_PORT}
      - PG_SERIES_DRIVER=${PG_SERIES_DRIVER}
EOF

if [ "$ENABLE_WEB_PORT_MAPPING" = "true" ]; then
  cat <<EOF >> docker-compose.yml
    ports:
      - "${WEB_SERVER_PORT}:${WEB_SERVER_PORT}"
      - "${WEB_DATA_PORT_START}-${WEB_DATA_PORT_END}:${WEB_DATA_PORT_START}-${WEB_DATA_PORT_END}"
EOF
fi

cat <<EOF >> docker-compose.yml
    volumes:
      - ./fzs:/opt/fzsweb/run/fzs
    networks:
      - fzs
EOF
if [ -z "$FOR_ORACLE" ]; then
    cat <<EOF >> docker-compose.yml
  kafka:
    image: ${REPOSITORY}/9bridges/bitnami/kafka:3.6
    environment:
     - KAFKA_CFG_NODE_ID=0
     - KAFKA_CFG_PROCESS_ROLES=controller,broker
     - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka:9093
     - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093
     - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092
     - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT,PLAINTEXT:PLAINTEXT
     - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
     - KAFKA_CFG_INTER_BROKER_LISTENER_NAME=PLAINTEXT
     - KAFKA_CFG_MESSAGE_MAX_BYTES=134217728
     - KAFKA_CFG_REPLICA_FETCH_MAX_BYTES=134217728
     - KAFKA_CFG_SOCKET_SEND_BUFFER_BYTES=262144
     - KAFKA_CFG_SOCKET_RECEIVE_BUFFER_BYTES=262144
     - KAFKA_CFG_SOCKET_REQUEST_MAX_BYTES=134217728
    networks:
      - fzs

  connect:
    image: ${REPOSITORY}/9bridges/fzs-source-connector:${CONNECT_VERSION}
    depends_on:
     - kafka
    environment:
     - BOOTSTRAP_SERVERS=kafka:9092
     - GROUP_ID=1
     - CONFIG_STORAGE_TOPIC=fzs_connect_configs
     - OFFSET_STORAGE_TOPIC=fzs_connect_offsets
     - STATUS_STORAGE_TOPIC=fzs_connect_statuses
     - CONNECT_PRODUCER_MAX_REQUEST_SIZE=104857600
     - PG_SERIES_DRIVER=${PG_SERIES_DRIVER}
     - CONNECT_KEY_CONVERTER_SCHEMAS_ENABLE=false
     - CONNECT_VALUE_CONVERTER_SCHEMAS_ENABLE=false
    networks:
      - fzs

  kafka-ui:
    image: ${REPOSITORY}/9bridges/provectuslabs/kafka-ui:v0.7.2
    ports:
      - "${KAFKA_UI_PORT}:8080"
    depends_on:
      - kafka
      - connect
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:9092
      KAFKA_CLUSTERS_0_KAFKACONNECT_0_NAME: first
      KAFKA_CLUSTERS_0_KAFKACONNECT_0_ADDRESS: http://connect:8083
      DYNAMIC_CONFIG_ENABLED: true
    networks:
      - fzs
EOF
fi

cat <<EOF >> docker-compose.yml
networks:
  fzs:
    driver: bridge
EOF

echo "###################################################"
if [ "$ENABLE_WEB_PORT_MAPPING" = "true" ]; then
    echo ""
    echo "!!! 注意："
    echo "!!! 配置链路时主备之间的数据传输端口参数必须设置在 $WEB_DATA_PORT_START 参数和 $WEB_DATA_PORT_END 之间"
    echo ""
fi
echo "docker-compose.yml 已生成，请执行以下命令启动容器:"
echo "docker compose up -d"
echo "###################################################"
