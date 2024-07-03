# 配置 lightdb 数据库

## 修改数据库参数，使其支持逻辑复制

1. 修改 `lightdb.conf` 文件，设置以下参数：

```sql
wal_level = logical
archive_mode = on
max_wal_senders = 10
max_replication_slots = 10
```
2. 重启数据库

## 创建数据库登录用户

1. 创建数据库用户

```sql
CREATE USER fzs1 WITH PASSWORD 'fzs1';
```
2. 赋予超级用户权限，因为需要对所有表进行读取和创建 publication 操作

```sql
ALTER USER fzs1 WITH SUPERUSER;
```
## 数据对象操作
### 为所有同步表开启逻辑复制
1. 修改下面的 schema 为需要同步的 schema，执行查询结果中的 sql 语句
```sql
SELECT
  'alter table ' || schemaname || '.' || tablename || ' replica identity full;'
FROM
  pg_tables
WHERE
  schemaname IN ('fzs', 'test')
  AND tablename NOT IN (
      SELECT
        relname
      FROM
        pg_class c
        JOIN pg_inherits i ON
      c.oid = i.inhrelid
    )
```
### 创建用于同步 ddl 操作的相关表和触发器

```sql
CREATE SCHEMA IF NOT EXISTS fzs;
CREATE TABLE fzs.ddl_command
(
    ddl_text TEXT COLLATE pg_catalog."default",
   id BIGSERIAL PRIMARY KEY,
   EVENT TEXT COLLATE pg_catalog."default",
   tag TEXT COLLATE pg_catalog."default",
   username CHARACTER VARYING COLLATE pg_catalog."default",
   DATABASE CHARACTER VARYING COLLATE pg_catalog."default",
   SCHEMA CHARACTER VARYING COLLATE pg_catalog."default",
   object_type CHARACTER VARYING COLLATE pg_catalog."default",
   object_name CHARACTER VARYING COLLATE pg_catalog."default",
   client_address CHARACTER VARYING COLLATE pg_catalog."default",
   client_port integer,
   event_time timestamp WITH time ZONE,
   txid_current CHARACTER VARYING(128) COLLATE pg_catalog."default",
   message TEXT COLLATE pg_catalog."default"
);

alter table fzs.ddl_command replica identity full;

CREATE FUNCTION fzs.capture_ddl()
    RETURNS event_trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF SECURITY DEFINER
AS $BODY$
  declare ddl_text text;
  declare max_rows int := 10000;
  declare current_rows int;
  declare pg_version_95 int := 90500;
  declare pg_version_10 int := 100000;
  declare current_version int;
  declare object_id varchar;
  declare alter_table varchar;
  declare record_object record;
  declare message text;
  declare pub RECORD;
  DECLARE r RECORD;
begin
  select current_query() into ddl_text;
  if TG_TAG = 'CREATE TABLE' then -- ALTER TABLE schema.TABLE REPLICA IDENTITY FULL;
    show server_version_num into current_version;
    if current_version >= pg_version_95 then
      for record_object in (select * from pg_event_trigger_ddl_commands()) loop
        if record_object.command_tag = 'CREATE TABLE' then
          object_id := record_object.object_identity;
        end if;
      end loop;
    else
      select btrim(substring(ddl_text from '[ \t\r\n\v\f]*[c|C][r|R][e|E][a|A][t|T][e|E][ \t\r\n\v\f]*.*[ \t\r\n\v\f]*[t|T][a|A][b|B][l|L][e|E][ \t\r\n\v\f]+(.*)\(.*'),' \t\r\n\v\f') into object_id;
    end if;
    if object_id = '' or object_id is null then
      message := 'CREATE TABLE, but ddl_text=' || ddl_text || ', current_query=' || current_query();
    else
      alter_table := 'ALTER TABLE ' || object_id || ' REPLICA IDENTITY FULL';
      message := 'alter_sql=' || alter_table;
      execute alter_table;
    end if;
    if current_version >= pg_version_10 then
      for pub in (select * from pg_publication where pubname like 'fzs_%') loop
        raise notice 'pubname=%',pub.pubname;
        BEGIN
          execute 'alter publication ' || pub.pubname || ' add table ' || object_id;
        EXCEPTION WHEN OTHERS THEN
        END;
      end loop;
    end if;
  end if;
  SELECT * into r FROM pg_event_trigger_ddl_commands();
  insert into fzs.ddl_command(id,event,tag,username,database,schema,object_type,object_name,client_address,client_port,event_time,ddl_text,txid_current,message)
  values (default,TG_EVENT,TG_TAG,current_user,current_database(),COALESCE(r.schema_name, CURRENT_SCHEMA),r.object_type,
      CASE
        WHEN POSITION('.' IN r.object_identity) > 0 THEN
            SPLIT_PART(r.object_identity, '.', 2)
        ELSE
            r.object_identity
      END, inet_client_addr(),inet_client_port(),current_timestamp,ddl_text,cast(TXID_CURRENT() as varchar(16)),message);

  select count(id) into current_rows from fzs.ddl_command;
  if current_rows > max_rows then
    delete from fzs.ddl_command where id in (select min(id) from fzs.ddl_command);
  end if;
end
$BODY$;

ALTER FUNCTION fzs.capture_ddl() OWNER TO lightdb;

CREATE EVENT TRIGGER intercept_ddl ON ddl_command_end EXECUTE PROCEDURE fzs.capture_ddl();
```