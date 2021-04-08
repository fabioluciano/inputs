module.exports = {
  siteName: 'Inputs',
  siteDescription: 'A list of all opensource/proprietary inputs avaliable',
  siteUrl: 'https://inputs.fabioluciano.dev',

  templates: {
    Keyboard: '/keyboard/:title',
    Switch: '/switch/:title',
    SwitchBrand: '/switch-brand/:title',
    SwitchType: '/switch-type/:title'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Keyboard',
        path: 'content/keyboards/*.md',
        refs: {
          switch_socket: {
            typeName: 'SwitchSocket',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'SwitchType',
        path: 'content/switch-types/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Switch',
        path: 'content/switches/*.md',
        refs: {
          profile: {
            typeName: 'SwitchProfile',
            create: true
          },
          socket: {
            typeName: 'SwitchSocket'
          },
          type: {
            typeName: 'SwitchType',
            create: true
          },
          brand: {
            typeName: 'SwitchBrand',
            create: true
          },
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-XXXXXXXXX-X'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        include: ['/keyboard', '/keyboard/**']
      }
    },
    {
      use: '@microflash/gridsome-plugin-feed',
      options: {

        // (required) Provide GraphQL collection types
        contentTypes: ['Keyboard', 'Switch'],

        // (optional) Properties used by feed API
        // See https://github.com/jpmonette/feed#example for all options
        feedOptions: {
          title: 'My blog',
          description: 'My Personal blog on books, cookies and kittens'
        },

        // Available options with their default values

        // (optional) Options for feed formats
        // RSS is enabled by default
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: false,
          output: '/feed.atom'
        },
        json: {
          enabled: false,
          output: '/feed.json'
        },

        // (optional) number of items to include in a feed
        maxItems: 25,

        // (optional) an array of properties to be parsed as HTML
        // Converts relative URLs to absolute URLs
        // You can disable this by omitting the option
        htmlFields: ['content'],

        // (optional) appends a trailing slash to the URLs
        enforceTrailingSlashes: false,

        // (optional) a function to filter out the nodes
        // e.g., filter out all outdated posts, filterNodes: (node) => !!node.outdated
        filterNodes: (node) => true,

        // (optional) sets the properties on each feed item
        // See https://github.com/jpmonette/feed#example for all options
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          content: node.content
        })
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
