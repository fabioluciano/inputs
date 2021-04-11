<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-h2 section-name grey--text text--darken-2">
            {{ $page.keyboard.title }}
          </h2>
        </v-col>
      </v-row>
      <v-rows v-if="$page.keyboard.details">
        <v-col>
          <h3 class="text-h3 mb-5 section-name grey--text text--darken-2">Details</h3>
          <KeyboardDetails :details="$page.keyboard.details" />
        </v-col>
      </v-rows>
      <v-row v-if="$page.keyboard.components.length > 0">
        <v-col>
          <h3 class="text-h3 mb-5 section-name grey--text text--darken-2">Components</h3>
          <v-card outlined class="rounded-xl pa-2">
            <KeyboardComponentsTable :components="$page.keyboard.components" />
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="$page.keyboard.images.length > 0">
        <v-col>
          <KeyboardCarousel :keyboard="$page.keyboard" />
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import KeyboardCarousel from "~/components/KeyboardCarousel";
import KeyboardComponentsTable from "~/components/KeyboardComponentsTable";
import KeyboardDetails from "~/components/KeyboardDetails";

export default {
  components: {
    KeyboardComponentsTable,
    KeyboardDetails,
    KeyboardCarousel,
  },
  metaInfo() {
    return {
      title: "Keyboard - " + this.$page.keyboard.title,
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
    details {
      keys,
      oled,
      splitted
    },
    switch_socket {
      id
      title
    },
    components {
      component,
      quantity,
      required,
      where_to_buy {
        url,
        store
      }
    },
    images
  }
}
</page-query>

<style scoped>
.section-name {
  font-family: 'Noto Sans', sans-serif !important;
}
</style>
