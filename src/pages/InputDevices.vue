<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-h2 grey--text text--darken-2 section-name">
            Input Devices
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
      title: this.$context.title,
    };
  },
};
</script>

<style scoped>
.section-name {
  font-family: "Noto Sans", sans-serif !important;
}
</style>
