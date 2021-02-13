<template>
  <v-app class="app1" :style="{ backgroundColor: 'var(--v-primary-lighten3)' }">
    <v-app-bar app clipped-left dense>
      <!-- <v-container fluid>
        <v-layout row> -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-show="notLarge"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/es-logo.png"
            transition="scale-transition"
            width="40"
        /></router-link>
        <router-link to="/">
          <v-img
            alt="ErikStore Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="@/assets/es-name.png"
            width="100"
        /></router-link>
      </div>
      <v-btn icon @click="ToggleDarkMode" width="35" height="35">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <!-- 
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer> -->

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
      <div>
        <v-select
          class="mt-6"
          dense
          v-model="$i18n.locale"
          :items="languages"
          item-text="language"
          item-value="locale"
          label="Language"
          solo
          style="width: 140px"
          background-color="#03dac5"
          color="purple"
        ></v-select>
      </div>

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
      <!-- </v-layout> -->
      <!-- <v-layout row> -->
      <!-- <v-btn depressed color="white" href="/overall" class="text-none">
            <v-icon dense color="#6200ee"> mdi-eye </v-icon>
            <div class="primary--purple">
              Tổng quan
            </div>
          </v-btn> -->
      <!-- <goods-menu /> -->

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

      <!-- <v-spacer></v-spacer> -->

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
      <!-- <v-btn icon @click="ToggleDarkMode" width="35" height="35">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </v-layout> -->
      <!-- </v-container> -->
    </v-app-bar>
    <v-navigation-drawer
      app
      clipped
      floating
      class="elevation-3"
      v-model="drawer"
    >
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Erik Store
            <v-btn icon @click="ToggleDarkMode" width="35" height="35">
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $t("title.motto") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider> -->

      <v-list nav>
        <v-list-item v-show="notLarge">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon
        ></v-list-item>
        <v-list-item-group mandatory color="primary">
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  Item
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SettingsMenu from "@/components/SettingsMenu.vue";
// import GoodsMenu from "@/components/GoodsMenu.vue";

export default Vue.extend({
  name: "App",

  components: { SettingsMenu },

  data: () => ({
    drawer: true,
    notLarge: false,
    items: [{ title: "site.dashboard.title" }, { title: "site.product.title" }],
    languages: [
      {
        language: "English",
        locale: "en"
      },
      {
        language: "Français",
        locale: "fr"
      },
      {
        language: "Tiếng Việt",
        locale: "vi"
      }
    ]
  }),
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    ToggleDarkMode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    onResize() {
      this.notLarge = window.innerWidth < 1264;
    }
  },
  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
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

.select--append > .v-input__control > .v-input__slot {
  background-color: #03dac5;
}
</style>
