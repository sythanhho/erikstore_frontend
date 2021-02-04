<template>
  <v-col md="2" lg="2">
    <div style="text-align:center">
      <v-icon :color="dcolor" x-large>{{ icon }}</v-icon>
    </div>
    <v-checkbox v-model="dchecked" color="green" @change="changeColor">
      <template v-slot:label>
        <div>
          {{ label }}
        </div>
      </template>
    </v-checkbox>
    <a href="#" ref="detail">Chi tiết</a>
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
        this.dcolor = "primary";
      } else {
        this.dcolor = "grey";
      }
    }
  }
};
</script>
