import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import useReveal from '../hooks/useReveal';
import Icon from '../components/Icon';

const STATS = [
  { value: '30+', label: '数据库适配' },
  { value: '10+', label: '年行业深耕' },
  { value: '亚秒级', label: '同步延迟' },
  { value: '7×24', label: '应急响应' },
];

const VERTICALS = [
  {
    icon: 'trend',
    title: '证券',
    desc: '交易系统容灾、行情数据实时同步、监管数据报送',
  },
  {
    icon: 'swap',
    title: '期货',
    desc: '核心系统灾备、多系统风控数据实时集成',
  },
  {
    icon: 'fund',
    title: '基金',
    desc: '估值数据实时同步、多系统数据汇聚',
  },
  {
    icon: 'pulse',
    title: '医疗',
    desc: '业务连续性保障、跨院区数据同步',
  },
];

const NAVIGATIONS = [
  {
    icon: 'spark',
    title: '产品介绍',
    desc: '核心能力、部署架构与数据库兼容性一览',
    to: '/product',
  },
  {
    icon: 'book',
    title: '技术文档',
    desc: '部署指南、操作手册与 API 参考，按步骤完成配置',
    to: '/docs/quick-start',
  },
  {
    icon: 'briefcase',
    title: '客户案例',
    desc: '证券容灾、基金同步、医疗集成 — 真实场景下的实现路径与效果',
    to: '/cases',
  },
  {
    icon: 'chat',
    title: '联系我们',
    desc: '申请试用授权或洽谈商务合作',
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
          fetchpriority="high"
        />
        <h1 className={styles.heroTitle}>
          让企业数据流转
          <br />
          <span className={styles.heroAccent}>安全、可靠、实时</span>
        </h1>
        <div className={styles.heroCTA}>
          <Link className={clsx('button button--lg', styles.ctaPrimary)} to="/product">
            了解产品
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14 M13 6l6 6-6 6" /></svg>
            </span>
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
        <p className={styles.statGrid}>
          {STATS.map(({ value, label }, i) => (
            <span key={label}>
              {i > 0 && <span className={styles.statDivider} aria-hidden="true">·</span>}
              <span className={styles.statItem}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </span>
            </span>
          ))}
        </p>
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
          从实时同步到灾备切换，覆盖企业数据流转的核心场景
        </p>
        <div className={styles.whatWeDoGrid} data-reveal="" data-stagger="">
          <div className={styles.whatWeDoCard}>
            <h3>数据同步</h3>
            <p>基于日志捕获的全量＋增量同步，支持 30+ 主流与国产数据库之间的异构实时流转。</p>
          </div>
          <div className={styles.whatWeDoCard}>
            <h3>容灾备份</h3>
            <p>内置灾备切换能力，一键完成源备端角色互换，保障业务系统的连续性与数据零丢失。</p>
          </div>
          <div className={styles.whatWeDoCard}>
            <h3>信创迁移</h3>
            <p>深度适配达梦、金仓、OceanBase 等国产数据库，在线完成从商业数据库到信创平台的无中断迁移。</p>
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
          面向关键业务场景，为证券、期货、基金与医疗行业客户提供经过生产验证的数据同步能力
        </p>
        <div className={styles.industryList} data-reveal="" data-stagger="">
          {VERTICALS.map(({ icon, title, desc }) => (
            <div key={title} className={styles.industryRow}>
              <span className={styles.industryIcon}><Icon name={icon} size={32} /></span>
              <div className={styles.industryBody}>
                <h3 className={styles.industryTitle}>{title}</h3>
                <p className={styles.industryDesc}>{desc}</p>
              </div>
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
          从产品能力到部署文档，选择您关注的内容
        </p>
        <div className={styles.navGrid} data-reveal="" data-stagger="">
          {NAVIGATIONS.map(({ icon, title, desc, to }) => (
            <Link key={title} to={to} className={styles.navCard}>
              <span className={styles.navIcon}><Icon name={icon} /></span>
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
      title="企业级数据同步与容灾平台"
      description="FZS 数据同步平台 — 基于日志捕获的异构数据库实时同步，支持 Oracle、MySQL、达梦、金仓等 30+ 数据库，服务证券、期货、基金与医疗行业。"
    >
      <Head>
        <title>九桥同步 | 企业级数据同步与容灾平台</title>
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
