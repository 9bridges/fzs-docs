创建 OceanBase 数据库用户
----------------------

1. 在 sys 租户中，为 fzs 创建一个带密码的用户，用于增量抽取。

   ```shell
   obclient> CREATE USER ${sys_username} IDENTIFIED BY '${sys_password}';
   obclient> GRANT ALL PRIVILEGES ON *.* TO ${sys_username} WITH GRANT OPTION;
   ```
2. OceanBase 增量抓取需要配置 `config-url`，可以使用以下命令获取：

    ```shell
    obclient> show parameters like 'obconfig_url';
    ```
3. 登录业务租户，为你想要监控的租户创建一个用户，这个用户用来读取快照数据。
   #### OceanBase 数据库 MySQL 租户
    ```shell
    obclient> CREATE USER __oceanbase_inner_drc_user IDENTIFIED BY '<password>';
    obclient> GRANT ALL ON *.* TO __oceanbase_inner_drc_user;
    ```
   #### OceanBase 数据库 Oracle 租户
    ```shell
    obclient> CREATE USER '__OCEANBASE_INNER_DRC_USER' IDENTIFIED BY <your_password>;
    obclient> GRANT DBA TO '__OCEANBASE_INNER_DRC_USER';
    ```


