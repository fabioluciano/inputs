<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          {{ $page.switch }}
          <h2 class="text-h2">
            {{ $page.switch.title }}
          </h2>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.switch.title,
    };
  },
};
</script>

<page-query>
query Switch ($id: ID!) {
  switch: switch (id: $id) {
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
    actuator_travel_variance,
    pre_travel,
    pre_travel_variance,
    initial_force,
    actuation_force,
    actuation_force_variance,
    pressure_point_force,
    pressure_point_force_variance,
    rgb_version,
    path
  }
}
</page-query>

<style lang="scss"></style>
