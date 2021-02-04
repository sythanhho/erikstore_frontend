<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn depressed color="white" v-bind="attrs" v-on="on" class="text-none">
        Thiết lập<v-icon>mdi-menu-down</v-icon>
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
  name: "Settings-Menu",
  data: () => ({
    settings: [
      {
        title: "Thiết lập cửa hàng",
        icon: "mdi-wrench",
        href: "/shop-settings"
      },
      {
        title: "Quản lý mẫu in",
        icon: "mdi-file-document-outline",
        href: "/printing-management"
      },
      {
        title: "Quản lý người dùng",
        icon: "mdi-human-male",
        href: "/user-management"
      },
      {
        title: "Quản lý chi nhánh",
        icon: "mdi-puzzle",
        href: "/branch-management"
      },
      {
        title: "Quản lý thu khác",
        icon: "mdi-cart",
        href: "/other-expense-management"
      },
      {
        title: "Quản lý chi phí nhập hàng",
        icon: "mdi-cash-multiple",
        href: "/import-fee-management"
      },
      {
        title: "Lịch sử thao tác",
        icon: "mdi-history",
        href: "/action-history"
      },
      {
        title: "Quản lý mẫu tin",
        icon: "mdi-email",
        href: "/message-management"
      },
      {
        title: "Quản lý khuyến mại",
        icon: "mdi-gift",
        href: "/discount-management"
      },
      {
        title: "Xóa dữ liệu hệ thống",
        icon: "mdi-trash-can",
        href: "/delete-system-data"
      }
    ]
  })
});
</script>
