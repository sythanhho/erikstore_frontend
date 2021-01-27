<template>
  <v-col cols="10" md="2">
    <v-icon :color="dcolor">{{ icon }}</v-icon
    ><v-checkbox
      v-model="dchecked"
      :label="label"
      @change="changeColor"
    ></v-checkbox>
  </v-col>
</template>

<script>
export default {
  props: ["label", "icon", "checked", "color"],
  // eslint-disable-next-line prettier/prettier
  data: function () {
    return {
      // eslint-disable-next-line no-unused-labels
      dchecked: this.checked,
      dcolor: this.color
    };
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
