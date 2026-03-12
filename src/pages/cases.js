import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './cases.module.css';

/*
 * TODO: 替换为真实客户案例。以下为示例模板，展示页面结构。
 * 每个案例包含：行业标签、客户名称、痛点概述、使用的 FZS 能力、效果。
 */
const CASES = [
  {
    industry: '金融',
    title: '某股份制银行核心系统灾备',
    challenge: '核心交易系统需要从 Oracle 实时同步至异地 Oracle 灾备中心，RPO 要求小于 1 秒。',
    solution: '采用 FZS 点对点部署模式，基于 Redo Log 捕获实现源备端实时增量同步。',
    result: '同步延迟稳定在 500ms 以内，灾备切换演练 RTO 小于 30 秒。',
  },
  {
    industry: '政企',
    title: '某省级政务平台信创迁移',
    challenge: '数百张核心业务表需从 Oracle 迁移至达梦 DM8，要求停机窗口不超过 2 小时。',
    solution: '利用 FZS 全增量一体能力，先全量迁移，再增量追平，最终一键切换。',
    result: '172 张表、8 亿行数据，实际停机仅 45 分钟完成切换。',
  },
  {
    industry: '能源',
    title: '某电力集团数据集成平台',
    challenge: '多个分公司使用不同数据库（Oracle、MySQL、PostgreSQL），需统一汇聚至分析平台。',
    solution: '采用中间机部署模式，多链路并行同步至 GaussDB (DWS) 数据仓库。',
    result: '6 条异构链路并行运行，日均同步 2000 万条记录，延迟低于 3 秒。',
  },
];

export default function CasesPage() {
  return (
    <Layout
      title="客户案例"
      description="九桥同步 FZS 数据同步平台客户案例 — 金融灾备、信创迁移、数据集成等实战场景。"
    >
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>客户案例</h1>
          <p className={styles.heroSubtitle}>
            来自金融、政企、能源等行业的典型实施场景，了解 FZS 如何应对真实的数据同步挑战
          </p>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.caseList}>
              {CASES.map(({ industry, title, challenge, solution, result }) => (
                <article key={title} className={styles.caseCard}>
                  <span className={styles.caseTag}>{industry}</span>
                  <h2 className={styles.caseTitle}>{title}</h2>
                  <div className={styles.caseBody}>
                    <div className={styles.caseBlock}>
                      <h3>业务挑战</h3>
                      <p>{challenge}</p>
                    </div>
                    <div className={styles.caseBlock}>
                      <h3>解决方案</h3>
                      <p>{solution}</p>
                    </div>
                    <div className={styles.caseBlock}>
                      <h3>实施效果</h3>
                      <p>{result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionBg}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>FZS 同样适用于您的场景</h2>
            <p className={styles.ctaDesc}>
              无论您面对的是灾备切换、信创迁移还是数据集成需求，FZS 都能提供稳定可靠的技术支撑
            </p>
            <div className={styles.ctaButtons}>
              <Link className="button button--primary button--lg" to="/contact">
                联系我们
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/quick-start">
                快速开始
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
