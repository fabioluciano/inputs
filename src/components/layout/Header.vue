<template>
  <v-app-bar app dense>
    <v-toolbar-title class="mx-2">
      {{ $static.metadata.siteName }}
    </v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down py-1">
      <div
        v-for="menuitem in $static.metadata.mainMenuItems"
        :key="menuitem.name"
      >
        <v-btn
          :to="menuitem.link"
          plain
          active-class="primary"
          class="rounded-lg"
          v-if="menuitem.subItems.length == 0"
        >
          <v-icon left>{{ menuitem.icon }}</v-icon>
          {{ menuitem.name }}
        </v-btn>

        <v-menu offset-y open-on-hover v-if="menuitem.subItems.length > 0">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              plain
              active-class="primary"
              class="rounded-lg"
            >
              <v-icon left>{{ menuitem.icon }}</v-icon>
              {{ menuitem.name }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-container style="background-color: #fff">
            <v-row>
              <v-col
                col="4"
                sm="4"
                v-for="submenu in menuitem.subItems"
                :key="submenu.name"
              >
                <v-hover>
                  <v-card
                    color="#f5f5f5"
                    :min-width="250"
                    :max-width="250"
                    :to="submenu.link"
                    slot-scope="{ hover }"
                    :class="`elevation-${ hover ? 4 : 1}`"
                    active-class="primary active-submenu"
                  >
                    <v-card-title>
                      <v-icon left>{{ submenu.icon }}</v-icon>
                      {{ submenu.name }}
                    </v-card-title>
                    <v-card-text>{{ submenu.description }}</v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-menu>
      </div>
    </v-toolbar-items>
  </v-app-bar>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription,
    mainMenuItems {
      name,
      icon,
      link,
      subItems {
        name,
        icon,
        link,
        description
      }
    }
  }
}
</static-query>

<style scoped>
.active-submenu * {
  color: white !important;
}
</style>