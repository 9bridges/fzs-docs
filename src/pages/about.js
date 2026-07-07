import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useReveal, { REVEAL, STAGGER } from '../hooks/useReveal';

const SPRING = 'motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)]';

const MILESTONES = [
  { year: '2016', text: '九桥同步成立，核心团队深耕数据同步领域十余年' },
  { year: '2017', text: 'FZS 产品 1.0 发布，完成 Oracle 到 Oracle 的全增量同步验证' },
  { year: '2023', text: '信创数据库适配加速，覆盖达梦、金仓、OceanBase 等主流平台' },
  { year: '2025', text: '支持 30+ 数据库，容器化部署上线，服务证券、基金与医疗等行业客户' },
  /* TODO: 根据实际情况更新里程碑 */
];

const VALUES = [
  {
    title: '技术为本',
    desc: '以日志解析与 CDC 技术为核心，在亚秒级延迟与数据一致性之间持续逼近最优解。',
  },
  {
    title: '场景驱动',
    desc: '从客户实际部署环境出发 — 点对点、中间机或容器化，方案随架构而定，不要求客户迁就产品。',
  },
  {
    title: '信创就绪',
    desc: '已完成对达梦、金仓、OceanBase、GaussDB 及龙芯、飞腾、鲲鹏等国产平台的全面适配与生产验证。',
  },
];

export default function AboutPage() {
  useReveal();
  return (
    <Layout
      title="关于我们"
      description="北京九桥同步软件有限公司 — 专注于数据同步与灾备领域的企业级软件服务商。"
    >
      <header
        className={clsx(
          'px-8 pb-[4.5rem] pt-20 text-center',
          'bg-[radial-gradient(50%_70%_at_85%_0%,oklch(65%_0.145_25/0.09),transparent_62%),linear-gradient(168deg,oklch(95.5%_0.010_25)_0%,oklch(97.5%_0.005_50)_55%,oklch(99.2%_0.003_50)_100%)]',
          'dark:bg-[linear-gradient(168deg,oklch(12%_0.022_25)_0%,oklch(14%_0.010_30)_45%,oklch(15%_0.008_30)_100%)]',
        )}
      >
        <div className="mx-auto max-w-[48rem]">
          <h1 className="mb-4 text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-[-0.02em] motion-safe:animate-fade-up">关于我们</h1>
          <p className="text-[clamp(1.05rem,2vw,1.2rem)] leading-[1.7] text-emphasis-700 motion-safe:animate-fade-up motion-safe:[animation-delay:0.1s]">
            深耕数据同步领域十余年，为关键业务系统提供从灾备到信创迁移的基础设施支撑
          </p>
        </div>
      </header>

      <main>
        <section className="px-8 py-20">
          <div className="mx-auto max-w-[52rem] px-6">
            <h2 className={clsx('mb-8 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">我们的使命</h2>
            <p className={clsx('mx-auto max-w-[40rem] text-center text-[1.15rem] leading-[1.8] text-emphasis-800', REVEAL)} data-reveal="">
              让企业数据流转<strong>安全、可靠、实时</strong>。
              我们为证券、期货、基金、医疗行业构建高性能、低侵入、易运维的数据同步系统，确保关键业务在灾难场景下持续运行。
            </p>
          </div>
        </section>

        <section className="bg-emphasis-100 px-8 py-20">
          <div className="mx-auto max-w-[52rem] px-6">
            <h2 className={clsx('mb-8 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">核心理念</h2>
            <div className={clsx('grid grid-cols-1 gap-6 md:grid-cols-3', STAGGER)} data-reveal="" data-stagger="">
              {VALUES.map(({ title, desc }) => (
                <div
                  key={title}
                  className={clsx(
                    'rounded-[10px] border border-emphasis-200 bg-surface p-8 text-center dark:border-emphasis-300',
                    'motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-[180ms]', SPRING,
                    'hover:-translate-y-0.5 hover:border-brand hover:shadow-fzs-md dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]',
                  )}
                >
                  <h3 className="mb-2 text-[1.1rem] font-semibold">{title}</h3>
                  <p className="text-[0.95rem] leading-[1.6] text-emphasis-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-20">
          <div className="mx-auto max-w-[52rem] px-6">
            <h2 className={clsx('mb-8 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">发展历程</h2>
            <div className={clsx('relative border-l-2 border-brand-lightest pl-12 dark:border-brand-darkest', REVEAL)} data-reveal="">
              {MILESTONES.map(({ year, text }) => (
                <div key={year} className="relative mb-8 before:absolute before:-left-[3.6rem] before:top-[0.35rem] before:h-[10px] before:w-[10px] before:rounded-full before:bg-brand before:content-['']">
                  <span className="mb-1 inline-block text-[0.85rem] font-bold text-brand">{year}</span>
                  <p className="text-base leading-[1.6] text-emphasis-800">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emphasis-100 px-8 py-20">
          <div className="mx-auto max-w-[52rem] px-6">
            <h2 className={clsx('mb-8 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em]', REVEAL)} data-reveal="">团队</h2>
            <p className={clsx('mx-auto max-w-[40rem] text-center text-[1.05rem] leading-[1.7] text-emphasis-700', REVEAL)} data-reveal="">
              九桥同步核心团队由来自 Oracle、IBM、OceanBase 等企业的数据库与数据同步领域资深工程师组成，
              累计超过 50 年的行业经验。
            </p>
            {/* TODO: 添加团队成员照片与简介 */}
          </div>
        </section>
      </main>
    </Layout>
  );
}

