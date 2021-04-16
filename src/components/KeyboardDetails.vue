<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="keyboard-details">
          <h4 class="text-h4 grey--text text--darken-2">
            Details
          </h4>
          <v-container>
            <v-row dense>
              <v-col
                class="detail-name grey--text text--darken-2"
                sm="3"
                md="3"
              >
                Revisions
              </v-col>
              <v-col>{{
                keyboard.details.revisions
                  .map(function(item) {
                    return item;
                  })
                  .join(", ")
              }}</v-col>
            </v-row>
            <v-row dense>
              <v-col class="detail-name grey--text text--darken-2" sm="3" md="3"
                >Number of Keys</v-col
              >
              <v-col>{{ keyboard.details.keys }}</v-col>
            </v-row>
            <v-row dense>
              <v-col class="detail-name grey--text text--darken-2" sm="3" md="3"
                >Splitted</v-col
              >
              <v-col>
                <v-icon :color="keyboard.details.splitted ? 'green' : 'red'">
                  {{
                    keyboard.details.splitted
                      ? "mdi-check-circle"
                      : "mdi-close-circle"
                  }}
                </v-icon>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col class="detail-name grey--text text--darken-2" sm="3" md="3"
                >OLED Support</v-col
              >
              <v-col>
                <v-icon :color="keyboard.details.oled ? 'green' : 'red'">
                  {{
                    keyboard.details.oled
                      ? "mdi-check-circle"
                      : "mdi-close-circle"
                  }}
                </v-icon>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col
                class="detail-name grey--text text--darken-2"
                sm="3"
                md="3"
              >
                Hot-Swappable
              </v-col>
              <v-col>
                <v-icon
                  :color="keyboard.details.hotswappable ? 'green' : 'red'"
                >
                  {{
                    keyboard.details.hotswappable
                      ? "mdi-check-circle"
                      : "mdi-close-circle"
                  }}
                </v-icon>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col
                class="detail-name grey--text text--darken-2"
                sm="3"
                md="3"
              >
                License
              </v-col>
              <v-col>{{ keyboard.details.license }}</v-col>
            </v-row>
            <v-row dense>
              <v-col
                class="detail-name grey--text text--darken-2"
                sm="3"
                md="3"
              >
                Switch Socket Compatibility
              </v-col>
              <v-col>{{
                keyboard.switch_socket
                  .map(function(item) {
                    return item.title;
                  })
                  .join(", ")
              }}</v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
      <v-col>
        <div class="keyboard-description">
          <h4 class="text-h4 grey--text text--darken-2">Description</h4>
          <v-container>
            <v-row>
              <v-col>
                <div v-html="keyboard.content" />
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="keyboard-source" v-if="keyboard.details.source">
          <h4 class="text-h4 mt-4 grey--text text--darken-2">
            Keyboard Source
          </h4>
          <v-container>
            <v-row dense>
              <v-col
                class="detail-name grey--text text--darken-2"
                sm="3"
                md="3"
              >
                Repository
              </v-col>
              <v-col>
                <a :href="keyboard.details.source.repository" target="_blank">
                  Link
                </a>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col
                class="detail-name grey--text text--darken-2"
                sm="3"
                md="3"
              >
                Mantained by
              </v-col>
              <v-col>
                <a :href="keyboard.details.source.user.url" target="_blank">
                  {{ keyboard.details.source.user.name }}
                </a>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["keyboard"],
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
