---
sidebar_position: 1
---

# 软件包部署

FZS Web Server 需要部署在装有数据库的**本地**环境（支持 Linux、Windows（还在研发中）以及 aix 的多种操作系统部署）

## 部署条件

- 硬件配置：单条链路磁盘预留空间至少为数据库中同步数据量的 1/3，内存与 cpu 无特定要求（机器性能与软件运行效率成正比）
- 网络端口：
  - 默认对外开放 8081 端口，用于 HTTP 访问
  - 对内开放所有端口，用于内部通信

:::info
请确认 FZS Web Server 与 FZS Web 的各自宿主机系统时间一致，否则可能会导致同步链路监控数据异常。
:::

## 部署流程

### 创建系统用户 (Linux 系统)

#### 非 oracle 同步环境

- web-server 可以部署在任意可访问到数据库的任意用户下，不需要特殊的系统用户

#### oracle 同步

- 在 oracle 所在机器上创建和 oracle 或者 grid 用户(ASM 存储环境上一般有 grid 用户)同组的用户,执行下面脚本创建 fzs (可任意修改用户名) 用户，web-server 需要部署在这个新创建的系统用户下

```bash
#!/bin/sh
echo "please input system username to create(default:fzs):"
read sysuser
if [ ! -n "$sysuser" ]; then
  sysuser=fzs
fi
SYSTEM=$(uname -s)
case $SYSTEM in
Linux | AIX)
  j=3
  ;;
SunOS | HP-UX)
  j=1
  ;;
*)
  echo unknow system
  exit 1
  ;;
esac

if id -u grid >/dev/null 2>&1; then
  grp=$(groups grid | awk '{for(i=3;i<=NF;i++) if(i!=NF) printf $i","; else printf $i;}')
else
  grp=$(groups oracle | awk '{for(i=3;i<=NF;i++) if(i!=NF) printf $i","; else printf $i;}')
fi
if [ $SYSTEM = "AIX" ]; then
  UserExists=17
else
  UserExists=9
fi
if [ $SYSTEM = "SunOS" ]; then
  ONLY_SUN="-s /bin/bash"
fi

useradd $ONLY_SUN -G $grp -m $sysuser
if [ $? = $UserExists ]; then
  echo "user $sysuser already exists,continue?(y/n) (default:n)"
  read cont
  case $cont in
  "y")
    cont=y
    ;;

  "n")
    cont=n
    ;;

  "")
    cont=n
    ;;

  *)
    echo "error parameter"
    exit 1
    ;;

  esac
  if [ "$cont" = "n" ]; then
    exit 1
  else
    usermod -G $grp $sysuser
  fi
else
  passwd $sysuser
fi

echo "where is your oracle environment file(default:/home/oracle/.bash_profile):"
read oracle_environment
if [ ! -n "$oracle_environment" ]; then
  oracle_environment=/home/oracle/.bash_profile
fi
env_file=$(echo "$oracle_environment" | awk '{split($0,a,".");print a[2]}')
cp $oracle_environment /home/$sysuser/
if [ $? != 0 ]; then
  echo "parameter $oracle_environment is error,may no such file"
  exit 1
fi

chown -R $sysuser /home/$sysuser/.$env_file
echo "ulimit -c unlimited" >>/home/$sysuser/.$env_file
su - $sysuser
```

- 创建 oracle 数据库用户并授权

