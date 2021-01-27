<template>
  <v-form>
    <v-container>
      <v-row>
        <feature-check
          v-for="feature in featureRow1"
          :key="feature.label"
          :label="feature.label"
          :icon="feature.icon"
          :checked="feature.defaultValue"
          :color="feature.defaultColor"
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
        />
      </v-row>
      <v-row>
        <feature-check />
        <feature-check />
        <feature-check />
        <feature-check />
        <feature-check />
      </v-row>
      <v-row>
        <feature-check />
        <feature-check />
        <feature-check />
        <feature-check />
        <feature-check />
      </v-row>
      <v-row>
        <feature-check />
        <feature-check />
        <feature-check />
        <feature-check />
        <feature-check />
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
        defaultColor: "primary"
      },
      {
        label: "Sản phẩm có thuộc tính",
        icon: "mdi-puzzle",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Sản phẩm có đơn vị tính",
        icon: "mdi-arrow-expand-all",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Quản lý tồn kho theo mã ma ý (Serial/IMEI)",
        icon: "mdi-cube",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Tính năng sản xuất hàng hóa",
        icon: "mdi-cog",
        defaultValue: true,
        defaultColor: "primary"
      }
    ],
    featureRow2: [
      {
        label: "Hàng hóa theo lô, hạn sử dụng",
        icon: "mdi-calendar-range",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Tính năng giao hàng",
        icon: "mdi-truck-delivery",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Sử dụng cân điện tử",
        icon: "mdi-scale",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Tính năng đặt hàng",
        icon: "mdi-store",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Cho phép đặt hàng khi hết tồn kho",
        icon: "mdi-alert",
        defaultValue: true,
        defaultColor: "primary"
      }
    ],
    featureRow3: [
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      }
    ],
    featureRow4: [
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      }
    ],
    featureRow5: [
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      },
      {
        label: "Giá vốn trung bình",
        icon: "mdi-tag-multiple",
        defaultValue: true,
        defaultColor: "primary"
      }
    ]
  })
};
</script>
