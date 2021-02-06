<template>
  <v-app>
    <v-app-bar app height="90" rounded>
      <v-container fluid>
        <v-layout row>
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="@/assets/es-logo.png"
              transition="scale-transition"
              width="40"
            />
            <a href="/">
              <v-img
                alt="ErikStore Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="@/assets/es-name.png"
                width="100"
            /></a>
          </div>

          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>

          <!-- <v-btn depressed color="white" class="text-none">
            <v-icon dense color="#6200ee"> mdi-brush </v-icon>
            <div class="primary--purple">
              Chủ đề
            </div>
          </v-btn>

          <v-btn depressed color="white" class="text-none">
            <v-icon dense color="#6200ee"> mdi-face-agent </v-icon>
            <div class="primary--purple">
              Hỗ trợ
            </div>
          </v-btn>

          <v-btn depressed color="white" class="text-none">
            <v-icon dense color="#6200ee"> mdi-cloud-download </v-icon>
            <div class="primary--purple">
              Tải TeamViewer
            </div>
          </v-btn> -->

          <v-spacer></v-spacer>

          <!-- <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="white"
                v-bind="attrs"
                v-on="on"
                class="text-none"
                ><div class="primary--purple">
                  43 Trần Khát Chân
                </div>
                <v-icon color="#6200ee">mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->

          <settings-menu />

          <!-- <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="white"
                v-bind="attrs"
                v-on="on"
                class="text-none"
                ><div class="primary--purple">
                  tạp hóa
                </div>
                <v-icon color="#6200ee">mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
        </v-layout>
        <v-layout row>
          <!-- <v-btn depressed color="white" href="/overall" class="text-none">
            <v-icon dense color="#6200ee"> mdi-eye </v-icon>
            <div class="primary--purple">
              Tổng quan
            </div>
          </v-btn> -->
          <goods-menu />

          <!-- <v-btn depressed color="white" class="text-none">
            <v-icon dense color="#6200ee">
              mdi-swap-horizontal-bold
            </v-icon>
            <div class="primary--purple">
              Giao dịch
            </div>
          </v-btn>
          <v-btn depressed color="white" class="text-none">
            <v-icon dense color="#6200ee"> mdi-human-male </v-icon>
            <div class="primary--purple">
              Đối tác
            </div>
          </v-btn>
          <v-btn depressed color="white" class="text-none">
            <v-icon dense color="#6200ee"> mdi-currency-usd </v-icon>
            <div class="primary--purple">
              Sổ quỹ
            </div>
          </v-btn>
          <v-btn depressed color="white" href="/report" class="text-none">
            <v-icon dense color="#6200ee"> mdi-chart-bar </v-icon>
            <div class="primary--purple">
              Báo cáo
            </div>
          </v-btn> -->

          <v-spacer></v-spacer>

          <!-- <v-btn depressed color="white" class="text-none">
            <v-icon dense color="#6200ee"> mdi-cart </v-icon>
            <div class="primary--purple">
              Bán hàng
            </div>
          </v-btn> -->
          <!-- <v-switch
            v-model="$vuetify.theme.dark"
            inset
            label="Dùng chủ đề tối"
            @click="ToggleDarkMode"
            persistent-hint
          ></v-switch> -->
          <v-btn icon @click="ToggleDarkMode">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </v-layout></v-container
      >
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
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
  }),
  methods: {
    ToggleDarkMode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  }
});
</script>

<style scoped>
.margin-top-65px {
  margin-top: 65px;
}
</style>
