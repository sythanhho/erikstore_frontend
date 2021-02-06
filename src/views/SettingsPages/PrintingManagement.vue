<template>
  <v-card height="100%">
    <v-tabs v-model="tab" align-with-title>
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
              <v-btn @click="LogContent">Alo!</v-btn
              ><v-btn @click="exportToPDF">Download!</v-btn>
            </v-col>
            <v-col>
              <!-- <pdf-viewer /> -->
              <!-- <iframe :src="pdfFile" width="100%" height="100%" /> -->
              <pdf-viewer :source="pdfFile" />
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
// import VueHtml2pdf from "vue-html2pdf";
import html2pdf from "html2pdf.js";
import PdfViewer from "@/components/PdfViewer.vue";

export default {
  components: {
    Editor,
    PdfViewer
  },
  name: "Printing-Management",
  data() {
    return {
      pdfFile: null,
      tab: null,
      htmlToPdfOptions: {
        margin: 1,

        filename: `hehehe.pdf`,

        image: {
          type: "jpeg",
          quality: 0.98
        },

        enableLinks: false,

        html2canvas: {
          scale: 1,
          useCORS: true
        },

        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait"
        }
      },
      name: "@/assets/react.js",
      path: "lib/pdfjs-2.3.200-dist/web/viewer.html",
      editorContent: `<table style="border-collapse: collapse; width: 100%; border-style: none;" border="0">
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
    },
    async exportToPDF() {
      const pdfContent = this.editorContent;
      const options = {
        margin: 1,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
      };
      // let pdfBlobUrl = null;
      const html2PdfSetup = html2pdf()
        .set(options)
        .from(pdfContent);
      this.pdfFile = await html2PdfSetup.output("bloburl");
      // pdfBlobUrl = this.pdfFile;
      // html2pdf()
      //   .from(element)
      //   .set(opt)
      //   .toImg();
      // this.$refs.html2Pdf.generatePdf();
    }
  }
};
</script>
