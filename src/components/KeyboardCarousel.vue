<template>
  <v-card flat>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in $page.keyboard.images"
        :key="i"
        :src="item"
        cycle
        hide-delimiter-background
        show-arrows-on-hover
      >
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  props: ["keyboard"],
};
</script>
