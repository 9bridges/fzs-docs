import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
  return (
    <Layout title="页面未找到">
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-8 py-8 text-center">
        <h1 className="mb-2 text-[6rem] font-extrabold leading-none tracking-[-0.02em]">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">页面未找到</h2>
        <p className="mb-8 max-w-[36rem] text-emphasis-600">
          您访问的页面不存在，或者链接已经更新。您可以返回首页，或从快速开始重新进入文档。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="button button--primary button--lg motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px active:scale-[0.98]"
          >
            返回首页
          </Link>
          <Link
            to="/docs/quick-start"
            className="button button--secondary button--lg motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px active:scale-[0.98]"
          >
            快速开始
          </Link>
        </div>
      </main>
    </Layout>
  );
}

