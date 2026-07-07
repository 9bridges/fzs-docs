import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useReveal, { REVEAL, STAGGER } from '../hooks/useReveal';
import Icon from '../components/Icon';

const CARD = 'rounded-[10px] border border-emphasis-200 bg-surface dark:border-emphasis-300';
const TAG = 'mb-3 inline-block rounded text-[0.78rem] font-semibold uppercase tracking-[0.04em] text-brand bg-brand-lightest px-[0.65rem] py-[0.2rem] dark:bg-[oklch(66%_0.17_27/0.18)]';

const DATABASE_GROUPS = [
  {
    label: '商业数据库',
    items: ['Oracle', 'MySQL', 'PostgreSQL', 'SQL Server', 'DB2'],
  },
  {
    label: '国产数据库',
    items: ['达梦 DM', '人大金仓 Kingbase', 'LightDB', 'MogDB', 'SUNDB'],
  },
  {
    label: '分布式 / NewSQL',
    items: ['OceanBase', 'TiDB', 'GaussDB', 'openGauss'],
  },
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
    <section className="px-8 py-20">
      <div className="mx-auto max-w-[72rem] px-6">
        <h2 className={clsx('mb-2 text-center text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">产品能力</h2>
        <p className="mx-auto mb-12 max-w-[36rem] text-center text-[1.05rem] text-emphasis-600">
          从数据迁移到日常运维，覆盖企业数据同步的核心环节
        </p>
        {CAPABILITIES.map(({ category, items }) => (
          <div key={category} className="mb-12">
            <h3 className="mb-4 text-[1.15rem] font-semibold uppercase tracking-[0.06em] text-brand">{category}</h3>
            <div className={clsx('grid grid-cols-1 gap-5 max-[996px]:grid-cols-2 md:grid-cols-4', STAGGER)} data-reveal="" data-stagger="">
              {items.map(({ title, desc }) => (
                <div key={title} className={clsx(CARD, 'p-6 motion-safe:transition-colors motion-safe:duration-[180ms] hover:border-brand')}>
                  <h4 className="mb-[0.35rem] text-base font-semibold">{title}</h4>
                  <p className="text-[0.9rem] leading-[1.6] text-emphasis-700">{desc}</p>
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
    <section className="px-8 py-20">
      <div className="mx-auto max-w-[72rem] px-6">
        <h2 className={clsx('mb-2 text-center text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">部署架构</h2>
        <p className="mx-auto mb-12 max-w-[36rem] text-center text-[1.05rem] text-emphasis-600">
          三种部署模式，对应不同的 IT 架构与安全合规要求
        </p>
        <div className={clsx('grid grid-cols-1 gap-6 md:grid-cols-3', STAGGER)} data-reveal="" data-stagger="">
          {ARCHITECTURES.map(({ name, tag, desc }) => (
            <div
              key={name}
              className={clsx(
                CARD, 'p-8',
                'motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-[180ms]',
                'hover:-translate-y-0.5 hover:border-brand hover:shadow-fzs-md dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]',
              )}
            >
              <span className={TAG}>{tag}</span>
              <h3 className="mb-2 text-[1.2rem] font-bold">{name}</h3>
              <p className="text-[0.95rem] leading-[1.65] text-emphasis-700">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/docs/intro/product/deployment"
            className="text-base font-semibold motion-safe:transition-colors motion-safe:duration-[180ms] hover:text-brand-dark"
          >
            查看架构图和方案对比 →
          </Link>
        </div>
      </div>
    </section>
  );
}

function DatabaseSection() {
  return (
    <section className="bg-emphasis-100 px-8 py-20">
      <div className="mx-auto max-w-[72rem] px-6">
        <h2 className={clsx('mb-2 text-center text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">支持的数据库</h2>
        <p className="mx-auto mb-12 max-w-[36rem] text-center text-[1.05rem] text-emphasis-600">
          覆盖主流商业数据库与国产信创数据库，支持 30+ 数据库之间的异构同步
        </p>
        <div className={clsx('mx-auto flex max-w-[56rem] flex-col gap-8', STAGGER)} data-reveal="" data-stagger="">
          {DATABASE_GROUPS.map(({ label, items }) => (
            <div key={label} className="text-center">
              <h3 className="mb-3 text-[0.85rem] font-semibold uppercase tracking-[0.05em] text-emphasis-500">{label}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {items.map((name) => (
                  <span
                    key={name}
                    className="inline-block rounded-full border border-emphasis-200 bg-surface px-4 py-2 text-[0.92rem] font-medium motion-safe:transition-colors motion-safe:duration-[180ms] hover:border-brand hover:text-brand dark:border-emphasis-300"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <p className="m-0 text-center text-[0.88rem] font-semibold text-brand">30+ 持续适配中</p>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-emphasis-100 px-8 py-20">
      <div className="mx-auto max-w-[72rem] px-6">
        <h2 className={clsx('mb-2 text-center text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">常见问题</h2>
        <p className="mx-auto mb-12 max-w-[36rem] text-center text-[1.05rem] text-emphasis-600">
          关于数据库支持、同步性能、部署与信创适配的常见疑问
        </p>
        <div className={clsx('mx-auto flex max-w-[48rem] flex-col gap-3', STAGGER)} data-reveal="" data-stagger="">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className={clsx(CARD, 'group px-5 motion-safe:transition-colors motion-safe:duration-[180ms] open:border-brand')}
            >
              <summary className="cursor-pointer list-none py-[1.1rem] text-[1.02rem] font-semibold marker:hidden [&::-webkit-details-marker]:hidden after:float-right after:font-normal after:text-brand after:content-['+'] group-open:after:content-['−']">
                {q}
              </summary>
              <p className="m-0 pb-[1.1rem] text-[0.95rem] leading-[1.7] text-emphasis-700">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-[72rem] px-6">
        <h2 className={clsx('mb-2 text-center text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">下一步</h2>
        <div className={clsx('mt-10 grid grid-cols-1 gap-6 md:grid-cols-3', STAGGER)} data-reveal="" data-stagger="">
          <Link
            to="/docs/quick-start"
            className={clsx(
              CARD, 'block p-8 text-inherit no-underline',
              'motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-[180ms]',
              'hover:-translate-y-0.5 hover:border-brand hover:text-inherit hover:no-underline hover:shadow-fzs-lg dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]',
              'active:translate-y-0',
            )}
          >
            <span className="mb-3 inline-flex text-brand"><Icon name="bolt" /></span>
            <h3 className="mb-[0.35rem] text-[1.1rem] font-semibold">快速开始</h3>
            <p className="m-0 text-[0.9rem] leading-[1.5] text-emphasis-600">按步骤完成部署，快速搭建第一条同步链路</p>
          </Link>
          <Link
            to="/docs/intro/appendix/db-support"
            className={clsx(
              CARD, 'block p-8 text-inherit no-underline',
              'motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-[180ms]',
              'hover:-translate-y-0.5 hover:border-brand hover:text-inherit hover:no-underline hover:shadow-fzs-lg dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]',
              'active:translate-y-0',
            )}
          >
            <span className="mb-3 inline-flex text-brand"><Icon name="link" /></span>
            <h3 className="mb-[0.35rem] text-[1.1rem] font-semibold">支持列表</h3>
            <p className="m-0 text-[0.9rem] leading-[1.5] text-emphasis-600">查看当前已适配的数据库和平台</p>
          </Link>
          <Link
            to="/contact"
            className={clsx(
              CARD, 'block p-8 text-inherit no-underline',
              'motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-[180ms]',
              'hover:-translate-y-0.5 hover:border-brand hover:text-inherit hover:no-underline hover:shadow-fzs-lg dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]',
              'active:translate-y-0',
            )}
          >
            <span className="mb-3 inline-flex text-brand"><Icon name="chat" /></span>
            <h3 className="mb-[0.35rem] text-[1.1rem] font-semibold">联系我们</h3>
            <p className="m-0 text-[0.9rem] leading-[1.5] text-emphasis-600">咨询试用、采购方案或技术支持</p>
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
      <header
        className={clsx(
          'px-8 pb-[4.5rem] pt-20 text-center',
          'bg-[radial-gradient(55%_70%_at_20%_0%,oklch(65%_0.145_25/0.10),transparent_60%),linear-gradient(168deg,oklch(95.5%_0.010_25)_0%,oklch(97.5%_0.005_50)_55%,oklch(99.2%_0.003_50)_100%)]',
          'dark:bg-[linear-gradient(168deg,oklch(12%_0.022_25)_0%,oklch(14%_0.010_30)_45%,oklch(15%_0.008_30)_100%)]',
        )}
      >
        <div className="mx-auto max-w-[48rem]">
          <h1 className="mb-4 text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-[-0.02em] motion-safe:animate-fade-up">FZS 数据同步平台</h1>
          <p className="text-[clamp(1.05rem,2vw,1.2rem)] leading-[1.7] text-emphasis-700 motion-safe:animate-fade-up motion-safe:[animation-delay:0.1s]">
            基于数据库日志捕获，全量迁移与增量实时同步一体化运行。支持 30+ 数据库之间的异构流转。
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
