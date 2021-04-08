<template>
  <v-card outlined tile :to="`${switch_type.path}`">
    <v-card-title>
      {{ switch_type.title }}
    </v-card-title>

    <v-card-text> Type: {{ switch_type.title }} </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["switch_type"],
};
</script>
