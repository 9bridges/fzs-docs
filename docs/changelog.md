---
sidebar_position: 4
---

# 更新日志

此页记录了 FZS 自 `v0.3.0` 以来的的版本更新日志。

## 0.4.0（2024-03-15）

### 新增功能

- **新增灾备切换**：在配置链路时可指定灾备链路，当主链路出现故障时，将自动切换到配置的灾备链路，保证数据的连续性。
- **新增数据任务**：新增了数据任务功能，在配置相应数据任务后，可实现链路的一对多同步或者多个链路的一对一，方便集中管理数据链路。
- **新增 SQL 自定义查询**：在数据校验位置新增了自定义查询功能，对于 SQL 数据源，可根据需求自定义 SQL 查询相应数据。
- **新增 SSO 登录**：新增了 SSO 登录功能，在用户管理页有提供相对应接口，可通过调用相应接口实现 SSO 登录 FZS。
- **新增全部系统日志**：新增了全部系统日志功能，在系统首页可查看系统的全部日志。

### 功能优化

- 优化了首页展示卡片间距。
- 优化了链路的重置按钮可使用时机。
- 优化了部分其他 UI 细节，使得界面更加美观

### 功能修复

- 修复数据比对在多次比对时，数据一直不变的问题。
- 修复普通用户可删除 ROOT 用户的问题。
- 修复了部分已知问题。

## 0.3.5（2024-02-04）

:::info
此版本需要 FZS Daemon 0.1.1 及以上版本配合使用。
:::

### 新增功能

- **链路和节点列表可折叠**：在链路和节点列表新增了折叠功能，可根据需求展开或折叠列表，更加便捷地管理链路和节点。
- **查看链路配置**：在链路链路在 running 状态可以查看当前链路配置，方便用户查看当前链路的配置信息。

### 功能优化

- 优化设置页面的布局，使得设置页面更加美观。
- 优化了部分其他 UI 细节，使得界面更加美观

### 功能修复

- 修复数据比对在报错情况下，数据遗留的问题。
- 修复了部分已知问题。

## 0.3.4（2024-01-19）

### 新增功能

- **新增数据比对筛选功能**：在数据比对页面新增了筛选功能，可根据数据比对的结果进行筛选，更加直观地展示数据比对的结果。
- **新增销毁、重置的二次确认**：在销毁、重置链路时，新增了二次确认，避免误操作。
- **新增数据库图标**：在相关数据库展示的地方增加了数据库的图标，更加直观地展示数据库的类型。
- **新增增量累计柱状图**：在链路详情页的增量累计图表中新增了柱状图显示，可以根据时间段切分增量数据，更加直观地展示增量数据。
- **新增 Web Server 一键部署**：在「系统设置」中新增了 Web Server 一键部署，可一键部署 Web Server，避免了手动部署 Web Server
  的繁琐操作。

### 功能优化

- **优化数据比对数据展示**：优化了数据比对的展示，更加直观地展示数据比对的结果。
- **优化数据链路更换节点**：数据链路创建后禁止更换节点的操作，避免agent含义不明确及减少资源消耗。
- 优化了部分 UI 细节，使得界面更加美观

### 功能修复

- 修复数据比对数据不一致时，数据不标红的问题。
- 修复比对数据会自动消失的问题。
- 修复链路在创建后
- 修复了部分已知问题。

## 0.3.3（2023-12-29）

:::info
此版本需要 FZS Web Server 0.3.3 及以上版本配合使用。
:::

### 新增功能

- **首页新增 CPU 和内存使用率展示**：在首页新增了 CPU 和内存使用率的展示，可直观地查看系统的运行状态。
- **链路详情页新增全量日志和增量日志**：更加颗粒度的展示链路相关日志，更好的帮助用户定位问题。

### 功能优化

- **数据比对 UI 及 UX 的重构**：更好的展示数据比对的结果，更加清晰的展示数据比对的结果。
- **链路详情页合并增量相关数据**：优化了增量累计图表的显示，将增量相关的数据合并到同一个图表内,更加直观地展示增量数据。
- **首页增量和延时图表的重构**：优化了首页对各链路增量和延时的展示，
- **链路详情页增量和延时图表的重构**：优化了链路详情页对各链路增量和延时的展示，
- 优化了部分 UI 细节，使得界面更加美观

### 功能修复

- 修复了部分已知问题。

## 0.3.2（2023-12-15）

### 新增功能

- **数据链路新增源备端区分**：在创建数据链路时，一些节点只能作为，一些节点只能作为备端，此功能使得 FZS 在创建数据链路时，更加清晰的区分源备端。

### 功能优化

- **配置抽取，装载对象时自动去重**：优化了对于配置的抽取，装载对象时自动去重，避免了重复配置的出现。
- **链路操作错误提示**：优化了链路操作时的错误提示，更加清晰的提示用户操作失败的原因。
- 优化了部分 UI 细节，使得界面更加美观。

### 功能修复

- 修复了链路报错时，无法在链路列表体现出来的问题。
- 修复了日志自动滚动影响页面的 bug。
- 修复了部分已知问题。

## 0.3.1（2023-12-04）

### 新增功能

- **列表新增悬浮菜单**：在「数据链路」和「数据节点」列表项悬浮会出现菜单按钮，点击按钮弹出菜单，更加便捷的管理链路和节点。
- **链路详情页新增操作日志**：在链路详情页增加对于此链路进行过的操作，更加清晰的管理链路。

### 功能优化

- **Web Server 有效期自动校验**：优化了对于 web server 有效期的校验方式，后台会在每天自动更新有效期，如果过期将会在首页的系统日志内提示。
- **Agent 信息展示**：优化了在链路详情页展示 Agent 信息的方式，更加清晰的展示 Agent 信息。
- **链路错误状态的分离**：优化了链路错误状态的展示方式，将错误状态分离出来，更加清晰的展示链路状态。
- **节点配置优化**：节点配置时， Web Server 配置列表只会显示可用的。

### 功能修复

- 修复了部分已知问题

## 0.3.0（2023-11-24）

### 新增功能

- **数据节点可共享 Web Server 配置**：数据节点与 Web Server 不再是一对一的关系，一个 Web Server 可以绑定多个数据节点。此功能使得
  FZS 在处理多条同步链路时，减少了 Web Server 的部署数量，不仅降低了系统资源的消耗，也减少了系统管理的复杂度。
- **数据链路添加更换 FZS 软件包的入口**：当 FZS 软件包需要升级时，可事先「停止」同步链路，通过数据链路的配置界面上传并更新的软件包后，点击「启动」链路来恢复同步。

### 功能优化

- **数据链路详情页新增 Flow Chart 状态显示**：在数据链路详情页新增了 Flow Chart 状态显示，可直观地查看数据链路的运行状态。
- **数据节点详情页 UI 布局优化**：数据节点详情页的 UI 布局进行了优化，使得界面更加美观，组件之间的布局更加平衡。
- 「系统设置」入口放到左下角用户信息的右侧。
- 「主题切换」入口放到左上方的「FZS」图标的最右侧。
- UI 配色使用 `css variables`，可按客户需求灵活配置。

### 功能修复

- 修复了部分已知问题
