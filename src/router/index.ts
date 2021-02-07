import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Overview from "@/views/Overview.vue";
import Report from "@/views/Report.vue";
import ShopSettings from "@/views/SettingsPages/ShopSettings/ShopSettings.vue";
import PrintingManagement from "@/views/SettingsPages/PrintingManagement.vue";
import UserManagement from "@/views/SettingsPages/UserManagement.vue";
import BranchManagement from "@/views/SettingsPages/BranchManagement.vue";
import OtherExpenseManagement from "@/views/SettingsPages/OtherExpenseManagement.vue";
import ImportFeeManagement from "@/views/SettingsPages/ImportFeeManagement.vue";
import ActionHistory from "@/views/SettingsPages/ActionHistory.vue";
import MessageManagement from "@/views/SettingsPages/MessageManagement.vue";
import DiscountManagement from "@/views/SettingsPages/DiscountManagement.vue";
import DeleteSystemData from "@/views/SettingsPages/DeleteSystemData.vue";
import Categories from "@/views/GoodsPages/Categories.vue";
import PriceSettings from "@/views/GoodsPages/PriceSettings.vue";
import StockManagement from "@/views/GoodsPages/StockManagement.vue";
import Production from "@/views/GoodsPages/Production.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Trang-chu",
    component: Home
  },
  {
    path: "/overall",
    name: "Tongquan",
    component: Overview
  },
  {
    path: "/report",
    name: "Bao-cao",
    component: Report
  },
  {
    path: "/shop-settings",
    name: "Thiet-lap-cua-hang",
    component: ShopSettings
  },
  {
    path: "/printing-management",
    name: "Quan-ly-mau-in",
    component: PrintingManagement
  },
  {
    path: "/user-management",
    name: "Quan-ly-nguoi-dung",
    component: UserManagement
  },
  {
    path: "/branch-management",
    name: "Quan-ly-chi-nhanh",
    component: BranchManagement
  },
  {
    path: "/other-expense-management",
    name: "Quan-ly-thu-khac",
    component: OtherExpenseManagement
  },
  {
    path: "/import-fee-management",
    name: "Quan-ly-chi-phi-nhap-hang",
    component: ImportFeeManagement
  },
  {
    path: "/action-history",
    name: "Lich-su-thao-tac",
    component: ActionHistory
  },
  {
    path: "/message-management",
    name: "Quan-ly-mau-tin",
    component: MessageManagement
  },
  {
    path: "/discount-management",
    name: "Quan-ly-khuyen-mai",
    component: DiscountManagement
  },
  {
    path: "/delete-system-data",
    name: "Xoa-du-lieu-he-thong",
    component: DeleteSystemData
  },
  {
    path: "/categories",
    name: "Danh-muc-hang-hoa",
    component: Categories
  },
  {
    path: "/price-settings",
    name: "Thiet-lap-gia",
    component: PriceSettings
  },
  {
    path: "/stock-management",
    name: "Kiem-kho",
    component: StockManagement
  },
  {
    path: "/production",
    name: "San-xuat",
    component: Production
  }
];

const router = new VueRouter({
  mode: "history",
  base: "",
  routes
});

export default router;
