<template>
  <v-sheet max-width="600">
    <v-carousel class="rounded-xl">
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
  </v-sheet>
</template>

<script>
export default {
  props: ["keyboard"],
};
</script>
