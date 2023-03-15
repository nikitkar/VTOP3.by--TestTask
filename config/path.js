const pathSrc = "./src";
const pathDest = "./public";

export default {
  root: pathDest,

  html: {
    src: pathSrc + "/*.html",
    watch: pathSrc + "/**/*.html",
    dest: pathDest,
  },

  js: {
    src: pathSrc + "/assets/scripts/*.js",
    watch: pathSrc + "/assets/scripts/**/*.js",
    dest: pathDest + "/scripts",
  },

  scss: {
    src: pathSrc + "/assets/scss/*.scss",
    watch: pathSrc + "/assets/scss/**/*.scss",
    dest: pathDest + "/styles",
  },

  images: {
    src: pathSrc + "/assets/images/**/*.{png,jpg,jpeg,svg}",
    watch: pathSrc + "/assets/images/**/*.{png,jpg,jpeg,svg}",
    dest: pathDest + "/assets/images",
  },

  fonts: {
    src: pathSrc + "/assets/fonts/**/*.{eot,ttf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/assets/fonts/**/*.{eot,ttf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/assets/fonts",
  },
};
