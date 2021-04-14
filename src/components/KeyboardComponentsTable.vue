<template>
  <v-container>
    <v-row>
      <v-col
        v-for="component in groupedComponents"
        :key="component.id"
      >
       {{ component }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["components"],
  computed: {
    groupedComponents() {
      return this.groupByRevision(this.components);
    },
  },
  methods: {
    groupByRevision: function(components) {
      const result = {};

      components.forEach((item) => {
        console.log(item.revision)
        // if(typeof item.revision == "String") {
        //   console.log(item.revision)
        // } else if(typeof item.revision == "Object") {
        //   console.log(item.revision)
        // }
        // console.log(typeof revision)
        // if (!result[revisionName]) result[revisionName] = [];
        // result[revisionName].push(item);
      });

      return result;
    },
  },
};
</script>

<style scoped>
th {
  font-size: 12pt !important;
}
</style>
