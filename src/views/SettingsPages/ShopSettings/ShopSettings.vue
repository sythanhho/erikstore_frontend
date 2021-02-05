<template>
  <v-card>
    <v-tabs v-model="tab" align-with-title light color="#6200ee">
      <v-tab class="text-none">Thiết lập cửa hàng</v-tab>
      <v-tab-item><shop-info /></v-tab-item>

      <v-tab class="text-none">Thiết lập tính năng</v-tab>
      <v-tab-item><feature-settings /></v-tab-item>

      <v-tab class="text-none">Thiết lập kết nối API</v-tab>
      <v-tab-item><shop-info /></v-tab-item>

      <v-tab class="text-none">Tích hợp sàn giao dịch</v-tab>
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
    return { tab: null, length: 15 };
  }
};
</script>
