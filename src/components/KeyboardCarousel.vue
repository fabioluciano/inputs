<template>
  <v-responsive :max-height="height">
    <v-carousel cycle class="rounded-xl" :height="height">
      <v-carousel-item v-for="(item, i) in $page.keyboard.images" :key="i">
        <v-img
          :src="require(`!!assets-loader!@images/${item}`)"
          :max-height="height"
        />
      </v-carousel-item>
    </v-carousel>
  </v-responsive>
</template>

<script>
export default {
  props: ["keyboard"],
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 200;
        case "sm":
          return 300;
        case "md":
          return 200;
        case "lg":
          return 200;
        case "xl":
          return 400;
      }
    },
  },
};
</script>
