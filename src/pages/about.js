import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';
import useReveal from '../hooks/useReveal';

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
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>关于我们</h1>
          <p className={styles.heroSubtitle}>
            深耕数据同步领域十余年，为关键业务系统提供从灾备到信创迁移的基础设施支撑
          </p>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle} data-reveal="">我们的使命</h2>
            <p className={styles.missionText} data-reveal="">
              让企业数据流转<strong>安全、可靠、实时</strong>。
              我们为证券、期货、基金、医疗行业构建高性能、低侵入、易运维的数据同步系统，确保关键业务在灾难场景下持续运行。
            </p>
          </div>
        </section>

        <section className={styles.sectionBg}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle} data-reveal="">核心理念</h2>
            <div className={styles.valueGrid} data-reveal="" data-stagger="">
              {VALUES.map(({ title, desc }) => (
                <div key={title} className={styles.valueCard}>
                  <h3 className={styles.valueTitle}>{title}</h3>
                  <p className={styles.valueDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle} data-reveal="">发展历程</h2>
            <div className={styles.timeline} data-reveal="">
              {MILESTONES.map(({ year, text }) => (
                <div key={year} className={styles.timelineItem}>
                  <span className={styles.timelineYear}>{year}</span>
                  <p className={styles.timelineText}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionBg}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle} data-reveal="">团队</h2>
            <p className={styles.teamPlaceholder} data-reveal="">
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
