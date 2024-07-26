// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/chronicle-social-card.png',
      announcementBar: {
        id: 'discordLink',
        content:
          '<strong>🚀 Join the community on <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/CjgvJ9EspJ">Discord!</a><strong> 🚀',
        backgroundColor: '#2FD05B',
        textColor: '#1C1E21',
        isCloseable: false,
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
                href:'https://cantina.xyz/bounties/5240b7c7-6fec-4902-bec0-8cad12f14ec4',
              },
              {
                label: 'Audits',
                href:'https://github.com/chronicleprotocol/scribe/tree/main/audits',
              },
              {
                label: 'Careers',
                href:'https://chroniclelabs.org/careers#open_roles',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/CjgvJ9EspJ',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ChronicleLabs',
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
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://chroniclelabs.org',
              },
              {label: 'YouTube', 
              href: 'https://www.youtube.com/@ChronicleProtocol'
              },
              {
                label: 'Telegram',
                href: 'https://t.me/chronicleprotocol',
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
