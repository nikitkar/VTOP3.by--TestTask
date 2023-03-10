import gulp from "gulp";

import { html } from "./task/html.js";
import { clear } from "./task/clear.js";
import { scss } from "./task/scss.js";
import { images } from "./task/images.js";
import { fonts } from "./task/fonts.js";

import app from "./config/app.js";
import path from "./config/path.js";

const watcher = () => {
  gulp.watch(path.html.watch, html);
  gulp.watch(path.scss.watch, scss);
  gulp.watch(path.images.watch, images);
  gulp.watch(path.fonts.watch, fonts);
};

const build = gulp.series(clear, gulp.parallel(html, scss, images, fonts));
const dev = gulp.series(build, watcher);

gulp.task("default", app.isProd ? build : dev);
