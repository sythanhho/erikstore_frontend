<template>
  <v-container
    style="height:100%"
    class="d-flex flex-column elevation-5 rounded-lg"
  >
    <v-row
      style="background-color:green;max-height:100%"
      class="flex-grow-1 d-flex flex-row ma-0"
    >
      <v-col cols="12" sm="6" md="4" class="pa-0">
        <v-btn
          depressed
          width="100%"
          height="100%"
          tile
          to="/overall"
          color="btn"
          ><v-container class="d-flex flex-column align-center">
            <v-row class="mb-0">
              <v-img
                src="@/assets/eye.png"
                max-height="150px"
                max-width="210px"
              ></v-img>
            </v-row>
            <v-row>
              <h1 class="text-h4 text-uppercase font-weight-medium">
                Tổng quan
              </h1>
            </v-row></v-container
          ></v-btn
        >
      </v-col>
      <v-col cols="12" sm="6" md="4" class="pa-0">
        <v-hover style="width:100%;height:100%">
          <template v-slot:default="{ hover }" style="width:100%;height:100%">
            <v-card
              flat
              width="100%"
              height="100%"
              tile
              class="pa-0"
              color="card"
            >
              <v-container
                class="d-flex flex-column align-center justify-center"
                fluid
                style="width:100%;height:100%"
              >
                <v-row style="height:200px" dense>
                  <v-col align-self="end">
                    <v-img
                      src="@/assets/good.png"
                      max-height="200px"
                      max-width="200px"
                    ></v-img> </v-col
                ></v-row>

                <v-row class="flex-grow-1" style="height:169">
                  <v-col>
                    <h1 class="text-h4 text-uppercase font-weight-medium">
                      Hàng hóa
                    </h1>
                  </v-col>
                </v-row></v-container
              >

              <v-fade-transition style="width:100%;height:100%">
                <v-overlay
                  v-if="hover"
                  absolute
                  style="width:100%;height:100%"
                  class="my-overlay"
                  color="teal"
                  opacity=".9"
                  dark
                >
                  <div
                    class="d-flex flex-column"
                    style="width:100%;height:100%"
                  >
                    <v-btn
                      depressed
                      text
                      tile
                      style="height:25%;width:100%"
                      class="flex=grow-1 text-h4"
                      to="/categories"
                      ><div style="color:mtext">
                        <v-icon x-large>mdi-dots-grid</v-icon>Danh mục
                      </div></v-btn
                    ><v-btn
                      depressed
                      text
                      tile
                      style="height:25%;width:100%"
                      class="flex=grow-1 text-h4"
                      ><v-icon x-large>mdi-tag-multiple</v-icon>Thiết lập
                      giá</v-btn
                    ><v-btn
                      depressed
                      text
                      tile
                      style="height:25%;width:100%"
                      class="flex=grow-1 text-h4"
                      ><v-icon x-large>mdi-checkbox-marked</v-icon>Kiểm
                      kho</v-btn
                    ><v-btn
                      depressed
                      text
                      tile
                      style="height:25%;width:100%"
                      class="flex=grow-1 text-h4"
                      ><v-icon x-large>mdi-cog</v-icon>Sản xuất</v-btn
                    >
                  </div>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="pa-0"
        ><v-btn
          depressed
          width="100%"
          height="100%"
          tile
          to="/overall"
          color="btn"
          ><v-container class="d-flex flex-column align-center">
            <v-row class="mb-0">
              <v-img
                src="@/assets/transaction2.png"
                max-height="200px"
                max-width="200px"
              ></v-img>
            </v-row>
            <v-row>
              <h1 class="text-h4 text-uppercase font-weight-medium">
                Giao dịch
              </h1>
            </v-row></v-container
          ></v-btn
        ></v-col
      >
      <!-- </v-row>
    <v-row
      style="background-color:blue;max-height:100%"
      class="flex-grow-1 d-flex flex-row ma-0"
      > -->
      <v-col cols="12" sm="6" md="4" class="pa-0"
        ><v-btn
          depressed
          width="100%"
          height="100%"
          tile
          to="/overall"
          color="btn"
          ><v-container class="d-flex flex-column align-center">
            <v-row class="mb-0">
              <v-img
                src="@/assets/partner2.png"
                max-height="200px"
                max-width="200px"
              ></v-img>
            </v-row>
            <v-row>
              <h1 class="text-h4 text-uppercase font-weight-medium">Đối tác</h1>
            </v-row></v-container
          ></v-btn
        ></v-col
      >
      <v-col cols="12" sm="6" md="4" class="pa-0"
        ><v-btn
          depressed
          width="100%"
          height="100%"
          tile
          to="/overall"
          color="btn"
          ><v-container class="d-flex flex-column align-center">
            <v-row class="mb-0">
              <v-img
                src="@/assets/moneybag.png"
                max-height="200px"
                max-width="200px"
              ></v-img>
            </v-row>
            <v-row>
              <h1 class="text-h4 text-uppercase font-weight-medium">Sổ quỹ</h1>
            </v-row></v-container
          ></v-btn
        ></v-col
      >
      <v-col cols="12" sm="6" md="4" class="pa-0"
        ><v-btn
          depressed
          width="100%"
          height="100%"
          tile
          to="/overall"
          color="btn"
          ><v-container class="d-flex flex-column align-center">
            <v-row class="mb-0">
              <v-img
                src="@/assets/report.png"
                max-height="200px"
                max-width="200px"
              ></v-img>
            </v-row>
            <v-row>
              <h1 class="text-h4 text-uppercase font-weight-medium">Báo cáo</h1>
            </v-row></v-container
          ></v-btn
        ></v-col
      ></v-row
    >
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.my-overlay >>> .v-overlay__content {
  width: 100%;
  height: 100%;
}
</style>
