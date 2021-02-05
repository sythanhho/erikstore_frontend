<template>
  <v-col md="2" class="flex-grow-1" style="max-width:100%">
    <div style="text-align:center">
      <v-icon :color="dcolor" x-large>{{ icon }}</v-icon>
    </div>
    <v-row class="d-flex flex-row align-start ma-0">
      <v-col cols="1" style="min-width:30px" class="pa-0" align-self="start">
        <v-checkbox
          v-model="dchecked"
          color="#6200ee"
          @change="changeColor"
          class="pa-0 ma-0"
        >
        </v-checkbox>
      </v-col>
      <v-col cols="1" style="max-width:100%" class="flex-grow-1 pa-0">
        <div>
          {{ label }}
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex flex-row" justify="center">
      <v-col>
        <a
          href="#"
          ref="detail"
          style="color:#6200ee;text-decoration:none;text-align:center"
          >Chi tiết</a
        ></v-col
      ></v-row
    >
  </v-col>
</template>

<script>
export default {
  props: ["label", "icon", "checked", "color", "detail"],
  // eslint-disable-next-line prettier/prettier
  data: function() {
    return {
      // eslint-disable-next-line no-unused-labels
      dchecked: this.checked,
      dcolor: this.color
    };
  },
  mounted: function() {
    if (this.detail) {
      this.$refs.detail.style.display = "block";
    } else {
      this.$refs.detail.style.display = "none";
    }
  },
  methods: {
    changeColor(evt) {
      if (evt) {
        this.dcolor = "#6200ee";
      } else {
        this.dcolor = "grey";
      }
    }
  }
};
</script>
