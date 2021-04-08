<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h2">
            {{ $page.switchType.title }}
          </h2>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import KeyboardCarousel from "~/components/KeyboardCarousel";

export default {
  components: {
    KeyboardCarousel,
  },
  metaInfo() {
    return {
      title: this.$page.switchType.title,
    };
  },
};
</script>

<page-query>
query SwitchType ($id: ID!) {
  switchType: switchType (id: $id) {
    title,
    path
  }
}
</page-query>

<style lang="scss"></style>
