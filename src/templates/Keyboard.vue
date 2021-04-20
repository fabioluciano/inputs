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
              <v-row v-if="$page.keyboard.images.length > 0">
                <v-col>
                  <KeyboardCarousel :keyboard="$page.keyboard" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <KeyboardDetails :keyboard="$page.keyboard" />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="pa-2 rounded-xl">
            <v-tabs>
              <v-tab
                v-if="
                  $page.keyboard.components &&
                    $page.keyboard.components.length > 0
                "
                href="#components"
              >
                Components
              </v-tab>
              <v-tab
                v-if="
                  $page.keyboard.diy_kits && $page.keyboard.diy_kits.length > 0
                "
                href="#diy_kits"
              >
                DIY Kits
              </v-tab>
              <v-tab
                v-if="
                  $page.keyboard.buildlogs &&
                    $page.keyboard.buildlogs.length > 0
                "
                href="#build-logs"
              >
                Build Logs
              </v-tab>

              <v-tab-item
                v-if="
                  $page.keyboard.components &&
                    $page.keyboard.components.length > 0
                "
                class="py-5"
                value="components"
              >
                <KeyboardComponentsTable
                  :components="$page.keyboard.components"
                />
              </v-tab-item>

              <v-tab-item
                v-if="
                  $page.keyboard.buildlogs &&
                    $page.keyboard.buildlogs.length > 0
                "
                class="py-5"
                value="build-logs"
              >
                <KeyboardBuildLogs :buildlogs="$page.keyboard.buildlogs" />
              </v-tab-item>
              <v-tab-item
                v-if="
                  $page.keyboard.diy_kits && $page.keyboard.diy_kits.length > 0
                "
                class="py-5"
                value="diy_kits"
              >
                <KeyboardDiyKits :diy_kits="$page.keyboard.diy_kits" />
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query Keyboard ($id: ID!) {
  keyboard: keyboard (id: $id) {
    id,
    title,
    path,
    details {
      keys,
      oled,
      leds {
        perkey,
        glowing
      },
      splitted,
      keys_distribuition,
      license,
      hotswappable,
      revisions,
      source {
        repository,
        user {
          name,
          url
        }
      }
    }
    switch_socket {
      id,
      title
    }
    buildlogs {
      url,
      language,
      type,
      revision,
      author {
        name,
        url
      }
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
    diy_kits {
      store,
      url,
      revision,
      pre_assembled
    },
    images,
    content
  }
}
</page-query>

<script>
import KeyboardCarousel from "~/components/KeyboardCarousel";
import KeyboardComponentsTable from "~/components/KeyboardComponentsTable";
import KeyboardBuildLogs from "~/components/KeyboardBuildLogs";
import KeyboardDiyKits from "~/components/KeyboardDiyKits";
import KeyboardDetails from "~/components/KeyboardDetails";

export default {
  components: {
    KeyboardComponentsTable,
    KeyboardBuildLogs,
    KeyboardDiyKits,
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

<style scoped>
.section-name {
  font-family: "Noto Sans", sans-serif !important;
}
</style>
