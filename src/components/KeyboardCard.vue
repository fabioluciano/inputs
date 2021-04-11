<template>
  <v-card outlined :to="`${keyboard.path}`"  elevation="2">
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
