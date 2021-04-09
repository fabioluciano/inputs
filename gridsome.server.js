const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    createPage({
      path: '/keyboards',
      component: './src/templates/Keyboards.vue',
      context: {
        title: "Keyboards"
      }
    });

    createPage({
      path: '/switches',
      component: './src/templates/Switches.vue',
      context: {
        title: "Switches"
      }
    });
  })

  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })
}
