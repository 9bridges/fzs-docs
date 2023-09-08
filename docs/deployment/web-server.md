---
sidebar_position: 1
---

# FZS Web Server 部署

FZS Web Server需要部署在装有数据库的**本地**环境（支持Linux、Windows（还在研发中）以及aix的多种操作系统部署）

## 部署条件

- 硬件配置：单条链路磁盘预留空间至少为数据库中同步数据量的1/3，内存与cpu无特定要求（机器性能与软件运行效率成正比）
- 网络端口：
  - 默认对外开放 8081 端口，用于 HTTP 访问
  - 对内开放所有端口，用于内部通信

## 部署流程

### 1.解压web-server对应安装包

- 以fzsweb.a39731c-0.1.2-Linux.tar.gz软件包为例

```bash
$ tar -xvf fzsweb.a39731c-0.1.2-Linux.tar.gz 
```

- 解压目录预览：

![Decompress——images](D:\fzs_docs\fzs-docs\static\img\screenshots\Decompress_images.png)

### 2.启动web-server

**进入fzsweb/run**

#### 2.1修改端口

vim 打开start.sh（Windows环境需要修改start.bat）脚本将 FZS_WEB_PORT=8081 替换成 FZS_WEB_PORT=1963（假设自定义对外端口为1963）

```bash
export LD_LIBRARY_PATH=`pwd`/../lib64/oci:$LD_LIBRARY_PATH
#export FZS_WEB_PORT=8081
export FZS_WEB_PORT=1963
exe=fzsweb-exe

while getopts "o" arg; do
    case $arg in
    o)
        exe=fzsweb-exe-ob
        ;;
    ?)
        echo "unkonw operation"
        exit 1
        ;;
    esac
done

../bin/${exe} > web.log &

```

ESC退出编辑模式输入:wq保存修改

#### 2.2执行启动命令

```bash
#Oracle数据库环境
$./start.sh
#ob数据库环境
$./start.sh -o
```

检查容器是否启动成功：

```bash
$ps x
```

如果web-server启动成功，会有以下进程状态打印：

```bash
#Oracle数据库环境
PID   TTY     STAT    TIME COMMAND
72372 pts/0    S      0:00 ../bin/fzsweb-exe
72373 pts/0    Sl     0:00 ../bin/fzsweb-exe
#ob数据库环境
PID   TTY     STAT    TIME COMMAND
72432 pts/0    S      0:00 ../bin/fzsweb-exe-ob
72433 pts/0    Sl     0:00 ../bin/fzsweb-exe-ob
```

### 3.停止web-server

```bash
$./stop.sh
```

检查容器是否停止成功：

```bash
$ps x
```

如果web-server停止成功，之前启动进程状态将会被清除：

```bash
 PID   TTY      STAT   TIME COMMAND
 67828 pts/0    S      0:00 -bash
 72935 pts/0    R+     0:00 ps x
```

