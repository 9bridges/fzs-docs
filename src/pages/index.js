import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import useReveal from '../hooks/useReveal';

const STATS = [
  { value: '30+', label: '支持数据库' },
  { value: '10+', label: '年深耕经验' },
  { value: '亚秒级', label: '同步延迟' },
  { value: '7×24', label: '技术支持' },
];

const VERTICALS = [
  {
    icon: '📈',
    title: '证券',
    desc: '交易系统容灾、行情数据实时同步、监管数据报送',
  },
  {
    icon: '🔄',
    title: '期货',
    desc: '核心系统灾备、多系统风控数据实时集成',
  },
  {
    icon: '💹',
    title: '基金',
    desc: '估值数据实时同步、多系统数据汇聚',
  },
  {
    icon: '🏥',
    title: '医疗',
    desc: '业务连续性保障、跨院区数据同步',
  },
];

const NAVIGATIONS = [
  {
    icon: '🚀',
    title: '产品介绍',
    desc: '查看 FZS 的核心能力、部署方式和适用场景',
    to: '/product',
  },
  {
    icon: '📖',
    title: '技术文档',
    desc: '查看部署指南、操作手册和 API 参考，快速上手',
    to: '/docs/quick-start',
  },
  {
    icon: '💼',
    title: '客户案例',
    desc: '了解证券容灾、基金数据同步与医疗集成等典型场景',
    to: '/cases',
  },
  {
    icon: '📞',
    title: '联系我们',
    desc: '获取试用授权或洽谈商务合作',
    to: '/contact',
  },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <img
          src="/img/brand.png"
          alt="九桥同步"
          className={styles.heroBrand}
          width="167"
          height="48"
        />
        <h1 className={styles.heroTitle}>
          让企业数据流转
          <br />
          <span className={styles.heroAccent}>安全、可靠、实时</span>
        </h1>
        <div className={styles.heroCTA}>
          <Link className={clsx('button button--lg', styles.ctaPrimary)} to="/product">
            了解产品
          </Link>
          <Link className={clsx('button button--lg', styles.ctaSecondary)} to="/contact">
            联系我们
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className={styles.stats} data-reveal="">
      <div className={styles.sectionInner}>
        <div className={styles.statGrid}>
          {STATS.map(({ value, label }) => (
            <div key={label} className={styles.statItem}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className={styles.whatWeDo}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle} data-reveal="">我们做什么</h2>
        <p className={styles.sectionSubtitle}>
          围绕数据同步、容灾和迁移需求，提供企业级数据流转基础设施
        </p>
        <div className={styles.whatWeDoGrid} data-reveal="" data-stagger="">
          <div className={styles.whatWeDoCard}>
            <h3>数据同步</h3>
            <p>基于日志捕获的全量＋增量一体化同步，支持 30+ 主流与国产数据库之间的异构实时流转。</p>
          </div>
          <div className={styles.whatWeDoCard}>
            <h3>容灾备份</h3>
            <p>内置灾备切换能力，一键完成源备端角色互换，保障业务系统的连续性与数据零丢失。</p>
          </div>
          <div className={styles.whatWeDoCard}>
            <h3>信创迁移</h3>
            <p>深度适配达梦、金仓、OceanBase 等国产数据库，助力企业平滑完成信创替代。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className={styles.industries}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle} data-reveal="">服务领域</h2>
        <p className={styles.sectionSubtitle}>
          面向关键业务场景，为行业客户提供稳定可靠的数据同步能力
        </p>
        <div className={styles.industryGrid} data-reveal="" data-stagger="">
          {VERTICALS.map(({ icon, title, desc }) => (
            <div key={title} className={styles.industryCard}>
              <span className={styles.industryIcon}>{icon}</span>
              <h3 className={styles.industryTitle}>{title}</h3>
              <p className={styles.industryDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Explore() {
  return (
    <section className={styles.explore}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle} data-reveal="">深入了解</h2>
        <p className={styles.sectionSubtitle}>
          从产品介绍到部署文档，找到您现在最需要的内容
        </p>
        <div className={styles.navGrid} data-reveal="" data-stagger="">
          {NAVIGATIONS.map(({ icon, title, desc, to }) => (
            <Link key={title} to={to} className={styles.navCard}>
              <span className={styles.navIcon}>{icon}</span>
              <h3 className={styles.navTitle}>{title}</h3>
              <p className={styles.navDesc}>{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useReveal();
  return (
    <Layout
      title="国内领先的数据同步方案供应商"
      description="北京九桥同步软件有限公司 — 专注于数据同步、数据容灾与信创迁移的企业级软件服务商。服务证券、期货、基金与医疗等行业客户。"
    >
      <Head>
        <title>九桥同步 | 国内领先的数据同步方案供应商</title>
      </Head>
      <Hero />
      <main>
        <Stats />
        <WhatWeDo />
        <Industries />
        <Explore />
      </main>
    </Layout>
  );
}
