<template>
  <v-carousel cycle show-arrows-on-hover class="rounded-xl" height="400">
    <v-carousel-item v-for="(item, i) in $page.keyboard.images" :key="i">
      <v-img :src="item" max-height="400" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ["keyboard"],
};
</script>
