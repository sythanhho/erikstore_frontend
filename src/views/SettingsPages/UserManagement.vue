<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
              ></v-img>

              <v-card-text>
                <h2 class="title primary--text">
                  Magento Forests
                </h2>
                Travel to the best outdoor experience on planet Earth. A
                vacation you will never forget!
              </v-card-text>

              <v-card-title>
                <v-rating
                  :value="4"
                  dense
                  color="orange"
                  background-color="orange"
                  hover
                  class="mr-2"
                ></v-rating>
                <span class="primary--text subtitle-2">64 Reviews</span>
              </v-card-title>

              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  $14.99
                </div>
              </v-expand-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  $14.99
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative;">
              <v-btn
                absolute
                color="orange"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text title mb-2">
                For the perfect meal
              </div>
              <h3 class="display-1 font-weight-light orange--text mb-2">
                QW cooking utensils
              </h3>
              <div class="font-weight-light title mb-2">
                Our Vintage kitchen utensils delight any chef.<br />
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "User-Management",
  data: () => ({
    overlay: false
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
