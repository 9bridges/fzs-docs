import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const FEATURES = [
  {
    title: '30+ 数据库支持',
    description:
      '覆盖 Oracle、MySQL、PostgreSQL、SQL Server 等主流数据库，以及达梦、金仓、OceanBase 等国产信创数据库。',
    icon: '🔗',
  },
  {
    title: '全增量一体',
    description:
      '全量迁移与增量实时同步一体化，基于 Redo Log 捕获，确保数据零丢失、低延迟。',
    icon: '⚡',
  },
  {
    title: '异构同步',
    description:
      '支持异构数据库之间的实时流转，打破数据孤岛，满足信创迁移与数据集成需求。',
    icon: '🔄',
  },
  {
    title: '灾备切换',
    description:
      '内置灾备切换能力，一键完成源备端角色互换，保障业务连续性。',
    icon: '🛡️',
  },
  {
    title: '可视化管理',
    description:
      '通过 FZS Web 实现链路配置、监控、告警的全流程可视化操作，显著降低运维成本。',
    icon: '📊',
  },
  {
    title: '灵活部署',
    description:
      '支持点对点、中间机和容器化等多种部署模式，适配各类企业 IT 架构。',
    icon: '🏗️',
  },
];

const DB_LOGOS = [
  'Oracle', 'MySQL', 'PostgreSQL', 'SQL Server', 'OceanBase',
  'GaussDB', 'TiDB', 'DM8', 'Kingbase', 'openGauss',
  'LightDB', 'MogDB', 'Kafka', 'Hive', 'Doris',
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          让数据流转
          <br />
          <span className={styles.heroAccent}>安全、可靠、实时</span>
        </h1>
        <p className={styles.heroSubtitle}>
          FZS 数据同步平台 — 基于日志捕获的全增量一体、异构数据库实时同步解决方案。
          <br />
          支持 30+ 数据库，覆盖灾备、迁移与集成全场景。
        </p>
        <div className={styles.heroCTA}>
          <Link className={clsx('button button--lg', styles.ctaPrimary)} to="/docs/quick-start">
            快速开始
          </Link>
          <Link className={clsx('button button--lg', styles.ctaSecondary)} to="/product">
            了解产品
          </Link>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>核心能力</h2>
        <p className={styles.sectionSubtitle}>
          企业级数据同步，从全量迁移到实时增量，一个平台全部搞定
        </p>
        <div className={styles.featureGrid}>
          {FEATURES.map(({ title, description, icon }) => (
            <div key={title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{icon}</span>
              <h3 className={styles.featureTitle}>{title}</h3>
              <p className={styles.featureDesc}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DatabaseSupport() {
  return (
    <section className={styles.databases}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>广泛的数据库支持</h2>
        <p className={styles.sectionSubtitle}>
          兼容主流关系型数据库和国产信创数据库，并持续扩展
        </p>
        <div className={styles.dbGrid}>
          {DB_LOGOS.map((name) => (
            <span key={name} className={styles.dbBadge}>{name}</span>
          ))}
          <Link to="/docs/intro/appendix/db-support" className={styles.dbBadgeMore}>
            查看全部 →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.sectionInner}>
        <h2 className={styles.ctaSectionTitle}>准备好开始了吗？</h2>
        <p className={styles.ctaSectionDesc}>
          5 分钟完成部署，立即体验 FZS 数据同步平台的强大能力
        </p>
        <div className={styles.heroCTA}>
          <Link className={clsx('button button--lg', styles.ctaPrimary)} to="/docs/quick-start">
            阅读部署指南
          </Link>
          <Link className={clsx('button button--lg', styles.ctaSecondary)} to="/contact">
            联系销售团队
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="专业级数据同步与灾备解决方案"
      description="九桥同步 FZS 数据同步平台 — 支持 30+ 数据库的全增量异构实时同步解决方案。覆盖灾备、迁移与集成全场景。"
    >
      <Hero />
      <main>
        <Features />
        <DatabaseSupport />
        <CTA />
      </main>
    </Layout>
  );
}
