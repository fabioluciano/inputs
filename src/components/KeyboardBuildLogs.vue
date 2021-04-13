<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="3"
        md="3"
        v-for="buildlog in buildlogs"
        :key="buildlog.url"
      >
        <v-card class="mx-auto" outlined>
          <v-container>
            <v-row dense>
              <v-col class="detail-name">Author</v-col>
              <v-col>
                <a :href="buildlog.author.url" target="_blank">
                  {{ buildlog.author.name }}
                </a>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col class="detail-name">Type</v-col>
              <v-col>{{ buildlog.type }}</v-col>
            </v-row>
            <v-row dense>
              <v-col class="detail-name">Buildlog</v-col>
              <v-col>
                <a :href="buildlog.url" target="_blank">
                  Link
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
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
.detail-name {
  font-weight: 800;
}
</style>
