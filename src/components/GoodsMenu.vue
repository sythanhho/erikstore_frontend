<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn depressed color="white" v-bind="attrs" v-on="on" class="text-none"
        ><v-icon>mdi-cube</v-icon> Hàng hóa
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in settings"
        :key="index"
        :to="item.href"
      >
        <v-icon>{{ item.icon }}</v-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Goods-Menu",
  data: () => ({
    settings: [
      {
        title: "Danh mục",
        icon: "mdi-dots-grid",
        href: "/categories"
      },
      {
        title: "Thiết lập giá",
        icon: "mdi-tag-multiple",
        href: "/price-settings"
      },
      {
        title: "Kiểm kho",
        icon: "mdi-checkbox-marked",
        href: "/stock-management"
      },
      {
        title: "Sản xuất",
        icon: "mdi-cog",
        href: "/production"
      }
    ]
  })
});
</script>
