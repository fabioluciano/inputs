<template>
  <v-simple-table fixed-header>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Component</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Required</th>
          <th class="text-left">Where to buy</th>
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
            <v-tooltip top v-for="shop in item.where_to_buy" :key="shop.url">
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
</template>

<script>
export default {
  props: ["components"],
};
</script>
