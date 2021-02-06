<template>
  <v-container fluid>
    <add-user-dialog ref="addUserDialog" />
    <v-row>
      <v-col cols="3">
        <v-expansion-panels v-model="expansionPanels" multiple>
          <v-expansion-panel>
            <v-expansion-panel-header> Tìm kiếm </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field label="Theo mã, tên hàng"></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Chi nhánh </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field label="Chọn chi nhánh..."></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Vai trò </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field label="Chọn vai trò"></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Trạng thái
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-radio-group v-model="radioGroup">
                <v-radio label="Tất cả"></v-radio>
                <v-radio label="Đang hoạt động"></v-radio>
                <v-radio label="Ngừng hoạt động"></v-radio>
              </v-radio-group>
            </v-expansion-panel-content>
          </v-expansion-panel> </v-expansion-panels
      ></v-col>
      <v-col cols="9">
        <v-row class="d-flex flex-row">
          <v-col cols="1" class="flex-grow-1" style="max-width:100%">
            <h2>Người dùng</h2></v-col
          ><v-col
            cols="1"
            class="flex-grow-0 flex-shrink-1"
            style="min-width:260px"
          >
            <v-btn @click="ShowAddUserDialog"
              ><v-icon>mdi-plus</v-icon>Người dùng</v-btn
            >
            <v-btn
              ><v-icon>mdi-dots-grid</v-icon
              ><v-icon>mdi-menu-down</v-icon></v-btn
            ></v-col
          ></v-row
        ><v-row>
          <v-col>
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="desserts"
              :single-select="singleSelect"
              :single-expand="true"
              :expanded.sync="expanded"
              item-key="name"
              show-select
              show-expand
              class="elevation-1"
            >
              <template v-slot:top>
                <v-switch
                  v-model="singleSelect"
                  label="Single select"
                  class="pa-3"
                ></v-switch>
              </template>
              <template v-slot:expanded-item="{ headers }">
                <!-- <td :colspan="headers.length">
                  More info about {{ item.name }}
                </td> -->
                <td :colspan="headers.length">
                  <v-card>
                    <v-tabs v-model="tab" align-with-title>
                      <v-tab class="text-none">Thông tin</v-tab>
                      <v-tab-item>
                        <v-container fluid>
                          <v-row>
                            <v-col cols="4">
                              <v-text-field
                                disabled
                                label="Tên đăng nhập"
                                value="Suong"
                              ></v-text-field>
                              <v-text-field
                                disabled
                                label="Tên người dùng"
                                value="Nguyễn Sương"
                              ></v-text-field>
                              <v-text-field
                                disabled
                                label="Điện thoại"
                                value=""
                              ></v-text-field>
                              <v-menu
                                disabled
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="auto"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    v-model="date"
                                    label="Ngày sinh"
                                    append-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date"
                                  no-title
                                  scrollable
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="menu = false"
                                  >
                                    Cancel
                                  </v-btn>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(date)"
                                  >
                                    OK
                                  </v-btn>
                                </v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="4">
                              <v-text-field
                                disabled
                                label="Email"
                              ></v-text-field>
                              <v-text-field
                                disabled
                                label="Địa chỉ"
                              ></v-text-field>
                              <v-text-field
                                disabled
                                label="Khu vực"
                              ></v-text-field>
                              <v-text-field
                                disabled
                                label="Phường xã"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="4">
                              <v-textarea disabled label="Ghi chú"></v-textarea>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <v-checkbox
                                v-model="checkedbox"
                                disabled
                                label="Cho phép
                              xem thông tin chung trong các giao dịch"
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text>
                              <v-icon>mdi-content-save</v-icon>
                              Cập nhập
                            </v-btn>
                            <v-btn color="primary" text>
                              <v-icon>mdi-content-save</v-icon>
                              Sao chép
                            </v-btn>
                            <v-btn color="alert" text>
                              <v-icon>mdi-content-save</v-icon>
                              Ngừng hoạt động
                            </v-btn>

                            <v-btn color="alert" text>
                              <v-icon>mdi-cancel</v-icon>
                              Xóa người dùng
                            </v-btn>
                          </v-card-actions>
                        </v-container>
                      </v-tab-item>

                      <v-tab class="text-none">Phân quyền</v-tab>
                      <v-tab-item></v-tab-item>

                      <v-tab class="text-none">Thời gian truy cập</v-tab>
                      <v-tab-item></v-tab-item>
                    </v-tabs>
                  </v-card>
                </td>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddUserDialog from "@/components/users/AddUserDialog.vue";
export default {
  components: { AddUserDialog },
  name: "User-Management",
  methods: {
    ShowAddUserDialog() {
      this.$refs["addUserDialog"].DisplayDialog();
    }
  },
  data: () => ({
    checkedbox: true,
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
    tab: null,
    items: ["web", "shopping", "videos", "images", "news"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    expanded: [],
    singleSelect: false,
    selected: [],
    expansionPanels: [0, 1, 2, 3],
    radioGroup: 1,
    overlay: false,
    headers: [
      {
        text: "Tên đăng nhập",
        align: "start",
        sortable: false,
        value: "goodid"
      },
      { text: "Tên người dùng", value: "name" },
      { text: "Điện thoại", value: "sellingprice" },
      { text: "Trạng thái", value: "importfee" }
    ],
    desserts: [
      {
        name: "Nguyễn Sương",
        goodid: "Suong",
        sellingprice: "0122456789",
        importfee: "Đang hoạt động"
      },
      {
        name: "Lê Na",
        goodid: "Na",
        importfee: "Đang hoạt động"
      },
      {
        name: "Vũ Chi",
        goodid: "ChiDT",
        importfee: "Đang hoạt động"
      }
    ]
  })
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
