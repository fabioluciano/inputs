<template>
  <v-hover>
    <v-card
      rounded="xl"
      :to="`${keyboard.path}`"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 4 : 1}`"
    >
      <v-img
        :src="
          require(`!!assets-loader?width=400!@images/${keyboard.images[0]}`)
        "
        class="black--text align-end"
        height="300"
      >
        <v-card-title v-text="keyboard.title" />
      </v-img>
      <v-card-subtitle v-html="keyboard.content" />
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["keyboard"],
};
</script>
