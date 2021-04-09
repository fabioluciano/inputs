<template>
  <Layout>
    <v-container>
      <h2 class="text-h2">Keyboards</h2>
      <v-row dense>
        <v-col
          cols="12"
          sm="3"
          md="3"
          v-for="edge in $page.keyboards.edges"
          :key="edge.node.title"
        >
          <KeyboardCard :keyboard="edge.node" />
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  keyboards: allKeyboard {
    edges {
      node {
        title,
        path,
        switch_socket {
          id,
          title
        }
      }
    }
  }
  switchTypes: allSwitchType {
    edges {
      node {
        id,
        title,
        path
      }
    }
  }
}
</page-query>

<script>
import KeyboardCard from "~/components/KeyboardCard";
export default {
  components: {
    KeyboardCard,
  },
  metaInfo() {
    return {
      title: "Home",
    };
  },
};
</script>
