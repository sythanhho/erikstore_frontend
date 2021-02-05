<template>
  <v-form>
    <v-container fluid>
      <v-row class="d-flex flex-row">
        <feature-check
          v-for="feature in featureRow1"
          :key="feature.label"
          :label="feature.label"
          :icon="feature.icon"
          :checked="feature.defaultValue"
          :color="feature.defaultColor"
          :detail="feature.detail"
        />
      </v-row>
      <v-row>
        <feature-check
          v-for="feature in featureRow2"
          :key="feature.label"
          :label="feature.label"
          :icon="feature.icon"
          :checked="feature.defaultValue"
          :color="feature.defaultColor"
          :detail="feature.detail"
        />
      </v-row>
      <v-row>
        <feature-check
          v-for="feature in featureRow3"
          :key="feature.label"
          :label="feature.label"
          :icon="feature.icon"
          :checked="feature.defaultValue"
          :color="feature.defaultColor"
          :detail="feature.detail"
        />
      </v-row>
      <v-row>
        <feature-check
          v-for="feature in featureRow4"
          :key="feature.label"
          :label="feature.label"
          :icon="feature.icon"
          :checked="feature.defaultValue"
          :color="feature.defaultColor"
          :detail="feature.detail"
        />
      </v-row>
      <v-row>
        <feature-check
          v-for="feature in featureRow5"
          :key="feature.label"
          :label="feature.label"
          :icon="feature.icon"
          :checked="feature.defaultValue"
          :color="feature.defaultColor"
          :detail="feature.detail"
        />
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import FeatureCheck from "@/components/FeatureCheck.vue";

export default {
  components: { FeatureCheck },
  data: () => ({
    featureRow1: [
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      },
      {
        label: "Sản phẩm có thuộc tính",
        icon: "mdi-puzzle",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      },
      {
        label: "Sản phẩm có đơn vị tính",
        icon: "mdi-arrow-expand-all",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      },
      {
        label: "Quản lý tồn kho theo mã ma ý (Serial/IMEI)",
        icon: "mdi-cube",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      },
      {
        label: "Tính năng sản xuất hàng hóa",
        icon: "mdi-cog",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      }
    ],
    featureRow2: [
      {
        label: "Hàng hóa theo lô, hạn sử dụng",
        icon: "mdi-calendar-range",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      },
      {
        label: "Tính năng giao hàng",
        icon: "mdi-truck-delivery",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: true
      },
      {
        label: "Sử dụng cân điện tử",
        icon: "mdi-scale",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: true
      },
      {
        label: "Tính năng đặt hàng",
        icon: "mdi-store",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      },
      {
        label: "Cho phép đặt hàng khi hết tồn kho",
        icon: "mdi-alert",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      }
    ],
    featureRow3: [
      {
        label:
          "Bán hàng, Chuyển hàng, Trả hàng nhập, Sản xuất, Xuất hủy khi hết tồn kho",
        icon: "mdi-folder-alert",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      },
      {
        label: "Tính năng thu khác khi bán hàng",
        icon: "mdi-cart-plus",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      },
      {
        label: "Bán hàng, Chuyển hàng khi sản phẩm đã được Đặt hàng",
        icon: "mdi-bag-suitcase",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      },
      {
        label: "Không cho phép thay đổi thời gian giao dịch",
        icon: "mdi-clock-time-nine",
        defaultValue: false,
        defaultColor: "grey",
        detail: false
      },
      {
        label: "Hiển thị tổng số lượng hàng hóa trên chứng từ",
        icon: "mdi-file-document",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      }
    ],
    featureRow4: [
      {
        label: "Không cho phép in báo giá khi bán hàng",
        icon: "mdi-printer",
        defaultValue: false,
        defaultColor: "grey",
        detail: false
      },
      {
        label: "Tính năng tích điểm",
        icon: "mdi-star-circle",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: true
      },
      {
        label: "Tính năng gửi SMS - Email - Tin nhắn Zalo",
        icon: "mdi-send",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: true
      },
      {
        label: "Giới hạn thời gian trả hàng",
        icon: "mdi-credit-card-clock",
        defaultValue: false,
        defaultColor: "grey",
        detail: false
      },
      {
        label: "Tính năng khóa sổ",
        icon: "mdi-folder-lock",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: true
      }
    ],
    featureRow5: [
      {
        label: "Quản lý khách hàng theo chi nhánh",
        icon: "mdi-map-marker",
        defaultValue: false,
        defaultColor: "grey",
        detail: false
      },
      {
        label: "Sử dụng tính năng khuyến mại",
        icon: "mdi-gift",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: true
      },
      {
        label: "Tích hợp bán hàng qua các kênh mạng xã hội",
        icon: "mdi-account-group",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: true
      },
      {
        label: "Hỗ trợ các khoản chi phí nhập hàng",
        icon: "mdi-handshake",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: false
      },
      {
        label: "Tính năng voucher",
        icon: "mdi-ticket-percent",
        defaultValue: true,
        defaultColor: "#6200ee",
        detail: true
      }
    ]
  })
};
</script>
