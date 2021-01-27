<template>
  <v-card>
    <v-tabs v-model="tab" align-with-title>
      <v-tab>Thiết lập cửa hàng</v-tab>
      <v-tab-item><shop-info /></v-tab-item>

      <v-tab>Thiết lập tính năng</v-tab>
      <v-tab-item><feature-settings /></v-tab-item>

      <v-tab>Thiết lập kết nối API</v-tab>
      <v-tab-item><shop-info /></v-tab-item>

      <v-tab>Tích hợp sàn giao dịch</v-tab>
      <v-tab-item><shop-info /></v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import ShopInfo from "./ShopInfo.vue";
import FeatureSettings from "./FeatureSettings.vue";
export default {
  name: "Shop-Settings",
  components: { ShopInfo, FeatureSettings },
  data() {
    return { tab: null };
  }
};
</script>
