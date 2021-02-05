<template>
  <v-card height="100%">
    <v-tabs v-model="tab" align-with-title light color="#6200ee">
      <div class="d-flex justify-center align-center" style="width:100px">
        <h2>Mẫu in</h2>
      </div>
      <v-tab class="text-none">Đặt hàng</v-tab>
      <v-tab-item>
        <v-container fluid>
          <v-row>
            <v-col cols="6">
              <editor
                v-model="editorContent"
                api-key="b04yloipyfvnqr02r5bkmzm7b12jhkrugu22krt6j02xhpiy"
                :init="{
                  height: 600,
                  menubar: true,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
                }"
              />
              <v-btn @click="LogContent">Alo!</v-btn>
            </v-col>
            <v-col>
              <pdf-viewer />
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab class="text-none">Hóa đơn</v-tab>
      <v-tab-item></v-tab-item>

      <v-tab class="text-none">Trả hàng</v-tab>
      <v-tab-item></v-tab-item>

      <v-tab class="text-none">Đổi trả hàng</v-tab>
      <v-tab-item></v-tab-item>

      <v-tab class="text-none">Nhập hàng</v-tab>
      <v-tab-item></v-tab-item>

      <v-tab class="text-none">Trả hàng nhập</v-tab>
      <v-tab-item></v-tab-item>

      <v-tab class="text-none">Chuyển hàng</v-tab>
      <v-tab-item></v-tab-item>

      <v-tab class="text-none">Phiếu thu</v-tab>
      <v-tab-item></v-tab-item>

      <v-tab class="text-none">Phiếu chi</v-tab>
      <v-tab-item></v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

import PdfViewer from "@/components/PdfViewer.vue";

export default {
  components: {
    Editor,
    PdfViewer
  },
  name: "Printing-Management",
  data() {
    return {
      tab: null,
      name: "@/assets/react.js",
      path: "lib/pdfjs-2.3.200-dist/web/viewer.html",
      editorContent: `<table style="border-collapse: collapse; width: 100%; border-style: none;" border="1">
<tbody>
<tr>
<td style="width: 97.0695%;">T&ecirc;n cửa h&agrave;ng</td>
</tr>
<tr>
<td style="width: 97.0695%;">Chi nh&aacute;nh: {Chi_Nhanh_Ban_Hang}</td>
</tr>
<tr>
<td style="width: 97.0695%;">Điện thoại: 1800 6162</td>
</tr>
</tbody>
</table>
<p>-------------------------------------------------------------------------------------------------------------</p>
<p>Ng&agrave;y b&aacute;n: {Ngay_Thang_Nam}</p>
<p style="text-align: center;">H&Oacute;A ĐƠN B&Aacute;N H&Agrave;NG</p>
<p style="text-align: center;">{Ma_Don_Hang}</p>
<p style="text-align: left;"><strong>Kh&aacute;ch h&agrave;ng:</strong> {Khach_Hang}</p>
<p style="text-align: left;">Địa chỉ: {Dia_Chi_Khach_Hang}</p>
<p style="text-align: left;">Khu vực: {Khu_Vuc_Khach_Hang}</p>
<p style="text-align: left;">Điện thoại: {So_Dien_Thoai}</p>
<p style="text-align: left;"><strong>Người b&aacute;n:</strong> {Nhan_Vien_Ban_Hang}</p>`
    };
  },
  methods: {
    LogContent() {
      console.log(this.editorContent);
    }
  }
};
</script>
