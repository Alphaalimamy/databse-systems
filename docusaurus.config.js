// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LIMKOKWING UNIVERSITY OF CREATIVE TECHNOLOGY',
<<<<<<< HEAD
  tagline: 'TECH CONNECT',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://database-system.netlify.app/',
=======
  tagline: 'Database Systems: The Most Practical Course',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
>>>>>>> 6b1ccb7 (Initial commit)
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
<<<<<<< HEAD
  projectName: 'techConnect', // Usually your repo name.
=======
  projectName: 'docusaurus', // Usually your repo name.
>>>>>>> 6b1ccb7 (Initial commit)

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
<<<<<<< HEAD
            'https://database-system.netlify.app/',
=======
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
>>>>>>> 6b1ccb7 (Initial commit)
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
<<<<<<< HEAD
            'https://database-system.netlify.app/',
=======
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
>>>>>>> 6b1ccb7 (Initial commit)
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'Home',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
<<<<<<< HEAD
            label: 'Tutorials',
=======
            label: 'Tutorial',
>>>>>>> 6b1ccb7 (Initial commit)
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Prepared by:',
             items: [
              {
                label: 'Alpha Alimamy Kamara',
                href: 'https://www.linkedin.com/in/alpha-alimamy-kamara-5b5806103/',
              },
              {
                label: 'Alpha Omar Leigh',
                href: 'https://www.linkedin.com/in/alpha-alimamy-kamara-5b5806103/',
              }
              
            ],
            
          },
          {
            title: 'Django Girls'
            // items: [
            //   {
            //     label: 'Stack Overflow',
            //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //   },
            //   {
            //     label: 'Discord',
            //     href: 'https://discordapp.com/invite/docusaurus',
            //   },
            //   {
            //     label: 'Twitter',
            //     href: 'https://twitter.com/docusaurus',
            //   },
            // ],
          },



          
          {
            title: 'Database Systems',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
<<<<<<< HEAD

          
          {
            title: 'Django'
          },
=======
>>>>>>> 6b1ccb7 (Initial commit)
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Database Systems`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

<<<<<<< HEAD
// module.exports = {
//   url: 'https://endiliey.github.io', // Your website URL
//   baseUrl: '/',
//   projectName: 'endiliey.github.io',
//   organizationName: 'endiliey',
//   trailingSlash: false,

// };

module.exports = {
  url: 'https://alphaalimamy.github.io', // Your website URL
  baseUrl: '/',
  projectName: 'alphaalimamy.github.io',
  organizationName: 'alphaalimamy',
=======
module.exports = {
  url: 'https://endiliey.github.io', // Your website URL
  baseUrl: '/',
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
>>>>>>> 6b1ccb7 (Initial commit)
  trailingSlash: false,

};

<<<<<<< HEAD
// alphaalimamy.github.io
// https://github.com/Alphaalimamy/databse-systems/settings/pages
module.exports = {
  url: 'https://docusaurus-2.netlify.app', // Url to your site with no trailing slash
  baseUrl: '/', // Base directory of your site relative to your repo

};

=======
>>>>>>> 6b1ccb7 (Initial commit)
module.exports = config;
