<template>
  <v-container>
    <v-row>
      <v-col sm="4" lg="2"  v-for="buildlog in buildlogs" :key="buildlog.id">
        <v-hover>
          <v-card
            color="#f5f5f5"
            :min-width="250"
            :max-width="250"
            :href="buildlog.url"
            target="_blank"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 4 : 1}`"
            active-class="primary active-buildlog"
          >
            <v-card-title>
              <v-icon large left>mdi-image</v-icon>
              {{ buildlog.author.name }}
            </v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col
                  class="detail-name grey--text text--darken-2 font-weight-bold"
                  sm="5"
                  md="5"
                >
                  Revision
                </v-col>
                <v-col>{{ buildlog.revision }}</v-col>
              </v-row>
              <v-row dense>
                <v-col
                  class="detail-name grey--text text--darken-2 font-weight-bold"
                  sm="5"
                  md="5"
                >
                  Type
                </v-col>
                <v-col>{{ buildlog.type }}</v-col>
              </v-row>
              <v-row dense>
                <v-col
                  class="detail-name grey--text text--darken-2 font-weight-bold"
                  sm="5"
                  md="5"
                >
                  Language
                </v-col>
                <v-col>{{ buildlog.language }}</v-col>
              </v-row>
              <v-row dense>
                <v-col
                  class="detail-name grey--text text--darken-2 font-weight-bold"
                  sm="5"
                  md="5"
                >
                  Author
                </v-col>
                <v-col>
                  <a :href="buildlog.author.url" target="_blank">
                    {{ buildlog.author.name }}
                  </a>
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
  props: ["buildlogs"],
};
</script>

<style scoped>
.list-item {
  background-color: #f5f5f5;
}
</style>
