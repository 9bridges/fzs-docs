import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from './product.module.css';
import useReveal from '../hooks/useReveal';
import Icon from '../components/Icon';

const DATABASES = [
  'Oracle', 'MySQL', 'PostgreSQL', 'SQL Server', 'DB2',
  'OceanBase', 'TiDB', 'GaussDB', 'openGauss', '达梦 DM',
  '人大金仓 Kingbase', 'LightDB', 'MogDB', 'SUNDB',
];

const FAQS = [
  {
    q: 'FZS 支持哪些数据库？',
    a: 'FZS 支持 30+ 主流与国产信创数据库之间的异构同步，包括 Oracle、MySQL、PostgreSQL、SQL Server、DB2，以及 OceanBase、TiDB、GaussDB、openGauss、达梦 DM、人大金仓 Kingbase、LightDB、MogDB 等国产数据库。',
  },
  {
    q: 'FZS 的同步延迟有多大？',
    a: 'FZS 基于数据库 Redo Log 日志捕获（CDC）实现增量同步，典型场景下数据延迟在亚秒级（500ms 以内），并支持断点续传，保障同步过程中数据不丢失。',
  },
  {
    q: 'FZS 有哪些部署方式？',
    a: 'FZS 提供三种部署方式：点对点部署（性能最优）、中间机部署（对生产环境零侵入、满足安全合规）、以及基于 Docker Compose 的容器化部署（自动化程度最高，适合快速搭建）。',
  },
  {
    q: 'FZS 是否适配信创环境？',
    a: 'FZS 全面适配信创环境，支持龙芯、飞腾、鲲鹏、海光、兆芯等国产 CPU 架构，并适配达梦、人大金仓、OceanBase、GaussDB、openGauss 等主流国产数据库，可用于核心业务系统的国产化迁移与容灾。',
  },
];

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
        <h2 className={styles.sectionTitle} data-reveal="">产品能力</h2>
        <p className={styles.sectionSubtitle}>
          从数据迁移到日常运维，覆盖企业数据同步的核心环节
        </p>
        {CAPABILITIES.map(({ category, items }) => (
          <div key={category} className={styles.capGroup}>
            <h3 className={styles.capGroupTitle}>{category}</h3>
            <div className={styles.capGrid} data-reveal="" data-stagger="">
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
        <h2 className={styles.sectionTitle} data-reveal="">部署架构</h2>
        <p className={styles.sectionSubtitle}>
          三种部署方式，适配不同的 IT 架构与安全要求
        </p>
        <div className={styles.archGrid} data-reveal="" data-stagger="">
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
            查看架构图和方案对比 →
          </Link>
        </div>
      </div>
    </section>
  );
}

function DatabaseSection() {
  return (
    <section className={styles.databases}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle} data-reveal="">支持的数据库</h2>
        <p className={styles.sectionSubtitle}>
          覆盖主流商业数据库与国产信创数据库，支持 30+ 数据库之间的异构同步
        </p>
        <div className={styles.dbGrid} data-reveal="" data-stagger="">
          {DATABASES.map((name) => (
            <span key={name} className={styles.dbChip}>{name}</span>
          ))}
          <span className={styles.dbChipMore}>30+ 持续适配中</span>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className={styles.faq}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle} data-reveal="">常见问题</h2>
        <p className={styles.sectionSubtitle}>
          关于数据库支持、同步性能、部署与信创适配的常见疑问
        </p>
        <div className={styles.faqList} data-reveal="" data-stagger="">
          {FAQS.map(({ q, a }) => (
            <details key={q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{q}</summary>
              <p className={styles.faqAnswer}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className={styles.bottomCTA}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle} data-reveal="">下一步</h2>
        <div className={styles.ctaCards} data-reveal="" data-stagger="">
          <Link to="/docs/quick-start" className={styles.ctaCard}>
            <span className={styles.ctaCardIcon}><Icon name="bolt" /></span>
            <h3>快速开始</h3>
            <p>按步骤完成部署，快速搭建第一条同步链路</p>
          </Link>
          <Link to="/docs/intro/appendix/db-support" className={styles.ctaCard}>
            <span className={styles.ctaCardIcon}><Icon name="link" /></span>
            <h3>支持列表</h3>
            <p>查看当前已适配的数据库和平台</p>
          </Link>
          <Link to="/contact" className={styles.ctaCard}>
            <span className={styles.ctaCardIcon}><Icon name="chat" /></span>
            <h3>联系我们</h3>
            <p>咨询试用、采购方案或技术支持</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FZS 数据同步平台',
  alternateName: ['FZS', '九桥同步'],
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: '数据同步 / 数据容灾',
  operatingSystem: 'Linux, Windows',
  url: 'https://9bridges.cn/product',
  description:
    'FZS 是九桥同步推出的企业级数据同步平台，基于数据库日志捕获（CDC）实现全量与增量一体化的异构实时同步，支持 Oracle、MySQL、PostgreSQL、OceanBase、TiDB、达梦 DM、人大金仓 Kingbase 等 30+ 数据库，适配国产信创环境。',
  featureList: [
    '全量＋增量一体化同步',
    '基于 Redo Log 的亚秒级延迟',
    'DDL 自动同步',
    '数据比对与修复',
    '灾备一键切换',
    '可视化控制台与告警',
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'CNY',
    price: '0',
    description: '商业授权，提供免费试用',
  },
  provider: {
    '@type': 'Organization',
    name: '北京九桥同步软件有限公司',
    url: 'https://9bridges.cn',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function ProductPage() {
  useReveal();
  return (
    <Layout
      title="产品介绍"
      description="FZS 数据同步平台产品功能与架构介绍 — 全增量一体、异构同步、灾备切换、可视化管理。"
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Head>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>FZS 数据同步平台</h1>
          <p className={styles.heroSubtitle}>
            基于日志捕获的全量加增量一体化引擎，支持 30+ 数据库之间的实时异构同步。
          </p>
        </div>
      </header>
      <main>
        <CapabilitySection />
        <DatabaseSection />
        <ArchitectureSection />
        <FaqSection />
        <BottomCTA />
      </main>
    </Layout>
  );
}
