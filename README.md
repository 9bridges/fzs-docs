# fzs-docs

官网与产品文档站，面向 [9bridges.cn](https://9bridges.cn)。基于 [Docusaurus](https://docusaurus.io/) 构建，中文（zh-Hans）。

## 项目结构

```
src/pages/          # 营销页面（首页、产品、案例、关于、联系）
docs/               # 产品文档
  intro/            # 产品介绍、背景、用例、部署架构
  quick-start/      # 快速开始与部署指南
  fzs-web/          # FZS Web 控制台操作手册
  fzs-web-server/   # FZS Web Server API 参考与部署说明
  changelog.md      # 版本更新记录
static/             # 静态资源（图片、docker-compose 模板等）
```

## 本地开发

```bash
yarn          # 安装依赖
yarn start    # 启动开发服务器（热更新）
yarn build    # 构建生产版本至 build/
yarn serve    # 本地预览构建产物
```

## 部署

站点通过 GitHub Pages 托管，推送至 `gh-pages` 分支：

```bash
GIT_USER=<GitHub 用户名> yarn deploy
```
