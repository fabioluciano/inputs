<template>
  <v-container>
    <v-row
      v-for="(components, revisionName) in groupedComponents"
      :key="components.id"
    >
      <v-col>
        <h4>Components for revision {{ revisionName }}</h4>
        <v-simple-table fixed-header>
          <template v-slot:default>
            <thead>
              <tr>
                <th id="component-name" class="text-left">Component</th>
                <th id="component-quantity" class="text-left">Quantity</th>
                <th id="component-required" class="text-left">Required</th>
                <th id="component-where-to-buy" class="text-left">
                  Where to buy
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in components" :key="item.component">
                <td>{{ item.component }}</td>
                <td>{{ item.quantity }}</td>
                <td>
                  <v-simple-checkbox v-model="item.required" disabled />
                </td>
                <td>
                  <v-tooltip
                    top
                    v-for="shop in item.where_to_buy"
                    :key="shop.url"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        :href="shop.url"
                        target="_blank"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                    </template>
                    <span>{{ shop.store }}</span>
                  </v-tooltip>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["components"],
  computed: {
    groupedComponents() {
      return this.groupByRevision(this.components);
    },
  },
  methods: {
    groupByRevision: function(components) {
      const result = {};

      components.forEach((item) => {
        let revisions = item.revision;

        revisions.forEach(function(revisionName) {
          if (!result[revisionName]) result[revisionName] = [];
          result[revisionName].push(item);
        });
      });

      return result;
    },
  },
};
</script>

<style scoped>
th {
  font-size: 12pt !important;
}
</style>
