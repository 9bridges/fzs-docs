import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useReveal, { REVEAL } from '../hooks/useReveal';

const LEAD_REP = { name: '黄博康', img: '/img/contact/黄博康.png', position: '总经理助理' };

export default function ContactPage() {
  useReveal();
  return (
    <Layout
      title="联系我们"
      description="联系九桥同步 — 获取 FZS 数据同步平台的试用授权或商务咨询。"
    >
      <header
        className={clsx(
          'px-8 pb-[4.5rem] pt-20 text-center',
          'bg-[radial-gradient(50%_70%_at_90%_10%,oklch(65%_0.145_25/0.10),transparent_60%),linear-gradient(168deg,oklch(95.5%_0.010_25)_0%,oklch(97.5%_0.005_50)_55%,oklch(99.2%_0.003_50)_100%)]',
          'dark:bg-[linear-gradient(168deg,oklch(12%_0.022_25)_0%,oklch(14%_0.010_30)_45%,oklch(15%_0.008_30)_100%)]',
        )}
      >
        <div className="mx-auto max-w-[48rem]">
          <h1 className="mb-4 text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-[-0.02em] motion-safe:animate-fade-up">联系我们</h1>
          <p className="text-[clamp(1.05rem,2vw,1.2rem)] leading-[1.7] text-emphasis-700 motion-safe:animate-fade-up motion-safe:[animation-delay:0.1s]">
            申请试用授权、咨询商务合作或获取技术支持 — 我们的团队快速响应您的需求
          </p>
        </div>
      </header>

      <main>
        <section className="px-8 py-20">
          <div className="mx-auto max-w-[52rem] px-6">
            <h2 className="mb-10 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em]">商务咨询</h2>
            <div className="mb-8 flex justify-center">
              <div className="flex flex-col items-center gap-3 motion-safe:animate-fade-up motion-safe:[animation-delay:0.2s]">
                <img
                  src={LEAD_REP.img}
                  alt={`${LEAD_REP.name} 企业微信二维码`}
                  className="block rounded-[10px] border border-emphasis-200 shadow-[0_2px_10px_rgba(15,23,42,0.08)] motion-safe:transition-[transform,box-shadow] motion-safe:duration-[180ms] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,23,42,0.12)] dark:invert"
                  width="160"
                  height="160"
                  loading="lazy"
                  decoding="async"
                />
                <p className="m-0 text-[0.95rem] font-semibold text-emphasis-800">{LEAD_REP.name}</p>
                <p className="m-0 text-[0.85rem] text-emphasis-600">{LEAD_REP.position}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx('bg-emphasis-100 px-8 py-20', REVEAL)} data-reveal="">
          <div className="mx-auto max-w-[52rem] px-6">
            <div className="flex flex-col items-center justify-between gap-8 [content-visibility:auto] [contain-intrinsic-size:auto_80px] sm:flex-row">
              <div className="flex-1 text-center sm:text-left">
                <h2 className="mb-2 text-[1.25rem] font-bold">产品文档</h2>
                <p className="text-[0.95rem] leading-[1.6] text-emphasis-700">
                  深入了解产品功能与部署方案，找到最适合您的实施路径
                </p>
              </div>
              <Link
                to="/docs"
                className="whitespace-nowrap text-[0.95rem] font-semibold motion-safe:transition-colors motion-safe:duration-[180ms] hover:text-brand-dark"
              >
                查阅产品文档 →
              </Link>
            </div>
          </div>
        </section>

        <section className={clsx('px-8 py-20', REVEAL)} data-reveal="">
          <div className="mx-auto max-w-[52rem] px-6">
            <h2 className="mb-10 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em]">公司信息</h2>
            <dl className="mx-auto max-w-[28rem]">
              <div className="flex flex-col gap-[0.35rem] border-b border-emphasis-200 py-3 sm:flex-row sm:gap-6">
                <dt className="min-w-[5rem] text-[0.9rem] font-semibold text-emphasis-600">公司名称</dt>
                <dd className="m-0 text-[0.95rem]">北京九桥同步软件有限公司</dd>
              </div>
              <div className="flex flex-col gap-[0.35rem] border-b border-emphasis-200 py-3 sm:flex-row sm:gap-6">
                <dt className="min-w-[5rem] text-[0.9rem] font-semibold text-emphasis-600">邮箱</dt>
                <dd className="m-0 text-[0.95rem]"><a href="mailto:contact@tb-soft.net">contact@tb-soft.net</a></dd>
              </div>
              <div className="flex flex-col gap-[0.35rem] border-b border-emphasis-200 py-3 sm:flex-row sm:gap-6">
                <dt className="min-w-[5rem] text-[0.9rem] font-semibold text-emphasis-600">官网</dt>
                <dd className="m-0 text-[0.95rem]"><a href="https://9bridges.cn/" target="_blank" rel="noopener noreferrer" aria-label="9bridges.cn（在新标签页中打开）">9bridges.cn</a></dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </Layout>
  );
}

