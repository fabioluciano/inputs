<template>
  <v-card outlined tile :to="`${keyboard.path}`">
    <v-card-title>
      {{ keyboard.title }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ["keyboard"],
};
</script>
