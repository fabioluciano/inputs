const nodeExternals = require("webpack-node-externals");

module.exports = function(api) {
  api.loadSource(async (store) => {
    store.addMetadata("mainMenuItems", [
      { name: "Home", icon: "mdi-home", link: "/" },
      {
        name: "Keyboards & PCB",
        icon: "mdi-keyboard",
        subItems: [
          {
            name: "Keyboards",
            icon: "mdi-cog",
            link: "/keyboards",
            description:
              "Laboris do enim excepteur ex officia. Dolor sunt amet excepteur duis cupidatat.",
          },
          {
            name: "Switches",
            icon: "mdi-cog",
            link: "/switches",
            description:
              "Laboris do enim excepteur ex officia. Dolor sunt amet excepteur duis cupidatat.",
          },
          {
            name: "Keycaps",
            icon: "mdi-crop-landscape",
            link: "/keycaps",
            description:
              "Laboris do enim excepteur ex officia. Dolor sunt amet excepteur duis cupidatat.",
          },
        ],
      },
      {
        name: "Pointers",
        icon: "mdi-mouse",
        link: "/pointers",
      },
      { name: "About", icon: "mdi-help-circle", link: "/about" },
    ]);
  });

  api.createPages(({ createPage }) => {});

  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/],
        }),
      ]);
    }
  });
};
