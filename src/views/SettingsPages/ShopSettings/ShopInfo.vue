<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <v-text-field
            label="Địa chỉ truy cập"
            value="https://hangbai.erikstore.com"
            :readonly="true"
          ></v-text-field>
          <v-text-field
            label="Hạn sử dụng"
            value="30-12-2045 16:45"
            :readonly="true"
          ></v-text-field>
          <v-text-field label="Tên cửa hàng" value="Tạp Hóa"></v-text-field>
          <v-text-field
            label="Địa chỉ"
            value="434 Trần Khát Chân"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="5">
          <v-text-field
            label="Khu vực"
            value="Phú Yên - Thành phố Tuy Hòa"
          ></v-text-field>
          <v-text-field label="Phường xã" value="Phường 1"></v-text-field>
          <v-text-field label="Điện thoại" value="18006162"></v-text-field>
          <v-select :items="items" label="Ngôn ngữ"></v-select>
        </v-col>

        <v-col cols="12" md="2">
          <v-img src="@/assets/logo.png" width="100" class="shrink mr-2" />
          <v-btn elevation="2" small>Chọn ảnh</v-btn>
          <p>Lưu ý: Ảnh không vượt quá 2MB</p>
          <v-btn class="mr-4"><v-icon>mdi-content-save</v-icon> Lưu </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      // eslint-disable-next-line prettier/prettier
      (v) => !!v || "Name is required",
      // eslint-disable-next-line prettier/prettier
      (v) => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      // eslint-disable-next-line prettier/prettier
      (v) => !!v || "E-mail is required",
      // eslint-disable-next-line prettier/prettier
      (v) => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    items: ["Tiếng Việt", "Tiếng Anh"]
  })
};
</script>
