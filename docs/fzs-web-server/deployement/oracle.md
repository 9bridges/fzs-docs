# Oracle

以下是部署 MySQL 相关数据链路的一些注意事项。

## Oracle 做源端采用 openlog 抓取方式的配置

### 系统要求

OpenLogReplicator可以与数据库一起运行，也可以在单独的主机上运行。

唯一的要求是，当复制处于活动状态时，读取的重做日志文件必须始终可以访问。

当远程运行时，可以通过网络安装的文件系统（如SSHFS）读取这些文件。

### 数据库版本要求

OpenLogReplicator 没有影响，并且在使用其他复制引擎（包括使用 Streams、XStream 或 LogMiner 的工具）时不受影响。 OpenLogReplicator 的多个实例可以从同一源数据库进行复制，前提是它们与检查点和配置文件不共享同一路径。

以下限制适用于源数据库：
- 支持的版本：Oracle 11.2、12.1、12.2、18c、19c、21c、23c。
- 支持的版本：XE/DE、SE、SE2、PE、EE。
- 支持的数据库字符集：138 种不同，详见用户手册。
- 支持的平台：Linux64、Solaris x64、Solaris Sparc。
- 支持的存储：文件系统（ext4、btrfs、zfs、xfs、sshfs）。
- 支持的数据库块大小：2k、4k、8k、16k、32k。
- 必需选项：无。
- 支持单租户和多租户配置。
- 支持读取备用 Data Guard 数据库。
- 数据库必须处于单实例模式（非 RAC）。

### 数据库要求

数据库必须在ARCHIVELOG模式下工作，并且已启用MINIMAL SUPPLMENTAL LOGING。

### 数据库配置

1. 开启归档步骤（慎重此步骤涉及数据库的关闭，需和客户协商）
    ```sql
    SHUTDOWN IMMEDIATE;
    STARTUP MOUNT;
    ALTER DATABASE ARCHIVELOG;
    ALTER DATABASE OPEN;
    ```
2. 开启最小补充日志
    ```sql
    ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;
    ```
3. 开启强制日志
    ```sql
    ALTER DATABASE FORCE LOGGING;
    ```
4. FRA配置
   对于脱机读卡器类型，需要配置快速恢复区域。 
   ```sql
   ALTER SYSTEM SET DB_RECOVERY_FILE_DEST_SIZE = 50G;
   ALTER SYSTEM SET DB_RECOVERY_FILE_DEST = '/opt/oracle/fra';
    ```
5. 表配置要求

    启用MINIMAL SUPPLMENTAL LOGING的默认要求足以让OpenLogReplicator正常工作。在这种情况下，输出只包含修改过的列。
    然而，通常这是不够的，并且要求输出还包含未修改的列的值：主键、唯一键或所有列。
    
    向补充日志添加主键
    一个典型的配置要求是将主键添加到补充日志中。
    
    要将主键仅添加到一个表的补充日志记录中，应执行以下代码：
    ```sql
    ALTER TABLE <SCHEMA>.<TABLE> ADD SUPPLEMENTAL LOG DATA (PRIMARY KEY) COLUMNS;
    ```
    可以为数据库中的所有表启用主键列的补充日志记录。
    ```sql
    ALTER DATABASE ADD SUPPLEMENTAL LOG DATA (PRIMARY KEY) COLUMNS;
    ```
    
    将所有列添加到补充日志
    
    还可以在UPDATE操作的输出中包括所有列。为了实现这种行为，需要将所有列添加到补充日志记录中，并将列参数设置为值2。
    
    对于单个表，应在源数据库中执行以下脚本：
    ```sql
    ALTER TABLE <SCHEMA>.<TABLE> ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
    ```
    
    可以使用以下脚本为数据库中的所有表启用所有列的补充日志记录：
    ```sql
    ALTER DATABASE ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
    ```
    
### 用户要求

ONLINE读卡器类型要求：
- 源数据库中被授予读取某些系统表的权限的用户（下面的完整列表），
- 对重做日志文件的物理访问（在线和存档）；当从远程主机运行时，可以通过SSHFS进行访问。

OFFLINE读卡器类型要求：
- 读取重做日志文件的物理访问。

:::tip
不建议使用SYS或SYSTEM帐户或任何具有高权限的帐户来运行OpenLogReplicator以连接到数据库。数据库用户应该只拥有以下权限，绝对没有其他权限：
:::

```sql

  CREATE USER FZS1 IDENTIFIED BY FZS1;
  GRANT SELECT, FLASHBACK ON SYS.CCOL$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.CDEF$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.COL$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.DEFERRED_STG$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.ECOL$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.LOB$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.LOBCOMPPART$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.LOBFRAG$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.OBJ$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.TAB$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.TABCOMPART$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.TABPART$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.TABSUBPART$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.TS$ TO FZS1;
  GRANT SELECT, FLASHBACK ON SYS.USER$ TO FZS1;
  GRANT SELECT ON SYS.V_$ARCHIVED_LOG TO FZS1;
  GRANT SELECT ON SYS.V_$DATABASE TO FZS1;
  GRANT SELECT ON SYS.V_$DATABASE_INCARNATION TO FZS1;
  GRANT SELECT ON SYS.V_$LOG TO FZS1;
  GRANT SELECT ON SYS.V_$LOGFILE TO FZS1;
  GRANT SELECT ON SYS.V_$PARAMETER TO FZS1;
  GRANT SELECT ON SYS.V_$STANDBY_LOG TO FZS1;
  GRANT SELECT ON SYS.V_$TRANSPORTABLE_PLATFORM TO FZS1;
  
```

:::tip
授权脚本必须从SYS帐户运行。对于多租户数据库，必须在PDB中创建用户并授予其授权。
:::

### 运行时权限

在运行时，OpenLogReplicator需要能够使用OCI连接连接到源数据库。

ONLINE读卡器类型使用的数据库连接用于：

- 检查数据库配置，包括重做日志的位置，
- 正在读取表架构，验证架构是否包含补充日志组，
- 从存档的重做日志中读取时获取存档的重做记录位置。

在从联机重做日志进行复制期间，与数据库的连接处于空闲状态。没有运行任何查询。在启动期间，不会运行任何会访问用户表中任何数据的查询。

## Oracle 做源端采用 Fzs 抓取方式的配置
