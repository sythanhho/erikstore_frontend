<template>
  <v-main>
    <add-good-dialog ref="addGoodDialog" />
    <v-row>
      <side-bar />
      <v-col cols="12" md="10">
        <v-row>
          <h2>Hàng hóa</h2>

          <v-spacer />

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="white"
                v-bind="attrs"
                v-on="on"
                class="text-none"
              >
                <v-icon>mdi-plus-thick</v-icon>
                Thêm mới
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="ShowAddGoodDialog">
                <v-list-item-title
                  ><v-icon>mdi-plus-thick</v-icon>Thêm hàng
                  hóa</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><v-icon>mdi-plus-thick</v-icon>Thêm dịch
                  vụ</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><v-icon>mdi-plus-thick</v-icon>Thêm Combo - đóng
                  gói</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn depressed color="white" class="text-none">
            <v-icon> mdi-application-import </v-icon>
            Import
          </v-btn>

          <v-btn depressed color="white" class="text-none">
            <v-icon> mdi-application-export </v-icon>
            Xuất file
          </v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="white"
                v-bind="attrs"
                v-on="on"
                class="text-none"
              >
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
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          :single-select="singleSelect"
          item-key="name"
          show-select
          class="elevation-1"
        >
          <template v-slot:top>
            <v-switch
              v-model="singleSelect"
              label="Single select"
              class="pa-3"
            ></v-switch>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
// console.log(this.$refs);
import SideBar from "@/components/SideBar.vue";
import AddGoodDialog from "@/components/categories/AddGoodDialog.vue";
export default {
  components: { SideBar, AddGoodDialog },
  name: "Categories",
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "Mã hàng hóa",
          align: "start",
          sortable: false,
          value: "goodid"
        },
        { text: "Tên hàng", value: "name" },
        { text: "Giá bán", value: "sellingprice" },
        { text: "Giá vốn", value: "importfee" },
        { text: "Tồn kho", value: "instock" },
        { text: "Đặt hàng", value: "order" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          goodid: 159,
          sellingprice: 6.0,
          importfee: 24,
          instock: 4.0,
          order: "1%"
        },
        {
          name: "Ice cream sandwich",
          goodid: 237,
          sellingprice: 9.0,
          importfee: 37,
          instock: 4.3,
          order: "1%"
        },
        {
          name: "Eclair",
          goodid: 262,
          sellingprice: 16.0,
          importfee: 23,
          instock: 6.0,
          order: "7%"
        },
        {
          name: "Cupcake",
          goodid: 305,
          sellingprice: 3.7,
          importfee: 67,
          instock: 4.3,
          order: "8%"
        },
        {
          name: "Gingerbread",
          goodid: 356,
          sellingprice: 16.0,
          importfee: 49,
          instock: 3.9,
          order: "16%"
        },
        {
          name: "Jelly bean",
          goodid: 375,
          sellingprice: 0.0,
          importfee: 94,
          instock: 0.0,
          order: "0%"
        },
        {
          name: "Lollipop",
          goodid: 392,
          sellingprice: 0.2,
          importfee: 98,
          instock: 0,
          order: "2%"
        },
        {
          name: "Honeycomb",
          goodid: 408,
          sellingprice: 3.2,
          importfee: 87,
          instock: 6.5,
          order: "45%"
        },
        {
          name: "Donut",
          goodid: 452,
          sellingprice: 25.0,
          importfee: 51,
          instock: 4.9,
          order: "22%"
        },
        {
          name: "KitKat",
          goodid: 518,
          sellingprice: 26.0,
          importfee: 65,
          instock: 7,
          order: "6%"
        }
      ]
    };
  },
  methods: {
    ShowAddGoodDialog() {
      this.$refs["addGoodDialog"].DisplayDialog();
    }
  }
};
</script>
