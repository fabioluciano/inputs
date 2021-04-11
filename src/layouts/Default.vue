<template>
  <v-app id="inspire">
    <Header :menu_items="menu_items" />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-container>
              <v-row>
                <v-col>
                  <slot />
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        <v-btn plain href="/feed.xml" target="_blank">
          <v-icon>mdi-rss</v-icon>
          RSS
        </v-btn>
        <v-btn plain href="/sitemap.xml" target="_blank">
          <v-icon>mdi-code-tags</v-icon>
          Sitemap
        </v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<script>
import Header from "~/components/layout/Header.vue";

export default {
  components: {
    Header,
  },
  data: function() {
    return {
      menu_items: [
        { title: "Home", icon: "mdi-home", link: "/" },
        { title: "Keyboards", icon: "mdi-keyboard", link: "/keyboards" },
        { title: "Switches", icon: "mdi-cog", link: "/switches" },
      ],
    };
  },
};
</script>

<style scoped>
.section-name {
  font-family: 'Noto Sans', sans-serif !important;
}
</style>