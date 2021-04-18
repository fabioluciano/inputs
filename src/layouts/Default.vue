<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="11">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
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
import Footer from "~/components/layout/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data: function() {
    return {};
  },
};
</script>

<style scoped>
.section-name {
  font-family: "Noto Sans", sans-serif !important;
}
</style>
