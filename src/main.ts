import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";
import vuetify from "./plugins/vuetify";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
