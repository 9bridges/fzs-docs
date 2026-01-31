// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '九桥同步 FZS 文档中心',
  tagline: '专业级数据同步与灾备解决方案',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.9bridges.cn/',
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
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  markdown: {
    mermaid: true
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        pages: false,
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
        { name: 'keywords', content: '数据同步, 容灾备份, 异构数据库, FZS, CDC, 九桥同步' },
        { name: 'description', content: '九桥同步 FZS 数据同步平台官方文档 - 提供产品部署、操作指南及 API 参考。' }
      ],
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
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
        title: '九桥同步 FZS 文档中心',
        hideOnScroll: true,
        logo: {
          alt: 'FZS',
          src: 'img/favicon.ico',
        },
        items: [
          {
            href: 'https://github.com/9bridges/fzs-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '产品文档',
            items: [
              {
                label: '快速开始',
                to: '/quick-start',
              },
              {
                label: '用户手册',
                to: '/fzs-web',
              },
              {
                label: '支持列表',
                to: '/intro/appendix/db-support',
              },
            ],
          },
          {
            title: '资源与支持',
            items: [
              {
                label: '公司官网',
                href: 'https://9bridges.cn/',
              },
              {
                label: '联系我们',
                href: 'mailto:contact@tb-soft.net',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/9bridges/fzs-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 北京九桥同步软件有限公司 Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'DJ0WND5D5M',

        // Public API key: it is safe to commit it
        apiKey: 'd328ec667f30577e8088b69a5294df27',
        indexName: '9bridges',
      },
    }),
}

module.exports = config
