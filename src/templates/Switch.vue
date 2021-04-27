<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-h2 grey--text text--darken-2 section-name">
            {{ $page.switch.title }}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          {{ $page.switch }}
          <v-container>
            <v-card class="pa-2 rounded-xl">
              <v-row>
                <v-col v-if="$page.switch.images.length > 0" cols="6">
                  <v-img
                    :src="
                      require(`!!assets-loader?width=400&height=400!@images/${
                        $page.switch.images[0]
                      }`)
                    "
                    max-height="400"
                    max-width="400"
                  >
                  </v-img>
                </v-col>
                <v-col cols="6">
                  <radar-chart :chartData="chartData" />
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import RadarChart from "~/components/RadarChart.vue";

export default {
  components: {
    RadarChart,
  },
  metaInfo() {
    return {
      title: "Switch - " + this.$page.switch.title,
    };
  },
  computed: {
    chartData() {
      let name = this.$page.switch.title;
      let actuation_force = this.$page.switch.actuation_force;
      let pre_travel = this.$page.switch.pre_travel;
      let actuator_travel = this.$page.switch.actuator_travel;

      return this.chartDataMount(
        name,
        actuation_force,
        pre_travel,
        actuator_travel
      );
    },
  },
  methods: {
    chartDataMount: function(
      name,
      actuation_force,
      pre_travel,
      actuator_travel
    ) {
      return {
        labels: ["Actuation Force", "Pre Travel", "Total Travel"],
        datasets: [
          {
            label: name,
            data: [actuation_force, pre_travel, actuator_travel],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
          },
        ],
      };
    },
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
    datasheet_url,
    images,
    path
  }
}
</page-query>

<style scoped>
.section-name {
  font-family: "Noto Sans", sans-serif !important;
}
</style>
