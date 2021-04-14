<template>
  <Layout>
    <v-container>
      <v-row class="mb-3">
        <v-col>
          <h2 class="text-h2 section-name grey--text text--darken-2">
            {{ $page.keyboard.title }}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            v-if="$page.keyboard.images.length > 0 || $page.keyboard.details"
            class="pa-2 rounded-xl"
          >
            <v-container>
              <v-row>
                <v-col v-if="$page.keyboard.details" sm="5" md="5">
                  <KeyboardDetails :keyboard="$page.keyboard" />
                </v-col>
                <v-divider vertical />
                <v-col>
                  <v-tabs>
                    <v-tab v-if="$page.keyboard.components.length > 0">
                      Components
                    </v-tab>
                    <v-tab v-if="$page.keyboard.components.length > 0">
                      Kits
                    </v-tab>
                    <v-tab v-if="$page.keyboard.components.length > 0">
                      Build Logs
                    </v-tab>
                    <v-tab-item
                      v-if="$page.keyboard.components.length > 0"
                      class="py-5"
                    >
                      <KeyboardComponentsTable
                        :components="$page.keyboard.components"
                      />
                    </v-tab-item>

                    <v-tab-item
                      v-if="$page.keyboard.components.length > 0"
                      class="py-5"
                    >
                      <KeyboardBuildLogs
                        :buildlogs="$page.keyboard.buildlogs"
                      />
                    </v-tab-item>
                  </v-tabs>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            v-if="$page.keyboard.images.length > 0 || $page.keyboard.details"
            class="pa-2 rounded-xl"
          >
            <KeyboardCarousel :keyboard="$page.keyboard" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import KeyboardCarousel from "~/components/KeyboardCarousel";
import KeyboardComponentsTable from "~/components/KeyboardComponentsTable";
import KeyboardBuildLogs from "~/components/KeyboardBuildLogs";
import KeyboardDetails from "~/components/KeyboardDetails";

export default {
  components: {
    KeyboardComponentsTable,
    KeyboardBuildLogs,
    KeyboardDetails,
    KeyboardCarousel,
  },
  metaInfo() {
    return {
      title: "Keyboard - " + this.$page.keyboard.title,
    };
  },
};
</script>

<page-query>
query Keyboard ($id: ID!) {
  keyboard: keyboard (id: $id) {
    id,
    title,
    path,
    details {
      keys,
      oled,
      splitted,
      license,
      hotswappable,
      switch_socket,
      revisions,
      source {
        repository,
        user {
          name,
          url
        }
      }
    }
    buildlogs {
      url,
      language,
      type,
      author {
        name,
        url
      }
    },
    switch_socket {
      id
      title
    },
    components {
      component,
      quantity,
      required,
      revision,
      where_to_buy {
        url,
        store
      }
    },
    images,
    content
  }
}
</page-query>

<style scoped>
.section-name {
  font-family: "Noto Sans", sans-serif !important;
}
</style>
