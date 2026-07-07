import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useReveal, { REVEAL, STAGGER } from '../hooks/useReveal';
import Icon from '../components/Icon';

const SPRING = 'motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)]';

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
    <section
      className={clsx(
        'relative overflow-hidden px-8 pt-24 pb-[5.5rem]',
        'bg-[radial-gradient(60%_80%_at_78%_8%,oklch(65%_0.145_25/0.10),transparent_60%),linear-gradient(168deg,oklch(95.5%_0.010_25)_0%,oklch(97.5%_0.005_50)_55%,oklch(99.2%_0.003_50)_100%)]',
        'dark:bg-[linear-gradient(168deg,oklch(12%_0.022_25)_0%,oklch(14%_0.010_30)_45%,oklch(15%_0.008_30)_100%)]',
      )}
    >
      <div className="mx-auto max-w-[64rem] text-center">
        <img
          src="/img/brand.png"
          alt="九桥同步"
          className="mx-auto mb-6 h-12 w-auto opacity-90 motion-safe:animate-fade-up dark:opacity-[0.85] dark:[filter:brightness(0)_invert(1)]"
          width="167"
          height="48"
          fetchpriority="high"
        />
        <h1 className="mb-10 text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-heading [text-wrap:balance] motion-safe:animate-fade-up motion-safe:[animation-delay:0.08s]">
          让企业数据流转
          <br />
          <span className="text-brand">安全、可靠、实时</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 motion-safe:animate-fade-up motion-safe:[animation-delay:0.16s]">
          <Link
            className={clsx(
              'button button--lg group inline-flex items-center gap-[0.85rem] border-brand bg-brand py-3 pl-8 pr-[0.85rem] font-semibold text-white',
              'motion-safe:transition-[transform,background-color,border-color,box-shadow] motion-safe:duration-[360ms]', SPRING,
              'hover:-translate-y-px hover:border-brand-dark hover:bg-brand-dark hover:text-white hover:shadow-fzs-lg',
              'active:translate-y-0 active:scale-[0.98]',
            )}
            to="/product"
          >
            了解产品
            <span
              className={clsx(
                'inline-flex h-[1.9rem] w-[1.9rem] items-center justify-center rounded-full bg-white/[0.16]',
                'motion-safe:transition-transform motion-safe:duration-[360ms]', SPRING,
                'group-hover:translate-x-[2px] group-hover:-translate-y-px',
              )}
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14 M13 6l6 6-6 6" /></svg>
            </span>
          </Link>
          <Link
            className={clsx(
              'button button--lg border-2 border-emphasis-300 bg-transparent px-8 py-3 font-semibold text-heading',
              'motion-safe:transition-[transform,border-color,color,background-color] motion-safe:duration-[180ms] motion-safe:ease-in-out',
              'hover:-translate-y-px hover:border-brand hover:text-brand',
              'active:translate-y-0 active:scale-[0.98]',
            )}
            to="/contact"
          >
            联系我们
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className={clsx('bg-emphasis-100 px-8 py-10', REVEAL)} data-reveal="">
      <div className="mx-auto max-w-[72rem] px-6">
        <p className="flex flex-wrap items-center justify-center gap-0 text-[1.05rem] max-[576px]:gap-2">
          {STATS.map(({ value, label }, i) => (
            <span key={label}>
              {i > 0 && (
                <span className="mx-5 select-none text-emphasis-400 max-[576px]:mx-3" aria-hidden="true">·</span>
              )}
              <span className="inline-flex items-baseline gap-[0.3em]">
                <span className="font-bold text-brand [font-variant-numeric:tabular-nums]">{value}</span>
                <span className="text-emphasis-700">{label}</span>
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
    <section className="px-8 py-28 [content-visibility:auto] [contain-intrinsic-size:auto_600px]">
      <div className="mx-auto max-w-[72rem] px-6">
        <h2 className={clsx('mb-2 text-center text-[clamp(1.75rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">我们做什么</h2>
        <p className="mx-auto mb-12 max-w-[36rem] text-center text-[1.1rem] text-emphasis-600">
          从实时同步到灾备切换，覆盖企业数据流转的核心场景
        </p>
        <div className={clsx('grid grid-cols-1 gap-8 md:grid-cols-3', STAGGER)} data-reveal="" data-stagger="">
          <div className={clsx(
            'rounded-[10px] border border-emphasis-200 bg-surface p-8 dark:border-emphasis-300',
            'motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-[320ms]', SPRING,
            'hover:-translate-y-0.5 hover:border-brand',
          )}>
            <h3 className="mb-2 text-[1.15rem] font-bold">数据同步</h3>
            <p className="text-[0.95rem] leading-[1.65] text-emphasis-700">基于日志捕获的全量＋增量同步，支持 30+ 主流与国产数据库之间的异构实时流转。</p>
          </div>
          <div className={clsx(
            'rounded-[10px] border border-emphasis-200 bg-surface p-8 dark:border-emphasis-300',
            'motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-[320ms]', SPRING,
            'hover:-translate-y-0.5 hover:border-brand',
          )}>
            <h3 className="mb-2 text-[1.15rem] font-bold">容灾备份</h3>
            <p className="text-[0.95rem] leading-[1.65] text-emphasis-700">内置灾备切换能力，一键完成源备端角色互换，保障业务系统的连续性与数据零丢失。</p>
          </div>
          <div className={clsx(
            'rounded-[10px] border border-emphasis-200 bg-surface p-8 dark:border-emphasis-300',
            'motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-[320ms]', SPRING,
            'hover:-translate-y-0.5 hover:border-brand',
          )}>
            <h3 className="mb-2 text-[1.15rem] font-bold">信创迁移</h3>
            <p className="text-[0.95rem] leading-[1.65] text-emphasis-700">深度适配达梦、金仓、OceanBase 等国产数据库，在线完成从商业数据库到信创平台的无中断迁移。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="bg-emphasis-100 px-8 py-28 [content-visibility:auto] [contain-intrinsic-size:auto_500px]">
      <div className="mx-auto max-w-[72rem] px-6">
        <h2 className={clsx('mb-2 text-center text-[clamp(1.75rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">服务领域</h2>
        <p className="mx-auto mb-12 max-w-[36rem] text-center text-[1.1rem] text-emphasis-600">
          面向关键业务场景，为证券、期货、基金与医疗行业客户提供经过生产验证的数据同步能力
        </p>
        <div className={clsx('mx-auto flex max-w-[48rem] flex-col gap-5', STAGGER)} data-reveal="" data-stagger="">
          {VERTICALS.map(({ icon, title, desc }) => (
            <div
              key={title}
              className={clsx(
                'flex items-start gap-6 rounded-[10px] border border-emphasis-200 bg-surface px-8 py-6 dark:border-emphasis-300',
                'motion-safe:transition-[border-color,transform] motion-safe:duration-[320ms]', SPRING,
                'hover:translate-x-1 hover:border-brand',
                'max-[576px]:gap-4 max-[576px]:px-6 max-[576px]:py-5',
              )}
            >
              <span className="mt-[0.15rem] shrink-0 text-brand"><Icon name={icon} size={32} /></span>
              <div className="flex-1">
                <h3 className="mb-1 text-[1.1rem] font-bold">{title}</h3>
                <p className="text-[0.95rem] leading-[1.6] text-emphasis-700">{desc}</p>
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
    <section className="px-8 py-28 [content-visibility:auto] [contain-intrinsic-size:auto_500px]">
      <div className="mx-auto max-w-[72rem] px-6">
        <h2 className={clsx('mb-2 text-center text-[clamp(1.75rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">深入了解</h2>
        <p className="mx-auto mb-12 max-w-[36rem] text-center text-[1.1rem] text-emphasis-600">
          从产品能力到部署文档，选择您关注的内容
        </p>
        <div className={clsx('grid grid-cols-1 gap-6 max-[996px]:grid-cols-2 max-[576px]:grid-cols-1 md:grid-cols-4', STAGGER)} data-reveal="" data-stagger="">
          {NAVIGATIONS.map(({ icon, title, desc, to }) => (
            <Link
              key={title}
              to={to}
              className={clsx(
                'block rounded-[10px] border border-emphasis-200 bg-surface p-8 text-inherit no-underline dark:border-emphasis-300',
                'motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-[320ms]', SPRING,
                'hover:-translate-y-0.5 hover:border-brand hover:text-inherit hover:no-underline hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_12px_rgba(0,0,0,0.3)]',
                'active:scale-[0.98]',
              )}
            >
              <span className="mb-3 inline-flex text-brand"><Icon name={icon} /></span>
              <h3 className="mb-[0.35rem] text-[1.1rem] font-bold">{title}</h3>
              <p className="text-[0.9rem] leading-[1.6] text-emphasis-600">{desc}</p>
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

