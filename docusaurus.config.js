// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: ['docusaurus-plugin-sass',  [
    "docusaurus-plugin-generate-llms-txt",
    {
      outputFile: "llms.txt", // defaults to llms.txt if not specified
    },
  ],
[
  'docusaurus-plugin-copy-page-button',
  {
    customStyles: {
      container: {
        className: 'copyPageButtonContainer',
      },
      button: {
        style: { marginLeft: '8px' },
      },
    },
  },
],
[
  '@docusaurus/plugin-client-redirects',
  {
    redirects: [
      // old name (Verified Asset Oracle / VAO) -> Proof of Asset
      { from: '/Products/VerifiedAssetOracle/verifiedAssetOracle', to: '/Products/proofOfAsset/' },
      { from: '/Products/VerifiedAssetOracle/data', to: '/Products/proofOfAsset/data' },
      { from: '/Products/VerifiedAssetOracle/glossary', to: '/Products/proofOfAsset/glossary' },
      { from: '/Products/VerifiedAssetOracle/proofOfAssets', to: '/Products/proofOfAsset/proofOfAssetOverview' },
      { from: '/Products/VerifiedAssetOracle/vaoDashboard', to: '/Products/proofOfAsset/proofOfAssetDashboard' },
      { from: '/Products/VerifiedAssetOracle/integratingPOAs/adapters', to: '/Products/proofOfAsset/integratingPOAs/adapters' },
      { from: '/Products/VerifiedAssetOracle/integratingPOAs/routers', to: '/Products/proofOfAsset/integratingPOAs/routers' },
      { from: '/Developers/Guides/voaIntegrations', to: '/Developers/Guides/proofOfAssetIntegrations' },
      { from: '/Resources/FAQ/Vao', to: '/Resources/FAQ/proofOfAsset' },
      { from: '/Resources/FAQ/VaoDash', to: '/Resources/FAQ/proofOfAssetDashboard' },
    ],
  },
],
  ],
  title: 'Chronicle Docs',
  tagline: 'Cost-efficient. Verifiable Data.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.chroniclelabs.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chronicleprotocol', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chronicleprotocol/documentation/tree/main/',
          // Hide specific docs/categories from the sidebar without removing
          // the underlying pages (still reachable via direct link).
          sidebarItemsGenerator: async ({
            defaultSidebarItemsGenerator,
            ...args
          }) => {
            const items = await defaultSidebarItemsGenerator(args);
            const HIDDEN_CATEGORY_LABELS = ['Hackathons'];
            const HIDDEN_DOC_IDS = ['Intro/mission'];
            function prune(sidebarItems) {
              return sidebarItems
                .filter((item) => {
                  if (
                    item.type === 'category' &&
                    HIDDEN_CATEGORY_LABELS.includes(item.label)
                  ) {
                    return false;
                  }
                  if (
                    item.type === 'doc' &&
                    HIDDEN_DOC_IDS.includes(item.id)
                  ) {
                    return false;
                  }
                  return true;
                })
                .map((item) =>
                  item.type === 'category'
                    ? { ...item, items: prune(item.items) }
                    : item,
                );
            }
            return prune(items);
          },
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/chronicleprotocol/documentation/tree/main/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/chronicle-social-card.png',
      announcementBar: {
        id: 'discordLink',
        content:
          '<strong>🚀 Join the community on <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/H9rnwcU8p4">Discord!</a></strong> 🚀',
        backgroundColor: '#2FD05B',
        textColor: '#1C1E21',
        isCloseable: false,
      },
      mermaid: {
        theme: { light: 'neutral' },
      },
      navbar: {
        title: 'Chronicle Docs',
        logo: {
          alt: 'Chronicle Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'Developers/Guides/whitelistAddress',
            position: 'left',
            label: 'Developers',
          },
          {
            type: 'doc',
            docId: 'validators/quickstart',
            position: 'left',
            label: 'Validators',
          },
          {
            href: 'https://chroniclelabs.org/dashboard',
            label: 'Dashboard',
            position: 'right',
          },
          {
            href: 'https://github.com/chronicleprotocol',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Developers',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chronicleprotocol',
              },
              {
                label: 'Bug Bounty',
                href: 'https://cantina.xyz/bounties/5240b7c7-6fec-4902-bec0-8cad12f14ec4',
              },
              {
                label: 'Audits',
                href: 'https://github.com/chronicleprotocol/scribe/tree/main/audits',
              },
              {
                label: 'Careers',
                href: 'https://chroniclelabs.org/careers#open_roles',
              },
                {
                label: 'LLM Docs',
                href: 'https://docs.chroniclelabs.org/llms.txt',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/H9rnwcU8p4',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ChronicleLabs',
              },
              {
                label: 'Newsletter',
                href: 'https://chroniclebuilders.substack.com/embed',
              },
              {
                label: 'Chronicle Points',
                href: 'https://chroniclelabs.org/blog/chronicle-points-have-arrived',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://chroniclelabs.org',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@ChronicleProtocol',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/chronicleprotocol',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/chronicleprotocol',
              },
              {
                label: 'Farcaster',
                href: 'https://warpcast.com/chroniclelabs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chronicle Labs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '6L542OJ1F7',
        apiKey: '8f49f144bcf82c3ee9473ccdf4b62abe',
        indexName: 'chroniclelabs',
        contextualSearch: false,
      },
      
    }),
};

export default config;
