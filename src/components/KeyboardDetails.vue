<template>
  <v-card>
    <v-container>
    <v-row>
      <v-col>
        <dl class="row">
          <template v-for="value, key in details">
            <dt class="col-sm-3">{{ key }}</dt>
            <dd class="col-sm-9">{{ value }}</dd>
          </template>
        </dl>
      </v-col>
    </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["details"],
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>
