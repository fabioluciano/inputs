<template>
  <v-container>
    <v-row>
      <v-col>
        <table>
          <tr>
            <td class="detail-name" width=200>Number of Keys</td>
            <td>{{ details.keys }}</td>
          </tr>
          <tr>
            <td class="detail-name">Splitted</td>
            <td>
              <v-icon :color="details.splitted ? 'green' : 'red'">
                {{ details.splitted ? "mdi-check-circle" : "mdi-close-circle" }}
              </v-icon>
            </td>
          </tr>
          <tr>
            <td class="detail-name">OLED Support</td>
            <td>
              <v-icon :color="details.oled ? 'green' : 'red'">
                {{ details.oled ? "mdi-check-circle" : "mdi-close-circle" }}
              </v-icon>
            </td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </v-container>
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
<style scoped>
.detail-name {
  font-weight: 800;
}
</style>