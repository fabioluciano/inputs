<template>
  <v-carousel class="rounded-xl">
    <v-carousel-item
      v-for="(item, i) in $page.keyboard.images"
      :key="i"
      :src="item"
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <div
        class="text-h2"
        style="background-color: rgb(0, 0, 0, 0.2); padding: 10px"
      >
        {{ $page.keyboard.title }}
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ["keyboard"],
};
</script>
