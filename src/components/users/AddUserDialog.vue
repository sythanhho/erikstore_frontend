<template>
  <v-dialog v-model="showDialog">
    <v-card>
      <v-container fluid class="pa-8">
        <v-row>
          <v-col>
            <v-card-title class="headline lighten-2 pa-0">
              Thêm người dùng
            </v-card-title> </v-col
          ><v-spacer />
          <v-btn icon @click="showDialog = false"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field label="Tên người dùng" outlined></v-text-field>
            <v-text-field label="Tên đăng nhập" outlined></v-text-field>
            <v-text-field label="Mật khẩu" outlined></v-text-field>
            <v-text-field label="Gõ lại mật khẩu" outlined></v-text-field>
            <v-select label="Vai trò" placeholder="---Lựa chọn---" outlined>
            </v-select>
            <v-text-field label="Chi nhánh" outlined></v-text-field>
            <v-text-field label="Điện thoại" outlined></v-text-field>
          </v-col>
          <v-col cols="6"
            ><v-text-field label="Email" outlined></v-text-field>
            <v-text-field label="Địa chỉ" outlined></v-text-field>
            <v-text-field label="Khu vực" outlined></v-text-field>
            <v-text-field label="Phường xã" outlined></v-text-field>
            <v-menu
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
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
            <v-select label="Ngôn ngữ" outlined></v-select>
            <v-textarea label="Ghi chú" outlined></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>
              <v-checkbox
                label="Không xem giao dịch của nhân viên khác"
              ></v-checkbox>
            </div>
            <div>
              <v-checkbox
                label="Cho phép xem thông tin chung trong các giao dịch"
              ></v-checkbox></div></v-col
        ></v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" text>
            <v-icon>mdi-content-save</v-icon>
            Lưu
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
      showDialog: false,
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false
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
