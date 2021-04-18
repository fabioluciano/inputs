<template>
  <v-container style="background-color: #fff">
    <v-row>
      <v-col sm="4" lg="2" v-for="diykit in diy_kits" :key="diykit.id">
        <v-hover>
          <v-card
            color="#f5f5f5"
            :min-width="250"
            :max-width="250"
            :href="diykit.url"
            target="_blank"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 4 : 1}`"
            active-class="primary active-diykit"
          >
            <v-card-title>
              <v-icon large left>mdi-cart</v-icon>
              {{ diykit.store }}
            </v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col
                  class="detail-name grey--text text--darken-2 font-weight-bold"
                  sm="4"
                  md="5"
                >
                  Revision
                </v-col>
                <v-col>{{ diykit.revision }}</v-col>
              </v-row>
              <v-row dense>
                <v-col
                  class="detail-name grey--text text--darken-2 font-weight-bold"
                  sm="6"
                  md="6"
                >
                  Pre assembled
                </v-col>
                <v-col>
                  <v-icon :color="diykit.pre_assembled ? 'green' : 'red'">
                    {{
                      diykit.pre_assembled
                        ? "mdi-check-circle"
                        : "mdi-close-circle"
                    }}
                  </v-icon>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["diy_kits"],
};
</script>

<style scoped>
.list-item {
  background-color: #f5f5f5;
}
</style>
