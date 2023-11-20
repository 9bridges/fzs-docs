# 达梦 DM 连接器

:::info
达梦数据库 DM 可作为 FZS 的[**源端**](#源端连接器)或[**目标端**](#目标端连接器)，与其它数据库进行数据交互。
:::

## 源端连接器

### 全量快照

通常，达梦 DM 服务器上的重做日志配置为不保留数据库的完整历史记录。因此，FZS 的 达梦 DM 连接器无法从日志中检索数据库的完整历史记录。为了使连接器能够为数据库的当前状态建立基线，连接器第一次启动时，它会执行数据库的初始全量快照。

:::tip
如果完成全量快照所需的时间超过 `UNDO_RETENTION` 为数据库设置的时间（默认情况下为 15 分钟），则可能会发生 ORA-01555 异常。
:::

当快照模式设置为默认时，连接器将完成以下任务来创建快照：

1. 建立与数据库的连接。
2. 确定要捕获的表。默认情况下，连接器捕获所有表，但那些具有将其排除在 capture 之外的架构的表除外。快照完成后，连接器将继续传输指定表的数据。`table.include.list` 如果您希望连接器仅从特定表捕获数据，您可以通过设置或等属性，指示连接器仅捕获表或表元素子集的数据 `table.exclude.list`。
3. 获取 `ROW SHARE MODE` 每个捕获的表的锁，以防止在创建快照期间发生结构更改。FZS 持有这些锁的时间很短。
4. 从服务器的重做日志中读取当前系统更改号 (SCN) 位置。
5. 捕获所有数据库表或指定捕获的所有表的结构。连接器将架构信息保留在其内部数据库架构历史记录主题中。架构历史记录提供有关发生更改事件时有效的结构的信息。
6. 释放在步骤 3 中获得的锁。其他数据库客户端现在可以写入任何先前锁定的表。
7. 在步骤 4 中读取的 SCN 位置，连接器扫描指定用于捕获的表 ( `SELECT * FROM …​ AS OF SCN 123`)。在扫描期间，连接器完成以下任务：

   - 确认该表是在快照开始之前创建的。如果该表是在快照开始后创建的，则连接器会跳过该表。快照完成并且连接器转换为流式传输后，它会为快照开始后创建的任何表发出更改事件。
   - read 为从表中捕获的每一行生成一个事件。所有 read 事件都包含相同的 SCN 位置，即在步骤 4 中获得的 SCN 位置。
   - 将每个 read 事件发送到 FZS 源端 agent。
   - 释放数据表锁（如果适用）。

8. 在连接器偏移量中记录快照的成功完成。

### 增量捕获

FZS 使用达梦原生的 `DBMS_LOGMNR` 包对归档日志进行挖掘，重构出 `DDL` 和 `DML` 等操作，并通过获取的信息进行更深入的分析。

目前 `DBMS_LOGMNR` 只支持对归档日志进行分析，配置归档后，还需要将 `dm.ini` 中的 `RLOG_APPEND_LOGIC` 选项置为 1、2、3 或 4。

DM MPP 环境下不支持 `DBMS_LOGMNR` 包。DMDPC 使用 `DBMS_LOGMNR` 时，`DBMS_LOGMNR.ADD_LOGFILE` 只能添加同一个节点的多个日志同时进行分析，不支持同时分析不同节点的日志。

FZS 通过 `START_LOGMNR` 函数根据指定的模式和条件来开始某个会话上的 `LOGMNR`，一个会话上仅能 START 一个 `LOGMNR`。

```sql
PROCEDURE 	START_LOGMNR (
	STARTSCN		IN		BIGINT		DEFAULT 0,
	ENDSCN			IN		BIGINT		DEFAULT 0,
	STARTTIME		IN		DATETIME	DEFAULT '1988/1/1',
	ENDTIME			IN		DATETIME	DEFAULT '2110/12/31',
	DICTFILENAME	IN		VARCHAR		DEFAULT '',
	OPTIONS			IN		INT			DEFAULT	0
);
```

参数详解：

- `STARTSCN`: 分析时或者加载时的过滤条件，日志起始序列号，缺省为 0，表示无限制。
- `ENDSCN`: 分析时或者加载时的过滤条件，日志结束序列号，缺省为 0，表示无限制。
- `STARTTIME`: 分析时或者加载时的过滤条件，日志起始时间，缺省为 1988/1/1。
- `ENDTIME`: 分析时或者加载时的过滤条件，日志结束时间，缺省为 2110/12/31。
- `DICTFILENAME`: 离线字典的全路径名，缺省为空。目前 DM 暂不支持离线字典功能
- `OPTIONS`: 提供如下表所列的可选模式，各模式可以通过 + 或者按位或来进行组合。其它位的值如 1、4、8 等目前不支持，配置后不会报错，但是没有效果。例如，组合全部模式，则取值计算方法为 2+16+64+2048=2130，那么 Options 值取就是 2130。
  - `COMMITTED_DATA_ONLY` = `2`，仅从已提交的事务的日志中挖掘信息
  - `DICT_FROM_ONLINE_CATALOG` = `16`，使用在线字典
  - `NO_SQL_DELIMITER` = `64`，拼写的 SQL 语句最后不添加分隔符
  - `NO_ROWID_IN_STMT` = `2048`，拼写的 SQL 语句中不包含 `ROWID`

## 目标端连接器

FZS 通过 ODBC 的方式将数据写入到达梦 DM 数据库中。

ODBC 提供访问不同类型的数据库的途径。结构化查询语言 SQL 是一种用来访问数据库的语言。通过使用 ODBC，应用程序能够使用相同的源代码和各种各样的数据库交互。这使得开发者不需要以特殊的数据库管理系统 DBMS 为目标，或者了解不同支撑背景的数据库的详细细节，就能够开发和发布客户/服务器应用程序。

DM ODBC 3.0 遵照 Microsoft ODBC 3.0 规范设计与开发，实现了 ODBC 应用程序与 DM 的互连接口。用户可以直接调用 DM ODBC 3.0 接口函数访问 DM，也可以使用可视化编程工具如 C++ Builder、PowerBuilder 等利用 DM ODBC 3.0 访问 DM。

在 DM 客户端软件安装过程中，如果选择了安装 ODBC 驱动程序的相关选项，安装工具可完成将 DM ODBC 3.0 驱动程序复制到硬盘，并在 Windows 注册表中登记 DMODBC 驱动程序信息的工作。若使用的是拷贝版，在 Windows 系统上手动注册 odbc 驱动的方法为：创建注册文件（例如 installDmOdbc.reg），文件内容为：

```ini
REGEDIT4
[HKEY_LOCAL_MACHINE\Software\ODBC\ODBCINST.INI\ODBC Drivers]
"DM8 ODBC DRIVER"="Installed"
[HKEY_LOCAL_MACHINE\Software\ODBC\ODBCINST.INI\DM8 ODBC DRIVER]
"Driver"="%DM_HOME%\\bin\\dodbc.dll"  //此处修改成你的dodbc.dll所在目录
"Setup"="%DM_HOME%\\bin\\dodbc.dll"   //此处修改成你的dodbc.dll所在目录
```
