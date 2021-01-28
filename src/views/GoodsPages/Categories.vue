<template>
  <v-main>
    <v-row>
      <side-bar />
      <v-col cols="12" md="10">
        <v-row>
          <h2>Hàng hóa</h2>

          <v-spacer />

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-plus-thick</v-icon>
                Thêm mới
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn depressed>
            <v-icon> mdi-application-import </v-icon>
            Import
          </v-btn>

          <v-btn depressed>
            <v-icon> mdi-application-export </v-icon>
            Xuất file
          </v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-grid</v-icon>

                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import SideBar from "../../components/SideBar.vue";
export default {
  components: { SideBar },
  name: "Categories"
};
</script>
