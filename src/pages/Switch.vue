<template>
  <Layout>
    <h2 class="text-h2">Switches</h2>
    <v-card flat class="py-12">
      <v-card-text>
        <v-row align="center" justify="center">
          <v-btn-toggle v-model="group_switch_by" rounded>
            <v-btn value="brand">Brand</v-btn>
            <v-btn value="type">Type</v-btn>
            <v-btn value="profile">Profile</v-btn>
            <v-btn value="socket">Socket</v-btn>
          </v-btn-toggle>
        </v-row>
      </v-card-text>
    </v-card>
    <v-container v-for="(group, groupName) in groups" :key="group.id">
      <h2 class="text-h3 mb-3">{{ groupName | capitalize }}</h2>
      <v-row>
        <v-col sm="3" md="3" v-for="item in group" :key="item.id">
          <SwitchCard :switch_obj="item" />
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  switches: allSwitch {
    edges {
      node {
        id,
        title,
        profile {
          id,
          title
        },
        socket { 
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
import SwitchCard from "~/components/SwitchCard";
export default {
  components: {
    SwitchCard,
  },
  data() {
    return {
      group_switch_by: "brand",
    };
  },
  computed: {
    groups() {
      return this.groupBy(this.$page.switches.edges, this.group_switch_by);
    },
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    groupBy: function(array, key) {
      const result = {};
      array.forEach((item) => {
        var node = item.node;
        var group_name = node[key].title;

        if (!result[group_name]) result[group_name] = [];
        result[group_name].push(node);
      });

      return result;
    },
  },
};
</script>
