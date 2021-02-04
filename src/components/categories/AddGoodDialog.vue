<template>
  <v-dialog v-model="showDialog">
    <v-card>
      <v-container fluid class="pa-8">
        <v-row>
          <v-col>
            <v-card-title class="headline lighten-2 pa-0">
              Thêm hàng hóa
            </v-card-title> </v-col
          ><v-spacer />
          <v-btn icon @click="showDialog = false"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-row>
        <v-row>
          <v-col>
            <v-tabs align-with-title>
              <v-tab class="text-none ml-md-0">Thông tin</v-tab>
              <v-tab-item class="pt-1">
                <v-row>
                  <v-col md="6">
                    <v-row style="flex-wrap: nowrap;">
                      <v-col
                        style="max-width:100%"
                        cols="5"
                        class="flex-grow-1 flex-shink-0"
                      >
                        <v-text-field
                          label="Mã hàng hóa"
                          messages="Để trống = Mã hàng tự động"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                        <v-btn icon class="mt-2"
                          ><v-icon large>mdi-information-outline</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-row style="flex-wrap: nowrap;">
                      <v-col
                        style="max-width:100%"
                        cols="5"
                        class="flex-grow-1 flex-shink-0"
                      >
                        <v-text-field
                          label="Tên hàng"
                          outlined
                          value="Áo polo"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                        <v-btn icon class="mt-2"
                          ><v-icon large>mdi-information-outline</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-row style="flex-wrap: nowrap;">
                      <v-col
                        style="max-width:100%"
                        cols="5"
                        class="flex-grow-1 flex-shink-0"
                      >
                        <v-text-field
                          label="Nhóm hàng"
                          value="Áo thun"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                        <v-btn class="mt-2 pl-0 pr-0" width="36" icon
                          ><v-icon large>mdi-plus</v-icon></v-btn
                        >
                      </v-col>
                      <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                        <v-btn icon class="mt-2"
                          ><v-icon large>mdi-information-outline</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-row style="flex-wrap: nowrap;">
                      <v-col
                        style="max-width:100%"
                        cols="5"
                        class="flex-grow-1 flex-shink-0"
                      >
                        <v-text-field
                          label="Giá vốn"
                          value="200000"
                          type="number"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                        <v-btn icon class="mt-2"
                          ><v-icon large>mdi-information-outline</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-row style="flex-wrap: nowrap;">
                      <v-col
                        style="max-width:100%"
                        cols="5"
                        class="flex-grow-1 flex-shink-0"
                      >
                        <v-text-field
                          label="Giá bán"
                          outlined
                          value="300000"
                          type="number"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                      </v-col>
                    </v-row>
                    <v-row style="flex-wrap: nowrap;">
                      <v-col
                        style="max-width:100%"
                        cols="5"
                        class="flex-grow-1 flex-shink-0"
                      >
                        <v-text-field
                          label="Tồn kho"
                          outlined
                          value="50"
                          type="number"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                        <v-btn icon class="mt-2"
                          ><v-icon large>mdi-information-outline</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-row style="flex-wrap: nowrap;">
                      <v-col
                        style="max-width:100%"
                        cols="5"
                        class="flex-grow-1 flex-shink-0"
                      >
                        <v-text-field
                          label="Trọng lượng"
                          :value="110"
                          type="number"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                        <v-btn icon class="mt-2"
                          ><v-icon large>mdi-information-outline</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-row style="flex-wrap: nowrap;">
                      <v-col
                        style="max-width:100%"
                        cols="5"
                        class="flex-grow-1 flex-shink-0"
                      >
                        <v-text-field label="Vị trí" outlined></v-text-field>
                      </v-col>
                      <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                        <v-btn icon class="mt-2"
                          ><v-icon large>mdi-information-outline</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col md="6"></v-col>
                </v-row>
              </v-tab-item>

              <v-tab class="text-none">Mô tả chi tiết</v-tab>
              <v-tab-item>2</v-tab-item>

              <v-tab class="text-none">Thành phần</v-tab>
              <v-tab-item>3</v-tab-item>
            </v-tabs>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" text>
            <v-icon>mdi-content-save</v-icon>
            Lưu
          </v-btn>
          <v-btn color="green" text>
            <v-icon>mdi-content-save</v-icon>
            Lưu & Thêm mới
          </v-btn>
          <v-btn color="grey" text @click="showDialog = false">
            <v-icon>mdi-cancel</v-icon>
            Bỏ qua
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false
    };
  },
  methods: {
    DisplayDialog() {
      this.showDialog = true;
    },
    SayHello() {
      console.log("Hello");
    }
  }
};
</script>
