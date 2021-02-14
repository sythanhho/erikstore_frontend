import Vue from "vue";
import VueI18n from "vue-i18n";

import fr from "./locales/fr.json";
import en from ".//locales/en.json";
import vi from ".//locales/vi.json";

Vue.use(VueI18n);

const messages = {
  ["en"]: en,
  ["fr"]: fr,
  ["vi"]: vi
};

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: messages
});
