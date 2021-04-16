<template>
  <v-container>
    <v-row>
      <v-col>
        <v-list three-line>
          <template v-for="buildlog in buildlogs">
            <v-list-item
              :key="buildlog.id"
              :href="buildlog.url"
              target="_blank"
            >
              <v-list-item-icon>
                <v-icon>mdi-image</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <span class="font-weight-black">Revision</span>
                  {{ buildlog.revision }}
                  <v-spacer class="my-1" />
                  <span class="font-weight-black">Language</span>
                  {{ buildlog.language }}
                  <v-spacer class="my-1" />
                  <span class="font-weight-black">Type</span>
                  {{ buildlog.type }}
                  <v-spacer class="my-1" />
                  <span class="font-weight-black">Author </span>
                  <a :href="buildlog.author.url" target="_blank">{{
                    buildlog.author.name
                  }}</a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["buildlogs"],
};
</script>
