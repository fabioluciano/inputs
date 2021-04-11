<template>
  <v-card outlined :to="`${switch_obj.path}`" elevation="2">
    <v-card-title>
      {{ switch_obj.title }}
    </v-card-title>

    <v-card-text>
      Type: {{ switch_obj.type.title }} Brand: {{ switch_obj.brand.title }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["switch_obj"],
};
</script>
