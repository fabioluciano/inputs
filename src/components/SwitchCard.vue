<template>
  <v-card outlined :to="`${switch_obj.path}`" elevation="2">
    <v-card-title>
      {{ switch_obj.title }}
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row dense>
          <v-col>Type</v-col>
          <v-col>{{ switch_obj.type.title }}</v-col>
        </v-row>
        <v-row dense>
          <v-col>Brand</v-col>
          <v-col>{{ switch_obj.brand.title }}</v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["switch_obj"],
};
</script>
