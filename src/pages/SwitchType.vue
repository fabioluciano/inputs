<template>
  <Layout :show-logo="false">
    <v-container>
      <v-row dense>
        <v-col
          cols="12"
          sm="3"
          md="3"
          v-for="edge in $page.switchTypes.edges"
          :key="edge.node.title"
        >
          <SwitchTypeCard :switch_type="edge.node" />
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
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
import SwitchTypeCard from "~/components/SwitchTypeCard";
export default {
  components: {
    SwitchTypeCard,
  },
};
</script>
