<template>
  <v-app id="inspire">
    <Header :menu_items="menu_items" />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- <v-col cols="2" class="hidden-sm-and-down">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title> List Item {{ n }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col> -->

          <v-col>
            <v-container>
              <v-row v-if="$context.title">
                <v-col>
                  <v-sheet>
                    <h2 class="text-h2">{{ $context.title }}</h2>
                  </v-sheet>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-sheet rounded="lg">
                    <slot />
                  </v-sheet>
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
