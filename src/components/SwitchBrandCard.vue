<template>
  <v-card elevation="2" shaped>
    <v-card-title>
      <g-link :to="`${switch_type.path}`">
        {{ switch_type.title }}
      </g-link>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ["switch_type"],
};
</script>
