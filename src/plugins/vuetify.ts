import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#6200ee",
        secondary: "#03dac5",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        btn: "#fff",
        card: "#fff",
        mtext: "#000",
        appbg: "f5f6fa"
      },
      dark: {
        primary: "#03dac5",
        card: "272727",
        mtext: "#fff",
        text: "#03dac5",
        appbg: "#03dac5"
      }
    },
    options: { customProperties: true }
  }
});
