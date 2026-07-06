import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './contact.module.css';
import useReveal from '../hooks/useReveal';

const LEAD_REP = { name: '黄博康', img: '/img/contact/黄博康.png', position: '总经理助理' };

const REPS = [
  { name: '王勇', img: '/img/contact/王勇.png', position: '商务经理' },
  { name: '王雪峰', img: '/img/contact/王雪峰.png', position: '商务经理' },
  { name: '田雨', img: '/img/contact/田雨.png', position: '商务经理' },
];

export default function ContactPage() {
  useReveal();
  return (
    <Layout
      title="联系我们"
      description="联系九桥同步 — 获取 FZS 数据同步平台的试用授权或商务咨询。"
    >
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>联系我们</h1>
          <p className={styles.heroSubtitle}>
            申请试用授权、咨询商务合作或获取技术支持 — 我们的团队快速响应您的需求
          </p>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle} data-reveal="">商务咨询</h2>
            <div className={styles.repGridLead}>
              <div className={styles.repCard}>
                <img
                  src={LEAD_REP.img}
                  alt={`${LEAD_REP.name} 企业微信二维码`}
                  className={styles.repQr}
                  width="160"
                  height="160"
                  loading="lazy"
                  decoding="async"
                />
                <p className={styles.repName}>{LEAD_REP.name}</p>
                <p className={styles.repPosition}>{LEAD_REP.position}</p>
              </div>
            </div>
            <div className={styles.repGrid}>
              {REPS.map(({ name, img, position }) => (
                <div key={name} className={styles.repCard}>
                  <img
                    src={img}
                    alt={`${name} 企业微信二维码`}
                    className={styles.repQr}
                    width="160"
                    height="160"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className={styles.repName}>{name}</p>
                  <p className={styles.repPosition}>{position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionBg} data-reveal="">
          <div className={styles.sectionInner}>
            <div className={styles.docBanner}>
              <div className={styles.docBannerText}>
                <h2 className={styles.docBannerTitle}>产品文档</h2>
                <p className={styles.docBannerDesc}>
                  深入了解产品功能与部署方案，找到最适合您的实施路径
                </p>
              </div>
              <Link to="/docs" className={styles.docBannerLink}>
                查阅产品文档 →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section} data-reveal="">
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>公司信息</h2>
            <dl className={styles.infoList}>
              <div className={styles.infoItem}>
                <dt>公司名称</dt>
                <dd>北京九桥同步软件有限公司</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>邮箱</dt>
                <dd><a href="mailto:contact@tb-soft.net">contact@tb-soft.net</a></dd>
              </div>
              <div className={styles.infoItem}>
                <dt>官网</dt>
                <dd><a href="https://9bridges.cn/" target="_blank" rel="noopener noreferrer" aria-label="9bridges.cn（在新标签页中打开）">9bridges.cn</a></dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </Layout>
  );
}
