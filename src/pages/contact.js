import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './contact.module.css';

const REPS = [
  { name: '王勇', img: '/img/contact/王勇.png' },
  { name: '王雪峰', img: '/img/contact/王雪峰.png' },
  { name: '田雨', img: '/img/contact/田雨.png' },
];

export default function ContactPage() {
  return (
    <Layout
      title="联系我们"
      description="联系九桥同步 — 获取 FZS 数据同步平台的试用授权或商务咨询。"
    >
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>联系我们</h1>
          <p className={styles.heroSubtitle}>
            了解 FZS 数据同步平台、申请试用授权或洽谈合作，我们的商务团队随时为您服务
          </p>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>商务咨询</h2>
            <div className={styles.repGrid}>
              {REPS.map(({ name, img }) => (
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionBg}>
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

        <section className={styles.section}>
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
                <dd><a href="https://9bridges.cn/" target="_blank" rel="noopener noreferrer">9bridges.cn</a></dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </Layout>
  );
}
