module.exports = {
  siteName: "Input Device Hub",
  siteDescription: "A list of all opensource/proprietary inputs available",
  siteUrl: "https://inputs.fabioluciano.dev",

  chainWebpack: (config) => {
    config.resolve.alias.set("@images", "@/assets/images");
  },
  templates: {
    Keyboard: "/keyboards/:title",
    Switch: "/switches/:title",
    SwitchType: "/switch-types/:title",
    Pointer: "/pointer/:title",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Keyboard",
        path: "content/keyboards/*.md",
        refs: {
          switch_socket: {
            typeName: "SwitchSocket",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "SwitchType",
        path: "content/switch-types/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Pointer",
        path: "content/pointers/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Switch",
        path: "content/switches/*.md",
        refs: {
          profile: {
            typeName: "SwitchProfile",
            create: true,
          },
          socket: {
            typeName: "SwitchSocket",
          },
          type: {
            typeName: "SwitchType",
            create: true,
          },
          brand: {
            typeName: "SwitchBrand",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-194127940-1",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        include: ["/keyboards", "/keyboards/**", "/switches", "/switches/**"],
      },
    },
    {
      use: "@microflash/gridsome-plugin-feed",
      options: {
        contentTypes: ["Keyboard", "Switch"],

        feedOptions: {
          title: "My blog",
          description: "My Personal blog on books, cookies and kittens",
        },
        rss: {
          enabled: true,
          output: "/feed.xml",
        },
        htmlFields: ["content"],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          content: node.content,
        }),
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`,
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
