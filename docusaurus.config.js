// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DsaDocs',
  tagline: 'Unlock the Power of DSA with DsaDocs: Your Ultimate Documentation Resource.',
  favicon: 'img/dsa.webp',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '#',
        },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DsaDocs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/dsa.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/codingPlatform/coding-platforms', label: 'Coding Platforms', position: 'left'},
          {
            to: '/skills/SkillsGrid', label: 'Skills', position: 'left'
          },
          
          {
            to: '/MockInterview/mock-interview', label: 'Mock Interview', position: 'left'
          },
          {
            to: '/ExploreDomain/explore-domain', label: 'Explore Domain', position: 'left'
          },
          {
            to: '/Miscellaneous/miscellaneous', label: 'Miscellaneous', position: 'left'
          },
          {
            to: '/Codolio/trackMain', label: 'Coding Profile', position: 'left'
          },
          {
            href: '#',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        apiKey: '587a5731b7e970560aa00be0657b42e6',
        indexName: 'hello-trex',
        appId: '2U67935JDX',
        contextualSearch: true,

      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/koshlesh-kumar2003/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/koshlesh_raj?utm_source=qr&igsh=MWFmcmNqYXRsdWk3NA==',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/channels/hacker_915',
              },
              {
                label: 'Gmail',
                href: 'mailto:koshleshkumar21@gmail.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Coding Platform',
                to: '/codingPlatform/coding-platforms',
              },
              {
                label: 'Home',
                href: 'https://dsa-docs-lemon.vercel.app/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DsaDocs, Made with Experiences.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
