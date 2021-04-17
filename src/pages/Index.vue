<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="text-h3 grey--text text--darken-2 section-name">
            Keyboards
          </h3>
        </v-col>
      </v-row>
      <v-row>
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
      <v-row>
        <v-col>
          <h3 class="text-h3 grey--text text--darken-2 section-name">
            Switches
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="3"
          md="3"
          v-for="item in $page.switches.edges"
          :key="item.node.title"
        >
          <SwitchCard :switch_obj="item.node" />
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  keyboards: allKeyboard {
    totalCount,
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
  switches: allSwitch {
    totalCount,
    edges {
      node {
        id,
        title,
        profile {
          id,
          title
        },
        brand {
          id,
          title
        },
        type {
          id,
          title
        },
        durability,
        actuator_travel,
        pre_travel,
        initial_force,
        actuation_force,
        rgb_version,
        path
      }
    }
  }
}
</page-query>

<script>
import KeyboardCard from "~/components/KeyboardCard";
import SwitchCard from "~/components/SwitchCard";
export default {
  components: {
    KeyboardCard,
    SwitchCard,
  },
  metaInfo() {
    return {
      title: "Home",
    };
  },
};
</script>

<style scoped>
.section-name {
  font-family: "Noto Sans", sans-serif !important;
}
</style>
