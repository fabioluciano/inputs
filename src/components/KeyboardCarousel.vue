<template>
  <v-card flat>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, i) in $page.keyboard.images" :key="i">
        <v-img :src="item" max-height="400" />
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  props: ["keyboard"],
};
</script>
