<template>
  <v-app-bar dense app>
    <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="item in menu_items"
        :key="item.name"
        :to="item.link"
        plain
        active-class="primary"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>

    <v-responsive max-width="260">
      <v-text-field
        dense
        flat
        disabled
        hide-details
        rounded
        solo-inverted
        label="Disabled"
      />
    </v-responsive>

    <v-menu bottom left rounded="xl">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" class="hidden-md-and-up">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="item in menu_items"
          :key="item.link"
          :to="item.link"
          active-class="primary"
        >
          <v-list-item-title>
            <v-icon>{{ item.icon }}</v-icon> {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
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
  props: ["menu_items"],
};
</script>

<style lang="scss"></style>
