<template>
  <v-app>
    <v-app-bar app color="pink" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="ErikStore Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/erikname.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn depressed>
        <v-icon dense color="blue darken-2"> mdi-brush </v-icon>
        Chủ đề
      </v-btn>

      <v-btn depressed>
        <v-icon dense color="blue darken-2"> mdi-face-agent </v-icon>
        Hỗ trợ
      </v-btn>

      <v-btn depressed>
        <v-icon dense color="blue darken-2"> mdi-cloud-download </v-icon>
        Tải TeamViewer
      </v-btn>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            43 Trần Khát Chân
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <settings-menu />

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> tạp hóa </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-toolbar class="margin-top-65px" max-height="60px">
      <v-btn depressed href="/overall">
        <v-icon dense color="blue darken-2"> mdi-eye </v-icon>
        Tổng quan
      </v-btn>
      <goods-menu />

      <v-btn depressed>
        <v-icon dense color="blue darken-2"> mdi-swap-horizontal-bold </v-icon>
        Giao dịch
      </v-btn>
      <v-btn depressed>
        <v-icon dense color="blue darken-2"> mdi-human-male </v-icon>
        Đối tác
      </v-btn>
      <v-btn depressed>
        <v-icon dense color="blue darken-2"> mdi-currency-usd </v-icon>
        Sổ quỹ
      </v-btn>
      <v-btn depressed href="/report">
        <v-icon dense color="blue darken-2"> mdi-chart-bar </v-icon>
        Báo cáo
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn depressed>
        <v-icon dense color="blue darken-2"> mdi-cart </v-icon>
        Bán hàng
      </v-btn>
    </v-toolbar>

    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SettingsMenu from "@/components/SettingsMenu.vue";
import GoodsMenu from "@/components/GoodsMenu.vue";

export default Vue.extend({
  name: "App",

  components: { SettingsMenu, GoodsMenu },

  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  })
});
</script>

<style scoped>
.margin-top-65px {
  margin-top: 65px;
}
</style>
