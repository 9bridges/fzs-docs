import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './cases.module.css';
import useReveal from '../hooks/useReveal';

/*
 * TODO: 替换为真实客户案例。以下为示例模板，展示页面结构。
 * 每个案例包含：行业标签、客户名称、痛点概述、使用的 FZS 能力、效果。
 */
const CASES = [
  {
    industry: '证券',
    title: '某证券公司核心交易系统灾备',
    challenge: '核心交易系统需从 Oracle 实时同步至同城灾备中心，RPO 要求小于 1 秒，日均处理数千万笔交易数据。',
    solution: '采用 FZS 点对点部署模式，基于 Redo Log 捕获实现实时增量同步，通过专线直连确保极低延迟。',
    result: '同步延迟稳定在 500ms 以内，灾备切换演练 RTO 小于 30 秒，满足监管合规要求。',
  },
  {
    industry: '期货',
    title: '某期货公司风控数据实时集成',
    challenge: '交易所对接、清算、风控系统分别使用 MySQL 与 Oracle，风控系统需毫秒级感知各系统状态变化。',
    solution: '采用 FZS 多链路并行模式，将多个源端数据实时汇聚至风控数据库，保障风控信号的实时性。',
    result: '各链路同步延迟低于 200ms，异常仓位预警响应时间缩短 80%。',
  },
  {
    industry: '基金',
    title: '某基金管理公司估值数据实时同步',
    challenge: '估值系统与报送平台之间数据孤岛严重，每日估值完成后依赖人工导入，数据滞后风险高。',
    solution: '利用 FZS 全增量同步能力，建立估值数据库到报送平台的实时增量链路，消除人工干预环节。',
    result: '日均同步 500 万条估值记录，数据就绪时间从 T+1 缩短至分钟级，人工导入步骤完全消除。',
  },
  {
    industry: '医疗',
    title: '某三甲医院跨院区 HIS 数据同步',
    challenge: '集团下属 4 个院区 HIS 系统独立部署，需将数据实时汇聚至集团级数据中心，保障统一调度与管理。',
    solution: '采用 FZS 中间机部署模式，4 条链路并行同步各院区 Oracle HIS 数据库至集团 PostgreSQL。',
    result: '跨院区数据延迟低于 2 秒，集团级实时统计报表上线，日均同步记录超 300 万条。',
  },
];

export default function CasesPage() {
  useReveal();
  return (
    <Layout
      title="客户案例"
      description="九桥同步 FZS 数据同步平台客户案例 — 证券容灾、期货风控集成、基金估值同步与医疗数据汇聚等实战场景。"
    >
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>客户案例</h1>
          <p className={styles.heroSubtitle}>
            来自证券、期货、基金与医疗等行业的典型实施场景，了解 FZS 如何应对真实的数据同步挑战
          </p>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.caseList} data-reveal="" data-stagger="">
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

        <section className={styles.sectionBg} data-reveal="">
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
