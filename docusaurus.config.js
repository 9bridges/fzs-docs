// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '九桥同步',
  tagline: '国内领先的数据同步方案供应商',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://9bridges.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '9bridges', // Usually your GitHub org/user name.
  projectName: 'fzs-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['zh', 'en'],
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Old docs-at-root paths → new /docs prefix
          { from: '/quick-start', to: '/docs/quick-start' },
          { from: '/fzs-web', to: '/docs/fzs-web' },
          { from: '/fzs-web-server', to: '/docs/fzs-web-server' },
          { from: '/intro', to: '/docs/intro' },
          { from: '/intro/appendix/db-support', to: '/docs/intro/appendix/db-support' },
          { from: '/changelog', to: '/docs/changelog' },
        ],
      },
    ],
  ],

  headTags: [
    // Preload LCP hero image — start download before CSS parses
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/img/brand.png',
        as: 'image',
        type: 'image/png',
        fetchpriority: 'high',
      },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '北京九桥同步软件有限公司',
        alternateName: ['九桥同步', '9bridges', 'FZS'],
        url: 'https://9bridges.cn',
        logo: 'https://9bridges.cn/img/brand.png',
        description:
          '专注于数据同步、数据容灾与信创迁移的企业级软件服务商，支持 Oracle、MySQL、PostgreSQL、达梦、金仓、OceanBase 等 30+ 数据库的全增量异构实时同步。',
        email: 'contact@tb-soft.net',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'contact@tb-soft.net',
          areaServed: 'CN',
          availableLanguage: ['zh-Hans'],
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CN',
          addressLocality: '北京市',
        },
        sameAs: ['https://github.com/9bridges'],
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: '九桥同步',
        url: 'https://9bridges.cn',
        inLanguage: 'zh-Hans',
        publisher: { '@type': 'Organization', name: '北京九桥同步软件有限公司' },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://9bridges.cn/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      }),
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        pages: {},
        sitemap: {
          ignorePatterns: ['/404', '/search'],
        },
        theme: {
          customCss: require.resolve('./custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: '九桥同步, 数据同步, 容灾备份, 异构数据库, FZS, CDC, 数据库迁移' },
        { name: 'description', content: '九桥同步 — 专业级实时数据同步与灾备解决方案。支持 Oracle、MySQL、PostgreSQL 等 30+ 数据库的全增量异构同步。' },
        { property: 'og:type', content: 'website' }
      ],
      image: 'img/brand.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      navbar: {
        title: '',
        hideOnScroll: true,
        logo: {
          alt: '九桥同步',
          src: 'img/brand.png',
          style: { height: '28px' },
        },
        items: [
          { to: '/product', label: '产品', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: '文档',
            position: 'left',
          },
          { to: '/cases', label: '案例', position: 'left' },
          { to: '/about', label: '关于', position: 'left' },
          { to: '/contact', label: '联系我们', position: 'left' },
          {
            href: 'https://github.com/9bridges',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '产品',
            items: [
              { label: '产品介绍', to: '/product' },
              { label: '支持数据库', to: '/docs/intro/appendix/db-support' },
              { label: '客户案例', to: '/cases' },
            ],
          },
          {
            title: '文档',
            items: [
              { label: '快速开始', to: '/docs/quick-start' },
              { label: '用户手册', to: '/docs/fzs-web' },
              { label: 'API 参考', to: '/docs/fzs-web-server' },
            ],
          },
          {
            title: '公司',
            items: [
              { label: '关于我们', to: '/about' },
              { label: '联系我们', to: '/contact' },
              { label: 'GitHub', href: 'https://github.com/9bridges' },
            ],
          },
        ],
        logo: {
          alt: '九桥同步',
          src: 'img/brand.png',
          href: '/',
          width: 140,
        },
        copyright: `Copyright © ${new Date().getFullYear()} 北京九桥同步软件有限公司`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      zoom: {
        selector: 'article img',
        background: {
          light: 'rgba(0, 0, 0, 0.6)',
          dark: 'rgba(0, 0, 0, 0.8)',
        },
        config: {
          // Options passed directly to medium-zoom
          margin: 24,
          scrollOffset: 100,
        },
      },
    }),
}

module.exports = config
