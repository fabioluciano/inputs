<template>
  <Layout :show-logo="false">
    <v-container>
      <v-row>
        <v-col cols="12">
          {{ $page.keyboard }}
          <KeyboardCarousel
            :keyboard="$page.keyboard"
            v-if="$page.keyboard.images.length > 0"
          />
          <h2 class="text-h2" v-if="$page.keyboard.images.length == 0">
            {{ $page.keyboard.title }}
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
      title: this.$page.keyboard.title,
    };
  },
};
</script>

<page-query>
query Keyboard ($id: ID!) {
  keyboard: keyboard (id: $id) {
    id,
    title,
    path,
    switch_socket {
      id
      title
    },
    images
  }
}
</page-query>

<style lang="scss"></style>
