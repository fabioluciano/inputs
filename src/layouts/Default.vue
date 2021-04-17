<template>
  <v-app id="inspire">
    <Header :menu_items="menu_items" />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
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
    return {
      menu_items: [
        { title: "Home", icon: "mdi-home", link: "/" },
        { title: "Keyboards", icon: "mdi-keyboard", link: "/keyboards" },
        { title: "Switches", icon: "mdi-cog", link: "/switches" },
        { title: "Keycaps", icon: "mdi-crop-landscape", link: "/keycaps" },
        { title: "Input Devices", icon: "mdi-mouse", link: "/input-devices" },
        { title: "About", icon: "mdi-help-circle", link: "/about" },
      ],
    };
  },
};
</script>

<style scoped>
.section-name {
  font-family: "Noto Sans", sans-serif !important;
}
</style>
