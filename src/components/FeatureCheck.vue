<template>
  <v-col cols="10" md="2">
    <v-icon :color="dcolor">{{ icon }}</v-icon
    ><v-checkbox
      v-model="dchecked"
      :label="label"
      color="green"
      @change="changeColor"
    ></v-checkbox>
    <a href="#" ref="detail">Chi tiết</a>
  </v-col>
</template>

<script>
export default {
  props: ["label", "icon", "checked", "color", "detail"],
  // eslint-disable-next-line prettier/prettier
  data: function () {
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
        this.dcolor = "primary";
      } else {
        this.dcolor = "grey";
      }
    }
  }
};
</script>
