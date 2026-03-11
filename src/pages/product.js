import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './product.module.css';

const CAPABILITIES = [
  {
    category: '数据同步',
    items: [
      { title: '全量迁移', desc: '高并发全量数据传输，自动创建表结构、用户与表空间' },
      { title: '增量实时同步', desc: '基于 Redo Log 日志捕获，亚秒级数据延迟' },
      { title: 'DDL 同步', desc: '自动同步表结构变更，减少运维干预' },
      { title: '数据比对与修复', desc: '自动检测源备端数据差异并一键修复' },
    ],
  },
  {
    category: '运维管理',
    items: [
      { title: '可视化控制台', desc: 'FZS Web 提供链路配置、监控、日志查看的全流程 UI' },
      { title: '仪表盘大屏', desc: '实时展示多链路同步计数、延迟和状态' },
      { title: '告警通知', desc: '通过邮件、短信和 Webhook 实时推送异常告警' },
      { title: '一键部署', desc: '通过 Docker Compose 或 FZS Web 一键完成全环境部署' },
    ],
  },
  {
    category: '高可用',
    items: [
      { title: '灾备切换', desc: '源备端角色一键互换，保障业务连续性' },
      { title: '断点续传', desc: '同步中断后从断点恢复，数据不丢失' },
      { title: '限速控制', desc: '可配置同步限速，避免对生产库性能造成影响' },
      { title: 'API 驱动', desc: 'REST API 覆盖全部操作，支持自动化运维集成' },
    ],
  },
];

const ARCHITECTURES = [
  {
    name: '点对点部署',
    tag: '性能至上',
    desc: '源端与备端 Agent 直接通信，数据不经中间节点，延迟最低、吞吐最高。适合对性能要求极致的场景。',
  },
  {
    name: '中间机部署',
    tag: '安全至上',
    desc: 'Agent 部署在独立中间服务器，源备端不直接通信。对生产环境零侵入，适合安全合规要求严格的场景。',
  },
  {
    name: '容器化部署',
    tag: '敏捷至上',
    desc: '基于 Docker Compose 一键部署全部组件，自动化程度最高。适合快速搭建测试环境或云原生架构。',
  },
];

function CapabilitySection() {
  return (
    <section className={styles.capabilities}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>产品能力</h2>
        <p className={styles.sectionSubtitle}>
          从数据搬运到运维管理，覆盖企业数据同步的完整生命周期
        </p>
        {CAPABILITIES.map(({ category, items }) => (
          <div key={category} className={styles.capGroup}>
            <h3 className={styles.capGroupTitle}>{category}</h3>
            <div className={styles.capGrid}>
              {items.map(({ title, desc }) => (
                <div key={title} className={styles.capCard}>
                  <h4 className={styles.capCardTitle}>{title}</h4>
                  <p className={styles.capCardDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className={styles.architecture}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>部署架构</h2>
        <p className={styles.sectionSubtitle}>
          三种部署模式，满足不同企业 IT 架构与安全合规要求
        </p>
        <div className={styles.archGrid}>
          {ARCHITECTURES.map(({ name, tag, desc }) => (
            <div key={name} className={styles.archCard}>
              <span className={styles.archTag}>{tag}</span>
              <h3 className={styles.archName}>{name}</h3>
              <p className={styles.archDesc}>{desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.archCta}>
          <Link to="/docs/intro/product/deployment" className={styles.textLink}>
            查看详细架构图与方案对比 →
          </Link>
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className={styles.bottomCTA}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>下一步</h2>
        <div className={styles.ctaCards}>
          <Link to="/docs/quick-start" className={styles.ctaCard}>
            <span className={styles.ctaCardIcon}>⚡</span>
            <h3>快速开始</h3>
            <p>5 分钟部署，手把手完成第一条同步链路</p>
          </Link>
          <Link to="/docs/intro/appendix/db-support" className={styles.ctaCard}>
            <span className={styles.ctaCardIcon}>🔗</span>
            <h3>支持列表</h3>
            <p>查看 30+ 已适配的数据库类型</p>
          </Link>
          <Link to="/contact" className={styles.ctaCard}>
            <span className={styles.ctaCardIcon}>💬</span>
            <h3>联系我们</h3>
            <p>获取试用授权或技术咨询</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <Layout
      title="产品介绍"
      description="FZS 数据同步平台产品功能与架构介绍 — 全增量一体、异构同步、灾备切换、可视化管理。"
    >
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>FZS 数据同步平台</h1>
          <p className={styles.heroSubtitle}>
            基于日志捕获的全增量一体数据同步引擎，实现 Oracle、MySQL、PostgreSQL 等 30+ 数据库之间的实时异构同步。
          </p>
        </div>
      </header>
      <main>
        <CapabilitySection />
        <ArchitectureSection />
        <BottomCTA />
      </main>
    </Layout>
  );
}
