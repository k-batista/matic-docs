const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Polygon Wiki",
  tagline: "The official documentation for all Polygon products.",
  url: "https://k-batista.github.io",
  baseUrl: "/matic-docs/",
  favicon: "img/logo-round-purple.png",
  organizationName: "Polygon Labs",
  projectName: "matic-docs",
  customFields: {
    description: "Build your next blockchain app on Polygon.",
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    // locales: ['en', 'ko', 'de', 'es', 'fr', 'it', 'ja', 'pt', 'br', 'hi', 'id', 'ru', 'th', 'tl', 'tr', 'vi'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
        calendar: 'gregory',
        path: 'ko',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
        htmlLang: 'de-DE',
        calendar: 'gregory',
        path: 'de',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
        calendar: 'gregory',
        path: 'es',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
        calendar: 'gregory',
        path: 'fr',
      },
      it: {
        label: 'Italiano',
        direction: 'ltr',
        htmlLang: 'it-IT',
        calendar: 'gregory',
        path: 'it',
      },
      ja: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        calendar: 'gregory',
        path: 'ja',
      },
      pt: {
        label: 'Português',
        direction: 'ltr',
        htmlLang: 'pt-PT',
        calendar: 'gregory',
        path: 'pt',
      },
      br: {
        label: 'Português (Brasil)',
        direction: 'ltr',
        htmlLang: 'pt-BR',
        calendar: 'gregory',
        path: 'br',
      },
      hi: {
        label: 'हिंदी',
        direction: 'ltr',
        htmlLang: 'hi-IN',
        calendar: 'gregory',
        path: 'hi',
      },
      id: {
        label: 'Bahasa Indonesia',
        direction: 'ltr',
        htmlLang: 'id-ID',
        calendar: 'gregory',
        path: 'id',
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
        calendar: 'gregory',
        path: 'ru',
      },
      th: {
        label: 'ภาษาไทย',
        direction: 'ltr',
        htmlLang: 'th-TH',
        calendar: 'gregory',
        path: 'th',
      },
      tl: {
        label: 'Tagalog',
        direction: 'ltr',
        htmlLang: 'tl-PH',
        calendar: 'gregory',
        path: 'tl',
      },
      tr: {
        label: 'Türkçe',
        direction: 'ltr',
        htmlLang: 'tr-TR',
        calendar: 'gregory',
        path: 'tr',
      },
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
        htmlLang: 'vi-VN',
        calendar: 'gregory',
        path: 'vi',
      },
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/',
            from: ['/en/latest', '/en/'],
          },
          {
            to: '/docs/contribute/orientation',
            from: '/docs/pos/orientation',
          },
          {
            to: '/docs/contribute/community-maintainers',
            from: '/docs/pos/community-maintainers',
          },
          {
            to: '/docs/contribute/bug-bountry-program',
            from: '/docs/pos/bug-bountry-programs',
          },
          {
            to: '/docs/develop/meta-transactions/meta-transactions',
            from: '/docs/develop/metatransactions/metatransactions-biconomy',
          },
          {
            to: '/docs/develop/meta-transactions/meta-transactions',
            from: '/docs/develop/metatransactions/metatransactions-gsn',
          },
          {
            to: '/docs/develop/meta-transactions/network-agnostics',
            from: '/docs/develop/metatransactions/network-agnostics',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/cexs-wallets',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/fiat-on-ramp',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/fiat-ramps'
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/cexs-wallets/cexs',
          },
          {
            to: '/docs/develop/wallets/polygon-web-wallet/web-wallet-v3-guide',
            from: '/docs/develop/wallets/polygon-web-wallet/web-wallet-v2-guide',
          },
          {
            to: '/docs/faq/general-faq/',
            from: '/docs/category/faq/'
          },
          {
            to: '/docs/maintain/validate/kb/known-issues',
            from: '/docs/maintain/validate/faq/known-issues'
          },
          {
            to: '/docs/maintain/validate/kb/how-to',
            from: '/docs/maintain/validate/faq/how-to'
          },
          {
            to: '/docs/faq/validator-faq',
            from: '/docs/maintain/validate/faq/validator-faq'
          },
          {
            to: '/docs/maintain/validator/responsibilities',
            from: '/docs/maintain/validate/validator-responsibilities'
          },
          {
            to: '/docs/operate/technical-requirements',
            from: '/docs/develop/network-details/technical-requirements'
          },
          {
            to: '/docs/operate/snapshot-instructions-heimdall-bor',
            from: '/docs/develop/network-details/snapshot-instructions-heimdall-bor'
          },
          {
            to: '/docs/operate/access-node-alchemy',
            from: '/docs/develop/network-details/access-node-alchemy'
          },
          {
            to: '/docs/operate/full-node-deployment',
            from: '/docs/develop/network-details/full-node-deployment'
          },
          {
            to: '/docs/operate/full-node-binaries',
            from: '/docs/develop/network-details/full-node-binaries'
          },
          {
            to: '/docs/operate/full-node-docker',
            from: '/docs/develop/network-details/full-node-docker'
          },
          {
            to: '/docs/operate/full-node',
            from: '/docs/develop/network-details/full-node'
          },

        ],
        createRedirects: function (existingPath) {
          if (existingPath.startsWith('/docs/validate/')) {
            return [existingPath.replace('/docs/maintain/')
            ];
          }
        },
      },
    ],
  ],
  onBrokenLinks: 'log',
  themeConfig: {
    metadata: [{ name: 'description', content: 'Welcome to Polygon Wiki, the official documentation for Polygon. Learn about Polygon and its suite of Ethereum-scaling solutions.' }],
    announcementBar: {
      id: 'banner',
      content: `
        <div class="announcement-bar">
          Infinitely scaling Ethereum with Zero-Knowledge technology. 
            Polygon zkEVM Mainnet Beta is now Live! 
            <a href="https://zkevm.polygon.technology/develop" class="announcement-link" style="color: #ffffff;">Start Building</a>
        </div>
      `,
      textColor: '#ffffff',
      isCloseable: true,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    category: {
      emoji: ''
    },
    footer: {
      style: 'light',
      links: [
        {
          title: "Resources",
          items: [
            {
              href: 'https://support.polygon.technology/support/home',
              label: 'Polygon Support',
            },
            {
              label: "Advocate Program",
              href: "https://polygon.technology/advocate-program/"
            },
            {
              label: "Polygon Funds",
              href: "https://polygon.technology/funds/"
            },
            {
              label: "Bug Bounty",
              href: "https://immunefi.com/bounty/polygon/"
            },
            {
              href: 'https://www.dappstorekit.io/',
              label: 'Build your own dApp',
              target: '_blank',
              rel: null,
              position: 'right',
            },
          ]
        },
        {
          title: "Reference",
          items: [
            {
              label: "Whitepaper",
              href: "https://github.com/maticnetwork/whitepaper/"
            },
            {
              label: "Lightpaper",
              href: "https://polygon.technology/lightpaper-polygon.pdf"
            },
            {
              label: "zkEVM",
              href: "https://zkevm.polygon.technology"
            },
            {
              label: "Miden",
              href: "docs/miden/design/main"
            },
          ]
        },
        {
          title: "Native dApps",
          items: [
            {
              href: 'https://wallet.polygon.technology',
              label: 'PoS Wallet',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://staking.polygon.technology/',
              label: 'PoS Staking',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://polygonscan.com/',
              label: 'PoS Explorer',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://explorer.hermez.io/',
              label: 'Hermez',
              target: '_blank',
              rel: null,
            },
          ],
        },
        {
          title: "Polygon Labs",
          items: [
            {
              label: "About Us",
              href: "https://polygon.technology/about/"
            },
            {
              label: "Contact",
              href: "https://polygon.technology/contact-us/"
            },
            {
              label: "Blogs",
              href: "https://blog.polygon.technology/"
            },
            {
              label: "Brand Kit",
              href: "https://www.notion.so/polygontechnology/Brand-Resources-2cd18ae436584e98a6c5aae56db73058/"
            },
          ]
        },
        {
          title: "Community",
          items: [
            {
              href: 'https://twitter.com/0xPolygon',
              label: 'Twitter',
            },
            {
              href: 'https://discord.com/invite/0xPolygon',
              label: 'Discord',
            },
            {
              href: 'https://forum.polygon.technology/',
              label: 'Forum',
            },
            {
              href: 'https://www.reddit.com/r/0xPolygon/',
              label: 'Reddit',
            },
            {
              href: 'https://t.me/polygonofficial',
              label: 'Telegram',
            },
          ]
        },
      ],
      logo: {
        alt: 'Polygon Logo',
        src: 'img/polygon-labs.png',
        href: 'https://polygon.technology/',
      },
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    image: 'polygon-logo.png',
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
      additionalLanguages: ['solidity']
    },
    algolia: {
      indexName: "matic_developer",
      appId: '16JCDEHCCN',
      apiKey: "d172fe1ed43468315f82bd9679515131",
      contextualSearch: true,
      algoliaOptions: {
        attributesToSnippet: ['content:20'],
      },
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Polygon logo",
        src: "/img/polygon-logo.png",
        srcDark: "/img/polygon-logo.png",
        // width: 100,
        // height: 500,
        // href: 'https://wiki.polygon.technology/', // default to siteConfig.baseUrl
        target: "_self", // by default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one)
      },
      items: [
        {
          to: 'https://university.polygon.technology/',
          label: 'Polygon University',
          target: '_blank',
          rel: null,
        },
        {
          label: "Build",
          position: "left",
          items: [
            {
              href: '/docs/develop/getting-started',
              label: 'Build on PoS',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/category/build-a-supernet',
              label: 'Build a Supernet',
              target: '_self',
              rel: null,
            },
            {
              href: 'https://zkevm.polygon.technology/docs/develop',
              label: 'Build on zkEVM',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/develop/ethereum-polygon/matic-js/get-started',
              label: 'Matic SDK',
              target: '_self',
              rel: null,
            },

            /* Removing these links till finalization
            {
              href: '/docs/supernets/overview',
              label: 'Supernets',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/miden/design/main',
              label: 'Miden',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/polygonid/verifier/verifier-overview',
              label: 'ID',
              target: '_self',
              rel: null,
            },
          */
          ],
        },
        {
          label: "Maintain",
          position: "left",
          items: [
            {
              to: '/docs/maintain/govern/governance-pos',
              label: 'Governance',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/operate/technical-requirements',
              label: 'Run a PoS node',
              target: '_self',
              rel: null,
            },
            {
              href: 'https://zkevm.polygon.technology/setup-local-node',
              label: 'Run a zkEVM node',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/miden/user_docs/usage',
              label: 'Run a Miden VM',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "Protocols",
          position: "left",
          items: [
            {
              href: '/docs/pos/polygon-architecture',
              label: 'PoS',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/supernets',
              label: 'Supernets',
              target: '_self',
              rel: null,
            },
            {
              href: 'https://zkevm.polygon.technology',
              label: 'zkEVM',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/miden',
              label: 'Miden',
              target: '_self',
              rel: null,
            },
            {
              href: 'https://0xpolygonid.github.io/tutorials/',
              label: 'ID',
              target: '_self',
              rel: null,
            },
          ],
        },

        /* we should link out to the technical specifications for each protocol as reference material
        {
          label: "Specs",
          position: "left",
          items: [
                  {
                    href: '/docs/pos/polygon-architecture',
                    label: 'PoS',
                    target: '_self',
                    rel: null,
                  },
                  {
                    href: '/docs/zkEVM/introduction/',
                    label: 'zkEVM',
                    target: '_self',
                    rel: null,
                  },
                  {
                    href: '/docs/supernets/overview',
                    label: 'Supernets',
                    target: '_self',
                    rel: null,
                  },
                  {
                    href: '/docs/miden/intro/main',
                    label: 'Miden',
                    target: '_self',
                    rel: null,
                  },
                  {
                    href: '/docs/polygonid/overview',
                    label: 'Polygon ID',
                    target: '_self',
                    rel: null,
                  },
                ],
        }, */
        /*
        {
          label: "Contribute",
          position: "left",
          items: [
            {
              href: '/docs/category/become-a-contributor',
              label: 'Guidelines',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/category/style-guide',
              label: 'Style Guide',
              target: '_self',
              rel: null,
            },
            {
              href: 'https://immunefi.com/bounty/polygon/',
              label: 'Bug Bounty',
              target: '_blank',
              rel: null,
            }
          ]
        },
        */
        {
          label: "Infra Providers",
          position: "right",
          items: [
            {
              href: 'https://www.alchemy.com/polygon',
              label: 'Alchemy',
              "target": "_blank",
              rel: null,
            },
            {
              "href": "https://www.ankr.com/",
              "label": "Ankr",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://platform.arkhamintelligence.com/",
              "label": "Arkham",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://blastapi.io/",
              "label": "Blast (Bware Labs)",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://blockpi.io/",
              "label": "BlockPI",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://www.blockspaces.com/web3-infrastructure",
              "label": "BlockSpaces",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://www.chainnodes.org/",
              "label": "Chainnodes",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://chainstack.com/build-better-with-polygon/",
              "label": "Chainstack",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://datahub.figment.io",
              "label": "DataHub (Figment)",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://getblock.io/en/",
              "label": "Getblock",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://infura.io",
              "label": "Infura",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://rpc.maticvigil.com/",
              "label": "MaticVigil",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://moralis.io",
              "label": "Moralis",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://nodereal.io",
              "label": "NodeReal",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://www.portal.pokt.network/",
              "label": "Pocket Network",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://www.quicknode.com/chains/matic",
              "label": "QuickNode",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://docs.settlemint.com/docs/connect-to-a-polygon-node",
              "label": "SettleMint",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://docs.watchdata.io/blockchain-apis/polygon-api",
              "label": "WatchData",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://nownodes.io/nodes/polygon-matic",
              "label": "NOWNodes",
              "target": "_blank",
              "rel": null
            },
            {
              "href": "https://kriptonio.com/",
              "label": "Kriptonio",
              "target": "_blank",
              "rel": null
            }
          ]
        },
        {
          label: "FAQs",
          position: "right",
          items: [
            {
              to: '/docs/faq/general-faq/',
              label: 'PoS FAQ',
              target: '_self',
              rel: null,
            },
            {
              to: '/docs/supernets/supernets-faq',
              label: 'Supernet FAQ',
              target: '_self',
              rel: null,
            },
            {
              to: 'https://zkevm.polygon.technology/faq/zkevm-general-faq',
              label: 'zkEVM FAQ',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          href: "https://github.com/maticnetwork",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        /* let's disable this till we launch translations again
        {
          type: 'localeDropdown',
          position: 'right',
        },
        */
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/maticnetwork/matic-docs/tree/master/",
          path: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false, throwOnError: true, globalGroup: true }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-LLNECLTBDN',
          anonymizeIP: true,
        },
      },
      // "@docuaurus/plugin-content-pages",
      // {
      //   path: "src/pages",
      //   routeBasePath: "",
      //   include: ["**/*.{js,jsx}"],
      // },
      // "@docusaurus/plugin-google-analytics",
      // "@docusaurus/plugin-sitemap",
      // {
      //   cacheTime: 600 * 1000, // 600 sec - cache purge period
      //   changefreq: "weekly",
      //   priority: 0.5,
      // },
    ],
  ],
};