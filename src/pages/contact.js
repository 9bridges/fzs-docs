import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './contact.module.css';

const CHANNELS = [
  {
    title: '商务咨询',
    desc: '获取试用授权、报价方案或合作洽谈',
    action: 'mailto:contact@tb-soft.net',
    actionLabel: 'contact@tb-soft.net',
    type: 'email',
  },
  {
    title: '技术支持',
    desc: '产品部署、运维、故障排查等技术问题',
    action: 'mailto:contact@tb-soft.net',
    actionLabel: 'contact@tb-soft.net',
    type: 'email',
  },
  {
    title: '产品文档',
    desc: '查阅部署指南、操作手册与 API 参考',
    action: '/docs',
    actionLabel: '前往文档中心',
    type: 'link',
  },
];

export default function ContactPage() {
  return (
    <Layout
      title="联系我们"
      description="联系九桥同步 — 获取 FZS 数据同步平台的试用授权、技术支持或商务咨询。"
    >
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>联系我们</h1>
          <p className={styles.heroSubtitle}>
            无论是试用申请、技术咨询还是商务合作，我们期待与您的每一次对话
          </p>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.channelGrid}>
              {CHANNELS.map(({ title, desc, action, actionLabel, type }) => (
                <div key={title} className={styles.channelCard}>
                  <h3 className={styles.channelTitle}>{title}</h3>
                  <p className={styles.channelDesc}>{desc}</p>
                  {type === 'email' ? (
                    <a href={action} className={styles.channelAction}>
                      {actionLabel}
                    </a>
                  ) : (
                    <Link to={action} className={styles.channelAction}>
                      {actionLabel}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionBg}>
          <div className={styles.sectionInner}>
            <div className={styles.qrSection}>
              <div className={styles.qrText}>
                <h2 className={styles.qrTitle}>扫码联系客服</h2>
                <p className={styles.qrDesc}>
                  扫描下方二维码添加 FZS 产品服务群，获取试用授权或与技术团队直接沟通。
                </p>
              </div>
              <div className={styles.qrImageWrap}>
                <img
                  src="/img/fzs-customer-service-qrcode.png"
                  alt="九桥同步客服微信二维码"
                  className={styles.qrImage}
                  width="200"
                  height="200"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.companyTitle}>公司信息</h2>
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
              {/* TODO: 添加办公地址与电话 */}
            </dl>
          </div>
        </section>
      </main>
    </Layout>
  );
}
