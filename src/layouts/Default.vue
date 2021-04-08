<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer
          v-model="drawer"
          app
          clipped
          src="/assets/images/drawer-background.png"
        >
          <v-list dense rounded>
            <v-list-item link to="/">
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Home
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/keyboard">
              <v-list-item-action>
                <v-icon>mdi-keyboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Keyboards
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/switch">
              <v-list-item-action>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Switches
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/switch-type">
              <v-list-item-action>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Switch Types
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-toolbar-title>Inputs</v-toolbar-title>
        </v-app-bar>

        <v-main>
          <v-container>
            <slot />
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data: () => ({
    drawer: true,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = true;
    },
  },
};
</script>