```sql
### 源端
/* 由于权限问题，普通用户无法直接查询下面几个表，因此需要创建视图来代替 */ 
/* 数据库增量相关，fzs 通过下面两个视图判断当前的增量位点信息 */
create or replace view XKCCLE as select * from sys.x$kccle;
create or replace view XKCCCP as select * from sys.x$kcccp;
/* redo 格式相关，不同的 redo 格式，需要不同的解析方法 */
create or replace view FZS_XKSPPI as select * from X$KSPPI;
create or replace view FZS_XKSPPSV as select * from X$KSPPSV;

/* 补全日志信息 */
alter database force logging;
alter database add supplemental log data;
alter database add supplemental log data (primary key, unique index) columns;
create user fzs1 identified by fzs1;
create role fzs_role identified by fzs_role;
grant connect,lock any table,select any table,select any dictionary,alter system,execute any type to fzs_role,fzs1;
grant fzs_role to fzs1;
grant execute on dbms_flashback to fzs_role,fzs1;
/* fzs 查询数据需要使用一些表空间，这里给 fzs1 用户分配 2M 的表空间 */
alter user  fzs1 quota 2m on users;
/* rac 多节点环境下，fzs 会定期向 fzstemp 表写入数据，非 rac 环境可以不创建 */
create table fzs1.fzstemp (f1 int);

## 12c 以上版本源端还需要执行以下授权
/* 创建 fzs_pdbs 表用于查询 PDB 信息 */
create table sys.fzs_pdbs as select * from sys.v$pdbs;
/* 由于 12c 以上的数据库权限管理方式改变，select any table 权限不足以查询一些系统表，因此需要单独赋权 */
grant create session to fzs1;
grant select on sys.ts$ to fzs1;
grant select on sys.tabsubpart$ to fzs1;
grant select on sys.obj$ to fzs1;
grant select on sys.seg$ to fzs1;
grant select on sys.coltype$ to fzs1;
grant select on sys.xkccle to fzs1;
grant select on sys.xkcccp to fzs1;
grant select on sys.seq$ to fzs1;
grant select on sys.user$ to fzs1;
grant select on sys.col$ to fzs1;
grant select on sys.ind$  to fzs1;
grant select on sys.tab$ to fzs1;
grant select on sys.lob$ to fzs1;
grant select on sys.indpart$ to fzs1;
grant select on sys.lobfrag$ to fzs1;
grant select on sys.user$ to fzs1;
grant select on sys.source$ to fzs1;
grant select on sys.view$  to fzs1;
grant select on sys.ts$  to fzs1;
grant select on sys.profname$ to fzs1;
grant select on sys.profile$  to fzs1;
grant select on sys.sysauth$ to fzs1;
grant select on sys.props$ to fzs1;
grant select on sys.idl_ub1$ to fzs1;
grant select on sys.user$ to fzs1;
grant select on sys.ntab$  to fzs1;
grant select on sys.sum$ to fzs1;
grant select on sys.com$ to fzs1;
grant select on sys.partlob$ to fzs1;
grant select on sys.attrcol$ to fzs1;
grant select on sys.ccol$ to fzs1;
grant select on sys.subpartcol$ to fzs1;
grant select on sys.tabpart$ to fzs1;
grant select on sys.indpart$ to fzs1;
grant select on sys.indcompart$ to fzs1;
grant select on sys.defrole$ to fzs1;
grant select on sys.v_$instance to fzs1;
grant select on SYS.v_$database to fzs1;
grant select on sys.v_$datafile to fzs1;
grant select on sys.V_$SESSION  to fzs1;
grant select on sys.v_$log  to fzs1;
grant select on sys.v_$logfile  to fzs1;
grant select on sys.gv_$logfile  to fzs1;


## 目标端
/* 备端需要写入数据，因此需要的权限比较大 */
create user fzs2 identified by fzs2;
grant dba to fzs2;
/* 用于对 sequence 的同步 */
grant all on sys.seq$ to fzs2;
create or replace directory fzs_lobdir as '/tmp';
grant read,write on directory fzs_lobdir to fzs2;

### 12c 以上版本目标端还需要执行以下授权
/* 由于 12c 以上的数据库权限管理方式改变，select any table 权限不足以查询一些系统表，因此需要单独赋权 */
grant create session to fzs2;
grant all on sys.user$ to fzs2;
grant select on sys.ts$ to fzs2;
grant select on sys.tabsubpart$ to fzs2;
grant select on sys.obj$ to fzs2;
grant select on sys.seg$ to fzs2;
grant select on sys.coltype$ to fzs2;
grant select on sys.xkccle to fzs2;
grant select on sys.xkcccp to fzs2;
grant select on sys.seq$ to fzs2;
grant select on sys.col$ to fzs2;
grant select on sys.ind$  to fzs2;
grant select on sys.tab$ to fzs2;
grant select on sys.lob$ to fzs2;
grant select on sys.indpart$ to fzs2;
grant select on sys.lobfrag$ to fzs2;
grant select on sys.source$ to fzs2;
grant select on sys.view$  to fzs2;
grant select on sys.ts$  to fzs2;
grant select on sys.profname$ to fzs2;
grant select on sys.profile$  to fzs2;
grant select on sys.sysauth$ to fzs2;
grant select on sys.props$ to fzs2;
grant select on sys.idl_ub1$ to fzs2;
grant select on sys.user$ to fzs2;
grant select on sys.ntab$  to fzs2;
grant select on sys.sum$ to fzs2;
grant select on sys.com$ to fzs2;
grant select on sys.partlob$ to fzs2;
grant select on sys.attrcol$ to fzs2;
grant select on sys.ccol$ to fzs2;
grant select on sys.subpartcol$ to fzs2;
grant select on sys.tabpart$ to fzs2;
grant select on sys.indpart$ to fzs2;
grant select on sys.indcompart$ to fzs2;
grant select on sys.defrole$ to fzs2;
grant select on sys.v_$instance to fzs2;
grant select on SYS.v_$database to fzs2;
grant select on sys.v_$datafile to fzs2;
grant select on sys.V_$SESSION  to fzs2;
grant select on sys.v_$log  to fzs2;
grant select on sys.v_$logfile  to fzs2;
grant select on sys.gv_$logfile  to fzs2;
```

### 解压 web-server 对应安装包

- 以 fzsweb.a39731c-0.1.2-Linux.tar.gz 软件包为例

```bash
$ tar -xvf fzsweb.a39731c-0.1.2-Linux.tar.gz
```

- 解压目录预览：

![Decompress——images](/img/screenshots/Decompress_images.png)

### 启动 web-server

**进入 fzsweb/run**

#### 修改端口

vim 打开 start.sh（Windows 环境需要修改 start.bat）脚本将 FZS_WEB_PORT=8081 替换成 FZS_WEB_PORT=1963（假设自定义对外端口为 1963）

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

ESC 退出编辑模式输入:wq 保存修改

#### 执行启动命令

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

如果 web-server 启动成功，会有以下进程状态打印：

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

### 停止 web-server

```bash
$./stop.sh
```

检查容器是否停止成功：

```bash
$ps x
```

如果 web-server 停止成功，之前启动进程状态将会被清除：

```bash
 PID   TTY      STAT   TIME COMMAND
 67828 pts/0    S      0:00 -bash
 72935 pts/0    R+     0:00 ps x
```
