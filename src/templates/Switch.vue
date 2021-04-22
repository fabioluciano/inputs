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
        <v-col cols="12">
          <v-card>
            <v-container>
              <v-row>
                <v-col>
                  <dl class="row">
                    <template v-for="(value, key) in $page.switch">
                      <dt class="col-sm-3">{{ key }}</dt>
                      <dd class="col-sm-9">{{ value }}</dd>
                    </template>
                  </dl>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <radar-chart :chartData="dataCoin" />
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
  data: function() {
    return {
      dataCoin: {
        labels: [
          "Actuation Force",
          "Pre Travel",
          "Total Travel"
        ],
        datasets: [
          {
            label: "My Second Dataset",
            data: [55, 0.2, 2],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
          },
        ],
      },
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
