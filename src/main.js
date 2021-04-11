// v2.0
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import DefaultLayout from '~/layouts/Default.vue'
import RadarChart from '~/components/RadarChart.vue';

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap',
  });
  
  const opts = {
    icons: {
      iconfont: "mdi",
    },
  };
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);
  Vue.component('Layout', DefaultLayout);
  Vue.component("RadarChart", RadarChart);
}