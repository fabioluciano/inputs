// v2.0
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";

import DefaultLayout from "~/layouts/Default.vue";
import RadarChart from "~/components/RadarChart.vue";
import minifyTheme from "minify-css-string";

export default function(Vue, { appOptions, head }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap",
  });

  Vue.use(Vuetify);

  const opts = {
    icons: {
      iconfont: "mdi",
    },
    theme: {
      options: { minifyTheme },
      themes: {
        light: {
          primary: colors.blue.darken2,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
        },
        dark: {
          primary: colors.blue.lighten3,
        },
      },
    },
  };
  appOptions.vuetify = new Vuetify(opts);

  Vue.component("Layout", DefaultLayout);
  Vue.component("RadarChart", RadarChart);
}
