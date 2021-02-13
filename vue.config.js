module.exports = {
  runtimeCompiler: false,
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Erik Store";
      return args;
    });
  },
  publicPath: process.env.NODE_ENV === "production" ? "" : "",
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "fr",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};
