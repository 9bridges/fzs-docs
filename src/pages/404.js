import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
  return (
    <Layout title="页面未找到">
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '6rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.5rem' }}>
          404
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          页面未找到
        </h2>
        <p style={{ maxWidth: '36rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '2rem' }}>
          您访问的页面不存在或已被移动。请检查链接是否正确，或从以下入口重新导航。
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            to="/"
            className="button button--primary button--lg"
          >
            返回首页
          </Link>
          <Link
            to="/docs/quick-start"
            className="button button--secondary button--lg"
          >
            快速开始
          </Link>
        </div>
      </main>
    </Layout>
  );
}
