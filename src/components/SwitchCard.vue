<template>
  <v-hover>
    <v-card
      rounded="xl"
      :to="`${switch_obj.path}`"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 4 : 1}`"
    >
      <v-img
        :src="
          require(`!!assets-loader?width=400!@images/${
            switch_obj.images[0]
          }`)
        "
        :max-width="300"
        contain
        class="black--text align-end"
        v-if="switch_obj.images.length > 0"
      >
      </v-img>
      <v-card-title v-text="switch_obj.title" />

      <v-card-subtitle v-html="switch_obj.content" />
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["switch_obj"],
};
</script>
