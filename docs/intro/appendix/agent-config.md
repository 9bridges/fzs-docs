---
sidebar_position: 1
---

# FZS Agent 全部参数

以下是 FZS Agent 支持的全部参数：

```json
{
  "export.param_full_sync_user": "全同步时是否自动创建用户",
  "export.param_full_sync_tbspace": "全同步时是否自动创建表空间",
  "export.param_tgt_not_drop": "全同步时是否同步表结构",
  "export.param_ddl_only_truncate": "ddl 只同步 truncate 操作",
  "export.param_archive_log": "启动时切换一次redo日志",
  "export.param_proc_max_mem": "export 进程最大使用内存，单位为兆",
  "export.param_cpu_max": "export 最大使用cpu",
  "export.param_disk_quota": "允许 fzs 使用的磁盘空间，占用空间超过该值时停止抽取，空间释放后会自动继续",
  "export.param_is_ddl": "是否同步 ddl 操作",
  "export.param_tbl_drt_rnm": "是否将 drop 操作转换为 rename",
  "export.param_sync_table": "是否全同步表",
  "export.param_sync_priv": "是否全同步权限",
  "export.param_sync_temp_table": "是否全同步临时表",
  "export.param_sync_proc": "是否全同步存储过程",
  "export.param_sync_syn": "是否全同步同义词",
  "export.param_sync_profile": "是否全同步profile",
  "export.param_sync_seq": "是否全同步序列",
  "export.param_sync_view": "是否全同步视图",
  "export.param_sync_java": "是否全同步 java",
  "export.param_sync_role": "是否全同步角色",
  "export.param_trace_seq": "是否同步序列的增量",
  "export.param_sync_index": "全同步时创建索引的并发数，配置为 0 时表示不同步索引",
  "export.param_sync_tbspace": "增量是否同步创建表空间操作",
  "export.param_new_user": "增量是否同步创建用户操作",
  "export.param_exadata": "redo 大端格式存储，asm 的 db 模式下有效，一般不做修改",
  "export.param_off": "redo 读取偏移量，asm 的 raw 模式下有效，一般不做修改",
  "export.param_left_space": "磁盘剩余空间小于该值时停止抽取，单位为兆，空间释放后会自动继续",
  "export.param_lock_wait": "全同步时锁表的最大等待时间，单位为秒，超过该值时将跳过失败的表的全量同步",
  "export.param_table_file": "查询元数据相关，一般不做修改",
  "export.param_table_block": "查询元数据相关，一般不做修改",
  "export.param_must_full_sync": "是否先进行全量同步，配置为 0 时不同步全量，直接从当前点抽取增量",
  "export.param_charset_u2g": "字符集转换，将 utf8 字符转换为 gbk",
  "export.param_arch_path": "软件异常退出时，自动保存当前分析red到设置的路径",
  "export.param_arch_del": "自动删除已经分析过的归档日志",
  "export.param_redo_proc_paral": "分析 redo 的并发数",
  "export.param_ob_target": "备端是否为 oceanbase",
  "export.param_time_bgn": "指定时间点抽取增量数据，格式：2020-01-01 12:12:12",
  "export.map_large_table": "需要并发全同步的表，格式：user1.table1,user1.table2,user2.table1",
  "export.kafka_send_mode": "科蓝 cyrmte 发送模式，1 为单语句模式一次只发送一条语句，2 为多语句模式一次发送多条语句，发送语句数量由 kafka_send_bufmax 决定。",
  "export.kafka_send_bufmax": "科蓝 cyrmte 设置发送到 kafka 的消息大小限制，本设置主要针对与 kafka_send_mode = 2 的多语句模式，当积累的语句大小超过 kafka_send_bufmax 时，则之前数据打成一个包，发送到 kafka。",
  "export.long_variable_size": "科蓝 cyrmte 设置最大的 long varchar/binary 的最大大小，含义为当小于这个值时，大对象内容也是以 kafka 消息模式发送，如果超过了该值，则 kafka 发送内容里面里面保存的是大对象文件的路径，将大对象文件存储到 long_variable_path 配置的路径中。",
  "export.long_variable_path": "科蓝 cyrmte 大对象文件的保存路径。",
  "load.param_if_pri_key": "是否开启主键模式",
  "load.param_if_irp2urp": "插入主键冲突时转换为更新操作",
  "load.param_proc_max_mem": "load 进程最大使用内存，单位为兆",
  "load.param_back_file_time": "备端交易文件保留时间，单位为秒",
  "load.param_lob_as_long": "lob 数据按照 long 数据接口装载，效率更高",
  "load.param_off": "数据文件读取偏移量，asm 的 raw 模式下有效，一般不做修改",
  "load.param_exadata": "数据文件大端格式存储，asm 的 db 模式下有效，一般不做修改",
  "load.param_if_dpl": "是否开启直接路径装载，效率更高，只适用于 oracle-oracle 的同步",
  "load.param_compile_obj": "全同步完成时自动编译所有失效的对象",
  "load.param_load_index_parallel_cnt": "全同步时并发创建索引的最大进程数",
  "load.param_warn_delays": "延迟超过该值时打印警告日志",
  "load.param_load_delays": "延迟装载数据，备端接收到数据后等待该值设定的时间后再装载到数据库",
  "load.param_key_path": "多对一时，每个备端之间存放共享数据的路径，每个备端都要有权限读写",
  "load.param_piece_cnt": "多对一时，源端的数量",
  "load.param_trc_interval": "多对一时，设定时间内的 truncate 和 drop 操作只执行一遍",
  "alloc.param_proc_max_mem": "alloc 进程最大使用内存，单位为兆",
  "recv.param_proc_max_mem": "recv 进程最大使用内存，单位为兆",
  "recv.param_left_space": "磁盘剩余空间小于该值时停止接收源端发送的交易文件，单位为兆，空间释放后会自动继续",
  "recv.queue_map": "增量同步并发, 不同队列之间用分号隔开，同一个队列内的对象用逗号隔开，格式：u1.t1,u2.t2;u1.t3,u4;u3,u4",
  "monitor.param_gap_checklog": "当软件日志长时间不更新时打印警告日志，正常情况下软件日志会一直在更新写入"
}
```
