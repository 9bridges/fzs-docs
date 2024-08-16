---
sidebar_position: 2
---

# 快速上手

### 登录 FZS Web

![login](/img/quick/login.png)

---

### 添加 Web Server

![webserver](/img/quick/webserver.png)

点击已部署 Web Server，输入 Web Server 的地址和端口，点击提交

![webserver1](/img/quick/add-webserver.png)

--- 

### 添加数据节点

选中源备端对应的webserver配置（注意ip和端口），添加数据节点名称，选择数据库的类型，添加数据库的连接串及fzs的数据库连接用户，点击提交

![data-node](/img/quick/add-node.png)

--- 

### 添加数据链路

点击添加链路，填写链路名称，选择源备端的数据节点，选择目标端的数据节点，点击提交

![data-link](/img/quick/add-link.png)

--- 

### 创建及启动数据链路

首先选中要创建的链路，点击创建,链路创建后，创建按钮置灰

![create-link](/img/quick/create-link.png)

之后点击启动按钮，启动链路。链路启动后，链路状态从闲置变为运行

![start-link](/img/quick/start-link.png)

--- 

### 日常运维

- **重新全同步**
    - 点击停止按钮，停止链路，链路状态变为暂停
  
      ![stop-link](/img/quick/stop-link.png)
    - 点击 链路操作-重置，重置链路，清除上次同步产生文件和日志。
  
      ![reset-link](/img/quick/reset-link.png)
    - 点击启动按钮，启动链路，链路状态变为运行，链路开始同步
  
      ![start-link](/img/quick/start-link.png)
- **查看同步日志**
    - 选中对应链路，点击源备端分别查看日志
  
      ![log](/img/quick/log.png)
- **全同步完成标志**
    - 备端出现装载结束时间，说明全同步完成
  
      ![full-sync](/img/quick/full-sync.png)
- **查看增量同步的状态**
    - 选中对应链路，点击源备端查看增量同步状态
  
      ![incremental-sync](/img/quick/incremental-sync.png)
- **数据比对**
    - 在链路详情页最下方数据比对卡片，点击比对，如果显示数据一致，则代表同步正常
  
      ![data-compare](/img/quick/data-compare.png)
    - 如果显示数据不一致，可点击卡片右上角修复，对数据不一致的表进行修复
      :::warning
      修复操作需要在备端没有延迟和非业务期间进行
      :::
      ![data-compare-fix](/img/quick/fix.png)
    - 点击卡片右上角全部数据，查看所有表的数据比对情况
  
      ![all-data-compare](/img/quick/all-data-compare.png)




