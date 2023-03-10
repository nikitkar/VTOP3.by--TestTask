const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd, // убираем все пробелы
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"],
  },
};
